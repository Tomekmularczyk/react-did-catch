(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("detect-browser"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "detect-browser"], factory);
	else if(typeof exports === 'object')
		exports["react-did-catch"] = factory(require("react"), require("prop-types"), require("detect-browser"));
	else
		root["react-did-catch"] = factory(root["React"], root["PropTypes"], root["DetectBrowser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _browserInfo = __webpack_require__(3);

var _browserInfo2 = _interopRequireDefault(_browserInfo);

var _styles = __webpack_require__(7);

var _styles2 = _interopRequireDefault(_styles);

var _Collapsible = __webpack_require__(8);

var _Collapsible2 = _interopRequireDefault(_Collapsible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessage = function (_React$Component) {
  _inherits(ErrorMessage, _React$Component);

  function ErrorMessage(props) {
    _classCallCheck(this, ErrorMessage);

    var _this = _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).call(this, props));

    _this.state = {
      isExpanded: false
    };
    _this.toggleIsExpanded = _this.toggleIsExpanded.bind(_this);
    return _this;
  }

  _createClass(ErrorMessage, [{
    key: 'toggleIsExpanded',
    value: function toggleIsExpanded() {
      this.setState(function (prev) {
        return { isExpanded: !prev.isExpanded };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isExpanded = this.state.isExpanded;
      var _props = this.props,
          error = _props.error,
          info = _props.info;


      var styles = (0, _styles.mergeStyles)(_styles2.default, this.props.customStyles);
      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'h5',
          { style: styles.errorMessage, onClick: this.toggleIsExpanded },
          error.toString(),
          _react2.default.createElement(
            'span',
            { style: styles.browserInfo },
            '(',
            _browserInfo2.default.name + ' ' + _browserInfo2.default.version,
            ')'
          ),
          _react2.default.createElement('div', { style: isExpanded ? _extends({}, styles.arrow, { transform: 'rotate(180deg)' }) : styles.arrow })
        ),
        _react2.default.createElement(
          _Collapsible2.default,
          { isExpanded: isExpanded },
          _react2.default.createElement(
            'div',
            { style: styles.componentStack },
            info.componentStack.trim()
          )
        )
      );
    }
  }]);

  return ErrorMessage;
}(_react2.default.Component);

ErrorMessage.propTypes = {
  error: _propTypes2.default.object.isRequired,
  info: _propTypes2.default.shape({
    componentStack: _propTypes2.default.string.isRequired
  }).isRequired,
  customStyles: _propTypes2.default.shape({
    container: _propTypes2.default.object,
    errorMessage: _propTypes2.default.object,
    componentStack: _propTypes2.default.object,
    browserInfo: _propTypes2.default.object,
    arrow: _propTypes2.default.object
  })
};

exports.default = ErrorMessage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _detectBrowser = __webpack_require__(6);

var browserInfo = (0, _detectBrowser.detect)();

exports.default = browserInfo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = undefined;

var _ErrorBoundary = __webpack_require__(5);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _ErrorMessage = __webpack_require__(2);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ErrorMessage = _ErrorMessage2.default;
exports.default = _ErrorBoundary2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ErrorMessage = __webpack_require__(2);

var _ErrorMessage2 = _interopRequireDefault(_ErrorMessage);

var _browserInfo = __webpack_require__(3);

var _browserInfo2 = _interopRequireDefault(_browserInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = {
      error: null,
      info: null,
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      this.setState({ info: info, error: error, hasError: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          info = _state.info,
          hasError = _state.hasError;
      var _props = this.props,
          render = _props.render,
          customStyles = _props.customStyles;

      if (hasError) {
        if (typeof render === 'function') {
          return render(error, info, _browserInfo2.default);
        } else {
          return _react2.default.createElement(_ErrorMessage2.default, {
            error: error,
            info: info,
            customStyles: customStyles
          });
        }
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

ErrorBoundary.propTypes = {
  render: _propTypes2.default.func,
  customStyles: _propTypes2.default.shape({
    container: _propTypes2.default.object,
    errorMessage: _propTypes2.default.object,
    componentStack: _propTypes2.default.object,
    browserInfo: _propTypes2.default.object,
    arrow: _propTypes2.default.object
  })
};

exports.default = ErrorBoundary;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.mergeStyles = mergeStyles;
var container = {
  color: 'black',
  fontSize: '1rem',
  textAlign: 'left',
  whiteSpace: 'pre-line',
  margin: 'auto'
};

var errorMessage = {
  cursor: 'pointer',
  margin: '0'
};

var componentStack = {
  fontSize: '.8rem',
  margin: '0',
  overflow: 'scroll'
};

var browserInfo = {
  fontWeight: 'normal'
};

var arrow = {
  borderStyle: 'solid',
  borderWidth: '0 5px 5px 5px',
  borderColor: 'transparent transparent black transparent',
  display: 'inline-block',
  height: '0',
  margin: 'auto auto auto 5px',
  transition: 'transform .3s ease',
  width: '0',
  verticalAlign: 'middle'
};

var defaultStyles = {
  container: container,
  errorMessage: errorMessage,
  componentStack: componentStack,
  browserInfo: browserInfo,
  arrow: arrow
};

exports.default = defaultStyles;
function mergeStyles(currentStyles, newStyles) {
  if (!newStyles) {
    return currentStyles;
  }

  return {
    container: _extends({}, currentStyles.container, newStyles.container),
    errorMessage: _extends({}, currentStyles.errorMessage, newStyles.errorMessage),
    componentStack: _extends({}, currentStyles.componentStack, newStyles.componentStack),
    browserInfo: _extends({}, currentStyles.browserInfo, newStyles.browserInfo),
    arrow: _extends({}, currentStyles.arrow, newStyles.arrow)
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expandedStyles = {
  overflow: 'hidden',
  transition: 'max-height .3s ease',
  maxHeight: '250px'
};

var collapsedStyles = {
  transition: 'max-height .3s ease',
  overflow: 'hidden',
  maxHeight: '0'
};

var Collapsible = function Collapsible(_ref) {
  var children = _ref.children,
      isExpanded = _ref.isExpanded;
  return _react2.default.createElement(
    'div',
    { style: isExpanded ? expandedStyles : collapsedStyles },
    children
  );
};

Collapsible.propTypes = {
  children: _propTypes2.default.node,
  isExpanded: _propTypes2.default.bool.isRequired
};

exports.default = Collapsible;

/***/ })
/******/ ]);
});