<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Filtri />
        <Calendar />
    </div>
</template>

<script>
    import Clients from "./NavBarCall/Clients";
    import Calendar from "./NavBarCall/Calendar";
    import Filtri from "./NavBarCall/Filtri";
    export default {
        name: "NavBarCall",
        components: {Calendar, Clients, Filtri}
    }
</script>

<style scoped>

</style>
