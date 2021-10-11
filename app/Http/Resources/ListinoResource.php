<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ListinoResource extends JsonResource
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
            'fornitore' => $this->fornitore->nome,
            'fornitore_id' => $this->fornitore_id,
            'categoria' => $this->categoria->nome,
            'categoria_id' => $this->categoria_id,
            'costo' => '€ '.number_format($this->costo, 0, ',', '.'),
            'costoOriginal' => $this->costo,
            'prezzolistino' => '€ '.number_format($this->prezzolistino, 0, ',', '.'),
            'prezzoOriginal' => $this->prezzolistino,
            'scontoMax' => $this->scontoMax.' %',
            'iva' => $this->iva.' %',
            'ivaOriginal' => $this->iva,
            'giorniTempoDiReso' => $this->giorniTempoDiReso,
            'filiale' => $this->filiale,
            'nomeMatricola' => $this->nome,
        ];
    }
}
