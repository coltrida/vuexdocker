import help from "../../help";

const state = () => ({
    filiali: [],
    associazioni: [],
    situazioneMese: []
});

const getters = {
    getFiliali(state){
        return state.filiali;
    },

    getAssociazioni(state){
        return state.associazioni;
    },

    getSituazioneMese(state){
        return state.situazioneMese;
    },

};

const actions = {
    async fetchFiliali({commit}){
        const response = await axios.get(`${help().linkfiliali}`);
        commit('fetchFiliali', response.data);
    },

    async fetchFilialiByUser({commit}, idUser){
        const response = await axios.get(`${help().linkfilialiuser}`+'/'+idUser);
        commit('fetchFiliali', response.data);
    },

    async fetchAssociazioni({commit}){
        const response = await axios.get(`${help().linkassociazioniPersonale}`);
        commit('fetchAssociazioni', response.data);
    },

    async fetchSituazioneMese({commit}){
        const response = await axios.get(`${help().linksituazionemese}`);
        commit('fetchSituazioneMese', response.data);
    },

    async fetchAssocia({commit}, payload){
        const response = await axios.post(`${help().linkaggiungiAssociazione}`, payload);
        commit('fetchAssocia', response.data);
    },

    async fetchDissocia({commit}, id){
        const response = await axios.get(`${help().linkeliminaAssociazione}`+'/'+id);
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
        });
        commit('addFiliale', response.data);
    },

    async eliminaFiliale({commit}, id){
        await axios.delete(`${help().linkfiliali}`+'/'+id);
        commit('eliminaFiliale', id);
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

    addFiliale(state, payload){
        state.filiali.unshift(payload);
    },

    eliminaFiliale(state, id){
        state.filiali = state.filiali.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
