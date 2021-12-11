<template>
    <div>
        <h2>Filiali</h2>
            <v-row>
                <v-col
                    cols="12" md="2" lg="2"
                >
                    <v-text-field
                        v-model="filiale.nome"
                        label="Nome Filiale"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12" md="4" lg="4"
                >
                    <v-text-field
                        v-model="filiale.indirizzo"
                        label="Indirizzo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12" md="2" lg="2"
                >
                    <v-text-field
                        v-model="filiale.citta"
                        label="Citta'"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="6" md="1" lg="1"
                >
                    <v-text-field
                        v-model="filiale.provincia"
                        label="PR"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="6" md="1" lg="1"
                >
                    <v-text-field
                        v-model="filiale.cap"
                        label="cap"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12" md="2" lg="2"
                >
                    <v-text-field
                        v-model="filiale.telefono"
                        label="telefono"
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-row>
                <v-col cols="12" md="7" lg="7">
                    <v-textarea
                        rows="1"
                        label="Informazioni"
                        v-model.lazy="filiale.informazioni"
                    ></v-textarea>
                </v-col>
                <v-col cols="12" md="3" lg="3">
                    <v-file-input
                        v-model="filiale.fileUp"
                        truncate-length="15"
                        label="Carica Foto"
                    ></v-file-input>
                </v-col>
                <v-col cols="12" md="2" lg="2">
                    <v-btn @click="aggiungi" dark color="indigo" :block="$vuetify.breakpoint.xs">
                        {{btnName}}
                    </v-btn>
                </v-col>
            </v-row>

            <v-data-table
                :headers="headers"
                :items="getFiliali"
                :items-per-page="10"
                class="elevation-1 mt-3"
            >
                <template v-slot:item.foto="{ item }">
                    <v-img
                        max-height="150"
                        max-width="150"
                        :src="linkFoto+item.id+'.jpg'"
                    ></v-img>
                </template>

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
        name: "Filiali",

        data(){
            return {
                modificaSwitch: false,
                filiale:{
                    fileUp:{},
                },
                headers: [
                    { text: 'Cod', align: 'start', sortable: false, value: 'codiceIdentificativo', class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Indirizzo', value: 'indirizzo', class: "indigo white--text" },
                    { text: 'Citta', value: 'citta', class: "indigo white--text" },
                    { text: 'Provincia', value: 'provincia', class: "indigo white--text" },
                    { text: 'Cap', value: 'cap', class: "indigo white--text" },
                    { text: 'telefono', value: 'telefono', class: "indigo white--text" },
                    { text: 'Informazioni', value: 'informazioni', class: "indigo white--text" },
                    { text: 'Foto', width: 200, value: 'foto', class: "indigo white--text" },
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
                modificaFiliale:'modificaFiliale',
                eliminaFiliale:'eliminaFiliale',
            }),

            aggiungi(){
                if (this.modificaSwitch){
                    this.modificaFiliale(this.filiale);
                } else {
                    this.addFiliale(this.filiale);
                }
                this.modificaSwitch = false;
                this.filiale = {};
            },

            elimina(id){
                this.eliminaFiliale(id)
            },

            modifica(filialeSelezionata){
                this.modificaSwitch = true;
                this.filiale = filialeSelezionata;
                this.$store.commit('filiali/eliminaFiliale', this.filiale.id);
            }
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

            btnName(){
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            },

            linkFoto(){
                let base = '';
                if(window.location.host === 'vuexdocker.test'){
                    base = 'http://vuexdocker.test/storage/recapiti/F';
                } else {
                    base = 'https://www.centrouditogroup.it/storage/recapiti/F';
                }
                return base;
            }

        },
    }
</script>

<style scoped>

</style>
