<template>
    <div class="text-center">
        <v-dialog
            v-model="dialogconferma"
            width="800"
        >
            <v-card>

                <v-card-title>
                    {{userOriginario.nome}} {{userOriginario.cognome}} di {{userOriginario.citta}}
                </v-card-title>

                <v-card-text class="pt-4">
                    <h2 class="text-center">Attenzione, il nominativo è uno di questi già presenti?</h2>
                    <h3 class="text-center">In caso positivo, selezionarlo per sovrascrivilo</h3>
                </v-card-text>

                <v-card-text>
                    <v-data-table
                        :headers="header"
                        :items="listaDoppioni"
                        class="elevation-1 mt-3"
                        hide-default-footer
                    >

                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="green"
                                small
                                @click="scelta(item.id)"
                            >
                                mdi-check
                            </v-icon>
                        </template>

                    </v-data-table>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="warning"
                        text
                        @click="scelta(0)"
                    >
                        ANNULLA
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "ConfermaDoppione",

        props: [ 'userOriginario', 'listaDoppioni'],

        data(){
            return{
                header: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Cognome', sortable: false, value: 'cognome', class: "indigo white--text" },
                    { text: 'Indirizzo', sortable: false, value: 'indirizzo', class: "indigo white--text" },
                    { text: 'Città', sortable: false, value: 'citta', class: "indigo white--text" },
                    { text: 'Pr', sortable: false, value: 'provincia', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

       methods:{
           scelta(scelta){
               this.$emit('chiudiConfermaDoppioni', scelta)
           },
       },

        computed:{
            dialogconferma(){
                return !!this.userOriginario;
            },
        },
    }
</script>

<style scoped>

</style>
