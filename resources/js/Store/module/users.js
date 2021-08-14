import help from "../../help";

const state = () => ({
    audio: [],
    ventaglioAnno: [],
    users: [],
    audioConBgt: [],
    audioSenzaBgt: [],
    audioConFatt: [],
    situazioneMese: [],
    amm: [],
    callCenter: [],
    agenda:[]
});

const getters = {

    getAudio(state){
        return state.audio;
    },

    getVentaglioAnno(state){
        return state.ventaglioAnno;
    },

    getUsers(state){
        return state.users;
    },

    getAudioConBgt(state){
        return state.audioConBgt;
    },

    getAudioConFatt(state){
        return state.audioConFatt;
    },

    getAudioSenzaBgt(state){
        return state.audioSenzaBgt;
    },

    getAmm(state){
        return state.amm;
    },

    getCall(state){
        return state.callCenter;
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
        commit('fetchAudioConBgt', response.data.data);
    },

    async fetchAudioConBgt({commit}){
        const response = await axios.get(`${help().linkaudioconbgt}`);
        commit('fetchAudioConBgt', response.data);
    },

    async fetchAudioConFatt({commit}){
        const response = await axios.get(`${help().linkstatistichedettagliaudio}`);
        /*commit('fetchAudioConFatt', response.data.data);*/
        commit('fetchAudioConFatt', response.data);
    },

    async fetchAudioSenzaBgt({commit}){
        const response = await axios.get(`${help().linkaudiosenzabgt}`);
        commit('fetchAudioSenzaBgt', response.data);
    },

    async fetchAmm({commit}){
        const response = await axios.get(`${help().linkamm}`);
        commit('fetchAmm', response.data);
    },

    async fetchCall({commit}){
        const response = await axios.get(`${help().linkcallcenter}`);
        commit('fetchCall', response.data);
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

    async addCall({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        });
        commit('addCall', response.data);
    },

    async eliminaAudio({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id);
        commit('eliminaAudio', id);
    },

    async eliminaAmm({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id);
        commit('eliminaAmm', id);
    },

    async eliminaCall({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id);
        commit('eliminaCall', id);
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

    async fetchVentaglioAnno({commit}){
        const response = await axios.get(`${help().linkventaglio}`);
        commit('fetchVentaglioAnno', response.data);
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

    fetchAudioConFatt(state, payload){
        state.audioConFatt = payload;
    },

    fetchAudioSenzaBgt(state, payload){
        state.audioSenzaBgt = payload;
    },

    fetchAmm(state, payload){
        state.amm = payload;
    },

    fetchCall(state, payload){
        state.callCenter = payload;
    },

    addAudio(state, payload){
        state.audio.unshift(payload);
    },

    addAmm(state, payload){
        state.amm.unshift(payload);
    },

    addCall(state, payload){
        state.callCenter.unshift(payload);
    },

    eliminaAudio(state, id){
        state.audio = state.audio.filter(u => u.id !== id);
    },

    eliminaAmm(state, id){
        state.amm = state.amm.filter(u => u.id !== id);
    },

    eliminaCall(state, id){
        state.callCenter = state.callCenter.filter(u => u.id !== id);
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

    fetchVentaglioAnno(state, payload){
        state.ventaglioAnno = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
