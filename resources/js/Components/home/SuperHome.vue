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
    </v-tabs>
</template>

<script>
    import HomeAmm from "./homeAmm";
    import HomeAdmin from "./homeAdmin";
    export default {
        name: "SuperHome",
        components: {HomeAdmin, HomeAmm},
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
            playSound(){
                let alert = new Audio(this.sound);
                alert.play();
            },

            resetLogistica(){
                this.novitaLogistica = 0;
            },

            resetCommerciale(){
                this.novitaCommerciale = 0;
            },
        }
    }
</script>

<style scoped>

</style>
