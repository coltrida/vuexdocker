import help from "../../help";

const state = () => ({
    filiali: [],
    filialiPerInserimento: [],
    associazioni: [],
    situazioneMese: [],
    richiestaApparecchi: [],
    daSpedire: [],
    filiale:{}
});

const getters = {
    getFiliali(state){
        return state.filiali;
    },

    getDaSpedire(state){
        return state.daSpedire;
    },

    getFilialiPerInserimento(state){
        return state.filialiPerInserimento;
    },

    getAssociazioni(state){
        return state.associazioni;
    },

    getSituazioneMese(state){
        return state.situazioneMese;
    },

    getRichiestaApparecchi(state){
        return state.richiestaApparecchi;
    },

    getFilialeById(state){
        return state.filiale;
    }

};

const actions = {
    async fetchFiliali({commit}){
        const response = await axios.get(`${help().linkfiliali}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFiliali', response.data);
    },

    async fetchFilialeById({commit}, idFiliale){
        const response = await axios.get(`${help().linkfilialebyid}`+'/'+idFiliale, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFilialeById', response.data);
    },

    async fetchFilialiPerInserimento({commit}, idUser){
        let response = [];
        if (idUser !== 0){
            response = await axios.get(`${help().linkfilialiuser}`+'/'+idUser, {
                headers: {
                    'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
                }
            });
        } else {
            response = await axios.get(`${help().linkfiliali}`, {
                headers: {
                    'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
                }
            });
        }
        commit('fetchFilialiPerInserimento', response.data);
    },

    async fetchFilialiByUser({commit}, idUser){
        const response = await axios.get(`${help().linkfilialiuser}`+'/'+idUser, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchFiliali', response.data);
    },

    async fetchAssociazioni({commit}){
        const response = await axios.get(`${help().linkassociazioniPersonale}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAssociazioni', response.data);
    },

    async fetchSituazioneMese({commit}){
        const response = await axios.get(`${help().linksituazionemese}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSituazioneMese', response.data);
    },

    async fetchAssocia({commit}, payload){
        const response = await axios.post(`${help().linkaggiungiAssociazione}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchAssocia', response.data);
    },

    async fetchDissocia({commit}, id){
        const response = await axios.get(`${help().linkeliminaAssociazione}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchDissocia', response.data);
    },

    async addFiliale({commit}, payload){
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };

        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('nome', payload.nome);
        formData.append('indirizzo', payload.indirizzo);
        formData.append('citta', payload.citta);
        formData.append('telefono', payload.telefono);
        formData.append('cap', payload.cap);
        formData.append('provincia', payload.provincia);
        formData.append('informazioni', payload.informazioni);

        const response = await axios.post(`${help().linkaddfiliale}`, formData, config);
        commit('addFiliale', response.data);
    },

    async eliminaFiliale({commit}, id){
        await axios.delete(`${help().linkfiliali}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaFiliale', id);
    },

    async modificaFiliale({commit}, payload){
        const config = {
            headers: {
                'content-type': 'multipart/form-data' ,
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        };

        let formData = new FormData();
        formData.append('file', payload.fileUp);
        formData.append('nome', payload.nome);
        formData.append('id', payload.id);
        formData.append('indirizzo', payload.indirizzo);
        formData.append('citta', payload.citta);
        formData.append('telefono', payload.telefono);
        formData.append('cap', payload.cap);
        formData.append('provincia', payload.provincia);
        formData.append('informazioni', payload.informazioni);

        const response = await axios.post(`${help().linkmodificafiliale}`, formData, config);
        commit('modificaFiliale', response.data);

    },

    async fetchRichiestaApparecchi({commit}){
        const response = await axios.get(`${help().linkrichiestefiliali}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRichiestaApparecchi', response.data);
    },
};

const mutations = {
    fetchAssociazioni(state, payload){
        state.associazioni = payload;
    },

    fetchSituazioneMese(state, payload){
        state.situazioneMese = payload;
    },

    fetchAssocia(state, payload){
        state.associazioni = payload;
    },

    fetchDissocia(state, payload){
        state.associazioni = payload;
    },

    fetchFiliali(state, payload){
        state.filiali = payload;
    },

    fetchFilialeById(state, payload){
        state.filiale = payload;
    },

    fetchFilialiPerInserimento(state, payload){
        state.filialiPerInserimento = payload;
    },

    addFiliale(state, payload){
        state.filiali.unshift(payload);
    },

    modificaFiliale(state, payload){
        state.filiali.unshift(payload);
    },

    eliminaFiliale(state, id){
        state.filiali = state.filiali.filter(u => u.id !== id);
    },

    fetchRichiestaApparecchi(state, payload){
        state.richiestaApparecchi = payload;
    },

    aggiornaRichiesteFiliali(state, payload) {
        if (state.richiestaApparecchi.length > 0) {
            let richiesteFiliale = state.richiestaApparecchi.find(u => u.id === payload['filiale_id']).richieste;
            let elementi = payload['prodotti'];

            elementi.forEach(ele => {
                state.daSpedire.push(ele);
                if (richiesteFiliale.find(u => u.listino_id === ele.listinoId) ){
                    let richiesta = richiesteFiliale.find(u => u.listino_id === ele.listinoId);
                    richiesta.quantita --;
                    if (richiesta.quantita === 0) {
                        state.richiestaApparecchi.find(u => u.id === payload['filiale_id']).richieste = richiesteFiliale.filter(u => u.listino_id !== ele.listinoId)
                    }
                }
            });
        } else {
            state.daSpedire = payload['prodotti'];
        }

    },

    confermaProdottiToFiliale(state, payload) {
        state.daSpedire = [];
    },

    resetDaSpedire(state){
        state.daSpedire = [];
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
