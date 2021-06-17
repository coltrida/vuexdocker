<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProdottiInFilialeFornitoreResource;
use App\Http\Resources\ProductInProvaResource;
use App\Http\Resources\ProductResource;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function presenti($id, ProductService $productService)
    {
        return ProductResource::collection($productService->presenti($id));
    }

    public function presentiFornitore($idFilile, $idFornitore, ProductService $productService)
    {
        return ProdottiInFilialeFornitoreResource::collection($productService->presentiFromFornitore($idFilile, $idFornitore));
    }

    public function inProva($id, ProductService $productService)
    {
        return ProductInProvaResource::collection($productService->inProva($id));
    }

    public function richiesti($id, ProductService $productService)
    {
        return ProductResource::collection($productService->richiesti($id));
    }

    public function inArrivo($id, ProductService $productService)
    {
        return ProductResource::collection($productService->inArrivo($id));
    }

    public function richiestaProdotti(Request $request, ProductService $productService)
    {
        return ProductResource::collection($productService->richiestaProdotti($request));
    }

    public function assegnaProdottiMagazzino(Request $request, ProductService $productService)
    {
        $productService->assegnaProdottiMagazzino($request);
    }

    public function switchInProva(Request $request, ProductService $productService)
    {
        $productService->switchInProva($request);
    }

    public function switchImmatricolato(Request $request, ProductService $productService)
    {
        $productService->switchImmatricolato($request);
    }

    public function switchRimuoviDallaProva($id, ProductService $productService)
    {
        $productService->switchRimuoviDallaProva($id);
    }

    public function prodottiImmatricolati($idFiliale, ProductService $productService)
    {
        return $productService->prodottiImmatricolati($idFiliale);
    }

    public function productRimuoviRichiesta($id, ProductService $productService)
    {
        $productService->productRimuoviRichiesta($id);
    }

    public function listaProdottiRichiesti(ProductService $productService)
    {
        return $productService->listaProdottiRichiesti();
    }

    public function switchArrivato($id, ProductService $productService)
    {
        return new ProductResource($productService->switchArrivato($id));
    }
}
