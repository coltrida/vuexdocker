<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Audiometria;
use App\Services\ElaborazioneService;
use Artisan;
use Illuminate\Http\Request;


class ElaborazioneController extends Controller
{
    public function situazioneAnno(ElaborazioneService $elaborazioneService)
    {
        $elaborazioneService->situazioneAnno();
    }

    public function download()
    {
        return \Storage::disk('public')->download('export.sql');
    }

    public function visualizzapulisciDB()
    {
        return Audiometria::whereDoesntHave('client')->get();
    }

    public function pulisciDB()
    {
        return Audiometria::whereDoesntHave('client')->delete();
    }

    public function controlloPossibiliDuplicati(ElaborazioneService $elaborazioneService)
    {
        return $elaborazioneService->controlloPossibiliDuplicati();
    }
}
