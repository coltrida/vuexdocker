<template>
    <div class="my-2">
        <v-row>
            <v-col cols="6">
                <h2>Agenda Settimana</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <!--<v-btn color="primary" dark @click="">
                    Chiudi
                </v-btn>-->

                <v-btn-toggle
                    v-model="text"
                    tile
                    color="deep-purple accent-3"
                    group
                >
                    <v-btn value="left" @click="attuale">
                        Attuale
                    </v-btn>

                    <v-btn value="center" @click="prossima">
                        Prossima
                    </v-btn>

                </v-btn-toggle>

            </v-col>
        </v-row>
        <div>
            <v-row>
                <v-col cols="12" class="flex">
                    <v-col>
                        <h3>Lunedi - {{getDateSettimana[0]}}</h3>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppLun"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item.fullname="{ item }">
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

                            <template v-slot:item.fullname="{ item }">
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

                            <template v-slot:item.fullname="{ item }">
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

                            <template v-slot:item.fullname="{ item }">
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

                            <template v-slot:item.fullname="{ item }">
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
        name: "Settimana",

        data(){
            return {
                text: 'left',
                headers1: [
                    { text: 'Orario', width: 60, align: 'start', sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'Nome', width: 100, align: 'start', sortable: false, value: 'fullname', class: "indigo white--text" },
                    { text: 'Luogo', width:80, align: 'start', sortable: false, value: 'luogo', class: "indigo white--text" },
                ],

            }
        },

        mounted(){

            window.Echo.channel("appuntamentoChannel").listen(".task-created", e => {
                if (this.text === 'left'){
                    this.fetchAppuntamentiLunedi(this.getIdUser);
                    this.fetchAppuntamentiMartedi(this.getIdUser);
                    this.fetchAppuntamentiMercoledi(this.getIdUser);
                    this.fetchAppuntamentiGiovedi(this.getIdUser);
                    this.fetchAppuntamentiVenerdi(this.getIdUser);
                } else {
                    this.prossimoLunedi(this.getIdUser);
                    this.prossimoMartedi(this.getIdUser);
                    this.prossimoMarcoledi(this.getIdUser);
                    this.prossimoGiovedi(this.getIdUser);
                    this.prossimoVenerdi(this.getIdUser);
                }
            });

            this.fetchAppuntamentiLunedi(this.getIdUser);
            this.fetchAppuntamentiMartedi(this.getIdUser);
            this.fetchAppuntamentiMercoledi(this.getIdUser);
            this.fetchAppuntamentiGiovedi(this.getIdUser);
            this.fetchAppuntamentiVenerdi(this.getIdUser);
            this.fetchDateSettimana();
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchAppuntamentiLunedi:'fetchAppuntamentiLunedi',
                fetchAppuntamentiMartedi:'fetchAppuntamentiMartedi',
                fetchAppuntamentiMercoledi:'fetchAppuntamentiMercoledi',
                fetchAppuntamentiGiovedi:'fetchAppuntamentiGiovedi',
                fetchAppuntamentiVenerdi:'fetchAppuntamentiVenerdi',
                prossimoLunedi:'prossimoLunedi',
                prossimoMartedi:'prossimoMartedi',
                prossimoMarcoledi:'prossimoMarcoledi',
                prossimoGiovedi:'prossimoGiovedi',
                prossimoVenerdi:'prossimoVenerdi',
                fetchDateSettimana:'fetchDateSettimana',
                fetchDateSettimanaProssima:'fetchDateSettimanaProssima',
            }),

            attuale(){
                this.fetchAppuntamentiLunedi(this.getIdUser);
                this.fetchAppuntamentiMartedi(this.getIdUser);
                this.fetchAppuntamentiMercoledi(this.getIdUser);
                this.fetchAppuntamentiGiovedi(this.getIdUser);
                this.fetchAppuntamentiVenerdi(this.getIdUser);
                this.fetchDateSettimana();
            },

            prossima(){
                this.prossimoLunedi(this.getIdUser);
                this.prossimoMartedi(this.getIdUser);
                this.prossimoMarcoledi(this.getIdUser);
                this.prossimoGiovedi(this.getIdUser);
                this.prossimoVenerdi(this.getIdUser);

                this.fetchDateSettimanaProssima();
            }

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getAppLun:'getAppLun',
                getAppMar:'getAppMar',
                getAppMer:'getAppMer',
                getAppGio:'getAppGio',
                getAppVen:'getAppVen',
                getDateSettimana:'getDateSettimana',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

        },
    }
</script>

<style scoped>

</style>
