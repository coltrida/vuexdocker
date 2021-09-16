(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_fornitori_Listino_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Soglie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Soglie */ "./resources/js/Pages/fornitori/Soglie.vue");
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
//
//
//
//
//
//
//
//
//
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
  name: "Listino",
  components: {
    Soglie: _Soglie__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      soglieSelezione: [],
      dialogSoglie: false,
      search: '',
      listino: {
        soglie: [],
        idFiliali: []
      },
      headers: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Fornitore',
        value: 'fornitore',
        "class": "indigo white--text"
      }, {
        text: 'Categoria',
        value: 'categoria',
        "class": "indigo white--text"
      }, {
        text: 'Costo',
        value: 'costo',
        "class": "indigo white--text"
      }, {
        text: 'Prezzo',
        value: 'prezzolistino',
        "class": "indigo white--text"
      }, {
        text: 'iva',
        value: 'iva',
        "class": "indigo white--text"
      }, {
        text: 'GG Reso',
        value: 'giorniTempoDiReso',
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
    var _this = this;

    this.fetchListino();
    this.fetchFornitori();
    this.fetchCategorie();
    this.fetchFiliali().then(function () {
      _this.getFiliali.forEach(function (ele) {
        _this.listino.idFiliali.push(ele.id);
      });
    }); //console.log(this.listino)
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('listino', {
    fetchListino: 'fetchListino',
    addListino: 'addListino',
    eliminaListino: 'eliminaListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('fornitori', {
    fetchFornitori: 'fetchFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('categorie', {
    fetchCategorie: 'fetchCategorie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('filiali', {
    fetchFiliali: 'fetchFiliali'
  })), {}, {
    aggiungi: function aggiungi() {
      var _this2 = this;

      this.addListino(this.listino).then(function () {
        _this2.listino = {
          nome: '',
          fornitore_id: '',
          categoria_id: '',
          costo: '',
          prezzolistino: '',
          iva: '',
          giorniTempoDiReso: '',
          soglie: []
        };
      });
    },
    elimina: function elimina(id) {
      this.eliminaListino(id);
    },
    seleziona: function seleziona(items) {
      this.dialogSoglie = true;
      this.soglieSelezione = items;
    },
    chiudiSoglie: function chiudiSoglie() {
      this.dialogSoglie = false;
      this.soglieSelezione = [];
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('listino', {
    getListino: 'getListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('fornitori', {
    getFornitori: 'getFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('categorie', {
    getCategorie: 'getCategorie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('filiali', {
    getFiliali: 'getFiliali'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Soglie",
  data: function data() {
    return {
      dialog: this.dialogPro
    };
  },
  props: {
    Soglie: Array,
    dialogPro: Boolean
  }
});

/***/ }),

