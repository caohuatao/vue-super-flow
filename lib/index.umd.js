(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SuperFrom", [], factory);
	else if(typeof exports === 'object')
		exports["SuperFrom"] = factory();
	else
		root["SuperFrom"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2470":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5341");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ad9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41f0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "41f0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5341":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5fa5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7e2d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5fa5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_link_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "a733":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a733");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64fe54ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/index.vue?vue&type=template&id=58c81af5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"super-flow"},[_c('div',{ref:"flow-canvas",style:({width: _vm.width + 'px', height: _vm.height + 'px'}),on:{"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.contextmenu($event)}}},[(_vm.temEdgeConf.visible)?_c('graph-line',{attrs:{"graph":_vm.graph,"link":_vm.temEdgeConf.link}}):_vm._e(),_vm._l((_vm.graph.linkList),function(edge,idx){return _c('graph-line',{key:edge.key,attrs:{"graph":_vm.graph,"link":edge}})}),_vm._l((_vm.graph.nodeList),function(node,idx){return _c('graph-node',{key:node.key,attrs:{"index":idx,"node":node,"graph":_vm.graph,"is-move":node === _vm.moveNodeConf.node,"is-tem-edge":_vm.temEdgeConf.visible,"node-intercept":_vm.nodeIntercept(node)},on:{"node-mousedown":_vm.nodeMousedown,"node-mouseenter":_vm.nodeMouseenter,"node-mouseleave":_vm.nodeMouseleave,"node-mouseup":_vm.nodeMouseup,"side-mousedown":_vm.sideMousedown,"node-contextmenu":_vm.nodeContextmenu},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var meta = ref.meta;
return [_vm._t("node",null,{"meta":meta})]}}],null,true)})}),_c('graph-menu',{attrs:{"visible":_vm.menuConf.visible,"graph":_vm.graph,"position":_vm.menuConf.position,"list":_vm.menuConf.list,"source":_vm.menuConf.source},on:{"update:visible":function($event){return _vm.$set(_vm.menuConf, "visible", $event)}}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.graph.graphSelected),expression:"graph.graphSelected"}],ref:"selectAllMask",staticClass:"select-all__mask",style:(_vm.maskStyle),attrs:{"tabindex":"-1"},on:{"blur":function($event){_vm.graph.graphSelected = false},"mousedown":_vm.selectAllMaskMouseDown,"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();}}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/index.vue?vue&type=template&id=58c81af5&

// CONCATENATED MODULE: ./packages/GraphEvent.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * User: CHT
 * Date: 2020/6/3
 * Time: 14:53
 */
var GraphEvent = /*#__PURE__*/function () {
  function GraphEvent() {
    _classCallCheck(this, GraphEvent);

    this.listeners = {};
  }

  _createClass(GraphEvent, [{
    key: "add",
    value: function add(type, callback) {
      if (!(type in this.listeners)) {
        this.listeners[type] = [];
      }

      this.listeners[type].push(callback);
    }
  }, {
    key: "remove",
    value: function remove(type, callback) {
      if (!(type in this.listeners)) {
        return;
      }

      var stack = this.listeners[type];

      for (var i = 0, l = stack.length; i < l; i++) {
        if (stack[i] === callback) {
          stack.splice(i, 1);
          return this.remove(type, callback);
        }
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(event) {
      var _this = this;

      var breakOff = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!(event.type in this.listeners)) {
        return;
      }

      var stack = this.listeners[event.type];
      event.target = this;

      if (breakOff) {
        stack.some(function (fun, idx) {
          var result = fun.call(_this, event);
          if (result) stack.unshift.apply(stack, _toConsumableArray(stack.splice(idx, 1)));
          return result;
        });
      } else {
        stack.forEach(function (fun) {
          return fun.call(_this, event);
        });
      }
    }
  }]);

  return GraphEvent;
}();


// CONCATENATED MODULE: ./packages/utils.js
function utils_toConsumableArray(arr) { return utils_arrayWithoutHoles(arr) || utils_iterableToArray(arr) || utils_unsupportedIterableToArray(arr) || utils_nonIterableSpread(); }

function utils_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function utils_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return utils_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return utils_arrayLikeToArray(o, minLen); }

function utils_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function utils_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return utils_arrayLikeToArray(arr); }

function utils_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:03
 */
function uuid() {
  var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var charsLen = chars.length;
  var uuid = [];
  var len = 16;

  for (var i = 0; i < len; i++) {
    uuid[i] = chars[0 | Math.random() * charsLen];
  }

  return before + uuid.join('') + after;
}
function getOffset(evt) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var clientX = evt.clientX,
      clientY = evt.clientY,
      currentTarget = evt.currentTarget;
  var current = target || currentTarget;

  var _current$getBoundingC = current.getBoundingClientRect(),
      left = _current$getBoundingC.left,
      top = _current$getBoundingC.top;

  return [clientX - left, clientY - top];
} // 向量相加

function addVector(vectorA, vectorB) {
  return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]];
} //  向量乘以常量系数

function multiply(vector, k) {
  return [vector[0] * k, vector[1] * k];
}
function differ(pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]];
}
function minus(pointA, pointB) {
  return [pointA[0] - pointB[0], pointA[1] - pointB[1]];
} // 向量点积

function dotProduct(vectorA, vectorB) {
  return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
} // 向量叉乘

function cross(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0];
} // 向量的单位向量

function unitVector(vector) {
  var m = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
  return [vector[0] / m, vector[1] / m];
} // 判断向量 x,y 坐标相等

function equals(vector, target) {
  return vector[0] === target[0] && vector[1] === target[1];
} // 向量夹角

function utils_angle(vector) {
  return Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0])) + 180;
} // 判断向量是否平行

function parallel(vectorA, vectorB) {
  return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0] === 0;
} //

function vector(result) {
  var handler = {
    add: addVector,
    multiply: multiply,
    differ: differ,
    minus: minus,
    dotProduct: dotProduct,
    cross: cross,
    unitVector: unitVector,
    equals: equals,
    angle: utils_angle,
    parallel: parallel
  };
  var proxyHandler = {};
  Object.keys(handler).forEach(function (key) {
    Object.defineProperty(proxyHandler, key, {
      get: function get() {
        return function (val) {
          result = handler[key](result, val);
          return proxyHandler;
        };
      }
    });
  });
  Object.defineProperty(proxyHandler, 'end', {
    get: function get() {
      return result;
    }
  });
  return proxyHandler;
}
function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
}
function isFun(val) {
  return toRawType(val) === 'function';
}
function isBool(val) {
  return toRawType(val) === 'boolean';
}
function isUndef(val) {
  return toRawType(val) === 'undefined';
}
function arrayReplace(arr1, arr2) {
  arr1.splice.apply(arr1, [0, arr1.length].concat(utils_toConsumableArray(arr2)));
}
function debounce(fn, timestamp) {
  var timeout = null;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(fn, timestamp);
  };
}
// CONCATENATED MODULE: ./packages/types.js
var _directionVector;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * User: CHT
 * Date: 2020/5/27
 * Time: 9:52
