<?php


namespace App\Services;

use App\Models\Agenda;
use App\Models\Budget;
use App\Models\Client;
use App\Models\Delta;
use App\Models\Fatturati;
use App\Models\Pezzi;
use App\Models\Product;
use App\Models\Prova;
use App\Models\User;
use App\Models\Ventaglio;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function array_push;
use function array_sum;
use function collect;
use function config;
use function count;
use function dd;
use function floatval;
use function number_format;
use function setlocale;
use function trim;
use const LC_TIME;

class UserService
{
    public function audio()
    {
        return User::audio()->orderBy('name')->get();
    }

    public function userAgenda()
    {
        return User::whereHas('ruolo', function ($r){
            $r->where('nome', '<>', 'admin');
        })->with(['agenda' => function($q){
            $q->orderBy('settimana')->orderBy('nome');
        }])->orderBy('name')->get();
    }

    public function specificoUserAgenda($id)
    {
        return User::with(['agenda' => function($q){
            $q->orderBy('settimana')->orderBy('nome');
        }])->find($id)->agenda;
    }

    public function addUserAgenda($request)
    {
        $user_id = $request->user_id;
        $settimana = $request->settimana;
        $tempo = $request->tempo;
        $agendaEsistente = Agenda::where([
            ['user_id', $user_id],
            ['settimana', $settimana],
            ['nome', $tempo]
        ])->first();
        if ($agendaEsistente){
            if ($request->giorno == 'lun'){
                $agendaEsistente->lun = $request->testo;
            } elseif ($request->giorno == 'mar'){
                $agendaEsistente->mar = $request->testo;
            } elseif ($request->giorno == 'mer'){
                $agendaEsistente->mer = $request->testo;
            } elseif ($request->giorno == 'gio'){
                $agendaEsistente->gio = $request->testo;
            } elseif ($request->giorno == 'ven'){
                $agendaEsistente->ven = $request->testo;
            }
            $agendaEsistente->save();
            return $agendaEsistente;
        } else {
            $agenda = new Agenda();
            $agenda->nome = $tempo;
            $agenda->settimana = $settimana;
            $agenda->user_id = $user_id;
            if ($request->giorno == 'lun'){
                $agenda->lun = $request->testo;
            } elseif ($request->giorno == 'mar'){
                $agenda->mar = $request->testo;
            } elseif ($request->giorno == 'mer'){
                $agenda->mer = $request->testo;
            } elseif ($request->giorno == 'gio'){
                $agenda->gio = $request->testo;
            } elseif ($request->giorno == 'ven'){
                $agenda->ven = $request->testo;
            }
            $agenda->save();
        }

        return $agenda;
    }

    public function audioConBgt()
    {
        return User::audio(1)->with('budget')->orderBy('name')->get();
    }

    public function audioSenzaBgt()
    {
        return User::audio(2)->orderBy('name')->get();
    }

    public function amm()
    {
        return User::amm()->orderBy('name')->get();
    }

    public function callCenter()
    {
        return User::callcenter()->orderBy('name')->get();
    }

    public function aggiungi($request)
    {
        $new = new User();
        $new->name = trim(Str::upper($request->name));
        $new->email = trim(Str::upper($request->email));
        $new->ruolo_id = $request->ruolo_id;
        $new->save();
        return $new;
    }

    public function elimina($id)
    {
        return User::find($id)->delete();
    }

    public function assegnaBgt($request)
    {
        $user = User::find($request->idAudio);

        $budget = new Budget();
        $budget->budgetAnno = $request->budgetAnno;
        $budget->user_id = $request->idAudio;
        $budget->nome = 'Budget';
        $budget->stipendio = $request->stipendio;
        $budget->provvigione = $request->provvigione;
        $budget->gennaio = $request->budgetAnno * $request->mese[1] / 100;
        $budget->febbraio = $request->budgetAnno * $request->mese[2] / 100;
        $budget->marzo = $request->budgetAnno * $request->mese[3] / 100;
        $budget->aprile = $request->budgetAnno * $request->mese[4] / 100;
        $budget->maggio = $request->budgetAnno * $request->mese[5] / 100;
        $budget->giugno = $request->budgetAnno * $request->mese[6] / 100;
        $budget->luglio = $request->budgetAnno * $request->mese[7] / 100;
        $budget->agosto = $request->budgetAnno * $request->mese[8] / 100;
        $budget->settembre = $request->budgetAnno * $request->mese[9] / 100;
        $budget->ottobre = $request->budgetAnno * $request->mese[10] / 100;
        $budget->novembre = $request->budgetAnno * $request->mese[11] / 100;
        $budget->dicembre = $request->budgetAnno * $request->mese[12] / 100;
        $budget->save();

        $user->budget_id = $budget->id;
        $user->save();
        return User::with('budget')->find($user->id);
    }

