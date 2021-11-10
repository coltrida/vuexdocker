<?php

namespace App\Imports;

use App\Models\Client;
use App\Models\Informazione;
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
        foreach ($collection as $key=>$value)
        {
            //dd($value);

            $arezzo = ['CAMUCIA', 'CASTIGLION FIORENTINO',
                'POZZO DELLA CHIANA', 'PIEVE AL TOPPO', 'RIGUTINO', 'BADIA AL PINO', 'CIVITELLA IN VAL DI CHIANA',
                'ALBERORO','CAPOLONA', 'CASTIGLION FIBOCCHI', 'CASTIGLIONE DEL LAGO', 'CORTONA', 'CORCIANO', 'CHITIGNANO', 'CESA',
                'FOIANO DELLA CHIANA', 'GUBBIO', 'LUCIGNANO', 'MONTE SAN SAVINO', 'MARCIANO DELLA CHIANA', 'MONTEVARCHI',
                'PIEVE SANTO STEFANO', 'SAN LEO', 'TEGOLETO', 'TERONTOLA', 'VITIANO', 'SARTEANO'];

            $ancona = ['OSIMO', 'ANCONA', 'SENIGALLIA', 'JESI', 'FABRIANO',
                'FALCONARA MARITTIMA', 'FALCONARA', 'OSTRA', 'AGUGLIANO', 'ALBACINA', 'APIRO', 'ARCEVIA', 'BARBARA',
                'BELVEDERE OSTRENSE', 'CAMERATA PICENA', 'CASTEL COLONNA', 'CASTELBELLINO', 'CASTELFERRETTI',
                'CAMERANO', 'CASTELPLANIO', 'CHIARAVALLE', 'CORINALDO', 'CUPRAMONTANA', 'MAIOLATI SPONTINI',
                'MARINA DI MONTEMARCIANO', 'MERGO', 'MOIE', 'MONSANO', 'MONTE SAN VITO', 'MONTEROBERTO', 'MONTESICURO',
                'NUMANA', 'OFFAGNA', 'OSTRA VETERE', 'POLVERIGI', 'SAN MARCELLO', 'SANTA MARIA NUOVA', 'TORRETTE',
                'TRECASTELLI', 'SIROLO', 'GENGA', 'MONTEMARCIANO', 'COLLINE DI SANTA MARIA NUOVA'];

            $civitanova = ['LORETO',
                'POTENZA PICENA', 'MONTEGIORGIO', "PORTO SANT'ELPIDIO", 'MONTEGRANARO', 'RECANATI',
                'CIVITANOVA MARCHE', 'FERMO', 'PORTO SAN GIORGIO', 'FARMACIA CARDINALI', 'ACI LORETO', 'ALTIDONA',
                'ASCOLI PICENO', 'ATHANASIA', 'BOLOGNOLA', 'CASTELFIDARDO', 'CASTELRAIMONDO', 'CESSAPALOMBO', 'CINGOLI',
                'COMUNANZA', 'FALERONE', 'FIASTRA', 'FILOTTRANO', 'MATELICA', 'MONTE SAN GIUSTO', 'MONTECOSARO',
                'MORESCO', 'MORROVALLE', 'MUMMUIOLA', 'PONZANO DI FERMO', 'PORTO POTENZA PICENA', 'PORTO RECANATI',
                'SAN BENEDETTO DEL TRONTO', 'SAN GINESIO', 'SAN SEVERINO MARCHE', 'SARNANO', 'TOLENTINO', 'STAFFOLO',
                'SERVIGLIANO', 'FIUMINATA'];

            $macerata = ['MACERATA', 'CAMERINO', 'APPIGNANO', 'CORRIDONIA',
                'LORO PICENO', 'MOGLIANO', 'MONTECASSIANO', 'PASSO DI TREIA', 'POLLENZA', 'SAMBUCHETO', 'TREIA',
                'URBISAGLIA'];

            $firenze = ['FIRENZE', 'BAGNO A RIPOLI', 'GRASSINA', 'FIESOLE', 'SESTO FIORENTINO',
                'SCANDICCI', 'SIGNA', 'IMPRUNETA'];

            $inArezzo = (in_array(trim(Str::upper($value['comune'])), $arezzo));

            if ($value['cognome'] != null && !$inArezzo){
                $filiale = 1;
                $user = 2;
                if(in_array(trim(Str::upper($value['comune'])), $ancona)) {
                    $filiale = 4;
                    $user = 8;
                } elseif (in_array(trim(Str::upper($value['comune'])), $civitanova)) {
                    $filiale = 2;
                    $user = 9;
                } elseif (in_array(trim(Str::upper($value['comune'])), $macerata)) {
                    $filiale = 5;
                    $user = 6;
                } elseif (in_array(trim(Str::upper($value['comune'])), $firenze)) {
                    $filiale = 8;
                    $user = 5;
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
