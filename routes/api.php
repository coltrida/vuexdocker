<?php

use App\Http\Controllers\api\AppuntamentiController;
use App\Http\Controllers\api\AudiometriaController;
use App\Http\Controllers\api\CategoriaController;
use App\Http\Controllers\api\ClientController;
use App\Http\Controllers\api\DocumentoController;
use App\Http\Controllers\api\DottoreController;
use App\Http\Controllers\api\ElaborazioneController;
use App\Http\Controllers\api\FilialiController;
use App\Http\Controllers\api\FornitoriController;
use App\Http\Controllers\api\GestioneController;
use App\Http\Controllers\api\InformazioniController;
use App\Http\Controllers\api\ListinoController;
use App\Http\Controllers\api\LoginController;
use App\Http\Controllers\api\MarketingController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\ProvaController;
use App\Http\Controllers\api\RateController;
use App\Http\Controllers\api\RecapitiController;
use App\Http\Controllers\api\RuoloController;
use App\Http\Controllers\api\StrumentazioneController;
use App\Http\Controllers\api\TelefonateController;
use App\Http\Controllers\api\TipologiaController;
use App\Http\Controllers\api\UserController;


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [LoginController::class, 'register']);


// ----------------- elaborazioneGiornaliera -----------------------
Route::get('/situazioneAnno', [ElaborazioneController::class, 'situazioneAnno']);


