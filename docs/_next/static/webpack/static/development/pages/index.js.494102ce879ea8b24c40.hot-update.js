webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Navbar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Navbar.scss */ "./styles/Navbar.scss");
/* harmony import */ var _styles_Navbar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _values_VALUES_NAVBAR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/VALUES_NAVBAR */ "./values/VALUES_NAVBAR.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Scroll = function Scroll() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      navScroll = _useState[0],
      setNavScroll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      window.scrollY > 200 || window.pageYOffset > 200 ? setNavScroll(true) : setNavScroll(false);
    });
  });
  return navScroll;
};

var Navbar = function Navbar(props) {
  var language = props.language;

  var ChangeToEnglish = function ChangeToEnglish(e) {
    e.preventDefault();
    language.setLanguage(0);
  };

  var ChangeToSpanish = function ChangeToSpanish(e) {
    e.preventDefault();
    language.setLanguage(1);
  };

  return __jsx("div", {
    className: "nav ".concat(Scroll() ? "scrolled" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-between align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.viewWidth > 768 && _values_VALUES_NAVBAR__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/#".concat(item.id),
      as: "/giemper-site/#".concat(item.id),
      key: index,
      replace: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("a", {
      className: "nav-button",
      draggable: "false",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.title, language.lang)));
  })), __jsx("div", {
    className: "col-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "col-auto lang-selection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("img", {
    src: "globe.svg",
    className: "globe-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("a", {
    id: "Nav_Eng",
    href: "#",
    className: "lang-button + ".concat(language.lang == '0' ? "selected" : "none"),
    onClick: ChangeToEnglish,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "EN"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " / "), __jsx("a", {
    id: "Nav_Esp",
    href: "#",
    className: "lang-button + ".concat(language.lang == '1' ? "selected" : "none"),
    onClick: ChangeToSpanish,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "ES"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.494102ce879ea8b24c40.hot-update.js.map