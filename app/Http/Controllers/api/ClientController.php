<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CompleanniResource;
use App\Imports\ClientsImport;
use App\Models\Client;
use App\Models\User;
use App\Services\ClientService;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Nexmo\Laravel\Facade\Nexmo;

class ClientController extends Controller
{
    public function index(ClientService $clientService)
    {
        return ClientResource::collection($clientService->lista());
    }

    public function cliente($id, ClientService $clientService)
    {
        return new ClientResource($clientService->cliente($id));
    }

    public function compleanni($idAudio, ClientService $clientService)
    {
        return CompleanniResource::collection($clientService->compleanni($idAudio));
    }

    public function clientsFiliale($idFiliale, ClientService $clientService)
    {
        return ClientResource::collection($clientService->clienteFiliale($idFiliale));
    }

    public function aggiungi(Request $request, ClientService $clientService)
    {
        return $clientService->aggiungi($request);
    }

    public function modifica(Request $request, ClientService $clientService)
    {
        return $clientService->modifica($request);
    }

    public function elimina($id, ClientService $clientService)
    {
        return $clientService->elimina($id);
    }

    public function ingressiRecapiti(ClientService $clientService)
    {
        return $clientService->ingressiRecapiti();
    }

    public function ingressiRecapitiMesi(ClientService $clientService)
    {
        return $clientService->ingressiRecapitiMesi();
    }

    public function inviaSms(Request $request)
    {
        Nexmo::message()->send([
            'to' => '+393920222125',
            'from' => '+393920222125',
            'text' => $request['testo']
        ]);

    }

    public function importClients()
    {
        Excel::import(new ClientsImport, storage_path('app/public/file.xlsx'));
    }

    public function importClientsFromNoah()
    {

        $xmlDataString = file_get_contents(storage_path('app/public/gggg.xml'));
        $xmlObject = simplexml_load_string($xmlDataString, $class_name = "SimpleXMLElement", $options = 0, $ns = "pt", $is_prefix = true);
        $json = json_encode($xmlObject);
        $phpDataArray = json_decode($json, true);

        if(count($phpDataArray['Patient']) > 0){
          //  $dataArray = array();
            $idUser = $phpDataArray['Patient'][0]['Patient']['CreatedBy'];
            $filialeId = User::find($idUser)->filiale[0]->id;
            //dd($filialeId);
            foreach($phpDataArray['Patient'] as $index => $data){
                /*$dataArray[] = [
                    "nome" => $data['Patient']['FirstName'],
                    "cognome" => $data['Patient']['LastName'],
                    "indirizzo" => $data['Patient']['Address1'],
                    "cap" => $data['Patient']['Zip'],
                    "telefono" => $data['Patient']['HomePhone'],
                    "provincia" => $data['Patient']['Other1'],
                    "tipologia_id" => 2,
                    "citta" => $data['Patient']['City']
                ];*/
                Client::firstOrCreate(
                    [
                        'nome' => $data['Patient']['FirstName'],
                        'cognome' => $data['Patient']['LastName'],
                        'indirizzo' => $data['Patient']['Address1'],
                        'cap' => $data['Patient']['Zip'],
                        'telefono' => $data['Patient']['HomePhone'],
                        'provincia' => $data['Patient']['Other1'],
                        'user_id' => $data['Patient']['CreatedBy'],
                        'datanascita' => isset($data['Patient']['DateofBirth']) ? $data['Patient']['DateofBirth'] : null,
                        'tipologia_id' => 2,
                        'filiale_id' => $filialeId,
                        'citta' => $data['Patient']['City']
                    ]
                );

            }

            //Client::insert($dataArray);


        }
    }

}
