<template>
    <div>
        <h2>Filtra ricerca</h2>

            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.tipo"
                        item-value="id"
                        item-text="nome"
                        :items="getTipologie"
                        label="tipo"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        @change="caricaCitta()"
                        v-model="ricerca.provincia"
                        :items="getProvince"
                        label="Prov."
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.citta"
                        :items="getCittaByProvincia"
                        label="Città"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="ricerca.filiale"
                        item-value="id"
                        item-text="nome"
                        :items="getFilialiPerInserimento"
                        label="Filiale"
                    ></v-select>
                </v-col>
            </v-row>

            <v-btn @click="trova" color="success" dark>
                Ricerca
            </v-btn>

    <div>
        <v-data-table
            :headers="headers"
            :items="getRicercaNominativi"
            class="elevation-1 mt-3"
        >
        </v-data-table>
    </div>


    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Clients",
        data() {
            return {
                ricerca:{},
                headers: [
                    {text: 'Cognome', width: 160, align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', width: 160, value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', width: 250, value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', width: 150, value: 'citta', class: "indigo white--text"},
                    {text: 'cap', width: 70, value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', width: 130, value: 'telefono', class: "indigo white--text"},
                    {text: 'telefono 2', width: 130, value: 'telefono2', class: "indigo white--text"},
                    {text: 'telefono 3', width: 130, value: 'telefono3', class: "indigo white--text"},
                    {text: 'tipologia', width: 100, value: 'tipologia', class: "indigo white--text"},
                    {text: 'fonte', width: 200, value: 'marketing', class: "indigo white--text"},
                    {text: 'user', width: 130, value: 'user', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchTipologie();
            this.fetchProvince();
            this.fetchFilialiPerInserimento();
        },

        methods: {
            ...mapActions('clients', {
                fetchClients: 'fetchClients',
                fetchProvince: 'fetchProvince',
                fetchCittaByProvincia: 'fetchCittaByProvincia',
                ricercaNominativi: 'ricercaNominativi',
            }),

            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
            }),

            ...mapActions('filiali', {
                fetchFilialiPerInserimento:'fetchFilialiPerInserimento',
            }),

            caricaCitta(){
                this.fetchCittaByProvincia(this.ricerca.provincia);
            },

            trova(){
                this.ricercaNominativi(this.ricerca)
            }

        },

        computed: {
            ...mapGetters('clients', {
                getRicercaNominativi: 'getRicercaNominativi',
                getProvince: 'getProvince',
                getCittaByProvincia: 'getCittaByProvincia',
            }),

            ...mapGetters('tipologie', {
                getTipologie:'getTipologie',
            }),

            ...mapGetters('filiali', {
                getFilialiPerInserimento:'getFilialiPerInserimento',
            }),

        },
    }
</script>

<style scoped>

</style>
