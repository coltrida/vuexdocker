<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\FornitoreRequest;
use App\Http\Requests\MarketingRequest;
use App\Services\FilialeService;
use App\Services\FornitoriService;
use App\Services\MarketingService;
use Illuminate\Http\Request;

class FornitoriController extends Controller
{
    public function index(FornitoriService $fornitoriService)
    {
        return $fornitoriService->fornitori();
    }

    public function aggiungi(FornitoreRequest $request, FornitoriService $fornitoriService)
    {
        return $fornitoriService->addFornitore($request);
    }

    public function elimina($id, FornitoriService $fornitoriService)
    {
        return $fornitoriService->eliminaFornitore($id);
    }

    public function modifica(Request $request, FornitoriService $fornitoriService)
    {
        return $fornitoriService->modificaFornitore($request);
    }
}
