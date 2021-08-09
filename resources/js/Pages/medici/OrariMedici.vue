<template>
    <v-row class="mt-3 flex-column">
        <v-row>
            <v-col cols="12">
                <h2>Orario Medici</h2>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-select
                    @change="caricaOrariMedico()"
                    v-model="medico.idDottore"
                    :items="getMedici"
                    item-value="id"
                    item-text="nome"
                    label="Medico"
                ></v-select>
            </v-col>
            <v-col>
                <v-select
                    v-model="medico.giorno"
                    :items="giorni"
                    label="Giorno"
                ></v-select>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="medico.dove"
                    label="Nome"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                    v-model="medico.orario"
                    label="Orario"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-btn color="primary" dark @click="inserisci">
                    Inserisci
                </v-btn>
            </v-col>
        </v-row>

        <v-row class="mb-6">
            <v-col cols="12">
                <v-data-table
                    :headers="header"
                    :items="getOrari"
                    hide-default-footer
                    class="elevation-1"
                >
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
            </v-col>
        </v-row>

        <v-row>

        </v-row>

    </v-row>



</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "OrariMedici",

        data(){
            return {
                medico:{},

                giorni: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],

                header: [
                    { text: 'Dove',  align: 'start', sortable: false, value: 'dove', class: "indigo white--text" },
                    { text: 'Giorno',  sortable: false, value: 'giorno', class: "indigo white--text" },
                    { text: 'Orario',  sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.fetchMedici(this.getIdUser);

            if (this.rottaDottore){
                this.caricaOrarioDottore(this.rottaDottore);
            }
        },

        methods:{
            ...mapActions('medici', {
                fetchMedici:'fetchMedici',
                caricaOrari:'caricaOrari',
                addOrario:'addOrario',
                eliminaOrario:'eliminaOrario',
                caricaOrarioDottore:'caricaOrarioDottore'
            }),

            caricaOrariMedico(){
                this.caricaOrari(this.medico.idDottore);
            },

            inserisci(){
                this.addOrario(this.medico).then(() => {
                    this.medico.giorno = '';
                    this.medico.dove = '';
                    this.medico.orario = '';
                });
            },

            elimina(idOrario){
                this.eliminaOrario(idOrario);
            }
        },

        computed:{
            ...mapGetters('medici', {
                getMedici: 'getMedici',
                getOrari: 'getOrari',
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            rottaDottore(){
                return this.$route.params.dottore ? this.$route.params.dottore : null;
            },
        }
    }
</script>

<style scoped>

</style>
