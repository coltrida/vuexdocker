<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'cognome' => $this->cognome,
            'codfisc' => $this->codfisc,
            'indirizzo' => $this->indirizzo,
            'citta' => $this->citta,
            'cap' => $this->cap,
            'provincia' => $this->provincia,
            'telefono' => $this->telefono,
            'telefono2' => $this->telefono2,
            'telefono3' => $this->telefono3,
            'tipologia' => $this->tipologia_id ? $this->tipologia->nome : null,
            'tipologia_id' => $this->tipologia_id,
            'marketing' => isset($this->marketing->name) ? $this->marketing->name : null,
            'marketing_id' => $this->marketing_id,
            'user' => $this->user_id ? $this->user->name : null,
            'user_id' => $this->user_id,
            'filiale' => $this->filiale_id ? $this->filiale->nome : null,
            'filiale_id' => $this->filiale_id,
            'mail' => $this->mail,
            'recapito' => isset($this->recapito->nome) ? $this->recapito->nome : null,
            'medico' => isset($this->medico->nome) ? $this->medico->fullname : null,
            'recapito_id' => $this->recapito_id,
            'medico_id' => $this->medico_id,
            'datanascita' => $this->datanascita,
            'datanascitaVisualizzazione' => $this->datanascita ? Carbon::make($this->datanascita)->format('d-m-Y') : null,
            'luogoNascita' => $this->luogoNascita,
            'audiometria' => $this->audiometria,
            'prove' => $this->prova,
            'fullname' => $this->fullname,
            'fullricerca' => $this->fullricerca,
            'telefonateOggi' => $this->recalls_count,
            'meseIngresso' => $this->mese,
            'annoIngresso' => $this->anno,
        ];
    }
}
