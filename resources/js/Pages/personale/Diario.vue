<template>
    <div>
        <v-row class="my-4">
            <v-col cols="12" md="6" lg="6">
                <h2>Agenda</h2>
            </v-col>
            <v-col cols="3" md="1" lg="1">
                <v-chip
                    style="width: 100px"
                    color="teal lighten-4"
                    label
                >
                    filiale
                </v-chip>
            </v-col>
            <v-col cols="3" md="1" lg="1">
                <v-chip
                    style="width: 100px"
                    color="lime lighten-3"
                    label
                >
                    recapito
                </v-chip>
            </v-col>
            <v-col cols="3" md="1" lg="1">
                <v-chip
                    style="width: 100px"
                    color="orange lighten-3"
                    label
                >
                    screening
                </v-chip>
            </v-col>
            <v-col cols="3" md="1" lg="1">
                <v-chip
                    style="width: 100px"
                    color="brown lighten-3"
                    label
                >
                    domicili
                </v-chip>
            </v-col>
            <v-col cols="12" md="1" lg="1">
                <v-row class="flex-nowrap">
                    <v-col class="d-flex justify-center">

                            <v-icon
                                large
                                color="green darken-2"
                                @click="spostati(-1)"
                            >
                                mdi-arrow-left-bold-circle
                            </v-icon>

                    </v-col>
                    <v-col class="d-flex justify-center">
                        <v-icon
                            large
                            color="green darken-2"
                            @click="spostati(0)"
                        >
                            mdi-home
                        </v-icon>
                    </v-col>
                    <v-col class="d-flex justify-center">

                            <v-icon
                                large
                                color="green darken-2"
                                @click="spostati(1)"
                            >
                                mdi-arrow-right-bold-circle
                            </v-icon>

                    </v-col>
                </v-row>
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

    export default {
        name: "Diario",
        components: {Giorno},
        data(){
            return {
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

            this.fetchDateSettimana();
            this.caricaDati(null);
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchDateSettimana:'fetchDateSettimana',
                fetchSettimanaDelMese:'fetchSettimanaDelMese',

                fetchAppLun:'fetchAppLun',
                fetchAppMar:'fetchAppMar',
                fetchAppMer:'fetchAppMer',
                fetchAppGio:'fetchAppGio',
                fetchAppVen:'fetchAppVen',
                fetchAppSab:'fetchAppSab',
            }),

            spostati(settimana){
                if (settimana === 0){
                    this.fetchDateSettimana();
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
                                            this.carica = false;
                                        });
                                    });
                                });
                            });
                        });
                    });
                })

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

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

        },
    }
</script>

<style>

</style>
