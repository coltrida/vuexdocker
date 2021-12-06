<template>
    <div>
        <h2>Calendar</h2>
        <div>
            <v-row>
                <v-col
                    cols="5"
                    sm="5"
                >
                    <v-select
                        @change="visualizza()"
                        v-model="userId"
                        item-value="id"
                        item-text="name"
                        :items="getAudio"
                        label="Seleziona"
                        :readonly="fissaAudio"
                    ></v-select>
                </v-col>

                <!--<v-col
                    cols="3"
                    sm="3"
                >
                    <v-btn @click="visualizza" dark color="indigo">
                        Visualizza
                    </v-btn>
                </v-col>-->

                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-btn-toggle
                        v-model="text"
                        tile
                        color="deep-purple accent-3"
                        group
                    >
                        <v-btn value="left" @click="visualizza">
                            Attuale
                        </v-btn>

                        <v-btn value="center" @click="prossima">
                            Prossima
                        </v-btn>

                    </v-btn-toggle>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-col>
                        <h3>Lunedi - {{getDateSettimana[0]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppLun"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <!--<template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                            <template v-slot:item.note="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.note }}
                                </div>
                            </template>-->

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h3>Martedì - {{getDateSettimana[1]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppMar"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                            <!--<template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                            <template v-slot:item.note="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.note }}
                                </div>
                            </template>-->

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h3>Mercoledì - {{getDateSettimana[2]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppMer"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h3>Giovedì - {{getDateSettimana[3]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppGio"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h3>Venerdì - {{getDateSettimana[4]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppVen"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h3>Sabato - {{getDateSettimana[10]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppSab"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                        </v-data-table>
                    </v-col>

                </v-col>
            </v-row>


        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Calendar",

        props:['audioprot', 'fissaNome'],

        data(){
            return {
                text: 'left',
                userId:this.audioprot,
                headers1: [
                    { text: 'Orario', width: 30, align: 'start', sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'Nome', width: 100, align: 'start', sortable: false, value: 'fullname', class: "indigo white--text" },
                    { text: 'Luogo', width:80, align: 'start', sortable: false, value: 'luogo', class: "indigo white--text" },
                    { text: 'Tipo', width:110, align: 'start', sortable: false, value: 'tipo', class: "indigo white--text" },
                    { text: 'Note', width:110, align: 'start', sortable: false, value: 'nota', class: "indigo white--text" },
                ],

            }
        },

        mounted(){
            window.Echo.channel("appuntamentoChannel").listen(".task-created", e => {
                if (this.userId){
                    this.fetchAppuntamentiLunedi(this.userId);
                    this.fetchAppuntamentiMartedi(this.userId);
                    this.fetchAppuntamentiMercoledi(this.userId);
                    this.fetchAppuntamentiGiovedi(this.userId);
                    this.fetchAppuntamentiVenerdi(this.userId);
                    this.fetchAppuntamentiSabato(this.userId);

                    this.prossimoLunedi(this.userId);
                    this.prossimoMartedi(this.userId);
                    this.prossimoMarcoledi(this.userId);
                    this.prossimoGiovedi(this.userId);
                    this.prossimoVenerdi(this.userId);
                    this.prossimoSabato(this.userId);
                }
            });

            this.fetchAudio();
            this.fetchDateSettimana();
            this.$store.commit('appuntamenti/resetAppuntamenti');
            this.$store.commit('appuntamenti/setSettimanaDaVisualizzare', 'attuale');
            if(this.audioprot){
                this.visualizza();
            }
        },

        methods:{
            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            ...mapActions('appuntamenti', {
                fetchAppuntamentiLunedi:'fetchAppuntamentiLunedi',
                fetchAppuntamentiMartedi:'fetchAppuntamentiMartedi',
                fetchAppuntamentiMercoledi:'fetchAppuntamentiMercoledi',
                fetchAppuntamentiGiovedi:'fetchAppuntamentiGiovedi',
                fetchAppuntamentiVenerdi:'fetchAppuntamentiVenerdi',
                fetchAppuntamentiSabato:'fetchAppuntamentiSabato',

                prossimoLunedi:'prossimoLunedi',
                prossimoMartedi:'prossimoMartedi',
                prossimoMarcoledi:'prossimoMarcoledi',
                prossimoGiovedi:'prossimoGiovedi',
                prossimoVenerdi:'prossimoVenerdi',
                prossimoSabato:'prossimoSabato',

                fetchDateSettimana:'fetchDateSettimana',
                fetchDateSettimanaProssima:'fetchDateSettimanaProssima',
            }),

            visualizza(){
                this.text = 'left';
                this.$store.commit('appuntamenti/setSettimanaDaVisualizzare', 'attuale');
                this.fetchAppuntamentiLunedi(this.userId);
                this.fetchAppuntamentiMartedi(this.userId);
                this.fetchAppuntamentiMercoledi(this.userId);
                this.fetchAppuntamentiGiovedi(this.userId);
                this.fetchAppuntamentiVenerdi(this.userId);
                this.fetchAppuntamentiSabato(this.userId);

                this.fetchDateSettimana();
            },

            prossima(){
                this.$store.commit('appuntamenti/setSettimanaDaVisualizzare', 'prossima');
                this.prossimoLunedi(this.userId);
                this.prossimoMartedi(this.userId);
                this.prossimoMarcoledi(this.userId);
                this.prossimoGiovedi(this.userId);
                this.prossimoVenerdi(this.userId);
                this.prossimoSabato(this.userId);

                this.fetchDateSettimanaProssima();
            }

        },

        computed:{
            ...mapGetters('users', {
                getAudio:'getAudio'
            }),

            ...mapGetters('appuntamenti', {
                getAppLun:'getAppLun',
                getAppMar:'getAppMar',
                getAppMer:'getAppMer',
                getAppGio:'getAppGio',
                getAppVen:'getAppVen',
                getAppSab:'getAppSab',

                getDateSettimana:'getDateSettimana',
            }),

            fissaAudio(){
                return this.fissaNome ? true : false;
            }

        },
    }
</script>

<style scoped>

</style>