*/
var types_direction = {
  top: 1,
  right: 2,
  bottom: 3,
  left: 4
}; // [0,-1] 右：[1,0] 下 [1,1] 左 [-1,0]

var directionVector = (_directionVector = {}, _defineProperty(_directionVector, types_direction.top, [0, -1]), _defineProperty(_directionVector, types_direction.right, [1, 0]), _defineProperty(_directionVector, types_direction.bottom, [0, 1]), _defineProperty(_directionVector, types_direction.left, [-1, 0]), _directionVector);
// CONCATENATED MODULE: ./packages/GraphNode.js
function GraphNode_toConsumableArray(arr) { return GraphNode_arrayWithoutHoles(arr) || GraphNode_iterableToArray(arr) || GraphNode_unsupportedIterableToArray(arr) || GraphNode_nonIterableSpread(); }

function GraphNode_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GraphNode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GraphNode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GraphNode_arrayLikeToArray(o, minLen); }

function GraphNode_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function GraphNode_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return GraphNode_arrayLikeToArray(arr); }

function GraphNode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function GraphNode_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GraphNode_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GraphNode_createClass(Constructor, protoProps, staticProps) { if (protoProps) GraphNode_defineProperties(Constructor.prototype, protoProps); if (staticProps) GraphNode_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */



var GraphNode_GraphNode = /*#__PURE__*/function () {
  function GraphNode(props, graph) {
    GraphNode_classCallCheck(this, GraphNode);

    var id = props.id,
        _props$width = props.width,
        width = _props$width === void 0 ? 180 : _props$width,
        _props$height = props.height,
        height = _props$height === void 0 ? 100 : _props$height,
        _props$coordinate = props.coordinate,
        coordinate = _props$coordinate === void 0 ? [0, 0] : _props$coordinate,
        _props$meta = props.meta,
        meta = _props$meta === void 0 ? null : _props$meta,
        _props$vertex = props.vertex,
        vertex = _props$vertex === void 0 ? 0 : _props$vertex;
    this.depth = 0;
    this.key = uuid('node');
    this.graph = graph;
    this.id = id;
    this.coordinate = GraphNode_toConsumableArray(coordinate);
    this.meta = meta;
    this.vertex = vertex;
    this.width = width;
    this.height = height;
  }

  GraphNode_createClass(GraphNode, [{
    key: "angle",
    value: function angle() {
      var w = this.width / 2,
          h = this.height / 2,
          center = [0, 0];
      var topLeft = vector(center).minus([w, h]).angle().end;
      var topRight = vector(center).add([w, 0]).minus([0, h]).angle().end;
      var bottomRight = vector(center).add([w, h]).angle().end;
      var bottomLeft = vector(center).add([0, h]).minus([w, 0]).angle().end;
      this.angleList = [topLeft, topRight, bottomRight, bottomLeft];
    }
  }, {
    key: "relative",
    value: function relative(offset) {
      var angle = vector(offset).minus([this.width / 2, this.height / 2]).angle().end;
      var angleList = this.angleList;
      var directionList = [types_direction.top, types_direction.right, types_direction.bottom, types_direction.left];
      var dir = types_direction.left;
      angleList.reduce(function (prev, current, idx) {
        if (angle >= prev && angle < current) {
          dir = directionList[idx - 1];
        }

        return current;
      });
      return {
        position: this.fixOffset(offset, dir),
        direction: directionVector[dir]
      };
    }
  }, {
    key: "fixOffset",
    value: function fixOffset(offset, dir) {
      switch (dir) {
        case types_direction.top:
          offset[1] = 0;
          break;

        case types_direction.right:
          offset[0] = this.width;
          break;

        case types_direction.bottom:
          offset[1] = this.height;
          break;

        case types_direction.left:
        default:
          offset[0] = 0;
          break;
      }

      return offset;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.graph.removeNode(this);
    }
  }, {
    key: "getInterface",
    value: function getInterface() {
      return {
        width: this.width,
        height: this.height,
        coordinate: GraphNode_toConsumableArray(this.coordinate),
        meta: this.meta,
        remove: this.remove.bind(this)
      };
    }
  }, {
    key: "vertex",
    set: function set(bol) {
      if (bol) this.graph.vertex = this;
    },
    get: function get() {
      return this.graph.vertex === this ? 1 : 0;
    }
  }, {
    key: "position",
    get: function get() {
      return vector(this.coordinate).add(this.graph.origin).end;
    },
    set: function set(position) {
      this.coordinate = vector(position).minus(this.graph.origin).end;
    }
  }, {
    key: "center",
    get: function get() {
      return vector(this.coordinate).add([this.width / 2, this.height / 2]).end;
    },
    set: function set(position) {
      this.coordinate = vector(position).minus([this.width / 2, this.height / 2]).end;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    },
    set: function set(w) {
      w = Math.floor(w);
      this._width = w > 50 ? w : 50;
      this.angle();
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    },
    set: function set(h) {
      h = Math.floor(h);
      this._height = h > 50 ? h : 50;
      this.angle();
    }
  }]);

  return GraphNode;
}();


// CONCATENATED MODULE: ./packages/GraphLink.js
function GraphLink_toConsumableArray(arr) { return GraphLink_arrayWithoutHoles(arr) || GraphLink_iterableToArray(arr) || GraphLink_unsupportedIterableToArray(arr) || GraphLink_nonIterableSpread(); }

function GraphLink_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GraphLink_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function GraphLink_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return GraphLink_arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || GraphLink_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function GraphLink_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return GraphLink_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return GraphLink_arrayLikeToArray(o, minLen); }

function GraphLink_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function GraphLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GraphLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GraphLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) GraphLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) GraphLink_defineProperties(Constructor, staticProps); return Constructor; }

function GraphLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:01
 */



