<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>{{audiogrammaClient.nome}} {{audiogrammaClient.cognome}}</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <div v-if="creaAudiogramma">
            <nuovo
                :client_id = audiogrammaClient.id
                @tornaVisualizza="tornaVisualizza"
                @salvaAudiometria="salvaAudiometria"
            />
        </div>
        <div v-else>
            <v-row class="flex-row">
                <v-col cols="12" md="12" lg="5" xs="12" sm="12" v-if="audiogrammaClient.audiometria.length > 0">
                    <Visualizza :chartdata="chartDataS" :options="chartOptions" />
                </v-col>
                <v-col cols="12" md="12" lg="5" xs="12" sm="12" v-if="audiogrammaClient.audiometria.length > 0">
                    <Visualizza :chartdata="chartDataD" :options="chartOptions" />
                </v-col>
                <v-col cols="12" md="12" lg="2" xs="12" sm="12">
                    <div>
                        <v-btn @click="aggiungiAudiogramma" color="success" dark :block="$vuetify.breakpoint.xs">
                            Nuovo
                        </v-btn>
                    </div>

                    <div v-for="(audio, index) in audiogrammaClient.audiometria" :key="audio.id">
                        <v-btn @click="visualizzaAudiogramma(index)" color="purple" dark class="mt-2" :block="$vuetify.breakpoint.xs">
                            {{audio.created_at.substring(0, 10)}}
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-row>
</template>

<script>
    import Visualizza from "./Visualizza";
    import Nuovo from "./Nuovo";
    import LineChart from "./LineChart";

    export default {
        name: "Audiogramma",
        components: {LineChart, Nuovo, Visualizza},

        data(){
            return {
                creaAudiogramma: false,
                indice: 0,
            }
        },

        props: [ 'audiogrammaClient' ],

        methods:{
            cancella(){
                this.$emit('chiudiAudiogramma')
            },

            aggiungiAudiogramma(){
                this.creaAudiogramma = true;
            },

            tornaVisualizza(){
                this.creaAudiogramma = false;
            },

            visualizzaAudiogramma(index){
                this.indice = index;
            },

            salvaAudiometria(audio){
                this.audiogrammaClient.audiometria.unshift(audio);
                this.indice = 0;
            }
        },

        computed:{
            chartDataD(){
                return {
                    labels: ['125', '250', '500', '1000', '1500', '2000', '3000', '4000', '6000', '8000'],
                    datasets: [
                        {
                            label: 'Destro',
                            backgroundColor: '#f87979',
                            borderColor: 'rgb(192,8,0)',
                            radius: 5,
                            tension: 0,
                            fill: false,
                            data: [
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._125d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._250d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._500d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1000d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1500d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._2000d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._3000d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._4000d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._6000d),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._8000d),
                            ]
                        },
                        {
                            label: 'Oss D',
                            backgroundColor: '#f87979',
                            borderColor: 'rgb(192,8,0)',
                            pointStyle: 'triangle',
                            rotation: 90,
                            showLine:false,
                            radius: 7,
                            tension: 0,
                            fill: false,
                            data: [
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._125ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._250ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._500ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1000ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1500ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._2000ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._3000ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._4000ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._6000ossd),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._8000ossd),
                            ]
                        },
                        {
                            label: 'Normoudente',
                            backgroundColor: 'rgba(115,250,10,0.2)',
                            borderColor: 'rgba(126,192,88,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-20, -20, -20, -20, -20, -20, -20, -25, -30, -30]
                        },
                        {
                            label: 'ipoacusia',
                            backgroundColor: 'rgba(250,235,45,0.2)',
                            borderColor: 'rgba(192,186,118,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-40, -40, -45, -45, -50, -60, -65, -70, -70, -70]
                        },
                        {
                            label: 'ipoacusia grave',
                            backgroundColor: 'rgba(250,107,50,0.2)',
                            borderColor: 'rgba(192,106,110,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-70, -70, -75, -75, -80, -90, -100, -100, -100, -100]
                        }
                    ]
                }
            },

            chartDataS(){
                return {
                    labels: ['125', '250', '500', '1000', '1500', '2000', '3000', '4000', '6000', '8000'],
                    datasets: [
                        {
                            label: 'Sinistro',
                            backgroundColor: '#a8c3f8',
                            borderColor: 'rgb(0,1,192)',
                            pointStyle: 'cross',
                            rotation: 40,
                            radius: 7,
                            tension: 0,
                            fill: false,
                            data: [
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._125s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._250s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._500s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1000s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1500s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._2000s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._3000s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._4000s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._6000s),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._8000s),
                            ]
                        },
                        {
                            label: 'Oss S',
                            backgroundColor: '#a8c3f8',
                            borderColor: 'rgb(0,1,192)',
                            pointStyle: 'triangle',
                            rotation: 30,
                            showLine:false,
                            radius: 7,
                            tension: 0,
                            fill: false,
                            data: [
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._125osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._250osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._500osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1000osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._1500osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._2000osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._3000osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._4000osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._6000osss),
                                - parseInt(this.audiogrammaClient.audiometria[this.indice]._8000osss),
                            ]
                        },
                        {
                            label: 'Normoudente',
                            backgroundColor: 'rgba(115,250,10,0.2)',
                            borderColor: 'rgba(126,192,88,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-20, -20, -20, -20, -20, -20, -20, -25, -30, -30]
                        },
                        {
                            label: 'ipoacusia',
                            backgroundColor: 'rgba(250,235,45,0.2)',
                            borderColor: 'rgba(192,186,118,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-40, -40, -45, -45, -50, -60, -65, -70, -70, -70]
                        },
                        {
                            label: 'ipoacusia grave',
                            backgroundColor: 'rgba(250,107,50,0.2)',
                            borderColor: 'rgba(192,106,110,0.11)',
                            radius: 1,
                            tension: 0,
                            fill: true,
                            data: [-70, -70, -75, -75, -80, -90, -100, -100, -100, -100]
                        }
                    ]
                }
            },

            chartOptions(){
                return {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 10,
                                min: -120
                            }
                        }]
                    }

                }
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>
