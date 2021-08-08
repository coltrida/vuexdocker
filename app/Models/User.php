<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use function config;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property int $ruolo_id
 * @property int|null $budget_id
 * @property int|null $fatturati_id
 * @property int|null $delta_id
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string|null $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamenti
 * @property-read int|null $appuntamenti_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiOggi
 * @property-read int|null $appuntamenti_oggi_count
 * @property-read \App\Models\Budget|null $budget
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Client[] $client
 * @property-read int|null $client_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Client[] $clientCompleanno
 * @property-read int|null $client_compleanno_count
 * @property-read \App\Models\Delta|null $delta
 * @property-read \App\Models\Fatturati|null $fatturati
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Filiale[] $filiale
 * @property-read int|null $filiale_count
 * @property-read mixed $is_admin
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Budget[] $moltiBudget
 * @property-read int|null $molti_budget_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Delta[] $moltiDelta
 * @property-read int|null $molti_delta_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Fatturati[] $moltiFatturati
 * @property-read int|null $molti_fatturati_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Prova[] $prova
 * @property-read int|null $prova_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Recapito[] $recapito
 * @property-read int|null $recapito_count
 * @property-read \App\Models\Ruolo $ruolo
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @method static \Illuminate\Database\Eloquent\Builder|User amm()
 * @method static \Illuminate\Database\Eloquent\Builder|User audio($bgt = '')
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereBudgetId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDeltaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFatturatiId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRuoloId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Agenda[] $agenda
 * @property-read int|null $agenda_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiDomani
 * @property-read int|null $appuntamenti_domani_count
 * @property int|null $pezzi_id
 * @property-read \App\Models\Pezzi|null $pezzi
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePezziId($value)
 * @property string|null $cleanpassword
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiGiovedi
 * @property-read int|null $appuntamenti_giovedi_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiGiovediProssimo
 * @property-read int|null $appuntamenti_giovedi_prossimo_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiLunedi
 * @property-read int|null $appuntamenti_lunedi_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiLunediProssimo
 * @property-read int|null $appuntamenti_lunedi_prossimo_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiMartedi
 * @property-read int|null $appuntamenti_martedi_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiMartediProssimo
 * @property-read int|null $appuntamenti_martedi_prossimo_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiMercoledi
 * @property-read int|null $appuntamenti_mercoledi_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiMercolediProssimo
 * @property-read int|null $appuntamenti_mercoledi_prossimo_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiVenerdi
 * @property-read int|null $appuntamenti_venerdi_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Appuntamento[] $appuntamentiVenerdiProssimo
 * @property-read int|null $appuntamenti_venerdi_prossimo_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Pezzi[] $moltiPezzi
 * @property-read int|null $molti_pezzi_count
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCleanpassword($value)
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Fattura[] $clientDaSaldare
 * @property-read int|null $client_da_saldare_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Fattura[] $clientSaldati
 * @property-read int|null $client_saldati_count
 */
