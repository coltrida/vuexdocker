const routes = [
    { path: '/', component: () => import('../Pages/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/Login'), name: 'login' },
    { path: '/marketing', component: () => import('../Pages/Marketing'), name: 'marketing' },
];

export default routes;
