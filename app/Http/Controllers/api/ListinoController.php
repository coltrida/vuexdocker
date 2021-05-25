<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ListinoRequest;
use App\Http\Resources\ListinoResource;
use App\Services\ListinoService;

class ListinoController extends Controller
{
    public function index(ListinoService $listinoService)
    {
        return ListinoResource::collection($listinoService->listino());
    }

    public function aggiungi(ListinoRequest $request, ListinoService $listinoService)
    {
        return new ListinoResource($listinoService->inserisci($request));

    }

    public function elimina($id, ListinoService $listinoService)
    {
        return $listinoService->rimuovi($id);
    }

    public function productFromFornitore($idFornitore, ListinoService $listinoService)
    {
        return $listinoService->listinoFromFornitore($idFornitore);
    }
}
