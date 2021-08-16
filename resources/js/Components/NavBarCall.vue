<template>
    <div class="flex justify-end align-center">
        <Clients />
        <Filtri />
        <Calendar />
        <Agende />
    </div>
</template>

<script>
    import Clients from "./NavBarCall/Clients";
    import Agende from "./NavBarCall/Agende";
    import Calendar from "./NavBarCall/Calendar";
    import Filtri from "./NavBarCall/Filtri";
    export default {
        name: "NavBarCall",
        components: {Calendar, Clients, Filtri, Agende}
    }
</script>

<style scoped>

</style>
