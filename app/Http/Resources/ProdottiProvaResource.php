<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use function number_format;

class ProdottiProvaResource extends JsonResource
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
            'idProduct' => $this->product_id,
            'matricola' => $this->product->matricola,
            'nome' => $this->product->listino->nome,
            'prezzo' => '€ '.number_format($this->prezzo, 0, ',', '.'),
            'originalPrezzo' => $this->prezzo,
            'orecchio' => $this->orecchio,
        ];
    }
}
