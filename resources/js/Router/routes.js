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
    { path: '/magazzino/:filialeId', component: () => import('../Pages/magazzino/MagazzinoFiliale'), name: 'magazzino' },
];

export default routes;
