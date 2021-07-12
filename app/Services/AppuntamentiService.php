<?php


namespace App\Services;


use App\Models\Appuntamento;
use App\Models\Client;
use App\Models\Filiale;
use App\Models\Recapito;
use App\Models\User;

class AppuntamentiService
{
    public function index($idClient)
    {
        return Client::with(['appuntamenti' => function($q){
            $q->with('filiale', 'recapito')->latest();
        }])->find($idClient)->appuntamenti;
    }

    public function oggi($idAudio)
    {
        return User::with(['appuntamentiOggi' => function($q){
            $q->with('client');
        }])->find($idAudio)->appuntamentiOggi;
    }

    public function domani($idAudio)
    {
        return User::with(['appuntamentiDomani' => function($q){
            $q->with('client');
        }])->find($idAudio)->appuntamentiDomani;
    }

    public function addAppuntamento($request)
    {
        $newAppuntamento = new Appuntamento();
        $newAppuntamento->giorno = $request->giorno;
        $newAppuntamento->orario = $request->orario;
        $newAppuntamento->nota = $request->nota;
        $newAppuntamento->client_id = $request->client_id;
        $newAppuntamento->user_id = $request->user_id;
        $newAppuntamento->filiale_id = $request->filiale_id;
        $newAppuntamento->recapito_id = $request->recapito_id;
        $newAppuntamento->save();

        $dove = $request->filiale_id ? 'Filiale di '.Filiale::find($request->filiale_id)->nome : 'Recapito '.Recapito::find($request->recapito_id)->nome;
        $utente = User::find($request->user_id);
        $cliente = Client::find($request->client_id);
        $propieta = 'appuntamento';
        $testo = $utente->name.' ha fissato un appuntamento per '.$cliente->cognome.' '.$cliente->nome.' per il giorno '.$request->giorno.' alle ore '.$request->orario.' presso '.$dove;

        $log = new LoggingService();
        $log->scriviLog($newAppuntamento, $utente, $propieta, $testo);

        return Appuntamento::with('filiale', 'recapito')->find($newAppuntamento->id);

    }

    public function eliminaAppuntamento($id, $idUser)
    {
        $utente = User::find($idUser);
        $appuntamento = Appuntamento::find($id);
        $propieta = 'appuntamento';
        $testo = $utente->name.' ha eliminato un appuntamento con id = '.$id.' per il giorno '.$appuntamento->giorno.' delle ore '.$appuntamento->orario;

        $log = new LoggingService();
        $log->scriviLog($appuntamento, $utente, $propieta, $testo);

        return $appuntamento->delete();
    }
}
