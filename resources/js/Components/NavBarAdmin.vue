<template>
    <div class="flex justify-end align-center">
        <clients/>
        <personale/>
        <magazzini/>
        <listino/>
        <strutture/>
        <marketing/>
        <gestione/>
        <statistiche/>
    </div>
</template>

<script>
    import Listino from './NavBarAdmin/Listino'
    import Strutture from "./NavBarAdmin/Strutture";
    import Marketing from "./NavBarAdmin/Marketing";
    import Clients from "./NavBarAdmin/Clients";
    import Statistiche from "./NavBarAdmin/Statistiche";
    import Personale from "./NavBarAdmin/Personale";
    import Magazzini from "./NavBarAdmin/Magazzini";
    import Gestione from "./NavBarAdmin/Gestione";
    export default {
        name: "NavBarAdmin",

        components:{Gestione, Magazzini, Personale, Statistiche, Clients, Marketing, Strutture, Listino }
    }
</script>

<style scoped>

</style>
