import Vue from 'vue'
import Vuex from 'vuex'

import UsersModule from './module/users';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        users:UsersModule
    }
});

export default store;
