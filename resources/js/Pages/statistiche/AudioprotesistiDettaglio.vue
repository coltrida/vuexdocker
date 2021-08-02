<template>
    <div>
        <h2>Dettaglio Audioprotesisti</h2>
        <v-container>
            <div v-for="audio in getAudioConFatt" :key="audio.id" class="mb-7">
                <v-row>
                    <v-col><h2>{{audio.name}}</h2></v-col>
                    <v-col><h4>Vendite su Pc: {{audio.delta.premio}} %</h4></v-col>
                    <v-col><h4>Nr. Pc: {{audio.delta.provvigione}}</h4></v-col>
                    <v-col><h4>Nr. Cl: {{audio.delta.stipendio}}</h4></v-col>
                </v-row>

                <v-data-table
                    :headers="headers"
                    :items="audio.prova_finalizzata"
                    :item-key="audio.prova_finalizzata.id"
                    hide-default-footer
                    class="elevation-1 mt-3"
                >

                    <template v-slot:item.products="{ item }">
                        <div v-for="ele in item.product" :key="ele.id">
                            {{ele.listino.nome}}
                        </div>
                        <!-- {{ item.product}}-->
                    </template>

                </v-data-table>
            </div>


        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                AudioSelected: [],
                switch: 0,
                singleSelect: true,
                headers: [
                    { text: 'Mese', value: 'mese_fine', class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'client.fullname', class: "indigo white--text" },
                    { text: 'Tot', sortable: false, value: 'tot', class: "indigo white--text" },
                    { text: 'APA', sortable: false, value: 'products', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.fetchAudioConFatt();
        },

        methods:{
            ...mapActions('users', {
                fetchAudioConFatt:'fetchAudioConFatt',
            }),

        },

        computed:{
            ...mapGetters('users', {
                getAudioConFatt:'getAudioConFatt',
            }),

        }
    }
</script>

<style scoped>

</style>
