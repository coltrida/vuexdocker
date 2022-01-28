<template>

    <appuntamenti-dettagli
        v-if="showDettagli"
        :elementi="elementi"
        :titolo="titolo"
        @chiudiDettagli = "chiudiDettagli"
    />

    <v-row class="mt-3 flex-column" v-else>
        <v-row>
            <v-col cols="6">
                <h2>Statistiche Appuntamenti</h2>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col>
                        <v-select
                            @change="selezionaAnno()"
                            v-model="ricerca.anno"
                            :items="getAnni"
                            label="Anno"
                        ></v-select>
                    </v-col>
                    <v-col class="d-flex justify-end align-center">
                        <router-link style="color: black" :to="{ name: 'statisticheAppuntamentiMesi'}">
                            <v-btn color="primary">
                                Dettagli Mensili
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <v-data-table
                    :headers="header"
                    :items="getStatisticheAppuntamenti"
                    class="elevation-1"
                >
                    <template v-slot:item="{ item }">
                        <tr>
                            <td>{{item.name}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Assistenze '+ item.name, item.assistenza)">{{item.assistenza.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Consegne '+ item.name, item.consegna)">{{item.consegna.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Controlli Prova '+ item.name, item.controllo_prova)">{{item.controllo_prova.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Esami Audio '+ item.name, item.esame_audio)">{{item.esame_audio.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Fine Prova '+ item.name, item.fine_prova)">{{item.fine_prova.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Informazioni '+ item.name, item.informazioni)">{{item.informazioni.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Prime Visite '+ item.name, item.prima_visita)">{{item.prima_visita.length}}</td>
                            <td style="cursor: pointer" @click="seleziona('Appuntamenti Pulizie '+ item.name, item.pulizia)">{{item.pulizia.length}}</td>
                            <td>{{item.Totale}}</td>
                        </tr>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>

    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import AppuntamentiDettagli from "./AppuntamentiDettagli";
    export default {
        name: "Appuntamenti",
        components: {AppuntamentiDettagli},
        data(){
            return {
                ricerca:{},
                showAppuntamenti:true,
                showDettagli: false,
                titolo:'',
                elementi: [],
                header: [
                    { text: 'Audio',  align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Assistenza',  align: 'start', sortable: false, value: 'Assistenza', class: "indigo white--text" },
                    { text: 'Consegna',  align: 'start', sortable: false, value: 'Consegna', class: "indigo white--text" },
                    { text: 'Controllo Prova',  sortable: false, value: 'ControlloProva', class: "indigo white--text" },
                    { text: 'Esame Audio',  sortable: false, value: 'EsameAudio', class: "indigo white--text" },
                    { text: 'Fine prova',  sortable: false, value: 'FineProva', class: "indigo white--text" },
                    { text: 'Informazioni',  sortable: false, value: 'Informazioni', class: "indigo white--text" },
                    { text: 'Prima Visita',  sortable: false, value: 'PrimaVisita', class: "indigo white--text" },
                    { text: 'Pulizia',  sortable: false, value: 'Pulizia', class: "indigo white--text" },
                    { text: 'Totale',  sortable: false, value: 'Totale', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
            this.$store.commit('appuntamenti/resetStatisticheAppuntamenti');
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchStatisticheAppuntamenti:'fetchStatisticheAppuntamenti',
            }),

            selezionaAnno(){
                this.fetchStatisticheAppuntamenti(this.ricerca);
            },

            sumField(key) {
                return this.getStatisticheAppuntamenti.reduce((a, b) => a + (b[key] || 0), 0)
            },

            seleziona(titolo, valori){
                this.titolo = titolo;
                this.elementi = valori;
                this.showAppuntamenti = false;
                this.showDettagli = true;
            },

            chiudiDettagli(){
                this.titolo = '';
                this.elementi = [];
                this.showAppuntamenti = true;
                this.showDettagli = false;
            }

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getStatisticheAppuntamenti: 'getStatisticheAppuntamenti',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),

        }
    }
</script>

<style scoped>

</style>
