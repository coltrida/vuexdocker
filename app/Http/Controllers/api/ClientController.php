<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Services\ClientService;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index(ClientService $clientService)
    {
        return ClientResource::collection($clientService->lista());
    }

    public function cliente($id, ClientService $clientService)
    {
        return new ClientResource($clientService->cliente($id));
    }

    public function clientsFiliale($idFiliale, ClientService $clientService)
    {
        return ClientResource::collection($clientService->clienteFiliale($idFiliale));
    }

    public function aggiungi(Request $request, ClientService $clientService)
    {
        return $clientService->aggiungi($request);
    }

    public function modifica(Request $request, ClientService $clientService)
    {
        return $clientService->modifica($request);
    }

    public function elimina($id, ClientService $clientService)
    {
        return $clientService->elimina($id);
    }
}
