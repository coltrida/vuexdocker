<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TelefonateResource;
use App\Services\TelefonateService;
use Illuminate\Http\Request;

class TelefonateController extends Controller
{

    public function recallOggi(TelefonateService $telefonateService)
    {
        return $telefonateService->recallOggi();
    }

    public function recallDomani(TelefonateService $telefonateService)
    {
        return $telefonateService->recallDomani();
    }

    public function telefonateFatteOggi(TelefonateService $telefonateService)
    {
        return $telefonateService->telefonateFatteOggi();
    }

    public function numeroTelefonateFatteOggi(TelefonateService $telefonateService)
    {
        return $telefonateService->numeroTelefonateFatteOggi();
    }

    public function numeroAppuntamentiPresiOggi(TelefonateService $telefonateService)
    {
        return $telefonateService->numeroAppuntamentiPresiOggi();
    }

    public function addTelefonata(Request $request, TelefonateService $telefonateService)
    {
        return new TelefonateResource($telefonateService->addTelefonata($request));
    }

    public function aggiornaTelefonata(Request $request, TelefonateService $telefonateService)
    {
        return new TelefonateResource($telefonateService->aggiornaTelefonata($request));
    }

    public function clientiMaiRichiamati(TelefonateService $telefonateService)
    {
        return $telefonateService->clientiMaiRichiamati();
    }

    public function clientiNonHannoMaiPresoAppuntamenti(TelefonateService $telefonateService)
    {
        return $telefonateService->clientiNonHannoMaiPresoAppuntamenti();
    }

    public function clientiUnAnnoUltimoAppuntamento(TelefonateService $telefonateService)
    {
        return $telefonateService->clientiUnAnnoUltimoAppuntamento();
    }

    public function recallsByIdClient($idClient, TelefonateService $telefonateService)
    {
        return TelefonateResource::collection($telefonateService->recallsByIdClient($idClient));
    }
}
