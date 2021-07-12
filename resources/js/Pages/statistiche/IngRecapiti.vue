<template>
    <div>
        <h2>Ingressi Recapiti</h2>
        <v-row class="my-3">
            <v-col cols="5">
                <h3>Tipologia</h3>
                <v-data-table
                    dense
                    :headers="headers"
                    :items="getRecapitiIngressi"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                </v-data-table>
            </v-col>
            <v-col cols="7">
                <h3>Mesi</h3>
                <v-data-table
                    dense
                    :headers="headers2"
                    :items="getRecapitiIngressiMesi"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                </v-data-table>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                AudioSelected: [],
                switch: 0,
                singleSelect: true,
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'PC', sortable: false, value: 'clientsPc', class: "indigo white--text" },
                    { text: 'CL', sortable: false, value: 'clientsCl', class: "indigo white--text" },
                    { text: 'CLC', sortable: false, value: 'clientsClc', class: "indigo white--text" },
                    { text: 'NORMO', sortable: false, value: 'clientsNormo', class: "indigo white--text" },
                    { text: 'Totale', align: 'start', sortable: false, value: 'clients_count', class: "indigo white--text" },
                ],

                headers2: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'gen', sortable: false, value: 'gen', class: "indigo white--text" },
                    { text: 'feb', sortable: false, value: 'feb', class: "indigo white--text" },
                    { text: 'mar', sortable: false, value: 'mar', class: "indigo white--text" },
                    { text: 'apr', sortable: false, value: 'apr', class: "indigo white--text" },
                    { text: 'mag', sortable: false, value: 'mag', class: "indigo white--text" },
                    { text: 'giu', sortable: false, value: 'giu', class: "indigo white--text" },
                    { text: 'lug', sortable: false, value: 'lug', class: "indigo white--text" },
                    { text: 'ago', sortable: false, value: 'ago', class: "indigo white--text" },
                    { text: 'set', sortable: false, value: 'set', class: "indigo white--text" },
                    { text: 'ott', sortable: false, value: 'ott', class: "indigo white--text" },
                    { text: 'nov', sortable: false, value: 'nov', class: "indigo white--text" },
                    { text: 'dic', sortable: false, value: 'dic', class: "indigo white--text" },
                    { text: 'Totale', align: 'start', sortable: false, value: 'clients_count', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchRecapitiIngresi();
            this.fetchRecapitiIngresiMesi();
        },

        methods:{
            ...mapActions('recapiti', {
                fetchRecapitiIngresi:'fetchRecapitiIngresi',
                fetchRecapitiIngresiMesi:'fetchRecapitiIngresiMesi',
            }),

        },

        computed:{
            ...mapGetters('recapiti', {
                getRecapitiIngressi:'getRecapitiIngressi',
                getRecapitiIngressiMesi:'getRecapitiIngressiMesi',
            }),

        }
    }
</script>

<style scoped>

</style>
