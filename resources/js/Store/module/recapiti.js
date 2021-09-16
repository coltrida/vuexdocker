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
        const response = await axios.get(`${help().linkrecapiti}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecapiti', response.data);
    },

    async fetchRecapitiIngresi({commit}){
        const response = await axios.get(`${help().linkstatisticherecapitiingressi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecapitiIngresi', response.data);
    },

    async fetchRecapitiIngresiMesi({commit}){
        const response = await axios.get(`${help().linkstatisticherecapitiingressimese}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecapitiIngresiMesi', response.data);
    },

    async fetchRecapitiPerAudio({commit}){
        const response = await axios.get(`${help().linkrecapitiperaudio}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecapiti', response.data);
    },

    async fetchRecapitiByAudio({commit}, idAudio){
        const response = await axios.get(`${help().linkrecapiti}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
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
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addRecapito', response.data);
    },

    async eliminaRecapito({commit}, payload){
        await axios.delete(`${help().linkrecapiti}`+'/'+payload.id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
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
