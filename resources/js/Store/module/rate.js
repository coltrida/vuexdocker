import help from "../../help";

const state = () => ({
    allClientsDaSaldare: [],
    clientsDaSaldare: [],
    clientsSaldati: [],
    fattura: {},
    rate: []
});

const getters = {
    getAllClientsDaSaldare(state){
        return state.allClientsDaSaldare;
    },

    getClientsDaSaldare(state){
        return state.clientsDaSaldare;
    },

    getClientsSaldati(state){
        return state.clientsSaldati;
    },

    getFattura(state){
        return state.fattura;
    },
};

const actions = {
    async fetchAllClientsDaSaldare({commit}){
        const response = await axios.get(`${help().linkclientidasaldare}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAllClientsDaSaldare', response.data.data);
    },

    async fetchClientsDaSaldare({commit}, idAudio){
        const response = await axios.get(`${help().linkclientidasaldare}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClientsDaSaldare', response.data.data);
    },

    async fetchClientsSaldati({commit}, payload){
        const response = await axios.post(`${help().linkclientisaldati}`,payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClientsSaldati', response.data.data);
    },

    async addRata({commit}, payload){
        await axios.post(`${help().linkaddrata}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },

    async fetchFattura({commit}, idFattura){
        const response = await axios.get(`${help().linkfattura}`+'/'+idFattura, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFattura', response.data.data);
    },

};

const mutations = {
    fetchAllClientsDaSaldare(state, payload){
        state.allClientsDaSaldare = payload;
    },

    fetchClientsSaldati(state, payload){
        state.clientsSaldati = payload;
    },

    fetchClientsDaSaldare(state, payload){
        state.clientsDaSaldare = payload;
    },

    fetchFattura(state, payload){
        state.fattura = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
