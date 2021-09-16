<template>
    <div>
        <div class="flex justify-start align-center">
            <div><h2>Rate Clienti</h2></div>
        </div>

        <rate-lista :listarate="rateSelezione"
                    :dialog-pro="dialogRate"
                    v-if="dialogRate"
                    @chiudiRate="chiudiRate"
        />

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Ricerca"
            single-line
            hide-details
        ></v-text-field>
            <v-data-table
                :headers="headers"
                :items="getClientsDaSaldare"
                :items-per-page="10"
                :search="search"
                class="elevation-1 mt-3"
            >

                <template v-slot:item.rata="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <router-link :to="{ name: 'rataInserisci', params: { fatturaId: item.id }}">
                                <v-icon
                                    color="green"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-plus-box-outline
                                </v-icon>
                            </router-link>
                        </template>
                        <span>Inserisci Pagamento</span>
                    </v-tooltip>
                </template>

                <template v-slot:item.rate="{ item }">
                        <v-icon
                            @click="seleziona(item.rate)"
                            color="green"
                            dark
                            small
                        >
                            mdi-format-list-bulleted-square
                        </v-icon>
                </template>

            </v-data-table>
    </div>

</template>

<script>
    import RateLista from "./RateLista";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "ClientsFiliale",
        components: { RateLista },
        props: ['idAudio'],
        data() {
            return {
                dialogRate: false,
                rateSelezione: [],
                search: '',
                headers: [
                    {text: 'Ultima Rata', width: 130, align: 'start', value: 'ultima_rata', class: "indigo white--text"},
                    {text: 'Data Fattura', width: 130, value: 'data_fattura', class: "indigo white--text"},
                    {text: 'Nome', width: 230, value: 'prova.client.fullname', class: "indigo white--text"},
                    {text: 'Totale Fattura', width: 150, value: 'tot_fattura', class: "indigo white--text"},
                    {text: 'Al Saldo', width: 150, value: 'al_saldo', class: "indigo white--text"},
                    {text: 'Rate', width: 150, value: 'rate', class: "indigo white--text"},
                    {text: 'Ins. Rata', width: 150, value: 'rata', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
              this.fetchClientsDaSaldare(this.idAudio);
        },

        methods: {
            ...mapActions('rate', {
                fetchClientsDaSaldare: 'fetchClientsDaSaldare',
            }),

            seleziona(items){
                this.dialogRate = true;
                this.rateSelezione = items;
            },

            chiudiRate(){
                this.dialogRate = false;
                this.rateSelezione = [];
            }

        },

        computed: {
            ...mapGetters('rate', {
                getClientsDaSaldare: 'getClientsDaSaldare',
            //    getClientsSaldati: 'getClientsSaldati',
            }),

            /*...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),*/

        },
    }
</script>

<style scoped>

</style>
