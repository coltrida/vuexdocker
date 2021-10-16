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
        $recapito = Recapito::create([
            'nome' => trim(Str::upper($request->nome)),
            'indirizzo' => trim(Str::upper($request->indirizzo)),
            'citta' => trim(Str::upper($request->citta)),
            'user_id' => $request->user_id,
            'provincia' => trim(Str::upper($request->provincia)),
            'informazioni' => trim(Str::upper($request->informazioni)),
        ]);

        if($request->hasfile('file')) {
            $file = $request->file('file');
            $filename = $recapito->id.'.jpg';
            $path = 'recapiti/'.$request->fileName;
            \Storage::disk('public')->putFileAs($path, $file, $filename);
        }

        return $recapito;
    }

    public function modifica($request)
    {
       // dd($request);
        $recapito = Recapito::find($request->id);
        $recapito->nome = trim(Str::upper($request->nome));
        $recapito->indirizzo = trim(Str::upper($request->indirizzo));
        $recapito->citta = trim(Str::upper($request->citta));
        $recapito->user_id = $request->user_id;
        $recapito->provincia = trim(Str::upper($request->provincia));
        $recapito->informazioni = trim(Str::upper($request->informazioni));
        $recapito->save();

        if($request->hasfile('file')) {
            $file = $request->file('file');
            $filename = $recapito->id.'.jpg';
            $path = 'recapiti/'.$request->fileName;
            \Storage::disk('public')->putFileAs($path, $file, $filename);
        }

        return $recapito;
    }

    public function elimina($id)
    {
        return Recapito::find($id)->delete();
    }
}
