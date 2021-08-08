<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RateResource;
use App\Services\RateService;
use Illuminate\Http\Request;

class RateController extends Controller
{
    public function allClientiDaSaldare(RateService $rateService)
    {
        return RateResource::collection($rateService->allClientiDaSaldare());
    }

    public function clientiDaSaldare($idAudio, RateService $rateService)
    {
        return RateResource::collection($rateService->clientiDaSaldare($idAudio));
    }

    public function clientiSaldati($idAudio, RateService $rateService)
    {
        return RateResource::collection($rateService->clientiSaldati($idAudio));
    }

    public function addRata(Request $request, RateService $rateService)
    {
        $rateService->addRata($request);
    }

    public function caricaFattura($idFattura, RateService $rateService)
    {
        return new RateResource($rateService->caricaFattura($idFattura));
    }
}
