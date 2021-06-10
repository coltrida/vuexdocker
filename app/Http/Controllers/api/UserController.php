<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Services\UserService;

class UserController extends Controller
{
    public function audio(UserService $userService)
    {
        return $userService->audio();
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
    }

    public function situazioneAnno(UserService $userService)
    {
        $userService->situazioneAnno();
    }

    public function visualizzaSituazioneAnno(UserService $userService)
    {
        return $userService->visualizzaSituazioneAnno();
    }

    public function appuntamenti($idAudio, UserService $userService)
    {
        return $userService->appuntamenti($idAudio);
    }
}
