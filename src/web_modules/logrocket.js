import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-8c19dec8.js';

var build_umd = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(commonjsGlobal, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./packages/@apphub:logrocket-console/src/index.js":
/*!*********************************************************!*\
  !*** ./packages/@apphub:logrocket-console/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registerConsole = __webpack_require__(/*! ./registerConsole */ "./packages/@apphub:logrocket-console/src/registerConsole.js");

var _registerConsole2 = _interopRequireDefault(_registerConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _registerConsole2.default;

/***/ }),

/***/ "./packages/@apphub:logrocket-console/src/registerConsole.js":
/*!*******************************************************************!*\
  !*** ./packages/@apphub:logrocket-console/src/registerConsole.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = registerConsole;

var _enhanceFunc = __webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js");

var _enhanceFunc2 = _interopRequireDefault(_enhanceFunc);

var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerConsole(logger) {
  var unsubFunctions = [];
  var methods = ['log', 'warn', 'info', 'error', 'debug'];

  methods.forEach(function (method) {
    unsubFunctions.push((0, _enhanceFunc2.default)(console, method, function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      logger.addEvent('lr.core.LogEvent', function () {
        var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var isEnabled = consoleOptions.isEnabled;

        if ((typeof isEnabled === 'undefined' ? 'undefined' : _typeof(isEnabled)) === 'object' && isEnabled[method] === false || isEnabled === false) {
          return null;
        }

        if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
          _logrocketExceptions.Capture.captureMessage(logger, args[0], {}, true);
        }

        return {
          logLevel: method.toUpperCase(),
          args: args
        };
      });
    }));
  });

  return function () {
    unsubFunctions.forEach(function (unsubFunction) {
      return unsubFunction();
    });
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/Capture.js":
/*!**************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/Capture.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-param-reassign */


exports.captureMessage = captureMessage;
exports.captureException = captureException;

var _TraceKit = __webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js");

var _TraceKit2 = _interopRequireDefault(_TraceKit);

var _stackTraceFromError = __webpack_require__(/*! ./stackTraceFromError */ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js");

var _stackTraceFromError2 = _interopRequireDefault(_stackTraceFromError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScalar(value) {
  return (/boolean|number|string/.test(typeof value === 'undefined' ? 'undefined' : _typeof(value))
  );
}

function scrub(data, options) {
  if (options) {
    var optionalScalars = [
    // Valid values for 'level' are 'fatal', 'error', 'warning', 'info',
    // and 'debug'. Defaults to 'error'.
    'level', 'logger'];
    for (var _iterator = optionalScalars, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var field = _ref;

      var value = options[field];

      if (isScalar(value)) {
        data[field] = value.toString();
      }
    }

    var optionalMaps = ['tags', 'extra'];
    for (var _iterator2 = optionalMaps, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _field = _ref2;

      var dirty = options[_field] || {};
      var scrubbed = {};

      for (var _iterator3 = Object.keys(dirty), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        var _value = dirty[key];

        if (isScalar(_value)) {
          scrubbed[key.toString()] = _value.toString();
        }
      }

      data[_field] = scrubbed;
    }
  }
}

function captureMessage(logger, message) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isConsole = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var data = {
    exceptionType: isConsole ? 'CONSOLE' : 'MESSAGE',
    message: message,
    browserHref: window.location.href
  };

  scrub(data, options);

  logger.addEvent('lr.core.Exception', function () {
    return data;
  });
}

function captureException(logger, exception) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var preppedTrace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var trace = preppedTrace || _TraceKit2.default.computeStackTrace(exception);

  var data = {
    exceptionType: 'WINDOW',
    errorType: trace.name,
    message: trace.message,
    browserHref: window.location.href
  };

  scrub(data, options);

  var addEventOptions = {
    _stackTrace: (0, _stackTraceFromError2.default)(trace)
  };

  logger.addEvent('lr.core.Exception', function () {
    return data;
  }, addEventOptions);
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/index.js":
/*!************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Capture = exports.registerExceptions = undefined;

var _registerExceptions = __webpack_require__(/*! ./registerExceptions */ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js");

var _registerExceptions2 = _interopRequireDefault(_registerExceptions);

var _Capture = __webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js");

var Capture = _interopRequireWildcard(_Capture);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.registerExceptions = _registerExceptions2.default;
exports.Capture = Capture;

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/raven/raven.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */

/*
Some contents of this file were originaly from raven-js, BSD-2 Clause

Copyright (c) 2018 Sentry (https://sentry.io) and individual contributors.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var _TraceKit = __webpack_require__(/*! @apphub/logrocket-utils/src/TraceKit */ "./packages/@apphub:logrocket-utils/src/TraceKit.js");

