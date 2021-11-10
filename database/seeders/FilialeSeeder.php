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
                'informazioni' => 'ACCANTO ALLA QUESTURA',
                'codiceIdentificativo' => 'F1'
            ],
            [
                'nome' => 'CIVITANOVA',
                'indirizzo' => '........',
                'citta' => 'CIVITANOVA',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'MC',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F2'
            ],
            [
                'nome' => 'LUCCA',
                'indirizzo' => '........',
                'citta' => 'LUCCA',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'LU',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F3'
            ],
            [
                'nome' => 'ANCONA',
                'indirizzo' => '........',
                'citta' => 'ANCONA',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'AN',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F4'
            ],
            [
                'nome' => 'MACERATA',
                'indirizzo' => '........',
                'citta' => 'MACERATA',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'MC',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F5'
            ],
            [
                'nome' => 'SAN BENEDETTO',
                'indirizzo' => '........',
                'citta' => 'SAN BENEDETTO DEL TRONTO',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'AP',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F6'
            ],
            [
                'nome' => 'VIAREGGIO',
                'indirizzo' => '........',
                'citta' => 'VIAREGGIO',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'LU',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F7'
            ],
            [
                'nome' => 'FIRENZE',
                'indirizzo' => '........',
                'citta' => 'FIRENZE',
                'telefono' => '........',
                'cap' => '........',
                'provincia' => 'FI',
                'informazioni' => '..........',
                'codiceIdentificativo' => 'F8'
            ],
        ]);
    }
}
