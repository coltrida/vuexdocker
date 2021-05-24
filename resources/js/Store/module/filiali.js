import help from "../../help";

const state = () => ({
    filiali: []
});

const getters = {
    getFiliali(state){
        return state.filiali;
    },
};

const actions = {

    async fetchFiliali({commit}){
        const response = await axios.get(`${help().linkfiliali}`);
        commit('fetchFiliali', response.data);
    },
};

const mutations = {
    fetchFiliali(state, payload){
        state.filiali = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
