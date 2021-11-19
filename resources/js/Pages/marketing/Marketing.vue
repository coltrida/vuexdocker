<template>
    <v-row>
        <v-col cols="5">
            <h2>Canali Marketing</h2>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        v-model="newCanale"
                        label="Nuovo Canale"
                    ></v-text-field>
                </v-col>
                <v-btn @click="aggiungi" color="indigo" dark>
                    Inserisci
                </v-btn>
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
                            :items="getCanali"
                            class="elevation-1"
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
                            </template>

                        </v-data-table>
                    </div>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="7">
            <h2>Otorini</h2>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="newOtorino.nome"
                        label="Nome"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="newOtorino.cognome"
                        label="Cognome"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-select
                        v-model="newOtorino.userId"
                        item-value="id"
                        item-text="name"
                        :items="getAudio"
                        label="Audio"
                    ></v-select>
                </v-col>
                <v-col>
                    <v-btn @click="aggiungiOtorino" color="indigo" dark>
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
                            :headers="headerMedici"
                            :items="getMedici"
                            class="elevation-1"
                        >

                            <template v-slot:item.nominativo="{ item }">
                                <router-link style="color: black" :to="{ name: 'orariMedici',
                                        params: { dottore:item.cognome+' '+item.nome, }}">
                                    {{item.cognome+' '+item.nome}}
                                </router-link>
                            </template>

                            <template v-slot:item.client="{ item }">
                                <div v-for="ele in item.user" :key="ele.id">
                                    {{ele.name}}
                                </div>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            color="red"
                                            small
                                            @click="eliminaOtorino(item.id)"
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
                                        <v-icon
                                            color="green"
                                            small
                                            @click="aggiungiAudio(item)"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            mdi-plus
                                        </v-icon>
                                    </template>
                                    <span>Aggiungi Audio</span>
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
        name: "Marketing",

        data() {
            return {
                newCanale: '',
                newOtorino: {},
                carica: false,
                header: [
                    {text: 'Codice', align: 'start', sortable: false, value: 'cod', class: "indigo white--text"},
                    {text: 'Canale Mkt', align: 'start', sortable: false, value: 'name', class: "indigo white--text"},
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],

                headerMedici: [
                    {text: 'Codice', align: 'start', sortable: false, value: 'cod', class: "indigo white--text"},
                    {text: 'Nome', align: 'start', sortable: false, value: 'nominativo', class: "indigo white--text"},
                    {text: 'Audio', align: 'start', sortable: false, value: 'client', class: "indigo white--text"},
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchCanali().then(() => {
                this.fetchMedici(0).then(() =>{
                    this.fetchAudio().then(() => {
                        this.carica = false;
                    });
                });
            });
        },

        methods: {
            ...mapActions('marketing', {
                fetchCanali: 'fetchCanali',
                addCanale: 'addCanale',
                eliminaCanale: 'eliminaCanale',
            }),

            ...mapActions('medici', {
                fetchMedici:'fetchMedici',
                addMedico:'addMedico',
                eliminaMedico:'eliminaMedico'
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            aggiungi() {
                this.addCanale(this.newCanale);
                this.newCanale = '';
            },

            aggiungiOtorino(){
                this.addMedico(this.newOtorino).then(() => {
                    this.newOtorino = {};
                });
            },

            eliminaOtorino(idMedico){
                this.eliminaMedico(idMedico);
            },

            elimina(id) {
                this.eliminaCanale(id)
            },

            aggiungiAudio(medico){
                this.newOtorino = medico;
            }
        },

        computed: {
            ...mapGetters('marketing', {
                getCanali: 'getCanali',
            }),

            ...mapGetters('medici', {
                getMedici: 'getMedici',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),
        },
    }
</script>

<style scoped>

</style>
