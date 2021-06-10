<?php


namespace App\Services;

use App\Models\Budget;
use App\Models\Client;
use App\Models\Fatturati;
use App\Models\Prova;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function array_push;
use function array_sum;
use function collect;
use function config;
use function count;
use function dd;
use function setlocale;
use function trim;
use const LC_TIME;

class UserService
{
    public function audio()
    {
        return User::audio()->orderBy('name')->get();
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
        $user = User::with('budget')->find($request->idAudio);

        $budget = new Budget();
        $budget->budgetAnno = $request->budgetAnno;
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

    public function situazioneAnno()
    {
        $anno = Carbon::now()->year;
        $mese = Carbon::now()->month;

        /*return User::audio(1)->with(['budget','provaFinalizzata' => function($e) use($anno){
            $e->where('anno_fine', $anno);
        }])
            ->withSum(['provaFinalizzata' => function($q){
                $q->groupBy('mese_fine');
            }], 'tot')
            ->get();*/

       /* return User::audio(1)->with('fatturatoMese')
            ->get();*/
       $users = User::audio(1)->get();
       foreach ($users as $user){
           $fatturati = $user->fatturati_id ? $user->fatturati : new Fatturati();
           $totali = [];
           if ($mese >= 1) {
               $valore = User::
                   withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                       $g->where([['mese_fine', 1], ['anno_fine', $anno]]);
                   }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->gennaio = $valore ? $valore : 0;
               array_push($totali, $fatturati->gennaio);
           }

           if ($mese >= 2) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 2], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->febbraio = $valore ? $valore : 0;
               array_push($totali, $fatturati->febbraio);
           }

           if ($mese >= 3) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 3], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->marzo = $valore ? $valore : 0;
               array_push($totali, $fatturati->marzo);
           }

           if ($mese >= 4) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 4], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->aprile = $valore ? $valore : 0;
               array_push($totali, $fatturati->aprile);
           }

           if ($mese >= 5) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 5], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->maggio = $valore ? $valore : 0;
               array_push($totali, $fatturati->maggio);
           }

           if ($mese >= 6) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 6], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->giugno = $valore ? $valore : 0;
               array_push($totali, $fatturati->giugno);
           }

           if ($mese >= 7) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 7], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->luglio = $valore ? $valore : 0;
               array_push($totali, $fatturati->luglio);
           }

           if ($mese >= 8) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 8], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->agosto = $valore ? $valore : 0;
               array_push($totali, $fatturati->agosto);
           }

           if ($mese >= 9) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 9], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->settembre = $valore ? $valore : 0;
               array_push($totali, $fatturati->settembre);
           }

           if ($mese >= 10) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 10], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->ottobre = $valore ? $valore : 0;
               array_push($totali, $fatturati->ottobre);
           }

           if ($mese >= 11) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 11], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->novembre = $valore ? $valore : 0;
               array_push($totali, $fatturati->novembre);
           }

           if ($mese >= 12) {
               $valore = User::
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 12], ['anno_fine', $anno]]);
               }], 'tot')
                   ->find($user->id)->prova_finalizzata_sum_tot;

               $fatturati->dicembre = $valore ? $valore : 0;
               array_push($totali, $fatturati->dicembre);
           }

           $fatturati->user_id = $user->id;
           $fatturati->budgetAnno = array_sum($totali);
           $fatturati->nome = 'Fatturati';
           $fatturati->save();
           $user->fatturati_id = $fatturati->id;
           $user->save();

       }

       //return Prova::selectRaw('sum(tot) AS cnt, mese_fine')->groupBy('mese_fine')->orderBy('mese_fine')->get();
    }

    public function visualizzaSituazioneAnno()
    {
        $audios = User::audio(1)->get();

        foreach ($audios as $audio){
            $valori = User::audio(1)->with('moltiBudget', 'moltiFatturati')->find($audio->id)->moltiBudget
                ->concat(User::audio(1)->with('moltiBudget', 'moltiFatturati')->find($audio->id)->moltiFatturati);
            $audio->valori = $valori;
        }

        return $audios;
    }

    public function appuntamenti($idAudio)
    {
        return User::with('client')->find($idAudio)->client;
    }
}