var _TraceKit2 = _interopRequireDefault(_TraceKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var objectPrototype = Object.prototype;

function isUndefined(what) {
  return what === void 0;
}

function isFunction(what) {
  return typeof what === 'function';
}

/**
 * hasKey, a better form of hasOwnProperty
 * Example: hasKey(MainHostObject, property) === true/false
 *
 * @param {Object} host object to check property
 * @param {string} key to check
 */
function hasKey(object, key) {
  return objectPrototype.hasOwnProperty.call(object, key);
}

/**
 * Polyfill a method
 * @param obj object e.g. `document`
 * @param name method name present on object e.g. `addEventListener`
 * @param replacement replacement function
 * @param track {optional} record instrumentation to an array
 */
function fill(obj, name, replacement, track) {
  var orig = obj[name];
  obj[name] = replacement(orig);
  if (track) {
    track.push([obj, name, orig]);
  }
}

var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var _document = _window.document;

var Handler = function () {
  function Handler(_ref) {
    var captureException = _ref.captureException;

    _classCallCheck(this, Handler);

    this._errorHandler = this._errorHandler.bind(this);

    this._ignoreOnError = 0;
    this._wrappedBuiltIns = [];
    this.captureException = captureException;
    _TraceKit2.default.report.subscribe(this._errorHandler);
    this._instrumentTryCatch();
  }

  _createClass(Handler, [{
    key: 'uninstall',
    value: function uninstall() {
      _TraceKit2.default.report.unsubscribe(this._errorHandler);

      // restore any wrapped builtins
      var builtin;
      while (this._wrappedBuiltIns.length) {
        builtin = this._wrappedBuiltIns.shift();

        var obj = builtin[0],
            name = builtin[1],
            orig = builtin[2];

        obj[name] = orig;
      }
    }
  }, {
    key: '_errorHandler',
    value: function _errorHandler(report) {
      if (!this._ignoreOnError) {
        this.captureException(report);
      }
    }
  }, {
    key: '_ignoreNextOnError',
    value: function _ignoreNextOnError() {
      var _this = this;

      this._ignoreOnError += 1;
      setTimeout(function () {
        // onerror should trigger before setTimeout
        _this._ignoreOnError -= 1;
      });
    }

    /*
     * Wrap code within a context so Handler can capture errors
     * reliably across domains that is executed immediately.
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The callback to be immediately executed within the context
     * @param {array} args An array of arguments to be called with the callback [optional]
     */

  }, {
    key: 'context',
    value: function context(options, func, args) {
      if (isFunction(options)) {
        args = func || [];
        func = options;
        options = undefined;
      }

      return this.wrap(options, func).apply(this, args);
    }
  }, {
    key: 'wrap',


    /*
     * Wrap code within a context and returns back a new function to be executed
     *
     * @param {object} options A specific set of options for this context [optional]
     * @param {function} func The function to be wrapped in a new context
     * @param {function} func A function to call before the try/catch wrapper [optional, private]
     * @return {function} The newly wrapped functions with a context
     */
    value: function wrap(options, func, _before) {
      var self = this;
      // 1 argument has been passed, and it's not a function
      // so just return it
      if (isUndefined(func) && !isFunction(options)) {
        return options;
      }

      // options is optional
      if (isFunction(options)) {
        func = options;
        options = undefined;
      }

      // At this point, we've passed along 2 arguments, and the second one
      // is not a function either, so we'll just return the second argument.
      if (!isFunction(func)) {
        return func;
      }

      // We don't wanna wrap it twice!
      try {
        if (func.__lr__) {
          return func;
        }

        // If this has already been wrapped in the past, return that
        if (func.__lr_wrapper__) {
          return func.__lr_wrapper__;
        }

        // If func is not extensible, return the function as-is to prevent TypeErrors
        // when trying to add new props & to assure immutable funcs aren't changed
        if (!Object.isExtensible(func)) {
          return func;
        }
      } catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see lr-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return func;
      }

      function wrapped() {
        var args = [],
            i = arguments.length,
            deep = !options || options && options.deep !== false;

        if (_before && isFunction(_before)) {
          _before.apply(this, arguments);
        }

        // Recursively wrap all of a function's arguments that are
        // functions themselves.
        while (i--) {
          args[i] = deep ? self.wrap(options, arguments[i]) : arguments[i];
        }try {
          // Attempt to invoke user-land function. This is part of the LogRocket SDK.
          // If you're seeing this frame in a stack trace, it means that LogRocket caught
          // an unhandled error thrown by your application code, reported it, then bubbled
          // it up. This is expected behavior and is not a bug with LogRocket.
          return func.apply(this, args);
        } catch (e) {
          self._ignoreNextOnError();
          self.captureException(_TraceKit2.default.computeStackTrace(e), options);
          throw e;
        }
      }

      // copy over properties of the old function
      for (var property in func) {
        if (hasKey(func, property)) {
          wrapped[property] = func[property];
        }
      }
      wrapped.prototype = func.prototype;

      func.__lr_wrapper__ = wrapped;
      // Signal that this function has been wrapped already
      // for both debugging and to prevent it to being wrapped twice
      wrapped.__lr__ = true;
      wrapped.__inner__ = func;

      return wrapped;
    }
  }, {
    key: '_instrumentTryCatch',


    /**
     * Install any queued plugins
     */
    value: function _instrumentTryCatch() {
      var self = this;

      var wrappedBuiltIns = self._wrappedBuiltIns;

      function wrapTimeFn(orig) {
        return function (fn, t) {
          // preserve arity
          // Make a copy of the arguments to prevent deoptimization
          // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
          }
          var originalCallback = args[0];
          if (isFunction(originalCallback)) {
            args[0] = self.wrap(originalCallback);
          }

          // IE < 9 doesn't support .call/.apply on setInterval/setTimeout, but it
          // also supports only two arguments and doesn't care what this is, so we
          // can just call the original function directly.
          if (orig.apply) {
            return orig.apply(this, args);
          } else {
            return orig(args[0], args[1]);
          }
        };
      }

      function wrapEventTarget(global) {
        var proto = _window[global] && _window[global].prototype;
        if (proto && proto.hasOwnProperty && proto.hasOwnProperty('addEventListener')) {
          fill(proto, 'addEventListener', function (orig) {
            return function (evtName, fn, capture, secure) {
              // preserve arity
              try {
                if (fn && fn.handleEvent) {
                  fn.handleEvent = self.wrap(fn.handleEvent);
                }
              } catch (err) {}
              // can sometimes get 'Permission denied to access property "handle Event'


              // More breadcrumb DOM capture ... done here and not in `_instrumentBreadcrumbs`
              // so that we don't have more than one wrapper function
              var before;

              return orig.call(this, evtName, self.wrap(fn, undefined, before), capture, secure);
            };
          }, wrappedBuiltIns);
          fill(proto, 'removeEventListener', function (orig) {
            return function (evt, fn, capture, secure) {
              try {
                fn = fn && (fn.__lr_wrapper__ ? fn.__lr_wrapper__ : fn);
              } catch (e) {
                // ignore, accessing __lr_wrapper__ will throw in some Selenium environments
              }
              return orig.call(this, evt, fn, capture, secure);
            };
          }, wrappedBuiltIns);
        }
      }

      fill(_window, 'setTimeout', wrapTimeFn, wrappedBuiltIns);
      fill(_window, 'setInterval', wrapTimeFn, wrappedBuiltIns);
      if (_window.requestAnimationFrame) {
        fill(_window, 'requestAnimationFrame', function (orig) {
          return function (cb) {
            return orig(self.wrap(cb));
          };
        }, wrappedBuiltIns);
      }

      // event targets borrowed from bugsnag-js:
      // https://github.com/bugsnag/bugsnag-js/blob/master/src/bugsnag.js#L666
      var eventTargets = ['EventTarget', 'Window', 'Node', 'ApplicationCache', 'AudioTrackList', 'ChannelMergerNode', 'CryptoOperation', 'EventSource', 'FileReader', 'HTMLUnknownElement', 'IDBDatabase', 'IDBRequest', 'IDBTransaction', 'KeyOperation', 'MediaController', 'MessagePort', 'ModalWindow', 'Notification', 'SVGElementInstance', 'Screen', 'TextTrack', 'TextTrackCue', 'TextTrackList', 'WebSocket', 'WebSocketWorker', 'Worker', 'XMLHttpRequest', 'XMLHttpRequestEventTarget', 'XMLHttpRequestUpload'];
      for (var i = 0; i < eventTargets.length; i++) {
        wrapEventTarget(eventTargets[i]);
      }

      var $ = _window.jQuery || _window.$;
      if ($ && $.fn && $.fn.ready) {
        fill($.fn, 'ready', function (orig) {
          return function (fn) {
            return orig.call(this, self.wrap(fn));
          };
        }, wrappedBuiltIns);
      }
    }
  }]);

  return Handler;
}();

exports.default = Handler;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/registerExceptions.js":
/*!*************************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/registerExceptions.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerCore;

var _raven = __webpack_require__(/*! ./raven/raven */ "./packages/@apphub:logrocket-exceptions/src/raven/raven.js");

var _raven2 = _interopRequireDefault(_raven);

var _Capture = __webpack_require__(/*! ./Capture */ "./packages/@apphub:logrocket-exceptions/src/Capture.js");

