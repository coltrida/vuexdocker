<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>
                    {{recallsClient.nome}} {{recallsClient.cognome}} {{recallsClient.telefono ? ' - '+recallsClient.telefono : null}}
                    {{recallsClient.telefono2 ? ' - '+recallsClient.telefono2 : null}} {{recallsClient.telefono3 ? ' - '+recallsClient.telefono3 : null}}
                </h2>
                <h4>{{recallsClient.indirizzo}} - {{recallsClient.citta}} - {{recallsClient.provincia}}</h4>
                <h4>Dottore di riferimento: {{recallsClient.user}}</h4>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6">
                <v-row>
                    <v-col>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="telefonata.giorno"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="telefonata.giorno"
                                    label="Data Telefonata"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="telefonata.giorno"
                                no-title
                                first-day-of-week="1"
                                locale="ITA"
                                scrollable
                            >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(telefonata.giorno)"
                                >
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>
                    </v-col>

                    <v-col>
                        <v-select
                            v-model="telefonata.esito"
                            :items="tipologiaEsito"
                            label="esito"
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="telefonata.note"
                            label="Note"
                        ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-btn color="primary" dark @click="inserisci">
                            Inserisci
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="mb-6">
                    <v-col cols="12">
                        <v-data-table
                            :headers="header"
                            :items="getRecalls"
                            hide-default-footer
                            class="elevation-1"
                        >

                            <template v-slot:item.esito="{ item }">
                                <div v-if="item.esito == null">
                                    <v-select
                                        class="mt-4"
                                        v-model="telefonataDaAggiornare.esito"
                                        :items="tipologiaEsito"
                                        outlined
                                        dense
                                        label="esito"
                                    ></v-select>
                                </div>
                                <div v-else>
                                    {{item.esito}}
                                </div>
                            </template>

                            <template v-slot:item.note="{ item }">
                                <div v-if="item.note == null && item.esito == null">
                                    <v-text-field
                                        v-model="telefonataDaAggiornare.note"
                                        label="Note"
                                    ></v-text-field>
                                </div>
                                <div v-else>
                                    {{item.note}}
                                </div>
                            </template>

                            <template v-slot:item.action="{ item }">
                                <div v-if="item.esito == null">
                                    <v-btn small color="success" dark @click="aggiorna(item)">
                                        Aggiorna
                                    </v-btn>
                                </div>
                                <div v-if="item.esito == 'Preso Appuntamento'">
                                    <v-btn small color="success" dark @click="appuntamento()">
                                        Vedi Appuntamento
                                    </v-btn>
                                </div>
                            </template>
                        </v-data-table>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="6">
                <calendar :audioprot="recallsClient.user_id" :fissaNome="true"/>
            </v-col>
        </v-row>


    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Calendar from "../../../Pages/personale/Calendar";
    export default {
        name: "Docunenti",
        components: {Calendar},
        props: ['recallsClient'],

        data(){
            return {
                telefonata:{},
                telefonataDaAggiornare:{},
                menu:false,
                tipologiaEsito:
                    [
                        'Preso Appuntamento',
                        'Non Interessato',
                        'Non Risponde',
                        'Richiamare',
                        'Non vuole essere richiamato',
                    ],

                header: [
                    { text: 'Data Telefonata', width:120,  align: 'start', sortable: false, value: 'datarecall', class: "indigo white--text" },
                    { text: 'Esito', sortable: false, value: 'esito', class: "indigo white--text" },
                    { text: 'note', sortable: false, value: 'note', class: "indigo white--text" },
                    { text: 'Azioni',  sortable: false, value: 'action', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchRecallsByIdClient(this.recallsClient.id);
        },

        methods:{
            ...mapActions('telefonate', {
                fetchRecallsByIdClient:'fetchRecallsByIdClient',
                addTelefonata:'addTelefonata',
                aggiornaTelefonata:'aggiornaTelefonata',
            }),

            inserisci(){
                this.telefonata.clientId = this.recallsClient.id;
                this.telefonata.userId = this.getIdUser;
                this.addTelefonata(this.telefonata).then(() =>{
                if(this.telefonata.esito == 'Preso Appuntamento'){
                    this.telefonata = {};
                    this.$emit('chiudiRecalls', this.recallsClient)
                }
                this.telefonata = {};
                });
            },

            aggiorna(recall){
                this.telefonataDaAggiornare.id = recall.id;
                this.telefonataDaAggiornare.userId = this.getIdUser;
                this.aggiornaTelefonata(this.telefonataDaAggiornare).then(() => {
                    if(this.telefonataDaAggiornare.esito == 'Preso Appuntamento'){
                        this.$emit('chiudiRecalls', this.recallsClient)
                    }
                });
            },

            appuntamento(){
                this.telefonata = {};
                this.$emit('chiudiRecalls', this.recallsClient)
            },

            cancella(){
                this.$emit('chiudiRecalls', null)
            },

        },

        computed:{
            ...mapGetters('telefonate', {
                getRecalls: 'getRecalls',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),
        }
    }
</script>

<style scoped>

</style>
