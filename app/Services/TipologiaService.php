<?php


namespace App\Services;


use App\Models\Tipologia;
use Illuminate\Support\Str;
use function trim;

class TipologiaService
{
    public function lista()
    {
        return Tipologia::orderBy('nome')->get();
    }

    public function aggiungi($request)
    {
        $new = new Tipologia();
        $new->nome = trim(Str::upper($request->nome));
        $new->recall = $request->recall;
        $new->save();
        return $new;
    }

    public function elimina($id)
    {
        return Tipologia::find($id)->delete();
    }
}
