<template>
    <div class="flex justify-start align-center mt-2">
        <v-row v-if="showAppuntamento || showRecalls || showInformazioni">
            <v-col cols="12">

                <v-row class="pa-10">
                    <appuntamento
                        v-if="showAppuntamento"
                        :appuntamentoClient="appuntamentoClient"
                        @chiudiAppuntamento = "chiudiAppuntamento"
                    />

                    <recalls
                        v-if="showRecalls"
                        :recallsClient="recallsClient"
                        @chiudiRecalls="chiudiRecalls"
                    ></recalls>

                    <informazioni
                        v-if="showInformazioni"
                        :informazioniClient="informazioniClient"
                        @chiudiInformazioni="chiudiInformazioni"
                    ></informazioni>
                </v-row>
            </v-col>
        </v-row>

        <div class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div v-else>
            <v-row cols="12" v-if="showClients">
                <v-col>
                    <v-chip>
                        Telefonate effettuate oggi: {{getNumeroTelefonateFatteOggi}}
                    </v-chip>

                </v-col>
                <v-col>
                    <v-chip>
                        Appuntamenti presi oggi: {{getNumeroAppuntamentiPresiOggi}}
                    </v-chip>
                </v-col>
            </v-row>

            <v-row v-if="showClients">
            <v-col cols="6">
                <h2>Recall di oggi</h2>
                <v-data-table
                    :headers="headers1"
                    height="270"
                    :items-per-page=5
                    dense
                    :items="getRecallOggi"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:item.actions="{ item }">
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

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="black"
                                    small
                                    @click="informazioni(item)"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-information-outline
                                </v-icon>
                            </template>
                            <span>Informazioni</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-col>

            <v-col cols="6">
                <h2>Telefonate Effettuate oggi</h2>
                <v-data-table
                    :headers="headers2"
                    height="270"
                    :items-per-page=5
                    dense
                    :items="getTelefonateFatteOggi"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:item.actions="{ item }">
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

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="black"
                                    small
                                    @click="informazioni(item)"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-information-outline
                                </v-icon>
                            </template>
                            <span>Informazioni</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Appuntamento from "../btnClients/appuntamento/Appuntamento";
    import Recalls from "../btnClients/recalls/Recalls";
    import Informazioni from "../../Components/btnClients/informazioni/Informazioni";

    export default {
        name: "homeCallAdmin",
        components: {Appuntamento, Recalls, Informazioni},
        data(){
            return {
                carica: false,
                showClients: true,
                showRecalls: false,
                showAppuntamento: false,
                showInformazioni: false,
                appuntamentoClient: {},
                recallsClient: {},
                informazioniClient: {},

                headers1: [
                    {text: 'Actions', width: 120, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Audio', width:180, value: 'user.name', sortable: false, class: "indigo white--text"},
                    {text: 'Nome', width:240, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Telefono', width:120, value: 'telefono', sortable: false, class: "indigo white--text" },
                    {text: 'Indirizzo', width:220,  value: 'indirizzo', sortable: false, class: "indigo white--text"},
                    {text: 'Città', width:180,  value: 'citta', sortable: false, class: "indigo white--text"},
                    {text: 'PR', width:80, value: 'provincia', sortable: false, class: "indigo white--text" },
                ],

                headers2: [
                    {text: 'Actions', width: 110, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Eseguita', width:180, value: 'recalls[0].user.name', sortable: false, class: "indigo white--text"},
                    {text: 'Audio', width:180, value: 'user.name', sortable: false, class: "indigo white--text"},
                    {text: 'Nome', width:240, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Telefono', width:120, value: 'telefono', sortable: false, class: "indigo white--text" },
                    {text: 'Indirizzo', width:220,  value: 'indirizzo', sortable: false, class: "indigo white--text"},
                    {text: 'Città', width:180,  value: 'citta', sortable: false, class: "indigo white--text"},
                    {text: 'PR', width:80, value: 'provincia', sortable: false, class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.carica = true;
            if(this.getIdUser){
                this.fetchRecallOggi(this.getIdUser).then(() => {
                    this.carica = false;
                    this.fetchTelefonateFatteOggi();
                    this.fetchNumeroTelefonateFatteOggi();
                    this.fetchNumeroAppuntamentiPresiOggi();
                });
            }

        },

        methods:{
            ...mapActions('telefonate', {
                fetchRecallOggi: 'fetchRecallOggi',
                fetchTelefonateFatteOggi: 'fetchTelefonateFatteOggi',
                fetchNumeroTelefonateFatteOggi: 'fetchNumeroTelefonateFatteOggi',
                fetchNumeroAppuntamentiPresiOggi: 'fetchNumeroAppuntamentiPresiOggi',
            }),

            appuntamento(client){
                this.showClients = false;
                this.showAppuntamento = true;
                this.appuntamentoClient = client;
            },

            recalls(client){
                this.showRecalls = true;
                this.showClients = false;
                this.recallsClient = client;
            },

            informazioni(client){
                this.showInformazioni = true;
                this.showClients = false;
                this.informazioniClient = client;
            },

            chiudiRecalls(){
                this.showRecalls = false;
                this.showClients = true;
                this.recallsClient = {};
            },

            chiudiAppuntamento(){
                this.showAppuntamento = false;
                this.showClients = true;
                this.appuntamentoClient = {};
            },

            chiudiInformazioni(){
                this.showInformazioni = false;
                this.showClients = true;
                this.informazioniClient = {};
            },
        },

        computed:{
            ...mapGetters('telefonate', {
                getRecallOggi: 'getRecallOggi',
                getTelefonateFatteOggi: 'getTelefonateFatteOggi',
                getNumeroTelefonateFatteOggi: 'getNumeroTelefonateFatteOggi',
                getNumeroAppuntamentiPresiOggi: 'getNumeroAppuntamentiPresiOggi',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),
        }
    }
</script>

<style scoped>

</style>
