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

                    <template v-slot:item.prova_fattura_sum_tot="{ item }">
                        {{item.prova_fattura_sum_tot ? item.prova_fattura_sum_tot.toLocaleString('it') : null}}
                    </template>

                    <template v-slot:item.clients_count="{ item }">
                        {{item.clients_count ? item.clients_count.toLocaleString('it') : null}}
                    </template>

                    <template v-slot:item.percentuale="{ item }">
                            {{ item.prova_fattura_sum_tot ?
                        Math.round((item.prova_fattura_sum_tot / getCanaliFatturato.reduce((a, b) => ({prova_fattura_sum_tot: a.prova_fattura_sum_tot + b.prova_fattura_sum_tot})).prova_fattura_sum_tot ) * 100) + ' %':
                                0 }}
                    </template>

                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title">{{ sumField('prova_fattura_sum_tot') ? sumField('prova_fattura_sum_tot').toLocaleString('it') : null }}</th>
                            <th class="title">{{ sumField('clients_count') ? sumField('clients_count').toLocaleString('it') : null }}</th>
                            <th class="title"></th>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
                <div v-for="audio in getUserCanaliFatturato" :key="audio.id" class="mt-8">
                    <v-data-table
                        dense
                        :headers="headers2"
                        :items="audio.valori"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >

                        <template v-slot:item.prova_fattura_sum_tot="{ item }">
                            {{item.prova_fattura_sum_tot ? item.prova_fattura_sum_tot.toLocaleString('it') : null}}
                        </template>

                        <template v-slot:item.clients_count="{ item }">
                            {{item.clients_count ? item.clients_count.toLocaleString('it') : null}}
                        </template>

                        <template v-slot:item.percentuale="{ item }">
                            {{ item.prova_fattura_sum_tot ?
                            Math.round((item.prova_fattura_sum_tot / audio.valori.reduce((a, b) => ({prova_fattura_sum_tot: a.prova_fattura_sum_tot + b.prova_fattura_sum_tot})).prova_fattura_sum_tot ) * 100) + ' %':
                            0 }}
                        </template>

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
    export default {
        name: "AssegnaBudget",
        data(){
            return {
                ricerca:{},
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Fatturato', sortable: false, value: 'prova_fattura_sum_tot', class: "indigo white--text" },
                    { text: 'Ingressi', sortable: false, value: 'clients_count', class: "indigo white--text" },
                    { text: '%', sortable: false, value: 'percentuale', class: "indigo white--text" },
                ],

                headers2: [
                    { text: 'Nome', width: 300, align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Fatturato', width: 300, sortable: false, value: 'prova_fattura_sum_tot', class: "indigo white--text" },
                    { text: 'Ingressi', width: 300, sortable: false, value: 'clients_count', class: "indigo white--text" },
                    { text: '%', sortable: false, value: 'percentuale', class: "indigo white--text" },
                ],
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
