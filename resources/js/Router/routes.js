const routes = [
    { path: '/', component: () => import('../Pages/home/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/login/Login'), name: 'login' },
    { path: '/register', component: () => import('../Pages/login/Register'), name: 'register' },
    { path: '/marketing', component: () => import('../Pages/marketing/Marketing'), name: 'marketing' },
    { path: '/listino', component: () => import('../Pages/fornitori/Listino'), name: 'listino' },
    { path: '/fornitori', component: () => import('../Pages/fornitori/Fornitori'), name: 'fornitori' },
    { path: '/personale', component: () => import('../Pages/personale/Personale'), name: 'personale' },
    { path: '/filiali', component: () => import('../Pages/strutture/Filiali'), name: 'filiali' },
    { path: '/agende', component: () => import('../Pages/personale/Agende'), name: 'agende' },
    { path: '/agenda', component: () => import('../Pages/personale/Agenda'), name: 'agenda' },
    { path: '/settimana', component: () => import('../Pages/personale/Settimana'), name: 'settimana' },
    { path: '/calendar', component: () => import('../Pages/personale/Calendar'), name: 'calendar' },
    { path: '/recapiti', component: () => import('../Pages/strutture/Recapiti'), name: 'recapiti' },
    { path: '/clients/:cogRicerca?', component: () => import('../Pages/clients/Clients'), name: 'clients' },
    { path: '/clientsFiliale/:filialeId/:nomRicerca?/:cogRicerca?', component: () => import('../Pages/clients/ClientsFiliale'), name: 'clientsFiliale' },
    { path: '/clients/inserisci/:clientId?', component: () => import('../Pages/clients/Inserisci'), name: 'clientsInserisci' },
    { path: '/magazzino/:filialeId', component: () => import('../Pages/magazzino/MagazzinoFiliale'), name: 'magazzino' },
    { path: '/associaPersonale', component: () => import('../Pages/gestione/AssociaPersonale'), name: 'associaPersonale' },
    { path: '/tempiRecall', component: () => import('../Pages/gestione/TempiRecall'), name: 'tempiRecall' },
    { path: '/inviaSms', component: () => import('../Pages/gestione/InvioSms'), name: 'inviaSms' },
    { path: '/assegnaBudget', component: () => import('../Pages/gestione/AssegnaBudget'), name: 'assegnaBudget' },
    { path: '/statisticheAudioprotesisti', component: () => import('../Pages/statistiche/Audioprotesisti'), name: 'statisticheAudioprotesisti' },
    { path: '/dettaglioAudioprotesisti', component: () => import('../Pages/statistiche/AudioprotesistiDettaglio'), name: 'statisticheAudioprotesistiDettaglio' },
    { path: '/ingressiRecapiti', component: () => import('../Pages/statistiche/IngRecapiti'), name: 'ingressiRecapiti' },
    { path: '/fatturatoCanali', component: () => import('../Pages/statistiche/FattCanali'), name: 'fatturatoCanali' },
    { path: '/importaClients', component: () => import('../Pages/clients/Importclients'), name: 'importClients' },
    { path: '/importByFiliale', component: () => import('../Pages/clients/ImportByFiliale'), name: 'importByFiliale' },
    { path: '/logging', component: () => import('../Pages/gestione/Logging'), name: 'logging' },
    { path: '/filtri', component: () => import('../Pages/clients/Filtri'), name: 'filtri' },
    { path: '/rateClienti', component: () => import('../Pages/clients/RateAudio'), name: 'rateClienti' },
    { path: '/saldati', component: () => import('../Pages/clients/SaldatiAdmin'), name: 'saldati' },
    { path: '/rateali', component: () => import('../Pages/clients/RatealiAdmin'), name: 'rateali' },
    { path: '/rateClienti/inserisci/:fatturaId?', component: () => import('../Pages/clients/InserisciRata'), name: 'rataInserisci' },
    { path: '/ventaglioProdotti', component: () => import('../Pages/statistiche/VentaglioProdotti'), name: 'ventaglioProdotti' },
    { path: '/listaMedici', component: () => import('../Pages/medici/ListaMedici'), name: 'listaMedici' },
    { path: '/orariMedici/:dottore?', component: () => import('../Pages/medici/OrariMedici'), name: 'orariMedici' },
    { path: '/inviiMedici', component: () => import('../Pages/medici/InviiMedici'), name: 'inviiMedici' },
    { path: '/statisticheMedici', component: () => import('../Pages/statistiche/Medici'), name: 'statisticheMedici' },
    { path: '/situazioneAudio', component: () => import('../Pages/clients/SituazioneAudio'), name: 'situazioneAudio' },
    { path: '/backup', component: () => import('../Pages/gestione/Backup'), name: 'backup' },
    { path: '/restore', component: () => import('../Pages/gestione/Restore'), name: 'restore' },
    { path: '/riepilogoClienti', component: () => import('../Pages/clients/Riepilogo'), name: 'riepilogoClienti' },
    { path: '/statisticheCallcenter', component: () => import('../Pages/statistiche/Callcenter'), name: 'statisticheCallcenter' },
    { path: '/strumentazione', component: () => import('../Pages/gestione/Strumentazione'), name: 'strumentazione' },
    { path: '/resetSpecial', component: () => import('../Pages/gestione/Reset'), name: 'resetSpecial' },
    { path: '/struttureAudio', component: () => import('../Pages/strutture/StruttureAudio'), name: 'struttureAudio' },
];

export default routes;
