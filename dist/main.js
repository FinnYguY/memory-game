/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background: linear-gradient(90deg, #8287ff 0%, #a7caff 50%, #8287ff 100%);\n  background-size: contain; }\n  body .noclick {\n    pointer-events: none; }\n  body .invisible {\n    opacity: 0;\n    transition: 0.3s; }\n  body .span_blurred {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gamefield {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n    padding: 6px;\n    margin: 10px;\n    border: 3px solid black;\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n    body .gamefield_4x4 {\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_5x4 {\n      grid-template-columns: repeat(5, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_6x6 {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: repeat(6, 1fr); }\n  body .button {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    transition: 0.1s;\n    outline: none; }\n    body .button:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n    body .button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .lineBreak {\n    width: 100%; }\n  body .saveLoadBlock {\n    font-size: 14px;\n    text-align: center; }\n  body .msg-wrapper {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 10; }\n  body .msg-block {\n    position: absolute;\n    top: 0;\n    width: 300px;\n    margin: 20px;\n    border-radius: 20px;\n    background-image: radial-gradient(circle, #a7caff 0%, #8287ff 80%);\n    z-index: 9; }\n  body .msg-block p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msg-block__button {\n    display: flex;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n    body .msg-block__button:hover {\n      box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .msg-block__button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body ._hidden {\n    display: none; }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    transition: 0.2s; }\n    @media screen and (max-width: 460px) {\n      body .card {\n        width: 40px;\n        height: 65px; } }\n    body .card:hover {\n      filter: brightness(90%);\n      box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5); }\n    body .card:active {\n      filter: brightness(70%); }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .card_back {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    transform: rotateY(180deg); }\n  body .field-selector-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .field-selector-block__selector {\n    appearance: none;\n    cursor: pointer;\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%);\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    padding: 0 5px 0;\n    outline: none; }\n    body .field-selector-block__selector option {\n      background-color: #874d45; }\n    body .field-selector-block__selector:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .field-selector-block__selector:focus {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .time-n-turns-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-weight: bold;\n    width: 90%; }\n  body .time-n-turns-block__button {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .info-block {\n    text-align: center;\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 3px dashed white;\n    border-radius: 10px;\n    backdrop-filter: blur(1px); }\n    @media screen and (min-width: 1070px) {\n      body .info-block {\n        text-align: left;\n        position: absolute;\n        width: 300px;\n        margin-top: 0px;\n        left: 0px;\n        top: 0px;\n        border-left: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 20px;\n    width: 100%;\n    backdrop-filter: blur(1px);\n    border: 3px dashed white;\n    border-radius: 15px; }\n    @media screen and (min-width: 935px) {\n      body .leaderboard-block {\n        position: absolute;\n        flex-direction: column;\n        width: 240px;\n        margin-top: 0px;\n        right: 0px;\n        top: 0px;\n        border-right: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block__wrapper {\n    margin: 5px; }\n  body .wrapper__record {\n    margin: 5px 0;\n    padding: 5px 5px 10px;\n    width: 220px;\n    height: 20px;\n    border-radius: 15px;\n    text-align: center; }\n  body .size44 {\n    background: rgba(26, 83, 255, 0.2); }\n  body .size54 {\n    background: rgba(26, 83, 255, 0.4); }\n  body .size66 {\n    background: rgba(26, 83, 255, 0.6); }\n\n::-webkit-scrollbar {\n  width: 10px; }\n  ::-webkit-scrollbar-track {\n    background-color: #559FB4; }\n  ::-webkit-scrollbar-thumb {\n    background-color: #8B5149;\n    border-radius: 10px; }\n    ::-webkit-scrollbar-thumb:hover {\n      background-color: #7a4740; }\n    ::-webkit-scrollbar-thumb:active {\n      background-color: #6a3e37; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: sizes, selectors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectors", function() { return selectors; });
const sizes = {
  size44: '44',
  size54: '54',
  size66: '66',
};

const selectors = {
  gamefield44: 'gamefield_4x4',
  gamefield54: 'gamefield_5x4',
  gamefield66: 'gamefield_6x6',
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
const processor = __webpack_require__(/*! ./processor.js */ "./src/processor.js");

const view = __webpack_require__(/*! ./view.js */ "./src/view.js");



// all required onload initializations
function initialize() {
  processor.addCards(16);
  processor.showLeaderboard();
}

// create the HTML
view.generateView();

window.onload = initialize();

// configuring the mutation observer for delegation to work properly
const field = document.getElementsByTagName('body')[0];

const config = {
  childList: true,
};

const observer = new MutationObserver(processor.callback);
observer.observe(field, config);


/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const processor = __webpack_require__(/*! ./processor.js */ "./src/processor.js");

class Message {

  constructor() {
    this.element = processor.createHtml('div', 'msg-block _hidden');

    let wrapper = processor.createHtml('div', 'msg-wrapper _hidden');
    wrapper.append(this.element);
    document.body.append(wrapper);
  }

  show(text) {
    this.element.innerHTML = `<p> ${text} </p>`;
    let wrapper = document.querySelector('.msg-wrapper');
    wrapper.classList.remove('_hidden');
    this.element.classList.remove('_hidden');
  }

  hide() {
    let wrapper = document.querySelector('.msg-wrapper');
    wrapper.classList.add('_hidden');
    this.element.classList.add('_hidden');
  }
}

const textMsg = new Message();
/* harmony default export */ __webpack_exports__["default"] = (textMsg);


/***/ }),

/***/ "./src/processor.js":
/*!**************************!*\
  !*** ./src/processor.js ***!
  \**************************/
/*! exports provided: createHtml, addCards, stopTurns, toggleCard, addButton, compareCards, changeFieldSize, callback, isFirstBetter, changeLeadResult, showLeaderboard, saveGame, loadGame, clearStopwatch, startStopwatch, startStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCards", function() { return addCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTurns", function() { return stopTurns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCard", function() { return toggleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButton", function() { return addButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareCards", function() { return compareCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFieldSize", function() { return changeFieldSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callback", function() { return callback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstBetter", function() { return isFirstBetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLeadResult", function() { return changeLeadResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLeaderboard", function() { return showLeaderboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGame", function() { return saveGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGame", function() { return loadGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStopwatch", function() { return clearStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStopwatch", function() { return startStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStop", function() { return startStop; });
/* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.js */ "./src/message.js");
const constants = __webpack_require__(/*! ./constants.js */ "./src/constants.js");


