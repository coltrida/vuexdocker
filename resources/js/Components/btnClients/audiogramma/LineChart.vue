<script>
    import { Line } from 'vue-chartjs';
    export default {
        name: "LineChart",
        extends: Line,
        data: () => ({
            chartdata: {
                labels: ['January', 'February'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [40, 20]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }),
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>

</style>
