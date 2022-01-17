<template>
    <div class="flex justify-start align-center my-4">
            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>
            <div v-else>
                <v-row>
                    <v-col cols="12" md="4" lg="4" v-for="audio in getAppuntamentiDiTuttiAudio" :key="audio.id">
                        <h3>{{audio.name}}</h3>
                        <v-data-table
                            :headers="headers"
                            dense
                            :items="audio.appuntamenti_oggi"
                            class="elevation-1"
                            :items-per-page=5
                            height="200"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td style="font-size: 12px">{{item.orario.substr(0, 5)}}</td>
                                    <td style="font-size: 12px">
                                        <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.client.nome, cogRicerca:item.client.fullname, }}">
                                            {{item.client.fullname}}
                                        </router-link>
                                    </td>
                                    <td style="font-size: 12px">{{item.client.citta}}</td>
                                    <td>
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
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-col>

                    <v-col cols="12" md="4" lg="4">
                        <h3>Riepilogo Sospesi</h3>
                        <v-data-table
                            :headers="headers1"
                            dense
                            :items="getAppuntamentiDiTuttiAudio"
                            class="elevation-1"
                            :items-per-page=5
                            height="200"
                            :sort-by="['sospesi']"
                            :sort-desc="[true]"
                        >
                            <template v-slot:item="{ item }">
                                <tr v-if="item.sospesi > 0">
                                    <td style="font-size: 12px">{{item.name}}</td>
                                    <td style="font-size: 12px">{{item.sospesi}}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </div>

    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "homeAppAdmin",

        data() {
            return {
                carica: false,
                headers: [
                    {text: 'Orario', width:60,  value: 'orario', sortable: false, class: "indigo white--text"},
                    {text: 'Nome', width:180, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Città', width:80,  value: 'client.citta', sortable: false, class: "indigo white--text"},
                    {text: 'Esito', width:70, align: 'esito',  value: 'intervenuto', sortable: false, class: "indigo white--text"},
                ],

                headers1: [
                    {text: 'Audio', width:250,  value: 'name', sortable: false, class: "red white--text"},
                    {text: 'Sospesi', width:180, value: 'sospesi', sortable: false, class: "red white--text"},
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchAppuntamentiDiTuttiAudio().then(() => {
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchAppuntamentiDiTuttiAudio: 'fetchAppuntamentiDiTuttiAudio',
            }),
        },

        computed: {
            ...mapGetters('appuntamenti', {
                getAppuntamentiDiTuttiAudio: 'getAppuntamentiDiTuttiAudio',
            }),
        },
    }
</script>

<style scoped>

</style>
