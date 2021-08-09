<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;

    protected $table = 'medicos';
    protected $guarded = [];

    public function orari()
    {
        return $this->hasMany(OrarioMedico::class);
    }

    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    public function prova()
    {
        return $this->hasManyThrough(Prova::class, Client::class);
    }
}
