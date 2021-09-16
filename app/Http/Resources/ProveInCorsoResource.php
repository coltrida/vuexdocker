<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProveInCorsoResource extends JsonResource
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
            'user_id' => $this->user_id,
            'client_id' => $this->client_id,
            'stato_id' => $this->stato_id,
            'giorni_prova' => $this->giorni_prova,
            'tot' => '€ '.number_format( (float) $this->tot, '0', ',', '.'),
            'client' => $this->client,
        ];
    }
}
