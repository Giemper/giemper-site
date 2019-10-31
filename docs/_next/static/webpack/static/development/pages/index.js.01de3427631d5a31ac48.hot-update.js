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
  var availableAt = ["Available at:", "Displonible en:"];
  var projectType = props.type === 'Phone' ? __jsx(Phone, {
    main: props.sourceMain,
    fallback: props.sourceFallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }) : __jsx(Browser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  });
  var projectAvailability = props.availability !== undefined ? __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(availableAt, lang)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  var order = props.index % 2 == 0 ? 'order-last' : 'order-first'; // const desc = checkItem(props.description, lang);
  // console.log(desc);

  return __jsx("div", {
    className: "project-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12 project-pad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, props.title), Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(props.description, lang).map(function (item, index) {
    return __jsx("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item);
  }), projectAvailability, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, props.availability !== undefined && props.availability.map(function (item, index) {
    return __jsx("a", {
      key: index,
      href: item.link,
      className: "project-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, item.title);
  })))), __jsx("div", {
    className: "col-lg-6 col-md-6 col-sm-12 project-pad ".concat(order),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, projectType)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=index.js.01de3427631d5a31ac48.hot-update.js.map