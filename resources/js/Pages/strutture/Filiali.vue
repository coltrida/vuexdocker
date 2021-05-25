<template>
    <div>
        <h2>Filiali</h2>
        <v-container>
            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="filiale.nome"
                        label="Nome Filiale"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-text-field
                        v-model="filiale.indirizzo"
                        label="Indirizzo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="filiale.citta"
                        label="Citta'"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="filiale.provincia"
                        label="PR"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="filiale.cap"
                        label="cap"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="filiale.telefono"
                        label="telefono"
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-btn @click="aggiungi" dark color="indigo">
                Inserisci
            </v-btn>


            <v-data-table
                :headers="headers"
                :items="getFiliali"
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
        name: "Filiali",

        data(){
            return {
                filiale:{},
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
                    { text: 'Provincia', value: 'provincia', class: "indigo white--text" },
                    { text: 'Cap', value: 'cap', class: "indigo white--text" },
                    { text: 'telefono', value: 'telefono', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchFiliali();
        },

        methods:{
            ...mapActions('filiali', {
                fetchFiliali:'fetchFiliali',
                addFiliale:'addFiliale',
                eliminaFiliale:'eliminaFiliale',
            }),

            aggiungi(){
                this.addFiliale(this.filiale);
                this.filiale = {};
            },

            elimina(id){
                this.eliminaFiliale(id)
            }
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

        },
    }
</script>

<style scoped>

</style>
