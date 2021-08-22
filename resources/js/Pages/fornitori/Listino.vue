<template>
    <div>
        <h2>Listino</h2>
        <v-container>

           <soglie
               :soglie="soglieSelezione"
               :dialog-pro="dialogSoglie"
               v-if="dialogSoglie"
               @chiudiSoglie="chiudiSoglie"
           />

            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="listino.nome"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Nome Prodotto"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="listino.fornitore_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFornitori"
                        label="fornitore"
                    ></v-select>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-select
                        v-model="listino.categoria_id"
                        item-value="id"
                        item-text="nome"
                        :items="getCategorie"
                        label="cat"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="listino.costo"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="costo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="listino.prezzolistino"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="prezzo listino"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="listino.iva"
                        counter="25"
                        label="iva"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="listino.giorniTempoDiReso"
                        counter="25"
                        label="gg di reso"
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-row class="align-center">
                <v-col cols="3">
                    <v-list>
                        <v-list-item
                            dense
                            v-for="(item, index) in getFiliali"
                            :key="item.id"
                        >
                            <!--<v-list-item-icon class="align-center pt-4">
                                <v-checkbox
                                    v-model="listino.idFiliali"
                                    :label="item.nome"
                                    :value="item.id"
                                ></v-checkbox>
                            </v-list-item-icon>-->

                            <v-list-item-content>
                                <v-list-item-title >{{item.nome}}</v-list-item-title>
                            </v-list-item-content>

                            <v-list-item-avatar class="align-center">
                                <v-text-field type="number" v-model="listino.soglie[index]"></v-text-field>
                            </v-list-item-avatar>
                        </v-list-item>
                    </v-list>

                </v-col>
                <v-col>
                    <v-btn @click="aggiungi" dark color="indigo">
                        Inserisci
                    </v-btn>
                </v-col>
            </v-row>



            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Ricerca"
                single-line
                hide-details
            ></v-text-field>

            <v-data-table
                :headers="headers"
                :items="getListino"
                :search="search"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="red"
                                small
                                @click="elimina(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-delete
                            </v-icon>
                        </template>
                        <span>Elimina</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                @click="seleziona(item.filiale)"
                                color="blue"
                                small
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-eye
                            </v-icon>
                    </template>
                        <span>Soglie Minime</span>
                    </v-tooltip>

                    <!--<v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="blue"
                                small
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-eye
                            </v-icon>
                        </template>
                        <span>Soglie Minime</span>
                    </v-tooltip>-->
                </template>

            </v-data-table>

        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Soglie from "./Soglie";

    export default {
        name: "Listino",
        components: {Soglie},
        data(){
            return {
                soglieSelezione: [],
                dialogSoglie: false,
                search: '',
                listino:{
                    soglie:[],
                    idFiliali:[]
                },
                headers: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'nome',
                        class: "indigo white--text"
                    },
                    { text: 'Fornitore', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    { text: 'Costo', value: 'costo', class: "indigo white--text" },
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'iva', value: 'iva', class: "indigo white--text" },
                    { text: 'GG Reso', value: 'giorniTempoDiReso', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchListino();
            this.fetchFornitori();
            this.fetchCategorie();
            this.fetchFiliali().then(() => {
                this.getFiliali.forEach(ele => {
                    this.listino.idFiliali.push(ele.id)
                })
            });
            //console.log(this.listino)
        },

        methods:{
            ...mapActions('listino', {
                fetchListino:'fetchListino',
                addListino:'addListino',
                eliminaListino:'eliminaListino',
            }),

            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('categorie', {
                fetchCategorie:'fetchCategorie',
            }),

            ...mapActions('filiali', {
                fetchFiliali:'fetchFiliali',
            }),

            aggiungi(){
                this.addListino(this.listino).then(() => {
                    this.listino = {
                        nome:'',
                        fornitore_id:'',
                        categoria_id:'',
                        costo:'',
                        prezzolistino:'',
                        iva:'',
                        giorniTempoDiReso:'',
                        soglie:[],
                    };
                });

            },

            elimina(id){
                this.eliminaListino(id)
            },

            seleziona(items){
                this.dialogSoglie = true;
                this.soglieSelezione = items;
            },

            chiudiSoglie(){
                this.dialogSoglie = false;
                this.soglieSelezione = [];
            }
        },

        computed:{
            ...mapGetters('listino', {
                getListino:'getListino',
            }),

            ...mapGetters('fornitori', {
                getFornitori:'getFornitori',
            }),

            ...mapGetters('categorie', {
                getCategorie:'getCategorie',
            }),

            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

        },
    }
</script>

<style scoped>

</style>
