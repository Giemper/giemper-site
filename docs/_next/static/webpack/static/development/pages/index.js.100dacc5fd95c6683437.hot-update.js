webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Skills.js":
/*!*************************!*\
  !*** ./pages/Skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./components/PageHeader.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _values_VALUES_SKILLS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/VALUES_SKILLS */ "./values/VALUES_SKILLS.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Skills.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SkillBox = function SkillBox(props) {
  return __jsx("div", {
    className: "skill-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.text));
};

var SkillFilter = function SkillFilter(props) {
  var all = Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(["All", "Todos"], props.languageNum);
  var tags = [all, "Desktop", "Mobile", "Web"];

  var filter = function filter(e, tag) {
    e.preventDefault();
    props.setFilter(tag);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tags.map(function (tag, index) {
    return __jsx("a", {
      key: index,
      href: "#",
      className: "skill-filter ".concat(props.filter === tag ? "selected" : "none"),
      onClick: function onClick(e) {
        return filter(e, tag);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, tag);
  }));
};

var Skills = function Skills(props) {
  var lang = props.languageNum;
  var title = ["Skills", "Habilidades"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('All'),
      filter = _useState[0],
      setFilter = _useState[1];

  return __jsx("div", {
    className: "page shadow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_2__["default"])(title, lang),
    id: "nav_skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-auto col-md-12 skill-line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "skill-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(SkillFilter, {
    filter: filter,
    setFilter: setFilter,
    languageNum: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), __jsx("div", {
    className: "col-lg col-md-12 skill-box-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, _values_VALUES_SKILLS__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item, index) {
    if (item.tags.includes(filter) || filter === "All") return __jsx(SkillBox, {
      text: item.skill,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.100dacc5fd95c6683437.hot-update.js.map