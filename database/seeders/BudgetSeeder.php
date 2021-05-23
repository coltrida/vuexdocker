<?php

namespace Database\Seeders;

use App\Models\Budget;
use Illuminate\Database\Seeder;

class BudgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Budget::insert([
            [
                'budgetAnno' => 100000,
                'stipendio' => 1000,
                'provvigione' => 10,
                'gennaio' => 8,
                'febbraio' => 10,
                'marzo' => 8,
                'aprile' => 10,
                'maggio' => 8,
                'giugno' => 8,
                'luglio' => 8,
                'agosto' => 8,
                'settembre' => 8,
                'ottobre' => 8,
                'novembre' => 8,
                'dicembre' => 8,
            ],
            [
                'budgetAnno' => 120000,
                'stipendio' => 1200,
                'provvigione' => 10,
                'gennaio' => 8,
                'febbraio' => 10,
                'marzo' => 8,
                'aprile' => 10,
                'maggio' => 8,
                'giugno' => 8,
                'luglio' => 8,
                'agosto' => 8,
                'settembre' => 8,
                'ottobre' => 8,
                'novembre' => 8,
                'dicembre' => 8,
            ],
            [
                'budgetAnno' => 110000,
                'stipendio' => 1100,
                'provvigione' => 10,
                'gennaio' => 8,
                'febbraio' => 10,
                'marzo' => 8,
                'aprile' => 10,
                'maggio' => 8,
                'giugno' => 8,
                'luglio' => 8,
                'agosto' => 8,
                'settembre' => 8,
                'ottobre' => 8,
                'novembre' => 8,
                'dicembre' => 8,
            ],
        ]);
    }
}
