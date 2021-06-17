<?php


namespace App\Services;


use App\Models\Ddt;
use App\Models\Filiale;
use App\Models\Product;
use function array_push;
use function create_function;
use function dd;

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

    public function assegnaProdottiMagazzino($request)
    {
        $idDDT = $this->creaDDT($request->prodotti[0]);

        foreach ($request->prodotti as $item) {
            $prodotto = Product::find($item['id']);
            $prodotto->stato_id = 1;
            $prodotto->ddt_id = $idDDT;
            $prodotto->save();
        };
    }

    public function creaDDT($request)
    {
        $nuovoDDT = new Ddt();
        $filiale = Filiale::find($request['filiale_id']);
        $nuovoDDT->filiale_id = $request['filiale_id'];
        $nuovoDDT->nome_destinazione = 'Centro Udito '.$filiale->citta;
        $nuovoDDT->indirizzo_destinazione = $filiale->indirizzo;
        $nuovoDDT->citta_destinazione = $filiale->citta;
        $nuovoDDT->cap_destinazione = $filiale->cap;
        $nuovoDDT->provincia_destinazione = $filiale->provincia;
        $nuovoDDT->save();

        return $nuovoDDT->id;
    }

    public function switchInProva($request)
    {
        $product = Product::find($request->idProduct);
        $product->stato_id = 3;
        $product->user_id = $request->user_id;
        $product->client_id = $request->client_id;
        $product->save();
    }

    public function switchImmatricolato($request)
    {
        $product = Product::find($request->idProduct);
        $product->stato_id = 8;
        $product->matricola = $request->matricola;
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

    public function productRimuoviRichiesta($id)
    {
        Product::find($id)->delete();
    }

    public function listaProdottiRichiesti()
    {
        return Filiale::with(['productsRichiesti' => function($q){
                $q->with(['listino' => function($d){
                    $d->with('fornitore');
                }])->orderBy('listino_id');
            }])
            ->whereHas('productsRichiesti')
            ->get();
    }

    public function prodottiImmatricolati($idFiliale)
    {
        return Filiale::with(['productsImmatricolati' => function($q){
            $q->with(['listino' => function($d){
                $d->with('fornitore');
            }])->orderBy('listino_id');
        }])->find($idFiliale)->productsImmatricolati;
    }

    public function switchArrivato($id)
    {
        $product = Product::with(['listino' => function($d){
            $d->with('fornitore');
        }])
            ->find($id);
        $product->stato_id = 5;
        $product->save();
        return $product;
    }
}
