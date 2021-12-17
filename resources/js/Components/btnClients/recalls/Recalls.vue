<template>
    <v-row class="mt-3 flex-column">
        <v-dialog
            v-model="dialog"
            max-width="600"
        >
            <v-card>
                <v-img
                    class="black--text align-end"
                    height="400px"
                    width="600px"
                    :src="linkFoto+informazioneStruttura.codiceIdentificativo+'.jpg'"
                >
                </v-img>
                <v-card-title class="text-h5">
                    {{ informazioneStruttura.nome }}
                </v-card-title>

                <v-card-subtitle class="text-h6">
                    {{ informazioneStruttura.indirizzo }} - {{ informazioneStruttura.citta }}
                </v-card-subtitle>

                <v-card-text>
                    {{ informazioneStruttura.informazioni }}
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                    >
                        Chiudi
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-row>
            <v-col cols="4">
                <h2>
                    {{recallsClient.nome}} {{recallsClient.cognome}} {{recallsClient.telefono ? ' - '+recallsClient.telefono : null}}
                    {{recallsClient.telefono2 ? ' - '+recallsClient.telefono2 : null}} {{recallsClient.telefono3 ? ' - '+recallsClient.telefono3 : null}}
                </h2>
                <h4>{{recallsClient.indirizzo}} - {{recallsClient.citta}} - {{recallsClient.provincia}}</h4>
                <h4>Dottore di riferimento: {{recallsClient.user}}</h4>
            </v-col>
            <v-col cols="4">
                <v-row justify="center">
                    <v-select
                        @change="infoStruttura($event)"
                        :items="getfilialiRecapiti"
                        return-object
                        item-text="nome"
                        label="Informazioni Strutture"
                    ></v-select>
                </v-row>
            </v-col>
            <v-col cols="4" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            @click="programmaData()"
                            color="warning"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            {{nomeBtn}}
                        </v-btn>
                    </template>
                    <span>{{spiegazione}}</span>
                </v-tooltip>

                <v-row>
                    <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="telefonata.giorno"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="telefonata.giorno"
                                    label="Data Telefonata"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    :disabled="attivaData"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="telefonata.giorno"
                                no-title
                                first-day-of-week="1"
                                locale="ITA"
                                scrollable
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(telefonata.giorno)"
                                >
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>

                    <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                        <v-select
                            v-model="telefonata.esito"
                            :items="tipologiaEsito"
                            :disabled="!attivaData"
                            label="esito"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                        <v-select
                            @change="ricaricaStrutture"
                            v-model="telefonata.userId"
                            item-value="id"
                            item-text="name"
                            :items="getAudio"
                            label="Audio"
                            :readonly="blocca"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" md="12" lg="8" xs="12" sm="12">
                        <v-text-field
                            v-model="telefonata.note"
                            label="Note"
                            :disabled="!attivaData"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                        <v-btn color="primary" @click="inserisci" :block="$vuetify.breakpoint.xs" :disabled="verificaCampi">
                            Inserisci
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row class="mb-6">
                    <v-col cols="12">
                        <div class="text-center" v-if="carica">
                            <v-progress-circular
                                indeterminate
                                color="primary"
                            ></v-progress-circular>
                        </div>
                        <div v-else>
                            <h3>Storico delle Telefonate</h3>
                            <v-data-table
                                :headers="header"
                                :items="getRecalls"
                                hide-default-footer
                                class="elevation-1"
                                style="font-size: 8px"
                                dense
                            >

                                <template v-slot:item.esito="{ item }">
                                    <div v-if="item.esito == null">
                                        <v-select
                                            @change="aggiorna(item)"
                                            class="mt-4"
                                            v-model="telefonataDaAggiornare.esito"
                                            :items="tipologiaEsito"
                                            outlined
                                            dense
                                            label="esito"
                                        ></v-select>
                                    </div>
                                    <div v-else>
                                        {{item.esito}}
                                    </div>
                                </template>

                                <template v-slot:item.note="{ item }">
                                    <div v-if="item.note == null && item.esito == null">
                                        <v-text-field
                                            v-model="telefonataDaAggiornare.note"
                                            label="Note"
                                        ></v-text-field>
                                    </div>
                                    <div v-else>
                                        {{item.note}}
                                    </div>
                                </template>

                                <template v-slot:item.action="{ item }">
                                    <v-tooltip bottom v-if="item.esito == null">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon
                                                @click="modifica(item)"
                                                color="orange"
                                                small
                                                v-bind="attrs"
                                                v-on="on"
                                                style="margin: 0; padding: 0"
                                            >
                                                mdi-pencil
                                            </v-icon>
                                        </template>
                                        <span>Modifica</span>
                                    </v-tooltip>

                                    <v-tooltip bottom v-if="item.esito == 'Preso Appuntamento'">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon
                                                @click="appuntamento()"
                                                color="green"
                                                small
                                                v-bind="attrs"
                                                v-on="on"

                                            >
                                                mdi-eye
                                            </v-icon>
                                        </template>
                                        <span>Vedi Appuntamento</span>
                                    </v-tooltip>
                                </template>
                            </v-data-table>
                        </div>

                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                <calendar :audioprot="telefonata.userId" :fissaNome="false"/>
            </v-col>
        </v-row>


    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Calendar from "../../../Pages/personale/Calendar";
    export default {
        name: "Docunenti",
        components: {Calendar},
        props: ['recallsClient'],

        data(){
            return {
                blocca: false,
                dialog: false,
                attivaData: true,
                informazioneStruttura: '',
                carica: false,
                telefonata:{
                    userId:''
                },
                telefonataDaAggiornare:{},
                menu:false,
                tipologiaEsito:
                    [
                        'Preso Appuntamento',
                        'Non Interessato',
                        'Richiamare',
                        'Non vuole essere richiamato',
                    ],

                header: [
                    { text: 'Data Telefonata', width:110,  align: 'start', sortable: false, value: 'datarecall', class: "indigo white--text" },
                    { text: 'Esito', width:200, sortable: false, value: 'esito', class: "indigo white--text" },
                    { text: 'Eseguita', width:110, sortable: false, value: 'eseguita', class: "indigo white--text" },
                    { text: 'note', width:200, sortable: false, value: 'note', class: "indigo white--text" },
                    { text: 'Azioni',  sortable: false, value: 'action', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchAudio().then(() => {
                this.telefonata.userId = this.getRuolo === 'audio' ? parseInt(this.getIdUser) : parseInt(this.recallsClient.user_id);
                this.$store.commit('users/impostaUserCallAppuntamentoCalendar',
                    this.getRuolo === 'audio' ? parseInt(this.getIdUser) : parseInt(this.recallsClient.user_id));
                this.blocca = this.getRuolo === 'audio' ? true : false;
                this.fetchStruttureByAudio(this.telefonata.userId);
            });
            this.inserimentoDataDiOggi();
            this.fetchRecallsByIdClient(this.recallsClient.id).then(() => {
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('telefonate', {
                fetchRecallsByIdClient:'fetchRecallsByIdClient',
                addTelefonata:'addTelefonata',
                aggiornaTelefonata:'aggiornaTelefonata',
            }),

            ...mapActions('recapiti', {
                fetchStruttureByAudio:'fetchStruttureByAudio',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            inserimentoDataDiOggi(){
                let giornoDiOggi = new Date();
                let giorno = parseInt(giornoDiOggi.getDate()) < 10 ? '0'+parseInt(giornoDiOggi.getDate()) : parseInt(giornoDiOggi.getDate()) ;
                let mese = parseInt(giornoDiOggi.getMonth()) + 1 < 10 ? '0'+parseInt(giornoDiOggi.getMonth()) + 1 : parseInt(giornoDiOggi.getMonth()) + 1;
                let anno = giornoDiOggi.getFullYear();
                this.telefonata.giorno = anno+'-'+mese+'-'+giorno;
            },

            inserisci(){
                this.telefonata.clientId = this.recallsClient.id;
                this.telefonata.eseguitaId = this.getIdUser;
                this.recallsClient.fattaTelefonata = this.telefonata.esito ? true : false;
                this.addTelefonata(this.telefonata).then(() =>{
                if(this.telefonata.esito == 'Preso Appuntamento'){
                    this.telefonata = {
                        esito:'',
                        note:''
                    };
                    this.inserimentoDataDiOggi();
                    this.recallsClient.presoAppuntamento = true;
                    this.$emit('chiudiRecalls', this.recallsClient)
                }
                    this.telefonata = {
                        esito:'',
                        note:''
                    };
                this.inserimentoDataDiOggi();
                });
            },

            aggiorna(recall){
                this.telefonataDaAggiornare.id = recall.id;
                this.telefonataDaAggiornare.userId = this.getIdUser;
                this.recallsClient.fattaTelefonata = true;
                this.aggiornaTelefonata(this.telefonataDaAggiornare).then(() => {
                    if(this.telefonataDaAggiornare.esito == 'Preso Appuntamento'){
                        this.recallsClient.presoAppuntamento = true;
                        this.$emit('chiudiRecalls', this.recallsClient)
                    }
                });
            },

            appuntamento(){
                this.telefonata = {};
                this.inserimentoDataDiOggi();
                this.recallsClient.presoAppuntamento = true;
                this.$emit('chiudiRecalls', this.recallsClient)
            },

            cancella(){
                if (this.recallsClient.presoAppuntamento == null || this.recallsClient.presoAppuntamento != true){
                    this.recallsClient.presoAppuntamento = false;
                }
                if (this.recallsClient.fattaTelefonata == null || this.recallsClient.fattaTelefonata != true){
                    this.recallsClient.fattaTelefonata = false;
                }
                this.$emit('chiudiRecalls', this.recallsClient)
            },

            infoStruttura(struttura){
                this.informazioneStruttura = struttura;
                this.dialog = true;
            },

            programmaData(){
                if (this.attivaData === true) {
                    this.telefonata.esito = null;
                    this.telefonata.note = null;
                    this.attivaData = false;
                } else {
                    this.inserimentoDataDiOggi();
                    this.attivaData = true;
                }
            },

            modifica(telefonata){
                this.$store.commit('telefonate/eliminaTelefonata', telefonata.id);
                this.attivaData = false;
                this.telefonata.esito = null;
                this.telefonata.note = null;
                this.telefonata.giorno = telefonata.dataoriginale;
            },

            ricaricaStrutture()
            {
                this.$store.commit('users/impostaUserCallAppuntamentoCalendar', parseInt(this.telefonata.userId));
                this.fetchStruttureByAudio(this.getUserCallAppuntamentoCalendar);
            }

        },

        computed:{
            ...mapGetters('telefonate', {
                getRecalls: 'getRecalls',
            }),

            ...mapGetters('recapiti', {
                getfilialiRecapiti: 'getfilialiRecapiti',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
                getRuolo: 'getRuolo',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
                getUserCallAppuntamentoCalendar:'getUserCallAppuntamentoCalendar'
            }),

            nomeBtn(){
                return this.attivaData === false ? 'vuoi programmare la tel' : 'vuoi effettuare ora la tel'
            },

            spiegazione(){
                return this.attivaData === false ? 'clicca qui se vuoi effettuare ora la telefonata' :
                    'clicca qui se vuoi programmare in un altro giorno la telefonata'
            },

            verificaCampi(){
                return (this.nomeBtn == 'vuoi effettuare ora la tel' && this.telefonata.esito != null)
                || (this.nomeBtn == 'vuoi programmare la tel') ? false : true;
            },

            linkFoto(){
                let base = '';
                if(window.location.host === 'vuexdocker.test'){
                    base = 'http://vuexdocker.test/storage/recapiti/';
                } else {
                    base = 'https://www.centrouditogroup.it/storage/recapiti/';
                }
                return base;
            }
        }
    }
</script>

<style scoped>

</style>
