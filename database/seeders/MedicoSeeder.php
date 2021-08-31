<?php

namespace Database\Seeders;

use App\Models\Medico;
use Illuminate\Database\Seeder;
use DB;

class MedicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Medico::insert([
            [
                'nome' => 'SCARAMUZZINO MANELA'
            ],
            [
                'nome' => 'FATTORI BRUNO'
            ],
            [
                'nome' => 'MAGGI DUILIO'
            ],
            [
                'nome' => 'FIACCHINI GIACOMO'
            ],
            [
                'nome' => 'SUGLIA MIMMO'
            ],
            [
                'nome' => 'NOTTOLI STEFANIA'
            ],
            [
                'nome' => 'MARSALLI GIULIA'
            ],
        ]);

        DB::table('medico_user')->insert([
            [
                'medico_id' => 1,
                'user_id' => 2,
            ],
            [
                'medico_id' => 2,
                'user_id' => 2,
            ],
            [
                'medico_id' => 3,
                'user_id' => 2,
            ],
            [
                'medico_id' => 4,
                'user_id' => 2,
            ],
            [
                'medico_id' => 5,
                'user_id' => 2,
            ],
            [
                'medico_id' => 6,
                'user_id' => 2,
            ],
            [
                'medico_id' => 7,
                'user_id' => 2,
            ],

        ]);
    }
}
