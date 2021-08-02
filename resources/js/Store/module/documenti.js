import help from "../../help";

const state = () => ({
    documenti: [],
});

const getters = {
    getDocumenti(state){
        return state.documenti;
    },
};

const actions = {
    async fetchDocumenti({commit}, idClient){
        const response = await axios.get(`${help().linklistadocumenti}`+'/'+idClient);
        commit('fetchDocumenti', response.data.data);
    },

    async addDocumento({commit}, payload){
        //console.log(payload.fileUp);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('tipo', payload.tipo);
        formData.append('idClient', payload.idClient);

        let variabili = {
            'formData': formData,
            'idClient': payload.idClient,
            'tipo': payload.tipo
        };

        const response = await axios.post(`${help().linkcaricadocumento}`, formData, config);
        commit('addDocumento', response.data.data);
    },

    async eliminaDocumento({commit}, idDocumento){
        //console.log(idDocumento);
        await axios.delete(`${help().linkeliminadocumento}`+'/'+idDocumento);
        commit('eliminaDocumento', idDocumento);
    },
};

const mutations = {
    fetchDocumenti(state, payload){
        state.documenti = payload;
    },

    addDocumento(state, payload){
        state.documenti.unshift(payload);
    },

    eliminaDocumento(state, id){
        state.documenti = state.documenti.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
