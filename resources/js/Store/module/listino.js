import help from "../../help";

const state = () => ({
    listino: [],
    eleListino: {}
});

const getters = {
    getListino(state){
        return state.listino;
    },

    getEleListino(state){
        return state.eleListino;
    },
};

const actions = {

    async fetchListino({commit}){
        const response = await axios.get(`${help().linklistino}`);
        commit('fetchListino', response.data.data);
    },

    async fetchListinoFromFornitore({commit}, idFornitore){
        const response = await axios.get(`${help().linklistino}`+'/'+idFornitore);
        commit('fetchListinoFromFornitore', response.data);
    },

    async addListino({commit}, payload){
        const response = await axios.post(`${help().linkaddlistino}`, {
            'nome': payload.nome,
            'fornitore_id': payload.fornitore_id,
            'categoria_id': payload.categoria_id,
            'costo': payload.costo,
            'prezzolistino': payload.prezzolistino,
            'iva': payload.iva,
            'giorniTempoDiReso': payload.giorniTempoDiReso,
        });
        commit('addListino', response.data.data);
    },

    async eliminaListino({commit}, id){
        await axios.delete(`${help().linklistino}`+'/'+id);
        commit('eliminaListino', id);
    },

    async fetchEleListino({commit}, id){
        const response = await axios.get(`${help().linkelelistino}`+'/'+id);
        commit('fetchEleListino', response.data);
    },
};

const mutations = {
    fetchListino(state, payload){
        state.listino = payload;
    },

    fetchListinoFromFornitore(state, payload){
        state.listino = payload;
    },

    addListino(state, payload){
        state.listino.unshift(payload);
    },

    eliminaListino(state, id){
        state.listino = state.listino.filter(u => u.id !== id);
    },

    fetchEleListino(state, payload){
        state.eleListino = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
