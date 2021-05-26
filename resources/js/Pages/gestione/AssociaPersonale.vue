<template>
    <div>
        <h2>Associa Personale</h2>
        <v-btn @click="associa" color="success" dark>
            Associa
        </v-btn>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <h3>Filiali</h3>
                    <v-data-table
                        v-model="FilialeSelected"
                        :headers="headers1"
                        :items="getFiliali"
                        hide-default-footer
                        :single-select="singleSelect"
                        show-select
                        class="elevation-1 mt-3"
                    >
                    </v-data-table>
                </v-col>
                <v-col cols="3">
                    <h3>Audioprotesisti</h3>
                    <v-data-table
                        v-model="AudioSelected"
                        :headers="headers2"
                        :items="getAudio"
                        hide-default-footer
                        show-select
                        class="elevation-1 mt-3"
                    >
                    </v-data-table>
                </v-col>
                <v-col cols="3">
                    <h3>Amministrativi</h3>
                    <v-data-table
                        v-model="AmmSelected"
                        :headers="headers2"
                        :items="getAmm"
                        hide-default-footer
                        show-select
                        class="elevation-1 mt-3"
                    >
                    </v-data-table>
                </v-col>

                <v-col cols="3">
                    <h3>Associazioni</h3>
                    <div v-for="filiale in getAssociazioni" :key="filiale.id">
                        <v-data-table
                            :headers="headers3"
                            :items="filiale.users"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item.actions="{ item }">
                                <v-icon
                                    color="red"
                                    small
                                    @click="elimina(item.pivot.id)"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>

                            <template v-slot:header.name="{ header }">
                                {{ filiale.nome }}
                            </template>
                        </v-data-table>
                    </div>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "AssociaPersonale",

        data(){
            return {
                FilialeSelected: [],
                AudioSelected: [],
                AmmSelected: [],
                singleSelect: true,
                headers1: [
                    { text: 'Nome', align: 'start', value: 'nome', class: "indigo white--text" },
                ],
                headers2: [
                    { text: 'Nome', align: 'start', value: 'name', class: "indigo white--text" },
                ],
                headers3: [
                    { text: 'Nome', align: 'start', value: 'name', class: "indigo white--text" },
                    {text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted(){
            this.fetchFiliali();
            this.fetchAssociazioni();
            this.fetchAudio();
            this.fetchAmm();
        },

        methods:{
            ...mapActions('filiali', {
                fetchFiliali:'fetchFiliali',
                fetchAssociazioni:'fetchAssociazioni',
                fetchAssocia:'fetchAssocia',
                fetchDissocia:'fetchDissocia',
            }),

            ...mapActions('users', {
                fetchAudio:'fetchAudio',
                fetchAmm:'fetchAmm',
            }),

            associa(){
                this.fetchAssocia({
                    'idFiliale' : this.FilialeSelected[0].id,
                    'Audio': this.AudioSelected,
                    'Amm': this.AmmSelected
                }).then(() => {
                    this.FilialeSelected = [];
                    this.AudioSelected = [];
                    this.AmmSelected = [];
                });
            },

            elimina(id){
                //console.log(id)
                this.fetchDissocia(id);
            }
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
                getAssociazioni:'getAssociazioni',
            }),

            ...mapGetters('users', {
                getAudio:'getAudio',
                getAmm:'getAmm',
            })
        },
    }
</script>

<style scoped>

</style>
