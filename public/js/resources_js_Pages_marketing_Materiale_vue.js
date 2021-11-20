(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_marketing_Materiale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Materiale",
  data: function data() {
    return {
      newMateriale: {},
      carica: false,
      header: [{
        text: 'Codice',
        align: 'start',
        sortable: false,
        value: 'codice',
        "class": "indigo white--text"
      }, {
        text: 'Materiale',
        align: 'start',
        sortable: false,
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: ' ',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.carica = true;
    this.fetchMateriale().then(function () {
      _this.carica = false;
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('materiale', {
    fetchMateriale: 'fetchMateriale',
    addMateriale: 'addMateriale',
    eliminaMateriale: 'eliminaMateriale',
    modificaMateriale: 'modificaMateriale'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addMateriale(this.newMateriale);
      this.newMateriale = {};
    },
    elimina: function elimina(id) {
      this.eliminaMateriale(id);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('materiale', {
    getMateriale: 'getMateriale'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getRuolo: 'getRuolo'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/marketing/Materiale.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/marketing/Materiale.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Materiale.vue?vue&type=template&id=43ef86dc&scoped=true& */ "./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true&");
/* harmony import */ var _Materiale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Materiale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Materiale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "43ef86dc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/marketing/Materiale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Materiale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Materiale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Materiale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Materiale_vue_vue_type_template_id_43ef86dc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Materiale.vue?vue&type=template&id=43ef86dc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Materiale.vue?vue&type=template&id=43ef86dc&scoped=true& ***!
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
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c("h2", [_vm._v("Materiale Marketing")]),
          _vm._v(" "),
          _vm.getRuolo == "admin"
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: { label: "Nuovo Materiale" },
                        model: {
                          value: _vm.newMateriale.nome,
                          callback: function($$v) {
                            _vm.$set(_vm.newMateriale, "nome", $$v)
                          },
                          expression: "newMateriale.nome"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("v-text-field", {
                        attrs: { label: "codice" },
                        model: {
                          value: _vm.newMateriale.codice,
                          callback: function($$v) {
                            _vm.$set(_vm.newMateriale, "codice", $$v)
                          },
                          expression: "newMateriale.codice"
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
                          attrs: { color: "indigo", dark: "" },
                          on: { click: _vm.aggiungi }
                        },
                        [
                          _vm._v(
                            "\n                    Inserisci\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { cols: "12" } }, [
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
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            headers: _vm.header,
                            items: _vm.getMateriale
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "item.actions",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _vm.getRuolo == "admin"
                                    ? _c(
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
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.elimina(
                                                                  item.id
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
                                                          "\n                                        mdi-delete\n                                    "
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
                                        [
                                          _vm._v(" "),
                                          _c("span", [_vm._v("Elimina")])
                                        ]
                                      )
                                    : _vm._e()
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



/***/ })

}]);