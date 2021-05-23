import help from '../../help';

const state = () => ({
    token: localStorage.getItem('user-token') || '',
    user: localStorage.getItem('user') || '',
    messaggio: ''
});

const getters = {
    getLogged: state => !!state.token,

    getUser: state => !!state.user,

    getMessaggio(state){
        return state.messaggio;
    }
};

const actions = {
    async login({commit}, payload){
        const response = await axios.post(`${help().linklogin}`, {
            'email': payload.email,
            'password': payload.password
        });
        commit('login', response.data);
    },

    async logout({commit}){
        await axios.get(`${help().linklogout}`);
        commit('logout');
    },

    async resetMessaggio({commit}){
        commit('resetMessaggio');
    },
};

const mutations = {
    login(state, payload){

        if (payload.stato === 'successo'){
            localStorage.setItem('user-token', payload.token);
            localStorage.setItem('user', payload.user);

            state.token = localStorage.getItem('user-token');
            state.user = localStorage.getItem('user');
            state.messaggio = '';
        }else{
            state.messaggio = "Credenziali errate"
        }
    },

    logout(state){
        localStorage.removeItem('user-token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = '';
    },

    resetMessaggio(state){
        state.messaggio = '';
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