    public function modificaBgt($request)
    {
        $budget = Budget::find($request->idBudget);
        $budget->budgetAnno = $request->budgetAnno;
        $budget->stipendio = $request->stipendio;
        $budget->provvigione = $request->provvigione;
        $budget->gennaio =$request->mese[1];
        $budget->febbraio = $request->mese[2];
        $budget->marzo = $request->mese[3];
        $budget->aprile = $request->mese[4];
        $budget->maggio = $request->mese[5];
        $budget->giugno = $request->mese[6];
        $budget->luglio = $request->mese[7];
        $budget->agosto = $request->mese[8];
        $budget->settembre = $request->mese[9];
        $budget->ottobre = $request->mese[10];
        $budget->novembre = $request->mese[11];
        $budget->dicembre = $request->mese[12];
        $budget->save();

        return User::with('budget')->find($request->idAudio);
    }

    public function user($id)
    {
        return User::with('ruolo', 'recapito')->find($id);
    }

    public function situazioneMese($idAudio)
    {

        setlocale(LC_TIME, 'it_IT');
        Carbon::setLocale('it');
        $nomeMese = Carbon::now()->monthName;
        $mese = Carbon::now()->month;
        $anno = Carbon::now()->year;

        if($idAudio){
            return User::audio(1)->with(['provaInCorso', 'provaFinalizzata' => function($z) use($mese, $anno){
                $z->where([['mese_fine', $mese], ['anno_fine', $anno]]);
            },'provaReso' => function($r) use($mese, $anno){
                $r->where([['mese_fine', $mese], ['anno_fine', $anno]]);
            }, "budget:id,budgetAnno,$nomeMese as target"])
                ->withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                    $g->where([['mese_fine', $mese], ['anno_fine', $anno]]);
                }], 'tot')
                ->withCount('provaInCorso')
                ->find($idAudio);
        }

        return User::audio(1)->with(['provaInCorso', 'provaFinalizzata' => function($z) use($mese, $anno){
            $z->where([['mese_fine', $mese], ['anno_fine', $anno]]);
        },'provaReso' => function($r) use($mese, $anno){
            $r->where([['mese_fine', $mese], ['anno_fine', $anno]]);
        }, "budget:id,budgetAnno,$nomeMese as target"])
            ->withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                $g->where([['mese_fine', $mese], ['anno_fine', $anno]]);
            }], 'tot')
            ->withCount('provaInCorso')
            ->get();

    }

    public function dettaglioAudio()
    {
        $anno = Carbon::now()->year;
        return User::audio(1)
            ->with(['pezzi','fatturati','delta:id,premio,stipendio,provvigione','provaFinalizzata' => function ($q){
                $q->orderBy('mese_fine');
            }])
            ->withCount(['prova' => function($q) use($anno){
                $q->where('anno_inizio', $anno);
            }])
            ->orderBy('name')
            ->get();
    }

    public function visualizzaSituazioneAnno()
    {
        $audios = User::audio(1)->get();

        foreach ($audios as $audio){
            $valori = User::audio(1)->with('moltiBudget')->find($audio->id)->moltiBudget
                ->concat(User::audio(1)->with('moltiFatturati')->find($audio->id)->moltiFatturati)
                ->concat(User::audio(1)->with('moltiDelta')->find($audio->id)->moltiDelta);
       //         ->concat(User::audio(1)->with('moltiPezzi')->find($audio->id)->moltiPezzi);
            $audio->valori = $valori;
        }

        return $audios;
    }

    public function appuntamenti($idAudio)
    {
        return User::with('client')->find($idAudio)->client;
    }

    public function ventaglioAnno()
    {
        $anno = Carbon::now()->year;
        return Ventaglio::with('user')->where('anno', $anno)->get();
    }
}
