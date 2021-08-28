<template>
    <div>
        <h2>Logging</h2>
        <v-container>

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


        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "TempiRecall",

        data(){
            return {
                headers1: [
                    { text: 'Data', align: 'start', value: 'created_at', class: "indigo white--text" },
                    { text: 'Testo', value: 'description', class: "indigo white--text" },
                    { text: 'Settore', value: 'properties[0].customProperty', class: "indigo white--text" },
                    { text: 'Soggetto', value: 'properties[1].nomeSoggetto', class: "indigo white--text" },
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

