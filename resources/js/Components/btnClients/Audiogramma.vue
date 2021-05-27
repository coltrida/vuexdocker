<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>

                <v-card-text class="pt-4">
                    <h2>{{ audiogrammaUser.nome }} {{ audiogrammaUser.cognome }}</h2>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
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
    export default {
        name: "Audiogramma",
        props: [ 'audiogrammaUser' ],

        methods:{
            cancella(){
                this.$emit('chiudiAudiogramma')
            }
        },

        computed:{
            dialog(){
                return !!this.audiogrammaUser.id;
            }
        },
    }
</script>

<style scoped>

</style>
