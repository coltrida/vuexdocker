<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2 class="text-center">Evento non inserito!</h2>
                    <h3 class="text-center">Già occupato da un altro evento</h3>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="cancella"
                    >
                        Chiudi
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "MessaggioEventoPresente",

        props: [ 'textMessaggio' ],

       methods:{
           cancella(){
               this.$emit('cancellaMessaggio')
           }
       },

        computed:{
            dialog(){
                return true;
            }
        },
    }
</script>

<style scoped>

</style>
