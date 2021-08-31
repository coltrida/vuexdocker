import help from "../../help";

const state = () => ({
    clients: [],
    ricercaNominativi: [],
    compleanni: [],
    province: [],
    cittaByProvincia: [],
    clientMessaggio: '',
    client: {},
    situazioneAnnoClientiAudio:[],
    situazioneAnnoResiAudio:[],
    messaggioBackup:''
});

const getters = {
    getClients(state){
        return state.clients;
    },

    getMessaggioBackup(state){
        return state.messaggioBackup;
    },

    getClientMessaggio(state){
        return state.clientMessaggio;
    },

    getCompleanni(state){
        return state.compleanni;
    },

    getClient(state){
        return state.client;
    },

    getProvince(state){
        return state.province;
    },

    getCittaByProvincia(state){
        return state.cittaByProvincia;
    },

    getRicercaNominativi(state){
        return state.ricercaNominativi;
    },

    getSituazioneAnnoClientiAudio(state){
        return state.situazioneAnnoClientiAudio;
    },

    getSituazioneAnnoResiAudio(state){
        return state.situazioneAnnoResiAudio;
    },

};

const actions = {
    async fetchClients({commit}){
        const response = await axios.get(`${help().linkclients}`);
        commit('fetchClients', response.data.data);
    },

    async fetchProvince({commit}){
        const response = await axios.get(`${help().linkprovince}`);
        commit('fetchProvince', response.data);
    },

    async fetchCittaByProvincia({commit}, provincia){
        const response = await axios.get(`${help().linkcittabyprovincia}`+'/'+provincia);
        commit('fetchCittaByProvincia', response.data);
    },

    async fetchCompleanni({commit}, idAudio){
        const response = await axios.get(`${help().linkcompleanni}`+'/'+idAudio);
        commit('fetchCompleanni', response.data.data);
    },

    async fetchClientsFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkclientsfiliale}`+'/'+idFiliale);
        commit('fetchClients', response.data.data);
    },

    async fetchClient({commit}, id){
        const response = await axios.get(`${help().linkclients}`+'/'+id);
        commit('fetchClient', response.data.data);
    },

    async ricercaNominativi({commit}, payload){
        const response = await axios.post(`${help().linkricercanominativi}`, payload);
        commit('ricercaNominativi', response.data.data);
    },

    async addClient({commit}, payload){
        const response = await axios.post(`${help().linkaddclient}`, payload);
        commit('addClient', response.data.data);
    },

    async modificaClient({commit}, payload){
        const response = await axios.post(`${help().linkmodificaclient}`, payload);
        commit('modificaClient', response.data.data);
    },

    async smsInvio({commit}, payload){
        await axios.post(`${help().linkinviasms}`, {
            'testo': payload
        });
    },

    async eliminaClient({commit}, payload){
        await axios.post(`${help().linkeliminaclient}`, payload);
        commit('eliminaClient', payload.clientId);
    },

    async importClients(){
        await axios.get(`${help().linkimportclients}`);
    },

    async importClientsXml({commit}, payload){
        const response = await axios.post(`${help().linkimportclientsxml}`, {
            nomeFile: payload.nomeFile,
            idUser: payload.idUser,
        });
        commit('importClientsXml', response.data);
    },

    async importClientsByFiliale({commit}, payload){
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('path', payload.path);
        formData.append('nomeFile', payload.nomeFile);

        await axios.post(`${help().linksalvafilexmlfromfiliale}`, formData, config);
    },

    async fetchSituazioneAnnoClientiAudio({commit}, payload){
        const response = await axios.post(`${help().linkSituazioneAnnoClientiAudio}`, payload);
        commit('fetchSituazioneAnnoClientiAudio', response.data);
    },

    async fetchSituazioneAnnoResiAudio({commit}, payload){
        const response = await axios.post(`${help().linkSituazioneAnnoResiAudio}`, payload);
        commit('fetchSituazioneAnnoResiAudio', response.data);
    },

    async eseguiBackup({commit}){
        const response = await axios.get(`${help().linkbackup}`);
        commit('eseguiBackup', response.data);
    },
};

const mutations = {
    fetchClients(state, payload){
        state.clients = payload;
    },

    ricercaNominativi(state, payload){
        state.ricercaNominativi = payload;
    },

    fetchProvince(state, payload){
        state.province = payload;
    },

    fetchCittaByProvincia(state, payload){
        state.cittaByProvincia = payload;
    },

    fetchCompleanni(state, payload){
        state.compleanni = payload;
    },

    fetchClient(state, payload){
        state.client = payload;
    },

    addClient(state, payload){
        state.clients.unshift(payload);
        state.clientMessaggio = 'Nominativo inserito correttamente'
    },

    modificaClient(state, payload){
        state.clients = state.clients.filter(u => u.id !== payload.id);
        state.clients.unshift(payload);
        state.clientMessaggio = 'Nominativo modificato correttamente'
    },

    eliminaClient(state, id){
        state.clients = state.clients.filter(u => u.id !== id);
    },

    importClientsXml(state, payload){
        if (payload == 1){
            state.clientMessaggio = 'Importazione effettuata'
        } else {
            state.clientMessaggio = 'Nessuna importazione effettuata'
        }
    },

    resetClientMessaggio(state){
        state.clientMessaggio = '';
    },

    fetchSituazioneAnnoClientiAudio(state, payload){
        state.situazioneAnnoClientiAudio = payload;
    },

    fetchSituazioneAnnoResiAudio(state, payload){
        state.situazioneAnnoResiAudio = payload;
    },

    eseguiBackup(state, payload){
        state.messaggioBackup = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
