<template>
    <div>
        <h2>Listino</h2>
           <soglie
               :soglie="soglieSelezione"
               :dialog-pro="dialogSoglie"
               v-if="dialogSoglie"
               @chiudiSoglie="chiudiSoglie"
           />

        <v-row>
            <v-col cols="8">
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
                    :items-per-page="15"
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
                                    color="green"
                                    small
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-eye
                                </v-icon>
                            </template>
                            <span>Soglie Minime</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    color="blue"
                                    small
                                    @click="modifica(item)"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-pencil
                                </v-icon>
                            </template>
                            <span>Soglie Minime</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-col>
            <v-col cols="4">
                <v-text-field
                    v-model="listino.nome"
                    counter="25"
                    hint="Massimo 25 caratteri"
                    label="Nome Prodotto"
                ></v-text-field>
                <v-select
                    v-model="listino.fornitore_id"
                    item-value="id"
                    item-text="nome"
                    :items="getFornitori"
                    label="fornitore"
                ></v-select>
                <v-select
                    v-model="listino.categoria_id"
                    item-value="id"
                    item-text="nome"
                    :items="getCategorie"
                    label="cat"
                ></v-select>
                <v-text-field
                    v-model="listino.costo"
                    counter="25"
                    hint="Massimo 25 caratteri"
                    label="costo"
                ></v-text-field>
                <v-text-field
                    v-model="listino.prezzolistino"
                    counter="25"
                    hint="Massimo 25 caratteri"
                    label="prezzo listino"
                ></v-text-field>
                <v-text-field
                    v-model="listino.iva"
                    counter="25"
                    label="iva"
                ></v-text-field>
                <v-text-field
                    v-model="listino.giorniTempoDiReso"
                    counter="25"
                    label="gg di reso"
                ></v-text-field>
                <v-list>
                    <v-list-item
                        dense
                        v-for="(item, index) in getFiliali"
                        :key="item.id"
                    >
                        <v-list-item-content>
                            <v-list-item-title >{{item.nome}}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-avatar class="align-center">
                            <v-text-field type="number" v-model="listino.soglie[index]"></v-text-field>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
                <v-btn @click="aggiungi" dark color="indigo">
                    {{btnName}}
                </v-btn>

            </v-col>
        </v-row>
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
                modificaSwitch: false,
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
                modificaListino:'modificaListino',
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
                if (this.modificaSwitch){
                    this.modificaListino(this.listino).then(() => {
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
                } else {
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
                }

                this.modificaSwitch = false;
            },

            elimina(id){
                this.eliminaListino(id)
            },

            modifica(eleSelezionato){
                this.modificaSwitch = true;
                this.listino.id = eleSelezionato.id;
                this.listino.nome = eleSelezionato.nome;
                this.listino.fornitore_id = eleSelezionato.fornitore_id;
                this.listino.categoria_id = eleSelezionato.categoria_id;
                this.listino.costo = eleSelezionato.costoOriginal;
                this.listino.prezzolistino = eleSelezionato.prezzoOriginal;
                this.listino.iva = eleSelezionato.ivaOriginal;
                this.listino.giorniTempoDiReso = eleSelezionato.giorniTempoDiReso;
                for(let i=1; i <= eleSelezionato.filiale.length; i++){
                    this.listino.soglie[i-1] = eleSelezionato.filiale[i-1].pivot.soglia
                }
         //       console.log(eleSelezionato);
                this.$store.commit('listino/eliminaListino', this.listino.id);
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

            btnName(){
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            }

        },
    }
</script>

<style scoped>

</style>
