import help from "../../help";

const state = () => ({
    audio: [],
    amm: []
});

const getters = {
    getAudio(state){
        return state.audio;
    },

    getAmm(state){
        return state.amm;
    },
};

const actions = {
    async fetchAudio({commit}){
        const response = await axios.get(`${help().linkaudio}`);
        commit('fetchAudio', response.data);
    },

    async fetchAmm({commit}){
        const response = await axios.get(`${help().linkamm}`);
        commit('fetchAmm', response.data);
    },

    async addAudio({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        });
        commit('addAudio', response.data);
    },

    async addAmm({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        });
        commit('addAmm', response.data);
    },

    async eliminaAudio({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id);
        commit('eliminaAudio', id);
    },

    async eliminaAmm({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id);
        commit('eliminaAmm', id);
    },
};

const mutations = {
    fetchAudio(state, payload){
        state.audio = payload;
    },

    fetchAmm(state, payload){
        state.amm = payload;
    },

    addAudio(state, payload){
        state.audio.unshift(payload);
    },

    addAmm(state, payload){
        state.amm.unshift(payload);
    },

    eliminaAudio(state, id){
        state.audio = state.audio.filter(u => u.id !== id);
    },

    eliminaAmm(state, id){
        state.amm = state.amm.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
