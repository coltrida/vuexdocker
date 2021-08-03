<template>
    <v-tabs class="mt-3">
        <v-tab>Logistica</v-tab>
        <v-tab-item>
            <v-card flat>
                <home-amm />
            </v-card>
        </v-tab-item>
        <v-tab>Commerciale</v-tab>
        <v-tab-item>
            <v-card flat>
                <home-admin />
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import HomeAmm from "./homeAmm";
    import HomeAdmin from "./homeAdmin";
    export default {
        name: "SuperHome",
        components: {HomeAdmin, HomeAmm}
    }
</script>

<style scoped>

</style>
