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
/* harmony import */ var _values_VALUES_FOOTER__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../values/VALUES_FOOTER */ "./values/VALUES_FOOTER.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact */ "./components/Contact.js");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Footer.scss */ "./styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/mnt/c/Dev/giemper-site/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Footer = function Footer(props) {
  var lang = props.languageNum;
  var sites = [{
    site: "LinkedIn",
    link: "http://www.linkedin.com/in/gmomagdaleno",
    icon: "icons/linkedin.svg"
  }, {
    site: "Github",
    link: "https://github.com/giemper",
    icon: "icons/github.svg"
  }, {
    site: "Twitter",
    link: "https://twitter.com/giemper",
    icon: "icons/twitter.svg"
  }];
  return __jsx("div", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12 align-self-end foot-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    languageNum: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "foot-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(_values_VALUES_FOOTER__WEBPACK_IMPORTED_MODULE_1__["default"].findme, lang)), sites.map(function (item, index) {
    return __jsx("a", {
      key: index,
      className: "foot-combo",
      href: item.link,
      target: "_bind",
      draggable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      src: item.icon,
      className: "foot-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("label", {
      className: "foot-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, item.site));
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    href: "GuillermoMagdaleno.pdf",
    target: "_bind",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(_values_VALUES_FOOTER__WEBPACK_IMPORTED_MODULE_1__["default"].resume, lang))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(_values_VALUES_FOOTER__WEBPACK_IMPORTED_MODULE_1__["default"].disclaimer, lang)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=index.js.e84a63054c22fbff5b67.hot-update.js.map