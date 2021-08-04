<template>
    <div class="flex justify-start align-center mt-2">

            <v-row>
                <v-col cols="6">
                    <h2>Richiesta Materiale</h2>
                    <div v-for="filiale in getRichiestaApparecchi" :key="filiale.id">
                        <v-data-table
                            :headers="headers1"
                            dense
                            :items="filiale.products_richiesti"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.listino.nome="{ header }">
                                {{ filiale.nome }}
                            </template>

                            <template v-slot:item.matricola="{ item }">
                                <v-text-field style="transform: translate(0, 12px);" v-model="matricole[item.id]"
                                    outlined
                                    dense
                                ></v-text-field>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-btn
                                    color="green"
                                    dark
                                    @click="assegna(item, filiale)">
                                        ASSEGNA
                                </v-btn>
                            </template>

                        </v-data-table>
                    </div>

                </v-col>

                <v-col cols="6" v-if="getImmatricolati.length > 0">
                    <h2>Da Spedire</h2>
                        <v-data-table
                            dense
                            :headers="headers2"
                            :items="getImmatricolati"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.actions="{ header }">
                                <v-btn color="green" dark @click="invia()">
                                    {{nomeFiliale}}
                                </v-btn>
                            </template>

                        </v-data-table>
                </v-col>
            </v-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "homeAmm",

        data(){
            return {
                nomeFiliale:'',
                matricole:[],
                elemento:{},
                valori:{},
                headers1: [
                    {text: 'Nome', width:180, value: 'listino.nome', sortable: false, class: "indigo white--text"},
                    {text: 'Fornitore', width:180,  value: 'listino.fornitore.nome', sortable: false, class: "indigo white--text"},
                    {text: 'Matricola', width:180,  value: 'matricola', sortable: false, class: "indigo white--text"},
                    { text: 'Invia', width:120, value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers2: [
                    {text: 'Matricola', value: 'matricola', sortable: false, class: "indigo white--text"},
                    {text: 'listino',  value: 'listino.nome', sortable: false, class: "indigo white--text"},
                    {text: 'fornitore', value: 'listino.fornitore.nome', sortable: false, class: "indigo white--text"},
                    { text: 'Invia', value: 'actions', sortable: false, class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchRichiestaApparecchi();

            window.Echo.channel("logisticaChannel").listen(".task-created", e => {
               this.fetchRichiestaApparecchi();
            });
        },

        methods: {
            ...mapActions('filiali', {
                fetchRichiestaApparecchi: 'fetchRichiestaApparecchi',
            }),

            ...mapActions('product', {
                switchImmatricolato: 'switchImmatricolato',
                fetchImmatricolati: 'fetchImmatricolati',
                assegnaProdottiMagazzino: 'assegnaProdottiMagazzino',
            }),

            assegna(item, filiale){
                if (!this.nomeFiliale){
                    this.nomeFiliale = filiale.nome
                }
                this.switchImmatricolato({
                    idProduct: item.id,
                    matricola: this.matricole[item.id]
                }).then(() => {
                    this.fetchImmatricolati(item.filiale_id);
                    this.fetchRichiestaApparecchi();
                });
            },

            invia(){
                this.assegnaProdottiMagazzino(this.getImmatricolati).then(() => {
                    this.nomeFiliale = '';
                });
            }
        },

        computed: {
            ...mapGetters('filiali', {
                getRichiestaApparecchi: 'getRichiestaApparecchi',
            }),

            ...mapGetters('product', {
                getImmatricolati: 'getImmatricolati',
            }),

        },
    }
</script>

<style scoped>

</style>
