<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="6">
                <h2>{{titolo}}</h2>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
                <v-btn color="primary" @click="chiudi">
                    Statistiche Appuntamenti
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <v-data-table
                    :headers="header"
                    :items="elementi"
                    class="elevation-1"
                >
                </v-data-table>
            </v-col>
        </v-row>

    </v-row>

</template>

<script>
    export default {
        name: "AppuntamentiDettagli",
        props:['elementi', 'titolo'],
        data() {
            return {
                header: [
                    {text: 'Data Appuntamento', align: 'start', sortable: false, value: 'giorno', class: "indigo white--text"},
                    {text: 'Nominativo', align: 'start', sortable: false, value: 'client.fullname', class: "indigo white--text"},
                    {text: 'Città', align: 'start', sortable: false, value: 'client.citta', class: "indigo white--text"},
                    {text: 'Indirizzo', align: 'start', sortable: false, value: 'client.indirizzo', class: "indigo white--text"},
                    {text: 'Intervenuto', align: 'start', sortable: false, value: 'intervenuto', class: "indigo white--text"},
                ],
            }
        },

        methods:{
            chiudi(){
                this.$emit('chiudiDettagli')
            }
        }
    }
</script>

<style scoped>

</style>
