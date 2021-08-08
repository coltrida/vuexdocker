<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ventaglio extends Model
{
    use HasFactory;
    protected $table = 'ventaglios';
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
