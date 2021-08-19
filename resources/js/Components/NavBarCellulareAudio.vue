<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">CLIENTS</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div v-if="getFiliali[0]">
                    <router-link :to="{ name: 'clientsFiliale', params: { filialeId: getFiliali[0].id }}">
                        <v-list-item>
                            <v-list-item-title>{{ getFiliali[0].nome }}</v-list-item-title>
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
                    <router-link :to="{ name: 'situazioneAudio'}">
                        <v-list-item>
                            <v-list-item-title>SITUAZIONE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">MEDICI</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'listaMedici'}">
                        <v-list-item>
                            <v-list-item-title>LISTA</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'orariMedici'}">
                        <v-list-item>
                            <v-list-item-title>ORARI</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'inviiMedici'}">
                        <v-list-item>
                            <v-list-item-title>PRESCRIZIONI</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">MAGAZZINO</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div v-if="getFiliali[0]">
                    <router-link :to="{ name: 'magazzino', params: { filialeId: getFiliali[0].id }}">
                        <v-list-item>
                            <v-list-item-title>{{ getFiliali[0].nome }}</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">AGENDA</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'agenda'}">
                        <v-list-item>
                            <v-list-item-title>MESE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'settimana'}">
                        <v-list-item>
                            <v-list-item-title>SETTIMANA</v-list-item-title>
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
        name: "NavBarCellulareAudio",

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
