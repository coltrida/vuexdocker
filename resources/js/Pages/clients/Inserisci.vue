<template>
    <div>
        <h2>Inserisci Cliente</h2>
        <v-container>

            <v-row>
                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newClient.nome"
                        label="Nome"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newClient.cognome"
                        label="Cognome"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newClient.indirizzo"
                        label="Indirizzo"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newClient.citta"
                        label="Citta"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="newClient.cap"
                        label="cap"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-text-field
                        v-model="newClient.provincia"
                        label="PR"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="newClient.telefono"
                        label="telefono"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="newClient.telefono2"
                        label="telefono 2"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-text-field
                        v-model="newClient.telefono3"
                        label="telefono 3"
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="1"
                    sm="1"
                >
                    <v-select
                        v-model="newClient.tipologia_id"
                        item-value="id"
                        item-text="nome"
                        :items="getTipologie"
                        label="tipo"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-text-field
                        v-model="newClient.mail"
                        label="mail"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="2"
                    sm="2"
                >
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
                                label="Data di Nascita  "
                                prepend-icon="mdi-calendar"
                                readonly
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

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-select
                        v-model="newClient.marketing_id"
                        item-value="id"
                        item-text="name"
                        :items="getCanali"
                        label="fonte"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="newClient.user_id"
                        item-value="id"
                        item-text="name"
                        :items="getAudio"
                        label="Audio"
                    ></v-select>
                </v-col>

                <v-col
                    cols="2"
                    sm="2"
                >
                    <v-select
                        v-model="newClient.filiale_id"
                        item-value="id"
                        item-text="nome"
                        :items="getFilialiPerInserimento"
                        label="Filiale"
                    ></v-select>
                </v-col>

                <v-col
                    cols="3"
                    sm="3"
                >
                    <v-select
                        v-model="newClient.recapito_id"
                        item-value="id"
                        item-text="nome"
                        :items="getRecapiti"
                        label="Recapito"
                    ></v-select>
                </v-col>
            </v-row>

            <v-btn @click="aggiungiModifica" color="success" dark>
                {{nomeBtn}}
            </v-btn>

        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Inserisci",

        data(){
            return {
                newClient:{},
                menu:false
            }
        },

        mounted(){
            this.fetchTipologie();
            this.fetchCanali();
            this.fetchAudio();
            this.fetchFilialiPerInserimento();
            this.fetchRecapiti();
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

            aggiungiModifica(){
                if (this.getClient.nome) {
                    this.newClient.id = this.getClient.id;
                    this.modificaClient(this.newClient).then(() => {
                        this.newClient = {};
                        this.$router.push({ name: 'clients' });
                    });
                } else {
                    this.addClient(this.newClient).then(() => {
                        this.newClient = {};
                        this.$router.push({ name: 'clients' });
                    });
                }

            },

        },

        computed:{
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

            rottaIdClient(){
                return this.$route.params.clientId ? this.$route.params.clientId : null;
            },

            nomeBtn(){
                return this.$route.params.clientId ? 'Modifica' : 'Inserisci';
            }
        },
    }
</script>

<style scoped>

</style>
