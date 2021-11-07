import help from "../../help";

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
    appuntamentiAnnoMese: []
});

const getters = {
    getAppuntamenti(state){
        return state.appuntamenti;
    },

    getAppuntamentiAnnoMese(state){
        return state.appuntamentiAnnoMese;
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
        const response = await axios.get(`${help().linkappuntamentiannomese}`+'/'+payload.anno+'/'+payload.mesenumero, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiAnnoMese', response.data);
    },

    async fetchAppuntamentiOggi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentioggi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppuntamentiOggi', response.data.data);
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

    async fetchAppLun({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentilunedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppLun', response.data.data);
    },

    async fetchAppMar({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimartedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppMar', response.data.data);
    },

    async fetchAppMer({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimercoledi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppMer', response.data.data);
    },

    async fetchAppGio({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentigiovedi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppGio', response.data.data);
    },

    async fetchAppVen({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentivenerdi}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAppVen', response.data.data);
    },

    async fetchDateSettimana({commit}){
        const response = await axios.get(`${help().linkdatesettimana}`, {
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
};

const mutations = {
    fetchAppuntamenti(state, payload){
        state.appuntamenti = payload;
    },

    fetchAppuntamentiAnnoMese(state, payload){
        state.appuntamentiAnnoMese = payload;
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
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
