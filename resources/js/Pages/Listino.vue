<template>
    <div>
        <h2>Listino</h2>
        <v-container>
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

            <v-btn @click="aggiungi" dark color="indigo">
                Inserisci
            </v-btn>

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
                    <v-icon
                        color="red"
                        small
                        @click="elimina(item.id)"
                    >
                        mdi-delete
                    </v-icon>
                </template>

            </v-data-table>

        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Listino",

        data(){
            return {
                search: '',
                listino:{},
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

            aggiungi(){
                this.addListino(this.listino);
                this.listino = '';
            },

            elimina(id){
                this.eliminaListino(id)
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

        },
    }
</script>

<style scoped>

</style>
