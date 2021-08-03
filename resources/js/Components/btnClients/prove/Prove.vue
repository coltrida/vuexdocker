<template>
    <v-row class="mt-3 flex-column">
        <!---------- Header --------->
        <v-row>
            <v-col cols="6">
                <h2>{{proveClient.nome}} {{proveClient.cognome}}</h2>
            </v-col>
            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>
            <!---------- End Header --------->




                <!---------- Fattura --------->
                <a v-if="idFattura" target="_blank"
                    :href="fatturaPdf"
                ></a>

                <fattura
                         :itemFattura="itemFattura"
                         :dialogFattura="dialogFattura" v-if="dialogFattura"
                         @chiudiFattura="chiudiFattura"
                />
                <!---------- End Fattura --------->

        <v-row v-if="switchInserisci">
                <!---------- Creo nuova prova con pulsante NUOVA PROVA --------->
                <v-col >
                    <v-btn color="primary" dark @click="nuovaProvaInCorso" class="mt-2">
                        Nuova Prova
                    </v-btn>
                </v-col>
        </v-row>
                <!---------- End Creo nuova prova con pulsante NUOVA PROVA --------->

                <!---------- Seleziono i prodotti per la nuova prova createa --------->
        <v-row v-else>
                    <v-col
                        cols="3"
                    >
                        <v-select
                            @change="caricaProdotti()"
                            v-model="nuovaProva.fornitore_id"
                            item-value="id"
                            item-text="nome"
                            :items="getFornitori"
                            label="fornitore"
                        ></v-select>
                    </v-col>

                    <v-col
                        cols="3"
                    >
                        <v-select
                            @change="caricaPrezzoProdotto()"
                            v-model="nuovaProva.prodotto"
                            item-text="nomeMatricola"
                            :items="getInFiliale"
                            label="prodotti"
                            return-object
                        ></v-select>
                    </v-col>

                    <v-col
                        cols="2"
                    >
                        <v-select
                            v-model="nuovaProva.orecchio"
                            item-text="nome"
                            item-value="valore"
                            :items="orecchie"
                            label="orecchio"
                        ></v-select>
                    </v-col>

                    <v-col
                        cols="2"
                    >
                        <v-text-field
                            v-model="nuovaProva.prezzolistino"
                            label="prezzo"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="2"
                    >
                        <!---------- Bottone per inserire il prodotto nella nuova prova --------->
                        <v-btn color="primary" dark @click="inserisciInProva">
                            In Prova
                        </v-btn>
                    </v-col>
        </v-row>
                <!---------- End Seleziono i prodotti per la nuova prova createa --------->

                <v-row>
                    <v-col cols="6">
                        <div style="display: flex; justify-content: space-between;">
                            <div>
                                <h3>Nuova Prova</h3>
                            </div>
                            <div>
                                <!---------- Bottone per salvare la prova --------->
                                <v-btn color="primary" dark @click="salvaProva">
                                    Salva
                                </v-btn>
                            </div>
                        </div>

                        <v-data-table
                            :headers="headerNuovaProva"
                            :items="getElementiNuovaProva"
                            class="elevation-1 mt-3"
                            hide-default-footer
                        >

                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    color="red"
                                    small
                                    @click="eliminaElementoDallaProva(item.id, item.idProduct)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>

                        </v-data-table>
                    </v-col>


                    <v-col cols="6">
                        <h3>Prove</h3>
                        <v-data-table
                            :headers="headerProve"
                            :items="getProvePassate"
                            class="elevation-1 mt-5"
                            hide-default-footer
                        >

                            <template v-slot:item.actions="{ item }">
                                <v-dialog
                                    v-model="dialog"
                                    width="500"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                                color="blue"
                                                small
                                                v-bind="attrs"
                                                v-on="on"

                                        >
                                            mdi-format-list-bulleted-square
                                        </v-icon>
                                    </template>

                                    <v-card>
                                        <v-card-title class="headline grey lighten-2">
                                            Prodotti
                                        </v-card-title>

                                        <v-card-text class="mt-2">
                                            <v-row class="mt-2" v-for="prodotto in item.product" :key="prodotto.id">
                                                <v-col cols="4">
                                                    <h3>{{ prodotto.matricola }}</h3>
                                                </v-col>
                                                <v-col cols="4">
                                                    <h3>{{ prodotto.listino.nome }}</h3>
                                                </v-col>
                                                <v-col cols="4">
                                                    <h3>{{ prodotto.pivot.prezzo }}</h3>
                                                </v-col>
                                            </v-row>

                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="primary"
                                                text
                                                @click="dialog = false"
                                            >
                                                Chiudi
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-if="item.stato.nome === 'PROVA'"
                                                color="red"
                                                small
                                                v-bind="attrs"
                                                v-on="on"
                                                @click="reso(item.id)"
                                        >
                                            mdi-delete
                                        </v-icon>
                                    </template>
                                    <span>Reso</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <a :href="'http://vuexdocker.test/storage/fatture/2021/'+item.id+'.pdf'" target="_blank">
                                           <v-icon v-if="item.stato.nome === 'FATTURA'"
                                                    color="black"
                                                    small
                                                    v-bind="attrs"
                                                    v-on="on"
                                            >
                                                mdi-check
                                            </v-icon>
                                        </a>

                                    </template>
                                    <span>Fattura</span>
                                </v-tooltip>

                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon v-if="item.stato.nome === 'PROVA'"
                                                color="green"
                                                small
                                                v-bind="attrs"
                                                v-on="on"
                                                @click="apriFattura(item)"
                                        >
                                            mdi-check
                                        </v-icon>
                                    </template>
                                    <span>Produci Fattura</span>
                                </v-tooltip>

                            </template>

                        </v-data-table>
                    </v-col>
                </v-row>



    </v-row>


