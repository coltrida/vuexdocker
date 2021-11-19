(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_marketing_Marketing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Marketing",
  data: function data() {
    return {
      newCanale: '',
      newOtorino: {},
      carica: false,
      header: [{
        text: 'Codice',
        align: 'start',
        sortable: false,
        value: 'cod',
        "class": "indigo white--text"
      }, {
        text: 'Canale Mkt',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      headerMedici: [{
        text: 'Codice',
        align: 'start',
        sortable: false,
        value: 'cod',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nominativo',
        "class": "indigo white--text"
      }, {
        text: 'Audio',
        align: 'start',
        sortable: false,
        value: 'client',
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

    this.carica = true;
    this.fetchCanali().then(function () {
      _this.fetchMedici(0).then(function () {
        _this.fetchAudio().then(function () {
          _this.carica = false;
        });
      });
    });
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('marketing', {
    fetchCanali: 'fetchCanali',
    addCanale: 'addCanale',
    eliminaCanale: 'eliminaCanale'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('medici', {
    fetchMedici: 'fetchMedici',
    addMedico: 'addMedico',
    eliminaMedico: 'eliminaMedico'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudio: 'fetchAudio'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addCanale(this.newCanale);
      this.newCanale = '';
    },
    aggiungiOtorino: function aggiungiOtorino() {
      var _this2 = this;

      this.addMedico(this.newOtorino).then(function () {
        _this2.newOtorino = {};
      });
    },
    eliminaOtorino: function eliminaOtorino(idMedico) {
      this.eliminaMedico(idMedico);
    },
    elimina: function elimina(id) {
      this.eliminaCanale(id);
    },
    aggiungiAudio: function aggiungiAudio(medico) {
      this.newOtorino = medico;
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('marketing', {
    getCanali: 'getCanali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('medici', {
    getMedici: 'getMedici'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudio: 'getAudio'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/marketing/Marketing.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/marketing/Marketing.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true& */ "./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true&");
/* harmony import */ var _Marketing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marketing.vue?vue&type=script&lang=js& */ "./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Marketing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6dc9cce4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/marketing/Marketing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Marketing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Marketing_vue_vue_type_template_id_6dc9cce4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/marketing/Marketing.vue?vue&type=template&id=6dc9cce4&scoped=true& ***!
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
        { attrs: { cols: "5" } },
        [
          _c("h2", [_vm._v("Canali Marketing")]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "6" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "Nuovo Canale" },
                    model: {
                      value: _vm.newCanale,
                      callback: function($$v) {
                        _vm.newCanale = $$v
                      },
                      expression: "newCanale"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "indigo", dark: "" },
                  on: { click: _vm.aggiungi }
                },
                [_vm._v("\n                Inserisci\n            ")]
              )
            ],
            1
          ),
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
                          attrs: { headers: _vm.header, items: _vm.getCanali },
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
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "7" } },
        [
          _c("h2", [_vm._v("Otorini")]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c("v-text-field", {
                    attrs: { label: "Nome" },
                    model: {
                      value: _vm.newOtorino.nome,
                      callback: function($$v) {
                        _vm.$set(_vm.newOtorino, "nome", $$v)
                      },
                      expression: "newOtorino.nome"
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
                    attrs: { label: "Cognome" },
                    model: {
                      value: _vm.newOtorino.cognome,
                      callback: function($$v) {
                        _vm.$set(_vm.newOtorino, "cognome", $$v)
                      },
                      expression: "newOtorino.cognome"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                [
                  _c("v-select", {
                    attrs: {
                      "item-value": "id",
                      "item-text": "name",
                      items: _vm.getAudio,
                      label: "Audio"
                    },
                    model: {
                      value: _vm.newOtorino.userId,
                      callback: function($$v) {
                        _vm.$set(_vm.newOtorino, "userId", $$v)
                      },
                      expression: "newOtorino.userId"
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
                      on: { click: _vm.aggiungiOtorino }
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
          ),
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
                            headers: _vm.headerMedici,
                            items: _vm.getMedici
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "item.nominativo",
                              fn: function(ref) {
                                var item = ref.item
                                return [
                                  _c(
                                    "router-link",
                                    {
                                      staticStyle: { color: "black" },
                                      attrs: {
                                        to: {
                                          name: "orariMedici",
                                          params: {
                                            dottore:
                                              item.cognome + " " + item.nome
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            item.cognome + " " + item.nome
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                ]
                              }
                            },
                            {
                              key: "item.client",
                              fn: function(ref) {
                                var item = ref.item
                                return _vm._l(item.user, function(ele) {
                                  return _c("div", { key: ele.id }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(ele.name) +
                                        "\n                            "
                                    )
                                  ])
                                })
                              }
                            },
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
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.eliminaOtorino(
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
                                                          color: "green",
                                                          small: ""
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.aggiungiAudio(
                                                              item
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
                                                      "\n                                        mdi-plus\n                                    "
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
                                      _c("span", [_vm._v("Aggiungi Audio")])
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



/***/ })

}]);