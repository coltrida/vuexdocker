<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LoggingResource;
use App\Services\FilialeService;
use App\Services\LoggingService;
use App\Services\UserService;
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

    public function assegnaBgt(Request $request, UserService $userService)
    {
        return $userService->assegnaBgt($request);
    }

    public function modificaBgt(Request $request, UserService $userService)
    {
        return $userService->modificaBgt($request);
    }

    public function logging(LoggingService $loggingService)
    {
        return LoggingResource::collection($loggingService->lista());
    }
}
