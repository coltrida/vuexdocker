const routes = [
    { path: '/', component: () => import('../Pages/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/Login'), name: 'login' },
    { path: '/marketing', component: () => import('../Pages/Marketing'), name: 'marketing' },
    { path: '/listino', component: () => import('../Pages/Listino'), name: 'listino' },
    { path: '/fornitori', component: () => import('../Pages/Fornitori'), name: 'fornitori' },
    { path: '/personale', component: () => import('../Pages/Personale'), name: 'personale' },
];

export default routes;
