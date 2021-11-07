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
        <div v-if="showRecalls">
            <h2>Statistiche Call Center</h2>
            <v-row>
                <v-col cols="12">
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="getStatisticheTelefonate"
                        hide-default-footer
                        class="elevation-1 mt-3"
                    >

                        <template v-slot:item.telefonate="{ item }">
                            <v-chip
                                class="ma-2"
                                color="primary"
                                label
                                style="width: 150px"
                                @click="info(item.anno, item.mese, item.mesenumero)"
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
                                @click="infoAppuntamenti(item.anno, item.mese, item.mesenumero)"
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

                        <template slot="body.append">
                            <tr class="pink--text">
                                <th class="title">Totali</th>
                                <th class="title"></th>
                                <th class="title text-center">{{ sumField('telefonate') }}</th>
                                <th class="title text-center">{{ sumField('appuntamenti') }}</th>
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
    export default {
        name: "AssegnaBudget",
        components: {InfoAppuntamenti, InfoTelefonate},
        data(){
            return {
                showInfo: false,
                showInfoAppuntamenti: false,
                showRecalls: true,
                infoRecalls: {},
                headers: [
                    { text: 'Anno', value: 'anno', class: "indigo white--text" },
                    { text: 'Mese', value: 'mese', class: "indigo white--text" },
                    { text: 'Telefonate fatte', align: 'center', sortable: false, value: 'telefonate', class: "indigo white--text" },
                    { text: 'Appuntamenti', align: 'center', sortable: false, value: 'appuntamenti', class: "indigo white--text" },
                ],

            }
        },

        mounted() {
            this.showRecalls = true;
            this.fetchStatisticheTelefonate();
        },

        methods:{
            ...mapActions('telefonate', {
                fetchStatisticheTelefonate:'fetchStatisticheTelefonate',
            }),

            sumField(key) {
                return this.getStatisticheTelefonate.reduce((a, b) => a + (b[key] || 0), 0)
            },

            info(anno, mese, mesenumero){
                this.showInfo = true;
                this.showRecalls = false;
                this.infoRecalls.anno = anno;
                this.infoRecalls.mese = mese;
                this.infoRecalls.mesenumero = mesenumero;
            },

            infoAppuntamenti(anno, mese, mesenumero){
                this.showInfoAppuntamenti = true;
                this.showRecalls = false;
                this.infoRecalls.anno = anno;
                this.infoRecalls.mese = mese;
                this.infoRecalls.mesenumero = mesenumero;
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
            }

        },

        computed:{
            ...mapGetters('telefonate', {
                getStatisticheTelefonate:'getStatisticheTelefonate',
            }),
        }
    }
</script>

<style scoped>

</style>
