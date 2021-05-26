<template>
    <div>
        <h2>Recapiti</h2>
        <v-container>
            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="recapito.nome"
                        label="Nome Recapito"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-text-field
                        v-model="recapito.indirizzo"
                        label="Indirizzo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="recapito.citta"
                        label="Citta'"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="recapito.provincia"
                        label="PR"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="recapito.user_id"
                        item-value="id"
                        item-text="name"
                        :items="getAudio"
                        label="Audio"
                    ></v-select>
                </v-col>

            </v-row>

            <v-btn @click="aggiungi" dark color="indigo">
                Inserisci
            </v-btn>

            <div v-for="audio in getRecapiti" :key="audio.id">
                <h2>{{audio.name}}</h2>
                <v-data-table
                    :headers="headers"
                    :items="audio.recapito"
                    :items-per-page="10"
                    class="elevation-1 mt-3"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            color="red"
                            small
                            @click="elimina(item.id, audio.id, audio.recapito.map(function(x) {return x.id; }).indexOf(item.id))"
                        >
                            mdi-delete
                        </v-icon>
                    </template>

                </v-data-table>
            </div>


        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Recapiti",

        data(){
            return {
                recapito:{},
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
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },

                ],
            }
        },

        mounted(){
            this.fetchRecapitiPerAudio();
            this.fetchAudio();
        },

        methods:{
            ...mapActions('recapiti', {
                fetchRecapitiPerAudio:'fetchRecapitiPerAudio',
                addRecapito:'addRecapito',
                eliminaRecapito:'eliminaRecapito',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            aggiungi(){
                this.addRecapito(this.recapito);
                this.recapito = {};
            },

            elimina(id, idUser, indice){
                this.eliminaRecapito({'id': id, 'idUser': idUser, 'indice': indice})
            }
        },

        computed:{
            ...mapGetters('recapiti', {
                getRecapiti:'getRecapiti',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),

        },
    }
</script>

<style scoped>

</style>
