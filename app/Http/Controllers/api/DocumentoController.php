<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DocumentiResource;
use App\Services\DocumentoService;
use Illuminate\Http\Request;

class DocumentoController extends Controller
{
    public function salvaDocumento(Request $request, DocumentoService $documentoService)
    {
        return new DocumentiResource($documentoService->salvaDocumento($request));
    }

    public function caricaDocumenti($idClient, DocumentoService $documentoService)
    {
        return DocumentiResource::collection($documentoService->caricaDocumenti($idClient));
    }

    public function eliminaDocumento($idDocumento, DocumentoService $documentoService)
    {
        $documentoService->eliminaDocumento($idDocumento);
    }

    public function salvaFileXmlFromFiliale(Request $request, DocumentoService $documentoService)
    {
        $documentoService->salvaFileXmlFromFiliale($request);
    }

    public function salvaFileAdmin(Request $request, DocumentoService $documentoService)
    {
        $documentoService->salvaFileAdmin($request);
    }
}
