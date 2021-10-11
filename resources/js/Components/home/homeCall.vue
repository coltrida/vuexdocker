<template>
    <div class="flex justify-start align-center mt-2">

                <appuntamento
                    v-if="showAppuntamento"
                    :appuntamentoClient="appuntamentoClient"
                    @chiudiAppuntamento = "chiudiAppuntamento"
                />
                <audiogramma
                    v-if="showAudiogramma"
                    :audiogrammaClient="audiogrammaClient"
                    @chiudiAudiogramma = "chiudiAudiogramma"
                ></audiogramma>
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

                <recalls
                    v-if="showRecalls"
                    :recallsClient="recallsClient"
                    @chiudiRecalls="chiudiRecalls"
                ></recalls>

        <v-row v-if="showClients">
                <v-col cols="6">
                    <div>
                        <!--<v-btn @click="recuperaInfo">
                            switch
                        </v-btn>
                        {{getUserInformazioni}}-->
                        <h2>Recall di oggi</h2>
                            <v-data-table
                                :headers="headers1"
                                dense
                                :items="getRecallOggi"
                                class="elevation-1 mt-3"
                            >

                                <template v-slot:item.nome="{ item }">
                                    <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                        {{item.fullname}}
                                    </router-link>
                                </template>

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

                        <h2 class="mt-10">Clienti Mai Richiamati</h2>
                        <v-data-table
                            :headers="headers1"
                            dense
                            :items="getClientiMaiRichiamati"
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.nome="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                    {{item.fullname}}
                                </router-link>
                            </template>

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

                        <h2 class="mt-10">Clienti Mai Preso Appuntamenti</h2>
                        <v-data-table
                            :headers="headers1"
                            dense
                            :items="getClientiNonHannoMaiPresoAppuntamenti"
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.nome="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                    {{item.fullname}}
                                </router-link>
                            </template>

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
                </v-col>

                <v-col cols="6">
                    <h2>Recall di domani</h2>
                    <v-data-table
                        :headers="headers1"
                        dense
                        :items="getRecallDomani"
                        class="elevation-1 mt-3"
                    >

                        <template v-slot:item.nome="{ item }">
                            <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                {{item.fullname}}
                            </router-link>
                        </template>

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

                    <h2 class="mt-10">Clienti ad un anno Ultimo Appuntamento</h2>
                    <v-data-table
                        :headers="headers1"
                        dense
                        :items="getClientiUnAnnoUltimoAppuntamento"
                        class="elevation-1 mt-3 mb-10"
                    >

                        <template v-slot:item.nome="{ item }">
                            <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                {{item.fullname}}
                            </router-link>
                        </template>

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

                    <h2 class="mt-10">Telefonate da Richiamare - in sospeso</h2>
                    <v-data-table
                        :headers="headers1"
                        dense
                        :items="getDaRichiamare"
                        class="elevation-1 mt-3 mb-10"
                    >

                        <template v-slot:item.nome="{ item }">
                            <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                {{item.fullname}}
                            </router-link>
                        </template>

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
                </v-col>

            </v-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Audiogramma from "../btnClients/audiogramma/Audiogramma";
    import Appuntamento from "../btnClients/appuntamento/Appuntamento";
    import Prove from "../btnClients/prove/Prove";
    import Docunenti from "../btnClients/documenti/Docunenti";
    import Recalls from "../btnClients/recalls/Recalls";
    import Calendar from "../../Pages/personale/Calendar";
    export default {
        name: "homeCall",
        components: {Calendar, Docunenti, Prove, Appuntamento, Audiogramma, Recalls},
        data(){
            return {
                carica: false,
                showClients: true,
                showProve: false,
                showRecalls: false,
                showDocumenti: false,
                showAudiogramma: false,
                showAppuntamento: false,
                textMessaggio: null,
                openAudiogramma: false,
                audiogrammaClient: {},
                appuntamentoClient: {},
                proveClient: {},
                documentiClient: {},
                recallsClient: {},

                headers1: [
                    {text: 'Actions', width: 130, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Audioprotesista', width:180, value: 'user.name', class: "indigo white--text"},
                    {text: 'Nome', width:240, value: 'nome', class: "indigo white--text"},
                    {text: 'Telefono', width:120, value: 'telefono', sortable: false, class: "indigo white--text" },
                    {text: 'Indirizzo', width:220,  value: 'indirizzo', sortable: false, class: "indigo white--text"},
                    {text: 'Città', width:180,  value: 'citta', class: "indigo white--text"},
                    {text: 'PR', width:80, value: 'provincia', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.caricaTelefonate();
            /*this.fetchUserInformazioniDatabase();*/
        },

        methods: {
            ...mapActions('telefonate', {
                fetchRecallOggi: 'fetchRecallOggi',
                fetchRecallDomani: 'fetchRecallDomani',
                fetchClientiMaiRichiamati: 'fetchClientiMaiRichiamati',
                fetchClientiNonHannoMaiPresoAppuntamenti: 'fetchClientiNonHannoMaiPresoAppuntamenti',
                fetchClientiUnAnnoUltimoAppuntamento: 'fetchClientiUnAnnoUltimoAppuntamento',
                fetchDaRichiamare: 'fetchDaRichiamare',
            }),

            ...mapActions('users', {
                switchDatabase: 'switchDatabase',
                fetchUserInformazioniDatabase: 'fetchUserInformazioniDatabase',
            }),

            recuperaInfo(){
                this.switchDatabase();
            },

            caricaTelefonate(){
                this.fetchRecallOggi();
                this.fetchRecallDomani();
                this.fetchClientiMaiRichiamati();
                this.fetchClientiNonHannoMaiPresoAppuntamenti();
                this.fetchClientiUnAnnoUltimoAppuntamento();
                this.fetchDaRichiamare();
            },

            audiogramma(client){
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAppuntamento = false;
                this.showAudiogramma = true;
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
                this.showAppuntamento = false;
                this.showAudiogramma = false;
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

            chiudiRecalls(client){
                this.caricaTelefonate();
                this.showDocumenti = false;
                this.showRecalls = false;
                this.showProve = false;
                this.showAudiogramma = false;
                this.showAppuntamento = false;
                this.showClients = true;
                this.recallsClient = {};
                if(client){
                    this.appuntamento(client)
                }
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
                this.audiogrammaClient = {};
            },

            chiudiAppuntamento(){
                this.caricaTelefonate();
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

        },

        computed: {
            ...mapGetters('telefonate', {
                getRecallOggi: 'getRecallOggi',
                getRecallDomani: 'getRecallDomani',
                getClientiMaiRichiamati: 'getClientiMaiRichiamati',
                getClientiNonHannoMaiPresoAppuntamenti: 'getClientiNonHannoMaiPresoAppuntamenti',
                getClientiUnAnnoUltimoAppuntamento: 'getClientiUnAnnoUltimoAppuntamento',
                getDaRichiamare: 'getDaRichiamare',
            }),

            ...mapGetters('users', {
                getUserInformazioni: 'getUserInformazioni',
            }),

        },
    }
</script>

<style scoped>

</style>
