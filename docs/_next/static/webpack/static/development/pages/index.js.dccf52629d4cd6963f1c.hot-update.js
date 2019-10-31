webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Projects.js":
/*!***************************!*\
  !*** ./pages/Projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var _components_ProjectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProjectItem */ "./components/ProjectItem.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _values_VALUES_PROJECTS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../values/VALUES_PROJECTS */ "./values/VALUES_PROJECTS.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Projects = function Projects(props) {
  var lang = props.languageNum;
  var title = ["Projects", "Proyectos"];
  return __jsx("div", {
    className: "page shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_3__["default"])(title, lang),
    id: "nav_pro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), _values_VALUES_PROJECTS__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (item, index) {
    return __jsx(_components_ProjectItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      project: item,
      languageNum: lang,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.dccf52629d4cd6963f1c.hot-update.js.map