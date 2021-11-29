<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2>Trasferimento Clienti e prove aperte</h2>
                    <h3>{{ userTrasferisci.name }}</h3>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    <v-select
                        v-model="oggettoTrasferisci.idTrasferimento"
                        item-value="id"
                        item-text='name'
                        hint="Sposta a"
                        persistent-hint
                        :items="getAudio"
                        label="Audioprotesista"
                    ></v-select>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="danger"
                        text
                        @click="trasferisci"
                    >
                        Trasferisci Dati
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="cancella"
                    >
                        Chiudi
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "MessaggioTrasferisciDati",

        props: {
            userTrasferisci: {
                type: Object,
            },
        },

        data(){
            return{
                oggettoTrasferisci:{}
            }
        },

       methods:{
           ...mapActions('users', {
               trasferisciClient: 'trasferisciClient',
           }),

           trasferisci(){
               this.oggettoTrasferisci.id = this.userTrasferisci.id;
               this.trasferisciClient(this.oggettoTrasferisci);
               this.cancella();
           },

           cancella(){
               this.$emit('chiudiMessaggioTrascerisci')
           }
       },

        computed:{
            dialog(){
                return !!this.userTrasferisci.id;
            },

            ...mapGetters('users', {
                getAudio:'getAudio',
            }),
        },
    }
</script>

<style scoped>

</style>
