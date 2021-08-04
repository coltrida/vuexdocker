<template>
    <div>
        <h2>Agenda Mese</h2>
        <div>

            <v-row class="py-4">
                <v-col cols="12">
                        <v-data-table
                            hide-default-footer
                            :headers="headers1"
                            :items="getAgenda"
                            class="elevation-1 mt-3"
                            :item-class="itemRowBackground"
                        >
                        </v-data-table>
                </v-col>
            </v-row>

        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Listino",

        data(){
            return {
                user:{},
                giorni: ['lun', 'mar', 'mer', 'gio', 'ven'],
                settimane: [
                    {label: 'prima', valore: 1},
                    {label: 'seconda', valore: 2},
                    {label: 'terza', valore: 3},
                    {label: 'quarta', valore: 4},
                ],
                quando: ['mattina', 'pomeriggio'],
                headers1: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Settimana', align: 'start', sortable: false, value: 'settimana', class: "indigo white--text" },
                    { text: 'lun', width:220, align: 'start', sortable: false, value: 'lun', class: "indigo white--text" },
                    { text: 'mar', width:220, align: 'start', sortable: false, value: 'mar', class: "indigo white--text" },
                    { text: 'mer', width:220, align: 'start', sortable: false, value: 'mer', class: "indigo white--text" },
                    { text: 'gio', width:220, align: 'start', sortable: false, value: 'gio', class: "indigo white--text" },
                    { text: 'ven', width:220, align: 'start', sortable: false, value: 'ven', class: "indigo white--text" },
                ],
            }
        },

        mounted(){
            this.fetchSpecificoUserAgenda(this.getIdUser);
        },

        methods:{
            ...mapActions('users', {
                fetchSpecificoUserAgenda:'fetchSpecificoUserAgenda',
            }),

            itemRowBackground: function (item) {
                return item.settimana === 1 ? 'style-1' :
                             item.settimana === 2 ? 'style-2' :
                                  item.settimana === 3 ? 'style-3' :
                                        item.settimana === 4 ? 'style-4' : ''
            }
        },

        computed:{
            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),

            ...mapGetters('users', {
                getAgenda:'getAgenda',
            }),

        },
    }
</script>

<style>
    .style-1 {
        background-color: rgb(215,215,44)
    }
    .style-2 {
        background-color: rgb(206, 116, 93)
    }

    .style-3 {
        background-color: rgb(87, 206, 89)
    }

    .style-4 {
        background-color: rgb(95, 102, 97)
    }
</style>
