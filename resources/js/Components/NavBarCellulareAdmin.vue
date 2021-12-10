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
                <div>
                    <router-link :to="{ name: 'riepilogoClienti'}">
                        <v-list-item>
                            <v-list-item-title>RIEPILOGO</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <div v-for="(item, index) in getFiliali"
                         :key="index">
                        <router-link :to="{ name: 'clientsFiliale', params: { filialeId: item.id }}">
                            <v-list-item>
                                <v-list-item-title>{{ item.nome }}</v-list-item-title>
                            </v-list-item>
                        </router-link>
                    </div>

                    <router-link :to="{ name: 'filtri'}">
                        <v-list-item>
                            <v-list-item-title>FILTRI</v-list-item-title>
                        </v-list-item>
                    </router-link>

                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">PERSONALE</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'personale'}">
                        <v-list-item>
                            <v-list-item-title>LISTA</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'agende'}">
                        <v-list-item>
                            <v-list-item-title>AGENDE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'calendar'}">
                        <v-list-item>
                            <v-list-item-title>CALENDAR</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'diari'}">
                        <v-list-item>
                            <v-list-item-title>DIARI</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'saldati'}">
                        <v-list-item>
                            <v-list-item-title>SALDATI</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'rateali'}">
                        <v-list-item>
                            <v-list-item-title>RATEALI</v-list-item-title>
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
                <div>
                    <router-link :to="{ name: 'riepilogoMagazzini'}">
                        <v-list-item>
                            <v-list-item-title>RIEPILOGO</v-list-item-title>
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

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">LISTINO</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'fornitori'}">
                        <v-list-item>
                            <v-list-item-title>LISTA</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link :to="{ name: 'listino'}">
                        <v-list-item>
                            <v-list-item-title>LISTINO</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">STRUTTURE</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'filiali'}">
                        <v-list-item>
                            <v-list-item-title>FILIALI</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link :to="{ name: 'recapiti'}">
                        <v-list-item>
                            <v-list-item-title>RECAPITI</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">MARKETING</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'marketing'}">
                        <v-list-item>
                            <v-list-item-title>CODICI</v-list-item-title>
                        </v-list-item>
                    </router-link>

                    <router-link :to="{ name: 'materiale'}">
                        <v-list-item>
                            <v-list-item-title>MATERIALE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                    <v-list-item-title v-bind="attrs"
                                       v-on="on">GESTIONE</v-list-item-title>
                </v-list-item>
            </template>
            <v-list>
                <div>
                    <router-link :to="{ name: 'assegnaBudget'}">
                        <v-list-item>
                            <v-list-item-title>ASSEGNA BGT</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'tempiRecall'}">
                        <v-list-item>
                            <v-list-item-title>TEMPI RECALL</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'inviaSms'}">
                        <v-list-item>
                            <v-list-item-title>INVIA MESS</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'strumentazione'}">
                        <v-list-item>
                            <v-list-item-title>STRUMENTAZIONE</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'resetSpecial'}">
                        <v-list-item>
                            <v-list-item-title>RESET</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'logging'}">
                        <v-list-item>
                            <v-list-item-title>LOGGING</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link :to="{ name: 'log'}">
                        <v-list-item>
                            <v-list-item-title>LOG</v-list-item-title>
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
        name: "NavBarCellulareAdmin",

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
