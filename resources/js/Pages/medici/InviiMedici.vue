<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>Invii Medici</h2>
            </v-col>
            <v-col cols="6">
                <v-select
                    @change="selezionaAnno()"
                    v-model="ricerca.anno"
                    :items="anni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="6">
                <v-data-table
                    :headers="header"
                    :items="getInvii"
                    hide-default-footer
                    class="elevation-1"
                >
                </v-data-table>
            </v-col>
            <v-col cols="6">
                <v-data-table
                    :headers="header2"
                    :items="getTotaliInvii"
                    hide-default-footer
                    class="elevation-1"
                >

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

                anni:['2021'],

                header: [
                    { text: 'Medico',  align: 'start', sortable: false, value: 'medico.nome', class: "indigo white--text" },
                    { text: 'Nome',  align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Importo Fattura',  sortable: false, value: 'prova[0].tot', class: "indigo white--text" },
                ],

                header2: [
                    { text: 'Medico',  align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Tot invii',  sortable: false, value: 'invii', class: "indigo white--text" },
                    { text: 'Vendite',  sortable: false, value: 'vendite', class: "indigo white--text" },
                    { text: 'Importo',  sortable: false, value: 'prova_sum_tot', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
        },

        methods:{
            ...mapActions('medici', {
                inviiMedici:'inviiMedici',
                totaleInviiMedici:'totaleInviiMedici',
            }),

            selezionaAnno(){
                this.ricerca.idUser = this.getIdUser;
                this.inviiMedici(this.ricerca);
                this.totaleInviiMedici(this.ricerca);
            },

        },

        computed:{
            ...mapGetters('medici', {
                getInvii: 'getInvii',
                getTotaliInvii: 'getTotaliInvii',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

        }
    }
</script>

<style scoped>

</style>
