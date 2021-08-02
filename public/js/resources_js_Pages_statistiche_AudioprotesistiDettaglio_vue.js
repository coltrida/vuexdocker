(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_statistiche_AudioprotesistiDettaglio_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AssegnaBudget",
  data: function data() {
    return {
      AudioSelected: [],
      "switch": 0,
      singleSelect: true,
      headers: [{
        text: 'Mese',
        value: 'mese_fine',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'client.fullname',
        "class": "indigo white--text"
      }, {
        text: 'Tot',
        sortable: false,
        value: 'tot',
        "class": "indigo white--text"
      }, {
        text: 'APA',
        sortable: false,
        value: 'products',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.fetchAudioConFatt();
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudioConFatt: 'fetchAudioConFatt'
  })),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudioConFatt: 'getAudioConFatt'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true& */ "./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true&");
/* harmony import */ var _AudioprotesistiDettaglio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioprotesistiDettaglio.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AudioprotesistiDettaglio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "995c68e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioprotesistiDettaglio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioprotesistiDettaglio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioprotesistiDettaglio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioprotesistiDettaglio_vue_vue_type_template_id_995c68e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/AudioprotesistiDettaglio.vue?vue&type=template&id=995c68e8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Dettaglio Audioprotesisti")]),
      _vm._v(" "),
      _c(
        "v-container",
        _vm._l(_vm.getAudioConFatt, function(audio) {
          return _c(
            "div",
            { key: audio.id, staticClass: "mb-7" },
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_c("h2", [_vm._v(_vm._s(audio.name))])]),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("h4", [
                      _vm._v(
                        "Vendite su Pc: " + _vm._s(audio.delta.premio) + " %"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("h4", [
                      _vm._v("Nr. Pc: " + _vm._s(audio.delta.provvigione))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-col", [
                    _c("h4", [
                      _vm._v("Nr. Cl: " + _vm._s(audio.delta.stipendio))
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1 mt-3",
                attrs: {
                  headers: _vm.headers,
                  items: audio.prova_finalizzata,
                  "item-key": audio.prova_finalizzata.id,
                  "hide-default-footer": ""
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.products",
                      fn: function(ref) {
                        var item = ref.item
                        return _vm._l(item.product, function(ele) {
                          return _c("div", { key: ele.id }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(ele.listino.nome) +
                                "\n                    "
                            )
                          ])
                        })
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
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);