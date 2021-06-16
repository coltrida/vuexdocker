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
                    Gestione
                </v-btn>
            </template>
            <v-list>
                <div v-for="(item, index) in items"
                     :key="index">
                    <router-link :to="{ name: item.link}">
                        <v-list-item>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </div>

            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Associa Filiale Personale', link: 'associaPersonale' },
                { title: 'Assegna Budget', link: 'assegnaBudget' },
                { title: 'Tipi e Recall', link: 'tempiRecall' },
                { title: 'Invio sms', link: 'inviaSms' },
            ],
        }),
    }
</script>

<style scoped>

</style>
