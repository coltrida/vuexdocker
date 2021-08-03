<template>
    <div v-if="getLogged">
        <!--<home-admin v-if="getRuolo === 'admin'"/>-->
        <super-home v-if="getRuolo === 'admin'"/>
        <home-audio v-if="getRuolo === 'audio'"/>
        <home-amm v-if="getRuolo === 'amministrazione'"/>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import HomeAdmin from "../../Components/home/homeAdmin";
    import HomeAudio from "../../Components/home/homeAudio";
    import HomeAmm from "../../Components/home/homeAmm";
    import SuperHome from "../../Components/home/SuperHome";
    export default {
        name: "Home",
        components: {SuperHome, HomeAmm, HomeAudio, HomeAdmin},

        methods: {
            ...mapActions('login', {
                fetchUser: 'fetchUser',
            }),

            elimina(id) {
                this.eliminaClient(id)
            },
        },

        computed: {
            ...mapGetters('login', {
                getLogged: 'getLogged',
                getUser: 'getUser',
                getIdUser: 'getIdUser',
                getRuolo: 'getRuolo',
            }),
        },
    }
</script>

<style scoped>

</style>
