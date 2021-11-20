<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Marketing;
use App\Models\Medico;
use App\Models\OrarioMedico;
use App\Models\StatoApa;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use function trim;

class DottoreService
{
    public function lista($idUser)
    {
        return $idUser ? User::with('medici')->find($idUser)->medici : Medico::with('user')->orderBy('nome')->get();
    }

    public function caricaOrari($idDottore)
    {
        return Medico::with('orari')->find($idDottore)->orari;
    }

    public function caricaOrarioDottore($dottore)
    {
        $idDottore = Medico::where('nome', $dottore)->first()->id;
        return $this->caricaOrari($idDottore);
    }

    public function aggiungi($request)
    {
        $new = Medico::firstOrCreate([
            'nome' => trim(Str::upper($request->nome)),
            'cognome' => trim(Str::upper($request->cognome)),
        ]);

        $new->user()->attach($request->userId);

        $newOtorino = Medico::with('user')->find($new->id);
        $newOtorino->cod = 'M'.$new->id;
        $newOtorino->save();

        return $newOtorino;
    }

    public function elimina($idMedico)
    {
        return Medico::find($idMedico)->delete();
    }

    public function aggiungiOrario($request)
    {
        return OrarioMedico::create([
            'medico_id' => $request->idDottore,
            'dove' => $request->dove,
            'giorno' => $request->giorno,
            'orario' => $request->orario,
        ]);

        /*$new = new OrarioMedico();
        $new->medico_id = $request->idDottore;
        $new->dove = $request->dove;
        $new->giorno = $request->giorno;
        $new->orario = $request->orario;
        $new->save();

        return $new;*/
    }

    public function eliminaOrario($idOrario)
    {
        return OrarioMedico::find($idOrario)->delete();
    }

    public function inviiMedici($request)
    {
        return Client::where([
            ['user_id', $request->idUser],
            ['marketing_id', 5],
            ['anno', $request->anno],
        ])
            ->with('prova', 'medico')
        ->orderBy('medico_id')->get();
    }

    public function totaleInviiMedici($request)
    {
        return Medico::
        withCount(['clients as vendite' => function($q) use($request) {
            $q->where([
                ['user_id', $request->idUser],
                ['marketing_id', 5]
            ])->whereHas('prova', function ($q) use($request){
                $q->where([
                    ['anno_fine', $request->anno],
                    ['stato_id', 4],
                ]);
            });
        }])
            ->withCount(['clients as invii' => function($q) use($request) {
                $q->where([
                    ['user_id', $request->idUser],
                    ['marketing_id', 5]
                ]);
            }])
            ->withSum('prova', 'tot')->get();
    }

    public function statisticheInviiMedici($request)
    {
        $idMktMedico = Marketing::where('name', 'MEDICO')->first()->id;
        return Client::where([
                ['marketing_id', $idMktMedico],
            ])
            ->whereHas('prova', function ($q) use($request){
                $q->where([
                    ['anno_inizio', $request->anno],
                ]);
            })
            ->with(['prova' => function($k){
                $k->with('stato');
            }, 'medico', 'user'])
            ->orderBy('user_id')->orderBy('medico_id')->get();
    }

    public function statisticheTotaleInviiMedici($request)
    {
        $idMktMedico = Marketing::where('name', 'MEDICO')->first()->id;
        $idVendita = StatoApa::where('nome', 'FATTURA')->first()->id;

        return Medico::
        withCount(['clients as vendite' => function($q) use($request, $idMktMedico, $idVendita) {
            $q->where([
                ['marketing_id', $idMktMedico]
            ])->whereHas('prova', function ($q) use($request, $idVendita){
                $q->where([
                    ['anno_fine', $request->anno],
                    ['stato_id', $idVendita],
                ]);
            });
        }])
            ->withCount(['clients as invii' => function($q) use($request, $idMktMedico) {
                $q->where([
                    ['marketing_id', $idMktMedico]
                ]);
            }])
            ->withSum('provaFinalizzata', 'tot')
            ->with('user')
            ->orderBy('cognome')
            ->get();
    }

    public function statisticheMensiliMedici($request)
    {
        $annoOggi = $request->anno;
        return Medico::
            with('user')
            ->withcount(['clients' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where('anno_inizio', $annoOggi);
                });
            }])
            ->withCount(['clients as gen' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 1]]);
                });
            }])
            ->withCount(['clients as feb' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 2]]);
                });
            }])
            ->withCount(['clients as mar' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 3]]);
                });
            }])
            ->withCount(['clients as apr' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 4]]);
                });
            }])
            ->withCount(['clients as mag' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 5]]);
                });
            }])
            ->withCount(['clients as giu' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 6]]);
                });
            }])
            ->withCount(['clients as lug' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 7]]);
                });
            }])
            ->withCount(['clients as ago' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 8]]);
                });
            }])
            ->withCount(['clients as set' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 9]]);
                });
            }])
            ->withCount(['clients as ott' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 10]]);
                });
            }])
            ->withCount(['clients as nov' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 11]]);
                });
            }])
            ->withCount(['clients as dic' => function($q) use($annoOggi){
                $q->whereHas('prova', function ($e) use($annoOggi){
                    $e->where([['anno_inizio', $annoOggi], ['mese_inizio', 12]]);
                });
            }])
            ->orderBy('nome')
            ->get();
    }
}
