<?php

use App\Http\Controllers\api\FilialiController;
use App\Http\Controllers\api\FornitoriController;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\MarketingController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

// ----------------- filiali -------------------------
Route::get('/filiali', [FilialiController::class, 'index']);

// ----------------- marketing -----------------------
Route::get('/canali', [MarketingController::class, 'index']);
Route::delete('/canali/{id}', [MarketingController::class, 'elimina']);
Route::post('/addCanale', [MarketingController::class, 'aggiungi']);

// ---------------- fornitori -------------------------
Route::get('/fornitori', [FornitoriController::class, 'index']);
Route::delete('/fornitori/{id}', [FornitoriController::class, 'elimina']);
Route::post('/addFornitore', [FornitoriController::class, 'aggiungi']);
