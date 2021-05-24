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
}
