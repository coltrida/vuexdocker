<template>
    <div class="text-center">
        <v-dialog
            v-model="dialogconferma"
            width="500"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2 class="text-center">Attenzione</h2>
                    <h3 class="text-center">Questo paziente è gestito da: {{ UserOriginario }}</h3>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <h3 class="text-center">Gestirai tu questo paziente?</h3>
                    <v-btn
                        color="success"
                        text
                        @click="scegli(true)"
                    >
                        SI
                    </v-btn>
                    <v-btn
                        color="warning"
                        text
                        @click="scegli(false)"
                    >
                        NO
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "ConfermaCambioUtenteProva",

        props: [ 'UserOriginario'],

       methods:{

           scegli(scelta){
               this.$emit('chiudiConfermaCambioUtente', scelta)
           },
       },

        computed:{
            dialogconferma(){
                return !!this.UserOriginario;
            },
        },
    }
</script>

<style scoped>

</style>
