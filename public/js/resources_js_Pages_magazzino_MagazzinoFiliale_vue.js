(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_magazzino_MagazzinoFiliale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MagazzinoFiliale",
  data: function data() {
    return {
      productRichiesto: {},
      headers1: [{
        text: 'Fornitore',
        align: 'start',
        value: 'fornitore',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Categoria',
        value: 'categoria',
        "class": "indigo white--text"
      },
      /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
      {
        text: 'Prezzo',
        value: 'prezzolistino',
        "class": "indigo white--text"
      }, {
        text: 'Iva',
        value: 'iva',
        "class": "indigo white--text"
      }, {
        text: 'GG reso',
        value: 'giorniTempoDiReso',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        value: 'matricola',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Fornitore',
        align: 'start',
        value: 'fornitore',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Categoria',
        value: 'categoria',
        "class": "indigo white--text"
      },
      /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
      {
        text: 'Prezzo',
        value: 'prezzolistino',
        "class": "indigo white--text"
      }, {
        text: 'Iva',
        value: 'iva',
        "class": "indigo white--text"
      }, {
        text: 'GG reso',
        value: 'giorniTempoDiReso',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        value: 'matricola',
        "class": "indigo white--text"
      }, {
        text: 'Cliente',
        value: 'cliente',
        "class": "indigo white--text"
      }],
      headers3: [{
        text: 'Fornitore',
        align: 'start',
        value: 'fornitore',
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Categoria',
        value: 'categoria',
        "class": "indigo white--text"
      },
      /*{ text: 'Costo', value: 'costo', class: "indigo white--text" },*/
      {
        text: 'Prezzo',
        value: 'prezzolistino',
        "class": "indigo white--text"
      }, {
        text: 'Iva',
        value: 'iva',
        "class": "indigo white--text"
      }, {
        text: 'GG reso',
        value: 'giorniTempoDiReso',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        value: 'matricola',
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
    var _this = this;

    var accesso = false;
    this.getFiliali.forEach(function (element) {
      if (element.id === _this.rottaIdFiliale) {
        accesso = true;
      }
    });

    if (accesso) {
      this.fetchInFiliale(this.rottaIdFiliale);
      this.fetchInProva(this.rottaIdFiliale);
      this.fetchRichiesti(this.rottaIdFiliale);
      this.fetchInArrivo(this.rottaIdFiliale);
      this.fetchFornitori();
      this.fetchFilialeById(this.rottaIdFiliale);
      window.Echo.channel("logisticaChannel").listen(".task-created", function (e) {
        _this.fetchInFiliale(_this.rottaIdFiliale);

        _this.fetchInProva(_this.rottaIdFiliale);

        _this.fetchRichiesti(_this.rottaIdFiliale);

        _this.fetchInArrivo(_this.rottaIdFiliale);
      });
    }
  },
  watch: {
    rottaIdFiliale: function rottaIdFiliale() {
      this.fetchInFiliale(this.rottaIdFiliale);
      this.fetchInProva(this.rottaIdFiliale);
      this.fetchRichiesti(this.rottaIdFiliale);
      this.fetchInArrivo(this.rottaIdFiliale);
      this.fetchFilialeById(this.rottaIdFiliale);
    }
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('product', {
    fetchInFiliale: 'fetchInFiliale',
    fetchInProva: 'fetchInProva',
    fetchRichiesti: 'fetchRichiesti',
    fetchInArrivo: 'fetchInArrivo',
    richiediProduct: 'richiediProduct',
    eliminaRichiesta: 'eliminaRichiesta',
    switchArrivato: 'switchArrivato'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('fornitori', {
    fetchFornitori: 'fetchFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('listino', {
    fetchListinoFromFornitore: 'fetchListinoFromFornitore'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('filiali', {
    fetchFilialeById: 'fetchFilialeById'
  })), {}, {
    caricaProdotti: function caricaProdotti() {
      if (this.productRichiesto.fornitore_id) {
        this.fetchListinoFromFornitore(this.productRichiesto.fornitore_id);
      }
    },
    richiedi: function richiedi() {
      this.productRichiesto.filiale_id = this.rottaIdFiliale;
      this.productRichiesto.stato_id = 6;
      this.richiediProduct(this.productRichiesto);
      this.productRichiesto = {};
    },
    elimina: function elimina(id) {
      this.eliminaRichiesta(id);
    },
    arrivato: function arrivato(id) {
      this.switchArrivato(id);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('product', {
    getInFiliale: 'getInFiliale',
    getInProva: 'getInProva',
    getRichiesti: 'getRichiesti',
    getInArrivo: 'getInArrivo'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('fornitori', {
    getFornitori: 'getFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('listino', {
    getListino: 'getListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('filiali', {
    getFiliali: 'getFiliali',
    getFilialeById: 'getFilialeById'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getRuolo: 'getRuolo'
  })), {}, {
    rottaIdFiliale: function rottaIdFiliale() {
      return this.$route.params.filialeId ? this.$route.params.filialeId : null;
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/magazzino/MagazzinoFiliale.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/magazzino/MagazzinoFiliale.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true& */ "./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true&");
/* harmony import */ var _MagazzinoFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MagazzinoFiliale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MagazzinoFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "01243e1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/magazzino/MagazzinoFiliale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazzinoFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MagazzinoFiliale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazzinoFiliale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MagazzinoFiliale_vue_vue_type_template_id_01243e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/MagazzinoFiliale.vue?vue&type=template&id=01243e1a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Magazzino " + _vm._s(_vm.getFilialeById.nome))]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _vm.getRuolo != "admin"
            ? _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "3", sm: "3" } },
                    [
                      _c("v-select", {
                        attrs: {
                          "item-value": "id",
                          "item-text": "nome",
                          items: _vm.getFornitori,
                          label: "fornitore"
                        },
                        on: {
                          change: function($event) {
                            return _vm.caricaProdotti()
                          }
                        },
                        model: {
                          value: _vm.productRichiesto.fornitore_id,
                          callback: function($$v) {
                            _vm.$set(_vm.productRichiesto, "fornitore_id", $$v)
                          },
                          expression: "productRichiesto.fornitore_id"
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
                          items: _vm.getListino,
                          label: "listino"
                        },
                        model: {
                          value: _vm.productRichiesto.listino_id,
                          callback: function($$v) {
                            _vm.$set(_vm.productRichiesto, "listino_id", $$v)
                          },
                          expression: "productRichiesto.listino_id"
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
                        attrs: { label: "quantita" },
                        model: {
                          value: _vm.productRichiesto.quantita,
                          callback: function($$v) {
                            _vm.$set(_vm.productRichiesto, "quantita", $$v)
                          },
                          expression: "productRichiesto.quantita"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "success", dark: "" },
                          on: { click: _vm.richiedi }
                        },
                        [
                          _vm._v(
                            "\n                    Richiedi\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("h3", { staticClass: "mt-5" }, [_vm._v("Presenti")]),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers1,
              items: _vm.getInFiliale,
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
          }),
          _vm._v(" "),
          _c("h3", { staticClass: "mt-5" }, [_vm._v("In prova")]),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers2,
              items: _vm.getInProva,
              "items-per-page": 10
            }
          }),
          _vm._v(" "),
          _c("h3", { staticClass: "mt-5" }, [_vm._v("Richiesti")]),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers1,
              items: _vm.getRichiesti,
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
          }),
          _vm._v(" "),
          _c("h3", { staticClass: "mt-5" }, [_vm._v("In Arrivo")]),
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1 mt-3",
            attrs: {
              headers: _vm.headers3,
              items: _vm.getInArrivo,
              "items-per-page": 10
            },
            scopedSlots: _vm._u([
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          attrs: { color: "green", small: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.arrivato(item.id)
                                            }
                                          }
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [
                                      _vm._v(
                                        "\n                            mdi-truck\n                        "
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
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Arrivato")])]
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