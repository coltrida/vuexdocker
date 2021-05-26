<?php


namespace App\Services;


use App\Models\Filiale;
use App\Models\FilialeUser;
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

    public function associazioni()
    {
        return Filiale::with('users:id,name')->orderBy('nome')->get();
    }

    public function aggiungiAssociazione($request)
    {
        foreach($request->Audio as $audio){
            $associazione = new FilialeUser();
            $associazione->user_id = $audio['id'];
            $associazione->filiale_id = $request->idFiliale;
            $associazione->save();
        }

        foreach($request->Amm as $amm){
            $associazione = new FilialeUser();
            $associazione->user_id = $amm['id'];
            $associazione->filiale_id = $request->idFiliale;
            $associazione->save();
        }

        return Filiale::with('users:id,name')->orderBy('nome')->get();
    }

    public function eliminaAssociazione($id)
    {
        FilialeUser::find($id)->delete();
        return Filiale::with('users:id,name')->orderBy('nome')->get();
    }
}
