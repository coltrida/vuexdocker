<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>{{informazioniClient.nome}} {{informazioniClient.cognome}}</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="newInfo.giorno"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="newInfo.giorno"
                            label="Data"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="newInfo.giorno"
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
                            @click="$refs.menu.save(newInfo.giorno)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                <v-select
                    v-model="newInfo.tipo"
                    :items="getMotivoIntervento"
                    label="Tipo"
                ></v-select>
            </v-col>
            <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                <v-text-field
                    v-model="newInfo.note"
                    label="Note"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                <v-btn color="primary" dark @click="inserisci" :block="$vuetify.breakpoint.xs">
                    inserisci
                </v-btn>
            </v-col>
        </v-row>

        <div class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div v-else>
            <v-row class="mb-6" v-if="getInformazioni" >
                <v-col cols="12">
                    <v-data-table
                        :headers="header"
                        :items="getInformazioni"
                        class="elevation-1"
                    >
                        <template v-slot:item.tipo="{ item }">
                            <div v-if="item.tipo === 'PROVA' || item.tipo === 'FATTURA' || item.tipo === 'RESO'"
                                        @click="apriProva(informazioniClient)" style="cursor: pointer">
                                {{item.tipo}}
                            </div>
                            <div v-else>
                                {{item.tipo}}
                            </div>
                        </template>

                    </v-data-table>
                </v-col>
            </v-row>
        </div>

    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Informazioni",

        props: ['informazioniClient'],

        data(){
            return {
                carica: false,
                menu:false,
                newInfo:{},

                header: [
                    { text: 'Data',  align: 'start', sortable: false, value: 'giorno', class: "indigo white--text" },
                    { text: 'Tipo',  sortable: false, value: 'tipo', class: "indigo white--text" },
                    { text: 'Note',  sortable: false, value: 'note', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchInformazioni(this.informazioniClient.id).then(() => {
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('informazioni', {
                fetchInformazioni:'fetchInformazioni',
                addInformazione:'addInformazione',
            }),

            inserisci(){
                if (this.newInfo.giorno && this.newInfo.tipo){
                    this.newInfo.client_id = this.informazioniClient.id;
                    this.addInformazione(this.newInfo).then(() => {
                        this.newInfo = {}
                    })
                }
            },

            cancella(){
                this.$emit('chiudiInformazioni')
            },

            apriProva(client){
                this.$emit('chiudiInformazioni', client)
            }

        },

        computed:{
            ...mapGetters('informazioni', {
                getInformazioni: 'getInformazioni',
                getMotivoIntervento: 'getMotivoIntervento'
            }),
        }
    }
</script>

<style scoped>

</style>
