webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Footer.scss */ "./styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/c/Dev/giemper-site/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Footer = function Footer(props) {
  var lang = props.languageNum;
  var findme = ["Find me at", "Encuentrame en"];
  var sites = [{
    site: "LinkedIn",
    link: "http://www.linkedin.com/in/gmomagdaleno"
  }, {
    site: "Github",
    link: "https://github.com/giemper"
  }, {
    site: "Twitter",
    link: "https://twitter.com/giemper"
  }];
  return __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12 align-self-end foot-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], {
    languageNum: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "foot-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_1__["default"])(findme, lang)), sites.map(function (item, index) {
    return __jsx("a", {
      key: index,
      className: "foot-links",
      href: item.link,
      target: "_bind",
      draggable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, item.site);
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.6b0ed2e0a2d08ac99bdd.hot-update.js.map