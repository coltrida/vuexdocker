<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TelefonateResource;
use App\Services\TelefonateService;
use Illuminate\Http\Request;

class TelefonateController extends Controller
{

    public function recallOggi($idUser, TelefonateService $telefonateService)
    {
        return $telefonateService->recallOggi($idUser);
    }

    public function recallDomani($idUser, TelefonateService $telefonateService)
    {
        return $telefonateService->recallDomani($idUser);
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

    public function statistiche(TelefonateService $telefonateService)
    {
        return $telefonateService->statistiche();
    }

    public function daRichiamare($idUser, TelefonateService $telefonateService)
    {
        return $telefonateService->daRichiamare($idUser);
    }

    public function recallAutomatico($idUser, TelefonateService $telefonateService)
    {
        return $telefonateService->recallAutomatico($idUser);
    }
}
