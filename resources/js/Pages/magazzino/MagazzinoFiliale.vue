<template>
    <div>
        <h2>Magazzino</h2>
        <v-container>

            <v-row>
                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-select
                        @change="caricaProdotti()"
                        v-model="productRichiesto.fornitore_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFornitori"
                        label="fornitore"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-select
                        v-model="productRichiesto.listino_id"
                        item-value="id"
                        item-text="nome"
                        :items="getListino"
                        label="listino"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="productRichiesto.quantita"
                        label="quantita"
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-btn @click="richiedi" color="success" dark>
                Richiedi
            </v-btn>

            <h3>Presenti</h3>
            <v-data-table
                :headers="headers1"
                :items="getInFiliale"
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

            <h3>In prova</h3>
            <v-data-table
                :headers="headers2"
                :items="getInProva"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >
            </v-data-table>

            <h3>Richiesti</h3>
            <v-data-table
                :headers="headers1"
                :items="getRichiesti"
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

            <h3>In Arrivo</h3>
            <v-data-table
                :headers="headers3"
                :items="getInArrivo"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >

                <template v-slot:item.actions="{ item }">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="green"
                                small
                                @click="arrivato(item.id)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-truck
                            </v-icon>
                        </template>
                        <span>Arrivato</span>
                    </v-tooltip>
                </template>


            </v-data-table>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "MagazzinoFiliale",

        data(){
            return {
                productRichiesto:{},
                headers1: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    { text: 'Costo', value: 'costo', class: "indigo white--text" },
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'GG reso', value: 'giorniTempoDiReso', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
                headers2: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    { text: 'Costo', value: 'costo', class: "indigo white--text" },
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'GG reso', value: 'giorniTempoDiReso', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: 'Cliente', value: 'cliente', class: "indigo white--text" },

                ],
                headers3: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    { text: 'Costo', value: 'costo', class: "indigo white--text" },
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'GG reso', value: 'giorniTempoDiReso', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],
            }
        },

        mounted(){
            this.fetchInFiliale(this.rottaIdFiliale);
            this.fetchInProva(this.rottaIdFiliale);
            this.fetchRichiesti(this.rottaIdFiliale);
            this.fetchInArrivo(this.rottaIdFiliale);

            this.fetchFornitori();
        },

        watch:{
            rottaIdFiliale(){
                this.fetchInFiliale(this.rottaIdFiliale);
            }
        },

        methods:{
            ...mapActions('product', {
                fetchInFiliale:'fetchInFiliale',
                fetchInProva:'fetchInProva',
                fetchRichiesti:'fetchRichiesti',
                fetchInArrivo:'fetchInArrivo',
                richiediProduct:'richiediProduct',
                eliminaRichiesta:'eliminaRichiesta',
                switchArrivato:'switchArrivato',
            }),

            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('listino', {
                fetchListinoFromFornitore:'fetchListinoFromFornitore',
            }),

            caricaProdotti(){
                if (this.productRichiesto.fornitore_id){
                    this.fetchListinoFromFornitore(this.productRichiesto.fornitore_id);
                }
            },

            richiedi(){
                this.productRichiesto.filiale_id = this.rottaIdFiliale;
                this.productRichiesto.stato_id = 6;
                this.richiediProduct(this.productRichiesto);
                this.productRichiesto = {};
            },

            elimina(id){
                this.eliminaRichiesta(id);
            },

            arrivato(id){
                this.switchArrivato(id);
            }

        },

        computed:{
            ...mapGetters('product', {
                getInFiliale:'getInFiliale',
                getInProva:'getInProva',
                getRichiesti:'getRichiesti',
                getInArrivo:'getInArrivo',
            }),

            ...mapGetters('fornitori', {
                getFornitori:'getFornitori',
            }),

            ...mapGetters('listino', {
                getListino:'getListino',
            }),

            rottaIdFiliale(){
                return this.$route.params.filialeId;
            }
        },
    }
</script>

<style scoped>

</style>
