<template>
    <div v-if="titoloOrario === 'Orario'">
        {{valoreOra+':'+valoreMinuti}}
    </div>
    <div v-else>
        <v-tooltip bottom v-if="appuntamento.cliente">
            <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" style="font-size: 10px">
            <router-link
                style="color: black"
                :to="{ name: 'clientsFiliale',
                 params: { filialeId: appuntamento.filiale_id, nomRicerca:appuntamento.nome, cogRicerca:appuntamento.cliente, }}">
                    {{appuntamento.cliente}}
            </router-link>
        </span>
            </template>
            <div>Tipo: {{appuntamento.tipo}}</div>
            <div>Luogo: {{appuntamento.luogo}}</div>
            <div>Nota: {{appuntamento.nota}}</div>
        </v-tooltip>
    </div>
</template>

<script>
    export default {
        name: "Orario",

        props:['titoloOrario', 'valoreOra', 'valoreMinuti', 'appuntamenti'],

        mounted() {

        },

        computed:{
            appuntamento(){
                let risultato = {
                    cliente : '',
                    luogo: '',
                    nota: '',
                    tipo: '',
                    filiale_id: '',
                    nome: ''
                };
                let orario = this.valoreOra+':'+this.valoreMinuti;
                this.appuntamenti.forEach(ele => {
                   if (ele.orario == orario){
                       risultato.cliente = ele.cognome+' '+ele.nome;
                       risultato.luogo = ele.luogo;
                       risultato.tipo = ele.tipo;
                       risultato.filiale_id = ele.filiale_id;
                       risultato.nome = ele.nome;
                   }
                });
                return risultato;
            }
        }
    }
</script>

<style scoped>

</style>
