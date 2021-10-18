import help from "../../help";

const state = () => ({
    recapiti: [],
    recapitiIngressi: [],
    recapitiIngressiMesi: [],
    struttureAudio: []
});

const getters = {
    getRecapiti(state){
        return state.recapiti;
    },

    getStruttureAudio(state){
        return state.struttureAudio;
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

    async fetchStruttureAudio({commit}, idAudio){
        const response = await axios.get(`${help().linkstruttureaudio}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchStruttureAudio', response.data);
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
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };

        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('nome', payload.nome);
        formData.append('indirizzo', payload.indirizzo);
        formData.append('citta', payload.citta);
        formData.append('telefono', payload.telefono);
        formData.append('user_id', payload.user_id);
        formData.append('provincia', payload.provincia);
        formData.append('informazioni', payload.informazioni);

        const response = await axios.post(`${help().linkaddrecapito}`, formData, config);
        commit('addRecapito', response.data);
    },

    async modificaRecapito({commit}, payload){
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };

        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('nome', payload.nome);
        formData.append('id', payload.id);
        formData.append('indirizzo', payload.indirizzo);
        formData.append('citta', payload.citta);
        formData.append('telefono', payload.telefono);
        formData.append('user_id', payload.user_id);
        formData.append('provincia', payload.provincia);
        formData.append('informazioni', payload.informazioni);

        const response = await axios.post(`${help().linkmodificarecapito}`, formData, config);
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

    fetchStruttureAudio(state, payload){
        state.struttureAudio = payload;
    },

    fetchRecapitiIngresi(state, payload){
        state.recapitiIngressi = payload;
    },

    fetchRecapitiIngresiMesi(state, payload){
        state.recapitiIngressiMesi = payload;
    },

    addRecapito(state, payload){
        state.recapiti.find(u => u.id === parseInt(payload.user_id)).recapito.unshift(payload);
    },

    eliminaRecapito(state, payload){
        state.recapiti.find(u => u.id === parseInt(payload.idUser)).recapito.splice(payload.indice, 1);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
