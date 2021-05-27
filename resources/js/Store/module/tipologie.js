import help from "../../help";

const state = () => ({
    tipologie: [],
    tipo:{}
});

const getters = {
    getTipologie(state){
        return state.tipologie;
    },

    getTipo(state){
        return state.tipo;
    }
};

const actions = {
    async fetchTipologie({commit}){
        const response = await axios.get(`${help().linktipologie}`);
        commit('fetchTipologie', response.data);
    },

    async modificaTipologia({commit}, payload){
        const response = await axios.post(`${help().linkmodificatipologia}`, payload);
        commit('fetchTipologie', response.data);
    },

    async addTipologia({commit}, payload){
        const response = await axios.post(`${help().linkaddtipologia}`, payload);
        commit('addTipologia', response.data);
    },

    async eliminaTipologia({commit}, id){
        await axios.delete(`${help().linktipologie}`+'/'+id);
        commit('eliminaTipologia', id);
    },
};

const mutations = {
    fetchTipologie(state, payload){
        state.tipologie = payload;
    },

    addTipologia(state, payload){
        state.tipologie.unshift(payload);
    },

    eliminaTipologia(state, id){
        state.tipologie = state.tipologie.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
