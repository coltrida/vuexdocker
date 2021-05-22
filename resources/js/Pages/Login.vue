<template>
    <v-form>
        <v-text-field
            v-model="email"
            :rules="[rules.required]"
            type="text"
            name="input-10-2"
            label="e-mail"
            hint="At least 8 characters"
            class="input-group--focused "
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn
            color="success"
            class="mr-4"
            @click="login"
        >
            login
        </v-btn>

    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                show1: false,
                password: '',
                email: '',
                rules: {
                    required: value => !!value || 'Campo obbligatorio.',
                    min: v => v.length >= 8 || 'Minimo 8 caratteri',
                    emailMatch: () => (`The email and password you entered don't match`),
                },
            }
        },

        methods: {
            login() {

            }
        }
    }
</script>

<style scoped>

</style>
