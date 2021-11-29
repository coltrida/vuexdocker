(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_magazzino_Riepilogo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Riepilogo",
  data: function data() {
    return {
      headers: [{
        text: 'Filiale',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Prodotti Presenti',
        value: 'products_presenti_count',
        "class": "indigo white--text"
      }, {
        text: 'Prodotti In Prova',
        value: 'products_in_prova_count',
        "class": "indigo white--text"
      }, {
        text: 'Prodotti Richiesti',
        value: 'products_richiesti_count',
        "class": "indigo white--text"
      }, {
        text: 'Prodotti In Arrivo',
        value: 'products_in_arrivo_count',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    this.fetchRiepilogoMagazzini();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('product', {
    fetchRiepilogoMagazzini: 'fetchRiepilogoMagazzini'
  })), {}, {
    sumField: function sumField(key) {
      return this.getRiepilogoMagazzini.reduce(function (a, b) {
        return a + (b[key] || 0);
      }, 0);
    }
  }),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('product', {
    getRiepilogoMagazzini: 'getRiepilogoMagazzini'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/magazzino/Riepilogo.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/magazzino/Riepilogo.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true& */ "./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true&");
/* harmony import */ var _Riepilogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Riepilogo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Riepilogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ffff0c74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/magazzino/Riepilogo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Riepilogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Riepilogo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Riepilogo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riepilogo_vue_vue_type_template_id_ffff0c74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Riepilogo.vue?vue&type=template&id=ffff0c74&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-data-table",
        {
          staticClass: "elevation-1 mt-3",
          attrs: { headers: _vm.headers, items: _vm.getRiepilogoMagazzini }
        },
        [
          _c("template", { slot: "body.append" }, [
            _c("tr", { staticClass: "pink--text" }, [
              _c("th", { staticClass: "title" }, [_vm._v("Totali")]),
              _vm._v(" "),
              _c("th", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    _vm.sumField("products_presenti_count").toLocaleString("it")
                  )
                )
              ]),
              _vm._v(" "),
              _c("th", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    _vm.sumField("products_in_prova_count").toLocaleString("it")
                  )
                )
              ]),
              _vm._v(" "),
              _c("th", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    _vm
                      .sumField("products_richiesti_count")
                      .toLocaleString("it")
                  )
                )
              ]),
              _vm._v(" "),
              _c("th", { staticClass: "title" }, [
                _vm._v(
                  _vm._s(
                    _vm
                      .sumField("products_in_arrivo_count")
                      .toLocaleString("it")
                  )
                )
              ])
            ])
          ])
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