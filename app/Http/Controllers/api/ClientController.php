<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompleanniResource;
use App\Imports\ClientsImport;
use App\Models\Client;
use App\Models\User;
use App\Services\ClientService;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Nexmo\Laravel\Facade\Nexmo;

class ClientController extends Controller
{
    public function index(ClientService $clientService)
    {
        return ClientResource::collection($clientService->lista());
    }

    public function province(ClientService $clientService)
    {
        return $clientService->province();
    }

    public function cittaByProvincia($provincia, ClientService $clientService)
    {
        return $clientService->cittaByProvincia($provincia);
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
        return new ClientResource($clientService->aggiungi($request));
    }

    public function ricercaNominativi(Request $request, ClientService $clientService)
    {
        return ClientResource::collection($clientService->ricercaNominativi($request));
    }

    public function elimina(Request $request, ClientService $clientService)
    {
        return $clientService->elimina($request);
    }

    public function ingressiRecapiti(ClientService $clientService)
    {
        return $clientService->ingressiRecapiti();
    }

    public function ingressiRecapitiMesi(ClientService $clientService)
    {
        return $clientService->ingressiRecapitiMesi();
    }

    public function inviaSms(Request $request)
    {
        Nexmo::message()->send([
            'to' => '+393920222125',
            'from' => '+393920222125',
            'text' => $request['testo']
        ]);

    }

    public function importClients()
    {
        ini_set('max_execution_time', 300);
        ini_set('memory_limit', '-1');
        Excel::import(new ClientsImport, storage_path('app/public/file.xlsx'));
    }

    public function importClientsFromNoah(Request $request, ClientService $clientService)
    {
        return $clientService->importClientsFromNoah($request);
    }

    public function situazioneAnnoClientiAudio(Request $request, ClientService $clientService)
    {
        return $clientService->situazioneAnnoClientiAudio($request);
    }

    public function situazioneAnnoResiAudio(Request $request, ClientService $clientService)
    {
        return $clientService->situazioneAnnoResiAudio($request);
    }

    public function riepilogo(ClientService $clientService)
    {
        return $clientService->riepilogo();
    }

}
