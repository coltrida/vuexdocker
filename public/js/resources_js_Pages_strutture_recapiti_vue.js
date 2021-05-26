(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_strutture_Recapiti_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Recapiti",
  data: function data() {
    return {
      recapito: {},
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
        text: 'Provincia',
        value: 'provincia',
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
    this.fetchRecapitiPerAudio();
    this.fetchAudio();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('recapiti', {
    fetchRecapitiPerAudio: 'fetchRecapitiPerAudio',
    addRecapito: 'addRecapito',
    eliminaRecapito: 'eliminaRecapito'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudio: 'fetchAudio'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addRecapito(this.recapito);
      this.recapito = {};
    },
    elimina: function elimina(id, idUser, indice) {
      this.eliminaRecapito({
        'id': id,
        'idUser': idUser,
        'indice': indice
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('recapiti', {
    getRecapiti: 'getRecapiti'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudio: 'getAudio'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/strutture/Recapiti.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/strutture/Recapiti.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Recapiti.vue?vue&type=template&id=7bd886da&scoped=true& */ "./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true&");
/* harmony import */ var _Recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recapiti.vue?vue&type=script&lang=js& */ "./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7bd886da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/strutture/Recapiti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Recapiti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Recapiti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Recapiti_vue_vue_type_template_id_7bd886da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Recapiti.vue?vue&type=template&id=7bd886da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Recapiti.vue?vue&type=template&id=7bd886da&scoped=true& ***!
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
      _c("h2", [_vm._v("Recapiti")]),
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
                    attrs: { label: "Nome Recapito" },
                    model: {
                      value: _vm.recapito.nome,
                      callback: function($$v) {
                        _vm.$set(_vm.recapito, "nome", $$v)
                      },
                      expression: "recapito.nome"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4", sm: "4" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "Indirizzo" },
                    model: {
                      value: _vm.recapito.indirizzo,
                      callback: function($$v) {
                        _vm.$set(_vm.recapito, "indirizzo", $$v)
                      },
                      expression: "recapito.indirizzo"
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
                    attrs: { label: "Citta'" },
                    model: {
                      value: _vm.recapito.citta,
                      callback: function($$v) {
                        _vm.$set(_vm.recapito, "citta", $$v)
                      },
                      expression: "recapito.citta"
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
                    attrs: { label: "PR" },
                    model: {
                      value: _vm.recapito.provincia,
                      callback: function($$v) {
                        _vm.$set(_vm.recapito, "provincia", $$v)
                      },
                      expression: "recapito.provincia"
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
                      "item-text": "name",
                      items: _vm.getAudio,
                      label: "Audio"
                    },
                    model: {
                      value: _vm.recapito.user_id,
                      callback: function($$v) {
                        _vm.$set(_vm.recapito, "user_id", $$v)
                      },
                      expression: "recapito.user_id"
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
          _vm._l(_vm.getRecapiti, function(audio) {
            return _c(
              "div",
              { key: audio.id },
              [
                _c("h2", [_vm._v(_vm._s(audio.name))]),
                _vm._v(" "),
                _c("v-data-table", {
                  staticClass: "elevation-1 mt-3",
                  attrs: {
                    headers: _vm.headers,
                    items: audio.recapito,
                    "items-per-page": 10
                  },
                  scopedSlots: _vm._u(
                    [
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
                                    _vm.elimina(
                                      item.id,
                                      audio.id,
                                      audio.recapito
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
                                  "\n                        mdi-delete\n                    "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);