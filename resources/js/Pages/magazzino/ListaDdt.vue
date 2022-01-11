<template>
    <div>

        <prodotti
            :prodotti="prodottiSelezione"
            :dialog-pro="dialogProdotti"
            v-if="dialogProdotti"
            @chiudiProdotti="chiudiProdotti"
        />

        <v-row class="mt-3">
            <v-col>
                <h2>Lista DDT</h2>
            </v-col>
            <v-col>
                <v-select
                    style="width: 200px"
                    @change="selezionaAnno()"
                    v-model="ricerca.anno"
                    :items="getAnni"
                    label="Anno"
                ></v-select>
            </v-col>
            <v-col class="d-flex justify-end">
                <router-link :to="{ name: 'magazzinoCentrale'}">
                    <v-btn color="orange">
                        Magazzino Centrale
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>

        <v-data-table
            dense
            :headers="headers"
            :items="getListaDdt"
            class="elevation-1 mt-3"
        >

            <template v-slot:item.actions="{ item }">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            @click="seleziona(item.products)"
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

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <a :href="linkBase+'/storage/ddt/'+item.id+'.pdf'" target="_blank">
                            <v-icon
                                color="green"
                                small
                                v-bind="attrs"
                                v-on="on"

                            >
                                mdi-file-document-outline
                            </v-icon>
                        </a>

                    </template>
                    <span>Documento</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Prodotti from "./Prodotti";
    export default {
        name: "ListaDdt",
        components: {Prodotti},
        data() {
            return {
                ricerca: {},
                dialogProdotti: false,
                prodottiSelezione: [],
                headers: [
                    {text: 'Progressivo', value: 'progressivo', class: "indigo white--text"},
                    {text: 'Data emissione', value: 'created_at', class: "indigo white--text"},
                    {text: 'Destinazione', value: 'nome_destinazione', class: "indigo white--text"},
                    {text: 'Indirizzo', value: 'indirizzo_destinazione', class: "indigo white--text"},
                    {text: 'Città', value: 'citta_destinazione', class: "indigo white--text"},
                    {text: 'PR', value: 'provincia_destinazione', class: "indigo white--text"},
                    {text: 'Azioni', value: 'actions', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.$store.commit('product/resetListaDdt');
        },

        methods: {
            ...mapActions('product', {
                fetchListaDdt: 'fetchListaDdt',
            }),

            seleziona(items){
                this.dialogProdotti = true;
                this.prodottiSelezione = items;
            },

            chiudiProdotti(){
                this.dialogProdotti = false;
                this.prodottiSelezione = [];
            },

            selezionaAnno(){
                this.fetchListaDdt(this.ricerca);
            },
        },

        computed: {
            ...mapGetters('product', {
                getListaDdt: 'getListaDdt',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),

            linkBase(){
                let base = '';
                if(window.location.host === 'vuexdocker.test'){
                    base = 'http://vuexdocker.test';
                } else {
                    base = 'https://www.centrouditogroup.it';
                }
                return base;
            },
        }
    }
</script>

<style scoped>

</style>