var Capture = _interopRequireWildcard(_Capture);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerCore(logger) {
  var raven = new _raven2.default({
    captureException: function captureException(errorReport) {
      Capture.captureException(logger, null, null, errorReport);
    }
  });

  var rejectionHandler = function rejectionHandler(evt) {
    // http://2ality.com/2016/04/unhandled-rejections.html
    logger.addEvent('lr.core.Exception', function () {
      return {
        exceptionType: 'UNHANDLED_REJECTION',
        message: evt.reason || 'Unhandled Promise rejection'
      };
    });
  };

  window.addEventListener('unhandledrejection', rejectionHandler);

  return function () {
    window.removeEventListener('unhandledrejection', rejectionHandler);
    raven.uninstall();
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js":
/*!**************************************************************************!*\
  !*** ./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stackTraceFromError;
function stackTraceFromError(errorReport) {
  function makeNotNull(val) {
    return val === null ? undefined : val;
  }

  return errorReport.stack ? errorReport.stack.map(function (frame) {
    return {
      lineNumber: makeNotNull(frame.line),
      columnNumber: makeNotNull(frame.column),
      fileName: makeNotNull(frame.url),
      functionName: makeNotNull(frame.func)
    };
  }) : undefined;
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/fetchIntercept.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/fetchIntercept.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _registerXHR = __webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var interceptors = [];

function makeInterceptor(fetch, fetchId) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var reversedInterceptors = interceptors.reduce(function (array, interceptor) {
    return [interceptor].concat(array);
  }, []);
  var promise = Promise.resolve(args);

  // Register request interceptors
  reversedInterceptors.forEach(function (_ref) {
    var request = _ref.request,
        requestError = _ref.requestError;

    if (request || requestError) {
      promise = promise.then(function (args) {
        return request.apply(undefined, [fetchId].concat(_toConsumableArray(args)));
      }, function (args) {
        return requestError.apply(undefined, [fetchId].concat(_toConsumableArray(args)));
      });
    }
  });

  promise = promise.then(function (args) {
    (0, _registerXHR.setActive)(false);

    var res = void 0;
    var err = void 0;
    try {
      res = fetch.apply(undefined, _toConsumableArray(args));
    } catch (_err) {
      err = _err;
    }

    (0, _registerXHR.setActive)(true);

    if (err) {
      throw err;
    }
    return res;
  });

  reversedInterceptors.forEach(function (_ref2) {
    var response = _ref2.response,
        responseError = _ref2.responseError;

    if (response || responseError) {
      promise = promise.then(function (res) {
        return response(fetchId, res);
      }, function (err) {
        return responseError && responseError(fetchId, err);
      });
    }
  });

  return promise;
}

function attach(env) {
  if (!env.fetch || !env.Promise) {
    // Make sure fetch is available in the given environment. If it's not, then
    // default to using XHR intercept.
    return;
  }

  var isPolyfill = env.fetch.polyfill;

  // eslint-disable-next-line no-param-reassign
  env.fetch = function (fetch) {
    var fetchId = 0;

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return makeInterceptor.apply(undefined, [fetch, fetchId++].concat(args));
    };
  }(env.fetch);

  // Forward the polyfill properly from fetch (set by github/whatwg-fetch).
  if (isPolyfill) {
    // eslint-disable-next-line no-param-reassign
    env.fetch.polyfill = isPolyfill;
  }
}

// TODO: React Native
//   attach(global);

var didAttach = false;

exports.default = {
  register: function register(interceptor) {
    if (!didAttach) {
      didAttach = true;
      attach(window);
    }

    interceptors.push(interceptor);
    return function () {
      var index = interceptors.indexOf(interceptor);

      if (index >= 0) {
        interceptors.splice(index, 1);
      }
    };
  },
  clear: function clear() {
    interceptors = [];
  }
};

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/index.js":
/*!*********************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = registerNetwork;

var _registerFetch = __webpack_require__(/*! ./registerFetch */ "./packages/@apphub:logrocket-network/src/registerFetch.js");

var _registerFetch2 = _interopRequireDefault(_registerFetch);

var _registerXHR = __webpack_require__(/*! ./registerXHR */ "./packages/@apphub:logrocket-network/src/registerXHR.js");

var _registerXHR2 = _interopRequireDefault(_registerXHR);

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerNetwork(logger) {
  var ignoredNetwork = {};

  // truncate if > 4MB in size
  var truncate = function truncate(data) {
    var limit = 1024 * 1000 * 4;
    var str = data;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && data != null) {
      var proto = Object.getPrototypeOf(data);

      if (proto === Object.prototype || proto === null) {
        // plain object - jsonify for the size check
        str = JSON.stringify(data);
      }
    }

    if (str && str.length && str.length > limit && typeof str === 'string') {
      var beginning = str.substring(0, 1000);
      return beginning + ' ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network';
    }

    return data;
  };

  var addRequest = function addRequest(reqId, request) {
    var method = request.method;
    logger.addEvent('lr.network.RequestEvent', function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$isEnabled = _ref.isEnabled,
          isEnabled = _ref$isEnabled === undefined ? true : _ref$isEnabled,
          _ref$requestSanitizer = _ref.requestSanitizer,
          requestSanitizer = _ref$requestSanitizer === undefined ? function (f) {
        return f;
      } : _ref$requestSanitizer;

      if (!isEnabled) {
        return null;
      }
      var sanitized = null;
      try {
        // only try catch user defined functions
        sanitized = requestSanitizer(_extends({}, request, { reqId: reqId }));
      } catch (err) {
        console.error(err);
      }
      if (sanitized) {
        // Writing and then reading from an a tag turns a relative
        // url into an absolute one.
        var a = document.createElement('a');
        a.href = sanitized.url;

        return {
          reqId: reqId, // default
          url: a.href, // sanitized
          headers: (0, _mapValues2.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return '' + headerValue;
          }),
          body: truncate(sanitized.body), // sanitized
          method: method, // default
          referrer: sanitized.referrer || undefined, // sanitized
          mode: sanitized.mode || undefined, // sanitized
          credentials: sanitized.credentials || undefined // sanitized
        };
      }
      ignoredNetwork[reqId] = true;
      return null;
    });
  };

  var addResponse = function addResponse(reqId, response) {
    var method = response.method,
        status = response.status;

    logger.addEvent('lr.network.ResponseEvent', function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$isEnabled = _ref2.isEnabled,
          isEnabled = _ref2$isEnabled === undefined ? true : _ref2$isEnabled,
          _ref2$responseSanitiz = _ref2.responseSanitizer,
          responseSanitizer = _ref2$responseSanitiz === undefined ? function (f) {
        return f;
      } : _ref2$responseSanitiz;

      if (!isEnabled) {
        return null;
      } else if (ignoredNetwork[reqId]) {
        delete ignoredNetwork[reqId];
        return null;
      }
      var sanitized = null;

      try {
        // only try catch user defined functions
        sanitized = responseSanitizer(_extends({}, response, { reqId: reqId }));
      } catch (err) {
        console.error(err);
        // fall through to redacted log
      }
      if (sanitized) {
        return {
          reqId: reqId, // default
          status: sanitized.status, // sanitized
          headers: (0, _mapValues2.default)(sanitized.headers, function (headerValue) {
            // sanitized
            return '' + headerValue;
          }),
          body: truncate(sanitized.body), // sanitized
          method: method // default
        };
      }
      return {
        reqId: reqId, // default
        status: status, // default
        headers: {}, // redacted
        body: null, // redacted
        method: method // default
      };
    });
  };

  var isIgnored = function isIgnored(reqId) {
    return logger.isDisabled || ignoredNetwork[reqId] === true;
  };

  var unsubFetch = (0, _registerFetch2.default)({ addRequest: addRequest, addResponse: addResponse, isIgnored: isIgnored });
  var unsubXHR = (0, _registerXHR2.default)({
    addRequest: addRequest,
    addResponse: addResponse,
    isIgnored: isIgnored,
    shouldCloneResponse: logger._shouldCloneResponse
  });

  return function () {
    unsubFetch();
    unsubXHR();
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/registerFetch.js":
/*!*****************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/registerFetch.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = registerFetch;

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _fetchIntercept = __webpack_require__(/*! ./fetchIntercept */ "./packages/@apphub:logrocket-network/src/fetchIntercept.js");

var _fetchIntercept2 = _interopRequireDefault(_fetchIntercept);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeObjectFromHeaders(headers) {
  // If using real fetch, we must stringify the Headers object.
  if (headers == null || typeof headers.forEach !== 'function') {
    return headers;
  }

  var result = {};
  headers.forEach(function (value, key) {
    if (result[key]) {
      result[key] = result[key] + ',' + value;
    } else {
      result[key] = '' + value;
    }
  });
  return result;
}

