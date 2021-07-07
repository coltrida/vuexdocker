<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Fattura
 *
 * @property int $id
 * @property int|null $prova_id
 * @property string|null $data_fattura
 * @property int|null $acconto
 * @property int|null $nr_rate
 * @property int|null $tot_fattura
 * @property int|null $al_saldo
 * @property int|null $tot_fattura_scontato
 * @property int|null $sconto
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Prova|null $prova
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Ratefattura[] $rata
 * @property-read int|null $rata_count
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura query()
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereAcconto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereAlSaldo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereDataFattura($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereNrRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereProvaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereSconto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereTotFattura($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereTotFatturaScontato($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fattura whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Fattura extends Model
{
    use HasFactory;

    protected $table = 'fatturas';

    public function rata()
    {
        return $this->hasMany(Ratefattura::class);
    }

    public function prova()
    {
        return $this->belongsTo(Prova::class)->with('client');
    }
}
