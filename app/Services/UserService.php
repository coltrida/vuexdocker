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

    public function situazioneAnno()
    {
        $anno = Carbon::now()->year;
        $mese = Carbon::now()->month;

       $users = User::audio(1)->get();

       foreach ($users as $user){
           $fatturati = $user->fatturati_id ? $user->fatturati : new Fatturati();
           $delta = $user->delta_id ? $user->delta : new Delta();
           /*$pezzi = $user->pezzi_id ? $user->pezzi : new Pezzi();*/
           $totali = [];
           $totaliBgt = [];
           /*$pezziTot = [];*/

           $ventaglio = Ventaglio::firstOrCreate(
               ['user_id' => $user->id, 'anno' => $anno]
           );

           if ($mese >= 1) {
               $valore = User::with('budget')->
                   withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                       $g->where([['mese_fine', 1], ['anno_fine', $anno]]);
                   }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->with(['provaReso' => function($j) use($anno){
                       $j->where('anno_fine', $anno)->withCount('product');
                   }])
                   ->find($user->id);

                $ventaglio->m90 = Product::
                    whereHas('fattura', function ($f) use($anno){
                        $f->where('anno_fattura', $anno);
                    })
                    ->where([
                        ['stato_id', 4],
                        ['listino_id', 1],
                        ['user_id', $user->id]
                    ])
                ->count();

               $ventaglio->m70 = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 2],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->m50 = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 3],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->m30 = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 4],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIO2400AI = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 5],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIO2000AI = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 6],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIO1600AI = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 7],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIO1200AI = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 8],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIO2400EDGEAILITHIUM = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 9],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIOAI2000LITHIUM = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 10],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIOAI1600LITHIUM = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 11],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->LIVIOAI1200LITHIUM = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['listino_id', 12],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->tot = Product::
               whereHas('fattura', function ($f) use($anno){
                   $f->where('anno_fattura', $anno);
               })
                   ->where([
                       ['stato_id', 4],
                       ['user_id', $user->id]
                   ])
                   ->count();

               $ventaglio->save();

           //    $pezzi->premio = count($valore->provaReso) > 0 ? $valore->provaReso[0]->product_count : 0;
            //   $pezzi->gennaio = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->gennaio = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->gennaio = number_format( (float) (($fatturati->gennaio / $valore->budget->gennaio) - 1) * 100, '1').'%';
            //   array_push($pezziTot, $pezzi->gennaio);
               array_push($totali, $fatturati->gennaio);
               array_push($totaliBgt, $valore->budget->gennaio);
           }

           if ($mese >= 2) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 2], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

         //      $pezzi->febbraio = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->febbraio = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->febbraio = number_format( (float) (($fatturati->febbraio / $valore->budget->febbraio) - 1) * 100, '1').'%';
         //      array_push($pezziTot, $pezzi->febbraio);
               array_push($totali, $fatturati->febbraio);
               array_push($totaliBgt, $valore->budget->febbraio);
           }

           if ($mese >= 3) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 3], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

           //    $pezzi->marzo = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->marzo = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->marzo = number_format( (float) (($fatturati->marzo / $valore->budget->marzo) - 1) * 100, '1').'%';
           //    array_push($pezziTot, $pezzi->marzo);
               array_push($totali, $fatturati->marzo);
               array_push($totaliBgt, $valore->budget->marzo);
           }

           if ($mese >= 4) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 4], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

          //     $pezzi->aprile = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->aprile = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->aprile = number_format( (float) (($fatturati->aprile / $valore->budget->aprile) - 1) * 100, '1').'%';
          //     array_push($pezziTot, $pezzi->aprile);
               array_push($totali, $fatturati->aprile);
               array_push($totaliBgt, $valore->budget->aprile);
           }

           if ($mese >= 5) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 5], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

          //     $pezzi->maggio = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->maggio = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->maggio = number_format( (float) (($fatturati->maggio / $valore->budget->maggio) - 1) * 100, '1').'%';
          //     array_push($pezziTot, $pezzi->maggio);
               array_push($totali, $fatturati->maggio);
               array_push($totaliBgt, $valore->budget->maggio);
           }

           if ($mese >= 6) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 6], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

         //      $pezzi->giugno = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->giugno = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->giugno = number_format( (float) (($fatturati->giugno / $valore->budget->giugno) - 1) * 100, '1').'%';
          //     array_push($pezziTot, $pezzi->giugno);
               array_push($totali, $fatturati->giugno);
               array_push($totaliBgt, $valore->budget->giugno);
           }

           if ($mese >= 7) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 7], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

          //     $pezzi->luglio = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->luglio = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->luglio = number_format( (float) (($fatturati->luglio / $valore->budget->luglio) - 1) * 100, '1').'%';
          //     array_push($pezziTot, $pezzi->luglio);
               array_push($totali, $fatturati->luglio);
               array_push($totaliBgt, $valore->budget->luglio);
           }

           if ($mese >= 8) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 8], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

        //       $pezzi->agosto = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->agosto = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->agosto = number_format( (float) (($fatturati->agosto / $valore->budget->agosto) - 1) * 100, '1').'%';
       //        array_push($pezziTot, $pezzi->agosto);
               array_push($totali, $fatturati->agosto);
               array_push($totaliBgt, $valore->budget->agosto);
           }

           if ($mese >= 9) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 9], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

       //        $pezzi->settembre = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->settembre = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->settembre = number_format( (float) (($fatturati->settembre / $valore->budget->settembre) - 1) * 100, '1').'%';
       //        array_push($pezziTot, $pezzi->settembre);
               array_push($totali, $fatturati->settembre);
               array_push($totaliBgt, $valore->budget->settembre);
           }

           if ($mese >= 10) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 10], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

        //       $pezzi->ottobre = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->ottobre = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->ottobre = number_format( (float) (($fatturati->ottobre / $valore->budget->ottobre) - 1) * 100, '1').'%';
        //       array_push($pezziTot, $pezzi->ottobre);
               array_push($totali, $fatturati->ottobre);
               array_push($totaliBgt, $valore->budget->ottobre);
           }

           if ($mese >= 11) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 11], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

        //       $pezzi->novembre = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->novembre = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->novembre = number_format( (float) (($fatturati->novembre / $valore->budget->novembre) - 1) * 100, '1').'%';
        //       array_push($pezziTot, $pezzi->novembre);
               array_push($totali, $fatturati->novembre);
               array_push($totaliBgt, $valore->budget->novembre);
           }

           if ($mese >= 12) {
               $valore = User::with('budget')->
               withSum(['provaFinalizzata' => function($g) use($mese, $anno){
                   $g->where([['mese_fine', 12], ['anno_fine', $anno]]);
               }], 'tot')
                   ->with(['provaFinalizzata' => function($e){
                       $e->withCount('product');
                   }])
                   ->find($user->id);

       //        $pezzi->dicembre = $valore->prova_finalizzata_sum_tot ? $valore->provaFinalizzata->sum('product_count') : 0;
               $fatturati->dicembre = $valore->prova_finalizzata_sum_tot ? $valore->prova_finalizzata_sum_tot : 0;
               $delta->dicembre = number_format( (float) (($fatturati->dicembre / $valore->budget->dicembre) - 1) * 100, '1').'%';
       //        array_push($pezziTot, $pezzi->dicembre);
               array_push($totali, $fatturati->dicembre);
               array_push($totaliBgt, $valore->budget->dicembre);
           }

     //      $pezzi->user_id = $user->id;
           $fatturati->user_id = $user->id;
           $delta->user_id = $user->id;

    //       $pezzi->budgetAnno = array_sum($pezziTot);
           $fatturati->budgetAnno = array_sum($totali);
           $delta->budgetAnno = number_format( (float)  ((array_sum($totali) / array_sum($totaliBgt)) - 1) * 100, '1').'%';

           $numeroClienti = Client::where([
               ['user_id', $user->id],
               ['tipologia_id', 2],
           ])->count();

           $delta->stipendio = $numeroClienti;

           $numeroPC = Client::where([
               ['user_id', $user->id],
               ['tipologia_id', 1],
           ])->count();

           $delta->provvigione = $numeroPC;

           $tot = $numeroClienti + $numeroPC;

           $delta->premio = $tot <> 0 ? ($numeroClienti / $tot) * 100 : 0;

     //      $pezzi->nome = 'Pezzi';
           $fatturati->nome = 'Fatturati';
           $delta->nome = 'Delta';
    //       $pezzi->save();
           $fatturati->save();
           $delta->save();
           $user->fatturati_id = $fatturati->id;
           $user->delta_id = $delta->id;
   //        $user->pezzi_id = $pezzi->id;
           $user->save();
       }
    }

    public function dettaglioAudio()
    {
        return User::audio()
            ->with(['pezzi','delta:id,premio,stipendio,provvigione','provaFinalizzata' => function ($q){
                $q->orderBy('mese_fine');
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
