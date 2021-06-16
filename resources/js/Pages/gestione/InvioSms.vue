<template>
    <div>
        <h2>Invio sms</h2>
        <v-container>

            <messaggio
                :textMessaggio="textMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>

            <v-row>
                <v-col cols="12">
                    <v-row>
                        <v-col>
                            <v-textarea
                                label="Default style"
                                v-model="testo"
                            ></v-textarea>
                        </v-col>

                        <v-col>
                            <v-btn @click="invia" color="success" dark>
                                Invia
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>


        </v-container>
    </div>

</template>

<script>
    import {mapActions} from "vuex";
    import Messaggio from "../../Components/Messaggio";

    export default {
        name: "TempiRecall",

        components: { Messaggio },

        data(){
            return {
                testo:'',
                textMessaggio: null,
            }
        },

        methods:{

            ...mapActions('clients', {
                smsInvio:'smsInvio',
            }),

            invia(){
                this.smsInvio(this.testo).then(() => {
                    this.textMessaggio = 'sms inviato';
                    this.testo = '';
                });

            },

            cancellaMessaggio(){
                this.textMessaggio = '';
            }
        },

    }
</script>

<style scoped>

</style>

