<template>
    <div>
        <v-row>
            <v-col cols="1">
                <v-select
                    v-model="mese"
                    :items="getMesi"
                    label="Mese"
                ></v-select>
            </v-col>
            <v-col cols="1">
                <v-select
                    v-model="anno"
                    :items="getAnni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>
        <v-card v-for="audio in getAudio"
             :key="audio.id" class="my-4" outlined>
            <v-card-title>{{audio.name}}</v-card-title>
            <v-card-text>
                <saldati-user
                    :idAudio="audio.id"
                    :mese="mese"
                    :anno="anno"
                />
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
    import RateUser from "./RateUser";
    import SaldatiUser from "./SaldatiUser";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "RateAudio",

        components:{RateUser, SaldatiUser},

        data(){
            return{
                mese:'',
                anno:''
            }
        },

        mounted() {
            this.fetchAudio();
            this.caricaData();
        },

        methods: {
            ...mapActions('users', {
                fetchAudio: 'fetchAudio',
            }),

            caricaData(){
                let oggi = new Date();
                this.mese = oggi.getMonth()+1;
                this.anno = oggi.getFullYear();
            }

        },

        computed: {
            ...mapGetters('users', {
                getAudio: 'getAudio',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
                getMesi: 'getMesi',
            }),

        },
    }
</script>

<style scoped>

</style>
