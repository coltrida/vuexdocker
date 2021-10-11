<template>
    <div class="flex justify-start align-center my-2">

            <v-row style="font-size: 10px">
                <prodotti
                    :prodotti="prodottiSelezione"
                    :dialog-pro="dialogProdotti"
                    v-if="dialogProdotti"
                    @chiudiProdotti="chiudiProdotti"
                />
                <v-col cols="12" md="12" lg="5" xs="12" sm="12">
                    <h2>Prove in Corso:</h2>
                    <div>
                        <v-data-table
                            :headers="headers1"
                            :items="getSituazioneMese.prova_in_corso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    @click="seleziona(item.product)"
                                    color="blue"
                                    small
                                    v-bind="attrs"
                                    v-on="on"

                                >
                                    mdi-format-list-bulleted-square
                                </v-icon>
                                    </template>
                                    <span>Prodotti</span>
                                </v-tooltip>
                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.client.nome, cogRicerca:item.client.fullname, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

                            <template v-slot:item.giorni_prova="{ item }">
                                <div v-if="item.giorni_prova > 20">
                                    <v-chip
                                        color="red"
                                        text-color="white"
                                    >
                                        {{item.giorni_prova}}
                                    </v-chip>
                                </div>
                                <div v-else>
                                    {{item.giorni_prova}}
                                </div>

                            </template>

                        </v-data-table>
                    </div>

                    <h2 class="mt-6">Finalizzati:</h2>
                    <div>
                        <v-data-table
                            :headers="headers2"
                            :items="getSituazioneMese.prova_finalizzata"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

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
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            @click="seleziona(item.product)"
                                            color="blue"
                                            small
                                            v-bind="attrs"
                                            v-on="on"

                                        >
                                            mdi-format-list-bulleted-square
                                        </v-icon>
                                    </template>
                                    <span>Prodotti</span>
                                </v-tooltip>
                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.client.nome, cogRicerca:item.client.fullname, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>

                    <h2 class="mt-6">Resi:</h2>
                    <div>
                        <v-data-table
                            :headers="headers2"
                            :items="getSituazioneMese.prova_reso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

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
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            @click="seleziona(item.product)"
                                            color="blue"
                                            small
                                            v-bind="attrs"
                                            v-on="on"

                                        >
                                            mdi-format-list-bulleted-square
                                        </v-icon>
                                    </template>
                                    <span>Prodotti</span>
                                </v-tooltip>
                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.client.nome, cogRicerca:item.client.fullname, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="12" md="12" lg="7" xs="12" sm="12">
                    <h2>Appuntamenti Oggi:</h2>
                    <div>
                        <v-data-table
                            :headers="headers4"
                            :items="getAppuntamentiOggi"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >
                            <template v-slot:item.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                    {{item.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>

                    <h2 class="mt-6">Appuntamenti Domani:</h2>
                    <div>
                        <v-data-table
                            :headers="headers4"
                            :items="getAppuntamentiDomani"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:item.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nome, cogRicerca:item.fullname, }}">
                                    {{item.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>

                    <h2 class="mt-6">Complenni:</h2>
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
                    {text: 'Nome', width:170, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80, align: 'center', value: 'tot_formattato', sortable: false, class: "indigo white--text"},
                    {text: 'GG in prova', align: 'center', width:120, value: 'giorni_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', align: 'center', value: 'actions', sortable: false, class: "indigo white--text" },
                    /*{text: 'budget', value:'product', sortable: false, class: "indigo white--text"},*/
                ],

                headers2: [
                    {text: 'Nome', width:170, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', align: 'center', width:80, value: 'tot_formattato', sortable: false, class: "indigo white--text"},
                    {text: 'Finalizzato', align: 'center', width:120, value: 'fine_formattata', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', align: 'center', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers3: [
                    {text: 'Nome', width:170, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'telefono', width:70, value: 'telefono', sortable: false, class: "indigo white--text"},
                    {text: 'citta', width:120, value: 'citta', sortable: false, class: "indigo white--text"},
                    {text: 'PR', width:120, value: 'provincia', sortable: false, class: "indigo white--text"},
                    {text: 'indirizzo', width:120, value: 'indirizzo', sortable: false, class: "indigo white--text"},
                    {text: 'Data Nascita', width:120, value: 'datanascita', sortable: false, class: "indigo white--text"},
                ],

                headers4: [
                    {text: 'Nome', width:170, value: 'fullname', sortable: false, class: "indigo white--text"},
                    {text: 'telefono', width:70, value: 'telefono', sortable: false, class: "indigo white--text"},
                    {text: 'Tipo', width:120, value: 'tipo', sortable: false, class: "indigo white--text"},
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
            this.fetchAppuntamentiDomani(this.getIdUser);
           // console.log(this.$vuetify.breakpoint.xs)
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
                fetchAppuntamentiDomani: 'fetchAppuntamentiDomani',
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
                getAppuntamentiOggi: 'getAppuntamentiOggi',
                getAppuntamentiDomani: 'getAppuntamentiDomani',
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
