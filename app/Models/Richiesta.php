<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Richiesta extends Model
{
    use HasFactory;
    protected $table = 'richiestas';
    protected $guarded = [];

    public function filiale()
    {
        return $this->belongsTo(Filiale::class);
    }

    public function listino()
    {
        return $this->belongsTo(Listino::class);
    }
}
