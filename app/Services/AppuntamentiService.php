<?php


namespace App\Services;


use App\Models\Appuntamento;
use App\Models\Client;
use App\Models\Filiale;
use App\Models\Informazione;
use App\Models\Recapito;
use App\Models\User;
use Carbon\Carbon;
use Mail;

class AppuntamentiService
{
    public function index($idClient)
    {
        return Client::with(['appuntamenti' => function($q){
            $q->with('filiale', 'recapito', 'client')->orderBy('giorno', 'DESC');
        }])->find($idClient)->appuntamenti;
    }

    public function oggi($idAudio)
    {
        return User::with(['appuntamentiOggi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiOggi;
    }

    public function domani($idAudio)
    {
        return User::with(['appuntamentiDomani' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiDomani;
    }

    public function lunedi($idAudio)
    {
        return User::with(['appuntamentiLunedi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiLunedi;
    }

    public function martedi($idAudio)
    {
        return User::with(['appuntamentiMartedi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiMartedi;
    }

    public function mercoledi($idAudio)
    {
        return User::with(['appuntamentiMercoledi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiMercoledi;
    }

    public function giovedi($idAudio)
    {
        return User::with(['appuntamentiGiovedi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiGiovedi;
    }

    public function venerdi($idAudio)
    {
        return User::with(['appuntamentiVenerdi' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiVenerdi;
    }

    public function lunediProssimo($idAudio)
    {
        return User::with(['appuntamentiLunediProssimo' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiLunediProssimo;
    }

    public function martediProssimo($idAudio)
    {
        return User::with(['appuntamentiMartediProssimo' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiMartediProssimo;
    }

    public function mercolediProssimo($idAudio)
    {
        return User::with(['appuntamentiMercolediProssimo' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiMercolediProssimo;
    }

    public function giovediProssimo($idAudio)
    {
        return User::with(['appuntamentiGiovediProssimo' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiGiovediProssimo;
    }

    public function venerdiProssimo($idAudio)
    {
        return User::with(['appuntamentiVenerdiProssimo' => function($q){
            $q->with('client')->orderBy('orario');
        }])->find($idAudio)->appuntamentiVenerdiProssimo;
    }

    public function addAppuntamento($request)
    {
        $newAppuntamento = new Appuntamento();
        $newAppuntamento->giorno = $request->giorno;
        $newAppuntamento->orario = $request->orario;
        $newAppuntamento->nota = $request->nota;
        $newAppuntamento->tipo = $request->tipo;
        $newAppuntamento->client_id = $request->client_id;
        $newAppuntamento->user_id = $request->user_id;
        $newAppuntamento->filiale_id = $request->filiale_id;
        $newAppuntamento->recapito_id = $request->recapito_id;
        $newAppuntamento->save();

        $dove = $request->filiale_id ? 'Filiale di '.Filiale::find($request->filiale_id)->nome : 'Recapito '.Recapito::find($request->recapito_id)->nome;
        $utente = User::find($request->telefonista_id);
        $cliente = Client::find($request->client_id);
        $propieta = 'appuntamento';
        $testo = $utente->name.' ha fissato un appuntamento per '.$cliente->cognome.' '.$cliente->nome.' per il giorno '.$request->giorno.' alle ore '.$request->orario.' presso '.$dove;

        Informazione::create([
            'client_id' => $request->client_id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'APPUNTAMENTO',
            'note' => $testo
        ]);

        $log = new LoggingService();
        $log->scriviLog($cliente->cognome.' '.$cliente->nome, $utente, $utente->name, $propieta, $testo);

        if ($cliente->mail){
            Mail::to($cliente->mail)->send(new \App\Mail\Appuntamento($cliente, $newAppuntamento));
        }


        return Appuntamento::with('filiale', 'recapito', 'client')->find($newAppuntamento->id);

    }

    public function modificaAppuntamento($request)
    {
        $appuntamento = Appuntamento::find($request->id);
        $informazione = Informazione::where([
            ['client_id', $request->client_id],
            ['tipo', 'APPUNTAMENTO'],
            ['giorno', $appuntamento->giorno]
        ])->first();

        $informazione->giorno = $request->giorno;
        $informazione->save();

        $appuntamento->giorno = $request->giorno;
        $appuntamento->orario = $request->orario;
        $appuntamento->nota = $request->nota;
        $appuntamento->tipo = $request->tipo;
        $appuntamento->client_id = $request->client_id;
        $appuntamento->user_id = $request->user_id;
        $appuntamento->filiale_id = $request->filiale_id;
        $appuntamento->recapito_id = $request->recapito_id;
        $appuntamento->save();

        $dove = $request->filiale_id ? 'Filiale di '.Filiale::find($request->filiale_id)->nome : 'Recapito '.Recapito::find($request->recapito_id)->nome;
        $utente = User::find($request->user_id);
        $cliente = Client::find($request->client_id);
        $propieta = 'appuntamento';
        $testo = $utente->name.' ha fissato un appuntamento per '.$cliente->cognome.' '.$cliente->nome.' per il giorno '.$request->giorno.' alle ore '.$request->orario.' presso '.$dove;

        $log = new LoggingService();
        $log->scriviLog($cliente->cognome.' '.$cliente->nome, $utente, $utente->name, $propieta, $testo);

        if ($cliente->mail){
            Mail::to($cliente->mail)->send(new \App\Mail\Appuntamento($cliente, $appuntamento));
        }

        return Appuntamento::with('filiale', 'recapito', 'client')->find($appuntamento->id);
    }

    public function eliminaAppuntamento($id, $idUser)
    {
        $utente = User::find($idUser);
        $appuntamento = Appuntamento::with('client')->find($id);
        $propieta = 'appuntamento';
        $testo = $utente->name.' ha eliminato un appuntamento con id = '.$id.' per il giorno '.$appuntamento->giorno.' delle ore '.$appuntamento->orario;

        Informazione::create([
            'client_id' => $appuntamento->client->id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'APPUNTAMENTO',
            'note' => $testo
        ]);

        $log = new LoggingService();
        $log->scriviLog($appuntamento->client->cognome.''.$appuntamento->client->nome, $utente, $utente->name, $propieta, $testo);

        return $appuntamento->delete();
    }

    public function dateSettimana()
    {
        $giorni = [];
        $giorni[0] = Carbon::now()->startOfWeek()->format('d-m-Y');
        $giorni[1] = Carbon::now()->startOfWeek()->addDay()->format('d-m-Y');
        $giorni[2] = Carbon::now()->startOfWeek()->addDays(2)->format('d-m-Y');
        $giorni[3] = Carbon::now()->startOfWeek()->addDays(3)->format('d-m-Y');
        $giorni[4] = Carbon::now()->startOfWeek()->addDays(4)->format('d-m-Y');

        return $giorni;
    }

    public function dateSettimanaProssima()
    {
        $giorni = [];
        $giorni[0] = Carbon::now()->startOfWeek()->addDays(7)->format('d-m-Y');
        $giorni[1] = Carbon::now()->startOfWeek()->addDays(8)->format('d-m-Y');
        $giorni[2] = Carbon::now()->startOfWeek()->addDays(9)->format('d-m-Y');
        $giorni[3] = Carbon::now()->startOfWeek()->addDays(10)->format('d-m-Y');
        $giorni[4] = Carbon::now()->startOfWeek()->addDays(11)->format('d-m-Y');

        return $giorni;
    }
}
