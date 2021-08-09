<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrarioMedico extends Model
{
    use HasFactory;

    protected $table = 'orario_medicos';
    protected $guarded = [];
}
