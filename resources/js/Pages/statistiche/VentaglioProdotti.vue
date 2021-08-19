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
                ],

            }
        },

        mounted() {
            this.fetchVentaglioAnno();
            this.fetchNomiApa().then(() =>{
                this.inizializzaTabella();
            });
        },

        methods:{
            ...mapActions('users', {
                fetchVentaglioAnno:'fetchVentaglioAnno',
            }),

            ...mapActions('listino', {
                fetchNomiApa:'fetchNomiApa',
            }),

            inizializzaTabella(){
                this.getNomiApa.forEach(ele => {
                    let colonna = {
                        text: ele,
                        sortable: false,
                        value: ele,
                        class: "indigo white--text"
                    };
                    this.headers.push(colonna);
                })
            }

        },

        computed:{
            ...mapGetters('users', {
                getVentaglioAnno:'getVentaglioAnno',
            }),

            ...mapGetters('listino', {
                getNomiApa:'getNomiApa',
            }),

        }
    }
</script>

<style scoped>

</style>
