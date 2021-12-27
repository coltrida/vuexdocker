<template>
    <div>
        <v-row class="my-4">
            <v-col cols="7">
                <v-row style="font-size: 10px" class="flex">
                    <v-col>
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
                                    style="font-size: 10px"
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
                    <v-col>
                        <v-select
                            style="font-size: 10px"
                            v-model="newEvent.quando"
                            :items="getQuando"
                            label="Quando"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-select
                            style="font-size: 10px"
                            v-model="newEvent.cosa"
                            :items="getCosa"
                            label="Cosa"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            style="font-size: 10px"
                            v-model="newEvent.evento"
                            label="Dettaglio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-select
                            style="font-size: 10px"
                            v-model="newEvent.user_id"
                            item-value="id"
                            item-text="name"
                            :items="listaAudio"
                            label="audio"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-btn small :disabled="bloccaInserimento" color="primary" @click="inserisciEvento" :block="$vuetify.breakpoint.xs">
                            Inserisci
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="1">
                <v-select
                    style="font-size: 10px"
                    @change="scegliAudio"
                    v-model="ricerca.idAudio"
                    item-value="id"
                    item-text="name"
                    :items="listaAudio2"
                    :label="'settimana '+getDateSettimana[12]"
                ></v-select>
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
            <v-col class="flex">
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
            <v-col cols="1">
                <giorno
                    titolo="Orario"
                    giorno=""
                />
            </v-col>
            <v-col>
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
            <v-col>
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
            <v-col>
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
            <v-col>
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
            <v-col>
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
            <v-col>
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

    export default {
        name: "Diario",
        components: {Giorno},
        data(){
            return {
                listaAudio:[],
                listaAudio2:[],
                menu:false,
                newEvent: {},
                getQuando: ['mattina', 'pomeriggio', 'giorno'],
                getCosa: ['negozio', 'recapito', 'screening', 'domicilio', 'permesso', 'festivo'],
                carica: false,
                nrSettimana:0,
                ricerca:{}
            }
        },

        mounted(){
            this.$store.commit('appuntamenti/resetAppuntamenti');
            this.fetchAudio().then(() => {
                this.getAudio.forEach(ele => {
                    this.listaAudio.push(ele);
                    this.listaAudio2.push(ele);
                });
                this.listaAudio.unshift({
                    'id': 0,
                    'name' : 'TUTTI'
                });
            });
            this.fetchDataDiOggi();
            this.fetchDateSettimana();
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

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
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

            scegliAudio(){
                this.caricaDati(null);
            },

            caricaDati(direzione){
                this.carica = true;
                /*this.ricerca.idAudio = this.getIdUser;*/
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
                this.addEvento(this.newEvent).then(() => {
                    this.newEvent = {};
                });
            },
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
                getMostraInserimentoEvento:'getMostraInserimentoEvento',
                getEventiSettimana:'getEventiSettimana',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),

            /*selezioneAudio(){
                this.listaAudio = this.getAudio;
                this.listaAudio.unshift({
                    'id': 0,
                    'name' : 'TUTTI'
                });
                return this.listaAudio;
            },*/

            bloccaInserimento(){
                return false;
            }

        },
    }
</script>

<style>

</style>
