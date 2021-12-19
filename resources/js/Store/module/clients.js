import help from "../../help";

const state = () => ({
    anni:[2021, 2020, 2019],
    mesi:[1,2,3,4,5,6,7,8,9,10,11,12],
    clients: [],
    ricercaNominativi: [],
    compleanni: [],
    province: [],
    cittaByProvincia: [],
    clientMessaggio: '',
    client: {},
    situazioneAnnoClientiAudio:{},
    situazioneAnnoResiAudio:[],
    messaggioBackup:'',
    totImportati: 0,
    riepilogo: [],
    listaDoppioni:[],
    daInserire:[],
    listaSenzaFiliale:[],
});

const getters = {
    getAnni(state){
        return state.anni;
    },

    getMesi(state){
        return state.mesi;
    },

    getListaDoppioni(state){
        return state.listaDoppioni;
    },

    getOriginaliDaInserire(state){
        return state.daInserire;
    },

    getListaSenzaFiliale(state){
        return state.listaSenzaFiliale;
    },

    getImportati(state){
        return state.totImportati;
    },

    getClients(state){
        return state.clients;
    },

    getRiepilogo(state){
        return state.riepilogo;
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
        const response = await axios.get(`${help().linkclients}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClients', response.data.data);
    },

    async verificaEsisteDoppione({commit}, payload){
        const response = await axios.post(`${help().linkesistedoppione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('verificaEsisteDoppione', response.data);
    },

    async fetchRiepilogo({commit}){
        const response = await axios.get(`${help().linkriepilogoclients}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRiepilogo', response.data);
    },

    async fetchProvince({commit}){
        const response = await axios.get(`${help().linkprovince}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchProvince', response.data);
    },

    async fetchCittaByProvincia({commit}, provincia){
        const response = await axios.get(`${help().linkcittabyprovincia}`+'/'+provincia, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchCittaByProvincia', response.data);
    },

    async fetchCompleanni({commit}, idAudio){
        const response = await axios.get(`${help().linkcompleanni}`+'/'+idAudio, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchCompleanni', response.data.data);
    },

    async fetchClientsFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkclientsfiliale}`+'/'+idFiliale, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClients', response.data.data);
    },

    async fetchClient({commit}, id){
        const response = await axios.get(`${help().linkclients}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchClient', response.data.data);
    },

    async ricercaNominativi({commit}, payload){
        const response = await axios.post(`${help().linkricercanominativi}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('ricercaNominativi', response.data.data);
    },

    async ricercaNominativiConMail({commit}, payload){
        const response = await axios.post(`${help().linkricercanominativiconmail}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('ricercaNominativi', response.data.data);
    },

    async addClient({commit}, payload){
        const response = await axios.post(`${help().linkaddclient}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addClient', response.data.data);
    },

    async modificaClient({commit}, payload){
        const response = await axios.post(`${help().linkmodificaclient}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaClient', response.data.data);
    },

    async modificaClientEaggiornaDoppioni({commit}, payload){
        await axios.post(`${help().linkmodificaclient}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('modificaClientEaggiornaDoppioni', payload.id);
    },

    async smsInvio({commit}, payload){
        await axios.post(`${help().linkinviasms}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },

    async eliminaClient({commit}, payload){
        await axios.post(`${help().linkeliminaclient}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaClient', payload.clientId);
    },

    async importClients({commit}, payload){
        const response = await axios.get(`${help().linkimportclients}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('importClients', response.data);
    },

    async importClientsXml({commit}, payload){
        const response = await axios.post(`${help().linkimportclientsxml}`, {
            nomeFile: payload.nomeFile,
            idUser: payload.idUser,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('importClientsByFiliale', response.data[1]);
        commit('importClientsXml', response.data[0]);
        commit('verificaEsisteDoppione', response.data[2]);
        commit('originaliDaInserire', response.data[3]);
        commit('inserisciInListaSenzaFiliale', response.data[4]);
    },

    async importClientsByFiliale({commit}, payload){
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };
        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('path', payload.path);
        formData.append('nomeFile', payload.nomeFile);

        await axios.post(`${help().linksalvafilexmlfromfiliale}`, formData, config);
    },

    async salvaFileAdmin({commit}, payload){
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };
        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('path', payload.path);
        formData.append('nomeFile', payload.nomeFile);

        await axios.post(`${help().linksalvafileadmin}`, formData, config);
    },

    async fetchSituazioneAnnoClientiAudio({commit}, payload){
        const response = await axios.post(`${help().linkSituazioneAnnoClientiAudio}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSituazioneAnnoClientiAudio', response.data);
    },

    async fetchSituazioneAnnoResiAudio({commit}, payload){
        const response = await axios.post(`${help().linkSituazioneAnnoResiAudio}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSituazioneAnnoResiAudio', response.data);
    },

    async eseguiBackup(){
        await axios.get(`${help().linkbackup}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },
};

const mutations = {
    fetchClients(state, payload){
        state.clients = payload;
    },

    fetchRiepilogo(state, payload){
        state.riepilogo = payload;
    },

    ricercaNominativi(state, payload){
        state.ricercaNominativi = payload;
    },

    resetRicercaNominativi(state){
        state.ricercaNominativi = [];
        state.cittaByProvincia = [];
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

    importClients(state, payload)
    {
        state.totImportati = payload;
    },

    importClientsByFiliale(state, payload)
    {
        state.totImportati = payload;
    },

    verificaEsisteDoppione(state, payload) {
        state.listaDoppioni = payload;
    },

    originaliDaInserire(state, payload) {
        state.daInserire = payload;
    },

    inserisciInListaSenzaFiliale(state, payload) {
        state.listaSenzaFiliale = payload;
    },

    modificaClientEaggiornaDoppioni(state, id) {
        state.listaDoppioni = state.listaDoppioni.filter(u => u.id !== id);
        state.daInserire = state.daInserire.filter(u => u.id !== id);
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
