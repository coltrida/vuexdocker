(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_statistiche_Callcenter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _InfoTelefonate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoTelefonate */ "./resources/js/Pages/statistiche/InfoTelefonate.vue");
/* harmony import */ var _InfoAppuntamenti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoAppuntamenti */ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AssegnaBudget",
  components: {
    InfoAppuntamenti: _InfoAppuntamenti__WEBPACK_IMPORTED_MODULE_1__.default,
    InfoTelefonate: _InfoTelefonate__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      showInfo: false,
      showInfoAppuntamenti: false,
      showRecalls: true,
      infoRecalls: {},
      headers: [{
        text: 'Anno',
        value: 'anno',
        "class": "indigo white--text"
      }, {
        text: 'Mese',
        value: 'mese',
        "class": "indigo white--text"
      }, {
        text: 'Telefonate fatte',
        align: 'center',
        sortable: false,
        value: 'telefonate',
        "class": "indigo white--text"
      }, {
        text: 'Appuntamenti',
        align: 'center',
        sortable: false,
        value: 'appuntamenti',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.showRecalls = true;
    this.fetchStatisticheTelefonate();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)('telefonate', {
    fetchStatisticheTelefonate: 'fetchStatisticheTelefonate'
  })), {}, {
    sumField: function sumField(key) {
      return this.getStatisticheTelefonate.reduce(function (a, b) {
        return a + (b[key] || 0);
      }, 0);
    },
    info: function info(anno, mese, mesenumero) {
      this.showInfo = true;
      this.showRecalls = false;
      this.infoRecalls.anno = anno;
      this.infoRecalls.mese = mese;
      this.infoRecalls.mesenumero = mesenumero;
    },
    infoAppuntamenti: function infoAppuntamenti(anno, mese, mesenumero) {
      this.showInfoAppuntamenti = true;
      this.showRecalls = false;
      this.infoRecalls.anno = anno;
      this.infoRecalls.mese = mese;
      this.infoRecalls.mesenumero = mesenumero;
    },
    chiudiInfo: function chiudiInfo() {
      this.showInfo = false;
      this.showRecalls = true;
      this.infoRecalls = {};
    },
    chiudiInfoAppuntamenti: function chiudiInfoAppuntamenti() {
      this.showInfoAppuntamenti = false;
      this.showRecalls = true;
      this.infoRecalls = {};
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)('telefonate', {
    getStatisticheTelefonate: 'getStatisticheTelefonate'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InfoAppuntamenti",
  props: ['infoRecalls'],
  data: function data() {
    return {
      carica: false,
      headers: [{
        text: 'Appuntamento per il',
        width: 150,
        value: 'giorno',
        "class": "indigo white--text"
      }, {
        text: 'Orario',
        width: 200,
        value: 'orario',
        "class": "indigo white--text"
      }, {
        text: 'Nominativo',
        width: 220,
        value: 'nominativo',
        "class": "indigo white--text"
      }, {
        text: 'Città',
        width: 220,
        value: 'cittaCliente',
        "class": "indigo white--text"
      }, {
        text: 'Tipo Visita',
        width: 220,
        value: 'tipo',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.carica = true;
    this.fetchAppuntamentiAnnoMese({
      'anno': this.infoRecalls.anno,
      'mesenumero': this.infoRecalls.mesenumero
    }).then(function () {
      return _this.carica = false;
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('appuntamenti', {
    fetchAppuntamentiAnnoMese: 'fetchAppuntamentiAnnoMese'
  })), {}, {
    cancella: function cancella() {
      this.$emit('chiudiInfoAppuntamenti');
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('appuntamenti', {
    getAppuntamentiAnnoMese: 'getAppuntamentiAnnoMese'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InfoTelefonate",
  props: ['infoRecalls'],
  data: function data() {
    return {
      carica: false,
      headers: [{
        text: 'Data',
        width: 150,
        value: 'datarecall',
        "class": "indigo white--text"
      }, {
        text: 'Eseguita da',
        width: 200,
        value: 'nominativoEseguito',
        "class": "indigo white--text"
      }, {
        text: 'Nominativo',
        width: 220,
        value: 'nominativo',
        "class": "indigo white--text"
      }, {
        text: 'Città',
        width: 220,
        value: 'cittaCliente',
        "class": "indigo white--text"
      }, {
        text: 'Esito',
        width: 220,
        value: 'esito',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.carica = true;
    this.fetchTelefonateAnnoMese({
      'anno': this.infoRecalls.anno,
      'mesenumero': this.infoRecalls.mesenumero
    }).then(function () {
      return _this.carica = false;
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('telefonate', {
    fetchTelefonateAnnoMese: 'fetchTelefonateAnnoMese'
  })), {}, {
    cancella: function cancella() {
      this.$emit('chiudiInfo');
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('telefonate', {
    getTelefonateAnnoMese: 'getTelefonateAnnoMese'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/statistiche/Callcenter.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/statistiche/Callcenter.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callcenter.vue?vue&type=template&id=691ec79e&scoped=true& */ "./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true&");
/* harmony import */ var _Callcenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Callcenter.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Callcenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "691ec79e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/Callcenter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoAppuntamenti.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true& */ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true&");
/* harmony import */ var _InfoAppuntamenti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoAppuntamenti.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InfoAppuntamenti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "152eb43d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/InfoAppuntamenti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoTelefonate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoTelefonate.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true& */ "./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true&");
/* harmony import */ var _InfoTelefonate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoTelefonate.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InfoTelefonate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1c73a7e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/InfoTelefonate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Callcenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Callcenter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Callcenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoAppuntamenti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoAppuntamenti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoAppuntamenti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTelefonate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoTelefonate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTelefonate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Callcenter_vue_vue_type_template_id_691ec79e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Callcenter.vue?vue&type=template&id=691ec79e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoAppuntamenti_vue_vue_type_template_id_152eb43d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoTelefonate_vue_vue_type_template_id_1c73a7e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Callcenter.vue?vue&type=template&id=691ec79e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.showInfo
      ? _c(
          "div",
          [
            _c("info-telefonate", {
              attrs: { infoRecalls: _vm.infoRecalls },
              on: { chiudiInfo: _vm.chiudiInfo }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showInfoAppuntamenti
      ? _c(
          "div",
          [
            _c("info-appuntamenti", {
              attrs: { infoRecalls: _vm.infoRecalls },
              on: { chiudiInfoAppuntamenti: _vm.chiudiInfoAppuntamenti }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showRecalls
      ? _c(
          "div",
          [
            _c("h2", [_vm._v("Statistiche Call Center")]),
            _vm._v(" "),
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12" } },
                  [
                    _c(
                      "v-data-table",
                      {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers,
                          items: _vm.getStatisticheTelefonate,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.telefonate",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-chip",
                                    {
                                      staticClass: "ma-2",
                                      staticStyle: { width: "150px" },
                                      attrs: { color: "primary", label: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.info(
                                            item.anno,
                                            item.mese,
                                            item.mesenumero
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                        mdi-information\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-col", { staticClass: "pl-8" }, [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.telefonate) +
                                                "\n                                "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.appuntamenti",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "v-chip",
                                    {
                                      staticClass: "ma-2",
                                      staticStyle: { width: "150px" },
                                      attrs: { color: "primary", label: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.infoAppuntamenti(
                                            item.anno,
                                            item.mese,
                                            item.mesenumero
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [
                                                  _vm._v(
                                                    "\n                                        mdi-information\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-col", { staticClass: "pl-8" }, [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.appuntamenti) +
                                                "\n                                "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          2693159165
                        )
                      },
                      [
                        _vm._v(" "),
                        _vm._v(" "),
                        _c("template", { slot: "body.append" }, [
                          _c("tr", { staticClass: "pink--text" }, [
                            _c("th", { staticClass: "title" }, [
                              _vm._v("Totali")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "title" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "title text-center" }, [
                              _vm._v(_vm._s(_vm.sumField("telefonate")))
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "title text-center" }, [
                              _vm._v(_vm._s(_vm.sumField("appuntamenti")))
                            ])
                          ])
                        ])
                      ],
                      2
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
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoAppuntamenti.vue?vue&type=template&id=152eb43d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        { staticClass: "mt-5" },
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [
              _vm._v(
                "Appuntamenti: " +
                  _vm._s(_vm.infoRecalls.mese) +
                  " / " +
                  _vm._s(_vm.infoRecalls.anno)
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "flex justify-end", attrs: { cols: "6" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", dark: "" },
                  on: { click: _vm.cancella }
                },
                [_vm._v("\n                Chiudi\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.carica
        ? _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("v-progress-circular", {
                attrs: { indeterminate: "", color: "primary" }
              })
            ],
            1
          )
        : _c(
            "div",
            _vm._l(_vm.getAppuntamentiAnnoMese, function(item, index) {
              return _c(
                "v-row",
                { key: index },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("h4", [
                        _vm._v(
                          "Appuntamenti fissati per: " +
                            _vm._s(item[0].nominativoUser)
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          "item-key": "idTelefonata",
                          headers: _vm.headers,
                          items: item
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.nominativo",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "router-link",
                                    {
                                      staticStyle: { color: "black" },
                                      attrs: {
                                        to: {
                                          name: "clientsFiliale",
                                          params: {
                                            filialeId: item.filiale_id,
                                            nomRicerca: item.nomeCliente,
                                            cogRicerca:
                                              item.cognomeCliente +
                                              " " +
                                              item.nomeCliente
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            item.cognomeCliente +
                                              " " +
                                              item.nomeCliente
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.orario",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(item.orario.substring(0, 5)) +
                                      "\n                    "
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/InfoTelefonate.vue?vue&type=template&id=1c73a7e0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        { staticClass: "mt-5" },
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [
              _vm._v(
                "Telefonate: " +
                  _vm._s(_vm.infoRecalls.mese) +
                  " / " +
                  _vm._s(_vm.infoRecalls.anno)
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "flex justify-end", attrs: { cols: "6" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", dark: "" },
                  on: { click: _vm.cancella }
                },
                [_vm._v("\n                Chiudi\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.carica
        ? _c(
            "div",
            { staticClass: "text-center" },
            [
              _c("v-progress-circular", {
                attrs: { indeterminate: "", color: "primary" }
              })
            ],
            1
          )
        : _c(
            "div",
            _vm._l(_vm.getTelefonateAnnoMese, function(item, index) {
              return _c(
                "v-row",
                { key: index },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("h4", [
                        _vm._v(
                          "Telefonate eseguite per: " +
                            _vm._s(item[0].nominativoUser)
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          "item-key": "idTelefonata",
                          headers: _vm.headers,
                          items: item
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "item.nominativo",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "router-link",
                                    {
                                      staticStyle: { color: "black" },
                                      attrs: {
                                        to: {
                                          name: "clientsFiliale",
                                          params: {
                                            filialeId: item.filiale_id,
                                            nomRicerca: item.nomeCliente,
                                            cogRicerca:
                                              item.cognomeCliente +
                                              " " +
                                              item.nomeCliente
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(
                                            item.cognomeCliente +
                                              " " +
                                              item.nomeCliente
                                          ) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);