<template>
    <div>
        <div class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div class="text-center" v-else>
            <v-alert type="info">
                <v-row align="center">
                    <v-col class="grow">
                        {{ getMessaggioBackup }}
                    </v-col>
                </v-row>
            </v-alert>
        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Backup",

        data(){
            return {
                carica : false,
            }
        },

        mounted(){
            this.carica = true;
            this.eseguiBackup().then(() => {
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('clients', {
                eseguiBackup:'eseguiBackup',
            }),

        },

        computed:{
            ...mapGetters('clients', {
                getMessaggioBackup:'getMessaggioBackup',
            }),
        },
    }
</script>

<style scoped>

</style>
