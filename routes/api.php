<?php

use App\Http\Controllers\api\LoginController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::post('login', [LoginController::class, 'login']);
Route::get('logout', [LoginController::class, 'logout']);
