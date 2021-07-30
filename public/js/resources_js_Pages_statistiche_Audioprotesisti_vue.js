(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_statistiche_Audioprotesisti_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Bgt Anno',
        sortable: false,
        value: 'budgetAnno',
        "class": "indigo white--text"
      }, {
        text: 'Genn',
        sortable: false,
        value: 'gennaio',
        "class": "indigo white--text"
      }, {
        text: 'Febb',
        sortable: false,
        value: 'febbraio',
        "class": "indigo white--text"
      }, {
        text: 'Marzo',
        sortable: false,
        value: 'marzo',
        "class": "indigo white--text"
      }, {
        text: 'April',
        sortable: false,
        value: 'aprile',
        "class": "indigo white--text"
      }, {
        text: 'Magg',
        sortable: false,
        value: 'maggio',
        "class": "indigo white--text"
      }, {
        text: 'Giug',
        sortable: false,
        value: 'giugno',
        "class": "indigo white--text"
      }, {
        text: 'Lugl',
        sortable: false,
        value: 'luglio',
        "class": "indigo white--text"
      }, {
        text: 'Agos',
        sortable: false,
        value: 'agosto',
        "class": "indigo white--text"
      }, {
        text: 'Sett',
        sortable: false,
        value: 'settembre',
        "class": "indigo white--text"
      }, {
        text: 'Otto',
        sortable: false,
        value: 'ottobre',
        "class": "indigo white--text"
      }, {
        text: 'Nove',
        sortable: false,
        value: 'novembre',
        "class": "indigo white--text"
      }, {
        text: 'Dice',
        sortable: false,
        value: 'dicembre',
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
    this.fetchSituazioneAnno();
  },
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchSituazioneAnno: 'fetchSituazioneAnno'
  })),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudioConBgt: 'getAudioConBgt'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/statistiche/Audioprotesisti.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/statistiche/Audioprotesisti.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true& */ "./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true&");
/* harmony import */ var _Audioprotesisti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audioprotesisti.vue?vue&type=script&lang=js& */ "./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Audioprotesisti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "076d1c6f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/statistiche/Audioprotesisti.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audioprotesisti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Audioprotesisti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audioprotesisti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audioprotesisti_vue_vue_type_template_id_076d1c6f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/statistiche/Audioprotesisti.vue?vue&type=template&id=076d1c6f&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Statistiche Audioprotesisti")]),
      _vm._v(" "),
      _c(
        "v-container",
        _vm._l(_vm.getAudioConBgt, function(audio) {
          return _c(
            "div",
            { key: audio.id, staticClass: "mb-5" },
            [
              _c(
                "div",
                {
                  staticStyle: {
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "space-between"
                  }
                },
                [
                  _c("h2", [_vm._v(_vm._s(audio.name))]),
                  _vm._v(" "),
                  _c("h4", [
                    _vm._v(
                      "Media Vendita " +
                        _vm._s(
                          audio.valori[1].budgetAnno /
                            audio.valori[3].budgetAnno
                        )
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("v-data-table", {
                staticClass: "elevation-1 mt-3",
                attrs: {
                  headers: _vm.headers,
                  items: audio.valori,
                  "item-key": audio.valori.nome,
                  "hide-default-footer": ""
                }
              })
            ],
            1
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);