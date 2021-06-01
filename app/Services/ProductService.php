<?php


namespace App\Services;


use App\Models\Filiale;
use App\Models\Product;
use function array_push;
use function array_sum;

class ProductService
{
    public function presenti($id)
    {
        return Filiale::with(['products' => function($q){
            $q->with(['listino' => function($l){
                $l->with('fornitore', 'categoria');
            }])->filiale()->orderBy('listino_id');
        }])->find($id)->products;
    }

    public function presentiFromFornitore($idFiliale, $idFornitore)
    {
        return Filiale::with(['products' => function($q) use($idFornitore){
            $q->with(['listino' => function($l){
                $l->with('fornitore', 'categoria');
            }])->filiale()->where('fornitore_id', $idFornitore)->orderBy('listino_id');
        }])->find($idFiliale)->products;
    }

    public function inProva($id)
    {
        return Filiale::with(['products' => function($q){
            $q->with(['client','listino' => function($l){
                $l->with('fornitore', 'categoria');
            }])->prova()->orderBy('listino_id');
        }])->find($id)->products;
    }

    public function richiesti($id)
    {
        return Filiale::with(['products' => function($q){
            $q->with(['listino' => function($l){
                $l->with('fornitore', 'categoria');
            }])->richiesto()->orderBy('listino_id');
        }])->find($id)->products;
    }

    public function inArrivo($id)
    {
        return Filiale::with(['products' => function($q){
            $q->with(['listino' => function($l){
                $l->with('fornitore', 'categoria');
            }])->arrivo()->orderBy('listino_id');
        }])->find($id)->products;
    }

    public function richiestaProdotti($request)
    {
        $prodotti = [];
        for($i=1; $i <= $request->quantita; $i++){
            $prodotto = new Product();
            $prodotto->stato_id = $request->stato_id;
            $prodotto->filiale_id = $request->filiale_id;
            $prodotto->listino_id = $request->listino_id;
            $prodotto->fornitore_id = $request->fornitore_id;
            $prodotto->save();
            array_push($prodotti, $prodotto);
        }
        return $prodotti;
    }

    public function switchInProva($request)
    {
        $product = Product::find($request->idProduct);
        $product->stato_id = 3;
        $product->user_id = $request->user_id;
        $product->client_id = $request->client_id;
        $product->save();
    }

    public function switchRimuoviDallaProva($id)
    {
        $product = Product::find($id);
        $product->stato_id = 5;
        $product->user_id = null;
        $product->client_id = null;
        $product->save();
    }
}
