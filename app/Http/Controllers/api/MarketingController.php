<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MarketingRequest;
use App\Services\MarketingService;
use Illuminate\Http\Request;

class MarketingController extends Controller
{
    public function index(MarketingService $marketingService)
    {
        return $marketingService->canali();
    }

    public function aggiungi(MarketingRequest $request, MarketingService $marketingService)
    {
        return $marketingService->addCanale($request);
    }

    public function elimina($id, MarketingService $marketingService)
    {
        return $marketingService->eliminaCanale($id);
    }

    public function fatturatoCanali(Request $request, MarketingService $marketingService)
    {
        return $marketingService->fatturatoCanali($request);
    }

    public function userFatturatoCanali(Request $request, MarketingService $marketingService)
    {
        return $marketingService->userFatturatoCanali($request);
    }
}
