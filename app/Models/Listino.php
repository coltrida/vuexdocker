<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Listino
 *
 * @property int $id
 * @property string|null $nome
 * @property int|null $fornitore_id
 * @property int|null $categoria_id
 * @property string|null $costo
 * @property string|null $prezzolistino
 * @property string|null $iva
 * @property string|null $giorniTempoDiReso
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Categoria|null $categoria
 * @property-read \App\Models\Fornitore|null $fornitore
 * @method static \Illuminate\Database\Eloquent\Builder|Listino fromfornitore($idFornitore)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Listino newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Listino query()
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereCategoriaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereCosto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereFornitoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereGiorniTempoDiReso($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereIva($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereNome($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino wherePrezzolistino($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Listino whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Listino extends Model
{
    use HasFactory;

    protected $table = 'listinos';

    public function fornitore()
    {
        return $this->belongsTo(Fornitore::class);
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function scopeFromfornitore($query, $idFornitore)
    {
        return $query->where('fornitore_id', $idFornitore);
    }
}
