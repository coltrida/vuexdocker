<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use function now;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'name' => 'CACAO',
                'email' => 'cacao@cacao.it',
                'ruolo_id' => 1,
                'budget_id' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Davide Coltrioli',
                'email' => 'audio@audio.it',
                'ruolo' => 2,
                'budget_id' => 1,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Cecchi Massimiliano',
                'email' => 'audio2@audio.it',
                'ruolo' => 2,
                'budget_id' => 2,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'audio3',
                'email' => 'audio3@audio.it',
                'ruolo' => 2,
                'budget_id' => 3,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'amministrativo',
                'email' => 'amm@amm.it',
                'ruolo' => 3,
                'budget_id' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ]
        ]);
    }
}
