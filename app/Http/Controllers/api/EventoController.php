<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\EventoService;
use Illuminate\Http\Request;

class EventoController extends Controller
{
    public function aggiungi(Request $request, EventoService $eventoService)
    {
        return $eventoService->aggiungi($request);
    }

    public function elimina(Request $request, EventoService $eventoService)
    {
        return $eventoService->elimina($request);
    }

    public function eventoGiorno(Request $request, EventoService $eventoService)
    {
        return $eventoService->eventoGiorno($request);
    }

    public function settimana($idAudio, EventoService $eventoService,  $direzione = null)
    {
        return $eventoService->settimana($idAudio, $direzione);
    }
}
