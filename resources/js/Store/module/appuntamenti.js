import help from "../../help";
import {parseHex} from "vuetify/lib/util/colorUtils";

const state = () => ({
    appuntamenti: [],
    appuntamentiOggi: [],
    appuntamentiDomani: [],
    dateSettimana: [],
    appLun: [],
    appMar: [],
    appMer: [],
    appGio: [],
    appVen: [],
    settimanaVisualizzata: '',
    appuntamentiAnnoMese: [],
    intervenutiAnnoMese: [],
    appuntamentiInSospeso: [],
    settimanaDelMese: [],
    dataDiOggi: ''
});

const getters = {
    getAppuntamenti(state){
        return state.appuntamenti;
    },

    getSettimanaDelMese(state){
        return state.settimanaDelMese;
    },

    getDataDiOggi(state){
        return state.dataDiOggi;
    },

    getAppuntamentiInSospeso(state){
        return state.appuntamentiInSospeso;
    },

    getAppuntamentiAnnoMese(state){
        return state.appuntamentiAnnoMese;
    },

    getIntervenutiAnnoMese(state){
        return state.intervenutiAnnoMese;
    },

    getAppuntamentiOggi(state){
        return state.appuntamentiOggi;
    },

    getAppuntamentiDomani(state){
        return state.appuntamentiDomani;
    },

    getAppLun(state){
        return state.appLun;
    },

    getAppMar(state){
        return state.appMar;
    },

    getAppMer(state){
        return state.appMer;
    },

    getAppGio(state){
        return state.appGio;
    },

    getAppVen(state){
        return state.appVen;
    },

    getDateSettimana(state){
        return state.dateSettimana;
    },

    getSettimanaVisualizzata(state){
        return state.settimanaVisualizzata;
    },
};

