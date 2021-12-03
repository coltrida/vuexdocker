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

    public function audioConBgt(Request $request, UserService $userService)
    {
        return $userService->audioConBgt($request);
    }

    public function audioSenzaBgt(Request $request, UserService $userService)
    {
        return $userService->audioSenzaBgt($request);
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
        $userService->elimina($id);
    }

    public function userTranfert($id, $idTrasferimento, UserService $userService)
    {
        $userService->userTranfert($id, $idTrasferimento);
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

    public function dettaglioAudio(Request $request, UserService $userService)
    {
       // return DettaglioAudioResource::collection($userService->dettaglioAudio());
        return $userService->dettaglioAudio($request);
    }

    public function visualizzaSituazioneAnno(Request $request, UserService $userService)
    {
        return VisualizzaSituazioneAnnoResource::collection($userService->visualizzaSituazioneAnno($request));
    }

    public function appuntamenti($idAudio, UserService $userService)
    {
        return $userService->appuntamenti($idAudio);
    }

    public function ventaglioAnno(Request $request, UserService $userService)
    {
        return $userService->ventaglioAnno($request);
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

    public function audioSeguitiDaAmministrativa($idAmministrativa, UserService $userService)
    {
        return $userService->audioSeguitiDaAmministrativa($idAmministrativa);
    }

}
