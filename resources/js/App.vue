<template>
    <div class="app">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
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
