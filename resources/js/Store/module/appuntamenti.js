import help from "../../help";

const state = () => ({
    appuntamenti: [],
    appuntamentiDomani: [],

    appLun: [],
    appMar: [],
    appMer: [],
    appGio: [],
    appVen: [],
});

const getters = {
    getAppuntamenti(state){
        return state.appuntamenti;
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
};

const actions = {

    async fetchAppuntamenti({commit}, idClient){
        const response = await axios.get(`${help().linkappuntamenti}`+'/'+idClient);
        commit('fetchAppuntamenti', response.data);
    },

    async fetchAppuntamentiOggi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentioggi}`+'/'+idAudio);
        commit('fetchAppuntamenti', response.data.data);
    },

    async fetchAppuntamentiLunedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentilunedi}`+'/'+idAudio);
        commit('fetchAppuntamentiLunedi', response.data.data);
    },

    async fetchAppuntamentiMartedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimartedi}`+'/'+idAudio);
        commit('fetchAppuntamentiMartedi', response.data.data);
    },

    async fetchAppuntamentiMercoledi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimercoledi}`+'/'+idAudio);
        commit('fetchAppuntamentiMercoledi', response.data.data);
    },

    async fetchAppuntamentiGiovedi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentigiovedi}`+'/'+idAudio);
        commit('fetchAppuntamentiGiovedi', response.data.data);
    },

    async fetchAppuntamentiVenerdi({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentivenerdi}`+'/'+idAudio);
        commit('fetchAppuntamentiVenerdi', response.data.data);
    },

    async fetchAppuntamentiDomani({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentidomani}`+'/'+idAudio);
        commit('fetchAppuntamentiDomani', response.data.data);
    },

    async addAppuntamento({commit}, payload){
        const response = await axios.post(`${help().linkaddappuntamento}`, payload);
        commit('addAppuntamento', response.data);
    },

    async eliminaAppuntamento({commit}, payload){
        await axios.delete(`${help().linkappuntamenti}`+'/'+payload.idAppuntamento+'/'+payload.idUser);
        commit('eliminaAppuntamento', payload.idAppuntamento);
    },

    async fetchAppLun({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentilun}`+'/'+idAudio);
        commit('fetchAppLun', response.data.data);
    },

    async fetchAppMar({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimar}`+'/'+idAudio);
        commit('fetchAppMar', response.data.data);
    },

    async fetchAppMer({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentimer}`+'/'+idAudio);
        commit('fetchAppMer', response.data.data);
    },

    async fetchAppGio({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentigio}`+'/'+idAudio);
        commit('fetchAppGio', response.data.data);
    },

    async fetchAppVen({commit}, idAudio){
        const response = await axios.get(`${help().linkappuntamentiven}`+'/'+idAudio);
        commit('fetchAppVen', response.data.data);
    },
};

const mutations = {
    fetchAppuntamenti(state, payload){
        state.appuntamenti = payload;
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

    fetchAppuntamentiDomani(state, payload){
        state.appuntamentiDomani = payload;
    },

    addAppuntamento(state, payload){
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
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
