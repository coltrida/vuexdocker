<?php


namespace App\Services;


use App\Models\Filiale;

class FilialeService
{
    public function filiali()
    {
        return Filiale::orderBy('nome')->get();
    }
}
