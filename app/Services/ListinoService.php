<?php


namespace App\Services;


use App\Models\Listino;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;

class ListinoService
{
    public function listino()
    {
        return Listino::with('categoria', 'filiale', 'fornitore:id,nome')->orderBy('fornitore_id')->orderBy('categoria_id')->get();
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
        //dd($request->idFiliale);
        $listino = new Listino();

        $listino->categoria_id = $request['categoria_id'];
        $listino->nome = trim(Str::upper($request['nome']));
        $listino->costo = trim($request['costo']);
        $listino->giorniTempoDiReso = trim($request['giorniTempoDiReso']);
        $listino->fornitore_id = $request['fornitore_id'];
        $listino->prezzolistino = trim($request['prezzolistino']);
        $listino->iva = trim($request['iva']);
        $listino->save();

        for ($i=0; $i < count($request->soglie); $i++){
            if ($request->soglie[$i] != null){
                $listino->filiale()->attach($request->idFiliali[$i], ['soglia' => $request->soglie[$i]]);
            }
        }

        $type = 'string';
        Schema::table('ventaglios', function (Blueprint $table) use ($type, $listino) {
            $table->$type(str_replace(' ', '', $listino->nome))->default(0);
        });

        return Listino::with('categoria', 'fornitore:id,nome')->find($listino->id);
    }

    public function rimuovi($id)
    {
        return Listino::find($id)->delete();
    }

    public function nomiApa()
    {
        $nomi = [];
        $list = Listino::apparecchi()->pluck('nome');
        foreach ($list as $ele){
            array_push($nomi, str_replace(' ', '', $ele));
        }
        return $nomi;
    }
}
