<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Risultatitel
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Risultatitel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Risultatitel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Risultatitel query()
 * @mixin \Eloquent
 */
class Risultatitel extends Model
{
    use HasFactory;
    protected $table = 'risultatitels';
    protected $guarded = [];
}
