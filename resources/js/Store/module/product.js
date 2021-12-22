import help from "../../help";

const state = () => ({
    inCentrale: [],
    inFiliale: [],
    inProva: [],
    richiesti: [],
    inArrivo: [],
    immatricolati:[],
    soglie:[],
    riepilogoMagazzini: [],
    riepilogoInCentrale: []
});

const getters = {
    getInCentrale(state){
        return state.inCentrale;
    },

    getRiepilogoInCentrale(state){
        return state.riepilogoInCentrale;
    },

    getInFiliale(state){
        return state.inFiliale;
    },

    getRiepilogoMagazzini(state){
        return state.riepilogoMagazzini;
    },

    getSoglie(state){
        return state.soglie;
    },

    getInProva(state){
        return state.inProva;
    },

    getRichiesti(state){
        return state.richiesti;
    },

    getInArrivo(state){
        return state.inArrivo;
    },

    getImmatricolati(state){
        return state.immatricolati;
    },
};

const actions = {

    async fetchInCentrale({commit}){
        const response = await axios.get(`${help().linkprodottiincentrale}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInCentrale', response.data.data);
    },

    async fetchRiepilogoInCentrale({commit}){
        const response = await axios.get(`${help().linkriepilogoprodottiincentrale}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRiepilogoInCentrale', response.data);
    },

    async fetchInFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/presenti', {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInFiliale', response.data.data);
    },

    async addProdottoInCentrale({commit}, payload){
        const response = await axios.post(`${help().linkaddprodottoincentrale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('addProdottoInCentrale', response.data.data);
    },

    async fetchRiepilogoMagazzini({commit}){
        const response = await axios.get(`${help().linkriepilogoMagazzini}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRiepilogoMagazzini', response.data);
    },

    async fetchSoglie({commit}, idFiliale){
        const response = await axios.get(`${help().linksoglie}`+'/'+idFiliale, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchSoglie', response.data);
    },

    async fetchInFilialeFornitore({commit}, payload){
        const response = await axios.get(`${help().linkfilialefornitore}`+'/'+payload.idFiliale+'/'+payload.idFornitore, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInFiliale', response.data.data);
    },

    async fetchInProva({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/inProva', {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInProva', response.data.data);
    },

    async fetchRichiesti({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/richiesti', {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchRichiesti', response.data);
    },

    async fetchInArrivo({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/inArrivo', {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInArrivo', response.data.data);
    },

    async fetchImmatricolati({commit}, idFiliale){
        const response = await axios.get(`${help().linkimmatricolati}`+'/'+idFiliale, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchImmatricolati', response.data);
    },

    async richiediProduct({commit}, payload){
        const response = await axios.post(`${help().linkrichiestaprodotti}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('richiediProduct', response.data);
    },

    async switchInProva({commit}, payload){
        await axios.post(`${help().linkproductswitchinprova}`, {
            'idProduct': payload.idProduct,
            'user_id': payload.user_id,
            'client_id': payload.client_id,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },

    async switchImmatricolato({commit}, payload){
        await axios.post(`${help().linkswitchimmatricolato}`, {
            'idProduct': payload.idProduct,
            'matricola': payload.matricola,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },

    async switchRimuoviDallaProva({commit}, id){
        await axios.get(`${help().linkproductswitchrimuovidallaprova}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },

    async eliminaRichiesta({commit}, id){
        await axios.delete(`${help().linkproductrimuovirichiesta}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaRichiesta', id);
    },

    async assegnaProdottiMagazzino({commit}, payload){
         await axios.post(`${help().linkassegnaprodottimagazzino}`, {
             'prodotti':payload
         }, {
             headers: {
                 'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
             }
         });
         commit('assegnaProdottiMagazzino');
    },

    async switchArrivato({commit}, id){
        const response = await axios.get(`${help().linkswitcharrivato}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('switchArrivato', response.data.data);
    },

    async fetchServizi({commit}){
        const response = await axios.get(`${help().linkservizi}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInFiliale', response.data.data);
    },

    async assegnaProdottiToFiliale({commit}, payload){
        await axios.post(`${help().linkassegnaprodottitofiliale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('assegnaProdottiToFiliale', payload);
        commit('filiali/aggiornaRichiesteFiliali', payload, {root: true});
    },

    async assegnaProdottiFilialeInAnticipo({commit}, payload){
        await axios.post(`${help().linkassegnaprodottitofiliale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('assegnaProdottiToFiliale', payload);
        commit('filiali/aggiornaRichiesteFiliali', payload, {root: true});
    },

    async confermaProdottiToFiliale({commit}, payload){
        await axios.post(`${help().linkconfermaprodottitofiliale}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('filiali/confermaProdottiToFiliale', null, {root: true});
    },
};

const mutations = {
    fetchInCentrale(state, payload){
        state.inCentrale= payload;
    },

    fetchRiepilogoInCentrale(state, payload){
        state.riepilogoInCentrale= payload;
    },

    addProdottoInCentrale(state, payload){
        state.inCentrale.unshift(payload);
    },

    fetchInFiliale(state, payload){
        state.inFiliale = payload;
    },

    fetchRiepilogoMagazzini(state, payload){
        state.riepilogoMagazzini = payload;
    },

    fetchSoglie(state, payload){
        state.soglie = payload;
    },

    fetchInProva(state, payload){
        state.inProva = payload;
    },

    fetchRichiesti(state, payload){
        state.richiesti = payload;
    },

    fetchInArrivo(state, payload){
        state.inArrivo = payload;
    },

    fetchImmatricolati(state, payload){
        state.immatricolati = payload;
    },

    richiediProduct(state, payload){
        state.richiesti.push(payload);
    },

    eliminaRichiesta(state, id) {
        state.richiesti = state.richiesti.filter(u => u.id !== id);
    },

    assegnaProdottiMagazzino(state) {
        state.immatricolati = [];
    },

    switchArrivato(state, payload) {
        state.inArrivo = state.inArrivo.filter(u => u.id !== payload.id);
        state.inFiliale.unshift(payload);
    },

    resetRiepilogoCentrale(state) {
        state.riepilogoInCentrale = [];
    },

    assegnaProdottiToFiliale(state, payload) {
        let elementi = payload['prodotti'];

        elementi.forEach(ele => {
            state.inCentrale = state.inCentrale.filter(u => u.id !== ele.id);
        })
    },

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
