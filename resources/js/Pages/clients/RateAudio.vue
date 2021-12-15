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
        <saldati-user :idAudio="getIdUser"
                      :mese="mese"
                      :anno="anno"/>
        <rate-user :idAudio="getIdUser" class="mt-12"/>
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
            this.caricaData();
        },

        methods: {
            caricaData(){
                let oggi = new Date();
                this.mese = oggi.getMonth()+1;
                this.anno = oggi.getFullYear();
            }

        },

        computed: {
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
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