//Route::group(['middleware' => ['auth:sanctum']], function () {
Route::group([], function () {
        Route::get('/resetSpecial', function (){
            Artisan::call('migrate:fresh');
            Artisan::call('db:seed');
        });

        // ---------------- user -------------------------
        Route::get('/audio', [UserController::class, 'audio']);
        Route::get('/userAgenda', [UserController::class, 'userAgenda']);
        Route::get('/userAgenda/{idAudio}', [UserController::class, 'specificoUserAgenda']);
        Route::post('/userAgenda', [UserController::class, 'addUserAgenda']);
        Route::get('/audioConBgt', [UserController::class, 'audioConBgt']);
        Route::get('/audioSenzaBgt', [UserController::class, 'audioSenzaBgt']);
        Route::get('/amm', [UserController::class, 'amm']);
        Route::get('/callCenter', [UserController::class, 'callCenter']);
        Route::delete('/user/{id}', [UserController::class, 'elimina']);
        Route::get('/user/{id}', [UserController::class, 'user']);
        Route::post('/addUser', [UserController::class, 'aggiungi']);
        Route::get('/situazioneMese/{idAudio?}', [UserController::class, 'situazioneMese']);
        Route::get('/appuntamenti/{idAudio}', [UserController::class, 'appuntamenti']);

        Route::get('/logout/{id}', [LoginController::class, 'logout']);

        Route::get('switchSimulazione', [UserController::class, 'switchSimulazione']);
        Route::get('infoDatabase', [UserController::class, 'infoDatabase']);

        // ----------------- filiali -------------------------
        Route::get('/filiali', [FilialiController::class, 'index']);
        Route::get('/filialiUser/{idAudio}', [FilialiController::class, 'filialiAudio']);
        Route::get('/filialeById/{idFiliale}', [FilialiController::class, 'filialeById']);
        Route::delete('/filiali/{id}', [FilialiController::class, 'elimina']);
        Route::post('/addFiliale', [FilialiController::class, 'aggiungi']);
        Route::post('/modificaFiliale', [FilialiController::class, 'modifica']);

        // ----------------- recapiti -------------------------
        Route::get('/recapiti', [RecapitiController::class, 'index']);
        Route::get('/struttureAudio/{idAudio}', [RecapitiController::class, 'struttureAudio']);
        Route::get('/recapitiPerAudio', [RecapitiController::class, 'listaPerAudio']);
        Route::get('/recapiti/{idAudio}', [RecapitiController::class, 'recapitiByAudio']);
        Route::delete('/recapiti/{id}', [RecapitiController::class, 'elimina']);
        Route::post('/addRecapito', [RecapitiController::class, 'aggiungi']);
        Route::post('/modificaRecapito', [RecapitiController::class, 'modifica']);

        // ----------------- marketing -----------------------
        Route::get('/canali', [MarketingController::class, 'index']);
        Route::delete('/canali/{id}', [MarketingController::class, 'elimina']);
        Route::post('/addCanale', [MarketingController::class, 'aggiungi']);

        // ---------------- fornitori -------------------------
        Route::get('/fornitori', [FornitoriController::class, 'index']);
        Route::delete('/fornitori/{id}', [FornitoriController::class, 'elimina']);
        Route::post('/addFornitore', [FornitoriController::class, 'aggiungi']);
        Route::post('/modificaFornitore', [FornitoriController::class, 'modifica']);

        // ---------------- listino -------------------------
        Route::get('/listino', [ListinoController::class, 'index']);
        Route::delete('/listino/{id}', [ListinoController::class, 'elimina']);
        Route::post('/addListino', [ListinoController::class, 'aggiungi']);
        Route::post('/modificaListino', [ListinoController::class, 'modifica']);
        Route::get('/listino/{idFornitore}', [ListinoController::class, 'productFromFornitore']);
        Route::get('/eleListino/{idListino}', [ListinoController::class, 'listinoFromId']);
        Route::get('/nomiApa', [ListinoController::class, 'nomiApa']);

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
        Route::get('/controlloSoglie/{id}', [ProductController::class, 'controlloSoglie']);
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
        Route::get('/servizi', [ProductController::class, 'servizi']);

        // ---------------- client -------------------------
        Route::get('/clients', [ClientController::class, 'index']);
        Route::get('/province', [ClientController::class, 'province']);
        Route::get('/cittaByProvincia/{provincia}', [ClientController::class, 'cittaByProvincia']);
        Route::get('/clients/{id}', [ClientController::class, 'cliente']);
        Route::get('/compleanni/{idAudio}', [ClientController::class, 'compleanni']);
        Route::get('/clientsFiliale/{idFiliale}', [ClientController::class, 'clientsFiliale']);
        Route::post('/eliminaClient', [ClientController::class, 'elimina']);
        Route::post('/addClient', [ClientController::class, 'aggiungi']);
        Route::post('/ricercaNominativi', [ClientController::class, 'ricercaNominativi']);
        Route::post('/modificaClient', [ClientController::class, 'modifica']);
        Route::post('/inviaSms', [ClientController::class, 'inviaSms']);
        Route::get('/importClients', [ClientController::class, 'importClients']);
        Route::post('/importClientsFromNoah', [ClientController::class, 'importClientsFromNoah']);
        Route::post('/situazioneAnnoClientiAudio', [ClientController::class, 'situazioneAnnoClientiAudio']);
        Route::post('/situazioneAnnoResiAudio', [ClientController::class, 'situazioneAnnoResiAudio']);
        Route::get('/riepilogoClienti', [ClientController::class, 'riepilogo']);


        // ----------------- tipologia -------------------------
        Route::get('/tipologie', [TipologiaController::class, 'index']);
        Route::delete('/tipologie/{id}', [TipologiaController::class, 'elimina']);
        Route::post('/modificaTipologia', [TipologiaController::class, 'modifica']);
        Route::post('/addTipologia', [TipologiaController::class, 'aggiungi']);

        // ----------------- strumentazione -------------------------
        Route::get('/strumentazioneNonAssociata', [StrumentazioneController::class, 'nonAssociata']);
        Route::get('/strumentazioneAssociata', [StrumentazioneController::class, 'associata']);
        Route::delete('/strumentazioneNonAssociata/{id}', [StrumentazioneController::class, 'elimina']);
        Route::post('/modificaStrumentazione', [StrumentazioneController::class, 'modifica']);
        Route::post('/addStrumentazione', [StrumentazioneController::class, 'aggiungi']);
        Route::post('/associaStrumentazione', [StrumentazioneController::class, 'associaStrumentazione']);
        Route::get('/dissociaStrumentazione/{id}', [StrumentazioneController::class, 'dissociaStrumentazione']);

        // ----------------- gestione -------------------------
        Route::get('/associazioniPersonale', [GestioneController::class, 'associazioniPersonale']);
        Route::post('/addAssocia', [GestioneController::class, 'aggiungiAssociazione']);
        Route::post('/assegnaBgt', [GestioneController::class, 'assegnaBgt']);
        Route::post('/modificaBgt', [GestioneController::class, 'modificaBgt']);
        Route::get('/eliminaAssocia/{id}', [GestioneController::class, 'eliminaAssociazione']);
        Route::get('/backup', [GestioneController::class, 'backup']);
        Route::get('/restore', [GestioneController::class, 'restore']);
        Route::get('/logging', [GestioneController::class, 'logging']);

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
        Route::get('/provePassate/{idClient}', [ProvaController::class, 'provePassate']);
        Route::get('/eliminaProveSenzaProdotti/{idClient}', [ProvaController::class, 'eliminaProveSenzaProdotti']);

        // ----------------- appuntamenti -----------------------
        Route::get('/appuntamentiCliente/{idClient}', [AppuntamentiController::class, 'index']);
        Route::get('/appuntamentiOggiAudio/{idAudio}', [AppuntamentiController::class, 'oggi']);
        Route::get('/appuntamentiDomaniAudio/{idAudio}', [AppuntamentiController::class, 'domani']);
        Route::get('/appuntamentiLunediAudio/{idAudio}', [AppuntamentiController::class, 'lunedi']);
        Route::get('/appuntamentiMartediAudio/{idAudio}', [AppuntamentiController::class, 'martedi']);
        Route::get('/appuntamentiMercolediAudio/{idAudio}', [AppuntamentiController::class, 'mercoledi']);
        Route::get('/appuntamentiGiovediAudio/{idAudio}', [AppuntamentiController::class, 'giovedi']);
        Route::get('/appuntamentiVenerdiAudio/{idAudio}', [AppuntamentiController::class, 'venerdi']);
        Route::get('/appuntamentiLunediProssimoAudio/{idAudio}', [AppuntamentiController::class, 'lunediProssimo']);
        Route::get('/appuntamentiMartediProssimoAudio/{idAudio}', [AppuntamentiController::class, 'martediProssimo']);
        Route::get('/appuntamentiMercolediProssimoAudio/{idAudio}', [AppuntamentiController::class, 'mercolediProssimo']);
        Route::get('/appuntamentiGiovediProssimoAudio/{idAudio}', [AppuntamentiController::class, 'giovediProssimo']);
        Route::get('/appuntamentiVenerdiProssimoAudio/{idAudio}', [AppuntamentiController::class, 'venerdiProssimo']);
        Route::delete('/appuntamentiCliente/{id}/{idUser}', [AppuntamentiController::class, 'elimina']);
        Route::post('/addAppuntamento', [AppuntamentiController::class, 'aggiungi']);
        Route::post('/modificaAppuntamento', [AppuntamentiController::class, 'modifica']);
        Route::get('/dateSettimana', [AppuntamentiController::class, 'dateSettimana']);
        Route::get('/dateSettimanaProssima', [AppuntamentiController::class, 'dateSettimanaProssima']);

        // ----------------- documenti -----------------------
        Route::post('/salvaDocumento', [DocumentoController::class, 'salvaDocumento']);
        Route::post('/salvaFileXmlFromFiliale', [DocumentoController::class, 'salvaFileXmlFromFiliale']);
        Route::get('/caricaDocumenti/{idClient}', [DocumentoController::class, 'caricaDocumenti']);
        Route::delete('/eliminaDocumento/{idDocumento}', [DocumentoController::class, 'eliminaDocumento']);

        // ----------------- statistiche -----------------------
        Route::get('/dettaglioAudio', [UserController::class, 'dettaglioAudio']);
        Route::get('/visualizzaSituazioneAnno', [UserController::class, 'visualizzaSituazioneAnno']);
        Route::get('/ingressiRecapiti', [ClientController::class, 'ingressiRecapiti']);
        Route::get('/ingressiRecapitiMesi', [ClientController::class, 'ingressiRecapitiMesi']);
        Route::get('/fatturatoCanali', [MarketingController::class, 'fatturatoCanali']);
        Route::get('/userFatturatoCanali', [MarketingController::class, 'userFatturatoCanali']);
        Route::get('/ventaglioAnno', [UserController::class, 'ventaglioAnno']);
        Route::post('/statisticheInviiMedici', [DottoreController::class, 'statisticheInviiMedici']);
        Route::post('/statisticheTotaleInviiMedici', [DottoreController::class, 'statisticheTotaleInviiMedici']);
        Route::get('/statisticheCallcenter', [TelefonateController::class, 'statistiche']);

        // ----------------- rate -----------------------
        Route::get('/clientiDaSaldare', [RateController::class, 'allClientiDaSaldare']);
        Route::get('/clientiDaSaldare/{idAudio}', [RateController::class, 'clientiDaSaldare']);
        Route::get('/clientiSaldati/{idAudio}', [RateController::class, 'clientiSaldati']);
        Route::post('/addRata', [RateController::class, 'addRata']);
        Route::get('/caricaFattura/{idFattura}', [RateController::class, 'caricaFattura']);

        // ----------------- dottori -----------------------
        Route::get('/listaDottori/{idUser?}', [DottoreController::class, 'lista']);
        Route::get('/caricaOrari/{idDottore}', [DottoreController::class, 'caricaOrari']);
        Route::get('/caricaOrarioDottore/{dottore}', [DottoreController::class, 'caricaOrarioDottore']);
        Route::delete('/listaDottori/{idMedico}', [DottoreController::class, 'elimina']);
        Route::post('/addDottore', [DottoreController::class, 'aggiungi']);
        Route::post('/addOrario', [DottoreController::class, 'aggiungiOrario']);
        Route::delete('/eliminaOrario/{idOrario}', [DottoreController::class, 'eliminaOrario']);
        Route::post('/inviiMedici', [DottoreController::class, 'inviiMedici']);
        Route::post('/totaleInviiMedici', [DottoreController::class, 'totaleInviiMedici']);

        // ----------------- telefonate -----------------------
        Route::get('/recallOggi/{idUser}', [TelefonateController::class, 'recallOggi']);
        Route::get('/recallDomani/{idUser}', [TelefonateController::class, 'recallDomani']);
        Route::get('/telefonateFatteOggi', [TelefonateController::class, 'telefonateFatteOggi']);
        Route::get('/numeroTelefonateFatteOggi', [TelefonateController::class, 'numeroTelefonateFatteOggi']);
        Route::get('/numeroAppuntamentiPresiOggi', [TelefonateController::class, 'numeroAppuntamentiPresiOggi']);
        Route::post('/addTelefonata', [TelefonateController::class, 'addTelefonata']);
        Route::post('/aggiornaTelefonata', [TelefonateController::class, 'aggiornaTelefonata']);
        Route::get('/clientiMaiRichiamati', [TelefonateController::class, 'clientiMaiRichiamati']);
        Route::get('/clientiNonHannoMaiPresoAppuntamenti', [TelefonateController::class, 'clientiNonHannoMaiPresoAppuntamenti']);
        Route::get('/clientiUnAnnoUltimoAppuntamento', [TelefonateController::class, 'clientiUnAnnoUltimoAppuntamento']);
        Route::get('/recallsByIdClient/{idClient}', [TelefonateController::class, 'recallsByIdClient']);
        Route::get('/daRichiamare/{idUser}', [TelefonateController::class, 'daRichiamare']);
        Route::get('/recallAutomatico/{idUser}', [TelefonateController::class, 'recallAutomatico']);

    // ----------------- informazioni -----------------------
    Route::get('/informazioni/{id}', [InformazioniController::class, 'lista']);
    Route::post('/aggiungiInformazione', [InformazioniController::class, 'aggiungi']);
});

// ----------------- debugBar -----------------------
Route::get('/debugOn', function (){
    $q = new Barryvdh\Debugbar\LaravelDebugbar();
    $q->enable();
});
Route::get('/debugOff', function (){
    $q = new Barryvdh\Debugbar\LaravelDebugbar();
    $q->disable();
});
