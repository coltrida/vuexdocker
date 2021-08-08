<template>
    <div>
        <saldati-user :idAudio="getIdUser"/>
        <rate-user :idAudio="getIdUser" class="mt-12"/>
    </div>
</template>

<script>
    import RateUser from "./RateUser";
    import SaldatiUser from "./SaldatiUser";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "RateAudio",
        components:{RateUser, SaldatiUser},
        computed: {
            ...mapGetters('login', {
                getIdUser: 'getIdUser',
            }),

        },
    }
</script>

<style scoped>

</style>
