(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_magazzino_ListaDdt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Prodotti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prodotti */ "./resources/js/Pages/magazzino/Prodotti.vue");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ListaDdt",
  components: {
    Prodotti: _Prodotti__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      ricerca: {},
      dialogProdotti: false,
      prodottiSelezione: [],
      headers: [{
        text: 'Progressivo',
        value: 'progressivo',
        "class": "indigo white--text"
      }, {
        text: 'Data emissione',
        value: 'created_at',
        "class": "indigo white--text"
      }, {
        text: 'Destinazione',
        value: 'nome_destinazione',
        "class": "indigo white--text"
      }, {
        text: 'Indirizzo',
        value: 'indirizzo_destinazione',
        "class": "indigo white--text"
      }, {
        text: 'Città',
        value: 'citta_destinazione',
        "class": "indigo white--text"
      }, {
        text: 'PR',
        value: 'provincia_destinazione',
        "class": "indigo white--text"
      }, {
        text: 'Azioni',
        value: 'actions',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.$store.commit('product/resetListaDdt');
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('product', {
    fetchListaDdt: 'fetchListaDdt'
  })), {}, {
    seleziona: function seleziona(items) {
      this.dialogProdotti = true;
      this.prodottiSelezione = items;
    },
    chiudiProdotti: function chiudiProdotti() {
      this.dialogProdotti = false;
      this.prodottiSelezione = [];
    },
    selezionaAnno: function selezionaAnno() {
      this.fetchListaDdt(this.ricerca);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('product', {
    getListaDdt: 'getListaDdt'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('clients', {
    getAnni: 'getAnni'
  })), {}, {
    linkBase: function linkBase() {
      var base = '';

      if (window.location.host === 'vuexdocker.test') {
        base = 'http://vuexdocker.test';
      } else {
        base = 'https://www.centrouditogroup.it';
      }

      return base;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js& ***!
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

/***/ "./resources/js/Pages/magazzino/ListaDdt.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/magazzino/ListaDdt.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true& */ "./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true&");
/* harmony import */ var _ListaDdt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListaDdt.vue?vue&type=script&lang=js& */ "./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListaDdt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d9edc4e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/magazzino/ListaDdt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/magazzino/Prodotti.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/magazzino/Prodotti.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true& */ "./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true&");
/* harmony import */ var _Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prodotti.vue?vue&type=script&lang=js& */ "./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e6c941e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/magazzino/Prodotti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaDdt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListaDdt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaDdt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prodotti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListaDdt_vue_vue_type_template_id_d9edc4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prodotti_vue_vue_type_template_id_e6c941e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/ListaDdt.vue?vue&type=template&id=d9edc4e6&scoped=true& ***!
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
    "div",
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
        "v-row",
        { staticClass: "mt-3" },
        [
          _c("v-col", [_c("h2", [_vm._v("Lista DDT")])]),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("v-select", {
                staticStyle: { width: "200px" },
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
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "d-flex justify-end" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "magazzinoCentrale" } } },
                [
                  _c("v-btn", { attrs: { color: "orange" } }, [
                    _vm._v(
                      "\n                    Magazzino Centrale\n                "
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
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1 mt-3",
        attrs: { dense: "", headers: _vm.headers, items: _vm.getListaDdt },
        scopedSlots: _vm._u([
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-icon",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: { color: "blue", small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.seleziona(item.products)
                                        }
                                      }
                                    },
                                    "v-icon",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [
                                  _vm._v(
                                    "\n                        mdi-format-list-bulleted-square\n                    "
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
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Prodotti")])]
                ),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href:
                                      _vm.linkBase +
                                      "/storage/ddt/" +
                                      item.id +
                                      ".pdf",
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { color: "green", small: "" }
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                            mdi-file-document-outline\n                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Documento")])]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Prodotti.vue?vue&type=template&id=e6c941e6&scoped=true& ***!
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
          _c("v-card-title", { staticClass: "text-h5" }, [
            _vm._v("\n            Prodotti\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_c("h3", [_vm._v("Matricola")])]),
                  _vm._v(" "),
                  _c("v-col", [_c("h3", [_vm._v("Modello")])]),
                  _vm._v(" "),
                  _c("v-col", [_c("h3", [_vm._v("Fornitore")])])
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.prodotti, function(item) {
                return _c(
                  "v-row",
                  { key: item.id },
                  [
                    _c("v-col", [_vm._v(_vm._s(item.matricola))]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v(_vm._s(item.listino.nome))]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v(_vm._s(item.fornitore.nome))])
                  ],
                  1
                )
              })
            ],
            2
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



/***/ })

}]);