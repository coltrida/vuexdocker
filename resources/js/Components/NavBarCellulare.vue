<template>
    <div>
        <div v-if="getLogged">
            <nav-bar-cellulare-admin v-if="getRuolo === 'admin'"/>
            <nav-bar-cellulare-audio v-if="getRuolo === 'audio' || getRuolo === 'amministrazione'"/>
            <nav-bar-cellulare-call v-if="getRuolo === 'call'"/>

            <v-list-item>
                <v-list-item-title @click="logout">Logout</v-list-item-title>
            </v-list-item>
        </div>
        <div v-else>
            <router-link :to="{ name: 'login'}">
                <v-list-item>
                    <v-list-item-title>Login</v-list-item-title>
                </v-list-item>
            </router-link>

            <router-link :to="{ name: 'register'}">
                <v-list-item>
                    <v-list-item-title>Register</v-list-item-title>
                </v-list-item>
            </router-link>
        </div>

    </div>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import NavBarCellulareAdmin from "./NavBarCellulareAdmin";
    import NavBarCellulareCall from "./NavBarCellulareCall";
    import NavBarCellulareAudio from "./NavBarCellulareAudio";
    export default {
        name: "NavBarCellulare",
        components: {NavBarCellulareAudio, NavBarCellulareAdmin, NavBarCellulareCall},
        computed:{
            ...mapGetters('login', {
                getLogged:'getLogged',
                getUsername:'getUsername',
                getRuolo:'getRuolo',
                getIdUser:'getIdUser',
            })
        },

        methods: {
            ...mapActions('login', {
                fetchUser: 'fetchUser',
            }),

            logout() {
                this.$store.commit('login/logout');
                this.$router.push({ name: 'home' });
            },
        },


    }
</script>

<style scoped>

</style>
