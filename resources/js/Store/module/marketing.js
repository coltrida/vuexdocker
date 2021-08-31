import help from "../../help";

const state = () => ({
    canali: [],
    canaliFatturato: [],
    userCanaliFatturato: [],
});

const getters = {
    getCanali(state){
        return state.canali;
    },

    getCanaliFatturato(state){
        return state.canaliFatturato;
    },

    getUserCanaliFatturato(state){
        return state.userCanaliFatturato;
    },
};

const actions = {

    async fetchCanali({commit}){
        const response = await axios.get(`${help().linkcanali}`);
        commit('fetchCanali', response.data);
    },

    async fetchCanaliFatturato({commit}){
        const response = await axios.get(`${help().linkstatistichefatturatocanali}`);
        commit('fetchCanaliFatturato', response.data);
    },

    async fetchUserCanaliFatturato({commit}){
        const response = await axios.get(`${help().linkstatisticheuserfatturatocanali}`);
        commit('fetchUserCanaliFatturato', response.data);
    },

    async addCanale({commit}, newCanale){
        const response = await axios.post(`${help().linkaddcanale}`, {
            'newCanale': newCanale
        });
        commit('addCanale', response.data);
    },

    async eliminaCanale({commit}, id){
        await axios.delete(`${help().linkcanali}`+'/'+id);
        commit('eliminaCanale', id);
    },
};

const mutations = {
    fetchCanali(state, payload){
        state.canali = payload;
    },

    fetchCanaliFatturato(state, payload){
        state.canaliFatturato = payload;
    },

    fetchUserCanaliFatturato(state, payload){
        state.userCanaliFatturato = payload;
    },

    addCanale(state, payload){
        state.canali.unshift(payload);
    },

    eliminaCanale(state, id){
        state.canali = state.canali.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
