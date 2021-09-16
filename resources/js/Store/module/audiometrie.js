import help from "../../help";

const state = () => ({
    audiometrie: [],
    audiometria: {}
});

const getters = {
    getAudiometrie(state){
        return state.audiometrie;
    },

    getAudiometria(state){
        return state.audiometria;
    },
};

const actions = {

    async fetchAudiometrie({commit}, idClient){
        const response = await axios.get(`${help().linkaudiometrie}`+'/'+idClient, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudiometrie', response.data);
    },

    async addAudiometria({commit}, payload){
        const response = await axios.post(`${help().linkaddaudiometria}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addAudiometria', response.data);
    },

    async selezionaAudiometria({commit}, idAudiometria){
        const response = await axios.get(`${help().linkaudiometria}`+'/'+idAudiometria, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('selezionaAudiometria', response.data);
    },
};

const mutations = {
    fetchAudiometrie(state, payload){
        state.audiometrie = payload;
        state.audiometria = payload[0];
    },

    addAudiometria(state, payload){
        state.audiometrie.unshift(payload);
        state.audiometria = payload;
    },

    selezionaAudiometria(state, payload){
        state.audiometria = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
