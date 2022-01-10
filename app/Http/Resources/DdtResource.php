<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class DdtResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'progressivo' => $this->progressivo,
            'nome_destinazione' => $this->nome_destinazione,
            'indirizzo_destinazione' => $this->indirizzo_destinazione,
            'citta_destinazione' => $this->citta_destinazione,
            'provincia_destinazione' => $this->provincia_destinazione,
            'created_at' => Carbon::make($this->created_at)->format('d-m-Y'),
            'products' => $this->products
        ];
    }
}
