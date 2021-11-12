<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TelefonateResource extends JsonResource
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
            'datarecall' => Carbon::make($this->datarecall)->format('d-m-Y'),
            'esito' => $this->esito,
            'eseguita' => $this->user->name,
            'note' => $this->note,
        ];
    }
}
