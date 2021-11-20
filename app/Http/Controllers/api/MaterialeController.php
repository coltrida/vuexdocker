<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\MaterialeService;
use Illuminate\Http\Request;

class MaterialeController extends Controller
{
    public function lista(MaterialeService $materialeService)
    {
        return $materialeService->lista();
    }

    public function aggiungi(Request $request, MaterialeService $materialeService)
    {
        return $materialeService->aggiungi($request);
    }

    public function modifica(Request $request, MaterialeService $materialeService)
    {
        return $materialeService->modifica($request);
    }

    public function elimina($id, MaterialeService $materialeService)
    {
        $materialeService->elimina($id);
    }
}
