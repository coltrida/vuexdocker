import help from "../../help";

const state = () => ({
    inFiliale: [],
    inProva: [],
    richiesti: [],
    inArrivo: [],
    immatricolati:[],
    soglie:[]
});

const getters = {
    getInFiliale(state){
        return state.inFiliale;
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

    async fetchInFiliale({commit}, idFiliale){
        const response = await axios.get(`${help().linkfiliali}`+'/'+idFiliale+'/presenti', {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchInFiliale', response.data.data);
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
        commit('fetchRichiesti', response.data.data);
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
        commit('richiediProduct', response.data.data);
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
};

const mutations = {
    fetchInFiliale(state, payload){
        state.inFiliale = payload;
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
        payload.forEach(ele => {
            state.richiesti.push(ele);
        })
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

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
