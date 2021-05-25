<?php

namespace Database\Seeders;

use App\Models\Fornitore;
use Illuminate\Database\Seeder;

class FornitoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Fornitore::insert([
            [
                'nome' => 'PHONAK',
                'indirizzo' => 'REALKDA òLKDA FLòKDKL',
                'citta' => 'MILANO',
                'cap' => '6546',
                'provincia' => 'MI',
                'telefono' => '654645665',
            ],
            [
                'nome' => 'STARKEY',
                'indirizzo' => 'REALKDA òLKDA FLòKDKL',
                'citta' => 'ROMA',
                'cap' => '6546',
                'provincia' => 'RM',
                'telefono' => '3454353454334',
            ],
            [
                'nome' => 'OTICON',
                'indirizzo' => 'REALKDA òLKDA FLòKDKL',
                'citta' => 'FIRENZE',
                'cap' => '6546',
                'provincia' => 'FI',
                'telefono' => '3454354343',
            ]
        ]);
    }
}
