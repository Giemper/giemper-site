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
      lineNumber: 9
    },
    __self: this
  }, __jsx("source", {
    src: props.main,
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("source", {
    src: props.fallback,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var ProjectItem = function ProjectItem(props) {
  var projectType = props.type === 'Phone' ? __jsx(Phone, {
    main: props.sourceMain,
    fallback: props.sourceFallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : __jsx(Browser, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  });
  var projectAvailability = props.availability !== undefined ? __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Available at:") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  var order = props.index % 2 == 0 ? 'order-last' : 'order-first'; // const alignment = (props.key % 2 === 0)
  //                 ? ''

  return __jsx("div", {
    className: "project-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "col-7 project-pad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "project-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Proyecto hecho para un compa\xF1ia de autolavados en la ciudad de Mexicali."), projectAvailability, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.availability !== undefined && props.availability.map(function (item, index) {
    return __jsx("a", {
      key: index,
      href: item.link,
      className: "project-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.title);
  })))), __jsx("div", {
    className: "col-5 project-pad ".concat(order),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, projectType)));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ })

})
//# sourceMappingURL=index.js.6ec91c1b12fa06144b68.hot-update.js.map