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
                'nome' => 'Budget',
                'user_id' => 2,
                'budgetAnno' => 100000,
                'stipendio' => 1000,
                'provvigione' => 10,
                'gennaio' => 8000,
                'febbraio' => 10000,
                'marzo' => 8000,
                'aprile' => 10000,
                'maggio' => 8000,
                'giugno' => 8000,
                'luglio' => 8000,
                'agosto' => 8000,
                'settembre' => 8000,
                'ottobre' => 8000,
                'novembre' => 8000,
                'dicembre' => 8000,
            ],
            [
                'nome' => 'Budget',
                'user_id' => 3,
                'budgetAnno' => 120000,
                'stipendio' => 1200,
                'provvigione' => 10,
                'gennaio' => 8000,
                'febbraio' => 10000,
                'marzo' => 8000,
                'aprile' => 10000,
                'maggio' => 8000,
                'giugno' => 8000,
                'luglio' => 8000,
                'agosto' => 8000,
                'settembre' => 8000,
                'ottobre' => 8000,
                'novembre' => 8000,
                'dicembre' => 8000,
            ],
            [
                'nome' => 'Budget',
                'user_id' => 4,
                'budgetAnno' => 110000,
                'stipendio' => 1100,
                'provvigione' => 10,
                'gennaio' => 8000,
                'febbraio' => 10000,
                'marzo' => 8000,
                'aprile' => 10000,
                'maggio' => 8000,
                'giugno' => 8000,
                'luglio' => 8000,
                'agosto' => 8000,
                'settembre' => 8000,
                'ottobre' => 8000,
                'novembre' => 8000,
                'dicembre' => 8000,
            ],
        ]);
    }
}
