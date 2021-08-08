<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RataResource extends JsonResource
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
            'created_at' => $this->created_at->format('d-m-Y'),
            'importo' => '€ '.number_format( (float) $this->importo, '2', ',', '.') ,
            'note' => $this->note
        ];
    }
}
