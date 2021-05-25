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
            'marketing' => $this->marketing->nome,
            'user' => $this->user->name,
            'filiale' => $this->filiale->nome,
        ];
    }
}
