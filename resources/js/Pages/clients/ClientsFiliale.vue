<template>
    <div>
        <div class="flex justify-start align-center mt-2">
            <div v-if="showClients"><h2>Clienti</h2></div>

            <messaggio
                v-if="textMessaggio"
                :textMessaggio="textMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>

            <audiogramma
                v-if="showAudiogramma"
                :audiogrammaClient="audiogrammaClient"
                @chiudiAudiogramma = "chiudiAudiogramma"
            ></audiogramma>

            <appuntamento
                v-if="showAppuntamento"
                :appuntamentoClient="appuntamentoClient"
                @chiudiAppuntamento = "chiudiAppuntamento"
            />

            <prove
                v-if="showProve"
                :proveClient="proveClient"
                @chiudiProve = "chiudiProve"
            ></prove>

            <div class="ml-4" v-if="showClients">
                <router-link :to="{ name: 'clientsInserisci'}">
                    <v-btn dark color="indigo">Inserisci</v-btn>
                </router-link>
            </div>
        </div>

        <v-container v-if="showClients">
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Ricerca"
                single-line
                hide-details
            ></v-text-field>

            <v-data-table
                :headers="headers"
                :items="getClients"
                :search="search"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="red"
                                small
                                @click="elimina(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Elimina</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <router-link :to="{ name: 'clientsInserisci', params: { clientId: item.id }}">
                                <v-icon
                                    color="blue"
                                    small
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-pencil
                                </v-icon>
                            </router-link>
                        </template>
                        <span>Modifica</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="green"
                                small
                                @click="audiogramma(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-headphones-settings
                            </v-icon>
                        </template>
                        <span>Audiogramma</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="purple"
                                small
                                @click="appuntamento(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-calendar-edit
                            </v-icon>
                        </template>
                        <span>Appuntamento</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="orange"
                                small
                                @click="prove(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-ear-hearing
                            </v-icon>
                        </template>
                        <span>Prova</span>
                    </v-tooltip>
                </template>

            </v-data-table>

        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Messaggio from "../../Components/Messaggio";
    import Audiogramma from "../../Components/btnClients/audiogramma/Audiogramma";
    import Prove from "../../Components/btnClients/prove/Prove";
    import Appuntamento from "../../Components/btnClients/appuntamento/Appuntamento";

    export default {
        name: "ClientsFiliale",
        components: {Prove, Audiogramma, Messaggio, Appuntamento},
        data() {
            return {
                showClients: true,
                showProve: false,
                showAudiogramma: false,
                textMessaggio: null,
                openAudiogramma: false,
                showAppuntamento: false,
                audiogrammaClient: {},
                appuntamentoClient: {},
                proveClient: {},
                search: '',
                listino: {},
                headers: [
                    {text: 'Actions', width: 170, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Cognome', align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', value: 'citta', class: "indigo white--text"},
                    {text: 'cap', value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', value: 'telefono', class: "indigo white--text"},
                    {text: 'tipologia', width: 100, value: 'tipologia', class: "indigo white--text"},
                    {text: 'fonte', width: 200, value: 'marketing', class: "indigo white--text"},
                    {text: 'user', value: 'user', class: "indigo white--text"},

                ],
            }
        },

        mounted() {
            this.fetchClientsFiliale(this.rottaIdFiliale);
        },

        methods: {
            ...mapActions('clients', {
                fetchClientsFiliale: 'fetchClientsFiliale',
                addClient: 'addClient',
                eliminaClient: 'eliminaClient',
            }),

            elimina(id) {
                this.eliminaClient(id)
            },

            cancellaMessaggio(){
                this.textMessaggio = '';
            },

            audiogramma(client){
                this.showProve = false;
                this.showAudiogramma = true;
                this.showAppuntamento = false;
                this.showClients = false;
                this.audiogrammaClient = client;
            },

            appuntamento(client){
                this.showProve = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.showAppuntamento = true;
                this.appuntamentoClient = client;
            },

            prove(client){
                this.showProve = true;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = false;
                this.proveClient = client;
            },

            chiudiAudiogramma(){
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.audiogrammaUser = {};
            },

            chiudiAppuntamento(){
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = true;
                this.appuntamentoClient = {};
            },

            chiudiProve(){
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.proveClient = {};
            },
        },

        computed: {
            ...mapGetters('clients', {
                getClients: 'getClients',
            }),

            rottaIdFiliale(){
                return this.$route.params.filialeId ? this.$route.params.filialeId : null;
            },
        },
    }
</script>

<style scoped>

</style>
