<template>
    <div>
        <div v-if="showInfo">
            <info-telefonate
                :infoRecalls="infoRecalls"
                @chiudiInfo = "chiudiInfo"
            />
        </div>
        <div v-if="showInfoAppuntamenti">
            <info-appuntamenti
                :infoRecalls="infoRecalls"
                @chiudiInfoAppuntamenti = "chiudiInfoAppuntamenti"
            />
        </div>
        <div v-if="showInfoIntervenuti">
            <info-intervenuti
                :infoRecalls="infoRecalls"
                @chiudiInfoIntervenuti = "chiudiInfoIntervenuti"
            />
        </div>
        <div v-if="showRecalls">
            <v-row>
                <v-col>
                    <h2>Statistiche Call Center</h2>
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
            <v-row>
                <v-col cols="12" v-for="audio in getStatisticheTelefonate" :key="audio.id">
                    <h3>{{audio.name}}</h3>
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="audio.risultati_telefonate"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >

                        <template v-slot:item.telefonate="{ item }">
                            <!--{{item}}-->
                            <v-chip
                                class="ma-2"
                                color="primary"
                                label
                                style="width: 150px"
                                @click="info(item.anno, item.mese, item.mesenumero, audio.id)"
                            >
                                <v-row>
                                    <v-col>
                                        <v-icon left>
                                            mdi-information
                                        </v-icon>
                                    </v-col>
                                    <v-col class="pl-8">
                                        {{item.telefonate}}
                                    </v-col>
                                </v-row>

                            </v-chip>
                        </template>

                        <template v-slot:item.appuntamenti="{ item }">
                            <v-chip
                                class="ma-2"
                                color="primary"
                                label
                                style="width: 150px"
                                @click="infoAppuntamenti(item.anno, item.mese, item.mesenumero, audio.id)"
                            >
                                <v-row>
                                    <v-col>
                                        <v-icon left>
                                            mdi-information
                                        </v-icon>
                                    </v-col>
                                    <v-col class="pl-8">
                                        {{item.appuntamenti}}
                                    </v-col>
                                </v-row>

                            </v-chip>
                        </template>

                        <template v-slot:item.intervenuti="{ item }">
                            <v-chip
                                class="ma-2"
                                color="primary"
                                label
                                style="width: 150px"
                                @click="infoIntervenuti(item.anno, item.mese, item.mesenumero, audio.id)"
                            >
                                <v-row>
                                    <v-col>
                                        <v-icon left>
                                            mdi-information
                                        </v-icon>
                                    </v-col>
                                    <v-col class="pl-8">
                                        {{item.intervenuti}}
                                    </v-col>
                                </v-row>

                            </v-chip>
                        </template>

                        <template slot="body.append">
                            <tr class="pink--text">
                                <th class="title">Totali</th>
                                <th class="title text-center">{{ sumField('telefonate') }}</th>
                                <th class="title text-center">{{ sumField('appuntamenti') }}</th>
                                <th class="title text-center">{{ sumField('intervenuti') }}</th>
                            </tr>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import InfoTelefonate from "./InfoTelefonate";
    import InfoAppuntamenti from "./InfoAppuntamenti";
    import InfoIntervenuti from "./InfoIntervenuti";
    export default {
        name: "AssegnaBudget",
        components: {InfoIntervenuti, InfoAppuntamenti, InfoTelefonate},
        data(){
            return {
                ricerca:{},
                showInfo: false,
                showInfoAppuntamenti: false,
                showInfoIntervenuti: false,
                showRecalls: true,
                infoRecalls: {},
                headers: [
                    { text: 'Mese', value: 'mese', class: "indigo white--text" },
                    { text: 'Telefonate fatte', align: 'center', sortable: false, value: 'telefonate', class: "indigo white--text" },
                    { text: 'Appuntamenti', align: 'center', sortable: false, value: 'appuntamenti', class: "indigo white--text" },
                    { text: 'Intervenuti', align: 'center', sortable: false, value: 'intervenuti', class: "indigo white--text" },
                ],

            }
        },

        mounted() {
            this.showRecalls = true;
            this.ricerca.anno = '';
            this.$store.commit('telefonate/resetStatisticheTelefonate');
        },

        methods:{
            ...mapActions('telefonate', {
                fetchStatisticheTelefonate:'fetchStatisticheTelefonate',
            }),

            sumField(key) {
                return this.getStatisticheTelefonate.reduce((a, b) => a + (b[key] || 0), 0)
            },

            info(anno, mese, mesenumero, idTelefonante){
                this.showInfo = true;
                this.showRecalls = false;
                this.infoRecalls.anno = anno;
                this.infoRecalls.mese = mese;
                this.infoRecalls.mesenumero = mesenumero;
                this.infoRecalls.idTelefonante = idTelefonante;
            },

            infoAppuntamenti(anno, mese, mesenumero, idTelefonante){
                this.showInfoAppuntamenti = true;
                this.showRecalls = false;
                this.infoRecalls.anno = anno;
                this.infoRecalls.mese = mese;
                this.infoRecalls.mesenumero = mesenumero;
                this.infoRecalls.idTelefonante = idTelefonante;
            },

            infoIntervenuti(anno, mese, mesenumero, idTelefonante){
                this.showInfoIntervenuti = true;
                this.showRecalls = false;
                this.infoRecalls.anno = anno;
                this.infoRecalls.mese = mese;
                this.infoRecalls.mesenumero = mesenumero;
                this.infoRecalls.idTelefonante = idTelefonante;
            },

            chiudiInfo(){
                this.showInfo = false;
                this.showRecalls= true;
                this.infoRecalls = {};
            },

            chiudiInfoAppuntamenti(){
                this.showInfoAppuntamenti = false;
                this.showRecalls= true;
                this.infoRecalls = {};
            },

            chiudiInfoIntervenuti(){
                this.showInfoIntervenuti = false;
                this.showRecalls= true;
                this.infoRecalls = {};
            },

            selezionaAnno(){
                this.fetchStatisticheTelefonate(this.ricerca);
            },

        },

        computed:{
            ...mapGetters('telefonate', {
                getStatisticheTelefonate:'getStatisticheTelefonate',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
            }),
        }
    }
</script>

<style scoped>

</style>
