<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>Prescrizioni Mediche</h2>
            </v-col>
            <v-col cols="6">
                <v-row>
                    <v-col>
                        <v-select
                            @change="selezionaAnno()"
                            v-model="ricerca.anno"
                            :items="anni"
                            label="Anno"
                        ></v-select>
                    </v-col>
                    <v-col class="d-flex justify-end align-center">
                        <router-link style="color: black" :to="{ name: 'statisticheMedici'}">
                            <v-btn color="primary">
                                Riepilogo Annuale
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <h2>Ingressi Medici per Mese</h2>
                <v-data-table
                    dense
                    :headers="headers"
                    :items="getMediciMesi"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:item.audio="{ item }">
                        <div v-for="audio in item.user" :key="audio.id">
                            {{audio.name}}
                        </div>
                    </template>

                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title"></th>
                            <th class="title">{{ sumField('gen') }}</th>
                            <th class="title">{{ sumField('feb') }}</th>
                            <th class="title">{{ sumField('mar') }}</th>
                            <th class="title">{{ sumField('apr') }}</th>
                            <th class="title">{{ sumField('mag') }}</th>
                            <th class="title">{{ sumField('giu') }}</th>
                            <th class="title">{{ sumField('lug') }}</th>
                            <th class="title">{{ sumField('ago') }}</th>
                            <th class="title">{{ sumField('set') }}</th>
                            <th class="title">{{ sumField('ott') }}</th>
                            <th class="title">{{ sumField('nov') }}</th>
                            <th class="title">{{ sumField('dic') }}</th>
                            <th class="title">{{ sumField('clients_count') }}</th>
                            <th class="title"></th>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                ricerca:{},
                anni:['2021'],

                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'fullname', class: "indigo white--text" },
                    { text: 'Audio', align: 'start', sortable: false, value: 'audio', class: "indigo white--text" },
                    { text: 'gen', sortable: false, value: 'gen', class: "indigo white--text" },
                    { text: 'feb', sortable: false, value: 'feb', class: "indigo white--text" },
                    { text: 'mar', sortable: false, value: 'mar', class: "indigo white--text" },
                    { text: 'apr', sortable: false, value: 'apr', class: "indigo white--text" },
                    { text: 'mag', sortable: false, value: 'mag', class: "indigo white--text" },
                    { text: 'giu', sortable: false, value: 'giu', class: "indigo white--text" },
                    { text: 'lug', sortable: false, value: 'lug', class: "indigo white--text" },
                    { text: 'ago', sortable: false, value: 'ago', class: "indigo white--text" },
                    { text: 'set', sortable: false, value: 'set', class: "indigo white--text" },
                    { text: 'ott', sortable: false, value: 'ott', class: "indigo white--text" },
                    { text: 'nov', sortable: false, value: 'nov', class: "indigo white--text" },
                    { text: 'dic', sortable: false, value: 'dic', class: "indigo white--text" },
                    { text: 'Totale', align: 'start', sortable: false, value: 'clients_count', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
        },

        methods:{
            ...mapActions('medici', {
                fetchMediciMesi:'fetchMediciMesi',
            }),

            selezionaAnno(){
                this.fetchMediciMesi(this.ricerca);
            },

            sumField(key) {
                return this.getMediciMesi.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed:{
            ...mapGetters('medici', {
                getMediciMesi:'getMediciMesi',
            }),

        }
    }
</script>

<style scoped>

</style>
