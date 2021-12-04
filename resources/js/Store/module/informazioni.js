import help from "../../help";

const state = () => ({
    informazioni: [],
    motivoIntervento: ['Pulizia', 'Assistenza', 'Nuovo Esame', 'informazioni'],
});

const getters = {
    getInformazioni(state){
        return state.informazioni;
    },

    getMotivoIntervento(state){
        return state.motivoIntervento;
    },
};

const actions = {
    async fetchInformazioni({commit}, id){
        const response = await axios.get(`${help().linkinformazioni}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInformazioni', response.data.data);
    },

    async addInformazione({commit}, payload){
        const response = await axios.post(`${help().linkaggiungiinformazione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addInformazione', response.data.data);
    },

};

const mutations = {
    fetchInformazioni(state, payload){
        state.informazioni = payload;
    },

    addInformazione(state, payload){
        state.informazioni.unshift(payload);
    },

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
