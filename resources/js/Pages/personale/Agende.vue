<template>
    <div>
        <h2>Agende</h2>
        <div>
            <v-row v-if="getRuolo == 'admin'">
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="user.user_id"
                        item-value="id"
                        item-text="name"
                        :items="getUsers"
                        label="utente"
                    ></v-select>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-select
                        v-model="user.giorno"
                        :items="giorni"
                        label="giorno"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="user.tempo"
                        :items="quando"
                        label="quando"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model.lazy="user.testo"
                        label="Cosa"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="user.settimana"
                        item-value="valore"
                        item-text="label"
                        :items="settimane"
                        label="settimana"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="aggiungi" dark color="indigo">
                        Inserisci
                    </v-btn>
                </v-col>
            </v-row>

            <v-row class="py-4">

                <v-col cols="12">
                    <div v-for="audio in getUsers" :key="audio.agenda.id">

                        <v-data-table
                            dense
                            hide-default-footer
                            :headers="headers1"
                            :items="audio.agenda"
                            :items-per-page="10"
                            class="elevation-1 mt-3"
                            :item-class="itemRowBackground"
                        >
                            <template v-slot:header.nome="{ header }">
                                {{ audio.name }}
                            </template>

                        </v-data-table>

                </div>
            </v-col>
            </v-row>


        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Listino",

        data(){
            return {
                user:{},
                giorni: ['lun', 'mar', 'mer', 'gio', 'ven'],
                settimane: [
                    {label: 'prima', valore: 1},
                    {label: 'seconda', valore: 2},
                    {label: 'terza', valore: 3},
                    {label: 'quarta', valore: 4},
                ],
                quando: ['mattina', 'pomeriggio'],
                headers1: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Settimana', align: 'start', sortable: false, value: 'settimana', class: "indigo white--text" },
                    { text: 'lun', width:220, align: 'start', sortable: false, value: 'lun', class: "indigo white--text" },
                    { text: 'mar', width:220, align: 'start', sortable: false, value: 'mar', class: "indigo white--text" },
                    { text: 'mer', width:220, align: 'start', sortable: false, value: 'mer', class: "indigo white--text" },
                    { text: 'gio', width:220, align: 'start', sortable: false, value: 'gio', class: "indigo white--text" },
                    { text: 'ven', width:220, align: 'start', sortable: false, value: 'ven', class: "indigo white--text" },
                ],
            }
        },

        mounted(){
            this.fetchUserAgenda();
        },

        methods:{
            ...mapActions('users', {
                fetchUserAgenda:'fetchUserAgenda',
                addAgenda:'addAgenda',
            }),

            aggiungi(){
                this.addAgenda(this.user).then(() => {
                    this.fetchUserAgenda();
                });
                /*this.user = {};*/
            },

            itemRowBackground: function (item) {
                return item.settimana === 1 ? 'style-1' :
                             item.settimana === 2 ? 'style-2' :
                                  item.settimana === 3 ? 'style-3' :
                                        item.settimana === 4 ? 'style-4' : ''
            }
        },

        computed:{
            ...mapGetters('users', {
                getUsers:'getUsers',
            }),

            ...mapGetters('login', {
                getRuolo:'getRuolo',
            }),

        },
    }
</script>

<style>
    .style-1 {
        background-color: rgb(215,215,44)
    }
    .style-2 {
        background-color: rgb(206, 116, 93)
    }

    .style-3 {
        background-color: rgb(87, 206, 89)
    }

    .style-4 {
        background-color: rgb(95, 102, 97)
    }
</style>
