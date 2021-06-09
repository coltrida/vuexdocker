<?php


namespace App\Services;


use App\Models\Appuntamento;
use App\Models\Client;
use App\Models\User;
use Illuminate\Support\Facades\App;

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
        return Appuntamento::with('filiale', 'recapito')->find($newAppuntamento->id);

    }

    public function eliminaAppuntamento($id)
    {
        return Appuntamento::find($id)->delete();
    }
}
