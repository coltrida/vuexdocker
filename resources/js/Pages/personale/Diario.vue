<template>
    <div>
        <v-row class="my-4">

            <messaggio-evento-presente
                v-if="getEventoPresente === 0"
                @cancellaMessaggio = "cancellaMessaggio"
            />

            <v-col cols="12" md="7" lg="7">
                <v-row style="font-size: 10px" class="flex">
                    <v-col cols="6" md="3" lg="3">
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="newEvent.giorno"
                                    label="Data"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                first-day-of-week="1"
                                locale="ITA"
                                v-model="newEvent.giorno"
                                @input="menu = false"
                            >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6" md="2" lg="2">
                        <v-select
                            v-model="newEvent.quando"
                            :items="getQuando"
                            label="Quando"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="6" md="2" lg="2">
                        <v-select
                            v-model="newEvent.cosa"
                            :items="getCosa"
                            label="Cosa"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="6" md="3" lg="3">
                        <v-text-field
                            v-model="newEvent.evento"
                            label="Dettaglio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6" md="2" lg="2">
                        <v-btn small :disabled="bloccaInserimento" color="primary" @click="inserisciEvento" :block="$vuetify.breakpoint.xs">
                            Inserisci
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <div class="flex">
                    <v-chip
                        style="width: 80px"
                        color="teal lighten-4"
                        label
                    >
                        Negozio
                    </v-chip>
                    <v-chip
                        style="width: 80px"
                        color="lime lighten-3"
                        label
                    >
                        recapito
                    </v-chip>
                    <v-chip
                        style="width: 80px"
                        color="orange lighten-3"
                        label
                    >
                        screening
                    </v-chip>
                </div>
                <div class="flex">
                    <v-chip
                        style="width: 80px"
                        color="brown lighten-3"
                        label
                    >
                        domicili
                    </v-chip>
                    <v-chip
                        style="width: 80px"
                        color="red lighten-3"
                        label
                    >
                        permesso
                    </v-chip>
                    <v-chip
                        style="width: 80px"
                        color="red lighten-5"
                        label
                    >
                        festivo
                    </v-chip>
                </div>
            </v-col>
            <v-col v-if="$vuetify.breakpoint.xs">
                <v-btn small>
                    <v-icon
                        color="green darken-2"
                        @click="spostati(-1)"
                    >
                        mdi-arrow-left-bold-circle
                    </v-icon>
                </v-btn>
                <v-btn small>
                    <v-icon
                        color="green darken-2"
                        @click="spostati(1)"
                    >
                        mdi-arrow-right-bold-circle
                    </v-icon>
                </v-btn>
                <v-btn small class="ml-6">
                    <v-icon
                        color="green darken-2"
                        @click="spostati(0)"
                    >
                        mdi-home
                    </v-icon>
                </v-btn>
            </v-col>
            <v-col v-else class="flex">
                <v-col>
                    <v-icon
                        large
                        color="green darken-2"
                        @click="spostati(-1)"
                    >
                        mdi-arrow-left-bold-circle
                    </v-icon>
                    <v-icon
                        large
                        color="green darken-2"
                        @click="spostati(0)"
                    >
                        mdi-home
                    </v-icon>
                    <v-icon
                        large
                        color="green darken-2"
                        @click="spostati(1)"
                    >
                        mdi-arrow-right-bold-circle
                    </v-icon>
                </v-col>
            </v-col>
        </v-row>
        <v-row class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </v-row>
        <v-row v-else>
            <v-col cols="4" md="1" lg="1">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Lunedì"
                    :giorno="getDateSettimana[0]"
                    :giornoPerRicerca="getDateSettimana[5]"
                    :appuntamenti="getAppLun"
                    :eventi="getEventiSettimana[0]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].luniniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].luniniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].lun : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].lun : null"
                />
            </v-col>
            <v-col cols="4" md="1" lg="1" v-if="$vuetify.breakpoint.xs">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Martedì"
                    :giorno="getDateSettimana[1]"
                    :giornoPerRicerca="getDateSettimana[6]"
                    :appuntamenti="getAppMar"
                    :eventi="getEventiSettimana[1]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].mariniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].mariniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].mar : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].mar : null"
                />
            </v-col>
            <v-col cols="4" md="1" lg="1" v-if="$vuetify.breakpoint.xs">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Mercoledì"
                    :giorno="getDateSettimana[2]"
                    :giornoPerRicerca="getDateSettimana[7]"
                    :appuntamenti="getAppMer"
                    :eventi="getEventiSettimana[2]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].meriniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].meriniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].mer : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].mer : null"
                />
            </v-col>
            <v-col cols="4" md="1" lg="1" v-if="$vuetify.breakpoint.xs">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Giovedì"
                    :giorno="getDateSettimana[3]"
                    :giornoPerRicerca="getDateSettimana[8]"
                    :appuntamenti="getAppGio"
                    :eventi="getEventiSettimana[3]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].gioiniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].gioiniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].gio : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].gio : null"
                />
            </v-col>
            <v-col cols="4" md="1" lg="1" v-if="$vuetify.breakpoint.xs">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Venerdì"
                    :giorno="getDateSettimana[4]"
                    :giornoPerRicerca="getDateSettimana[9]"
                    :appuntamenti="getAppVen"
                    :eventi="getEventiSettimana[4]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].veniniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].veniniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].ven : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].ven : null"
                />
            </v-col>
            <v-col cols="4" md="1" lg="1" v-if="$vuetify.breakpoint.xs">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col xs="8" md="" lg="">
                <giorno
                    titolo="Sabato"
                    :giorno="getDateSettimana[10]"
                    :giornoPerRicerca="getDateSettimana[11]"
                    :appuntamenti="getAppSab"
                    :eventi="getEventiSettimana[5]"
                    :doveMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].sabiniz : null"
                    :dovePomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].sabiniz : null"
                    :strutturaMattina="getSettimanaDelMese[0] ? getSettimanaDelMese[0].sab : null"
                    :strutturaPomeriggio="getSettimanaDelMese[1] ? getSettimanaDelMese[1].sab : null"
                />
            </v-col>
        </v-row>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Giorno from "./Giorno";
    import MessaggioEventoPresente from "./MessaggioEventoPresente";

    export default {
        name: "Diario",
        components: {MessaggioEventoPresente, Giorno},
        data(){
            return {
                menu:false,
                getQuando: ['mattina', 'pomeriggio', 'giorno'],
                getCosa: ['negozio', 'recapito', 'screening', 'domicilio', 'permesso'],
                newEvent: {},
                carica: false,
                nrSettimana:0,
                ricerca:{}
            }
        },

        mounted(){
            window.Echo.channel("appuntamentoChannel").listen(".task-created", e => {
                //console.log(e.appuntamento.user_id + ' - ' +  this.getIdUser)
                if(e.appuntamento.user_id === this.getIdUser){
                    this.caricaDati(this.nrSettimana);
                }
            });
            this.fetchDataDiOggi();
            this.fetchDateSettimana();
            this.caricaDati(null);
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchDateSettimana:'fetchDateSettimana',
                fetchSettimanaDelMese:'fetchSettimanaDelMese',
                fetchDataDiOggi:'fetchDataDiOggi',

                fetchAppLun:'fetchAppLun',
                fetchAppMar:'fetchAppMar',
                fetchAppMer:'fetchAppMer',
                fetchAppGio:'fetchAppGio',
                fetchAppVen:'fetchAppVen',
                fetchAppSab:'fetchAppSab',
            }),

            ...mapActions('eventi', {
                addEvento:'addEvento',
                fetchEventiSettimana:'fetchEventiSettimana',
            }),

            spostati(settimana){
                if (settimana === 0){
                    this.fetchDateSettimana();
                    this.nrSettimana = 0;
                    this.caricaDati(null);
                } else {
                    this.nrSettimana += settimana;
                    this.fetchDateSettimana(this.nrSettimana);
                    this.caricaDati(this.nrSettimana);
                }

            },

            caricaDati(direzione){
                this.carica = true;
                this.ricerca.idAudio = this.getIdUser;
                this.ricerca.direzione = direzione;
                this.fetchSettimanaDelMese(this.ricerca).then(() => {
                    this.fetchAppLun(this.ricerca).then(() => {
                        this.fetchAppMar(this.ricerca).then(() => {
                            this.fetchAppMer(this.ricerca).then(() => {
                                this.fetchAppGio(this.ricerca).then(() => {
                                    this.fetchAppVen(this.ricerca).then(() => {
                                        this.fetchAppSab(this.ricerca).then(() => {
                                            this.fetchEventiSettimana(this.ricerca).then(() => {
                                                this.carica = false;
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                })

            },

            inserisciEvento(){
                this.newEvent.user_id = this.getIdUser;
                this.addEvento(this.newEvent).then(() => {
                    this.newEvent = {};
                    this.caricaDati(this.nrSettimana);
                });
            },

            cancellaMessaggio(){
                this.$store.commit('eventi/resetMessaggioEventoGiaPresente');
            }

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getDateSettimana:'getDateSettimana',
                getSettimanaDelMese:'getSettimanaDelMese',

                getAppLun:'getAppLun',
                getAppMar:'getAppMar',
                getAppMer:'getAppMer',
                getAppGio:'getAppGio',
                getAppVen:'getAppVen',
                getAppSab:'getAppSab',
            }),

            ...mapGetters('eventi', {
                getEventoPresente:'getEventoPresente',
                getEventiSettimana:'getEventiSettimana',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

            bloccaInserimento(){
                return this.newEvent.giorno && this.newEvent.quando && this.newEvent.cosa ? false : true;
            }

        },
    }
</script>

<style>

</style>
