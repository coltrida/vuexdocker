import help from "../../help";

const state = () => ({
    clients: [],
    compleanni: [],
    client: {}
});

const getters = {
    getClients(state){
        return state.clients;
    },

    getCompleanni(state){
        return state.compleanni;
    },

    getClient(state){
        return state.client;
    },

};

const actions = {
    async fetchClients({commit}){
        const response = await axios.get(`${help().linkclients}`);
        commit('fetchClients', response.data.data);
    },

    async fetchCompleanni({commit}, idAudio){
        const response = await axios.get(`${help().linkcompleanni}`+'/'+idAudio);
        commit('fetchCompleanni', response.data.data);
    },

    async fetchClientsFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkclientsfiliale}`+'/'+idFiliale);
        commit('fetchClients', response.data.data);
    },

    async fetchClient({commit}, id){
        const response = await axios.get(`${help().linkclients}`+'/'+id);
        commit('fetchClient', response.data.data);
    },

    async addClient({commit}, payload){
        const response = await axios.post(`${help().linkaddclient}`, payload);
        commit('addClient', response.data);
    },

    async modificaClient({commit}, payload){
        const response = await axios.post(`${help().linkmodificaclient}`, payload);
        commit('modificaClient', response.data);
    },

    async smsInvio({commit}, payload){
        await axios.post(`${help().linkinviasms}`, {
            'testo': payload
        });
    },

    async eliminaClient({commit}, id){
        await axios.delete(`${help().linkclients}`+'/'+id);
        commit('eliminaClient', id);
    },
};

const mutations = {
    fetchClients(state, payload){
        state.clients = payload;
    },

    fetchCompleanni(state, payload){
        state.compleanni = payload;
    },

    fetchClient(state, payload){
        state.client = payload;
    },

    addClient(state, payload){
        state.clients.unshift(payload);
    },

    modificaClient(state, payload){
        state.clients = state.clients.filter(u => u.id !== payload.id);
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
