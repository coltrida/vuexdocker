<template>
    <v-row class="mt-3 flex-column">
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
                </v-data-table>
            </v-col>
        </v-row>

    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Appuntamenti",

        data(){
            return {
                ricerca:{},

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
