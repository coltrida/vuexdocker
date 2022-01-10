<template>
    <div>
        <v-row>
            <v-col><h2>Logging</h2></v-col>
            <v-col><v-btn @click="pulisciLogging">Pulisci</v-btn></v-col>
        </v-row>

            <v-row>
                <v-col cols="12">
                    <v-data-table
                        :headers="headers1"
                        :items="getLogging"
                        class="elevation-1 mt-3"
                    >

                    </v-data-table>
                </v-col>
            </v-row>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Logging",

        data(){
            return {
                headers1: [
                    { text: 'Data', width:170, align: 'start', value: 'created_at', class: "indigo white--text" },
                    { text: 'Soggetto', width:150, value: 'subject_type', class: "indigo white--text" },
                    { text: 'Testo', width:700, value: 'description', class: "indigo white--text" },
                    { text: 'Settore', width:170, value: 'log_name', class: "indigo white--text" },
                    { text: 'Oggetto', value: 'event', class: "indigo white--text" },
                ],

            }
        },

        mounted(){
            this.fetchLoggings();
        },

        methods:{
            ...mapActions('logging', {
                fetchLoggings:'fetchLoggings',
                pulisciLoggingFile:'pulisciLoggingFile',
            }),

            pulisciLogging(){
                this.pulisciLoggingFile();
            }

        },

        computed:{
            ...mapGetters('logging', {
                getLogging:'getLogging',
            }),

        },
    }
</script>

<style scoped>

</style>

