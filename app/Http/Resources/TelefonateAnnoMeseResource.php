<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class TelefonateAnnoMeseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'datarecall' => Carbon::make($this->datarecall)->format('d-m-Y'),
            'esito' => $this->esito,
            'user' => $this->user,
            'client' => $this->client,
            'audio' => $this->audio,
        ];
    }
}
