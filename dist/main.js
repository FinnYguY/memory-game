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
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .noclick {\n    pointer-events: none; }\n  body .invisible {\n    opacity: 0;\n    transition: 0.3s; }\n  body .span_blurred {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gamefield {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n    padding: 6px;\n    margin: 10px;\n    border: 3px solid black;\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n    body .gamefield_4x4 {\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_5x4 {\n      grid-template-columns: repeat(5, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_6x6 {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: repeat(6, 1fr); }\n  body .button {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    transition: 0.1s;\n    outline: none; }\n    body .button:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n    body .button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .lineBreak {\n    width: 100%; }\n  body .saveLoadBlock {\n    font-size: 14px;\n    text-align: center; }\n  body .msg-wrapper {\n    display: flex;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(3px);\n    z-index: 10; }\n  body .msg-block {\n    position: absolute;\n    top: 0;\n    width: 300px;\n    margin: 20px;\n    border-radius: 20px;\n    background-image: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 9; }\n  body .msg-block p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msg-block__button {\n    display: flex;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n    body .msg-block__button:hover {\n      box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .msg-block__button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body ._hidden {\n    display: none; }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    transition: 0.2s; }\n    @media screen and (max-width: 460px) {\n      body .card {\n        width: 40px;\n        height: 65px; } }\n    body .card:hover {\n      filter: brightness(90%);\n      box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5); }\n    body .card:active {\n      filter: brightness(70%); }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .card_back {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    transform: rotateY(180deg); }\n  body .field-selector-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .field-selector-block__selector {\n    appearance: none;\n    cursor: pointer;\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%);\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    padding: 0 5px 0;\n    outline: none; }\n    body .field-selector-block__selector option {\n      background-color: #874d45; }\n    body .field-selector-block__selector:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .field-selector-block__selector:focus {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .time-n-turns-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-weight: bold;\n    width: 90%; }\n  body .time-n-turns-block__button {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .info-block {\n    text-align: center;\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 3px dashed white;\n    border-radius: 10px;\n    backdrop-filter: blur(1px); }\n    @media screen and (min-width: 1070px) {\n      body .info-block {\n        text-align: left;\n        position: absolute;\n        width: 300px;\n        margin-top: 0px;\n        left: 0px;\n        top: 0px;\n        border-left: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 20px;\n    width: 100%;\n    backdrop-filter: blur(1px);\n    border: 3px dashed white;\n    border-radius: 15px; }\n    @media screen and (min-width: 935px) {\n      body .leaderboard-block {\n        position: absolute;\n        flex-direction: column;\n        width: 240px;\n        margin-top: 0px;\n        right: 0px;\n        top: 0px;\n        border-right: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block__wrapper {\n    margin: 5px; }\n  body .wrapper__record {\n    margin: 5px 0;\n    padding: 5px 5px 10px;\n    width: 220px;\n    height: 20px;\n    border-radius: 15px;\n    text-align: center; }\n  body .size44 {\n    background: rgba(26, 83, 255, 0.2); }\n  body .size54 {\n    background: rgba(26, 83, 255, 0.4); }\n  body .size66 {\n    background: rgba(26, 83, 255, 0.6); }\n\n::-webkit-scrollbar {\n  width: 10px; }\n  ::-webkit-scrollbar-track {\n    background-color: #559FB4; }\n  ::-webkit-scrollbar-thumb {\n    background-color: #8B5149;\n    border-radius: 10px; }\n    ::-webkit-scrollbar-thumb:hover {\n      background-color: #7a4740; }\n    ::-webkit-scrollbar-thumb:active {\n      background-color: #6a3e37; }\n", ""]);
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
          turnsCounter.value ++;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovLy8uL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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SUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLGtCQUFrQixtQkFBTyxDQUFDLDBDQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cudHV0b3JpYWxjaGlwLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMS8wNi9CbHVlLVBhdHRlcm4uanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cXG4gIGJvZHkgLm5vY2xpY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgYm9keSAuaW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxcbiAgYm9keSAuc3Bhbl9ibHVycmVkIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDEwcHg7IH1cXG4gIGJvZHkgLmdhbWVmaWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDVweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCBibGFjazsgfVxcbiAgICBib2R5IC5nYW1lZmllbGRfNHg0IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7IH1cXG4gICAgYm9keSAuZ2FtZWZpZWxkXzV4NCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpOyB9XFxuICAgIGJvZHkgLmdhbWVmaWVsZF82eDYge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTsgfVxcbiAgYm9keSAuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiYTgxNzggMCUsICM4NzRkNDUgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDRweCA1cHggNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmJ1dHRvbjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgICBib2R5IC5idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NzRkNDUgMCUsICNiYTgxNzggMTAwJSk7IH1cXG4gIGJvZHkgLmxpbmVCcmVhayB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICBib2R5IC5zYXZlTG9hZEJsb2NrIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJvZHkgLm1zZy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gICAgei1pbmRleDogMTA7IH1cXG4gIGJvZHkgLm1zZy1ibG9jayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzlhZWRmOSAzNSUsICM1NzlkYmIgMTAwJSk7XFxuICAgIHotaW5kZXg6IDk7IH1cXG4gIGJvZHkgLm1zZy1ibG9jayBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgYm9keSAubXNnLWJsb2NrX19idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLm1zZy1ibG9ja19fYnV0dG9uOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAgIGJvZHkgLm1zZy1ibG9ja19fYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODc0ZDQ1IDAlLCAjYmE4MTc4IDEwMCUpOyB9XFxuICBib2R5IC5faGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgYm9keSAuY2FyZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2RkLzZkL2M4L2RkNmRjOGE2YjZkYjFiNmY0YjAxYmQxYmNjODkxNjIxLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA5Ny41cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxuICAgICAgYm9keSAuY2FyZCB7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGhlaWdodDogNjVweDsgfSB9XFxuICAgIGJvZHkgLmNhcmQ6aG92ZXIge1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gICAgYm9keSAuY2FyZDphY3RpdmUge1xcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpOyB9XFxuICBib2R5IC5jYXJkMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ1MDEwMiAwJSwgI2ZmMDA0MiA1MCUsICM0NTAxMDIgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMmYzNzk5IDAlLCAjMDJmNWZiIDUwJSwgIzJmMzc5OSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYTM1MDggMCUsICM0ZWYzNGYgNTAlLCAjMGEzNTA4IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2RiMThiNiAwJSwgI2ZmYzhmYyA1MCUsICNkYjE4YjYgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDEyN2FkIDAlLCAjZDU5YWVlIDUwJSwgIzQxMjdhZCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZjMDAgMCUsIHdoaXRlIDUwJSwgI2ZmZmMwMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzI4MWIgMCUsICM5YzY0MjkgNTAlLCAjMzMyODFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YxMjcxMSAwJSwgI2Y1YWYxOSA1MCUsICNmMTI3MTEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmU0MDVhIDAlLCAjZjdiNmJhIDUwJSwgI2ZlNDA1YSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDE1ZWY5IDAlLCAjZjg0NzZlIDUwJSwgIzQxNWVmOSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDExIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmM2YjcxIDAlLCAjY2ZjZmNmIDUwJSwgIzZjNmI3MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWYxYzJjIDAlLCAjOTI4ZGFiIDUwJSwgIzFmMWMyYyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjM3NGQwIDAlLCAjZDBlZGZmIDUwJSwgIzYzNzRkMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGMxMDNjIDAlLCAjMGMxOWRiIDUwJSwgIzBlMTM1MCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDAzYjRhIDUlLCAjZTBlNDhhIDUwJSwgIzQwM2I0YSA5NSUpOyB9XFxuICBib2R5IC5jYXJkMTYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZDk3NmMgMCUsICM5M2Y5YjkgNTAlLCAjMWQ5NzZjIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyNGZlNDEgMCUsICNmZGZjNDcgNTAlLCAjMjRmZTQxIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzAwMWIgMCUsICNmZjAwODQgNTAlLCAjMzMwMDFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkX2JhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG4gIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvciB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODc0ZDQ1IDAlLCAjYmE4MTc4IDEwMCUpO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAgNXB4IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yIG9wdGlvbiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg3NGQ0NTsgfVxcbiAgICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3I6aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3I6Zm9jdXMge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gIGJvZHkgLnRpbWUtbi10dXJucy1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICBib2R5IC50aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MXB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1hcmdpbjogN3B4IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICBib2R5IC5pbmZvLWJsb2NrIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNzBweCkge1xcbiAgICAgIGJvZHkgLmluZm8tYmxvY2sge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgIGxlZnQ6IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDsgfSB9XFxuICBib2R5IC5sZWFkZXJib2FyZC1ibG9jayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTM1cHgpIHtcXG4gICAgICBib2R5IC5sZWFkZXJib2FyZC1ibG9jayB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIGJvZHkgLmxlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyIHtcXG4gICAgbWFyZ2luOiA1cHg7IH1cXG4gIGJvZHkgLndyYXBwZXJfX3JlY29yZCB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggMTBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgYm9keSAuc2l6ZTQ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC4yKTsgfVxcbiAgYm9keSAuc2l6ZTU0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC40KTsgfVxcbiAgYm9keSAuc2l6ZTY2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC42KTsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7IH1cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU5RkI0OyB9XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNTE0OTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0NzQwOyB9XFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmEzZTM3OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBzaXplcyA9IHtcbiAgc2l6ZTQ0OiAnNDQnLFxuICBzaXplNTQ6ICc1NCcsXG4gIHNpemU2NjogJzY2Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XG4gIGdhbWVmaWVsZDQ0OiAnZ2FtZWZpZWxkXzR4NCcsXG4gIGdhbWVmaWVsZDU0OiAnZ2FtZWZpZWxkXzV4NCcsXG4gIGdhbWVmaWVsZDY2OiAnZ2FtZWZpZWxkXzZ4NicsXG59O1xuIiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcblxuY29uc3QgdmlldyA9IHJlcXVpcmUoJy5cXFxcdmlldy5qcycpO1xuXG5pbXBvcnQgJy5cXFxcc2Nzc1xcXFxzdHlsZXMuc2Nzcyc7XG5cbi8vIGFsbCByZXF1aXJlZCBvbmxvYWQgaW5pdGlhbGl6YXRpb25zXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBwcm9jZXNzb3IuYWRkQ2FyZHMoMTYpO1xuICBwcm9jZXNzb3Iuc2hvd0xlYWRlcmJvYXJkKCk7XG59XG5cbi8vIGNyZWF0ZSB0aGUgSFRNTFxudmlldy5nZW5lcmF0ZVZpZXcoKTtcblxud2luZG93Lm9ubG9hZCA9IGluaXRpYWxpemUoKTtcblxuLy8gY29uZmlndXJpbmcgdGhlIG11dGF0aW9uIG9ic2VydmVyIGZvciBkZWxlZ2F0aW9uIHRvIHdvcmsgcHJvcGVybHlcbmNvbnN0IGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuY29uc3QgY29uZmlnID0ge1xuICBjaGlsZExpc3Q6IHRydWUsXG59O1xuXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHByb2Nlc3Nvci5jYWxsYmFjayk7XG5vYnNlcnZlci5vYnNlcnZlKGZpZWxkLCBjb25maWcpO1xuIiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcblxuY2xhc3MgTWVzc2FnZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdtc2ctYmxvY2sgX2hpZGRlbicpO1xuXG4gICAgbGV0IHdyYXBwZXIgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ21zZy13cmFwcGVyIF9oaWRkZW4nKTtcbiAgICB3cmFwcGVyLmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHdyYXBwZXIpO1xuICB9XG5cbiAgc2hvdyh0ZXh0KSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGA8cD4gJHt0ZXh0fSA8L3A+YDtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctd3JhcHBlcicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnX2hpZGRlbicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfaGlkZGVuJyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy13cmFwcGVyJyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdfaGlkZGVuJyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19oaWRkZW4nKTtcbiAgfVxufVxuXG5jb25zdCB0ZXh0TXNnID0gbmV3IE1lc3NhZ2UoKTtcbmV4cG9ydCBkZWZhdWx0IHRleHRNc2c7XG4iLCJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuXFxcXGNvbnN0YW50cy5qcycpO1xuaW1wb3J0IHRleHRNc2cgZnJvbSAnLlxcXFxtZXNzYWdlLmpzJztcblxuLy8gY3JlYXRlIGh0bWwgZWxlbWVudCB3aXRoIGdpdmVuIGF0dHJpYnV0ZXNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sKHNlbGVjdG9yLCBjbGFzc05hbWUsIGlubmVyVGV4dCwgLi4ua2V5c1ZhbHVlcykge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxlY3Rvcik7XG4gIGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gZWxlbS5jbGFzc05hbWUgPSAnJyA6IGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpbm5lclRleHQgPT09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcbiAgaWYgKGtleXNWYWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaSAtIDFdLCBrZXlzVmFsdWVzW2ldKTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59XG5cbmxldCBjbGFzc0Fyckxlbmd0aCA9IDA7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZHMobnVtKSB7XG4gIGNvbnN0IGNsYXNzQXJyYXkgPSBbXTtcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJyk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxOTsgaSArPSAxKSB7XG4gICAgY2xhc3NBcnJheS5wdXNoKGBjYXJkJHtpfWAsIGBjYXJkJHtpfWApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Um5kSW50KG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgfVxuXG4gIGNsYXNzQXJyYXkubGVuZ3RoID0gbnVtO1xuICBjbGFzc0Fyckxlbmd0aCA9IGNsYXNzQXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NBcnJMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbSA9IGdldFJuZEludCgwLCBjbGFzc0FycmF5Lmxlbmd0aCk7XG4gICAgZmllbGQuYXBwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsIGBjYXJkICR7Y2xhc3NBcnJheVtyYW5kb21dfSBjYXJkX2JhY2tgKSk7XG4gICAgY2xhc3NBcnJheS5zcGxpY2UocmFuZG9tLCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcFR1cm5zKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybnNDb3VudGVyJykudmFsdWUgPSAnMCc7XG59XG5cbi8vIHRvZ2dsaW5nIGNhcmQgZmFjZSB1cC9kb3duXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2FyZCguLi5jYXJkcykge1xuICBmb3IgKGNvbnN0IGNhcmQgb2YgY2FyZHMpIHtcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfYmFjaycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCdXR0b24oc3R5bGUsIHRleHQsIGFjdGlvbikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykuYXBwZW5kKGNyZWF0ZUh0bWwoJ2J1dHRvbicsIGBtc2ctYmxvY2tfX2J1dHRvbiAke3N0eWxlfWAsIHRleHQpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c3R5bGV9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3Rpb24pO1xufVxuXG5sZXQgZW1wdHlDYXJkTnVtYmVyID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQ2FyZHMoY2FyZDEsIGNhcmQyKSB7XG4gIGlmIChjYXJkMS5jbGFzc0xpc3RbMV0gPT09IGNhcmQyLmNsYXNzTGlzdFsxXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYXJkMS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnLCAnbm9jbGljaycpOyB9LCAzMDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYXJkMi5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnLCAnbm9jbGljaycpOyB9LCAzMDApO1xuICAgIGVtcHR5Q2FyZE51bWJlciArPSAyO1xuICB9IGVsc2Uge1xuICAgIGNhcmQxLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKTtcbiAgICBjYXJkMi5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XG4gICAgc2V0VGltZW91dCh0b2dnbGVDYXJkLCA0MDAsIGNhcmQxLCBjYXJkMik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZpZWxkU2l6ZSgpIHtcbiAgbGV0IHNlbGVjdG9yO1xuICBsZXQgZmllbGQ7XG4gIGlzTG9hZGVkR2FtZSA9IGZhbHNlO1xuXG4gIGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xuICBmaWVsZC5yZW1vdmUoKTtcbiAgZmllbGQgPSBjcmVhdGVIdG1sKCdkaXYnLCAnZ2FtZWZpZWxkJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLW4tdHVybnMtYmxvY2snKS5hZnRlcihmaWVsZCk7XG4gIHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvcicpO1xuXG4gIGNsZWFyU3RvcHdhdGNoKCk7XG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcbiAgaW5pdCA9IDA7XG4gIHN0b3BUdXJucygpO1xuICBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xuICBlbXB0eUNhcmROdW1iZXIgPSAwO1xuICBmYWNlVXBDb3VudGVyID0gMDtcblxuICB0ZXh0TXNnLnNob3coJzxiPlNodWZmbGluZy4uLjwvYj4nKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGV4dE1zZy5oaWRlKCk7XG4gIH0sIDEwMDApO1xuXG4gIHN3aXRjaCAoc2VsZWN0b3IudmFsdWUpIHtcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNDQ6XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnN0YW50cy5zZWxlY3RvcnMuZ2FtZWZpZWxkNDQpO1xuICAgICAgYWRkQ2FyZHMoMTYpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTU0OlxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDU0KTtcbiAgICAgIGFkZENhcmRzKDIwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU2NjpcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoY29uc3RhbnRzLnNlbGVjdG9ycy5nYW1lZmllbGQ2Nik7XG4gICAgICBhZGRDYXJkcygzNik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG59XG5cbmxldCBmYWNlVXBDb3VudGVyID0gMDtcbmxldCBmYWNlVXBDYXJkMTtcbmxldCBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xubGV0IGlzTG9hZGVkR2FtZSA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBnYW1lZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJyk7XG4gIGNvbnN0IHN0b3B3YXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9wd2F0Y2gnKTtcbiAgY29uc3QgdHVybnNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm5zQ291bnRlcicpO1xuICBjb25zdCBmaWVsZFNpemVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcblxuICBnYW1lZmllbGQub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQnKSkgcmV0dXJuO1xuICAgIHRvZ2dsZUNhcmQodGFyZ2V0KTtcblxuICAgIGlmIChpc0ZpcnN0Q2xpY2spIHtcbiAgICAgIGlzRmlyc3RDbGljayA9IGZhbHNlO1xuICAgICAgc3RhcnRTdG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkX2JhY2snKSkge1xuICAgICAgZmFjZVVwQ291bnRlciArPSAxO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vY2xpY2snKTtcbiAgICAgIC8vIGlmIHR3byBjYXJkcyBhcmUgZmFjZWQgdXBcbiAgICAgIGlmIChmYWNlVXBDb3VudGVyID49IDIpIHtcbiAgICAgICAgZ2FtZWZpZWxkLmNsYXNzTGlzdC5hZGQoJ25vY2xpY2snKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGdhbWVmaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyl9LCAyMDApO1xuICAgICAgICBpZiAoIWlzTG9hZGVkR2FtZSkge1xuICAgICAgICAgIHR1cm5zQ291bnRlci52YWx1ZSArKztcbiAgICAgICAgfVxuICAgICAgICBjb21wYXJlQ2FyZHModGFyZ2V0LCBmYWNlVXBDYXJkMSk7XG5cbiAgICAgICAgaWYgKGVtcHR5Q2FyZE51bWJlciA9PT0gY2xhc3NBcnJMZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB0aW1lID0gc3RvcHdhdGNoLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHR1cm5zID0gdHVybnNDb3VudGVyLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGZpZWxkU2l6ZSA9IGZpZWxkU2l6ZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICB0dXJucyxcbiAgICAgICAgICAgIHNpemU6IGZpZWxkU2l6ZSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGlzTG9hZGVkR2FtZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHRNc2cuc2hvdygnPGI+V2VsbC4uLiA8YnI+IFlvdVxcJ2QgYmV0dGVyIHBsYXkgd2l0aG91dCBzYXZpbmcgYW5kIGxvYWRpbmcuLi4gPGJyPjwvYj4gU3RhdGlzdGljcyBhcmUgbm9yIHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXMnKTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdjbG9zZScsICdDbG9zZScsICgpID0+IHt0ZXh0TXNnLmhpZGUoKX0pO1xuICAgICAgICAgICAgICBhZGRCdXR0b24oJ3BsYXlBZ2FpbicsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2hhbmdlIEhUTUwgYW5kIGxvY2FsU3RvcmFnZSBpZiBuZXcgcmVzdWx0IGlzIGJldHRlclxuICAgICAgICAgIGlmIChpc0ZpcnN0QmV0dGVyKHJlc3VsdCwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocmVzdWx0LnNpemUpKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRleHRNc2cuc2hvdyhgPGI+Q29uZ3JhdHVsYXRpb25zISA8YnI+IE5ldyBSZWNvcmQhIDxicj48L2I+WW91IHBhaXJlZCBhbGwgdGhlIGNhcmRzIGluICR7dGltZX0gYW5kICR7dHVybnN9IHR1cm5zIDxicj5gKTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdjbG9zZScsICdDbG9zZScsICgpID0+IHt0ZXh0TXNnLmhpZGUoKX0pO1xuICAgICAgICAgICAgICBhZGRCdXR0b24oJ3BsYXlBZ2FpbicsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICBjaGFuZ2VMZWFkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0ZXh0TXNnLnNob3coYDxiPkdvb2QsIEJ1dCBZb3UgR290dGEgVHJ5IEhhcmRlciBUbyBCZWF0IFRoZSBSZWNvcmQhIDxicj4gPC9iPllvdSBwYWlyZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfSB0dXJucyA8YnI+YCk7XG4gICAgICAgICAgICAgIGFkZEJ1dHRvbignY2xvc2UnLCAnQ2xvc2UnLCAoKSA9PiB7dGV4dE1zZy5oaWRlKCl9KTtcbiAgICAgICAgICAgICAgYWRkQnV0dG9uKCdwbGF5QWdhaW4nLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaXNMb2FkZWRHYW1lKSB7XG4gICAgICAgICAgICBzdGFydFN0b3AoKTtcbiAgICAgICAgICAgIHN0b3BUdXJucygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgZmFjZVVwQ291bnRlciA9IDA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZhY2VVcENhcmQxID0gdGFyZ2V0O1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0QmV0dGVyKHJlY2VudCwgcHJldmlvdXMpIHtcbiAgY29uc3QgcmVjZW50VGltZSA9IE51bWJlcihyZWNlbnQudGltZS5yZXBsYWNlKCc6JywgJycpKTtcbiAgY29uc3QgcmVjZW50UmF0aW8gPSByZWNlbnRUaW1lICsgcmVjZW50LnR1cm5zO1xuXG4gIC8vIG1ha2UgcmVjZW50IGJldHRlciBpZiB0aGVyZSBpcyBubyBwcmV2aW91c1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlY2VudC5zaXplKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgY29uc3QgcHJldmlvdXNUaW1lID0gTnVtYmVyKEpTT04ucGFyc2UocHJldmlvdXMpLnRpbWUucmVwbGFjZSgnOicsICcnKSk7XG4gIGNvbnN0IHByZXZpb3VzUmF0aW8gPSBwcmV2aW91c1RpbWUgKyBKU09OLnBhcnNlKHByZXZpb3VzKS50dXJucztcblxuICAvLyBpZiBuZXcgcmVzdWx0IGlzIHdvcnNlIHRoYW4gc2F2ZWQgb25lXG4gIGlmIChyZWNlbnRSYXRpbyA+PSBwcmV2aW91c1JhdGlvKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvLyBpZiBuZXcgcmVzdWx0IGlzIGJldHRlciB0aGFuIHNhdmVkIG9uZVxuICByZXR1cm4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlc3VsdC5zaXplKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgc2l6ZSR7cmVzdWx0LnNpemV9YCkuaW5uZXJIVE1MID0gYDxiPlRpbWU6PC9iPiAke3Jlc3VsdC50aW1lfSwgPGI+VHVybnM6PC9iPiAke3Jlc3VsdC50dXJuc30gYDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocmVzdWx0LnNpemUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xlYWRlcmJvYXJkKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU0NCkpIHtcbiAgICBjb25zdCByZXMxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTQ0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMxLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMS50dXJuc30gYDtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpIHtcbiAgICBjb25zdCByZXMyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTU0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMyLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMi50dXJuc30gYDtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU2NikpIHtcbiAgICBjb25zdCByZXMzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTY2KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMzLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMy50dXJuc30gYDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUdhbWUoKSB7XG4gIGNvbnN0IHNhdmVGaWVsZFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJykudmFsdWU7XG4gIGNvbnN0IGN1cnJlbnRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKS5pbm5lckhUTUw7XG5cbiAgdGV4dE1zZy5zaG93KCc8Yj5TYXZpbmcuLi48L2I+Jyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRleHRNc2cuaGlkZSgpO1xuICB9LCAxMDAwKTtcblxuICBjbGVhclN0b3B3YXRjaCgpO1xuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gIGluaXQgPSAwO1xuICBzdG9wVHVybnMoKTtcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcbiAgZW1wdHlDYXJkTnVtYmVyID0gMDtcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgZW1wdHlDYXJkTnVtYmVyICs9IDE7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzYXZlZEdhbWUgPSB7XG4gICAgc2l6ZTogc2F2ZUZpZWxkU2l6ZSxcbiAgICBmaWVsZDogY3VycmVudEZpZWxkLFxuICB9O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU2F2ZScsIEpTT04uc3RyaW5naWZ5KHNhdmVkR2FtZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdhbWUoc2F2ZSkge1xuICBpZiAoIXNhdmUpIHtcbiAgICB0ZXh0TXNnLnNob3coJzxiPk5vIHNhdmVkIGdhbWVzIGZvdW5kIDooPC9iPicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGV4dE1zZy5oaWRlKCk7XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZ2FtZVNhdmUgPSBKU09OLnBhcnNlKHNhdmUpO1xuICBjb25zdCBmaWVsZFNpemVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcblxuICBmaWVsZFNpemVTZWxlY3Rvci52YWx1ZSA9IGdhbWVTYXZlLnNpemU7XG4gIGNoYW5nZUZpZWxkU2l6ZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykuaW5uZXJIVE1MID0gJzxwPjxiPkxvYWRpbmcuLi48L2I+PC9wPic7XG5cbiAgLy8gbG9hZGluZyBzYXZlZCBmaWVsZFxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKTtcbiAgICBmaWVsZC5pbm5lckhUTUwgPSBnYW1lU2F2ZS5maWVsZDtcbiAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgICBlbXB0eUNhcmROdW1iZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgMTAwMCk7XG4gIGlzTG9hZGVkR2FtZSA9IHRydWU7XG59XG5cbi8vIFN0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcbmNvbnN0IGJhc2UgPSA2MDtcbmxldCBjbG9ja3RpbWVyO1xubGV0IGRhdGVPYmo7XG5sZXQgZG07XG5sZXQgZHM7XG5sZXQgcmVhZG91dCA9ICcnO1xubGV0IGggPSAxO1xubGV0IG0gPSAxO1xubGV0IHRtID0gMTtcbmxldCBzID0gMDtcbmxldCB0cyA9IDA7XG5sZXQgbXMgPSAwO1xubGV0IGluaXQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2goKSB7XG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcbiAgaCA9IDE7XG4gIG0gPSAxO1xuICB0bSA9IDE7XG4gIHMgPSAwO1xuICB0cyA9IDA7XG4gIG1zID0gMDtcbiAgaW5pdCA9IDA7XG4gIHJlYWRvdXQgPSAnMDA6MDAnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJykudmFsdWUgPSByZWFkb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wd2F0Y2goKSB7XG4gIGxldCBjZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG4gIGxldCB0ID0gKGNkYXRlT2JqLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAtIChzICogMTAwMCk7XG4gIGlmICh0ID4gOTk5KSB7XG4gICAgcysrO1xuICB9XG4gIGlmIChzID49IChtICogYmFzZSkpIHtcbiAgICB0cyA9IDA7XG4gICAgbSsrO1xuICB9IGVsc2Uge1xuICAgIHRzID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIHMpO1xuICAgIGlmICh0cyA+PSBiYXNlKSB7XG4gICAgICB0cyA9IHRzIC0gKChtIC0gMSkgKiBiYXNlKTtcbiAgICB9XG4gIH1cbiAgaWYgKG0gPiAoaCAqIGJhc2UpKSB7XG4gICAgdG0gPSAxO1xuICAgIGgrKztcbiAgfSBlbHNlIHtcbiAgICB0bSA9IHBhcnNlSW50KChtcyAvIDEwMCkgKyBtKTtcbiAgICBpZiAodG0gPj0gYmFzZSkge1xuICAgICAgdG0gPSB0bSAtICgoaCAtIDEpICogYmFzZSk7XG4gICAgfVxuICB9XG4gIGlmICh0cyA+IDApIHtcbiAgICBkcyA9IHRzO1xuICAgIGlmICh0cyA8IDEwKSB7XG4gICAgICBkcyA9ICcwJyArIHRzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkcyA9ICcwMCc7XG4gIH1cbiAgZG0gPSB0bSAtIDE7XG4gIGlmIChkbSA+IDApIHtcbiAgICBpZiAoZG0gPCAxMCkge1xuICAgICAgZG0gPSAnMCcgKyBkbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZG0gPSAnMDAnO1xuICB9XG4gIHJlYWRvdXQgPSBkbSArICc6JyArIGRzO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJykudmFsdWUgPSByZWFkb3V0O1xuICBjbG9ja3RpbWVyID0gc2V0VGltZW91dChzdGFydFN0b3B3YXRjaCwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3AoKSB7XG4gIGlmIChpbml0ID09PSAwKSB7XG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcbiAgICBkYXRlT2JqID0gbmV3IERhdGUoKTtcbiAgICBzdGFydFN0b3B3YXRjaCgpO1xuICAgIGluaXQgPSAxO1xuICB9IGVsc2Uge1xuICAgIGNsZWFyU3RvcHdhdGNoKCk7XG4gICAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xuICAgIGluaXQgPSAwO1xuICB9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJjb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuXG4vLyBjcmVhdGUgdGhlIEhUTUxcbmV4cG9ydHMuZ2VuZXJhdGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAvLyBjcmVhdGluZyBmaWVsZFNlbGVjdG9yIGJsb2NrIGFuZCBpdHMgY29udGVudHNcbiAgY29uc3QgZmllbGRTZWxlY3RvckJsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdmaWVsZC1zZWxlY3Rvci1ibG9jaycpO1xuICBjb25zdCBmaWVsZFNlbGVjdG9yID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NlbGVjdCcsICdmaWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcbiAgY29uc3QgZmllbGRTZWxlY3RvckJ1dHRvbiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAnYnV0dG9uIGZpZWxkLXNlbGVjdG9yLWJsb2NrX19idXR0b24nLCAnQ29uZmlybSAmIFNodWZmbGUnKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChmaWVsZFNlbGVjdG9yQmxvY2spO1xuICBmaWVsZFNlbGVjdG9yQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdTZWxlY3QgZmllbGQgc2l6ZScpKTtcbiAgZmllbGRTZWxlY3RvckJsb2NrLmFwcGVuZChmaWVsZFNlbGVjdG9yKTtcbiAgZmllbGRTZWxlY3Rvci5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNHg0JywgJ3ZhbHVlJywgJzQ0JykpO1xuICBmaWVsZFNlbGVjdG9yLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc1eDQnLCAndmFsdWUnLCAnNTQnKSk7XG4gIGZpZWxkU2VsZWN0b3IuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzZ4NicsICd2YWx1ZScsICc2NicpKTtcbiAgZmllbGRTZWxlY3RvckJsb2NrLmFwcGVuZChmaWVsZFNlbGVjdG9yQnV0dG9uKTtcbiAgZmllbGRTZWxlY3RvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3Nvci5jaGFuZ2VGaWVsZFNpemUpO1xuXG4gIC8vIGNyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcbiAgY29uc3QgdGltZU50dXJuc0Jsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lLW4tdHVybnMtYmxvY2snKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lTnR1cm5zQmxvY2spO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdUaW1lJykpO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiBzdG9wd2F0Y2gnLCAnJywgJ3ZhbHVlJywgJzAwOjAwJywgJ2Rpc2FibGVkJywgJ3RydWUnKSk7XG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnc3Bhbl9ibHVycmVkJywgJ1R1cm5zJykpO1xuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiB0dXJuc0NvdW50ZXInLCAnJywgJ3ZhbHVlJywgJzAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcblxuICAvLyBjcmVhdGluZyBnYW1lZmllbGRcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdnYW1lZmllbGQgZ2FtZWZpZWxkXzR4NCcpKTtcblxuICAvLyBjcmVhdGluZyBibG9jayB3aXRoIGluZm9ybWF0aW9uXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mby1ibG9jaycsICc8Yj5NZW1vcnkgR2FtZTwvYj4gPGJyPiBGbGlwIHR3byBjYXJkcy4gSWYgdGhlIGNhcmRzIGFyZSB0aGUgc2FtZSBvbiB0aGVpciBmYWNlIHNpZGUgLSB0aGV5IGRpc2FwcGVhci4gSWYgdGhleSBhcmUgZGlmZmVyZW50IC0geW91IGhhdmUgdG8gcGljayBhbm90aGVyIHBhaXIuIENsZWFyaW5nIHRoZSBmaWVsZCBpcyB0aGUgd2lubmluZyBjb25kaXRpb24gPGJyPiA8Yj5DbGljazwvYj4gb24gYW55IGNhcmQgdG8gc3RhcnQgcGxheWluZyA8YnI+IDxiPkNvbmZpcm0gJiBTaHVmZmxlPC9iPiAtIHNodWZmbGUgZmllbGQgb2Ygc2VsZWN0ZWQgc2l6ZScpKTtcblxuICAvLyBjcmVhdGluZyBiZXN0IHJlc3VsdHMgYmxvY2tcbiAgY29uc3QgbGVhZGVyYm9hcmRCbG9jayA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2snLCAnPGI+TGVhZGVyYm9hcmQ8L2I+Jyk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQobGVhZGVyYm9hcmRCbG9jayk7XG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVswXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTQ0JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj40eDQ8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVsxXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTU0JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj41eDQ8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKVsyXS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQgc2l6ZTY2JywgJycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj42eDY8L2I+JykpO1xuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcblxuICAvLyBjcmVhdGluZyBzYXZlL2xvYWQgYmxvY2tcbiAgbGVhZGVyYm9hcmRCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdzYXZlTG9hZEJsb2NrJywgJ1N0YXRpc3RpY3MgYXJlIG5vdCByZWNvcmRlZCBmb3IgbG9hZGVkIGdhbWVzLCB0cmFpbiBpbiByZWFsIHRpbWUgdG8gY29ucXVlciBsZWFkZXJib2FyZCEgPGJyPicpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVMb2FkQmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIHNhdmVHYW1lQnV0dG9uJywgJ1NhdmUgR2FtZScpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVHYW1lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9jZXNzb3Iuc2F2ZUdhbWUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZUxvYWRCbG9jaycpLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2J1dHRvbiAgbG9hZEdhbWVCdXR0b24nLCAnTG9hZCBHYW1lJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZEdhbWVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9jZXNzb3IubG9hZEdhbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTYXZlJykpO1xuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9