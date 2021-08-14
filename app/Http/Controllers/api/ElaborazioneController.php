<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\ElaborazioneService;
use Illuminate\Http\Request;

class ElaborazioneController extends Controller
{
    public function situazioneAnno(ElaborazioneService $elaborazioneService)
    {
        $elaborazioneService->situazioneAnno();
    }
}
