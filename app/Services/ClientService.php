<?php


namespace App\Services;


use App\Models\Audiometria;
use App\Models\Client;
use App\Models\Recapito;
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
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
                ->orderBy('cognome')->get();
    }

    public function clienteFiliale($idFiliale)
    {
        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
                ->where('filiale_id', $idFiliale)->orderBy('cognome')->get();
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
        $new->recapito_id = $request->recapito_id;
        $new->user_id = $request->user_id;
        $new->recall = 1;
        $new->datarecall = $this->calcolaRecall($request->tipologia_id);
        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita;
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $new->mese = Carbon::now()->month;
        $new->anno = Carbon::now()->year;
        $new->save();

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha inserito il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new, $utente, $utente->name, $propieta, $testo);

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
        $new->recapito_id = $request->recapito_id;
        $new->user_id = $request->user_id;
        $new->recall = 1;
        $new->datarecall = $this->calcolaRecall($request->tipologia_id);
        $new->mail = trim(Str::upper($request->mail));
        $new->datanascita = $request->datanascita;
        $new->mesenascita = $request->datanascita ? Carbon::make($request->datanascita)->month : null;
        $new->giornonascita = $request->datanascita ? Carbon::make($request->datanascita)->day : null;
        $new->save();

        $utente = User::find($request->user_id);
        $propieta = 'client';
        $log = new LoggingService();
        $testo = $utente->name.' ha modificato il nominativo '.$new->cognome.' '.$new->nome;
        $log->scriviLog($new, $utente, $utente->name, $propieta, $testo);

        return $new;
    }

    public function calcolaRecall($tipologia_id)
    {
        $oggi = Carbon::now();
        $tipo = Tipologia::find($tipologia_id);
        return $oggi->addDays($tipo->recall)->format('Y-m-d');
    }

    public function elimina($id)
    {
        return Client::find($id)->delete();
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
        return Client::orderBy('provincia')->pluck('provincia');
    }

    public function cittaByProvincia($provincia)
    {
        return Client::where('provincia', $provincia)->orderBy('citta')->pluck('citta');
    }

    public function importClientsFromNoah()
    {
        $xmlDataString = file_get_contents(storage_path('app/public/file.xml'));
        //dd($xmlDataString);
        //$xmlObject = simplexml_load_string($xmlDataString, $class_name = "SimpleXMLElement", $options = 0, $ns = "pt", $is_prefix = true);

        $xml = simplexml_load_string($xmlDataString, NULL, NULL, "http://www.himsa.com/Measurement/PatientExport.xsd");

        foreach ($xml->Patient as $ele){
            $client = Client::firstOrCreate(
                [
                    'nome' => trim(Str::upper($ele->Patient->FirstName)),
                    'cognome' => trim(Str::upper($ele->Patient->LastName)),
                    'indirizzo' => $ele->Patient->Address1 ? trim(Str::upper($ele->Patient->Address1)) : null,
                    'cap' => $ele->Patient->Zip ? trim(Str::upper($ele->Patient->Zip)) : null,
                    'telefono' => $ele->Patient->HomePhone ? $ele->Patient->HomePhone : null,
                    'telefono2' => $ele->Patient->WorkPhone ? $ele->Patient->WorkPhone : null,
                    'telefono3' => $ele->Patient->MobilePhone ? $ele->Patient->MobilePhone : null,
                    'provincia' => $ele->Patient->Other1 ? trim(Str::upper($ele->Patient->Other1)) : null,
                    'citta' => $ele->Patient->City ? trim(Str::upper($ele->Patient->City)) : null,
                    'user_id' => $ele->Patient->CreatedBy ? $ele->Patient->CreatedBy : null,
                    'datanascita' => $ele->Patient->DateofBirth ? $ele->Patient->DateofBirth : null,
                    'tipologia_id' => 2,
                    'filiale_id' => User::find($ele->Patient->CreatedBy)->filiale[0]->id,
                ]
            );

            $audiometriad = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[0];
            $audiometrias = $ele->Patient->Actions->Action->PublicData->children()->HIMSAAudiometricStandard->ToneThresholdAudiogram[1];
            //dd($audiometriad->TonePoints);

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

            foreach ($audiometriad->TonePoints as $tono){
                ${'d'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
            }

            foreach ($audiometrias->TonePoints as $tono){
                ${'s'.(string)$tono->StimulusFrequency} = $tono->StimulusLevel;
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

                $audiom->save();
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
        //$tipo = $request->tipo ? $request->tipo : '*';
        //$provincia = $request->provincia ? $request->provincia : '*';
        //$citta = $request->citta ? $request->citta : '*';

        return Client::with('tipologia:id,nome',
            'marketing', 'user:id,name', 'filiale:id,nome', 'recapito:id,nome', 'audiometria', 'prova')
            ->where($condizioni)
            ->orderBy('cognome')->get();
    }
}
