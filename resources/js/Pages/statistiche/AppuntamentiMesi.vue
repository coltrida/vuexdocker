<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>Dettaglio Mesi</h2>
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
                        <router-link style="color: black" :to="{ name: 'statisticheAppuntamenti'}">
                            <v-btn color="primary">
                                Statistiche Appuntamenti
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
                    :items="getStatisticheAppuntamentiMesi"
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
                    { text: 'Gen',  align: 'start', sortable: false, value: 'gennaio', class: "indigo white--text" },
                    { text: 'Feb',  align: 'start', sortable: false, value: 'febbraio', class: "indigo white--text" },
                    { text: 'Mar',  sortable: false, value: 'marzo', class: "indigo white--text" },
                    { text: 'Apr',  sortable: false, value: 'aprile', class: "indigo white--text" },
                    { text: 'Mag',  sortable: false, value: 'maggio', class: "indigo white--text" },
                    { text: 'Giu',  sortable: false, value: 'giugno', class: "indigo white--text" },
                    { text: 'Lug',  sortable: false, value: 'luglio', class: "indigo white--text" },
                    { text: 'Ago',  sortable: false, value: 'agosto', class: "indigo white--text" },
                    { text: 'Set',  sortable: false, value: 'settembre', class: "indigo white--text" },
                    { text: 'Ott',  sortable: false, value: 'ottobre', class: "indigo white--text" },
                    { text: 'Nov',  sortable: false, value: 'novembre', class: "indigo white--text" },
                    { text: 'Dic',  sortable: false, value: 'dicembre', class: "indigo white--text" },
                    { text: 'Totale',  sortable: false, value: 'totale', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
            this.$store.commit('appuntamenti/resetStatisticheAppuntamenti');
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchStatisticheAppuntamentiMesi:'fetchStatisticheAppuntamentiMesi',
            }),

            selezionaAnno(){
                this.fetchStatisticheAppuntamentiMesi(this.ricerca);
            },

            sumField(key) {
                return this.getStatisticheAppuntamenti.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getStatisticheAppuntamentiMesi: 'getStatisticheAppuntamentiMesi',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),

        }
    }
</script>

<style scoped>

</style>
