<template>
    <div>
        <h2>Importa Cliente</h2>
        <h3>Anagrafiche importate: {{getImportati}}</h3>

            <v-alert type="info" v-if="getClientMessaggio">
                <v-row align="center">
                    <v-col class="grow">
                        {{ getClientMessaggio }}
                    </v-col>
                    <v-col class="shrink">
                        <v-btn @click="reset">Chiudi</v-btn>
                    </v-col>
                </v-row>
            </v-alert>

            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>

            <v-row v-else>
                <v-col cols="12" md="12" lg="4" xs="12" sm="12">
                    <v-file-input
                        v-model="caricaFile.fileUp"
                        truncate-length="15"
                        accept=".xml"
                    ></v-file-input>
                </v-col>

                <v-col cols="12" md="12" lg="2" xs="12" sm="12">
                    <v-btn
                        @click="importaXml"
                        color="success"
                        dark
                        :block="$vuetify.breakpoint.xs"
                    >
                            Importa
                    </v-btn>
                </v-col>

                <v-col cols="12" md="12" lg="6" xs="12" sm="12" v-if="getListaSenzaFiliale.length > 0">
                    <h4>Anagrafiche senza Filiale assegnata (non salvati quindi nel Database)</h4>
                    <v-data-table
                        :headers="headersDuplicati"
                        :items="getListaSenzaFiliale"
                        class="elevation-1 mt-3"
                    >
                    </v-data-table>
                </v-col>
            </v-row>

            <div v-if="getListaDoppioni.length > 0">
                <v-row class="mt-6">
                    <v-col class="text-center d-flex justify-center">
                        <v-alert color="red" dark elevation="5">Possibili Doppioni già presenti nel Database</v-alert>
                    </v-col>

                </v-row>
                <v-row>
                    <v-col cols="6">
                        <h4>Anagrafiche nel DB</h4>
                        <v-data-table
                            :headers="headersDuplicati"
                            :items="getListaDoppioni"
                            class="elevation-1 mt-3"
                        >
                        </v-data-table>
                    </v-col>

                    <v-col cols="6">
                        <h4>Anagrafiche da Noah</h4>
                        <v-data-table
                            :headers="headersOriginali"
                            :items="getOriginaliDaInserire"
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            color="green"
                                            @click="sovrascrivi(item)"
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                            mdi-arrow-left-box
                                        </v-icon>
                                    </template>
                                    <span>Sovrascrivi Anagrafica</span>
                                </v-tooltip>
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
        name: "Inserisci",

        data(){
            return {
                headersDuplicati: [
                    {text: 'Cognome', width: 160, align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', width: 160, value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', width: 250, value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', width: 200, value: 'citta', class: "indigo white--text"},
                    {text: 'cap', width: 70, value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', width: 130, value: 'telefono', class: "indigo white--text"},
                    {text: 'telefono 2', width: 130, value: 'telefono2', class: "indigo white--text"},
                    {text: 'telefono 3', width: 130, value: 'telefono3', class: "indigo white--text"},
                    {text: 'Data di Nascita', width: 150, value: 'datanascitaVisualizzazione', class: "indigo white--text"},
                    {text: 'E-mail', width: 180, value: 'mail', class: "indigo white--text"},
                    {text: 'Cod. Fisc.', width: 200, value: 'codfisc', class: "indigo white--text"},
                    {text: 'Mese ing.', width: 130, value: 'mese', class: "indigo white--text"},
                    {text: 'Anno ing.', width: 130, value: 'anno', class: "indigo white--text"},
                ],

                headersOriginali: [
                    {text: 'Actions', width: 100, value: 'actions', class: "indigo white--text"},
                    {text: 'Cognome', width: 160, align: 'start', value: 'cognome', class: "indigo white--text"},
                    {text: 'Nome', width: 160, value: 'nome', class: "indigo white--text"},
                    {text: 'Indirizzo', width: 250, value: 'indirizzo', class: "indigo white--text"},
                    {text: 'Città', width: 200, value: 'citta', class: "indigo white--text"},
                    {text: 'cap', width: 70, value: 'cap', class: "indigo white--text"},
                    {text: 'PR', width: 70, value: 'provincia', class: "indigo white--text"},
                    {text: 'telefono', width: 130, value: 'telefono', class: "indigo white--text"},
                    {text: 'telefono 2', width: 130, value: 'telefono2', class: "indigo white--text"},
                    {text: 'telefono 3', width: 130, value: 'telefono3', class: "indigo white--text"},
                    {text: 'Data di Nascita', width: 150, value: 'datanascitaVisualizzazione', class: "indigo white--text"},
                    {text: 'E-mail', width: 180, value: 'mail', class: "indigo white--text"},
                    {text: 'Cod. Fisc.', width: 200, value: 'codfisc', class: "indigo white--text"},
                    {text: 'Mese ing.', width: 130, value: 'mese', class: "indigo white--text"},
                    {text: 'Anno ing.', width: 130, value: 'anno', class: "indigo white--text"},
                ],

                caricaFile:{
                    path: 'app/public/',
                    fileUp:{},
                    nomeFile: '',
                    idUser: ''
                },
                carica: false
            }
        },

        methods:{
            ...mapActions('clients', {
                importClientsByFiliale: 'importClientsByFiliale',
                importClientsXml: 'importClientsXml',
                modificaClientEaggiornaDoppioni: 'modificaClientEaggiornaDoppioni',
            }),

            importaXml(){
                this.caricaFile.nomeFile = 'file'+this.getIdUser+'.xml';
                this.caricaFile.idUser = this.getIdUser;
                this.carica = true;
                this.importClientsByFiliale(this.caricaFile).then(() => {
                  //  let pathnomefile = this.caricaFile.nomeFile;
                    this.importClientsXml(this.caricaFile).then(() => {
                        this.caricaFile = {};
                        this.carica = false;
                    });
                });
            },

            reset(){
                this.$store.commit('clients/resetClientMessaggio');
            },

            sovrascrivi(item){
                this.modificaClientEaggiornaDoppioni(item);
            }
        },

        computed: {
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            ...mapGetters('clients', {
                getClientMessaggio: 'getClientMessaggio',
                getImportati: 'getImportati',
                getListaDoppioni: 'getListaDoppioni',
                getOriginaliDaInserire: 'getOriginaliDaInserire',
                getListaSenzaFiliale: 'getListaSenzaFiliale',
            }),
        }
    }
</script>

<style scoped>

</style>
