<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar color="indigo darken-4" dark>

            <router-link :to="{ name: 'home'}">
                <v-img
                    lazy-src="/img/logo-centroudito.png"
                    max-height="50"
                    max-width="150"
                    src="/img/logo-centroudito.png"
                ></v-img>
            </router-link>

            <v-spacer></v-spacer>

            <div v-if="getLogged" class="flex justify-end align-center">

                <nav-bar-admin v-if="getRuolo === 'admin'"/>
                <nav-bar-audio v-if="getRuolo === 'audio' || getRuolo === 'amministrazione'"/>

                <v-btn text @click="logout" v-if="getRuolo === 'audio' || getRuolo === 'amministrazione'">
                    Agenda
                </v-btn>

                <v-btn text @click="logout" color="red">
                    Logout
                </v-btn>
                <v-chip
                    class="ma-2"
                    color="primary"
                    label
                >
                    <v-icon left>
                        mdi-account-circle-outline
                    </v-icon>
                    {{getUsername}}
                </v-chip>
            </div>
            <div v-else>
                <router-link :to="{ name: 'login'}">
                    <v-btn text>
                        Login
                    </v-btn>
                </router-link>

                <v-btn text>
                    Register
                </v-btn>
            </div>


        </v-toolbar>
    </v-card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import NavBarAdmin from "./NavBarAdmin";
    import NavBarAudio from "./NavBarAudio";
    export default {
        name: "Navbar",

        components: {NavBarAudio, NavBarAdmin },

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

        mounted() {
            if (this.getLogged){
                this.fetchUser(this.getIdUser)
            }
            /*window.onunload = () => {
                localStorage.removeItem('user-token');
                localStorage.removeItem('username');
                localStorage.removeItem('idUser');
                // Clear the local storage
                window.username.clear();
                window.idUser.clear();
            };*/

               /* window.onbeforeunload = function (e) {
                    window.onunload = function () {
                        localStorage.removeItem('user-token');
                        localStorage.removeItem('username');
                        localStorage.removeItem('idUser');
                    };
                    return undefined;
                };

            window.onbeforeunload = function (e) {
                window.onunload = function () {
                    window.localStorage.isMySessionActive = "false";
                };
                return undefined;
            };

            window.onload = function () {
                window.localStorage.isMySessionActive = "true";
            };*/
        }
    }
</script>

<style scoped>

</style>
