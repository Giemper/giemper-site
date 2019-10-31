webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectItem.js":
/*!***********************************!*\
  !*** ./components/ProjectItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ProjectItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProjectItem.scss */ "./styles/ProjectItem.scss");
/* harmony import */ var _styles_ProjectItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProjectItem_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/components/ProjectItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Browser = function Browser() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

var Phone = function Phone(props) {
  return __jsx("video", {
    className: "project-preview",
    autoPlay: true,
    loop: true,
    muted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("source", {
    src: props.main,
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("source", {
    src: props.fallback,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

var ProjectItem = function ProjectItem(props) {
  var lang = props.languageNum;
  var projectType = props.type === 'Phone' ? __jsx(Phone, {
    main: props.sourceMain,
    fallback: props.sourceFallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }) : __jsx(Browser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
  var projectAvailability = props.availability !== undefined ? __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Available at:") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  var order = props.index % 2 == 0 ? 'order-last' : 'order-first';
  return __jsx("div", {
    className: "project-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "col-7 project-pad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(props.description, lang)), projectAvailability, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.availability !== undefined && props.availability.map(function (item, index) {
    return __jsx("a", {
      key: index,
      href: item.link,
      className: "project-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.title);
  })))), __jsx("div", {
    className: "col-5 project-pad ".concat(order),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, projectType)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=index.js.fa8c21d9b583dc196a7e.hot-update.js.map