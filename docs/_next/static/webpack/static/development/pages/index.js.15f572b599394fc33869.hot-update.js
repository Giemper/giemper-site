webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Intro.js":
/*!************************!*\
  !*** ./pages/Intro.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _styles_Intro_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Intro.scss */ "./styles/Intro.scss");
/* harmony import */ var _styles_Intro_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ProfilePicture = function ProfilePicture(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none"),
      stop = _useState[0],
      setStop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("initial"),
      topState = _useState2[0],
      setTopState = _useState2[1];

  var canvasHeight = props.height / 1.5 > 500 ? props.height / 1.5 : 450;
  var canvasWidth = props.width > 1160 ? 1 : props.width > 992 ? 0.8 : props.width > 768 ? 0.6 : 0.55;
  var canvasPhone = props.width >= 751 ? true : false;
  var canvasMargin = canvasHeight * 0.1;
  var canvasSquare = (canvasHeight - canvasMargin) * canvasWidth;
  var canvasSize = canvasPhone ? (canvasHeight + canvasMargin) * canvasWidth : 0;
  var imageAdapter = {
    width: canvasSquare + "px",
    height: canvasSquare + "px",
    top: topState
  };
  var bgAdapter = {
    width: canvasSize + "px",
    height: canvasSize + "px",
    top: topState
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('scroll', function () {
      var maxTop = props.height <= 720 ? props.height : 720;

      if (window.scrollY > maxTop) {
        setStop("stop");
        setTopState(maxTop + "px");
      } else {
        setStop("none");
        setTopState("initial");
      }
    });
  });
  return __jsx("div", {
    className: "intro-picture row justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "picture-bg fix-bg ".concat(stop),
    style: bgAdapter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("img", {
    className: "fix-img ".concat(stop),
    src: props.source,
    style: imageAdapter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

var Intro = function Intro(props) {
  var lang = props.languageNum;
  var space = {
    height: props.viewHeight + "px"
  };
  var image = "Myself.jpg";
  var hello = ["Hello there, I'm", "Bienvenido, soy"];
  return __jsx("div", {
    className: "intro page",
    id: "nav_home",
    style: space,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-7 col-md-8 col-sm-12 intro-item text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "intro-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_1__["default"])(hello, lang)), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Guillermo"), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Magdaleno"), __jsx("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Software Developer"))), __jsx("div", {
    className: "col-lg-5 col-md-4 col-sm-12 intro-item picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(ProfilePicture, {
    height: props.viewHeight,
    width: props.viewWidth,
    source: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ })

})
//# sourceMappingURL=index.js.15f572b599394fc33869.hot-update.js.map