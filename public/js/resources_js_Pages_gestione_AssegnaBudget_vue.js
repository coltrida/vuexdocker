(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_gestione_AssegnaBudget_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AssegnaBudget",
  data: function data() {
    return {
      ricerca: {},
      AudioSelected: [],
      "switch": 0,
      singleSelect: true,
      totAnno: 0,
      totGennaio: 0,
      totFebbraio: 0,
      totMarzo: 0,
      totAprile: 0,
      totMaggio: 0,
      totGiugno: 0,
      totLuglio: 0,
      totAgosto: 0,
      totSettembre: 0,
      totOttobre: 0,
      totNovembre: 0,
      totDicembre: 0,
      headers: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }],
      headers2: [{
        text: 'Nome',
        align: 'start',
        sortable: false,
        value: 'name',
        "class": "indigo white--text"
      }, {
        text: 'Anno',
        sortable: false,
        value: 'molti_budget[0].anno',
        "class": "indigo white--text"
      }, {
        text: 'Bgt Anno',
        sortable: false,
        value: 'molti_budget[0].budgetAnno',
        "class": "indigo white--text"
      }, {
        text: 'Genn',
        sortable: false,
        value: 'molti_budget[0].gennaio',
        "class": "indigo white--text"
      }, {
        text: 'Febb',
        sortable: false,
        value: 'molti_budget[0].febbraio',
        "class": "indigo white--text"
      }, {
        text: 'Marzo',
        sortable: false,
        value: 'molti_budget[0].marzo',
        "class": "indigo white--text"
      }, {
        text: 'April',
        sortable: false,
        value: 'molti_budget[0].aprile',
        "class": "indigo white--text"
      }, {
        text: 'Magg',
        sortable: false,
        value: 'molti_budget[0].maggio',
        "class": "indigo white--text"
      }, {
        text: 'Giug',
        sortable: false,
        value: 'molti_budget[0].giugno',
        "class": "indigo white--text"
      }, {
        text: 'Lugl',
        sortable: false,
        value: 'molti_budget[0].luglio',
        "class": "indigo white--text"
      }, {
        text: 'Agos',
        sortable: false,
        value: 'molti_budget[0].agosto',
        "class": "indigo white--text"
      }, {
        text: 'Sett',
        sortable: false,
        value: 'molti_budget[0].settembre',
        "class": "indigo white--text"
      }, {
        text: 'Otto',
        sortable: false,
        value: 'molti_budget[0].ottobre',
        "class": "indigo white--text"
      }, {
        text: 'Nove',
        sortable: false,
        value: 'molti_budget[0].novembre',
        "class": "indigo white--text"
      }, {
        text: 'Dice',
        sortable: false,
        value: 'molti_budget[0].dicembre',
        "class": "indigo white--text"
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false,
        "class": "indigo white--text"
      }],
      assegna: {
        budgetAnno: 0,
        stipendio: 0,
        provvigione: 0,
        mese: []
      },
      percentuale: {
        mese: [8, 10, 6, 10, 10, 8, 8, 4, 8, 10, 10, 8]
      },
      nomeMese: ['gennaio', 'febbraio', 'marzo', 'apire', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
    };
  },
  mounted: function mounted() {},
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)('users', {
    fetchAudioConBgtAssegnato: 'fetchAudioConBgtAssegnato',
    fetchAudioSenzaBgt: 'fetchAudioSenzaBgt',
    assegnaBgt: 'assegnaBgt',
    modificaBgt: 'modificaBgt'
  })), {}, {
    assegnaBudget: function assegnaBudget() {
      var _this = this;

      this.assegna.anno = this.ricerca.anno;
      this.assegna.idAudio = this.AudioSelected[0].id;

      if (this["switch"]) {
        this.modificaBgt(this.assegna).then(function () {
          _this["switch"] = 0;
          _this.assegna = {
            budgetAnno: 0,
            anno: '',
            stipendio: 0,
            provvigione: 0,
            mese: []
          };
          _this.percentuale = {
            mese: []
          };
        });
      } else {
        this.assegnaBgt(this.assegna).then(function () {
          _this["switch"] = 0;
          _this.assegna = {
            budgetAnno: 0,
            anno: '',
            stipendio: 0,
            provvigione: 0,
            mese: []
          };
          _this.percentuale = {
            mese: []
          };
        });
      }
    },
    bgtMese: function bgtMese() {
      for (var i = 0; i < 12; i++) {
        this.assegna.mese[i] = (parseFloat(this.assegna.budgetAnno) * this.percentuale.mese[i] / 100).toFixed(0);
      }
    },
    modifica: function modifica(item, indice) {
      this["switch"] = 1;
      this.assegna.idBudget = item.molti_budget[0].id;
      this.AudioSelected = [];
      this.getAudioSenzaBgt.unshift(item);
      this.getAudioConBgt.splice(indice, 1);
      this.AudioSelected.unshift(item);
      this.assegna.budgetAnno = item.molti_budget[0].budgetAnno;
      this.assegna.stipendio = item.molti_budget[0].stipendio;
      this.assegna.provvigione = item.molti_budget[0].provvigione;
      this.assegna.mese[0] = item.molti_budget[0].gennaio;
      this.assegna.mese[1] = item.molti_budget[0].febbraio;
      this.assegna.mese[2] = item.molti_budget[0].marzo;
      this.assegna.mese[3] = item.molti_budget[0].aprile;
      this.assegna.mese[4] = item.molti_budget[0].maggio;
      this.assegna.mese[5] = item.molti_budget[0].giugno;
      this.assegna.mese[6] = item.molti_budget[0].luglio;
      this.assegna.mese[7] = item.molti_budget[0].agosto;
      this.assegna.mese[8] = item.molti_budget[0].settembre;
      this.assegna.mese[9] = item.molti_budget[0].ottobre;
      this.assegna.mese[10] = item.molti_budget[0].novembre;
      this.assegna.mese[11] = item.molti_budget[0].dicembre;
      this.percentuale.mese[0] = (item.molti_budget[0].gennaio / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[1] = (item.molti_budget[0].febbraio / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[2] = (item.molti_budget[0].marzo / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[3] = (item.molti_budget[0].aprile / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[4] = (item.molti_budget[0].maggio / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[5] = (item.molti_budget[0].giugno / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[6] = (item.molti_budget[0].luglio / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[7] = (item.molti_budget[0].agosto / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[8] = (item.molti_budget[0].settembre / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[9] = (item.molti_budget[0].ottobre / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[10] = (item.molti_budget[0].novembre / item.molti_budget[0].budgetAnno * 100).toFixed(0);
      this.percentuale.mese[11] = (item.molti_budget[0].dicembre / item.molti_budget[0].budgetAnno * 100).toFixed(0);
    },
    modificaBgtMese: function modificaBgtMese(percent, mese) {
      this.assegna.mese[mese - 1] = (parseFloat(this.assegna.budgetAnno) * percent / 100).toFixed(0);
    },
    selezionaAnno: function selezionaAnno() {
      var _this2 = this;

      this.totAnno = 0;
      this.totGennaio = 0;
      this.totFebbraio = 0;
      this.totMarzo = 0;
      this.totAprile = 0;
      this.totMaggio = 0;
      this.totGiugno = 0;
      this.totLuglio = 0;
      this.totAgosto = 0;
      this.totSettembre = 0;
      this.totOttobre = 0;
      this.totNovembre = 0;
      this.totDicembre = 0;
      this.fetchAudioConBgtAssegnato(this.ricerca).then(function () {
        _this2.getAudioConBgt.forEach(function (ele) {
          _this2.totAnno += parseInt(ele.molti_budget[0].budgetAnno);
          _this2.totGennaio += parseInt(ele.molti_budget[0].gennaio);
          _this2.totFebbraio += parseInt(ele.molti_budget[0].febbraio);
          _this2.totMarzo += parseInt(ele.molti_budget[0].marzo);
          _this2.totAprile += parseInt(ele.molti_budget[0].aprile);
          _this2.totMaggio += parseInt(ele.molti_budget[0].maggio);
          _this2.totGiugno += parseInt(ele.molti_budget[0].giugno);
          _this2.totLuglio += parseInt(ele.molti_budget[0].luglio);
          _this2.totAgosto += parseInt(ele.molti_budget[0].agosto);
          _this2.totSettembre += parseInt(ele.molti_budget[0].settembre);
          _this2.totOttobre += parseInt(ele.molti_budget[0].ottobre);
          _this2.totNovembre += parseInt(ele.molti_budget[0].novembre);
          _this2.totDicembre += parseInt(ele.molti_budget[0].dicembre);
        });
      });
      this.fetchAudioSenzaBgt(this.ricerca);
    }
  }),
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('users', {
    getAudioConBgt: 'getAudioConBgt',
    getAudioSenzaBgt: 'getAudioSenzaBgt'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('clients', {
    getAnni: 'getAnni'
  })), {}, {
    sommaProvvigioni: function sommaProvvigioni() {
      return this.percentuale.mese.reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
      }, 0) + '%';
    },

    /*sommaBgt(){
       // return ( parseFloat(this.sommaProvvigioni) * parseFloat(this.assegna.budgetAnno) ) / 100 ;
        console.log(this.assegna.mese);
       // return this.assegna.mese.reduce((a, b) => parseInt(a) + parseInt(b), 0)
        return parseInt(this.assegna.mese[0]) + parseInt(this.assegna.mese[1])
    },*/

    /*utile(){
        return parseFloat(this.assegna.budgetAnno) -
            ( parseFloat(this.assegna.stipendio) * 12 ) -
            ( ( parseFloat(this.assegna.budgetAnno) * parseFloat(this.assegna.provvigione) ) / 100 );
    },*/
    textBtn: function textBtn() {
      return this["switch"] ? 'modifica' : 'inserisci';
    }
  })
});

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& */ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&");
/* harmony import */ var _AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssegnaBudget.vue?vue&type=script&lang=js& */ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8aba179e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/gestione/AssegnaBudget.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssegnaBudget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssegnaBudget_vue_vue_type_template_id_8aba179e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/gestione/AssegnaBudget.vue?vue&type=template&id=8aba179e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c("v-col", [_c("h2", [_vm._v("Assegna Budget")])]),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("v-select", {
                attrs: { items: _vm.getAnni, label: "Anno" },
                on: {
                  change: function($event) {
                    return _vm.selezionaAnno()
                  }
                },
                model: {
                  value: _vm.ricerca.anno,
                  callback: function($$v) {
                    _vm.$set(_vm.ricerca, "anno", $$v)
                  },
                  expression: "ricerca.anno"
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
        "div",
        { staticClass: "py-6" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c("h3", [_vm._v("Audioprotesisti senza Budget")]),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticClass: "elevation-1 mt-3",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.getAudioSenzaBgt,
                      "single-select": _vm.singleSelect,
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
                { attrs: { cols: "4" } },
                [
                  _c("h3", [_vm._v("Budget Anno")]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "5" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "budget" },
                            on: {
                              input: function($event) {
                                return _vm.bgtMese()
                              }
                            },
                            model: {
                              value: _vm.assegna.budgetAnno,
                              callback: function($$v) {
                                _vm.$set(_vm.assegna, "budgetAnno", $$v)
                              },
                              expression: "assegna.budgetAnno"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-select", {
                            attrs: { items: _vm.getAnni, label: "Anno" },
                            model: {
                              value: _vm.assegna.anno,
                              callback: function($$v) {
                                _vm.$set(_vm.assegna, "anno", $$v)
                              },
                              expression: "assegna.anno"
                            }
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
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-chip",
                    { staticClass: "ma-2", attrs: { color: "orange" } },
                    [
                      _vm._v(
                        "\n                    Verifica: " +
                          _vm._s(_vm.sommaProvvigioni) +
                          "\n                "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "4" } }),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "success", dark: "" },
                      on: { click: _vm.assegnaBudget }
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.textBtn) +
                          "\n                "
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
          _c(
            "v-row",
            _vm._l(12, function(mese) {
              return _c(
                "v-col",
                { key: mese },
                [
                  _c("v-text-field", {
                    attrs: {
                      hint: _vm.nomeMese[mese - 1],
                      readonly: "",
                      "persistent-hint": ""
                    },
                    model: {
                      value: _vm.assegna.mese[mese - 1],
                      callback: function($$v) {
                        _vm.$set(_vm.assegna.mese, mese - 1, $$v)
                      },
                      expression: "assegna.mese[mese-1]"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { "append-icon": "%", type: "number" },
                    on: {
                      input: function($event) {
                        return _vm.modificaBgtMese($event, mese)
                      },
                      change: function($event) {
                        return _vm.modificaBgtMese($event, mese)
                      }
                    },
                    model: {
                      value: _vm.percentuale.mese[mese - 1],
                      callback: function($$v) {
                        _vm.$set(_vm.percentuale.mese, mese - 1, $$v)
                      },
                      expression: "percentuale.mese[mese-1]"
                    }
                  }),
                  _vm._v(" "),
                  _vm.assegna.mese[mese] && _vm.assegna.budget
                    ? _c(
                        "v-chip",
                        {
                          staticClass: "ma-2",
                          attrs: { color: "primary", "text-color": "white" }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                (parseFloat(_vm.assegna.budget) *
                                  parseFloat(_vm.assegna.mese[mese])) /
                                  100
                              ) +
                              "\n                "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c("h3", [_vm._v("Audioprotesisti Con Budget")]),
          _vm._v(" "),
          _c(
            "v-data-table",
            {
              staticClass: "elevation-1 mt-3",
              attrs: {
                headers: _vm.headers2,
                items: _vm.getAudioConBgt,
                "hide-default-footer": ""
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
                          attrs: { color: "blue", small: "" },
                          on: {
                            click: function($event) {
                              _vm.modifica(
                                item,
                                _vm.getAudioConBgt
                                  .map(function(x) {
                                    return x.id
                                  })
                                  .indexOf(item.id)
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    mdi-pencil\n                "
                          )
                        ]
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].budgetAnno",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].budgetAnno.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].gennaio",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].gennaio.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].febbraio",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].febbraio.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].marzo",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].marzo.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].aprile",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].aprile.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].maggio",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].maggio.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].giugno",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].giugno.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].luglio",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].luglio.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].agosto",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].agosto.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].settembre",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].settembre.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].ottobre",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].ottobre.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].novembre",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].novembre.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                },
                {
                  key: "item.molti_budget[0].dicembre",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.molti_budget[0].dicembre.toLocaleString("it")
                          ) +
                          "\n            "
                      )
                    ]
                  }
                }
              ])
            },
            [
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _vm._v(" "),
              _c("template", { slot: "body.append" }, [
                _c("tr", { staticClass: "pink--text" }, [
                  _c("th", { staticClass: "title" }, [_vm._v("Totali")]),
                  _vm._v(" "),
                  _c("th"),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.totAnno.toLocaleString("it")))]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totGennaio.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totFebbraio.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(_vm.totMarzo.toLocaleString("it")))]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totAprile.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totMaggio.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totGiugno.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totLuglio.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totAgosto.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totSettembre.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totOttobre.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totNovembre.toLocaleString("it")))
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _vm._v(_vm._s(_vm.totDicembre.toLocaleString("it")))
                  ])
                ])
              ])
            ],
            2
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