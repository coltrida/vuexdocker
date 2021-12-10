<template>
    <div>
        <h2>Importa Cliente</h2>
        <h3>Anagrafiche importate: {{getImportati}}</h3>
        <v-container>

            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>

            <v-row v-else>
                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-file-input
                        v-model="caricaFile.fileUp"
                        truncate-length="15"
                        accept=".xlsx, .xls"
                    ></v-file-input>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="importa" color="success" dark>
                        Importa
                    </v-btn>

                </v-col>

                <!--<v-col
                    cols="4"
                    sm="4"
                >
                    &lt;!&ndash;<v-file-input
                        accept=".xls, .xlsx"
                        label="File input"
                    ></v-file-input>&ndash;&gt;
                    <p>Inserire il file nella posizione /storage/app/public/file.xml</p>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="importaXml" color="success" dark>
                        Importa
                    </v-btn>

                </v-col>-->
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
             //   nomeFile: 'app/public/file.xml',
                caricaFile:{
                    path: 'app/public/',
                    fileUp:{},
                    nomeFile: '',
                },
                carica: false
            }
        },

        methods:{
            ...mapActions('clients', {
                importClients: 'importClients',
                importClientsXml: 'importClientsXml',
                salvaFileAdmin: 'salvaFileAdmin',
            }),

            importa(){
                this.carica = true;

                this.caricaFile.nomeFile = 'carica';
                this.salvaFileAdmin(this.caricaFile).then(() => {
                    //  let pathnomefile = this.caricaFile.nomeFile;
                    this.importClients().then(() => {
                        this.caricaFile = {};
                        this.carica = false;
                    });
                });

                /*this.importClients().then(() => {
                    this.carica = false;
                });*/
            },

            /*importaXml(){
                this.carica = true;
                this.importClientsXml(this.nomeFile).then(() => {
                    this.carica = false;
                });
            },*/
        },

        computed:{
            ...mapGetters('clients', {
                getImportati: 'getImportati',
            }),
        }
    }
</script>

<style scoped>

</style>