// XHR specification is unclear of what types to allow in value so using toString method for now
var stringifyHeaders = function stringifyHeaders(headers) {
  return (0, _mapValues2.default)(makeObjectFromHeaders(headers), function (value) {
    return '' + value;
  });
};

function pluckFetchFields() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    url: arg.url,
    headers: stringifyHeaders(arg.headers),
    method: arg.method && arg.method.toUpperCase(),
    referrer: arg.referrer || undefined,
    mode: arg.mode || undefined,
    credentials: arg.credentials || undefined
  };
}

function registerFetch(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored;

  var LOGROCKET_FETCH_LABEL = 'fetch-';
  var fetchMethodMap = {};

  var unregister = _fetchIntercept2.default.register({
    request: function request(fetchId) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var p = void 0;

      if (typeof Request !== 'undefined' && args[0] instanceof Request) {
        var clonedText = void 0;

        // Request.clone() and Request.text() may throw in Safari (e.g., when
        // request body contains FormData)
        try {
          clonedText = args[0].clone().text();
        } catch (err) {
          clonedText = Promise.resolve('LogRocket fetch error: ' + err.message);
        }

        p = clonedText.then(function (body) {
          return _extends({}, pluckFetchFields(args[0]), {
            body: body
          });
        }, function (err) {
          return _extends({}, pluckFetchFields(args[0]), {
            body: 'LogRocket fetch error: ' + err.message
          });
        });
      } else {
        p = Promise.resolve(_extends({}, pluckFetchFields(args[1]), {
          url: '' + args[0],
          body: (args[1] || {}).body
        }));
      }

      return p.then(function (req) {
        fetchMethodMap[fetchId] = req.method;
        addRequest('' + LOGROCKET_FETCH_LABEL + fetchId, req);
        return args;
      });
    },
    requestError: function requestError(fetchId, error) {
      return Promise.reject(error);
    },
    response: function response(fetchId, _response) {
      var clonedText = void 0;

      if (isIgnored('' + LOGROCKET_FETCH_LABEL + fetchId)) {
        // Don't even try to read ignored requests
        return _response;
      }

      try {
        // TODO: enhance function on original response and future clones for:
        // text(), json(), blob(), formdata(), arraybuffer()
        clonedText = _response.clone().text();
      } catch (err) {
        // safari has a bug where cloning can fail
        clonedText = Promise.resolve('LogRocket fetch error: ' + err.message);
      }

      return clonedText.then(function (data) {
        var responseHash = {
          url: _response.url,
          status: _response.status,
          headers: stringifyHeaders(_response.headers),
          body: data,
          method: fetchMethodMap[fetchId]
        };
        delete fetchMethodMap[fetchId];
        addResponse('' + LOGROCKET_FETCH_LABEL + fetchId, responseHash);
        return _response;
      });
    },
    responseError: function responseError(fetchId, error) {
      var response = {
        url: undefined,
        status: 0,
        headers: {},
        body: '' + error
      };
      addResponse('' + LOGROCKET_FETCH_LABEL + fetchId, response);
      return Promise.reject(error);
    }
  });

  return unregister;
}

/***/ }),

/***/ "./packages/@apphub:logrocket-network/src/registerXHR.js":
/*!***************************************************************!*\
  !*** ./packages/@apphub:logrocket-network/src/registerXHR.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setActive = setActive;
exports.default = registerXHR;

var _mapValues = __webpack_require__(/*! @apphub/logrocket-utils/src/mapValues */ "./packages/@apphub:logrocket-utils/src/mapValues.js");

var _mapValues2 = _interopRequireDefault(_mapValues);

