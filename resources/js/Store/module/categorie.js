import help from "../../help";

const state = () => ({
    categorie: []
});

const getters = {
    getCategorie(state){
        return state.categorie;
    },
};

const actions = {

    async fetchCategorie({commit}){
        const response = await axios.get(`${help().linkcategorie}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchCategorie', response.data);
    },

    async addCategoria({commit}, payload){
        const response = await axios.post(`${help().linkaddcategoria}`, {
            'nome': payload.nome,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addCategoria', response.data);
    },

    async eliminaCategoria({commit}, id){
        await axios.delete(`${help().linkcategorie}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaCategoria', id);
    },
};

const mutations = {
    fetchCategorie(state, payload){
        state.categorie = payload;
    },

    addCategoria(state, payload){
        state.categorie.unshift(payload);
    },

    eliminaCategoria(state, id){
        state.categorie = state.categorie.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
