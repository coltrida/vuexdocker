<template>
    <v-row class="mt-4">
        <v-col cols="12">
            <v-row>
                <v-col><h2>Log Error</h2></v-col>
                <v-col><v-btn @click="pulisciLog">Pulisci</v-btn></v-col>
            </v-row>

            <h3>Dimensioni: {{getLogFile[0]}}</h3>
            <textarea
                style="border: 1px solid black; padding: 5px"
                rows="15"
                :cols=colonne
                readonly
                v-model="getLogFile[1]"
            />
        </v-col>

    </v-row>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Log",

        mounted(){
            this.fetchLogFile();
        },

        methods:{
            ...mapActions('logging', {
                fetchLogFile:'fetchLogFile',
                pulisciLogFile:'pulisciLogFile',
            }),

            pulisciLog(){
                this.pulisciLogFile();
            }

        },

        computed:{
            ...mapGetters('logging', {
                getLogFile:'getLogFile',
            }),

            colonne()
            {
                return this.$vuetify.breakpoint.xs ? 40 : 130
            }

        },
    }
</script>

<style scoped>

</style>

