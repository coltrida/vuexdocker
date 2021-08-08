<template>
    <div>
        <h2>Statistiche Audioprotesisti</h2>

        <v-row v-for="audio in getAudioConBgt" :key="audio.id" class="mb-5">
            <v-col cols="8">
                <div >
                    <div style="display: flex; align-items: center; justify-content: space-between">
                        <h3>{{audio.name}}</h3>
                        <!--<h4>Media Vendita {{audio.valori[1].budgetAnno / audio.valori[3].budgetAnno}}</h4>-->
                    </div>

                    <v-data-table
                        :headers="headers"
                        :items="audio.valori"
                        :item-key="audio.valori.nome"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >

                    </v-data-table>
                </div>
            </v-col>

            <v-col cols="4">
                <incorpora-grafico :valoripassati="audio.valori[1]" :options="chartOptions"/>
            </v-col>

            <!--<v-col cols="4">
                <grafico :chartdata="chartData" :options="chartOptions"/>
            </v-col>-->
        </v-row>


    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Grafico from "./Grafico";
    import IncorporaGrafico from "./IncorporaGrafico";
    export default {
        name: "AssegnaBudget",
        components: {IncorporaGrafico, Grafico},
        data(){
            return {
                AudioSelected: [],
                switch: 0,
                singleSelect: true,
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Anno', sortable: false, value: 'budgetAnno', class: "indigo white--text" },
                    { text: 'Genn', sortable: false, value: 'gennaio', class: "indigo white--text" },
                    { text: 'Febb', sortable: false, value: 'febbraio', class: "indigo white--text" },
                    { text: 'Marzo', sortable: false, value: 'marzo', class: "indigo white--text" },
                    { text: 'April', sortable: false, value: 'aprile', class: "indigo white--text" },
                    { text: 'Magg', sortable: false, value: 'maggio', class: "indigo white--text" },
                    { text: 'Giug', sortable: false, value: 'giugno', class: "indigo white--text" },
                    { text: 'Lugl', sortable: false, value: 'luglio', class: "indigo white--text" },
                    { text: 'Agos', sortable: false, value: 'agosto', class: "indigo white--text" },
                    { text: 'Sett', sortable: false, value: 'settembre', class: "indigo white--text" },
                    { text: 'Otto', sortable: false, value: 'ottobre', class: "indigo white--text" },
                    { text: 'Nove', sortable: false, value: 'novembre', class: "indigo white--text" },
                    { text: 'Dice', sortable: false, value: 'dicembre', class: "indigo white--text" },
                ],

                chartData:{

                        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                        datasets: [
                            {
                                backgroundColor: '#f87979',
                                data: [2, 3]
                            },
                        ]

                },

                chartOptions:{

                        responsive: true,
                        maintainAspectRatio: false,
                        /*scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 10,
                                    min: -120
                                }
                            }]
                        }*/

                },

                assegna: {
                    budgetAnno:0,
                    stipendio: 0,
                    provvigione: 0,
                    mese: []
                }
            }
        },

        mounted() {
            this.fetchSituazioneAnno();
        },

        methods:{
            ...mapActions('users', {
                fetchSituazioneAnno:'fetchSituazioneAnno',
            }),

        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
            }),

        }
    }
</script>

<style scoped>

</style>
