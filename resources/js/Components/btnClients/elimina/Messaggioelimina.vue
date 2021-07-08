<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2>Elimina {{ nomeElimina }} {{cognomeElimina}}?</h2>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="danger"
                        text
                        @click="elimina"
                    >
                        Elimina
                    </v-btn>
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
    import {mapActions} from "vuex";
    export default {
        name: "Messaggioelimina",

        props: [ 'idElimina', 'nomeElimina', 'cognomeElimina' ],

       methods:{
           ...mapActions('clients', {
               eliminaClient: 'eliminaClient',
           }),

           elimina(){
               this.eliminaClient(this.idElimina);
               this.cancella();
           },

           cancella(){
               this.$emit('cancellaMessaggioElimina')
           }
       },

        computed:{
            dialog(){
                return !!this.idElimina;
            }
        },
    }
</script>

<style scoped>

</style>
