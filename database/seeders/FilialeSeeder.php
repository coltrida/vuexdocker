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
                'indirizzo' => 'VIA VICOLO STRETTO 23',
                'citta' => 'CIVITANOVA MARCHE',
                'telefono' => '08554545',
                'cap' => '584652',
                'provincia' => 'MC',
            ],
            [
                'nome' => 'SAN BENEDETTO',
                'indirizzo' => 'VIA VAI 3',
                'citta' => 'SAN BENEDETTO DEL TRONTO',
                'telefono' => '08554545',
                'cap' => '584652',
                'provincia' => 'AP',
            ],
            [
                'nome' => 'ANCONA',
                'indirizzo' => 'VIA MOLTO LUNGA 4',
                'citta' => 'ANCONA',
                'telefono' => '08554545',
                'cap' => '584652',
                'provincia' => 'AN',
            ]
        ]);
    }
}
