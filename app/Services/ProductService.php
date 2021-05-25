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
}
