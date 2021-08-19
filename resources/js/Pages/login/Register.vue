<template>
    <div class="pt-16">
        <v-alert type="error" v-if="getMessaggio">
            <v-row align="center">
                <v-col class="grow">
                    {{ getMessaggio }}
                </v-col>
                <v-col class="shrink">
                    <v-btn @click="resetMessaggio">Chiudi</v-btn>
                </v-col>
            </v-row>
        </v-alert>

    <v-form @submit.prevent="register">
        <v-text-field
            v-model="user.email"
            :rules="[rules.required]"
            type="text"
            name="input-10-2"
            label="e-mail"
            class="input-group--focused "
        ></v-text-field>

        <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="password"
            hint="minimo 6 caratteri"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
            v-model="user.repeatpassword"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="ripeti password"
            hint="minimo 6 caratteri"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn
            color="success"
            class="mr-4"
            type="submit"
        >
            Cambia password
        </v-btn>

    </v-form>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                show1: false,
                user: {
                    email: '',
                    password: '',
                    repeatpassword: '',
                },
                rules: {
                    required: value => !!value || 'Campo obbligatorio.',
                    min: v => v.length >= 6 || 'Minimo 6 caratteri',
                },
            }
        },

        computed:{
            ...mapGetters('login', {
                getMessaggio:'getMessaggio',
                getLogged:'getLogged',
            })
        },

        methods: {
            register() {
                this.$store.dispatch('login/register', this.user).then(() => {
                    if (this.getLogged === true){
                        this.$router.push({ name: 'home' });
                    }
                });
            },

            resetMessaggio(){
                this.$store.commit('login/resetMessaggio');
            }
        }
    }
</script>

<style scoped>

</style>
