<template>
    <div>
        <div>
            <div class="row">
                <div class="col-6">
                    <h2 class="text-center">Sinistro</h2>

                    <div v-for="i in 12" :key="i" class="row pa-0 ma-0 align-items-center">
                        <div class="col">{{i*10}}</div>

                        <div v-for="j in 11" :key="j" class="col pa-0 ma-0">
                            <input :id="'s'+i+j" :value="i"
                                   v-model.lazy="sinistro[j]" type="radio"/>
                            <label :for="'s'+i+j" class="sinistro">x</label>
                        </div>

                    </div>

                    <div class="row p-0 m-0 mt-1" style="font-size: 9px; font-weight: bold">
                        <div class="col p-0 p-0 m-0"></div>
                        <div class="col p-0 p-0 m-0"></div>
                        <div class="col p-0 p-0 m-0">125</div>
                        <div class="col p-0 p-0 m-0">250</div>
                        <div class="col p-0 p-0 m-0">500</div>
                        <div class="col p-0 p-0 m-0">1000</div>
                        <div class="col p-0 p-0 m-0">1500</div>
                        <div class="col p-0 p-0 m-0">2000</div>
                        <div class="col p-0 p-0 m-0">3000</div>
                        <div class="col p-0 p-0 m-0">4000</div>
                        <div class="col p-0 p-0 m-0">6000</div>
                        <div class="col p-0 p-0 m-0">8000</div>
                    </div>
                </div>

                <div class="col-6">
                    <h2 class="text-center">Destro</h2>

                    <div v-for="i in 12" :key="i" class="row pa-0 pa-0 align-items-center">
                        <div class="col">{{i*10}}</div>

                        <div v-for="j in 11" :key="j" class="col pa-0 ma-0">
                            <input :id="'d'+i+j" :value="i"
                                   v-model.lazy="destro[j]" type="radio"/>
                            <label :for="'d'+i+j" class="destro">o</label>
                        </div>

                    </div>

                    <div class="row p-0 m-0 mt-1" style="font-size: 9px; font-weight: bold">
                        <div class="col p-0 p-0 m-0"></div>
                        <div class="col p-0 p-0 m-0"></div>
                        <div class="col p-0 p-0 m-0">125</div>
                        <div class="col p-0 p-0 m-0">250</div>
                        <div class="col p-0 p-0 m-0">500</div>
                        <div class="col p-0 p-0 m-0">1000</div>
                        <div class="col p-0 p-0 m-0">1500</div>
                        <div class="col p-0 p-0 m-0">2000</div>
                        <div class="col p-0 p-0 m-0">3000</div>
                        <div class="col p-0 p-0 m-0">4000</div>
                        <div class="col p-0 p-0 m-0">6000</div>
                        <div class="col p-0 p-0 m-0">8000</div>
                    </div>
                </div>
            </div>
        </div>
        <v-btn @click="salva" color="success" dark>
            salva
        </v-btn>
        <v-btn @click="annulla" color="success" dark>
            annulla
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "Nuovo",

        data(){
            return {
                sinistro: [],
                destro: []
            }
        },

        methods:{
            salva(){

            },

            annulla(){
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
        font-size: 10px;
        border-radius: 5px;
        padding: 7px 7px;
        width: 35px;
        height: 35px;
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
