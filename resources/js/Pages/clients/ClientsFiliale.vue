<template>
    <div class="pb-10">
        <div class="flex justify-start align-center mt-2">
            <div v-if="showClients"><h2>Clienti - {{getFilialeById.nome}}</h2></div>

            <messaggio
                v-if="getClientMessaggio"
                :textMessaggio="getClientMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>

            <messaggioelimina
                v-if="showElimina"
                :idElimina="idElimina"
                :nomeElimina="nomeElimina"
                :cognomeElimina="cognomeElimina"
                @cancellaMessaggioElimina = "cancellaMessaggioElimina"
            ></messaggioelimina>

            <!--<v-alert type="info" v-if="getClientMessaggio">
                <v-row align="center">
                    <v-col class="grow">
                        {{ getClientMessaggio }}
                    </v-col>
                    <v-col class="shrink">
                        <v-btn @click="reset">Chiudi</v-btn>
                    </v-col>
                </v-row>
            </v-alert>-->

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

            <documenti
                v-if="showDocumenti"
                :documentiClient="documentiClient"
                @chiudiDocumenti="chiudiDocumenti"
            ></documenti>

            <recalls
                v-if="showRecalls"
                :recallsClient="recallsClient"
                @chiudiRecalls="chiudiRecalls"
            ></recalls>

            <div class="ml-4" v-if="showClients">
                <router-link :to="{ name: 'clientsInserisci'}">
                    <v-btn dark color="indigo">Inserisci</v-btn>
                </router-link>
            </div>
        </div>

        <div v-if="showClients">

            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>

            <div v-else>
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
                                @click="elimina(item.id, item.nome, item.cognome)"
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

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="light-blue darken-4"
                                small
                                @click="documenti(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-file-document
                            </v-icon>
                        </template>
                        <span>Documenti</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="green"
                                small
                                @click="recalls(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-phone
                            </v-icon>
                        </template>
                        <span>Recalls</span>
                    </v-tooltip>
                </template>


            </v-data-table>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Messaggio from "../../Components/Messaggio";
    import Audiogramma from "../../Components/btnClients/audiogramma/Audiogramma";
    import Prove from "../../Components/btnClients/prove/Prove";
    import Documenti from "../../Components/btnClients/documenti/Docunenti";
    import Recalls from "../../Components/btnClients/recalls/Recalls";
    import Appuntamento from "../../Components/btnClients/appuntamento/Appuntamento";
    import Messaggioelimina from "../../Components/btnClients/elimina/Messaggioelimina";

    export default {
        name: "ClientsFiliale",
        components: {Messaggioelimina, Prove, Documenti, Audiogramma, Messaggio, Appuntamento, Recalls},
        data() {
            return {
                carica: false,
                showElimina: false,
                showClients: true,
                showProve: false,
                showDocumenti: false,
                showRecalls: false,
                showAudiogramma: false,
                textMessaggio: null,
                openAudiogramma: false,
                showAppuntamento: false,
                audiogrammaClient: {},
                appuntamentoClient: {},
                proveClient: {},
                documentiClient: {},
                recallsClient: {},
                search: '',
                idElimina: '',
                nomeElimina: '',
                cognomeElimina: '',
                listino: {},
                headers: [
                    {text: 'Actions', width: 170, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Cognome', width: 160, align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', width: 160, value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', width: 250, value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', width: 150, value: 'citta', class: "indigo white--text"},
                    {text: 'cap', width: 70, value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', width: 130, value: 'telefono', class: "indigo white--text"},
                    {text: 'telefono 2', width: 130, value: 'telefono2', class: "indigo white--text"},
                    {text: 'telefono 3', width: 130, value: 'telefono3', class: "indigo white--text"},
                    {text: 'tipologia', width: 100, value: 'tipologia', class: "indigo white--text"},
                    {text: 'fonte', width: 200, value: 'marketing', class: "indigo white--text"},
                    {text: 'user', width: 130, value: 'user', class: "indigo white--text"},
                    {text: 'nominativo', width: 130, value: 'fullname', class: "indigo white--text"},

                ],
            }
        },

        mounted() {
            this.caricadati();
        },

        watch:{
            rottaIdFiliale(){
                this.caricadati();
            }
        },

        methods: {
            ...mapActions('clients', {
                fetchClientsFiliale: 'fetchClientsFiliale',
                addClient: 'addClient',
            }),

            ...mapActions('filiali', {
                fetchFilialeById:'fetchFilialeById',
            }),

            caricadati(){
                this.fetchFilialeById(this.rottaIdFiliale);

                let accesso = false;
                this.getFiliali.forEach(element => {
                    if(element.id === this.rottaIdFiliale){
                        accesso = true;
                    }
                });

                if(accesso && this.getClients.length == 0){
                    this.carica = true;
                    this.fetchClientsFiliale(this.rottaIdFiliale).then(() => {
                        this.search = this.cognomeRicerca;
                        this.carica = false;
                    });
                }

                if(this.getRuolo == 'call' || this.getRuolo == 'admin'){
                    this.carica = true;
                    this.fetchClientsFiliale(this.rottaIdFiliale).then(() => {
                        this.search = this.cognomeRicerca;
                        this.carica = false;
                    });
                }

                if(this.cognomeRicerca){
                    this.search = this.cognomeRicerca;
                }
            },

            elimina(id, nome, cognome) {
                this.idElimina = id;
                this.nomeElimina = nome;
                this.cognomeElimina = cognome;
                this.showElimina = true;
                //this.eliminaClient(id)
            },

            cancellaMessaggioElimina(){
                this.idElimina = '';
                this.nomeElimina = '';
                this.cognomeElimina = '';
                this.showElimina = false;
            },

            cancellaMessaggio(){
                this.textMessaggio = '';
                this.$store.commit('clients/resetClientMessaggio');
            },

            audiogramma(client){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = true;
                this.showAppuntamento = false;
                this.showClients = false;
                this.audiogrammaClient = client;
            },

            appuntamento(client){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.showAppuntamento = true;
                this.appuntamentoClient = client;
            },

            prove(client){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = true;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = false;
                this.proveClient = client;
            },

            documenti(client){
                this.showDocumenti = true;
                this.showRecalls = false;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.documentiClient = client;
            },

            recalls(client){
                this.showDocumenti = false;
                this.showRecalls = true;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.recallsClient = client;
            },

            chiudiRecalls(){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.recallsClient = {};
            },

            chiudiDocumenti(){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.documentiClient = {};
            },

            chiudiAudiogramma(){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.audiogrammaUser = {};
            },

            chiudiAppuntamento(){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = true;
                this.appuntamentoClient = {};
            },

            chiudiProve(){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.proveClient = {};
            },

            reset(){
                this.$store.commit('clients/resetClientMessaggio');
            }
        },

        computed: {
            ...mapGetters('clients', {
                getClients: 'getClients',
                getClientMessaggio: 'getClientMessaggio',
            }),

            ...mapGetters('filiali', {
                getFiliali: 'getFiliali',
                getFilialeById: 'getFilialeById',
            }),

            ...mapGetters('login', {
                getRuolo: 'getRuolo',
            }),

            rottaIdFiliale(){
                return this.$route.params.filialeId ? this.$route.params.filialeId : null;
            },

            /*valoreRicerca(){
                return this.$route.params.valRicerca ? this.$route.params.valRicerca : '';
            },*/

            /*nomeRicerca(){
                return this.$route.params.nomRicerca ? this.$route.params.nomRicerca : '';
            },*/

            cognomeRicerca(){
                return this.$route.params.cogRicerca ? this.$route.params.cogRicerca : '';
            },
        },
    }
</script>

<style scoped>

</style>
