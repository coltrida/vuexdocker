import help from "../../help";

const state = () => ({
    medici: [],
    orari: [],
    invii: [],
    totInvii: [],

    statisticheInvii: [],
    statisticheTotInvii: [],
    mediciMesi: []
});

const getters = {
    getMedici(state){
        return state.medici;
    },

    getMediciMesi(state){
        return state.mediciMesi;
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

    getStatisticheInvii(state){
        return state.statisticheInvii;
    },

    getStatisticheTotaliInvii(state){
        return state.statisticheTotInvii;
    },
};

const actions = {

    async fetchMedici({commit}, idUser){
        let response = [];
        if (idUser !== 0){
            response = await axios.get(`${help().linklistamedici}`+'/'+idUser, {
                headers: {
                    'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
                }
            });
        } else {
            response = await axios.get(`${help().linklistamedici}`, {
                headers: {
                    'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
                }
            });
        }

        commit('fetchMedici', response.data);
    },

    async fetchMediciMesi({commit}, payload){
        const response = await axios.post(`${help().linkmedicimesi}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchMediciMesi', response.data);
    },

    async fetchTuttiMedici({commit}, idUser){
        const response = await axios.get(`${help().linklistamedici}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchMedici', response.data);
    },

    async addMedico({commit}, payload){
        const response = await axios.post(`${help().linkaddmedico}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addMedico', response.data);
    },

    async eliminaMedico({commit}, idMedico){
        await axios.delete(`${help().linklistamedici}`+'/'+idMedico, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaMedico', idMedico);
    },

    async caricaOrari({commit}, idDottore){
        const response = await axios.get(`${help().linkcaricaorari}`+'/'+idDottore, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('caricaOrari', response.data);
    },

    async caricaOrarioDottore({commit}, dottore){
        const response = await axios.get(`${help().linkcaricaorariodottore}`+'/'+dottore, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('caricaOrari', response.data);
    },

    async addOrario({commit}, payload){
        const response = await axios.post(`${help().linkaddorario}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addOrario', response.data);
    },

    async eliminaOrario({commit}, idOrario){
        await axios.delete(`${help().linkeliminaOrario}`+'/'+idOrario, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaOrario', idOrario);
    },

    async inviiMedici({commit}, payload){
        const response = await axios.post(`${help().linkinviimedici}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('inviiMedici', response.data);
    },

    async totaleInviiMedici({commit}, payload){
        const response = await axios.post(`${help().linktotaleinviimedici}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('totaleInviiMedici', response.data);
    },

    async statisticheInviiMedici({commit}, payload){
        const response = await axios.post(`${help().linkstatisticheinviimedici}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('statisticheInviiMedici', response.data);
    },

    async statisticheTotaleInviiMedici({commit}, payload){
        const response = await axios.post(`${help().linkstatistichetotaleinviimedici}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('statisticheTotaleInviiMedici', response.data);
    },
};

const mutations = {
    fetchMedici(state, payload){
        state.medici = payload;
    },

    fetchMediciMesi(state, payload){
        state.mediciMesi = payload;
    },

    addMedico(state, payload){
        state.medici = state.medici.filter(u => u.id !== payload.id);
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

    eliminaOrario(state, idOrario){
        state.orari = state.orari.filter(u => u.id !== idOrario);
    },

    inviiMedici(state, payload){
        state.invii = payload;
    },

    totaleInviiMedici(state, payload){
        state.totInvii = payload;
    },

    statisticheInviiMedici(state, payload){
        state.statisticheInvii = payload;
    },

    statisticheTotaleInviiMedici(state, payload){
        state.statisticheTotInvii = payload;
    },

    resetInvii(state){
        state.invii = [];
        state.totInvii = [];
        state.statisticheInvii = [];
        state.statisticheTotInvii = [];
        state.mediciMesi = [];
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
