<template>
    <div class="text-center">
        <div v-if="creaAudiogramma">
            <nuovo
                :client_id = audiogrammaClient.id
                @tornaVisualizza="tornaVisualizza"
                @salvaAudiometria="salvaAudiometria"
            />
        </div>
        <div v-else>
            <div class="row">
                <h2>{{audiogrammaClient.nome}} {{audiogrammaClient.cognome}}</h2>
                <div class="col-10 flex" v-if="audiogrammaClient.audiometria.length > 0">
                    <Visualizza :chartdata="chartDataS" :options="chartOptions" />
                    <Visualizza :chartdata="chartDataD" :options="chartOptions" />
                </div>
                <div class="col-2">
                    <div>
                        <v-btn @click="aggiungiAudiogramma" color="success" dark>
                            Nuovo
                        </v-btn>
                    </div>

                    <div v-for="(audio, index) in audiogrammaClient.audiometria" :key="audio.id">
                        <v-btn @click="visualizzaAudiogramma(index)" color="purple" dark class="mt-2">
                            {{audio.created_at.substring(0, 10)}}
                        </v-btn>
                    </div>

                    <div>
                        <v-btn color="primary" dark @click="cancella" class="mt-2">
                            Chiudi
                        </v-btn>
                    </div>

                </div>
            </div>


        </div>
    </div>
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
