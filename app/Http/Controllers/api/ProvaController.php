<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProdottiProvaResource;
use App\Services\ProvaService;
use App\Services\RuoloService;
use Illuminate\Http\Request;

class ProvaController extends Controller
{

    public function nuova(Request $request, ProvaService $provaService)
    {
        return $provaService->nuova($request);
    }

    public function addEle(Request $request, ProvaService $provaService)
    {
        return new ProdottiProvaResource($provaService->addEle($request));
    }

    public function eliminaProdotto($id, ProvaService $provaService)
    {
        $provaService->eliminaProdotto($id);
    }

    public function salvaProva(Request $request, ProvaService $provaService)
    {
        return $provaService->salvaProva($request);
    }

    public function reso($idProva, Request $request, ProvaService $provaService)
    {
        return $provaService->reso($idProva, $request);
    }

    public function salvaFattura(Request $request, ProvaService $provaService)
    {
        return $provaService->salvaFattura($request);
    }

    public function provePassate($idClient, ProvaService $provaService)
    {
        return $provaService->provePassate($idClient);
    }
}
