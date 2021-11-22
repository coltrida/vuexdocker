<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ProductInProvaResource extends JsonResource
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
            'matricola' => $this->matricola,
            'nome' => $this->listino->nome,
            'fornitore' => $this->listino->fornitore->nome,
            'categoria' => $this->listino->categoria->nome,
            'costo' => '€ '.number_format($this->listino->costo, 0, ',', '.'),
            'prezzolistino' => '€ '.number_format($this->listino->prezzolistino, 0, ',', '.'),
            'iva' => $this->listino->iva.' %',
            'giorniTempoDiReso' => $this->listino->giorniTempoDiReso,
            'cliente' => $this->client->nome.' '.$this->client->cognome,
            'fullname' => $this->client->fullname,
            'filiale_id' => $this->client->filiale_id,
            'nomeCliente' => $this->client->nome,
        ];
    }
}
