<template>
    <div>
        <h2>Inserisci rata Pagamento</h2>
        <v-form ref="form"
                v-model="valid"
                lazy-validation>
        <v-container>

            <v-card elevation="2">
                <v-card-title>
                    {{nomeCliente}}
                </v-card-title>
                <v-card-subtitle>
                    Totale Fattura: {{getFattura.tot_fattura}}
                </v-card-subtitle>
                <v-card-subtitle>
                    Al saldo Fattura: {{getFattura.al_saldo}}
                </v-card-subtitle>
            </v-card>

            <v-row class="mt-4">
                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newRata.importo"
                        :rules="importoRules"
                        label="Importo*"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newRata.note"
                        label="Note"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="6"
                    sm="6"
                >
                    <v-btn @click="aggiungi" color="success" dark>
                        Inserisci
                    </v-btn>

                    <v-btn @click="annulla" color="pink" dark>
                        Annulla
                    </v-btn>
                </v-col>
            </v-row>

        </v-container>
        </v-form>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Inserisci",

        data(){
            return {
                nomeCliente: '',
                valid: true,
                newRata:{},
                importoRules: [ v => !!v || 'importo obbligatorio'],
            }
        },

        mounted(){
            this.fetchFattura(this.rottaIdFattura).then(() => {
                this.nomeCliente = this.getFattura.prova.client.fullname
            });
        },

        methods:{
            ...mapActions('rate', {
                addRata:'addRata',
                fetchFattura:'fetchFattura',
            }),

            annulla(){
                this.$router.go(-1)
            },

            aggiungi(){
                this.$refs.form.validate();
                this.newRata.fatturaId = this.rottaIdFattura;
                this.newRata.user_id = this.getIdUser;
                this.addRata(this.newRata).then(() => {
                    this.newRata = {};
                    this.$router.push({ name: 'rateClienti' });
                });
            },

        },

        computed:{
            ...mapGetters('rate', {
                getFattura:'getFattura',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

            rottaIdFattura(){
                return this.$route.params.fatturaId ? this.$route.params.fatturaId : null;
            },

        },
    }
</script>

<style scoped>

</style>