var GraphLink_GraphLink = /*#__PURE__*/function () {
  function GraphLink(options, graph) {
    GraphLink_classCallCheck(this, GraphLink);

    var _options$id = options.id,
        id = _options$id === void 0 ? '' : _options$id,
        start = options.start,
        _options$end = options.end,
        end = _options$end === void 0 ? null : _options$end,
        _options$startAt = options.startAt,
        startAt = _options$startAt === void 0 ? [0, 0] : _options$startAt,
        _options$endAt = options.endAt,
        endAt = _options$endAt === void 0 ? [0, 0] : _options$endAt,
        _options$meta = options.meta,
        meta = _options$meta === void 0 ? null : _options$meta;
    this.key = uuid('link');
    this.id = id;
    this.graph = graph;
    this.start = start;
    this.meta = meta;
    this.end = end;
    this.startDirection = directionVector[types_direction.top];
    this.endDirection = directionVector[types_direction.top];
    this.startAt = startAt;
    this.endAt = endAt;
  }

  GraphLink_createClass(GraphLink, [{
    key: "startCoordinate",
    value: function startCoordinate() {
      return vector(this.start.position).add(this.startAt).end;
    }
  }, {
    key: "endCoordinate",
    value: function endCoordinate() {
      if (this.end) {
        return vector(this.end.position).add(this.endAt).end;
      } else {
        return this.movePosition;
      }
    }
  }, {
    key: "coordinateList",
    value: function coordinateList() {
      var turnRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
      var entryPoint = this.startCoordinate();
      var exitPoint = this.endCoordinate();
      var entryDirection = this.startDirection;
      var exitDirection = this.endDirection; // 路径起点

      var startPoint = vector(entryDirection).multiply(GraphLink.distance).add(entryPoint).end; // 路径终点

      var endPoint = vector(exitDirection).multiply(GraphLink.distance).add(exitPoint).end; // 入口方向取反

      exitDirection = vector(exitDirection).multiply(-1).end; // 终点 - 起点  垂直 水平向量

      var pathHorizontalVec = [endPoint[0] - startPoint[0], 0];
      var pathVerticalVec = [0, endPoint[1] - startPoint[1]];
      var startDirection = this.pathDirection(pathVerticalVec, pathHorizontalVec, entryDirection);
      var endDirection = this.pathDirection(pathVerticalVec, pathHorizontalVec, exitDirection);
      var splitNum = vector(startDirection).dotProduct(endDirection).end > 0 ? 2 : 1;
      var pathMiddle = endDirection === pathHorizontalVec ? pathVerticalVec : pathHorizontalVec;
      var points = [];
      points.push(entryPoint, startPoint);

      if (splitNum === 1) {
        var point1 = vector(startPoint).add(startDirection).end;
        var point2 = vector(point1).add(endDirection).end;
        points.push(point1, point2);
      } else {
        var _point = vector(startDirection).multiply(turnRatio).add(startPoint).end;
        var _point2 = vector(_point).add(pathMiddle).end;
        var point3 = vector(endDirection).multiply(1 - turnRatio).add(_point2).end;
        points.push(_point, _point2, point3);
      }

      points.push(exitPoint);
      return points;
    }
  }, {
    key: "pathDirection",
    value: function pathDirection(vertical, horizontal, direction) {
      if (vector(horizontal).parallel(direction).end) {
        if (vector(horizontal).dotProduct(direction).end > 0) {
          return horizontal;
        } else {
          return vertical;
        }
      } else {
        if (vector(vertical).dotProduct(direction).end > 0) {
          return vertical;
        } else {
          return horizontal;
        }
      }
    }
  }, {
    key: "isPointInLink",
    value: function isPointInLink(position) {
      var _this$pathPointList = this.pathPointList,
          pointList = _this$pathPointList.pointList,
          minX = _this$pathPointList.minX,
          minY = _this$pathPointList.minY,
          maxX = _this$pathPointList.maxX,
          maxY = _this$pathPointList.maxY;
      var n = 5;

      if (position[0] < minX - n || position[0] > maxX + n || position[1] < minY - n || position[1] > maxY + n) {
        return false;
      }

      for (var i = 0; i < pointList.length - 2; i++) {
        var prev = pointList[i];
        var current = pointList[i + 1];
        var top = Math.min(prev[1], current[1]) - n;
        var right = Math.max(prev[0], current[0]) + n;
        var bottom = Math.max(prev[1], current[1]) + n;
        var left = Math.min(prev[0], current[0]) - n;

        var _position = _slicedToArray(position, 2),
            x = _position[0],
            y = _position[1];

        if (x > left && x < right && y > top && y < bottom) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "remove",
    value: function remove() {
      this.graph.removeLink(this);
    }
  }, {
    key: "getInterface",
    value: function getInterface() {
      return {
        meta: this.meta,
        remove: this.remove.bind(this),
        start: this.start.getInterface(),
        end: this.end.getInterface(),
        startAt: GraphLink_toConsumableArray(this.startAt),
        endAt: GraphLink_toConsumableArray(this.endAt)
      };
    }
  }, {
    key: "end",
    get: function get() {
      return this._end;
    },
    set: function set(node) {
      if (this.start === node) {
        return false;
      } else {
        this._end = node;
      }
    }
  }, {
    key: "startAt",
    get: function get() {
      return this._startAt;
    },
    set: function set(offset) {
      var relative = this.start.relative(offset);
      this._startAt = relative.position;
      this.startDirection = relative.direction;
    }
  }, {
    key: "endAt",
    get: function get() {
      return this._endAt;
    },
    set: function set(offset) {
      if (this.end) {
        var relative = this.end.relative(offset);
        this._endAt = relative.position;
        this.endDirection = relative.direction;
      } else {
        this._endAt = offset;
      }
    }
  }, {
    key: "movePosition",
    get: function get() {
      return this._movePosition;
    },
    set: function set(offset) {
      this._movePosition = offset;
      if (this.end) return;
      var relative = this.start.relative(vector(offset).minus(this.graph.origin).minus(this.start.coordinate).end);
      this.endDirection = vector(relative.direction).multiply(-1).end;
    }
  }, {
    key: "pathPointList",
    get: function get() {
      var pointList = this.coordinateList(),
          xList = [],
          yList = [];
      pointList.forEach(function (item) {
        xList.push(item[0]);
        yList.push(item[1]);
      });
      return {
        pointList: pointList,
        xList: xList,
        yList: yList,
        minX: Math.min.apply(Math, xList),
        maxX: Math.max.apply(Math, xList),
        minY: Math.min.apply(Math, yList),
        maxY: Math.max.apply(Math, yList)
      };
    }
  }]);

  return GraphLink;
}();

GraphLink_defineProperty(GraphLink_GraphLink, "distance", 15);


// CONCATENATED MODULE: ./packages/Graph.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Graph_toConsumableArray(arr) { return Graph_arrayWithoutHoles(arr) || Graph_iterableToArray(arr) || Graph_unsupportedIterableToArray(arr) || Graph_nonIterableSpread(); }

function Graph_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Graph_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function Graph_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Graph_arrayLikeToArray(arr); }

function Graph_slicedToArray(arr, i) { return Graph_arrayWithHoles(arr) || Graph_iterableToArrayLimit(arr, i) || Graph_unsupportedIterableToArray(arr, i) || Graph_nonIterableRest(); }

function Graph_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Graph_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Graph_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Graph_arrayLikeToArray(o, minLen); }

