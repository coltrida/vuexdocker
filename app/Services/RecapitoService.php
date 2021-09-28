<?php


namespace App\Services;


use App\Models\Recapito;
use App\Models\User;
use Illuminate\Support\Str;
use function trim;

class RecapitoService
{
    public function lista()
    {
        return Recapito::orderBy('nome')->get();
    }

    public function listaPerAudio()
    {
        return User::audio()->with(['recapito' => function($recapito){
            $recapito->orderBy('provincia');
        }])->orderBy('name')->get();
    }

    public function recapitiByAudio($idAudio)
    {
        return User::with('recapito')->find($idAudio)->recapito;
    }

    public function aggiungi($request)
    {
        return Recapito::create([
            'nome' => trim(Str::upper($request->nome)),
            'indirizzo' => trim(Str::upper($request->indirizzo)),
            'citta' => trim(Str::upper($request->citta)),
            'user_id' => $request->user_id,
            'provincia' => trim(Str::upper($request->provincia)),
        ]);

        /*$new = new Recapito();
        $new->nome = trim(Str::upper($request->nome));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->user_id = $request->user_id;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->save();
        return $new;*/
    }

    public function elimina($id)
    {
        return Recapito::find($id)->delete();
    }
}
