<template>
    <div>
        <div class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div v-else>
            <v-row  class="mb-5">
                <v-col cols="8" class="pt-10">
                    <div >
                        <div style="display: flex; align-items: center; justify-content: space-between">
                            <h1 class="my-5">Riepilogo -
                                <v-chip
                                    color="primary"
                                    outlined
                                    pill
                                >
                                    Fatturato tot. {{getTotFatt.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="green"
                                    outlined
                                >
                                    Bgt Anno. {{totBgt.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="deep-purple accent-4"
                                    outlined
                                >
                                    Bgt Prog. {{getTotBgtProg.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="red accent-4"
                                    outlined
                                >
                                    Fatt. vs Bgt Prog: {{ (((getTotFatt - getTotBgtProg) / getTotBgtProg) * 100).toFixed(0) }} %
                                </v-chip>
                            </h1>
                        </div>

                        <v-data-table
                            :headers="headers"
                            :items="riepilogo"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{item.nome}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 ? item.budgetAnno.toLocaleString('it') : item.budgetAnno}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.gennaio ? item.gennaio.toLocaleString('it') : item.gennaio}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.febbraio ? item.febbraio.toLocaleString('it') : item.febbraio}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.marzo ? item.marzo.toLocaleString('it') : item.marzo}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.aprile ? item.aprile.toLocaleString('it') : item.aprile}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.maggio ? item.maggio.toLocaleString('it') : item.maggio}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.giugno ? item.giugno.toLocaleString('it') : item.giugno}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.luglio ? item.luglio.toLocaleString('it') : item.luglio}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.agosto ? item.agosto.toLocaleString('it') : item.agosto}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.settembre ? item.settembre.toLocaleString('it') : item.settembre}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.ottobre ? item.ottobre.toLocaleString('it') : item.ottobre}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.novembre ? item.novembre.toLocaleString('it') : item.novembre}}</td>
                                    <td>{{riepilogo.indexOf(item) < 2 && item.dicembre ? item.dicembre.toLocaleString('it') : item.dicembre}}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="4">
                    <incorpora-grafico
                        :valoripassati="riepilogo[1] || {}"
                        :budget="riepilogo[0] || {}"
                        :options="chartOptions"/>
                </v-col>

            </v-row>

            <v-row v-for="audio in getAudioConBgt" :key="audio.id" class="mb-5">
                <v-col cols="8" class="pt-10">
                    <div >
                        <div style="display: flex; align-items: center; justify-content: space-between">
                            <h3>{{audio.name}}
                                -
                                <v-chip
                                    color="primary"
                                    label
                                    outlined
                                >
                                    Fatt. tot. {{audio.valori[1].budgetAnno.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="green"
                                    label
                                    outlined
                                >
                                    Bgt Anno {{audio.valori[0].budgetAnno.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="deep-purple accent-4"
                                    label
                                    outlined
                                >
                                    Bgt Prog. {{audio.valori[0].premio.toLocaleString('it')}}
                                </v-chip>
                                -
                                <v-chip
                                    color="red accent-4"
                                    label
                                    outlined
                                >
                                    Fatt. vs Bgt Prog: {{ (((audio.valori[1].budgetAnno - audio.valori[0].premio) / audio.valori[0].premio) * 100).toFixed(0) }} %
                                </v-chip>
                            </h3>

                        </div>

                        <v-data-table
                            :headers="headers"
                            :items="audio.valori"
                            :item-key="audio.valori.nome"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{item.nome}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 ? item.budgetAnno.toLocaleString('it') : item.budgetAnno}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.gennaio ? item.gennaio.toLocaleString('it') : item.gennaio}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.febbraio ? item.febbraio.toLocaleString('it') : item.febbraio}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.marzo ? item.marzo.toLocaleString('it') : item.marzo}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.aprile ? item.aprile.toLocaleString('it') : item.aprile}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.maggio ? item.maggio.toLocaleString('it') : item.maggio}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.giugno ? item.giugno.toLocaleString('it') : item.giugno}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.luglio ? item.luglio.toLocaleString('it') : item.luglio}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.agosto ? item.agosto.toLocaleString('it') : item.agosto}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.settembre ? item.settembre.toLocaleString('it') : item.settembre}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.ottobre ? item.ottobre.toLocaleString('it') : item.ottobre}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.novembre ? item.novembre.toLocaleString('it') : item.novembre}}</td>
                                    <td>{{audio.valori.indexOf(item) < 2 && item.dicembre ? item.dicembre.toLocaleString('it') : item.dicembre}}</td>
                                </tr>
                            </template>
                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="4">
                    <incorpora-grafico
                        :valoripassati="audio.valori[1]"
                        :budget="audio.valori[0]"
                        :options="chartOptions"/>
                    <!--{{audio.valori[1]}}-->
                </v-col>

            </v-row>
        </div>
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
                carica: false,
                riepilogo: [],
                ele: {
                    'nome' : '',
                    'budgetAnno': 0,
                    'gennaio': 0,
                    'febbraio': 0,
                    'marzo': 0,
                    'aprile': 0,
                    'maggio': 0,
                    'giugno': 0,
                    'luglio': 0,
                    'agosto': 0,
                    'settembre': 0,
                    'ottobre': 0,
                    'novembre': 0,
                    'dicembre': 0,
                },
                totBgt: 0,
                totFatturatoAnno: 0,
                totBgtMesi: [0,0,0,0,0,0,0,0,0,0,0,0],
                totFattMesi: [0,0,0,0,0,0,0,0,0,0,0,0],
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
            this.carica = true;
            this.fetchSituazioneAnno().then(() => {
                this.getAudioConBgt.forEach(ele =>  {
                    this.totBgt += ele.valori[0].budgetAnno;
                    this.totFatturatoAnno += ele.valori[1].budgetAnno;

                    this.ele.nome = 'Budget';
                    this.ele.budgetAnno += parseInt(ele.valori[0].budgetAnno);
                    this.ele.gennaio += parseInt(ele.valori[0].gennaio);
                    this.ele.febbraio += parseInt(ele.valori[0].febbraio);
                    this.ele.marzo += parseInt(ele.valori[0].marzo);
                    this.ele.aprile += parseInt(ele.valori[0].aprile);
                    this.ele.maggio += parseInt(ele.valori[0].maggio);
                    this.ele.giugno += parseInt(ele.valori[0].giugno);
                    this.ele.luglio += parseInt(ele.valori[0].luglio);
                    this.ele.agosto += parseInt(ele.valori[0].agosto);
                    this.ele.settembre += parseInt(ele.valori[0].settembre);
                    this.ele.ottobre += parseInt(ele.valori[0].ottobre);
                    this.ele.novembre += parseInt(ele.valori[0].novembre);
                    this.ele.dicembre += parseInt(ele.valori[0].dicembre);
                });

                this.riepilogo.push(this.ele);

                this.ele = {
                    'nome' : '',
                    'budgetAnno': 0,
                    'gennaio': 0,
                    'febbraio': 0,
                    'marzo': 0,
                    'aprile': 0,
                    'maggio': 0,
                    'giugno': 0,
                    'luglio': 0,
                    'agosto': 0,
                    'settembre': 0,
                    'ottobre': 0,
                    'novembre': 0,
                    'dicembre': 0,
                };

                this.getAudioConBgt.forEach(ele =>  {
                    this.ele.nome = 'Fatturati';
                    this.ele.budgetAnno += parseInt(ele.valori[1].budgetAnno);
                    this.ele.gennaio += parseInt(ele.valori[1].gennaio);
                    this.ele.febbraio += parseInt(ele.valori[1].febbraio);
                    this.ele.marzo += parseInt(ele.valori[1].marzo);
                    this.ele.aprile += parseInt(ele.valori[1].aprile);
                    this.ele.maggio += parseInt(ele.valori[1].maggio);
                    this.ele.giugno += parseInt(ele.valori[1].giugno);
                    this.ele.luglio += parseInt(ele.valori[1].luglio);
                    this.ele.agosto += parseInt(ele.valori[1].agosto);
                    this.ele.settembre += parseInt(ele.valori[1].settembre);
                    this.ele.ottobre += parseInt(ele.valori[1].ottobre);
                    this.ele.novembre += parseInt(ele.valori[1].novembre);
                    this.ele.dicembre += parseInt(ele.valori[1].dicembre);
                });

                this.riepilogo.push(this.ele);

                this.ele = {
                    'nome' : '',
                    'budgetAnno': 0,
                    'gennaio': 0,
                    'febbraio': 0,
                    'marzo': 0,
                    'aprile': 0,
                    'maggio': 0,
                    'giugno': 0,
                    'luglio': 0,
                    'agosto': 0,
                    'settembre': 0,
                    'ottobre': 0,
                    'novembre': 0,
                    'dicembre': 0,
                };

                this.ele.nome = 'Delta';
                //console.log((((this.riepilogo[1].budgetAnno / this.riepilogo[0].budgetAnno)-1)*100).toFixed(1));
                this.ele.budgetAnno = this.riepilogo[1].budgetAnno ?
                    (((this.riepilogo[1].budgetAnno / this.riepilogo[0].budgetAnno)-1)*100).toFixed(1) +'%' : null;
                this.ele.gennaio = 0;
                this.ele.febbraio = 0;
                this.ele.marzo = 0;
                this.ele.aprile = 0;
                this.ele.maggio = 0;
                this.ele.giugno = 0;
                this.ele.luglio = 0;
                this.ele.agosto = 0;
                this.ele.settembre = 0;
                this.ele.ottobre = 0;
                this.ele.novembre = this.riepilogo[1].novembre ?
                    (((this.riepilogo[1].novembre / this.riepilogo[0].novembre)-1)*100).toFixed(1) +'%' : null;


                this.ele.dicembre = 0;

                this.riepilogo.push(this.ele);
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('users', {
                fetchSituazioneAnno:'fetchSituazioneAnno',
            }),

        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
                getTotFatt:'getTotFatt',
                getTotBgtProg:'getTotBgtProg',
            }),

        }
    }
</script>

<style scoped>

</style>
