<?php

namespace Database\Seeders;

use App\Models\Marketing;
use Illuminate\Database\Seeder;

class MarketingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Marketing::insert([
            [
                'name' => 'GIORNALE',
            ],
            [
                'name' => 'SCREENING',
            ],
            [
                'name' => 'LETTERA',
            ],
            [
                'name' => 'LISTA ESTERNA',
            ]
        ]);
    }
}
