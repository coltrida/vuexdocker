(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_Strumentazione_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Strumentazione",
  data: function data() {
    return {
      modificaSwitch: false,
      newStrumento: {},
      strumentoDaAssociare: {},
      singleSelect: true,
      headers1: [{
        text: 'Nome',
        align: 'start',
        value: 'nome',
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Nome',
        align: 'start',
        value: 'name',
        "class": "indigo white--text"
      }],
      headers3: [{
        text: 'Nome',
        width: 150,
        align: 'start',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        width: 200,
        align: 'start',
        value: 'matricola',
        "class": "indigo white--text"
      }, {
        text: 'Fornitore',
        width: 150,
        align: 'start',
        value: 'fornitore',
        "class": "indigo white--text"
      }, {
        text: 'Destinatario',
        width: 150,
        align: 'start',
        value: 'destinatario',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      headers4: [{
        text: 'Nome',
        align: 'start',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        align: 'start',
        value: 'matricola',
        "class": "indigo white--text"
      }, {
        text: 'Fornitore',
        align: 'start',
        value: 'fornitore',
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
    this.fetchFiliali();
    this.fetchAssociazioni();
    this.fetchAudio();
    this.fetchTuttiMedici();
    this.fetchStrumenti();
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('filiali', {
    fetchFiliali: 'fetchFiliali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudio: 'fetchAudio'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('medici', {
    fetchTuttiMedici: 'fetchTuttiMedici'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('strumentazione', {
    fetchStrumenti: 'fetchStrumenti',
    addStrumento: 'addStrumento',
    modificaStrumento: 'modificaStrumento',
    eliminaStrumento: 'eliminaStrumento',
    fetchAssociazioni: 'fetchAssociazioni',
    associaStrumento: 'associaStrumento'
  })), {}, {
    inserisciStrumentazione: function inserisciStrumentazione() {
      var _this = this;

      if (this.modificaSwitch) {
        this.modificaStrumento(this.newStrumento).then(function () {
          _this.newStrumento = {};
        });
      } else {
        this.addStrumento(this.newStrumento).then(function () {
          _this.newStrumento = {};
        });
      }

      this.modificaSwitch = false;
    },
    eliminaStrumentazione: function eliminaStrumentazione(id) {
      this.eliminaStrumento(id);
    },
    associa: function associa() {
      var _this2 = this;

      this.associaStrumento(this.strumentoDaAssociare).then(function () {
        _this2.strumentoDaAssociare = {};
      });
    },
    elimina: function elimina(id) {
      this.fetchDissocia(id);
    },
    modificaStrumentazione: function modificaStrumentazione(strumento) {
      this.modificaSwitch = true;
      this.newStrumento = strumento;
      this.$store.commit('strumentazione/eliminaStrumento', strumento.id);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('filiali', {
    getFiliali: 'getFiliali'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudio: 'getAudio'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('medici', {
    getMedici: 'getMedici'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('strumentazione', {
    getStrumenti: 'getStrumenti',
    getAssociazioni: 'getAssociazioni'
  })), {}, {
    btnName: function btnName() {
      return this.modificaSwitch ? 'modifica' : 'inserisci';
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/gestione/Strumentazione.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/gestione/Strumentazione.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true& */ "./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true&");
/* harmony import */ var _Strumentazione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Strumentazione.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Strumentazione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ba28d52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/Strumentazione.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Strumentazione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Strumentazione.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Strumentazione_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Strumentazione_vue_vue_type_template_id_5ba28d52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/Strumentazione.vue?vue&type=template&id=5ba28d52&scoped=true& ***!
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
    "div",
    [
      _c("h2", [_vm._v("Strumentazione")]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c("v-text-field", {
                attrs: { label: "Nome*", required: "" },
                model: {
                  value: _vm.newStrumento.nome,
                  callback: function($$v) {
                    _vm.$set(_vm.newStrumento, "nome", $$v)
                  },
                  expression: "newStrumento.nome"
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
                attrs: { label: "Matricola*", required: "" },
                model: {
                  value: _vm.newStrumento.matricola,
                  callback: function($$v) {
                    _vm.$set(_vm.newStrumento, "matricola", $$v)
                  },
                  expression: "newStrumento.matricola"
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
                attrs: { label: "Fornitore*", required: "" },
                model: {
                  value: _vm.newStrumento.fornitore,
                  callback: function($$v) {
                    _vm.$set(_vm.newStrumento, "fornitore", $$v)
                  },
                  expression: "newStrumento.fornitore"
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
                  on: { click: _vm.inserisciStrumentazione }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.btnName) +
                      "\n            "
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
        "v-btn",
        {
          staticClass: "mb-6",
          attrs: { color: "success", dark: "" },
          on: { click: _vm.associa }
        },
        [_vm._v("\n        Associa\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("h3", [_vm._v("Strumentazione")]),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1 mb-6",
                attrs: {
                  dense: "",
                  "item-key": "id",
                  value: "id",
                  headers: _vm.headers4,
                  items: _vm.getStrumenti,
                  "hide-default-footer": "",
                  "single-select": "",
                  "show-select": ""
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
                                return _vm.eliminaStrumentazione(item.id)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            mdi-delete\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            attrs: { color: "blue", small: "" },
                            on: {
                              click: function($event) {
                                return _vm.modificaStrumentazione(item)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            mdi-pencil\n                        "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.strumentoDaAssociare.id,
                  callback: function($$v) {
                    _vm.$set(_vm.strumentoDaAssociare, "id", $$v)
                  },
                  expression: "strumentoDaAssociare.id"
                }
              }),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("h3", [_vm._v("Filiali")]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getFiliali,
                          "hide-default-footer": "",
                          "single-select": _vm.singleSelect,
                          "show-select": ""
                        },
                        model: {
                          value: _vm.strumentoDaAssociare.filiale_id,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.strumentoDaAssociare,
                              "filiale_id",
                              $$v
                            )
                          },
                          expression: "strumentoDaAssociare.filiale_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("h3", [_vm._v("Audioprotesisti")]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          dense: "",
                          headers: _vm.headers2,
                          items: _vm.getAudio,
                          "hide-default-footer": "",
                          "single-select": _vm.singleSelect,
                          "show-select": ""
                        },
                        model: {
                          value: _vm.strumentoDaAssociare.user_id,
                          callback: function($$v) {
                            _vm.$set(_vm.strumentoDaAssociare, "user_id", $$v)
                          },
                          expression: "strumentoDaAssociare.user_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c("h3", [_vm._v("Medici")]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getMedici,
                          "hide-default-footer": "",
                          "single-select": _vm.singleSelect,
                          "show-select": ""
                        },
                        model: {
                          value: _vm.strumentoDaAssociare.medico_id,
                          callback: function($$v) {
                            _vm.$set(_vm.strumentoDaAssociare, "medico_id", $$v)
                          },
                          expression: "strumentoDaAssociare.medico_id"
                        }
                      })
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
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c("h3", [_vm._v("Associazioni")]),
              _vm._v(" "),
              _vm._l(_vm.getAssociazioni, function(filiale) {
                return _c(
                  "div",
                  { key: filiale.id },
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1 mb-4",
                      attrs: {
                        dense: "",
                        headers: _vm.headers3,
                        items: filiale.strumentazione,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "item.destinatario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.user_id
                                  ? _c("div", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(item.user.name) +
                                          "\n                            "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.medico_id
                                  ? _c("div", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(item.medico.nome) +
                                          "\n                            "
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
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
                                        return _vm.elimina(item.pivot.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                mdi-delete\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "header.nome",
                            fn: function(ref) {
                              var header = ref.header
                              return [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(filiale.nome) +
                                    "\n                        "
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