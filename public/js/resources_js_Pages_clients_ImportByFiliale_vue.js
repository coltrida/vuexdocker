(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_clients_ImportByFiliale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Inserisci",
  data: function data() {
    return {
      caricaFile: {
        path: 'app/public/',
        fileUp: {},
        nomeFile: '',
        idUser: ''
      },
      carica: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('clients', {
    importClientsByFiliale: 'importClientsByFiliale',
    importClientsXml: 'importClientsXml'
  })), {}, {
    importaXml: function importaXml() {
      var _this = this;

      this.caricaFile.nomeFile = 'file' + this.getIdUser + '.xml';
      this.caricaFile.idUser = this.getIdUser;
      this.carica = true;
      this.importClientsByFiliale(this.caricaFile).then(function () {
        //  let pathnomefile = this.caricaFile.nomeFile;
        _this.importClientsXml(_this.caricaFile).then(function () {
          _this.caricaFile = {};
          _this.carica = false;
        });
      });
    },
    reset: function reset() {
      this.$store.commit('clients/resetClientMessaggio');
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getIdUser: 'getIdUser'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('clients', {
    getClientMessaggio: 'getClientMessaggio'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/clients/ImportByFiliale.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/clients/ImportByFiliale.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true& */ "./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true&");
/* harmony import */ var _ImportByFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportByFiliale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ImportByFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "979fc304",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/ImportByFiliale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportByFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportByFiliale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportByFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImportByFiliale_vue_vue_type_template_id_979fc304_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/ImportByFiliale.vue?vue&type=template&id=979fc304&scoped=true& ***!
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
      _c("h2", [_vm._v("Importa Cliente")]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _vm.getClientMessaggio
            ? _c(
                "v-alert",
                { attrs: { type: "info" } },
                [
                  _c(
                    "v-row",
                    { attrs: { align: "center" } },
                    [
                      _c("v-col", { staticClass: "grow" }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.getClientMessaggio) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "shrink" },
                        [
                          _c("v-btn", { on: { click: _vm.reset } }, [
                            _vm._v("Chiudi")
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
            : _vm._e(),
          _vm._v(" "),
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
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: {
                        cols: "12",
                        md: "12",
                        lg: "4",
                        xs: "12",
                        sm: "12"
                      }
                    },
                    [
                      _c("v-file-input", {
                        attrs: { "truncate-length": "15", accept: ".xml" },
                        model: {
                          value: _vm.caricaFile.fileUp,
                          callback: function($$v) {
                            _vm.$set(_vm.caricaFile, "fileUp", $$v)
                          },
                          expression: "caricaFile.fileUp"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: {
                        cols: "12",
                        md: "12",
                        lg: "2",
                        xs: "12",
                        sm: "12"
                      }
                    },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "success",
                            dark: "",
                            block: _vm.$vuetify.breakpoint.xs
                          },
                          on: { click: _vm.importaXml }
                        },
                        [
                          _vm._v(
                            "\n                    Importa\n                "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);