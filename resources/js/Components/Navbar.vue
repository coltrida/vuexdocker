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
                <nav-bar-admin></nav-bar-admin>
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
                    {{getUser}}
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
    import { mapGetters } from 'vuex';
    import NavBarAdmin from "./NavBarAdmin";
    export default {
        name: "Navbar",

        components: { NavBarAdmin },

        computed:{
            ...mapGetters('login', {
                getLogged:'getLogged',
                getUser:'getUser',
            })
        },

        methods: {
            logout() {
                this.$store.commit('login/logout');
            },
        }
    }
</script>

<style scoped>

</style>
