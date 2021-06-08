(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_home_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Prodotti",
  data: function data() {
    return {
      dialog: this.dialogPro
    };
  },
  props: {
    prodotti: Array,
    dialogPro: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Prodotti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prodotti */ "./resources/js/Components/home/Prodotti.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "homeAdmin",
  components: {
    Prodotti: _Prodotti__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      dialogProdotti: false,
      prodottiSelezione: [],
      expanded: [],
      headers1: [{
        text: 'Nome',
        width: 185,
        value: 'client.fullname',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Tot',
        width: 70,
        value: 'tot',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Inizio',
        width: 120,
        value: 'inizio_prova',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }
      /*{text: 'budget', value:'product', sortable: false, class: "indigo white--text"},*/
      ],
      headers2: [{
        text: 'Nome',
        width: 185,
        value: 'client.fullname',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Tot',
        width: 70,
        value: 'tot',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Finalizzato',
        width: 120,
        value: 'fine_prova',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }]
    };
  },
  updated: function updated() {
    this.fetchSituazioneMese();
  },
  mounted: function mounted() {
    this.fetchSituazioneMese();
  },

  /*watch:{
      getSituazioneMese(){
          this.fetchSituazioneMese();
      }
  },*/
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('users', {
    fetchSituazioneMese: 'fetchSituazioneMese'
  })), {}, {
    seleziona: function seleziona(items) {
      this.dialogProdotti = true;
      this.prodottiSelezione = items;
    },
    chiudiProdotti: function chiudiProdotti() {
      this.dialogProdotti = false;
      this.prodottiSelezione = [];
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('users', {
    getSituazioneMese: 'getSituazioneMese'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "homeAmm"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Prodotti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prodotti */ "./resources/js/Components/home/Prodotti.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "homeAudio",
  components: {
    Prodotti: _Prodotti__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      dialogProdotti: false,
      prodottiSelezione: [],
      expanded: [],
      headers1: [{
        text: 'Nome',
        width: 185,
        value: 'client.fullname',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Tot',
        width: 70,
        value: 'tot',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Inizio',
        width: 120,
        value: 'inizio_prova',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }
      /*{text: 'budget', value:'product', sortable: false, class: "indigo white--text"},*/
      ],
      headers2: [{
        text: 'Nome',
        width: 185,
        value: 'client.fullname',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Tot',
        width: 70,
        value: 'tot',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Finalizzato',
        width: 120,
        value: 'fine_prova',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.fetchSituazioneMese(this.getIdUser);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('users', {
    fetchSituazioneMese: 'fetchSituazioneMese'
  })), {}, {
    seleziona: function seleziona(items) {
      this.dialogProdotti = true;
      this.prodottiSelezione = items;
    },
    chiudiProdotti: function chiudiProdotti() {
      this.dialogProdotti = false;
      this.prodottiSelezione = [];
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('users', {
    getSituazioneMese: 'getSituazioneMese'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('login', {
    getIdUser: 'getIdUser'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_home_homeAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/home/homeAdmin */ "./resources/js/Components/home/homeAdmin.vue");
/* harmony import */ var _Components_home_homeAudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/home/homeAudio */ "./resources/js/Components/home/homeAudio.vue");
/* harmony import */ var _Components_home_homeAmm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/home/homeAmm */ "./resources/js/Components/home/homeAmm.vue");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  components: {
    HomeAmm: _Components_home_homeAmm__WEBPACK_IMPORTED_MODULE_2__.default,
    HomeAudio: _Components_home_homeAudio__WEBPACK_IMPORTED_MODULE_1__.default,
    HomeAdmin: _Components_home_homeAdmin__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapActions)('login', {
    fetchUser: 'fetchUser'
  })), {}, {
    elimina: function elimina(id) {
      this.eliminaClient(id);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)('login', {
    getLogged: 'getLogged',
    getUser: 'getUser',
    getIdUser: 'getIdUser',
    getRuolo: 'getRuolo'
  }))
});

/***/ }),

/***/ "./resources/js/Components/home/Prodotti.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/home/Prodotti.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prodotti.vue?vue&type=template&id=02c719a6&scoped=true& */ "./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true&");
/* harmony import */ var _Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prodotti.vue?vue&type=script&lang=js& */ "./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "02c719a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/home/Prodotti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/home/homeAdmin.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/home/homeAdmin.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true& */ "./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true&");
/* harmony import */ var _homeAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeAdmin.vue?vue&type=script&lang=js& */ "./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _homeAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "56eac12a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/home/homeAdmin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/home/homeAmm.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/home/homeAmm.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true& */ "./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true&");
/* harmony import */ var _homeAmm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeAmm.vue?vue&type=script&lang=js& */ "./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _homeAmm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f5ffddd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/home/homeAmm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/home/homeAudio.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/home/homeAudio.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeAudio.vue?vue&type=template&id=4316c71c&scoped=true& */ "./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true&");
/* harmony import */ var _homeAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeAudio.vue?vue&type=script&lang=js& */ "./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _homeAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4316c71c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/home/homeAudio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/home/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=24943976&scoped=true& */ "./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/home/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "24943976",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/home/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prodotti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAdmin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAdmin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAmm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAmm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAmm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAudio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/home/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/home/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_02c719a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prodotti.vue?vue&type=template&id=02c719a6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAdmin_vue_vue_type_template_id_56eac12a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAmm_vue_vue_type_template_id_6f5ffddd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_homeAudio_vue_vue_type_template_id_4316c71c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./homeAudio.vue?vue&type=template&id=4316c71c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_24943976_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=24943976&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/Prodotti.vue?vue&type=template&id=02c719a6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "290" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c("v-card-title", { staticClass: "text-h5" }, [
            _vm._v("\n            Prodotti\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            _vm._l(_vm.prodotti, function(item) {
              return _c(
                "v-row",
                { key: item.id },
                [
                  _c("v-col", [_vm._v(_vm._s(item.matricola))]),
                  _vm._v(" "),
                  _c("v-col", [_vm._v(_vm._s(item.listino.nome))])
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "green darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("chiudiProdotti")
                    }
                  }
                },
                [_vm._v("\n                Chiudi\n            ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAdmin.vue?vue&type=template&id=56eac12a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex justify-start align-center mt-2" },
    [
      _c(
        "v-container",
        [
          _c("v-row", [_c("h1", [_vm._v("Home Admin")])]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _vm.dialogProdotti
                ? _c("prodotti", {
                    attrs: {
                      prodotti: _vm.prodottiSelezione,
                      "dialog-pro": _vm.dialogProdotti
                    },
                    on: { chiudiProdotti: _vm.chiudiProdotti }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("h2", [_vm._v("Prove in Corso:")]),
                  _vm._v(" "),
                  _vm._l(_vm.getSituazioneMese, function(audio) {
                    return _c(
                      "div",
                      { key: audio.id },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1 mt-3",
                          attrs: {
                            headers: _vm.headers1,
                            items: audio.prova_in_corso,
                            "hide-default-footer": ""
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "header.client.fullname",
                                fn: function(ref) {
                                  var header = ref.header
                                  return [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(audio.name) +
                                        "\n                        "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "green", dark: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.seleziona(item.product)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Prodotti\n                            "
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
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6" } },
                [
                  _c("h2", [_vm._v("Finalizzati:")]),
                  _vm._v(" "),
                  _vm._l(_vm.getSituazioneMese, function(audio) {
                    return _c(
                      "div",
                      { key: audio.id },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1 mt-3",
                          attrs: {
                            headers: _vm.headers2,
                            items: audio.prova_finalizzata,
                            "hide-default-footer": ""
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "header.client.fullname",
                                fn: function(ref) {
                                  var header = ref.header
                                  return [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(audio.name) +
                                        "\n                        "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "header.actions",
                                fn: function(ref) {
                                  var header = ref.header
                                  return [
                                    _c(
                                      "v-chip",
                                      {
                                        staticStyle: { "font-size": "12px" },
                                        attrs: {
                                          color: "orange",
                                          label: "",
                                          "text-color": "white"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Bgt: € " +
                                            _vm._s(
                                              (audio.budget.budgetAnno *
                                                audio.budget.target) /
                                                100
                                            ) +
                                            " - Fatt: € " +
                                            _vm._s(
                                              audio.prova_finalizzata_sum_tot
                                            ) +
                                            "\n                            "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              },
                              {
                                key: "item.actions",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "green", dark: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.seleziona(item.product)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Prodotti\n                            "
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
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAmm.vue?vue&type=template&id=6f5ffddd&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-start align-center mt-2" }, [
      _c("h1", [_vm._v("Home Amm")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/home/homeAudio.vue?vue&type=template&id=4316c71c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex justify-start align-center mt-2" },
    [
      _c(
        "v-container",
        [
          _c("v-row", [_c("h1", [_vm._v("Home Audio")])]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _vm.dialogProdotti
                ? _c("prodotti", {
                    attrs: {
                      prodotti: _vm.prodottiSelezione,
                      "dialog-pro": _vm.dialogProdotti
                    },
                    on: { chiudiProdotti: _vm.chiudiProdotti }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "6" } }, [
                _c("h2", [_vm._v("Prove in Corso:")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1 mt-3",
                      attrs: {
                        headers: _vm.headers1,
                        items: _vm.getSituazioneMese.prova_in_corso,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "header.client.fullname",
                          fn: function(ref) {
                            var header = ref.header
                            return [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.getSituazioneMese.name) +
                                  "\n                        "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.actions",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green", dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.seleziona(item.product)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Prodotti\n                            "
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
                _c("h2", [_vm._v("Finalizzati:")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1 mt-3",
                      attrs: {
                        headers: _vm.headers2,
                        items: _vm.getSituazioneMese.prova_finalizzata,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "header.client.fullname",
                          fn: function(ref) {
                            var header = ref.header
                            return [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.getSituazioneMese.name) +
                                  "\n                        "
                              )
                            ]
                          }
                        },
                        {
                          key: "header.actions",
                          fn: function(ref) {
                            var header = ref.header
                            return [
                              _c(
                                "v-chip",
                                {
                                  staticStyle: { "font-size": "12px" },
                                  attrs: {
                                    color: "orange",
                                    label: "",
                                    "text-color": "white"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Bgt: € " +
                                      _vm._s(
                                        (_vm.getSituazioneMese.budget
                                          .budgetAnno *
                                          _vm.getSituazioneMese.budget.target) /
                                          100
                                      ) +
                                      " - Fatt: € " +
                                      _vm._s(
                                        _vm.getSituazioneMese
                                          .prova_finalizzata_sum_tot
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]
                          }
                        },
                        {
                          key: "item.actions",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green", dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.seleziona(item.product)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Prodotti\n                            "
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
                )
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "6" } }, [
                _c("h2", [_vm._v("Appuntamenti:")]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1 mt-3",
                      attrs: {
                        headers: _vm.headers1,
                        items: _vm.getSituazioneMese.prova_in_corso,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "header.client.fullname",
                          fn: function(ref) {
                            var header = ref.header
                            return [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.getSituazioneMese.name) +
                                  "\n                        "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.actions",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "green", dark: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.seleziona(item.product)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                Prodotti\n                            "
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
                )
              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/home/Home.vue?vue&type=template&id=24943976&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _vm.getLogged
    ? _c(
        "div",
        [
          _vm.getRuolo === "admin" ? _c("home-admin") : _vm._e(),
          _vm._v(" "),
          _vm.getRuolo === "audio" ? _c("home-audio") : _vm._e(),
          _vm._v(" "),
          _vm.getRuolo === "amministrazione" ? _c("home-amm") : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);