<?php

namespace Database\Seeders;

use App\Models\Recapito;
use Illuminate\Database\Seeder;

class RecapitoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Recapito::insert([
            [
                'nome' => 'FARMACIA ROSSI',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA BIANCHI',
                'user_id' => 3,
            ],
            [
                'nome' => 'FARMACIA VERDI',
                'user_id' => 2,
            ]
        ]);
    }
}
