require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";
import Vuetify from 'vuetify'

import router from './Router/index';
import store from './Store/index';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuetify)

const app = new Vue({
    el:'#app',
    router,
    store,
    vuetify: new Vuetify(),
    components: { App }
});
