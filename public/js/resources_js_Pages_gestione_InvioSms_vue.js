(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_InvioSms_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Messaggio",
  props: ['textMessaggio'],
  methods: {
    cancella: function cancella() {
      this.$emit('cancellaMessaggio');
    }
  },
  computed: {
    dialog: function dialog() {
      return !!this.textMessaggio;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Messaggio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/Messaggio */ "./resources/js/Components/Messaggio.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TempiRecall",
  components: {
    Messaggio: _Components_Messaggio__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      carica: false,
      ricerca: {},
      testo: '',
      textMessaggio: null
    };
  },
  mounted: function mounted() {
    this.resetRicerca();
    this.fetchTipologie();
    this.fetchProvince();
    this.fetchFilialiPerInserimento(0);
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('clients', {
    fetchClients: 'fetchClients',
    fetchProvince: 'fetchProvince',
    fetchCittaByProvincia: 'fetchCittaByProvincia',
    ricercaNominativiConMail: 'ricercaNominativiConMail'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('tipologie', {
    fetchTipologie: 'fetchTipologie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('filiali', {
    fetchFilialiPerInserimento: 'fetchFilialiPerInserimento'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('clients', {
    smsInvio: 'smsInvio'
  })), {}, {
    caricaCitta: function caricaCitta() {
      this.fetchCittaByProvincia(this.ricerca.provincia);
    },
    invia: function invia() {
      var _this = this;

      this.carica = true;
      var payload = {
        'client': this.getRicercaNominativi,
        'testo': this.testo
      }; //console.log(this.getRicercaNominativi)

      this.smsInvio(payload).then(function () {
        _this.carica = false;
        _this.textMessaggio = 'sms inviato';
        _this.testo = '';
      });
    },
    cancellaMessaggio: function cancellaMessaggio() {
      this.textMessaggio = '';
    },
    resetRicerca: function resetRicerca() {
      this.$store.commit('clients/resetRicercaNominativi');
      this.ricerca = {};
    },
    seleziona: function seleziona() {
      var _this2 = this;

      this.carica = true;
      this.ricercaNominativiConMail(this.ricerca).then(function () {
        _this2.carica = false;
      });
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('clients', {
    getRicercaNominativi: 'getRicercaNominativi',
    getProvince: 'getProvince',
    getCittaByProvincia: 'getCittaByProvincia'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('tipologie', {
    getTipologie: 'getTipologie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('filiali', {
    getFilialiPerInserimento: 'getFilialiPerInserimento'
  }))
});

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/Messaggio.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messaggio.vue?vue&type=template&id=40862498&scoped=true& */ "./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&");
/* harmony import */ var _Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messaggio.vue?vue&type=script&lang=js& */ "./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40862498",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Messaggio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/InvioSms.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/gestione/InvioSms.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true& */ "./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true&");
/* harmony import */ var _InvioSms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvioSms.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InvioSms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d62cb7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/InvioSms.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Messaggio.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messaggio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvioSms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvioSms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvioSms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messaggio.vue?vue&type=template&id=40862498&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvioSms_vue_vue_type_template_id_6d62cb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
          attrs: { width: "500" },
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
              _c("v-card-text", { staticClass: "pt-4" }, [
                _c("h2", [_vm._v(_vm._s(_vm.textMessaggio))])
              ]),
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
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.cancella }
                    },
                    [_vm._v("\n                    Chiudi\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/InvioSms.vue?vue&type=template&id=6d62cb7c&scoped=true& ***!
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
      _c("h2", [_vm._v("Invio Messaggio")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Destinatari")]),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-6" },
        [
          _c(
            "v-col",
            { attrs: { cols: "2", sm: "2" } },
            [
              _c("v-select", {
                attrs: {
                  "item-value": "id",
                  "item-text": "nome",
                  items: _vm.getTipologie,
                  label: "tipo"
                },
                model: {
                  value: _vm.ricerca.tipo,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "tipo", $$v)
                  },
                  expression: "ricerca.tipo"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2", sm: "2" } },
            [
              _c("v-select", {
                attrs: { items: _vm.getProvince, label: "Prov." },
                on: {
                  change: function($event) {
                    return _vm.caricaCitta()
                  }
                },
                model: {
                  value: _vm.ricerca.provincia,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "provincia", $$v)
                  },
                  expression: "ricerca.provincia"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2", sm: "2" } },
            [
              _c("v-select", {
                attrs: { items: _vm.getCittaByProvincia, label: "Città" },
                model: {
                  value: _vm.ricerca.citta,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "citta", $$v)
                  },
                  expression: "ricerca.citta"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "2", sm: "2" } },
            [
              _c("v-select", {
                attrs: {
                  "item-value": "id",
                  "item-text": "nome",
                  items: _vm.getFilialiPerInserimento,
                  label: "Filiale"
                },
                model: {
                  value: _vm.ricerca.filiale,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "filiale", $$v)
                  },
                  expression: "ricerca.filiale"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  attrs: { color: "success", dark: "" },
                  on: { click: _vm.seleziona }
                },
                [_vm._v("\n                Seleziona\n            ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "warning", dark: "" },
                  on: { click: _vm.resetRicerca }
                },
                [_vm._v("\n                Reset\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("messaggio", {
        attrs: { textMessaggio: _vm.textMessaggio },
        on: { cancellaMessaggio: _vm.cancellaMessaggio }
      }),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("p", [
                        _vm._v(
                          "Gentile ___nome cliente___ ____cognome cliente_____"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-textarea", {
                        attrs: { outlined: "", label: "Testo del messaggio" },
                        model: {
                          value: _vm.testo,
                          callback: function($$v) {
                            _vm.testo = $$v
                          },
                          expression: "testo"
                        }
                      }),
                      _vm._v(" "),
                      _c("p", [_vm._v("Un cordiale saluto")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.carica
                    ? _c(
                        "v-col",
                        { staticClass: "text-center" },
                        [
                          _c("v-progress-circular", {
                            attrs: { indeterminate: "", color: "primary" }
                          })
                        ],
                        1
                      )
                    : _c(
                        "v-col",
                        [
                          _vm.getRicercaNominativi.length > 0
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { disabled: !(_vm.testo.length > 3) },
                                  on: { click: _vm.invia }
                                },
                                [
                                  _vm._v(
                                    "\n                            Invia\n                        "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(
                            "\n                        Nr. Pazienti Selezionati: "
                          ),
                          _c("b", [
                            _vm._v(_vm._s(_vm.getRicercaNominativi.length))
                          ]),
                          _vm._v(
                            "  con e-mail valorizzata\n                    "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);