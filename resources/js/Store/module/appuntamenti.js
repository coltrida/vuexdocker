import help from "../../help";

const state = () => ({
    appuntamenti: [],
    appuntamentiDomani: [],
});

const getters = {
    getAppuntamenti(state){
        return state.appuntamenti;
    },

    getAppuntamentiDomani(state){
        return state.appuntamentiDomani;
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
};

const mutations = {
    fetchAppuntamenti(state, payload){
        state.appuntamenti = payload;
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
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
