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

            <router-link :to="{ name: 'login'}">
                <v-btn text>
                    Login
                </v-btn>
            </router-link>

            <v-btn text>
                Register
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
