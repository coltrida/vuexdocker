import help from "../../help";

const state = () => ({
    elementiNuovaProva: [],
    nuovaProvaCreata: {},
    provePassate: [],
    totProva: 0
});

const getters = {
    getElementiNuovaProva(state){
        return state.elementiNuovaProva;
    },

    getNuovaProvaCreata(state){
        return state.nuovaProvaCreata;
    },

    getProvePassate(state){
        return state.provePassate;
    },

    getTotProva(state){
        return state.totProva;
    }
};

const actions = {

    async fetchProvePassate({commit}, idClient){
        const response = await axios.get(`${help().linkprovepassate}`+'/'+idClient, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchProvePassate', response.data);
    },

    async creaNuovaProva({commit}, payload){
        const response = await axios.post(`${help().linknuovaprova}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('creaNuovaProva', response.data);
    },

    async AddEleInNuovaProva({commit}, payload){
        const response = await axios.post(`${help().linkaddeleinprova}`, {
            'prova_id': payload.prova_id,
            'product_id': payload.prodotto.id,
            'orecchio': payload.orecchio,
            'prezzo': payload.prezzolistino,
            'tipologia': payload.tipologia,
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('AddEleInNuovaProva', response.data.data);
    },

    async eliminaEle({commit}, id){
        await axios.delete(`${help().linkeliminaeleinprova}`+'/'+id, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('eliminaEle', id);
    },

    async salvaProvaInCorso({commit}, payload){
        const response = await axios.post(`${help().linksalvaprova}`, {
            'id':payload.id,
            'tot':payload.tot
        }, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('salvaProvaInCorso', response.data);
    },

    async resoProva({commit}, idProva){
        const response = await axios.get(`${help().linkresoprova}`+'/'+idProva, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('resoProva', response.data);
    },

    async salvaFattura({commit}, payload){
        const response = await axios.post(`${help().linksalvafattura}`, payload, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('salvaFattura', response.data);
    },

    async deleteProveSenzaProdotti({commit}, idClient){
        await axios.get(`${help().linkdeleteprovesenzaprodotti}`+'/'+idClient, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
    },
};

const mutations = {
    fetchProvePassate(state, payload){
        state.provePassate = payload;
    },

    creaNuovaProva(state, payload){
        state.nuovaProvaCreata = payload;
    },

    AddEleInNuovaProva(state, payload){
        state.elementiNuovaProva.push(payload);
        state.totProva += parseInt(payload.originalPrezzo);
    },

    eliminaEle(state, id){
        state.totProva -= parseInt(state.elementiNuovaProva.find(u => u.id === id).originalPrezzo);
        state.elementiNuovaProva = state.elementiNuovaProva.filter(u => u.id !== id);
    },

    salvaProvaInCorso(state, payload){
        state.provePassate.unshift(payload);
        state.elementiNuovaProva = [];
    },

    resoProva(state, payload){
        state.provePassate = state.provePassate.filter(u => u.id !== payload.id);
        state.provePassate.unshift(payload);
    },

    salvaFattura(state, payload){
        state.provePassate = state.provePassate.filter(u => u.id !== payload.id);
        state.provePassate.unshift(payload);
    },

    svuotaElementiNuovaProva(state){
        state.elementiNuovaProva = [];
    }

};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
