<template>
    <div>
        <h2>Statistiche Call Center</h2>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    dense
                    :headers="headers"
                    :items="getStatisticheTelefonate"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >
                    <template slot="body.append">
                        <tr class="pink--text">
                            <th class="title">Totali</th>
                            <th class="title"></th>
                            <th class="title">{{ sumField('telefonate') }}</th>
                            <th class="title">{{ sumField('appuntamenti') }}</th>
                        </tr>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",
        data(){
            return {
                headers: [
                    { text: 'Anno', value: 'anno', class: "indigo white--text" },
                    { text: 'Mese', value: 'mese', class: "indigo white--text" },
                    { text: 'Telefonate fatte', sortable: false, value: 'telefonate', class: "indigo white--text" },
                    { text: 'Appuntamenti', sortable: false, value: 'appuntamenti', class: "indigo white--text" },
                ],

            }
        },

        mounted() {
            this.fetchStatisticheTelefonate();
        },

        methods:{
            ...mapActions('telefonate', {
                fetchStatisticheTelefonate:'fetchStatisticheTelefonate',
            }),

            sumField(key) {
                return this.getStatisticheTelefonate.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed:{
            ...mapGetters('telefonate', {
                getStatisticheTelefonate:'getStatisticheTelefonate',
            }),
        }
    }
</script>

<style scoped>

</style>
