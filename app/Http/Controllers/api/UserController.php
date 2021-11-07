<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Http\Resources\DettaglioAudioResource;
use App\Http\Resources\SituazioneMeseResource;
use App\Http\Resources\VisualizzaSituazioneAnnoResource;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function audio(UserService $userService)
    {
        return $userService->audio();
    }

    public function userAgenda(UserService $userService)
    {
        return $userService->userAgenda();
    }

    public function specificoUserAgenda($idAudio, UserService $userService)
    {
        return $userService->specificoUserAgenda($idAudio);
    }

    public function addUserAgenda(Request $request, UserService $userService)
    {
        return $userService->addUserAgenda($request);
    }

    public function audioConBgt(UserService $userService)
    {
        return $userService->audioConBgt();
    }

    public function audioSenzaBgt(UserService $userService)
    {
        return $userService->audioSenzaBgt();
    }

    public function amm(UserService $userService)
    {
        return $userService->amm();
    }

    public function callCenter(UserService $userService)
    {
        return $userService->callCenter();
    }

    public function aggiungi(UserRequest $request, UserService $userService)
    {
        return $userService->aggiungi($request);
    }

    public function elimina($id, UserService $userService)
    {
        return $userService->elimina($id);
    }

    public function user($id, UserService $userService)
    {
        return $userService->user($id);
    }

    public function situazioneMese(UserService $userService, $idAudio = '')
    {
        return $userService->situazioneMese($idAudio);
     //  return new SituazioneMeseResource($userService->situazioneMese($idAudio));
     //  return SituazioneMeseResource::collection($userService->situazioneMese($idAudio));
    }

    public function dettaglioAudio(UserService $userService)
    {
       // return DettaglioAudioResource::collection($userService->dettaglioAudio());
        return $userService->dettaglioAudio();
    }

    public function visualizzaSituazioneAnno(UserService $userService)
    {
        return VisualizzaSituazioneAnnoResource::collection($userService->visualizzaSituazioneAnno());
    }

    public function appuntamenti($idAudio, UserService $userService)
    {
        return $userService->appuntamenti($idAudio);
    }

    public function ventaglioAnno(UserService $userService)
    {
        return $userService->ventaglioAnno();
    }

    public function switchSimulazione(Request $request)
    {
        $user = User::find($request->user()->id);
        $user->delta_id = $user->delta_id == 0 ? 1 : 0;
        $user->save();
        return $user->delta_id == 1 ? 'SIMULAZIONE' : 'REALE';
    }

    public function infoDatabase(Request $request)
    {
        $user = User::find($request->user()->id);
        return $user->delta_id == 1 ? 'SIMULAZIONE' : 'REALE';
    }

}