// create html element with given attributes
function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  className === undefined ? elem.className = '' : elem.className = className;
  innerText === undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length !== 0) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

let classArrLength = 0;
function addCards(num) {
  const classArray = [];
  const field = document.querySelector('.gamefield');

  for (let i = 1; i < 19; i += 1) {
    classArray.push(`card${i}`, `card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  classArray.length = num;
  classArrLength = classArray.length;

  for (let i = 0; i < classArrLength; i += 1) {
    const random = getRndInt(0, classArray.length);
    field.append(createHtml('div', `card ${classArray[random]} card_back`));
    classArray.splice(random, 1);
  }
}

function stopTurns() {
  document.querySelector('.turnsCounter').value = '0';
}

// toggling card face up/down
function toggleCard(...cards) {
  for (const card of cards) {
    card.classList.toggle('card_back');
  }
}

function addButton(style, text, action) {
  document.querySelector('.msg-block').append(createHtml('button', `msg-block__button ${style}`, text));
  document.querySelector(`.${style}`).addEventListener('click', action);
}

let emptyCardNumber = 0;
function compareCards(card1, card2) {
  if (card1.classList[1] === card2.classList[1]) {
    setTimeout(() => { card1.classList.add('invisible', 'noclick'); }, 300);
    setTimeout(() => { card2.classList.add('invisible', 'noclick'); }, 300);
    emptyCardNumber += 2;
  } else {
    card1.classList.remove('noclick');
    card2.classList.remove('noclick');
    setTimeout(toggleCard, 400, card1, card2);
  }
}

function changeFieldSize() {
  let selector;
  let field;
  isLoadedGame = false;

  field = document.querySelector('.gamefield');
  field.remove();
  field = createHtml('div', 'gamefield');
  document.querySelector('.time-n-turns-block').after(field);
  selector = document.querySelector('.field-selector-block__selector');

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  faceUpCounter = 0;

  _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show('<b>Shuffling...</b>');
  setTimeout(function () {
    _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
  }, 1000);

  switch (selector.value) {
    case constants.sizes.size44:
      field.classList.add(constants.selectors.gamefield44);
      addCards(16);
      break;
    case constants.sizes.size54:
      field.classList.add(constants.selectors.gamefield54);
      addCards(20);
      break;
    case constants.sizes.size66:
      field.classList.add(constants.selectors.gamefield66);
      addCards(36);
      break;
    default:
  }
}

let faceUpCounter = 0;
let faceUpCard1;
let isFirstClick = true;
let isLoadedGame = false;
const callback = function () {
  const gamefield = document.querySelector('.gamefield');
  const stopwatch = document.querySelector('.stopwatch');
  const turnsCounter = document.querySelector('.turnsCounter');
  const fieldSizeSelector = document.querySelector('.field-selector-block__selector');

  gamefield.onclick = function (event) {
    let target = event.target;
    if(!target.classList.contains('card')) return;
    toggleCard(target);

    if (isFirstClick) {
      isFirstClick = false;
      startStop();
    }

    if (!target.classList.contains('card_back')) {
      faceUpCounter += 1;
      target.classList.add('noclick');
      // if two cards are faced up
      if (faceUpCounter >= 2) {
        gamefield.classList.add('noclick');
        setTimeout(() => { gamefield.classList.remove('noclick')}, 200);
        if (!isLoadedGame) {
          turnsCounter.value++;
        }
        compareCards(target, faceUpCard1);

        if (emptyCardNumber === classArrLength) {
          const time = stopwatch.value;
          const turns = turnsCounter.value;
          const fieldSize = fieldSizeSelector.value;
          const result = {
            time,
            turns,
            size: fieldSize,
          };

          if (isLoadedGame) {
            setTimeout(() => {
              _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show('<b>Well... <br> You\'d better play without saving and loading... <br></b> Statistics are nor recorded for loaded games');
              addButton('close', 'Close', () => {_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
          }

          // change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            setTimeout(() => {
              _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show(`<b>Congratulations! <br> New Record! <br></b>You paired all the cards in ${time} and ${turns} turns <br>`);
              addButton('close', 'Close', () => {_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
            changeLeadResult(result);
          } else {
            setTimeout(() => {
              _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show(`<b>Good, But You Gotta Try Harder To Beat The Record! <br> </b>You paired all the cards in ${time} and ${turns} turns <br>`);
              addButton('close', 'Close', () => {_message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide()});
              addButton('playAgain', 'Play Again', changeFieldSize);
            }, 300);
          }

          if (!isLoadedGame) {
            startStop();
            stopTurns();
          }
          emptyCardNumber = 0;
        }

        faceUpCounter = 0;
        return;
      }
      faceUpCard1 = target;
    }
  };
};

function isFirstBetter(recent, previous) {
  const recentTime = Number(recent.time.replace(':', ''));
  const recentRatio = recentTime + recent.turns;

  // make recent better if there is no previous
  if (!localStorage.getItem(recent.size)) {
    return 1;
  }

  const previousTime = Number(JSON.parse(previous).time.replace(':', ''));
  const previousRatio = previousTime + JSON.parse(previous).turns;

  // if new result is worse than saved one
  if (recentRatio >= previousRatio) {
    return 0;
  }

  // if new result is better than saved one
  return 1;
}

function changeLeadResult(result) {
  localStorage.removeItem(result.size);
  document.getElementsByClassName(`size${result.size}`).innerHTML = `<b>Time:</b> ${result.time}, <b>Turns:</b> ${result.turns} `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

function showLeaderboard() {
  if (localStorage.getItem(constants.sizes.size44)) {
    const res1 = JSON.parse(localStorage.getItem(constants.sizes.size44));
    document.querySelector('.size44').innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size54)) {
    const res2 = JSON.parse(localStorage.getItem(constants.sizes.size54));
    document.querySelector('.size54').innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size66)) {
    const res3 = JSON.parse(localStorage.getItem(constants.sizes.size66));
    document.querySelector('.size66').innerHTML = `<b>Time:</b> ${res3.time}, <b>Turns:</b> ${res3.turns} `;
  }
}

function saveGame() {
  const saveFieldSize = document.querySelector('.field-selector-block__selector').value;
  const currentField = document.querySelector('.gamefield').innerHTML;

  _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show('<b>Saving...</b>');
  setTimeout(() => {
    _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
  }, 1000);

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  Array.from(document.querySelectorAll('.card')).forEach((item) => {
    if (item.classList.contains('invisible')) {
      emptyCardNumber += 1;
    }
  });

  const savedGame = {
    size: saveFieldSize,
    field: currentField,
  };

  localStorage.setItem('gameSave', JSON.stringify(savedGame));
}

function loadGame(save) {
  if (!save) {
    _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].show('<b>No saved games found :(</b>');
    setTimeout(() => {
      _message_js__WEBPACK_IMPORTED_MODULE_0__["default"].hide();
    }, 1000);
    return;
  }

  const gameSave = JSON.parse(save);
  const fieldSizeSelector = document.querySelector('.field-selector-block__selector');

  fieldSizeSelector.value = gameSave.size;
  changeFieldSize();
  document.querySelector('.msg-block').innerHTML = '<p><b>Loading...</b></p>';

  // loading saved field
  setTimeout(() => {
    const field = document.querySelector('.gamefield');
    field.innerHTML = gameSave.field;
    emptyCardNumber = 0;
    isFirstClick = false;
    Array.from(document.querySelectorAll('.card')).forEach((item) => {
      if (item.classList.contains('invisible')) {
        emptyCardNumber += 1;
      }
    });
  }, 1000);
  isLoadedGame = true;
}

// Stopwatch initiaization and functions
const base = 60;
let clocktimer;
let dateObj;
let dm;
let ds;
let readout = '';
let h = 1;
let m = 1;
let tm = 1;
let s = 0;
let ts = 0;
let ms = 0;
let init = 0;

function clearStopwatch() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00';
  document.querySelector('.stopwatch').value = readout;
}

function startStopwatch() {
  let cdateObj = new Date();
  let t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  readout = dm + ':' + ds;
  document.querySelector('.stopwatch').value = readout;
  clocktimer = setTimeout(startStopwatch, 1);
}

function startStop() {
  if (init === 0) {
    clearStopwatch();
    dateObj = new Date();
    startStopwatch();
    init = 1;
  } else {
    clearStopwatch();
    clearTimeout(clocktimer);
    init = 0;
  }
}


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const processor = __webpack_require__(/*! ./processor.js */ "./src/processor.js");

// create the HTML
exports.generateView = function () {
  // creating fieldSelector block and its contents
  const fieldSelectorBlock = processor.createHtml('div', 'field-selector-block');
  const fieldSelector = processor.createHtml('select', 'field-selector-block__selector');
  const fieldSelectorButton = processor.createHtml('button', 'button field-selector-block__button', 'Confirm & Shuffle');

  document.body.append(fieldSelectorBlock);
  fieldSelectorBlock.append(processor.createHtml('span', 'span_blurred', 'Select field size'));
  fieldSelectorBlock.append(fieldSelector);
  fieldSelector.append(processor.createHtml('option', '', '4x4', 'value', '44'));
  fieldSelector.append(processor.createHtml('option', '', '5x4', 'value', '54'));
  fieldSelector.append(processor.createHtml('option', '', '6x6', 'value', '66'));
  fieldSelectorBlock.append(fieldSelectorButton);
  fieldSelectorButton.addEventListener('click', processor.changeFieldSize);

  // creating timeNturnsBlock with buttons
  const timeNturnsBlock = processor.createHtml('div', 'time-n-turns-block');

  document.body.append(timeNturnsBlock);
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Time'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button stopwatch', '', 'value', '00:00', 'disabled', 'true'));
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Turns'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button turnsCounter', '', 'value', '0', 'disabled', 'true'));

  // creating gamefield
  document.body.append(processor.createHtml('div', 'gamefield gamefield_4x4'));

  // creating block with information
  document.body.append(processor.createHtml('div', 'info-block', '<b>Memory Game</b> <br> Flip two cards. If the cards are the same on their face side - they disappear. If they are different - you have to pick another pair. Clearing the field is the winning condition <br> <b>Click</b> on any card to start playing <br> <b>Confirm & Shuffle</b> - shuffle field of selected size'));

  // creating best results block
  const leaderboardBlock = processor.createHtml('div', 'leaderboard-block', '<b>Leaderboard</b>');

  document.body.append(leaderboardBlock);
  leaderboardBlock.append(processor.createHtml('div', 'lineBreak'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[0].append(processor.createHtml('div', 'wrapper__record size44', ''));
  document.querySelector('.size44').before(processor.createHtml('div', 'wrapper__record', '<b>4x4</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[1].append(processor.createHtml('div', 'wrapper__record size54', ''));
  document.querySelector('.size54').before(processor.createHtml('div', 'wrapper__record', '<b>5x4</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'leaderboard-block__wrapper'));
  document.querySelectorAll('.leaderboard-block__wrapper')[2].append(processor.createHtml('div', 'wrapper__record size66', ''));
  document.querySelector('.size66').before(processor.createHtml('div', 'wrapper__record', '<b>6x6</b>'));
  leaderboardBlock.append(processor.createHtml('div', 'lineBreak'));

  // creating save/load block
  leaderboardBlock.append(processor.createHtml('div', 'saveLoadBlock', 'Statistics are not recorded for loaded games, train in real time to conquer leaderboard! <br>'));
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  saveGameButton', 'Save Game'));
  document.querySelector('.saveGameButton').addEventListener('click', processor.saveGame);
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  loadGameButton', 'Load Game'));
  document.querySelector('.loadGameButton').addEventListener('click', () => {
    processor.loadGame(localStorage.getItem('gameSave'));
  });
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovLy8uL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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SUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLGtCQUFrQixtQkFBTyxDQUFDLDBDQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzgyODdmZiAwJSwgI2E3Y2FmZiA1MCUsICM4Mjg3ZmYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cXG4gIGJvZHkgLm5vY2xpY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgYm9keSAuaW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxcbiAgYm9keSAuc3Bhbl9ibHVycmVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDEwcHg7IH1cXG4gIGJvZHkgLmdhbWVmaWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCBibGFjazsgfVxcbiAgICBib2R5IC5nYW1lZmllbGRfNHg0IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7IH1cXG4gICAgYm9keSAuZ2FtZWZpZWxkXzV4NCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpOyB9XFxuICAgIGJvZHkgLmdhbWVmaWVsZF82eDYge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTsgfVxcbiAgYm9keSAuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiYTgxNzggMCUsICM4NzRkNDUgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDRweCA1cHggNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgICBib2R5IC5idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NzRkNDUgMCUsICNiYTgxNzggMTAwJSk7IH1cXG4gIGJvZHkgLmxpbmVCcmVhayB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBib2R5IC5zYXZlTG9hZEJsb2NrIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJvZHkgLm1zZy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTA7IH1cXG4gIGJvZHkgLm1zZy1ibG9jayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2E3Y2FmZiAwJSwgIzgyODdmZiA4MCUpO1xcbiAgICB6LWluZGV4OiA5OyB9XFxuICBib2R5IC5tc2ctYmxvY2sgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGJvZHkgLm1zZy1ibG9ja19fYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiYTgxNzggMCUsICM4NzRkNDUgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5tc2ctYmxvY2tfX2J1dHRvbjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgICBib2R5IC5tc2ctYmxvY2tfX2J1dHRvbjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTsgfVxcbiAgYm9keSAuX2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIGJvZHkgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTcuNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgIGJvZHkgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDY1cHg7IH0gfVxcbiAgICBib2R5IC5jYXJkOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICAgIGJvZHkgLmNhcmQ6YWN0aXZlIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTsgfVxcbiAgYm9keSAuY2FyZDEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0NTAxMDIgMCUsICNmZjAwNDIgNTAlLCAjNDUwMTAyIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzJmMzc5OSAwJSwgIzAyZjVmYiA1MCUsICMyZjM3OTkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGEzNTA4IDAlLCAjNGVmMzRmIDUwJSwgIzBhMzUwOCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkYjE4YjYgMCUsICNmZmM4ZmMgNTAlLCAjZGIxOGI2IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxMjdhZCAwJSwgI2Q1OWFlZSA1MCUsICM0MTI3YWQgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmYzAwIDAlLCB3aGl0ZSA1MCUsICNmZmZjMDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMyODFiIDAlLCAjOWM2NDI5IDUwJSwgIzMzMjgxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMTI3MTEgMCUsICNmNWFmMTkgNTAlLCAjZjEyNzExIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZlNDA1YSAwJSwgI2Y3YjZiYSA1MCUsICNmZTQwNWEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxNWVmOSAwJSwgI2Y4NDc2ZSA1MCUsICM0MTVlZjkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzZjNmI3MSAwJSwgI2NmY2ZjZiA1MCUsICM2YzZiNzEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFmMWMyYyAwJSwgIzkyOGRhYiA1MCUsICMxZjFjMmMgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzYzNzRkMCAwJSwgI2QwZWRmZiA1MCUsICM2Mzc0ZDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjMTAzYyAwJSwgIzBjMTlkYiA1MCUsICMwZTEzNTAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQwM2I0YSA1JSwgI2UwZTQ4YSA1MCUsICM0MDNiNGEgOTUlKTsgfVxcbiAgYm9keSAuY2FyZDE2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWQ5NzZjIDAlLCAjOTNmOWI5IDUwJSwgIzFkOTc2YyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjRmZTQxIDAlLCAjZmRmYzQ3IDUwJSwgIzI0ZmU0MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMwMDFiIDAlLCAjZmYwMDg0IDUwJSwgIzMzMDAxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZF9iYWNrIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3Ige1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nOiAwIDVweCAwO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvciBvcHRpb24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzRkNDU7IH1cXG4gICAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gICAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yOmZvY3VzIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICBib2R5IC50aW1lLW4tdHVybnMtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgYm9keSAudGltZS1uLXR1cm5zLWJsb2NrX19idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTFweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXJnaW46IDdweCA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuaW5mby1ibG9jayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDcwcHgpIHtcXG4gICAgICBib2R5IC5pbmZvLWJsb2NrIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7IH0gfVxcbiAgYm9keSAubGVhZGVyYm9hcmQtYmxvY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzNXB4KSB7XFxuICAgICAgYm9keSAubGVhZGVyYm9hcmQtYmxvY2sge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDsgfSB9XFxuICBib2R5IC5sZWFkZXJib2FyZC1ibG9ja19fd3JhcHBlciB7XFxuICAgIG1hcmdpbjogNXB4OyB9XFxuICBib2R5IC53cmFwcGVyX19yZWNvcmQge1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDEwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJvZHkgLnNpemU0NCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuMik7IH1cXG4gIGJvZHkgLnNpemU1NCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuNCk7IH1cXG4gIGJvZHkgLnNpemU2NiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuNik7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4OyB9XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OUZCNDsgfVxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjUxNDk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDc0MDsgfVxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZhM2UzNzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgY29uc3Qgc2l6ZXMgPSB7XG4gIHNpemU0NDogJzQ0JyxcbiAgc2l6ZTU0OiAnNTQnLFxuICBzaXplNjY6ICc2NicsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBnYW1lZmllbGQ0NDogJ2dhbWVmaWVsZF80eDQnLFxuICBnYW1lZmllbGQ1NDogJ2dhbWVmaWVsZF81eDQnLFxuICBnYW1lZmllbGQ2NjogJ2dhbWVmaWVsZF82eDYnLFxufTtcbiIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XG5cbmNvbnN0IHZpZXcgPSByZXF1aXJlKCcuXFxcXHZpZXcuanMnKTtcblxuaW1wb3J0ICcuXFxcXHNjc3NcXFxcc3R5bGVzLnNjc3MnO1xuXG4vLyBhbGwgcmVxdWlyZWQgb25sb2FkIGluaXRpYWxpemF0aW9uc1xuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgcHJvY2Vzc29yLmFkZENhcmRzKDE2KTtcbiAgcHJvY2Vzc29yLnNob3dMZWFkZXJib2FyZCgpO1xufVxuXG4vLyBjcmVhdGUgdGhlIEhUTUxcbnZpZXcuZ2VuZXJhdGVWaWV3KCk7XG5cbndpbmRvdy5vbmxvYWQgPSBpbml0aWFsaXplKCk7XG5cbi8vIGNvbmZpZ3VyaW5nIHRoZSBtdXRhdGlvbiBvYnNlcnZlciBmb3IgZGVsZWdhdGlvbiB0byB3b3JrIHByb3Blcmx5XG5jb25zdCBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgY2hpbGRMaXN0OiB0cnVlLFxufTtcblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihwcm9jZXNzb3IuY2FsbGJhY2spO1xub2JzZXJ2ZXIub2JzZXJ2ZShmaWVsZCwgY29uZmlnKTtcbiIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XG5cbmNsYXNzIE1lc3NhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbXNnLWJsb2NrIF9oaWRkZW4nKTtcblxuICAgIGxldCB3cmFwcGVyID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdtc2ctd3JhcHBlciBfaGlkZGVuJyk7XG4gICAgd3JhcHBlci5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh3cmFwcGVyKTtcbiAgfVxuXG4gIHNob3codGV4dCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBgPHA+ICR7dGV4dH0gPC9wPmA7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLXdyYXBwZXInKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ19oaWRkZW4nKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2hpZGRlbicpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctd3JhcHBlcicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnX2hpZGRlbicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfaGlkZGVuJyk7XG4gIH1cbn1cblxuY29uc3QgdGV4dE1zZyA9IG5ldyBNZXNzYWdlKCk7XG5leHBvcnQgZGVmYXVsdCB0ZXh0TXNnO1xuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcbmltcG9ydCB0ZXh0TXNnIGZyb20gJy5cXFxcbWVzc2FnZS5qcyc7XG5cbi8vIGNyZWF0ZSBodG1sIGVsZW1lbnQgd2l0aCBnaXZlbiBhdHRyaWJ1dGVzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSHRtbChzZWxlY3RvciwgY2xhc3NOYW1lLCBpbm5lclRleHQsIC4uLmtleXNWYWx1ZXMpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xuICBjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/IGVsZW0uY2xhc3NOYW1lID0gJycgOiBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaW5uZXJUZXh0ID09PSB1bmRlZmluZWQgPyBlbGVtLmlubmVySFRNTCA9ICcnIDogZWxlbS5pbm5lckhUTUwgPSBpbm5lclRleHQ7XG4gIGlmIChrZXlzVmFsdWVzLmxlbmd0aCAhPT0gMCkge1xuICAgIGxldCBpID0gMTtcbiAgICB3aGlsZSAoaSA8IGtleXNWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShrZXlzVmFsdWVzW2kgLSAxXSwga2V5c1ZhbHVlc1tpXSk7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICB9XG4gIHJldHVybiBlbGVtO1xufVxuXG5sZXQgY2xhc3NBcnJMZW5ndGggPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENhcmRzKG51bSkge1xuICBjb25zdCBjbGFzc0FycmF5ID0gW107XG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTk7IGkgKz0gMSkge1xuICAgIGNsYXNzQXJyYXkucHVzaChgY2FyZCR7aX1gLCBgY2FyZCR7aX1gKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJuZEludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cblxuICBjbGFzc0FycmF5Lmxlbmd0aCA9IG51bTtcbiAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByYW5kb20gPSBnZXRSbmRJbnQoMCwgY2xhc3NBcnJheS5sZW5ndGgpO1xuICAgIGZpZWxkLmFwcGVuZChjcmVhdGVIdG1sKCdkaXYnLCBgY2FyZCAke2NsYXNzQXJyYXlbcmFuZG9tXX0gY2FyZF9iYWNrYCkpO1xuICAgIGNsYXNzQXJyYXkuc3BsaWNlKHJhbmRvbSwgMSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BUdXJucygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm5zQ291bnRlcicpLnZhbHVlID0gJzAnO1xufVxuXG4vLyB0b2dnbGluZyBjYXJkIGZhY2UgdXAvZG93blxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNhcmQoLi4uY2FyZHMpIHtcbiAgZm9yIChjb25zdCBjYXJkIG9mIGNhcmRzKSB7XG4gICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkX2JhY2snKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQnV0dG9uKHN0eWxlLCB0ZXh0LCBhY3Rpb24pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1ibG9jaycpLmFwcGVuZChjcmVhdGVIdG1sKCdidXR0b24nLCBgbXNnLWJsb2NrX19idXR0b24gJHtzdHlsZX1gLCB0ZXh0KSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3N0eWxlfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aW9uKTtcbn1cblxubGV0IGVtcHR5Q2FyZE51bWJlciA9IDA7XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUNhcmRzKGNhcmQxLCBjYXJkMikge1xuICBpZiAoY2FyZDEuY2xhc3NMaXN0WzFdID09PSBjYXJkMi5jbGFzc0xpc3RbMV0pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FyZDEuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTsgfSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FyZDIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTsgfSwgMzAwKTtcbiAgICBlbXB0eUNhcmROdW1iZXIgKz0gMjtcbiAgfSBlbHNlIHtcbiAgICBjYXJkMS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpO1xuICAgIHNldFRpbWVvdXQodG9nZ2xlQ2FyZCwgNDAwLCBjYXJkMSwgY2FyZDIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWVsZFNpemUoKSB7XG4gIGxldCBzZWxlY3RvcjtcbiAgbGV0IGZpZWxkO1xuICBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcblxuICBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKTtcbiAgZmllbGQucmVtb3ZlKCk7XG4gIGZpZWxkID0gY3JlYXRlSHRtbCgnZGl2JywgJ2dhbWVmaWVsZCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1uLXR1cm5zLWJsb2NrJykuYWZ0ZXIoZmllbGQpO1xuICBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcblxuICBjbGVhclN0b3B3YXRjaCgpO1xuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gIGluaXQgPSAwO1xuICBzdG9wVHVybnMoKTtcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcbiAgZW1wdHlDYXJkTnVtYmVyID0gMDtcbiAgZmFjZVVwQ291bnRlciA9IDA7XG5cbiAgdGV4dE1zZy5zaG93KCc8Yj5TaHVmZmxpbmcuLi48L2I+Jyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRleHRNc2cuaGlkZSgpO1xuICB9LCAxMDAwKTtcblxuICBzd2l0Y2ggKHNlbGVjdG9yLnZhbHVlKSB7XG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTQ0OlxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDQ0KTtcbiAgICAgIGFkZENhcmRzKDE2KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU1NDpcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoY29uc3RhbnRzLnNlbGVjdG9ycy5nYW1lZmllbGQ1NCk7XG4gICAgICBhZGRDYXJkcygyMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNjY6XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnN0YW50cy5zZWxlY3RvcnMuZ2FtZWZpZWxkNjYpO1xuICAgICAgYWRkQ2FyZHMoMzYpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxufVxuXG5sZXQgZmFjZVVwQ291bnRlciA9IDA7XG5sZXQgZmFjZVVwQ2FyZDE7XG5sZXQgaXNGaXJzdENsaWNrID0gdHJ1ZTtcbmxldCBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZ2FtZWZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xuICBjb25zdCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJyk7XG4gIGNvbnN0IHR1cm5zQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuc0NvdW50ZXInKTtcbiAgY29uc3QgZmllbGRTaXplU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJyk7XG5cbiAgZ2FtZWZpZWxkLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpIHJldHVybjtcbiAgICB0b2dnbGVDYXJkKHRhcmdldCk7XG5cbiAgICBpZiAoaXNGaXJzdENsaWNrKSB7XG4gICAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHN0YXJ0U3RvcCgpO1xuICAgIH1cblxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9iYWNrJykpIHtcbiAgICAgIGZhY2VVcENvdW50ZXIgKz0gMTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XG4gICAgICAvLyBpZiB0d28gY2FyZHMgYXJlIGZhY2VkIHVwXG4gICAgICBpZiAoZmFjZVVwQ291bnRlciA+PSAyKSB7XG4gICAgICAgIGdhbWVmaWVsZC5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBnYW1lZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpfSwgMjAwKTtcbiAgICAgICAgaWYgKCFpc0xvYWRlZEdhbWUpIHtcbiAgICAgICAgICB0dXJuc0NvdW50ZXIudmFsdWUrKztcbiAgICAgICAgfVxuICAgICAgICBjb21wYXJlQ2FyZHModGFyZ2V0LCBmYWNlVXBDYXJkMSk7XG5cbiAgICAgICAgaWYgKGVtcHR5Q2FyZE51bWJlciA9PT0gY2xhc3NBcnJMZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gc3RvcHdhdGNoLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHR1cm5zID0gdHVybnNDb3VudGVyLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGZpZWxkU2l6ZSA9IGZpZWxkU2l6ZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICB0dXJucyxcbiAgICAgICAgICAgIHNpemU6IGZpZWxkU2l6ZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzTG9hZGVkR2FtZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHRNc2cuc2hvdygnPGI+V2VsbC4uLiA8YnI+IFlvdVxcJ2QgYmV0dGVyIHBsYXkgd2l0aG91dCBzYXZpbmcgYW5kIGxvYWRpbmcuLi4gPGJyPjwvYj4gU3RhdGlzdGljcyBhcmUgbm9yIHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXMnKTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdjbG9zZScsICdDbG9zZScsICgpID0+IHt0ZXh0TXNnLmhpZGUoKX0pO1xuICAgICAgICAgICAgICBhZGRCdXR0b24oJ3BsYXlBZ2FpbicsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2hhbmdlIEhUTUwgYW5kIGxvY2FsU3RvcmFnZSBpZiBuZXcgcmVzdWx0IGlzIGJldHRlclxuICAgICAgICAgIGlmIChpc0ZpcnN0QmV0dGVyKHJlc3VsdCwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocmVzdWx0LnNpemUpKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHRNc2cuc2hvdyhgPGI+Q29uZ3JhdHVsYXRpb25zISA8YnI+IE5ldyBSZWNvcmQhIDxicj48L2I+WW91IHBhaXJlZCBhbGwgdGhlIGNhcmRzIGluICR7dGltZX0gYW5kICR7dHVybnN9IHR1cm5zIDxicj5gKTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdjbG9zZScsICdDbG9zZScsICgpID0+IHt0ZXh0TXNnLmhpZGUoKX0pO1xuICAgICAgICAgICAgICBhZGRCdXR0b24oJ3BsYXlBZ2FpbicsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICBjaGFuZ2VMZWFkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0ZXh0TXNnLnNob3coYDxiPkdvb2QsIEJ1dCBZb3UgR290dGEgVHJ5IEhhcmRlciBUbyBCZWF0IFRoZSBSZWNvcmQhIDxicj4gPC9iPllvdSBwYWlyZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfSB0dXJucyA8YnI+YCk7XG4gICAgICAgICAgICAgIGFkZEJ1dHRvbignY2xvc2UnLCAnQ2xvc2UnLCAoKSA9PiB7dGV4dE1zZy5oaWRlKCl9KTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdwbGF5QWdhaW4nLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaXNMb2FkZWRHYW1lKSB7XG4gICAgICAgICAgICBzdGFydFN0b3AoKTtcbiAgICAgICAgICAgIHN0b3BUdXJucygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZmFjZVVwQ291bnRlciA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZhY2VVcENhcmQxID0gdGFyZ2V0O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0QmV0dGVyKHJlY2VudCwgcHJldmlvdXMpIHtcbiAgY29uc3QgcmVjZW50VGltZSA9IE51bWJlcihyZWNlbnQudGltZS5yZXBsYWNlKCc6JywgJycpKTtcbiAgY29uc3QgcmVjZW50UmF0aW8gPSByZWNlbnRUaW1lICsgcmVjZW50LnR1cm5zO1xuXG4gIC8vIG1ha2UgcmVjZW50IGJldHRlciBpZiB0aGVyZSBpcyBubyBwcmV2aW91c1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlY2VudC5zaXplKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNUaW1lID0gTnVtYmVyKEpTT04ucGFyc2UocHJldmlvdXMpLnRpbWUucmVwbGFjZSgnOicsICcnKSk7XG4gIGNvbnN0IHByZXZpb3VzUmF0aW8gPSBwcmV2aW91c1RpbWUgKyBKU09OLnBhcnNlKHByZXZpb3VzKS50dXJucztcblxuICAvLyBpZiBuZXcgcmVzdWx0IGlzIHdvcnNlIHRoYW4gc2F2ZWQgb25lXG4gIGlmIChyZWNlbnRSYXRpbyA+PSBwcmV2aW91c1JhdGlvKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvLyBpZiBuZXcgcmVzdWx0IGlzIGJldHRlciB0aGFuIHNhdmVkIG9uZVxuICByZXR1cm4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlc3VsdC5zaXplKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgc2l6ZSR7cmVzdWx0LnNpemV9YCkuaW5uZXJIVE1MID0gYDxiPlRpbWU6PC9iPiAke3Jlc3VsdC50aW1lfSwgPGI+VHVybnM6PC9iPiAke3Jlc3VsdC50dXJuc30gYDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocmVzdWx0LnNpemUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xlYWRlcmJvYXJkKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU0NCkpIHtcbiAgICBjb25zdCByZXMxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTQ0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMxLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMS50dXJuc30gYDtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpIHtcbiAgICBjb25zdCByZXMyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTU0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMyLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMi50dXJuc30gYDtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU2NikpIHtcbiAgICBjb25zdCByZXMzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTY2KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMzLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMy50dXJuc30gYDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUdhbWUoKSB7XG4gIGNvbnN0IHNhdmVGaWVsZFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJykudmFsdWU7XG4gIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKS5pbm5lckhUTUw7XG5cbiAgdGV4dE1zZy5zaG93KCc8Yj5TYXZpbmcuLi48L2I+Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRleHRNc2cuaGlkZSgpO1xuICB9LCAxMDAwKTtcblxuICBjbGVhclN0b3B3YXRjaCgpO1xuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gIGluaXQgPSAwO1xuICBzdG9wVHVybnMoKTtcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcbiAgZW1wdHlDYXJkTnVtYmVyID0gMDtcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgZW1wdHlDYXJkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzYXZlZEdhbWUgPSB7XG4gICAgc2l6ZTogc2F2ZUZpZWxkU2l6ZSxcbiAgICBmaWVsZDogY3VycmVudEZpZWxkLFxuICB9O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU2F2ZScsIEpTT04uc3RyaW5naWZ5KHNhdmVkR2FtZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdhbWUoc2F2ZSkge1xuICBpZiAoIXNhdmUpIHtcbiAgICB0ZXh0TXNnLnNob3coJzxiPk5vIHNhdmVkIGdhbWVzIGZvdW5kIDooPC9iPicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dE1zZy5oaWRlKCk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZ2FtZVNhdmUgPSBKU09OLnBhcnNlKHNhdmUpO1xuICBjb25zdCBmaWVsZFNpemVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcblxuICBmaWVsZFNpemVTZWxlY3Rvci52YWx1ZSA9IGdhbWVTYXZlLnNpemU7XG4gIGNoYW5nZUZpZWxkU2l6ZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykuaW5uZXJIVE1MID0gJzxwPjxiPkxvYWRpbmcuLi48L2I+PC9wPic7XG5cbiAgLy8gbG9hZGluZyBzYXZlZCBmaWVsZFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKTtcbiAgICBmaWVsZC5pbm5lckhUTUwgPSBnYW1lU2F2ZS5maWVsZDtcbiAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgICBlbXB0eUNhcmROdW1iZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgMTAwMCk7XG4gIGlzTG9hZGVkR2FtZSA9IHRydWU7XG59XG5cbi8vIFN0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcbmNvbnN0IGJhc2UgPSA2MDtcbmxldCBjbG9ja3RpbWVyO1xubGV0IGRhdGVPYmo7XG5sZXQgZG07XG5sZXQgZHM7XG5sZXQgcmVhZG91dCA9ICcnO1xubGV0IGggPSAxO1xubGV0IG0gPSAxO1xubGV0IHRtID0gMTtcbmxldCBzID0gMDtcbmxldCB0cyA9IDA7XG5sZXQgbXMgPSAwO1xubGV0IGluaXQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2goKSB7XG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcbiAgaCA9IDE7XG4gIG0gPSAxO1xuICB0bSA9IDE7XG4gIHMgPSAwO1xuICB0cyA9IDA7XG4gIG1zID0gMDtcbiAgaW5pdCA9IDA7XG4gIHJlYWRvdXQgPSAnMDA6MDAnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJykudmFsdWUgPSByZWFkb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wd2F0Y2goKSB7XG4gIGxldCBjZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG4gIGxldCB0ID0gKGNkYXRlT2JqLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAtIChzICogMTAwMCk7XG4gIGlmICh0ID4gOTk5KSB7XG4gICAgcysrO1xuICB9XG4gIGlmIChzID49IChtICogYmFzZSkpIHtcbiAgICB0cyA9IDA7XG4gICAgbSsrO1xuICB9IGVsc2Uge1xuICAgIHRzID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIHMpO1xuICAgIGlmICh0cyA+PSBiYXNlKSB7XG4gICAgICB0cyA9IHRzIC0gKChtIC0gMSkgKiBiYXNlKTtcbiAgICB9XG4gIH1cbiAgaWYgKG0gPiAoaCAqIGJhc2UpKSB7XG4gICAgdG0gPSAxO1xuICAgIGgrKztcbiAgfSBlbHNlIHtcbiAgICB0bSA9IHBhcnNlSW50KChtcyAvIDEwMCkgKyBtKTtcbiAgICBpZiAodG0gPj0gYmFzZSkge1xuICAgICAgdG0gPSB0bSAtICgoaCAtIDEpICogYmFzZSk7XG4gICAgfVxuICB9XG4gIGlmICh0cyA+IDApIHtcbiAgICBkcyA9IHRzO1xuICAgIGlmICh0cyA8IDEwKSB7XG4gICAgICBkcyA9ICcwJyArIHRzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkcyA9ICcwMCc7XG4gIH1cbiAgZG0gPSB0bSAtIDE7XG4gIGlmIChkbSA+IDApIHtcbiAgICBpZiAoZG0gPCAxMCkge1xuICAgICAgZG0gPSAnMCcgKyBkbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG0gPSAnMDAnO1xuICB9XG4gIHJlYWRvdXQgPSBkbSArICc6JyArIGRzO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJykudmFsdWUgPSByZWFkb3V0O1xuICBjbG9ja3RpbWVyID0gc2V0VGltZW91dChzdGFydFN0b3B3YXRjaCwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3AoKSB7XG4gIGlmIChpbml0ID09PSAwKSB7XG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoKTtcbiAgICBzdGFydFN0b3B3YXRjaCgpO1xuICAgIGluaXQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyU3RvcHdhdGNoKCk7XG4gICAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xuICAgIGluaXQgPSAwO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuXG4vLyBjcmVhdGUgdGhlIEhUTUxcbmV4cG9ydHMuZ2VuZXJhdGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAvLyBjcmVhdGluZyBmaWVsZFNlbGVjdG9yIGJsb2NrIGFuZCBpdHMgY29udGVudHNcbiAgY29uc3QgZmllbGRTZWxlY3RvckJsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdmaWVsZC1zZWxlY3Rvci1ibG9jaycpO1xuICBjb25zdCBmaWVsZFNlbGVjdG9yID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NlbGVjdCcsICdmaWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcbiAgY29uc3QgZmllbGRTZWxlY3RvckJ1dHRvbiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAnYnV0dG9uIGZpZWxkLXNlbGVjdG9yLWJsb2NrX19idXR0b24nLCAnQ29uZmlybSAmIFNodWZmbGUnKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChmaWVsZFNlbGVjdG9yQmxvY2spO1xuICBmaWVsZFNlbGVjdG9yQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdTZWxlY3QgZmllbGQgc2l6ZScpKTtcbiAgZmllbGRTZWxlY3RvckJsb2NrLmFwcGVuZChmaWVsZFNlbGVjdG9yKTtcbiAgZmllbGRTZWxlY3Rvci5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNHg0JywgJ3ZhbHVlJywgJzQ0JykpO1xuICBmaWVsZFNlbGVjdG9yLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc1eDQnLCAndmFsdWUnLCAnNTQnKSk7XG4gIGZpZWxkU2VsZWN0b3IuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzZ4NicsICd2YWx1ZScsICc2NicpKTtcbiAgZmllbGRTZWxlY3RvckJsb2NrLmFwcGVuZChmaWVsZFNlbGVjdG9yQnV0dG9uKTtcbiAgZmllbGRTZWxlY3RvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3Nvci5jaGFuZ2VGaWVsZFNpemUpO1xuXG4gIC8vIGNyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcbiAgY29uc3QgdGltZU50dXJuc0Jsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lLW4tdHVybnMtYmxvY2snKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lTnR1cm5zQmxvY2spO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdUaW1lJykpO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiBzdG9wd2F0Y2gnLCAnJywgJ3ZhbHVlJywgJzAwOjAwJywgJ2Rpc2FibGVkJywgJ3RydWUnKSk7XG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnc3Bhbl9ibHVycmVkJywgJ1R1cm5zJykpO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiB0dXJuc0NvdW50ZXInLCAnJywgJ3ZhbHVlJywgJzAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcblxuICAvLyBjcmVhdGluZyBnYW1lZmllbGRcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdnYW1lZmllbGQgZ2FtZWZpZWxkXzR4NCcpKTtcblxuICAvLyBjcmVhdGluZyBibG9jayB3aXRoIGluZm9ybWF0aW9uXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mby1ibG9jaycsICc8Yj5NZW1vcnkgR2FtZTwvYj4gPGJyPiBGbGlwIHR3byBjYXJkcy4gSWYgdGhlIGNhcmRzIGFyZSB0aGUgc2FtZSBvbiB0aGVpciBmYWNlIHNpZGUgLSB0aGV5IGRpc2FwcGVhci4gSWYgdGhleSBhcmUgZGlmZmVyZW50IC0geW91IGhhdmUgdG8gcGljayBhbm90aGVyIHBhaXIuIENsZWFyaW5nIHRoZSBmaWVsZCBpcyB0aGUgd2lubmluZyBjb25kaXRpb24gPGJyPiA8Yj5DbGljazwvYj4gb24gYW55IGNhcmQgdG8gc3RhcnQgcGxheWluZyA8YnI+IDxiPkNvbmZpcm0gJiBTaHVmZmxlPC9iPiAtIHNodWZmbGUgZmllbGQgb2Ygc2VsZWN0ZWQgc2l6ZScpKTtcblxuICAvLyBjcmVhdGluZyBiZXN0IHJlc3VsdHMgYmxvY2tcbiAgY29uc3QgbGVhZGVyYm9hcmRCbG9jayA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2snLCAnPGI+TGVhZGVyYm9hcmQ8L2I+Jyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobGVhZGVyYm9hcmRCbG9jayk7XG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVswXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTQ0JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj40eDQ8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVsxXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTU0JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj41eDQ8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVsyXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTY2JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj42eDY8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcblxuICAvLyBjcmVhdGluZyBzYXZlL2xvYWQgYmxvY2tcbiAgbGVhZGVyYm9hcmRCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdzYXZlTG9hZEJsb2NrJywgJ1N0YXRpc3RpY3MgYXJlIG5vdCByZWNvcmRlZCBmb3IgbG9hZGVkIGdhbWVzLCB0cmFpbiBpbiByZWFsIHRpbWUgdG8gY29ucXVlciBsZWFkZXJib2FyZCEgPGJyPicpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVMb2FkQmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIHNhdmVHYW1lQnV0dG9uJywgJ1NhdmUgR2FtZScpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVHYW1lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9jZXNzb3Iuc2F2ZUdhbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZUxvYWRCbG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2J1dHRvbiAgbG9hZEdhbWVCdXR0b24nLCAnTG9hZCBHYW1lJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZEdhbWVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9jZXNzb3IubG9hZEdhbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTYXZlJykpO1xuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9