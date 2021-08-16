const help = () => {
    let base = 'http://vuexdocker.test/api/';
    return {

/*        linklogin: 'http://localhost/api/login',
        linklogout: 'http://localhost/api/logout',
        linkfiliali: 'http://localhost/api/filiali',
        linkcanali: 'http://localhost/api/canali',
        linkaddcanale: 'http://localhost/api/addCanale',*/

        linklogin: base+'login',
        linkregister: base+'register',
        linklogout: base+'logout',
        linkcanali: base+'canali',
        linkaddcanale: base+'addCanale',
        linkfornitori: base+'fornitori',
        linkaddfornitore: base+'addFornitore',
        linklistino: base+'listino',
        linkelelistino: base+'eleListino',
        linkaddlistino: base+'addListino',
        linkcategorie: base+'categorie',
        linkaddcategoria: base+'addCategoria',
        linkruoli: base+'ruoli',
        linkaddruolo: base+'addRuolo',
        linkaudio: base+'audio',
        linkaudioconbgt: base+'audioConBgt',
        linkaudiosenzabgt: base+'audioSenzaBgt',
        linkamm: base+'amm',
        linkcallcenter: base+'callCenter',
        linkuser: base+'user',
        linkadduser: base+'addUser',
        linkfiliali: base+'filiali',
        linkaddfiliale: base+'addFiliale',
        linkrecapiti: base+'recapiti',
        linkrecapitiperaudio: base+'recapitiPerAudio',
        linkaddrecapito: base+'addRecapito',
        linkrichiestaprodotti: base+'richiestaProdotti',
        linkclients: base+'clients',
        linkclientsfiliale: base+'clientsFiliale',
        linkaddclient: base+'addClient',
        linkmodificaclient: base+'modificaClient',
        linktipologie: base+'tipologie',
        linkaddtipologia: base+'addTipologia',
        linkmodificatipologia: base+'modificaTipologia',
        linkassociazioniPersonale: base+'associazioniPersonale',
        linkaggiungiAssociazione: base+'addAssocia',
        linkeliminaAssociazione: base+'eliminaAssocia',
        linkassegnabgt: base+'assegnaBgt',
        linkmodificabgt: base+'modificaBgt',
        linkaudiometrie: base+'listaAudiometrie',
        linkaudiometria: base+'audiometria',
        linkaddaudiometria: base+'addAudiometria',
        linkfilialefornitore: base+'filialeFornitore',
        linknuovaprova: base+'nuovaProva',
        linksalvaprova: base+'salvaProva',
        linkaddeleinprova: base+'addEleInProva',
        linkeliminaeleinprova: base+'provaProdotto',
        linkproductswitchinprova: base+'productSwitchInProva',
        linkproductswitchrimuovidallaprova: base+'productSwitchRimuoviDallaProva',
        linkresoprova: base+'resoProva',
        linksalvafattura: base+'salvaFattura',
        linkgetuser: base+'user',
        linksituazionemese: base+'situazioneMese',
        linkfilialiuser: base+'filialiUser',
        linkproductrimuovirichiesta: base+'productRimuoviRichiesta',
        linkappuntamenti: base+'appuntamentiCliente',
        linkaddappuntamento: base+'addAppuntamento',
        linkcompleanni: base+'compleanni',
        linkappuntamentioggi: base+'appuntamentiOggiAudio',
        linkappuntamentidomani: base+'appuntamentiDomaniAudio',
        linkappuntamentilunedi: base+'appuntamentiLunediAudio',
        linkappuntamentimartedi: base+'appuntamentiMartediAudio',
        linkappuntamentimercoledi: base+'appuntamentiMercolediAudio',
        linkappuntamentigiovedi: base+'appuntamentiGiovediAudio',
        linkappuntamentivenerdi: base+'appuntamentiVenerdiAudio',
        linkappuntamentilunediprossimo: base+'appuntamentiLunediProssimoAudio',
        linkappuntamentimartediprossimo: base+'appuntamentiMartediProssimoAudio',
        linkappuntamentimercolediprossimo: base+'appuntamentiMercolediProssimoAudio',
        linkappuntamentigiovediprossimo: base+'appuntamentiGiovediProssimoAudio',
        linkappuntamentivenerdiprossimo: base+'appuntamentiVenerdiProssimoAudio',
        linkvisualizzasituazioneanno: base+'visualizzaSituazioneAnno',
        linkinviasms: 'http://vuexdocker.test/api/inviaSms',
        linklistarichiestaapparecchi: base+'listaProdottiRichiesti',
        linkassegnaprodottimagazzino: base+'assegnaProdottiMagazzino',
        linkimmatricolati: base+'prodottiImmatricolati',
        linkswitchimmatricolato: base+'productSwitchImmatricolato',
        linkswitcharrivato: base+'productSwitchArrivato',
        linkuseragenda: base+'userAgenda',
        linkstatisticherecapitiingressi: base+'ingressiRecapiti',
        linkstatisticherecapitiingressimese: base+'ingressiRecapitiMesi',
        linkstatistichefatturatocanali: base+'fatturatoCanali',
        linkstatistichedettagliaudio: base+'dettaglioAudio',
        linkimportclients: base+'importClients',
        linkimportclientsxml: base+'importClientsFromNoah',
        linklogging: base+'logging',
        linkprovince: base+'province',
        linkcittabyprovincia: base+'cittaByProvincia',
        linkricercanominativi: base+'ricercaNominativi',
        linkcaricadocumento: base+'salvaDocumento',
        linklistadocumenti: base+'caricaDocumenti',
        linkeliminadocumento: base+'eliminaDocumento',
        linksalvafilexmlfromfiliale: base+'salvaFileXmlFromFiliale',
        linkdatesettimana: base+'dateSettimana',
        linkdatesettimanaprossima: base+'dateSettimanaProssima',
        linkclientidasaldare: base+'clientiDaSaldare',
        linkclientisaldati: base+'clientiSaldati',
        linkaddrata: base+'addRata',
        linkfattura: base+'caricaFattura',
        linkventaglio: base+'ventaglioAnno',
        linklistamedici: base+'listaDottori',
        linkaddmedico: base+'addDottore',
        linkcaricaorari: base+'caricaOrari',
        linkaddorario: base+'addOrario',
        linkcaricaorariodottore: base+'caricaOrarioDottore',
        linkinviimedici: base+'inviiMedici',
        linktotaleinviimedici: base+'totaleInviiMedici',
        linkstatisticheinviimedici: base+'statisticheInviiMedici',
        linkstatistichetotaleinviimedici: base+'statisticheTotaleInviiMedici',
        linkfilialebyid: base+'filialeById',
        linkrecalloggi: base+'recallOggi',
        linktelefonatefatteoggi: base+'telefonateFatteOggi',
        linknumerotelefonatefatteoggi: base+'numeroTelefonateFatteOggi',
        linknumeroappuntamentipresioggi: base+'numeroAppuntamentiPresiOggi',
        linkrecallsbyidclient: base+'recallsByIdClient',
        linkclientimairichiamati: base+'clientiMaiRichiamati',
        linkclientinonhannomaipresoappuntamenti: base+'clientiNonHannoMaiPresoAppuntamenti',
        linkclientiunannoultimoappuntamento: base+'clientiUnAnnoUltimoAppuntamento',
        linkaddtelefonata: base+'addTelefonata',
        linkaggiornatelefonata: base+'aggiornaTelefonata',
    };
};
export default help;
