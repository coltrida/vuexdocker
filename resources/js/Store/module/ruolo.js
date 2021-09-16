import help from "../../help";

const state = () => ({
    ruoli: []
});

const getters = {
    getRuoli(state){
        return state.ruoli;
    },
};

const actions = {

    async fetchRuoli({commit}){
        const response = await axios.get(`${help().linkruoli}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRuoli', response.data);
    },

    async addRuolo({commit}, payload){
        const response = await axios.post(`${help().linkaddruolo}`, {
            'nome': payload.nome,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addRuolo', response.data);
    },

    async eliminaRuolo({commit}, id){
        await axios.delete(`${help().linkruoli}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaRuolo', id);
    },
};

const mutations = {
    fetchRuoli(state, payload){
        state.ruoli = payload;
    },

    addRuolo(state, payload){
        state.ruoli.unshift(payload);
    },

    eliminaRuolo(state, id){
        state.ruoli = state.ruoli.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
