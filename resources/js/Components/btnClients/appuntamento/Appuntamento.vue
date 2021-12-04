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
                    :src="'https://www.centrouditogroup.it/storage/recapiti/'+informazioneStruttura.codiceIdentificativo+'.jpg'"
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
                <h2>{{appuntamentoClient.nome}} {{appuntamentoClient.cognome}}</h2>
                <h4>Dottore di riferimento: {{appuntamentoClient.user}}</h4>
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
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
                    <v-row>
                        <v-col cols="12" md="6" lg="6">
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
                        <v-col cols="12" md="6" lg="6">
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
                                :items="tipoAppuntamento"
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
                <calendar :audioprot="appuntamentoClient.user_id" :fissaNome="true"/>
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
                    filiale_id: null,
                    recapito_id: null,
                    nota: null
                },
                menu: false,
                tipoAppuntamento: ['Prima Visita', 'Esame Audio', 'Controllo Prova', 'fine prova', 'Assistenza'],

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

                prossimoLunedi: 'prossimoLunedi',
                prossimoMartedi: 'prossimoMartedi',
                prossimoMarcoledi: 'prossimoMarcoledi',
                prossimoGiovedi: 'prossimoGiovedi',
                prossimoVenerdi: 'prossimoVenerdi',
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

            cancella() {
                this.$emit('chiudiAppuntamento')
            },

            inserisci() {
                this.$refs.form.validate();
                this.carica2=true;
                this.newAppuntamento.user_id = this.appuntamentoClient.user_id;
                this.newAppuntamento.telefonista_id = this.getIdUser;
                this.newAppuntamento.client_id = this.appuntamentoClient.id;

                if (this.modificaSwitch) {
                    this.modificaAppuntamento(this.newAppuntamento).then(() => {
                        this.$refs.form.resetValidation();
                        this.caricaAppuntamenti();
                        this.carica2=false;
                        this.newAppuntamento = {
                            filiale_id: null,
                            recapito_id: null,
                            tipo: null,
                            nota: null
                        }
                    });
                } else {
                    this.addAppuntamento(this.newAppuntamento).then(() => {
                        this.$refs.form.resetValidation();
                        this.caricaAppuntamenti();
                        this.carica2=false;
                        this.newAppuntamento = {
                            filiale_id: null,
                            recapito_id: null,
                            tipo: null,
                            nota: null
                        }
                    });
                }

                this.modificaSwitch = false;

            },

            caricaAppuntamenti() {
                if (this.getSettimanaVisualizzata === 'attuale') {
                    this.fetchAppuntamentiLunedi(this.appuntamentoClient.user_id);
                    this.fetchAppuntamentiMartedi(this.appuntamentoClient.user_id);
                    this.fetchAppuntamentiMercoledi(this.appuntamentoClient.user_id);
                    this.fetchAppuntamentiGiovedi(this.appuntamentoClient.user_id);
                    this.fetchAppuntamentiVenerdi(this.appuntamentoClient.user_id);
                } else {
                    this.prossimoLunedi(this.appuntamentoClient.user_id);
                    this.prossimoMartedi(this.appuntamentoClient.user_id);
                    this.prossimoMarcoledi(this.appuntamentoClient.user_id);
                    this.prossimoGiovedi(this.appuntamentoClient.user_id);
                    this.prossimoVenerdi(this.appuntamentoClient.user_id);
                }

            },

            elimina(id) {
                let payload = {
                    idAppuntamento: id,
                    idUser: this.getIdUser
                };
                this.eliminaAppuntamento(payload);
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

            ...mapGetters('recapiti', {
                getRecapiti: 'getRecapiti',
                getfilialiRecapiti: 'getfilialiRecapiti',
            }),

            ...mapGetters('filiali', {
                getFiliali: 'getFiliali',
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
            }
        }

    }
</script>

<style scoped>

</style>
