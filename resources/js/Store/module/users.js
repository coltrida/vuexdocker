import help from "../../help";

const state = () => ({
    audio: [],
    ventaglioAnno: [],
    users: [],
    commerciale: [],
    audioConBgt: [],
    audioSenzaBgt: [],
    audioConFatt: [],
    situazioneMese: [],
    amm: [],
    callCenter: [],
    agenda:[],
    totFatt: 0,
    totBgtProg: 0,
    userInformazioni: ''
});

const getters = {

    getAudio(state){
        return state.audio;
    },

    getUserInformazioni(state){
        return state.userInformazioni;
    },

    getTotFatt(state){
        return state.totFatt;
    },

    getTotBgtProg(state){
        return state.totBgtProg;
    },

    getCommerciale(state){
        return state.commerciale;
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
        const response = await axios.get(`${help().linkaudio}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudio', response.data);
    },

    async fetchAudioSeguitiDaAmministrativa({commit}, idAmministrativa){
        const response = await axios.get(`${help().linkaudioseguitidaamministrativa}`+'/'+idAmministrativa, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudio', response.data);
    },

    async switchDatabase({commit}){
        const response = await axios.get(`${help().linkswitchdatabase}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('switchDatabase', response.data);
    },

    async fetchCommerciale({commit}){
        const response = await axios.get(`${help().linksituazionemese}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchCommerciale', response.data);
    },

    async fetchUserAgenda({commit}){
        const response = await axios.get(`${help().linkuseragenda}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchUserAgenda', response.data);
    },

    async fetchSpecificoUserAgenda({commit}, idAudio){
        const response = await axios.get(`${help().linkuseragenda}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSpecificoUserAgenda', response.data);
    },

    async fetchSituazioneMese({commit}, idAudio=''){
        const response = await axios.get(`${help().linksituazionemese}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSituazioneMese', response.data);
    },

    async fetchSituazioneAnno({commit}){
        const response = await axios.get(`${help().linkvisualizzasituazioneanno}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudioConBgt', response.data.data);
    },

    async fetchAudioConBgt({commit}){
        const response = await axios.get(`${help().linkaudioconbgt}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudioConBgt', response.data);
    },

    async fetchAudioConFatt({commit}){
        const response = await axios.get(`${help().linkstatistichedettagliaudio}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudioConFatt', response.data);
    },

    async fetchAudioConBgtAssegnato({commit}){
        const response = await axios.get(`${help().linkaudioconbgt}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudioConBgtAssegnato', response.data);
    },

    async fetchAudioSenzaBgt({commit}){
        const response = await axios.get(`${help().linkaudiosenzabgt}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAudioSenzaBgt', response.data);
    },

    async fetchAmm({commit}){
        const response = await axios.get(`${help().linkamm}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAmm', response.data);
    },

    async fetchCall({commit}){
        const response = await axios.get(`${help().linkcallcenter}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchCall', response.data);
    },

    async addAudio({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addAudio', response.data);
    },

    async addAmm({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addAmm', response.data);
    },

    async addCall({commit}, payload){
        const response = await axios.post(`${help().linkadduser}`, {
            'name': payload.name,
            'email': payload.email,
            'ruolo_id': payload.ruolo_id,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addCall', response.data);
    },

    async eliminaAudio({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaAudio', id);
    },

    async eliminaAmm({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaAmm', id);
    },

    async eliminaCall({commit}, id){
        await axios.delete(`${help().linkuser}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaCall', id);
    },

    async assegnaBgt({commit}, payload){
        //console.log(payload)
        const response = await axios.post(`${help().linkassegnabgt}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('assegnaBgt', response.data);
    },

    async modificaBgt({commit}, payload){
        const response = await axios.post(`${help().linkmodificabgt}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaBgt', response.data);
    },

    async addAgenda({commit}, payload){
        const response = await axios.post(`${help().linkuseragenda}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addAgenda', response.data);
    },

    async fetchVentaglioAnno({commit}){
        const response = await axios.get(`${help().linkventaglio}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchVentaglioAnno', response.data);
    },

};

const mutations = {
    fetchAudio(state, payload){
        state.audio = payload;
    },

    switchDatabase(state, payload){
        state.userInformazioni = payload;
    },

    fetchUserInformazioniDatabase(state, payload){
        state.userInformazioni = payload;
    },

    fetchCommerciale(state, payload){
        state.commerciale = payload;
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

    fetchAudioConBgtAssegnato(state, payload){
        state.audioConBgt = payload;
    },

    fetchAudioConBgt(state, payload){
        let totFatt = 0;
        let totBgtProg = 0;
        payload.forEach(elemento => {
            totBgtProg = totBgtProg + elemento.valori[0].premio;
            totFatt = totFatt + elemento.valori[1].budgetAnno;
        });
        state.totFatt = totFatt;
        state.totBgtProg = totBgtProg;

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
