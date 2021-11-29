<template>
    <div>
        <v-row class="mt-4">
            <v-col>
                <h2>Ventaglio Prodotti</h2>
            </v-col>
            <v-col>
                <v-select
                    @change="selezionaAnno()"
                    v-model="ricerca.anno"
                    :items="getAnni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="getVentaglioAnno"
                        :item-key="getVentaglioAnno.id"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >
                            <template v-for="apa in getNomiApa" v-slot:[`item.${apa}`]="{ item }">
                                <div>
                                    {{ item.tot > 0 ? ((item[apa] / item.tot) * 100).toFixed(0)+'%' : 0 }}
                                </div>
                            </template>

                    </v-data-table>
            </v-col>
        </v-row>

        <h2 class="mt-10">Pezzi Venduti</h2>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="getVentaglioAnno"
                    :item-key="getVentaglioAnno.id"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >
                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title">{{ sumField('tot') }}</th>
                            <th v-for="apa in getNomiApa" class="title">{{ sumField(apa) }}</th>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

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
                    { text: 'Audioprotesista', align: 'start', sortable: false, value: 'user.name', class: "indigo white--text" },
                    { text: 'Totale', sortable: false, value: 'tot', class: "indigo white--text" },
                ],

                headers2: [
                    { text: 'Audioprotesista', align: 'start', sortable: false, value: 'user.name', class: "indigo white--text" },
                    { text: 'Totale', sortable: false, value: 'tot', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchNomiApa().then(() =>{
                this.inizializzaTabella();
            });
        },

        methods:{
            ...mapActions('users', {
                fetchVentaglioAnno:'fetchVentaglioAnno',
            }),

            ...mapActions('listino', {
                fetchNomiApa:'fetchNomiApa',
            }),

            inizializzaTabella(){
                this.getNomiApa.forEach(ele => {
                    let colonna = {
                        text: ele,
                        sortable: false,
                        value: ele,
                        class: "indigo white--text"
                    };
                    this.headers.push(colonna);
                    this.headers2.push(colonna);
                })
            },

            selezionaAnno(){
                this.fetchVentaglioAnno(this.ricerca);
            },

            sumField(key) {
                return parseInt(this.getVentaglioAnno.reduce((a, b) => a + parseInt(b[key] || 0), 0))
            }

        },

        computed:{
            ...mapGetters('users', {
                getVentaglioAnno:'getVentaglioAnno',
            }),

            ...mapGetters('listino', {
                getNomiApa:'getNomiApa',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),
        }
    }
</script>

<style scoped>

</style>
