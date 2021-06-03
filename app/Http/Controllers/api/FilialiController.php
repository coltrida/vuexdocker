<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\FilialeService;
use Illuminate\Http\Request;

class FilialiController extends Controller
{
    public function index(FilialeService $filialeService)
    {
        return $filialeService->lista();
    }

    public function filialiAudio($idAudio, FilialeService $filialeService)
    {
        return $filialeService->filialiAudio($idAudio);
    }

    public function aggiungi(Request $request, FilialeService $filialeService)
    {
        return $filialeService->aggiungi($request);
    }

    public function elimina($id, FilialeService $filialeService)
    {
        return $filialeService->elimina($id);
    }

    public function situazioneMese(FilialeService $filialeService)
    {
        return $filialeService->situazioneMese();
    }
}
