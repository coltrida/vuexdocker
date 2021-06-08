<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\AppuntamentiService;
use Illuminate\Http\Request;

class AppuntamentiController extends Controller
{
    public function index($idClient, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->index($idClient);
    }

    public function aggiungi(Request $request, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->addAppuntamento($request);
    }

    public function elimina($id, AppuntamentiService $appuntamentiService)
    {
        return $appuntamentiService->eliminaAppuntamento($id);
    }
}
