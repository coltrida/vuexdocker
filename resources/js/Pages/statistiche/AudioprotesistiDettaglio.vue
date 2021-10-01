<template>
    <div class="py-10">
        <h2>Dettaglio Audioprotesisti</h2>

            <v-card color="blue lighten-4" v-for="audio in getAudioConFatt" :key="audio.id" class="mb-7">
                <v-row class="pa-5">
                    <!--<v-col><h2>{{audio.name}}</h2></v-col>-->
                    <v-col><h4>Vendite su Pc: {{audio.delta.premio}} %</h4></v-col>
                    <v-col><h4>Nr. Pc: {{audio.delta.provvigione}}</h4></v-col>
                    <v-col><h4>Nr. Cl: {{audio.delta.stipendio}}</h4></v-col>
                    <v-col><h4>Media v.: {{audio.fatturati.provvigione}}</h4></v-col>
                    <v-col><h4>Prove aperte: {{audio.prova_count}}</h4></v-col>
                    <v-col><h4>New Vendite: {{audio.nuova}}</h4></v-col>
                    <v-col><h4>Riacquisti: {{audio.riacquisto}}</h4></v-col>

                    <v-col>
                        <h4>
                            T.M.Chiusura: {{calcolaMediaGiorniProva(audio.prova_finalizzata)}} gg.
                        </h4>
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
            this.fetchAudioConFatt();
        },

        methods:{
            ...mapActions('users', {
                fetchAudioConFatt:'fetchAudioConFatt',
            }),

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

        }
    }
</script>

<style scoped>

</style>