var _enhanceFunc = __webpack_require__(/*! @apphub/logrocket-utils/src/enhanceFunc */ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js");

var _enhanceFunc2 = _interopRequireDefault(_enhanceFunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isActive = true;

function setActive(shouldBeActive) {
  isActive = shouldBeActive;
}

var currentXHRId = 0;
function registerXHR(_ref) {
  var addRequest = _ref.addRequest,
      addResponse = _ref.addResponse,
      isIgnored = _ref.isIgnored,
      _ref$shouldCloneRespo = _ref.shouldCloneResponse,
      shouldCloneResponse = _ref$shouldCloneRespo === undefined ? false : _ref$shouldCloneRespo;

  var _XHR = XMLHttpRequest;
  var xhrMap = new WeakMap();
  var unsubscribedFromXhr = false;
  var LOGROCKET_XHR_LABEL = 'xhr-';

  window._lrXMLHttpRequest = XMLHttpRequest;

  // eslint-disable-next-line no-native-reassign
  XMLHttpRequest = function XMLHttpRequest(mozAnon, mozSystem) {
    var xhrObject = new _XHR(mozAnon, mozSystem);
    if (!isActive) {
      return xhrObject;
    }

    xhrMap.set(xhrObject, {
      xhrId: ++currentXHRId,
      headers: {}
    });

    // ..., 'open', (method, url, async, username, password) => {
    (0, _enhanceFunc2.default)(xhrObject, 'open', function (method, url) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      currentXHR.method = method;
      currentXHR.url = url;
    });

    (0, _enhanceFunc2.default)(xhrObject, 'send', function (data) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      if (!currentXHR) return;

      var request = {
        url: currentXHR.url,
        method: currentXHR.method && currentXHR.method.toUpperCase(),
        headers: (0, _mapValues2.default)(currentXHR.headers || {}, function (headerValues) {
          return headerValues.join(', ');
        }),
        body: data
      };
      addRequest('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId, request);
    });

    (0, _enhanceFunc2.default)(xhrObject, 'setRequestHeader', function (header, value) {
      if (unsubscribedFromXhr) return;
      var currentXHR = xhrMap.get(xhrObject);
      if (!currentXHR) return;

      currentXHR.headers = currentXHR.headers || {};
      currentXHR.headers[header] = currentXHR.headers[header] || [];
      currentXHR.headers[header].push(value);
    });

    var xhrListeners = {
      readystatechange: function readystatechange() {
        if (unsubscribedFromXhr) return;

        if (xhrObject.readyState === 4) {
          var currentXHR = xhrMap.get(xhrObject);
          if (!currentXHR) return;

          // Do not read ignored requests at all.
          if (isIgnored('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId)) return;

          var headerString = xhrObject.getAllResponseHeaders();

          var headers = headerString.split(/[\r\n]+/).reduce(function (previous, current) {
            var next = previous;
            var headerParts = current.split(': ');
            if (headerParts.length > 0) {
              var key = headerParts.shift(); // first index of the array
              var value = headerParts.join(': '); // rest of the array repaired
              if (previous[key]) {
                next[key] += ', ' + value;
              } else {
                next[key] = value;
              }
            }
            return next;
          }, {});

          var body = void 0;

          // IE 11 sometimes throws when trying to access large responses
          try {
            switch (xhrObject.responseType) {
              case 'json':
                body = shouldCloneResponse ? JSON.parse(JSON.stringify(xhrObject.response)) : xhrObject.response;
                break;
              case 'arraybuffer':
              case 'blob':
                {
                  body = xhrObject.response;
                  break;
                }
              case 'document':
                {
                  body = xhrObject.responseXML;
                  break;
                }
              case 'text':
              case '':
                {
                  body = xhrObject.responseText;
                  break;
                }
              default:
                {
                  body = '';
                }
            }
          } catch (err) {
            body = 'LogRocket: Error accessing response.';
          }

          var response = {
            url: currentXHR.url,
            status: xhrObject.status,
            headers: headers,
            body: body,
            method: (currentXHR.method || '').toUpperCase()
          };

          addResponse('' + LOGROCKET_XHR_LABEL + currentXHR.xhrId, response);
        }
      }
      // // Unused Event Listeners
      // loadstart: () => {},
      // progress: () => {},
      // abort: () => {},
      // error: () => {},
      // load: () => {},
      // timeout: () => {},
      // loadend: () => {},
    };

    Object.keys(xhrListeners).forEach(function (key) {
      xhrObject.addEventListener(key, xhrListeners[key]);
    });

    return xhrObject;
  };

  // this allows "instanceof XMLHttpRequest" to work
  XMLHttpRequest.prototype = _XHR.prototype;

  // Persist the static variables.
  ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'].forEach(function (variable) {
    XMLHttpRequest[variable] = _XHR[variable];
  });

  return function () {
    unsubscribedFromXhr = true;
    // eslint-disable-next-line no-native-reassign
    XMLHttpRequest = _XHR;
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/createEnhancer.js":
/*!****************************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/createEnhancer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createEnhancer;

var _now = __webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeIdCounter = 0;

function createEnhancer(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === undefined ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === undefined ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  // an enhancer is a function that returns a Store
  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var originalDispatch = store.dispatch;
      var storeId = storeIdCounter++;
      logger.addEvent('lr.redux.InitialState', function () {
        var sanitizedState = void 0;
        try {
          // only try catch user defined functions
          sanitizedState = stateSanitizer(store.getState());
        } catch (err) {
          console.error(err.toString());
        }

        return {
          state: sanitizedState,
          storeId: storeId
        };
      });

      var dispatch = function dispatch(action) {
        var start = (0, _now2.default)();

        var err = void 0;
        var res = void 0;
        try {
          res = originalDispatch(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now2.default)() - start;

          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }
            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };

      return _extends({}, store, {
        dispatch: dispatch
      });
    };
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/createMiddleware.js":
/*!******************************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/createMiddleware.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMiddleware;

var _now = __webpack_require__(/*! @apphub/now */ "./packages/@apphub:now/src/index.js");

var _now2 = _interopRequireDefault(_now);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeIdCounter = 0;

function createMiddleware(logger) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$stateSanitizer = _ref.stateSanitizer,
      stateSanitizer = _ref$stateSanitizer === undefined ? function (f) {
    return f;
  } : _ref$stateSanitizer,
      _ref$actionSanitizer = _ref.actionSanitizer,
      actionSanitizer = _ref$actionSanitizer === undefined ? function (f) {
    return f;
  } : _ref$actionSanitizer;

  return function (store) {
    var storeId = storeIdCounter++;
    logger.addEvent('lr.redux.InitialState', function () {
      var sanitizedState = void 0;
      try {
        // only try catch user defined functions
        sanitizedState = stateSanitizer(store.getState());
      } catch (err) {
        console.error(err.toString());
      }

      return {
        state: sanitizedState,
        storeId: storeId
      };
    });

    return function (next) {
      return function (action) {
        var start = (0, _now2.default)();

        var err = void 0;
        var res = void 0;
        try {
          res = next(action);
        } catch (_err) {
          err = _err;
        } finally {
          var duration = (0, _now2.default)() - start;

          logger.addEvent('lr.redux.ReduxAction', function () {
            var sanitizedState = null;
            var sanitizedAction = null;

            try {
              // only try catch user defined functions
              sanitizedState = stateSanitizer(store.getState());
              sanitizedAction = actionSanitizer(action);
            } catch (err) {
              console.error(err.toString());
            }

            if (sanitizedState && sanitizedAction) {
              return {
                storeId: storeId,
                action: sanitizedAction,
                duration: duration,
                stateDelta: sanitizedState
              };
            }
            return null;
          });
        }

        if (err) {
          throw err;
        }

        return res;
      };
    };
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-redux/src/index.js":
/*!*******************************************************!*\
  !*** ./packages/@apphub:logrocket-redux/src/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEnhancer = exports.createMiddleware = undefined;

var _createEnhancer = __webpack_require__(/*! ./createEnhancer */ "./packages/@apphub:logrocket-redux/src/createEnhancer.js");

var _createEnhancer2 = _interopRequireDefault(_createEnhancer);

var _createMiddleware = __webpack_require__(/*! ./createMiddleware */ "./packages/@apphub:logrocket-redux/src/createMiddleware.js");

var _createMiddleware2 = _interopRequireDefault(_createMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createMiddleware = _createMiddleware2.default;
exports.createEnhancer = _createEnhancer2.default;

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/TraceKit.js":
/*!**********************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/TraceKit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(global) {/* eslint-disable */



/*
 TraceKit - Cross brower stack traces - github.com/occ/TraceKit

 This was originally forked from github.com/occ/TraceKit, but has since been
 largely re-written and is now maintained as part of raven-js.  Tests for
 this are in test/vendor.

 MIT license
*/

var TraceKit = {
    collectWindowErrors: true,
    debug: false
};

// This is to be defensive in environments where window does not exist (see https://github.com/getsentry/raven-js/pull/785)
var _window = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

// global reference to slice
var _slice = [].slice;
var UNKNOWN_FUNCTION = '?';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
var ERROR_TYPES_RE = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

function getLocationHref() {
    if (typeof document === 'undefined' || typeof document.location === 'undefined') return '';

    return document.location.href;
}

/**
 * TraceKit.report: cross-browser processing of unhandled exceptions
 *
 * Syntax:
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report.unsubscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *              on top frame; column number is not guaranteed
 *   - Opera:   full stack trace with line and column numbers
 *   - Chrome:  full stack trace with line and column numbers
 *   - Safari:  line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *   - IE:      line and column number for the top frame only; some frames
 *              may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit.computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a stackInfo object as described in the
 * TraceKit.computeStackTrace docs.
 */
TraceKit.report = function reportModuleWrapper() {
    var handlers = [],
        lastArgs = null,
        lastException = null,
        lastExceptionStack = null;

    /**
     * Add a crash handler.
     * @param {Function} handler
     */
    function subscribe(handler) {
        installGlobalHandler();
        handlers.push(handler);
    }

    /**
     * Remove a crash handler.
     * @param {Function} handler
     */
    function unsubscribe(handler) {
        for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1);
            }
        }
    }

    /**
     * Remove all crash handlers.
     */
    function unsubscribeAll() {
        uninstallGlobalHandler();
        handlers = [];
    }

    /**
     * Dispatch stack information to all handlers.
     * @param {Object.<string, *>} stack
     */
    function notifyHandlers(stack, isWindowError) {
        var exception = null;
        if (isWindowError && !TraceKit.collectWindowErrors) {
            return;
        }
        for (var i in handlers) {
            if (handlers.hasOwnProperty(i)) {
                try {
                    handlers[i].apply(null, [stack].concat(_slice.call(arguments, 2)));
                } catch (inner) {
                    exception = inner;
                }
            }
        }

        if (exception) {
            throw exception;
        }
    }

    var _oldOnerrorHandler, _onErrorHandlerInstalled;

    /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error
     * occurred.
     * @param {?(number|string)} colNo The column number at which the error
     * occurred.
     * @param {?Error} ex The actual Error object.
     */
    function traceKitWindowOnError(message, url, lineNo, colNo, ex) {
        var stack = null;

        if (lastExceptionStack) {
            TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message);
            processLastException();
        } else if (ex) {
            // New chrome and blink send along a real error object
            // Let's just report that like a normal error.
            // See: https://mikewest.org/2013/08/debugging-runtime-errors-with-window-onerror
            stack = TraceKit.computeStackTrace(ex);
            notifyHandlers(stack, true);
        } else {
            var location = {
                'url': url,
                'line': lineNo,
                'column': colNo
            };

            var name = undefined;
            var msg = message; // must be new var or will modify original `arguments`
            var groups;
            if ({}.toString.call(message) === '[object String]') {
                var groups = message.match(ERROR_TYPES_RE);
                if (groups) {
                    name = groups[1];
                    msg = groups[2];
                }
            }

            location.func = UNKNOWN_FUNCTION;

            stack = {
                'name': name,
                'message': msg,
                'url': getLocationHref(),
                'stack': [location]
            };
            notifyHandlers(stack, true);
        }

        if (_oldOnerrorHandler) {
            return _oldOnerrorHandler.apply(this, arguments);
        }

        return false;
    }

    function installGlobalHandler() {
        if (_onErrorHandlerInstalled) {
            return;
        }
        _oldOnerrorHandler = _window.onerror;
        _window.onerror = traceKitWindowOnError;
        _onErrorHandlerInstalled = true;
    }

    function uninstallGlobalHandler() {
        if (!_onErrorHandlerInstalled) {
            return;
        }
        _window.onerror = _oldOnerrorHandler;
        _onErrorHandlerInstalled = false;
        _oldOnerrorHandler = undefined;
    }

    function processLastException() {
        var _lastExceptionStack = lastExceptionStack,
            _lastArgs = lastArgs;
        lastArgs = null;
        lastExceptionStack = null;
        lastException = null;
        notifyHandlers.apply(null, [_lastExceptionStack, false].concat(_lastArgs));
    }

    /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @param {?boolean} rethrow If false, do not re-throw the exception.
     * Only used for window.onerror to not cause an infinite loop of
     * rethrowing.
     */
    function report(ex, rethrow) {
        var args = _slice.call(arguments, 1);
        if (lastExceptionStack) {
            if (lastException === ex) {
                return; // already caught by an inner catch block, ignore
            } else {
                processLastException();
            }
        }

        var stack = TraceKit.computeStackTrace(ex);
        lastExceptionStack = stack;
        lastException = ex;
        lastArgs = args;

        // If the stack trace is incomplete, wait for 2 seconds for
        // slow slow IE to see if onerror occurs or not before reporting
        // this exception; otherwise, we will end up with an incomplete
        // stack trace
        setTimeout(function () {
            if (lastException === ex) {
                processLastException();
            }
        }, stack.incomplete ? 2000 : 0);

        if (rethrow !== false) {
            throw ex; // re-throw to propagate to the top level (and cause window.onerror)
        }
    }

    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    report.uninstall = unsubscribeAll;
    return report;
}();

