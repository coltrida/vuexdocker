import help from "../../help";

const state = () => ({
    audio: [],
    users: [],
    audioConBgt: [],
    audioSenzaBgt: [],
    situazioneMese: [],
    amm: [],
    agenda:[]
});

const getters = {

    getAudio(state){
        return state.audio;
    },

    getUsers(state){
        return state.users;
    },

    getAudioConBgt(state){
        return state.audioConBgt;
    },

    getAudioSenzaBgt(state){
        return state.audioSenzaBgt;
    },

    getAmm(state){
        return state.amm;
    },

    getSituazioneMese(state){
        return state.situazioneMese;
    },

    getAgenda(state){
        return state.agenda;
    }
};

const actions = {
    async fetchAudio({commit}){
        const response = await axios.get(`${help().linkaudio}`);
        commit('fetchAudio', response.data);
    },

    async fetchUserAgenda({commit}){
        const response = await axios.get(`${help().linkuseragenda}`);
        commit('fetchUserAgenda', response.data);
    },

    async fetchSpecificoUserAgenda({commit}, idAudio){
        const response = await axios.get(`${help().linkuseragenda}`+'/'+idAudio);
        commit('fetchSpecificoUserAgenda', response.data);
    },

    async fetchSituazioneMese({commit}, idAudio=''){
        const response = await axios.get(`${help().linksituazionemese}`+'/'+idAudio);
        commit('fetchSituazioneMese', response.data);
    },

    async fetchSituazioneAnno({commit}){
        const response = await axios.get(`${help().linkvisualizzasituazioneanno}`);
        commit('fetchAudioConBgt', response.data);
    },

    async fetchAudioConBgt({commit}){
        const response = await axios.get(`${help().linkaudioconbgt}`);
        commit('fetchAudioConBgt', response.data);
    },

    async fetchAudioSenzaBgt({commit}){
        const response = await axios.get(`${help().linkaudiosenzabgt}`);
        commit('fetchAudioSenzaBgt', response.data);
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

    async assegnaBgt({commit}, payload){
        //console.log(payload)
        const response = await axios.post(`${help().linkassegnabgt}`, payload);
        commit('assegnaBgt', response.data);
    },

    async modificaBgt({commit}, payload){
        const response = await axios.post(`${help().linkmodificabgt}`, payload);
        commit('modificaBgt', response.data);
    },

    async addAgenda({commit}, payload){
        const response = await axios.post(`${help().linkuseragenda}`, payload);
        commit('addAgenda', response.data);
    },

};

const mutations = {
    fetchAudio(state, payload){
        state.audio = payload;
    },

    fetchUserAgenda(state, payload){
        state.users = payload;
    },

    fetchSpecificoUserAgenda(state, payload){
        state.agenda = payload;
    },

    fetchSituazioneMese(state, payload){
        state.situazioneMese = payload;
    },

    fetchAudioConBgt(state, payload){
        state.audioConBgt = payload;
    },

    fetchAudioSenzaBgt(state, payload){
        state.audioSenzaBgt = payload;
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

    assegnaBgt(state, payload){
        state.audioSenzaBgt = state.audioSenzaBgt.filter(u => u.id !== payload.id);
        state.audioConBgt.unshift(payload);
    },

    modificaBgt(state, payload){
        state.audioSenzaBgt = state.audioSenzaBgt.filter(u => u.id !== payload.id);
        state.audioConBgt.unshift(payload);
    },

    addAgenda(state, payload){
        //state.users.find(u => u.id === payload.user_id).agenda.unshift(payload);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
