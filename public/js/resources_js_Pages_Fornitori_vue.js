(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Fornitori_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
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
  name: "Fornitore",
  data: function data() {
    return {
      fornitore: {},
      headers: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Indirizzo',
        value: 'indirizzo',
        "class": "indigo white--text"
      }, {
        text: 'Citta',
        value: 'citta',
        "class": "indigo white--text"
      }, {
        text: 'PR',
        value: 'provincia',
        "class": "indigo white--text"
      }, {
        text: 'cap',
        value: 'cap',
        "class": "indigo white--text"
      }, {
        text: 'Tel',
        value: 'telefono',
        "class": "indigo white--text"
      }, {
        text: 'e-mail',
        value: 'email',
        "class": "indigo white--text"
      }, {
        text: 'PEC',
        value: 'pec',
        "class": "indigo white--text"
      }, {
        text: 'Cod. Un.',
        value: 'univoco',
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
    this.fetchFornitori();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('fornitori', {
    fetchFornitori: 'fetchFornitori',
    addFornitore: 'addFornitore',
    eliminaFornitore: 'eliminaFornitore'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addFornitore(this.fornitore);
      this.fornitore = {};
    },
    elimina: function elimina(id) {
      this.eliminaFornitore(id);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('fornitori', {
    getFornitori: 'getFornitori'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/Fornitori.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Fornitori.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fornitori.vue?vue&type=template&id=712f49dd&scoped=true& */ "./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true&");
/* harmony import */ var _Fornitori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fornitori.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Fornitori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "712f49dd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Fornitori.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fornitori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fornitori.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fornitori_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fornitori_vue_vue_type_template_id_712f49dd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fornitori.vue?vue&type=template&id=712f49dd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Fornitori.vue?vue&type=template&id=712f49dd&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("h2", [_vm._v("Fornitori")]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "Nome Fornitore"
                    },
                    model: {
                      value: _vm.fornitore.nome,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "nome", $$v)
                      },
                      expression: "fornitore.nome"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "Indirizzo"
                    },
                    model: {
                      value: _vm.fornitore.indirizzo,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "indirizzo", $$v)
                      },
                      expression: "fornitore.indirizzo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "Citta"
                    },
                    model: {
                      value: _vm.fornitore.citta,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "citta", $$v)
                      },
                      expression: "fornitore.citta"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "cap"
                    },
                    model: {
                      value: _vm.fornitore.cap,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "cap", $$v)
                      },
                      expression: "fornitore.cap"
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
                { attrs: { cols: "2", sm: "2" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "telefono"
                    },
                    model: {
                      value: _vm.fornitore.telefono,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "telefono", $$v)
                      },
                      expression: "fornitore.telefono"
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
                      label: "provincia"
                    },
                    model: {
                      value: _vm.fornitore.provincia,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "provincia", $$v)
                      },
                      expression: "fornitore.provincia"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "email"
                    },
                    model: {
                      value: _vm.fornitore.email,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "email", $$v)
                      },
                      expression: "fornitore.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      counter: "25",
                      hint: "Massimo 25 caratteri",
                      label: "pec"
                    },
                    model: {
                      value: _vm.fornitore.pec,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "pec", $$v)
                      },
                      expression: "fornitore.pec"
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
                      label: "univoco"
                    },
                    model: {
                      value: _vm.fornitore.univoco,
                      callback: function($$v) {
                        _vm.$set(_vm.fornitore, "univoco", $$v)
                      },
                      expression: "fornitore.univoco"
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
              attrs: { color: "success", dark: "" },
              on: { click: _vm.aggiungi }
            },
            [_vm._v("\n            Inserisci\n        ")]
          ),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers,
              items: _vm.getFornitori,
              "items-per-page": 5
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
                          "\n                        mdi-delete\n                    "
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