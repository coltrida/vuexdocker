<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fatturati extends Model
{
    use HasFactory;
    protected $table = 'fatturatis';

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
