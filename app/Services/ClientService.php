<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Recapito;
use App\Models\Tipologia;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function dd;
use function trim;

class ClientService
{
    public function lista()
    {
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
                ->orderBy('cognome')->get();
    }

    public function clienteFiliale($idFiliale)
    {
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
                ->where('filiale_id', $idFiliale)->orderBy('cognome')->get();
    }

    public function cliente($id)
    {
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome')->find($id);
    }

    public function compleanni($idAudio)
    {
        return User::with('clientCompleanno')->find($idAudio)->clientCompleanno;
    }

    public function aggiungi($request)
    {
        $new = new Client();
        $new->nome = trim(Str::upper($request->nome));
        $new->cognome = trim(Str::upper($request->cognome));
        $new->codfisc = trim(Str::upper($request->codfisc)) == '' ? null : trim(Str::upper($request->codfisc));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->cap = $request->cap;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->telefono = $request->telefono;
        $new->tipologia_id = $request->tipologia_id;
        $new->marketing_id = $request->marketing_id;
        $new->filiale_id = $request->filiale_id;
        $new->recapito_id = $request->recapito_id;
        $new->user_id = $request->user_id;
        $new->recall = 1;
        $new->datarecall = $this->calcolaRecall($request->tipologia_id);
        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita;
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $new->mese = Carbon::now()->month;
        $new->anno = Carbon::now()->year;
        $new->save();

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha inserito il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new, $utente, $propieta, $testo);

        return $new;
    }

    public function modifica($request)
    {
        $new = Client::find($request->id);
        $new->nome = trim(Str::upper($request->nome));
        $new->cognome = trim(Str::upper($request->cognome));
        $new->codfisc = trim(Str::upper($request->codfisc)) == '' ? null : trim(Str::upper($request->codfisc));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->cap = $request->cap;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->telefono = $request->telefono;
        $new->tipologia_id = $request->tipologia_id;
        $new->marketing_id = $request->marketing_id;
        $new->filiale_id = $request->filiale_id;
        $new->recapito_id = $request->recapito_id;
        $new->user_id = $request->user_id;
        $new->recall = 1;
        $new->datarecall = $this->calcolaRecall($request->tipologia_id);
        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita;
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha modificato il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new, $utente, $propieta, $testo);

        return $new;
    }

    public function calcolaRecall($tipologia_id)
    {
        $oggi = Carbon::now();
        $tipo = Tipologia::find($tipologia_id);
        return $oggi->addDays($tipo->recall)->format('Y-m-d');
    }

    public function elimina($id)
    {
        return Client::find($id)->delete();
    }

    public function ingressiRecapiti()
    {
        return Recapito::
            withcount('clients')
            ->withCount(['clients as clientsPc' => function($q){
                $q->where('tipologia_id', 1);
            }])
            ->withCount(['clients as clientsCl' => function($q){
                $q->where('tipologia_id', 2);
            }])
            ->withCount(['clients as clientsClc' => function($q){
                $q->where('tipologia_id', 3);
            }])
            ->withCount(['clients as clientsNormo' => function($q){
                $q->where('tipologia_id', 4);
            }])
            ->orderBy('nome')
            ->get();
    }

    public function ingressiRecapitiMesi()
    {
        $annoOggi = Carbon::now()->year;
        return Recapito::
            withcount('clients')
            ->withCount(['clients as gen' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 1],
                ]);
            }])
            ->withCount(['clients as feb' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 2],
                ]);
            }])
            ->withCount(['clients as mar' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 3],
                ]);
            }])
            ->withCount(['clients as apr' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 4],
                ]);
            }])
            ->withCount(['clients as mag' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 5],
                ]);
            }])
            ->withCount(['clients as giu' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 6],
                ]);
            }])
            ->withCount(['clients as lug' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 7],
                ]);
            }])
            ->withCount(['clients as ago' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 8],
                ]);
            }])
            ->withCount(['clients as set' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 9],
                ]);
            }])
            ->withCount(['clients as ott' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 10],
                ]);
            }])
            ->withCount(['clients as nov' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 11],
                ]);
            }])
            ->withCount(['clients as dic' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 12],
                ]);
            }])
            ->orderBy('nome')
            ->get();
    }
}
