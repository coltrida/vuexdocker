import help from "../../help";

const state = () => ({
    elementiNuovaProva: [],
    nuovaProvaCreata: {},
    provePassate: []
});

const getters = {
    getElementiNuovaProva(state){
        return state.elementiNuovaProva;
    },

    getNuovaProvaCreata(state){
        return state.nuovaProvaCreata;
    },

    getProvePassate(state){
        return state.provePassate;
    },
};

const actions = {

    async fetchProvePassate({commit}, payload){
        commit('fetchProvePassate', payload);
    },

    async creaNuovaProva({commit}, payload){
        const response = await axios.post(`${help().linknuovaprova}`, payload);
        commit('creaNuovaProva', response.data);
    },

    async AddEleInNuovaProva({commit}, payload){
        const response = await axios.post(`${help().linkaddeleinprova}`, {
            'prova_id': payload.prova_id,
            'product_id': payload.prodotto.id,
            'orecchio': payload.orecchio,
            'prezzo': payload.prezzolistino,
        });
        commit('AddEleInNuovaProva', response.data.data);
    },

    async eliminaEle({commit}, id){
        await axios.delete(`${help().linkeliminaeleinprova}`+'/'+id);
        commit('eliminaEle', id);
    },

    async salvaProvaInCorso({commit}, payload){
        const response = await axios.post(`${help().linksalvaprova}`, {
            'id':payload.id,
            'tot':payload.tot
        });
        commit('salvaProvaInCorso', response.data);
    },

    async resoProva({commit}, idProva){
        const response = await axios.get(`${help().linkresoprova}`+'/'+idProva);
        commit('resoProva', response.data);
    },

    async salvaFattura({commit}, payload){
        const response = await axios.post(`${help().linksalvafattura}`, payload);
        commit('salvaFattura', response.data);
    },
};

const mutations = {
    fetchProvePassate(state, payload){
        state.provePassate = payload;
    },

    creaNuovaProva(state, payload){
        state.nuovaProvaCreata = payload;
    },

    AddEleInNuovaProva(state, payload){
        state.elementiNuovaProva.unshift(payload);
    },

    eliminaEle(state, id){
        state.elementiNuovaProva = state.elementiNuovaProva.filter(u => u.id !== id);
    },

    salvaProvaInCorso(state, payload){
        state.provePassate.unshift(payload);
        state.elementiNuovaProva = [];
    },

    resoProva(state, payload){
        state.provePassate = state.provePassate.filter(u => u.id !== payload.id);
        state.provePassate.unshift(payload);
    },

    salvaFattura(state, payload){
        //console.log('ok');
        console.log(payload);
        state.provePassate = state.provePassate.filter(u => u.id !== payload.id);
        state.provePassate.unshift(payload);
    },

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
