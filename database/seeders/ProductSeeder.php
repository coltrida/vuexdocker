<?php

namespace Database\Seeders;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use function config;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::insert([
            [
                'matricola' => '123',
                'stato_id' => 5,
                'filiale_id' => 2,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 1,
                'created_at' => Carbon::make('2021-03-02'),
                'updated_at' => Carbon::make('2021-03-02'),
            ],
            [
                'matricola' => '234',
                'stato_id' => 5,
                'filiale_id' => 2,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 1,
                'created_at' => Carbon::make('2021-03-02'),
                'updated_at' => Carbon::make('2021-03-02'),
            ],
            [
                'matricola' => '456',
                'stato_id' => 5,
                'filiale_id' => 2,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 1,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => '567',
                'stato_id' => 5,
                'filiale_id' => 2,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 1,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],

            [
                'matricola' => 'sadf',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 1,
                'user_id' => 2,
                'client_id' => 4,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-02'),
                'updated_at' => Carbon::make('2021-03-02'),
            ],
            [
                'matricola' => 'sghggfadf',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 1,
                'user_id' => 2,
                'client_id' => 4,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-02'),
                'updated_at' => Carbon::make('2021-03-02'),
            ],
            [
                'matricola' => 'jjjjj',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 2,
                'user_id' => 2,
                'client_id' => 3,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => 'ssdghrrr',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 2,
                'user_id' => 2,
                'client_id' => 3,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => 'jjhggfhdfgjjj',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 3,
                'user_id' => 2,
                'client_id' => 3,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => 'ssdjhkhjkkghrrr',
                'stato_id' => 4,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => 3,
                'user_id' => 2,
                'client_id' => 3,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => 'jj555jjj',
                'stato_id' => 5,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
            [
                'matricola' => 'ffhghrrr',
                'stato_id' => 5,
                'filiale_id' => 1,
                'listino_id' => 4,
                'fornitore_id' => 3,
                'fattura_id' => null,
                'user_id' => null,
                'client_id' => null,
                'ddt_id' => 2,
                'created_at' => Carbon::make('2021-03-20'),
                'updated_at' => Carbon::make('2021-03-20'),
            ],
        ]);
    }
}
