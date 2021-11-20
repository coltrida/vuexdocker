<template>
    <v-row>
        <v-col cols="12">
            <h2>Materiale Marketing</h2>
            <v-row v-if="getRuolo=='admin'">
                <v-col>
                    <v-text-field
                        v-model="newMateriale.nome"
                        label="Nuovo Materiale"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="newMateriale.codice"
                        label="codice"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-btn @click="aggiungi" color="indigo" dark>
                        Inserisci
                    </v-btn>
                </v-col>

            </v-row>

            <v-row>
                <v-col
                    cols="12"
                >
                    <div class="text-center" v-if="carica">
                        <v-progress-circular
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                    </div>
                    <div v-else>
                        <v-data-table
                            :headers="header"
                            :items="getMateriale"
                            class="elevation-1"
                        >

                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom v-if="getRuolo=='admin'">
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
                            </template>

                        </v-data-table>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Materiale",

        data() {
            return {
                newMateriale: {},
                carica: false,
                header: [
                    {text: 'Codice', align: 'start', sortable: false, value: 'codice', class: "indigo white--text"},
                    {text: 'Materiale', align: 'start', sortable: false, value: 'nome', class: "indigo white--text"},
                    {text: ' ', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchMateriale().then(() => {
                this.carica = false;
            });
        },

        methods: {
            ...mapActions('materiale', {
                fetchMateriale: 'fetchMateriale',
                addMateriale: 'addMateriale',
                eliminaMateriale: 'eliminaMateriale',
                modificaMateriale: 'modificaMateriale',
            }),

            aggiungi() {
                this.addMateriale(this.newMateriale);
                this.newMateriale = {};
            },

            elimina(id) {
                this.eliminaMateriale(id)
            },
        },

        computed: {
            ...mapGetters('materiale', {
                getMateriale: 'getMateriale',
            }),

            ...mapGetters('login', {
                getRuolo:'getRuolo',
            }),
        },
    }
</script>

<style scoped>

</style>
