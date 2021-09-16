import help from "../../help";

const state = () => ({
    fornitori: []
});

const getters = {
    getFornitori(state){
        return state.fornitori;
    },
};

const actions = {

    async fetchFornitori({commit}){
        const response = await axios.get(`${help().linkfornitori}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFornitori', response.data);
    },

    async addFornitore({commit}, payload){
        const response = await axios.post(`${help().linkaddfornitore}`, {
            'nome': payload.nome,
            'indirizzo': payload.indirizzo,
            'citta': payload.citta,
            'cap': payload.cap,
            'provincia': payload.provincia,
            'telefono': payload.telefono,
            'email': payload.email,
            'pec': payload.pec,
            'univoco': payload.univoco,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addFornitore', response.data);
    },

    async modificaFornitore({commit}, payload){
        const response = await axios.post(`${help().linkmodificafornitore}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaFornitore', response.data);
    },

    async eliminaFornitore({commit}, id){
        await axios.delete(`${help().linkfornitori}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaFornitore', id);
    },
};

const mutations = {
    fetchFornitori(state, payload){
        state.fornitori = payload;
    },

    addFornitore(state, payload){
        state.fornitori.unshift(payload);
    },

    eliminaFornitore(state, id){
        state.fornitori = state.fornitori.filter(u => u.id !== id);
    },

    modificaFornitore(state, payload){
        state.fornitori.unshift(payload);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
