import help from "../../help";

const state = () => ({
    listino: []
});

const getters = {
    getListino(state){
        return state.listino;
    },
};

const actions = {

    async fetchListino({commit}){
        const response = await axios.get(`${help().linklistino}`);
        commit('fetchListino', response.data.data);
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
};

const mutations = {
    fetchListino(state, payload){
        state.listino = payload;
    },

    addListino(state, payload){
        state.listino.unshift(payload);
    },

    eliminaListino(state, id){
        state.listino = state.listino.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
