<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\InformazioniResource;
use App\Services\InformazioneService;
use Illuminate\Http\Request;

class InformazioniController extends Controller
{
    public function lista($id, InformazioneService $informazioneService)
    {
        return InformazioniResource::collection($informazioneService->lista($id));
    }

    public function aggiungi(Request $request, InformazioneService $informazioneService)
    {
        return new InformazioniResource($informazioneService->aggiungi($request));
    }
}
