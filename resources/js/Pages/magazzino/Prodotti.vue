<template>
    <v-dialog
        width="500"
        v-model="dialog"
    >
        <v-card>
            <v-card-title class="text-h5">
                Prodotti
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col><h3>Matricola</h3></v-col>
                    <v-col><h3>Modello</h3></v-col>
                </v-row>

                <v-row v-for="item in prodotti" :key="item.id">
                    <v-col>{{item.matricola}}</v-col>
                    <v-col>{{item.listino.nome}}</v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="$emit('chiudiProdotti')"
                >
                    Chiudi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Prodotti",

        data(){
            return {
                dialog: this.dialogPro
            }
        },

        props: {
            prodotti: Array,
            dialogPro: Boolean
        }
    }
</script>

<style scoped>

</style>
