(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_magazzino_Centrale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      carica: false,
      carica2: false,
      selected: [],
      idFilialeSelezionata: '',
      destinazione: '',
      filialeId: '',
      productDaInserire: {},
      headersRiepilogo: [{
        text: 'Nome',
        align: 'start',
        value: 'nome',
        "class": "indigo white--text"
      }, {
        text: 'Quantità',
        value: 'totPresenti',
        "class": "indigo white--text"
      }],
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
        text: 'Cat.',
        value: 'categoria',
        "class": "indigo white--text"
      }, {
        text: 'Prezzo',
        value: 'prezzolistino',
        "class": "indigo white--text"
      }, {
        text: 'Iva',
        value: 'iva',
        "class": "indigo white--text"
      }, {
        text: 'gg. x Reso',
        value: 'giorniRimasti',
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        value: 'matricola',
        "class": "indigo white--text"
      }, {
        text: '',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Fornitore',
        width: 100,
        value: 'listino.fornitore.nome',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        width: 100,
        value: 'listino.nome',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Q.ta',
        width: 30,
        value: 'quantita',
        sortable: false,
        "class": "indigo white--text"
      }],
      headers3: [{
        text: 'Fornitore',
        width: 110,
        value: 'fornitore',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Nome',
        width: 100,
        value: 'nome',
        sortable: false,
        "class": "indigo white--text"
      }, {
        text: 'Matricola',
        width: 30,
        value: 'matricola',
        sortable: false,
        "class": "indigo white--text"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchFornitori();
    this.fetchInCentrale();
    this.fetchRiepilogoInCentrale();
    this.fetchRichiestaApparecchi();
    window.Echo.channel("logisticaChannel").listen(".task-created", function (e) {
      _this.fetchRichiestaApparecchi();
    });
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('product', {
    fetchInCentrale: 'fetchInCentrale',
    fetchRiepilogoInCentrale: 'fetchRiepilogoInCentrale',
    addProdottoInCentrale: 'addProdottoInCentrale',
    assegnaProdottiToFiliale: 'assegnaProdottiToFiliale',
    assegnaProdottiFilialeInAnticipo: 'assegnaProdottiFilialeInAnticipo',
    confermaProdottiToFiliale: 'confermaProdottiToFiliale',
    eliminaProdotto: 'eliminaProdotto'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('fornitori', {
    fetchFornitori: 'fetchFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('listino', {
    fetchListinoFromFornitore: 'fetchListinoFromFornitore'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('filiali', {
    fetchFilialeById: 'fetchFilialeById',
    fetchRichiestaApparecchi: 'fetchRichiestaApparecchi'
  })), {}, {
    caricaProdotti: function caricaProdotti() {
      if (this.productDaInserire.fornitore_id) {
        this.fetchListinoFromFornitore(this.productDaInserire.fornitore_id);
      }
    },
    inserisciProdotto: function inserisciProdotto() {
      var _this2 = this;

      this.productDaInserire.filiale_id = 0;
      this.productDaInserire.stato_id = 8;
      this.productDaInserire.user_id = parseInt(this.getIdUser);
      this.addProdottoInCentrale(this.productDaInserire).then(function () {
        _this2.productDaInserire.matricola = null;

        _this2.$store.commit('product/resetRiepilogoCentrale');

        _this2.fetchRiepilogoInCentrale();
      });
    },
    assegnaProdotti: function assegnaProdotti(idFiliale, nomeFiliale) {
      var _this3 = this;

      this.destinazione = nomeFiliale;
      this.filialeId = idFiliale;
      this.assegnaProdottiToFiliale({
        'filiale_id': idFiliale,
        'prodotti': this.selected
      }).then(function () {
        _this3.fetchRiepilogoInCentrale();
      });
    },
    assegnaProdottiToFilialeInAnticipo: function assegnaProdottiToFilialeInAnticipo() {
      var _this4 = this;

      this.assegnaProdottiFilialeInAnticipo({
        'filiale_id': this.idFilialeSelezionata,
        'prodotti': this.selected
      }).then(function () {
        _this4.fetchRiepilogoInCentrale();
      });
    },
    confermaProdotti: function confermaProdotti() {
      var _this5 = this;

      this.carica2 = true;
      var filiale = this.filialeId ? this.filialeId : this.idFilialeSelezionata;
      this.confermaProdottiToFiliale({
        'filiale_id': filiale,
        'prodotti': this.getDaSpedire
      }).then(function () {
        _this5.$store.commit('filiali/confermaProdottiToFiliale');

        _this5.destinazione = '';
        _this5.filialeId = '';
        _this5.selected = [];
        _this5.carica2 = false;
      });
    },
    elimina: function elimina(id) {
      this.eliminaProdotto(id);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('product', {
    getInCentrale: 'getInCentrale',
    getRiepilogoInCentrale: 'getRiepilogoInCentrale',
    getSoglie: 'getSoglie'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('fornitori', {
    getFornitori: 'getFornitori'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('listino', {
    getListino: 'getListino'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('filiali', {
    getFiliali: 'getFiliali',
    getFilialeById: 'getFilialeById',
    getRichiestaApparecchi: 'getRichiestaApparecchi',
    getDaSpedire: 'getDaSpedire'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getRuolo: 'getRuolo',
    getIdUser: 'getIdUser'
  })), {}, {
    verificaCampi: function verificaCampi() {
      return this.productDaInserire.matricola && this.productDaInserire.listino_id && this.productDaInserire.fornitore_id ? false : true;
    },
    bloccaAssegna: function bloccaAssegna() {
      return this.selected.length === 0 ? true : false;
    },
    bloccaAssegnaInAnticipo: function bloccaAssegnaInAnticipo() {
      return this.selected.length === 0 || !this.idFilialeSelezionata ? true : false;
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/magazzino/Centrale.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/magazzino/Centrale.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Centrale.vue?vue&type=template&id=25a4622c&scoped=true& */ "./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true&");
/* harmony import */ var _Centrale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Centrale.vue?vue&type=script&lang=js& */ "./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Centrale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "25a4622c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/magazzino/Centrale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Centrale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Centrale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Centrale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Centrale_vue_vue_type_template_id_25a4622c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Centrale.vue?vue&type=template&id=25a4622c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/magazzino/Centrale.vue?vue&type=template&id=25a4622c&scoped=true& ***!
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
      _c("h2", [_vm._v("Magazzino Centrale")]),
      _vm._v(" "),
      _vm.getRuolo === "admin" || _vm.getRuolo === "amministrazione"
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  attrs: { cols: "12", md: "12", lg: "3", xs: "12", sm: "12" }
                },
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
                      value: _vm.productDaInserire.fornitore_id,
                      callback: function($$v) {
                        _vm.$set(_vm.productDaInserire, "fornitore_id", $$v)
                      },
                      expression: "productDaInserire.fornitore_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  attrs: { cols: "12", md: "12", lg: "3", xs: "12", sm: "12" }
                },
                [
                  _c("v-select", {
                    attrs: {
                      "item-value": "id",
                      "item-text": "nome",
                      items: _vm.getListino,
                      label: "listino"
                    },
                    model: {
                      value: _vm.productDaInserire.listino_id,
                      callback: function($$v) {
                        _vm.$set(_vm.productDaInserire, "listino_id", $$v)
                      },
                      expression: "productDaInserire.listino_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  attrs: { cols: "12", md: "12", lg: "3", xs: "12", sm: "12" }
                },
                [
                  _c("v-text-field", {
                    attrs: { label: "matricola" },
                    model: {
                      value: _vm.productDaInserire.matricola,
                      callback: function($$v) {
                        _vm.$set(_vm.productDaInserire, "matricola", $$v)
                      },
                      expression: "productDaInserire.matricola"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  attrs: { cols: "12", md: "12", lg: "3", xs: "12", sm: "12" }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        disabled: _vm.verificaCampi,
                        block: _vm.$vuetify.breakpoint.xs
                      },
                      on: { click: _vm.inserisciProdotto }
                    },
                    [
                      _vm._v(
                        "\n                    Inserisci\n                "
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
            "div",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    [
                      _c("h3", { staticClass: "mt-5" }, [
                        _vm._v("Riepilogo In Centrale")
                      ]),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          headers: _vm.headersRiepilogo,
                          dense: "",
                          items: _vm.getRiepilogoInCentrale
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "mt-3" },
                        [
                          _c(
                            "v-col",
                            { staticClass: "d-flex align-end m-0 p-0" },
                            [
                              _c("h3", { staticClass: "mt-5" }, [
                                _vm._v("Presenti In Centrale")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.getInCentrale.length > 0 &&
                          (_vm.getRuolo === "admin" ||
                            _vm.getRuolo === "amministrazione")
                            ? _c(
                                "v-col",
                                { staticClass: "d-flex align-end m-0 p-0" },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      "item-value": "id",
                                      "hide-details": "",
                                      "item-text": "nome",
                                      items: _vm.getFiliali,
                                      label: "filiale"
                                    },
                                    model: {
                                      value: _vm.idFilialeSelezionata,
                                      callback: function($$v) {
                                        _vm.idFilialeSelezionata = $$v
                                      },
                                      expression: "idFilialeSelezionata"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.getInCentrale.length > 0 &&
                          (_vm.getRuolo === "admin" ||
                            _vm.getRuolo === "amministrazione")
                            ? _c(
                                "v-col",
                                {
                                  staticClass:
                                    "d-flex align-end justify-center m-0 p-0"
                                },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        disabled: _vm.bloccaAssegnaInAnticipo,
                                        small: "",
                                        color: "primary"
                                      },
                                      on: {
                                        click:
                                          _vm.assegnaProdottiToFilialeInAnticipo
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Assegna\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-data-table", {
                        staticClass: "elevation-1 mt-3",
                        attrs: {
                          headers: _vm.headers1,
                          dense: "",
                          "show-select":
                            _vm.getRuolo === "admin" ||
                            _vm.getRuolo === "amministrazione",
                          items: _vm.getInCentrale,
                          "items-per-page": 10
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.getRuolo === "admin" ||
                                _vm.getRuolo === "amministrazione"
                                  ? _c(
                                      "div",
                                      [
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
                                              "\n                                    mdi-delete\n                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.giorniRimasti",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                item.giorniRimasti < 10
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "v-chip",
                                          { attrs: { color: "red", dark: "" } },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.giorniRimasti) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  : _c("div", [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(item.giorniRimasti) +
                                          "\n                            "
                                      )
                                    ])
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.selected,
                          callback: function($$v) {
                            _vm.selected = $$v
                          },
                          expression: "selected"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.getRuolo === "admin" || _vm.getRuolo === "amministrazione"
                    ? _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _vm._l(_vm.getRichiestaApparecchi, function(filiale) {
                            return _c("div", { key: filiale.id }, [
                              filiale.richieste.length > 0
                                ? _c(
                                    "div",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c("v-col", [
                                            _c("h3", { staticClass: "mt-5" }, [
                                              _vm._v(
                                                _vm._s(filiale.nome) +
                                                  " richiede:"
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "d-flex align-end justify-end"
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    disabled: _vm.bloccaAssegna,
                                                    small: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.assegnaProdotti(
                                                        filiale.id,
                                                        filiale.nome
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                        Assegna\n                                    "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-data-table", {
                                        staticClass: "elevation-1 mt-3",
                                        attrs: {
                                          headers: _vm.headers2,
                                          dense: "",
                                          items: filiale.richieste,
                                          "hide-default-footer": ""
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ])
                          }),
                          _vm._v(" "),
                          _vm.getDaSpedire.length > 0
                            ? _c(
                                "div",
                                { staticClass: "mt-10" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-col", [
                                        _c("h3", { staticClass: "mt-5" }, [
                                          _vm._v("Immatricolati:")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _vm.carica2
                                        ? _c("v-col", [
                                            _c(
                                              "div",
                                              { staticClass: "text-center" },
                                              [
                                                _c("v-progress-circular", {
                                                  attrs: {
                                                    indeterminate: "",
                                                    color: "primary"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ])
                                        : _c(
                                            "v-col",
                                            {
                                              staticClass:
                                                "d-flex align-end justify-end"
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    disabled: _vm.bloccaAssegna,
                                                    small: "",
                                                    color: "success"
                                                  },
                                                  on: {
                                                    click: _vm.confermaProdotti
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                    Conferma\n                                "
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-data-table", {
                                    staticClass: "elevation-1 mt-3",
                                    attrs: {
                                      headers: _vm.headers3,
                                      dense: "",
                                      items: _vm.getDaSpedire,
                                      "hide-default-footer": ""
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e()
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