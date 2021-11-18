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
            'dataoriginale' => $this->datarecall,
            'esito' => $this->esito,
            'eseguita' => $this->eseguita_id != 0 ? $this->user->name : null,
            'note' => $this->note,
        ];
    }
}
