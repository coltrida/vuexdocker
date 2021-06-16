<template>
    <div class="flex justify-start align-center mt-2">
        <v-container>
            <v-row>
                <h1>Home Audio</h1>
            </v-row>

            <v-row style="font-size: 10px">
                <prodotti
                    :prodotti="prodottiSelezione"
                    :dialog-pro="dialogProdotti"
                    v-if="dialogProdotti"
                    @chiudiProdotti="chiudiProdotti"
                />
                <v-col cols="6">
                    <h2>Prove in Corso:</h2>
                    <div>
                        <v-data-table
                            :headers="headers1"
                            :items="getSituazioneMese.prova_in_corso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ getSituazioneMese.name }}
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    Prodotti
                                </v-btn>

                            </template>

                        </v-data-table>
                    </div>

                    <h2>Finalizzati:</h2>
                    <div>
                        <v-data-table
                            :headers="headers2"
                            :items="getSituazioneMese.prova_finalizzata"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ getSituazioneMese.name }}
                            </template>

                            <template v-slot:header.actions="{ header }">
                                <v-chip
                                    style="font-size: 12px"
                                    color="orange"
                                    label
                                    text-color="white"
                                >
                                    Bgt: € {{ bgtTarget }} - Fatt: € {{getSituazioneMese.prova_finalizzata_sum_tot}}
                                </v-chip>


                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    Prodotti
                                </v-btn>

                            </template>

                        </v-data-table>
                    </div>

                    <h2>Resi:</h2>
                    <div>
                        <v-data-table
                            :headers="headers2"
                            :items="getSituazioneMese.prova_reso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ getSituazioneMese.name }}
                            </template>

                            <template v-slot:header.actions="{ header }">
                                <v-chip
                                    style="font-size: 12px"
                                    color="orange"
                                    label
                                    text-color="white"
                                >
                                    Bgt: € {{ bgtTarget }} - Fatt: € {{getSituazioneMese.prova_finalizzata_sum_tot}}
                                </v-chip>


                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    Prodotti
                                </v-btn>

                            </template>

                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="6">
                    <h2>Appuntamenti:</h2>
                    <div>
                        <v-data-table
                            :headers="headers4"
                            :items="getAppuntamenti"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                        </v-data-table>
                    </div>

                    <h2>Complenni:</h2>
                    <div>
                        <v-data-table
                            :headers="headers3"
                            :items="getCompleanni"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                        </v-data-table>
                    </div>
                </v-col>

            </v-row>

        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Prodotti from "./Prodotti";
    export default {
        name: "homeAudio",
        components: {Prodotti},
        data(){
            return {
                dialogProdotti: false,
                prodottiSelezione: [],
                expanded: [],
                headers1: [
                    {text: 'Nome', width:185, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80,  value: 'tot', sortable: false, class: "indigo white--text"},
                    {text: 'Inizio', width:120, value: 'inizio_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                    /*{text: 'budget', value:'product', sortable: false, class: "indigo white--text"},*/
                ],

                headers2: [
                    {text: 'Nome', width:185, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80, value: 'tot', sortable: false, class: "indigo white--text"},
                    {text: 'Finalizzato', width:120, value: 'fine_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers3: [
                    {text: 'Nome', width:185, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'indirizzo', width:70, value: 'indirizzo', sortable: false, class: "indigo white--text"},
                    {text: 'citta', width:120, value: 'citta', sortable: false, class: "indigo white--text"},
                    {text: 'provincia', width:120, value: 'provincia', sortable: false, class: "indigo white--text"},
                    {text: 'telefono', width:120, value: 'telefono', sortable: false, class: "indigo white--text"},
                    {text: 'Data Nascita', width:120, value: 'datanascita', sortable: false, class: "indigo white--text"},
                ],

                headers4: [
                    {text: 'Nome', width:185, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'telefono', width:70, value: 'telefono', sortable: false, class: "indigo white--text"},
                    {text: 'citta', width:120, value: 'citta', sortable: false, class: "indigo white--text"},
                    {text: 'Luogo', width:120, value: 'luogo', sortable: false, class: "indigo white--text"},
                    {text: 'orario', width:120, value: 'orario', sortable: false, class: "indigo white--text"},
                    {text: 'giorno', width:120, value: 'giorno', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchSituazioneMese(this.getIdUser);
            this.fetchCompleanni(this.getIdUser);
            this.fetchAppuntamentiOggi(this.getIdUser);

        },

        methods: {
            ...mapActions('users', {
                fetchSituazioneMese: 'fetchSituazioneMese',
            }),

            ...mapActions('clients', {
                fetchCompleanni: 'fetchCompleanni',
            }),

            ...mapActions('appuntamenti', {
                fetchAppuntamentiOggi: 'fetchAppuntamentiOggi',
            }),

            seleziona(items){
                this.dialogProdotti = true;
                this.prodottiSelezione = items;
            },

            chiudiProdotti(){
                this.dialogProdotti = false;
                this.prodottiSelezione = [];
            }
        },

        computed: {
            ...mapGetters('users', {
                getSituazioneMese: 'getSituazioneMese',
            }),

            ...mapGetters('clients', {
                getCompleanni: 'getCompleanni',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            ...mapGetters('appuntamenti', {
                getAppuntamenti: 'getAppuntamenti',
            }),

            bgtAnno(){
                return this.getSituazioneMese.budget ? this.getSituazioneMese.budget.budgetAnno : null;
            },

            bgtTarget(){
                return this.getSituazioneMese.budget ? this.getSituazioneMese.budget.target : null;
            }
        },
    }
</script>

<style scoped>

</style>
