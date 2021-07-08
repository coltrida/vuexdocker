<template>
    <div>
        <h2>Personale</h2>
        <div>
            <v-row>
                <v-col
                    cols="5"
                    sm="5"
                >
                    <v-text-field
                        v-model="user.name"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Nominativo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-text-field
                        v-model="user.email"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="email"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-select
                        v-model="user.ruolo_id"
                        item-value="id"
                        item-text="nome"
                        :items="getRuoli"
                        label="ruolo"
                    ></v-select>
                </v-col>

            </v-row>

            <v-btn @click="aggiungi" dark color="indigo">
                Inserisci
            </v-btn>

            <v-row>
                <v-col cols="6">
                    <h2>Audioprotesisti</h2>
                    <v-data-table
                        :headers="headers1"
                        :items="getAudio"
                        :items-per-page="10"
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="red"
                                small
                                @click="eliminaAudioprotesista(item.id)"
                            >
                                mdi-delete
                            </v-icon>
                        </template>

                    </v-data-table>
                </v-col>

                <v-col cols="6">
                    <h2>Amministrativi</h2>
                    <v-data-table
                        :headers="headers2"
                        :items="getAmm"
                        :items-per-page="10"
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="red"
                                small
                                @click="eliminaAmministrativo(item.id)"
                            >
                                mdi-delete
                            </v-icon>
                        </template>

                    </v-data-table>
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
                headers1: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                        class: "indigo white--text"
                    },
                    { text: 'email', value: 'email', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],

                headers2: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                        class: "indigo white--text"
                    },
                    { text: 'email', value: 'email', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchRuoli();
            this.fetchAudio();
            this.fetchAmm();
        },

        methods:{
            ...mapActions('users', {
                fetchAudio:'fetchAudio',
                fetchAmm:'fetchAmm',
                addAudio:'addAudio',
                addAmm:'addAmm',
                eliminaAudio:'eliminaAudio',
                eliminaAmm:'eliminaAmm',
            }),

            ...mapActions('ruoli', {
                fetchRuoli:'fetchRuoli',
            }),

            aggiungi(){
                if(this.user.ruolo_id === 2){
                    this.addAudio(this.user);
                }else{
                    this.addAmm(this.user);
                }


                this.user = {};
            },

            eliminaAudioprotesista(id){
                this.eliminaAudio(id)
            },

            eliminaAmministrativo(id){
                this.eliminaAmm(id)
            },
        },

        computed:{
            ...mapGetters('users', {
                getAudio:'getAudio',
                getAmm:'getAmm',
            }),

            ...mapGetters('ruoli', {
                getRuoli:'getRuoli',
            }),

        },
    }
</script>

<style scoped>

</style>
