<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompleanniResource;
use App\Services\ClientService;
use Illuminate\Http\Request;
use Nexmo\Laravel\Facade\Nexmo;
use function date_date_set;

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

    public function compleanni($idAudio, ClientService $clientService)
    {
        return CompleanniResource::collection($clientService->compleanni($idAudio));
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

    public function inviaSms(Request $request)
    {
        Nexmo::message()->send([
            'to' => '+393920222125',
            'from' => '+393920222125',
            'text' => $request['testo']
        ]);

    }

}
