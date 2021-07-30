<template>
    <div>
        <h2>Fatturato Canali</h2>
        <v-container>
                <v-data-table
                    :headers="headers"
                    :items="getCanaliFatturato"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                    <template v-slot:item.percentuale="{ item }">
                            {{ item.prova_fattura_sum_tot ?
                        (item.prova_fattura_sum_tot / getCanaliFatturato.reduce((a, b) => ({prova_fattura_sum_tot: a.prova_fattura_sum_tot + b.prova_fattura_sum_tot})).prova_fattura_sum_tot ).toFixed(2) * 100 + ' %':
                                0 }}
                    </template>

                </v-data-table>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Fatturato', sortable: false, value: 'prova_fattura_sum_tot', class: "indigo white--text" },
                    { text: '%', sortable: false, value: 'percentuale', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchCanaliFatturato();
        },

        methods:{
            ...mapActions('marketing', {
                fetchCanaliFatturato:'fetchCanaliFatturato',
            }),

        },

        computed:{
            ...mapGetters('marketing', {
                getCanaliFatturato:'getCanaliFatturato',
            }),

        }
    }
</script>

<style scoped>

</style>
