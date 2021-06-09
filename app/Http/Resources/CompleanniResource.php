<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompleanniResource extends JsonResource
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
            'indirizzo' => $this->indirizzo,
            'citta' => $this->citta,
            'cap' => $this->cap,
            'provincia' => $this->provincia,
            'telefono' => $this->telefono,
            'tipologia' => $this->tipologia->nome,
            'datanascita' => $this->datanascita,
            'fullname' => $this->fullname,
        ];
    }
}
