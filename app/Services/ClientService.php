<?php


namespace App\Services;


use App\Models\Appuntamento;
use App\Models\Audiometria;
use App\Models\Client;
use App\Models\Filiale;
use App\Models\Informazione;
use App\Models\Marketing;
use App\Models\Prova;
use App\Models\Recapito;
use App\Models\Telefonata;
use App\Models\Tipologia;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function dd;
use function trim;

class ClientService
{
    public function lista()
    {
        return Client::with(['tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova' => function($q){
                $q->with('copiaComm')->first();
            }])
                ->orderBy('cognome')->get();
    }

    public function clienteFiliale($idFiliale)
    {
        $oggi = Carbon::now()->format('Y-m-d');
        return Client::with(['tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome',
            'recapito:id,nome', 'medico:id,nome,cognome', 'audiometria', 'prova' => function($q){
                $q->with('copiaComm')->first();
            }])
            ->withCount(['recalls' => function($r) use($oggi){
                $r->where([
                    ['created_at', $oggi],
                    ['effettuata', 1],
                ])->orWhere([
                    ['updated_at', $oggi],
                    ['effettuata', 1],
                ]);
            }])
            ->where('filiale_id', $idFiliale)
            ->whereHas('tipologia', function($q){
                $q->where('nome', '!=', 'DEC');
            })
            ->orderBy('cognome')
            ->get();
    }

    public function cliente($id)
    {
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome')->find($id);
    }

    public function compleanni($idAudio)
    {
        return User::with('clientCompleanno')->find($idAudio)->clientCompleanno;
    }

    public function aggiungi($request)
    {
        $sonoInModificaUtente = isset($request->id) ? true : false;
        $client = $sonoInModificaUtente ? Client::find($request->id) : new Client();

        $idListaEsterna = Tipologia::where('nome', 'LE')->first()->id;

        $client->nome = trim(Str::upper($request->nome));
        $client->cognome = trim(Str::upper($request->cognome));
        $client->codfisc = trim(Str::upper($request->codfisc)) == '' ? null : trim(Str::upper($request->codfisc));
        $client->indirizzo = trim(Str::upper($request->indirizzo));
        $client->citta = trim(Str::upper($request->citta));
        $client->cap = $request->cap;
        $client->provincia = trim(Str::upper($request->provincia));
        $client->telefono = $request->telefono;
        $client->telefono2 = $request->telefono2;
        $client->telefono3 = $request->telefono3;
        $client->tipologia_id = $request->tipologia_id ? $request->tipologia_id : $idListaEsterna;
        $client->marketing_id = $request->marketing_id;
        $client->filiale_id = $request->filiale_id;
        $client->medico_id = $request->medico_id;
        $client->recapito_id = $request->recapito_id;
        /*if($request->marketing_id == Marketing::where('name', 'MEDICO')->first()->id) {
            $client->medico_id = $request->recapito_id;
        } else {
            $client->recapito_id = $request->recapito_id;
        }*/
        $client->user_id = $request->user_id;
        $client->mail = trim(Str::upper($request->mail));
        $client->datanascita = $request->datanascita;
        $client->luogoNascita = trim(Str::upper($request->luogoNascita)) == '' ? null : trim(Str::upper($request->luogoNascita));
        $client->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $client->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $client->save();

        if(!$sonoInModificaUtente){
            $client->mese = Carbon::now()->month;
            $client->anno = Carbon::now()->year;
            $client->save();
        }

        if($client->tipologia_id && !$sonoInModificaUtente){
            $this->inserisciRecallAutomatico($client, $client->id);
        }

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $sonoInModificaUtente ? $utente->name.' ha modificato il nominativo '.$client->cognome.' '.$client->nome :
            $utente->name.' ha inserito il nominativo '.$client->cognome.' '.$client->nome;

        $log->scriviLog($client->cognome.' '.$client->nome, $utente, $utente->name, $propieta, $testo);

        Informazione::create([
            'client_id' => $client->id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'CLIENTE',
            'note' => $testo
        ]);

        return $client;
    }

