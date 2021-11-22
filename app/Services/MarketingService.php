<?php


namespace App\Services;


use App\Models\Marketing;
use App\Models\User;
use Illuminate\Support\Str;
use function trim;

class MarketingService
{
    public function canali()
    {
        return Marketing::orderBy('name')->get();
    }

    public function addCanale($request)
    {
        return Marketing::create([
            'name' => trim(Str::upper($request->nome)),
            'cod' => trim(Str::upper($request->cod)),
        ]);
    }

    public function eliminaCanale($id)
    {
        return Marketing::find($id)->delete();
    }

    public function fatturatoCanali()
    {
        return Marketing::
            withSum('provaFattura', 'tot')
            ->withCount('clients')
            ->get();
    }

    public function userFatturatoCanali()
    {
        $audios = User::audio()->get();
        foreach ($audios as $audio){
            $market = Marketing::
            whereHas('clients', function ($q) use($audio){
                $q->where('user_id', $audio->id);
            })
                ->withSum(
                    ['provaFattura' => function($query) use($audio) {
                        $query->where('user_id', $audio->id);
                    }],
                    'tot'
                )
                ->withCount(['clients' => function($q) use($audio){
                    $q->where('user_id', $audio->id);
                }])
                ->get();

            $audio->valori = $market;
        }
        return $audios;
    }
}
