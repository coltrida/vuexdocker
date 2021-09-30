<template>
    <div>
        <h2>Strumentazione</h2>
        <v-row>
            <v-col>
                <v-text-field
                    v-model="newStrumento.nome"
                    label="Nome*"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="newStrumento.matricola"
                    label="Matricola*"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="newStrumento.fornitore"
                    label="Fornitore*"
                    required
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn @click="inserisciStrumentazione" color="success" dark>
                    {{btnName}}
                </v-btn>
            </v-col>
        </v-row>

        <v-btn @click="associa" color="success" dark class="mb-6">
            Associa
        </v-btn>
            <v-row>
                <v-col cols="6">
                    <h3>Strumentazione</h3>
                    <v-data-table
                        dense
                        v-model="strumentoDaAssociare.id"
                        item-key="id"
                        value="id"
                        :headers="headers4"
                        :items="getStrumenti"
                        hide-default-footer
                        single-select
                        show-select
                        class="elevation-1 mb-6"
                    >
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                color="red"
                                small
                                @click="eliminaStrumentazione(item.id)"
                            >
                                mdi-delete
                            </v-icon>
                            <v-icon
                                color="blue"
                                small
                                @click="modificaStrumentazione(item)"
                            >
                                mdi-pencil
                            </v-icon>
                        </template>
                    </v-data-table>

                    <v-row>
                        <v-col>
                            <h3>Filiali</h3>
                            <v-data-table
                                dense
                                v-model="strumentoDaAssociare.filiale_id"
                                :headers="headers1"
                                :items="getFiliali"
                                hide-default-footer
                                :single-select="singleSelect"
                                show-select
                                class="elevation-1"
                            >
                            </v-data-table>
                        </v-col>
                        <v-col>
                            <h3>Audioprotesisti</h3>
                            <v-data-table
                                dense
                                v-model="strumentoDaAssociare.user_id"
                                :headers="headers2"
                                :items="getAudio"
                                hide-default-footer
                                :single-select="singleSelect"
                                show-select
                                class="elevation-1"
                            >
                            </v-data-table>
                        </v-col>
                        <v-col>
                            <h3>Medici</h3>
                            <v-data-table
                                dense
                                v-model="strumentoDaAssociare.medico_id"
                                :headers="headers1"
                                :items="getMedici"
                                hide-default-footer
                                :single-select="singleSelect"
                                show-select
                                class="elevation-1"
                            >
                            </v-data-table>
                        </v-col>
                    </v-row>

                </v-col>

                <v-col cols="6">
                    <h3>Associazioni</h3>
                    <div v-for="filiale in getAssociazioni" :key="filiale.id">
                        <v-data-table
                            dense
                            :headers="headers3"
                            :items="filiale.strumentazione"
                            hide-default-footer
                            class="elevation-1 mb-4"
                        >
                            <template v-slot:item.destinatario="{ item }">
                                <div v-if="item.user_id">
                                    {{item.user.name}}
                                </div>
                                <div v-if="item.medico_id">
                                    {{item.medico.nome}}
                                </div>
                            </template>

                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    color="red"
                                    small
                                    @click="elimina(item.pivot.id)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>

                            <template v-slot:header.nome="{ header }">
                                {{ filiale.nome }}
                            </template>
                        </v-data-table>
                    </div>

                </v-col>
            </v-row>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Strumentazione",

        data(){
            return {
                modificaSwitch: false,
                newStrumento: {},
                strumentoDaAssociare: {},
                singleSelect: true,
                headers1: [
                    { text: 'Nome', align: 'start', value: 'nome', class: "indigo white--text" },
                ],
                headers2: [
                    { text: 'Nome', align: 'start', value: 'name', class: "indigo white--text" },
                ],
                headers3: [
                    {text: 'Nome', width: 150, align: 'start', value: 'nome', class: "indigo white--text" },
                    { text: 'Matricola', width: 200, align: 'start', value: 'matricola', class: "indigo white--text" },
                    { text: 'Fornitore', width: 150, align: 'start', value: 'fornitore', class: "indigo white--text" },
                    { text: 'Destinatario', width: 150, align: 'start', value: 'destinatario', class: "indigo white--text" },
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
                headers4: [
                    { text: 'Nome', align: 'start', value: 'nome', class: "indigo white--text" },
                    { text: 'Matricola', align: 'start', value: 'matricola', class: "indigo white--text" },
                    { text: 'Fornitore', align: 'start', value: 'fornitore', class: "indigo white--text" },
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted(){
            this.fetchFiliali();
            this.fetchAssociazioni();
            this.fetchAudio();
            this.fetchTuttiMedici();
            this.fetchStrumenti();
        },

        methods:{
            ...mapActions('filiali', {
                fetchFiliali:'fetchFiliali',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            ...mapActions('medici', {
                fetchTuttiMedici:'fetchTuttiMedici',
            }),

            ...mapActions('strumentazione', {
                fetchStrumenti:'fetchStrumenti',
                addStrumento:'addStrumento',
                modificaStrumento:'modificaStrumento',
                eliminaStrumento:'eliminaStrumento',
                fetchAssociazioni:'fetchAssociazioni',
                associaStrumento:'associaStrumento',
            }),

            inserisciStrumentazione(){
                if (this.modificaSwitch){
                    this.modificaStrumento(this.newStrumento).then(() => {
                        this.newStrumento = {}
                    })
                } else {
                    this.addStrumento(this.newStrumento).then(() => {
                        this.newStrumento = {}
                    })
                }
                this.modificaSwitch = false;
            },

            eliminaStrumentazione(id){
                this.eliminaStrumento(id);
            },

            associa(){
                this.associaStrumento(this.strumentoDaAssociare).then(() => {
                    this.strumentoDaAssociare = {};
                });
            },

            elimina(id){
                this.fetchDissocia(id);
            },

            modificaStrumentazione(strumento){
                this.modificaSwitch = true;
                this.newStrumento = strumento;
                this.$store.commit('strumentazione/eliminaStrumento', strumento.id);
            }
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),

            ...mapGetters('medici', {
                getMedici:'getMedici',
            }),

            ...mapGetters('strumentazione', {
                getStrumenti:'getStrumenti',
                getAssociazioni:'getAssociazioni',
            }),

            btnName(){
                return this.modificaSwitch ? 'modifica' : 'inserisci'
            }
        },
    }
</script>

<style scoped>

</style>
