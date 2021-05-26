(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_AssociaPersonale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AssociaPersonale",
  data: function data() {
    return {
      FilialeSelected: [],
      AudioSelected: [],
      AmmSelected: [],
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
        align: 'start',
        value: 'name',
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
    this.fetchAmm();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('filiali', {
    fetchFiliali: 'fetchFiliali',
    fetchAssociazioni: 'fetchAssociazioni',
    fetchAssocia: 'fetchAssocia',
    fetchDissocia: 'fetchDissocia'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudio: 'fetchAudio',
    fetchAmm: 'fetchAmm'
  })), {}, {
    associa: function associa() {
      var _this = this;

      this.fetchAssocia({
        'idFiliale': this.FilialeSelected[0].id,
        'Audio': this.AudioSelected,
        'Amm': this.AmmSelected
      }).then(function () {
        _this.FilialeSelected = [];
        _this.AudioSelected = [];
        _this.AmmSelected = [];
      });
    },
    elimina: function elimina(id) {
      //console.log(id)
      this.fetchDissocia(id);
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('filiali', {
    getFiliali: 'getFiliali',
    getAssociazioni: 'getAssociazioni'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudio: 'getAudio',
    getAmm: 'getAmm'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/gestione/AssociaPersonale.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/gestione/AssociaPersonale.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true& */ "./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true&");
/* harmony import */ var _AssociaPersonale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssociaPersonale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AssociaPersonale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1924039c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/AssociaPersonale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssociaPersonale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssociaPersonale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssociaPersonale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssociaPersonale_vue_vue_type_template_id_1924039c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssociaPersonale.vue?vue&type=template&id=1924039c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Associa Personale")]),
      _vm._v(" "),
      _c(
        "v-btn",
        { attrs: { color: "success", dark: "" }, on: { click: _vm.associa } },
        [_vm._v("\n        Associa\n    ")]
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
                { attrs: { cols: "3" } },
                [
                  _c("h3", [_vm._v("Filiali")]),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers1,
                      items: _vm.getFiliali,
                      "hide-default-footer": "",
                      "single-select": _vm.singleSelect,
                      "show-select": ""
                    },
                    model: {
                      value: _vm.FilialeSelected,
                      callback: function($$v) {
                        _vm.FilialeSelected = $$v
                      },
                      expression: "FilialeSelected"
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
                  _c("h3", [_vm._v("Audioprotesisti")]),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers2,
                      items: _vm.getAudio,
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
                { attrs: { cols: "3" } },
                [
                  _c("h3", [_vm._v("Amministrativi")]),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers2,
                      items: _vm.getAmm,
                      "hide-default-footer": "",
                      "show-select": ""
                    },
                    model: {
                      value: _vm.AmmSelected,
                      callback: function($$v) {
                        _vm.AmmSelected = $$v
                      },
                      expression: "AmmSelected"
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
                  _c("h3", [_vm._v("Associazioni")]),
                  _vm._v(" "),
                  _vm._l(_vm.getAssociazioni, function(filiale) {
                    return _c(
                      "div",
                      { key: filiale.id },
                      [
                        _c("v-data-table", {
                          staticClass: "elevation-1 mt-3",
                          attrs: {
                            headers: _vm.headers3,
                            items: filiale.users,
                            "hide-default-footer": ""
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
                                key: "header.name",
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);