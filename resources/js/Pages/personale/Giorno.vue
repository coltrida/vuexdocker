<template>
    <div>
        <h3 v-if="isOggi"><v-chip style="width: 100%; margin-bottom: 5px" label dark color="blue">{{titolo}} {{giorno}}</v-chip></h3>
        <h3 v-else><v-chip style="width: 100%; margin-bottom: 5px" label outlined>{{titolo}} {{giorno}}</v-chip></h3>
        <div v-for="ore in 11">
            <div v-for="minuti in 2">
                <v-tooltip top open-delay="1000">
                    <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                <v-chip
                    :color="ore < 5 ? calcoloColoreMattina : ore > 6 ? calcoloColorePomeriggio : 'grey lighten-4'"
                    style="width: 100%; margin: 2px 0"
                    label
                >
                    <orario
                        :titoloOrario = titolo
                        :valoreOra = oreCalcolate(ore)
                        :valoreMinuti = minutiCalcolati(minuti)
                        :appuntamenti = appuntamenti
                    />
                </v-chip>
                    </span>
                    </template>
                    <div>{{ore < 5 ? strutturaMattina : ore > 6 ? strutturaPomeriggio : ''}}</div>
                </v-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import Orario from "./Orario";
    export default {
        name: "Giorno",
        components: {Orario},
        props:['titolo', 'giorno', 'giornoPerRicerca', 'appuntamenti', 'doveMattina', 'dovePomeriggio', 'strutturaMattina', 'strutturaPomeriggio'],

        /*data(){
            return {
                oggi:false,
            }
        },*/

        mounted() {
            this.fetchDataDiOggi();
        },

        methods:{
            ...mapActions('appuntamenti', {
                fetchDataDiOggi:'fetchDataDiOggi',
            }),

            oreCalcolate(ore){
                return ore === 1 ? '09' : ore+8
            },

            minutiCalcolati(minuti){
                return minuti === 1 ? '00' : '30'
            },

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getDataDiOggi:'getDataDiOggi',
            }),

            isOggi(){
                return this.giorno == this.getDataDiOggi ? true : false;
            },

            calcoloColoreMattina(){
                let colore = '';
                if (this.doveMattina === 'F'){
                    colore = 'teal lighten-4'
                } else if (this.doveMattina === 'R'){
                    colore = 'lime lighten-3'
                } else if (this.doveMattina === 'D'){
                    colore = 'brown lighten-3'
                } else if (this.doveMattina === 'S'){
                    colore = 'orange lighten-3'
                }
                return colore;
            },

            calcoloColorePomeriggio(){
                let colore = '';
                if (this.dovePomeriggio === 'F'){
                    colore = 'teal lighten-4'
                } else if (this.dovePomeriggio === 'R'){
                    colore = 'lime lighten-3'
                } else if (this.dovePomeriggio === 'D'){
                    colore = 'brown lighten-3'
                } else if (this.dovePomeriggio === 'S'){
                    colore = 'orange lighten-3'
                }
                return colore;
            }
        }

    }
</script>

<style scoped>

</style>
