<template>
    <div>
        <v-card v-for="audio in getAudio"
             :key="audio.id" class="my-4" outlined>
            <v-card-title>{{audio.name}}</v-card-title>
            <v-card-text>
                <saldati-user :idAudio="audio.id" />
            </v-card-text>

        </v-card>
    </div>
</template>

<script>
    import RateUser from "./RateUser";
    import SaldatiUser from "./SaldatiUser";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "RateAudio",

        components:{RateUser, SaldatiUser},

        mounted() {
            this.fetchAudio();
        },

        methods: {
            ...mapActions('users', {
                fetchAudio: 'fetchAudio',
            }),

        },

        computed: {
            ...mapGetters('users', {
                getAudio: 'getAudio',
            }),

        },
    }
</script>

<style scoped>

</style>
