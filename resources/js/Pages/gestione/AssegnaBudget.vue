<template>
    <div>
        <h2>Assegna Budget</h2>
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
                                @input="bgtMese()"
                                v-model="assegna.budgetAnno"
                                label="budget"
                            ></v-text-field>
                        </v-col>
                        <!--<v-col cols="4">
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
                        </v-col>-->
                    </v-row>


                </v-col>
                <v-col cols="4">
                    <!--<h3>Utile Annuo</h3>
                    <v-chip class="ma-2" color="orange" >
                        € {{ utile }}
                    </v-chip>-->
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="4">
                    <v-chip class="ma-2" color="orange" >
                        Verifica: {{ sommaProvvigioni }}
                    </v-chip>
                </v-col>
                <v-col cols="4">
                    <!--<v-chip class="ma-2" color="orange">
                        Verifica Bgt: {{ sommaBgt }}
                    </v-chip>-->
                </v-col>
                <v-col cols="4">
                    <v-btn @click="assegnaBudget" color="success" dark>
                        {{textBtn}}
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="mese in 12" :key="mese">
                    <v-text-field
                        :hint="nomeMese[mese-1]"
                        readonly
                        persistent-hint
                        v-model="assegna.mese[mese-1]"
                    ></v-text-field>
                    <v-text-field
                        @input="modificaBgtMese($event, mese)"
                        @change="modificaBgtMese($event, mese)"
                        append-icon="%"
                        type="number"
                        v-model="percentuale.mese[mese-1]"
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

                <template v-slot:item.budget.budgetAnno="{ item }">
                    {{item.budget.budgetAnno.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.gennaio="{ item }">
                    {{item.budget.gennaio.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.febbraio="{ item }">
                    {{item.budget.febbraio.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.marzo="{ item }">
                    {{item.budget.marzo.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.aprile="{ item }">
                    {{item.budget.aprile.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.maggio="{ item }">
                    {{item.budget.maggio.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.giugno="{ item }">
                    {{item.budget.giugno.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.luglio="{ item }">
                    {{item.budget.luglio.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.agosto="{ item }">
                    {{item.budget.agosto.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.settembre="{ item }">
                    {{item.budget.settembre.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.ottobre="{ item }">
                    {{item.budget.ottobre.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.novembre="{ item }">
                    {{item.budget.novembre.toLocaleString('it')}}
                </template>

                <template v-slot:item.budget.dicembre="{ item }">
                    {{item.budget.dicembre.toLocaleString('it')}}
                </template>

                <template slot="body.append">
                    <tr class="pink--text">
                        <th class="title">Totali</th>
                        <th>{{ totAnno.toLocaleString('it') }}</th>
                        <th>{{ totGennaio.toLocaleString('it') }}</th>
                        <th>{{ totFebbraio.toLocaleString('it') }}</th>
                        <th>{{ totMarzo.toLocaleString('it') }}</th>
                        <th>{{ totAprile.toLocaleString('it') }}</th>
                        <th>{{ totMaggio.toLocaleString('it') }}</th>
                        <th>{{ totGiugno.toLocaleString('it') }}</th>
                        <th>{{ totLuglio.toLocaleString('it') }}</th>
                        <th>{{ totAgosto.toLocaleString('it') }}</th>
                        <th>{{ totSettembre.toLocaleString('it') }}</th>
                        <th>{{ totOttobre.toLocaleString('it') }}</th>
                        <th>{{ totNovembre.toLocaleString('it') }}</th>
                        <th>{{ totDicembre.toLocaleString('it') }}</th>
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
                totAnno: 0,
                totGennaio: 0,
                totFebbraio: 0,
                totMarzo: 0,
                totAprile: 0,
                totMaggio: 0,
                totGiugno: 0,
                totLuglio: 0,
                totAgosto: 0,
                totSettembre: 0,
                totOttobre: 0,
                totNovembre: 0,
                totDicembre: 0,
                headers: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                ],
                headers2: [
                    { text: 'Nome', align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Bgt Anno', sortable: false, value: 'budget.budgetAnno', class: "indigo white--text" },
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
                },
                percentuale: {
                    mese: [8,10,6,10,10,8,8,4,8,10,10,8]
                },
                nomeMese:['gennaio', 'febbraio', 'marzo', 'apire', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
            }
        },

        mounted() {
            this.fetchAudioConBgtAssegnato().then(() => {
                this.getAudioConBgt.forEach(ele => {
                    this.totAnno += parseInt(ele.budget.budgetAnno);
                    this.totGennaio += parseInt(ele.budget.gennaio);
                    this.totFebbraio += parseInt(ele.budget.febbraio);
                    this.totMarzo += parseInt(ele.budget.marzo);
                    this.totAprile += parseInt(ele.budget.aprile);
                    this.totMaggio += parseInt(ele.budget.maggio);
                    this.totGiugno += parseInt(ele.budget.giugno);
                    this.totLuglio += parseInt(ele.budget.luglio);
                    this.totAgosto += parseInt(ele.budget.agosto);
                    this.totSettembre += parseInt(ele.budget.settembre);
                    this.totOttobre += parseInt(ele.budget.ottobre);
                    this.totNovembre += parseInt(ele.budget.novembre);
                    this.totDicembre += parseInt(ele.budget.dicembre);
                });
            });
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
                if (this.switch){
                    this.modificaBgt(this.assegna).then(() => {
                        this.switch = 0;
                        this.assegna ={
                            budgetAnno:0,
                            stipendio: 0,
                            provvigione: 0,
                            mese: []
                        };
                        this.percentuale = {
                            mese : []
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
                        };
                        this.percentuale = {
                            mese : []
                        }
                    });
                }

            },

            bgtMese(){
                for (let i=0; i<12; i++){
                    this.assegna.mese[i] =
                        ((parseFloat(this.assegna.budgetAnno) * this.percentuale.mese[i]) / 100).toFixed(0)
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
                this.assegna.mese[0] = item.budget.gennaio;
                this.assegna.mese[1] = item.budget.febbraio;
                this.assegna.mese[2] = item.budget.marzo;
                this.assegna.mese[3] = item.budget.aprile;
                this.assegna.mese[4] = item.budget.maggio;
                this.assegna.mese[5] = item.budget.giugno;
                this.assegna.mese[6] = item.budget.luglio;
                this.assegna.mese[7] = item.budget.agosto;
                this.assegna.mese[8] = item.budget.settembre;
                this.assegna.mese[9] = item.budget.ottobre;
                this.assegna.mese[10] = item.budget.novembre;
                this.assegna.mese[11] = item.budget.dicembre;

                this.percentuale.mese[0] = ((item.budget.gennaio / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[1] = ((item.budget.febbraio / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[2] = ((item.budget.marzo / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[3] = ((item.budget.aprile / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[4] = ((item.budget.maggio / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[5] = ((item.budget.giugno / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[6] = ((item.budget.luglio / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[7] = ((item.budget.agosto / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[8] = ((item.budget.settembre / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[9] = ((item.budget.ottobre / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[10] = ((item.budget.novembre / item.budget.budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[11] = ((item.budget.dicembre / item.budget.budgetAnno) * 100).toFixed(0);
            },

            modificaBgtMese(percent, mese){
                this.assegna.mese[mese-1] =
                    ((parseFloat(this.assegna.budgetAnno) * percent / 100).toFixed(0))
            }

        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
                getAudioSenzaBgt:'getAudioSenzaBgt',
            }),

            sommaProvvigioni(){
                return this.percentuale.mese.reduce((a, b) => parseInt(a) + parseInt(b), 0) + '%';
            },

            /*sommaBgt(){
               // return ( parseFloat(this.sommaProvvigioni) * parseFloat(this.assegna.budgetAnno) ) / 100 ;
                console.log(this.assegna.mese);
               // return this.assegna.mese.reduce((a, b) => parseInt(a) + parseInt(b), 0)
                return parseInt(this.assegna.mese[0]) + parseInt(this.assegna.mese[1])
            },*/

            /*utile(){
                return parseFloat(this.assegna.budgetAnno) -
                    ( parseFloat(this.assegna.stipendio) * 12 ) -
                    ( ( parseFloat(this.assegna.budgetAnno) * parseFloat(this.assegna.provvigione) ) / 100 );
            },*/

            textBtn(){
                return this.switch ? 'modifica' : 'inserisci';
            }
        }
    }
</script>

<style scoped>

</style>
