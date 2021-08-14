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
