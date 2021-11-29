(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_statistiche_FattCanali_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ricerca: {},
      headers: [{
        text: 'Nome',
        width: 280,
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'Fatturato',
        width: 280,
        sortable: false,
        value: 'prova_fattura_sum_tot',
        "class": "indigo white--text"
      }, {
        text: 'Ingressi',
        width: 280,
        sortable: false,
        value: 'clients_count',
        "class": "indigo white--text"
      }, {
        text: '%',
        sortable: false,
        value: 'percentuale',
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Nome',
        width: 300,
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'Fatturato',
        width: 300,
        sortable: false,
        value: 'prova_fattura_sum_tot',
        "class": "indigo white--text"
      }, {
        text: 'Ingressi',
        width: 300,
        sortable: false,
        value: 'clients_count',
        "class": "indigo white--text"
      }, {
        text: '%',
        sortable: false,
        value: 'percentuale',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.ricerca.anno = '';
    this.$store.commit('marketing/resetFattuartoCanali');
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('marketing', {
    fetchCanaliFatturato: 'fetchCanaliFatturato',
    fetchUserCanaliFatturato: 'fetchUserCanaliFatturato'
  })), {}, {
    selezionaAnno: function selezionaAnno() {
      this.fetchCanaliFatturato(this.ricerca);
      this.fetchUserCanaliFatturato(this.ricerca);
    },
    sumField: function sumField(key) {
      return this.getCanaliFatturato.reduce(function (a, b) {
        return a + (b[key] || 0);
      }, 0);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('marketing', {
    getCanaliFatturato: 'getCanaliFatturato',
    getUserCanaliFatturato: 'getUserCanaliFatturato'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('clients', {
    getAnni: 'getAnni'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/statistiche/FattCanali.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/statistiche/FattCanali.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FattCanali.vue?vue&type=template&id=3787b894&scoped=true& */ "./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true&");
/* harmony import */ var _FattCanali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FattCanali.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FattCanali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3787b894",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/FattCanali.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FattCanali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FattCanali.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FattCanali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FattCanali_vue_vue_type_template_id_3787b894_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FattCanali.vue?vue&type=template&id=3787b894&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/FattCanali.vue?vue&type=template&id=3787b894&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c("v-col", [_c("h2", [_vm._v("Fatturato Canali")])]),
          _vm._v(" "),
          _c(
            "v-col",
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
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [
              _c(
                "v-data-table",
                {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    dense: "",
                    headers: _vm.headers,
                    items: _vm.getCanaliFatturato,
                    "hide-default-footer": ""
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "item.prova_fattura_sum_tot",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                item.prova_fattura_sum_tot
                                  ? item.prova_fattura_sum_tot.toLocaleString(
                                      "it"
                                    )
                                  : null
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.clients_count",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                item.clients_count
                                  ? item.clients_count.toLocaleString("it")
                                  : null
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    },
                    {
                      key: "item.percentuale",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                item.prova_fattura_sum_tot
                                  ? Math.round(
                                      (item.prova_fattura_sum_tot /
                                        _vm.getCanaliFatturato.reduce(function(
                                          a,
                                          b
                                        ) {
                                          return {
                                            prova_fattura_sum_tot:
                                              a.prova_fattura_sum_tot +
                                              b.prova_fattura_sum_tot
                                          }
                                        }).prova_fattura_sum_tot) *
                                        100
                                    ) + " %"
                                  : 0
                              ) +
                              "\n                "
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _vm._v(" "),
                  _c("template", { slot: "body.append" }, [
                    _c("tr", { staticClass: "pink--text" }, [
                      _c("th", { staticClass: "title" }, [_vm._v("Totali")]),
                      _vm._v(" "),
                      _c("th", { staticClass: "title" }, [
                        _vm._v(
                          _vm._s(
                            _vm.sumField("prova_fattura_sum_tot")
                              ? _vm
                                  .sumField("prova_fattura_sum_tot")
                                  .toLocaleString("it")
                              : null
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "title" }, [
                        _vm._v(
                          _vm._s(
                            _vm.sumField("clients_count")
                              ? _vm
                                  .sumField("clients_count")
                                  .toLocaleString("it")
                              : null
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "title" })
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
      ),
      _vm._v(" "),
      _vm._l(_vm.getUserCanaliFatturato, function(audio) {
        return _c(
          "div",
          { key: audio.id, staticClass: "mt-8" },
          [
            _c("v-data-table", {
              staticClass: "elevation-1 mt-3",
              attrs: {
                dense: "",
                headers: _vm.headers2,
                items: audio.valori,
                "hide-default-footer": ""
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "item.prova_fattura_sum_tot",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              item.prova_fattura_sum_tot
                                ? item.prova_fattura_sum_tot.toLocaleString(
                                    "it"
                                  )
                                : null
                            ) +
                            "\n                    "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.clients_count",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              item.clients_count
                                ? item.clients_count.toLocaleString("it")
                                : null
                            ) +
                            "\n                    "
                        )
                      ]
                    }
                  },
                  {
                    key: "item.percentuale",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              item.prova_fattura_sum_tot
                                ? Math.round(
                                    (item.prova_fattura_sum_tot /
                                      audio.valori.reduce(function(a, b) {
                                        return {
                                          prova_fattura_sum_tot:
                                            a.prova_fattura_sum_tot +
                                            b.prova_fattura_sum_tot
                                        }
                                      }).prova_fattura_sum_tot) *
                                      100
                                  ) + " %"
                                : 0
                            ) +
                            "\n                    "
                        )
                      ]
                    }
                  },
                  {
                    key: "header.name",
                    fn: function(ref) {
                      var header = ref.header
                      return [
                        _vm._v(
                          "\n                        " +
                            _vm._s(audio.name) +
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
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);