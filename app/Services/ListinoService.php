<?php


namespace App\Services;


use App\Models\Listino;
use Illuminate\Support\Str;

class ListinoService
{
    public function listino()
    {
        return Listino::with('categoria', 'fornitore:id,nome')->orderBy('fornitore_id')->orderBy('categoria_id')->get();
    }

    public function listinoFromFornitore($idFornitore)
    {
        return Listino::fromfornitore($idFornitore)->orderBy('categoria_id')->get();
    }

    public function listinoFromId($idListino)
    {
        return Listino::find($idListino);
    }

    public function inserisci($request)
    {
        $listino = new Listino();

        $listino->categoria_id = $request['categoria_id'];
        $listino->nome = trim(Str::upper($request['nome']));
        $listino->costo = trim($request['costo']);
        $listino->giorniTempoDiReso = trim($request['giorniTempoDiReso']);
        $listino->fornitore_id = $request['fornitore_id'];
        $listino->prezzolistino = trim($request['prezzolistino']);
        $listino->iva = trim($request['iva']);
        $listino->save();

        return Listino::with('categoria', 'fornitore:id,nome')->find($listino->id);
    }

    public function rimuovi($id)
    {
        return Listino::find($id)->delete();
    }
}
