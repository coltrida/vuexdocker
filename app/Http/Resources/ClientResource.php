<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ClientResource extends JsonResource
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
            'nome' => $this->nome,
            'cognome' => $this->cognome,
            'codfisc' => $this->codfisc,
            'indirizzo' => $this->indirizzo,
            'citta' => $this->citta,
            'cap' => $this->cap,
            'provincia' => $this->provincia,
            'telefono' => $this->telefono,
            'tipologia' => $this->tipologia->nome,
            'tipologia_id' => $this->tipologia_id,
            'marketing' => $this->marketing->name,
            'marketing_id' => $this->marketing_id,
            'user' => $this->user->name,
            'user_id' => $this->user_id,
            'filiale' => $this->filiale->nome,
            'filiale_id' => $this->filiale_id,
            'recapito' => isset($this->recapito->nome) ? $this->recapito->nome : null,
            'recapito_id' => $this->recapito_id,
            'datanascita' => $this->datanascita,
        ];
    }
}
