(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_AssegnaBudget_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
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
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'Bgt Anno',
        sortable: false,
        value: 'budget.budgetAnno',
        "class": "indigo white--text"
      }, {
        text: 'Stipendio',
        sortable: false,
        value: 'budget.stipendio',
        "class": "indigo white--text"
      }, {
        text: 'Provv.',
        sortable: false,
        value: 'budget.provvigione',
        "class": "indigo white--text"
      }, {
        text: 'Genn',
        sortable: false,
        value: 'budget.gennaio',
        "class": "indigo white--text"
      }, {
        text: 'Febb',
        sortable: false,
        value: 'budget.febbraio',
        "class": "indigo white--text"
      }, {
        text: 'Marzo',
        sortable: false,
        value: 'budget.marzo',
        "class": "indigo white--text"
      }, {
        text: 'April',
        sortable: false,
        value: 'budget.aprile',
        "class": "indigo white--text"
      }, {
        text: 'Magg',
        sortable: false,
        value: 'budget.maggio',
        "class": "indigo white--text"
      }, {
        text: 'Giug',
        sortable: false,
        value: 'budget.giugno',
        "class": "indigo white--text"
      }, {
        text: 'Lugl',
        sortable: false,
        value: 'budget.luglio',
        "class": "indigo white--text"
      }, {
        text: 'Agos',
        sortable: false,
        value: 'budget.agosto',
        "class": "indigo white--text"
      }, {
        text: 'Sett',
        sortable: false,
        value: 'budget.settembre',
        "class": "indigo white--text"
      }, {
        text: 'Otto',
        sortable: false,
        value: 'budget.ottobre',
        "class": "indigo white--text"
      }, {
        text: 'Nove',
        sortable: false,
        value: 'budget.novembre',
        "class": "indigo white--text"
      }, {
        text: 'Dice',
        sortable: false,
        value: 'budget.dicembre',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      assegna: {
        budgetAnno: 0,
        stipendio: 0,
        provvigione: 0,
        mese: []
      }
    };
  },
  mounted: function mounted() {
    this.fetchAudioConBgt();
    this.fetchAudioSenzaBgt();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudioConBgt: 'fetchAudioConBgt',
    fetchAudioSenzaBgt: 'fetchAudioSenzaBgt',
    assegnaBgt: 'assegnaBgt',
    modificaBgt: 'modificaBgt'
  })), {}, {
    assegnaBudget: function assegnaBudget() {
      var _this = this;

      this.assegna.idAudio = this.AudioSelected[0].id;

      if (this["switch"]) {
        this.modificaBgt(this.assegna).then(function () {
          _this["switch"] = 0;
          _this.assegna = {
            budgetAnno: 0,
            stipendio: 0,
            provvigione: 0,
            mese: []
          };
        });
      } else {
        this.assegnaBgt(this.assegna).then(function () {
          _this["switch"] = 0;
          _this.assegna = {
            budgetAnno: 0,
            stipendio: 0,
            provvigione: 0,
            mese: []
          };
        });
      }
    },
    modifica: function modifica(item, indice) {
      this["switch"] = 1;
      this.assegna.idBudget = item.budget.id;
      this.AudioSelected = [];
      this.getAudioSenzaBgt.unshift(item);
      this.getAudioConBgt.splice(indice, 1);
      this.AudioSelected.unshift(item);
      this.assegna.budgetAnno = item.budget.budgetAnno;
      this.assegna.stipendio = item.budget.stipendio;
      this.assegna.provvigione = item.budget.provvigione;
      this.assegna.mese[1] = item.budget.gennaio;
      this.assegna.mese[2] = item.budget.febbraio;
      this.assegna.mese[3] = item.budget.marzo;
      this.assegna.mese[4] = item.budget.aprile;
      this.assegna.mese[5] = item.budget.maggio;
      this.assegna.mese[6] = item.budget.giugno;
      this.assegna.mese[7] = item.budget.luglio;
      this.assegna.mese[8] = item.budget.agosto;
      this.assegna.mese[9] = item.budget.settembre;
      this.assegna.mese[10] = item.budget.ottobre;
      this.assegna.mese[11] = item.budget.novembre;
      this.assegna.mese[12] = item.budget.dicembre;
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudioConBgt: 'getAudioConBgt',
    getAudioSenzaBgt: 'getAudioSenzaBgt'
  })), {}, {
    sommaProvvigioni: function sommaProvvigioni() {
      return this.assegna.mese.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0) + '%';
    },
    sommaBgt: function sommaBgt() {
      return parseFloat(this.sommaProvvigioni) * parseFloat(this.assegna.budgetAnno) / 100;
    },
    utile: function utile() {
      return parseFloat(this.assegna.budgetAnno) - parseFloat(this.assegna.stipendio) * 12 - parseFloat(this.assegna.budgetAnno) * parseFloat(this.assegna.provvigione) / 100;
    },
    textBtn: function textBtn() {
      return this["switch"] ? 'modifica' : 'inserisci';
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& */ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&");
/* harmony import */ var _AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssegnaBudget.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8aba179e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/AssegnaBudget.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssegnaBudget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& ***!
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
      _c("h2", [_vm._v("Assegna Budget")]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { color: "success", dark: "" },
          on: { click: _vm.assegnaBudget }
        },
        [_vm._v("\n        " + _vm._s(_vm.textBtn) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c("h3", [_vm._v("Audioprotesisti senza Budget")]),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.getAudioSenzaBgt,
                      "single-select": _vm.singleSelect,
                      "hide-default-footer": "",
                      "show-select": ""
                    },
                    model: {
                      value: _vm.AudioSelected,
                      callback: function($$v) {
                        _vm.AudioSelected = $$v
                      },
                      expression: "AudioSelected"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c("h3", [_vm._v("Budget Anno")]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "budget" },
                            model: {
                              value: _vm.assegna.budgetAnno,
                              callback: function($$v) {
                                _vm.$set(_vm.assegna, "budgetAnno", $$v)
                              },
                              expression: "assegna.budgetAnno"
                            }
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
                            attrs: { label: "stipendio" },
                            model: {
                              value: _vm.assegna.stipendio,
                              callback: function($$v) {
                                _vm.$set(_vm.assegna, "stipendio", $$v)
                              },
                              expression: "assegna.stipendio"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "3" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "prov" },
                            model: {
                              value: _vm.assegna.provvigione,
                              callback: function($$v) {
                                _vm.$set(_vm.assegna, "provvigione", $$v)
                              },
                              expression: "assegna.provvigione"
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
                { attrs: { cols: "4" } },
                [
                  _c("h3", [_vm._v("Utile Annuo")]),
                  _vm._v(" "),
                  _c(
                    "v-chip",
                    { staticClass: "ma-2", attrs: { color: "orange" } },
                    [
                      _vm._v(
                        "\n                    € " +
                          _vm._s(_vm.utile) +
                          "\n                "
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
              _c(
                "v-col",
                [
                  _c(
                    "v-chip",
                    { staticClass: "ma-2", attrs: { color: "orange" } },
                    [
                      _vm._v(
                        "\n                    Verifica: " +
                          _vm._s(_vm.sommaProvvigioni) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-chip",
                { staticClass: "ma-2", attrs: { color: "orange" } },
                [
                  _vm._v(
                    "\n                    Verifica Bgt: " +
                      _vm._s(_vm.sommaBgt) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-col")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            _vm._l(12, function(mese) {
              return _c(
                "v-col",
                { key: mese },
                [
                  _c("v-text-field", {
                    attrs: { label: "Bgt " + mese },
                    model: {
                      value: _vm.assegna.mese[mese],
                      callback: function($$v) {
                        _vm.$set(_vm.assegna.mese, mese, $$v)
                      },
                      expression: "assegna.mese[mese]"
                    }
                  }),
                  _vm._v(" "),
                  _vm.assegna.mese[mese] && _vm.assegna.budget
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "primary", "text-color": "white" }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                (parseFloat(_vm.assegna.budget) *
                                  parseFloat(_vm.assegna.mese[mese])) /
                                  100
                              ) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("h3", [_vm._v("Audioprotesisti Con Budget")]),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers2,
              items: _vm.getAudioConBgt,
              "hide-default-footer": ""
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
                        attrs: { color: "blue", small: "" },
                        on: {
                          click: function($event) {
                            _vm.modifica(
                              item,
                              _vm.getAudioConBgt
                                .map(function(x) {
                                  return x.id
                                })
                                .indexOf(item.id)
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    mdi-pencil\n                "
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