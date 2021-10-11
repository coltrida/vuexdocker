<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\RecapitoService;
use Illuminate\Http\Request;

class RecapitiController extends Controller
{
    public function index(RecapitoService $recapitoService)
    {
        return $recapitoService->lista();
    }

    public function listaPerAudio(RecapitoService $recapitoService)
    {
        return $recapitoService->listaPerAudio();
    }

    public function recapitiByAudio($idAudio, RecapitoService $recapitoService)
    {
        return $recapitoService->recapitiByAudio($idAudio);
    }

    public function aggiungi(Request $request, RecapitoService $recapitoService)
    {
        return $recapitoService->aggiungi($request);
    }

    public function modifica(Request $request, RecapitoService $recapitoService)
    {
        return $recapitoService->modifica($request);
    }

    public function elimina($id, RecapitoService $recapitoService)
    {
        return $recapitoService->elimina($id);
    }
}
