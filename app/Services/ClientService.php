<?php


namespace App\Services;


use App\Models\Client;
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
}
