<?php

namespace Database\Seeders;

use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use function rand;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i < 50; $i++){
            Client::create([
                'nome' => 'CLIENTE'.$i.'21',
                'cognome' => 'COGNOME'.$i.'21',
                'codfisc' => Str::random(11),
                'indirizzo' => Str::upper(Str::random(20)),
                'cap' => rand(1,9).rand(1,9).rand(1,9).rand(1,9).rand(1,9),
                'citta' => Str::upper(Str::random(10)),
                'provincia' => Str::upper(Str::random(2)),
                'telefono' => '321615612',
                'tipologia_id' => rand(1,4),
                'marketing_id' => rand(1,3),
                'user_id' => 2,
                'filiale_id' => 1,
                'mese' => Carbon::now()->subMonths(rand(0,5))->month,
                'anno' => Carbon::now()->year,
                'recapito_id' => rand(1,9)
            ]);
        }

        for ($i = 1; $i < 50; $i++){
            Client::create([
                'nome' => 'CLIENTE'.$i.'22',
                'cognome' => 'COGNOME'.$i.'22',
                'codfisc' => Str::random(11),
                'indirizzo' => Str::upper(Str::random(20)),
                'cap' => rand(1,9).rand(1,9).rand(1,9).rand(1,9).rand(1,9),
                'citta' => Str::upper(Str::random(10)),
                'provincia' => Str::upper(Str::random(2)),
                'telefono' => '321615612',
                'tipologia_id' => rand(1,4),
                'marketing_id' => rand(1,3),
                'user_id' => 5,
                'filiale_id' => 2,
                'mese' => Carbon::now()->subMonths(rand(0,5))->month,
                'anno' => Carbon::now()->year,
                'recapito_id' => rand(1,9)
            ]);
        }

        for ($i = 1; $i < 50; $i++){
            Client::create([
                'nome' => 'CLIENTE'.$i.'23',
                'cognome' => 'COGNOME'.$i.'23',
                'codfisc' => Str::random(11),
                'indirizzo' => Str::upper(Str::random(20)),
                'cap' => rand(1,9).rand(1,9).rand(1,9).rand(1,9).rand(1,9),
                'citta' => Str::upper(Str::random(10)),
                'provincia' => Str::upper(Str::random(2)),
                'telefono' => '321615612',
                'tipologia_id' => rand(1,4),
                'marketing_id' => rand(1,3),
                'user_id' => 6,
                'filiale_id' => 3,
                'mese' => Carbon::now()->subMonths(rand(0,5))->month,
                'anno' => Carbon::now()->year,
                'recapito_id' => rand(1,9)
            ]);
        }
    }
}
