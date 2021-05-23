<?php

namespace Database\Seeders;

use App\Models\Filiale;
use Illuminate\Database\Seeder;

class FilialeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Filiale::insert([
            [
                'nome' => 'PISA',
                'indirizzo' => 'VIA ROSSI 23',
                'citta' => 'PISA',
                'telefono' => '0559583503',
                'cap' => '520226',
                'provincia' => 'PI',
            ],
            [
                'nome' => 'LUCCA',
                'indirizzo' => 'VIA VICOLO STRETTO 23',
                'citta' => 'GARFAGNANA DI BARGA',
                'telefono' => '08554545',
                'cap' => '584652',
                'provincia' => 'LU',
            ],
            [
                'nome' => 'AREZZO',
                'indirizzo' => 'VIA VAI 3',
                'citta' => 'AREZZO',
                'telefono' => '08554545',
                'cap' => '584652',
                'provincia' => 'AR',
            ]
        ]);
    }
}
