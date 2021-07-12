<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AppuntamentiResource;
use App\Services\AppuntamentiService;
use Illuminate\Http\Request;

class AppuntamentiController extends Controller
{
    public function index($idClient, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->index($idClient);
    }

    public function oggi($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->oggi($idAudio));
    }

    public function domani($idAudio, AppuntamentiService $appuntamentiService)
    {
        return AppuntamentiResource::collection($appuntamentiService->domani($idAudio));
    }

    public function aggiungi(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->addAppuntamento($request);
    }

    public function elimina($id, $idUser, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->eliminaAppuntamento($id, $idUser);
    }
}
