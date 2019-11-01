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
/* harmony import */ var _styles_Intro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Intro.scss */ "./styles/Intro.scss");
/* harmony import */ var _styles_Intro_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Intro_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Dev/giemper-site/pages/Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Viewport from '../tools/Viewport';



var ProfilePicture = function ProfilePicture(props) {
  var canvasHeight = props.height / 1.5 > 500 ? props.height / 1.5 : 500;
  var canvasWidth = props.width > 1160 ? 1 : props.width > 992 ? 0.8 : props.width > 768 ? 0.6 : 0.55;
  var canvasMargin = canvasHeight * 0.1;
  var canvasRadius = (canvasHeight + canvasMargin) / 2 * canvasWidth;
  var canvasSquare = (canvasHeight - canvasMargin) * canvasWidth;
  var canvasSize = (canvasHeight + canvasMargin) * canvasWidth;
  var imageAdapter = {
    width: canvasSquare + "px",
    height: canvasSquare + "px"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.width > 768) {
      var canvas = document.getElementById('circleBG');
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(canvasRadius + canvasMargin / 2, canvasRadius, canvasRadius, 0, 2 * Math.PI);
      context.fillStyle = 'rgba(139, 233, 253, 0.2)';
      context.fill();
    }
  });
  return __jsx("div", {
    className: "intro-picture row justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.width > 768 - 17 ? __jsx("canvas", {
    id: "circleBG",
    height: canvasSize,
    width: canvasSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx("img", {
    src: props.picture,
    style: imageAdapter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

var Intro = function Intro(props) {
  var space = {
    height: props.viewHeight + "px"
  };
  var image = "Myself.jpg";
  return __jsx("div", {
    className: "intro page",
    id: "nav_home",
    style: space,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "col-lg-7 col-md-8 col-sm-12 intro-item text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "intro-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("p", {
    className: "message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Hello there, I'm"), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Guillermo"), __jsx("p", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Magdaleno"), __jsx("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Software Developer"))), __jsx("div", {
    className: "col-lg-5 col-md-4 col-sm-12 intro-item picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(ProfilePicture, {
    height: props.viewHeight,
    width: props.viewWidth,
    picture: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro); // const CanvasBackground = (props) => {
//     const canvasHeight = props.height;
//     const canvasWidth = props.width + 17;
//     const drawLine = (context, startPointX, startPointY, endPointX, endPointY) => {
//         context.moveTo(startPointX, startPointY);
//         context.lineTo(endPointX, endPointY);
//         context.stroke();
//     }
//     useEffect(() => {
//         const canvas = document.getElementById("line-canvas");
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.strokeStyle = (canvasWidth > 420) 
//                                 ? 'rgba(68, 71, 90, 0.5)'
//                                 : 'rgba(68, 71, 90, 0.2)';
//         context.lineWidth = 3;
//         drawLine(context, 0, 0, canvasWidth, canvasHeight - 150);
//         drawLine(context, canvasWidth * 0.75, 0, canvasWidth / 2, canvasHeight);
//         drawLine(context, canvasWidth * 0.43, 0, canvasWidth * 0, canvasHeight * 0.85);
//         drawLine(context, canvasWidth * 0.08, 0, canvasWidth * 0.39, canvasHeight);
//         drawLine(context, canvasWidth, canvasHeight * 0.04, canvasWidth * 0.15, canvasHeight);
//         drawLine(context, 0, canvasHeight * 0.45, canvasWidth * 0.81, canvasHeight);
//         drawLine(context, canvasWidth * 0.51, 0, canvasWidth * 0.62, canvasHeight);
//     });
//     return (
//         <canvas id="line-canvas" height={canvasHeight} width={canvasWidth} />
//     );
// }

/***/ })

})
//# sourceMappingURL=index.js.e06f013270f5e5143c64.hot-update.js.map