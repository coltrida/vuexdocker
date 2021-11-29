<template>
    <div>
        <messaggio-trasferisci-dati
            v-if="showTrasferisci"
            :userTrasferisci="userTrasferisci"
            @chiudiMessaggioTrascerisci = "chiudiMessaggioTrascerisci"
        ></messaggio-trasferisci-dati>

        <h2>Personale</h2>
        <div>
            <v-row class="mb-9">
                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-text-field
                        v-model="user.name"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Nominativo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
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

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="aggiungi" dark color="indigo">
                        Inserisci
                    </v-btn>
                </v-col>

            </v-row>

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
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon
                                        color="red"
                                        small
                                        @click="eliminaAudioprotesista(item.id)"
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
                                        color="blue"
                                        small

                                        @click="trasferisciDati(item)"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        mdi-swap-horizontal
                                    </v-icon>
                                </template>
                                <span>Trasferisci Clienti e Prove in Corso</span>
                            </v-tooltip>
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

                    <h2 class="mt-10">Call Center</h2>
                    <v-data-table
                        :headers="headers2"
                        :items="getCall"
                        :items-per-page="10"
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="red"
                                small
                                @click="eliminaCallCenter(item.id)"
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
    import MessaggioTrasferisciDati from "./MessaggioTrasferisciDati";

    export default {
        name: "Listino",
        components: {MessaggioTrasferisciDati},
        data(){
            return {
                userTrasferisci: {},
                showTrasferisci: false,
                user:{},
                headers1: [
                    { text: 'Id', align: 'start', sortable: false, value: 'id', class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'email', value: 'email', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],

                headers2: [
                    { text: 'Id', align: 'start', sortable: false, value: 'id', class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'email', value: 'email', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchRuoli();
            this.fetchAudio();
            this.fetchAmm();
            this.fetchCall();
        },

        methods:{
            ...mapActions('users', {
                fetchAudio:'fetchAudio',
                fetchAmm:'fetchAmm',
                fetchCall:'fetchCall',
                addAudio:'addAudio',
                addAmm:'addAmm',
                addCall:'addCall',
                eliminaAudio:'eliminaAudio',
                eliminaAmm:'eliminaAmm',
                eliminaCall:'eliminaCall',
            }),

            ...mapActions('ruoli', {
                fetchRuoli:'fetchRuoli',
            }),

            aggiungi(){
                if(this.user.ruolo_id === 2){
                    this.addAudio(this.user);
                }else if(this.user.ruolo_id === 3){
                    this.addAmm(this.user);
                } else {
                    this.addCall(this.user)
                }


                this.user = {};
            },

            eliminaAudioprotesista(id){
                this.eliminaAudio(id)
            },

            eliminaAmministrativo(id){
                this.eliminaAmm(id)
            },

            eliminaCallCenter(id){
                this.eliminaCall(id)
            },

            trasferisciDati(user){
                this.userTrasferisci = user;
                this.showTrasferisci = true;
            },

            chiudiMessaggioTrascerisci(){
                this.userTrasferisci = {};
                this.showTrasferisci = false;
            }
        },

        computed:{
            ...mapGetters('users', {
                getAudio:'getAudio',
                getAmm:'getAmm',
                getCall:'getCall',
            }),

            ...mapGetters('ruoli', {
                getRuoli:'getRuoli',
            }),

        },
    }
</script>

<style scoped>

</style>
