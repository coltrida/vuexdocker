<template>
    <div>
        <h2>Tempi Recall</h2>
        <v-container>

            <messaggio
                :textMessaggio="textMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>

            <v-row>
                <v-col cols="12" md="6" lg="6">
                    <v-data-table
                        :headers="headers1"
                        :items="getTipologie"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="red"
                                small
                                @click="elimina(item.id)"
                            >
                                mdi-delete
                            </v-icon>

                            <v-icon
                                color="blue"
                                small
                                @click="seleziona(item)"
                            >
                                mdi-pencil
                            </v-icon>
                        </template>

                    </v-data-table>
                </v-col>

                <v-col cols="12" md="6" lg="6">
                    <v-row>
                        <v-col cols="12" md="4" lg="4">
                            <v-text-field
                                v-model.lazy="tipologia.nome"
                                label="tipo"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-text-field
                                v-model.lazy="tipologia.recall"
                                label="tempo recall"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4" lg="4">
                            <v-btn @click="invia" color="success" dark :block="$vuetify.breakpoint.xs">
                                {{nomeBtn}}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>


        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Messaggio from "../../Components/Messaggio";

    export default {
        name: "TempiRecall",

        components: { Messaggio },

        data(){
            return {
                tipologia:{},
                switch: null,
                textMessaggio: null,
                headers1: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'recall', value: 'recall', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

            }
        },

        mounted(){
            this.fetchTipologie();
        },

        methods:{
            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
                addTipologia:'addTipologia',
                modificaTipologia:'modificaTipologia',
            }),

            invia(){
                if (this.switch){
                    this.modificaTipologia(this.tipologia);
                    this.switch = null;
                    this.textMessaggio = 'Tipologia Modificata';
                } else {
                    this.addTipologia(this.tipologia);
                    this.textMessaggio = 'Tipologia Inserita';
                }

                this.tipologia = {};
            },

            elimina(id){

            },

            seleziona(item){
                this.tipologia = item;
                this.switch = 1;
            },

            cancellaMessaggio(){
                this.textMessaggio = '';
            }
        },

        computed:{
            ...mapGetters('tipologie', {
                getTipologie:'getTipologie',
            }),

            nomeBtn(){
                return this.switch ? 'modifica' : 'inserisci';
            },

        },
    }
</script>

<style scoped>

</style>

