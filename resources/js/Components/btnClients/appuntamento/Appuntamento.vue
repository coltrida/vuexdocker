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
                <v-form ref="form"
                        v-model="valid"
                        lazy-validation>
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
                                    label="Data Appuntamento*"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    :rules="giornoRules"
                                    required
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
                    </v-col>
                    <v-col cols="6">
                        <v-col cols="6" class="pb-4">
                            <v-dialog
                                ref="dialog"
                                v-model="modal2"
                                :return-value.sync="newAppuntamento.orario"
                                persistent
                                width="290px"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="newAppuntamento.orario"
                                        label="Seleziona Orario*"
                                        prepend-icon="mdi-clock-time-four-outline"
                                        readonly
                                        :rules="orarioRules"
                                        required
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-time-picker
                                    v-if="modal2"
                                    v-model="newAppuntamento.orario"
                                    full-width
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="modal2 = false"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.dialog.save(newAppuntamento.orario)"
                                    >
                                        OK
                                    </v-btn>
                                </v-time-picker>
                            </v-dialog>

                        </v-col>
                    </v-col>
                </v-row>
                        <v-row>
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
                            <v-col>
                                <v-select
                                    v-model.lazy="newAppuntamento.tipo"
                                    :items="tipoAppuntamento"
                                    label="Tipo Visita*"
                                    :rules="tipoRules"
                                    required
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
                </v-form>

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
                modal2: false,
                valid: true,
                giornoRules: [ v => !!v || 'il giorno è obbligatorio'],
                tipoRules: [ v => !!v || 'il tipo è obbligatorio'],
                orarioRules: [ v => !!v || 'orario obbligatorio'],
                newAppuntamento:{
                    filiale_id:null,
                    recapito_id:null,
                    nota:null
                },
                menu:false,
                tipoAppuntamento: ['Prima Visista', 'Esame Audio', 'Controllo Prova', 'fine prova', 'Assistenza'],

                headers: [
                    { text: 'Giorno', align: 'start', sortable: false, value: 'giorno', class: "indigo white--text" },
                    { text: 'orario', sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'nota', sortable: false, value: 'nota', class: "indigo white--text" },
                    { text: 'Luogo', sortable: false, value: 'luogo', class: "indigo white--text" },
                    { text: 'Tipo', sortable: false, value: 'tipo', class: "indigo white--text" },
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
                this.$refs.form.validate();
                this.newAppuntamento.user_id = this.appuntamentoClient.user_id;
                this.newAppuntamento.client_id = this.appuntamentoClient.id;

                this.addAppuntamento(this.newAppuntamento).then(() =>{
                    this.$refs.form.resetValidation();
                    this.newAppuntamento = {
                        filiale_id:null,
                        recapito_id:null,
                        tipo:null,
                        nota:null
                    }
                });

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
