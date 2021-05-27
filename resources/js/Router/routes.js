const routes = [
    { path: '/', component: () => import('../Pages/home/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/login/Login'), name: 'login' },
    { path: '/marketing', component: () => import('../Pages/marketing/Marketing'), name: 'marketing' },
    { path: '/listino', component: () => import('../Pages/fornitori/Listino'), name: 'listino' },
    { path: '/fornitori', component: () => import('../Pages/fornitori/Fornitori'), name: 'fornitori' },
    { path: '/personale', component: () => import('../Pages/personale/Personale'), name: 'personale' },
    { path: '/filiali', component: () => import('../Pages/strutture/Filiali'), name: 'filiali' },
    { path: '/recapiti', component: () => import('../Pages/strutture/Recapiti'), name: 'recapiti' },
    { path: '/clients', component: () => import('../Pages/clients/Clients'), name: 'clients' },
    { path: '/clients/inserisci/:clientId?', component: () => import('../Pages/clients/Inserisci'), name: 'clientsInserisci' },
    { path: '/magazzino/:filialeId', component: () => import('../Pages/magazzino/MagazzinoFiliale'), name: 'magazzino' },
    { path: '/associaPersonale', component: () => import('../Pages/gestione/AssociaPersonale'), name: 'associaPersonale' },
    { path: '/tempiRecall', component: () => import('../Pages/gestione/TempiRecall'), name: 'tempiRecall' },
    { path: '/assegnaBudget', component: () => import('../Pages/gestione/AssegnaBudget'), name: 'assegnaBudget' },
];

export default routes;
