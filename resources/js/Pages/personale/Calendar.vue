<template>
    <div>
        <h2>Calendar</h2>
        <div>
            <v-row>
                <v-col
                    cols="6"
                    sm="6"
                >
                    <v-select
                        v-model="userId"
                        item-value="id"
                        item-text="name"
                        :items="getAudio"
                        label="Seleziona"
                    ></v-select>
                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                >
                    <v-btn @click="visualizza" dark color="indigo">
                        Visualizza
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="flex">
                    <v-col>
                        <h2>Lunedi</h2>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppLun"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >
                            <template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h2>Martedì</h2>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppMar"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h2>Mercoledì</h2>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppMer"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h2>Giovedì</h2>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppGio"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>

                    <v-col>
                        <h2>Venerdì</h2>
                        <v-data-table
                            dense
                            :headers="headers1"
                            :items="getAppVen"
                            hide-default-footer
                            class="elevation-1 mt-3"
                        >

                            <template v-slot:item.fullname="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.fullname }}
                                </div>
                            </template>

                            <template v-slot:item.orario="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.orario }}
                                </div>
                            </template>

                            <template v-slot:item.luogo="{ item }">
                                <div style="font-size: 10px">
                                    {{ item.luogo }}
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>

                </v-col>
            </v-row>


        </div>
    </div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Listino",

        data(){
            return {
                userId:'',
                headers1: [
                    { text: 'Orario', width: 60, align: 'start', sortable: false, value: 'orario', class: "indigo white--text" },
                    { text: 'Nome', width: 100, align: 'start', sortable: false, value: 'fullname', class: "indigo white--text" },
                    { text: 'Luogo', width:80, align: 'start', sortable: false, value: 'luogo', class: "indigo white--text" },
                ],

            }
        },

        mounted(){
            this.fetchAudio();
        },

        methods:{
            ...mapActions('users', {
                fetchAudio:'fetchAudio',
            }),

            ...mapActions('appuntamenti', {
                fetchAppuntamentiLunedi:'fetchAppuntamentiLunedi',
                fetchAppuntamentiMartedi:'fetchAppuntamentiMartedi',
                fetchAppuntamentiMercoledi:'fetchAppuntamentiMercoledi',
                fetchAppuntamentiGiovedi:'fetchAppuntamentiGiovedi',
                fetchAppuntamentiVenerdi:'fetchAppuntamentiVenerdi',
            }),

            visualizza(){
                this.fetchAppuntamentiLunedi(this.userId);
                this.fetchAppuntamentiMartedi(this.userId);
                this.fetchAppuntamentiMercoledi(this.userId);
                this.fetchAppuntamentiGiovedi(this.userId);
                this.fetchAppuntamentiVenerdi(this.userId);
            }

        },

        computed:{
            ...mapGetters('users', {
                getAudio:'getAudio'
            }),

            ...mapGetters('appuntamenti', {
                getAppLun:'getAppLun',
                getAppMar:'getAppMar',
                getAppMer:'getAppMer',
                getAppGio:'getAppGio',
                getAppVen:'getAppVen',
            }),

        },
    }
</script>

<style scoped>

</style>
