<?php

namespace Database\Seeders;

use App\Models\Tipologia;
use Illuminate\Database\Seeder;

class TipologiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tipologia::insert([
            [
                'nome' => 'PC',
                'recall' => 6
            ],
            [
                'nome' => 'CL',
                'recall' => 12
            ],
            [
                'nome' => 'CLC',
                'recall' => 12
            ],
            [
                'nome' => 'NORMO',
                'recall' => null
            ],

            [
                'nome' => 'DEC',
                'recall' => null
            ],
            [
                'nome' => 'LE',
                'recall' => null
            ],
        ]);
    }
}
