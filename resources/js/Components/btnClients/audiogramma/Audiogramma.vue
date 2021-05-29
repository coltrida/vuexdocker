<template>
    <div class="text-center">
        <div v-if="creaAudiogramma">
            <nuovo
                :client_id = audiogrammaClient.id
                @tornaVisualizza="tornaVisualizza"
            />
        </div>
        <div v-else>
            <div class="row">
                <h2>{{audiogrammaClient.nome}} {{audiogrammaClient.cognome}}</h2>
                <div class="col-10 flex" v-if="audiogrammaClient.audiometria.length > 0">
                    <Visualizza :chartdata="chartDataD" :options="chartOptions" />
                    <Visualizza :chartdata="chartDataS" :options="chartOptions" />
                </div>
                <div class="col-2">
                    <div>
                        <v-btn @click="aggiungiAudiogramma" color="success" dark>
                            Nuovo
                        </v-btn>
                    </div>

                    <div v-for="audio in audiogrammaClient.audiometria" :key="audio.id">
                        <v-btn @click="visualizzaAudiogramma(audio)" color="purple" dark class="mt-2">
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

            visualizzaAudiogramma(audio){
                this.audiogramma = audio;
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
                            tension: 0.1,
                            fill: false,
                            data: [
                               - parseInt(this.audiogrammaClient.audiometria[0]._125d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._250d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._500d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._1000d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._1500d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._2000d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._3000d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._4000d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._6000d),
                               - parseInt(this.audiogrammaClient.audiometria[0]._8000d),
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
                            backgroundColor: '#f87979',
                            tension: 0.1,
                            fill: false,
                            data: [
                                - parseInt(this.audiogrammaClient.audiometria[0]._125s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._250s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._500s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._1000s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._1500s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._2000s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._3000s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._4000s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._6000s),
                                - parseInt(this.audiogrammaClient.audiometria[0]._8000s),
                            ]
                        }
                    ]
                }
            },

            chartOptions(){
                return {
                    responsive: true,
                    maintainAspectRatio: false,
                }
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>