</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Fattura from "./Fattura";
    export default {
        name: "Prove",
        components: {Fattura},
        props: ['proveClient'],

        data(){
            return {
                dialog: false,
                idFattura: '',
                dialogFattura: false,
                prova:{},
                itemFattura:{},
                switchInserisci: true,
                orecchie:[
                    {nome: 'destro', valore:'dx'},
                    {nome: 'sinistro', valore:'sx'}
                ],

                nuovaProva: {
                    prezzolistino: 0
                },

                headerProve: [
                    { text: 'Data', width: 120, align: 'start', sortable: false, value: 'inizio_prova', class: "indigo white--text" },
                    { text: 'Stato', width: 120, sortable: false, value: 'stato.nome', class: "indigo white--text" },
                    { text: 'Audio', width: 120, sortable: false, value: 'user.name', class: "indigo white--text" },
                    { text: 'Tot', width: 120, sortable: false, value: 'tot', class: "indigo white--text" },
                    { text: 'Actions', width: 120, value: 'actions', sortable: false, class: "indigo white--text"},
                ],

                headerNuovaProva: [
                    { text: 'Matricola', align: 'start', sortable: false, value: 'matricola', class: "indigo white--text" },
                    { text: 'Nome', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Prezzo', sortable: false, value: 'prezzo', class: "indigo white--text" },
                    { text: 'Orecchio', sortable: false, value: 'orecchio', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchFornitori();
            this.fetchProvePassate(this.proveClient.prove);
        },

        methods: {
            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('product', {
                fetchInFilialeFornitore:'fetchInFilialeFornitore',
                switchInProva:'switchInProva',
                switchRimuoviDallaProva:'switchRimuoviDallaProva',
            }),

            ...mapActions('prove', {
                AddEleInNuovaProva:'AddEleInNuovaProva',
                creaNuovaProva:'creaNuovaProva',
                eliminaEle:'eliminaEle',
                salvaProvaInCorso:'salvaProvaInCorso',
                fetchProvePassate:'fetchProvePassate',
                resoProva:'resoProva',
            }),

            nuovaProvaInCorso(){
                this.switchInserisci = false;
                this.prova.user_id = this.proveClient.user_id;
                this.prova.client_id = this.proveClient.id;
                this.prova.marketing_id = this.proveClient.marketing_id;
                this.prova.filiale_id = this.proveClient.filiale_id;
                this.creaNuovaProva(this.prova).then(() => {
                    this.prova.id = this.getNuovaProvaCreata.id;
                });
            },

            cancella(){
                this.$emit('chiudiProve')
            },

            caricaProdotti(){
                if (this.nuovaProva.fornitore_id){
                    this.fetchInFilialeFornitore({
                        'idFiliale': this.proveClient.filiale_id,
                        'idFornitore': this.nuovaProva.fornitore_id
                    });
                }
            },

            caricaPrezzoProdotto(){
                this.nuovaProva.prezzolistino = this.nuovaProva.prodotto.prezzolistino;
            },

            inserisciInProva(){
                this.nuovaProva.prova_id = this.prova.id;
                this.AddEleInNuovaProva(this.nuovaProva);
                this.switchInProva({
                    'idProduct':this.nuovaProva.prodotto.id,
                    'user_id':this.proveClient.user_id,
                    'client_id':this.proveClient.id,
                });
                this.eliminaElementoDallaListaPresenti();
            },

            eliminaElementoDallaListaPresenti(){
                let posizione = this.getInFiliale.map(function(ele) { return ele.id; }).indexOf(this.nuovaProva.prodotto.id);
                this.getInFiliale.splice(posizione, 1);
                this.nuovaProva.orecchio = '';
                this.nuovaProva.prezzolistino = '';
            },

            eliminaElementoDallaProva(id, idProduct){
                this.eliminaEle(id);
                this.switchRimuoviDallaProva(idProduct);
            },

            salvaProva(){
                //console.log(this.getElementiNuovaProva[0]);
                //console.log(this.getElementiNuovaProva.length);
                this.salvaProvaInCorso({
                    'id': this.getNuovaProvaCreata.id,
                    'tot': this.getElementiNuovaProva.length > 1 ?
                        this.getElementiNuovaProva.reduce(function(a, b){return parseInt(a.originalPrezzo) + parseInt(b.originalPrezzo)}) :
                        this.getElementiNuovaProva[0].originalPrezzo
                });

            },

            reso(id){
                this.resoProva(id);
            },

            apriFattura(item){
              this.dialogFattura = true;
              this.itemFattura = item;
            },

            chiudiFattura(){
                this.dialogFattura = false;
            },

            visualizzaFattura(idProva){
                this.idFattura = idProva;
                console.log(this.fatturaPdf)
            }
        },

        computed: {
            ...mapGetters('fornitori', {
                getFornitori: 'getFornitori',
            }),

            ...mapGetters('product', {
                getInFiliale: 'getInFiliale',
            }),

            ...mapGetters('prove', {
                getElementiNuovaProva: 'getElementiNuovaProva',
                getNuovaProvaCreata: 'getNuovaProvaCreata',
                getProvePassate: 'getProvePassate',
            }),

            fatturaPdf(){
                return 'http://vuexdocker.local/storage/fatture/2021/'+this.idFattura+'.pdf';
            }
        },
    }
</script>

<style scoped>

</style>
