<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>{{appuntamentoClient.nome}} {{appuntamentoClient.cognome}}</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <div class="row">
            <v-container class="py-4">
                <v-row>
                    <v-col cols="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="newAppuntamento.giorno"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="newAppuntamento.giorno"
                                    label="Data Appuntamento"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="newAppuntamento.giorno"
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
                                    @click="$refs.menu.save(newAppuntamento.giorno)"
                                >
                                    OK
                                </v-btn>
                            </v-date-picker>
                        </v-menu>

                        <v-select
                            v-model.lazy="newAppuntamento.filiale_id"
                            item-value="id"
                            item-text="nome"
                            :items="getFiliali"
                            label="Filiale"
                        ></v-select>

                        <v-select
                            v-model.lazy="newAppuntamento.recapito_id"
                            item-value="id"
                            item-text="nome"
                            :items="getRecapiti"
                            label="Recapito"
                        ></v-select>

                        <v-textarea
                            label="Note"
                            v-model.lazy="newAppuntamento.nota"
                        ></v-textarea>
                    </v-col>

                    <v-col cols="6">
                        <v-time-picker
                            style="height: 100px!important;"
                            v-model.lazy="newAppuntamento.orario"
                            format="ampm"
                        ></v-time-picker>
                    </v-col>

                </v-row>



                <v-btn @click="inserisci" color="primary" class="my-2">
                    Inserisci
                </v-btn>

                <v-data-table
                    :headers="headers"
                    :items="getAppuntamenti"
                    hide-default-footer
                    class="elevation-1 my-4"
                >

                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            color="red"
                            small
                            @click="elimina(item.id)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>

                </v-data-table>
            </v-container>
        </div>
    </v-row>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Appuntamento",

        data(){
            return {
                newAppuntamento:{
                    filiale_id:null,
                    recapito_id:null,
                    nota:null
                },
                menu:false,

                headers: [
                    { text: 'Giorno', align: 'start', sortable: false, value: 'giorno', class: "indigo white--text" },
                    { text: 'orario', sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'nota', sortable: false, value: 'nota', class: "indigo white--text" },
                    { text: 'filiale_id', sortable: false, value: 'filiale.nome', class: "indigo white--text" },
                    { text: 'recapito_id', sortable: false, value: 'recapito.nome', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],
            }
        },

        props: [ 'appuntamentoClient' ],

        mounted() {
            this.fetchAppuntamenti(this.appuntamentoClient.id);

            if (this.getRuolo == 'call'){
                this.fetchFiliali();
                this.fetchRecapitiByAudio(this.appuntamentoClient.user_id);
            } else {
                this.fetchFilialiByUser(this.getIdUser);
                this.fetchRecapitiByAudio(this.getIdUser);
            }

        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchAppuntamenti:'fetchAppuntamenti',
                addAppuntamento:'addAppuntamento',
                eliminaAppuntamento:'eliminaAppuntamento',
            }),

            ...mapActions('recapiti', {
                fetchRecapitiByAudio:'fetchRecapitiByAudio',
                fetchRecapiti:'fetchRecapiti',
            }),

            ...mapActions('filiali', {
                fetchFilialiByUser:'fetchFilialiByUser',
                fetchFiliali:'fetchFiliali',
            }),

            cancella(){
                this.$emit('chiudiAppuntamento')
            },

            inserisci(){
                this.newAppuntamento.user_id = this.appuntamentoClient.user_id;
                this.newAppuntamento.client_id = this.appuntamentoClient.id;

                this.addAppuntamento(this.newAppuntamento);
                this.newAppuntamento = {
                    filiale_id:null,
                    recapito_id:null,
                    nota:null
                }
            },

            elimina(id){
                let payload = {
                    idAppuntamento: id,
                    idUser: this.getIdUser
                };
                this.eliminaAppuntamento(payload);
            }

        },

        computed: {
            ...mapGetters('appuntamenti', {
                getAppuntamenti: 'getAppuntamenti',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
                getRuolo: 'getRuolo',
            }),

            ...mapGetters('recapiti', {
                getRecapiti: 'getRecapiti',
            }),

            ...mapGetters('filiali', {
                getFiliali: 'getFiliali',
            }),
        }

    }
</script>

<style scoped>

</style>
