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
        const response = await axios.get(`${help().linklogging}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchLoggings', response.data.data);
    },

    async resetDati(){
        await axios.get(`${help().linkresetspecial}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
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
