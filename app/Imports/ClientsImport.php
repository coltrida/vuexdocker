<?php

namespace App\Imports;

use App\Models\Client;
use App\Models\Filiale;
use App\Models\Informazione;
use App\Models\Telefonata;
use App\Models\Tipologia;
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
        $tot = 0;

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
                $user = $idCervone;
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
                } elseif (in_array(trim(Str::upper($value['comune'])), config('enum.ascoli'))) {
                    $filiale = $idAscoli;
                    $user = $idAudioAscoli;
                } elseif (in_array(trim(Str::upper($value['comune'])), config('enum.lucca'))) {
                    $filiale = $idLucca;
                    $user = $idCervone;
                } elseif (in_array(trim(Str::upper($value['comune'])), config('enum.viareggio'))) {
                    $filiale = $idViareggio;
                    $user = $idCervone;
                }

                $client = Client::updateOrCreate(
                    [
                        'nome'          => trim(Str::upper($value['nome'])),
                        'cognome'       => trim(Str::upper($value['cognome'])),
                        'citta'         => trim(Str::upper($value['comune'])),
                        'indirizzo'     => $value['indirizzo'] ? Str::upper($value['indirizzo']) : null,
                    ],
                    [
                        'codfisc'       => $value['codfisc'] ? trim(Str::upper($value['codfisc'])) : null,
                        'cap'           => $value['cap'] ? trim(Str::upper($value['cap'])) : null,
                        'provincia'     => $value['provincia'] ? trim(Str::upper($value['provincia'])) : null,
                        'telefono'      => $value['numtel'] ? $value['numtel'] : null,
                        'telefono2'     => $value['numtel2'] ? $value['numtel2'] : null,
                        'tipologia_id'  => isset($value['cod']) ? $this->decriptaCodiceUtente($value['cod']) : 6,
                        'marketing_id'  => 4,
                        'filiale_id'    => $filiale,
                        'user_id'       => $user,
                        'created_at'    => Carbon::now(),
                        'updated_at'    => Carbon::now(),
                        'mese'          => Carbon::now()->month,
                        'anno'          => Carbon::now()->year,
                    ]
                );

                if ($client->wasRecentlyCreated){
                    $this->inserisciRecallAutomatico($client, $client->id);
                    $tot++;
                    Informazione::create([
                        'client_id' => $client->id,
                        'tipo' => 'INGRESSO',
                        'note' => 'Inserito da Lista Esterna',
                        'giorno' => $client->created_at->format('Y-m-d'),
                    ]);
                }

            }
        }
        config(['enum.totImportati' => $tot]);
    }

    private function inserisciRecallAutomatico($client, $idCliente)
    {
        if ($this->calcolaRecall($client->tipologia_id)){
            $telefonata = new Telefonata();
            $telefonata->user_id = $client->user_id;
            $telefonata->client_id = $idCliente;
            $telefonata->note = "recall automatico dell'inserimento paziente";
            $telefonata->datarecall = $this->calcolaRecall($client->tipologia_id);
            $telefonata->effettuata = false;
            $telefonata->save();
        }

    }

    private function calcolaRecall($tipologia_id)
    {
        $oggi = Carbon::now();
        $tipo = Tipologia::find($tipologia_id);
        return $tipo->recall ? $oggi->addDays($tipo->recall)->format('Y-m-d') : null;
    }

    private function decriptaCodiceUtente($cod)
    {
        $idPc = Tipologia::where('nome', 'PC')->first()->id;
        $idClC = Tipologia::where('nome', 'CLC')->first()->id;
        $idNormo = Tipologia::where('nome', 'NORMO')->first()->id;
        $codice = $idNormo;
        if ($cod === 'pca' || $cod === 'pc' || $cod === 'pramaturo' || $cod === 'pc non int.'){
            $codice = $idPc;
        } elseif ($cod === 'tappo'){
            $codice = 6;
        } elseif ($cod === 'cl' || $cod === 'clc'){
            $codice = $idClC;
        }

        return $codice;
    }
}
