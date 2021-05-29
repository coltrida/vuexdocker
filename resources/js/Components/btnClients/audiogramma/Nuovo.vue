<template>
    <div>
        <div>
            <div class="row">
                <div class="col-6">
                    <h2 class="text-center">Sinistro</h2>

                    <div v-for="i in 12" :key="i" class="row pa-0 ma-0 align-items-center">
                        <div class="col-1 pa-0 ma-0">{{i*10}}</div>

                        <div v-for="j in 10" :key="j" class="col-1 pa-0">
                            <input :id="'s'+i+j" :value="i*10"
                                   v-model.lazy="nuovaAudiometria.sinistro[j]" type="radio"/>
                            <label :for="'s'+i+j" class="sinistro">x</label>
                        </div>

                    </div>

                    <div class="row pa-0 ma-0 align-items-center">
                        <div class="col-1 pa-0">
                            <div class="label2"></div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >125</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >250</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >500</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >1000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >1500</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >2000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >3000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >4000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >6000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >8000</div>
                        </div>
                    </div>
                </div>

                <div class="col-6">
                    <h2 class="text-center">Destro</h2>

                    <div v-for="i in 12" :key="i" class="row pa-0 ma-0 align-items-center">
                        <div class="col-1 pa-0 ma-0">{{i*10}}</div>

                        <div v-for="j in 10" :key="j" class="col-1 pa-0">
                            <input :id="'d'+i+j" :value="i*10"
                                   v-model.lazy="nuovaAudiometria.destro[j]" type="radio"/>
                            <label :for="'d'+i+j" class="destro">o</label>
                        </div>

                    </div>

                    <div class="row pa-0 ma-0 align-items-center">
                        <div class="col-1 pa-0">
                            <div class="label2"></div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >125</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >250</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >500</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >1000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >1500</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >2000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >3000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >4000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >6000</div>
                        </div>
                        <div class="col-1 pa-0">
                            <div class="label2"  >8000</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <v-btn @click="salva" color="success" dark>
            salva
        </v-btn>
        <v-btn @click="chiudi" color="success" dark>
            annulla
        </v-btn>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "Nuovo",

        data(){
            return {
                nuovaAudiometria:{
                    client_id: this.client_id,
                    sinistro: [],
                    destro: []
                }
            }
        },

        props:['client_id'],

        methods: {
            ...mapActions('audiometrie', {
                addAudiometria: 'addAudiometria',
            }),

            salva(){
                this.addAudiometria(this.nuovaAudiometria).then(() =>{
                    this.chiudi();
                });
            },

            chiudi(){
                this.sinistro = [];
                this.destro = [];
                this.$emit('tornaVisualizza');
            }
        }
    }
</script>

<style scoped>
    input[type="radio"] {
        display: none;
    }

    label {
        position: relative;
        font-size: 12px;
        border-radius: 5px;
        padding: 2px 12px;
        width: 50px;
        height: 25px;
        margin: 0;
    }

    .label2 {
        position: relative;
        font-size: 10px;
        border-radius: 5px;
        padding: 2px 4px 0 6px;
        width: 50px;
        height: 25px;
        margin: 0;
    }

    .sinistro {
        color: blue;
        border: 2px solid blue;
    }

    .destro {
        color: red;
        border: 2px solid red;
    }


    input[type="radio"]:checked + label {
        background-color: #2d995b;
    }

</style>
