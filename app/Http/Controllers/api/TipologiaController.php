<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\TipologiaService;
use Illuminate\Http\Request;

class TipologiaController extends Controller
{
    public function index(TipologiaService $tipologiaService)
    {
        return $tipologiaService->lista();
    }

    public function aggiungi(Request $request, TipologiaService $tipologiaService)
    {
        return $tipologiaService->aggiungi($request);
    }

    public function elimina($id, TipologiaService $tipologiaService)
    {
        return $tipologiaService->elimina($id);
    }
}
