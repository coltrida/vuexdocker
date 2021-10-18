<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="12">
                <h2>Lista Medici</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-text-field
                    v-model="medico.nome"
                    label="Nome"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="medico.cognome"
                    label="Cognome"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn color="primary" dark @click="aggiungi">
                    Aggiungi
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <div class="text-center" v-if="carica">
                    <v-progress-circular
                        indeterminate
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-else>
                    <v-data-table
                        :headers="header"
                        :items="getMedici"
                        hide-default-footer
                        class="elevation-1"
                    >

                        <template v-slot:item.nome="{ item }">
                            <router-link style="color: black" :to="{ name: 'orariMedici',
                                        params: { dottore:item.nome, }}">
                                {{item.nome}}
                            </router-link>
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon
                                        color="red"
                                        small
                                        @click="elimina(item.id)"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </template>
                                <span>Elimina</span>
                            </v-tooltip>
                        </template>

                    </v-data-table>
                </div>

            </v-col>
        </v-row>

        <v-row>

        </v-row>

    </v-row>



</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "ListaMedici",

        data(){
            return {
                medico:{},
                carica: false,
                header: [
                    { text: 'Medico',  align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchMedici(this.getIdUser).then(() =>{
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('medici', {
                fetchMedici:'fetchMedici',
                addMedico:'addMedico',
                eliminaMedico:'eliminaMedico'
            }),

            aggiungi(){
                this.medico.userId = this.getIdUser;
                this.addMedico(this.medico).then(() => {
                    this.medico = {};
                });
            },

            elimina(idMedico){
                this.eliminaMedico(idMedico);
            }
        },

        computed:{
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            ...mapGetters('medici', {
                getMedici: 'getMedici',
            }),
        }
    }
</script>

<style scoped>

</style>
