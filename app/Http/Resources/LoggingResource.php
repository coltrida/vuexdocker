<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LoggingResource extends JsonResource
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
            'created_at' => $this->created_at->format('d/m/Y - H:i'),
            'description' => $this->description,
            'log_name' => $this->log_name,
            'event' => $this->event,
            'subject_type' => $this->subject_type,
        ];
    }
}
