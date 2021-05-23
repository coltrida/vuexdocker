<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audiometria extends Model
{
    use HasFactory;

    protected $table = 'audiometrias';

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
