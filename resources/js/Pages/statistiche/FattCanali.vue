<template>
    <div>
        <h2>Fatturato Canali</h2>
        <v-row>
            <v-col cols="8">
                <v-data-table
                    dense
                    :headers="headers"
                    :items="getCanaliFatturato"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                    <template v-slot:item.percentuale="{ item }">
                            {{ item.prova_fattura_sum_tot ?
                        (item.prova_fattura_sum_tot / getCanaliFatturato.reduce((a, b) => ({prova_fattura_sum_tot: a.prova_fattura_sum_tot + b.prova_fattura_sum_tot})).prova_fattura_sum_tot ).toFixed(2) * 100 + ' %':
                                0 }}
                    </template>

                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title">{{ sumField('prova_fattura_sum_tot') }}</th>
                            <th class="title">{{ sumField('clients_count') }}</th>
                            <th class="title"></th>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
            <v-col cols="4">
                <!--<incorpora-torta
                    :valoripassati="getCanaliFatturato[1]"
                    :options="chartOptions"/>-->
            </v-col>
        </v-row>
                <div v-for="audio in getUserCanaliFatturato" :key="audio.id" class="mt-8">
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="audio.valori"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >

                        <template v-slot:header.name="{ header }">
                            {{ audio.name }}
                        </template>

                        <!--<template slot="body.append">
                            <tr class="pink&#45;&#45;text">
                                <th class="title">Totali</th>
                                <th class="title">{{ sumField('prova_fattura_sum_tot') }}</th>
                                <th class="title">{{ sumField('clients_count') }}</th>
                                <th class="title"></th>
                            </tr>
                        </template>-->
                    </v-data-table>
                </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import IncorporaTorta from "./IncorporaTorta";
    export default {
        name: "AssegnaBudget",
        components: {IncorporaTorta},
        data(){
            return {
                ricerca:{},
                headers: [
                    { text: 'Nome', width: 300, align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Fatturato', sortable: false, value: 'prova_fattura_sum_tot', class: "indigo white--text" },
                    { text: 'Ingressi', sortable: false, value: 'clients_count', class: "indigo white--text" },
                    { text: '%', sortable: false, value: 'percentuale', class: "indigo white--text" },
                ],

                chartOptions:{

                    responsive: true,
                    maintainAspectRatio: false,
                },
            }
        },

        mounted() {
            this.fetchCanaliFatturato();
            this.fetchUserCanaliFatturato();
        },

        methods:{
            ...mapActions('marketing', {
                fetchCanaliFatturato:'fetchCanaliFatturato',
                fetchUserCanaliFatturato:'fetchUserCanaliFatturato',
            }),

            sumField(key) {
                return this.getCanaliFatturato.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed:{
            ...mapGetters('marketing', {
                getCanaliFatturato:'getCanaliFatturato',
                getUserCanaliFatturato:'getUserCanaliFatturato',
            }),
        }
    }
</script>

<style scoped>

</style>
