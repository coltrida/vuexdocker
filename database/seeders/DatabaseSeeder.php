<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use function now;
use Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RuoloSeeder::class,
            MedicoSeeder::class,
            CategoriaSeeder::class,
            StatoApaSeeder::class,
            FilialeSeeder::class,
            UserSeeder::class,
            MarketingSeeder::class,
            FornitoreSeeder::class,
            ListinoSeeder::class,
            RecapitoSeeder::class,
            FilialeUserSeeder::class,
       //     ClientSeeder::class,
            BudgetSeeder::class,
            ProductSeeder::class,
            TipologiaSeeder::class,
     //       AgendaSeeder::class,
            FilialeListinoSeeder::class,
   //         AppuntamentoSeeder::class
   //         ProvaSeeder::class,
    //        ProductProvaSeeder::class,
   //         FatturaSeeder::class
        ]);

        Storage::disk('public')->deleteDirectory('/documenti/');
        Storage::disk('public')->deleteDirectory('/fatture/');
        Storage::makeDirectory('/documenti');
        Storage::makeDirectory('/fatture/2021/');
    }
}
