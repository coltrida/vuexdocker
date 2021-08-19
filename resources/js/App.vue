<template>
    <v-app>
        <div v-if="!$vuetify.breakpoint.xs">
            <Navbar style="border: none"></Navbar>
            <div style="padding: 0 50px; margin-bottom: 50px">
                <router-view></router-view>
            </div>
            <Footer></Footer>
        </div>
        <div v-else>
                <v-app-bar
                    color="indigo darken-4"
                    dark
                >
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                    <v-spacer></v-spacer>

                    <router-link :to="{ name: 'home'}">
                        <v-img
                            lazy-src="/img/logo-centroudito.png"
                            max-height="50"
                            max-width="150"
                            src="/img/logo-centroudito.png"
                        ></v-img>
                    </router-link>

                </v-app-bar>

                <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    left
                    temporary
                >
                    <v-list
                        nav
                        dense
                    >
                        <v-list-item-group
                            v-model="group"
                            active-class="deep-purple--text text--accent-4"
                        >

                            <nav-bar-cellulare />

                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>

                <v-card-text>
                    <router-view></router-view>
                </v-card-text>
            <Footer></Footer>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: "App",
        components: {
            NavBarCellulare : () => import('./Components/NavBarCellulare'),
            Navbar: () => import('./Components/Navbar'),
            Footer: () => import('./Components/Footer')
        },
        data(){
            return{
                drawer: false,
                group: null,
            }
        },

        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>

<style scoped>

</style>
