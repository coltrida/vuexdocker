<template>
        <grafico-torta :chartdata="chartData" :options="chartOptions"/>
</template>

<script>
    import GraficoTorta from "./GraficoTorta";
    export default {
        name: "IncorporaGrafico",
        components: {GraficoTorta},
        props: {
            valoripassati: {
                type: Object,
                default: null
            },
        },

        data(){
            return{
                chartData:{

                    labels: this.valoripassati.name,
                    datasets: [
                        {
                            label: 'Fatturato',
                            tension: 0,
                            fill: false,
                            backgroundColor: '#a8c3f8',
                            borderColor: 'rgb(0,1,192)',
                            data: this.valoripassati.prova_fattura_sum_tot,
                        },
                    ]

                },

                chartOptions:{
                    responsive: true,
                    maintainAspectRatio: false,
                },
            }
        }
    }
</script>

<style scoped>

</style>
