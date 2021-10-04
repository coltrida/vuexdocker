<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use function dd;
use function redirect;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param LoginRequest $request
     * @param LoginService $loginService
     * @return array
     */
    public function login(LoginRequest $request, LoginService $loginService)
    {
        return $loginService->login($request);
    }

    public function register(Request $request, LoginService $loginService)
    {
        return $loginService->register($request);
    }

    public function logout($id)
    {
        User::find($id)->tokens()->delete();
       // Auth::logout();
    }


}
