<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Strutture />
        <Medici />
        <Magazzino />
        <Agenda />
    </div>
</template>

<script>
    import Agenda from "./NavBarAudio/Agenda";
    import Clients from "./NavBarAudio/Clients";
    import Magazzino from "./NavBarAudio/Magazzino";
    import Medici from "./NavBarAudio/Medici";
    import Strutture from "./NavBarAudio/Strutture";
    export default {
        name: "NavBarAudio",
        components: {Medici, Magazzino, Clients, Agenda, Strutture}
    }
</script>

<style scoped>

</style>
