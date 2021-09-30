<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\DottoreService;
use Illuminate\Http\Request;

class DottoreController extends Controller
{
    public function lista(DottoreService $dottoreService, $idUser=null)
    {
        return $dottoreService->lista($idUser);
    }

    public function aggiungi(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->aggiungi($request);
    }

    public function elimina($idMedico, DottoreService $dottoreService)
    {
        return $dottoreService->elimina($idMedico);
    }

    public function caricaOrari($idDottore, DottoreService $dottoreService)
    {
        return $dottoreService->caricaOrari($idDottore);
    }

    public function caricaOrarioDottore($dottore, DottoreService $dottoreService)
    {
        return $dottoreService->caricaOrarioDottore($dottore);
    }

    public function aggiungiOrario(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->aggiungiOrario($request);
    }

    public function eliminaOrario($idOrario, DottoreService $dottoreService)
    {
        return $dottoreService->eliminaOrario($idOrario);
    }

    public function inviiMedici(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->inviiMedici($request);
    }

    public function totaleInviiMedici(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->totaleInviiMedici($request);
    }

    public function statisticheInviiMedici(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->statisticheInviiMedici($request);
    }

    public function statisticheTotaleInviiMedici(Request $request, DottoreService $dottoreService)
    {
        return $dottoreService->statisticheTotaleInviiMedici($request);
    }
}
