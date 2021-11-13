<template>
    <div>
        <h2>Logging</h2>
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
        name: "TempiRecall",

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
            }),

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

