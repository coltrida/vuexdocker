<?php


namespace App\Services;


use App\Models\Fattura;
use App\Models\Informazione;
use App\Models\Ratefattura;
use App\Models\Ruolo;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function trim;

class RateService
{
    public function allClientiDaSaldare()
    {
        return Fattura::with(['rate', 'prova' => function($q){
            $q->with('user');
        }])
            ->where('saldata', false)
            ->orderBy('ultima_rata')
            ->get();
    }

    public function clientiDaSaldare($idAudio)
    {
        return User::with(['clientDaSaldare' => function($q){
            $q->with('prova', 'rate')->orderBy('ultima_rata');
        }])
            ->find($idAudio)->clientDaSaldare;
    }

    public function clientiSaldati($idAudio)
    {
        return User::with(['clientSaldati' => function($q){
            $q->with('prova', 'rate')->orderBy('data_saldo');
        }])
            ->find($idAudio)->clientSaldati;
    }

    public function addRata($request)
    {
        Ratefattura::create([
            'importo' => $request->importo,
            'fattura_id' => $request->fatturaId,
            'note' => $request->note,
        ]);

        /*$new = new Ratefattura();
        $new->importo = $request->importo;
        $new->fattura_id = $request->fatturaId;
        $new->note = $request->note;
        $new->save();*/

        $fattura = Fattura::find($request->fatturaId);
        if ($fattura->al_saldo == $fattura->tot_fattura){
            $tipoNota = 'Acconto per un importo di € '.number_format( (float) $request->importo, '0', ',', '.');
        }else{
            $tipoNota = 'Rata per un importo di € '.number_format( (float) $request->importo, '0', ',', '.');
        }
        $fattura->al_saldo -= $request->importo;
        if ($fattura->al_saldo === 0){
            $fattura->saldata = true;
            $tipoNota = 'Saldo per un importo di € '.number_format( (float) $request->importo, '0', ',', '.');
            $fattura->data_saldo = Carbon::now();
        }
        $fattura->ultima_rata = Carbon::now();
        $fattura->save();



        Informazione::create([
            'client_id' => $fattura->prova->client_id,
            'giorno' => Carbon::now()->format('Y-m-d'),
            'tipo' => 'PAGAMENTI',
            'note' => $tipoNota
        ]);
    }

    public function caricaFattura($idFattura)
    {
        return Fattura::with('prova', 'rate')
            ->find($idFattura);
    }
}
