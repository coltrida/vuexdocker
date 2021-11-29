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
                            :items="getAnni"
                            label="Anno"
                        ></v-select>
                    </v-col>
                    <v-col class="d-flex justify-end align-center">
                        <router-link style="color: black" :to="{ name: 'mediciMesi'}">
                            <v-btn color="primary">
                                Dettagli Mensili
                            </v-btn>
                        </router-link>
                    </v-col>
                </v-row>

            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="6">
                <h2>Dettagli Pazienti</h2>
                <v-data-table
                    :headers="header"
                    :items="getStatisticheInvii"
                    class="elevation-1"
                >
                    <template v-slot:item.nome="{ item }">
                        <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                            {{item.fullname}}
                        </router-link>
                    </template>
                </v-data-table>
            </v-col>

            <v-col cols="6">
                <h2>Resoconto Anno</h2>
                <v-data-table
                    :headers="header2"
                    :items="getStatisticheTotaliInvii"
                    hide-default-footer
                    class="elevation-1"
                >
                    <template v-slot:item.audioprotesisti="{ item }">
                        <div v-for="ele in item.user" :key="ele.id">
                            {{ele.name}}
                        </div>
                    </template>

                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title"></th>
                            <th class="title">{{ sumField('invii') }}</th>
                            <th class="title">{{ sumField('vendite') }}</th>
                            <th class="title">{{ sumField('prova_finalizzata_sum_tot') }}</th>
                        </tr>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>

        <v-row>

        </v-row>

    </v-row>



</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "OrariMedici",

        data(){
            return {
                ricerca:{},

                header: [
                    { text: 'Audio',  align: 'start', sortable: false, value: 'user.name', class: "indigo white--text" },
                    { text: 'Medico',  align: 'start', sortable: false, value: 'medico.fullname', class: "indigo white--text" },
                    { text: 'Nome',  align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Importo',  sortable: false, value: 'prova[0].tot', class: "indigo white--text" },
                    { text: 'Stato',  sortable: false, value: 'prova[0].stato.nome', class: "indigo white--text" },
                ],

                header2: [
                    { text: 'Medico',  align: 'start', sortable: false, value: 'fullname', class: "indigo white--text" },
                    { text: 'Audio',  align: 'start', sortable: false, value: 'audioprotesisti', class: "indigo white--text" },
                    { text: 'Tot invii',  sortable: false, value: 'invii', class: "indigo white--text" },
                    { text: 'Vendite',  sortable: false, value: 'vendite', class: "indigo white--text" },
                    { text: 'Importo',  sortable: false, value: 'prova_finalizzata_sum_tot', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
            this.$store.commit('medici/resetInvii');
        },

        methods:{
            ...mapActions('medici', {
                statisticheInviiMedici:'statisticheInviiMedici',
                statisticheTotaleInviiMedici:'statisticheTotaleInviiMedici',
            }),

            selezionaAnno(){
                //console.log(this.ricerca)
                this.statisticheInviiMedici(this.ricerca);
                this.statisticheTotaleInviiMedici(this.ricerca);
            },

            sumField(key) {
                return this.getStatisticheTotaliInvii.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed:{
            ...mapGetters('medici', {
                getStatisticheInvii: 'getStatisticheInvii',
                getStatisticheTotaliInvii: 'getStatisticheTotaliInvii',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),

        }
    }
</script>

<style scoped>

</style>