function Graph_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Graph_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Graph_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Graph_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Graph_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Graph_createClass(Constructor, protoProps, staticProps) { if (protoProps) Graph_defineProperties(Constructor.prototype, protoProps); if (staticProps) Graph_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * User: CHT
 * Date: 2020/5/8
 * Time: 14:00
 */





var Graph_Graph = /*#__PURE__*/function (_GraphEvent) {
  _inherits(Graph, _GraphEvent);

  var _super = _createSuper(Graph);

  function Graph(options) {
    var _this;

    Graph_classCallCheck(this, Graph);

    var _options$nodeList = options.nodeList,
        nodeList = _options$nodeList === void 0 ? [] : _options$nodeList,
        _options$linkList = options.linkList,
        linkList = _options$linkList === void 0 ? [] : _options$linkList,
        width = options.width,
        height = options.height,
        _options$origin = options.origin,
        origin = _options$origin === void 0 ? null : _options$origin;
    _this = _super.call(this);
    _this.nodeList = [];
    _this.linkList = [];
    _this.width = width;
    _this.height = height;
    _this.origin = origin || [Math.floor(width / 2), Math.floor(height / 2)];
    _this.mouseonLink = null;
    _this.mouseonNode = null;
    _this.graphSelected = false;
    _this.maskBoundingClientRect = {};
    _this.vertex = null;

    _this.initNode(nodeList);

    _this.initLink(linkList);

    return _this;
  }

  Graph_createClass(Graph, [{
    key: "pointMap",
    value: function pointMap() {
      var map = {};
      this.nodeList.forEach(function (point) {
        map[point.id] = point;
      });
      return map;
    }
  }, {
    key: "initNode",
    value: function initNode(nodeList) {
      var _this2 = this;

      arrayReplace(this.nodeList, nodeList.map(function (node) {
        return _this2.createNode(node);
      }));
    }
  }, {
    key: "initLink",
    value: function initLink(linkList) {
      var _this3 = this;

      var list = [];
      linkList.forEach(function (link) {
        var _link$startId = link.startId,
            startId = _link$startId === void 0 ? '' : _link$startId,
            _link$endId = link.endId,
            endId = _link$endId === void 0 ? '' : _link$endId,
            _link$startAt = link.startAt,
            startAt = _link$startAt === void 0 ? [0, 0] : _link$startAt,
            _link$endAt = link.endAt,
            endAt = _link$endAt === void 0 ? [0, 0] : _link$endAt,
            _link$meta = link.meta,
            meta = _link$meta === void 0 ? null : _link$meta;

        var pointMap = _this3.pointMap();

        var start = pointMap[startId];
        var end = pointMap[endId];

        if (start && end) {
          list.push(_this3.createLink({
            start: start,
            end: end,
            meta: meta,
            startAt: startAt,
            endAt: endAt
          }));
        }
      });
      arrayReplace(this.linkList, list);
    }
  }, {
    key: "createNode",
    value: function createNode(options) {
      return new GraphNode_GraphNode(options, this);
    }
  }, {
    key: "createLink",
    value: function createLink(options) {
      return new GraphLink_GraphLink(options, this);
    }
  }, {
    key: "insetGrouping",
    value: function insetGrouping() {
      var _this4 = this;

      var isHorizontal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var depthGrouping = [];

      var depth = function depth(vertex) {
        _this4.linkList.forEach(function (link, idx) {
          var start = link.start,
              end = link.end;

          if (start === vertex) {
            end.depth = vertex.depth + 1;

            if (isHorizontal) {
              link.startAt = [start.width, Math.ceil(start.height / 2)];
              link.endAt = [0, Math.ceil(end.height / 2)];
            } else {
              link.startAt = [Math.ceil(start.width / 2), start.height];
              link.endAt = [Math.ceil(end.width / 2), 0];
            }

            depth(link.end);
          }
        });
      };

      var insetGrouping = function insetGrouping(dep, node) {
        var current = depthGrouping[dep];

        if (current) {
          current.add(node);
        } else {
          depthGrouping[dep] = new Set([node]);
        }
      };

      depth(this.vertex);
      insetGrouping(0, this.vertex);
      this.nodeList.forEach(function (node) {
        return insetGrouping(node.depth, node);
      });
      return depthGrouping;
    }
  }, {
    key: "vertical",
    value: function vertical() {
      var DISTANCE = {
        x: 50,
        y: 100
      };

      if (this.vertex && this.nodeList.length && this.linkList.length) {
        this.vertex.depth = 0;

        var _this$vertex$center = Graph_slicedToArray(this.vertex.center, 2),
            vertexX = _this$vertex$center[0],
            vertexY = _this$vertex$center[1];

        this.insetGrouping().slice(1).reduce(function (y, currentSet) {
          var currentList = Graph_toConsumableArray(currentSet);

          var maxHeight = Math.max.apply(Math, Graph_toConsumableArray(currentList.map(function (node) {
            return node.height;
          })));
          var currentY = y + maxHeight / 2 + DISTANCE.y;
          var xList = [];
          var width = vertexX;
          xList.push(width);
          currentList.reduce(function (prevNode, currentNode) {
            width += Math.ceil(prevNode.width / 2 + DISTANCE.x + currentNode.width / 2);
            xList.push(width);
            return currentNode;
          });
          currentList.forEach(function (node, idx) {
            var x = Math.ceil(xList[idx] - width / 2 + vertexX / 2);
            node.center = [x, currentY];
          });
          return y + maxHeight + DISTANCE.y;
        }, vertexY + this.vertex.height / 2);
      }
    }
  }, {
    key: "horizontal",
    value: function horizontal() {
      var DISTANCE = {
        x: 100,
        y: 50
      };

      if (this.vertex && this.nodeList.length && this.linkList.length) {
        this.vertex.depth = 0;

        var _this$vertex$center2 = Graph_slicedToArray(this.vertex.center, 2),
            vertexX = _this$vertex$center2[0],
            vertexY = _this$vertex$center2[1];

        this.insetGrouping(true).slice(1).reduce(function (x, currentSet) {
          var currentList = Graph_toConsumableArray(currentSet);

          var maxWidth = Math.max.apply(Math, Graph_toConsumableArray(currentList.map(function (node) {
            return node.width;
          })));
          var currentX = x + maxWidth / 2 + DISTANCE.x;
          var yList = [];
          var height = vertexY;
          yList.push(height);
          currentList.reduce(function (prevNode, currentNode) {
            height += Math.ceil(prevNode.height / 2 + DISTANCE.y + currentNode.height / 2);
            yList.push(height);
            return currentNode;
          });
          currentList.forEach(function (node, idx) {
            var y = Math.ceil(yList[idx] - height / 2 + vertexY / 2);
            node.center = [currentX, y];
          });
          return x + maxWidth + DISTANCE.x;
        }, vertexX + this.vertex.width / 2);
      }
    }
  }, {
    key: "addNode",
    value: function addNode(options) {
      var node = options.constructor === GraphNode_GraphNode ? options : this.createNode(options);
      this.nodeList.push(node);
    }
  }, {
    key: "addLink",
    value: function addLink(options) {
      var newLink = options.constructor === GraphLink_GraphLink ? options : this.createLink(options);
      var currentLink = this.linkList.find(function (item) {
        return item.start === newLink.start && item.end === newLink.end;
      });

      if (currentLink) {
        currentLink.startAt = newLink.startAt;
        currentLink.endAt = newLink.endAt;
      } else if (newLink.start && newLink.end) {
        this.linkList.push(newLink);
      }
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var _this5 = this;

      var idx = this.nodeList.indexOf(node);
      this.linkList.filter(function (link) {
        return link.start === node || link.end === node;
      }).forEach(function (link) {
        _this5.removeLink(link);
      });
      this.nodeList.splice(idx, 1);
    }
  }, {
    key: "removeLink",
    value: function removeLink(link) {
      var idx = this.linkList.indexOf(link);
      this.linkList.splice(idx, 1);

      if (this.mouseonLink === link) {
        this.mouseonLink = null;
      }
    }
  }, {
    key: "toLastNode",
    value: function toLastNode(idx) {
      var nodeList = this.nodeList;
      nodeList.splice.apply(nodeList, [nodeList.length - 1, 0].concat(Graph_toConsumableArray(nodeList.splice(idx, 1))));
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        width: this.width,
        height: this.height,
        origin: this.origin,
        nodeList: this.nodeList.map(function (node) {
          return {
            id: node.id,
            width: node.width,
            height: node.height,
            vertex: node.vertex,
            coordinate: Graph_toConsumableArray(node.coordinate),
            meta: node.meta
          };
        }),
        linkList: this.linkList.map(function (link) {
          return {
            startId: link.start.id,
            endId: link.end.id,
            startAt: Graph_toConsumableArray(link.startAt),
            endAt: Graph_toConsumableArray(link.endAt),
            meta: link.meta
          };
        })
      };
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      var nodeList = this.nodeList;
      var margin = 20;
      this.maskBoundingClientRect = {
        top: Math.min.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[1] - node.height / 2;
        }))) - margin,
        right: Math.max.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[0] + node.width / 2;
        }))) + margin,
        bottom: Math.max.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[1] + node.height / 2;
        }))) + margin,
        left: Math.min.apply(Math, Graph_toConsumableArray(nodeList.map(function (node) {
          return node.center[0] - node.width / 2;
        }))) - margin
      };
      this.graphSelected = true;
    }
  }, {
    key: "getInterface",
    value: function getInterface() {
      return {
        nodeList: this.nodeList.map(function (node) {
          return node.getInterface();
        }),
        linkList: this.linkList.map(function (link) {
          return link.getInterface();
        }),
        addNode: this.addNode.bind(this),
        addLink: this.addLink.bind(this),
        removeNode: this.removeNode.bind(this),
        removeLink: this.removeLink.bind(this),
        horizontal: this.horizontal.bind(this),
        vertical: this.vertical.bind(this),
        toJSON: this.toJSON.bind(this),
        selectAll: this.selectAll.bind(this)
      };
    }
  }]);

  return Graph;
}(GraphEvent);

