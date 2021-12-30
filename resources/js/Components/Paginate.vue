<template>
    <v-pagination
        v-model="currentPage"
        :length="lastPage"
        :total-visible="8"
    ></v-pagination>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Paginate",

        props: ['idFiliale'],

        watch:{
            currentPage(newVal, oldVal){
                this.paginatePage(newVal);
            }
        },

        methods:{
            ...mapActions('clients', {
                fetchClientsFiliale: 'fetchClientsFiliale',
            }),

            paginatePage(pageNumber){
                this.fetchClientsFiliale({
                    'idFiliale': this.idFiliale,
                    'pageNumber':pageNumber
                });
            }
        },

        computed:{
            ...mapGetters('clients', {
                getMeta: 'getMeta',
            }),

            currentPage: {
                get() {
                    return this.getMeta.current_page;
                },
                set( value ) {
                    this.$store.commit('clients/setCurrentPage', value);
                }
            },

            lastPage: {
                get() {
                    return this.getMeta.last_page;
                }
            }
        }
    }
</script>

<style scoped>

</style>
