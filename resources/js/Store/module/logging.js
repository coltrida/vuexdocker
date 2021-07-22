import help from "../../help";

const state = () => ({
    loggings: []
});

const getters = {
    getLogging(state){
        return state.loggings;
    },
};

const actions = {

    async fetchLoggings({commit}){
        const response = await axios.get(`${help().linklogging}`);
        commit('fetchLoggings', response.data.data);
    },
};

const mutations = {
    fetchLoggings(state, payload){
        state.loggings = payload;
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
