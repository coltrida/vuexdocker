<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>{{documentiClient.nome}} {{documentiClient.cognome}}</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="12" lg="5" xs="12" sm="12">
                <v-select
                    v-model="caricaFile.tipo"
                    :items="tipiFile"
                    label="Tipo"
                ></v-select>
            </v-col>
            <v-col cols="12" md="12" lg="5" xs="12" sm="12">
                <v-file-input
                    v-model="caricaFile.fileUp"
                    truncate-length="15"
                    accept=".pdf"
                ></v-file-input>
            </v-col>
            <v-col cols="12" md="12" lg="2" xs="12" sm="12">
                <v-btn color="primary" dark @click="carica" :block="$vuetify.breakpoint.xs">
                    Carica
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <v-data-table
                    :headers="header"
                    :items="getDocumenti"
                    hide-default-footer
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

                    <template v-slot:item.link="{ item }">
                        <a :href="item.link" target="_blank">
                            LINK
                        </a>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>

        <v-row>

        </v-row>

    </v-row>



</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Docunenti",

        props: ['documentiClient'],

        data(){
            return {
                caricaFile:{
                    idClient:'',
                    fileUp:{},
                    tipo: ''
                },

                tipiFile: ['Prescrizione', 'Autorizzazione', 'Collaudo', 'CodFisc'],

                header: [
                    { text: 'Data',  align: 'start', sortable: false, value: 'created_at', class: "indigo white--text" },
                    { text: 'Tipo',  sortable: false, value: 'tipo', class: "indigo white--text" },
                    { text: 'Link',  sortable: false, value: 'link', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchDocumenti(this.documentiClient.id);
        },

        methods:{
            ...mapActions('documenti', {
                fetchDocumenti:'fetchDocumenti',
                addDocumento:'addDocumento',
                eliminaDocumento:'eliminaDocumento'
            }),

            cancella(){
                this.$emit('chiudiDocumenti')
            },

            carica(){
                if (this.caricaFile.tipo && this.caricaFile.fileUp.size){
                    this.caricaFile.idClient = this.documentiClient.id;
                    this.addDocumento(this.caricaFile).then(() => {
                        this.caricaFile.fileUp = {};
                        this.caricaFile.tipo = '';
                    });
                }
            },

            elimina(idDocumento){
                this.eliminaDocumento(idDocumento);
            }
        },

        computed:{
            ...mapGetters('documenti', {
                getDocumenti: 'getDocumenti',
            }),
        }
    }
</script>

<style scoped>

</style>
