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

            <div v-if="getLogged">
                <v-btn text @click="logout">
                    Logout
                </v-btn>
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
    export default {
        name: "Navbar",

        computed:{
            ...mapGetters('login', {
                getLogged:'getLogged'
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
