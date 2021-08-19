<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class AppuntamentiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'filiale_id' => $this->client->filiale_id,
            'nome' => $this->client->nome,
            'cognome' => $this->client->cognome,
            'indirizzo' => $this->client->indirizzo,
            'citta' => $this->client->citta,
            'provincia' => $this->client->provincia,
            'telefono' => $this->client->telefono,
            'giorno' => Carbon::make($this->giorno)->format('d-m-Y'),
            'orario' => Str::substr($this->orario, 0, 5),
            'luogo' => $this->filiale_id ? $this->filiale->nome : $this->recapito->nome,
            'nota' => $this->nota,
            'tipo' => $this->tipo,
            'fullname' => $this->client->fullname,
        ];
    }
}
