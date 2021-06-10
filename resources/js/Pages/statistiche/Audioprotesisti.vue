<template>
    <div>
        <h2>Statistiche Audioprotesisti</h2>
        <v-container>
            <div v-for="audio in getAudioConBgt" :key="audio.id" class="mb-5">
                <h2>{{audio.name}}</h2>
                <v-data-table
                    :headers="headers"
                    :items="audio.valori"
                    :item-key="audio.valori.nome"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                </v-data-table>
            </div>


        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                AudioSelected: [],
                switch: 0,
                singleSelect: true,
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Bgt Anno', sortable: false, value: 'budgetAnno', class: "indigo white--text" },
                    { text: 'Genn', sortable: false, value: 'gennaio', class: "indigo white--text" },
                    { text: 'Febb', sortable: false, value: 'febbraio', class: "indigo white--text" },
                    { text: 'Marzo', sortable: false, value: 'marzo', class: "indigo white--text" },
                    { text: 'April', sortable: false, value: 'aprile', class: "indigo white--text" },
                    { text: 'Magg', sortable: false, value: 'maggio', class: "indigo white--text" },
                    { text: 'Giug', sortable: false, value: 'giugno', class: "indigo white--text" },
                    { text: 'Lugl', sortable: false, value: 'luglio', class: "indigo white--text" },
                    { text: 'Agos', sortable: false, value: 'agosto', class: "indigo white--text" },
                    { text: 'Sett', sortable: false, value: 'settembre', class: "indigo white--text" },
                    { text: 'Otto', sortable: false, value: 'ottobre', class: "indigo white--text" },
                    { text: 'Nove', sortable: false, value: 'novembre', class: "indigo white--text" },
                    { text: 'Dice', sortable: false, value: 'dicembre', class: "indigo white--text" },
                ],
                assegna: {
                    budgetAnno:0,
                    stipendio: 0,
                    provvigione: 0,
                    mese: []
                }
            }
        },

        mounted() {
            this.fetchSituazioneAnno();
        },

        methods:{
            ...mapActions('users', {
                fetchSituazioneAnno:'fetchSituazioneAnno',
            }),

        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
            }),

        }
    }
</script>

<style scoped>

</style>
