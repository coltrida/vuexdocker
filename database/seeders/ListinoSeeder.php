<?php

namespace Database\Seeders;

use App\Models\Listino;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ListinoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Listino::insert([
            [
                'nome' => 'M90',
                'fornitore_id' => 1,
                'categoria_id' => 1,
                'costo' => 1000,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 3200,
                'iva' => 4
            ],
            [
                'nome' => 'M70',
                'fornitore_id' => 1,
                'categoria_id' => 1,
                'costo' => 800,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 3000,
                'iva' => 4
            ],
            [
                'nome' => 'M50',
                'fornitore_id' => 1,
                'categoria_id' => 1,
                'costo' => 700,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2800,
                'iva' => 4
            ],
            [
                'nome' => 'M30',
                'fornitore_id' => 1,
                'categoria_id' => 1,
                'costo' => 500,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2300,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio 2400 AI'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 664,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2800,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio 2000 AI'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 469,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2500,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio 1600 AI'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 359,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2200,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio 1200 AI'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 265,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 1700,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio 2400 EDGE AI Lithium'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 729,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 3200,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio AI 2000 Lithium'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 509,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2600,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio AI 1600 Lithium'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 399,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 2300,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Livio AI 1200 Lithium'),
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 306,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 1800,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Charger ricaricabile'),
                'fornitore_id' => 2,
                'categoria_id' => 2,
                'costo' => 53,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 55,
                'iva' => 4
            ],
            [
                'nome' => Str::upper('Garanzia 3* anno'),
                'fornitore_id' => 2,
                'categoria_id' => 3,
                'costo' => 60,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 70,
                'iva' => 4
            ],
        ]);
    }
}
