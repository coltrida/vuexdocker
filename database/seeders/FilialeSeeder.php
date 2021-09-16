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
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'MC',
            ],
            [
                'nome' => 'LUCCA',
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'LU',
            ],
            [
                'nome' => 'ANCONA',
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'AN',
            ],
            [
                'nome' => 'MACERATA',
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'MC',
            ],
            [
                'nome' => 'LIVORNO',
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'LI',
            ],
            [
                'nome' => 'VIAREGGIO',
                'indirizzo' => '........',
                'citta' => '........',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'LU',
            ],
        ]);
    }
}
