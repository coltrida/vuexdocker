import help from '../../help';

const state = () => ({
    token: localStorage.getItem('user-token') || '',
    username: localStorage.getItem('username') || '',
    idUser: localStorage.getItem('idUser') || '',
    messaggio: ''
});

const getters = {
    getLogged: state => !!state.token,

    getIdUser(state){
        return state.idUser;
    },

    getUsername(state){
        return state.username;
    },

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
            localStorage.setItem('username', payload.user.name);
            localStorage.setItem('idUser', payload.user.id);

            state.token = localStorage.getItem('user-token');
            state.username = localStorage.getItem('username');
            state.idUser = localStorage.getItem('idUser');
            state.messaggio = '';
        }else{
            state.messaggio = "Credenziali errate"
        }
    },

    logout(state){
        localStorage.removeItem('user-token');
        localStorage.removeItem('username');
        localStorage.removeItem('idUser');
        state.token = '';
        state.username = '';
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
