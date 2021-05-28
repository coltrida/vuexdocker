<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="1100"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2>{{ audiogrammaClient.nome }} {{ audiogrammaClient.cognome }}</h2>
                    <v-btn @click="aggiungiAudiogramma" color="success" dark>
                        Nuovo
                    </v-btn>
                </v-card-text>

                <div v-if="creaAudiogramma">
                    <nuovo
                        :client_id = audiogrammaClient.id
                        @tornaVisualizza="tornaVisualizza"
                    />
                </div>
                <div v-else>
                    <visualizza
                        v-if="audiogrammaClient.audiometria.length > 0"
                        :audiogr = audiogrammaClient.audiometria[0]
                    />
                    <!--<v-card-text v-if="audiogrammaUser.audiometria.length > 0">
                        audiogramma
                    </v-card-text>-->

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
                </div>

            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import Visualizza from "./Visualizza";
    import Nuovo from "./Nuovo";
    export default {
        name: "Audiogramma",
        components: {Nuovo, Visualizza},

        data(){
            return {
                creaAudiogramma: false,
            }
        },

        props: [ 'audiogrammaClient' ],

        methods:{
            cancella(){
                this.$emit('chiudiAudiogramma')
            },

            aggiungiAudiogramma(){
                this.creaAudiogramma = true;
            },

            tornaVisualizza(){
                this.creaAudiogramma = false;
            }
        },

        computed:{
            dialog(){
                return !!this.audiogrammaClient.id;
            }
        },
    }
</script>

<style scoped>

</style>
