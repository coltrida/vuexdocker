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
            'categoria' => $this->categoria->nome,
            'costo' => '€ '.number_format($this->costo, 0, ',', '.'),
            'prezzolistino' => '€ '.number_format($this->prezzolistino, 0, ',', '.'),
            'iva' => $this->iva.' %',
            'giorniTempoDiReso' => $this->giorniTempoDiReso,
            'filiale' => $this->filiale
        ];
    }
}
