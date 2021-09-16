<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SituazioneMeseResource extends JsonResource
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
            'ruolo_id' => $this->ruolo_id,
            'budget_id' => $this->budget_id,
            'fatturati_id' => $this->fatturati_id,
            'prova_finalizzata_sum_tot' => $this->prova_finalizzata_sum_tot ?
                '€ '.number_format( (float) $this->prova_finalizzata_sum_tot, '0', ',', '.') : null,
            'prova_in_corso_count' => $this->prova_in_corso_count,
            'prova_in_corso' => $this->prova_in_corso ? ProveInCorsoResource::collection($this->prova_in_corso) : null,
            'budget' => $this->budget,
            'prova_finalizzata' => $this->prova_finalizzata
        ];
    }
}
