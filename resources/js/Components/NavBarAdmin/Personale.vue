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
                    Personale
                </v-btn>
            </template>
            <v-list>
                <router-link :to="{ name: 'personale'}">
                    <v-list-item>
                        <v-list-item-title>Lista</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'agende'}">
                    <v-list-item>
                        <v-list-item-title>agende</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'calendar'}">
                    <v-list-item>
                        <v-list-item-title>Calendar</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'diari'}">
                    <v-list-item>
                        <v-list-item-title>Diari</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'saldati'}">
                    <v-list-item>
                        <v-list-item-title>Saldati</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'rateali'}">
                    <v-list-item>
                        <v-list-item-title>Rateali</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>

        <!--<router-link :to="{ name: 'personale'}">
            <v-btn text dark>
                Personale
            </v-btn>
        </router-link>-->
    </div>
</template>

<script>
    export default {
        /*data: () => ({
            items: [
                { title: 'lista', link: 'personale' },
                { title: 'agende', link: 'personale' },
            ],
        }),*/
    }
</script>

<style scoped>

</style>
