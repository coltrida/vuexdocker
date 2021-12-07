<template>
    <v-row class="mt-3 flex-column">
        <conferma-cambio-utente-prova
            v-if="showCambioUtente"
            :UserOriginario="proveClient.user"
            @chiudiConfermaCambioUtente = "chiudiConfermaCambioUtente"
        />
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <lista-prodotti
                v-if="dialog"
                :prodotti="listaPro"
                @chiudiLista = "chiudiLista"
            />
        </v-dialog>


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

        <v-row v-if="switchInserisci" class="mb-5">
                <!---------- Creo nuova prova con pulsante NUOVA PROVA --------->
                <div class="text-center" v-if="carica2">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                    <v-row>
                        <v-col>
                            <v-select
                                v-model="prova.marketing_id"
                                @change="selezionaMkt($event)"
                                item-value="id"
                                item-text="name"
                                :items="getCanali"
                                required
                                hint="Se presente, viene inserito il codice Mkt del Paziente"
                                persistent-hint
                                label="Canale Mkg*"
                            ></v-select>
                        </v-col>
                        <v-col v-if="!bloccaMedici">
                            <v-select
                                v-model="prova.medico_id"
                                item-value="id"
                                item-text="fullname"
                                :items="getMedici"
                                label="Medici"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-btn @click="nuovaProvaInCorso" :disabled="bloccaProva" class="mt-2">
                                Nuova Prova
                            </v-btn>
                        </v-col>
                    </v-row>
                </div>
        </v-row>
                <!---------- End Creo nuova prova con pulsante NUOVA PROVA --------->

                <!---------- Seleziono i prodotti per la nuova prova createa --------->
        <v-row v-else>
                <v-col
                    cols="12" md="2" lg="2"
                >
                    <v-select
                        @change="selezionaTipologia()"
                        v-model="tipologiaSelezionata"
                        :items="tipologia"
                        label="Tipologia"
                    ></v-select>
                </v-col>

                <v-col
                    cols="12" md="2" lg="2"
                >
                    <v-select
                        @change="caricaProdotti()"
                        v-model="nuovaProva.fornitore_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFornitori"
                        label="fornitore"
                        :disabled="!abilitaFornitore"
                    ></v-select>
                </v-col>

                <v-col
                    cols="12" md="3" lg="3"
                >
                    <v-select
                        @change="caricaPrezzoProdotto()"
                        v-model="nuovaProva.prodotto"
                        item-text="nomeMatricola"
                        :items="getInFiliale"
                        :label="tipologiaSelezionata"
                        return-object
                    ></v-select>
                </v-col>

                    <v-col
                        cols="12" md="1" lg="1"
                    >
                        <v-text-field
                            @change="calcolaPrezzoScontato()"
                            @input="calcolaPrezzoScontato()"
                            type="number"
                            min="0"
                            v-model="sconto"
                            label="sconto"
                        ></v-text-field>
                        <v-chip small v-if="nuovaProva.scontoMax">Sconto max: {{nuovaProva.scontoMax}} %</v-chip>
                    </v-col>

                    <v-col
                        cols="12" md="1" lg="1"
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
                        cols="12" md="2" lg="2"
                    >
                        <v-text-field
                            type="number"
                            v-model="nuovaProva.prezzolistino"
                            label="prezzo"
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12" md="1" lg="1"
                    >
                        <!---------- Bottone per inserire il prodotto nella nuova prova --------->
                        <v-btn  @click="inserisciInProva" :disabled="!abilitaInProva">
                            In Prova
                        </v-btn>
                    </v-col>
        </v-row>
                <!---------- End Seleziono i prodotti per la nuova prova createa --------->

                <div class="text-center" v-if="carica2">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                    <v-row>
                        <v-col cols="12" md="6" lg="6">
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <h3>Nuova Prova</h3>
                                </div>
                                <div>
                                    <!---------- Bottone per salvare la prova --------->
                                    <div class="text-center" v-if="carica">
                                        <v-progress-circular
                                            indeterminate
                                            color="primary"
                                        ></v-progress-circular>
                                    </div>
                                    <div v-else>
                                        <v-btn color="primary" dark @click="salvaProva" v-show="getElementiNuovaProva.length > 0">
                                            Salva
                                        </v-btn>
                                    </div>

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

                        <v-col cols="12" md="6" lg="6">
                            <h3>Prove</h3>
                            <v-data-table
                                :headers="headerProve"
                                :items="getProvePassate"
                                class="elevation-1 mt-3"
                                hide-default-footer
                            >
                                <template v-slot:item.stato.nome="{ item }">
                                    <v-chip
                                        v-if="item.stato.nome == 'RESO'"
                                        color="red"
                                        label
                                        text-color="white"
                                    >
                                        {{item.stato.nome}}
                                    </v-chip>
                                    <v-chip
                                        v-if="item.stato.nome == 'FATTURA'"
                                        color="green"
                                        label
                                        text-color="white"
                                    >
                                        {{item.stato.nome}}
                                    </v-chip>
                                    <div v-if="item.stato.nome == 'PROVA'">
                                        {{item.stato.nome}}
                                    </div>
                                </template>

                                <template v-slot:item.actions="{ item }">
                                    <v-icon
                                        color="blue"
                                        small
                                        @click.stop="apriLista(item.product)"
                                    >
                                        mdi-format-list-bulleted-square
                                    </v-icon>

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
                                            <a :href="'https://www.centrouditogroup.it/storage/fatture/2021/'+item.id+'.pdf'" target="_blank">
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
                                                mdi-currency-usd
                                            </v-icon>
                                        </template>
                                        <span>Produci Fattura</span>
                                    </v-tooltip>

                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <a :href="'https://www.centrouditogroup.it'+item.copia_comm[0].link" target="_blank">
                                                <v-icon
                                                    style="font-size: 25px"
                                                    color="orange"
                                                    small
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    mdi-closed-caption
                                                </v-icon>
                                            </a>

                                        </template>
                                        <span>Copia Commissione</span>
                                    </v-tooltip>

                                </template>

                            </v-data-table>
                        </v-col>
                    </v-row>
                </div>
    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Fattura from "./Fattura";
    import ListaProdotti from "./ListaProdotti";
    import ConfermaCambioUtenteProva from "./ConfermaCambioUtenteProva";
    export default {
        name: "Prove",
        components: {ConfermaCambioUtenteProva, ListaProdotti, Fattura},
        props: ['proveClient'],

        data(){
            return {
                showCambioUtente:false,
                bloccaProva:true,
                bloccaMedici: true,
                listaPro:[],
                tipologia:['Prodotti','Servizi'],
                tipologiaSelezionata:'',
                abilitaFornitore: false,
                carica: false,
                carica2: false,
                dialog: false,
                idFattura: '',
                sconto: 0,
                dialogFattura: false,
                UserOriginario: {},
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
                    { text: 'Tot', width: 90, sortable: false, value: 'tot', class: "indigo white--text" },
                    { text: 'Cod. Mkt', width: 120, sortable: false, value: 'marketing.name', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
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
            this.$store.commit('prove/svuotaElementiNuovaProva');
            this.carica2 = true;
            this.deleteProveSenzaProdotti(this.proveClient.id).then(() => {
                this.fetchProvePassate(this.proveClient.id).then(() => {
                    this.fetchCanali().then(() => {
                        this.fetchMedici(parseInt(this.getIdUser)).then(() => {
                            this.prova.marketing_id = this.proveClient.marketing_id ? this.proveClient.marketing_id : 0;
                            this.prova.medico_id = this.proveClient.medico_id;
                            this.bloccaProva = this.proveClient.marketing_id ? false : true;
                            this.carica2 = false;
                            this.bloccaMedici = this.getCanali.find(u => u.name === 'MEDICO').id === this.proveClient.marketing_id ? false : true;
                        });
                    });
                });
            });
            this.fetchFornitori();
        },

        methods: {
            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
            }),

            ...mapActions('product', {
                fetchInFilialeFornitore:'fetchInFilialeFornitore',
                switchInProva:'switchInProva',
                switchRimuoviDallaProva:'switchRimuoviDallaProva',
                fetchSoglie: 'fetchSoglie',
                fetchServizi: 'fetchServizi',
            }),

            ...mapActions('marketing', {
                fetchCanali:'fetchCanali',
            }),

            ...mapActions('prove', {
                AddEleInNuovaProva:'AddEleInNuovaProva',
                creaNuovaProva:'creaNuovaProva',
                eliminaEle:'eliminaEle',
                salvaProvaInCorso:'salvaProvaInCorso',
                fetchProvePassate:'fetchProvePassate',
                resoProva:'resoProva',
                deleteProveSenzaProdotti:'deleteProveSenzaProdotti',
            }),

            ...mapActions('medici', {
                fetchMedici:'fetchMedici',
            }),

            nuovaProvaInCorso()
            {
                console.log(this.getIdUser + ' ' + this.proveClient.user_id)
                if (this.getIdUser != this.proveClient.user_id){
                    this.showCambioUtente = true;
                } else {
                    this.prova.user_id = this.getIdUser;
                    this.creaProva();
                }
            },

            creaProva()
            {
                this.switchInserisci = false;
                this.prova.client_id = this.proveClient.id;
                this.prova.filiale_id = this.proveClient.filiale_id;
                this.creaNuovaProva(this.prova).then(() => {
                    this.prova.id = this.getNuovaProvaCreata.id;
                });
            },

            cancella()
            {
                this.$emit('chiudiProve')
            },

            caricaProdotti()
            {
                if (this.nuovaProva.fornitore_id){
                    this.fetchInFilialeFornitore({
                        'idFiliale': this.proveClient.filiale_id,
                        'idFornitore': this.nuovaProva.fornitore_id
                    });
                }
            },

            caricaPrezzoProdotto()
            {
               // console.log(this.nuovaProva.prodotto);
                this.sconto = 0;
                if (this.tipologiaSelezionata === 'Prodotti'){
                    this.nuovaProva.prezzolistino = this.nuovaProva.prodotto.prezzolistino;
                    this.nuovaProva.scontoMax = this.nuovaProva.prodotto.scontoMax.toString();
                } else {
                    this.nuovaProva.prezzolistino = this.nuovaProva.prodotto.prezzoOriginal;
                }
            },

            inserisciInProva()
            {
                this.nuovaProva.prova_id = this.prova.id;
                this.nuovaProva.tipologia = this.tipologiaSelezionata;
                this.AddEleInNuovaProva(this.nuovaProva);
                if (this.tipologiaSelezionata === 'Prodotti'){
                    this.switchInProva({
                        'idProduct':this.nuovaProva.prodotto.id,
                        'user_id':this.proveClient.user_id,
                        'client_id':this.proveClient.id,
                    });
                    this.eliminaElementoDallaListaPresenti();
                }

            },

            eliminaElementoDallaListaPresenti()
            {
                let posizione = this.getInFiliale.map(function(ele) { return ele.id; }).indexOf(this.nuovaProva.prodotto.id);
                this.getInFiliale.splice(posizione, 1);
                this.nuovaProva.orecchio = '';
                this.nuovaProva.prezzolistino = '';
            },

            eliminaElementoDallaProva(id, idProduct)
            {
                this.eliminaEle(id);
                this.switchRimuoviDallaProva(idProduct);
                this.nuovaProva = {};
            },

            salvaProva()
            {
                //console.log(this.getElementiNuovaProva[0]);
                //console.log(this.getElementiNuovaProva.length);
                this.carica = true;
                this.salvaProvaInCorso({
                    'id': this.getNuovaProvaCreata.id,
                    'tot': this.getElementiNuovaProva.length > 1 ?
                        this.getElementiNuovaProva.reduce(function(a, b){return parseInt(a.originalPrezzo) + parseInt(b.originalPrezzo)}) :
                        this.getElementiNuovaProva[0].originalPrezzo
                }).then(() => {
                    this.carica = false;
                    this.fetchSoglie(this.proveClient.filiale_id);
                    this.switchInserisci = true;
                });

            },

            reso(id)
            {
                this.resoProva(id).then(() =>{
                    this.fetchSoglie(this.proveClient.filiale_id);
                    this.nuovaProva = {};
                });
            },

            apriFattura(item)
            {
              this.dialogFattura = true;
              this.itemFattura = item;
            },

            chiudiFattura()
            {
                this.dialogFattura = false;
            },

            visualizzaFattura(idProva)
            {
                this.idFattura = idProva;
           //     console.log(this.fatturaPdf)
            },

            apriLista(prodotti)
            {
                this.dialog = true;
                this.listaPro = prodotti;
            },

            chiudiLista()
            {
                this.dialog = false;
                this.listaPro = []
            },

            calcolaPrezzoScontato()
            {
                if (this.tipologiaSelezionata === 'Prodotti'){
                    this.nuovaProva.prezzolistino = (this.sconto === 0 || this.sconto == null || this.sconto === '') ? this.nuovaProva.prodotto.prezzolistino :
                        ( parseInt(this.nuovaProva.prodotto.prezzolistino) * (100 - parseInt(this.sconto) ) ) / 100
                } else {
                    this.nuovaProva.prezzolistino = (this.sconto === 0 || this.sconto == null || this.sconto === '') ? this.nuovaProva.prodotto.prezzoOriginal :
                        ( parseInt(this.nuovaProva.prodotto.prezzoOriginal) * (100 - parseInt(this.sconto) ) ) / 100
                }

            },

            selezionaTipologia()
            {
                this.nuovaProva.prodotto = null;
                this.nuovaProva.prezzolistino = null;
                this.sconto = 0;
                if (this.tipologiaSelezionata === 'Prodotti'){
                    this.abilitaFornitore = true;
                } else {
                    this.abilitaFornitore = false;
                    this.fetchServizi();
                }
            },

            selezionaMkt(event)
            {
                this.bloccaProva = false;
                this.bloccaMedici = event == 5 ? false : true;
            },

            chiudiConfermaCambioUtente(scelta)
            {
                if (scelta === true)
                {
                    this.prova.user_id = this.getIdUser;

                } else
                {
                    this.prova.user_id = this.proveClient.user_id;
                }

                this.showCambioUtente = false;
                this.creaProva();
            }

        },

        computed: {
            ...mapGetters('fornitori', {
                getFornitori: 'getFornitori',
            }),

            ...mapGetters('product', {
                getInFiliale: 'getInFiliale',
            }),

            ...mapGetters('marketing', {
                getCanali:'getCanali',
            }),

            ...mapGetters('prove', {
                getElementiNuovaProva: 'getElementiNuovaProva',
                getNuovaProvaCreata: 'getNuovaProvaCreata',
                getProvePassate: 'getProvePassate',
            }),

            ...mapGetters('medici', {
                getMedici:'getMedici',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

            fatturaPdf(){
                return 'http://vuexdocker.local/storage/fatture/2021/'+this.idFattura+'.pdf';
            },

            abilitaInProva(){
                return this.nuovaProva.prezzolistino ? true : false;
            },

        },
    }
</script>

<style scoped>

</style>
