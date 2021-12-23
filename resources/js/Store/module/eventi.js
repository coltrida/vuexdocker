import help from "../../help";

const state = () => ({
    evento: {},
    eventiSettimana:[]
});

const getters = {
    getEventoGiorno(state){
        return state.evento;
    },

    getEventiSettimana(state){
        return state.eventiSettimana;
    },
};

const actions = {

    async fetchEventoGiorno({commit}, payload){
        const response = await axios.post(`${help().linkeventogiorno}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchEventoGiorno', response.data);
    },

    async addEvento({commit}, payload){
        const response = await axios.post(`${help().linkaddevento}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addEvento', response.data);
    },

    async fetchEventiSettimana({commit}, payload){
        let direzione = payload.direzione === undefined || payload.direzione == null || payload.direzione == 'null' ? null : payload.direzione;
        let idAudio = parseInt(payload.idAudio);
        const response = await axios.get(`${help().linkeventisettimana}`+'/'+idAudio+'/'+direzione, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchEventiSettimana', response.data);
    },

};

const mutations = {
    fetchEventoGiorno(state, payload){
        state.evento = payload;
    },

    fetchEventiSettimana(state, payload){
        state.eventiSettimana = payload;
    },

    addEvento(state, payload){

    }

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
