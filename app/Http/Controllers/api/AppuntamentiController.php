<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppuntamentiResource;
use App\Services\AppuntamentiService;
use Illuminate\Http\Request;

class AppuntamentiController extends Controller
{
    public function index($idClient, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->index($idClient);
    }

    public function oggi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->oggi($idAudio));
    }

    public function domani($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->domani($idAudio));
    }

    public function lunedi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->lunedi($idAudio));
    }

    public function martedi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->martedi($idAudio));
    }

    public function mercoledi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->mercoledi($idAudio));
    }

    public function giovedi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->giovedi($idAudio));
    }

    public function venerdi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->venerdi($idAudio));
    }

    public function lunediProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->lunediProssimo($idAudio));
    }

    public function martediProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->martediProssimo($idAudio));
    }

    public function mercolediProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->mercolediProssimo($idAudio));
    }

    public function giovediProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->giovediProssimo($idAudio));
    }

    public function venerdiProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->venerdiProssimo($idAudio));
    }

    public function aggiungi(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->addAppuntamento($request);
    }

    public function elimina($id, $idUser, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->eliminaAppuntamento($id, $idUser);
    }

    public function dateSettimana(AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->dateSettimana();
    }

    public function dateSettimanaProssima(AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->dateSettimanaProssima();
    }
}
