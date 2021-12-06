(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_personale_Settimana_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Settimana",
  data: function data() {
    return {
      text: 'left',
      headers1: [{
        text: 'Orario',
        width: 50,
        align: 'start',
        sortable: false,
        value: 'orario',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        width: 80,
        align: 'start',
        sortable: false,
        value: 'fullname',
        "class": "indigo white--text"
      }, {
        text: 'Luogo',
        width: 70,
        align: 'start',
        sortable: false,
        value: 'luogo',
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.Echo.channel("appuntamentoChannel").listen(".task-created", function (e) {
      if (_this.text === 'left') {
        _this.fetchAppuntamentiLunedi(_this.getIdUser);

        _this.fetchAppuntamentiMartedi(_this.getIdUser);

        _this.fetchAppuntamentiMercoledi(_this.getIdUser);

        _this.fetchAppuntamentiGiovedi(_this.getIdUser);

        _this.fetchAppuntamentiVenerdi(_this.getIdUser);

        _this.fetchAppuntamentiSabato(_this.getIdUser);
      } else {
        _this.prossimoLunedi(_this.getIdUser);

        _this.prossimoMartedi(_this.getIdUser);

        _this.prossimoMarcoledi(_this.getIdUser);

        _this.prossimoGiovedi(_this.getIdUser);

        _this.prossimoVenerdi(_this.getIdUser);

        _this.prossimoSabato(_this.getIdUser);
      }
    });
    this.fetchAppuntamentiLunedi(this.getIdUser);
    this.fetchAppuntamentiMartedi(this.getIdUser);
    this.fetchAppuntamentiMercoledi(this.getIdUser);
    this.fetchAppuntamentiGiovedi(this.getIdUser);
    this.fetchAppuntamentiVenerdi(this.getIdUser);
    this.fetchAppuntamentiSabato(this.getIdUser);
    this.fetchDateSettimana();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('appuntamenti', {
    fetchAppuntamentiLunedi: 'fetchAppuntamentiLunedi',
    fetchAppuntamentiMartedi: 'fetchAppuntamentiMartedi',
    fetchAppuntamentiMercoledi: 'fetchAppuntamentiMercoledi',
    fetchAppuntamentiGiovedi: 'fetchAppuntamentiGiovedi',
    fetchAppuntamentiVenerdi: 'fetchAppuntamentiVenerdi',
    fetchAppuntamentiSabato: 'fetchAppuntamentiSabato',
    prossimoLunedi: 'prossimoLunedi',
    prossimoMartedi: 'prossimoMartedi',
    prossimoMarcoledi: 'prossimoMarcoledi',
    prossimoGiovedi: 'prossimoGiovedi',
    prossimoVenerdi: 'prossimoVenerdi',
    prossimoSabato: 'prossimoSabato',
    fetchDateSettimana: 'fetchDateSettimana',
    fetchDateSettimanaProssima: 'fetchDateSettimanaProssima'
  })), {}, {
    attuale: function attuale() {
      this.fetchAppuntamentiLunedi(this.getIdUser);
      this.fetchAppuntamentiMartedi(this.getIdUser);
      this.fetchAppuntamentiMercoledi(this.getIdUser);
      this.fetchAppuntamentiGiovedi(this.getIdUser);
      this.fetchAppuntamentiVenerdi(this.getIdUser);
      this.fetchAppuntamentiSabato(this.getIdUser);
      this.fetchDateSettimana();
    },
    prossima: function prossima() {
      this.prossimoLunedi(this.getIdUser);
      this.prossimoMartedi(this.getIdUser);
      this.prossimoMarcoledi(this.getIdUser);
      this.prossimoGiovedi(this.getIdUser);
      this.prossimoVenerdi(this.getIdUser);
      this.prossimoSabato(this.getIdUser);
      this.fetchDateSettimanaProssima();
    }
  }),
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('appuntamenti', {
    getAppLun: 'getAppLun',
    getAppMar: 'getAppMar',
    getAppMer: 'getAppMer',
    getAppGio: 'getAppGio',
    getAppVen: 'getAppVen',
    getAppSab: 'getAppSab',
    getDateSettimana: 'getDateSettimana'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getIdUser: 'getIdUser'
  }))
});

/***/ }),

/***/ "./resources/js/Pages/personale/Settimana.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/personale/Settimana.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settimana.vue?vue&type=template&id=5d31719b&scoped=true& */ "./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true&");
/* harmony import */ var _Settimana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settimana.vue?vue&type=script&lang=js& */ "./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Settimana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5d31719b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/personale/Settimana.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settimana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settimana.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settimana_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settimana_vue_vue_type_template_id_5d31719b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settimana.vue?vue&type=template&id=5d31719b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/personale/Settimana.vue?vue&type=template&id=5d31719b&scoped=true& ***!
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
    { staticClass: "my-2" },
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("h2", [_vm._v("Agenda Settimana")])
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "flex justify-end", attrs: { cols: "6" } },
            [
              _c(
                "v-btn-toggle",
                {
                  attrs: { tile: "", color: "deep-purple accent-3", group: "" },
                  model: {
                    value: _vm.text,
                    callback: function($$v) {
                      _vm.text = $$v
                    },
                    expression: "text"
                  }
                },
                [
                  _c(
                    "v-btn",
                    { attrs: { value: "left" }, on: { click: _vm.attuale } },
                    [_vm._v("\n                    Attuale\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { value: "center" }, on: { click: _vm.prossima } },
                    [_vm._v("\n                    Prossima\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { staticClass: "flex", attrs: { cols: "12" } },
                [
                  _c(
                    "v-col",
                    [
                      _c("h3", [
                        _vm._v("Lunedi - " + _vm._s(_vm.getDateSettimana[0]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppLun,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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
                    [
                      _c("h3", [
                        _vm._v("Martedì - " + _vm._s(_vm.getDateSettimana[1]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppMar,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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
                    [
                      _c("h3", [
                        _vm._v("Mercoledì - " + _vm._s(_vm.getDateSettimana[2]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppMer,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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
                    [
                      _c("h3", [
                        _vm._v("Giovedì - " + _vm._s(_vm.getDateSettimana[3]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppGio,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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
                    [
                      _c("h3", [
                        _vm._v("Venerdì - " + _vm._s(_vm.getDateSettimana[4]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppVen,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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
                    [
                      _c("h3", [
                        _vm._v("Sabato - " + _vm._s(_vm.getDateSettimana[10]))
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          dense: "",
                          headers: _vm.headers1,
                          items: _vm.getAppSab,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.fullname",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.fullname) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.orario",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.orario) +
                                        "\n                            "
                                    )
                                  ]
                                )
                              ]
                            }
                          },
                          {
                            key: "item.luogo",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "div",
                                  { staticStyle: { "font-size": "10px" } },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(item.luogo) +
                                        "\n                            "
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