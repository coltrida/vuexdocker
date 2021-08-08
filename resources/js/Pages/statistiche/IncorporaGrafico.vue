<template>
        <grafico :chartdata="chartData" :options="chartOptions"/>
</template>

<script>
    import Grafico from "./Grafico";
    export default {
        name: "IncorporaGrafico",
        components: {Grafico},
        props: {
            valoripassati: {
                type: Object,
                default: null
            }
        },

        data(){
            return{
                chartData:{

                    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    datasets: [
                        {
                            label: 'Fatturato',
                            tension: 0,
                            fill: false,
                            backgroundColor: '#a8c3f8',
                            borderColor: 'rgb(0,1,192)',
                            data: [
                                this.valoripassati.gennaio,
                                this.valoripassati.febbraio,
                                this.valoripassati.marzo,
                                this.valoripassati.aprile,
                                this.valoripassati.maggio,
                                this.valoripassati.giugno,
                                this.valoripassati.luglio,
                                this.valoripassati.agosto,
                                this.valoripassati.settembre,
                                this.valoripassati.ottobre,
                                this.valoripassati.novembre,
                                this.valoripassati.dicembre,
                            ]
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
            }
        }
    }
</script>

<style scoped>

</style>
