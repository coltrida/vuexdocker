<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class AppuntamentiSospesiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'client_id' => $this->client_id,
            'citta' => $this->client->citta,
            'giorno' => Carbon::make($this->giorno)->format('d-m-Y'),
            'giornoOriginale' => $this->giorno,
            'intervenuto' => $this->intervenuto,
            'fullname' => $this->client->fullname,
            'nome' => $this->client->nome,
            'cognome' => $this->client->cognome,
            'filiale_id' => $this->client->filiale_id,
        ];
    }
}
