<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Telefonata;
use App\Models\Tipologia;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function trim;

class TelefonateService
{

    public function recallOggi()
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return Client::with(['tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                $q->with('copiaComm')->first();
            }])
            ->whereHas('recalls', function ($q) use($oggi){
                $q->where([['datarecall', $oggi], ['effettuata', 0]]);
        })->orderBy('user_id')->get();
    }

    public function telefonateFatteOggi()
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return Client::with(['tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                $q->with('copiaComm')->first();
            }])
            ->whereHas('recalls', function ($q) use($oggi){
                $q->where([['created_at', $oggi], ['effettuata', 1]])->orWhere([['updated_at', $oggi], ['effettuata', 1]]);
            })->orderBy('user_id')->get();
    }

    public function numeroTelefonateFatteOggi()
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return Client::
            whereHas('recalls', function ($q) use($oggi){
                $q->where([['created_at', $oggi], ['effettuata', 1]])->orWhere([['updated_at', $oggi], ['effettuata', 1]]);
            })->count();
    }

    public function numeroAppuntamentiPresiOggi()
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return Client::
        whereHas('recalls', function ($q) use($oggi){
            $q->where([['created_at', $oggi], ['effettuata', 1], ['esito', 'Preso Appuntamento']])
                ->orWhere([['updated_at', $oggi], ['effettuata', 1], ['esito', 'Preso Appuntamento']]);
        })->count();
    }

    public function recallsByIdClient($idClient)
    {
        return Client::with(['recalls' => function($q){
            $q->orderBy('datarecall');
        }])->find($idClient)->recalls;
    }

    public function clientiMaiRichiamati()
    {
        return Client::clienti()
            ->with(['tipologia:id,nome',
                'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                    $q->with('copiaComm')->first();
                }])
            ->whereDoesntHave('recalls', function ($q){
                $q->where('effettuata', 1);
            })
            ->orderBy('user_id')
            ->get();
    }

    public function clientiNonHannoMaiPresoAppuntamenti()
    {
        return Client::clienti()
            ->with(['tipologia:id,nome',
                'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                    $q->with('copiaComm')->first();
                }])
            ->doesntHave('appuntamenti')
            ->orderBy('user_id')
            ->get();
    }

    public function clientiUnAnnoUltimoAppuntamento()
    {
        $oggi = Carbon::now();
        return Client::clienti()
            ->with(['tipologia:id,nome',
                'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                    $q->with('copiaComm')->first();
                }])
            ->has('appuntamenti')
            ->whereDoesntHave('appuntamenti', function ($q) use($oggi){
                $q->whereDate('giorno', '>', $oggi->subMonths(12));
            })
            ->orderBy('user_id')
            ->get();
    }

    public function addTelefonata($request)
    {
        $client = Client::with('user')->find($request->clientId);
        $prossimaTelefonata = new Telefonata();
        $prossimaTelefonata->user_id = $client->user->id;
        $prossimaTelefonata->client_id = $request->clientId;
        $prossimaTelefonata->datarecall = $request->giorno;
        $prossimaTelefonata->esito = $request->esito;
        $prossimaTelefonata->note = $request->note;
        $prossimaTelefonata->effettuata = $request->esito ? 1 : 0;
        $prossimaTelefonata->created_at = Carbon::now()->format('Y-m-d');
        $prossimaTelefonata->updated_at = Carbon::now()->format('Y-m-d');
        $prossimaTelefonata->save();

        $utente = User::find($request->userId);
        $log = new LoggingService();
        $propieta = 'recall';
        if($request->esito){
            $testo = $utente->name.' ha telefonato a '.$client->cognome.' '.$client->nome.' con esito: '.$request->esito;
        }else{
            $testo = $utente->name.' ha inserito la telefonata da fare per '.$client->cognome.' '.$client->nome;
        }
        $log->scriviLog($client, $utente, $utente->name, $propieta, $testo);

        return $prossimaTelefonata;
    }

    public function aggiornaTelefonata($request)
    {
        $telefonata = Telefonata::with('client')->find($request->id);
        $telefonata->esito = $request->esito;
        $telefonata->note = $request->note;
        $telefonata->effettuata = $request->esito ? 1 : 0;
        $telefonata->updated_at = Carbon::now()->format('Y-m-d');
        $telefonata->save();

        $utente = User::find($request->userId);
        $log = new LoggingService();
        $propieta = 'recall';
        if($request->esito){
            $testo = $utente->name.' ha telefonato a '.$telefonata->client->cognome.' '.$telefonata->client->nome.' con esito: '.$request->esito;
        }
        $log->scriviLog($telefonata->client, $utente, $utente->name, $propieta, $testo);

        return $telefonata;
    }

}
