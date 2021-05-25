<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use function setlocale;
use const LC_TIME;

class Product extends Model
{
    use HasFactory;

    public function prova()
    {
        return $this->belongsToMany(Prova::class, 'product_prova', 'product_id', 'prova_id')
            ->withPivot('prezzo');
    }

    public function listino()
    {
        return $this->belongsTo(Listino::class);
    }

    public function filiale()
    {
        return $this->belongsTo(Filiale::class);
    }

    public function stato()
    {
        return $this->belongsTo(StatoApa::class, 'stato_id', 'id');
    }

    public function scopeFiliale($query)
    {
        return $query->whereHas('stato', function ($stato){
            $stato->where('nome', 'FILIALE');
        });
    }

    public function scopeProva($query)
    {
        return $query->whereHas('stato', function ($stato){
            $stato->where('nome', 'PROVA');
        });
    }

    public function scopeRichiesto($query)
    {
        return $query->whereHas('stato', function ($stato){
            $stato->where('nome', 'RICHIESTO');
        });
    }

    public function fornitore()
    {
        return $this->belongsTo(Fornitore::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function ddt()
    {
        return $this->belongsTo(Ddt::class);
    }

    public function getGiorniInProvaAttribute()
    {
        $now = Carbon::now();
        //return $this->created_at->diff($now)->days;
        return $this->listino->giorniTempoDiReso - $this->created_at->diff($now)->days;
    }
}
