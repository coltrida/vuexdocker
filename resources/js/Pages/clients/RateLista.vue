<template>
    <v-dialog
        max-width="800"
        v-model="dialog"
    >
        <v-card>
            <v-card-title class="text-h5">
                Rate
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col><h3>Data</h3></v-col>
                    <v-col><h3>Importo</h3></v-col>
                    <v-col><h3>Note</h3></v-col>
                </v-row>

                <v-row v-for="item in listarate" :key="item.id">
                    <v-col>{{item.created_at}}</v-col>
                    <v-col>{{item.importo}}</v-col>
                    <v-col>{{item.note}}</v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="$emit('chiudiRate')"
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
            listarate: Array,
            dialogPro: Boolean
        }
    }
</script>

<style scoped>

</style>
