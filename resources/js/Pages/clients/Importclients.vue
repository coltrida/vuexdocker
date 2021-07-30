<template>
    <div>
        <h2>Importa Cliente</h2>
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
                    <!--<v-file-input
                        accept=".xls, .xlsx"
                        label="File input"
                    ></v-file-input>-->
                    <p>Inserire il file nella posizione /store/app/public/file.xlsx</p>
                    <p>cognome nome indirizzo cap comune provincia numtel</p>
                    <p>poi eliminare il file file.xlsx</p>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="importa" color="success" dark>
                        Importa
                    </v-btn>

                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                >
                    <!--<v-file-input
                        accept=".xls, .xlsx"
                        label="File input"
                    ></v-file-input>-->
                    <p>Inserire il file nella posizione /storage/app/public/gggg.xml</p>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-btn @click="importaXml" color="success" dark>
                        Importa
                    </v-btn>

                </v-col>
            </v-row>



        </v-container>
    </div>

</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: "Inserisci",

        data(){
            return {
                carica: false
            }
        },

        methods:{
            ...mapActions('clients', {
                importClients: 'importClients',
                importClientsXml: 'importClientsXml',
            }),

            importa(){
                this.carica = true;
                this.importClients().then(() => {
                    this.carica = false;
                });
            },

            importaXml(){
                this.carica = true;
                this.importClientsXml().then(() => {
                    this.carica = false;
                });
            },
        },
    }
</script>

<style scoped>

</style>
