<?php


namespace App\Services;


use App\Models\Appuntamento;
use App\Models\Audiometria;
use App\Models\Client;
use App\Models\Filiale;
use App\Models\Informazione;
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
            'recapito:id,nome', 'audiometria', 'prova' => function($q){
                $q->with('copiaComm')->first();
            }])
            ->withCount(['recalls' => function($r) use($oggi){
                $r->where('created_at', $oggi)->orWhere('updated_at', $oggi);
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
        $new = new Client();
        $new->nome = trim(Str::upper($request->nome));
        $new->cognome = trim(Str::upper($request->cognome));
        $new->codfisc = trim(Str::upper($request->codfisc)) == '' ? null : trim(Str::upper($request->codfisc));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->cap = $request->cap;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->telefono = $request->telefono;
        $new->telefono2 = $request->telefono2;
        $new->telefono3 = $request->telefono3;
        $new->tipologia_id = $request->tipologia_id;
        $new->marketing_id = $request->marketing_id;
        $new->filiale_id = $request->filiale_id;
        if($request->marketing_id == 5) {
            $new->medico_id = $request->recapito_id;
        } else {
            $new->recapito_id = $request->recapito_id;
        }

        $new->user_id = $request->user_id;

        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita;
        $new->luogoNascita = trim(Str::upper($request->luogoNascita)) == '' ? null : trim(Str::upper($request->luogoNascita));
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $new->mese = Carbon::now()->month;
        $new->anno = Carbon::now()->year;
        $new->save();

        if($new->tipologia_id){
            $telefonata = new Telefonata();
            $telefonata->user_id = $new->user_id;
            $telefonata->client_id = $new->id;
            $telefonata->note = "recall automatico dell'inserimento paziente";
            $telefonata->datarecall = $this->calcolaRecall($new->tipologia_id);
            $telefonata->effettuata = false;
            $telefonata->save();
        }

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha inserito il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new->cognome.' '.$new->nome, $utente, $utente->name, $propieta, $testo);

        Informazione::create([
            'client_id' => $new->id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'CLIENTE',
            'note' => $testo
        ]);

        return $new;
    }

    public function modifica($request)
    {
        $new = Client::find($request->id);
        $new->nome = trim(Str::upper($request->nome));
        $new->cognome = trim(Str::upper($request->cognome));
        $new->codfisc = trim(Str::upper($request->codfisc)) == '' ? null : trim(Str::upper($request->codfisc));
        $new->indirizzo = trim(Str::upper($request->indirizzo));
        $new->citta = trim(Str::upper($request->citta));
        $new->cap = $request->cap;
        $new->provincia = trim(Str::upper($request->provincia));
        $new->telefono = $request->telefono;
        $new->telefono2 = $request->telefono2;
        $new->telefono3 = $request->telefono3;
        $new->tipologia_id = $request->tipologia_id;
        $new->marketing_id = $request->marketing_id;
        $new->filiale_id = $request->filiale_id;
        if($request->marketing_id == 5) {
            $new->medico_id = $request->recapito_id;
        } else {
            $new->recapito_id = $request->recapito_id;
        }
        $new->user_id = $request->user_id;
     //   $new->recall = 1;
    //    $new->datarecall = $this->calcolaRecall($request->tipologia_id);
        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita ? Carbon::make($request->datanascita)->format('Y-m-d') : null;
        $new->luogoNascita = trim(Str::upper($request->luogoNascita)) == '' ? null : trim(Str::upper($request->luogoNascita));
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha modificato il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new->cognome.' '.$new->nome, $utente, $utente->name, $propieta, $testo);

        return $new;
    }

    public function calcolaRecall($tipologia_id)
    {
        $oggi = Carbon::now();
        $tipo = Tipologia::find($tipologia_id);
        return $oggi->addDays($tipo->recall)->format('Y-m-d');
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

    public function importClientsFromNoah($request)
    {
        //dd($request);

        $xmlDataString = file_get_contents(asset('/storage/'.$request['nomeFile']));
        $res = 0;
        $xml = simplexml_load_string($xmlDataString, NULL, NULL, "http://www.himsa.com/Measurement/PatientExport.xsd");
//dd($xml->Patient);
        foreach ($xml->Patient as $ele){
            //dd((string)$ele->Patient->CreateDate);
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
                    'provincia'     => $ele->Patient->Other1 ? trim(Str::upper($ele->Patient->Other1)) : null,
//                    'user_id' => $ele->Patient->CreatedBy ? $ele->Patient->CreatedBy : null,
                    'user_id'       => $request['idUser'],
                    'datanascita'   => $ele->Patient->DateofBirth ? trim(Str::upper($ele->Patient->DateofBirth)) : null,
//                    'recapito_id' => $ele->Patient->Other2 ? $ele->Patient->Other2 : null,
                    'recapito_id'   => null,
                    'mail'          => is_string($ele->Patient->EMail) ? (string)$ele->Patient->EMail : null,
//                    'tipologia_id' => $ele->Patient->Province ? $ele->Patient->Province : null,
                    'tipologia_id'  => 6,
//                    'filiale_id' => User::find($ele->Patient->CreatedBy)->filiale[0]->id,
                    'filiale_id'    => $this->getFilialeFromPlace(Str::of(Str::upper($ele->Patient->Other1))->trim(),
                        Str::of(Str::upper($ele->Patient->City))->trim()),
                    'updated_at'    => Carbon::make((string)$ele->Patient->CreateDate),
                    'mese'          => Carbon::make((string)$ele->Patient->CreateDate)->month,
                    'anno'          => Carbon::make((string)$ele->Patient->CreateDate)->year,
                ]
            );

            if ($client->wasRecentlyCreated){
                Informazione::create([
                    'client_id' => $client->id,
                    'tipo' => 'INGRESSO',
                    'note' => 'Ingresso presso.....tramite il canale mkt....',
                    'giorno' => $client->created_at->format('Y-m-d'),
                ]);
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


            $audiom = Audiometria::where('client_id', $client->id)->firstOrNew();

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
        $ancona = ['OSIMO', 'ANCONA', 'SENIGALLIA', 'JESI', 'FABRIANO', 'FALCONARA MARITTIMA', 'OSTRA',
            'MONTESICURO', 'CAMERANO'];
        $civitanova = ['LORETO',
            'POTENZA PICENA', 'MONTEGIORGIO', "PORTO SANT'ELPIDIO", 'MONTEGRANARO', 'RECANATI', 'PORTO RECANATI',
            'CIVITANOVA MARCHE', 'FERMO', 'PORTO SAN GIORGIO', 'MONTECOSARO', 'MORROVALLE'];
        $macerata = ['MACERATA', 'CAMERINO'];
        $pisa = ['PISA', 'CASCINA', 'MARINA DI PISA', 'SAN GIULIANO TERME', 'SAN GIULIANO TERME(GELLO)',
            'SAN GIULIANO TERME(AGNANO)', 'GELLO(S.GILULIANO TERME)', 'SAN GIULIANO TERME(GHEZZANO)', 'NODICA',
            "MADONNA DELL'ACQUA( S.G.T.)", 'S.G.TERME', 'VECCHIANO', 'MIGLIARINO', 'PONTASSERCHIO(S.G.T)', 'PORTA A MARE',
            'GHEZZANO', 'PISA(ARENA METATO)', 'NODICA(SGT)', 'GHEZZANO(SGT)', 'COLIGNOLA(SGT)', 'SAN LORENZO ALLE CORTI',
            'ASCIANO PISANO', 'ASCIANO (SGTERME)', 'BIENTINA', 'BUTI', 'CALCI', 'CALCINAIA', 'CAPANNOLI',
            'CASTELFRANCO DI SOTTO', 'PONSACCO', 'PECCIOLI', 'SAN GIULIANO TERME', 'LIVORNO', 'CECINA', 'LARI',
            'CASCIANA TERME', 'PIOMBINO', 'TIRRENIA', 'COLLESALVETTI'];
        $viareggio = ['VIAREGGIO', 'FORTE DEI MARMI', 'FORTE DEI MARIMI', 'MASSA', 'TORRE DEL LAGO', 'LIDO DI CAMAIORE',
            'LA SPEZIA', 'FILATTIERA(PONTREMOLI)', 'TONFANO(PIETRASANTA)', 'QUERCETA', 'MONTIGNOSO', 'PIETRASANTA',
            'VITTORIA APUANA', 'SOLAIO(PIETRASANTA)', 'STRETTOIA(PIETRASANAT)', 'LUNI'];
        $lucca = ['LUCCA', 'BARGA', 'PORCARI', 'GRAGNANO', 'GRAGNANO(LUCCA)', 'LAPPATO', 'ANTRACCOLI(LUCCA)',
            'CAPANNORI', 'SANTA MARIA A COLLE', 'ZONE', 'SANTA ANDREA IN CAPRILE', 'MARLIA', 'SAN COLOMBANO',
            'CAPANNORI(MARLIA)', 'CAMIGLIANO', 'CAMIGLIANO(CAPANNORI)', 'SEGROMIGNO IN PIANO', 'SAN MACARIO IN PIANO(LUCCA)',
            'GRAGNANO(CAPANNORI)', 'NOZZANO(SAN PIETRO) LUCCA', 'TEMPAGNANO(LUCCA)', 'SEGROMIGNO IN MONTE', 'LAPPATO(CAPANNORI)',
            "SANT'ANGELO IN CAMPO", 'ALTOPASCIO', 'SERRAVEZZA', 'SERRAVEZZA(RIPA)', 'SAN GENNARO',
            'SAN GENNARO(CAPANNORI)', 'VICOPELAGO', 'SAN CASSIANO A VICO', 'SESTO DI MORIANO', 'SANTISSIMA ANNUNZIATA(LUCCA)',
            'LAMMARI', 'SANTISSIMA ANNUNZIATA(LU)', 'SANTA MARIA DEL GIUDICE'];

        if (count($filiale) == 1){
            return $filiale[0]->id;
        } else {
            if(in_array($citta, $ancona)) {
                return Filiale::where('nome', 'ANCONA')->first()->id;
            } elseif (in_array($citta, $civitanova)) {
                return Filiale::where('nome', 'CIVITANOVA')->first()->id;
            } elseif (in_array($citta, $macerata)) {
                return Filiale::where('nome', 'MACERATA')->first()->id;
            } elseif (in_array($citta, $pisa)) {
                return Filiale::where('nome', 'PISA')->first()->id;
            } elseif (in_array($citta, $viareggio)) {
                return Filiale::where('nome', 'VIAREGGIO')->first()->id;
            } elseif (in_array($citta, $lucca)) {
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
