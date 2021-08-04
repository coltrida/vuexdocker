<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Magazzino />
        <Agenda />
    </div>
</template>

<script>
    import Agenda from "./NavBarAudio/Agenda";
    import Clients from "./NavBarAudio/Clients";
    import Magazzino from "./NavBarAudio/Magazzino";
    export default {
        name: "NavBarAudio",
        components: {Magazzino, Clients, Agenda}
    }
</script>

<style scoped>

</style>
