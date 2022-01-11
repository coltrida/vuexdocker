<template>
    <div>
        <conferma-doppione
            v-if="doppioneShow"
            :userOriginario="newClient"
            :listaDoppioni="getListaDoppioni"
            @chiudiConfermaDoppioni = "chiudiConfermaDoppioni"
        />
        <h2>Inserisci Cliente</h2>
        <v-form ref="form"
                v-model="valid"
                lazy-validation>
        <div class="mb-10">

            <v-row>
                <v-col cols="12" md="3" lg="3">
                    <v-text-field
                        v-model="newClient.nome"
                        :rules="nomeRules"
                        label="Nome*"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" lg="3">
                    <v-text-field
                        v-model="newClient.cognome"
                        label="Cognome*"
                        :rules="cognomeRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" lg="3">
                    <v-text-field
                        v-model="newClient.indirizzo"
                        label="Indirizzo*"
                        :rules="indirizzoRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3" lg="3">
                    <v-text-field
                        v-model="newClient.citta"
                        label="Citta*"
                        :rules="cittaRules"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="6" md="1" lg="1">
                    <v-text-field
                        v-model="newClient.cap"
                        label="cap*"
                        type="number"
                        :rules="capRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="6" md="1" lg="1">
                    <v-text-field
                        v-model="newClient.provincia"
                        label="PR*"
                        :rules="provinciaRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <v-text-field
                        v-model="newClient.telefono"
                        label="telefono*"
                        :rules="telefonoRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <v-text-field
                        v-model="newClient.telefono2"
                        label="telefono 2"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <v-text-field
                        v-model="newClient.telefono3"
                        label="telefono 3"
                    ></v-text-field>
                </v-col>

                <v-col cols="6" md="1" lg="1">
                    <v-select
                        v-model="newClient.tipologia_id"
                        item-value="id"
                        item-text="nome"
                        :items="getTipologie"
                        label="tipo"
                    ></v-select>
                </v-col>

                <v-col cols="6" md="3" lg="3">
                    <v-text-field
                        :rules="emailRules"
                        v-model="newClient.mail"
                        label="mail"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="2" lg="2">
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="newClient.datanascita"
                                label="Data di Nascita"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            first-day-of-week="1"
                            locale="ITA"
                            v-model="newClient.datanascita"
                            @input="menu = false"
                        >
                        </v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" md="3" lg="3">
                    <v-select
                        v-model="newClient.marketing_id"
                        item-value="id"
                        item-text="name"
                        :items="getCanali"
                        label="fonte*"
                        :rules="fonteRules"
                        required
                    ></v-select>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <v-select
                        @change="scegliAudio($event)"
                        v-model="newClient.user_id"
                        item-value="id"
                        :readonly="lettura"
                        item-text="name"
                        :items="getAudio"
                        label="Audio*"
                    ></v-select>
                </v-col>

                <v-col cols="12" md="2" lg="2">
                    <v-select
                        v-model="newClient.filiale_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFilialiPerInserimento"
                        label="Filiale*"
                        :rules="filialeRules"
                        required
                    ></v-select>
                </v-col>

                <v-col cols="12" md="3" lg="3">
                    <v-select
                        v-model="newClient.recapito_id"
                        item-value="id"
                        item-text='nome'
                        :items="getRecapiti"
                        label="Recapito"
                    ></v-select>
                </v-col>
            </v-row>

            <v-row class="mb-10">
                <v-col cols="12" md="4" lg="4">
                    <v-select
                        v-model="newClient.medico_id"
                        item-value="id"
                        item-text="fullname"
                        :items="getMedici"
                        label="Medico"
                    ></v-select>
                    <div style="margin: 0;padding: 0; font-size: 12px; color: red; transform: translateY(-20px)" v-if="validaMedico">Seleziona Medico</div>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                    <v-text-field
                        v-model="newClient.luogoNascita"
                        label="Luogo di Nascita"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                    <v-text-field
                        v-model="newClient.codfisc"
                        label="Codice Fiscale"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn @click="aggiungiModifica" color="success"  :disabled="verificaCampi">
                {{nomeBtn}}
            </v-btn>

            <v-btn @click="annulla" color="pink" dark>
                Annulla
            </v-btn>

        </div>
        </v-form>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import ConfermaDoppione from "./ConfermaDoppione";

    export default {
        name: "Inserisci",
        components: {ConfermaDoppione},
        data(){
            return {
                valid: true,
                newClient:{},
                lettura: false,
                menu:false,
                doppioneShow: false,
                nomeRules: [ v => !!v || 'il nome è obbligatorio'],
                cognomeRules: [ v => !!v || 'il cognome è obbligatorio'],
                indirizzoRules: [ v => !!v || "l'indirizzo è obbligatorio"],
                cittaRules: [ v => !!v || "la città è obbligatoria"],
                capRules: [ v => !!v || "il cap è obbligatorio"],
                provinciaRules: [ v => !!v || "la provincia è obbligatoria"],
                telefonoRules: [ v => !!v || "il telefono è obbligatorio"],
                tipoRules: [ v => !!v || "il tipo è obbligatorio"],
                fonteRules: [ v => !!v || "la fonte è obbligatoria"],
                filialeRules: [ v => !!v || "la filiale è obbligatoria"],
                nascitaRules: [ v => !!v || "la data di nascita è obbligatoria"],
                emailRules: [
                    v => (!v || /.+@.+\..+/.test(v)) || 'formato E-mail non valido',
                ],
            }
        },

        mounted(){
            if(this.getRuolo === 'audio'){
                this.fetchAudio();
                this.newClient.user_id = parseInt(this.getIdUser);
                this.fetchRecapitiByAudio(parseInt(this.getIdUser));
                this.fetchFilialiPerInserimento(parseInt(this.getIdUser));
                this.fetchMedici(parseInt(this.getIdUser));
                this.lettura = true;
            } else if(this.getRuolo === 'amministrazione') {
                this.fetchAudioSeguitiDaAmministrativa(parseInt(this.getIdUser));
                this.fetchFilialiPerInserimento(0);
                this.fetchMedici(0);
            } else {
                this.fetchAudio();
                this.fetchFilialiPerInserimento(0);
                this.fetchMedici(0);
            }
            this.fetchTipologie();
            this.fetchCanali();

            if (this.rottaIdClient){
                this.fetchClient(this.rottaIdClient).then(() => {
                    this.newClient = this.getClient;
                });
            }
            /*if(this.getRuolo === 'audio'){
                this.newClient.user_id = parseInt(this.getIdUser);
                this.fetchRecapitiByAudio(parseInt(this.getIdUser));
                this.fetchFilialiPerInserimento(parseInt(this.getIdUser));
                this.lettura = true;
            } else {
                this.fetchRecapiti();
                this.fetchFiliali();
            }
            this.fetchTipologie();
            this.fetchCanali();
            this.fetchAudio();
            this.fetchMedici(this.getIdUser);
            if (this.rottaIdClient){
                this.fetchClient(this.rottaIdClient).then(() => {
                    this.newClient = this.getClient;
                });
            }*/
        },

        watch:{
            rottaIdClient(){
                if (this.rottaIdClient){
                    this.fetchClient(this.rottaIdClient).then(() => {
                        this.newClient = this.getClient;
                    });
                }
            }
        },

        methods:{
            ...mapActions('clients', {
                addClient:'addClient',
                modificaClient:'modificaClient',
                fetchClient:'fetchClient',
                verificaEsisteDoppione:'verificaEsisteDoppione',
            }),

            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
            }),

            ...mapActions('marketing', {
                fetchCanali:'fetchCanali',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
                fetchAudioSeguitiDaAmministrativa:'fetchAudioSeguitiDaAmministrativa',
            }),

            ...mapActions('filiali', {
                fetchFilialiPerInserimento:'fetchFilialiPerInserimento',
                fetchFiliali:'fetchFiliali',
            }),

            ...mapActions('recapiti', {
                fetchRecapiti:'fetchRecapiti',
                fetchRecapitiByAudio:'fetchRecapitiByAudio',
            }),

            ...mapActions('medici', {
                fetchMedici:'fetchMedici',
            }),

            annulla(){
                this.$router.go(-1)
            },

            aggiungiModifica(){
                this.$refs.form.validate();
                let idFiliale = this.newClient.filiale_id;
                this.newClient.eseguito_id = parseInt(this.getIdUser);
                this.verificaEsisteDoppione(this.newClient).then(() => {
                    if (
                        (this.nomeBtn === 'Inserisci' && this.getListaDoppioni.length > 0) ||
                        (this.nomeBtn === 'Modifica' && this.getListaDoppioni.length > 1)
                    )
                    {
                        this.doppioneShow = true;
                    }else {
                        if (this.nomeBtn === 'Modifica') {
                            this.newClient.id = this.getClient.id;
                            this.eseguiModifica(idFiliale);

                        } else {
                            this.eseguiInserimento(idFiliale);
                        }
                    }
                });

            },

            eseguiModifica(idFiliale){
                this.modificaClient(this.newClient).then(() => {
                    this.newClient = {};
                    this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                });
            },

            eseguiInserimento(idFiliale){
                this.addClient(this.newClient).then(() => {
                    this.newClient = {};
                    this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                });
            },

            scegliAudio(idAudio){
                this.newClient.user_id = idAudio;
                this.fetchRecapitiByAudio(idAudio);
                this.fetchFilialiPerInserimento(idAudio);
                this.fetchMedici(idAudio);
            },

            chiudiConfermaDoppioni(scelta)
            {
                this.doppioneShow = false;
                if (scelta > 0){
                    this.newClient.id = scelta;
                    let idFiliale = this.newClient.filiale_id;
                    this.eseguiModifica(idFiliale);
                }
            }

            /*scegliFonte(){
                if(this.newClient.marketing_id == 5) {
                    'Medico'
                } else {
                    'Recapito';
                }
            }*/

        },

        computed:{
            ...mapGetters('login', {
                getRuolo:'getRuolo',
                getIdUser:'getIdUser',
            }),

            ...mapGetters('clients', {
                getClient:'getClient',
                getListaDoppioni:'getListaDoppioni'
            }),

            ...mapGetters('tipologie', {
                getTipologie:'getTipologie',
            }),

            ...mapGetters('marketing', {
                getCanali:'getCanali',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),

            ...mapGetters('filiali', {
                getFilialiPerInserimento:'getFilialiPerInserimento',
            }),

            ...mapGetters('recapiti', {
                getRecapiti:'getRecapiti',
            }),

            ...mapGetters('medici', {
                getMedici:'getMedici',
            }),

            rottaIdClient(){
                return this.$route.params.clientId ? this.$route.params.clientId : null;
            },

            nomeBtn(){
                return this.$route.params.clientId ? 'Modifica' : 'Inserisci';
            },

            nomeLabel(){
                return this.newClient.marketing_id == 5 ? 'Medico' : 'Recapito';
            },

            origineFonte(){
                return this.newClient.marketing_id == 5 ? this.getMedici : this.getRecapiti;
            },

            nomeDaVisualizzare(){
                return this.newClient.marketing_id == 5 ? 'fullname' : 'nome';
            },

            validaMedico(){
                return this.newClient.marketing_id != 5 || (this.newClient.marketing_id == 5 && this.newClient.medico_id) ? false : true;
            },

            verificaCampi(){
                return this.newClient.nome != '' && this.newClient.nome != null
                    && this.newClient.cognome != '' && this.newClient.cognome
                    && this.newClient.indirizzo != '' && this.newClient.indirizzo
                    && this.newClient.citta != '' && this.newClient.citta
                    && this.newClient.cap != '' && this.newClient.cap
                    && this.newClient.provincia != '' && this.newClient.provincia
                    && this.newClient.telefono != '' && this.newClient.telefono
                    && this.newClient.filiale_id != '' && this.newClient.filiale_id
                    && this.newClient.marketing_id != '' && this.newClient.marketing_id
                    && (this.newClient.marketing_id != 5 || (this.newClient.marketing_id == 5 && this.newClient.medico_id)) ? false : true;
            }
        },
    }
</script>

<style scoped>

</style>
