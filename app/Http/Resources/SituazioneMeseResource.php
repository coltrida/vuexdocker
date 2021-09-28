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
            'delta_id' => $this->delta_id,
            'pezzi_id' => $this->pezzi_id,
            'prova_finalizzata_sum_tot' => $this->prova_finalizzata_sum_tot ?
                '€ '.number_format( (float) $this->prova_finalizzata_sum_tot, '0', ',', '.') : null,
            'prova_in_corso_count' => $this->prova_in_corso_count,
            'prova_in_corso' => $this->prova_in_corso,
            'budget' => $this->budget,
            'prova_reso' => $this->prova_reso,
            'prova_finalizzata' => $this->prova_finalizzata
        ];
    }
}
