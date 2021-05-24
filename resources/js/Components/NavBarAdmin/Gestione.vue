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
                <v-list-item
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { title: 'Associa Filiale Personale' },
                { title: 'Assegna Budget' },
                { title: 'Tempi Recall' },
                { title: 'Invio sms' },
            ],
        }),
    }
</script>

<style scoped>

</style>
