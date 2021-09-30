<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\StrumentazioneService;
use Illuminate\Http\Request;

class StrumentazioneController extends Controller
{
    public function nonAssociata(StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->nonAssociata();
    }

    public function associata(StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->associata();
    }

    public function elimina($id, StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->elimina($id);
    }

    public function modifica(Request $request, StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->modifica($request);
    }

    public function aggiungi(Request $request, StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->aggiungi($request);
    }

    public function associaStrumentazione(Request $request, StrumentazioneService $strumentazioneService)
    {
        return $strumentazioneService->associaStrumentazione($request);
    }
}
