<?php


namespace App\Services;


use App\Models\Fattura;
use App\Models\Product;
use App\Models\ProductProva;
use App\Models\Prova;
use App\Models\Ruolo;
use Carbon\Carbon;
use GuzzleHttp\Promise\Each;
use Illuminate\Support\Str;
use function trim;

class ProvaService
{
    public function lista()
    {
        return Ruolo::where('nome', '!=', 'admin')->orderBy('nome')->get();
    }

    public function nuova($request)
    {
        $new = new Prova();
        $new->user_id = $request->user_id;
        $new->client_id = $request->client_id;
        $new->filiale_id = $request->filiale_id;
        $new->stato_id = 7;
        $new->inizio_prova = Carbon::now()->format('Y-m-d');
        $new->mese_inizio = Carbon::now()->month;
        $new->anno_inizio = Carbon::now()->year;

        $new->save();
        return $new;
    }

    public function addEle($request)
    {
        $new = new ProductProva();
        $new->prova_id = $request->prova_id;
        $new->product_id = $request->product_id;
        $new->orecchio = $request->orecchio;
        $new->prezzo = $request->prezzo;

        $new->save();
        return $new;
    }

    public function eliminaProdotto($id)
    {
        return ProductProva::find($id)->delete();
    }

    public function salvaProva($request)
    {
        $prova = Prova::find($request->id);
        $prova->stato_id = 3;
        $prova->tot = $request->tot;
        $prova->save();
        return Prova::with('stato', 'user', 'product', 'client')->find($request->id);
    }

    public function reso($idProva)
    {
        $prova = Prova::with('product', 'stato', 'user')->find($idProva);
        foreach ($prova->product as $item){
            $item->stato_id = 5;
            $item->save();
        }
        $prova->stato_id = 2;
        $prova->fine_prova = Carbon::now()->format('Y-m-d');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->save();
        return Prova::with('product', 'stato', 'user')->find($idProva);
    }

    public function salvaFattura($request)
    {
        $prova = Prova::with('product')->find($request->id);
        $prova->stato_id = 4;
        $prova->tot = $request->totFatturaReale;
        $prova->fine_prova = Carbon::now()->format('Y-d-m');
        $prova->mese_fine = Carbon::now()->month;
        $prova->anno_fine = Carbon::now()->year;
        $prova->save();

        $fattura = new Fattura();
        $fattura->prova_id = $prova->id;
        $fattura->data_fattura = $prova->fine_prova;
        $fattura->acconto = $request->acconto;
        $fattura->nr_rate = $request->rate;
        $fattura->tot_fattura = $request->totFatturaReale;
        $fattura->al_saldo = (int)$request->totFatturaReale - (int)$request->acconto;
        $fattura->save();

        $prodotti = $request->product;
        for ($item = 0; $item < count($prodotti); $item++){
            $prodotto = Product::find($prodotti[$item]['id']);
           // $prova->product[$item]->pivot->prezzo = $prodotti[$item]['pivot']['prezzo'];
            $prodotto->stato_id = 4;
            $prodotto->save();

            $tabellaPivot = ProductProva::where([
                ['prova_id', $prova->id],
                ['product_id', $prodotti[$item]['id']]
            ])->first();
            //return $tabellaPivot;
            $tabellaPivot->prezzo = $prodotti[$item]['pivot']['prezzo'];
            $tabellaPivot->save();
        }

        return Prova::with('stato', 'user', 'product', 'client')->find($request->id);
    }
}
