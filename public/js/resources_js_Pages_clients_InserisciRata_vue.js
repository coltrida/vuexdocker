(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_clients_InserisciRata_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Inserisci",
  data: function data() {
    return {
      nomeCliente: '',
      valid: true,
      newRata: {},
      importoRules: [function (v) {
        return !!v || 'importo obbligatorio';
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchFattura(this.rottaIdFattura).then(function () {
      _this.nomeCliente = _this.getFattura.prova.client.fullname;
    });
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('rate', {
    addRata: 'addRata',
    fetchFattura: 'fetchFattura'
  })), {}, {
    annulla: function annulla() {
      this.$router.go(-1);
    },
    aggiungi: function aggiungi() {
      var _this2 = this;

      this.$refs.form.validate();
      this.newRata.fatturaId = this.rottaIdFattura;
      this.addRata(this.newRata).then(function () {
        _this2.newRata = {};

        _this2.$router.push({
          name: 'rateClienti'
        });
      });
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('rate', {
    getFattura: 'getFattura'
  })), {}, {
    rottaIdFattura: function rottaIdFattura() {
      return this.$route.params.fatturaId ? this.$route.params.fatturaId : null;
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/clients/InserisciRata.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/clients/InserisciRata.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true& */ "./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true&");
/* harmony import */ var _InserisciRata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InserisciRata.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InserisciRata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6d3a56f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/InserisciRata.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InserisciRata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InserisciRata.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InserisciRata_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InserisciRata_vue_vue_type_template_id_6d3a56f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/InserisciRata.vue?vue&type=template&id=6d3a56f2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Inserisci rata Pagamento")]),
      _vm._v(" "),
      _c(
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "v-container",
            [
              _c(
                "v-card",
                { attrs: { elevation: "2" } },
                [
                  _c("v-card-title", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.nomeCliente) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-subtitle", [
                    _vm._v(
                      "\n                Totale Fattura: " +
                        _vm._s(_vm.getFattura.tot_fattura) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-card-subtitle", [
                    _vm._v(
                      "\n                Al saldo Fattura: " +
                        _vm._s(_vm.getFattura.al_saldo) +
                        "\n            "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mt-4" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "3", sm: "3" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          rules: _vm.importoRules,
                          label: "Importo*",
                          required: ""
                        },
                        model: {
                          value: _vm.newRata.importo,
                          callback: function($$v) {
                            _vm.$set(_vm.newRata, "importo", $$v)
                          },
                          expression: "newRata.importo"
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
                        attrs: { label: "Note" },
                        model: {
                          value: _vm.newRata.note,
                          callback: function($$v) {
                            _vm.$set(_vm.newRata, "note", $$v)
                          },
                          expression: "newRata.note"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", sm: "6" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", dark: "" },
                          on: { click: _vm.aggiungi }
                        },
                        [
                          _vm._v(
                            "\n                    Inserisci\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", dark: "" },
                          on: { click: _vm.annulla }
                        },
                        [
                          _vm._v(
                            "\n                    Annulla\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);