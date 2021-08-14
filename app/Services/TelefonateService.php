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
            ->doesntHave('recalls')
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
            ->whereHas('appuntamenti', function ($q) use($oggi){
                $q->whereDate('giorno', '<', $oggi->subMonths(12));
            })
            ->orderBy('user_id')
            ->get();
    }

    public function addTelefonata($request)
    {
        $prossimaTelefonata = new Telefonata();
        $prossimaTelefonata->user_id = Client::with('user')->find($request->clientId)->user->id;
        $prossimaTelefonata->client_id = $request->clientId;
        $prossimaTelefonata->datarecall = $request->giorno;
        $prossimaTelefonata->esito = $request->esito;
        $prossimaTelefonata->note = $request->note;
        $prossimaTelefonata->effettuata = $request->esito ? 1 : 0;
        $prossimaTelefonata->save();

        return $prossimaTelefonata;
    }

    public function aggiornaTelefonata($request)
    {
        $telefonata = Telefonata::find($request->id);
        $telefonata->esito = $request->esito;
        $telefonata->note = $request->note;
        $telefonata->effettuata = $request->esito ? 1 : 0;
        $telefonata->save();

        return $telefonata;
    }

}