/* harmony default export */ var packages_Graph = (Graph_Graph);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64fe54ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu.vue?vue&type=template&id=1dab86c9&
var menuvue_type_template_id_1dab86c9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"flow__menu-mask",on:{"mousemove":function($event){$event.stopPropagation();$event.preventDefault();},"mousedown":_vm.close}}),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"super-flow__menu",style:(_vm.style),attrs:{"tabindex":"-1"},on:{"mousemove":function($event){$event.stopPropagation();$event.preventDefault();},"blur":_vm.close,"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();}}},[_vm._l((_vm.list),function(subList){return [_vm._l((subList),function(subItem){return _c('li',{staticClass:"super-flow__menu-item",class:{'is-disabled': subItem.disable},on:{"click":function($event){return _vm.select(subItem)}}},[_vm._t("default",[_c('span',{staticClass:"super-flow__menu-item-icon"}),_c('span',{staticClass:"super-flow__menu-item-content"},[_vm._v(" "+_vm._s(subItem.label)+" ")])])],2)}),_c('li',{staticClass:"super-flow__menu-line"})]})],2)])}
var menuvue_type_template_id_1dab86c9_staticRenderFns = []


// CONCATENATED MODULE: ./packages/menu.vue?vue&type=template&id=1dab86c9&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  props: {
    graph: Object,
    visible: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    position: {
      type: Array,
      default: function _default() {
        return [0, 0];
      }
    },
    source: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    show: function show() {
      return;
    },
    style: function style() {
      return {
        left: this.position[0] + 'px',
        top: this.position[1] + 'px'
      };
    }
  },
  methods: {
    select: function select(subItem) {
      if (subItem.disable) return;
      this.$emit('update:visible', false);
      subItem.selected(this.source, vector(this.position).minus(this.graph.origin).end);
    },
    close: function close(evt) {
      this.$emit('update:visible', false);
    }
  },
  watch: {
    visible: function visible() {
      var _this = this;

      if (this.visible) {
        this.$nextTick(function () {
          return _this.$el.focus();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/menu.vue?vue&type=style&index=0&lang=less&
var menuvue_type_style_index_0_lang_less_ = __webpack_require__("b8fb");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/menu.vue






/* normalize component */

var component = normalizeComponent(
  packages_menuvue_type_script_lang_js_,
  menuvue_type_template_id_1dab86c9_render,
  menuvue_type_template_id_1dab86c9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_menu = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64fe54ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/node.vue?vue&type=template&id=8c9d35ae&
var nodevue_type_template_id_8c9d35ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"super-flow__node",style:(_vm.style),attrs:{"tabindex":"-1"},on:{"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.nodeMousedown($event)},"mouseenter":_vm.nodeMouseenter,"mouseleave":_vm.nodeMouseleave,"mouseup":_vm.nodeMouseup,"contextmenu":function($event){$event.preventDefault();$event.stopPropagation();return _vm.nodeContextmenu($event)}}},[_vm._t("default",null,{"meta":_vm.node.meta}),_vm._l((_vm.direction),function(dir,key){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.output),expression:"output"}],class:("node-side node-side-" + key),on:{"contextmenu":function($event){$event.stopPropagation();$event.preventDefault();},"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }$event.preventDefault();$event.stopPropagation();return (function (evt) { return _vm.sideMousedown(evt, dir); })($event)}}})})],2)}
var nodevue_type_template_id_8c9d35ae_staticRenderFns = []


