<?php


namespace App\Services;


use App\Events\ProveEvent;
use App\Models\Client;
use App\Models\Documento;
use App\Models\Fattura;
use App\Models\Informazione;
use App\Models\Listino;
use App\Models\Marketing;
use App\Models\Product;
use App\Models\ProductProva;
use App\Models\Prova;
use App\Models\Ratefattura;
use App\Models\Ruolo;
use App\Models\StatoApa;
use App\Models\Tipologia;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use function broadcast;
use function compact;
use function trim;
use function view;
use Storage;

class ProvaService
{
    public function lista()
    {
        return Ruolo::where('nome', '!=', 'admin')->orderBy('nome')->get();
    }

    private function controlloAppuntamentiInSospesoEAggiornamento($appuntamenti){
        foreach($appuntamenti as $appuntmento){
            $appuntmento->intervenuto = true;
            $appuntmento->save();
        }
    }

    public function nuova($request)
    {
        $idMktMedico = Marketing::where('name', 'MEDICO')->first()->id;
        $client = Client::with('tipologia', 'appuntamentisospesi')->find($request->client_id);
        $this->controlloAppuntamentiInSospesoEAggiornamento($client->appuntamentisospesi);

        if ($request->marketing_id === $idMktMedico){
            $client->medico_id = $request->medico_id;
            $client->marketing_id = $request->marketing_id;
            $client->save();
        }
        return Prova::create([
            'user_id' => $request->user_id,
            'client_id' => $request->client_id,
            'marketing_id' => $request->marketing_id,
            'filiale_id' => $request->filiale_id,
            'stato_id' => 7,
            'inizio_prova' => Carbon::now()->format('Y-m-d'),
            'mese_inizio' => Carbon::now()->month,
            'anno_inizio' => Carbon::now()->year,
            'tipologia' => $client->tipologia->nome == 'CL' ? 'Riacquisto' : 'Nuovo',
        ]);
    }

    public function addEle($request)
    {
        if($request->tipologia === 'Servizi'){
            $prodottoServizio = new Product();
            $prodottoServizio->matricola = null;
            $prodottoServizio->stato_id = 3;
            $prodottoServizio->filiale_id = Prova::find($request->prova_id)->filiale_id;;
            $prodottoServizio->listino_id = $request->product_id;
            $prodottoServizio->fornitore_id = Listino::find($request->product_id)->fornitore_id;
            $prodottoServizio->user_id = Prova::find($request->prova_id)->user_id;
            $prodottoServizio->client_id = Prova::find($request->prova_id)->client_id;
            $prodottoServizio->save();
        };

        return ProductProva::create([
            'prova_id' => $request->prova_id,
            'product_id' => $request->tipologia === 'Servizi' ? $prodottoServizio->id : $request->product_id,
            'orecchio' => $request->orecchio,
            'prezzo' => $request->prezzo,
            'prezzo_formattato' => '€ '.number_format( (float) $request->prezzo, '0', ',', '.'),
        ]);

    }

    public function eliminaProdotto($id)
    {
        return ProductProva::find($id)->delete();
    }

