<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Audiometria;
use App\Services\ElaborazioneService;
use Artisan;
use Illuminate\Http\Request;


class ElaborazioneController extends Controller
{
    public function situazioneAnno(ElaborazioneService $elaborazioneService)
    {
        ini_set('max_execution_time', 400);
        ini_set('memory_limit', '-1');
        $elaborazioneService->situazioneAnno();
    }

    public function download()
    {
        return \Storage::disk('public')->download('export.sql');
    }

    public function visualizzapulisciDB()
    {
        return Audiometria::whereDoesntHave('client')->get();
    }

    public function pulisciDB()
    {
        return Audiometria::whereDoesntHave('client')->delete();
    }

    public function controlloPossibiliDuplicati(ElaborazioneService $elaborazioneService)
    {
        return $elaborazioneService->controlloPossibiliDuplicati();
    }

    public function testPorte()
    {
        $host = 'https://www.centrouditogroup.it';
        $ports = [];
        for ($i = 1; $i < 3000; $i++){
            array_push($ports, $i);
        }
      //  $ports = array(21, 25, 80, 81, 110, 443, 3306);

        foreach ($ports as $port)
        {
            $connection = @fsockopen($host, $port);

            if (is_resource($connection))
            {
                echo '<h2>' . $host . ':' . $port . ' ' . '(' . getservbyport($port, 'tcp') . ') is open.</h2>' . "\n";

                fclose($connection);
            }

            else
            {
                echo '<h2>' . $host . ':' . $port . '</h2>' . "\n";
            }
        }
    }
}
