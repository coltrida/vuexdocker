import Vue from 'vue'
import Vuex from 'vuex'

import UsersModule from './module/users';
import LoginModule from './module/login';
import FilialiModule from './module/filiali';
import RecapitiModule from './module/recapiti';
import MarketingModule from './module/marketing';
import FornitoriModule from './module/fornitori';
import ListinoModule from './module/listino';
import CategorieModule from './module/categorie';
import RuoliModule from './module/ruolo';
import ProductModule from './module/product';
import ClientsModule from './module/clients';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        users:UsersModule,
        login:LoginModule,
        filiali:FilialiModule,
        recapiti:RecapitiModule,
        marketing:MarketingModule,
        fornitori:FornitoriModule,
        listino:ListinoModule,
        categorie:CategorieModule,
        ruoli:RuoliModule,
        product:ProductModule,
        clients:ClientsModule,
    }
});

export default store;
