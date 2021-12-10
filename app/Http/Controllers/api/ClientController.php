<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompleanniResource;
use App\Imports\ClientsImport;
use App\Services\ClientService;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Storage;

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

    public function ricercaNominativiConMail(Request $request, ClientService $clientService)
    {
        return ClientResource::collection($clientService->ricercaNominativiConMail($request));
    }

    public function elimina(Request $request, ClientService $clientService)
    {
        return $clientService->elimina($request);
    }

    public function ingressiRecapiti(Request $request, ClientService $clientService)
    {
        return $clientService->ingressiRecapiti($request);
    }

    public function ingressiRecapitiMesi(Request $request, ClientService $clientService)
    {
        return $clientService->ingressiRecapitiMesi($request);
    }

    public function importClients()
    {
        ini_set('max_execution_time', 400);
        ini_set('memory_limit', '-1');
        config(['enum.totImportati' => 0]);
        Excel::import(new ClientsImport, storage_path('/carica.xlsx'));
        Storage::disk('log')->delete('/carica.xlsx');

        return config('enum.totImportati');
    }

    public function importClientsFromNoah(Request $request, ClientService $clientService)
    {
        ini_set('max_execution_time', 400);
        ini_set('memory_limit', '-1');
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
