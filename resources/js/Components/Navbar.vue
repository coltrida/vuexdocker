<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar color="indigo darken-4" dark>

            <v-badge
                v-if="getRuolo === 'admin'"
                :content="novitaLogistica"
                :value="novitaLogistica"
                color="green"
                overlap
            >
                <v-badge
                    v-if="getRuolo === 'admin'"
                    :content="novitaCommerciale"
                    :value="novitaCommerciale"
                    color="green"
                    bottom
                    overlap
                >
                <router-link :to="{ name: 'home'}">
                    <v-img
                        @click="resetAvviso"
                        lazy-src="/img/logo-centroudito.png"
                        max-height="50"
                        max-width="150"
                        src="/img/logo-centroudito.png"
                    ></v-img>
                </router-link>
            </v-badge>
            </v-badge>

            <router-link :to="{ name: 'home'}">
                <v-img
                    v-if="getRuolo === 'audio'  || getRuolo === 'call'"
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
                <nav-bar-call v-if="getRuolo === 'call'"/>

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

                <router-link :to="{ name: 'register'}">
                    <v-btn text>
                        Register
                    </v-btn>
                </router-link>
            </div>


        </v-toolbar>
    </v-card>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import NavBarAdmin from "./NavBarAdmin";
    import NavBarAudio from "./NavBarAudio";
    import NavBarCall from "./NavBarCall";
    export default {
        name: "Navbar",

        components: {NavBarCall, NavBarAudio, NavBarAdmin },

        data(){
            return {
                novitaLogistica : 0,
                novitaCommerciale : 0,
            }
        },

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

            resetAvviso(){
                this.novitaLogistica = 0;
                this.novitaCommerciale = 0;
            },
        },

        mounted() {
            if (this.getLogged){
                this.fetchUser(this.getIdUser)
            }

            window.Echo.channel("logisticaChannel").listen(".task-created", e => {
                this.novitaLogistica = 'L';
            });

            window.Echo.channel("provaChannel").listen(".task-created", e => {
                this.novitaCommerciale = 'C';
            });

        }
    }
</script>

<style scoped>

</style>
