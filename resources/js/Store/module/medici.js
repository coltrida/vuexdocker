import help from "../../help";

const state = () => ({
    medici: [],
    orari: [],
    invii: [],
    totInvii: []
});

const getters = {
    getMedici(state){
        return state.medici;
    },

    getOrari(state){
        return state.orari;
    },

    getInvii(state){
        return state.invii;
    },

    getTotaliInvii(state){
        return state.totInvii;
    },
};

const actions = {

    async fetchMedici({commit}, idUser){
        const response = await axios.get(`${help().linklistamedici}`+'/'+idUser);
        commit('fetchMedici', response.data);
    },

    async addMedico({commit}, payload){
        const response = await axios.post(`${help().linkaddmedico}`, payload);
        commit('addMedico', response.data);
    },

    async eliminaMedico({commit}, idMedico){
        await axios.delete(`${help().linklistamedici}`+'/'+idMedico);
        commit('eliminaMedico', idMedico);
    },

    async caricaOrari({commit}, idDottore){
        const response = await axios.get(`${help().linkcaricaorari}`+'/'+idDottore);
        commit('caricaOrari', response.data);
    },

    async caricaOrarioDottore({commit}, dottore){
        const response = await axios.get(`${help().linkcaricaorariodottore}`+'/'+dottore);
        commit('caricaOrari', response.data);
    },

    async addOrario({commit}, payload){
        const response = await axios.post(`${help().linkaddorario}`, payload);
        commit('addOrario', response.data);
    },

    async inviiMedici({commit}, payload){
        const response = await axios.post(`${help().linkinviimedici}`, payload);
        commit('inviiMedici', response.data);
    },

    async totaleInviiMedici({commit}, payload){
        const response = await axios.post(`${help().linktotaleinviimedici}`, payload);
        commit('totaleInviiMedici', response.data);
    },
};

const mutations = {
    fetchMedici(state, payload){
        state.medici = payload;
    },

    addMedico(state, payload){
        state.medici.unshift(payload);
    },

    eliminaMedico(state, id){
        state.medici = state.medici.filter(u => u.id !== id);
    },

    caricaOrari(state, payload){
        state.orari = payload;
    },

    addOrario(state, payload){
        state.orari.unshift(payload);
    },

    inviiMedici(state, payload){
        state.invii = payload;
    },

    totaleInviiMedici(state, payload){
        state.totInvii = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
