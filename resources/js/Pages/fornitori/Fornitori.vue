<template>
    <div>
        <h2>Fornitori</h2>
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
                {{btnName}}
            </v-btn>

                <v-data-table
                    :headers="headers"
                    :items="getFornitori"
                    :items-per-page="5"
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
                        <v-icon
                            color="blue"
                            small
                            @click="modifica(item)"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>

                </v-data-table>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Fornitore",

        data(){
            return {
                modificaSwitch: false,
                fornitore:{},
                headers: [
                    {
                        text: 'Nome',
                        align: 'start',
                        sortable: false,
                        value: 'nome',
                        class: "indigo white--text"
                    },
                    { text: 'Indirizzo', value: 'indirizzo', class: "indigo white--text" },
                    { text: 'Citta', value: 'citta', class: "indigo white--text" },
                    { text: 'PR', value: 'provincia', class: "indigo white--text" },
                    { text: 'cap', value: 'cap', class: "indigo white--text" },
                    { text: 'Tel', value: 'telefono', class: "indigo white--text" },
                    { text: 'e-mail', value: 'email', class: "indigo white--text" },
                    { text: 'PEC', value: 'pec', class: "indigo white--text" },
                    { text: 'Cod. Un.', value: 'univoco', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchFornitori();
        },

        methods:{
            ...mapActions('fornitori', {
                fetchFornitori:'fetchFornitori',
                addFornitore:'addFornitore',
                modificaFornitore:'modificaFornitore',
                eliminaFornitore:'eliminaFornitore',
            }),

            aggiungi(){
                if (this.modificaSwitch){
                    this.modificaFornitore(this.fornitore);
                } else {
                    this.addFornitore(this.fornitore);
                }
                this.modificaSwitch = false;
                this.fornitore = {};
            },

            elimina(id){
                this.eliminaFornitore(id)
            },

            modifica(eleSelezionato){
                this.modificaSwitch = true;
                this.fornitore = eleSelezionato;
                this.$store.commit('fornitori/eliminaFornitore', this.fornitore.id);
            }
        },

        computed:{
            ...mapGetters('fornitori', {
                getFornitori:'getFornitori',
            }),

            btnName(){
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            }
        },
    }
</script>

<style scoped>

</style>
