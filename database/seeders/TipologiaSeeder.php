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
                'recall' => 1
            ],
            [
                'nome' => 'CL',
                'recall' => 10
            ],
            [
                'nome' => 'CLC',
                'recall' => 20
            ],
            [
                'nome' => 'DEC',
                'recall' => null
            ],
        ]);
    }
}
