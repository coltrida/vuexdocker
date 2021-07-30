<?php


namespace App\Services;


use App\Models\Marketing;
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
        $newCanale = new Marketing();
        $newCanale->name = trim(Str::upper($request->newCanale));
        $newCanale->save();
        return $newCanale;
    }

    public function eliminaCanale($id)
    {
        return Marketing::find($id)->delete();
    }

    public function fatturatoCanali()
    {
        return Marketing::withSum('provaFattura', 'tot')
            ->get();
    }
}
