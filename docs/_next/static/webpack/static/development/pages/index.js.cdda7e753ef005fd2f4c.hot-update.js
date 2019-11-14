webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Contact.js":
/*!**************************!*\
  !*** ./pages/Contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var _values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../values/VALUES_CONTACT */ "./values/VALUES_CONTACT.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Contact = function Contact(props) {
  var lang = props.languageNum;
  var title = ["Contact", "Contacto"];
  return __jsx("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_3__["default"])(title, lang),
    id: "nav_cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-app-polyfill/stable */ "./node_modules/react-app-polyfill/stable.js");
/* harmony import */ var react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_stable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _tools_Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/Language */ "./tools/Language.js");
/* harmony import */ var _tools_Viewport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/Viewport */ "./tools/Viewport.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Intro */ "./pages/Intro.js");
/* harmony import */ var _Who__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Who */ "./pages/Who.js");
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Skills */ "./pages/Skills.js");
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Experience */ "./pages/Experience.js");
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Education */ "./pages/Education.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Projects */ "./pages/Projects.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Contact */ "./pages/Contact.js");
/* harmony import */ var _styles_pages_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/pages.scss */ "./styles/pages.scss");
/* harmony import */ var _styles_pages_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_scss__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var Index = function Index() {
  var language = new _tools_Language__WEBPACK_IMPORTED_MODULE_6__["default"]();
  language.start();

  var _Viewport = Object(_tools_Viewport__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      viewHeight = _Viewport.viewHeight,
      viewWidth = _Viewport.viewWidth;

  var adjustedHeight = viewHeight > 930 ? viewHeight - 50 : viewHeight;
  var adjustedWidth = viewWidth - 17;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_3__["Helmet"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Guillermo Magdaleno"), __jsx("link", {
    rel: "shortcut icon",
    type: "image/png",
    href: "/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: language,
    viewWidth: adjustedWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_Intro__WEBPACK_IMPORTED_MODULE_8__["default"], {
    languageNum: language.getLanguage(),
    viewHeight: adjustedHeight,
    viewWidth: adjustedWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_Who__WEBPACK_IMPORTED_MODULE_9__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_Skills__WEBPACK_IMPORTED_MODULE_10__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_Experience__WEBPACK_IMPORTED_MODULE_11__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_Education__WEBPACK_IMPORTED_MODULE_12__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(_Projects__WEBPACK_IMPORTED_MODULE_13__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_Contact__WEBPACK_IMPORTED_MODULE_14__["default"], {
    languageNum: language.getLanguage(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./values/VALUES_CONTACT.js":
/*!**********************************!*\
  !*** ./values/VALUES_CONTACT.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var VALUES_CONTACT = [{}];
/* harmony default export */ __webpack_exports__["default"] = (VALUES_CONTACT);

/***/ })

})
//# sourceMappingURL=index.js.cdda7e753ef005fd2f4c.hot-update.js.map