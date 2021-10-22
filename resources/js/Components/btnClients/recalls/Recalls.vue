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
                    :src="'https://www.centrouditogroup.it/storage/recapiti/'+informazioneRecapito.id+'.jpg'"
                >
                </v-img>
                <v-card-title class="text-h5">
                    {{ informazioneRecapito.nome }}
                </v-card-title>

                <v-card-text>
                    {{ informazioneRecapito.informazioni }}
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
                        @change="infoRecapito($event)"
                        :items="getRecapiti"
                        return-object
                        item-text="nome"
                        label="Informazioni Recapito"
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
                <v-row>
                    <v-col cols="12" md="12" lg="6" xs="12" sm="12">
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

                    <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                        <v-select
                            v-model="telefonata.esito"
                            :items="tipologiaEsito"
                            label="esito"
                        ></v-select>
                    </v-col>

                    <v-col cols="12" md="12" lg="8" xs="12" sm="12">
                        <v-text-field
                            v-model="telefonata.note"
                            label="Note"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                        <v-btn color="primary" dark @click="inserisci" :block="$vuetify.breakpoint.xs">
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
                            <v-data-table
                                :headers="header"
                                :items="getRecalls"
                                hide-default-footer
                                class="elevation-1"
                            >

                                <template v-slot:item.esito="{ item }">
                                    <div v-if="item.esito == null">
                                        <v-select
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
                                    <div v-if="item.esito == null">
                                        <v-btn small color="success" dark @click="aggiorna(item)">
                                            Aggiorna
                                        </v-btn>
                                    </div>
                                    <div v-if="item.esito == 'Preso Appuntamento'">
                                        <v-btn small color="success" dark @click="appuntamento()">
                                            Vedi Appuntamento
                                        </v-btn>
                                    </div>
                                </template>
                            </v-data-table>
                        </div>

                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="12" lg="6" xs="12" sm="12">
                <calendar :audioprot="recallsClient.user_id" :fissaNome="true"/>
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
                dialog: false,
                informazioneRecapito: '',
                carica: false,
                telefonata:{},
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
                    { text: 'Data Telefonata', width:120,  align: 'start', sortable: false, value: 'datarecall', class: "indigo white--text" },
                    { text: 'Esito', sortable: false, value: 'esito', class: "indigo white--text" },
                    { text: 'note', sortable: false, value: 'note', class: "indigo white--text" },
                    { text: 'Azioni',  sortable: false, value: 'action', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchRecapitiByAudio(this.recallsClient.user_id);
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
                fetchRecapitiByAudio:'fetchRecapitiByAudio',
            }),

            inserisci(){
                this.telefonata.clientId = this.recallsClient.id;
                this.telefonata.userId = this.getIdUser;
                this.addTelefonata(this.telefonata).then(() =>{
                if(this.telefonata.esito == 'Preso Appuntamento'){
                    this.telefonata = {};
                    this.$emit('chiudiRecalls', this.recallsClient)
                }
                this.telefonata = {};
                });
            },

            aggiorna(recall){
                this.telefonataDaAggiornare.id = recall.id;
                this.telefonataDaAggiornare.userId = this.getIdUser;
                this.aggiornaTelefonata(this.telefonataDaAggiornare).then(() => {
                    if(this.telefonataDaAggiornare.esito == 'Preso Appuntamento'){
                        this.$emit('chiudiRecalls', this.recallsClient)
                    }
                });
            },

            appuntamento(){
                this.telefonata = {};
                this.$emit('chiudiRecalls', this.recallsClient)
            },

            cancella(){
                this.$emit('chiudiRecalls', null)
            },

            infoRecapito(recapito){
                this.informazioneRecapito = recapito;
                this.dialog = true;
            }

        },

        computed:{
            ...mapGetters('telefonate', {
                getRecalls: 'getRecalls',
            }),

            ...mapGetters('recapiti', {
                getRecapiti: 'getRecapiti',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),
        }
    }
</script>

<style scoped>

</style>
