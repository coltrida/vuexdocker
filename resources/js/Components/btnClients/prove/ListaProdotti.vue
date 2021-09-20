<template>
    <v-card>
        <v-card-title class="headline grey lighten-2">
            Prodotti
        </v-card-title>

        <v-card-text class="mt-2">
            <v-row>
                <v-col><h3>Matricola</h3></v-col>
                <v-col><h3>Modello</h3></v-col>
                <v-col><h3>Prezzo</h3></v-col>
            </v-row>

            <v-row v-for="item in prodotti" :key="item.id">
                <v-col>{{item.matricola}}</v-col>
                <v-col>{{item.listino.nome}}</v-col>
                <v-col>{{item.pivot.prezzo_formattato}}</v-col>
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
