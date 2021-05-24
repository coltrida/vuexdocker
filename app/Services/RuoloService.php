<?php


namespace App\Services;


use App\Models\Ruolo;

class RuoloService
{
    public function lista()
    {
        return Ruolo::where('nome', '!=', 'admin')->orderBy('nome')->get();
    }

    public function aggiungi($request)
    {
        $new = new Ruolo();
        $new->nome = $request->nome;
        $new->save();
        return $new;
    }

    public function elimina($id)
    {
        return Ruolo::find($id)->delete();
    }
}
