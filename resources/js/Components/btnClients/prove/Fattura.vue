<template>
    <v-dialog
        v-model="dialog"
        width="900"
    >
        <v-form ref="form"
                v-model="valid"
                lazy-validation>
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
                            dense
                            readonly
                            label="nome"
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.cognome"
                            outlined
                            dense
                            readonly
                            label="cognome"
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.codfisc"
                            outlined
                            dense
                            readonly
                            label="cod. fis."
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                            v-model="itemFattura.client.telefono"
                            outlined
                            dense
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
                            dense
                            readonly
                            label="indirizzo"
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="4">
                        <v-text-field
                            v-model="itemFattura.client.citta"
                            outlined
                            dense
                            readonly
                            label="citta"
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                        <v-text-field
                            v-model="itemFattura.client.cap"
                            outlined
                            dense
                            readonly
                            label="cap"
                            :rules="campoRules"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                        <v-text-field
                            v-model="itemFattura.client.provincia"
                            outlined
                            dense
                            readonly
                            label="provincia"
                            :rules="campoRules"
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
                                <td style="padding-top: 18px">
                                    <v-text-field
                                        dense
                                        type="number"
                                        v-model="prodotto.pivot.prezzo"
                                        outlined
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
                                dense
                                readonly
                                label="Totale"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="itemFattura.acconto"
                                outlined
                                type="number"
                                dense
                                label="Acconto"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="itemFattura.rate"
                                outlined
                                type="number"
                                dense
                                label="Rate"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    @click="salva"
                    :disabled="verificaCampi"
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
        </v-form>
    </v-dialog>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                dialog: this.dialogFattura,
                valid: true,
                campoRules: [ v => !!v || 'campo obbligatorio'],
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
                this.$refs.form.validate();
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
                let tot = 0;
                this.itemFattura.product.forEach(ele => {
                    tot += parseInt(ele.pivot.prezzo);
                });
                return tot;
            },

            verificaCampi(){
                return this.itemFattura.client.codfisc !== null ? false : true;
            }
        }
    }
</script>

<style scoped>

</style>
