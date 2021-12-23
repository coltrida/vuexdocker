<?php


namespace App\Services;


use App\Models\Eventigiorno;
use Carbon\Carbon;

class EventoService
{
    public function aggiungi($request)
    {
        $evento = Eventigiorno::create([
            'user_id' => $request->user_id,
            'quando' => $request->quando,
            'cosa' => $request->cosa,
            'giorno' => $request->giorno,
            'evento' => $request->evento
        ]);
    }

    public function eventoGiorno($request)
    {
        $eventi = [];
        $eventi[0] = Eventigiorno::where([
            ['giorno', $request->giorno],
            ['user_id', $request->user_id],
            ['quando', 'mattina'],
        ])->first();

        $eventi[1] = Eventigiorno::where([
            ['giorno', $request->giorno],
            ['user_id', $request->user_id],
            ['quando', 'pomeriggio'],
        ])->first();

        return $eventi;
    }

    public function settimana($idAudio, $direzione)
    {

        $eventi = [];
        if ($direzione === null || $direzione == 'null'){
            $direzione = 0;
        }

        $lunedi =    Carbon::now()->startOfWeek()->addDays($direzione*7);
        $martedi =   Carbon::now()->startOfWeek()->addDays(($direzione*7)+1);
        $mercoledi = Carbon::now()->startOfWeek()->addDays(($direzione*7)+2);
        $giovedi =   Carbon::now()->startOfWeek()->addDays(($direzione*7)+3);
        $venerdi =   Carbon::now()->startOfWeek()->addDays(($direzione*7)+4);
        $sabato =    Carbon::now()->startOfWeek()->addDays(($direzione*7)+5);

        $eventi[0][0] = Eventigiorno::where([
            ['giorno', $lunedi],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[0][1] = Eventigiorno::where([
            ['giorno', $lunedi],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        $eventi[1][0] = Eventigiorno::where([
            ['giorno', $martedi],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[1][1] = Eventigiorno::where([
            ['giorno', $martedi],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        $eventi[2][0] = Eventigiorno::where([
            ['giorno', $mercoledi],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[2][1] = Eventigiorno::where([
            ['giorno', $mercoledi],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        $eventi[3][0] = Eventigiorno::where([
            ['giorno', $giovedi],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[3][1] = Eventigiorno::where([
            ['giorno', $giovedi],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        $eventi[4][0] = Eventigiorno::where([
            ['giorno', $venerdi],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[4][1] = Eventigiorno::where([
            ['giorno', $venerdi],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        $eventi[5][0] = Eventigiorno::where([
            ['giorno', $sabato],
            ['user_id', $idAudio],
            ['quando', 'mattina'],
        ])->first();

        $eventi[5][1] = Eventigiorno::where([
            ['giorno', $sabato],
            ['user_id', $idAudio],
            ['quando', 'pomeriggio'],
        ])->first();

        return $eventi;
    }
}
