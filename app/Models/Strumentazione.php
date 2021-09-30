<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Strumentazione
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Strumentazione newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Strumentazione newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Strumentazione query()
 * @mixin \Eloquent
 */
class Strumentazione extends Model
{
    use HasFactory;

    protected $table = 'strumentaziones';
    protected $guarded = [];

    public function filiale()
    {
        return $this->belongsTo(Filiale::class);
    }

    public function medico()
    {
        return $this->belongsTo(Medico::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
