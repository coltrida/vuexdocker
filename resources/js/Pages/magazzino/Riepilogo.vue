<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="getRiepilogoMagazzini"
            class="elevation-1 mt-3"
        >

            <template slot="body.append">
                <tr class="pink--text">
                    <th class="title">Totali</th>
                    <th class="title">{{ sumField('products_presenti_count').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('products_in_prova_count').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('products_richiesti_count').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('products_in_arrivo_count').toLocaleString('it') }}</th>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Riepilogo",

        data() {
            return {
                headers: [
                    {text: 'Filiale', value: 'nome', class: "indigo white--text"},
                    {text: 'Prodotti Presenti', value: 'products_presenti_count', class: "indigo white--text"},
                    {text: 'Prodotti In Prova', value: 'products_in_prova_count', class: "indigo white--text"},
                    {text: 'Prodotti Richiesti', value: 'products_richiesti_count', class: "indigo white--text"},
                    {text: 'Prodotti In Arrivo', value: 'products_in_arrivo_count', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchRiepilogoMagazzini();
        },

        methods: {
            ...mapActions('product', {
                fetchRiepilogoMagazzini: 'fetchRiepilogoMagazzini',
            }),

            sumField(key) {
                return this.getRiepilogoMagazzini.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed: {
            ...mapGetters('product', {
                getRiepilogoMagazzini:'getRiepilogoMagazzini',
            }),

        },
    }
</script>

<style scoped>

</style>
