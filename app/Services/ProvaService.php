<?php


namespace App\Services;


use App\Events\ProveEvent;
use App\Models\Client;
use App\Models\Documento;
use App\Models\Fattura;
use App\Models\Product;
use App\Models\ProductProva;
use App\Models\Prova;
use App\Models\Ratefattura;
use App\Models\Ruolo;
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

    public function nuova($request)
    {
        $new = new Prova();
        $new->user_id = $request->user_id;
        $new->client_id = $request->client_id;
        $new->marketing_id = $request->marketing_id;
        $new->filiale_id = $request->filiale_id;
        $new->stato_id = 7;
        $new->inizio_prova = Carbon::now()->format('Y-m-d');
        $new->mese_inizio = Carbon::now()->month;
        $new->anno_inizio = Carbon::now()->year;

        $new->save();
        return $new;
    }

    public function addEle($request)
    {
        $new = new ProductProva();
        $new->prova_id = $request->prova_id;
        $new->product_id = $request->product_id;
        $new->orecchio = $request->orecchio;
        $new->prezzo = $request->prezzo;

        $new->save();
        return $new;
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

        $giorno = Carbon::now()->day;
        $mese = Carbon::now()->month;
        $anno = Carbon::now()->year;

        $documento = new Documento();
        $documento->client_id = $prova->client->id;
        $documento->prova_id = $prova->id;
        $documento->tipo = 'copiaComm';
        $filename = 'CopiaComm'.$giorno.$mese.$anno.'.pdf';
        $documento->link = '/storage/documenti/'.$prova->client->id.'/'.$filename;
        $documento->save();

        $informativa = new Documento();
        $informativa->client_id = $prova->client->id;
        $informativa->prova_id = $prova->id;
        $informativa->tipo = 'informativa';
        $filenameInformativa = 'Informativa'.$giorno.$mese.$anno.'.pdf';
        $informativa->link = '/storage/documenti/'.$prova->client->id.'/'.$filenameInformativa;
        $informativa->save();

        $provaSalvata = Prova::with('stato', 'user', 'product', 'client', 'copiaComm')->find($request->id);

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
        $log = new LoggingService();
        $testo = $provaSalvata->user->name.' ha aperto una prova per il paziente '.$provaSalvata->client->cognome.' '.$provaSalvata->client->nome;
        $log->scriviLog($provaSalvata->client->cognome.' '.$provaSalvata->client->nome, $provaSalvata->user, $provaSalvata->user->name, $propieta, $testo);

        return $provaSalvata;
    }

    public function reso($idProva)
    {
        $prova = Prova::with('product', 'stato', 'user')->find($idProva);
        foreach ($prova->product as $item){
            $item->stato_id = 5;
            $item->save();
        }
        $prova->stato_id = 2;
        $prova->fine_prova = Carbon::now()->format('Y-m-d');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->save();
        $provaSalvata = Prova::with('product', 'stato', 'user', 'client', 'copiaComm')->find($idProva);
        broadcast(new ProveEvent($provaSalvata))->toOthers();

        $propieta = 'prova';
        $log = new LoggingService();
        $testo = $prova->user->name.' ha reso la prova per il paziente '.$prova->client->cognome.' '.$prova->client->nome;
        $log->scriviLog($provaSalvata->client->cognome.' '.$provaSalvata->client->nome, $prova->user, $prova->user->name, $propieta, $testo);

        return $provaSalvata;
    }

    public function salvaFattura($request)
    {
        $prova = Prova::with('product')->find($request->id);
        $prova->stato_id = 4;
        $prova->tot = $request->totFatturaReale;
        $prova->fine_prova = Carbon::now()->format('Y-m-d');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->giorni_prova = Carbon::now()->DiffInDays($prova->created_at);
        $prova->save();

        $client = Client::find($prova->client_id);
        $client->tipologia_id = 2;
        $client->save();

        $fattura = new Fattura();
        $fattura->prova_id = $prova->id;
        $fattura->user_id = $prova->user_id;
        $fattura->data_fattura = $prova->fine_prova;
        $fattura->mese_fattura = Carbon::now()->month;
        $fattura->anno_fattura = Carbon::now()->year;
        $fattura->acconto = $request->acconto;
        $fattura->nr_rate = $request->rate;
        $fattura->tot_fattura = $request->totFatturaReale;
        $fattura->al_saldo = (int)$request->totFatturaReale - (int)$request->acconto;
        if ($fattura->al_saldo === 0){
            $fattura->saldata = true;
            $fattura->data_saldo = Carbon::now();
        }
        $fattura->save();

        if ($request->acconto) {
            $newRata = new Ratefattura();
            $newRata->fattura_id = $fattura->id;
            $newRata->importo = $request->acconto;
            if($request->acconto == $request->totFatturaReale){
                $newRata->note = 'Saldo';
            } else {
                $newRata->note = 'Acconto';
            }
            $newRata->save();

            $fattura->ultima_rata = Carbon::now();
            $fattura->save();
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
            $tabellaPivot->save();
        }

        $this->creaPdfFattura(Fattura::with('prova')->find($fattura->id));

        $provaFattura = Prova::with('stato', 'user', 'product', 'client', 'copiaComm')->find($request->id);
        broadcast(new ProveEvent($provaFattura))->toOthers();

        $propieta = 'prova';
        $log = new LoggingService();
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
        $documento = new Documento();
        $documento->client_id = $fattura->prova->client_id;
        $documento->tipo = 'fattura';
        $documento->link = '/'.$link;
        $documento->save();
    }
}

