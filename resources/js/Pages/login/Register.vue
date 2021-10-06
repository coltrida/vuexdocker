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

<!--    <v-form @submit.prevent="register">-->
        <v-form ref="form"
                v-model="valid"
                lazy-validation>

        <v-text-field
            v-model="userRegister.email"
            :rules="emailRules"
            label="e-mail*"
            required
        ></v-text-field>

        <v-text-field
            v-model="userRegister.oldPassword"
            :rules="passwordRules"
            label="vecchia password"
            hint="minimo 6 caratteri"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
            v-model="userRegister.password"
            :rules="passwordRules"
            label="vecchia password"
            hint="minimo 6 caratteri"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
            v-model="userRegister.repeatpassword"
            :rules="passwordRules"
            label="vecchia password"
            hint="minimo 6 caratteri"
            counter
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-btn
            color="success"
            class="mr-4"
            :disabled="verificaCampi"
            @click="register"
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
                valid: true,
                emailRules: [ v => !!v || 'la mail è obbligatoria'],
                passwordRules: [ v => !!v || 'la password è obbligatoria'],
                userRegister: {},
                rules: {
                    required: value => !!value || 'Campo obbligatorio.',
                    min: v => v.length >= 6 || 'Minimo 6 caratteri',
                },
            }
        },

        mounted() {
            this.userRegister.email = '';
            this.userRegister.oldPassword = '';
        },

        computed:{
            ...mapGetters('login', {
                getMessaggio:'getMessaggio',
                getLogged:'getLogged',
            }),

            verificaCampi(){
                return this.userRegister.email != '' && this.userRegister.email != null
                && this.userRegister.oldPassword != '' && this.userRegister.oldPassword
                && this.userRegister.oldPassword.length > 5
                && this.userRegister.password.length > 5
                && this.userRegister.repeatpassword.length > 5
                && this.userRegister.password != '' && this.userRegister.password
                && this.userRegister.repeatpassword != '' && this.userRegister.repeatpassword ? false : true;
            }
        },

        methods: {
            register() {
                this.$store.dispatch('login/register', this.userRegister).then(() => {
                    if (this.getLogged === true){
                        this.userRegister = {};
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
