(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_srutture_recapiti_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Recapiti",
  data: function data() {
    return {
      search: '',
      listino: {},
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
    this.fetchListino();
    this.fetchFornitori();
    this.fetchCategorie();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('listino', {
    fetchListino: 'fetchListino',
    addListino: 'addListino',
    eliminaListino: 'eliminaListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('fornitori', {
    fetchFornitori: 'fetchFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('categorie', {
    fetchCategorie: 'fetchCategorie'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addListino(this.listino);
      this.listino = '';
    },
    elimina: function elimina(id) {
      this.eliminaListino(id);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('listino', {
    getListino: 'getListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('fornitori', {
    getFornitori: 'getFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('categorie', {
    getCategorie: 'getCategorie'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/srutture/recapiti.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/srutture/recapiti.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recapiti.vue?vue&type=template&id=73bc13fa&scoped=true& */ "./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true&");
/* harmony import */ var _recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recapiti.vue?vue&type=script&lang=js& */ "./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "73bc13fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/srutture/recapiti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recapiti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_recapiti_vue_vue_type_template_id_73bc13fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./recapiti.vue?vue&type=template&id=73bc13fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/srutture/recapiti.vue?vue&type=template&id=73bc13fa&scoped=true& ***!
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
      _c("h2", [_vm._v("Magazzini")]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "2", sm: "2" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "Nome Prodotto"
                    },
                    model: {
                      value: _vm.fil.nome,
                      callback: function($$v) {
                        _vm.$set(_vm.fil, "nome", $$v)
                      },
                      expression: "fil.nome"
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "1", sm: "1" } },
                [
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2", sm: "2" } },
                [
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2", sm: "2" } },
                [
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
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "1", sm: "1" } },
                [
                  _c("v-text-field", {
                    attrs: { counter: "25", label: "iva" },
                    model: {
                      value: _vm.listino.iva,
                      callback: function($$v) {
                        _vm.$set(_vm.listino, "iva", $$v)
                      },
                      expression: "listino.iva"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "1", sm: "1" } },
                [
                  _c("v-text-field", {
                    attrs: { counter: "25", label: "gg di reso" },
                    model: {
                      value: _vm.listino.giorniTempoDiReso,
                      callback: function($$v) {
                        _vm.$set(_vm.listino, "giorniTempoDiReso", $$v)
                      },
                      expression: "listino.giorniTempoDiReso"
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
              attrs: { dark: "", color: "indigo" },
              on: { click: _vm.aggiungi }
            },
            [_vm._v("\n            Inserisci\n        ")]
          ),
          _vm._v(" "),
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
              "items-per-page": 10
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
                        attrs: { color: "red", small: "" },
                        on: {
                          click: function($event) {
                            return _vm.elimina(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    mdi-delete\n                "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);