webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../values/VALUES_CONTACT */ "./values/VALUES_CONTACT.js");
/* harmony import */ var _tools_checkItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/checkItem */ "./tools/checkItem.js");
/* harmony import */ var _styles_Contact2_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Contact2.scss */ "./styles/Contact2.scss");
/* harmony import */ var _styles_Contact2_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact2_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/mnt/c/Dev/giemper-site/components/Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Feedback = function Feedback(props) {
  if (props.status === "error") return __jsx("div", {
    className: "message-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.errorList.map(function (item, index) {
    return __jsx("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(item, props.language));
  }));else if (props.status === "sent") return __jsx("div", {
    className: "message-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].success, props.language)));else return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
};

var Contact = function Contact(props) {
  var lang = props.languageNum;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      errorList = _useState2[0],
      setErrorList = _useState2[1];

  var validateText = function validateText(target, valueContact) {
    var trim = target.value.trim();

    if (!trim) {
      target.dataset.state = 'invalid';
      setStatus("error");
      setErrorList(function (old) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(old), [valueContact]);
      });
    } else target.dataset.state = 'valid';
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    setErrorList([]);
    validateText(e.target.user_name, _values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].errorName);
    validateText(e.target.user_email, _values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].errorEmail);

    if (e.target.user_name.value.trim() && e.target.user_email.value.trim()) {
      emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('gmail', 'giemper_6OSriQM4', e.target).then(function (result) {
        setStatus("sent");
      }), function (error) {
        setStatus("error");
        setErrorList([_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].errorServer]);
      };
    }
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("form", {
    className: "contact-form",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("h2", {
    className: "form-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].head, lang)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("p", {
    className: "form-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].name, lang)), __jsx("input", {
    className: "form-text",
    type: "text",
    name: "user_name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "form-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].email, lang)), __jsx("input", {
    className: "form-text",
    type: "email",
    name: "user_email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("p", {
    className: "form-subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].message, lang)), __jsx("textarea", {
    className: "form-text area",
    name: "message_html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(Feedback, {
    status: status,
    errorList: errorList,
    language: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("input", {
    className: "form-button",
    type: "submit",
    value: Object(_tools_checkItem__WEBPACK_IMPORTED_MODULE_4__["default"])(_values_VALUES_CONTACT__WEBPACK_IMPORTED_MODULE_3__["default"].send, lang),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.c7d30c88bd1f2191493b.hot-update.js.map