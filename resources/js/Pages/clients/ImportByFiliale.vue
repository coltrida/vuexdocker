<template>
    <div>
        <h2>Importa Cliente</h2>
        <v-container>

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

                    <v-btn @click="importaXml" color="success" dark :block="$vuetify.breakpoint.xs">
                        Importa
                    </v-btn>

                </v-col>
            </v-row>



        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Inserisci",

        data(){
            return {
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
            }
        },

        computed: {
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            ...mapGetters('clients', {
                getClientMessaggio: 'getClientMessaggio',
            }),
        }
    }
</script>

<style scoped>

</style>
