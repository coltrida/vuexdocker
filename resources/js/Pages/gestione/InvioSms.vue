<template>
    <div>
        <h2>Invio Messaggio</h2>
        <h3>Destinatari</h3>
        <v-row class="mt-6">
            <v-col
                cols="2"
                sm="2"
            >
                <v-select
                    v-model="ricerca.tipo"
                    item-value="id"
                    item-text="nome"
                    :items="getTipologie"
                    label="tipo"
                ></v-select>
            </v-col>

            <v-col
                cols="2"
                sm="2"
            >
                <v-select
                    @change="caricaCitta()"
                    v-model="ricerca.provincia"
                    :items="getProvince"
                    label="Prov."
                ></v-select>
            </v-col>

            <v-col
                cols="2"
                sm="2"
            >
                <v-select
                    v-model="ricerca.citta"
                    :items="getCittaByProvincia"
                    label="Città"
                ></v-select>
            </v-col>

            <v-col
                cols="2"
                sm="2"
            >
                <v-select
                    v-model="ricerca.filiale"
                    item-value="id"
                    item-text="nome"
                    :items="getFilialiPerInserimento"
                    label="Filiale"
                ></v-select>
            </v-col>

            <v-col>
                <v-btn @click="seleziona" color="success" dark>
                    Seleziona
                </v-btn>
                <v-btn @click="resetRicerca" color="warning" dark>
                    Reset
                </v-btn>
            </v-col>
        </v-row>
            <messaggio
                :textMessaggio="textMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>
            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col>
                            <p>Gentile ___nome cliente___ ____cognome cliente_____</p>
                            <v-textarea
                                outlined
                                label="Testo del messaggio"
                                v-model="testo"
                            ></v-textarea>
                            <p>Un cordiale saluto</p>
                        </v-col>
                        <v-col class="text-center" v-if="carica">
                            <v-progress-circular
                                indeterminate
                                color="primary"
                            ></v-progress-circular>
                        </v-col>
                        <v-col v-else>
                            <v-btn @click="invia" :disabled="!(testo.length > 3)" v-if="getRicercaNominativi.length > 0">
                                Invia
                            </v-btn>
                            Nr. Pazienti Selezionati: <b>{{getRicercaNominativi.length}}</b>  con e-mail valorizzata
                        </v-col>

                    </v-row>
                </v-col>
            </v-row>

    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Messaggio from "../../Components/Messaggio";

    export default {
        name: "TempiRecall",

        components: { Messaggio },

        data(){
            return {
                carica: false,
                ricerca:{},
                testo:'',
                textMessaggio: null,
            }
        },

        mounted() {
            this.resetRicerca();
            this.fetchTipologie();
            this.fetchProvince();
            this.fetchFilialiPerInserimento(0);
        },

        methods:{
            ...mapActions('clients', {
                fetchClients: 'fetchClients',
                fetchProvince: 'fetchProvince',
                fetchCittaByProvincia: 'fetchCittaByProvincia',
                ricercaNominativiConMail: 'ricercaNominativiConMail',
            }),

            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
            }),

            ...mapActions('filiali', {
                fetchFilialiPerInserimento:'fetchFilialiPerInserimento',
            }),

            ...mapActions('clients', {
                smsInvio:'smsInvio',
            }),

            caricaCitta(){
                this.fetchCittaByProvincia(this.ricerca.provincia);
            },

            invia(){
                this.carica = true;
                let payload = {
                  'client': this.getRicercaNominativi,
                  'testo': this.testo
                };
                //console.log(this.getRicercaNominativi)
                this.smsInvio(payload).then(() => {
                    this.carica = false;
                    this.textMessaggio = 'sms inviato';
                    this.testo = '';
                });

            },

            cancellaMessaggio(){
                this.textMessaggio = '';
            },

            resetRicerca(){
                this.$store.commit('clients/resetRicercaNominativi');
                this.ricerca = {};
            },

            seleziona(){
                this.carica = true;
                this.ricercaNominativiConMail(this.ricerca).then(() => {
                    this.carica = false;
                })
            },
        },

        computed: {
            ...mapGetters('clients', {
                getRicercaNominativi: 'getRicercaNominativi',
                getProvince: 'getProvince',
                getCittaByProvincia: 'getCittaByProvincia',
            }),

            ...mapGetters('tipologie', {
                getTipologie:'getTipologie',
            }),

            ...mapGetters('filiali', {
                getFilialiPerInserimento:'getFilialiPerInserimento',
            }),

        },

    }
</script>

<style scoped>

</style>

