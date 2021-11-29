(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_login_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      valid: true,
      emailRules: [function (v) {
        return !!v || 'la mail è obbligatoria';
      }],
      passwordRules: [function (v) {
        return !!v || 'la password è obbligatoria';
      }],
      userRegister: {},
      rules: {
        required: function required(value) {
          return !!value || 'Campo obbligatorio.';
        },
        min: function min(v) {
          return v.length >= 6 || 'Minimo 6 caratteri';
        }
      }
    };
  },
  mounted: function mounted() {
    this.userRegister.email = '';
    this.userRegister.oldPassword = '';
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)('login', {
    getMessaggio: 'getMessaggio',
    getLogged: 'getLogged'
  })), {}, {
    verificaCampi: function verificaCampi() {
      return this.userRegister.email != '' && this.userRegister.email != null && this.userRegister.password.length > 5 && this.userRegister.repeatpassword.length > 5 && this.userRegister.password != '' && this.userRegister.password && this.userRegister.repeatpassword != '' && this.userRegister.repeatpassword ? false : true;
    }
  }),
  methods: {
    register: function register() {
      var _this = this;

      this.$store.dispatch('login/register', this.userRegister).then(function () {
        if (_this.getLogged === true) {
          _this.userRegister = {};

          _this.$router.push({
            name: 'home'
          });
        }
      });
    },
    resetMessaggio: function resetMessaggio() {
      this.$store.commit('login/resetMessaggio');
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/login/Register.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/login/Register.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=487cc7f2&scoped=true& */ "./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/Pages/login/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "487cc7f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/login/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/login/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/login/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_487cc7f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=487cc7f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/login/Register.vue?vue&type=template&id=487cc7f2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "pt-16" },
    [
      _vm.getMessaggio
        ? _c(
            "v-alert",
            { attrs: { type: "error" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center" } },
                [
                  _c("v-col", { staticClass: "grow" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.getMessaggio) +
                        "\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticClass: "shrink" },
                    [
                      _c("v-btn", { on: { click: _vm.resetMessaggio } }, [
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
          _c("v-text-field", {
            attrs: { rules: _vm.emailRules, label: "e-mail*", required: "" },
            model: {
              value: _vm.userRegister.email,
              callback: function($$v) {
                _vm.$set(_vm.userRegister, "email", $$v)
              },
              expression: "userRegister.email"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "append-icon": _vm.show1 ? "mdi-eye" : "mdi-eye-off",
              type: _vm.show1 ? "text" : "password",
              label: "vecchia password",
              hint: "minimo 6 caratteri",
              counter: ""
            },
            on: {
              "click:append": function($event) {
                _vm.show1 = !_vm.show1
              }
            },
            model: {
              value: _vm.userRegister.oldPassword,
              callback: function($$v) {
                _vm.$set(_vm.userRegister, "oldPassword", $$v)
              },
              expression: "userRegister.oldPassword"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "append-icon": _vm.show2 ? "mdi-eye" : "mdi-eye-off",
              type: _vm.show2 ? "text" : "password",
              rules: _vm.passwordRules,
              label: "nuova password",
              hint: "minimo 6 caratteri",
              counter: ""
            },
            on: {
              "click:append": function($event) {
                _vm.show2 = !_vm.show2
              }
            },
            model: {
              value: _vm.userRegister.password,
              callback: function($$v) {
                _vm.$set(_vm.userRegister, "password", $$v)
              },
              expression: "userRegister.password"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "append-icon": _vm.show3 ? "mdi-eye" : "mdi-eye-off",
              type: _vm.show3 ? "text" : "password",
              rules: _vm.passwordRules,
              label: "ripeti nuova password",
              hint: "minimo 6 caratteri",
              counter: ""
            },
            on: {
              "click:append": function($event) {
                _vm.show3 = !_vm.show3
              }
            },
            model: {
              value: _vm.userRegister.repeatpassword,
              callback: function($$v) {
                _vm.$set(_vm.userRegister, "repeatpassword", $$v)
              },
              expression: "userRegister.repeatpassword"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-4",
              attrs: { color: "success", disabled: _vm.verificaCampi },
              on: { click: _vm.register }
            },
            [_vm._v("\n            Cambia password\n        ")]
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