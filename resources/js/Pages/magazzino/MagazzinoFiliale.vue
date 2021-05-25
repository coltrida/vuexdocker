<template>
    <div>
        <h2>Magazzino</h2>
        <v-container>
<!--

            <v-row>
                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.nome"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Nome Fornitore"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.indirizzo"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Indirizzo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.citta"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Citta"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.cap"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="cap"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="fornitore.telefono"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="telefono"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="fornitore.provincia"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="provincia"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.email"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="email"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="fornitore.pec"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="pec"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="fornitore.univoco"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="univoco"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn @click="aggiungi" color="success" dark>
                Inserisci
            </v-btn>
-->

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

        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "MagazzinoFiliale",

        data(){
            return {
                product:{},
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
            }
        },

        mounted(){
            this.fetchInFiliale(this.rottaIdFiliale);
            this.fetchInProva(this.rottaIdFiliale);
            this.fetchRichiesti(this.rottaIdFiliale);
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
            }),

/*            aggiungi(){
                this.addFornitore(this.fornitore);
                this.fornitore = {};
            },

            elimina(id){
                this.eliminaFornitore(id)
            }*/
        },

        computed:{
            ...mapGetters('product', {
                getInFiliale:'getInFiliale',
                getInProva:'getInProva',
                getRichiesti:'getRichiesti',
            }),

            rottaIdFiliale(){
                return this.$route.params.filialeId;
            }
        },
    }
</script>

<style scoped>

</style>
