webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Education.js":
/*!****************************!*\
  !*** ./pages/Education.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var _components_BoxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BoxItem */ "./components/BoxItem.js");
/* harmony import */ var _values_VALUES_EDUCATION__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/VALUES_EDUCATION */ "./values/VALUES_EDUCATION.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Education.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Education = function Education(props) {
  var lang = props.languageNum;
  var title = ["Education", "Educación"];
  return __jsx("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(title, lang),
    id: "nav_edu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("div", {
    className: "row box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _values_VALUES_EDUCATION__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item, index) {
    return __jsx("div", {
      className: "col-lg-4 col-md-12",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_components_BoxItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.title, lang),
      position: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.position, lang),
      city: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.city, lang),
      duration: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.duration, lang),
      description: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item.description, lang),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ })

})
//# sourceMappingURL=index.js.b99197e00104bee49993.hot-update.js.map