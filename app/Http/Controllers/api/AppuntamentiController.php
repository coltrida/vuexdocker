<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppuntamentiResource;
use App\Http\Resources\AppuntamentiSospesiResource;
use App\Services\AppuntamentiService;
use Illuminate\Http\Request;

class AppuntamentiController extends Controller
{
    public function index($idClient, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->index($idClient));
    }

    public function oggi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->oggi($idAudio));
    }

    public function domani($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->domani($idAudio));
    }

    public function lunedi($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->lunedi($idAudio, $direzione));
    }

    public function martedi($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->martedi($idAudio, $direzione));
    }

    public function mercoledi($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->mercoledi($idAudio, $direzione));
    }

    public function giovedi($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->giovedi($idAudio, $direzione));
    }

    public function venerdi($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->venerdi($idAudio, $direzione));
    }

    public function sabato($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return AppuntamentiResource::collection($appuntamentiService->sabato($idAudio, $direzione));
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

    public function sabatoProssimo($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->sabatoProssimo($idAudio));
    }

    public function aggiungi(Request $request, AppuntamentiService $appuntamentiService)
    {
        return new AppuntamentiResource($appuntamentiService->addAppuntamento($request));
    }

    public function modifica(Request $request, AppuntamentiService $appuntamentiService)
    {
        return new AppuntamentiResource($appuntamentiService->modificaAppuntamento($request));
    }

    public function elimina($id, $idUser,AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->eliminaAppuntamento($id, $idUser);
    }

    public function dateSettimana(AppuntamentiService $appuntamentiService, $direzione=null)
    {
        return $appuntamentiService->dateSettimana($direzione);
    }

    public function dateSettimanaProssima(AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->dateSettimanaProssima();
    }

    public function appuntamentiAnnoMese(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->appuntamentiAnnoMese($request);
    }

    public function intervenutiAnnoMese(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->intervenutiAnnoMese($request);
    }

    public function inSospeso($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiSospesiResource::collection($appuntamentiService->inSospeso($idAudio));
    }

    public function appuntamentoSaltato($idAppuntamento, AppuntamentiService $appuntamentiService)
    {
        $appuntamentiService->appuntamentoSaltato($idAppuntamento);
    }

    public function appuntamentoIntervenuto($idAppuntamento, AppuntamentiService $appuntamentiService)
    {
        $appuntamentiService->appuntamentoIntervenuto($idAppuntamento);
    }

    public function appuntamentogiornoora(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->appuntamentogiornoora($request);
    }

    public function dataDiOggi(AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->dataDiOggi();
    }

    public function settimanaDelMese($idAudio, AppuntamentiService $appuntamentiService, $direzione = null)
    {
        return $appuntamentiService->settimanaDelMese($idAudio, $direzione);
    }
}
