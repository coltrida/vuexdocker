<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductProva extends Model
{
    use HasFactory;

    protected $table = 'product_prova';

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
