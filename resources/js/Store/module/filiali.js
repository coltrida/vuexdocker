import help from "../../help";

const state = () => ({
    filiali: [],
    filialiPerInserimento: [],
    associazioni: [],
    situazioneMese: [],
    richiestaApparecchi: [],
    filiale:{}
});

const getters = {
    getFiliali(state){
        return state.filiali;
    },

    getFilialiPerInserimento(state){
        return state.filialiPerInserimento;
    },

    getAssociazioni(state){
        return state.associazioni;
    },

    getSituazioneMese(state){
        return state.situazioneMese;
    },

    getRichiestaApparecchi(state){
        return state.richiestaApparecchi;
    },

    getFilialeById(state){
        return state.filiale;
    }

};

const actions = {
    async fetchFiliali({commit}){
        const response = await axios.get(`${help().linkfiliali}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFiliali', response.data);
    },

    async fetchFilialeById({commit}, idFiliale){
        const response = await axios.get(`${help().linkfilialebyid}`+'/'+idFiliale, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFilialeById', response.data);
    },

    async fetchFilialiPerInserimento({commit}){
        const response = await axios.get(`${help().linkfiliali}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFilialiPerInserimento', response.data);
    },

    async fetchFilialiByUser({commit}, idUser){
        const response = await axios.get(`${help().linkfilialiuser}`+'/'+idUser, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFiliali', response.data);
    },

    async fetchAssociazioni({commit}){
        const response = await axios.get(`${help().linkassociazioniPersonale}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAssociazioni', response.data);
    },

    async fetchSituazioneMese({commit}){
        const response = await axios.get(`${help().linksituazionemese}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSituazioneMese', response.data);
    },

    async fetchAssocia({commit}, payload){
        const response = await axios.post(`${help().linkaggiungiAssociazione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAssocia', response.data);
    },

    async fetchDissocia({commit}, id){
        const response = await axios.get(`${help().linkeliminaAssociazione}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDissocia', response.data);
    },

    async addFiliale({commit}, payload){
        const response = await axios.post(`${help().linkaddfiliale}`, {
            'nome': payload.nome,
            'indirizzo': payload.indirizzo,
            'citta': payload.citta,
            'telefono': payload.telefono,
            'cap': payload.cap,
            'provincia': payload.provincia,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addFiliale', response.data);
    },

    async eliminaFiliale({commit}, id){
        await axios.delete(`${help().linkfiliali}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaFiliale', id);
    },

    async modificaFiliale({commit}, payload){
        const response = await axios.post(`${help().linkmodificafiliale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaFiliale', response.data);
    },

    async fetchRichiestaApparecchi({commit}){
        const response = await axios.get(`${help().linklistarichiestaapparecchi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRichiestaApparecchi', response.data);
    },
};

const mutations = {
    fetchAssociazioni(state, payload){
        state.associazioni = payload;
    },

    fetchSituazioneMese(state, payload){
        state.situazioneMese = payload;
    },

    fetchAssocia(state, payload){
        state.associazioni = payload;
    },

    fetchDissocia(state, payload){
        state.associazioni = payload;
    },

    fetchFiliali(state, payload){
        state.filiali = payload;
    },

    fetchFilialeById(state, payload){
        state.filiale = payload;
    },

    fetchFilialiPerInserimento(state, payload){
        state.filialiPerInserimento = payload;
    },

    addFiliale(state, payload){
        state.filiali.unshift(payload);
    },

    modificaFiliale(state, payload){
        state.filiali.unshift(payload);
    },

    eliminaFiliale(state, id){
        state.filiali = state.filiali.filter(u => u.id !== id);
    },

    fetchRichiestaApparecchi(state, payload){
        state.richiestaApparecchi = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