    private function inserisciRecallAutomatico($client, $idCliente){
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

    public function calcolaRecall($tipologia_id)
    {
        $oggi = Carbon::now();
        $tipo = Tipologia::find($tipologia_id);
        return $tipo->recall ? $oggi->addDays($tipo->recall)->format('Y-m-d') : null;
    }

    public function elimina($request)
    {
        $client = Client::find($request->clientId);
        $user = User::find($request->userId);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $user->name.' ha eliminato il nominativo '.$client->cognome.' '.$client->nome;
        $log->scriviLog($client->cognome.' '.$client->nome, $user, $user->name, $propieta, $testo);
        return $client->delete();
    }

    public function ingressiRecapiti()
    {
        return Recapito::
            withcount('clients')
            ->withCount(['clients as clientsPc' => function($q){
                $q->where('tipologia_id', 1);
            }])
            ->withCount(['clients as clientsCl' => function($q){
                $q->where('tipologia_id', 2);
            }])
            ->withCount(['clients as clientsClc' => function($q){
                $q->where('tipologia_id', 3);
            }])
            ->withCount(['clients as clientsNormo' => function($q){
                $q->where('tipologia_id', 4);
            }])
            ->orderBy('nome')
            ->get();
    }

    public function ingressiRecapitiMesi()
    {
        $annoOggi = Carbon::now()->year;
        return Recapito::
            withcount('clients')
            ->withCount(['clients as gen' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 1],
                ]);
            }])
            ->withCount(['clients as feb' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 2],
                ]);
            }])
            ->withCount(['clients as mar' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 3],
                ]);
            }])
            ->withCount(['clients as apr' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 4],
                ]);
            }])
            ->withCount(['clients as mag' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 5],
                ]);
            }])
            ->withCount(['clients as giu' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 6],
                ]);
            }])
            ->withCount(['clients as lug' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 7],
                ]);
            }])
            ->withCount(['clients as ago' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 8],
                ]);
            }])
            ->withCount(['clients as set' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 9],
                ]);
            }])
            ->withCount(['clients as ott' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 10],
                ]);
            }])
            ->withCount(['clients as nov' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 11],
                ]);
            }])
            ->withCount(['clients as dic' => function($q) use($annoOggi){
                $q->where([
                    ['anno', $annoOggi],
                    ['mese', 12],
                ]);
            }])
            ->orderBy('nome')
            ->get();
    }

    public function province()
    {
        return Client::orderBy('provincia')
            ->where([['provincia', '!=', null], ['provincia', '!=', '']])
            ->get()
            ->unique('provincia')
            ->pluck('provincia');
    }

    public function cittaByProvincia($provincia)
    {
        return Client::where('provincia', $provincia)->orderBy('citta')->pluck('citta');
    }

    private function appuntamentoPresoRecentementeDaCallCenter($client){
        return Client::with(['appuntamenti' => function($r){
            $r->where('intervenuto', null);
        }])->where([
            ['nome', $client->nome],
            ['cognome', $client->cognome],
            ['citta', $client->citta],
        ])->whereHas('appuntamenti', function ($q){
            $q->where('intervenuto', null);
        })
            ->first();
    }

    private function copiaAnagrafica($clientInseritoDaCallCenter, $client){
        $clientInseritoDaCallCenter->nome = $client->nome;
        $clientInseritoDaCallCenter->cognome = $client->cognome;
        $clientInseritoDaCallCenter->created_at = $client->created_at;
        $clientInseritoDaCallCenter->updated_at = $client->updated_at;
        $clientInseritoDaCallCenter->citta = $client->citta;
        $clientInseritoDaCallCenter->indirizzo = $client->indirizzo;
        $clientInseritoDaCallCenter->provincia = $client->provincia;
        $clientInseritoDaCallCenter->telefono = $client->telefono;
        $clientInseritoDaCallCenter->telefono2 = $client->telefono2;
        $clientInseritoDaCallCenter->telefono3 = $client->telefono3;
        $clientInseritoDaCallCenter->cap = $client->cap;
        $clientInseritoDaCallCenter->datanascita = $client->datanascita;
        $clientInseritoDaCallCenter->recapito_id = $client->recapito_id;
        $clientInseritoDaCallCenter->mail = $client->mail;
        $clientInseritoDaCallCenter->tipologia_id = $client->tipologia_id;
        $clientInseritoDaCallCenter->marketing_id = $client->marketing_id;
        $clientInseritoDaCallCenter->filiale_id = $client->filiale_id;
        $clientInseritoDaCallCenter->mese = $client->mese;
        $clientInseritoDaCallCenter->anno = $client->anno;
        $clientInseritoDaCallCenter->save();
    }

    private function segnaAppuntamentoIntervenuto(Client $clientInseritoDaCallCenter){
        $clientInseritoDaCallCenter->appuntamenti[0]->intervenuto = true;
        $clientInseritoDaCallCenter->push();
    }

    public function importClientsFromNoah($request)
    {
        //dd($request);
        $idListaEsterna = Tipologia::where('nome', 'LE')->first()->id;
        $xmlDataString = file_get_contents(asset('/storage/'.$request['nomeFile']));
        $res = 0;
        $xml = simplexml_load_string($xmlDataString, NULL, NULL, "http://www.himsa.com/Measurement/PatientExport.xsd");
//dd($xml->Patient);
        foreach ($xml->Patient as $ele){
          //  dd((string)$ele->Patient->Province);
            $client = Client::updateOrCreate(
                [
                    'nome'          => trim(Str::upper($ele->Patient->FirstName)),
                    'cognome'       => trim(Str::upper($ele->Patient->LastName)),
                    'created_at'    => Carbon::make((string)$ele->Patient->CreateDate),
                ],
                [
                    'citta'         => $ele->Patient->City ? trim(Str::upper($ele->Patient->City)) : null,
                    'indirizzo'     => $ele->Patient->Address1 ? trim(Str::upper($ele->Patient->Address1)) : null,
                    'cap'           => $ele->Patient->Zip ? trim(Str::upper($ele->Patient->Zip)) : null,
                    'telefono'      => $ele->Patient->MobilePhone ? trim(Str::upper($ele->Patient->MobilePhone)) : null,
                    'telefono2'     => $ele->Patient->WorkPhone ? trim(Str::upper($ele->Patient->WorkPhone)) : null,
                    'telefono3'     => $ele->Patient->HomePhone ? trim(Str::upper($ele->Patient->HomePhone)) : null,
                    'provincia'     => $ele->Patient->Country ? trim(Str::upper($ele->Patient->Country)) : null,
                    'user_id'       => $request['idUser'],
                    'datanascita'   => $ele->Patient->DateofBirth ? trim(Str::upper($ele->Patient->DateofBirth)) : null,
                    'recapito_id'   => $ele->Patient->Other2 ? trim(Str::substr($ele->Patient->Other2, 1, 1)) : null,
                    'mail'          => $ele->Patient->EMail ? trim(Str::upper($ele->Patient->EMail)) : null,
                    'tipologia_id'  => (string)$ele->Patient->Province != '' ? Tipologia::where('nome', trim(Str::upper($ele->Patient->Province)))->first()->id : $idListaEsterna,
                    'marketing_id'  => $ele->Patient->Other1 ? $ele->Patient->Other1 : null,
                    'filiale_id'    => $this->getFilialeFromPlace(Str::of(Str::upper($ele->Patient->Other1))->trim(),
                        Str::of(Str::upper($ele->Patient->City))->trim()),
                    'updated_at'    => Carbon::make((string)$ele->Patient->CreateDate),
                    'mese'          => Carbon::make((string)$ele->Patient->CreateDate)->month,
                    'anno'          => Carbon::make((string)$ele->Patient->CreateDate)->year,
                ]
            );

            $idCliente = $client->id;

            if ($client->wasRecentlyCreated){
                if($clientInseritoDaCallCenter = $this->appuntamentoPresoRecentementeDaCallCenter($client)){
                    $this->copiaAnagrafica($clientInseritoDaCallCenter, $client);
                    $idCliente = $clientInseritoDaCallCenter->id;
                    $this->segnaAppuntamentoIntervenuto($clientInseritoDaCallCenter);
                    $client->delete();
                }

                Informazione::create([
                    'client_id' => $idCliente,
                    'tipo' => 'INGRESSO',
                    'note' => 'Ingresso presso.....tramite il canale mkt....',
                    'giorno' => $clientInseritoDaCallCenter ? $clientInseritoDaCallCenter->created_at->format('Y-m-d') : $client->created_at->format('Y-m-d'),
                ]);
                if (!$clientInseritoDaCallCenter && $client->tipologia_id != $idListaEsterna){
                    $this->inserisciRecallAutomatico($client, $idCliente);
                } elseif ($clientInseritoDaCallCenter && $clientInseritoDaCallCenter->tipologia_id != $idListaEsterna){
                    $this->inserisciRecallAutomatico($clientInseritoDaCallCenter, $idCliente);
                }
            }

            $audiometriad = null;
            $audiometrias = null;
//dd($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0]);
            if (isset($ele->Patient->Actions)){
                if (isset($ele->Patient->Actions->Action)){
                    if (isset($ele->Patient->Actions->Action->PublicData)){
                        if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard)){
                            if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0])){
                                $audiometriad = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0];
                            }
                            if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[2])){
                                $ossead = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[2];
                            }
                        }
                    }
                }
            }

            if (isset($ele->Patient->Actions)){
                if (isset($ele->Patient->Actions->Action)){
                    if (isset($ele->Patient->Actions->Action->PublicData)){
                        if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard)){
                            if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[1])){
                                $audiometrias = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[1];
                            }
                            if (isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[3])){
                                $osseas = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[3];
                            }
                        }
                    }
                }
            }

            /*$audiometriad = isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0]) ?
                $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0] : null;
            $audiometrias = isset($ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[1]) ?
                $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[1] : null;*/

            $d125 = null;
            $d250 = null;
            $d500 = null;
            $d1000 = null;
            $d1500 = null;
            $d2000 = null;
            $d3000 = null;
            $d4000 = null;
            $d6000 = null;
            $d8000 = null;

            $s125 = null;
            $s250 = null;
            $s500 = null;
            $s1000 = null;
            $s1500 = null;
            $s2000 = null;
            $s3000 = null;
            $s4000 = null;
            $s6000 = null;
            $s8000 = null;

            $ossd125 = null;
            $ossd250 = null;
            $ossd500 = null;
            $ossd1000 = null;
            $ossd1500 = null;
            $ossd2000 = null;
            $ossd3000 = null;
            $ossd4000 = null;
            $ossd6000 = null;
            $ossd8000 = null;

            $osss125 = null;
            $osss250 = null;
            $osss500 = null;
            $osss1000 = null;
            $osss1500 = null;
            $osss2000 = null;
            $osss3000 = null;
            $osss4000 = null;
            $osss6000 = null;
            $osss8000 = null;

            if (isset($audiometriad->TonePoints)) {
                foreach ($audiometriad->TonePoints as $tono){
                    ${'d'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
                }
            }

            if (isset($audiometrias->TonePoints)) {
                foreach ($audiometrias->TonePoints as $tono){
                    ${'s'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
                }
            }

            if (isset($ossead->TonePoints)) {
                foreach ($ossead->TonePoints as $tono){
                    ${'ossd'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
                }
            }

            if (isset($osseas->TonePoints)) {
                foreach ($osseas->TonePoints as $tono){
                    ${'osss'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
                }
            }


            $audiom = Audiometria::where('client_id', $idCliente)->firstOrNew();

            if(!isset($audiom->client_id)){
                $audiom->client_id = $client->id;
                $audiom->_125d = (int)$d125 ? (int)$d125 : (int)$d250;
                $audiom->_250d = (int)$d250 ? (int)$d250 : ( (int)$d125 + (int)$d500 ) / 2;
                $audiom->_500d = (int)$d500 ? (int)$d500 : ( (int)$d250 + (int)$d1000 ) / 2;
                $audiom->_1000d = (int)$d1000? (int)$d1000 : ( (int)$d500 + (int)$d1500 ) / 2;
                $audiom->_1500d = (int)$d1500? (int)$d1500 : ( (int)$d1000 + (int)$d2000 ) / 2;
                $audiom->_2000d = (int)$d2000? (int)$d2000 : ( (int)$d1500 + (int)$d3000 ) / 2;
                $audiom->_3000d = (int)$d3000? (int)$d3000 : ( (int)$d2000 + (int)$d4000 ) / 2;
                $audiom->_4000d = (int)$d4000? (int)$d4000 : ( (int)$d3000 + (int)$d6000 ) / 2;
                $audiom->_6000d = (int)$d6000? (int)$d6000 : ( (int)$d4000 + (int)$d8000 ) / 2;
                $audiom->_8000d = (int)$d8000? (int)$d8000 :  (int)$d6000;

                $audiom->_125s = (int)$s125 ? (int)$s125 : (int)$s250;
                $audiom->_250s = (int)$s250 ? (int)$s250 : ( (int)$s125 + (int)$s500 ) / 2;
                $audiom->_500s = (int)$s500 ? (int)$s500 : ( (int)$s250 + (int)$s1000 ) / 2;
                $audiom->_1000s = (int)$s1000? (int)$s1000 : ( (int)$s500 + (int)$s1500 ) / 2;
                $audiom->_1500s = (int)$s1500? (int)$s1500 : ( (int)$s1000 + (int)$s2000 ) / 2;
                $audiom->_2000s = (int)$s2000? (int)$s2000 : ( (int)$s1500 + (int)$s3000 ) / 2;
                $audiom->_3000s = (int)$s3000? (int)$s3000 : ( (int)$s2000 + (int)$s4000 ) / 2;
                $audiom->_4000s = (int)$s4000? (int)$s4000 : ( (int)$s3000 + (int)$s6000 ) / 2;
                $audiom->_6000s = (int)$s6000? (int)$s6000 : ( (int)$s4000 + (int)$s8000 ) / 2;
                $audiom->_8000s = (int)$s8000? (int)$s8000 :  (int)$s6000;

                $audiom->_125ossd = (int)$ossd125 ? (int)$ossd125 : null;
                $audiom->_250ossd = (int)$ossd250 ? (int)$ossd250 : null;
                $audiom->_500ossd = (int)$ossd500 ? (int)$ossd500 : null;
                $audiom->_1000ossd = (int)$ossd1000? (int)$ossd1000 : null;
                $audiom->_1500ossd = (int)$ossd1500? (int)$ossd1500 : null;
                $audiom->_2000ossd = (int)$ossd2000? (int)$ossd2000 : null;
                $audiom->_3000ossd = (int)$ossd3000? (int)$ossd3000 : null;
                $audiom->_4000ossd = (int)$ossd4000? (int)$ossd4000 : null;
                $audiom->_6000ossd = (int)$ossd6000? (int)$ossd6000 : null;
                $audiom->_8000ossd = (int)$ossd8000? (int)$ossd8000 :  null;

                $audiom->_125osss = (int)$osss125 ? (int)$osss125 : null;
                $audiom->_250osss = (int)$osss250 ? (int)$osss250 : null;
                $audiom->_500osss = (int)$osss500 ? (int)$osss500 : null;
                $audiom->_1000osss = (int)$osss1000? (int)$osss1000 : null;
                $audiom->_1500osss = (int)$osss1500? (int)$osss1500 : null;
                $audiom->_2000osss = (int)$osss2000? (int)$osss2000 : null;
                $audiom->_3000osss = (int)$osss3000? (int)$osss3000 : null;
                $audiom->_4000osss = (int)$osss4000? (int)$osss4000 : null;
                $audiom->_6000osss = (int)$osss6000? (int)$osss6000 : null;
                $audiom->_8000osss = (int)$osss8000? (int)$osss8000 :  null;

                $res = $audiom->save();

            }
        }

        $log = new LoggingService();
        $log->scriviLog('import from Noah', '', User::find($request['idUser'])->name, 'import from Noah', 'import from Noah');

        return $res;
    }


    private function getFilialeFromPlace($provincia, $citta)
    {
        $filiale = Filiale::where('provincia', $provincia)->get();

        if (count($filiale) == 1){
            return $filiale[0]->id;
        } else {
            if (in_array($citta, config('enum.civitanova'))) {
                return Filiale::where('nome', 'CIVITANOVA')->first()->id;
            } elseif (in_array($citta, config('enum.macerata'))) {
                return Filiale::where('nome', 'MACERATA')->first()->id;
            } elseif (in_array($citta, config('enum.pisa'))) {
                return Filiale::where('nome', 'PISA')->first()->id;
            } elseif (in_array($citta, config('enum.viareggio'))) {
                return Filiale::where('nome', 'VIAREGGIO')->first()->id;
            } elseif (in_array($citta, config('enum.lucca'))) {
                return Filiale::where('nome', 'LUCCA')->first()->id;
            }
        }
    }

    public function ricercaNominativi($request)
    {
        $condizioni = [];
        if ($request->tipo){
            array_push($condizioni, ['tipologia_id', $request->tipo]);
        }
        if ($request->provincia){
            array_push($condizioni, ['provincia', $request->provincia]);
        }
        if ($request->citta){
            array_push($condizioni, ['citta', $request->citta]);
        }
        if ($request->filiale){
            array_push($condizioni, ['filiale_id', $request->filiale]);
        }
        if ($request->acquistatoAnniFa){
            $annoRicerca = Carbon::now()->year - $request->acquistatoAnniFa;
            return Client::whereHas('prova', function($p) use($annoRicerca){
                $p->where('anno_fine', '<=', $annoRicerca)->whereHas('stato', function($q){
                    $q->where('nome', 'FATTURA');
                }) ;
            })
                ->where($condizioni)
                ->orderBy('cognome')->get();
        }

        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
            ->where($condizioni)
            ->orderBy('cognome')->get();
    }

    public function situazioneAnnoClientiAudio($request)
    {
        return Prova::
                with('client')
                ->where([
                    ['user_id', $request->userId],
                    ['anno_fine', $request->anno],
                ])->whereHas('stato', function ($t){
                    $t->where('nome', 'FATTURA');
                })
            ->latest()
            ->get();
    }

    public function situazioneAnnoResiAudio($request)
    {
        return Prova::
        with('client')
            ->where([
                ['user_id', $request->userId],
                ['anno_fine', $request->anno],
            ])->whereHas('stato', function ($t){
                $t->where('nome', 'RESO');
            })
            ->latest()
            ->get();
    }

    public function riepilogo()
    {
        return Filiale::
            withCount(['clients as cli' => function($q){
                $q->whereHas('tipologia', function ($z){
                    $z->where('nome', 'CLIENTE');
                });
            }])
            ->withCount(['clients as pc' => function($q){
                $q->whereHas('tipologia', function ($z){
                    $z->where('nome', 'PC');
                });
            }])
            ->withCount(['clients as clc' => function($q){
                $q->whereHas('tipologia', function ($z){
                    $z->where('nome', 'CLC');
                });
            }])
            ->withCount(['clients as normo' => function($q){
                $q->whereHas('tipologia', function ($z){
                    $z->where('nome', 'NORMO');
                });
            }])
            ->withCount(['clients as le' => function($q){
                $q->whereHas('tipologia', function ($z){
                    $z->where('nome', 'LE');
                });
            }])
            ->withCount('clients as tot')
            ->orderBy('nome')
            ->get();
    }


}
