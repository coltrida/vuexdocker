<template>
    <div class="text-center">
        <div class="row">
            <div class="row mt-2">
                <div style="display: flex; justify-content: space-between; align-items: center">
                    <div>
                        <h2>{{appuntamentoClient.nome}} {{appuntamentoClient.cognome}}</h2>
                    </div>
                    <div>
                        <v-btn color="primary" dark @click="cancella" class="mt-2">
                            Chiudi
                        </v-btn>
                    </div>
                </div>
            </div>

            <v-container>
                <v-row>
                    <v-col>
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
                    </v-col>

                    <v-col>
                        <v-time-picker
                            width="200"
                            height="200"
                            max-height="200"
                            v-model.lazy="newAppuntamento.orario"
                            format="ampm"
                        ></v-time-picker>
                    </v-col>

                    <v-col>
                        <v-select
                            v-model.lazy="newAppuntamento.filiale_id"
                            item-value="id"
                            item-text="nome"
                            :items="getFiliali"
                            label="Filiale"
                        ></v-select>
                    </v-col>

                    <v-col>
                        <v-select
                            v-model.lazy="newAppuntamento.recapito_id"
                            item-value="id"
                            item-text="nome"
                            :items="getRecapiti"
                            label="Recapito"
                        ></v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-textarea
                        label="Note"
                        v-model.lazy="newAppuntamento.nota"
                    ></v-textarea>
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
    </div>
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
            this.fetchRecapitiByAudio(this.getIdUser);
            this.fetchFilialiByUser(this.getIdUser);
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchAppuntamenti:'fetchAppuntamenti',
                addAppuntamento:'addAppuntamento',
                eliminaAppuntamento:'eliminaAppuntamento',
            }),

            ...mapActions('recapiti', {
                fetchRecapitiByAudio:'fetchRecapitiByAudio',
            }),

            ...mapActions('filiali', {
                fetchFilialiByUser:'fetchFilialiByUser',
            }),

            cancella(){
                this.$emit('chiudiAppuntamento')
            },

            inserisci(){
                this.newAppuntamento.user_id = this.getIdUser;
                this.newAppuntamento.client_id = this.appuntamentoClient.id;

                this.addAppuntamento(this.newAppuntamento);
                this.newAppuntamento = {
                    filiale_id:null,
                    recapito_id:null,
                    nota:null
                }
            },

            elimina(id){
                this.eliminaAppuntamento(id);
            }

        },

        computed: {
            ...mapGetters('appuntamenti', {
                getAppuntamenti: 'getAppuntamenti',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
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
