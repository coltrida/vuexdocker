<?php

use App\Http\Controllers\api\AppuntamentiController;
use App\Http\Controllers\api\AudiometriaController;
use App\Http\Controllers\api\CategoriaController;
use App\Http\Controllers\api\ClientController;
use App\Http\Controllers\api\FilialiController;
use App\Http\Controllers\api\FornitoriController;
use App\Http\Controllers\api\GestioneController;
use App\Http\Controllers\api\ListinoController;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\MarketingController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\ProvaController;
use App\Http\Controllers\api\RecapitiController;
use App\Http\Controllers\api\RuoloController;
use App\Http\Controllers\api\TipologiaController;
use App\Http\Controllers\api\UserController;


Route::post('/login', [LoginController::class, 'login']);
Route::get('/logout', [LoginController::class, 'logout']);

// ---------------- user -------------------------
Route::get('/audio', [UserController::class, 'audio']);
Route::get('/userAgenda', [UserController::class, 'userAgenda']);
Route::post('/userAgenda', [UserController::class, 'addUserAgenda']);
Route::get('/audioConBgt', [UserController::class, 'audioConBgt']);
Route::get('/audioSenzaBgt', [UserController::class, 'audioSenzaBgt']);
Route::get('/amm', [UserController::class, 'amm']);
Route::delete('/user/{id}', [UserController::class, 'elimina']);
Route::get('/user/{id}', [UserController::class, 'user']);
Route::post('/addUser', [UserController::class, 'aggiungi']);
Route::get('/situazioneMese/{idAudio?}', [UserController::class, 'situazioneMese']);
Route::get('/situazioneAnno', [UserController::class, 'situazioneAnno']);
Route::get('/visualizzaSituazioneAnno', [UserController::class, 'visualizzaSituazioneAnno']);
Route::get('/appuntamenti/{idAudio}', [UserController::class, 'appuntamenti']);

// ----------------- filiali -------------------------
Route::get('/filiali', [FilialiController::class, 'index']);
Route::get('/filialiUser/{idAudio}', [FilialiController::class, 'filialiAudio']);
Route::delete('/filiali/{id}', [FilialiController::class, 'elimina']);
Route::post('/addFiliale', [FilialiController::class, 'aggiungi']);
/*Route::get('/situazioneMese', [FilialiController::class, 'situazioneMese']);*/

// ----------------- recapiti -------------------------
Route::get('/recapiti', [RecapitiController::class, 'index']);
Route::get('/recapitiPerAudio', [RecapitiController::class, 'listaPerAudio']);
Route::get('/recapiti/{idAudio}', [RecapitiController::class, 'recapitiByAudio']);
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
Route::get('/eleListino/{idListino}', [ListinoController::class, 'listinoFromId']);

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
Route::get('/filialeFornitore/{idFiliale}/{idFornitore}', [ProductController::class, 'presentiFornitore']);
Route::get('/filiali/{id}/inProva', [ProductController::class, 'inProva']);
Route::get('/filiali/{id}/richiesti', [ProductController::class, 'richiesti']);
Route::get('/filiali/{id}/inArrivo', [ProductController::class, 'inArrivo']);
Route::post('/productSwitchInProva', [ProductController::class, 'switchInProva']);
Route::post('/productSwitchImmatricolato', [ProductController::class, 'switchImmatricolato']);
Route::get('/productSwitchRimuoviDallaProva/{id}', [ProductController::class, 'switchRimuoviDallaProva']);
Route::delete('/productRimuoviRichiesta/{idProduct}', [ProductController::class, 'productRimuoviRichiesta']);
Route::post('/richiestaProdotti', [ProductController::class, 'richiestaProdotti']);
Route::post('/assegnaProdottiMagazzino', [ProductController::class, 'assegnaProdottiMagazzino']);
Route::get('/listaProdottiRichiesti', [ProductController::class, 'listaProdottiRichiesti']);
Route::get('/prodottiImmatricolati/{idFiliale}', [ProductController::class, 'prodottiImmatricolati']);
Route::get('/productSwitchArrivato/{id}', [ProductController::class, 'switchArrivato']);

// ---------------- client -------------------------
Route::get('/clients', [ClientController::class, 'index']);
Route::get('/clients/{id}', [ClientController::class, 'cliente']);
Route::get('/compleanni/{idAudio}', [ClientController::class, 'compleanni']);
Route::get('/clientsFiliale/{idFiliale}', [ClientController::class, 'clientsFiliale']);
Route::delete('/clients/{id}', [ClientController::class, 'elimina']);
Route::post('/addClient', [ClientController::class, 'aggiungi']);
Route::post('/modificaClient', [ClientController::class, 'modifica']);
Route::post('/inviaSms', [ClientController::class, 'inviaSms']);

// ----------------- tipologia -------------------------
Route::get('/tipologie', [TipologiaController::class, 'index']);
Route::delete('/tipologie/{id}', [TipologiaController::class, 'elimina']);
Route::post('/modificaTipologia', [TipologiaController::class, 'modifica']);
Route::post('/addTipologia', [TipologiaController::class, 'aggiungi']);

// ----------------- gestione -------------------------
Route::get('/associazioniPersonale', [GestioneController::class, 'associazioniPersonale']);
Route::post('/addAssocia', [GestioneController::class, 'aggiungiAssociazione']);
Route::post('/assegnaBgt', [GestioneController::class, 'assegnaBgt']);
Route::post('/modificaBgt', [GestioneController::class, 'modificaBgt']);
Route::get('/eliminaAssocia/{id}', [GestioneController::class, 'eliminaAssociazione']);

// ---------------- audiometrie -------------------------
Route::get('/listaAudiometrie/{idClient}', [AudiometriaController::class, 'index']);
Route::get('/audiometria/{id}', [AudiometriaController::class, 'seleziona']);
Route::post('/addAudiometria', [AudiometriaController::class, 'aggiungi']);

// ---------------- prova -------------------------
Route::post('/salvaProva', [ProvaController::class, 'salvaProva']);
Route::delete('/provaProdotto/{id}', [ProvaController::class, 'eliminaProdotto']);
Route::get('/resoProva/{idProva}', [ProvaController::class, 'reso']);
Route::post('/nuovaProva', [ProvaController::class, 'nuova']);
Route::post('/addEleInProva', [ProvaController::class, 'addEle']);
Route::post('/salvaFattura', [ProvaController::class, 'salvaFattura']);

// ----------------- appuntamenti -----------------------
Route::get('/appuntamentiCliente/{idClient}', [AppuntamentiController::class, 'index']);
Route::get('/appuntamentiOggiAudio/{idAudio}', [AppuntamentiController::class, 'oggi']);
Route::delete('/appuntamentiCliente/{id}/{idUser}', [AppuntamentiController::class, 'elimina']);
Route::post('/addAppuntamento', [AppuntamentiController::class, 'aggiungi']);
