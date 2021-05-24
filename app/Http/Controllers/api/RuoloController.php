<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\RuoloService;
use Illuminate\Http\Request;

class RuoloController extends Controller
{
    public function index(RuoloService $ruoloService)
    {
        return $ruoloService->lista();
    }

    public function aggiungi(Request $request, RuoloService $ruoloService)
    {
        return $ruoloService->aggiungi($request);
    }

    public function elimina($id, RuoloService $ruoloService)
    {
        return $ruoloService->elimina($id);
    }
}
