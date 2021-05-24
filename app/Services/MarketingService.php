<?php


namespace App\Services;


use App\Models\Marketing;

class MarketingService
{
    public function canali()
    {
        return Marketing::orderBy('name')->get();
    }

    public function addCanale($request)
    {
        $newCanale = new Marketing();
        $newCanale->name = $request->newCanale;
        $newCanale->save();
        return $newCanale;
    }

    public function eliminaCanale($id)
    {
        return Marketing::find($id)->delete();
    }
}
