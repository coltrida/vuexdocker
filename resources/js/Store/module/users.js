import axios from 'axios';

const state = () => ({
    users: []
});

const getters = {
    allusers(state){
        return state.users;
    },
    userbyId(state){
        return (id) => {
            return state.users.find(u => u.id === id);
        }
    }
};

const actions = {
    async fetchUsers({commit}){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        commit('saveallusers', response.data);
    },

    async saveuser({commit}, payload){
        /* qui si scrive la parte di axios per il salvataggio dei dati */
        commit('saveuser', payload);
    },

    async updateuser({commit}, payload){
        /* qui si scrive la parte di axios per il salvataggio dei dati */
        commit('updateuser', payload);
    },

    async deleteUser({commit}, id){
        /* qui si scrive la parte di axios per la cancellazione dei dati */
        commit('deleteUser', id);
    },
};

const mutations = {
    saveallusers(state, payload){
        state.users = payload;
    },

    saveuser(state, payload){
        payload.id = (state.users.length + 1);
        state.users.unshift(payload);
    },

    updateuser(state, payload){
        state.users = state.users.filter(u => u.id !== payload.id);
        state.users.unshift(payload);
    },

    deleteUser(state, id){
        state.users = state.users.filter(u => u.id !== id);
    },
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