// CONCATENATED MODULE: ./packages/node.vue?vue&type=template&id=8c9d35ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var nodevue_type_script_lang_js_ = ({
  props: {
    graph: Object,
    node: Object,
    index: Number,
    isMove: Boolean,
    isTemEdge: Boolean,
    nodeIntercept: Function
  },
  data: function data() {
    return {
      direction: types_direction
    };
  },
  computed: {
    style: function style() {
      var _this$node = this.node,
          position = _this$node.position,
          width = _this$node.width,
          height = _this$node.height;
      return {
        width: width + 'px',
        height: height + 'px',
        top: position[1] + 'px',
        left: position[0] + 'px'
      };
    },
    output: function output() {
      return this.nodeIntercept();
    }
  },
  methods: {
    nodeMousedown: function nodeMousedown(evt) {
      this.graph.toLastNode(this.index);
      this.$emit('node-mousedown', this.node, getOffset(evt));
    },
    nodeMouseenter: function nodeMouseenter(evt) {
      this.graph.mouseonNode = this.node;
      if (!this.isTemEdge) return;
      this.$emit('node-mouseenter', evt, this.node, getOffset(evt, this.$el));
    },
    nodeMouseleave: function nodeMouseleave() {
      this.graph.mouseonNode = null;
      if (!this.isTemEdge) return;
      this.$emit('node-mouseleave');
    },
    nodeMouseup: function nodeMouseup() {
      if (!this.isTemEdge) return;
      this.$emit('node-mouseup');
    },
    nodeContextmenu: function nodeContextmenu(evt) {
      this.$emit('node-contextmenu', evt, this.node);
    },
    sideMousedown: function sideMousedown(evt) {
      this.$emit('side-mousedown', evt, this.node, getOffset(evt, this.$el));
    }
  }
});
// CONCATENATED MODULE: ./packages/node.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_nodevue_type_script_lang_js_ = (nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/node.vue?vue&type=style&index=0&lang=less&
var nodevue_type_style_index_0_lang_less_ = __webpack_require__("2470");

// CONCATENATED MODULE: ./packages/node.vue






/* normalize component */

var node_component = normalizeComponent(
  packages_nodevue_type_script_lang_js_,
  nodevue_type_template_id_8c9d35ae_render,
  nodevue_type_template_id_8c9d35ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_node = (node_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64fe54ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/link.vue?vue&type=template&id=c519a95a&
var linkvue_type_template_id_c519a95a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('canvas',{staticClass:"super-flow__line"})}
var linkvue_type_template_id_c519a95a_staticRenderFns = []


// CONCATENATED MODULE: ./packages/link.vue?vue&type=template&id=c519a95a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/link.vue?vue&type=script&lang=js&
function linkvue_type_script_lang_js_slicedToArray(arr, i) { return linkvue_type_script_lang_js_arrayWithHoles(arr) || linkvue_type_script_lang_js_iterableToArrayLimit(arr, i) || linkvue_type_script_lang_js_unsupportedIterableToArray(arr, i) || linkvue_type_script_lang_js_nonIterableRest(); }

function linkvue_type_script_lang_js_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function linkvue_type_script_lang_js_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function linkvue_type_script_lang_js_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function linkvue_type_script_lang_js_toConsumableArray(arr) { return linkvue_type_script_lang_js_arrayWithoutHoles(arr) || linkvue_type_script_lang_js_iterableToArray(arr) || linkvue_type_script_lang_js_unsupportedIterableToArray(arr) || linkvue_type_script_lang_js_nonIterableSpread(); }

function linkvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function linkvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return linkvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return linkvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function linkvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function linkvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return linkvue_type_script_lang_js_arrayLikeToArray(arr); }

function linkvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var linkvue_type_script_lang_js_ = ({
  props: {
    graph: Object,
    link: Object,
    padding: {
      type: Number,
      default: 20
    }
  },
  data: function data() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      currentPointList: []
    };
  },
  mounted: function mounted() {
    this.ctx = this.$el.getContext('2d');
    this.draw();
    this.graph.add('mousemove', this.rootMousemove);
  },
  beforeDestroy: function beforeDestroy() {
    this.graph.remove('mousemove', this.rootMousemove);
  },
  computed: {
    inPath: {
      get: function get() {
        return this.graph.mouseonLink === this.link;
      },
      set: function set(bol) {
        if (bol && !this.graph.mouseonNode) {
          this.graph.mouseonLink = this.link;
          this.$el.style.zIndex = 1;
        } else if (this.inPath) {
          this.graph.mouseonLink = null;
          this.$el.style.zIndex = 0;
        }
      }
    }
  },
  methods: {
    draw: function draw() {
      var _this = this;

      var _this$link$pathPointL = this.link.pathPointList,
          pointList = _this$link$pathPointL.pointList,
          minX = _this$link$pathPointL.minX,
          minY = _this$link$pathPointL.minY,
          maxX = _this$link$pathPointL.maxX,
          maxY = _this$link$pathPointL.maxY;
      this.top = minY - this.padding;
      this.right = maxX + this.padding;
      this.bottom = maxY + this.padding;
      this.left = minX - this.padding;
      this.currentPointList = pointList.map(function (point) {
        return [Math.floor(point[0] - _this.left), Math.floor(point[1] - _this.top)];
      });
      this.changeStyle();
      this.initLine();
    },
    changeStyle: function changeStyle() {
      this.$el.width = this.right - this.left;
      this.$el.height = this.bottom - this.top;
      this.$el.style.top = this.top + 'px';
      this.$el.style.left = this.left + 'px';
    },
    initLine: function initLine() {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height);

      if (this.inPath) {
        this.drawLine(2, '#FF0000');
        this.drawArrow(4, '#FF0000');
      } else {
        this.drawLine();
        this.drawArrow();
      }
    },
    drawLine: function drawLine() {
      var lineWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var strokeStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#666666';
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeStyle;
      this.currentPointList.forEach(function (point, idx) {
        if (idx === 0) {
          ctx.moveTo.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(point));
        } else {
          ctx.lineTo.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(point));
          ctx.stroke();
        }
      });
      ctx.save();
    },
    drawArrow: function drawArrow() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
      var fillStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#666666';
      var len = this.currentPointList.length;
      if (len < 2) return;
      var start = this.currentPointList[len - 2];
      var end = this.currentPointList[len - 1];
      var ctx = this.ctx; // 移动中心点

      ctx.translate.apply(ctx, linkvue_type_script_lang_js_toConsumableArray(end)); // 箭头原方向垂直向下,
      // 算出直线偏离Y的角, 然后旋转 ,
      // rotate是顺时针旋转的, 所以加个负号

      var ang = Math.atan((end[0] - start[0]) / (end[1] - start[1]));
      ctx.beginPath();

      if (end[1] - start[1] >= 0) {
        ctx.rotate(-ang);
      } else {
        ctx.rotate(Math.PI - ang); // 加个180度，反过来
      }

      ctx.fillStyle = fillStyle;
      ctx.lineTo(-size, -size * 2);
      ctx.lineTo(0, -size);
      ctx.lineTo(size, -size * 2);
      ctx.lineTo(0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
    getCoordinates: function getCoordinates(evt) {
      var clientX = evt.clientX,
          clientY = evt.clientY;

      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          top = _this$$el$getBounding.top,
          left = _this$$el$getBounding.left;

      return [clientX - left, clientY - top];
    },
    isPointInStroke: function isPointInStroke(evt) {
      var _this$getCoordinates = this.getCoordinates(evt),
          _this$getCoordinates2 = linkvue_type_script_lang_js_slicedToArray(_this$getCoordinates, 2),
          x = _this$getCoordinates2[0],
          y = _this$getCoordinates2[1];

      return this.link.isPointInLink([this.left + x, this.top + y]);
    },
    rootMousemove: function rootMousemove(_ref) {
      var evt = _ref.evt;
      this.inPath = this.isPointInStroke(evt);
      return this.inPath;
    }
  },
  watch: {
    'link.pathPointList': function linkPathPointList() {
      this.draw();
    },
    inPath: function inPath() {
      this.initLine();
    }
  }
});
// CONCATENATED MODULE: ./packages/link.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_linkvue_type_script_lang_js_ = (linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/link.vue?vue&type=style&index=0&lang=less&
var linkvue_type_style_index_0_lang_less_ = __webpack_require__("7e2d");

// CONCATENATED MODULE: ./packages/link.vue






/* normalize component */

