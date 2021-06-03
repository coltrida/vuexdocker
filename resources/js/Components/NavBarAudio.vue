<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Magazzino />
    </div>
</template>

<script>
    import Clients from "./NavBarAudio/Clients";
    import Magazzino from "./NavBarAudio/Magazzino";
    export default {
        name: "NavBarAudio",
        components: {Magazzino, Clients}
    }
</script>

<style scoped>

</style>
