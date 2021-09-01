<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ProductResource extends JsonResource
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
            'giorniRimasti' => $this->datacarico ? Carbon::now()->diffInDays($this->datacarico) : null,
            'datacarico' => $this->datacarico ? Carbon::make($this->datacarico)->format('d-m-Y') : null,
            'listinoId' => $this->listino->id,
            'nomeMatricola' => $this->listino->nome.' - '.$this->matricola,
            'soglia' => $this->listino->filiale[0]->pivot->soglia,
        ];
    }
}
