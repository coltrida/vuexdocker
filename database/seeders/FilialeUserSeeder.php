<?php

namespace Database\Seeders;

use App\Models\FilialeUser;
use Illuminate\Database\Seeder;

class FilialeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FilialeUser::insert([
            [
                'filiale_id' => 1,
                'user_id' => 2,
            ],
/*            [
                'filiale_id' => 1,
                'user_id' => 3,
            ],
            [
                'filiale_id' => 2,
                'user_id' => 4,
            ],
            [
                'filiale_id' => 1,
                'user_id' => 4,
            ],
            [
                'filiale_id' => 2,
                'user_id' => 9,
            ],
            [
                'filiale_id' => 3,
                'user_id' => 5,
            ],
            [
                'filiale_id' => 3,
                'user_id' => 6,
            ],
            [
                'filiale_id' => 4,
                'user_id' => 8,
            ],*/
        ]);
    }
}
