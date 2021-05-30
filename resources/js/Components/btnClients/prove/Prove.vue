<template>
    <div class="text-center">
        <div class="row">
            <h2>{{proveClient.nome}} {{proveClient.cognome}}</h2>
            <v-btn color="primary" dark @click="cancella" class="mt-2">
                Chiudi
            </v-btn>
            <v-container>

                <v-row>
                    <v-col
                        cols="3"
                        sm="3"
                    >
                        <v-select
                            @change="caricaProdotti()"
                            v-model="nuovaProva.fornitore_id"
                            item-value="id"
                            item-text="nome"
                            :items="getFornitori"
                            label="fornitore"
                        ></v-select>
                    </v-col>

                    <v-col
                        cols="3"
                        sm="3"
                    >
                        <v-select
                            @change="caricaPrezzoProdotto()"
                            v-model="nuovaProva.listino_id"
                            item-value="id"
                            item-text="nome"
                            :items="getListino"
                            label="listino"
                        ></v-select>
                    </v-col>

                    <v-col
                        cols="3"
                        sm="3"
                    >
                        <v-text-field
                            v-model="nuovaProva.prezzolistino"
                            label="prezzo"
                        ></v-text-field>
                    </v-col>

                </v-row>

                <v-data-table
                    :headers="headerProve"
                    :items="proveClient.prove"
                    :items-per-page="10"
                    class="elevation-1 mt-3"
                    hide-default-footer
                >

                </v-data-table>

            </v-container>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Prove",

        props: ['proveClient'],

        data(){
            return {
                nuovaProva: {
                    prezzolistino:'0'
                },
                headerProve: [
                    { text: 'Data', align: 'start', sortable: false, value: 'inizio_prova', class: "indigo white--text" },
                    { text: 'Stato', sortable: false, value: 'stato', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchFornitori();
        },

        methods: {
            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('listino', {
                fetchListinoFromFornitore:'fetchListinoFromFornitore',
                fetchEleListino:'fetchEleListino',
            }),

            cancella(){
                this.$emit('chiudiProve')
            },

            caricaProdotti(){
                if (this.nuovaProva.fornitore_id){
                    this.nuovaProva.prezzolistino = '0';
                    this.fetchListinoFromFornitore(this.nuovaProva.fornitore_id);
                }
            },

            caricaPrezzoProdotto(){
                if (this.nuovaProva.listino_id){
                    this.fetchEleListino(this.nuovaProva.listino_id).then(() => {
                        this.nuovaProva.prezzolistino = this.getEleListino.prezzolistino;
                    });

                }
            }
        },

        computed: {
            ...mapGetters('fornitori', {
                getFornitori: 'getFornitori',
            }),

            ...mapGetters('listino', {
                getListino: 'getListino',
                getEleListino: 'getEleListino',
            }),
        },
    }
</script>

<style scoped>

</style>
