<template>
    <div>
        <div class="flex justify-start align-center mt-2">
            <div><h2>Clienti Saldati</h2></div>
        </div>
        <v-data-table
            hide-default-footer
            :headers="headers2"
            :items="lista"
            class="elevation-1 mt-3"
        >
            <template v-slot:item.prova.client.fullname="{ item }">
                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.prova.client.filiale_id, nomRicerca:item.prova.client.nome, cogRicerca:item.prova.client.fullname, }}">
                    {{item.prova.client.fullname}}
                </router-link>
            </template>

            <template v-slot:item.rate="{ item }">
                    <v-icon
                        @click="seleziona(item.rate)"
                        color="green"
                        dark
                        small
                    >
                        mdi-format-list-bulleted-square
                    </v-icon>
            </template>
        </v-data-table>

        <rate-lista :listarate="rateSelezione"
                    :dialog-pro="dialogRate"
                    v-if="dialogRate"
                    @chiudiRate="chiudiRate"
        />
    </div>

</template>

<script>
    import RateLista from "./RateLista";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "ClientsFiliale",

        components: { RateLista },

        props: ['idAudio'],

        data() {
            return {
                dialogRate: false,
                rateSelezione: [],
                lista: [],

                headers2: [
                    {text: 'Data Saldo', width: 130, value: 'data_saldo', class: "indigo white--text"},
                    {text: 'Data Fattura', width: 130, value: 'data_fattura', class: "indigo white--text"},
                    {text: 'Nome', width: 230, value: 'prova.client.fullname', class: "indigo white--text"},
                    {text: 'Rate', width: 150, value: 'rate', class: "indigo white--text"},
                    {text: 'Totale Fattura', width: 150, value: 'tot_fattura', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchClientsSaldati(this.idAudio).then(() => {
                if(this.getClientsSaldati.length > 0){
                    this.lista = this.getClientsSaldati
                }
            });
        },

        methods: {
            ...mapActions('rate', {
                fetchClientsSaldati: 'fetchClientsSaldati',
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
                getClientsSaldati: 'getClientsSaldati',
            }),

        },
    }
</script>

<style scoped>

</style>
