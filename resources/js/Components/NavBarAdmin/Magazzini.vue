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
                <v-list-item
                    v-for="(item, index) in getFiliali"
                    :key="index"
                >
                    <v-list-item-title>{{ item.nome }}</v-list-item-title>
                </v-list-item>
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
