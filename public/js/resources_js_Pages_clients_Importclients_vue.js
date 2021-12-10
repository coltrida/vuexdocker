(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_clients_Importclients_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js& ***!
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
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Inserisci",
  data: function data() {
    return {
      //   nomeFile: 'app/public/file.xml',
      caricaFile: {
        path: 'app/public/',
        fileUp: {},
        nomeFile: ''
      },
      carica: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('clients', {
    importClients: 'importClients',
    importClientsXml: 'importClientsXml',
    salvaFileAdmin: 'salvaFileAdmin'
  })), {}, {
    importa: function importa() {
      var _this = this;

      this.carica = true;
      this.caricaFile.nomeFile = 'carica';
      this.salvaFileAdmin(this.caricaFile).then(function () {
        //  let pathnomefile = this.caricaFile.nomeFile;
        _this.importClients().then(function () {
          _this.caricaFile = {};
          _this.carica = false;
        });
      });
      /*this.importClients().then(() => {
          this.carica = false;
      });*/
    }
    /*importaXml(){
        this.carica = true;
        this.importClientsXml(this.nomeFile).then(() => {
            this.carica = false;
        });
    },*/

  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('clients', {
    getImportati: 'getImportati'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/clients/Importclients.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/clients/Importclients.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true& */ "./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true&");
/* harmony import */ var _Importclients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Importclients.vue?vue&type=script&lang=js& */ "./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Importclients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9f8d01ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/clients/Importclients.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Importclients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Importclients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Importclients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Importclients_vue_vue_type_template_id_9f8d01ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/clients/Importclients.vue?vue&type=template&id=9f8d01ba&scoped=true& ***!
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
      _c("h2", [_vm._v("Importa Cliente")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Anagrafiche importate: " + _vm._s(_vm.getImportati))]),
      _vm._v(" "),
      _c(
        "v-container",
        [
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
                    { attrs: { cols: "4", sm: "4" } },
                    [
                      _c("v-file-input", {
                        attrs: {
                          "truncate-length": "15",
                          accept: ".xlsx, .xls"
                        },
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
                    { attrs: { cols: "2", sm: "2" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", dark: "" },
                          on: { click: _vm.importa }
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