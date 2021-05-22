const routes = [
    { path: '/', component: () => import('../Pages/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/Login'), name: 'login' },
];

export default routes;
