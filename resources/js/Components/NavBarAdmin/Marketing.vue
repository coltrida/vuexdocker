<template>
    <div class="text-center">
        <!--<v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Marketing
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <router-link :to="{ name: 'marketing'}">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-menu>-->

        <router-link :to="{ name: 'marketing'}">
            <v-btn text dark>
                Marketing
            </v-btn>
        </router-link>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Lista' },
            ],
        }),
    }
</script>

<style scoped>

</style>
