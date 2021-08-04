<?php

namespace App\Http\Resources;

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
            'giorno' => $this->giorno,
            'orario' => Str::substr($this->orario, 0, 5),
            'luogo' => $this->filiale_id ? $this->filiale->nome : $this->recapito->nome,
            'fullname' => $this->client->fullname,
        ];
    }
}
