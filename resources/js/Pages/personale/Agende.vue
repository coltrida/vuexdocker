<template>
    <div>
        <h2>Agende</h2>
        <div>
            <v-row>
                <v-col
                    cols="3"
                    sm="3"
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
                    cols="3"
                    sm="3"
                >
                    <v-select
                        v-model="user.giorno"
                        :items="giorni"
                        label="giorno"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
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

            </v-row>

            <v-btn @click="aggiungi" dark color="indigo">
                Inserisci
            </v-btn>

            <v-row>

                <v-col cols="12">
                    <div v-for="audio in getUsers" :key="audio.id">

                        <v-data-table
                            :headers="headers1"
                            :items="audio.agenda"
                            :items-per-page="10"
                            class="elevation-1 mt-3"
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
                quando: ['mattina', 'pomeriggio'],
                headers1: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
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
                this.addAgenda(this.user);
                this.user = {};
            },


        },

        computed:{
            ...mapGetters('users', {
                getUsers:'getUsers',
            }),

        },
    }
</script>

<style scoped>

</style>
