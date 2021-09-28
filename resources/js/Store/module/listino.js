import help from "../../help";

const state = () => ({
    listino: [],
    nomiApa: [],
    eleListino: {}
});

const getters = {
    getListino(state){
        return state.listino;
    },

    getNomiApa(state){
        return state.nomiApa;
    },

    getEleListino(state){
        return state.eleListino;
    },
};

const actions = {

    async fetchListino({commit}){
        const response = await axios.get(`${help().linklistino}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchListino', response.data.data);
    },

    async fetchNomiApa({commit}){
        const response = await axios.get(`${help().linknomiApa}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchNomiApa', response.data);
    },

    async fetchListinoFromFornitore({commit}, idFornitore){
        const response = await axios.get(`${help().linklistino}`+'/'+idFornitore, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
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
            'idFiliali':payload.idFiliali,
            'soglie':payload.soglie,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addListino', response.data.data);
    },

    async modificaListino({commit}, payload){
        const response = await axios.post(`${help().linkmodificalistino}`, {
            'id': payload.id,
            'nome': payload.nome,
            'fornitore_id': payload.fornitore_id,
            'categoria_id': payload.categoria_id,
            'costo': payload.costo,
            'prezzolistino': payload.prezzolistino,
            'iva': payload.iva,
            'giorniTempoDiReso': payload.giorniTempoDiReso,
            'idFiliali':payload.idFiliali,
            'soglie':payload.soglie,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaListino', response.data.data);
    },

    async eliminaListino({commit}, id){
        await axios.delete(`${help().linklistino}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaListino', id);
    },

    async fetchEleListino({commit}, id){
        const response = await axios.get(`${help().linkelelistino}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchEleListino', response.data);
    },
};

const mutations = {
    fetchListino(state, payload){
        state.listino = payload;
    },

    fetchNomiApa(state, payload){
        state.nomiApa = payload;
    },

    fetchListinoFromFornitore(state, payload){
        state.listino = payload;
    },

    addListino(state, payload){
        state.listino.unshift(payload);
    },

    modificaListino(state, payload){
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
