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
                'indirizzo' => 'FDSALKF JòDLFJ òLADSKJ',
                'citta' => 'MILANO',
                'provincia' => 'MI',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA BIANCHI',
                'indirizzo' => 'DSFDSA ASDFDS ',
                'citta' => 'MILANO',
                'provincia' => 'MI',
                'user_id' => 3,
            ],
            [
                'nome' => 'FARMACIA BAMBI',
                'indirizzo' => 'AS FGHGHJGHGFH',
                'citta' => 'FIRENZE',
                'provincia' => 'FI',
                'user_id' => 3,
            ],
            [
                'nome' => 'FARMACIA PIPPO',
                'indirizzo' => 'ASFASHJGJHD FGFGF',
                'citta' => 'PISA',
                'provincia' => 'PI',
                'user_id' => 3,
            ],
            [
                'nome' => 'FARMACIA NERI',
                'indirizzo' => 'ASFD DSF DSHGFHGFHGHGFHG',
                'citta' => 'PISA',
                'provincia' => 'PI',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA BUBU',
                'indirizzo' => 'ASDFADS DFGFDGFDS',
                'citta' => 'LUCCA',
                'provincia' => 'LU',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA GIGI',
                'indirizzo' => 'ASF DS DHGHDGHFG',
                'citta' => 'LUCCA',
                'provincia' => 'LU',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA RIGHI',
                'indirizzo' => 'ASDFA DSFADSFAS F',
                'citta' => 'AREZZO',
                'provincia' => 'AR',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA CAT',
                'indirizzo' => 'ASDF DSFDFDDDDDDD',
                'citta' => 'AREZZO',
                'provincia' => 'AR',
                'user_id' => 2,
            ],
            [
                'nome' => 'FARMACIA VERDI',
                'indirizzo' => 'A SF FDS DFSDSF ASFDS',
                'citta' => 'PISA',
                'provincia' => 'PI',
                'user_id' => 2,
            ]
        ]);
    }
}
