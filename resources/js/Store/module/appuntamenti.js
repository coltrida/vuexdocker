import help from "../../help";

const state = () => ({
    appuntamenti: [],
});

const getters = {
    getAppuntamenti(state){
        return state.appuntamenti;
    },
};

const actions = {

    async fetchAppuntamenti({commit}, idClient){
        const response = await axios.get(`${help().linkappuntamenti}`+'/'+idClient);
        commit('fetchAppuntamenti', response.data);
    },

    async addAppuntamento({commit}, payload){
        const response = await axios.post(`${help().linkaddappuntamento}`, payload);
        commit('addAppuntamento', response.data);
    },

    async eliminaAppuntamento({commit}, idAppuntamento){
        await axios.delete(`${help().linkappuntamenti}`+'/'+idAppuntamento);
        commit('eliminaAppuntamento', idAppuntamento);
    },
};

const mutations = {
    fetchAppuntamenti(state, payload){
        state.appuntamenti = payload;
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
