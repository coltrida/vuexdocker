import help from "../../help";

const state = () => ({
    inFiliale: [],
    inProva: [],
    richiesti: [],
    inArrivo: []
});

const getters = {
    getInFiliale(state){
        return state.inFiliale;
    },

    getInProva(state){
        return state.inProva;
    },

    getRichiesti(state){
        return state.richiesti;
    },

    getInArrivo(state){
        return state.inArrivo;
    },
};

const actions = {

    async fetchInFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/presenti');
        commit('fetchInFiliale', response.data.data);
    },

    async fetchInFilialeFornitore({commit}, payload){
        const response = await axios.get(`${help().linkfilialefornitore}`+'/'+payload.idFiliale+'/'+payload.idFornitore);
        commit('fetchInFiliale', response.data.data);
    },

    async fetchInProva({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/inProva');
        commit('fetchInProva', response.data.data);
    },

    async fetchRichiesti({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/richiesti');
        commit('fetchRichiesti', response.data.data);
    },

    async fetchInArrivo({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/inArrivo');
        commit('fetchInArrivo', response.data.data);
    },

    async richiediProduct({commit}, payload){
        const response = await axios.post(`${help().linkrichiestaprodotti}`, payload);
        commit('richiediProduct', response.data.data);
    },

    async switchInProva({commit}, payload){
        await axios.post(`${help().linkproductswitchinprova}`, {
            'idProduct': payload.idProduct,
            'user_id': payload.user_id,
            'client_id': payload.client_id,
        });
    },

    async switchRimuoviDallaProva({commit}, id){
        await axios.get(`${help().linkproductswitchrimuovidallaprova}`+'/'+id);
    },

    async eliminaRichiesta({commit}, id){
        await axios.delete(`${help().linkproductrimuovirichiesta}`+'/'+id);
        commit('eliminaRichiesta', id);
    },
};

const mutations = {
    fetchInFiliale(state, payload){
        state.inFiliale = payload;
    },

    fetchInProva(state, payload){
        state.inProva = payload;
    },

    fetchRichiesti(state, payload){
        state.richiesti = payload;
    },

    fetchInArrivo(state, payload){
        state.inArrivo = payload;
    },

    richiediProduct(state, payload){
        payload.forEach(ele => {
            state.richiesti.push(ele);
        })
    },

    eliminaRichiesta(state, id) {
        state.richiesti = state.richiesti.filter(u => u.id !== id);
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
