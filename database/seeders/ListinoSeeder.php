<?php

namespace Database\Seeders;

use App\Models\Listino;
use Illuminate\Database\Seeder;

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
                'prezzolistino' => 4000,
                'iva' => 4
            ],
            [
                'nome' => 'M70',
                'fornitore_id' => 1,
                'categoria_id' => 1,
                'costo' => 800,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 3500,
                'iva' => 4
            ],
            [
                'nome' => 'SILVER',
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 300,
                'giorniTempoDiReso' => 120,
                'prezzolistino' => 1500,
                'iva' => 4
            ],
            [
                'nome' => 'GET',
                'fornitore_id' => 3,
                'categoria_id' => 1,
                'costo' => 150,
                'giorniTempoDiReso' => 60,
                'prezzolistino' => 1200,
                'iva' => 4
            ],
            [
                'nome' => 'TV LINK',
                'fornitore_id' => 2,
                'categoria_id' => 1,
                'costo' => 200,
                'giorniTempoDiReso' => 90,
                'prezzolistino' => 400,
                'iva' => 22
            ]

        ]);
    }
}