    public function salvaProva($request)
    {
        $prova = Prova::find($request->id);
        $prova->stato_id = 3;
        $prova->giorni_prova = 0;
        $prova->tot = $request->tot;
        $prova->save();

        $oggi = Carbon::now();
        $giorno = $oggi->day;
        $mese = $oggi->month;
        $anno = $oggi->year;

        $filename = 'CopiaComm'.$giorno.$mese.$anno.'.pdf';
        Documento::create([
            'client_id' => $prova->client->id,
            'prova_id' => $prova->id,
            'tipo' => 'copiaComm',
            'link' => '/storage/documenti/'.$prova->client->id.'/'.$filename,
        ]);

        $filenameInformativa = 'Informativa'.$giorno.$mese.$anno.'.pdf';
        Documento::create([
            'client_id' => $prova->client->id,
            'prova_id' => $prova->id,
            'tipo' => 'informativa',
            'link' => '/storage/documenti/'.$prova->client->id.'/'.$filenameInformativa,
        ]);

        Informazione::create([
            'client_id' => $prova->client_id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'PROVA',
            'note' => 'Aperta Prova per € '.number_format( (float) $prova->tot, '0', ',', '.')
        ]);

        $provaSalvata = Prova::with('stato', 'user', 'product', 'client', 'copiaComm', 'marketing')->find($request->id);

        if (!$provaSalvata->client->marketing_id) {
            $provaSalvata->client->marketing_id = $provaSalvata->marketing_id;
            $provaSalvata->push();
        }

        $pdf = App::make('dompdf.wrapper');
        if (!Storage::disk('public')->exists('/documenti/'.$provaSalvata->client->id.'/')) {
            Storage::makeDirectory('/documenti/'.$provaSalvata->client->id.'/');
        }
        $pdf->loadHTML(view('pdf.copiaComm', compact('provaSalvata')))
            ->save("storage/documenti/".$provaSalvata->client->id.'/'.$filename);

        $pdf2 = App::make('dompdf.wrapper');
        $pdf2->loadHTML(view('pdf.informativa', compact('provaSalvata')))
            ->save("storage/documenti/".$provaSalvata->client->id.'/'.$filenameInformativa);

        broadcast(new ProveEvent($provaSalvata))->toOthers();

        $propieta = 'prova';
        $log = new LoggingService($request);
        $testo = $provaSalvata->user->name.' ha aperto una prova per il paziente '.$provaSalvata->client->cognome.' '.$provaSalvata->client->nome;
        $log->scriviLog($provaSalvata->client->cognome.' '.$provaSalvata->client->nome, $provaSalvata->user, $provaSalvata->user->name, $propieta, $testo);

        return $provaSalvata;
    }

    public function reso($idProva, $request)
    {
        $prova = Prova::with(['product', 'stato', 'user', 'client' => function($c){
            $c->with('appuntamentisospesi');
        }])->find($idProva);

        $this->controlloAppuntamentiInSospesoEAggiornamento($prova->client->appuntamentisospesi);

        foreach ($prova->product as $item){
            $item->stato_id = 5;
            $item->save();
        }
        $prova->stato_id = 2;
        $prova->fine_prova = Carbon::now()->format('Y-m-d');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->save();

        Informazione::create([
            'client_id' => $prova->client_id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'RESO',
            'note' => 'Reso prova di € '.number_format( (float) $prova->tot, '0', ',', '.')
        ]);

        $provaSalvata = Prova::with('product', 'stato', 'user', 'client', 'copiaComm')->find($idProva);
        broadcast(new ProveEvent($provaSalvata))->toOthers();

        $propieta = 'prova';
        $log = new LoggingService($request);
        $testo = $prova->user->name.' ha reso la prova per il paziente '.$prova->client->cognome.' '.$prova->client->nome;
        $log->scriviLog($provaSalvata->client->cognome.' '.$provaSalvata->client->nome, $prova->user, $prova->user->name, $propieta, $testo);

        return $provaSalvata;
    }

