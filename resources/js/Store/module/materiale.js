import help from "../../help";

const state = () => ({
    materiale: [],
});

const getters = {
    getMateriale(state){
        return state.materiale;
    },
};

const actions = {
    async fetchMateriale({commit}){
        const response = await axios.get(`${help().linkmateriale}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchMateriale', response.data);
    },

    async addMateriale({commit}, payload){
        const response = await axios.post(`${help().linkaddmateriale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addMateriale', response.data);
    },

    async eliminaMateriale({commit}, id){
        await axios.delete(`${help().linkeliminamateriale}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaMateriale', id);
    },

    async modificaMateriale({commit}, payload){
        const response = await axios.post(`${help().linkmodificamateriale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaMateriale', response.data);
    },
};

const mutations = {
    fetchMateriale(state, payload){
        state.materiale = payload;
    },

    addMateriale(state, payload){
        state.materiale.unshift(payload);
    },

    modificaMateriale(state, payload){
        state.materiale.unshift(payload);
    },

    eliminaMateriale(state, id){
        state.materiale = state.materiale.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
