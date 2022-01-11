import VueRouter from 'vue-router';
import routes from "./routes";

const router = new VueRouter({
    mode: 'abstract',
    routes
});

export default router;
