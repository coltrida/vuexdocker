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
                <div v-for="(item, index) in getFiliali"
                     :key="index">
                    <router-link :to="{ name: 'clientsFiliale', params: { filialeId: item.id }}">
                        <v-list-item>
                            <v-list-item-title>{{ item.nome }}</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'importByFiliale'}">
                        <v-list-item>
                            <v-list-item-title>IMPORTA</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'rateClienti'}">
                        <v-list-item>
                            <v-list-item-title>RATE CLIENTI</v-list-item-title>
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
            if (this.getIdUser){
                this.fetchFilialiByUser(this.getIdUser);
            }
        },

        methods:{
            ...mapActions('filiali', {
                fetchFilialiByUser:'fetchFilialiByUser',
            })
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
            }),
        },
    }
</script>

<style scoped>

</style>
