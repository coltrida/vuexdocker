(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_clients_SituazioneAudio_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "OrariMedici",
  data: function data() {
    return {
      ricerca: {},
      header: [{
        text: 'Cognome',
        align: 'start',
        sortable: false,
        value: 'client.cognome',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'client.nome',
        "class": "indigo white--text"
      }, {
        text: 'Città',
        align: 'start',
        sortable: false,
        value: 'client.citta',
        "class": "indigo white--text"
      }, {
        text: 'Importo',
        sortable: false,
        value: 'tot',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.ricerca.anno = '';
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('clients', {
    fetchSituazioneAnnoClientiAudio: 'fetchSituazioneAnnoClientiAudio',
    fetchSituazioneAnnoResiAudio: 'fetchSituazioneAnnoResiAudio'
  })), {}, {
    selezionaAnno: function selezionaAnno() {
      this.ricerca.userId = this.getIdUser;
      this.fetchSituazioneAnnoClientiAudio(this.ricerca);
      this.fetchSituazioneAnnoResiAudio(this.ricerca);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('clients', {
    getSituazioneAnnoClientiAudio: 'getSituazioneAnnoClientiAudio',
    getSituazioneAnnoResiAudio: 'getSituazioneAnnoResiAudio',
    getAnni: 'getAnni'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getIdUser: 'getIdUser'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/clients/SituazioneAudio.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/clients/SituazioneAudio.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true& */ "./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true&");
/* harmony import */ var _SituazioneAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SituazioneAudio.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SituazioneAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d1e00fee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/SituazioneAudio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SituazioneAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SituazioneAudio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SituazioneAudio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SituazioneAudio_vue_vue_type_template_id_d1e00fee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/SituazioneAudio.vue?vue&type=template&id=d1e00fee&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mt-3 flex-column" },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [_vm._v("Riepilogo")])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("v-select", {
                attrs: { items: _vm.getAnni, label: "Anno" },
                on: {
                  change: function($event) {
                    return _vm.selezionaAnno()
                  }
                },
                model: {
                  value: _vm.ricerca.anno,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "anno", $$v)
                  },
                  expression: "ricerca.anno"
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
        { staticClass: "mb-6" },
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("h3", [_vm._v("Clienti")]),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.header,
                  items: _vm.getSituazioneAnnoClientiAudio
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("h3", [_vm._v("Resi")]),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.header,
                  items: _vm.getSituazioneAnnoResiAudio
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-row")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);