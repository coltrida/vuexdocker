<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AudioDettaglioResource extends JsonResource
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
        ];
    }
}
