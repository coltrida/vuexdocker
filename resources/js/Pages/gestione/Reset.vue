<template>
    <div>
        <h2>Reset</h2>
        <v-container>

            <messaggio
                :textMessaggio="textMessaggio"
                @cancellaMessaggio = "cancellaMessaggio"
            ></messaggio>

            <div class="text-center" v-if="carica">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </div>
            <div v-else>
                <v-row v-if="locale">
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <v-btn @click="invia" color="success" dark>
                                    RESET
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>



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
                textMessaggio: null,
                carica: false,
            }
        },

        methods:{

            ...mapActions('logging', {
                resetDati:'resetDati',
            }),

            invia(){
                this.carica = true;
                this.resetDati().then(() => {
                    this.$store.commit('login/logout');
                    this.carica = false;
                    this.$router.push({ name: 'home' });
                });

            },

            cancellaMessaggio(){
                this.textMessaggio = '';
            }
        },

        computed: {
            locale(){
                return window.location.host === 'vuexdocker.test' ? true : false
            }
        }

    }
</script>

<style scoped>

</style>

