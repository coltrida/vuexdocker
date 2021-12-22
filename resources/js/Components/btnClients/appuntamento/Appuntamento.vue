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
            <v-col cols="3">
                <h2>{{appuntamentoClient.nome}} {{appuntamentoClient.cognome}}</h2>
                <h4>Dottore di riferimento: {{appuntamentoClient.user}}</h4>
            </v-col>
            <v-col cols="5">
                <v-alert color="warning" dark elevation="4" v-if="!this.appuntamentoClient.mail">
                    Ricorda di inserire la <u>mail</u>  del paziente, in questo modo gli arriverà un messaggio di remind un giorno prima dell'appuntamento preso
                </v-alert>
                <v-alert color="success" dark elevation="4" v-else>
                    Il paziente riceverà un messaggio di remind tramite e-mail un giorno prima dell'appuntamento fissato
                </v-alert>
            </v-col>
            <v-col cols="3">
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
            <v-col cols="1" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                    <v-row>
                        <v-col cols="12" md="4" lg="4">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="newAppuntamento.giorno"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newAppuntamento.giorno"
                                        label="Data Appuntamento*"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        :rules="giornoRules"
                                        required
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="newAppuntamento.giorno"
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
                                        @click="$refs.menu.save(newAppuntamento.giorno)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-dialog
                                ref="dialog"
                                v-model="modal2"
                                :return-value.sync="newAppuntamento.orario"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newAppuntamento.orario"
                                        label="Seleziona Orario*"
                                        prepend-icon="mdi-clock-time-four-outline"
                                        readonly
                                        :rules="orarioRules"
                                        required
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="modal2"
                                    v-model="newAppuntamento.orario"
                                    :allowed-minutes="allowedMinutes"
                                    full-width
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="modal2 = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.dialog.save(newAppuntamento.orario)"
                                    >
                                        OK
                                    </v-btn>
                                </v-time-picker>
                            </v-dialog>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-select
                                @change="ricaricaStrutture"
                                v-model="newAppuntamento.user_id"
                                item-value="id"
                                item-text="name"
                                :items="getAudio"
                                label="Audio"
                                :readonly="blocca"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="4" lg="4">
                            <v-select
                                v-model.lazy="newAppuntamento.filiale_id"
                                item-value="id"
                                item-text="nome"
                                :items="getFiliali"
                                label="Filiale"
                            ></v-select>
                            <div style="margin: 0;padding: 0; font-size: 12px; color: red; transform: translateY(-20px)" v-if="validaStruttura">
                                Inserire una filiale o un recapito
                            </div>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-select
                                v-model.lazy="newAppuntamento.recapito_id"
                                item-value="id"
                                item-text="nome"
                                :items="getRecapiti"
                                label="Recapito"
                            ></v-select>
                            <div style="margin: 0;padding: 0; font-size: 12px; color: red; transform: translateY(-20px)" v-if="validaStruttura">
                                Inserire una filiale o un recapito
                            </div>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-select
                                v-model.lazy="newAppuntamento.tipo"
                                :items="getMotivoIntervento"
                                label="Tipo Visita*"
                                :rules="tipoRules"
                                required
                            ></v-select>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="8">
                            <v-textarea
                                rows="2"
                                label="Note"
                                v-model.lazy="newAppuntamento.nota"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="4" class="text-center" v-if="carica2">
                            <v-progress-circular
                                indeterminate
                                color="primary"
                            ></v-progress-circular>
                        </v-col>
                        <v-col cols="4" v-else>
                            <v-btn @click="inserisci" color="primary" class="my-2" :disabled="verificaCampi">
                                {{btnName}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>

                <div class="text-center" v-if="carica">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                    <h3>Storico degli Appuntamenti</h3>
                    <v-data-table
                        :headers="headers"
                        :items="getAppuntamenti"
                        hide-default-footer
                        class="elevation-1"
                    >

                        <template v-slot:item.actions="{ item }" >
                            <div v-if="item.intervenuto === null">
                                <v-icon
                                    color="red"
                                    small
                                    @click="elimina(item.id)"
                                >
                                    mdi-delete
                                </v-icon>
                                <v-icon
                                    color="blue"
                                    small
                                    @click="modifica(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                            </div>
                            <div v-else>
                                <v-tooltip bottom v-if="item.intervenuto === 1">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            color="green"
                                            small
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            mdi-calendar-check
                                        </v-icon>
                                    </template>
                                    <span>Intervenuto</span>
                                </v-tooltip>
                                <v-tooltip bottom v-if="item.intervenuto === 0">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            color="red"
                                            small
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            mdi-window-close
                                        </v-icon>
                                    </template>
                                    <span>Non Intervenuto</span>
                                </v-tooltip>
                            </div>
                        </template>

                    </v-data-table>
                </div>


            </v-col>
            <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                <calendar :audioprot="userId" :fissaNome="false"/>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Calendar from "../../../Pages/personale/Calendar";

    export default {
        name: "Appuntamento",
        components: {Calendar},
        data() {
            return {
                blocca: false,
                allowedMinutes:[0, 30],
                dialog: false,
                informazioneStruttura: '',
                carica: false,
                carica2: false,
                modificaSwitch: false,
                modal2: false,
                valid: true,
                giornoRules: [v => !!v || 'il giorno è obbligatorio'],
                tipoRules: [v => !!v || 'il tipo è obbligatorio'],
                orarioRules: [v => !!v || 'orario obbligatorio'],
                newAppuntamento: {
                    user_id:'',
                    filiale_id: null,
                    recapito_id: null,
                    nota: null
                },
                menu: false,

                headers: [
                    {text: 'Giorno', align: 'start', sortable: false, value: 'giorno', class: "indigo white--text"},
                    {text: 'orario', sortable: false, value: 'orario', class: "indigo white--text"},
                    {text: 'nota', sortable: false, value: 'nota', class: "indigo white--text"},
                    {text: 'Luogo', sortable: false, value: 'luogo', class: "indigo white--text"},
                    {text: 'Tipo', sortable: false, value: 'tipo', class: "indigo white--text"},
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        props: ['appuntamentoClient'],

        mounted() {
            window.Echo.channel("appuntamentoChannel").listen(".task-created", e => {
                this.caricaAppuntamenti();
            });

            this.fetchAudio().then(() => {
                if (this.getUserCallAppuntamentoCalendar > 0) {
                    this.newAppuntamento.user_id = this.getUserCallAppuntamentoCalendar;
                } else {
                    this.newAppuntamento.user_id = this.getRuolo === 'audio' ? parseInt(this.getIdUser) : parseInt(this.appuntamentoClient.user_id);
                    this.$store.commit('users/impostaUserCallAppuntamentoCalendar',
                        this.getRuolo === 'audio' ? parseInt(this.getIdUser) : parseInt(this.appuntamentoClient.user_id));
                }


                this.blocca = this.getRuolo === 'audio' ? true : false;
                this.fetchStruttureByAudio(this.newAppuntamento.user_id);
            });

            this.carica = true;
            this.fetchAppuntamenti(this.appuntamentoClient.id).then(() => {
                this.carica = false;
            });

            if (this.getRuolo == 'call' || this.getRuolo == 'amministrazione' || this.getRuolo == 'admin') {
                this.fetchFiliali();
                this.fetchStruttureByAudio(this.appuntamentoClient.user_id);
                this.fetchRecapitiByAudio(this.appuntamentoClient.user_id);
            } else {
                this.fetchFilialiByUser(this.getIdUser);
                this.fetchStruttureByAudio(this.getIdUser);
                this.fetchRecapitiByAudio(this.getIdUser);
            }

        },

        methods: {
            ...mapActions('appuntamenti', {
                fetchAppuntamenti: 'fetchAppuntamenti',
                addAppuntamento: 'addAppuntamento',
                modificaAppuntamento: 'modificaAppuntamento',
                eliminaAppuntamento: 'eliminaAppuntamento',

                fetchAppuntamentiLunedi: 'fetchAppuntamentiLunedi',
                fetchAppuntamentiMartedi: 'fetchAppuntamentiMartedi',
                fetchAppuntamentiMercoledi: 'fetchAppuntamentiMercoledi',
                fetchAppuntamentiGiovedi: 'fetchAppuntamentiGiovedi',
                fetchAppuntamentiVenerdi: 'fetchAppuntamentiVenerdi',
                fetchAppuntamentiSabato: 'fetchAppuntamentiSabato',

                prossimoLunedi: 'prossimoLunedi',
                prossimoMartedi: 'prossimoMartedi',
                prossimoMarcoledi: 'prossimoMarcoledi',
                prossimoGiovedi: 'prossimoGiovedi',
                prossimoVenerdi: 'prossimoVenerdi',
                prossimoSabato: 'prossimoSabato',
            }),

            ...mapActions('recapiti', {
                fetchStruttureByAudio: 'fetchStruttureByAudio',
                fetchRecapitiByAudio:'fetchRecapitiByAudio',
                fetchRecapiti: 'fetchRecapiti',
            }),

            ...mapActions('filiali', {
                fetchFilialiByUser: 'fetchFilialiByUser',
                fetchFiliali: 'fetchFiliali',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            cancella() {
                this.$emit('chiudiAppuntamento')
            },

            inserisci() {
                this.$refs.form.validate();
                this.carica2=true;
                this.newAppuntamento.telefonista_id = this.getIdUser;
                this.newAppuntamento.client_id = this.appuntamentoClient.id;

                if (this.modificaSwitch) {
                    this.modificaAppuntamento(this.newAppuntamento).then(() => {
                        this.$refs.form.resetValidation();
                        this.caricaAppuntamenti();
                        this.carica2=false;
                        this.newAppuntamento.giorno = null;
                        this.newAppuntamento.orario = null;
                        this.newAppuntamento.filiale_id = null;
                        this.newAppuntamento.recapito_id = null;
                        this.newAppuntamento.tipo = null;
                        this.newAppuntamento.nota = null;
                    });
                } else {
                    this.addAppuntamento(this.newAppuntamento).then(() => {
                        this.$refs.form.resetValidation();
                        this.caricaAppuntamenti();
                        this.carica2=false;
                        this.newAppuntamento.giorno = null;
                        this.newAppuntamento.orario = null;
                        this.newAppuntamento.filiale_id = null;
                        this.newAppuntamento.recapito_id = null;
                        this.newAppuntamento.tipo = null;
                        this.newAppuntamento.nota = null;
                    });
                }

                this.modificaSwitch = false;

            },

            caricaAppuntamenti() {
                if (this.getSettimanaVisualizzata === 'attuale') {
                    this.fetchAppuntamentiLunedi(this.userId);
                    this.fetchAppuntamentiMartedi(this.userId);
                    this.fetchAppuntamentiMercoledi(this.userId);
                    this.fetchAppuntamentiGiovedi(this.userId);
                    this.fetchAppuntamentiVenerdi(this.userId);
                    this.fetchAppuntamentiSabato(this.userId);
                } else {
                    this.prossimoLunedi(this.userId);
                    this.prossimoMartedi(this.userId);
                    this.prossimoMarcoledi(this.userId);
                    this.prossimoGiovedi(this.userId);
                    this.prossimoVenerdi(this.userId);
                    this.prossimoSabato(this.userId);
                }

            },

            elimina(id) {
                let payload = {
                    idAppuntamento: id,
                    idUser: this.getIdUser
                };
                this.eliminaAppuntamento(payload).then(() => {
                    this.caricaAppuntamenti();
                });
            },

            modifica(eleSelezionato) {
                this.modificaSwitch = true;
                this.newAppuntamento = eleSelezionato;
                this.newAppuntamento.giorno = eleSelezionato.giornoOriginale;
                this.$store.commit('appuntamenti/eliminaAppuntamento', this.newAppuntamento.id);
            },

            infoStruttura(struttura) {
                this.informazioneStruttura = struttura;
                this.dialog = true;
            },

            ricaricaStrutture()
            {
                this.$store.commit('users/impostaUserCallAppuntamentoCalendar', parseInt(this.newAppuntamento.user_id));
                this.fetchStruttureByAudio(this.getUserCallAppuntamentoCalendar);
            }

        },

        computed: {
            ...mapGetters('appuntamenti', {
                getAppuntamenti: 'getAppuntamenti',
                getSettimanaVisualizzata: 'getSettimanaVisualizzata',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
                getRuolo: 'getRuolo',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
                getUserCallAppuntamentoCalendar:'getUserCallAppuntamentoCalendar',
            }),

            ...mapGetters('recapiti', {
                getRecapiti: 'getRecapiti',
                getfilialiRecapiti: 'getfilialiRecapiti',
            }),

            ...mapGetters('filiali', {
                getFiliali: 'getFiliali',
            }),

            ...mapGetters('informazioni', {
                getMotivoIntervento: 'getMotivoIntervento',
            }),

            btnName() {
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            },

            validaStruttura(){
                return this.newAppuntamento.recapito_id || this.newAppuntamento.filiale_id ? false : true;
            },

            verificaCampi(){
                return this.newAppuntamento.giorno != '' && this.newAppuntamento.giorno != null
                && this.newAppuntamento.orario != '' && this.newAppuntamento.orario != null
                && this.newAppuntamento.tipo != '' && this.newAppuntamento.tipo != null
                && (this.newAppuntamento.recapito_id || this.newAppuntamento.filiale_id) ? false : true;
            },

            linkFoto(){
                let base = '';
                if(window.location.host === 'vuexdocker.test'){
                    base = 'http://vuexdocker.test/storage/recapiti/';
                } else {
                    base = 'https://www.centrouditogroup.it/storage/recapiti/';
                }
                return base;
            },

            userId(){
                if (this.getUserCallAppuntamentoCalendar > 0) {
                    return this.getUserCallAppuntamentoCalendar;
                } else if(this.getRuolo === 'audio'){
                    return parseInt(this.getIdUser);
                }
                return this.appuntamentoClient.user_id
            }
        }

    }
</script>

<style scoped>

</style>
