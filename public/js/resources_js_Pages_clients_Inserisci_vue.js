(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_clients_Inserisci_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ConfermaDoppione",
  props: ['userOriginario', 'listaDoppioni'],
  data: function data() {
    return {
      header: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Cognome',
        sortable: false,
        value: 'cognome',
        "class": "indigo white--text"
      }, {
        text: 'Indirizzo',
        sortable: false,
        value: 'indirizzo',
        "class": "indigo white--text"
      }, {
        text: 'Città',
        sortable: false,
        value: 'citta',
        "class": "indigo white--text"
      }, {
        text: 'Pr',
        sortable: false,
        value: 'provincia',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }]
    };
  },
  methods: {
    scelta: function scelta(_scelta) {
      this.$emit('chiudiConfermaDoppioni', _scelta);
    }
  },
  computed: {
    dialogconferma: function dialogconferma() {
      return !!this.userOriginario;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _ConfermaDoppione__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfermaDoppione */ "./resources/js/Pages/clients/ConfermaDoppione.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Inserisci",
  components: {
    ConfermaDoppione: _ConfermaDoppione__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      valid: true,
      newClient: {},
      lettura: false,
      menu: false,
      doppioneShow: false,
      nomeRules: [function (v) {
        return !!v || 'il nome è obbligatorio';
      }],
      cognomeRules: [function (v) {
        return !!v || 'il cognome è obbligatorio';
      }],
      indirizzoRules: [function (v) {
        return !!v || "l'indirizzo è obbligatorio";
      }],
      cittaRules: [function (v) {
        return !!v || "la città è obbligatoria";
      }],
      capRules: [function (v) {
        return !!v || "il cap è obbligatorio";
      }],
      provinciaRules: [function (v) {
        return !!v || "la provincia è obbligatoria";
      }],
      telefonoRules: [function (v) {
        return !!v || "il telefono è obbligatorio";
      }],
      tipoRules: [function (v) {
        return !!v || "il tipo è obbligatorio";
      }],
      fonteRules: [function (v) {
        return !!v || "la fonte è obbligatoria";
      }],
      filialeRules: [function (v) {
        return !!v || "la filiale è obbligatoria";
      }],
      nascitaRules: [function (v) {
        return !!v || "la data di nascita è obbligatoria";
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.getRuolo === 'audio') {
      this.fetchAudio();
      this.newClient.user_id = parseInt(this.getIdUser);
      this.fetchRecapitiByAudio(parseInt(this.getIdUser));
      this.fetchFilialiPerInserimento(parseInt(this.getIdUser));
      this.fetchMedici(parseInt(this.getIdUser));
      this.lettura = true;
    } else if (this.getRuolo === 'amministrazione') {
      this.fetchAudioSeguitiDaAmministrativa(parseInt(this.getIdUser));
      this.fetchFilialiPerInserimento(0);
      this.fetchMedici(0);
    } else {
      this.fetchAudio();
      this.fetchFilialiPerInserimento(0);
      this.fetchMedici(0);
    }

    this.fetchTipologie();
    this.fetchCanali();

    if (this.rottaIdClient) {
      this.fetchClient(this.rottaIdClient).then(function () {
        _this.newClient = _this.getClient;
      });
    }
    /*if(this.getRuolo === 'audio'){
        this.newClient.user_id = parseInt(this.getIdUser);
        this.fetchRecapitiByAudio(parseInt(this.getIdUser));
        this.fetchFilialiPerInserimento(parseInt(this.getIdUser));
        this.lettura = true;
    } else {
        this.fetchRecapiti();
        this.fetchFiliali();
    }
    this.fetchTipologie();
    this.fetchCanali();
    this.fetchAudio();
    this.fetchMedici(this.getIdUser);
    if (this.rottaIdClient){
        this.fetchClient(this.rottaIdClient).then(() => {
            this.newClient = this.getClient;
        });
    }*/

  },
  watch: {
    rottaIdClient: function rottaIdClient() {
      var _this2 = this;

      if (this.rottaIdClient) {
        this.fetchClient(this.rottaIdClient).then(function () {
          _this2.newClient = _this2.getClient;
        });
      }
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('clients', {
    addClient: 'addClient',
    modificaClient: 'modificaClient',
    fetchClient: 'fetchClient',
    verificaEsisteDoppione: 'verificaEsisteDoppione'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('tipologie', {
    fetchTipologie: 'fetchTipologie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('marketing', {
    fetchCanali: 'fetchCanali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('users', {
    fetchAudio: 'fetchAudio',
    fetchAudioSeguitiDaAmministrativa: 'fetchAudioSeguitiDaAmministrativa'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('filiali', {
    fetchFilialiPerInserimento: 'fetchFilialiPerInserimento',
    fetchFiliali: 'fetchFiliali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('recapiti', {
    fetchRecapiti: 'fetchRecapiti',
    fetchRecapitiByAudio: 'fetchRecapitiByAudio'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('medici', {
    fetchMedici: 'fetchMedici'
  })), {}, {
    annulla: function annulla() {
      this.$router.go(-1);
    },
    aggiungiModifica: function aggiungiModifica() {
      var _this3 = this;

      this.$refs.form.validate();
      var idFiliale = this.newClient.filiale_id;
      this.newClient.eseguito_id = parseInt(this.getIdUser);
      this.verificaEsisteDoppione(this.newClient).then(function () {
        if (_this3.nomeBtn === 'Inserisci' && _this3.getListaDoppioni.length > 0 || _this3.nomeBtn === 'Modifica' && _this3.getListaDoppioni.length > 1) {
          _this3.doppioneShow = true;
        } else {
          if (_this3.nomeBtn === 'Modifica') {
            _this3.newClient.id = _this3.getClient.id;

            _this3.eseguiModifica(idFiliale);
          } else {
            _this3.eseguiInserimento(idFiliale);
          }
        }
      });
    },
    eseguiModifica: function eseguiModifica(idFiliale) {
      var _this4 = this;

      this.modificaClient(this.newClient).then(function () {
        _this4.newClient = {};

        _this4.$router.push({
          name: 'clientsFiliale',
          params: {
            filialeId: idFiliale
          }
        });
      });
    },
    eseguiInserimento: function eseguiInserimento(idFiliale) {
      var _this5 = this;

      this.addClient(this.newClient).then(function () {
        _this5.newClient = {};

        _this5.$router.push({
          name: 'clientsFiliale',
          params: {
            filialeId: idFiliale
          }
        });
      });
    },
    scegliAudio: function scegliAudio(idAudio) {
      this.newClient.user_id = idAudio;
      this.fetchRecapitiByAudio(idAudio);
      this.fetchFilialiPerInserimento(idAudio);
      this.fetchMedici(idAudio);
    },
    chiudiConfermaDoppioni: function chiudiConfermaDoppioni(scelta) {
      this.doppioneShow = false;

      if (scelta > 0) {
        this.newClient.id = scelta;
        var idFiliale = this.newClient.filiale_id;
        this.eseguiModifica(idFiliale);
      }
    }
    /*scegliFonte(){
        if(this.newClient.marketing_id == 5) {
            'Medico'
        } else {
            'Recapito';
        }
    }*/

  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('login', {
    getRuolo: 'getRuolo',
    getIdUser: 'getIdUser'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('clients', {
    getClient: 'getClient',
    getListaDoppioni: 'getListaDoppioni'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('tipologie', {
    getTipologie: 'getTipologie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('marketing', {
    getCanali: 'getCanali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('users', {
    getAudio: 'getAudio'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('filiali', {
    getFilialiPerInserimento: 'getFilialiPerInserimento'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('recapiti', {
    getRecapiti: 'getRecapiti'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('medici', {
    getMedici: 'getMedici'
  })), {}, {
    rottaIdClient: function rottaIdClient() {
      return this.$route.params.clientId ? this.$route.params.clientId : null;
    },
    nomeBtn: function nomeBtn() {
      return this.$route.params.clientId ? 'Modifica' : 'Inserisci';
    },
    nomeLabel: function nomeLabel() {
      return this.newClient.marketing_id == 5 ? 'Medico' : 'Recapito';
    },
    origineFonte: function origineFonte() {
      return this.newClient.marketing_id == 5 ? this.getMedici : this.getRecapiti;
    },
    nomeDaVisualizzare: function nomeDaVisualizzare() {
      return this.newClient.marketing_id == 5 ? 'fullname' : 'nome';
    },
    validaMedico: function validaMedico() {
      return this.newClient.marketing_id != 5 || this.newClient.marketing_id == 5 && this.newClient.medico_id ? false : true;
    },
    verificaCampi: function verificaCampi() {
      return this.newClient.nome != '' && this.newClient.nome != null && this.newClient.cognome != '' && this.newClient.cognome && this.newClient.indirizzo != '' && this.newClient.indirizzo && this.newClient.citta != '' && this.newClient.citta && this.newClient.cap != '' && this.newClient.cap && this.newClient.provincia != '' && this.newClient.provincia && this.newClient.telefono != '' && this.newClient.telefono && this.newClient.filiale_id != '' && this.newClient.filiale_id && this.newClient.marketing_id != '' && this.newClient.marketing_id && (this.newClient.marketing_id != 5 || this.newClient.marketing_id == 5 && this.newClient.medico_id) ? false : true;
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/clients/ConfermaDoppione.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/clients/ConfermaDoppione.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true& */ "./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true&");
/* harmony import */ var _ConfermaDoppione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfermaDoppione.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ConfermaDoppione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4915c6bd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/ConfermaDoppione.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/Inserisci.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/clients/Inserisci.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inserisci.vue?vue&type=template&id=72c0630b&scoped=true& */ "./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true&");
/* harmony import */ var _Inserisci_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inserisci.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Inserisci_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72c0630b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/Inserisci.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfermaDoppione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfermaDoppione.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfermaDoppione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inserisci_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inserisci.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inserisci_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ConfermaDoppione_vue_vue_type_template_id_4915c6bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inserisci_vue_vue_type_template_id_72c0630b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inserisci.vue?vue&type=template&id=72c0630b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ConfermaDoppione.vue?vue&type=template&id=4915c6bd&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "text-center" },
    [
      _c(
        "v-dialog",
        {
          attrs: { width: "800" },
          model: {
            value: _vm.dialogconferma,
            callback: function($$v) {
              _vm.dialogconferma = $$v
            },
            expression: "dialogconferma"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.userOriginario.nome) +
                    " " +
                    _vm._s(_vm.userOriginario.cognome) +
                    " di " +
                    _vm._s(_vm.userOriginario.citta) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "pt-4" }, [
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v(
                    "Attenzione, il nominativo è uno di questi già presenti?"
                  )
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "text-center" }, [
                  _vm._v("In caso positivo, selezionarlo per sovrascrivilo")
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.header,
                      items: _vm.listaDoppioni,
                      "hide-default-footer": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                attrs: { color: "green", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.scelta(item.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            mdi-check\n                        "
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "warning", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.scelta(0)
                        }
                      }
                    },
                    [_vm._v("\n                    ANNULLA\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Inserisci.vue?vue&type=template&id=72c0630b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.doppioneShow
        ? _c("conferma-doppione", {
            attrs: {
              userOriginario: _vm.newClient,
              listaDoppioni: _vm.getListaDoppioni
            },
            on: { chiudiConfermaDoppioni: _vm.chiudiConfermaDoppioni }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("h2", [_vm._v("Inserisci Cliente")]),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "div",
            { staticClass: "mb-10" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          rules: _vm.nomeRules,
                          label: "Nome*",
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.nome,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "nome", $$v)
                          },
                          expression: "newClient.nome"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Cognome*",
                          rules: _vm.cognomeRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.cognome,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "cognome", $$v)
                          },
                          expression: "newClient.cognome"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Indirizzo*",
                          rules: _vm.indirizzoRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.indirizzo,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "indirizzo", $$v)
                          },
                          expression: "newClient.indirizzo"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "Citta*",
                          rules: _vm.cittaRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.citta,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "citta", $$v)
                          },
                          expression: "newClient.citta"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "1", lg: "1" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "cap*",
                          type: "number",
                          rules: _vm.capRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.cap,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "cap", $$v)
                          },
                          expression: "newClient.cap"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "1", lg: "1" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "PR*",
                          rules: _vm.provinciaRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.provincia,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "provincia", $$v)
                          },
                          expression: "newClient.provincia"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          label: "telefono*",
                          rules: _vm.telefonoRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.telefono,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "telefono", $$v)
                          },
                          expression: "newClient.telefono"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "telefono 2" },
                        model: {
                          value: _vm.newClient.telefono2,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "telefono2", $$v)
                          },
                          expression: "newClient.telefono2"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "telefono 3" },
                        model: {
                          value: _vm.newClient.telefono3,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "telefono3", $$v)
                          },
                          expression: "newClient.telefono3"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "1", lg: "1" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "nome",
                          items: _vm.getTipologie,
                          label: "tipo"
                        },
                        model: {
                          value: _vm.newClient.tipologia_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "tipologia_id", $$v)
                          },
                          expression: "newClient.tipologia_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "3", lg: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "mail" },
                        model: {
                          value: _vm.newClient.mail,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "mail", $$v)
                          },
                          expression: "newClient.mail"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c(
                        "v-menu",
                        {
                          ref: "menu",
                          attrs: {
                            "close-on-content-click": false,
                            "return-value": _vm.newClient.datanascita,
                            transition: "scale-transition",
                            "offset-y": "",
                            "min-width": "auto"
                          },
                          on: {
                            "update:returnValue": function($event) {
                              return _vm.$set(
                                _vm.newClient,
                                "datanascita",
                                $event
                              )
                            },
                            "update:return-value": function($event) {
                              return _vm.$set(
                                _vm.newClient,
                                "datanascita",
                                $event
                              )
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-text-field",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: {
                                            label: "Data di Nascita",
                                            "prepend-icon": "mdi-calendar"
                                          },
                                          model: {
                                            value: _vm.newClient.datanascita,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.newClient,
                                                "datanascita",
                                                $$v
                                              )
                                            },
                                            expression: "newClient.datanascita"
                                          }
                                        },
                                        "v-text-field",
                                        attrs,
                                        false
                                      ),
                                      on
                                    )
                                  )
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.menu,
                            callback: function($$v) {
                              _vm.menu = $$v
                            },
                            expression: "menu"
                          }
                        },
                        [
                          _vm._v(" "),
                          _c(
                            "v-date-picker",
                            {
                              attrs: { "no-title": "", scrollable: "" },
                              model: {
                                value: _vm.newClient.datanascita,
                                callback: function($$v) {
                                  _vm.$set(_vm.newClient, "datanascita", $$v)
                                },
                                expression: "newClient.datanascita"
                              }
                            },
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      _vm.menu = false
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Cancel\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { text: "", color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$refs.menu.save(
                                        _vm.newClient.datanascita
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            OK\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "name",
                          items: _vm.getCanali,
                          label: "fonte*",
                          rules: _vm.fonteRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.marketing_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "marketing_id", $$v)
                          },
                          expression: "newClient.marketing_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          readonly: _vm.lettura,
                          "item-text": "name",
                          items: _vm.getAudio,
                          label: "Audio*"
                        },
                        on: {
                          change: function($event) {
                            return _vm.scegliAudio($event)
                          }
                        },
                        model: {
                          value: _vm.newClient.user_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "user_id", $$v)
                          },
                          expression: "newClient.user_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "2", lg: "2" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "nome",
                          items: _vm.getFilialiPerInserimento,
                          label: "Filiale*",
                          rules: _vm.filialeRules,
                          required: ""
                        },
                        model: {
                          value: _vm.newClient.filiale_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "filiale_id", $$v)
                          },
                          expression: "newClient.filiale_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "3", lg: "3" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "nome",
                          items: _vm.getRecapiti,
                          label: "Recapito"
                        },
                        model: {
                          value: _vm.newClient.recapito_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "recapito_id", $$v)
                          },
                          expression: "newClient.recapito_id"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mb-10" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4", lg: "4" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "fullname",
                          items: _vm.getMedici,
                          label: "Medico"
                        },
                        model: {
                          value: _vm.newClient.medico_id,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "medico_id", $$v)
                          },
                          expression: "newClient.medico_id"
                        }
                      }),
                      _vm._v(" "),
                      _vm.validaMedico
                        ? _c(
                            "div",
                            {
                              staticStyle: {
                                margin: "0",
                                padding: "0",
                                "font-size": "12px",
                                color: "red",
                                transform: "translateY(-20px)"
                              }
                            },
                            [_vm._v("Seleziona Medico")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4", lg: "4" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Luogo di Nascita" },
                        model: {
                          value: _vm.newClient.luogoNascita,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "luogoNascita", $$v)
                          },
                          expression: "newClient.luogoNascita"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "4", lg: "4" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Codice Fiscale" },
                        model: {
                          value: _vm.newClient.codfisc,
                          callback: function($$v) {
                            _vm.$set(_vm.newClient, "codfisc", $$v)
                          },
                          expression: "newClient.codfisc"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "success", disabled: _vm.verificaCampi },
                  on: { click: _vm.aggiungiModifica }
                },
                [_vm._v("\n            " + _vm._s(_vm.nomeBtn) + "\n        ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "pink", dark: "" },
                  on: { click: _vm.annulla }
                },
                [_vm._v("\n            Annulla\n        ")]
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);