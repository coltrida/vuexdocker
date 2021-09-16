<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Appuntamento
 *
 * @property int $id
 * @property string $giorno
 * @property string $orario
 * @property string|null $nota
 * @property int $client_id
 * @property int $user_id
 * @property int|null $filiale_id
 * @property int|null $recapito_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Client $client
 * @property-read \App\Models\Filiale|null $filiale
 * @property-read \App\Models\Recapito|null $recapito
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento query()
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereFilialeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereGiorno($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereNota($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereOrario($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereRecapitoId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereUserId($value)
 * @mixin \Eloquent
 * @property string $tipo
 * @property-read mixed $calcologiorno
 * @method static \Illuminate\Database\Eloquent\Builder|Appuntamento whereTipo($value)
 */
class Appuntamento extends Model
{
    use HasFactory;

    protected $table = 'appuntamentos';

    public function getCalcologiornoAttribute()
    {
        return Carbon::make($this->giorno);
    }

    public function filiale()
    {
        return $this->belongsTo(Filiale::class);
    }

    public function recapito()
    {
        return $this->belongsTo(Recapito::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
