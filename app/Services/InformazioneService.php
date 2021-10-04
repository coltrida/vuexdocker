<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Informazione;
use Illuminate\Support\Str;
use function trim;

class InformazioneService
{
    public function lista($id)
    {
        return Client::with(['informazione' => function($q){
            $q->latest();
        }])->find($id)->informazione;
    }

    public function aggiungi($request)
    {
        return Informazione::create([
            'client_id' => $request->client_id,
            'giorno' => $request->giorno,
            'tipo' => trim(Str::upper($request->tipo)),
            'note' => trim(Str::upper($request->note)),
        ]);
    }

}
