<template>
    <div>
        <div class="flex justify-start align-center">
            <div><h2>Rate Clienti</h2></div>
        </div>

        <rate-lista :listarate="rateSelezione"
                    :dialog-pro="dialogRate"
                    v-if="dialogRate"
                    @chiudiRate="chiudiRate"
        />

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Ricerca"
            single-line
            hide-details
        ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="getAllClientsDaSaldare"
            :items-per-page="10"
            :search="search"
            class="elevation-1 mt-3"
        >

            <template v-slot:item.rate="{ item }">
                <v-btn @click="seleziona(item.rate)" color="green" dark>
                    <v-icon
                        color="white"
                        small
                    >
                        mdi-format-list-bulleted-square
                    </v-icon>
                </v-btn>
            </template>

        </v-data-table>
    </div>

</template>

<script>
    import RateLista from "./RateLista";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "RatealiAdmin",
        components: { RateLista },
        data() {
            return {
                dialogRate: false,
                rateSelezione: [],
                search: '',
                headers: [
                    {text: 'Ultima Rata', width: 130, align: 'start', value: 'ultima_rata', class: "indigo white--text"},
                    {text: 'Data Fattura', width: 130, value: 'data_fattura', class: "indigo white--text"},
                    {text: 'Nome', width: 230, value: 'prova.client.fullname', class: "indigo white--text"},
                    {text: 'Totale Fattura', width: 150, value: 'tot_fattura', class: "indigo white--text"},
                    {text: 'Al Saldo', width: 150, value: 'al_saldo', class: "indigo white--text"},
                    {text: 'Rate', width: 150, value: 'rate', class: "indigo white--text"},
                    {text: 'Audio', width: 150, value: 'prova.user.name', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchAllClientsDaSaldare();
        },

        methods: {
            ...mapActions('rate', {
                fetchAllClientsDaSaldare: 'fetchAllClientsDaSaldare',
            }),

            seleziona(items){
                this.dialogRate = true;
                this.rateSelezione = items;
            },

            chiudiRate(){
                this.dialogRate = false;
                this.rateSelezione = [];
            }

        },

        computed: {
            ...mapGetters('rate', {
                getAllClientsDaSaldare: 'getAllClientsDaSaldare',
            }),

        },
    }
</script>

<style scoped>

</style>
