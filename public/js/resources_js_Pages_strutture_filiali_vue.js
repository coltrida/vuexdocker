(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_strutture_Filiali_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Filiali",
  data: function data() {
    return {
      filiale: {},
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
        text: 'Cap',
        value: 'cap',
        "class": "indigo white--text"
      }, {
        text: 'telefono',
        value: 'telefono',
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
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('filiali', {
    fetchFiliali: 'fetchFiliali',
    addFiliale: 'addFiliale',
    eliminaFiliale: 'eliminaFiliale'
  })), {}, {
    aggiungi: function aggiungi() {
      this.addFiliale(this.filiale);
      this.filiale = {};
    },
    elimina: function elimina(id) {
      this.eliminaFiliale(id);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('filiali', {
    getFiliali: 'getFiliali'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/strutture/Filiali.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/strutture/Filiali.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filiali.vue?vue&type=template&id=6658023a&scoped=true& */ "./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true&");
/* harmony import */ var _Filiali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filiali.vue?vue&type=script&lang=js& */ "./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Filiali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6658023a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/strutture/Filiali.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filiali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Filiali.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filiali_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Filiali_vue_vue_type_template_id_6658023a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Filiali.vue?vue&type=template&id=6658023a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/strutture/Filiali.vue?vue&type=template&id=6658023a&scoped=true& ***!
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
      _c("h2", [_vm._v("Filiali")]),
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
                    attrs: { label: "Nome Filiale" },
                    model: {
                      value: _vm.filiale.nome,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "nome", $$v)
                      },
                      expression: "filiale.nome"
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
                      value: _vm.filiale.indirizzo,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "indirizzo", $$v)
                      },
                      expression: "filiale.indirizzo"
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
                      value: _vm.filiale.citta,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "citta", $$v)
                      },
                      expression: "filiale.citta"
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
                      value: _vm.filiale.provincia,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "provincia", $$v)
                      },
                      expression: "filiale.provincia"
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
                    attrs: { label: "cap" },
                    model: {
                      value: _vm.filiale.cap,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "cap", $$v)
                      },
                      expression: "filiale.cap"
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
                    attrs: { label: "telefono" },
                    model: {
                      value: _vm.filiale.telefono,
                      callback: function($$v) {
                        _vm.$set(_vm.filiale, "telefono", $$v)
                      },
                      expression: "filiale.telefono"
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
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers,
              items: _vm.getFiliali,
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