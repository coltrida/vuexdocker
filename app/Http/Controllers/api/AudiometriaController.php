<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\AudiometriaService;
use App\Services\RuoloService;
use Illuminate\Http\Request;

class AudiometriaController extends Controller
{
    public function index($idClient, AudiometriaService $audiometriaService)
    {
        return $audiometriaService->lista($idClient);
    }

    public function aggiungi(Request $request, AudiometriaService $audiometriaService)
    {
        return $audiometriaService->aggiungi($request);
    }

    public function seleziona($id, AudiometriaService $audiometriaService)
    {
        return $audiometriaService->elimina($id);
    }
}
