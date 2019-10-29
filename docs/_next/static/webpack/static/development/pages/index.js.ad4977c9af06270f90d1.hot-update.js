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
/* harmony import */ var _tools_Viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/Viewport */ "./tools/Viewport.js");
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ProfilePicture = function ProfilePicture(props) {
  var canvasHeight = props.height / 1.5;
  var canvasMargin = canvasHeight * 0.1;
  var canvasRadius = canvasHeight / 2;
  var imageAdapter = {
    width: canvasHeight - canvasMargin + "px",
    height: canvasHeight - canvasMargin + "px",
    marginTop: canvasMargin + "px"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var canvas = document.getElementById('circleBG');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(canvasRadius + canvasMargin, canvasRadius + canvasMargin / 2, canvasRadius, 0, 2 * Math.PI); // context.fillStyle = 'rgb(68, 71, 90)';

    context.fillStyle = 'rgba(139, 233, 253, 0.2)';
    context.fill();
  });
  return __jsx("div", {
    className: "row justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "intro-canvas",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "canvas-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "relative-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("canvas", {
    id: "circleBG",
    height: canvasHeight + canvasMargin,
    width: canvasHeight + canvasMargin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("img", {
    src: "/myself.jpg",
    style: imageAdapter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))))));
};

var AnimatedBackground = function AnimatedBackground(props) {
  var canvasHeight = props.height;
  var canvasWidth = props.width;

  var drawLine = function drawLine(context, startPointX, startPointY, endPointX, endPointY) {
    context.moveTo(startPointX, startPointY);
    context.lineTo(endPointX, endPointY);
    context.stroke();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var canvas = document.getElementById("animatedBG");
    var context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = 'rgba(68, 71, 90, 0.5)';
    context.lineWidth = 3;
    drawLine(context, 0, 0, canvasWidth, canvasHeight - 150);
    drawLine(context, canvasWidth * 0.75, 0, canvasWidth / 2, canvasHeight);
    drawLine(context, canvasWidth * 0.43, 0, canvasWidth * 0, canvasHeight * 0.85);
    drawLine(context, canvasWidth * 0.08, 0, canvasWidth * 0.39, canvasHeight);
    drawLine(context, canvasWidth, canvasHeight * 0.04, canvasWidth * 0.15, canvasHeight);
    drawLine(context, 0, canvasHeight * 0.45, canvasWidth * 0.81, canvasHeight);
    drawLine(context, canvasWidth * 0.51, 0, canvasWidth * 0.62, canvasHeight);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("canvas", {
    id: "animatedBG",
    height: canvasHeight - 50,
    width: canvasWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};

var Intro = function Intro() {
  var _Viewport = Object(_tools_Viewport__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      viewHeight = _Viewport.viewHeight,
      viewWidth = _Viewport.viewWidth;

  var space = {
    height: viewHeight - 50 + 'px'
  };
  var backgroundSpace = {
    height: viewHeight - 50 + 'px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%'
  };
  return __jsx("div", {
    className: "intro",
    id: "nav_home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "intro-background",
    style: backgroundSpace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(AnimatedBackground, {
    height: viewHeight,
    width: viewWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("div", {
    className: "row align-items-center",
    style: space,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "col-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "intro-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Hello I'm"), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Guillermo"), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Magdaleno"), __jsx("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Software Developer"))), __jsx("div", {
    className: "col-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(ProfilePicture, {
    height: viewHeight,
    width: viewWidth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ })

})
//# sourceMappingURL=index.js.ad4977c9af06270f90d1.hot-update.js.map