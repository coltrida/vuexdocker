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
       // console.log(payload);
        payload.forEach(ele => {
            state.richiesti.push(ele);
        })
        //state.richiesti.unshift(payload);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
