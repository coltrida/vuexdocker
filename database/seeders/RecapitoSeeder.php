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
                'nome' => 'IGEA SALUS',
                'indirizzo' => 'VIALE EUROPA 1',
                'citta' => 'LAMMARI',
                'provincia' => 'LU',
                'telefono' => '0583174896',
                'user_id' => 3,
            ],
            [
                'nome' => 'OTTICA APPOLLONI',
                'indirizzo' => 'PIAZZA G. MATTEOTTI 168',
                'citta' => 'QUERCETA DI SERAVEZZA',
                'provincia' => 'LU',
                'telefono' => '0584760689',
                'user_id' => 3,
            ],
        ]);
    }
}
