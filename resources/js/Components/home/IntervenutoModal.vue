<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="800"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2>Motivo Visita?</h2>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="pt-4">
                    <v-row>
                        <v-col>
                            <v-select
                                v-model="newInfo.tipo"
                                :items="getMotivoIntervento"
                                label="Tipo"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="newInfo.note"
                                label="Note"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-btn color="primary" dark @click="inserisci" :block="$vuetify.breakpoint.xs">
                                inserisci
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="cancella(0)"
                    >
                        Annulla
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "IntervenutoModal",

        props: [ 'appuntamentoModal' ],

        data(){
            return{
                newInfo:{},
            }
        },

        methods:{
            ...mapActions('informazioni', {
                addInformazione:'addInformazione',
            }),

            inserisci(){
                if (this.newInfo.tipo){
                    this.newInfo.client_id = this.appuntamentoModal.client_id;
                    this.newInfo.giorno = this.appuntamentoModal.giornoOriginale;
                    this.addInformazione(this.newInfo).then(() => {
                        this.newInfo = {}
                    })
                }
                this.cancella(1);
            },

            cancella(valore){
                this.$emit('chiudiIntervenutoModal', valore)
            }
        },

        computed:{
            dialog(){
                return !!this.appuntamentoModal.id;
            },

            ...mapGetters('informazioni', {
                getInformazioni: 'getInformazioni',
                getMotivoIntervento: 'getMotivoIntervento'
            }),

            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),
        },
    }
</script>

<style scoped>

</style>
