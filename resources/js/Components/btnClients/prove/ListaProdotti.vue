<template>
    <v-card>
        <v-card-title class="headline grey lighten-2">
            Prodotti
        </v-card-title>

        <v-card-text class="mt-2">
            <v-row class="mt-2" v-for="prodotto in prodotti" :key="prodotto.id">
                <v-col cols="4">
                    <h3>{{ prodotto.matricola }}</h3>
                </v-col>
                <v-col cols="4">
                    <h3>{{ prodotto.listino.nome }}</h3>
                </v-col>
                <v-col cols="4">
                    <h3>{{ prodotto.pivot.prezzo }}</h3>
                </v-col>
            </v-row>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="chiudi"
            >
                Chiudi
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ListaProdotti",

        props:['prodotti'],

        methods:{
            chiudi(){
                this.$emit('chiudiLista')
            },
        }
    }
</script>

<style scoped>

</style>
