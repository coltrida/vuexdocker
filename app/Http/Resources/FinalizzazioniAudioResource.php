<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FinalizzazioniAudioResource extends JsonResource
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
            'mese_fine' => $this->mese_fine,
            'client' => $this->client,
            'tot' => $this->tot,
            'products' => $this->products,
            'ggProva' => 5
        ];
    }
}
