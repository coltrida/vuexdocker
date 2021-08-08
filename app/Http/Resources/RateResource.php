<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class RateResource extends JsonResource
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
            'prova' => $this->prova,
            'data_saldo' => $this->data_saldo ? Carbon::make($this->data_saldo)->format('d-m-Y') : null,
            'data_fattura' => Carbon::make($this->data_fattura)->format('d-m-Y'),
            'ultima_rata' => $this->ultima_rata ? Carbon::make($this->ultima_rata)->format('d-m-Y') : null,
            'tot_fattura' => '€ '.number_format( (float) $this->tot_fattura, '2', ',', '.') ,
            'al_saldo' => '€ '.number_format( (float) $this->al_saldo, '2', ',', '.') ,
            'rate' => RataResource::collection($this->rate)
        ];
    }
}
