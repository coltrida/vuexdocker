<template>
    <div>
        <h3>
            <v-badge
                bordered
                :color="esisteEvento ? 'blue' : 'white'"
                :title="esisteEvento ? 'In questo giorno è presente un evento' : ''"
                :content="esisteEvento ? 'E' : ''"
            >
                <v-badge
                    bordered
                    bottom
                    @click.native="eliminaEvento"
                    offset-x="-2"
                    offset-y="20"
                    :color="esisteEvento && getRuolo === 'admin' ? 'red' : 'white'"
                    :content="esisteEvento && getRuolo === 'admin' ? 'D' : ''"
                >
                    <v-chip style="width: 100%; margin-bottom: 5px" label dark :color="isOggi ? 'blue' : ''">{{titolo}} {{giorno}}</v-chip>
                </v-badge>
            </v-badge>
        </h3>
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
                    <div>{{ore < 5 ? cacoloStrutturaMattina : ore > 6 ? cacoloStrutturaPomeriggio : ''}}</div>
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
        props:[
            'titolo',
            'giorno',
            'giornoPerRicerca',
            'appuntamenti',
            'eventi',
            'doveMattina',
            'dovePomeriggio',
            'strutturaMattina',
            'strutturaPomeriggio'
        ],

        data(){
            return {
                selezionato:'primary',
            }
        },

        /*mounted() {
            if(this.eventi) {console.log(this.eventi)}
        },*/

        methods:{
            ...mapActions('eventi', {
                delEvento:'delEvento',
            }),

            oreCalcolate(ore){
                return ore === 1 ? '09' : ore+8
            },

            minutiCalcolati(minuti){
                return minuti === 1 ? '00' : '30'
            },

            eliminaEvento(){
                if (this.getRuolo === 'admin'){
                    this.delEvento(this.eventi)
                }
            }

        },

        computed:{
            ...mapGetters('appuntamenti', {
                getDataDiOggi:'getDataDiOggi',
            }),

            ...mapGetters('login', {
                getRuolo:'getRuolo',
                getIdUser:'getIdUser',
            }),

            isOggi(){
                return this.giorno == this.getDataDiOggi ? true : false;
            },

            calcoloColoreMattina(){
                let colore = '';

                if (this.eventi) {
                    if (this.eventi[0]){
                        if (this.eventi[0].cosa === 'SCREENING') {
                            return 'orange lighten-3'
                        } else if (this.eventi[0].cosa === 'RECAPITO'){
                            return 'lime lighten-3'
                        } else if (this.eventi[0].cosa === 'DOMICILIO'){
                            return 'brown lighten-3'
                        } else if (this.eventi[0].cosa === 'NEGOZIO'){
                            return 'teal lighten-4'
                        } else if (this.eventi[0].cosa === 'PERMESSO'){
                            return 'red lighten-3'
                        } else if (this.eventi[0].cosa === 'FESTIVO'){
                            return 'red lighten-5'
                        }
                    }
                }

                if (this.doveMattina === 'N'){
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

                if (this.eventi) {
                    if (this.eventi[1]){
                        if (this.eventi[1].cosa === 'SCREENING') {
                            return 'orange lighten-3'
                        } else if (this.eventi[1].cosa === 'RECAPITO'){
                            return 'lime lighten-3'
                        } else if (this.eventi[1].cosa === 'DOMICILIO'){
                            return 'brown lighten-3'
                        } else if (this.eventi[1].cosa === 'NEGOZIO'){
                            return 'teal lighten-4'
                        } else if (this.eventi[1].cosa === 'PERMESSO'){
                            return 'red lighten-3'
                        } else if (this.eventi[1].cosa === 'FESTIVO'){
                            return 'red lighten-5'
                        }
                    }
                }

                if (this.dovePomeriggio === 'N'){
                    colore = 'teal lighten-4'
                } else if (this.dovePomeriggio === 'R'){
                    colore = 'lime lighten-3'
                } else if (this.dovePomeriggio === 'D'){
                    colore = 'brown lighten-3'
                } else if (this.dovePomeriggio === 'S'){
                    colore = 'orange lighten-3'
                }
                return colore;
            },

            cacoloStrutturaMattina(){
                let res = this.strutturaMattina;
                if (this.eventi) {
                    if (this.eventi[0]){
                        res = this.eventi[0].evento ? this.eventi[0].cosa+' '+this.eventi[0].evento : this.eventi[0].cosa;
                    }
                }
                return res;
            },

            cacoloStrutturaPomeriggio(){
                let res = this.strutturaPomeriggio;
                if (this.eventi) {
                    if (this.eventi[1]){
                        res = this.eventi[1].evento ? this.eventi[1].cosa+' '+this.eventi[1].evento : this.eventi[1].cosa;
                    }
                }
                return res;
            },

            esisteEvento(){
                let res = false;
                if (this.eventi) {
                    if (this.eventi[0] || this.eventi[1]) {
                        res = true
                    }
                }
                return res;
            }

        }

    }
</script>

<style scoped>

</style>
