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
                            v-model="nuovaProva.prodotto"
                            item-text="nomeMatricola"
                            :items="getInFiliale"
                            label="prodotti"
                            return-object
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

                    <v-col>
                        <v-btn color="primary" dark @click="inserisciInProva">
                            In Prova
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="6">
                        <h3>Nuova Prova</h3>
                        <v-data-table
                            :headers="headerNuovaProva"
                            :items="elementiInProva"
                            :items-per-page="10"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                        </v-data-table>
                    </v-col>
                    <v-col cols="6">
                        <h3>Prove</h3>
                        <v-data-table
                            :headers="headerProve"
                            :items="proveClient.prove"
                            :items-per-page="10"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                        </v-data-table>
                    </v-col>
                </v-row>

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
                elementiInProva: [],
                headerProve: [
                    { text: 'Data', align: 'start', sortable: false, value: 'inizio_prova', class: "indigo white--text" },
                    { text: 'Stato', sortable: false, value: 'stato', class: "indigo white--text" },
                ],
                headerNuovaProva: [
                    { text: 'Fornitore', align: 'start', sortable: false, value: 'fornitore_id', class: "indigo white--text" },
                    { text: 'Prodotto', sortable: false, value: 'prodotto.nome', class: "indigo white--text" },
                    { text: 'Prezzo', sortable: false, value: 'prodotto.prezzolistino', class: "indigo white--text" },
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

            ...mapActions('product', {
                fetchInFilialeFornitore:'fetchInFilialeFornitore',
            }),

            cancella(){
                this.$emit('chiudiProve')
            },

            caricaProdotti(){
                if (this.nuovaProva.fornitore_id){
                    this.nuovaProva.prezzolistino = '0';
                    this.fetchInFilialeFornitore({
                        'idFiliale': this.proveClient.filiale_id,
                        'idFornitore': this.nuovaProva.fornitore_id
                    });
                }
            },

            caricaPrezzoProdotto(){
                this.nuovaProva.prezzolistino = this.nuovaProva.prodotto.prezzolistino;
            },

            inserisciInProva(){
                this.elementiInProva.unshift(this.nuovaProva);
                let posizione = this.getInFiliale.map(function(ele) { return ele.id; }).indexOf(this.nuovaProva.prodotto.id);
                this.getInFiliale.splice(posizione, 1);
                this.nuovaProva.prezzolistino = 0;
            }
        },

        computed: {
            ...mapGetters('fornitori', {
                getFornitori: 'getFornitori',
            }),

            ...mapGetters('product', {
                getInFiliale: 'getInFiliale',
            }),
        },
    }
</script>

<style scoped>

</style>
