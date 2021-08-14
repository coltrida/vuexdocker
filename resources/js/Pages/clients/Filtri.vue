<template>
    <div>
        <messaggio
            v-if="textMessaggio"
            :textMessaggio="textMessaggio"
            @cancellaMessaggio = "cancellaMessaggio"
        ></messaggio>

        <messaggioelimina
            v-if="showElimina"
            :idElimina="idElimina"
            :nomeElimina="nomeElimina"
            :cognomeElimina="cognomeElimina"
            @cancellaMessaggioElimina = "cancellaMessaggioElimina"
        ></messaggioelimina>

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

        <docunenti
            v-if="showDocumenti"
            :documentiClient="documentiClient"
            @chiudiDocumenti="chiudiDocumenti"
        ></docunenti>

        <div v-if="showClients">
            <h2>Filtra ricerca</h2>
            <v-row class="mt-6">
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.tipo"
                        item-value="id"
                        item-text="nome"
                        :items="getTipologie"
                        label="tipo"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        @change="caricaCitta()"
                        v-model="ricerca.provincia"
                        :items="getProvince"
                        label="Prov."
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.citta"
                        :items="getCittaByProvincia"
                        label="Città"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.filiale"
                        item-value="id"
                        item-text="nome"
                        :items="getFilialiPerInserimento"
                        label="Filiale"
                    ></v-select>
                </v-col>

                <v-col>
                    <v-btn @click="trova" color="success" dark>
                        Ricerca
                    </v-btn>
                </v-col>
            </v-row>

    <div>
        <v-data-table
            :headers="headers"
            :items="getRicercaNominativi"
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
            </template>

        </v-data-table>
    </div>
        </div>

    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Messaggioelimina from "../../Components/btnClients/elimina/Messaggioelimina";
    import Messaggio from "../../Components/Messaggio";
    import Audiogramma from "../../Components/btnClients/audiogramma/Audiogramma";
    import Appuntamento from "../../Components/btnClients/appuntamento/Appuntamento";
    import Prove from "../../Components/btnClients/prove/Prove";
    import Docunenti from "../../Components/btnClients/documenti/Docunenti";

    export default {
        name: "Clients",
        components: {Docunenti, Prove, Appuntamento, Audiogramma, Messaggio, Messaggioelimina},
        data() {
            return {
                showElimina: false,
                carica: false,
                showClients: true,
                showProve: false,
                showDocumenti: false,
                showAudiogramma: false,
                showAppuntamento: false,
                textMessaggio: null,
                openAudiogramma: false,
                audiogrammaClient: {},
                appuntamentoClient: {},
                proveClient: {},
                documentiClient: {},
                idElimina: '',
                nomeElimina: '',
                cognomeElimina: '',
                ricerca:{},
                headers: [
                    {text: 'Actions', width: 150, value: 'actions', sortable: false, class: "indigo white--text"},
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
                ],
            }
        },

        mounted() {
            this.fetchTipologie();
            this.fetchProvince();
            this.fetchFilialiPerInserimento();
        },

        methods: {
            ...mapActions('clients', {
                fetchClients: 'fetchClients',
                fetchProvince: 'fetchProvince',
                fetchCittaByProvincia: 'fetchCittaByProvincia',
                ricercaNominativi: 'ricercaNominativi',
            }),

            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
            }),

            ...mapActions('filiali', {
                fetchFilialiPerInserimento:'fetchFilialiPerInserimento',
            }),

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
            },

            audiogramma(client){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = true;
                this.showClients = false;
                this.audiogrammaClient = client;
            },

            appuntamento(client){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.showAppuntamento = true;
                this.appuntamentoClient = client;
            },

            prove(client){
                this.showDocumenti = false;
                this.showProve = true;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.proveClient = client;
            },

            documenti(client){
                this.showDocumenti = true;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = false;
                this.documentiClient = client;
            },

            chiudiDocumenti(){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.documentiClient = {};
            },

            chiudiAudiogramma(){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.audiogrammaClient = {};
            },

            chiudiAppuntamento(){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = false;
                this.showClients = true;
                this.appuntamentoClient = {};
            },

            chiudiProve(){
                this.showDocumenti = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.proveClient = {};
            },

            caricaCitta(){
                this.fetchCittaByProvincia(this.ricerca.provincia);
            },

            trova(){
                this.ricercaNominativi(this.ricerca)
            }

        },

        computed: {
            ...mapGetters('clients', {
                getRicercaNominativi: 'getRicercaNominativi',
                getProvince: 'getProvince',
                getCittaByProvincia: 'getCittaByProvincia',
            }),

            ...mapGetters('tipologie', {
                getTipologie:'getTipologie',
            }),

            ...mapGetters('filiali', {
                getFilialiPerInserimento:'getFilialiPerInserimento',
            }),

        },
    }
</script>

<style scoped>

</style>
