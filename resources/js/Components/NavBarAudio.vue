<template>
    <div class="flex justify-end align-center">
        <Clients />
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
    export default {
        name: "NavBarAudio",
        components: {Medici, Magazzino, Clients, Agenda}
    }
</script>

<style scoped>

</style>