/**
 * TraceKit.computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   s = TraceKit.computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 * Returns:
 *   s.name              - exception name
 *   s.message           - exception message
 *   s.stack[i].url      - JavaScript or HTML file URL
 *   s.stack[i].func     - function name, or empty for anonymous functions (if guessing did not work)
 *   s.stack[i].args     - arguments passed to the function, if known
 *   s.stack[i].line     - line number, if known
 *   s.stack[i].column   - column number, if known
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit.computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit.computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 */
TraceKit.computeStackTrace = function computeStackTraceWrapper() {

    // Contents of Exception in various browsers.
    //
    // SAFARI:
    // ex.message = Can't find variable: qq
    // ex.line = 59
    // ex.sourceId = 580238192
    // ex.sourceURL = http://...
    // ex.expressionBeginOffset = 96
    // ex.expressionCaretOffset = 98
    // ex.expressionEndOffset = 98
    // ex.name = ReferenceError
    //
    // FIREFOX:
    // ex.message = qq is not defined
    // ex.fileName = http://...
    // ex.lineNumber = 59
    // ex.columnNumber = 69
    // ex.stack = ...stack trace... (see the example below)
    // ex.name = ReferenceError
    //
    // CHROME:
    // ex.message = qq is not defined
    // ex.name = ReferenceError
    // ex.type = not_defined
    // ex.arguments = ['aa']
    // ex.stack = ...stack trace...
    //
    // INTERNET EXPLORER:
    // ex.message = ...
    // ex.name = ReferenceError
    //
    // OPERA:
    // ex.message = ...message... (see the example below)
    // ex.name = ReferenceError
    // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
    // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'

    /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceFromStackProp(ex) {
        if (typeof ex.stack === 'undefined' || !ex.stack) return;

        var chrome = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
            winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            lines = ex.stack.split('\n'),
            stack = [],
            parts,
            element,
            reference = /^(.*) is undefined$/.exec(ex.message);

        for (var i = 0, j = lines.length; i < j; ++i) {
            if (parts = chrome.exec(lines[i])) {
                var isNative = parts[2] && parts[2].indexOf('native') !== -1;
                element = {
                    'url': !isNative ? parts[2] : null,
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': isNative ? [parts[2]] : [],
                    'line': parts[3] ? +parts[3] : null,
                    'column': parts[4] ? +parts[4] : null
                };
            } else if (parts = winjs.exec(lines[i])) {
                element = {
                    'url': parts[2],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': [],
                    'line': +parts[3],
                    'column': parts[4] ? +parts[4] : null
                };
            } else if (parts = gecko.exec(lines[i])) {
                element = {
                    'url': parts[3],
                    'func': parts[1] || UNKNOWN_FUNCTION,
                    'args': parts[2] ? parts[2].split(',') : [],
                    'line': parts[4] ? +parts[4] : null,
                    'column': parts[5] ? +parts[5] : null
                };
            } else {
                continue;
            }

            if (!element.func && element.line) {
                element.func = UNKNOWN_FUNCTION;
            }

            stack.push(element);
        }

        if (!stack.length) {
            return null;
        }

        if (!stack[0].column && typeof ex.columnNumber !== 'undefined') {
            // FireFox uses this awesome columnNumber property for its top frame
            // Also note, Firefox's column number is 0-based and everything else expects 1-based,
            // so adding 1
            stack[0].column = ex.columnNumber + 1;
        }

        return {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref(),
            'stack': stack
        };
    }

    /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {Object.<string, *>} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     */
    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
        var initial = {
            'url': url,
            'line': lineNo
        };

        if (initial.url && initial.line) {
            stackInfo.incomplete = false;

            if (!initial.func) {
                initial.func = UNKNOWN_FUNCTION;
            }

            if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line) {
                        return false; // already in stack trace
                    } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        return false;
                    }
                }
            }

            stackInfo.stack.unshift(initial);
            stackInfo.partial = true;
            return true;
        } else {
            stackInfo.incomplete = true;
        }

        return false;
    }

    /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {?Object.<string, *>} Stack trace information.
     */
    function computeStackTraceByWalkingCallerChain(ex, depth) {
        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            stack = [],
            funcs = {},
            recursion = false,
            parts,
            item;

        for (var curr = computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
            if (curr === computeStackTrace || curr === TraceKit.report) {
                // console.log('skipping internal function');
                continue;
            }

            item = {
                'url': null,
                'func': UNKNOWN_FUNCTION,
                'line': null,
                'column': null
            };

            if (curr.name) {
                item.func = curr.name;
            } else if (parts = functionName.exec(curr.toString())) {
                item.func = parts[1];
            }

            if (typeof item.func === 'undefined') {
                try {
                    item.func = parts.input.substring(0, parts.input.indexOf('{'));
                } catch (e) {}
            }

            if (funcs['' + curr]) {
                recursion = true;
            } else {
                funcs['' + curr] = true;
            }

            stack.push(item);
        }

        if (depth) {
            // console.log('depth is ' + depth);
            // console.log('stack is ' + stack.length);
            stack.splice(0, depth);
        }

        var result = {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref(),
            'stack': stack
        };
        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
        return result;
    }

    /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     */
    function computeStackTrace(ex, depth) {
        var stack = null;
        depth = depth == null ? 0 : +depth;

        try {
            stack = computeStackTraceFromStackProp(ex);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (TraceKit.debug) {
                throw e;
            }
        }

        try {
            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
            if (stack) {
                return stack;
            }
        } catch (e) {
            if (TraceKit.debug) {
                throw e;
            }
        }

        return {
            'name': ex.name,
            'message': ex.message,
            'url': getLocationHref()
        };
    }

    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.computeStackTraceFromStackProp = computeStackTraceFromStackProp;

    return computeStackTrace;
}();

