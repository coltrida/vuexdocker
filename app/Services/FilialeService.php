<?php


namespace App\Services;


use App\Models\Filiale;
use Illuminate\Support\Str;

class FilialeService
{
    public function lista()
    {
        return Filiale::orderBy('nome')->get();
    }

    public function aggiungi($request)
    {
        $new = new Filiale();
        $new->nome = trim(Str::upper($request->nome));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->telefono = $request->telefono;
        $new->cap = $request->cap;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->save();
        return $new;
    }

    public function elimina($id)
    {
        return Filiale::find($id)->delete();
    }
}
