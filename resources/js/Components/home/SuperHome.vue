<template>
    <v-tabs class="mt-3">
        <v-tab @click="resetLogistica">
                Logistica
        </v-tab>
        <v-tab-item>
            <v-card flat>
                <home-amm />
            </v-card>
        </v-tab-item>

        <v-tab @click="resetCommerciale">
                Commerciale
        </v-tab>
        <v-tab-item>
            <v-card flat>
                <home-admin />
            </v-card>
        </v-tab-item>

        <v-tab @click="resetCallCenter">
            CallCenter
        </v-tab>
        <v-tab-item>
            <v-card flat>
                <home-call-admin />
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import {mapActions} from "vuex";
    import HomeAmm from "./homeAmm";
    import HomeAdmin from "./homeAdmin";
    import HomeCallAdmin from "./homeCallAdmin";
    export default {
        name: "SuperHome",
        components: {HomeCallAdmin, HomeAdmin, HomeAmm},
        /*data(){
            return{
                sound: "http://soundbible.com/mp3/glass_ping-Go445-1207030150.mp3",
                novitaLogistica : 0,
                novitaCommerciale : 0,
            }
        },*/

        /*mounted() {
            window.Echo.channel("logisticaChannel").listen(".task-created", e => {
                this.novitaLogistica = '*';
                this.playSound();
            });

            window.Echo.channel("provaChannel").listen(".task-created", e => {
                this.novitaCommerciale = '*';
                this.playSound();
            });
        },*/

        methods:{
            ...mapActions('telefonate', {
                fetchRecallOggi: 'fetchRecallOggi',
                fetchTelefonateFatteOggi: 'fetchTelefonateFatteOggi',
                fetchNumeroTelefonateFatteOggi: 'fetchNumeroTelefonateFatteOggi',
                fetchNumeroAppuntamentiPresiOggi: 'fetchNumeroAppuntamentiPresiOggi',
            }),

            ...mapActions('filiali', {
                fetchRichiestaApparecchi: 'fetchRichiestaApparecchi',
            }),

            playSound(){
                let alert = new Audio(this.sound);
                alert.play();
            },

            resetLogistica(){
                this.novitaLogistica = 0;

                this.fetchRichiestaApparecchi();
            },

            resetCommerciale(){
                this.novitaCommerciale = 0;

            },

            resetCallCenter(){
                this.fetchRecallOggi();
                this.fetchTelefonateFatteOggi();
                this.fetchNumeroTelefonateFatteOggi();
                this.fetchNumeroAppuntamentiPresiOggi();
            }
        }
    }
</script>

<style scoped>

</style>
