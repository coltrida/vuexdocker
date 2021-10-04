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
import TipologieModule from './module/tipologie';
import AudiometrieModule from './module/audiometrie';
import ProveModule from './module/prove';
import AppuntamentiModule from './module/appuntamenti';
import LoggingModule from './module/logging';
import DocumentiModule from './module/documenti';
import RateModule from './module/rate';
import MediciModule from './module/medici';
import TelefonateModule from './module/telefonate';
import Strumentazione from './module/strumentazione';
import Informazioni from './module/informazioni';

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
        tipologie:TipologieModule,
        audiometrie:AudiometrieModule,
        prove:ProveModule,
        appuntamenti:AppuntamentiModule,
        logging:LoggingModule,
        documenti:DocumentiModule,
        rate:RateModule,
        medici:MediciModule,
        telefonate:TelefonateModule,
        strumentazione:Strumentazione,
        informazioni:Informazioni,
    }
});

export default store;
