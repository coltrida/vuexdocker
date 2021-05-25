import help from "../../help";

const state = () => ({
    filiali: []
});

const getters = {
    getFiliali(state){
        return state.filiali;
    },

};

const actions = {
    async fetchFiliali({commit}){
        const response = await axios.get(`${help().linkfiliali}`);
        commit('fetchFiliali', response.data);
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
