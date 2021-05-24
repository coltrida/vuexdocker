import Vue from 'vue'
import Vuex from 'vuex'

import UsersModule from './module/users';
import LoginModule from './module/login';
import FilialiModule from './module/filiali';
import MarketingModule from './module/marketing';
import FornitoriModule from './module/fornitori';
import ListinoModule from './module/listino';
import CategorieModule from './module/categorie';
import RuoliModule from './module/ruolo';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        users:UsersModule,
        login:LoginModule,
        filiali:FilialiModule,
        marketing:MarketingModule,
        fornitori:FornitoriModule,
        listino:ListinoModule,
        categorie:CategorieModule,
        ruoli:RuoliModule,
    }
});

export default store;
