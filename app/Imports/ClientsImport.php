<?php

namespace App\Imports;

use App\Models\Client;
use Carbon\Carbon;
use Arr;
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
        foreach ($collection as $key=>$value)
        {
            //dd($value);
            if ($value['cognome'] != null){
                $filiale = 1;
                $user = 2;
                if(in_array($value['comune'] , ['OSIMO', 'ANCONA', 'SENIGALLIA', 'JESI', 'FABRIANO', 'FALCONARA MARITTIMA', 'OSTRA'])) {
                    $filiale = 4;
                    $user = 8;
                } elseif (in_array($value['comune'] , ['LORETO',
                    'POTENZA PICENA', 'MONTEGIORGIO', "PORTO SANT'ELPIDIO", 'MONTEGRANARO', 'RECANATI', 'MACERATA',
                    'CIVITANOVA MARCHE', 'FERMO', 'PORTO SAN GIORGIO', 'CAMERINO'])) {
                    $filiale = 2;
                    $user = 9;
                }
                Client::insert([
                    'cognome'       => $value['cognome'],
                    'nome'          => $value['nome'],
                    'indirizzo'     => $value['indirizzo'],
                    'cap'           => $value['cap'],
                    'citta'         => $value['comune'],
                    'provincia'     => $value['provincia'],
                    'telefono'      => $value['numtel'],
                    'tipologia_id'  => 6,
                    'marketing_id'  => 4,
                    'filiale_id'    => $filiale,
                    'user_id'       => $user,
                    'created_at'    => Carbon::now(),
                    'updated_at'    => Carbon::now(),
                    'mese'          => Carbon::now()->month,
                    'anno'          => Carbon::now()->year,
                ]);
            }

        }
    }
}
