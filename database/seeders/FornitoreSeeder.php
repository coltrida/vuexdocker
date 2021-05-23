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
            ],
            [
                'nome' => 'STARKEY',
            ],
            [
                'nome' => 'OTICON',
            ]
        ]);
    }
}
