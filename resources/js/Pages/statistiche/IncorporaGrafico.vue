<template>
        <grafico-bar :chartdata="chartData" :options="chartOptions"/>
</template>

<script>
    import GraficoBar from "./GraficoBar";
    export default {
        name: "IncorporaGrafico",
        components: {GraficoBar},
        props: {
            valoripassati: {
                type: Object,
                default: null
            },
            budget: {
                type: Object,
                default: null
            },
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
                        {
                            label: 'budget',
                            tension: 0,
                            fill: false,
                            backgroundColor: '#f89a8d',
                            borderColor: 'rgb(192,8,9)',
                            data: [
                                this.budget.gennaio,
                                this.budget.febbraio,
                                this.budget.marzo,
                                this.budget.aprile,
                                this.budget.maggio,
                                this.budget.giugno,
                                this.budget.luglio,
                                this.budget.agosto,
                                this.budget.settembre,
                                this.budget.ottobre,
                                this.budget.novembre,
                                this.budget.dicembre,
                            ]
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
