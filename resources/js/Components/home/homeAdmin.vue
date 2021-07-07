<template>
    <div class="flex justify-start align-center mt-2">

            <!--<v-row>
                <h1>Home Admin</h1>
            </v-row>-->

            <v-row style="font-size: 10px">
                <prodotti
                    :prodotti="prodottiSelezione"
                    :dialog-pro="dialogProdotti"
                    v-if="dialogProdotti"
                    @chiudiProdotti="chiudiProdotti"
                />
                <v-col cols="4">
                    <h2>Prove in Corso:</h2>
                    <div v-for="audio in getSituazioneMese" :key="audio.id">
                        <v-data-table
                            :headers="headers1"
                            :items="audio.prova_in_corso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ audio.name }}
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    <v-icon
                                        color="white"
                                        small
                                    >
                                        mdi-format-list-bulleted-square
                                    </v-icon>
                                </v-btn>
                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clients',
                                        params: { cogRicerca:item.client.cognome, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="5">
                    <h2>Finalizzati:</h2>
                    <div v-for="audio in getSituazioneMese" :key="audio.id">
                        <v-data-table
                            :headers="headers2"
                            :items="audio.prova_finalizzata"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ audio.name }}
                            </template>

                            <template v-slot:header.actions="{ header }">
                                <v-chip
                                    style="font-size: 12px"
                                    color="orange"
                                    label
                                    text-color="white"
                                >
                                    Bgt: € {{ audio.budget.target }} - Fatt: € {{audio.prova_finalizzata_sum_tot}}
                                </v-chip>


                            </template>

                                <!--<template v-slot:item.product="{ header }">
                                    <v-btn color="green" @click.stop="seleziona(item)">
                                        Prodotti
                                    </v-btn>
                                </template>-->
                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    Prod
                                </v-btn>
                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clients',
                                        params: { cogRicerca:item.client.cognome, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

                        </v-data-table>
                    </div>
                </v-col>

                <v-col cols="3">
                    <h2>Resi:</h2>
                    <div v-for="audio in getSituazioneMese" :key="audio.id">
                        <v-data-table
                            :headers="headers3"
                            :items="audio.prova_reso"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:header.client.fullname="{ header }">
                                {{ audio.name }}
                            </template>

                            <template v-slot:header.actions="{ header }">
                                <v-chip
                                    style="font-size: 12px"
                                    color="orange"
                                    label
                                    text-color="white"
                                >
                                    Bgt: € {{ audio.budget.target }} - Fatt: € {{audio.prova_finalizzata_sum_tot}}
                                </v-chip>


                            </template>

                            <!--<template v-slot:item.product="{ header }">
                                <v-btn color="green" @click.stop="seleziona(item)">
                                    Prodotti
                                </v-btn>
                            </template>-->
                            <template v-slot:item.actions="{ item }">
                                <v-btn @click="seleziona(item.product)" color="green" dark>
                                    Prodotti
                                </v-btn>

                            </template>

                            <template v-slot:item.client.fullname="{ item }">
                                <router-link style="color: black" :to="{ name: 'clients',
                                        params: { cogRicerca:item.client.cognome, }}">
                                    {{item.client.fullname}}
                                </router-link>
                            </template>

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
        name: "homeAdmin",
        components: {Prodotti},
        data(){
            return {
                dialogProdotti: false,
                prodottiSelezione: [],
                expanded: [],
                headers1: [
                    {text: 'Nome', width:120, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80,  value: 'tot', sortable: false, class: "indigo white--text"},
                    {text: 'Inizio', width:120, value: 'inizio_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Prodotti', value: 'actions', sortable: false, class: "indigo white--text" },
                    /*{text: 'budget', value:'product', sortable: false, class: "indigo white--text"},*/
                ],

                headers2: [
                    {text: 'Nome', width:160, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:100, value: 'tot', sortable: false, class: "indigo white--text"},
                    {text: 'Finalizzato', width:120, value: 'fine_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers3: [
                    {text: 'Nome', width:140, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80, value: 'tot', sortable: false, class: "indigo white--text"},
                    {text: 'Reso', width:110, value: 'fine_prova', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        /*updated() {
            this.fetchSituazioneMese();
        },*/

        mounted() {
            this.fetchSituazioneMese();
            window.Echo.channel("provaChannel").listen(".task-created", e => {
                this.fetchSituazioneMese();
            });
        },

        methods: {
            ...mapActions('users', {
                fetchSituazioneMese: 'fetchSituazioneMese',
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

            /*...mapGetters('prove', {
                getProvePassate: 'getProvePassate',
            }),*/
        },
    }
</script>

<style scoped>

</style>
