<template>
    <div>
        <h2>Canali Marketing</h2>
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        v-model="newCanale"
                        counter="25"
                        hint="Massimo 25 caratteri"
                        label="Nuovo Canale"
                    ></v-text-field>
                </v-col>
                <v-btn @click="aggiungi" color="indigo" dark>
                    Inserisci
                </v-btn>
            </v-row>

            <v-row>
                <v-col
                    cols="12"
                >
                    <div class="text-center" v-if="carica">
                        <v-progress-circular
                            indeterminate
                            color="primary"
                        ></v-progress-circular>
                    </div>
                    <div v-else>
                        <v-data-table
                            :headers="header"
                            :items="getCanali"
                            class="elevation-1"
                        >

                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-icon
                                            color="red"
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
        </v-container>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Marketing",

        data(){
            return {
                newCanale:'',
                carica: false,
                header: [
                    { text: 'Canale Mkt',  align: 'start', sortable: false, value: 'name', class: "indigo white--text" },
                    { text: 'Actions', value: 'actions', sortable: false, class: "indigo white--text"},
                ],
            }
        },

        mounted(){
            this.carica = true;
            this.fetchCanali().then(() =>{
                this.carica = false;
            });
        },

        methods:{
            ...mapActions('marketing', {
                fetchCanali:'fetchCanali',
                addCanale:'addCanale',
                eliminaCanale:'eliminaCanale',
            }),

            aggiungi(){
                this.addCanale(this.newCanale);
                this.newCanale = '';
            },

            elimina(id){
                this.eliminaCanale(id)
            }
        },

        computed:{
            ...mapGetters('marketing', {
                getCanali:'getCanali',
            })
        },
    }
</script>

<style scoped>

</style>
