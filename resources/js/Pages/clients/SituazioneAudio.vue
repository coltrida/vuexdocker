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
                    :items="getAnni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="6">
                <v-row>
                    <v-col><h3>Clienti</h3></v-col>
                    <v-col>A mercato libero: {{getSituazioneAnnoClientiAudio.libero}}</v-col>
                    <v-col>A mercato ricond.: {{getSituazioneAnnoClientiAudio.riconducibile}}</v-col>
                    <v-col>A mercato sociale: {{getSituazioneAnnoClientiAudio.sociale}}</v-col>
                </v-row>

                <v-data-table
                    :headers="header"
                    :items="getSituazioneAnnoClientiAudio.prova"
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

                header: [
                    { text: 'Cognome',  align: 'start', sortable: false, value: 'client.cognome', class: "indigo white--text" },
                    { text: 'Nome',  align: 'start', sortable: false, value: 'client.nome', class: "indigo white--text" },
                    { text: 'Città',  align: 'start', sortable: false, value: 'client.citta', class: "indigo white--text" },
                    { text: 'Importo',  sortable: false, value: 'tot_formattato', class: "indigo white--text" },
                    { text: 'Mercato',  sortable: false, value: 'mercato', class: "indigo white--text" },
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
                getAnni: 'getAnni',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

        }
    }
</script>

<style scoped>

</style>
