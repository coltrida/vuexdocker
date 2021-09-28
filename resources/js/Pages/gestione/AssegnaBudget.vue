<template>
    <div>
        <h2>Assegna Budget</h2>
        <v-btn @click="assegnaBudget" color="success" dark>
            {{textBtn}}
        </v-btn>
        <div class="py-6">
            <v-row>
                <v-col cols="4">
                    <h3>Audioprotesisti senza Budget</h3>
                    <v-data-table
                        v-model="AudioSelected"
                        :headers="headers"
                        :items="getAudioSenzaBgt"
                        :single-select="singleSelect"
                        hide-default-footer
                        show-select
                        class="elevation-1 mt-3"
                    >
                    </v-data-table>
                </v-col>
                <v-col cols="4">
                    <h3>Budget Anno</h3>
                    <v-row>
                        <v-col cols="5">
                            <v-text-field
                                v-model="assegna.budgetAnno"
                                label="budget"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                v-model="assegna.stipendio"
                                label="stipendio"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field
                                v-model="assegna.provvigione"
                                label="prov"
                            ></v-text-field>
                        </v-col>
                    </v-row>


                </v-col>
                <v-col cols="4">
                    <h3>Utile Annuo</h3>
                    <v-chip class="ma-2" color="orange" >
                        € {{ utile }}
                    </v-chip>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-chip class="ma-2" color="orange" >
                        Verifica: {{ sommaProvvigioni }}
                    </v-chip>

                </v-col>
                    <v-chip class="ma-2" color="orange">
                        Verifica Bgt: {{ sommaBgt }}
                    </v-chip>
                <v-col>

                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="mese in 12" :key="mese">
                    <v-text-field
                        v-model="assegna.mese[mese]"
                        :label="'Bgt '+mese"
                    ></v-text-field>

                    <v-chip class="ma-2" color="primary" text-color="white"
                            v-if="assegna.mese[mese] && assegna.budget"
                    >
                        {{ ( parseFloat(assegna.budget) * parseFloat(assegna.mese[mese]) ) / 100 }}
                    </v-chip>
                </v-col>
            </v-row>

            <h3>Audioprotesisti Con Budget</h3>
            <v-data-table
                :headers="headers2"
                :items="getAudioConBgt"
                hide-default-footer
                class="elevation-1 mt-3"
            >
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        color="blue"
                        small
                        @click="modifica(item, getAudioConBgt.map(function(x) {return x.id; }).indexOf(item.id))"
                    >
                        mdi-pencil
                    </v-icon>
                </template>

                <template slot="body.append">
                    <tr class="pink--text">
                        <th class="title">Totali</th>
                        <th class="title">{{ sumField('budget.budgetAnno') }}</th>
                        <th class="title"></th>
                        <th class="title"></th>
                        <th class="title">{{ sumField('budget.gennaio') }}</th>
                        <th class="title">{{ sumField('budget.febbraio') }}</th>
                        <th class="title">{{ sumField('budget.marzo') }}</th>
                        <th class="title">{{ sumField('budget.aprile') }}</th>
                        <th class="title">{{ sumField('budget.maggio') }}</th>
                        <th class="title">{{ sumField('budget.giugno') }}</th>
                        <th class="title">{{ sumField('budget.luglio') }}</th>
                        <th class="title">{{ sumField('budget.agosto') }}</th>
                        <th class="title">{{ sumField('budget.settembre') }}</th>
                        <th class="title">{{ sumField('budget.ottobre') }}</th>
                        <th class="title">{{ sumField('budget.novembre') }}</th>
                        <th class="title">{{ sumField('budget.dicembre') }}</th>
                    </tr>
                </template>
            </v-data-table>

        </div>
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
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                ],
                headers2: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Bgt Anno', sortable: false, value: 'budget.budgetAnno', class: "indigo white--text" },
                    { text: 'Stipendio', sortable: false, value: 'budget.stipendio', class: "indigo white--text" },
                    { text: 'Provv.', sortable: false, value: 'budget.provvigione', class: "indigo white--text" },
                    { text: 'Genn', sortable: false, value: 'budget.gennaio', class: "indigo white--text" },
                    { text: 'Febb', sortable: false, value: 'budget.febbraio', class: "indigo white--text" },
                    { text: 'Marzo', sortable: false, value: 'budget.marzo', class: "indigo white--text" },
                    { text: 'April', sortable: false, value: 'budget.aprile', class: "indigo white--text" },
                    { text: 'Magg', sortable: false, value: 'budget.maggio', class: "indigo white--text" },
                    { text: 'Giug', sortable: false, value: 'budget.giugno', class: "indigo white--text" },
                    { text: 'Lugl', sortable: false, value: 'budget.luglio', class: "indigo white--text" },
                    { text: 'Agos', sortable: false, value: 'budget.agosto', class: "indigo white--text" },
                    { text: 'Sett', sortable: false, value: 'budget.settembre', class: "indigo white--text" },
                    { text: 'Otto', sortable: false, value: 'budget.ottobre', class: "indigo white--text" },
                    { text: 'Nove', sortable: false, value: 'budget.novembre', class: "indigo white--text" },
                    { text: 'Dice', sortable: false, value: 'budget.dicembre', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text" },
                ],
                assegna: {
                    budgetAnno:0,
                    stipendio: 0,
                    provvigione: 0,
                    mese: []
                }
            }
        },

        mounted() {
            this.fetchAudioConBgtAssegnato();
            this.fetchAudioSenzaBgt();
        },

        methods:{
            ...mapActions('users', {
                fetchAudioConBgtAssegnato:'fetchAudioConBgtAssegnato',
                fetchAudioSenzaBgt:'fetchAudioSenzaBgt',
                assegnaBgt:'assegnaBgt',
                modificaBgt:'modificaBgt',
            }),

            assegnaBudget(){
                this.assegna.idAudio = this.AudioSelected[0].id;
                //console.log(this.assegna)
                if (this.switch){
                    this.modificaBgt(this.assegna).then(() => {
                        this.switch = 0;
                        this.assegna ={
                            budgetAnno:0,
                            stipendio: 0,
                            provvigione: 0,
                            mese: []
                        }
                    });
                } else {
                    this.assegnaBgt(this.assegna).then(() => {
                        this.switch = 0;
                        this.assegna ={
                            budgetAnno:0,
                            stipendio: 0,
                            provvigione: 0,
                            mese: []
                        }
                    });
                }

            },

            modifica(item, indice){
                this.switch = 1;
                this.assegna.idBudget = item.budget.id;
                this.AudioSelected = [];
                this.getAudioSenzaBgt.unshift(item);
                this.getAudioConBgt.splice(indice, 1);
                this.AudioSelected.unshift(item);
                this.assegna.budgetAnno = item.budget.budgetAnno;
                this.assegna.stipendio = item.budget.stipendio;
                this.assegna.provvigione = item.budget.provvigione;
                this.assegna.mese[1] = item.budget.gennaio;
                this.assegna.mese[2] = item.budget.febbraio;
                this.assegna.mese[3] = item.budget.marzo;
                this.assegna.mese[4] = item.budget.aprile;
                this.assegna.mese[5] = item.budget.maggio;
                this.assegna.mese[6] = item.budget.giugno;
                this.assegna.mese[7] = item.budget.luglio;
                this.assegna.mese[8] = item.budget.agosto;
                this.assegna.mese[9] = item.budget.settembre;
                this.assegna.mese[10] = item.budget.ottobre;
                this.assegna.mese[11] = item.budget.novembre;
                this.assegna.mese[12] = item.budget.dicembre;
            },

            sumField(key) {
                return this.getAudioConBgt.reduce((a, b) => parseInt(a) + (parseInt(b[key]) || 0), 0)
            }
        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
                getAudioSenzaBgt:'getAudioSenzaBgt',
            }),

            sommaProvvigioni(){
                return this.assegna.mese.reduce((a, b) => parseInt(a) + parseInt(b), 0) + '%';
            },

            sommaBgt(){
                return ( parseFloat(this.sommaProvvigioni) * parseFloat(this.assegna.budgetAnno) ) / 100 ;
            },

            utile(){
                return parseFloat(this.assegna.budgetAnno) -
                    ( parseFloat(this.assegna.stipendio) * 12 ) -
                    ( ( parseFloat(this.assegna.budgetAnno) * parseFloat(this.assegna.provvigione) ) / 100 );
            },

            textBtn(){
                return this.switch ? 'modifica' : 'inserisci';
            }
        }
    }
</script>

<style scoped>

</style>
