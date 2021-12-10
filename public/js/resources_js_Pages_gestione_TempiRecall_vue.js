(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_TempiRecall_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Messaggio",
  props: ['textMessaggio'],
  methods: {
    cancella: function cancella() {
      this.$emit('cancellaMessaggio');
    }
  },
  computed: {
    dialog: function dialog() {
      return !!this.textMessaggio;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Components_Messaggio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/Messaggio */ "./resources/js/Components/Messaggio.vue");
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
  name: "TempiRecall",
  components: {
    Messaggio: _Components_Messaggio__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      tipologia: {},
      "switch": null,
      textMessaggio: null,
      headers1: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'recall',
        value: 'recall',
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
    this.fetchTipologie();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('tipologie', {
    fetchTipologie: 'fetchTipologie',
    addTipologia: 'addTipologia',
    modificaTipologia: 'modificaTipologia'
  })), {}, {
    invia: function invia() {
      if (this["switch"]) {
        this.modificaTipologia(this.tipologia);
        this["switch"] = null;
        this.textMessaggio = 'Tipologia Modificata';
      } else {
        this.addTipologia(this.tipologia);
        this.textMessaggio = 'Tipologia Inserita';
      }

      this.tipologia = {};
    },
    elimina: function elimina(id) {},
    seleziona: function seleziona(item) {
      this.tipologia = item;
      this["switch"] = 1;
    },
    cancellaMessaggio: function cancellaMessaggio() {
      this.textMessaggio = '';
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('tipologie', {
    getTipologie: 'getTipologie'
  })), {}, {
    nomeBtn: function nomeBtn() {
      return this["switch"] ? 'modifica' : 'inserisci';
    }
  })
});

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/Messaggio.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Messaggio.vue?vue&type=template&id=40862498&scoped=true& */ "./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&");
/* harmony import */ var _Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messaggio.vue?vue&type=script&lang=js& */ "./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "40862498",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Messaggio.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/TempiRecall.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/gestione/TempiRecall.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TempiRecall.vue?vue&type=template&id=011addfc&scoped=true& */ "./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true&");
/* harmony import */ var _TempiRecall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TempiRecall.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TempiRecall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "011addfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/TempiRecall.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Messaggio.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messaggio.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempiRecall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempiRecall.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempiRecall_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Messaggio_vue_vue_type_template_id_40862498_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Messaggio.vue?vue&type=template&id=40862498&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TempiRecall_vue_vue_type_template_id_011addfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TempiRecall.vue?vue&type=template&id=011addfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Messaggio.vue?vue&type=template&id=40862498&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "text-center" },
    [
      _c(
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
              _c("v-card-text", { staticClass: "pt-4" }, [
                _c("h2", [_vm._v(_vm._s(_vm.textMessaggio))])
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary", text: "" },
                      on: { click: _vm.cancella }
                    },
                    [_vm._v("\n                    Chiudi\n                ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/TempiRecall.vue?vue&type=template&id=011addfc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Tempi Recall")]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c("messaggio", {
            attrs: { textMessaggio: _vm.textMessaggio },
            on: { cancellaMessaggio: _vm.cancellaMessaggio }
          }),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6", lg: "6" } },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers1,
                      items: _vm.getTipologie,
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
                                attrs: { color: "red", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.elimina(item.id)
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
                                    return _vm.seleziona(item)
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
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6", lg: "6" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4", lg: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "tipo" },
                            model: {
                              value: _vm.tipologia.nome,
                              callback: function($$v) {
                                _vm.$set(_vm.tipologia, "nome", $$v)
                              },
                              expression: "tipologia.nome"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4", lg: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "tempo recall" },
                            model: {
                              value: _vm.tipologia.recall,
                              callback: function($$v) {
                                _vm.$set(_vm.tipologia, "recall", $$v)
                              },
                              expression: "tipologia.recall"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "4", lg: "4" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "success",
                                dark: "",
                                block: _vm.$vuetify.breakpoint.xs
                              },
                              on: { click: _vm.invia }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.nomeBtn) +
                                  "\n                        "
                              )
                            ]
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