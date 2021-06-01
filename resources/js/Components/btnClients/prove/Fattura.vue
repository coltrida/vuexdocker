<template>
    <v-dialog
        v-model="dialog"
        width="900"
    >
        <v-card>
            <v-card-title class="headline grey lighten-2">
                Fattura
            </v-card-title>

            <v-card-text class="mt-2">
                <v-row class="mt-2">
                    <v-col>
                        <h3>{{ itemFattura.client.nome }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.cognome }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.codfisc }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.telefono }}</h3>
                    </v-col>
                </v-row>
                <v-row class="mt-2">
                    <v-col>
                        <h3>{{ itemFattura.client.indirizzo }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.citta }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.cap }}</h3>
                    </v-col>
                    <v-col>
                        <h3>{{ itemFattura.client.provincia }}</h3>
                    </v-col>
                </v-row>
                <div class="mt-4">
                    <v-row class="my-0 py-0"
                           v-for="prodotto in itemFattura.product"
                           :key="prodotto.id"
                           style="border-bottom: 1px solid grey"
                    >
                        <v-col cols="4" class="my-0 py-0">
                            <h3>{{ prodotto.matricola }}</h3>
                        </v-col>
                        <v-col cols="4" class="my-0 py-0">
                            <h3>{{ prodotto.listino.nome }}</h3>
                        </v-col>
                        <v-col cols="4" class="my-0 py-0">
                            <v-text-field
                                v-model="prodotto.pivot.prezzo"
                                label="prezzo"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="my-0 py-0" style="border-bottom: 1px solid grey">
                        <v-col>
                            <h3>Totale: {{ totFatturaReale }}</h3>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="itemFattura.acconto"
                                label="acconto"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="itemFattura.rate"
                                label="rate"
                            ></v-text-field>
                        </v-col>

                    </v-row>
                </div>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="salva"
                >
                    Salva
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="chiudiFattura"
                >
                    Chiudi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        data(){
            return {
                dialog: this.dialogFattura
            }
        },
        name: "Fattura",
        props:{
            itemFattura: Object,
            dialogFattura: Boolean
        },

        methods:{
            ...mapActions('prove', {
                salvaFattura:'salvaFattura',
            }),

            salva(){
                this.itemFattura.totFatturaReale = this.totFatturaReale;
                this.salvaFattura(this.itemFattura);
                this.chiudiFattura();
            },
            chiudiFattura(){
                this.$emit('chiudiFattura');
            }
        },

        computed:{
            totFatturaReale(){
                return this.itemFattura.product.reduce(function(a, b){return parseInt(a.pivot.prezzo) + parseInt(b.pivot.prezzo)})
            }
        }
    }
</script>

<style scoped>

</style>
