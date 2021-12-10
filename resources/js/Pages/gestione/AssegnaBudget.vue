<template>
    <div>
        <v-row>
            <v-col>
                <h2>Assegna Budget</h2>
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

        <div class="py-6">
            <v-row v-if="!$vuetify.breakpoint.xs">
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
                        <v-col cols="4">
                            <v-select
                                v-model="assegna.anno"
                                :items="getAnni"
                                label="Anno"
                            ></v-select>
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

            </v-row>

            <v-row v-if="!$vuetify.breakpoint.xs">
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
                <v-col v-for="mese in 12" :key="mese" cols="3" md="" lg="">
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

                <template v-slot:item.molti_budget[0].budgetAnno="{ item }">
                    {{item.molti_budget[0].budgetAnno.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].gennaio="{ item }">
                    {{item.molti_budget[0].gennaio.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].febbraio="{ item }">
                    {{item.molti_budget[0].febbraio.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].marzo="{ item }">
                    {{item.molti_budget[0].marzo.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].aprile="{ item }">
                    {{item.molti_budget[0].aprile.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].maggio="{ item }">
                    {{item.molti_budget[0].maggio.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].giugno="{ item }">
                    {{item.molti_budget[0].giugno.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].luglio="{ item }">
                    {{item.molti_budget[0].luglio.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].agosto="{ item }">
                    {{item.molti_budget[0].agosto.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].settembre="{ item }">
                    {{item.molti_budget[0].settembre.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].ottobre="{ item }">
                    {{item.molti_budget[0].ottobre.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].novembre="{ item }">
                    {{item.molti_budget[0].novembre.toLocaleString('it')}}
                </template>

                <template v-slot:item.molti_budget[0].dicembre="{ item }">
                    {{item.molti_budget[0].dicembre.toLocaleString('it')}}
                </template>

                <template slot="body.append" v-if="!$vuetify.breakpoint.xs">
                    <tr class="pink--text">
                        <th class="title">Totali</th>
                        <th></th>
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
                ricerca:{},
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
                    { text: 'Anno', sortable: false, value: 'molti_budget[0].anno', class: "indigo white--text" },
                    { text: 'Bgt Anno', sortable: false, value: 'molti_budget[0].budgetAnno', class: "indigo white--text" },
                    { text: 'Genn', sortable: false, value: 'molti_budget[0].gennaio', class: "indigo white--text" },
                    { text: 'Febb', sortable: false, value: 'molti_budget[0].febbraio', class: "indigo white--text" },
                    { text: 'Marzo', sortable: false, value: 'molti_budget[0].marzo', class: "indigo white--text" },
                    { text: 'April', sortable: false, value: 'molti_budget[0].aprile', class: "indigo white--text" },
                    { text: 'Magg', sortable: false, value: 'molti_budget[0].maggio', class: "indigo white--text" },
                    { text: 'Giug', sortable: false, value: 'molti_budget[0].giugno', class: "indigo white--text" },
                    { text: 'Lugl', sortable: false, value: 'molti_budget[0].luglio', class: "indigo white--text" },
                    { text: 'Agos', sortable: false, value: 'molti_budget[0].agosto', class: "indigo white--text" },
                    { text: 'Sett', sortable: false, value: 'molti_budget[0].settembre', class: "indigo white--text" },
                    { text: 'Otto', sortable: false, value: 'molti_budget[0].ottobre', class: "indigo white--text" },
                    { text: 'Nove', sortable: false, value: 'molti_budget[0].novembre', class: "indigo white--text" },
                    { text: 'Dice', sortable: false, value: 'molti_budget[0].dicembre', class: "indigo white--text" },
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

        },

        methods:{
            ...mapActions('users', {
                fetchAudioConBgtAssegnato:'fetchAudioConBgtAssegnato',
                fetchAudioSenzaBgt:'fetchAudioSenzaBgt',
                assegnaBgt:'assegnaBgt',
                modificaBgt:'modificaBgt',
            }),

            assegnaBudget(){
                this.assegna.anno = this.ricerca.anno;
                this.assegna.idAudio = this.AudioSelected[0].id;
                if (this.switch){
                    this.modificaBgt(this.assegna).then(() => {
                        this.switch = 0;
                        this.assegna ={
                            budgetAnno:0,
                            anno:'',
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
                            anno:'',
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
                this.assegna.idBudget = item.molti_budget[0].id;
                this.AudioSelected = [];
                this.getAudioSenzaBgt.unshift(item);
                this.getAudioConBgt.splice(indice, 1);
                this.AudioSelected.unshift(item);
                this.assegna.budgetAnno = item.molti_budget[0].budgetAnno;
                this.assegna.stipendio = item.molti_budget[0].stipendio;
                this.assegna.provvigione = item.molti_budget[0].provvigione;
                this.assegna.mese[0] = item.molti_budget[0].gennaio;
                this.assegna.mese[1] = item.molti_budget[0].febbraio;
                this.assegna.mese[2] = item.molti_budget[0].marzo;
                this.assegna.mese[3] = item.molti_budget[0].aprile;
                this.assegna.mese[4] = item.molti_budget[0].maggio;
                this.assegna.mese[5] = item.molti_budget[0].giugno;
                this.assegna.mese[6] = item.molti_budget[0].luglio;
                this.assegna.mese[7] = item.molti_budget[0].agosto;
                this.assegna.mese[8] = item.molti_budget[0].settembre;
                this.assegna.mese[9] = item.molti_budget[0].ottobre;
                this.assegna.mese[10] = item.molti_budget[0].novembre;
                this.assegna.mese[11] = item.molti_budget[0].dicembre;

                this.percentuale.mese[0] = ((item.molti_budget[0].gennaio / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[1] = ((item.molti_budget[0].febbraio / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[2] = ((item.molti_budget[0].marzo / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[3] = ((item.molti_budget[0].aprile / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[4] = ((item.molti_budget[0].maggio / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[5] = ((item.molti_budget[0].giugno / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[6] = ((item.molti_budget[0].luglio / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[7] = ((item.molti_budget[0].agosto / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[8] = ((item.molti_budget[0].settembre / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[9] = ((item.molti_budget[0].ottobre / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[10] = ((item.molti_budget[0].novembre / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
                this.percentuale.mese[11] = ((item.molti_budget[0].dicembre / item.molti_budget[0].budgetAnno) * 100).toFixed(0);
            },

            modificaBgtMese(percent, mese){
                this.assegna.mese[mese-1] =
                    ((parseFloat(this.assegna.budgetAnno) * percent / 100).toFixed(0))
            },

            selezionaAnno(){
                this.totAnno = 0;
                this.totGennaio = 0;
                this.totFebbraio = 0;
                this.totMarzo = 0;
                this.totAprile = 0;
                this.totMaggio = 0;
                this.totGiugno = 0;
                this.totLuglio = 0;
                this.totAgosto = 0;
                this.totSettembre = 0;
                this.totOttobre = 0;
                this.totNovembre = 0;
                this.totDicembre = 0;

                this.fetchAudioConBgtAssegnato(this.ricerca).then(() => {
                    this.getAudioConBgt.forEach(ele => {
                        this.totAnno += parseInt(ele.molti_budget[0].budgetAnno);
                        this.totGennaio += parseInt(ele.molti_budget[0].gennaio);
                        this.totFebbraio += parseInt(ele.molti_budget[0].febbraio);
                        this.totMarzo += parseInt(ele.molti_budget[0].marzo);
                        this.totAprile += parseInt(ele.molti_budget[0].aprile);
                        this.totMaggio += parseInt(ele.molti_budget[0].maggio);
                        this.totGiugno += parseInt(ele.molti_budget[0].giugno);
                        this.totLuglio += parseInt(ele.molti_budget[0].luglio);
                        this.totAgosto += parseInt(ele.molti_budget[0].agosto);
                        this.totSettembre += parseInt(ele.molti_budget[0].settembre);
                        this.totOttobre += parseInt(ele.molti_budget[0].ottobre);
                        this.totNovembre += parseInt(ele.molti_budget[0].novembre);
                        this.totDicembre += parseInt(ele.molti_budget[0].dicembre);
                    });
                });
                this.fetchAudioSenzaBgt(this.ricerca);
            },

        },

        computed:{
            ...mapGetters('users', {
                getAudioConBgt:'getAudioConBgt',
                getAudioSenzaBgt:'getAudioSenzaBgt',
            }),

            ...mapGetters('clients', {
                getAnni: 'getAnni',
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