const actions = {

    async fetchAppuntamenti({commit}, idClient){
        const response = await axios.get(`${help().linkappuntamenti}`+'/'+idClient, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
         commit('fetchAppuntamenti', response.data.data);
    },

    async fetchAppuntamentiAnnoMese({commit}, payload){
        const response = await axios.post(`${help().linkappuntamentiannomese}`, payload,  {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiAnnoMese', response.data);
    },

    async fetchIntervenutiAnnoMese({commit}, payload){
        const response = await axios.post(`${help().linkintervenutiannomese}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchIntervenutiAnnoMese', response.data);
    },

    async fetchAppuntamentiOggi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentioggi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiOggi', response.data.data);
    },

    async fetchAppuntamentiInSospeso({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentiinsospeso}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiInSospeso', response.data.data);
    },

    async prossimoLunedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentilunediprossimo}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiLunedi', response.data.data);
    },

    async prossimoMartedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimartediprossimo}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiMartedi', response.data.data);
    },

    async prossimoMarcoledi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimercolediprossimo}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiMercoledi', response.data.data);
    },

    async prossimoGiovedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentigiovediprossimo}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiGiovedi', response.data.data);
    },

    async prossimoVenerdi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentivenerdiprossimo}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiVenerdi', response.data.data);
    },

    async fetchAppuntamentiLunedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentilunedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiLunedi', response.data.data);
    },

    async fetchAppuntamentiMartedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimartedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiMartedi', response.data.data);
    },

    async fetchAppuntamentiMercoledi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimercoledi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiMercoledi', response.data.data);
    },

    async fetchAppuntamentiGiovedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentigiovedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiGiovedi', response.data.data);
    },

    async fetchAppuntamentiVenerdi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentivenerdi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiVenerdi', response.data.data);
    },

    async fetchAppuntamentiDomani({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentidomani}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiDomani', response.data.data);
    },

    async addAppuntamento({commit}, payload){
        const response = await axios.post(`${help().linkaddappuntamento}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addAppuntamento', response.data.data);
    },

    async modificaAppuntamento({commit}, payload){
        const response = await axios.post(`${help().linkmodificaappuntamento}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaAppuntamento', response.data.data);
    },

    async eliminaAppuntamento({commit}, payload){
        await axios.delete(`${help().linkappuntamenti}`+'/'+payload.idAppuntamento+'/'+payload.idUser, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaAppuntamento', payload.idAppuntamento);
    },

    async fetchAppLun({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkappuntamentilunedi}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppLun', response.data.data);
    },

    async fetchAppMar({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkappuntamentimartedi}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppMar', response.data.data);
    },

    async fetchAppMer({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkappuntamentimercoledi}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppMer', response.data.data);
    },

    async fetchAppGio({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkappuntamentigiovedi}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppGio', response.data.data);
    },

    async fetchAppVen({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkappuntamentivenerdi}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppVen', response.data.data);
    },

    async fetchDateSettimana({commit}, direzione){
        direzione = direzione === undefined ? null : direzione;
        const response = await axios.get(`${help().linkdatesettimana}`+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDateSettimana', response.data);
    },

    async fetchDateSettimanaProssima({commit}){
        const response = await axios.get(`${help().linkdatesettimanaprossima}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDateSettimana', response.data);
    },

    async appuntamentoSaltato({commit}, idAppuntamento){
        await axios.get(`${help().linkappuntamentosaltato}`+'/'+idAppuntamento, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaAppuntamentoInSospeso', idAppuntamento);
    },

    async oggiNonViene({commit}, idAppuntamento){
        await axios.get(`${help().linkappuntamentosaltato}`+'/'+idAppuntamento, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('oggiNonViene', idAppuntamento);
    },

    async appuntamentoIntervenuto({commit}, idAppuntamento){
        await axios.get(`${help().linkappuntamentointervenuto}`+'/'+idAppuntamento, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaAppuntamentoInSospeso', idAppuntamento);
    },

    async fetchAppuntamentoGiornoOra({commit}, payload){
        await axios.post(`${help().linkappuntamentogiornoora}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentoGiornoOra', response.data);
    },

    async fetchDataDiOggi({commit}){
        const response = await axios.get(`${help().linkdatadioggi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDataDiOggi', response.data);
    },

    async fetchSettimanaDelMese({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linksettimanadelmese}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSettimanaDelMese', response.data);
    },
};

const mutations = {
    fetchAppuntamenti(state, payload){
        state.appuntamenti = payload;
    },

    eliminaAppuntamentoInSospeso(state, id){
        state.appuntamentiInSospeso = state.appuntamentiInSospeso.filter(u => u.id !== id);
    },

    oggiNonViene(state, id){
        state.appuntamentiOggi = state.appuntamentiOggi.filter(u => u.id !== id);
    },

    fetchAppuntamentiInSospeso(state, payload){
        state.appuntamentiInSospeso = payload;
    },

    fetchAppuntamentiAnnoMese(state, payload){
        state.appuntamentiAnnoMese = payload;
    },

    fetchIntervenutiAnnoMese(state, payload){
        state.intervenutiAnnoMese = payload;
    },

    fetchAppuntamentiLunedi(state, payload){
        state.appLun = payload;
    },

    fetchAppuntamentiMartedi(state, payload){
        state.appMar = payload;
    },

    fetchAppuntamentiMercoledi(state, payload){
        state.appMer = payload;
    },

    fetchAppuntamentiGiovedi(state, payload){
        state.appGio = payload;
    },

    fetchAppuntamentiVenerdi(state, payload){
        state.appVen = payload;
    },

    fetchAppuntamentiOggi(state, payload){
        state.appuntamentiOggi = payload;
    },

    fetchAppuntamentiDomani(state, payload){
        state.appuntamentiDomani = payload;
    },

    addAppuntamento(state, payload){
        state.appuntamenti.unshift(payload);
    },

    modificaAppuntamento(state, payload){
        state.appuntamenti.unshift(payload);
    },

    eliminaAppuntamento(state, id){
        state.appuntamenti = state.appuntamenti.filter(u => u.id !== id);
    },

    fetchAppLun(state, payload){
        state.appLun = payload;
    },

    fetchAppMar(state, payload){
        state.appMar = payload;
    },

    fetchAppMer(state, payload){
        state.appMer = payload;
    },

    fetchAppGio(state, payload){
        state.appGio = payload;
    },

    fetchAppVen(state, payload){
        state.appVen = payload;
    },

    fetchDateSettimana(state, payload){
        state.dateSettimana = payload;
    },

    resetAppuntamenti(state){
        state.appLun = [];
        state.appMar = [];
        state.appMer = [];
        state.appGio = [];
        state.appVen = [];
    },

    setSettimanaDaVisualizzare(state, payload){
        state.settimanaVisualizzata = payload;
    },

    fetchAppuntamentoGiornoOra(state, payload){
        state.appuntamenti = payload;
    },

    fetchDataDiOggi(state, payload){
        state.dataDiOggi = payload;
    },

    fetchSettimanaDelMese(state, payload){
        state.settimanaDelMese = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
