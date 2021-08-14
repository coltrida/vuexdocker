<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\TelefonateService;
use Illuminate\Http\Request;

class TelefonateController extends Controller
{

    public function recallOggi(TelefonateService $telefonateService)
    {
        return $telefonateService->recallOggi();
    }

    public function addTelefonata(Request $request, TelefonateService $telefonateService)
    {
        return $telefonateService->addTelefonata($request);
    }

    public function aggiornaTelefonata(Request $request, TelefonateService $telefonateService)
    {
        return $telefonateService->aggiornaTelefonata($request);
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
        return $telefonateService->recallsByIdClient($idClient);
    }
}
