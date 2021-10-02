<template>
    <div class="flex justify-start align-center my-4">

            <v-row style="font-size: 10px">
                <prodotti
                    :prodotti="prodottiSelezione"
                    :dialog-pro="dialogProdotti"
                    v-if="dialogProdotti"
                    @chiudiProdotti="chiudiProdotti"
                />

                <v-col cols="4">
                    <h2>Prove in Corso:</h2>
                    <div v-for="audio in getCommerciale" :key="audio.id">
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

                <v-col cols="5">
                    <h2>Finalizzati:</h2>
                    <div v-for="audio in getCommerciale" :key="audio.id">
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

                <v-col cols="3">
                    <h2>Resi:</h2>
                    <div v-for="audio in getCommerciale" :key="audio.id">
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
                headers1: [
                    {text: 'Nome', width:120, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80,  value: 'tot_formattato', sortable: false, class: "indigo white--text"},
                    {text: 'GG in prova', align: 'center', width:120, value: 'giorni_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Prodotti', align: 'center', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers2: [
                    {text: 'Nome', width:160, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:100, value: 'tot_formattato', sortable: false, class: "indigo white--text"},
                    {text: 'Finalizzato', width:120, value: 'fine_prova', sortable: false, class: "indigo white--text"},
                    { text: 'Actions', align: 'center', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers3: [
                    {text: 'Nome', width:140, value: 'client.fullname', sortable: false, class: "indigo white--text"},
                    {text: 'Tot', width:80, value: 'tot_formattato', sortable: false, class: "indigo white--text"},
                    {text: 'Reso', width:110, value: 'fine_prova', sortable: false, class: "indigo white--text"},
                ],

            }
        },

        mounted() {
            this.fetchCommerciale();
            window.Echo.channel("provaChannel").listen(".task-created", e => {
                this.fetchCommerciale();
            });
        },

        methods: {
            ...mapActions('users', {
                fetchCommerciale: 'fetchCommerciale',
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
                getCommerciale: 'getCommerciale',
            }),
        },
    }
</script>

<style scoped>

</style>
