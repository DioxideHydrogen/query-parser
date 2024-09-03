/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Errors/QueryParserError.js":
/*!****************************************!*\
  !*** ./src/Errors/QueryParserError.js ***!
  \****************************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var QueryParserError = /*#__PURE__*/function (_Error) {
  function QueryParserError(message) {
    var _this;
    _classCallCheck(this, QueryParserError);
    _this = _callSuper(this, QueryParserError, [message]);
    _this.name = 'QueryParserError';
    return _this;
  }
  _inherits(QueryParserError, _Error);
  return _createClass(QueryParserError);
}( /*#__PURE__*/_wrapNativeSuper(Error));
module.exports = QueryParserError;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var QueryParserError = __webpack_require__(/*! ./Errors/QueryParserError */ "./src/Errors/QueryParserError.js");
var _require = __webpack_require__(/*! ../package.json */ "./package.json"),
  version = _require.version;
/**
 * One helpful class to parse your webapps query string
 * @class
 * @example
 * let parser = new qsParser('?param1=valor1&param2=valor2');
 * console.log(parser.get('param1')); // 'valor1'
 */
var qsParser = /*#__PURE__*/function () {
  function qsParser() {
    var _query_string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    _classCallCheck(this, qsParser);
    /**
     * Remove a interrogação do início da string
     * @param {String} query_string 
     * @returns string
     */
    _defineProperty(this, "_removeInterrogation", function (query_string) {
      if (query_string.charAt(0) === '?') return query_string.slice(1);
      if (query_string.indexOf('?') > 0) return query_string.split('?')[1];
      return query_string;
    });
    /**
     * Converte a query string em um objeto
     * @param {String} query_string
     * @returns object
     */
    _defineProperty(this, "_parseQueryString", function (query_string) {
      if (!query_string) return {};
      var params = query_string.split('&');
      var obj = {};
      for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        // Verifica se o parâmetro é um array
        if (decodeURIComponent(param[0]).indexOf('[]') > -1) {
          var key = decodeURIComponent(param[0]).replace('[]', '');
          if (!obj[key]) obj[key] = [];
          obj[key].push(decodeURIComponent(param[1]));
          continue;
        }
        // Verifica se o parâmetro é um array com índices
        if (decodeURIComponent(param[0]).match(/\[(.*?)\]/g)) {
          var _key = decodeURIComponent(param[0]).match(/([A-z0-9_-])+\[(.*?)+\]/g)[0].replace(/\[(.*?)+\]/, '');
          var index = decodeURIComponent(param[0]).match(/\[(.*?)+\]/g)[0].replace('[', '').replace(']', '');
          if (!obj[_key]) obj[_key] = [];
          if (!obj[_key][index]) obj[_key][index] = [];
          obj[_key][index].push(decodeURIComponent(param[1]));
          continue;
        }
        // Verifica se o parâmetro é um objeto
        obj[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
      }
      return obj;
    });
    /**
     * Retorna o valor de um parâmetro da query string
     * @param {String} param
     * @returns string
     * @example	
     * let parser = new qsParser('?param1=valor1&param2=valor2');
     * console.log(parser.get('param1')); // 'valor1'
     */
    _defineProperty(this, "get", function (param) {
      return this._query_params[param];
    });
    /**
     * Adiciona um parâmetro à query string
     * @param {String} param
     * @param {String} value
     * @returns string
     * @example
     * let parser = new qsParser('?param1=valor1&param2=valor2');
     * console.log(parser.add('param3', 'valor3')); // '?param1=valor1&param2=valor2&param3=valor3'
     */
    _defineProperty(this, "add", function (param, value) {
      this._query_params[param] = value;
      return this.toString();
    });
    this.version = '1.0.0';
    if (typeof window !== 'undefined') {
      var _window$location$sear;
      this._query_string = this._removeInterrogation((_window$location$sear = window.location.search) !== null && _window$location$sear !== void 0 ? _window$location$sear : '');
    } else {
      if (!_query_string) throw new QueryParserError('You must provide a query string');
      this._query_string = this._removeInterrogation(_query_string);
    }
    this._query_params = this._parseQueryString(this._query_string);
  }
  return _createClass(qsParser, [{
    key: "all",
    value:
    /**
     * Retorna todos os parâmetros da query string
     * @returns object
     * @example
     * let parser = new qsParser('?param1=valor1&param2=valor2');
     * console.log(parser.all()); // { param1: 'valor1', param2: 'valor2' }
     */
    function all() {
      return this._query_params;
    }

    /**
     * Retorna a query string em uma string formatada como JSON
     * 
     * @returns string
     * @example
     * let parser = new qsParser('?param1=valor1&param2=valor2');
     * console.log(parser.json()); // '{"param1":"valor1","param2":"valor2"}'
     */
  }, {
    key: "json",
    value: function json() {
      return JSON.stringify(this._query_params);
    }
  }, {
    key: "applyToLocation",
    value: function applyToLocation() {
      if (typeof window !== 'undefined') {
        window.location.search = this.toString();
      } else {
        throw new QueryParserError('This method only works in browser environment');
      }
    }

    /**
     * Retorna a query string em string
     * @returns string
     * @example
     * let parser = new qsParser('?param1=valor1&param2=valor2');
     * console.log(parser.toString()); // 'param1=valor1&param2=valor2'
     */
  }, {
    key: "toString",
    value: function toString() {
      var _this = this;
      var query_string = '?';
      var _loop = function _loop(key) {
        if (Array.isArray(_this._query_params[key])) {
          _this._query_params[key].forEach(function (value, index) {
            query_string += key + '[' + index + ']=' + value + '&';
          });
          return 1; // continue
        }
        query_string += key + '=' + _this._query_params[key] + '&';
      };
      for (var key in this._query_params) {
        if (_loop(key)) continue;
      }
      return query_string.slice(0, -1);
    }
  }]);
}();
if (typeof window !== 'undefined') window.qsParser = qsParser;
if (true) module.exports = qsParser;
console.log('qsParser is loaded at version v' + version + '. Enjoy!');

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"queryparserjs","version":"1.0.2","description":"A js lib for easy and fast access to query params of your web application","main":"index.js","scripts":{"build":"gulp build"},"author":"Hugo Henrique","repository":{"type":"git","url":"git+https://github.com/DioxideHydrogen/query-parser"},"license":"ISC","devDependencies":{"gulp":"^5.0.0","gulp-uglify":"^3.0.2","webpack":"^5.94.0","webpack-stream":"^7.0.0","@babel/core":"^7.25.2","@babel/preset-env":"^7.25.4","babel-loader":"^9.1.3","gulp-webpack":"^1.5.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=queryparserjs.js.map