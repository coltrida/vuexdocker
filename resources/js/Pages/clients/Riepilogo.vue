<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="getRiepilogo"
            class="elevation-1 mt-3"
        >
            <template v-slot:item="{ item }">
                <tr>
                    <td>{{item.nome}}</td>
                    <td>{{item.cli.toLocaleString('it')}}</td>
                    <td>{{item.pc.toLocaleString('it')}}</td>
                    <td>{{item.clc.toLocaleString('it')}}</td>
                    <td>{{item.normo.toLocaleString('it')}}</td>
                    <td>{{item.le.toLocaleString('it')}}</td>
                    <td>{{item.tot.toLocaleString('it')}}</td>
                </tr>
            </template>

            <template slot="body.append">
                <tr class="pink--text">
                    <th class="title">Totali</th>
                    <th class="title">{{ sumField('cli').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('pc').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('clc').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('normo').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('le').toLocaleString('it') }}</th>
                    <th class="title">{{ sumField('tot').toLocaleString('it') }}</th>
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
