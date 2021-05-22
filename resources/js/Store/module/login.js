const state = () => ({
    isLogged:false,
    user:{}
});

const getters = {
    getLogged(state){
        return state.isLogged;
    },
};

const actions = {
    async login({commit}){
        const response = await axios.post("");
        commit('login', response.data);
    },
};

const mutations = {
    login(state, payload){
        if (payload){
            state.isLogged = true;
            state.user = payload;
        }else{
            state.isLogged = false;
        }
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
