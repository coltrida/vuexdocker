import help from "../../help";

const state = () => ({
    recalls: [],
    recallOggi: [],
    telefonateFatteOggi: [],
    numeroTelefonateFatteOggi: '',
    numeroAppuntamentiPresiOggi: '',
    clientiMaiRichiamati: [],
    clientiNonHannoMaiPresoAppuntamenti: [],
    clientiUnAnnoUltimoAppuntamento: [],
});

const getters = {
    getRecalls(state){
        return state.recalls;
    },

    getRecallOggi(state){
        return state.recallOggi;
    },

    getTelefonateFatteOggi(state){
        return state.telefonateFatteOggi;
    },

    getNumeroTelefonateFatteOggi(state){
        return state.numeroTelefonateFatteOggi;
    },

    getNumeroAppuntamentiPresiOggi(state){
        return state.numeroAppuntamentiPresiOggi;
    },

    getClientiMaiRichiamati(state){
        return state.clientiMaiRichiamati;
    },

    getClientiNonHannoMaiPresoAppuntamenti(state){
        return state.clientiNonHannoMaiPresoAppuntamenti;
    },

    getClientiUnAnnoUltimoAppuntamento(state){
        return state.clientiUnAnnoUltimoAppuntamento;
    },
};

const actions = {
    async fetchRecallsByIdClient({commit}, idClient){
        const response = await axios.get(`${help().linkrecallsbyidclient}`+'/'+idClient);
        commit('fetchRecallsByIdClient', response.data.data);
    },

    async fetchRecallOggi({commit}){
        const response = await axios.get(`${help().linkrecalloggi}`);
        commit('fetchRecallOggi', response.data);
    },

    async fetchTelefonateFatteOggi({commit}){
        const response = await axios.get(`${help().linktelefonatefatteoggi}`);
        commit('fetchTelefonateFatteOggi', response.data);
    },

    async fetchNumeroTelefonateFatteOggi({commit}){
        const response = await axios.get(`${help().linknumerotelefonatefatteoggi}`);
        commit('fetchNumeroTelefonateFatteOggi', response.data);
    },

    async fetchNumeroAppuntamentiPresiOggi({commit}){
        const response = await axios.get(`${help().linknumeroappuntamentipresioggi}`);
        commit('fetchNumeroAppuntamentiPresiOggi', response.data);
    },

    async addTelefonata({commit}, payload){
        const response = await axios.post(`${help().linkaddtelefonata}`, payload);
        commit('addTelefonata', response.data.data);
    },

    async aggiornaTelefonata({commit}, payload){
        const response = await axios.post(`${help().linkaggiornatelefonata}`, payload);
        commit('aggiornaTelefonata', response.data.data);
    },

    async fetchClientiMaiRichiamati({commit}){
        const response = await axios.get(`${help().linkclientimairichiamati}`);
        commit('fetchClientiMaiRichiamati', response.data);
    },

    async fetchClientiNonHannoMaiPresoAppuntamenti({commit}){
        const response = await axios.get(`${help().linkclientinonhannomaipresoappuntamenti}`);
        commit('fetchClientiNonHannoMaiPresoAppuntamenti', response.data);
    },

    async fetchClientiUnAnnoUltimoAppuntamento({commit}){
        const response = await axios.get(`${help().linkclientiunannoultimoappuntamento}`);
        commit('fetchClientiUnAnnoUltimoAppuntamento', response.data);
    },
};

const mutations = {
    fetchRecallsByIdClient(state, payload){
        state.recalls = payload;
    },

    fetchRecallOggi(state, payload){
        state.recallOggi = payload;
    },

    fetchTelefonateFatteOggi(state, payload){
        state.telefonateFatteOggi = payload;
    },

    fetchNumeroTelefonateFatteOggi(state, payload){
        state.numeroTelefonateFatteOggi = payload;
    },

    fetchNumeroAppuntamentiPresiOggi(state, payload){
        state.numeroAppuntamentiPresiOggi = payload;
    },

    addTelefonata(state, payload){
        state.recalls.unshift(payload);
    },

    aggiornaTelefonata(state, payload){
        state.recalls = state.recalls.filter(u => u.id !== payload.id);
        state.recalls.unshift(payload);
        state.recallOggi = state.recallOggi.filter(u => u.id !== payload.id);
    },

    fetchClientiMaiRichiamati(state, payload){
        state.clientiMaiRichiamati = payload;
    },

    fetchClientiNonHannoMaiPresoAppuntamenti(state, payload){
        state.clientiNonHannoMaiPresoAppuntamenti = payload;
    },

    fetchClientiUnAnnoUltimoAppuntamento(state, payload){
        state.clientiUnAnnoUltimoAppuntamento = payload;
    },

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
