<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DettaglioAudioResource extends JsonResource
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
            'name' => $this->name,
            'budget_id' => $this->budget_id,
            'fatturati_id' => $this->fatturati_id,
            'delta_id' => $this->delta_id,
            'pezzi_id' => $this->pezzi_id,
            'pezzi' => $this->pezzi,
            'delta' => $this->delta,
            'prova_finalizzata' => $this->prova_finalizzata ? $this->prova_finalizzata : [],
        ];
    }
}
