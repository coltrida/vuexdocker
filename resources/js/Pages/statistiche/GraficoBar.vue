<script>
    import { Bar } from 'vue-chartjs';
    export default {
        name: "Grafico",
        extends: Bar,
        props: {
            chartdata: {
                type: Object,
                default: null
            },
            options: {
                type: Object,
                default: null
            }
        },
        mounted () {
            this.renderChart(this.chartdata, this.options)
        },

        watch:{
            chartdata(){
                this.renderChart(this.chartdata, this.options)
            }
        }
    }
</script>

<style scoped>

</style>
