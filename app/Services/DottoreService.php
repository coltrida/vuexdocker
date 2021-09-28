<?php


namespace App\Services;


use App\Models\Client;
use App\Models\Medico;
use App\Models\OrarioMedico;
use App\Models\Recapito;
use App\Models\User;
use Illuminate\Support\Str;
use function trim;

class DottoreService
{
    public function lista($idUser)
    {
        return User::with('medici')->find($idUser)->medici;
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
        $new = Medico::create([
            'nome' => trim(Str::upper($request->nome)). ' '.trim(Str::upper($request->cognome)),
        ]);

  /*      $new = new Medico();
        $nome = trim(Str::upper($request->nome));
        $cognome = trim(Str::upper($request->cognome));
        $new->nome = $cognome.' '.$nome;
      //  $new->user_id = $request->userId;
        $new->save();*/

        $new->user()->attach($request->userId);

        return $new;
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
        /*dd(Medico::
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
        ->withSum('prova', 'tot')->get());*/

        /*dd(Medico::
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
            ->with(['clients' => function($q) use($request) {
            $q->where([
                ['user_id', $request->idUser],
                ['marketing_id', 5]
            ])->whereHas('prova', function ($q) use($request){
                $q->where([
                    ['anno_fine', $request->anno],
                    ['stato_id', 4],
                ]);
            })->withSum(['prova' => function($g) use($request){
                $g->where('anno_fine', $request->anno);
            }], 'tot');
        }])
            ->orderBy('id')
            ->get());*/

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
        return Client::where([
            ['marketing_id', 5],
            ['anno', $request->anno],
        ])
            ->with('prova', 'medico', 'user')
            ->orderBy('user_id')->orderBy('medico_id')->get();
    }

    public function statisticheTotaleInviiMedici($request)
    {
        return Medico::
        withCount(['clients as vendite' => function($q) use($request) {
            $q->where([
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
                    ['marketing_id', 5]
                ]);
            }])
            ->withSum('prova', 'tot')
            ->with('user')
            ->get();
    }
}
