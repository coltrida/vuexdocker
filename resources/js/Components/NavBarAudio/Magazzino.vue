<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-badge
                    v-if="getRuolo === 'audio'"
                    :content="novita"
                    :value="novita"
                    color="red"
                    overlap
                >
                <v-btn
                    @click="resetNovita"
                    text
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    Magazzini
                </v-btn>
                </v-badge>
            </template>
            <v-list>
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
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        data(){
            return{
                novita : 0,
            }
        },
        mounted(){
            if (this.getIdUser){
                this.fetchFilialiByUser(this.getIdUser);
            }
        },

        watch:{
            getSoglie(){
               // console.log(this.getSoglie[0]);
                this.getSoglie.forEach(ele => {
                    if (parseInt(ele.conteggio) - parseInt(ele.soglia) < 0){
                        //console.log(parseInt(ele.soglia) - parseInt(ele.conteggio));
                        this.novita = '*';
                        this.playSound();
                    }
                })
            }
        },

        methods:{
            ...mapActions('filiali', {
                fetchFilialiByUser:'fetchFilialiByUser',
            }),

            playSound(){
                let alert = new Audio(this.sound);
                alert.play();
            },

            resetNovita(){
                this.novita = 0;
            },
        },

        computed:{
            ...mapGetters('filiali', {
                getFiliali:'getFiliali',
            }),

            ...mapGetters('login', {
                getIdUser:'getIdUser',
                getRuolo:'getRuolo',
            }),

            ...mapGetters('product', {
                getSoglie:'getSoglie',
            }),
        },
    }
</script>

<style scoped>

</style>
