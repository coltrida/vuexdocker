<?php

namespace App\Imports;

use App\Models\Client;
use App\Models\Filiale;
use App\Models\Informazione;
use App\Models\User;
use Carbon\Carbon;
use Arr;
use Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Collection;

class ClientsImport implements ToCollection, WithHeadingRow
{
    /**
     * @param Collection $collection
     */
    public function collection(Collection $collection)
    {
        $idCosseddu = User::where('name', 'Federico Cosseddu')->first()->id;
        $idCaracciolo = User::where('name', 'Selene Caracciolo')->first()->id;
        $idSerra = User::where('name', 'Matteo Serra')->first()->id;
        $idAudioFirenze = User::where('name', 'Audio Firenze')->first()->id;
        $idAudioAscoli = User::where('name', 'Audio Ascoli')->first()->id;
        $idMantovani = User::where('name', 'Marina Mantovani')->first()->id;
        $idCervone = User::where('name', 'Liliana Cervone')->first()->id;
        $idPapatheodoru = User::where('name', 'Athanasia Papatheodoru')->first()->id;

        $idPisa = Filiale::where('nome', 'PISA')->first()->id;
        $idCivitanova = Filiale::where('nome', 'CIVITANOVA')->first()->id;
        $idLucca = Filiale::where('nome', 'LUCCA')->first()->id;
        $idMacerata = Filiale::where('nome', 'MACERATA')->first()->id;
        $idAscoli = Filiale::where('nome', 'ASCOLI')->first()->id;
        $idViareggio = Filiale::where('nome', 'VIAREGGIO')->first()->id;
        $idFirenze = Filiale::where('nome', 'FIRENZE')->first()->id;

        foreach ($collection as $key=>$value)
        {
            //dd($value);

            $inArezzo = (in_array(trim(Str::upper($value['comune'])), config('enum.arezzo')));
            $inAncona = (in_array(trim(Str::upper($value['comune'])), config('enum.ancona')));

            if ($value['cognome'] != null && !$inArezzo && !$inAncona){
                $filiale = $idPisa;
                $user = $idCosseddu;
                /*if(in_array(trim(Str::upper($value['comune'])), $ancona)) {
                    $filiale = 4;
                    $user = 8;
                }*/ if (in_array(trim(Str::upper($value['comune'])), config('enum.civitanova'))) {
                    $filiale = $idCivitanova;
                    $user = $idPapatheodoru;
                } elseif (in_array(trim(Str::upper($value['comune'])), config('enum.macerata'))) {
                    $filiale = $idMacerata;
                    $user = $idMantovani;
                } elseif (in_array(trim(Str::upper($value['comune'])), config('enum.firenze'))) {
                    $filiale = $idFirenze;
                    $user = $idAudioFirenze;
                }
                $client = Client::create([
                    'cognome'       => Str::upper($value['cognome']),
                    'nome'          => Str::upper($value['nome']),
                    'indirizzo'     => $value['indirizzo'] ? Str::upper($value['indirizzo']) : null,
                    'cap'           => $value['cap'] ? trim(Str::upper($value['cap'])) : null,
                    'citta'         => $value['comune'] ? trim(Str::upper($value['comune'])) : null,
                    'provincia'     => $value['provincia'] ? trim(Str::upper($value['provincia'])) : null,
                    'telefono'      => $value['numtel'] ? $value['numtel'] : null,
                    'telefono2'     => $value['numtel2'] ? $value['numtel2'] : null,
                    'tipologia_id'  => 6,
                    'marketing_id'  => 4,
                    'filiale_id'    => $filiale,
                    'user_id'       => $user,
                    'created_at'    => Carbon::now(),
                    'updated_at'    => Carbon::now(),
                    'mese'          => Carbon::now()->month,
                    'anno'          => Carbon::now()->year,
                ]);

                Informazione::create([
                    'client_id' => $client->id,
                    'tipo' => 'INGRESSO',
                    'note' => 'Inserito da Lista Esterna',
                    'giorno' => $client->created_at->format('Y-m-d'),
                ]);
            }
        }
    }
}