/***/ "./resources/js/Pages/fornitori/Listino.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/fornitori/Listino.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Listino.vue?vue&type=template&id=9e3f044c&scoped=true& */ "./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true&");
/* harmony import */ var _Listino_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Listino.vue?vue&type=script&lang=js& */ "./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Listino_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9e3f044c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/fornitori/Listino.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/fornitori/Soglie.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/fornitori/Soglie.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Soglie.vue?vue&type=template&id=1250ebbf&scoped=true& */ "./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true&");
/* harmony import */ var _Soglie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Soglie.vue?vue&type=script&lang=js& */ "./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Soglie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1250ebbf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/fornitori/Soglie.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listino_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Listino.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Listino_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Soglie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Soglie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Soglie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Listino_vue_vue_type_template_id_9e3f044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Listino.vue?vue&type=template&id=9e3f044c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Soglie_vue_vue_type_template_id_1250ebbf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Soglie.vue?vue&type=template&id=1250ebbf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Listino.vue?vue&type=template&id=9e3f044c&scoped=true& ***!
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
      _c("h2", [_vm._v("Listino")]),
      _vm._v(" "),
      _vm.dialogSoglie
        ? _c("soglie", {
            attrs: {
              soglie: _vm.soglieSelezione,
              "dialog-pro": _vm.dialogSoglie
            },
            on: { chiudiSoglie: _vm.chiudiSoglie }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [
              _c("v-text-field", {
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Ricerca",
                  "single-line": "",
                  "hide-details": ""
                },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              }),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1 mt-3",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.getListino,
                  search: _vm.search,
                  "items-per-page": 15
                },
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
                                              attrs: {
                                                color: "red",
                                                small: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.elimina(item.id)
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
                                            "\n                                    mdi-delete\n                                "
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
                          [_vm._v(" "), _c("span", [_vm._v("Elimina")])]
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
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                color: "blue",
                                                small: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.seleziona(
                                                    item.filiale
                                                  )
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
                                            "\n                                    mdi-eye\n                                "
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
                          [_vm._v(" "), _c("span", [_vm._v("Soglie Minime")])]
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
          _c(
            "v-col",
            { attrs: { cols: "4" } },
            [
              _c("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Massimo 25 caratteri",
                  label: "Nome Prodotto"
                },
                model: {
                  value: _vm.listino.nome,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "nome", $$v)
                  },
                  expression: "listino.nome"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  "item-value": "id",
                  "item-text": "nome",
                  items: _vm.getFornitori,
                  label: "fornitore"
                },
                model: {
                  value: _vm.listino.fornitore_id,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "fornitore_id", $$v)
                  },
                  expression: "listino.fornitore_id"
                }
              }),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  "item-value": "id",
                  "item-text": "nome",
                  items: _vm.getCategorie,
                  label: "cat"
                },
                model: {
                  value: _vm.listino.categoria_id,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "categoria_id", $$v)
                  },
                  expression: "listino.categoria_id"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Massimo 25 caratteri",
                  label: "costo"
                },
                model: {
                  value: _vm.listino.costo,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "costo", $$v)
                  },
                  expression: "listino.costo"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  counter: "25",
                  hint: "Massimo 25 caratteri",
                  label: "prezzo listino"
                },
                model: {
                  value: _vm.listino.prezzolistino,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "prezzolistino", $$v)
                  },
                  expression: "listino.prezzolistino"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { counter: "25", label: "iva" },
                model: {
                  value: _vm.listino.iva,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "iva", $$v)
                  },
                  expression: "listino.iva"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { counter: "25", label: "gg di reso" },
                model: {
                  value: _vm.listino.giorniTempoDiReso,
                  callback: function($$v) {
                    _vm.$set(_vm.listino, "giorniTempoDiReso", $$v)
                  },
                  expression: "listino.giorniTempoDiReso"
                }
              }),
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(_vm.getFiliali, function(item, index) {
                  return _c(
                    "v-list-item",
                    { key: item.id, attrs: { dense: "" } },
                    [
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v(_vm._s(item.nome))])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-avatar",
                        { staticClass: "align-center" },
                        [
                          _c("v-text-field", {
                            attrs: { type: "number" },
                            model: {
                              value: _vm.listino.soglie[index],
                              callback: function($$v) {
                                _vm.$set(_vm.listino.soglie, index, $$v)
                              },
                              expression: "listino.soglie[index]"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", color: "indigo" },
                  on: { click: _vm.aggiungi }
                },
                [_vm._v("\n                    Inserisci\n                ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/fornitori/Soglie.vue?vue&type=template&id=1250ebbf&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
            _vm._v("\n            Soglie\n        ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_c("h3", [_vm._v("Filiale")])]),
                  _vm._v(" "),
                  _c("v-col", [_c("h3", [_vm._v("Soglia Minima")])])
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.Soglie, function(item) {
                return _c(
                  "v-row",
                  { key: item.id },
                  [
                    _c("v-col", [_vm._v(_vm._s(item.nome))]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v(_vm._s(item.pivot.soglia))])
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
                      return _vm.$emit("chiudiSoglie")
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