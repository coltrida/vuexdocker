<template>
    <v-tabs class="mt-3">
        <v-tab @click="resetLogistica">
            <v-badge
                :content="novitaLogistica"
                :value="novitaLogistica"
                color="green"
                overlap
            >
                Logistica
            </v-badge>
        </v-tab>
        <v-tab-item>
            <v-card flat>
                <home-amm />
            </v-card>
        </v-tab-item>

        <v-tab @click="resetCommerciale">
            <v-badge
                :content="novitaCommerciale"
                :value="novitaCommerciale"
                color="green"
                overlap
            >
                Commerciale
            </v-badge>
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
        data(){
            return{
                novitaLogistica : 0,
                novitaCommerciale : 0,
            }
        },

        mounted() {
            window.Echo.channel("logisticaChannel").listen(".task-created", e => {
                this.novitaLogistica = '*';
            });

            window.Echo.channel("provaChannel").listen(".task-created", e => {
                this.novitaCommerciale = '*';
            });
        },

        methods:{
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
