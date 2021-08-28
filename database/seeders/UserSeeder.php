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
                'name' => 'ADMIN',
                'email' => 'info@centroudito.eu',
                'ruolo_id' => 1,
                'budget_id' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Federico Cosseddu',
                'email' => 'cosseddu@centroudito.eu',
                'ruolo' => 2,
                'budget_id' => 1,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Selene Caracciolo',
                'email' => 'caracciolo@centroudito.eu',
                'ruolo' => 2,
                'budget_id' => 2,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Matteo Serra',
                'email' => 'serra@centroudito.eu',
                'ruolo' => 2,
                'budget_id' => 3,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Alberto Parlagreco',
                'email' => 'parlagreco@centroudito.eu',
                'ruolo' => 2,
                'budget_id' => 4,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Athanasia Papatheodoru',
                'email' => 'papatheodoru@centroudito.eu',
                'ruolo' => 2,
                'budget_id' => 5,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'Amministrativa',
                'email' => 'amministrazione@centroudito.eu',
                'ruolo' => 3,
                'budget_id' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
            [
                'name' => 'call center',
                'email' => 'call@centroudito.eu',
                'ruolo' => 4,
                'budget_id' => null,
                'email_verified_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
                'password' => Hash::make('123456'),
            ],
        ]);
    }
}
