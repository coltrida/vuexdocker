import help from "../../help";

const state = () => ({
    clients: []
});

const getters = {
    getClients(state){
        return state.clients;
    },

};

const actions = {
    async fetchClients({commit}){
        const response = await axios.get(`${help().linkclients}`);
        commit('fetchClients', response.data.data);
    },

    async addClient({commit}, payload){
        const response = await axios.post(`${help().linkaddclient}`, payload);
        commit('addClient', response.data);
    },

    async eliminaClient({commit}, id){
        await axios.delete(`${help().linkclients}`+'/'+id);
        commit('eliminaClient', payload);
    },
};

const mutations = {
    fetchClients(state, payload){
        state.clients = payload;
    },

    addClient(state, payload){
        state.clients.unshift(payload);
    },

    eliminaClient(state, id){
        state.clients = state.clients.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
