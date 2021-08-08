<template>
    <div>
        <h2>Ventaglio Prodotti</h2>

        <v-row class="my-3">
            <v-col cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="getVentaglioAnno"
                        :item-key="getVentaglioAnno.id"
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
                headers: [
                    { text: 'Audioprotesista', align: 'start', sortable: false, value: 'user.name', class: "indigo white--text" },
                    { text: 'Totale', sortable: false, value: 'tot', class: "indigo white--text" },
                    { text: 'M30', sortable: false, value: 'M30', class: "indigo white--text" },
                    { text: 'M50', sortable: false, value: 'M50', class: "indigo white--text" },
                    { text: 'M70', sortable: false, value: 'M70', class: "indigo white--text" },
                    { text: 'M90', sortable: false, value: 'M90', class: "indigo white--text" },
                    { text: 'LIVIO1200AI', sortable: false, value: 'LIVIO1200AI', class: "indigo white--text" },
                    { text: 'LIVIO1600AI', sortable: false, value: 'LIVIO1600AI', class: "indigo white--text" },
                    { text: 'LIVIO2000AI', sortable: false, value: 'LIVIO2000AI', class: "indigo white--text" },
                    { text: 'LIVIO2400AI', sortable: false, value: 'LIVIO2400AI', class: "indigo white--text" },
                    { text: 'LIVIO2400EDGEAILITHIUM', sortable: false, value: 'LIVIO2400EDGEAILITHIUM', class: "indigo white--text" },
                    { text: 'LIVIOAI1200LITHIUM', sortable: false, value: 'LIVIOAI1200LITHIUM', class: "indigo white--text" },
                    { text: 'LIVIOAI1600LITHIUM', sortable: false, value: 'LIVIOAI1600LITHIUM', class: "indigo white--text" },
                    { text: 'LIVIOAI2000LITHIUM', sortable: false, value: 'LIVIOAI2000LITHIUM', class: "indigo white--text" },
                ],

            }
        },

        mounted() {
            this.fetchVentaglioAnno();
        },

        methods:{
            ...mapActions('users', {
                fetchVentaglioAnno:'fetchVentaglioAnno',
            }),

        },

        computed:{
            ...mapGetters('users', {
                getVentaglioAnno:'getVentaglioAnno',
            }),

        }
    }
</script>

<style scoped>

</style>
