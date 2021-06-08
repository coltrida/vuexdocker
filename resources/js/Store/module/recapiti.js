import help from "../../help";

const state = () => ({
    recapiti: []
});

const getters = {
    getRecapiti(state){
        return state.recapiti;
    },

};

const actions = {
    async fetchRecapiti({commit}){
        const response = await axios.get(`${help().linkrecapiti}`);
        commit('fetchRecapiti', response.data);
    },

    async fetchRecapitiPerAudio({commit}){
        const response = await axios.get(`${help().linkrecapitiperaudio}`);
        commit('fetchRecapiti', response.data);
    },

    async fetchRecapitiByAudio({commit}, idAudio){
        const response = await axios.get(`${help().linkrecapiti}`+'/'+idAudio);
        commit('fetchRecapiti', response.data);
    },

    async addRecapito({commit}, payload){
        const response = await axios.post(`${help().linkaddrecapito}`, {
            'nome': payload.nome,
            'indirizzo': payload.indirizzo,
            'citta': payload.citta,
            'telefono': payload.telefono,
            'user_id': payload.user_id,
            'provincia': payload.provincia,
        });
        commit('addRecapito', response.data);
    },

    async eliminaRecapito({commit}, payload){
        await axios.delete(`${help().linkrecapiti}`+'/'+payload.id);
        commit('eliminaRecapito', payload);
    },
};

const mutations = {
    fetchRecapiti(state, payload){
        state.recapiti = payload;
    },

    addRecapito(state, payload){
        state.recapiti.find(u => u.id === payload.user_id).recapito.unshift(payload);
    },

    eliminaRecapito(state, payload){
        state.recapiti.find(u => u.id === payload.idUser).recapito.splice(payload.indice, 1);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