    public function salvaFattura($request)
    {
        $prova = Prova::with('product')->find($request->id);
        $idStatoFattura = StatoApa::where('nome', 'FATTURA')->first()->id;
        $prova->stato_id = $idStatoFattura;
        $prova->tot = $request->totFatturaReale;
        $prova->fine_prova = Carbon::now()->format('Y-m-d');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->giorni_prova = Carbon::now()->DiffInDays($prova->created_at);
        $prova->save();

        $client = Client::with('appuntamentisospesi')->find($prova->client_id);
        $idCliente = Tipologia::where('nome', 'CL')->first()->id;
        $client->tipologia_id = $idCliente;
        $client->save();

        $this->controlloAppuntamentiInSospesoEAggiornamento($client->appuntamentisospesi);

        $fattura = Fattura::create([
            'prova_id' => $prova->id,
            'user_id' => $prova->user_id,
            'data_fattura' => $prova->fine_prova,
            'mese_fattura' => Carbon::now()->month,
            'anno_fattura' => Carbon::now()->year,
            'acconto' => $request->acconto,
            'nr_rate' => $request->rate,
            'tot_fattura' => $request->totFatturaReale,
            'al_saldo' => (int)$request->totFatturaReale - (int)$request->acconto,
            'saldata' => (int)$request->totFatturaReale - (int)$request->acconto === 0 ? true : false,
            'data_saldo' => (int)$request->totFatturaReale - (int)$request->acconto === 0 ? Carbon::now() : null,
        ]);

        Informazione::create([
            'client_id' => $prova->client_id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'FATTURA',
            'note' => 'Fatturata prova di € '.number_format( (float) $fattura->tot_fattura, '0', ',', '.')
        ]);

        if ($request->acconto) {
            Ratefattura::create([
                'fattura_id' => $fattura->id,
                'importo' => $request->acconto,
                'note' => $request->acconto == $request->totFatturaReale ? 'Saldo' : 'Acconto'
            ]);

            $fattura->ultima_rata = Carbon::now();
            $fattura->save();

            Informazione::create([
                'giorno' => Carbon::now()->format('Y-m-d'),
                'tipo' => 'ACCONTO',
                'note' => 'Acconto di € '.number_format( (float) $request->acconto, '0', ',', '.')
            ]);
        }

        $prodotti = $request->product;
        for ($item = 0; $item < count($prodotti); $item++){
            $prodotto = Product::find($prodotti[$item]['id']);
            $prodotto->stato_id = 4;
            $prodotto->fattura_id = $fattura->id;
            $prodotto->save();

            $tabellaPivot = ProductProva::where([
                ['prova_id', $prova->id],
                ['product_id', $prodotti[$item]['id']]
            ])->first();

            $tabellaPivot->prezzo = $prodotti[$item]['pivot']['prezzo'];
            $tabellaPivot->prezzo_formattato =
                '€ '.number_format( (float) $prodotti[$item]['pivot']['prezzo'], '0', ',', '.');
            $tabellaPivot->save();
        }

        $this->creaPdfFattura(Fattura::with('prova')->find($fattura->id));

        $provaFattura = Prova::with('stato', 'user', 'product', 'client', 'copiaComm')->find($request->id);
        broadcast(new ProveEvent($provaFattura))->toOthers();

        $propieta = 'prova';
        $log = new LoggingService($request);
        $testo = $provaFattura->user->name.' ha fatturato la prova per il paziente '.$provaFattura->client->cognome.' '.$provaFattura->client->nome;
        $log->scriviLog($provaFattura->client->cognome.' '.$provaFattura->client->nome, $provaFattura->user, $provaFattura->user->name, $propieta, $testo);

        return $provaFattura;
    }

    public function creaPdfFattura($fattura)
    {
        //return $fattura;
        $pdf = App::make('dompdf.wrapper');
        if (!Storage::disk('public')->exists('/documenti/'.$fattura->prova->client_id.'/')) {
            Storage::makeDirectory('/documenti/'.$fattura->prova->client_id.'/');
        }
        $link = "storage/documenti/".$fattura->prova->client_id."/Fattura".$fattura->prova->mese_fine.$fattura->prova->anno_fine.".pdf";
        $pdf->loadHTML(view('pdf.fattura', compact('fattura')))
            ->save("storage/fatture/2021/$fattura->id.pdf")
            ->save($link);
        Documento::create([
            'client_id' => $fattura->prova->client_id,
            'tipo' => 'fattura',
            'link' => '/'.$link,
        ]);
    }

    public function provePassate($idClient)
    {
        return Client::with(['prova' => function($q){
            $q->with('copiaComm', 'marketing');
        }])
            ->find($idClient)
            ->prova;
    }

    public function eliminaProveSenzaProdotti($idClient)
    {
        $proveSenzaProdotti = Client::with('proveSenzaProdotti')->find($idClient)->proveSenzaProdotti;
        foreach ($proveSenzaProdotti as $prova){
            //dd($prova);
            $prova->delete();
        }

        $proveSenzaDocumenti = Client::with('proveSenzaProdotti')->find($idClient)->proveSenzaDocumenti;
        foreach ($proveSenzaDocumenti as $prova){

            foreach ($prova->product as $prodotto){
                //dd($prodotto);
                $prodotto->stato_id = 5;
                $prodotto->user_id = null;
                $prodotto->client_id = null;
                $prodotto->save();
            };
            $prova->delete();
        }
    }
}

