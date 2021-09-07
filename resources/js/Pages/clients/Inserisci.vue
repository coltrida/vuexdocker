<template>
    <div>
        <h2>Inserisci Cliente</h2>
        <v-form ref="form"
                v-model="valid"
                lazy-validation>
        <v-container class="mb-10">

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
                        label="tipo*"
                        :rules="tipoRules"
                        required
                    ></v-select>
                </v-col>

                <v-col cols="6" md="3" lg="3">
                    <v-text-field
                        v-model="newClient.mail"
                        label="mail"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="2" lg="2">
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="newClient.datanascita"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="newClient.datanascita"
                                label="Data di Nascita*"
                                prepend-icon="mdi-calendar"
                                :rules="nascitaRules"
                                required
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="newClient.datanascita"
                            no-title
                            scrollable
                        >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(newClient.datanascita)"
                            >
                                OK
                            </v-btn>
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
                        item-text="nome"
                        :items="origineFonte"
                        :label="nomeLabel"
                    ></v-select>
                </v-col>
            </v-row>

            <v-row class="mb-10">
                <v-col cols="12" md="6" lg="6">
                    <v-text-field
                        v-model="newClient.luogoNascita"
                        label="Luogo di Nascita"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" lg="6">
                    <v-text-field
                        v-model="newClient.codfisc"
                        label="Codice Fiscale"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn @click="aggiungiModifica" color="success" dark>
                {{nomeBtn}}
            </v-btn>

            <v-btn @click="annulla" color="pink" dark>
                Annulla
            </v-btn>

        </v-container>
        </v-form>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Inserisci",

        data(){
            return {
                valid: true,
                newClient:{},
                lettura: false,
                menu:false,
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
            }
        },

        mounted(){
        //    console.log(this.$vuetify.breakpoint.name);
            if(this.getRuolo === 'audio'){
                this.newClient.user_id = parseInt(this.getIdUser);
                this.lettura = true;
            }
            this.fetchTipologie();
            this.fetchCanali();
            this.fetchAudio();
            this.fetchFilialiPerInserimento();
            this.fetchRecapiti();
            this.fetchMedici(this.getIdUser);
            if (this.rottaIdClient){
                this.fetchClient(this.rottaIdClient).then(() => {
                    this.newClient = this.getClient;
                });
            }
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
            }),

            ...mapActions('tipologie', {
                fetchTipologie:'fetchTipologie',
            }),

            ...mapActions('marketing', {
                fetchCanali:'fetchCanali',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            ...mapActions('filiali', {
                fetchFilialiPerInserimento:'fetchFilialiPerInserimento',
            }),

            ...mapActions('recapiti', {
                fetchRecapiti:'fetchRecapiti',
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
                if (this.getClient.nome) {
                    this.newClient.id = this.getClient.id;
                    this.modificaClient(this.newClient).then(() => {
                        this.newClient = {};
                        this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                        /*if(this.getRuolo === 'audio') {
                            this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                        } else {
                            this.$router.push({ name: 'clients' });
                        }*/
                    });
                } else {
                    this.addClient(this.newClient).then(() => {
                        this.newClient = {};
                        this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                        /*if(this.getRuolo === 'audio') {
                            this.$router.push({name: 'clientsFiliale', params: {filialeId: idFiliale}});
                        } else {
                            this.$router.push({ name: 'clients' });
                        }*/
                    });
                }
            },

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
            }
        },
    }
</script>

<style scoped>

</style>
