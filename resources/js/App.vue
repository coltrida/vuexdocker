<template>
    <v-app>
        <Navbar style="border: none"></Navbar>
        <div style="padding: 0 50px; margin-bottom: 50px">
            <router-view></router-view>
        </div>
        <Footer></Footer>

    </v-app>
</template>

<script>
    export default {
        name: "App",
        components: {
            Navbar: () => import('./Components/Navbar'),
            Footer: () => import('./Components/Footer')
        }
    }
</script>

<style scoped>

</style>
