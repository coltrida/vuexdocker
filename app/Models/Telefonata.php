<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Telefonata extends Model
{
    use HasFactory;

    protected $table = 'telefonatas';
    protected $guarded = [];
}
