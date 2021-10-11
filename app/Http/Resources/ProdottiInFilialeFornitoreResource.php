<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ProdottiInFilialeFornitoreResource extends JsonResource
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
            'prezzolistino' => $this->listino->prezzolistino,
            'scontoMax' => $this->listino->scontoMax,
            'iva' => $this->listino->iva.' %',
            'giorniTempoDiReso' => $this->listino->giorniTempoDiReso,
            'listinoId' => $this->listino->id,
            'nomeMatricola' => $this->listino->nome.' - matr. '.$this->matricola
        ];
    }
}
