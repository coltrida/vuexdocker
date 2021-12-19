<template>
    <div class="py-10">
        <v-row>
            <v-col>
                <h2>Dettaglio Audioprotesisti</h2>
            </v-col>
            <v-col>
                <v-select
                    @change="selezionaAnno()"
                    v-model="ricerca.anno"
                    :items="getAnni"
                    label="Anno"
                ></v-select>
            </v-col>
        </v-row>

            <v-card color="blue lighten-4" v-for="audio in getAudioConFatt" :key="audio.id" class="mb-7">
                <v-row class="pa-5 text-sm">
                    <!--<v-col><h2>{{audio.name}}</h2></v-col>-->
                    <v-col class="text-center">
                        <h4>Conv. Prove</h4>
                        {{ (((audio.nuova + audio.riacquisto) / (audio.nuova + audio.riacquisto + audio.reso) ) * 100).toFixed(0) }}%
                    </v-col>
                    <v-col class="text-center">
                        <h4>Nr. Pc</h4>
                        {{audio.molti_delta[0] ? audio.molti_delta[0].provvigione : 0}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>Nr. Cl</h4>
                        {{audio.molti_delta[0] ? audio.molti_delta[0].stipendio : 0}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>Media v.</h4>
                        {{audio.molti_fatturati[0] ? audio.molti_fatturati[0].provvigione : 0}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>Prove aperte</h4>
                        {{audio.prova_count}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>New Vendite</h4>
                        {{audio.nuova}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>Riacquisti</h4>
                        {{audio.riacquisto}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>M. Libero</h4>
                        {{audio.libero}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>M. Ricond.</h4>
                        {{audio.riconducibile}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>M. Sociale</h4>
                        {{audio.sociale}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>Resi</h4>
                        {{audio.reso}}
                    </v-col>
                    <v-col class="text-center">
                        <h4>T.M.Chiusura</h4>
                        {{calcolaMediaGiorniProva(audio.prova_finalizzata)}} gg.
                    </v-col>
                    <!--<v-col><h4>% conv.: {{audio.pezzi.budgetAnno ? audio.pezzi.budgetAnno / (audio.pezzi.budgetAnno + audio.pezzi.premio) * 100 : 0 }}%</h4></v-col>-->
                </v-row>

                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                           <h4><span style="background-color: yellow; padding: 5px">{{audio.name}}</span></h4>   Dettaglio vendite
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-data-table
                                dense
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

                                <template v-slot:item.client.fullname="{ item }">
                                    <router-link style="color: black" :to="{ name: 'clientsFiliale',
                                        params: { filialeId: item.filiale_id, nomRicerca:item.client.nome, cogRicerca:item.client.fullname, }}">
                                        {{item.client.fullname}}
                                    </router-link>
                                </template>

                            </v-data-table>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>

            </v-card>


    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssegnaBudget",

        data(){
            return {
                ricerca:{},
                AudioSelected: [],
                switch: 0,
                singleSelect: true,
                headers: [
                    { text: 'Mese', value: 'mese_fine', class: "indigo white--text" },
                    { text: 'Nome', align: 'start', sortable: false, value: 'client.fullname', class: "indigo white--text" },
                    { text: 'Tot', sortable: false, value: 'tot', class: "indigo white--text" },
                    { text: 'APA', sortable: false, value: 'products', class: "indigo white--text" },
                    { text: 'GG in prova', sortable: false, value: 'giorni_prova', class: "indigo white--text" },
                ],
            }
        },

        mounted() {
            this.ricerca.anno = '';
            this.$store.commit('users/resetAudioConFatt');
        },

        methods:{
            ...mapActions('users', {
                fetchAudioConFatt:'fetchAudioConFatt',
            }),

            selezionaAnno(){
                this.fetchAudioConFatt(this.ricerca);
            },

            calcolaMediaGiorniProva(prove){
                let tot = 0;
                if (prove.length > 0){
                    prove.forEach(ele => {
                        tot += parseInt(ele.giorni_prova)
                    });
                    tot = tot / prove.length;
                }
                return tot;
            }

        },

        computed:{
            ...mapGetters('users', {
                getAudioConFatt:'getAudioConFatt',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),

        }
    }
</script>

<style scoped>

</style>
