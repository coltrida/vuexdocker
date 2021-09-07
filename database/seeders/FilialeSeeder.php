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
                'indirizzo' => 'VIA MARIO LALLI 10',
                'citta' => 'PISA',
                'telefono' => '0506206057',
                'cap' => '56127',
                'provincia' => 'PI',
            ],
            [
                'nome' => 'CIVITANOVA',
                'indirizzo' => null,
                'citta' => null,
                'telefono' => null,
                'cap' => null,
                'provincia' => null,
            ],
            [
                'nome' => 'LUCCA',
                'indirizzo' => null,
                'citta' => null,
                'telefono' => null,
                'cap' => null,
                'provincia' => null,
            ],
            [
                'nome' => 'LIVORNO',
                'indirizzo' => null,
                'citta' => null,
                'telefono' => null,
                'cap' => null,
                'provincia' => null,
            ]
        ]);
    }
}