module.exports = TraceKit;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/enhanceFunc.js":
/*!*************************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/enhanceFunc.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = enhanceFunc;
/* eslint no-param-reassign: ["error", { "props": false }] */

function enhanceFunc(obj, method, handler) {
  var original = obj[method];

  function shim() {
    var res = void 0;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (original) {
      res = original.apply(this, args);
    }

    handler.apply(this, args);
    return res;
  }

  obj[method] = shim;

  return function () {
    obj[method] = original;
  };
}

/***/ }),

/***/ "./packages/@apphub:logrocket-utils/src/mapValues.js":
/*!***********************************************************!*\
  !*** ./packages/@apphub:logrocket-utils/src/mapValues.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapValues;
function mapValues(obj, f) {
  if (obj == null) {
    return {};
  }

  var res = {};
  Object.keys(obj).forEach(function (key) {
    res[key] = f(obj[key]);
  });
  return res;
}

/***/ }),

/***/ "./packages/@apphub:now/src/index.js":
/*!*******************************************!*\
  !*** ./packages/@apphub:now/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});var dateNow=Date.now.bind(Date);var loadTime=dateNow();exports.default=typeof performance!=='undefined'&&performance.now?performance.now.bind(performance):function(){return dateNow()-loadTime;};module.exports=exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/LogRocket.js":
/*!*********************************************!*\
  !*** ./packages/logrocket/src/LogRocket.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_QUEUE_SIZE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _logrocketNetwork = __webpack_require__(/*! @apphub/logrocket-network */ "./packages/@apphub:logrocket-network/src/index.js");

var _logrocketNetwork2 = _interopRequireDefault(_logrocketNetwork);

var _logrocketExceptions = __webpack_require__(/*! @apphub/logrocket-exceptions */ "./packages/@apphub:logrocket-exceptions/src/index.js");

var _logrocketConsole = __webpack_require__(/*! @apphub/logrocket-console */ "./packages/@apphub:logrocket-console/src/index.js");

var _logrocketConsole2 = _interopRequireDefault(_logrocketConsole);

var _logrocketRedux = __webpack_require__(/*! @apphub/logrocket-redux */ "./packages/@apphub:logrocket-redux/src/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var MAX_QUEUE_SIZE = exports.MAX_QUEUE_SIZE = 1000;

var considerIngestServerOption = function considerIngestServerOption() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ingestServer = _ref.ingestServer,
      options = _objectWithoutProperties(_ref, ['ingestServer']);

  if (ingestServer) {
    return _extends({
      serverURL: ingestServer + '/i',
      statsURL: ingestServer + '/s'
    }, options);
  }

  return options;
};

var LogRocket = function () {
  function LogRocket() {
    var _this = this;

    _classCallCheck(this, LogRocket);

    this._buffer = [];

    // TODO: tests for these exposed methods.
    ['log', 'info', 'warn', 'error', 'debug'].forEach(function (method) {
      _this[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.addEvent('lr.core.LogEvent', function () {
          var consoleOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (method === 'error' && consoleOptions.shouldAggregateConsoleErrors) {
            _logrocketExceptions.Capture.captureMessage(_this, args[0], {}, true);
          }

          return {
            logLevel: method.toUpperCase(),
            args: args
          };
        }, { shouldCaptureStackTrace: true });
      };
    });
    this._isInitialized = false;
    this._installed = [];
  }

  _createClass(LogRocket, [{
    key: 'addEvent',
    value: function addEvent(type, getMessage) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var time = Date.now();
      this._run(function (logger) {
        logger.addEvent(type, getMessage, _extends({}, opts, {
          timeOverride: time
        }));
      });
    }
  }, {
    key: 'onLogger',
    value: function onLogger(logger) {
      this._logger = logger;

      while (this._buffer.length > 0) {
        var f = this._buffer.shift();
        f(this._logger);
      }
    }
  }, {
    key: '_run',
    value: function _run(f) {
      if (this._isDisabled) {
        return;
      }

      if (this._logger) {
        f(this._logger);
      } else {
        if (this._buffer.length >= MAX_QUEUE_SIZE) {
          this._isDisabled = true;
          console.warn('LogRocket: script did not load. Check that you have a valid network connection.');
          this.uninstall();
          return;
        }

        this._buffer.push(f.bind(this));
      }
    }
  }, {
    key: 'init',
    value: function init(appID, opts) {
      if (!this._isInitialized) {
        this._installed.push((0, _logrocketExceptions.registerExceptions)(this));
        this._installed.push((0, _logrocketNetwork2.default)(this));
        this._installed.push((0, _logrocketConsole2.default)(this));

        this._isInitialized = true;

        this._run(function (logger) {
          logger.init(appID, considerIngestServerOption(opts));
        });
      }
    }
  }, {
    key: 'start',
    value: function start() {
      this._run(function (logger) {
        logger.start();
      });
    }
  }, {
    key: 'uninstall',
    value: function uninstall() {
      this._installed.forEach(function (f) {
        return f();
      });
      this._buffer = [];

      this._run(function (logger) {
        logger.uninstall();
      });
    }
  }, {
    key: 'identify',
    value: function identify(id, opts) {
      this._run(function (logger) {
        logger.identify(id, opts);
      });
    }
  }, {
    key: 'startNewSession',
    value: function startNewSession() {
      this._run(function (logger) {
        logger.startNewSession();
      });
    }
  }, {
    key: 'track',
    value: function track(customEventName) {
      this._run(function (logger) {
        logger.track(customEventName);
      });
    }
  }, {
    key: 'getSessionURL',
    value: function getSessionURL(cb) {
      if (typeof cb !== 'function') {
        throw new Error('LogRocket: must pass callback to getSessionURL()');
      }

      this._run(function (logger) {
        if (logger.getSessionURL) {
          logger.getSessionURL(cb);
        } else {
          cb(logger.recordingURL);
        }
      });
    }
  }, {
    key: 'getVersion',
    value: function getVersion(cb) {
      this._run(function (logger) {
        cb(logger.version);
      });
    }
  }, {
    key: 'captureMessage',
    value: function captureMessage(message) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _logrocketExceptions.Capture.captureMessage(this, message, options);
    }
  }, {
    key: 'captureException',
    value: function captureException(exception) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _logrocketExceptions.Capture.captureException(this, exception, options);
    }
  }, {
    key: 'reduxEnhancer',
    value: function reduxEnhancer() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _logrocketRedux.createEnhancer)(this, options);
    }
  }, {
    key: 'reduxMiddleware',
    value: function reduxMiddleware() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _logrocketRedux.createMiddleware)(this, options);
    }
  }, {
    key: 'version',
    get: function get() {
      return this._logger && this._logger.version;
    }
  }, {
    key: 'sessionURL',
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: 'recordingURL',
    get: function get() {
      return this._logger && this._logger.recordingURL;
    }
  }, {
    key: 'recordingID',
    get: function get() {
      return this._logger && this._logger.recordingID;
    }
  }, {
    key: 'threadID',
    get: function get() {
      return this._logger && this._logger.threadID;
    }
  }, {
    key: 'tabID',
    get: function get() {
      return this._logger && this._logger.tabID;
    }
  }, {
    key: 'isDisabled',
    get: function get() {
      return !!(this._isDisabled || this._logger && this._logger._isDisabled);
    }
  }]);

  return LogRocket;
}();

