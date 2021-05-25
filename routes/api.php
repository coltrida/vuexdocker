<?php

use App\Http\Controllers\api\CategoriaController;
use App\Http\Controllers\api\ClientController;
use App\Http\Controllers\api\FilialiController;
use App\Http\Controllers\api\FornitoriController;
use App\Http\Controllers\api\ListinoController;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\MarketingController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\RecapitiController;
use App\Http\Controllers\api\RuoloController;
use App\Http\Controllers\api\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

// ---------------- user -------------------------
Route::get('/audio', [UserController::class, 'audio']);
Route::get('/amm', [UserController::class, 'amm']);
Route::delete('/user/{id}', [UserController::class, 'elimina']);
Route::post('/addUser', [UserController::class, 'aggiungi']);

// ----------------- filiali -------------------------
Route::get('/filiali', [FilialiController::class, 'index']);
Route::delete('/filiali/{id}', [FilialiController::class, 'elimina']);
Route::post('/addFiliale', [FilialiController::class, 'aggiungi']);

// ----------------- recapiti -------------------------
Route::get('/recapiti', [RecapitiController::class, 'index']);
Route::delete('/recapiti/{id}', [RecapitiController::class, 'elimina']);
Route::post('/addRecapito', [RecapitiController::class, 'aggiungi']);

// ----------------- marketing -----------------------
Route::get('/canali', [MarketingController::class, 'index']);
Route::delete('/canali/{id}', [MarketingController::class, 'elimina']);
Route::post('/addCanale', [MarketingController::class, 'aggiungi']);

// ---------------- fornitori -------------------------
Route::get('/fornitori', [FornitoriController::class, 'index']);
Route::delete('/fornitori/{id}', [FornitoriController::class, 'elimina']);
Route::post('/addFornitore', [FornitoriController::class, 'aggiungi']);

// ---------------- listino -------------------------
Route::get('/listino', [ListinoController::class, 'index']);
Route::delete('/listino/{id}', [ListinoController::class, 'elimina']);
Route::post('/addListino', [ListinoController::class, 'aggiungi']);
Route::get('/listino/{idFornitore}', [ListinoController::class, 'productFromFornitore']);

// ---------------- categoria -------------------------
Route::get('/categorie', [CategoriaController::class, 'index']);
Route::delete('/categoria/{id}', [CategoriaController::class, 'elimina']);
Route::post('/addCategoria', [CategoriaController::class, 'aggiungi']);

// ---------------- ruolo -------------------------
Route::get('/ruoli', [RuoloController::class, 'index']);
Route::delete('/ruolo/{id}', [RuoloController::class, 'elimina']);
Route::post('/addRuolo', [RuoloController::class, 'aggiungi']);

// ---------------- magazzino - prodotti -------------------------
Route::get('/filiali/{id}/presenti', [ProductController::class, 'presenti']);
Route::get('/filiali/{id}/inProva', [ProductController::class, 'inProva']);
Route::get('/filiali/{id}/richiesti', [ProductController::class, 'richiesti']);
Route::get('/filiali/{id}/inArrivo', [ProductController::class, 'inArrivo']);
Route::post('/richiestaProdotti', [ProductController::class, 'richiestaProdotti']);

// ---------------- client -------------------------
Route::get('/clients', [ClientController::class, 'index']);
Route::delete('/clients/{id}', [ClientController::class, 'elimina']);
Route::post('/addClient', [ClientController::class, 'aggiungi']);
