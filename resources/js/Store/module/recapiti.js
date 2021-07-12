import help from "../../help";

const state = () => ({
    recapiti: [],
    recapitiIngressi: [],
    recapitiIngressiMesi: [],
});

const getters = {
    getRecapiti(state){
        return state.recapiti;
    },

    getRecapitiIngressi(state){
        return state.recapitiIngressi;
    },

    getRecapitiIngressiMesi(state){
        return state.recapitiIngressiMesi;
    },

};

const actions = {
    async fetchRecapiti({commit}){
        const response = await axios.get(`${help().linkrecapiti}`);
        commit('fetchRecapiti', response.data);
    },

    async fetchRecapitiIngresi({commit}){
        const response = await axios.get(`${help().linkstatisticherecapitiingressi}`);
        commit('fetchRecapitiIngresi', response.data);
    },

    async fetchRecapitiIngresiMesi({commit}){
        const response = await axios.get(`${help().linkstatisticherecapitiingressimese}`);
        commit('fetchRecapitiIngresiMesi', response.data);
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

    fetchRecapitiIngresi(state, payload){
        state.recapitiIngressi = payload;
    },

    fetchRecapitiIngresiMesi(state, payload){
        state.recapitiIngressiMesi = payload;
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