exports.default = LogRocket;

/***/ }),

/***/ "./packages/logrocket/src/makeLogRocket.js":
/*!*************************************************!*\
  !*** ./packages/logrocket/src/makeLogRocket.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeLogRocket;

var _LogRocket = __webpack_require__(/*! ./LogRocket */ "./packages/logrocket/src/LogRocket.js");

var _LogRocket2 = _interopRequireDefault(_LogRocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REACT_NATIVE_NOTICE = 'LogRocket does not yet support React Native.';
var makeNoopPolyfill = function makeNoopPolyfill() {
  return {
    init: function init() {},
    uninstall: function uninstall() {},
    log: function log() {},
    info: function info() {},
    warn: function warn() {},
    error: function error() {},
    debug: function debug() {},
    addEvent: function addEvent() {},
    identify: function identify() {},
    start: function start() {},


    get threadID() {
      return null;
    },
    get recordingID() {
      return null;
    },
    get recordingURL() {
      return null;
    },

    reduxEnhancer: function reduxEnhancer() {
      return function (store) {
        return function () {
          return store.apply(undefined, arguments);
        };
      };
    },
    reduxMiddleware: function reduxMiddleware() {
      return function () {
        return function (next) {
          return function (action) {
            return next(action);
          };
        };
      };
    },
    track: function track() {},
    getSessionURL: function getSessionURL() {},
    getVersion: function getVersion() {},
    startNewSession: function startNewSession() {},
    onLogger: function onLogger() {},
    setClock: function setClock() {},
    captureMessage: function captureMessage() {},
    captureException: function captureException() {}
  };
};

function makeLogRocket() {
  var getLogger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    throw new Error(REACT_NATIVE_NOTICE);
  }

  if (typeof window !== 'undefined') {
    if (window._disableLogRocket) {
      return makeNoopPolyfill();
    }

    if (window.MutationObserver && window.WeakMap) {
      // Save window globals that we rely on.
      window._lrMutationObserver = window.MutationObserver;

      var instance = new _LogRocket2.default();
      getLogger(instance);
      return instance;
    }
  }

  return makeNoopPolyfill();
}
module.exports = exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/module-npm.js":
/*!**********************************************!*\
  !*** ./packages/logrocket/src/module-npm.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setup = __webpack_require__(/*! ./setup */ "./packages/logrocket/src/setup.js");

var _setup2 = _interopRequireDefault(_setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = (0, _setup2.default)();

exports.default = instance;
module.exports = exports['default'];

/***/ }),

/***/ "./packages/logrocket/src/setup.js":
/*!*****************************************!*\
  !*** ./packages/logrocket/src/setup.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setup;

var _makeLogRocket = __webpack_require__(/*! ./makeLogRocket */ "./packages/logrocket/src/makeLogRocket.js");

var _makeLogRocket2 = _interopRequireDefault(_makeLogRocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CDN_SERVER_MAP = {
  'cdn.logrocket.io': 'https://r.logrocket.io',
  'cdn.lr-ingest.io': 'https://r.lr-ingest.io',
  'cdn-staging.logrocket.io': 'https://staging-i.logrocket.io',
  'cdn-staging.lr-ingest.io': 'https://staging-i.lr-ingest.io'
};

function setup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var enterpriseServer = _ref.enterpriseServer,
      _ref$sdkVersion = _ref.sdkVersion,
      sdkVersion = _ref$sdkVersion === undefined ? "1.0.14" : _ref$sdkVersion,
      opts = _objectWithoutProperties(_ref, ['enterpriseServer', 'sdkVersion']);

  var scriptOrigin =  'https://cdn.logrocket.io';
  var scriptIngest = void 0;

  if (sdkVersion === 'script') {
    try {
      var scriptTag = document.currentScript;
      var matches = scriptTag.src.match(/^(https?:\/\/([^\\]+))\/.+$/);
      var scriptHostname = matches && matches[2];

      if (scriptHostname && CDN_SERVER_MAP[scriptHostname]) {
        scriptOrigin = matches && matches[1];
        scriptIngest = CDN_SERVER_MAP[scriptHostname];
      }
    } catch (_) {
      /* no-op */
    }
  } else {
    // NPM
    scriptOrigin =  'https://cdn.lr-ingest.io';
    scriptIngest =  'https://r.lr-ingest.io';
  }

  var sdkServer = opts.sdkServer || enterpriseServer;
  var ingestServer = opts.ingestServer || enterpriseServer || scriptIngest;

  var instance = (0, _makeLogRocket2.default)(function () {
    var script = document.createElement('script');

    if (ingestServer) {
      if (typeof window.__SDKCONFIG__ === 'undefined') {
        window.__SDKCONFIG__ = {};
      }

      window.__SDKCONFIG__.serverURL = ingestServer + '/i';
      window.__SDKCONFIG__.statsURL = ingestServer + '/s';
    }

    if (sdkServer) {
      script.src = sdkServer + '/logger.min.js';
    } else if (window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL) {
      script.src = window.__SDKCONFIG__.loggerURL;
    } else if (window._lrAsyncScript) {
      script.src = window._lrAsyncScript;
    } else {
      script.src = scriptOrigin + '/logger-1.min.js';
    }

    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      // Brave browser: Advertises its user-agent as Chrome ##.##... then
      // loads logger.min.js, but blocks the execution of the script
      // causing _LRlogger to be undefined.  Let's make sure its there first.
      if (typeof window._LRLogger === 'function') {
        instance.onLogger(new window._LRLogger({
          sdkVersion: sdkVersion
        }));
      } else {
        console.warn('LogRocket: script execution has been blocked by a product or service.');
        instance.uninstall();
      }
    };
    script.onerror = function () {
      console.warn('LogRocket: script could not load. Check that you have a valid network connection.');
      instance.uninstall();
    };
  });

  return instance;
}
module.exports = exports['default'];

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./packages/logrocket/src/module-npm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /root/project/packages/logrocket/src/module-npm.js */"./packages/logrocket/src/module-npm.js");


/***/ })

/******/ });
});
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(build_umd);

var Capture = build_umd.Capture;
var MAX_QUEUE_SIZE = build_umd.MAX_QUEUE_SIZE;
var __esModule = build_umd.__esModule;
var captureException = build_umd.captureException;
var captureMessage = build_umd.captureMessage;
var createEnhancer = build_umd.createEnhancer;
var createMiddleware = build_umd.createMiddleware;
export default __pika_web_default_export_for_treeshaking__;
var registerExceptions = build_umd.registerExceptions;
var setActive = build_umd.setActive;
export { Capture, MAX_QUEUE_SIZE, __esModule, build_umd as __moduleExports, captureException, captureMessage, createEnhancer, createMiddleware, registerExceptions, setActive };
