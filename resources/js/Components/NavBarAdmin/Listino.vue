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
                    Fornitori
                </v-btn>
            </template>
            <v-list>
                <router-link :to="{ name: 'fornitori'}">
                    <v-list-item>
                        <v-list-item-title>Lista</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link :to="{ name: 'listino'}">
                    <v-list-item>
                        <v-list-item-title>Listino</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
