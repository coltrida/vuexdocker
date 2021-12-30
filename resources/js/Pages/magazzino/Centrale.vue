<template>
    <div>
        <h2>Magazzino Centrale</h2>
            <v-row v-if="getRuolo === 'admin' || getRuolo === 'amministrazione'">
                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-select
                        @change="caricaProdotti()"
                        v-model="productDaInserire.fornitore_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFornitori"
                        label="fornitore"
                    ></v-select>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-select
                        v-model="productDaInserire.listino_id"
                        item-value="id"
                        item-text="nome"
                        :items="getListino"
                        label="listino"
                    ></v-select>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-text-field
                        v-model="productDaInserire.matricola"
                        label="matricola"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" lg="3" xs="12" sm="12">
                    <v-btn @click="inserisciProdotto" :disabled="verificaCampi" :block="$vuetify.breakpoint.xs">
                        Inserisci
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
                <v-row>
                    <v-col>
                        <h3 class="mt-5">Riepilogo In Centrale</h3>
                        <v-data-table
                            :headers="headersRiepilogo"
                            dense
                            :items="getRiepilogoInCentrale"
                            class="elevation-1 mt-3"
                        >
                        </v-data-table>

                        <v-row class="mt-3">
                            <v-col class="d-flex align-end m-0 p-0">
                                <h3 class="mt-5">Presenti In Centrale</h3>
                            </v-col>
                            <v-col class="d-flex align-end m-0 p-0" v-if="getInCentrale.length > 0 && (getRuolo === 'admin' || getRuolo === 'amministrazione')">
                                <v-select
                                    v-model="idFilialeSelezionata"
                                    item-value="id"
                                    hide-details
                                    item-text="nome"
                                    :items="getFiliali"
                                    label="filiale"
                                ></v-select>
                            </v-col>
                            <v-col v-if="getInCentrale.length > 0 && (getRuolo === 'admin' || getRuolo === 'amministrazione')"
                                   class="d-flex align-end justify-center m-0 p-0">
                                    <v-btn
                                        @click="assegnaProdottiToFilialeInAnticipo"
                                        :disabled="bloccaAssegnaInAnticipo"
                                        small
                                        color="primary"
                                    >
                                        Assegna
                                    </v-btn>
                            </v-col>
                        </v-row>

                        <v-data-table
                            :headers="headers1"
                            dense
                            v-model="selected"
                            :show-select="getRuolo === 'admin' || getRuolo === 'amministrazione'"
                            :items="getInCentrale"
                            :items-per-page="10"
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item.actions="{ item }">
                                <div v-if="getRuolo === 'admin' || getRuolo === 'amministrazione'">
                                    <v-icon
                                        color="red"
                                        small
                                        @click="elimina(item.id)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </div>
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
                    </v-col>
                    <v-col cols="4" v-if="getRuolo === 'admin' || getRuolo === 'amministrazione'">
                        <div v-for="filiale in getRichiestaApparecchi" :key="filiale.id">
                            <div v-if="filiale.richieste.length > 0">
                                <v-row>
                                    <v-col>
                                        <h3 class="mt-5">{{filiale.nome}} richiede:</h3>
                                    </v-col>
                                    <v-col class="d-flex align-end justify-end">
                                        <v-btn
                                            @click="assegnaProdotti(filiale.id, filiale.nome)"
                                            :disabled="bloccaAssegna"
                                            small
                                            color="primary"
                                        >
                                            Assegna
                                        </v-btn>
                                    </v-col>
                                </v-row>

                                <v-data-table
                                    :headers="headers2"
                                    dense
                                    :items="filiale.richieste"
                                    class="elevation-1 mt-3"
                                    hide-default-footer
                                >

                                </v-data-table>
                            </div>

                        </div>
                        <div v-if="getDaSpedire.length > 0" class="mt-10">
                            <v-row>
                                <v-col>
                                    <h3 class="mt-5">Immatricolati:</h3>
                                </v-col>
                                <v-col v-if="carica2">
                                    <div class="text-center">
                                        <v-progress-circular
                                            indeterminate
                                            color="primary"
                                        ></v-progress-circular>
                                    </div>
                                </v-col>
                                <v-col class="d-flex align-end justify-end" v-else>
                                    <v-btn
                                        @click="confermaProdotti"
                                        :disabled="bloccaAssegna"
                                        small
                                        color="success"
                                    >
                                        Conferma
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <v-data-table
                                :headers="headers3"
                                dense
                                :items="getDaSpedire"
                                class="elevation-1 mt-3"
                                hide-default-footer
                            >
                            </v-data-table>
                        </div>
                    </v-col>
                </v-row>

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
                carica2: false,
                selected:[],
                idFilialeSelezionata: '',
                destinazione: '',
                filialeId: '',
                productDaInserire:{},
                headersRiepilogo: [
                    { text: 'Nome', align: 'start', value: 'nome', class: "indigo white--text" },
                    { text: 'Quantità', value: 'totPresenti', class: "indigo white--text" },
                ],

                headers1: [
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Nome', value: 'nome', class: "indigo white--text"},
                    { text: 'Cat.', value: 'categoria', class: "indigo white--text" },
                    { text: 'Prezzo', value: 'prezzolistino', class: "indigo white--text" },
                    { text: 'Iva', value: 'iva', class: "indigo white--text" },
                    { text: 'gg. x Reso', value: 'giorniRimasti', class: "indigo white--text" },
                    { text: 'Matricola', value: 'matricola', class: "indigo white--text" },
                    { text: '', value: 'actions', sortable: false, class: "indigo white--text" },
                ],

                headers2: [
                    {text: 'Fornitore', width:100, value: 'listino.fornitore.nome', sortable: false, class: "indigo white--text"},
                    {text: 'Nome', width:100, value: 'listino.nome', sortable: false, class: "indigo white--text"},
                    {text: 'Q.ta', width:30, value: 'quantita', sortable: false, class: "indigo white--text"},
                ],

                headers3: [
                    {text: 'Fornitore', width:110, value: 'fornitore', sortable: false, class: "indigo white--text"},
                    {text: 'Nome', width:100, value: 'nome', sortable: false, class: "indigo white--text"},
                    {text: 'Matricola', width:30, value: 'matricola', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted(){
            this.fetchFornitori();
            this.fetchInCentrale();
            this.fetchRiepilogoInCentrale();
            this.fetchRichiestaApparecchi();

            window.Echo.channel("logisticaChannel").listen(".task-created", e => {
                this.fetchRichiestaApparecchi();
            });

        },

        methods:{
            ...mapActions('product', {
                fetchInCentrale:'fetchInCentrale',
                fetchRiepilogoInCentrale:'fetchRiepilogoInCentrale',
                addProdottoInCentrale:'addProdottoInCentrale',
                assegnaProdottiToFiliale:'assegnaProdottiToFiliale',
                assegnaProdottiFilialeInAnticipo:'assegnaProdottiFilialeInAnticipo',
                confermaProdottiToFiliale:'confermaProdottiToFiliale',
                eliminaProdotto:'eliminaProdotto',
            }),

            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('listino', {
                fetchListinoFromFornitore:'fetchListinoFromFornitore',
            }),

            ...mapActions('filiali', {
                fetchFilialeById:'fetchFilialeById',
                fetchRichiestaApparecchi: 'fetchRichiestaApparecchi',
            }),

            caricaProdotti(){
                if (this.productDaInserire.fornitore_id){
                    this.fetchListinoFromFornitore(this.productDaInserire.fornitore_id);
                }
            },

            inserisciProdotto(){
                this.productDaInserire.filiale_id = 0;
                this.productDaInserire.stato_id = 8;
                this.productDaInserire.user_id = parseInt(this.getIdUser);
                this.addProdottoInCentrale(this.productDaInserire).then(() => {
                    this.productDaInserire.matricola = null;
                    this.$store.commit('product/resetRiepilogoCentrale');
                    this.fetchRiepilogoInCentrale();
                });
            },

            assegnaProdotti(idFiliale, nomeFiliale){
                this.destinazione = nomeFiliale;
                this.filialeId = idFiliale;
                this.assegnaProdottiToFiliale({
                    'filiale_id' : idFiliale,
                    'prodotti' : this.selected
                }).then(() => {
                    this.fetchRiepilogoInCentrale();
                });
            },

            assegnaProdottiToFilialeInAnticipo(){
                this.assegnaProdottiFilialeInAnticipo({
                    'filiale_id' : this.idFilialeSelezionata,
                    'prodotti' : this.selected
                }).then(() => {
                    this.fetchRiepilogoInCentrale();
                });
            },

            confermaProdotti(){
                this.carica2 = true;
                let filiale = this.filialeId ? this.filialeId : this.idFilialeSelezionata;
                this.confermaProdottiToFiliale({
                    'filiale_id' : filiale,
                    'prodotti' : this.getDaSpedire
                }).then(() => {
                    this.$store.commit('filiali/confermaProdottiToFiliale');
                    this.destinazione = '';
                    this.filialeId = '';
                    this.selected = [];
                    this.carica2 = false;
                });


            },

            elimina(id){
                this.eliminaProdotto(id);
            },

        },

        computed:{
            ...mapGetters('product', {
                getInCentrale:'getInCentrale',
                getRiepilogoInCentrale:'getRiepilogoInCentrale',
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
                getRichiestaApparecchi: 'getRichiestaApparecchi',
                getDaSpedire: 'getDaSpedire',
            }),

            ...mapGetters('login', {
                getRuolo:'getRuolo',
                getIdUser:'getIdUser',
            }),

            verificaCampi(){
                return this.productDaInserire.matricola &&
                    this.productDaInserire.listino_id &&
                    this.productDaInserire.fornitore_id ? false : true;
            },

            bloccaAssegna(){
                return this.selected.length === 0 ? true : false;
            },

            bloccaAssegnaInAnticipo(){
                return (this.selected.length === 0 || !this.idFilialeSelezionata) ? true : false;
            }

        },
    }
</script>

<style scoped>

</style>
