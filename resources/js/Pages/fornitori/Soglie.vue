<template>
    <v-dialog
        width="500"
        v-model="dialog"
    >
        <v-card>
            <v-card-title class="text-h5">
                Soglie
            </v-card-title>

            <v-card-text>
                <v-row>
                    <v-col><h3>Filiale</h3></v-col>
                    <v-col><h3>Soglia Minima</h3></v-col>
                </v-row>

                <v-row v-for="item in Soglie" :key="item.id">
                    <v-col>{{item.nome}}</v-col>
                    <v-col>{{item.pivot.soglia}}</v-col>
                </v-row>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="$emit('chiudiSoglie')"
                >
                    Chiudi
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Soglie",

        data(){
            return {
                dialog: this.dialogPro
            }
        },

        props: {
            Soglie: Array,
            dialogPro: Boolean
        }
    }
</script>

<style scoped>

</style>
