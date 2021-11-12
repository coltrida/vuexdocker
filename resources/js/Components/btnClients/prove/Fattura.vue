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
                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.nome"
                            outlined
                            readonly
                            label="nome"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.cognome"
                            outlined
                            readonly
                            label="cognome"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.codfisc"
                            outlined
                            readonly
                            label="cod. fis."
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.telefono"
                            outlined
                            readonly
                            label="telefono"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row class="mt-2">
                    <v-col cols="4">
                        <v-text-field
                            v-model="itemFattura.client.indirizzo"
                            outlined
                            readonly
                            label="indirizzo"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <v-text-field
                            v-model="itemFattura.client.citta"
                            outlined
                            readonly
                            label="citta"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                        <v-text-field
                            v-model="itemFattura.client.cap"
                            outlined
                            readonly
                            label="cap"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                        <v-text-field
                            v-model="itemFattura.client.provincia"
                            outlined
                            readonly
                            label="provincia"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <div class="mt-4">
                    <v-simple-table dense>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th style="width: 40%" class="text-left">
                                    <h2>Matricola</h2>
                                </th>
                                <th style="width: 40%" class="text-left">
                                    <h2>Prodotto</h2>
                                </th>
                                <th style="width: 20%" class="text-left">
                                    <h2>Prezzo</h2>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="prodotto in itemFattura.product"
                                :key="prodotto.id"

                            >
                                <td>{{ prodotto.matricola }}</td>
                                <td>{{ prodotto.listino.nome }}</td>
                                <td style="padding-top: 15px">
                                    <v-text-field
                                        v-model="prodotto.pivot.prezzo"
                                        outlined
                                        label="prezzo"
                                    ></v-text-field>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>

                    <v-divider></v-divider>

                    <v-row class="my-0 py-0" style="border-bottom: 1px solid grey">
                        <v-col cols="4">
                            <v-text-field
                                v-model="totFatturaReale"
                                outlined
                                readonly
                                label="Totale"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="itemFattura.acconto"
                                outlined
                                label="Acconto"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="itemFattura.rate"
                                outlined
                                label="Rate"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>

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
        data() {
            return {
                dialog: this.dialogFattura
            }
        },
        name: "Fattura",
        props: {
            itemFattura: Object,
            dialogFattura: Boolean
        },

        methods: {
            ...mapActions('prove', {
                salvaFattura: 'salvaFattura',
            }),

            salva() {
                this.itemFattura.totFatturaReale = this.totFatturaReale;
                this.salvaFattura(this.itemFattura);
                this.chiudiFattura();
            },
            chiudiFattura() {
                this.$emit('chiudiFattura');
            }
        },

        computed: {
            totFatturaReale() {
                return this.itemFattura.product.length > 1 ?
                    this.itemFattura.product.reduce(function (a, b) {
                        return parseInt(a.pivot.prezzo) + parseInt(b.pivot.prezzo)
                    }) :
                    this.itemFattura.product[0].pivot.prezzo
            }
        }
    }
</script>

<style scoped>

</style>