class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function ruolo()
    {
        return $this->belongsTo(Ruolo::class);
    }

    public function recapito()
    {
        return $this->hasMany(Recapito::class);
    }

    public function filiale()
    {
        return $this->belongsToMany(Filiale::class, 'filiale_user', 'user_id', 'filiale_id');
    }

    public function scopeAudio($query, $bgt='')
    {
        if($bgt == ''){
            return $query->whereHas('ruolo', function ($ruolo){
                $ruolo->where('nome', 'audio');
            });
        } else if ($bgt == 1){
            return $query->whereHas('ruolo', function ($ruolo){
                $ruolo->where('nome', 'audio');
            })->where('budget_id', '!=', '');
        } else if ($bgt == 2){
            return $query->whereHas('ruolo', function ($ruolo){
                $ruolo->where('nome', 'audio');
            })->where('budget_id', null);;
        }

    }

    public function scopeAmm($query)
    {
        return $query->whereHas('ruolo', function ($ruolo){
            $ruolo->where('nome', 'amministrazione');
        });
    }

    public function getIsAdminAttribute()
    {
        return $this->ruolo->nome == 'admin' ? true : false;
    }

    public function budget()
    {
        return $this->belongsTo(Budget::class);
    }

    public function moltiBudget()
    {
        return $this->hasMany(Budget::class);
    }

    public function delta()
    {
        return $this->belongsTo(Delta::class);
    }

    public function moltiDelta()
    {
        return $this->hasMany(Delta::class);
    }

    public function pezzi()
    {
        return $this->belongsTo(Pezzi::class);
    }

    public function moltiPezzi()
    {
        return $this->hasMany(Pezzi::class);
    }

    public function fatturati()
    {
        return $this->belongsTo(Fatturati::class);
    }

    public function moltiFatturati()
    {
        return $this->hasMany(Fatturati::class);
    }

    public function prova()
    {
        return $this->hasMany(Prova::class);
    }

    public function provaInCorso()
    {
        return $this->hasMany(Prova::class)->whereHas('stato', function($q){
            $q->where('nome', 'PROVA');
        })->with('client:id,nome,cognome', 'product');
    }

    public function provaFinalizzata()
    {
        $anno = Carbon::now()->year;
        return $this->hasMany(Prova::class)
            ->where('anno_fine', $anno)
            ->whereHas('stato', function($q){
                $q->where('nome', 'FATTURA');
        })->with('client:id,nome,cognome', 'product');
    }

    public function fatturatoMese()
    {
        return $this->hasMany(Prova::class)->whereHas('stato', function($q){
            $q->where('nome', 'FATTURA');
        })->groupBy('mese_fine');
    }

    public function provaReso()
    {
        return $this->hasMany(Prova::class)->whereHas('stato', function($q){
            $q->where('nome', 'RESO');
        })->with('client:id,nome,cognome', 'product');
    }

    public function client()
    {
        return $this->hasMany(Client::class);
    }

    public function clientCompleanno()
    {
        $oggi = Carbon::now();
        $giorno = $oggi->day;
        $mese = $oggi->month;
        return $this->hasMany(Client::class)->where([
            ['giornoNascita', $giorno],
            ['meseNascita', $mese]
        ]);
    }

    public function appuntamenti()
    {
        return $this->hasMany(Appuntamento::class);
    }

    public function appuntamentiOggi()
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $oggi);
    }

    public function appuntamentiDomani()
    {
        $domani = Carbon::now()->addDay()->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $domani);
    }

    public function appuntamentiLunedi()
    {
        $giorno = Carbon::now()->startOfWeek()->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno)->orderBy('orario');
    }

    public function appuntamentiMartedi()
    {
        $giorno = Carbon::now()->startOfWeek()->addDay()->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiMercoledi()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(2)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiGiovedi()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(3)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiVenerdi()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(4)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno)->orderBy('orario');
    }

    public function appuntamentiLunediProssimo()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(7)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno)->orderBy('orario');
    }

    public function appuntamentiMartediProssimo()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(8)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiMercolediProssimo()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(9)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiGiovediProssimo()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(10)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno);
    }

    public function appuntamentiVenerdiProssimo()
    {
        $giorno = Carbon::now()->startOfWeek()->addDays(11)->format('Y-m-d');
        return $this->hasMany(Appuntamento::class)->where('giorno', $giorno)->orderBy('orario');
    }

    public function agenda()
    {
        return $this->hasMany(Agenda::class);
    }

    public function clientDaSaldare()
    {
        return $this->hasMany(Fattura::class)->where('saldata', false);
    }

    public function clientSaldati()
    {
        return $this->hasMany(Fattura::class)->where([
            ['saldata', true],
            ['pagatoAudio', false],
        ]);
    }

    public function productsFinalizzati()
    {
        $anno = Carbon::now()->year;
        return $this->hasMany(Product::class)
            ->whereHas('stato', function($q) {
                $q->where('nome', 'FATTURA');
        })
            ->whereHas('prova', function($q) use($anno) {
                $q->where('anno_fine', $anno);
        });
    }

    public function ventaglio()
    {
        return $this->hasMany(Ventaglio::class);
    }
}
