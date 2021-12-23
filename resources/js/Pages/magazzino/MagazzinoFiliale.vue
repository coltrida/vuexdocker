<template>
    <div>
        <h2>Magazzino {{getFilialeById.nome}}</h2>
            <v-row v-if="getRuolo != 'admin'">
                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-select
                        @change="caricaProdotti()"
                        v-model="productRichiesto.fornitore_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFornitori"
                        label="fornitore"
                    ></v-select>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-select
                        v-model="productRichiesto.listino_id"
                        item-value="id"
                        item-text="nome"
                        :items="getListino"
                        label="listino"
                    ></v-select>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-text-field
                        v-model="productRichiesto.quantita"
                        label="quantita"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-btn @click="richiedi" :disabled="verificaCampi" :block="$vuetify.breakpoint.xs">
                        Richiedi
                    </v-btn>
                </v-col>

            </v-row>

            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>
            <div v-else>
                <h3 class="mt-5">Riepilogo Presenti</h3>
                <v-data-table
                    :headers="headersRiepilogo"
                    dense
                    :items="getSoglie"
                    class="elevation-1 mt-3"
                >
                </v-data-table>

                <h3 class="mt-5">Presenti</h3>
                <v-data-table
                    :headers="headers1"
                    dense
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

                    <template v-slot:item.giorniRimasti="{ item }">
                        <div v-if="item.giorniRimasti < 10">
                            <v-chip
                                color="red"
                                dark
                            >
                                {{ item.giorniRimasti }}
                            </v-chip>
                        </div>
                        <div v-else>
                            {{ item.giorniRimasti }}
                        </div>

                    </template>
                </v-data-table>

                <h3 class="mt-5">In prova</h3>
                <v-data-table
                    :headers="headers2"
                    dense
                    :items="getInProva"
                    :items-per-page="10"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:item.cliente="{ item }">
                        <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nomeCliente, cogRicerca:item.fullname, }}">
                            {{item.fullname}}
                        </router-link>
                    </template>
                </v-data-table>

                <h3 class="mt-5">Richiesti</h3>
                <v-data-table
                    :headers="headers4"
                    dense
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

                <h3 class="mt-5">In Arrivo</h3>
                <v-data-table
                    :headers="headers3"
                    dense
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
            </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "MagazzinoFiliale",

        data(){
            return {
                carica: false,
                productRichiesto:{},
                headersRiepilogo: [
                    { text: 'Nome', align: 'start', value: 'nome', class: "indigo white--text" },
                    { text: 'Conteggio', value: 'conteggio', class: "indigo white--text" },
                    { text: 'Soglia', value: 'soglia', class: "indigo white--text"},
                ],

                headers1: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'Giorni x Reso', value: 'giorniRimasti', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
                headers2: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Categoria', value: 'categoria', class: "indigo white--text" },
                    /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
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
                    /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'GG reso', value: 'giorniTempoDiReso', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],
                headers4: [
                    { text: 'Fornitore', value: 'listino.fornitore.nome', class: "indigo white--text"},
                    { text: 'Nome', value: 'listino.nome', class: "indigo white--text"},
                    { text: 'Quantità', value: 'quantita', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            let accesso = false;
            this.getFiliali.forEach(element => {
                if(element.id === this.rottaIdFiliale){
                    accesso = true;
                }
            });
            if (accesso){
                this.carica = true;
                this.fetchInFiliale(this.rottaIdFiliale).then(() => {
                    this.fetchInProva(this.rottaIdFiliale).then(() => {
                        this.fetchRichiesti(this.rottaIdFiliale).then(() => {
                            this.fetchInArrivo(this.rottaIdFiliale).then(() => {
                                this.fetchSoglie(this.rottaIdFiliale).then(() => {
                                    this.carica = false;
                                });
                            });
                        });
                    });
                });

                this.fetchFornitori();
                this.fetchFilialeById(this.rottaIdFiliale);

                window.Echo.channel("logisticaChannel").listen(".task-created", e => {
                    this.fetchInFiliale(this.rottaIdFiliale);
                    this.fetchInProva(this.rottaIdFiliale);
                    this.fetchRichiesti(this.rottaIdFiliale);
                    this.fetchInArrivo(this.rottaIdFiliale);
                });
            }

        },

        watch:{
            rottaIdFiliale(){
                this.carica = true;
                this.fetchInFiliale(this.rottaIdFiliale).then(() => {
                    this.fetchInProva(this.rottaIdFiliale).then(() => {
                        this.fetchRichiesti(this.rottaIdFiliale).then(() => {
                            this.fetchInArrivo(this.rottaIdFiliale).then(() => {
                                this.fetchSoglie(this.rottaIdFiliale).then(() => {
                                    this.carica = false;
                                });
                            });
                        });
                    });
                });

                this.fetchFilialeById(this.rottaIdFiliale);
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
                fetchSoglie:'fetchSoglie',
            }),

            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('listino', {
                fetchListinoFromFornitore:'fetchListinoFromFornitore',
            }),

            ...mapActions('filiali', {
                fetchFilialeById:'fetchFilialeById',
            }),

            caricaProdotti(){
                if (this.productRichiesto.fornitore_id){
                    this.fetchListinoFromFornitore(this.productRichiesto.fornitore_id);
                }
            },

            richiedi(){
                this.productRichiesto.filiale_id = this.rottaIdFiliale;
                this.productRichiesto.stato_id = 6;
                this.productRichiesto.user_id = parseInt(this.getIdUser);
                this.richiediProduct(this.productRichiesto);
                this.productRichiesto = {};
            },

            elimina(id){
                this.eliminaRichiesta(id);
            },

            arrivato(id){
                this.switchArrivato(id).then(() => {
                    this.fetchSoglie(this.rottaIdFiliale);
                });

            }

        },

        computed:{
            ...mapGetters('product', {
                getInFiliale:'getInFiliale',
                getInProva:'getInProva',
                getRichiesti:'getRichiesti',
                getInArrivo:'getInArrivo',
                getSoglie:'getSoglie',
            }),

            ...mapGetters('fornitori', {
                getFornitori:'getFornitori',
            }),

            ...mapGetters('listino', {
                getListino:'getListino',
            }),

            ...mapGetters('filiali', {
                getFiliali: 'getFiliali',
                getFilialeById: 'getFilialeById',
            }),

            ...mapGetters('login', {
                getRuolo:'getRuolo',
                getIdUser:'getIdUser',
            }),

            rottaIdFiliale(){
                return this.$route.params.filialeId ? this.$route.params.filialeId : null;
            },

            verificaCampi(){
                return this.productRichiesto.quantita &&
                    this.productRichiesto.listino_id &&
                    this.productRichiesto.fornitore_id ? false : true;
            }

        },
    }
</script>

<style scoped>

</style>
