<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Magazzini
                </v-btn>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'riepilogoMagazzini'}">
                        <v-list-item>
                            <v-list-item-title>RIEPILOGO</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
                <div>
                    <router-link :to="{ name: 'magazzinoCentrale'}">
                        <v-list-item class="blue-grey lighten-4">
                            <v-list-item-title>CENTRALE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
                <div v-for="(item, index) in getFiliali"
                     :key="index">
                    <router-link :to="{ name: 'magazzino', params: { filialeId: item.id }}">
                        <v-list-item>
                            <v-list-item-title>{{ item.nome }}</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        mounted(){
            this.fetchFiliali();
        },

        methods:{
            ...mapActions('filiali', {
                fetchFiliali:'fetchFiliali',
            })
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            })
        },
    }
</script>

<style scoped>

</style>
