import help from "../../help";

const state = () => ({
    inFiliale: [],
    inProva: [],
    richiesti: []
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
};

const actions = {

    async fetchInFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/presenti');
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
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
