import help from "../../help";

const state = () => ({
    loggings: [],
    logFile: []
});

const getters = {
    getLogging(state){
        return state.loggings;
    },

    getLogFile(state){
        return state.logFile;
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

    async fetchLogFile({commit}){
        const response = await axios.get(`${help().linklogfile}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('fetchLogFile', response.data);
    },

    async pulisciLogFile({commit}){
        await axios.get(`${help().linkpuliscilogfile}`, {
            headers: {
                'Authorization': `Bearer `+ sessionStorage.getItem('user-token')
            }
        });
        commit('pulisciLogFile');
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

    fetchLogFile(state, payload){
        state.logFile = payload;
    },

    pulisciLogFile(state){
        state.logFile = [0, '']
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
