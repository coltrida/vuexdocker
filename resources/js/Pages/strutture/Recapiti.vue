<template>
    <div>
        <h2>Recapiti</h2>
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
                    cols="3"
                    sm="3"
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
                    <v-text-field
                        v-model="recapito.telefono"
                        label="telefono"
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

            <v-row>
                <v-col
                    cols="7"
                >
                    <v-text-field
                        v-model="recapito.informazioni"
                        label="Informazioni"
                    ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-file-input
                        v-model="recapito.fileUp"
                        truncate-length="15"
                        label="Carica Foto"
                    ></v-file-input>
                </v-col>
                <v-col cols="2">
                    <v-btn @click="aggiungi" dark color="indigo" class="mb-5">
                        {{btnName}}
                    </v-btn>
                </v-col>
            </v-row>

            <div v-for="audio in getRecapiti" :key="audio.id">
                <h2 class="mt-6">{{audio.name}}</h2>
                <v-data-table
                    dense
                    :headers="headers"
                    :items="audio.recapito"
                    :items-per-page="10"
                    class="elevation-1 "
                >

                    <template v-slot:item.foto="{ item }">
                        <v-img
                            max-height="150"
                            max-width="150"
                            :src="'https://www.centrouditogroup.it/storage/recapiti/R'+item.id+'.jpg'"
                        ></v-img>
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            color="red"
                            small
                            @click="elimina(item.id, audio.id, audio.recapito.map(function(x) {return x.id; }).indexOf(item.id))"
                        >
                            mdi-delete
                        </v-icon>
                        <v-icon
                            color="blue"
                            small
                            @click="modifica(item, audio.id, audio.recapito.map(function(x) {return x.id; }).indexOf(item.id))"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>

                </v-data-table>
            </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Recapiti",

        data(){
            return {
                modificaSwitch: false,
                recapito:{
                    fileUp:{},
                },
                headers: [
                    { text: 'Cod', align: 'start', sortable: false, value: 'codiceIdentificativo', width: 50, class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', width: 220, class: "indigo white--text" },
                    { text: 'Indirizzo', width: 230, value: 'indirizzo', class: "indigo white--text" },
                    { text: 'Citta', width: 170, value: 'citta', class: "indigo white--text" },
                    { text: 'PR', width: 70, value: 'provincia', class: "indigo white--text" },
                    { text: 'Telefono', width: 150, value: 'telefono', class: "indigo white--text" },
                    { text: 'Informazioni', width: 210, value: 'informazioni', class: "indigo white--text" },
                    { text: 'Foto', width: 200, value: 'foto', class: "indigo white--text" },
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
                modificaRecapito:'modificaRecapito',
                eliminaRecapito:'eliminaRecapito',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            aggiungi(){
                //console.log(this.recapito)
                if (this.modificaSwitch){
                    this.modificaRecapito(this.recapito);
                } else {
                    this.addRecapito(this.recapito);
                }

                this.recapito = {};
                this.modificaSwitch = false;
            },

            elimina(id, idUser, indice){
                this.eliminaRecapito({'id': id, 'idUser': idUser, 'indice': indice})
            },

            modifica(rec, idUser, indice){
                //console.log(rec);
                this.modificaSwitch = true;
                this.recapito = rec;
                this.$store.commit('recapiti/eliminaRecapito', {'id': rec.id, 'idUser': idUser, 'indice': indice});
            }
        },

        computed:{
            ...mapGetters('recapiti', {
                getRecapiti:'getRecapiti',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),

            btnName(){
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            }

        },
    }
</script>

<style scoped>

</style>
