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
