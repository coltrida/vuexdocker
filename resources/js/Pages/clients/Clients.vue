<template>
    <div>
        <div class="flex justify-start align-center mt-2">
            <div><h2>Clienti</h2></div>
            <div class="ml-4">
                <router-link :to="{ name: 'clientsInserisci'}">
                    <v-btn dark color="indigo">Inserisci</v-btn>
                </router-link>
            </div>
        </div>

        <v-container>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Ricerca"
                single-line
                hide-details
            ></v-text-field>

            <v-data-table
                :headers="headers"
                :items="getClients"
                :search="search"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="red"
                                small
                                @click="elimina(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Elimina</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <router-link :to="{ name: 'clientsInserisci', params: { clientId: item.id }}">
                                <v-icon
                                    color="blue"
                                    small
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-pencil
                                </v-icon>
                            </router-link>
                        </template>
                        <span>Modifica</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="green"
                                small
                                @click="elimina(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-headphones-settings
                            </v-icon>
                        </template>
                        <span>Audiogramma</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="orange"
                                small
                                @click="elimina(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-ear-hearing
                            </v-icon>
                        </template>
                        <span>Prova</span>
                    </v-tooltip>
                </template>

            </v-data-table>

        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Clients",

        data() {
            return {
                search: '',
                listino: {},
                headers: [
                    {text: 'Actions', width: 170, value: 'actions', sortable: false, class: "indigo white--text"},
                    {text: 'Cognome', align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', value: 'citta', class: "indigo white--text"},
                    {text: 'cap', value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', value: 'telefono', class: "indigo white--text"},
                    {text: 'tipologia', width: 100, value: 'tipologia', class: "indigo white--text"},
                    {text: 'fonte', width: 200, value: 'marketing', class: "indigo white--text"},
                    {text: 'user', value: 'user', class: "indigo white--text"},
                    {text: 'filiale', value: 'filiale', class: "indigo white--text"},

                ],
            }
        },

        mounted() {
            this.fetchClients();
        },

        methods: {
            ...mapActions('clients', {
                fetchClients: 'fetchClients',
                addClient: 'addClient',
                eliminaClient: 'eliminaClient',
            }),

            elimina(id) {
                this.eliminaClient(id)
            }
        },

        computed: {
            ...mapGetters('clients', {
                getClients: 'getClients',
            }),

        },
    }
</script>

<style scoped>

</style>
