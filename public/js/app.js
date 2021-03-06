(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoinFlip.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoinFlip.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['img-dir'],
  data: function data() {
    return {
      being_flipped: false,
      // State of coin flip
      coin_side: null,
      img_dir: this.imgDir,
      img_heads: 'cropped-digital-dlo.jpg',
      img_tails: 'tinybeans-tails.jpg'
    };
  },
  methods: {
    // Flipping a coin resets the previous coin, shows a spinner,
    // determines the next coin to display, and then waits briefly before displaying
    flip: function flip() {
      this.being_flipped = true;
      this.coin_side = null;
      var img = Math.floor(Math.random() * 2 + 1) % 2 == 0 ? this.img_heads : this.img_tails;
      setTimeout(this.display_coin.bind(null, img), 1000);
    },
    // Simply display coin
    display_coin: function display_coin(img) {
      console.log(img);
      this.coin_side = this.img_dir + '/' + img;
      this.being_flipped = false;
    },
    reset: function reset() {
      this.coin_side = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfNav.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfNav.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setPageComponent: function setPageComponent(component) {
      this.$root.setPageComponent(component);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWelcome.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfWelcome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setPageComponent: function setPageComponent(component) {
      this.$root.setPageComponent(component);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoFit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoFit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    currentPageComponent: function currentPageComponent() {
      return this.$root.currentPageComponent;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: { click: _vm.flip }
            },
            [_vm._v("Flip")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "reset" },
              on: { click: _vm.reset }
            },
            [_vm._v("Reset")]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "ml-1" }, [
            _vm._v("What will it be – Heads or Tails?")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          !_vm.coin_side
            ? _c("p", { staticClass: "card-text text-center" }, [
                _vm._v("¯\\_(ツ)_/¯")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.being_flipped
            ? _c("div", { staticClass: "d-flex justify-content-center" }, [
                _vm._m(0)
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.coin_side
            ? _c("img", {
                staticClass:
                  "w-50 rounded-circle border p-1 shadow-sm mx-auto d-block",
                attrs: { src: _vm.coin_side }
              })
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "spinner-border", attrs: { role: "status" } },
      [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", { staticClass: "display-4" }, [_vm._v("Analysis")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-sm-5 col-md-4 col-lg-3" }, [
    _c("div", { staticClass: "list-group" }, [
      _c(
        "a",
        {
          staticClass: "list-group-item list-group-item-action",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-welcome")
            }
          }
        },
        [_vm._v("Hi, D.Lo")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "list-group-item list-group-item-action",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-program")
            }
          }
        },
        [_vm._v("Goals / Program")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "list-group-item list-group-item-action",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-workouts")
            }
          }
        },
        [_vm._v("Workouts")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "list-group-item list-group-item-action",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-analysis")
            }
          }
        },
        [_vm._v("Analysis")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "list-group-item list-group-item-action",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-workout-form")
            }
          }
        },
        [_vm._v("Add A Workout")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", { staticClass: "display-4" }, [_vm._v("Goals/Program")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "jumbotron", attrs: { id: "welcome" } }, [
    _c("h1", { staticClass: "display-4" }, [_vm._v("Let's get started!")]),
    _vm._v(" "),
    _c("p", { staticClass: "lead" }, [
      _vm._v(
        "\n      Go Fit is a simple, effective way to track and improve your fitness.\n      Start by reviewing your goals and the associated program to reach them.\n      Then, "
      ),
      _c(
        "a",
        {
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-workout-form")
            }
          }
        },
        [_vm._v("add a workout")]
      ),
      _vm._v("!\n  ")
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "my-4" }),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n      You can always come back to see/edit what you've done.\n      After you've got a few workouts under your belt, check out the\n      analysis section for a deep-dive into your progress, successes,\n      and areas for improvement.\n  "
      )
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "lead" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-lg",
          attrs: { href: "", role: "button" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.setPageComponent("gf-workout-form")
            }
          }
        },
        [_vm._v("Add A Workout")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", { staticClass: "display-4" }, [_vm._v("Workout Form")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-responsive" }, [
      _c("h2", [_vm._v("Workouts")]),
      _vm._v(" "),
      _c("table", { staticClass: "table", attrs: { id: "workouts" } }, [
        _c("thead", [
          _c("tr", [
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Workout")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Cycle")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
            _vm._v(" "),
            _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")])
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [
              _c("h3", { staticClass: "text-nowrap" }, [_vm._v("Cardio")])
            ]),
            _c("td", [
              _c("div", { staticClass: "text-nowrap" }, [
                _c("span", { staticClass: "badge badge-secondary" }, [
                  _vm._v("Week 1")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-secondary" }, [
                  _vm._v("Day 2")
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-info" }, [
                _vm._v("Cycle 1")
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("2019/01/01")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "text-nowrap" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-info", attrs: { type: "button" } },
                  [_vm._v("Edit")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-danger", attrs: { type: "button" } },
                  [_vm._v("Delete")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [
              _c("h3", { staticClass: "text-nowrap" }, [_vm._v("531 Bench")])
            ]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "text-nowrap" }, [
                _c("span", { staticClass: "badge badge-secondary" }, [
                  _vm._v("Week 1")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-secondary" }, [
                  _vm._v("Day 1")
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "badge badge-info" }, [
                _vm._v("Cycle 1")
              ])
            ]),
            _vm._v(" "),
            _c("td", [_vm._v("2018/12/28")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "text-nowrap" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-info", attrs: { type: "button" } },
                  [_vm._v("Edit")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-danger", attrs: { type: "button" } },
                  [_vm._v("Delete")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "row" },
    [
      _c("gf-nav"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col" },
        [_c(_vm.currentPageComponent, { tag: "component" })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('coin-flip', __webpack_require__(/*! ./components/CoinFlip.vue */ "./resources/js/components/CoinFlip.vue").default);
Vue.component('go-fit', __webpack_require__(/*! ./components/GoFit.vue */ "./resources/js/components/GoFit.vue").default);
Vue.component('gf-nav', __webpack_require__(/*! ./components/GfNav.vue */ "./resources/js/components/GfNav.vue").default);
Vue.component('gf-welcome', __webpack_require__(/*! ./components/GfWelcome.vue */ "./resources/js/components/GfWelcome.vue").default);
Vue.component('gf-workouts', __webpack_require__(/*! ./components/GfWorkouts.vue */ "./resources/js/components/GfWorkouts.vue").default);
Vue.component('gf-program', __webpack_require__(/*! ./components/GfProgram.vue */ "./resources/js/components/GfProgram.vue").default);
Vue.component('gf-analysis', __webpack_require__(/*! ./components/GfAnalysis.vue */ "./resources/js/components/GfAnalysis.vue").default);
Vue.component('gf-workout-form', __webpack_require__(/*! ./components/GfWorkoutForm.vue */ "./resources/js/components/GfWorkoutForm.vue").default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  data: {
    currentPageComponent: 'gf-welcome' // Initial page

  },
  methods: {
    setPageComponent: function setPageComponent(component) {
      this.$root.currentPageComponent = component;
    }
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js").default;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/CoinFlip.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/CoinFlip.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoinFlip.vue?vue&type=template&id=0675edee& */ "./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee&");
/* harmony import */ var _CoinFlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoinFlip.vue?vue&type=script&lang=js& */ "./resources/js/components/CoinFlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoinFlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CoinFlip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CoinFlip.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/CoinFlip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinFlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CoinFlip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoinFlip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinFlip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CoinFlip.vue?vue&type=template&id=0675edee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CoinFlip.vue?vue&type=template&id=0675edee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoinFlip_vue_vue_type_template_id_0675edee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfAnalysis.vue":
/*!************************************************!*\
  !*** ./resources/js/components/GfAnalysis.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfAnalysis.vue?vue&type=template&id=15a91c06& */ "./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfAnalysis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfAnalysis.vue?vue&type=template&id=15a91c06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfAnalysis.vue?vue&type=template&id=15a91c06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfAnalysis_vue_vue_type_template_id_15a91c06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfNav.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/GfNav.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfNav.vue?vue&type=template&id=b02c0b2e& */ "./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e&");
/* harmony import */ var _GfNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GfNav.vue?vue&type=script&lang=js& */ "./resources/js/components/GfNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GfNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/GfNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GfNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GfNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GfNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfNav.vue?vue&type=template&id=b02c0b2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfNav.vue?vue&type=template&id=b02c0b2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfNav_vue_vue_type_template_id_b02c0b2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfProgram.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/GfProgram.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfProgram.vue?vue&type=template&id=563fdf6c& */ "./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfProgram.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfProgram.vue?vue&type=template&id=563fdf6c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfProgram.vue?vue&type=template&id=563fdf6c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfProgram_vue_vue_type_template_id_563fdf6c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfWelcome.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/GfWelcome.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfWelcome.vue?vue&type=template&id=cf2a23b0& */ "./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0&");
/* harmony import */ var _GfWelcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GfWelcome.vue?vue&type=script&lang=js& */ "./resources/js/components/GfWelcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GfWelcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfWelcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfWelcome.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/GfWelcome.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWelcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GfWelcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWelcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWelcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfWelcome.vue?vue&type=template&id=cf2a23b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWelcome.vue?vue&type=template&id=cf2a23b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWelcome_vue_vue_type_template_id_cf2a23b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfWorkoutForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/GfWorkoutForm.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfWorkoutForm.vue?vue&type=template&id=a16f5d72& */ "./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfWorkoutForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfWorkoutForm.vue?vue&type=template&id=a16f5d72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWorkoutForm.vue?vue&type=template&id=a16f5d72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkoutForm_vue_vue_type_template_id_a16f5d72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GfWorkouts.vue":
/*!************************************************!*\
  !*** ./resources/js/components/GfWorkouts.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GfWorkouts.vue?vue&type=template&id=66341da0& */ "./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GfWorkouts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GfWorkouts.vue?vue&type=template&id=66341da0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GfWorkouts.vue?vue&type=template&id=66341da0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GfWorkouts_vue_vue_type_template_id_66341da0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GoFit.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/GoFit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoFit.vue?vue&type=template&id=95a56ba4& */ "./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4&");
/* harmony import */ var _GoFit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoFit.vue?vue&type=script&lang=js& */ "./resources/js/components/GoFit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GoFit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GoFit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GoFit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/GoFit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoFit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoFit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoFit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoFit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GoFit.vue?vue&type=template&id=95a56ba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoFit.vue?vue&type=template&id=95a56ba4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoFit_vue_vue_type_template_id_95a56ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/iframeResizer.contentWindow.js":
/*!*****************************************************!*\
  !*** ./resources/js/iframeResizer.contentWindow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * File: iframeResizer.contentWindow.js
 * Desc: Include this file in any page being loaded into an iframe
 *       to force the iframe to resize to the content size.
 * Requires: iframeResizer.js on host page.
 * Doc: https://github.com/davidjbradshaw/iframe-resizer
 * Author: David J. Bradshaw - dave@bradshaw.net
 * Contributor: Jure Mav - jure.mav@gmail.com
 * Contributor: Ian Caunce - ian@hallnet.co.uk
 */
;

(function (undefined) {
  'use strict';

  if (typeof window === 'undefined') return; // don't run for server side render

  var autoResize = true,
      base = 10,
      bodyBackground = '',
      bodyMargin = 0,
      bodyMarginStr = '',
      bodyObserver = null,
      bodyPadding = '',
      calculateWidth = false,
      doubleEventList = {
    'resize': 1,
    'click': 1
  },
      eventCancelTimer = 128,
      firstRun = true,
      height = 1,
      heightCalcModeDefault = 'bodyOffset',
      heightCalcMode = heightCalcModeDefault,
      initLock = true,
      initMsg = '',
      inPageLinks = {},
      interval = 32,
      intervalTimer = null,
      logging = false,
      msgID = '[iFrameSizer]',
      //Must match host page msg ID
  msgIdLen = msgID.length,
      myID = '',
      observer = null,
      resetRequiredMethods = {
    max: 1,
    min: 1,
    bodyScroll: 1,
    documentElementScroll: 1
  },
      resizeFrom = 'child',
      sendPermit = true,
      target = window.parent,
      targetOriginDefault = '*',
      tolerance = 0,
      triggerLocked = false,
      triggerLockedTimer = null,
      throttledTimer = 16,
      width = 1,
      widthCalcModeDefault = 'scroll',
      widthCalcMode = widthCalcModeDefault,
      win = window,
      messageCallback = function messageCallback() {
    warn('MessageCallback function not defined');
  },
      readyCallback = function readyCallback() {},
      pageInfoCallback = function pageInfoCallback() {},
      customCalcMethods = {
    height: function height() {
      warn('Custom height calculation function not defined');
      return document.documentElement.offsetHeight;
    },
    width: function width() {
      warn('Custom width calculation function not defined');
      return document.body.scrollWidth;
    }
  },
      eventHandlersByName = {},
      passiveSupported = false,
      onceSupported = false;

  function noop() {}

  try {
    var options = Object.create({}, {
      passive: {
        get: function get() {
          passiveSupported = true;
        }
      },
      once: {
        get: function get() {
          onceSupported = true;
        }
      }
    });
    window.addEventListener('test', noop, options);
    window.removeEventListener('test', noop, options);
  } catch (e) {
    /* */
  }

  function addEventListener(el, evt, func, options) {
    /* istanbul ignore else */
    // Not testable in phantomJS
    if ('addEventListener' in window) {
      el.addEventListener(evt, func, passiveSupported ? options || {} : false);
    } else if ('attachEvent' in window) {
      //IE
      el.attachEvent('on' + evt, func);
    }
  }

  function removeEventListener(el, evt, func) {
    /* istanbul ignore else */
    // Not testable in phantomJS
    if ('removeEventListener' in window) {
      el.removeEventListener(evt, func, false);
    } else if ('detachEvent' in window) {
      //IE
      el.detachEvent('on' + evt, func);
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } //Based on underscore.js


  function throttle(func) {
    var context,
        args,
        result,
        timeout = null,
        previous = 0,
        later = function later() {
      previous = getNow();
      timeout = null;
      result = func.apply(context, args);

      if (!timeout) {
        context = args = null;
      }
    };

    return function () {
      var now = getNow();

      if (!previous) {
        previous = now;
      }

      var remaining = throttledTimer - (now - previous);
      context = this;
      args = arguments;

      if (remaining <= 0 || remaining > throttledTimer) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = func.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }

      return result;
    };
  }

  var getNow = Date.now || function () {
    /* istanbul ignore next */
    // Not testable in PhantonJS
    return new Date().getTime();
  };

  function formatLogMsg(msg) {
    return msgID + '[' + myID + ']' + ' ' + msg;
  }

  function log(msg) {
    if (logging && 'object' === _typeof(window.console)) {
      console.log(formatLogMsg(msg));
    }
  }

  function warn(msg) {
    if ('object' === _typeof(window.console)) {
      console.warn(formatLogMsg(msg));
    }
  }

  function init() {
    readDataFromParent();
    log('Initialising iFrame (' + location.href + ')');
    readDataFromPage();
    setMargin();
    setBodyStyle('background', bodyBackground);
    setBodyStyle('padding', bodyPadding);
    injectClearFixIntoBodyElement();
    checkHeightMode();
    checkWidthMode();
    stopInfiniteResizingOfIFrame();
    setupPublicMethods();
    startEventListeners();
    inPageLinks = setupInPageLinks();
    sendSize('init', 'Init message from host page');
    readyCallback();
  }

  function readDataFromParent() {
    function strBool(str) {
      return 'true' === str ? true : false;
    }

    var data = initMsg.substr(msgIdLen).split(':');
    myID = data[0];
    bodyMargin = undefined !== data[1] ? Number(data[1]) : bodyMargin; //For V1 compatibility

    calculateWidth = undefined !== data[2] ? strBool(data[2]) : calculateWidth;
    logging = undefined !== data[3] ? strBool(data[3]) : logging;
    interval = undefined !== data[4] ? Number(data[4]) : interval;
    autoResize = undefined !== data[6] ? strBool(data[6]) : autoResize;
    bodyMarginStr = data[7];
    heightCalcMode = undefined !== data[8] ? data[8] : heightCalcMode;
    bodyBackground = data[9];
    bodyPadding = data[10];
    tolerance = undefined !== data[11] ? Number(data[11]) : tolerance;
    inPageLinks.enable = undefined !== data[12] ? strBool(data[12]) : false;
    resizeFrom = undefined !== data[13] ? data[13] : resizeFrom;
    widthCalcMode = undefined !== data[14] ? data[14] : widthCalcMode;
  }

  function readDataFromPage() {
    function readData() {
      var data = window.iFrameResizer;
      log('Reading data from page: ' + JSON.stringify(data));
      messageCallback = 'messageCallback' in data ? data.messageCallback : messageCallback;
      readyCallback = 'readyCallback' in data ? data.readyCallback : readyCallback;
      targetOriginDefault = 'targetOrigin' in data ? data.targetOrigin : targetOriginDefault;
      heightCalcMode = 'heightCalculationMethod' in data ? data.heightCalculationMethod : heightCalcMode;
      widthCalcMode = 'widthCalculationMethod' in data ? data.widthCalculationMethod : widthCalcMode;
    }

    function setupCustomCalcMethods(calcMode, calcFunc) {
      if ('function' === typeof calcMode) {
        log('Setup custom ' + calcFunc + 'CalcMethod');
        customCalcMethods[calcFunc] = calcMode;
        calcMode = 'custom';
      }

      return calcMode;
    }

    if ('iFrameResizer' in window && Object === window.iFrameResizer.constructor) {
      readData();
      heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height');
      widthCalcMode = setupCustomCalcMethods(widthCalcMode, 'width');
    }

    log('TargetOrigin for parent set to: ' + targetOriginDefault);
  }

  function chkCSS(attr, value) {
    if (-1 !== value.indexOf('-')) {
      warn('Negative CSS value ignored for ' + attr);
      value = '';
    }

    return value;
  }

  function setBodyStyle(attr, value) {
    if (undefined !== value && '' !== value && 'null' !== value) {
      document.body.style[attr] = value;
      log('Body ' + attr + ' set to "' + value + '"');
    }
  }

  function setMargin() {
    //If called via V1 script, convert bodyMargin from int to str
    if (undefined === bodyMarginStr) {
      bodyMarginStr = bodyMargin + 'px';
    }

    setBodyStyle('margin', chkCSS('margin', bodyMarginStr));
  }

  function stopInfiniteResizingOfIFrame() {
    document.documentElement.style.height = '';
    document.body.style.height = '';
    log('HTML & body height set to "auto"');
  }

  function manageTriggerEvent(options) {
    var listener = {
      add: function add(eventName) {
        function handleEvent() {
          sendSize(options.eventName, options.eventType);
        }

        eventHandlersByName[eventName] = handleEvent;
        addEventListener(window, eventName, handleEvent, {
          passive: true
        });
      },
      remove: function remove(eventName) {
        var handleEvent = eventHandlersByName[eventName];
        delete eventHandlersByName[eventName];
        removeEventListener(window, eventName, handleEvent);
      }
    };

    if (options.eventNames && Array.prototype.map) {
      options.eventName = options.eventNames[0];
      options.eventNames.map(listener[options.method]);
    } else {
      listener[options.method](options.eventName);
    }

    log(capitalizeFirstLetter(options.method) + ' event listener: ' + options.eventType);
  }

  function manageEventListeners(method) {
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Start',
      eventNames: ['animationstart', 'webkitAnimationStart']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Animation Iteration',
      eventNames: ['animationiteration', 'webkitAnimationIteration']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Animation End',
      eventNames: ['animationend', 'webkitAnimationEnd']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Input',
      eventName: 'input'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Up',
      eventName: 'mouseup'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Mouse Down',
      eventName: 'mousedown'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Orientation Change',
      eventName: 'orientationchange'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Print',
      eventName: ['afterprint', 'beforeprint']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Ready State Change',
      eventName: 'readystatechange'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Start',
      eventName: 'touchstart'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Touch End',
      eventName: 'touchend'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Touch Cancel',
      eventName: 'touchcancel'
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Start',
      eventNames: ['transitionstart', 'webkitTransitionStart', 'MSTransitionStart', 'oTransitionStart', 'otransitionstart']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Transition Iteration',
      eventNames: ['transitioniteration', 'webkitTransitionIteration', 'MSTransitionIteration', 'oTransitionIteration', 'otransitioniteration']
    });
    manageTriggerEvent({
      method: method,
      eventType: 'Transition End',
      eventNames: ['transitionend', 'webkitTransitionEnd', 'MSTransitionEnd', 'oTransitionEnd', 'otransitionend']
    });

    if ('child' === resizeFrom) {
      manageTriggerEvent({
        method: method,
        eventType: 'IFrame Resized',
        eventName: 'resize'
      });
    }
  }

  function checkCalcMode(calcMode, calcModeDefault, modes, type) {
    if (calcModeDefault !== calcMode) {
      if (!(calcMode in modes)) {
        warn(calcMode + ' is not a valid option for ' + type + 'CalculationMethod.');
        calcMode = calcModeDefault;
      }

      log(type + ' calculation method set to "' + calcMode + '"');
    }

    return calcMode;
  }

  function checkHeightMode() {
    heightCalcMode = checkCalcMode(heightCalcMode, heightCalcModeDefault, getHeight, 'height');
  }

  function checkWidthMode() {
    widthCalcMode = checkCalcMode(widthCalcMode, widthCalcModeDefault, getWidth, 'width');
  }

  function startEventListeners() {
    if (true === autoResize) {
      manageEventListeners('add');
      setupMutationObserver();
    } else {
      log('Auto Resize disabled');
    }
  }

  function stopMsgsToParent() {
    log('Disable outgoing messages');
    sendPermit = false;
  }

  function removeMsgListener() {
    log('Remove event listener: Message');
    removeEventListener(window, 'message', receiver);
  }

  function disconnectMutationObserver() {
    if (null !== bodyObserver) {
      /* istanbul ignore next */
      // Not testable in PhantonJS
      bodyObserver.disconnect();
    }
  }

  function stopEventListeners() {
    manageEventListeners('remove');
    disconnectMutationObserver();
    clearInterval(intervalTimer);
  }

  function teardown() {
    stopMsgsToParent();
    removeMsgListener();
    if (true === autoResize) stopEventListeners();
  }

  function injectClearFixIntoBodyElement() {
    var clearFix = document.createElement('div');
    clearFix.style.clear = 'both';
    clearFix.style.display = 'block'; //Guard against this having been globally redefined in CSS.

    document.body.appendChild(clearFix);
  }

  function setupInPageLinks() {
    function getPagePosition() {
      return {
        x: window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft,
        y: window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
      };
    }

    function getElementPosition(el) {
      var elPosition = el.getBoundingClientRect(),
          pagePosition = getPagePosition();
      return {
        x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
        y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
      };
    }

    function findTarget(location) {
      function jumpToTarget(target) {
        var jumpPosition = getElementPosition(target);
        log('Moving to in page link (#' + hash + ') at x: ' + jumpPosition.x + ' y: ' + jumpPosition.y);
        sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
      }

      var hash = location.split('#')[1] || location,
          //Remove # if present
      hashData = decodeURIComponent(hash),
          target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

      if (undefined !== target) {
        jumpToTarget(target);
      } else {
        log('In page link (#' + hash + ') not found in iFrame, so sending to parent');
        sendMsg(0, 0, 'inPageLink', '#' + hash);
      }
    }

    function checkLocationHash() {
      if ('' !== location.hash && '#' !== location.hash) {
        findTarget(location.href);
      }
    }

    function bindAnchors() {
      function setupLink(el) {
        function linkClicked(e) {
          e.preventDefault();
          /*jshint validthis:true */

          findTarget(this.getAttribute('href'));
        }

        if ('#' !== el.getAttribute('href')) {
          addEventListener(el, 'click', linkClicked);
        }
      }

      Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), setupLink);
    }

    function bindLocationHash() {
      addEventListener(window, 'hashchange', checkLocationHash);
    }

    function initCheck() {
      //check if page loaded with location hash after init resize
      setTimeout(checkLocationHash, eventCancelTimer);
    }

    function enableInPageLinks() {
      /* istanbul ignore else */
      // Not testable in phantonJS
      if (Array.prototype.forEach && document.querySelectorAll) {
        log('Setting up location.hash handlers');
        bindAnchors();
        bindLocationHash();
        initCheck();
      } else {
        warn('In page linking not fully supported in this browser! (See README.md for IE8 workaround)');
      }
    }

    if (inPageLinks.enable) {
      enableInPageLinks();
    } else {
      log('In page linking not enabled');
    }

    return {
      findTarget: findTarget
    };
  }

  function setupPublicMethods() {
    log('Enable public methods');
    win.parentIFrame = {
      autoResize: function autoResizeF(resize) {
        if (true === resize && false === autoResize) {
          autoResize = true;
          startEventListeners(); //sendSize('autoResize','Auto Resize enabled');
        } else if (false === resize && true === autoResize) {
          autoResize = false;
          stopEventListeners();
        }

        return autoResize;
      },
      close: function closeF() {
        sendMsg(0, 0, 'close');
        teardown();
      },
      getId: function getIdF() {
        return myID;
      },
      getPageInfo: function getPageInfoF(callback) {
        if ('function' === typeof callback) {
          pageInfoCallback = callback;
          sendMsg(0, 0, 'pageInfo');
        } else {
          pageInfoCallback = function pageInfoCallback() {};

          sendMsg(0, 0, 'pageInfoStop');
        }
      },
      moveToAnchor: function moveToAnchorF(hash) {
        inPageLinks.findTarget(hash);
      },
      reset: function resetF() {
        resetIFrame('parentIFrame.reset');
      },
      scrollTo: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollTo'); // X&Y reversed at sendMsg uses height/width
      },
      scrollToOffset: function scrollToF(x, y) {
        sendMsg(y, x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
      },
      sendMessage: function sendMessageF(msg, targetOrigin) {
        sendMsg(0, 0, 'message', JSON.stringify(msg), targetOrigin);
      },
      setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
        heightCalcMode = heightCalculationMethod;
        checkHeightMode();
      },
      setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
        widthCalcMode = widthCalculationMethod;
        checkWidthMode();
      },
      setTargetOrigin: function setTargetOriginF(targetOrigin) {
        log('Set targetOrigin: ' + targetOrigin);
        targetOriginDefault = targetOrigin;
      },
      size: function sizeF(customHeight, customWidth) {
        var valString = '' + (customHeight ? customHeight : '') + (customWidth ? ',' + customWidth : ''); //lockTrigger();

        sendSize('size', 'parentIFrame.size(' + valString + ')', customHeight, customWidth);
      }
    };
  }

  function initInterval() {
    if (0 !== interval) {
      log('setInterval: ' + interval + 'ms');
      intervalTimer = setInterval(function () {
        sendSize('interval', 'setInterval: ' + interval);
      }, Math.abs(interval));
    }
  }
  /* istanbul ignore next */
  //Not testable in PhantomJS


  function setupBodyMutationObserver() {
    function addImageLoadListners(mutation) {
      function addImageLoadListener(element) {
        if (false === element.complete) {
          log('Attach listeners to ' + element.src);
          element.addEventListener('load', imageLoaded, false);
          element.addEventListener('error', imageError, false);
          elements.push(element);
        }
      }

      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        addImageLoadListener(mutation.target);
      } else if (mutation.type === 'childList') {
        Array.prototype.forEach.call(mutation.target.querySelectorAll('img'), addImageLoadListener);
      }
    }

    function removeFromArray(element) {
      elements.splice(elements.indexOf(element), 1);
    }

    function removeImageLoadListener(element) {
      log('Remove listeners from ' + element.src);
      element.removeEventListener('load', imageLoaded, false);
      element.removeEventListener('error', imageError, false);
      removeFromArray(element);
    }

    function imageEventTriggered(event, type, typeDesc) {
      removeImageLoadListener(event.target);
      sendSize(type, typeDesc + ': ' + event.target.src, undefined, undefined);
    }

    function imageLoaded(event) {
      imageEventTriggered(event, 'imageLoad', 'Image loaded');
    }

    function imageError(event) {
      imageEventTriggered(event, 'imageLoadFailed', 'Image load failed');
    }

    function mutationObserved(mutations) {
      sendSize('mutationObserver', 'mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type); //Deal with WebKit asyncing image loading when tags are injected into the page

      mutations.forEach(addImageLoadListners);
    }

    function createMutationObserver() {
      var target = document.querySelector('body'),
          config = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true
      };
      observer = new MutationObserver(mutationObserved);
      log('Create body MutationObserver');
      observer.observe(target, config);
      return observer;
    }

    var elements = [],
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        observer = createMutationObserver();
    return {
      disconnect: function disconnect() {
        if ('disconnect' in observer) {
          log('Disconnect body MutationObserver');
          observer.disconnect();
          elements.forEach(removeImageLoadListener);
        }
      }
    };
  }

  function setupMutationObserver() {
    var forceIntervalTimer = 0 > interval;
    /* istanbul ignore if */
    // Not testable in PhantomJS

    if (window.MutationObserver || window.WebKitMutationObserver) {
      if (forceIntervalTimer) {
        initInterval();
      } else {
        bodyObserver = setupBodyMutationObserver();
      }
    } else {
      log('MutationObserver not supported in this browser!');
      initInterval();
    }
  } // document.documentElement.offsetHeight is not reliable, so
  // we have to jump through hoops to get a better value.


  function getComputedStyle(prop, el) {
    /* istanbul ignore next */
    //Not testable in PhantomJS
    function convertUnitsToPxForIE8(value) {
      var PIXEL = /^\d+(px)?$/i;

      if (PIXEL.test(value)) {
        return parseInt(value, base);
      }

      var style = el.style.left,
          runtimeStyle = el.runtimeStyle.left;
      el.runtimeStyle.left = el.currentStyle.left;
      el.style.left = value || 0;
      value = el.style.pixelLeft;
      el.style.left = style;
      el.runtimeStyle.left = runtimeStyle;
      return value;
    }

    var retVal = 0;
    el = el || document.body;
    /* istanbul ignore else */
    // Not testable in phantonJS

    if ('defaultView' in document && 'getComputedStyle' in document.defaultView) {
      retVal = document.defaultView.getComputedStyle(el, null);
      retVal = null !== retVal ? retVal[prop] : 0;
    } else {
      //IE8
      retVal = convertUnitsToPxForIE8(el.currentStyle[prop]);
    }

    return parseInt(retVal, base);
  }

  function chkEventThottle(timer) {
    if (timer > throttledTimer / 2) {
      throttledTimer = 2 * timer;
      log('Event throttle increased to ' + throttledTimer + 'ms');
    }
  } //Idea from https://github.com/guardian/iframe-messenger


  function getMaxElement(side, elements) {
    var elementsLength = elements.length,
        elVal = 0,
        maxVal = 0,
        Side = capitalizeFirstLetter(side),
        timer = getNow();

    for (var i = 0; i < elementsLength; i++) {
      elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle('margin' + Side, elements[i]);

      if (elVal > maxVal) {
        maxVal = elVal;
      }
    }

    timer = getNow() - timer;
    log('Parsed ' + elementsLength + ' HTML elements');
    log('Element position calculated in ' + timer + 'ms');
    chkEventThottle(timer);
    return maxVal;
  }

  function getAllMeasurements(dimention) {
    return [dimention.bodyOffset(), dimention.bodyScroll(), dimention.documentElementOffset(), dimention.documentElementScroll()];
  }

  function getTaggedElements(side, tag) {
    function noTaggedElementsFound() {
      warn('No tagged elements (' + tag + ') found on page');
      return document.querySelectorAll('body *');
    }

    var elements = document.querySelectorAll('[' + tag + ']');
    if (0 === elements.length) noTaggedElementsFound();
    return getMaxElement(side, elements);
  }

  function getAllElements() {
    return document.querySelectorAll('body *');
  }

  var getHeight = {
    bodyOffset: function getBodyOffsetHeight() {
      return document.body.offsetHeight + getComputedStyle('marginTop') + getComputedStyle('marginBottom');
    },
    offset: function offset() {
      return getHeight.bodyOffset(); //Backwards compatability
    },
    bodyScroll: function getBodyScrollHeight() {
      return document.body.scrollHeight;
    },
    custom: function getCustomWidth() {
      return customCalcMethods.height();
    },
    documentElementOffset: function getDEOffsetHeight() {
      return document.documentElement.offsetHeight;
    },
    documentElementScroll: function getDEScrollHeight() {
      return document.documentElement.scrollHeight;
    },
    max: function getMaxHeight() {
      return Math.max.apply(null, getAllMeasurements(getHeight));
    },
    min: function getMinHeight() {
      return Math.min.apply(null, getAllMeasurements(getHeight));
    },
    grow: function growHeight() {
      return getHeight.max(); //Run max without the forced downsizing
    },
    lowestElement: function getBestHeight() {
      return Math.max(getHeight.bodyOffset() || getHeight.documentElementOffset(), getMaxElement('bottom', getAllElements()));
    },
    taggedElement: function getTaggedElementsHeight() {
      return getTaggedElements('bottom', 'data-iframe-height');
    }
  },
      getWidth = {
    bodyScroll: function getBodyScrollWidth() {
      return document.body.scrollWidth;
    },
    bodyOffset: function getBodyOffsetWidth() {
      return document.body.offsetWidth;
    },
    custom: function getCustomWidth() {
      return customCalcMethods.width();
    },
    documentElementScroll: function getDEScrollWidth() {
      return document.documentElement.scrollWidth;
    },
    documentElementOffset: function getDEOffsetWidth() {
      return document.documentElement.offsetWidth;
    },
    scroll: function getMaxWidth() {
      return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
    },
    max: function getMaxWidth() {
      return Math.max.apply(null, getAllMeasurements(getWidth));
    },
    min: function getMinWidth() {
      return Math.min.apply(null, getAllMeasurements(getWidth));
    },
    rightMostElement: function rightMostElement() {
      return getMaxElement('right', getAllElements());
    },
    taggedElement: function getTaggedElementsWidth() {
      return getTaggedElements('right', 'data-iframe-width');
    }
  };

  function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {
    function resizeIFrame() {
      height = currentHeight;
      width = currentWidth;
      sendMsg(height, width, triggerEvent);
    }

    function isSizeChangeDetected() {
      function checkTolarance(a, b) {
        var retVal = Math.abs(a - b) <= tolerance;
        return !retVal;
      }

      currentHeight = undefined !== customHeight ? customHeight : getHeight[heightCalcMode]();
      currentWidth = undefined !== customWidth ? customWidth : getWidth[widthCalcMode]();
      return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
    }

    function isForceResizableEvent() {
      return !(triggerEvent in {
        'init': 1,
        'interval': 1,
        'size': 1
      });
    }

    function isForceResizableCalcMode() {
      return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
    }

    function logIgnored() {
      log('No change in size detected');
    }

    function checkDownSizing() {
      if (isForceResizableEvent() && isForceResizableCalcMode()) {
        resetIFrame(triggerEventDesc);
      } else if (!(triggerEvent in {
        'interval': 1
      })) {
        logIgnored();
      }
    }

    var currentHeight, currentWidth;

    if (isSizeChangeDetected() || 'init' === triggerEvent) {
      lockTrigger();
      resizeIFrame();
    } else {
      checkDownSizing();
    }
  }

  var sizeIFrameThrottled = throttle(sizeIFrame);

  function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
    function recordTrigger() {
      if (!(triggerEvent in {
        'reset': 1,
        'resetPage': 1,
        'init': 1
      })) {
        log('Trigger event: ' + triggerEventDesc);
      }
    }

    function isDoubleFiredEvent() {
      return triggerLocked && triggerEvent in doubleEventList;
    }

    if (!isDoubleFiredEvent()) {
      recordTrigger();

      if (triggerEvent === 'init') {
        sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
      } else {
        sizeIFrameThrottled(triggerEvent, triggerEventDesc, customHeight, customWidth);
      }
    } else {
      log('Trigger event cancelled: ' + triggerEvent);
    }
  }

  function lockTrigger() {
    if (!triggerLocked) {
      triggerLocked = true;
      log('Trigger event lock on');
    }

    clearTimeout(triggerLockedTimer);
    triggerLockedTimer = setTimeout(function () {
      triggerLocked = false;
      log('Trigger event lock off');
      log('--');
    }, eventCancelTimer);
  }

  function triggerReset(triggerEvent) {
    height = getHeight[heightCalcMode]();
    width = getWidth[widthCalcMode]();
    sendMsg(height, width, triggerEvent);
  }

  function resetIFrame(triggerEventDesc) {
    var hcm = heightCalcMode;
    heightCalcMode = heightCalcModeDefault;
    log('Reset trigger event: ' + triggerEventDesc);
    lockTrigger();
    triggerReset('reset');
    heightCalcMode = hcm;
  }

  function sendMsg(height, width, triggerEvent, msg, targetOrigin) {
    function setTargetOrigin() {
      if (undefined === targetOrigin) {
        targetOrigin = targetOriginDefault;
      } else {
        log('Message targetOrigin: ' + targetOrigin);
      }
    }

    function sendToParent() {
      var size = height + ':' + width,
          message = myID + ':' + size + ':' + triggerEvent + (undefined !== msg ? ':' + msg : '');
      log('Sending message to host page (' + message + ')');
      target.postMessage(msgID + message, targetOrigin);
    }

    if (true === sendPermit) {
      setTargetOrigin();
      sendToParent();
    }
  }

  function receiver(event) {
    var processRequestFromParent = {
      init: function initFromParent() {
        initMsg = event.data;
        target = event.source;
        init();
        firstRun = false;
        setTimeout(function () {
          initLock = false;
        }, eventCancelTimer);
      },
      reset: function resetFromParent() {
        if (!initLock) {
          log('Page size reset by host page');
          triggerReset('resetPage');
        } else {
          log('Page reset ignored by init');
        }
      },
      resize: function resizeFromParent() {
        sendSize('resizeParent', 'Parent window requested size check');
      },
      moveToAnchor: function moveToAnchorF() {
        inPageLinks.findTarget(getData());
      },
      inPageLink: function inPageLinkF() {
        this.moveToAnchor();
      },
      //Backward compatability
      pageInfo: function pageInfoFromParent() {
        var msgBody = getData();
        log('PageInfoFromParent called from parent: ' + msgBody);
        pageInfoCallback(JSON.parse(msgBody));
        log(' --');
      },
      message: function messageFromParent() {
        var msgBody = getData();
        log('MessageCallback called from parent: ' + msgBody);
        messageCallback(JSON.parse(msgBody));
        log(' --');
      }
    };

    function isMessageForUs() {
      return msgID === ('' + event.data).substr(0, msgIdLen); //''+ Protects against non-string messages
    }

    function getMessageType() {
      return event.data.split(']')[1].split(':')[0];
    }

    function getData() {
      return event.data.substr(event.data.indexOf(':') + 1);
    }

    function isMiddleTier() {
      return !( true && module.exports) && 'iFrameResize' in window || 'jQuery' in window && 'iFrameResize' in window.jQuery.prototype;
    }

    function isInitMsg() {
      //Test if this message is from a child below us. This is an ugly test, however, updating
      //the message format would break backwards compatibity.
      return event.data.split(':')[2] in {
        'true': 1,
        'false': 1
      };
    }

    function callFromParent() {
      var messageType = getMessageType();

      if (messageType in processRequestFromParent) {
        processRequestFromParent[messageType]();
      } else if (!isMiddleTier() && !isInitMsg()) {
        warn('Unexpected message (' + event.data + ')');
      }
    }

    function processMessage() {
      if (false === firstRun) {
        callFromParent();
      } else if (isInitMsg()) {
        processRequestFromParent.init();
      } else {
        log('Ignored message of type "' + getMessageType() + '". Received before initialization.');
      }
    }

    if (isMessageForUs()) {
      processMessage();
    }
  } //Normally the parent kicks things off when it detects the iFrame has loaded.
  //If this script is async-loaded, then tell parent page to retry init.


  function chkLateLoaded() {
    if ('loading' !== document.readyState) {
      window.parent.postMessage('[iFrameResizerChild]Ready', '*');
    }
  }

  addEventListener(window, 'message', receiver);
  addEventListener(window, 'readystatechange', chkLateLoaded);
  chkLateLoaded();
})();

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/js/iframeResizer.contentWindow.js ./resources/sass/app.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/digitaldlo-laravel/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /var/www/digitaldlo-laravel/resources/js/iframeResizer.contentWindow.js */"./resources/js/iframeResizer.contentWindow.js");
module.exports = __webpack_require__(/*! /var/www/digitaldlo-laravel/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);