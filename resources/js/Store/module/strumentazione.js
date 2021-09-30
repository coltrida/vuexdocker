import help from "../../help";

const state = () => ({
    strumenti: [],
    associazioni: [],
});

const getters = {
    getStrumenti(state){
        return state.strumenti;
    },

    getAssociazioni(state){
        return state.associazioni;
    },
};

const actions = {
    async fetchStrumenti({commit}){
        const response = await axios.get(`${help().linkstrumentazione}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchStrumenti', response.data);
    },

    async fetchAssociazioni({commit}){
        const response = await axios.get(`${help().linkstrumentazioneassociata}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAssociazioni', response.data);
    },

    async modificaStrumento({commit}, payload){
        const response = await axios.post(`${help().linkmodificastrumentazione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addStrumento', response.data);
    },

    async addStrumento({commit}, payload){
        const response = await axios.post(`${help().linkaddstrumentazione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addStrumento', response.data);
    },

    async eliminaStrumento({commit}, id){
        await axios.delete(`${help().linkstrumentazione}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaStrumento', id);
    },

    async associaStrumento({commit}, payload){
        const response = await axios.post(`${help().linkassociastrumento}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('associaStrumento', response.data);
    },

    async dissociaStrumento({commit}, id){
        const response = await axios.get(`${help().linkdissociastrumento}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('dissociaStrumento', response.data);
    },
};

const mutations = {
    fetchStrumenti(state, payload){
        state.strumenti = payload;
    },

    fetchAssociazioni(state, payload){
        state.associazioni = payload;
    },

    addStrumento(state, payload){
        state.strumenti.unshift(payload);
    },

    eliminaStrumento(state, id){
        state.strumenti = state.strumenti.filter(u => u.id !== id);
    },

    associaStrumento(state, payload) {
        state.strumenti = state.strumenti.filter(u => u.id !== payload.id);
        state.associazioni.find(u => u.id === payload.filiale.id).strumentazione.unshift(payload);
    },

    dissociaStrumento(state, payload) {
        state.associazioni.find(u => u.id === payload.filTrans).strumentazione = state.associazioni.find(u => u.id === payload.filTrans).strumentazione.filter(v => v.id !== payload.id);
        state.strumenti.unshift(payload);
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
