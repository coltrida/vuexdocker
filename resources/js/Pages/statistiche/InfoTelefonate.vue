<template>
    <div>
        <v-row class="mt-5">
            <v-col cols="6">
                <h2>Telefonate: {{infoRecalls.mese}} / {{infoRecalls.anno}}</h2>
            </v-col>

            <v-col cols="6" class="flex justify-end">
                <v-btn color="primary" dark @click="cancella">
                    Chiudi
                </v-btn>
            </v-col>
        </v-row>

        <div class="text-center" v-if="carica">
            <v-progress-circular
                indeterminate
                color="primary"
            ></v-progress-circular>
        </div>
        <div v-else>
            <v-row v-for="(item, index) in getTelefonateAnnoMese" :key="index">
                <v-col cols="12">
                    <h4>Telefonate eseguite per: {{item[0].nominativoUser}}</h4>
                    <v-data-table
                        dense
                        item-key="idTelefonata"
                        :headers="headers"
                        :items="item"
                        class="elevation-1 mt-3"
                    >
                        <template v-slot:item.nominativo="{ item }">
                            <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.nomeCliente, cogRicerca:item.cognomeCliente + ' ' + item.nomeCliente, }}">
                                {{item.cognomeCliente + ' ' + item.nomeCliente}}
                            </router-link>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </div>

    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "InfoTelefonate",

        props: ['infoRecalls'],

        data(){
            return {
                carica: false,
                headers: [
                    { text: 'Data', width:150, value: 'datarecall', class: "indigo white--text" },
                    { text: 'Eseguita da', width:200, value: 'nominativoEseguito', class: "indigo white--text" },
                    { text: 'Nominativo', width:220, value: 'nominativo', class: "indigo white--text" },
                    { text: 'Città', width:220, value: 'cittaCliente', class: "indigo white--text" },
                    { text: 'Esito', width:220, value: 'esito', class: "indigo white--text" },
                ],

            }
        },

        mounted() {
            this.carica = true;
            this.fetchTelefonateAnnoMese({'anno':this.infoRecalls.anno, 'mesenumero':this.infoRecalls.mesenumero })
                .then(() => this.carica = false);
        },

        methods: {
            ...mapActions('telefonate', {
                fetchTelefonateAnnoMese:'fetchTelefonateAnnoMese',
            }),

            cancella(){
                this.$emit('chiudiInfo')
            },
        },

        computed:{
            ...mapGetters('telefonate', {
                getTelefonateAnnoMese:'getTelefonateAnnoMese',
            }),
        }
    }
</script>

<style scoped>

</style>
