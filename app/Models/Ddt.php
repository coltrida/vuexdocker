<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ddt extends Model
{
    use HasFactory;

    protected $table = 'ddts';

    public function filiale()
    {
        return $this->belongsTo(Filiale::class);
    }
}
