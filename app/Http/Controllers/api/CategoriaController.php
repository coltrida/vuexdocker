<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\CategoriaService;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index(CategoriaService $categoriaService)
    {
        return $categoriaService->lista();
    }

    public function aggiungi(Request $request, CategoriaService $categoriaService)
    {
        return $categoriaService->aggiungi($request);
    }

    public function elimina($id, CategoriaService $categoriaService)
    {
        return $categoriaService->elimina($id);
    }
}
