import help from "../../help";

const state = () => ({
    recalls: [],
    recallOggi: [],
    recallDomani: [],
    telefonateFatteOggi: [],
    numeroTelefonateFatteOggi: '',
    numeroAppuntamentiPresiOggi: '',
    clientiMaiRichiamati: [],
    clientiNonHannoMaiPresoAppuntamenti: [],
    clientiUnAnnoUltimoAppuntamento: [],
    statisticheTelefonate: [],
    daRichiamare: [],
});

const getters = {
    getRecalls(state){
        return state.recalls;
    },

    getDaRichiamare(state){
        return state.daRichiamare;
    },

    getStatisticheTelefonate(state){
        return state.statisticheTelefonate;
    },

    getRecallOggi(state){
        return state.recallOggi;
    },

    getRecallDomani(state){
        return state.recallDomani;
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
        const response = await axios.get(`${help().linkrecallsbyidclient}`+'/'+idClient, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecallsByIdClient', response.data.data);
    },

    async fetchDaRichiamare({commit}){
        const response = await axios.get(`${help().linkdarichiamare}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDaRichiamare', response.data);
    },

    async fetchStatisticheTelefonate({commit}){
        const response = await axios.get(`${help().linkstatistichetelefonate}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchStatisticheTelefonate', response.data);
    },

    async fetchRecallOggi({commit}){
        const response = await axios.get(`${help().linkrecalloggi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecallOggi', response.data);
    },

    async fetchRecallDomani({commit}){
        const response = await axios.get(`${help().linkrecalldomani}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRecallDomani', response.data);
    },

    async fetchTelefonateFatteOggi({commit}){
        const response = await axios.get(`${help().linktelefonatefatteoggi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchTelefonateFatteOggi', response.data);
    },

    async fetchNumeroTelefonateFatteOggi({commit}){
        const response = await axios.get(`${help().linknumerotelefonatefatteoggi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchNumeroTelefonateFatteOggi', response.data);
    },

    async fetchNumeroAppuntamentiPresiOggi({commit}){
        const response = await axios.get(`${help().linknumeroappuntamentipresioggi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchNumeroAppuntamentiPresiOggi', response.data);
    },

    async addTelefonata({commit}, payload){
        const response = await axios.post(`${help().linkaddtelefonata}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addTelefonata', response.data.data);
    },

    async aggiornaTelefonata({commit}, payload){
        const response = await axios.post(`${help().linkaggiornatelefonata}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('aggiornaTelefonata', response.data.data);
    },

    async fetchClientiMaiRichiamati({commit}){
        const response = await axios.get(`${help().linkclientimairichiamati}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClientiMaiRichiamati', response.data);
    },

    async fetchClientiNonHannoMaiPresoAppuntamenti({commit}){
        const response = await axios.get(`${help().linkclientinonhannomaipresoappuntamenti}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClientiNonHannoMaiPresoAppuntamenti', response.data);
    },

    async fetchClientiUnAnnoUltimoAppuntamento({commit}){
        const response = await axios.get(`${help().linkclientiunannoultimoappuntamento}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClientiUnAnnoUltimoAppuntamento', response.data);
    },
};

const mutations = {
    fetchRecallsByIdClient(state, payload){
        state.recalls = payload;
    },

    fetchDaRichiamare(state, payload){
        state.daRichiamare = payload;
    },

    fetchStatisticheTelefonate(state, payload){
        state.statisticheTelefonate = payload;
    },

    fetchRecallOggi(state, payload){
        state.recallOggi = payload;
    },

    fetchRecallDomani(state, payload){
        state.recallDomani = payload;
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
