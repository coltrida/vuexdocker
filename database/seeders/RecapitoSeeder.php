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
                'informazioni' => 'STUDI MEDICI, SOPRA LA FARMACIA COMUNALE',
                'user_id' => 2,
                'filiale_id' => 3,
                'codiceIdentificativo' => 'R1'
            ],
            [
                'nome' => 'OTTICA APPOLLONI',
                'indirizzo' => 'PIAZZA G. MATTEOTTI 168',
                'citta' => 'QUERCETA DI SERAVEZZA',
                'provincia' => 'LU',
                'telefono' => '0584760689',
                'informazioni' => "E' IN UNA TRAVERSA DELLA STRADA STATALE",
                'user_id' => 3,
                'filiale_id' => 3,
                'codiceIdentificativo' => 'R2'
            ],
            [
                'nome' => 'CENTRO MEDICO BLUGALLERY',
                'indirizzo' => 'VIA FERRANTE FERRANTI, 41',
                'citta' => 'TACCOLI',
                'provincia' => 'MC',
                'telefono' => '0733639051',
                'informazioni' => "AL PRIMO PIANO DELLO STABILE NELLA PIAZZA",
                'user_id' => 9,
                'filiale_id' => 2,
                'codiceIdentificativo' => 'R3'
            ],
        ]);
    }
}
