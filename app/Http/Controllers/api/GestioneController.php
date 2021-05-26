<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\FilialeService;
use Illuminate\Http\Request;

class GestioneController extends Controller
{
    public function associazioniPersonale(FilialeService $filialeService)
    {
        return $filialeService->associazioni();
    }

    public function aggiungiAssociazione(Request $request, FilialeService $filialeService)
    {
        return $filialeService->aggiungiAssociazione($request);
    }

    public function eliminaAssociazione($id, FilialeService $filialeService)
    {
        return $filialeService->eliminaAssociazione($id);
    }
}