var link_component = normalizeComponent(
  packages_linkvue_type_script_lang_js_,
  linkvue_type_template_id_c519a95a_render,
  linkvue_type_template_id_c519a95a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_link = (link_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/index.vue?vue&type=script&lang=js&
function lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(arr) { return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayWithoutHoles(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_iterableToArray(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_unsupportedIterableToArray(arr) || lib_vue_loader_options_packagesvue_type_script_lang_js_nonIterableSpread(); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(o, minLen); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(arr); }

function lib_vue_loader_options_packagesvue_type_script_lang_js_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { lib_vue_loader_options_packagesvue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function lib_vue_loader_options_packagesvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var lib_vue_loader_options_packagesvue_type_script_lang_js_ = ({
  props: {
    nodeMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    graphMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    linkMenu: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nodeList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    linkList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    enterIntercept: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    outputIntercept: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    width: {
      type: Number,
      default: 4000
    },
    height: {
      type: Number,
      default: 3000
    },
    origin: {
      type: Array,
      default: function _default() {
        return [this.width / 2, this.height / 2];
      }
    }
  },
  data: function data() {
    return {
      graph: new packages_Graph({
        nodeList: this.pointList,
        linkList: this.edgeList,
        width: this.width,
        height: this.height,
        origin: this.origin
      }),
      menuConf: {
        visible: false,
        position: [0, 0],
        source: null,
        list: []
      },
      moveNodeConf: {
        node: null,
        offset: null
      },
      moveAllConf: {
        isMove: false,
        downPosition: [0, 0]
      },
      temEdgeConf: {
        visible: false,
        link: null
      },
      scorllCenterFun: debounce(this.scrollCenter, 200)
    };
  },
  components: {
    GraphMenu: packages_menu,
    GraphNode: packages_node,
    GraphLine: packages_link
  },
  computed: {
    maskStyle: function maskStyle() {
      var _this$graph$maskBound = this.graph.maskBoundingClientRect,
          top = _this$graph$maskBound.top,
          right = _this$graph$maskBound.right,
          bottom = _this$graph$maskBound.bottom,
          left = _this$graph$maskBound.left;
      return {
        width: "".concat(right - left, "px"),
        height: "".concat(bottom - top, "px"),
        top: "".concat(top + this.graph.origin[1], "px"),
        left: "".concat(left + this.graph.origin[0], "px")
      };
    }
  },
  created: function created() {
    this.graph.initNode(this.nodeList);
    this.graph.initLink(this.linkList);
  },
  mounted: function mounted() {
    document.addEventListener('mouseup', this.docMouseup);
    document.addEventListener('mousemove', this.docMousemove);
    this.scrollCenter();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('mouseup', this.docMouseup);
    document.removeEventListener('mousemove', this.docMousemove);
  },
  methods: {
    initMenu: function initMenu(menu, source) {
      return menu.map(function (subList) {
        return subList.map(function (item) {
          var disable;
          var hidden;

          if (isFun(item.disable)) {
            disable = item.disable(source);
          } else if (isBool(item.disable)) {
            disable = item.disable;
          } else {
            disable = Boolean(item.disable);
          }

          if (isFun(item.hidden)) {
            hidden = item.hidden(source);
          } else if (isBool(item.hidden)) {
            hidden = item.hidden;
          } else {
            hidden = Boolean(item.hidden);
          }

          return _objectSpread(_objectSpread({}, item), {}, {
            disable: disable,
            hidden: hidden
          });
        }).filter(function (item) {
          return !item.hidden;
        });
      }).filter(function (sublist) {
        return sublist.length;
      });
    },
    showContextMenu: function showContextMenu(position, list, source) {
      if (!list.length) return;
      this.$set(this.menuConf, 'position', position);
      this.$set(this.menuConf, 'list', list);
      this.$set(this.menuConf, 'source', source);
      this.menuConf.visible = true;
    },
    docMouseup: function docMouseup() {
      this.moveNodeConf.isMove = false;
      this.moveNodeConf.node = null;
      this.moveNodeConf.offset = null;
      this.temEdgeConf.visible = false;
      this.temEdgeConf.link = null;
      this.moveAllConf.isMove = false;
    },
    docMousemove: function docMousemove(evt) {
      if (this.moveNodeConf.isMove) {
        return this.moveNodeConf.node.position = vector(this.moveNodeConf.offset).differ(getOffset(evt, this.$refs['flow-canvas'])).end;
      }

      if (this.temEdgeConf.visible) {
        return this.temEdgeConf.link.movePosition = getOffset(evt, this.$refs['flow-canvas']);
      }

      if (this.graph.graphSelected) {
        if (this.moveAllConf.isMove) {
          var offset = vector(this.moveAllConf.downPosition).differ([evt.clientX, evt.clientY]).end;
          this.graph.origin = vector(this.moveAllConf.origin).add(offset).end;
          return;
        }

        return;
      }

      return this.graph.dispatch({
        type: 'mousemove',
        evt: evt
      }, true);
    },
    scrollCenter: function scrollCenter() {
      if (this.$el) {
        var _this$$el = this.$el,
            clientHeight = _this$$el.clientHeight,
            clientWidth = _this$$el.clientWidth,
            scrollHeight = _this$$el.scrollHeight,
            scrollWidth = _this$$el.scrollWidth;
        this.$el.scrollLeft = Math.ceil((scrollWidth - clientWidth) / 2);
        this.$el.scrollTop = Math.ceil((scrollHeight - clientHeight) / 2);
      }
    },
    contextmenu: function contextmenu(evt) {
      var mouseonLink = this.graph.mouseonLink;
      var position = getOffset(evt);
      var list, source;

      if (mouseonLink && mouseonLink.isPointInLink(position)) {
        var link = mouseonLink.getInterface();
        list = this.initMenu(this.linkMenu, link);
        source = link;
      } else {
        if (mouseonLink) this.graph.mouseonLink = null;
        var graph = this.graph.getInterface();
        list = this.initMenu(this.graphMenu, graph);
        source = graph;
      }

      this.showContextMenu(getOffset(evt, this.$refs['flow-canvas']), list, source);
    },
    nodeMousedown: function nodeMousedown(node, offset) {
      this.moveNodeConf.isMove = true;
      this.moveNodeConf.node = node;
      this.moveNodeConf.offset = offset;
    },
    nodeMouseenter: function nodeMouseenter(evt, node, offset) {
      var link = this.temEdgeConf.link;

      if (this.enterIntercept(link.start, node, this.graph.getInterface())) {
        link.end = node;
        link.endAt = offset;
      }
    },
    nodeMouseleave: function nodeMouseleave() {
      this.temEdgeConf.link.end = null;
    },
    nodeMouseup: function nodeMouseup() {
      this.graph.addLink(this.temEdgeConf.link);
    },
    nodeContextmenu: function nodeContextmenu(evt, node) {
      node = node.getInterface();
      var list = this.initMenu(this.nodeMenu, node);
      if (!list.length) return;
      this.$set(this.menuConf, 'position', getOffset(evt, this.$refs['flow-canvas']));
      this.$set(this.menuConf, 'list', list);
      this.$set(this.menuConf, 'source', node);
      this.menuConf.visible = true;
    },
    sideMousedown: function sideMousedown(evt, node, startAt) {
      var link = this.graph.createLink({
        start: node,
        startAt: startAt
      });
      link.movePosition = getOffset(evt, this.$refs['flow-canvas']);
      this.$set(this.temEdgeConf, 'link', link);
      this.temEdgeConf.visible = true;
    },
    nodeIntercept: function nodeIntercept(node) {
      var _this = this;

      return function () {
        return _this.outputIntercept(node, _this.graph.getInterface());
      };
    },
    menuItemSelect: function menuItemSelect() {
      this.menuConf.visible = false;
    },
    selectAllMaskMouseDown: function selectAllMaskMouseDown(evt) {
      this.moveAllConf.isMove = true;
      this.moveAllConf.origin = lib_vue_loader_options_packagesvue_type_script_lang_js_toConsumableArray(this.graph.origin);
      this.moveAllConf.downPosition = [evt.clientX, evt.clientY];
    },
    toJSON: function toJSON() {
      return this.graph.toJSON();
    }
  },
  watch: {
    'graph.graphSelected': function graphGraphSelected() {
      var _this2 = this;

      if (this.graph.graphSelected) {
        this.$nextTick(function () {
          _this2.$refs.selectAllMask.focus();
        });
      }
    },
    'graph.mouseonLink': function graphMouseonLink() {
      if (this.graph.mouseonLink) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = '';
      }
    },
    nodeList: function nodeList() {
      this.graph.initNode(this.nodeList);
    },
    linkList: function linkList() {
      this.graph.initLink(this.linkList);
    },
    width: function width() {
      this.scorllCenterFun();
    },
    height: function height() {
      this.scorllCenterFun();
    },
    origin: function origin() {
      this.scorllCenterFun();
    }
  }
});
// CONCATENATED MODULE: ./packages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packagesvue_type_script_lang_js_ = (lib_vue_loader_options_packagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/index.vue?vue&type=style&index=0&lang=less&
var packagesvue_type_style_index_0_lang_less_ = __webpack_require__("3ad9");

// CONCATENATED MODULE: ./packages/index.vue






/* normalize component */

var packages_component = normalizeComponent(
  packagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var packages_0 = (packages_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ })["default"];
});