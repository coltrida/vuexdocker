<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="getRiepilogo"
            class="elevation-1 mt-3"
        >
            <template slot="body.append">
                <tr class="pink--text">
                    <th class="title">Totali</th>
                    <th class="title">{{ sumField('cli') }}</th>
                    <th class="title">{{ sumField('pc') }}</th>
                    <th class="title">{{ sumField('clc') }}</th>
                    <th class="title">{{ sumField('normo') }}</th>
                    <th class="title">{{ sumField('le') }}</th>
                    <th class="title">{{ sumField('tot') }}</th>
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
                    {text: 'CL', value: 'cli', class: "indigo white--text"},
                    {text: 'PC', value: 'pc', class: "indigo white--text"},
                    {text: 'CLC', value: 'clc', class: "indigo white--text"},
                    {text: 'NORMO', value: 'normo', class: "indigo white--text"},
                    {text: 'LE', value: 'le', class: "indigo white--text"},
                    {text: 'TOT', value: 'tot', class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchRiepilogo();
        },

        methods: {
            ...mapActions('clients', {
                fetchRiepilogo: 'fetchRiepilogo',
            }),

            sumField(key) {
                return this.getRiepilogo.reduce((a, b) => a + (b[key] || 0), 0)
            }

        },

        computed: {
            ...mapGetters('clients', {
                getRiepilogo: 'getRiepilogo',
            }),

        },
    }
</script>

<style scoped>

</style>
