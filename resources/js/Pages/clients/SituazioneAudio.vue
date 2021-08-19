<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>Riepilogo</h2>
            </v-col>
            <v-col cols="6">
                <v-select
                    @change="selezionaAnno()"
                    v-model="ricerca.anno"
                    :items="anni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="6">
                <h3>Clienti</h3>
                <v-data-table
                    :headers="header"
                    :items="getSituazioneAnnoClientiAudio"
                    class="elevation-1"
                >
                </v-data-table>
            </v-col>
            <v-col cols="6">
                <h3>Resi</h3>
                <v-data-table
                    :headers="header"
                    :items="getSituazioneAnnoResiAudio"
                    class="elevation-1"
                >
                </v-data-table>
            </v-col>
        </v-row>

        <v-row>

        </v-row>

    </v-row>



</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "OrariMedici",

        data(){
            return {
                ricerca:{},

                anni:['2021'],

                header: [
                    { text: 'Cognome',  align: 'start', sortable: false, value: 'client.cognome', class: "indigo white--text" },
                    { text: 'Nome',  align: 'start', sortable: false, value: 'client.nome', class: "indigo white--text" },
                    { text: 'Città',  align: 'start', sortable: false, value: 'client.citta', class: "indigo white--text" },
                    { text: 'Importo',  sortable: false, value: 'tot', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
        },

        methods:{
            ...mapActions('clients', {
                fetchSituazioneAnnoClientiAudio:'fetchSituazioneAnnoClientiAudio',
                fetchSituazioneAnnoResiAudio:'fetchSituazioneAnnoResiAudio',
            }),

            selezionaAnno(){
                this.ricerca.userId = this.getIdUser;
                this.fetchSituazioneAnnoClientiAudio(this.ricerca);
                this.fetchSituazioneAnnoResiAudio(this.ricerca);
            },

        },

        computed:{
            ...mapGetters('clients', {
                getSituazioneAnnoClientiAudio: 'getSituazioneAnnoClientiAudio',
                getSituazioneAnnoResiAudio: 'getSituazioneAnnoResiAudio',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

        }
    }
</script>

<style scoped>

</style>
