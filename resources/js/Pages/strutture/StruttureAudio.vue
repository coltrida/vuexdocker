<template>
    <v-row class="mt-3 flex-column">
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
                        :items="getStruttureAudio"
                        item-key="codiceIdentificativo"
                        hide-default-footer
                        class="elevation-1"
                    >
                        <!--<template v-slot:item.id="{ item }">
                            <div v-if="item.tipologia === 'recapito'">
                                R{{item.id}}
                            </div>
                            <div v-else>
                                F{{item.id}}
                            </div>
                        </template>-->

                    </v-data-table>
                </div>

            </v-col>
    </v-row>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "StruttureAudio",

        data(){
            return {
                medico:{},
                carica: false,
                header: [
                    { text: 'Tipologia',  align: 'start', sortable: false, value: 'tipologia', class: "indigo white--text" },
                    { text: 'Nome',  align: 'start', sortable: false, value: 'nome', class: "indigo white--text" },
                    { text: 'Città',  align: 'start', sortable: false, value: 'citta', class: "indigo white--text" },
                    { text: 'Codice Identificativo', align: 'center', value: 'codiceIdentificativo', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted() {
            this.carica = true;
            this.fetchStruttureAudio(this.getIdUser).then(() => {
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('recapiti', {
                fetchStruttureAudio:'fetchStruttureAudio',
            }),

        },

        computed:{
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

            ...mapGetters('recapiti', {
                getStruttureAudio: 'getStruttureAudio',
            }),
        }
    }
</script>

<style scoped>

</style>

