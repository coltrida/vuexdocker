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
                    Clients
                </v-btn>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'riepilogoClienti'}">
                        <v-list-item>
                            <v-list-item-title>RIEPILOGO</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
                <div v-for="(item, index) in getFiliali"
                     :key="index">
                    <router-link :to="{ name: 'clientsFiliale', params: { filialeId: item.id }}">
                        <v-list-item>
                            <v-list-item-title>{{ item.nome }}</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
                <div v-for="(item, index) in items"
                     :key="index+20">
                    <router-link :to="{ name: item.link}">
                        <v-list-item>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        data: () => ({
            items: [
                /*{ title: 'Inserisci', link: 'clientsInserisci'},
                { title: 'Lista', link: 'clients' },*/
                { title: 'Filtri', link: 'filtri' },
                { title: 'Import', link: 'importClients' },
            ],
        }),

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
