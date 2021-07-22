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
            'created_at' => $this->created_at->format('d/m/Y'),
            'description' => $this->description,
            'properties' => $this->properties,
        ];
    }
}
