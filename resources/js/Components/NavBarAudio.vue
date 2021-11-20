<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Strutture />
        <Marketing />
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
    import Marketing from "./NavBarAudio/Marketing";
    export default {
        name: "NavBarAudio",
        components: {Marketing, Medici, Magazzino, Clients, Agenda, Strutture}
    }
</script>

<style scoped>

</style>
