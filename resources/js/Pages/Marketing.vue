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
                    sm="6"
                >
                <v-list>
                    <v-list-item
                        v-for="canale in getCanali"
                        :key="canale.id" style="border-bottom: 1px solid black"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="canale.name"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon>
                                <v-icon color="red" @click="elimina(canale.id)">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                </v-list>
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
                newCanale:''
            }
        },

        mounted(){
            this.fetchCanali();
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
