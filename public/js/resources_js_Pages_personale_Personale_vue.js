(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_personale_Personale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Listino",
  data: function data() {
    return {
      user: {},
      headers1: [{
        text: 'Id',
        align: 'start',
        sortable: false,
        value: 'id',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'email',
        value: 'email',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Id',
        align: 'start',
        sortable: false,
        value: 'id',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'email',
        value: 'email',
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
    this.fetchRuoli();
    this.fetchAudio();
    this.fetchAmm();
    this.fetchCall();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudio: 'fetchAudio',
    fetchAmm: 'fetchAmm',
    fetchCall: 'fetchCall',
    addAudio: 'addAudio',
    addAmm: 'addAmm',
    addCall: 'addCall',
    eliminaAudio: 'eliminaAudio',
    eliminaAmm: 'eliminaAmm',
    eliminaCall: 'eliminaCall'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('ruoli', {
    fetchRuoli: 'fetchRuoli'
  })), {}, {
    aggiungi: function aggiungi() {
      if (this.user.ruolo_id === 2) {
        this.addAudio(this.user);
      } else if (this.user.ruolo_id === 3) {
        this.addAmm(this.user);
      } else {
        this.addCall(this.user);
      }

      this.user = {};
    },
    eliminaAudioprotesista: function eliminaAudioprotesista(id) {
      this.eliminaAudio(id);
    },
    eliminaAmministrativo: function eliminaAmministrativo(id) {
      this.eliminaAmm(id);
    },
    eliminaCallCenter: function eliminaCallCenter(id) {
      this.eliminaCall(id);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudio: 'getAudio',
    getAmm: 'getAmm',
    getCall: 'getCall'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('ruoli', {
    getRuoli: 'getRuoli'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/personale/Personale.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/personale/Personale.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personale.vue?vue&type=template&id=51dffb22&scoped=true& */ "./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true&");
/* harmony import */ var _Personale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Personale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Personale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "51dffb22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/personale/Personale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Personale_vue_vue_type_template_id_51dffb22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Personale.vue?vue&type=template&id=51dffb22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Personale.vue?vue&type=template&id=51dffb22&scoped=true& ***!
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
  return _c("div", [
    _c("h2", [_vm._v("Personale")]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "v-row",
          { staticClass: "mb-9" },
          [
            _c(
              "v-col",
              { attrs: { cols: "4", sm: "4" } },
              [
                _c("v-text-field", {
                  attrs: {
                    counter: "25",
                    hint: "Massimo 25 caratteri",
                    label: "Nominativo"
                  },
                  model: {
                    value: _vm.user.name,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "name", $$v)
                    },
                    expression: "user.name"
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
                    value: _vm.user.email,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "email", $$v)
                    },
                    expression: "user.email"
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
                _c("v-select", {
                  attrs: {
                    "item-value": "id",
                    "item-text": "nome",
                    items: _vm.getRuoli,
                    label: "ruolo"
                  },
                  model: {
                    value: _vm.user.ruolo_id,
                    callback: function($$v) {
                      _vm.$set(_vm.user, "ruolo_id", $$v)
                    },
                    expression: "user.ruolo_id"
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
        ),
        _vm._v(" "),
        _c(
          "v-row",
          [
            _c(
              "v-col",
              { attrs: { cols: "6" } },
              [
                _c("h2", [_vm._v("Audioprotesisti")]),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    headers: _vm.headers1,
                    items: _vm.getAudio,
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
                                  return _vm.eliminaAudioprotesista(item.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            mdi-delete\n                        "
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
              { attrs: { cols: "6" } },
              [
                _c("h2", [_vm._v("Amministrativi")]),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    headers: _vm.headers2,
                    items: _vm.getAmm,
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
                                  return _vm.eliminaAmministrativo(item.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            mdi-delete\n                        "
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("h2", { staticClass: "mt-10" }, [_vm._v("Call Center")]),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    headers: _vm.headers2,
                    items: _vm.getCall,
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
                                  return _vm.eliminaCallCenter(item.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            mdi-delete\n                        "
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);