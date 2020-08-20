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
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .noclick {\n    pointer-events: none; }\n  body .invisible {\n    opacity: 0;\n    transition: 0.3s; }\n  body .span_blurred {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gamefield {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n    padding: 6px;\n    margin: 10px;\n    border: 3px solid black;\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n    body .gamefield_4x4 {\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_5x4 {\n      grid-template-columns: repeat(5, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gamefield_6x6 {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: repeat(6, 1fr); }\n  body .button {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    transition: 0.1s;\n    outline: none; }\n    body .button:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n    body .button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .lineBreak {\n    width: 100%; }\n  body .saveLoadBlock {\n    font-size: 14px;\n    text-align: center; }\n  body .msg-block {\n    position: absolute;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    background-image: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 1;\n    transition: 1s; }\n  body .msg-block p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msg-block__button {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n    body .msg-block__button:hover {\n      box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .msg-block__button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body ._hidden {\n    display: none; }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    transition: 0.2s; }\n    @media screen and (max-width: 460px) {\n      body .card {\n        width: 40px;\n        height: 65px; } }\n    body .card:hover {\n      filter: brightness(90%);\n      box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5); }\n    body .card:active {\n      filter: brightness(70%); }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .card_back {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    transform: rotateY(180deg); }\n  body .field-selector-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .field-selector-block__selector {\n    appearance: none;\n    cursor: pointer;\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%);\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    padding: 0 5px 0;\n    outline: none; }\n    body .field-selector-block__selector option {\n      background-color: #874d45; }\n    body .field-selector-block__selector:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .field-selector-block__selector:focus {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .time-n-turns-block {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-weight: bold;\n    width: 90%; }\n  body .time-n-turns-block__button {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .info-block {\n    text-align: center;\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 3px dashed white;\n    border-radius: 10px;\n    backdrop-filter: blur(1px); }\n    @media screen and (min-width: 1070px) {\n      body .info-block {\n        text-align: left;\n        position: absolute;\n        width: 300px;\n        margin-top: 0px;\n        left: 0px;\n        top: 0px;\n        border-left: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 20px;\n    width: 100%;\n    backdrop-filter: blur(1px);\n    border: 3px dashed white;\n    border-radius: 15px; }\n    @media screen and (min-width: 935px) {\n      body .leaderboard-block {\n        position: absolute;\n        flex-direction: column;\n        width: 240px;\n        margin-top: 0px;\n        right: 0px;\n        top: 0px;\n        border-right: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard-block__wrapper {\n    margin: 5px; }\n  body .wrapper__record {\n    margin: 5px 0;\n    padding: 5px 5px 10px;\n    width: 220px;\n    height: 20px;\n    border-radius: 15px;\n    text-align: center; }\n  body .size44 {\n    background: rgba(26, 83, 255, 0.2); }\n  body .size54 {\n    background: rgba(26, 83, 255, 0.4); }\n  body .size66 {\n    background: rgba(26, 83, 255, 0.6); }\n\n::-webkit-scrollbar {\n  width: 10px; }\n  ::-webkit-scrollbar-track {\n    background-color: #559FB4; }\n  ::-webkit-scrollbar-thumb {\n    background-color: #8B5149;\n    border-radius: 10px; }\n    ::-webkit-scrollbar-thumb:hover {\n      background-color: #7a4740; }\n    ::-webkit-scrollbar-thumb:active {\n      background-color: #6a3e37; }\n", ""]);
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

/***/ "./src/processor.js":
/*!**************************!*\
  !*** ./src/processor.js ***!
  \**************************/
/*! exports provided: createHtml, addCards, stopTurns, toggleCard, showMsg, showButtonMsg, compareCards, changeFieldSize, callback, isFirstBetter, changeLeadResult, showLeaderboard, saveGame, loadGame, clearStopwatch, startStopwatch, startStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCards", function() { return addCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTurns", function() { return stopTurns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCard", function() { return toggleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMsg", function() { return showMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showButtonMsg", function() { return showButtonMsg; });
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
const constants = __webpack_require__(/*! ./constants.js */ "./src/constants.js");

// create html element with given attributes
function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  className == undefined ? elem.className = '' : elem.className = className;
  innerText == undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
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
function addCards (num) {
  const classArray = [];
  const fieldSelector = document.querySelector('.field-selector-block__selector');
  const field = document.querySelector('.gamefield');

  for (let i = 1; i < 19; i += 1) {
    classArray.push(`card${i}`, `card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  switch (fieldSelector.value) {
    case constants.sizes.size44:
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
    case constants.sizes.size54:
      classArray.length = 20;
      classArrLength = classArray.length;
      break;
    case constants.sizes.size66:
      classArray.length = 36;
      classArrLength = classArray.length;
      break;
    default:
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
  }

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
  for (const card of cards){
    card.classList.toggle('card_back');
  }
}

function showMsg(text) {
  document.querySelector('.gamefield').prepend(createHtml('div', 'msg-block'));
  document.querySelector('.msg-block').prepend(createHtml('p', '', text));
}

function showButtonMsg(text, buttonText, action) {
  showMsg(text);
  document.querySelector('.msg-block').append(createHtml('button', 'msg-block__button', 'Play Again'));
  document.querySelector('.msg-block__button').addEventListener('click', action);
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

  showMsg('<b>Shuffling...</b>');
  setTimeout(() => {
    document.querySelector('.msg-block').remove();
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
const callback = function (mutationsList, observer) {
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

        if (emptyCardNumber == classArrLength) {
          let time = stopwatch.value;
          let turns = turnsCounter.value;
          let fieldSize = fieldSizeSelector.value;
          let result = {
            'time': time,
            'turns': turns,
            'size': fieldSize,
          }

          if (isLoadedGame) {
            setTimeout(function () {
              showButtonMsg(`<b>Well... <br> You'd better play without saving and loading... <br></b> Statistics are nor recorded for loaded games`, 'Play Again', changeFieldSize);
            }, 300);
          }

          //change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            setTimeout(function () {
              showButtonMsg(`<b>Congratulations! <br> New Record! <br></b>You paired all the cards in ${time} and ${turns} turns <br>`, 'Play Again', changeFieldSize);
            }, 300);
            changeLeadResult(result);
          }
          else {
            setTimeout(function () {
              showButtonMsg(`<b>Good, But You Gotta Try Harder To Beat The Record! <br> </b>You paired all the cards in ${time} and ${turns} turns <br>`, 'Play Again', changeFieldSize);
            }, 300);
          }

          startStop();
          stopTurns();
          emptyCardNumber = 0;
        }

        faceUpCounter = 0;
        return;
      }
      faceUpCard1 = target;
    }
  }
};

function isFirstBetter (recent, previous) {
  let recentTime = Number(recent.time.replace(':', ''));
  let recentRatio = recentTime + recent.turns;

  //make recent better if there is no previous
  if (!localStorage.getItem(recent.size)) {
    return 1;
  }

  let previousTime = Number(JSON.parse(previous).time.replace(':', ''));
  let previousRatio = previousTime + JSON.parse(previous).turns;

  //if new result is worse than saved one
  if (recentRatio >= previousRatio) {
    return 0;
  }

  //if new result is better than saved one
  return 1;
}

function changeLeadResult (result) {
  localStorage.removeItem(result.size);
  document.getElementsByClassName(`size${result.size}`).innerHTML = `<b>Time:</b> ${result.time}, <b>Turns:</b> ${result.turns} `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

function showLeaderboard () {
  if (localStorage.getItem(constants.sizes.size44)) {
    let res1 = JSON.parse(localStorage.getItem(constants.sizes.size44));
    document.querySelector('.size44').innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size54)) {
    let res2 = JSON.parse(localStorage.getItem(constants.sizes.size54));
    document.querySelector('.size54').innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size66)) {
    let res3 = JSON.parse(localStorage.getItem(constants.sizes.size66));
    document.querySelector('.size66').innerHTML = `<b>Time:</b> ${res3.time}, <b>Turns:</b> ${res3.turns} `;
  }
}

function saveGame () {
  let saveFieldSize = document.querySelector('.field-selector-block__selector').value;
  let currentField = document.querySelector('.gamefield').innerHTML;

  showMsg('<b>Saving...</b>');
  setTimeout(function () {
    document.querySelector('.msg-block').remove();
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

  let savedGame = {
    'size': saveFieldSize,
    'field': currentField,
  }

  localStorage.setItem('gameSave', JSON.stringify(savedGame));
}

function loadGame (save) {
  if (!save) {
    showMsg('<b>No saved games found :(</b>');
    setTimeout(function () {
      document.querySelector('.msg-block').remove();
    }, 1000);
    return;
  }

  let gameSave = JSON.parse(save);
  let fieldSizeSelector = document.querySelector('.field-selector-block__selector');

  fieldSizeSelector.value = gameSave.size;
  changeFieldSize();
  document.querySelector('.msg-block').innerHTML = '<p><b>Loading...</b></p>';

  //loading saved field
  setTimeout(function () {
    let field = document.querySelector('.gamefield');
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

//Stopwatch initiaization and functions
var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

function clearStopwatch () {
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

function startStopwatch () {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
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

function startStop () {
  if (init == 0) {
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

//create the HTML
exports.generateView = function () {

  //creating fieldSelector block and its contents
  let fieldSelectorBlock = processor.createHtml('div', 'field-selector-block');
  let fieldSelector = processor.createHtml('select', 'field-selector-block__selector');
  let fieldSelectorButton = processor.createHtml('button', 'button field-selector-block__button', 'Confirm & Shuffle');

  document.body.append(fieldSelectorBlock);
  fieldSelectorBlock.append(processor.createHtml('span', 'span_blurred', 'Select field size'));
  fieldSelectorBlock.append(fieldSelector);
  fieldSelector.append(processor.createHtml('option', '', '4x4', 'value', '44'));
  fieldSelector.append(processor.createHtml('option', '', '5x4', 'value', '54'));
  fieldSelector.append(processor.createHtml('option', '', '6x6', 'value', '66'));
  fieldSelectorBlock.append(fieldSelectorButton);
  fieldSelectorButton.addEventListener('click', processor.changeFieldSize);

  //creating timeNturnsBlock with buttons
  let timeNturnsBlock = processor.createHtml('div', 'time-n-turns-block');

  document.body.append(timeNturnsBlock);
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Time'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button stopwatch', '', 'value', '00:00', 'disabled', 'true'));
  timeNturnsBlock.append(processor.createHtml('span', 'span_blurred', 'Turns'));
  timeNturnsBlock.append(processor.createHtml('input', 'time-n-turns-block__button turnsCounter', '', 'value', '0', 'disabled', 'true'));

  //creating gamefield
  document.body.append(processor.createHtml('div', 'gamefield gamefield_4x4'));

  //creating block with information
  document.body.append(processor.createHtml('div', 'info-block', '<b>Memory Game</b> <br> Flip two cards. If the cards are the same on their face side - they disappear. If they are different - you have to pick another pair. Clearing the field is the winning condition <br> <b>Click</b> on any card to start playing <br> <b>Confirm & Shuffle</b> - shuffle field of selected size'));

  //creating best results block
  let leaderboardBlock = processor.createHtml('div', 'leaderboard-block', '<b>Leaderboard</b>');

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

  //creating save/load block
  leaderboardBlock.append(processor.createHtml('div', 'saveLoadBlock', 'Statistics are not recorded for loaded games, train in real time to conquer leaderboard! <br>'));
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  saveGameButton', 'Save Game'));
  document.querySelector('.saveGameButton').addEventListener('click', processor.saveGame);
  document.querySelector('.saveLoadBlock').append(processor.createHtml('button', 'button  loadGameButton', 'Load Game'));
  document.querySelector('.loadGameButton').addEventListener('click', () => {
    processor.loadGame(localStorage.getItem('gameSave'));
  });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovLy8uL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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QTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0WUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxnTkFBc0c7O0FBRXhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxrQkFBa0IsbUJBQU8sQ0FBQywwQ0FBaUI7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy50dXRvcmlhbGNoaXAuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDExLzA2L0JsdWUtUGF0dGVybi5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcbiAgYm9keSAubm9jbGljayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICBib2R5IC5pbnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XFxuICBib2R5IC5zcGFuX2JsdXJyZWQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDVweCA1cHggMTBweDsgfVxcbiAgYm9keSAuZ2FtZWZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IGJsYWNrOyB9XFxuICAgIGJvZHkgLmdhbWVmaWVsZF80eDQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsgfVxcbiAgICBib2R5IC5nYW1lZmllbGRfNXg0IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7IH1cXG4gICAgYm9keSAuZ2FtZWZpZWxkXzZ4NiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpOyB9XFxuICBib2R5IC5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogNHB4IDVweCA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICAgIGJvZHkgLmJ1dHRvbjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGJvZHkgLnNhdmVMb2FkQmxvY2sge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgYm9keSAubXNnLWJsb2NrIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICM5YWVkZjkgMzUlLCAjNTc5ZGJiIDEwMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiAxczsgfVxcbiAgYm9keSAubXNnLWJsb2NrIHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICBib2R5IC5tc2ctYmxvY2tfX2J1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmE4MTc4IDAlLCAjODc0ZDQ1IDEwMCUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAubXNnLWJsb2NrX19idXR0b246aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gICAgYm9keSAubXNnLWJsb2NrX19idXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NzRkNDUgMCUsICNiYTgxNzggMTAwJSk7IH1cXG4gIGJvZHkgLl9oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICBib2R5IC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDk3LjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcXG4gICAgICBib2R5IC5jYXJkIHtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2NXB4OyB9IH1cXG4gICAgYm9keSAuY2FyZDpob3ZlciB7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgICBib2R5IC5jYXJkOmFjdGl2ZSB7XFxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7IH1cXG4gIGJvZHkgLmNhcmQxIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDUwMTAyIDAlLCAjZmYwMDQyIDUwJSwgIzQ1MDEwMiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyZjM3OTkgMCUsICMwMmY1ZmIgNTAlLCAjMmYzNzk5IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBhMzUwOCAwJSwgIzRlZjM0ZiA1MCUsICMwYTM1MDggMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZGIxOGI2IDAlLCAjZmZjOGZjIDUwJSwgI2RiMThiNiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MTI3YWQgMCUsICNkNTlhZWUgNTAlLCAjNDEyN2FkIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZmMwMCAwJSwgd2hpdGUgNTAlLCAjZmZmYzAwIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMjgxYiAwJSwgIzljNjQyOSA1MCUsICMzMzI4MWIgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjEyNzExIDAlLCAjZjVhZjE5IDUwJSwgI2YxMjcxMSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZTQwNWEgMCUsICNmN2I2YmEgNTAlLCAjZmU0MDVhIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MTVlZjkgMCUsICNmODQ3NmUgNTAlLCAjNDE1ZWY5IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2YzZiNzEgMCUsICNjZmNmY2YgNTAlLCAjNmM2YjcxIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZjFjMmMgMCUsICM5MjhkYWIgNTAlLCAjMWYxYzJjIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM2Mzc0ZDAgMCUsICNkMGVkZmYgNTAlLCAjNjM3NGQwIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYzEwM2MgMCUsICMwYzE5ZGIgNTAlLCAjMGUxMzUwIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDNiNGEgNSUsICNlMGU0OGEgNTAlLCAjNDAzYjRhIDk1JSk7IH1cXG4gIGJvZHkgLmNhcmQxNiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFkOTc2YyAwJSwgIzkzZjliOSA1MCUsICMxZDk3NmMgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzI0ZmU0MSAwJSwgI2ZkZmM0NyA1MCUsICMyNGZlNDEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxOCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzMzMDAxYiAwJSwgI2ZmMDA4NCA1MCUsICMzMzAwMWIgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmRfYmFjayB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2RkLzZkL2M4L2RkNmRjOGE2YjZkYjFiNmY0YjAxYmQxYmNjODkxNjIxLmpwZ1xcXCIpO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfVxcbiAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NzRkNDUgMCUsICNiYTgxNzggMTAwJSk7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgcGFkZGluZzogMCA1cHggMDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3Igb3B0aW9uIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc0ZDQ1OyB9XFxuICAgIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3Rvcjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAgIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3Rvcjpmb2N1cyB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgYm9keSAudGltZS1uLXR1cm5zLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gIGJvZHkgLnRpbWUtbi10dXJucy1ibG9ja19fYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUxcHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWFyZ2luOiA3cHggNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gIGJvZHkgLmluZm8tYmxvY2sge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogM3B4IGRhc2hlZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7IH1cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA3MHB4KSB7XFxuICAgICAgYm9keSAuaW5mby1ibG9jayB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIGJvZHkgLmxlYWRlcmJvYXJkLWJsb2NrIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGJvcmRlcjogM3B4IGRhc2hlZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzVweCkge1xcbiAgICAgIGJvZHkgLmxlYWRlcmJvYXJkLWJsb2NrIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICByaWdodDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7IH0gfVxcbiAgYm9keSAubGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXIge1xcbiAgICBtYXJnaW46IDVweDsgfVxcbiAgYm9keSAud3JhcHBlcl9fcmVjb3JkIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgcGFkZGluZzogNXB4IDVweCAxMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBib2R5IC5zaXplNDQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCA4MywgMjU1LCAwLjIpOyB9XFxuICBib2R5IC5zaXplNTQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCA4MywgMjU1LCAwLjQpOyB9XFxuICBib2R5IC5zaXplNjYge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI2LCA4MywgMjU1LCAwLjYpOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDsgfVxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTlGQjQ7IH1cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI1MTQ5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YTQ3NDA7IH1cXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTNlMzc7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IHNpemVzID0ge1xuICBzaXplNDQ6ICc0NCcsXG4gIHNpemU1NDogJzU0JyxcbiAgc2l6ZTY2OiAnNjYnLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgZ2FtZWZpZWxkNDQ6ICdnYW1lZmllbGRfNHg0JyxcbiAgZ2FtZWZpZWxkNTQ6ICdnYW1lZmllbGRfNXg0JyxcbiAgZ2FtZWZpZWxkNjY6ICdnYW1lZmllbGRfNng2Jyxcbn07XG4iLCJjb25zdCBwcm9jZXNzb3IgPSByZXF1aXJlKCcuXFxcXHByb2Nlc3Nvci5qcycpO1xuXG5jb25zdCB2aWV3ID0gcmVxdWlyZSgnLlxcXFx2aWV3LmpzJyk7XG5cbmltcG9ydCAnLlxcXFxzY3NzXFxcXHN0eWxlcy5zY3NzJztcblxuLy8gYWxsIHJlcXVpcmVkIG9ubG9hZCBpbml0aWFsaXphdGlvbnNcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIHByb2Nlc3Nvci5hZGRDYXJkcygxNik7XG4gIHByb2Nlc3Nvci5zaG93TGVhZGVyYm9hcmQoKTtcbn1cblxuLy8gY3JlYXRlIHRoZSBIVE1MXG52aWV3LmdlbmVyYXRlVmlldygpO1xuXG53aW5kb3cub25sb2FkID0gaW5pdGlhbGl6ZSgpO1xuXG4vLyBjb25maWd1cmluZyB0aGUgbXV0YXRpb24gb2JzZXJ2ZXIgZm9yIGRlbGVnYXRpb24gdG8gd29yayBwcm9wZXJseVxuY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGNoaWxkTGlzdDogdHJ1ZSxcbn07XG5cbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc29yLmNhbGxiYWNrKTtcbm9ic2VydmVyLm9ic2VydmUoZmllbGQsIGNvbmZpZyk7XG4iLCJjb25zdCBjb25zdGFudHMgPSByZXF1aXJlKCcuXFxcXGNvbnN0YW50cy5qcycpO1xuXG4vLyBjcmVhdGUgaHRtbCBlbGVtZW50IHdpdGggZ2l2ZW4gYXR0cmlidXRlc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWwoc2VsZWN0b3IsIGNsYXNzTmFtZSwgaW5uZXJUZXh0LCAuLi5rZXlzVmFsdWVzKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHNlbGVjdG9yKTtcbiAgY2xhc3NOYW1lID09IHVuZGVmaW5lZCA/IGVsZW0uY2xhc3NOYW1lID0gJycgOiBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaW5uZXJUZXh0ID09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcbiAgaWYgKGtleXNWYWx1ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgbGV0IGkgPSAxO1xuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaSAtIDFdLCBrZXlzVmFsdWVzW2ldKTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59XG5cbmxldCBjbGFzc0Fyckxlbmd0aCA9IDA7XG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZHMgKG51bSkge1xuICBjb25zdCBjbGFzc0FycmF5ID0gW107XG4gIGNvbnN0IGZpZWxkU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJyk7XG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTk7IGkgKz0gMSkge1xuICAgIGNsYXNzQXJyYXkucHVzaChgY2FyZCR7aX1gLCBgY2FyZCR7aX1gKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFJuZEludChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cblxuICBzd2l0Y2ggKGZpZWxkU2VsZWN0b3IudmFsdWUpIHtcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNDQ6XG4gICAgICBjbGFzc0FycmF5Lmxlbmd0aCA9IDE2O1xuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU1NDpcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMjA7XG4gICAgICBjbGFzc0Fyckxlbmd0aCA9IGNsYXNzQXJyYXkubGVuZ3RoO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTY2OlxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAzNjtcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAxNjtcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NBcnJMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbSA9IGdldFJuZEludCgwLCBjbGFzc0FycmF5Lmxlbmd0aCk7XG4gICAgZmllbGQuYXBwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsIGBjYXJkICR7Y2xhc3NBcnJheVtyYW5kb21dfSBjYXJkX2JhY2tgKSk7XG4gICAgY2xhc3NBcnJheS5zcGxpY2UocmFuZG9tLCAxKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcFR1cm5zKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybnNDb3VudGVyJykudmFsdWUgPSAnMCc7XG59XG5cbi8vIHRvZ2dsaW5nIGNhcmQgZmFjZSB1cC9kb3duXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2FyZCguLi5jYXJkcykge1xuICBmb3IgKGNvbnN0IGNhcmQgb2YgY2FyZHMpe1xuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZF9iYWNrJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNc2codGV4dCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJykucHJlcGVuZChjcmVhdGVIdG1sKCdkaXYnLCAnbXNnLWJsb2NrJykpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykucHJlcGVuZChjcmVhdGVIdG1sKCdwJywgJycsIHRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdXR0b25Nc2codGV4dCwgYnV0dG9uVGV4dCwgYWN0aW9uKSB7XG4gIHNob3dNc2codGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5hcHBlbmQoY3JlYXRlSHRtbCgnYnV0dG9uJywgJ21zZy1ibG9ja19fYnV0dG9uJywgJ1BsYXkgQWdhaW4nKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2tfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aW9uKTtcbn1cblxubGV0IGVtcHR5Q2FyZE51bWJlciA9IDA7XG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUNhcmRzKGNhcmQxLCBjYXJkMikge1xuICBpZiAoY2FyZDEuY2xhc3NMaXN0WzFdID09PSBjYXJkMi5jbGFzc0xpc3RbMV0pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FyZDEuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTsgfSwgMzAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FyZDIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTsgfSwgMzAwKTtcbiAgICBlbXB0eUNhcmROdW1iZXIgKz0gMjtcbiAgfSBlbHNlIHtcbiAgICBjYXJkMS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XG4gICAgY2FyZDIuY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpO1xuICAgIHNldFRpbWVvdXQodG9nZ2xlQ2FyZCwgNDAwLCBjYXJkMSwgY2FyZDIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWVsZFNpemUoKSB7XG4gIGxldCBzZWxlY3RvcjtcbiAgbGV0IGZpZWxkO1xuICBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcblxuICBmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKTtcbiAgZmllbGQucmVtb3ZlKCk7XG4gIGZpZWxkID0gY3JlYXRlSHRtbCgnZGl2JywgJ2dhbWVmaWVsZCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1uLXR1cm5zLWJsb2NrJykuYWZ0ZXIoZmllbGQpO1xuICBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcblxuICBjbGVhclN0b3B3YXRjaCgpO1xuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gIGluaXQgPSAwO1xuICBzdG9wVHVybnMoKTtcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcbiAgZW1wdHlDYXJkTnVtYmVyID0gMDtcbiAgZmFjZVVwQ291bnRlciA9IDA7XG5cbiAgc2hvd01zZygnPGI+U2h1ZmZsaW5nLi4uPC9iPicpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykucmVtb3ZlKCk7XG4gIH0sIDEwMDApO1xuXG4gIHN3aXRjaCAoc2VsZWN0b3IudmFsdWUpIHtcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNDQ6XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnN0YW50cy5zZWxlY3RvcnMuZ2FtZWZpZWxkNDQpO1xuICAgICAgYWRkQ2FyZHMoMTYpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTU0OlxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDU0KTtcbiAgICAgIGFkZENhcmRzKDIwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU2NjpcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoY29uc3RhbnRzLnNlbGVjdG9ycy5nYW1lZmllbGQ2Nik7XG4gICAgICBhZGRDYXJkcygzNik7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG59XG5cbmxldCBmYWNlVXBDb3VudGVyID0gMDtcbmxldCBmYWNlVXBDYXJkMTtcbmxldCBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xubGV0IGlzTG9hZGVkR2FtZSA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG4gIGNvbnN0IGdhbWVmaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKTtcbiAgY29uc3Qgc3RvcHdhdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3B3YXRjaCcpO1xuICBjb25zdCB0dXJuc0NvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybnNDb3VudGVyJyk7XG4gIGNvbnN0IGZpZWxkU2l6ZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvcicpO1xuXG4gIGdhbWVmaWVsZC5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZCcpKSByZXR1cm47XG4gICAgdG9nZ2xlQ2FyZCh0YXJnZXQpO1xuXG4gICAgaWYgKGlzRmlyc3RDbGljaykge1xuICAgICAgaXNGaXJzdENsaWNrID0gZmFsc2U7XG4gICAgICBzdGFydFN0b3AoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRfYmFjaycpKSB7XG4gICAgICBmYWNlVXBDb3VudGVyICs9IDE7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbm9jbGljaycpO1xuICAgICAgLy8gaWYgdHdvIGNhcmRzIGFyZSBmYWNlZCB1cFxuICAgICAgaWYgKGZhY2VVcENvdW50ZXIgPj0gMikge1xuICAgICAgICBnYW1lZmllbGQuY2xhc3NMaXN0LmFkZCgnbm9jbGljaycpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgZ2FtZWZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKX0sIDIwMCk7XG4gICAgICAgIGlmICghaXNMb2FkZWRHYW1lKSB7XG4gICAgICAgICAgdHVybnNDb3VudGVyLnZhbHVlKys7XG4gICAgICAgIH1cbiAgICAgICAgY29tcGFyZUNhcmRzKHRhcmdldCwgZmFjZVVwQ2FyZDEpO1xuXG4gICAgICAgIGlmIChlbXB0eUNhcmROdW1iZXIgPT0gY2xhc3NBcnJMZW5ndGgpIHtcbiAgICAgICAgICBsZXQgdGltZSA9IHN0b3B3YXRjaC52YWx1ZTtcbiAgICAgICAgICBsZXQgdHVybnMgPSB0dXJuc0NvdW50ZXIudmFsdWU7XG4gICAgICAgICAgbGV0IGZpZWxkU2l6ZSA9IGZpZWxkU2l6ZVNlbGVjdG9yLnZhbHVlO1xuICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAndGltZSc6IHRpbWUsXG4gICAgICAgICAgICAndHVybnMnOiB0dXJucyxcbiAgICAgICAgICAgICdzaXplJzogZmllbGRTaXplLFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0xvYWRlZEdhbWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzaG93QnV0dG9uTXNnKGA8Yj5XZWxsLi4uIDxicj4gWW91J2QgYmV0dGVyIHBsYXkgd2l0aG91dCBzYXZpbmcgYW5kIGxvYWRpbmcuLi4gPGJyPjwvYj4gU3RhdGlzdGljcyBhcmUgbm9yIHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXNgLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vY2hhbmdlIEhUTUwgYW5kIGxvY2FsU3RvcmFnZSBpZiBuZXcgcmVzdWx0IGlzIGJldHRlclxuICAgICAgICAgIGlmIChpc0ZpcnN0QmV0dGVyKHJlc3VsdCwgbG9jYWxTdG9yYWdlLmdldEl0ZW0ocmVzdWx0LnNpemUpKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNob3dCdXR0b25Nc2coYDxiPkNvbmdyYXR1bGF0aW9ucyEgPGJyPiBOZXcgUmVjb3JkISA8YnI+PC9iPllvdSBwYWlyZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfSB0dXJucyA8YnI+YCwgJ1BsYXkgQWdhaW4nLCBjaGFuZ2VGaWVsZFNpemUpO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2hvd0J1dHRvbk1zZyhgPGI+R29vZCwgQnV0IFlvdSBHb3R0YSBUcnkgSGFyZGVyIFRvIEJlYXQgVGhlIFJlY29yZCEgPGJyPiA8L2I+WW91IHBhaXJlZCBhbGwgdGhlIGNhcmRzIGluICR7dGltZX0gYW5kICR7dHVybnN9IHR1cm5zIDxicj5gLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN0YXJ0U3RvcCgpO1xuICAgICAgICAgIHN0b3BUdXJucygpO1xuICAgICAgICAgIGVtcHR5Q2FyZE51bWJlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBmYWNlVXBDb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZmFjZVVwQ2FyZDEgPSB0YXJnZXQ7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJzdEJldHRlciAocmVjZW50LCBwcmV2aW91cykge1xuICBsZXQgcmVjZW50VGltZSA9IE51bWJlcihyZWNlbnQudGltZS5yZXBsYWNlKCc6JywgJycpKTtcbiAgbGV0IHJlY2VudFJhdGlvID0gcmVjZW50VGltZSArIHJlY2VudC50dXJucztcblxuICAvL21ha2UgcmVjZW50IGJldHRlciBpZiB0aGVyZSBpcyBubyBwcmV2aW91c1xuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlY2VudC5zaXplKSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgbGV0IHByZXZpb3VzVGltZSA9IE51bWJlcihKU09OLnBhcnNlKHByZXZpb3VzKS50aW1lLnJlcGxhY2UoJzonLCAnJykpO1xuICBsZXQgcHJldmlvdXNSYXRpbyA9IHByZXZpb3VzVGltZSArIEpTT04ucGFyc2UocHJldmlvdXMpLnR1cm5zO1xuXG4gIC8vaWYgbmV3IHJlc3VsdCBpcyB3b3JzZSB0aGFuIHNhdmVkIG9uZVxuICBpZiAocmVjZW50UmF0aW8gPj0gcHJldmlvdXNSYXRpbykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLy9pZiBuZXcgcmVzdWx0IGlzIGJldHRlciB0aGFuIHNhdmVkIG9uZVxuICByZXR1cm4gMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxlYWRSZXN1bHQgKHJlc3VsdCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShyZXN1bHQuc2l6ZSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHNpemUke3Jlc3VsdC5zaXplfWApLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXN1bHQudGltZX0sIDxiPlR1cm5zOjwvYj4gJHtyZXN1bHQudHVybnN9IGA7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHJlc3VsdC5zaXplLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMZWFkZXJib2FyZCAoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTQ0KSkge1xuICAgIGxldCByZXMxID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTQ0KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMxLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMS50dXJuc30gYDtcbiAgfVxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpIHtcbiAgICBsZXQgcmVzMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplNTQnKS5pbm5lckhUTUwgPSBgPGI+VGltZTo8L2I+ICR7cmVzMi50aW1lfSwgPGI+VHVybnM6PC9iPiAke3JlczIudHVybnN9IGA7XG4gIH1cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNjYpKSB7XG4gICAgbGV0IHJlczMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNjYpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l6ZTY2JykuaW5uZXJIVE1MID0gYDxiPlRpbWU6PC9iPiAke3JlczMudGltZX0sIDxiPlR1cm5zOjwvYj4gJHtyZXMzLnR1cm5zfSBgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlR2FtZSAoKSB7XG4gIGxldCBzYXZlRmllbGRTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvcicpLnZhbHVlO1xuICBsZXQgY3VycmVudEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpLmlubmVySFRNTDtcblxuICBzaG93TXNnKCc8Yj5TYXZpbmcuLi48L2I+Jyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5yZW1vdmUoKTtcbiAgfSwgMTAwMCk7XG5cbiAgY2xlYXJTdG9wd2F0Y2goKTtcbiAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xuICBpbml0ID0gMDtcbiAgc3RvcFR1cm5zKCk7XG4gIGlzRmlyc3RDbGljayA9IHRydWU7XG4gIGVtcHR5Q2FyZE51bWJlciA9IDA7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW52aXNpYmxlJykpIHtcbiAgICAgIGVtcHR5Q2FyZE51bWJlciArPSAxO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHNhdmVkR2FtZSA9IHtcbiAgICAnc2l6ZSc6IHNhdmVGaWVsZFNpemUsXG4gICAgJ2ZpZWxkJzogY3VycmVudEZpZWxkLFxuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTYXZlJywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRHYW1lKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2FtZSAoc2F2ZSkge1xuICBpZiAoIXNhdmUpIHtcbiAgICBzaG93TXNnKCc8Yj5ObyBzYXZlZCBnYW1lcyBmb3VuZCA6KDwvYj4nKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5yZW1vdmUoKTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZ2FtZVNhdmUgPSBKU09OLnBhcnNlKHNhdmUpO1xuICBsZXQgZmllbGRTaXplU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJyk7XG5cbiAgZmllbGRTaXplU2VsZWN0b3IudmFsdWUgPSBnYW1lU2F2ZS5zaXplO1xuICBjaGFuZ2VGaWVsZFNpemUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1ibG9jaycpLmlubmVySFRNTCA9ICc8cD48Yj5Mb2FkaW5nLi4uPC9iPjwvcD4nO1xuXG4gIC8vbG9hZGluZyBzYXZlZCBmaWVsZFxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJyk7XG4gICAgZmllbGQuaW5uZXJIVE1MID0gZ2FtZVNhdmUuZmllbGQ7XG4gICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcbiAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZTtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaW52aXNpYmxlJykpIHtcbiAgICAgICAgZW1wdHlDYXJkTnVtYmVyICs9IDE7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIDEwMDApO1xuICBpc0xvYWRlZEdhbWUgPSB0cnVlO1xufVxuXG4vL1N0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcbnZhciBiYXNlID0gNjA7XG52YXIgY2xvY2t0aW1lciwgZGF0ZU9iaiwgZGgsIGRtLCBkcywgbXM7XG52YXIgcmVhZG91dCA9ICcnO1xudmFyIGggPSAxLFxuICBtID0gMSxcbiAgdG0gPSAxLFxuICBzID0gMCxcbiAgdHMgPSAwLFxuICBtcyA9IDAsXG4gIGluaXQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2ggKCkge1xuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gIGggPSAxO1xuICBtID0gMTtcbiAgdG0gPSAxO1xuICBzID0gMDtcbiAgdHMgPSAwO1xuICBtcyA9IDA7XG4gIGluaXQgPSAwO1xuICByZWFkb3V0ID0gJzAwOjAwJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3B3YXRjaCcpLnZhbHVlID0gcmVhZG91dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcHdhdGNoICgpIHtcbiAgdmFyIGNkYXRlT2JqID0gbmV3IERhdGUoKTtcbiAgdmFyIHQgPSAoY2RhdGVPYmouZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC0gKHMgKiAxMDAwKTtcbiAgaWYgKHQgPiA5OTkpIHtcbiAgICBzKys7XG4gIH1cbiAgaWYgKHMgPj0gKG0gKiBiYXNlKSkge1xuICAgIHRzID0gMDtcbiAgICBtKys7XG4gIH0gZWxzZSB7XG4gICAgdHMgPSBwYXJzZUludCgobXMgLyAxMDApICsgcyk7XG4gICAgaWYgKHRzID49IGJhc2UpIHtcbiAgICAgIHRzID0gdHMgLSAoKG0gLSAxKSAqIGJhc2UpO1xuICAgIH1cbiAgfVxuICBpZiAobSA+IChoICogYmFzZSkpIHtcbiAgICB0bSA9IDE7XG4gICAgaCsrO1xuICB9IGVsc2Uge1xuICAgIHRtID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIG0pO1xuICAgIGlmICh0bSA+PSBiYXNlKSB7XG4gICAgICB0bSA9IHRtIC0gKChoIC0gMSkgKiBiYXNlKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRzID4gMCkge1xuICAgIGRzID0gdHM7XG4gICAgaWYgKHRzIDwgMTApIHtcbiAgICAgIGRzID0gJzAnICsgdHM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRzID0gJzAwJztcbiAgfVxuICBkbSA9IHRtIC0gMTtcbiAgaWYgKGRtID4gMCkge1xuICAgIGlmIChkbSA8IDEwKSB7XG4gICAgICBkbSA9ICcwJyArIGRtO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkbSA9ICcwMCc7XG4gIH1cbiAgcmVhZG91dCA9IGRtICsgJzonICsgZHM7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9wd2F0Y2gnKS52YWx1ZSA9IHJlYWRvdXQ7XG4gIGNsb2NrdGltZXIgPSBzZXRUaW1lb3V0KHN0YXJ0U3RvcHdhdGNoLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCAoKSB7XG4gIGlmIChpbml0ID09IDApIHtcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xuICAgIGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xuICAgIHN0YXJ0U3RvcHdhdGNoKCk7XG4gICAgaW5pdCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XG4gICAgaW5pdCA9IDA7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XHJcblxyXG4vL2NyZWF0ZSB0aGUgSFRNTFxyXG5leHBvcnRzLmdlbmVyYXRlVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgLy9jcmVhdGluZyBmaWVsZFNlbGVjdG9yIGJsb2NrIGFuZCBpdHMgY29udGVudHNcclxuICBsZXQgZmllbGRTZWxlY3RvckJsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICdmaWVsZC1zZWxlY3Rvci1ibG9jaycpO1xyXG4gIGxldCBmaWVsZFNlbGVjdG9yID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NlbGVjdCcsICdmaWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcclxuICBsZXQgZmllbGRTZWxlY3RvckJ1dHRvbiA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAnYnV0dG9uIGZpZWxkLXNlbGVjdG9yLWJsb2NrX19idXR0b24nLCAnQ29uZmlybSAmIFNodWZmbGUnKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZmllbGRTZWxlY3RvckJsb2NrKTtcclxuICBmaWVsZFNlbGVjdG9yQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdTZWxlY3QgZmllbGQgc2l6ZScpKTtcclxuICBmaWVsZFNlbGVjdG9yQmxvY2suYXBwZW5kKGZpZWxkU2VsZWN0b3IpO1xyXG4gIGZpZWxkU2VsZWN0b3IuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzR4NCcsICd2YWx1ZScsICc0NCcpKTtcclxuICBmaWVsZFNlbGVjdG9yLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc1eDQnLCAndmFsdWUnLCAnNTQnKSk7XHJcbiAgZmllbGRTZWxlY3Rvci5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNng2JywgJ3ZhbHVlJywgJzY2JykpO1xyXG4gIGZpZWxkU2VsZWN0b3JCbG9jay5hcHBlbmQoZmllbGRTZWxlY3RvckJ1dHRvbik7XHJcbiAgZmllbGRTZWxlY3RvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3Nvci5jaGFuZ2VGaWVsZFNpemUpO1xyXG5cclxuICAvL2NyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcclxuICBsZXQgdGltZU50dXJuc0Jsb2NrID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lLW4tdHVybnMtYmxvY2snKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGltZU50dXJuc0Jsb2NrKTtcclxuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdUaW1lJykpO1xyXG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2lucHV0JywgJ3RpbWUtbi10dXJucy1ibG9ja19fYnV0dG9uIHN0b3B3YXRjaCcsICcnLCAndmFsdWUnLCAnMDA6MDAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdzcGFuJywgJ3NwYW5fYmx1cnJlZCcsICdUdXJucycpKTtcclxuICB0aW1lTnR1cm5zQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lLW4tdHVybnMtYmxvY2tfX2J1dHRvbiB0dXJuc0NvdW50ZXInLCAnJywgJ3ZhbHVlJywgJzAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuXHJcbiAgLy9jcmVhdGluZyBnYW1lZmllbGRcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2dhbWVmaWVsZCBnYW1lZmllbGRfNHg0JykpO1xyXG5cclxuICAvL2NyZWF0aW5nIGJsb2NrIHdpdGggaW5mb3JtYXRpb25cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2luZm8tYmxvY2snLCAnPGI+TWVtb3J5IEdhbWU8L2I+IDxicj4gRmxpcCB0d28gY2FyZHMuIElmIHRoZSBjYXJkcyBhcmUgdGhlIHNhbWUgb24gdGhlaXIgZmFjZSBzaWRlIC0gdGhleSBkaXNhcHBlYXIuIElmIHRoZXkgYXJlIGRpZmZlcmVudCAtIHlvdSBoYXZlIHRvIHBpY2sgYW5vdGhlciBwYWlyLiBDbGVhcmluZyB0aGUgZmllbGQgaXMgdGhlIHdpbm5pbmcgY29uZGl0aW9uIDxicj4gPGI+Q2xpY2s8L2I+IG9uIGFueSBjYXJkIHRvIHN0YXJ0IHBsYXlpbmcgPGJyPiA8Yj5Db25maXJtICYgU2h1ZmZsZTwvYj4gLSBzaHVmZmxlIGZpZWxkIG9mIHNlbGVjdGVkIHNpemUnKSk7XHJcblxyXG4gIC8vY3JlYXRpbmcgYmVzdCByZXN1bHRzIGJsb2NrXHJcbiAgbGV0IGxlYWRlcmJvYXJkQmxvY2sgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrJywgJzxiPkxlYWRlcmJvYXJkPC9iPicpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChsZWFkZXJib2FyZEJsb2NrKTtcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWFkZXJib2FyZC1ibG9ja19fd3JhcHBlcicpWzBdLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCBzaXplNDQnLCAnJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplNDQnKS5iZWZvcmUocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQnLCAnPGI+NHg0PC9iPicpKTtcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWFkZXJib2FyZC1ibG9ja19fd3JhcHBlcicpWzFdLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCBzaXplNTQnLCAnJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplNTQnKS5iZWZvcmUocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQnLCAnPGI+NXg0PC9iPicpKTtcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWFkZXJib2FyZC1ibG9ja19fd3JhcHBlcicpWzJdLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCBzaXplNjYnLCAnJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXplNjYnKS5iZWZvcmUocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2RpdicsICd3cmFwcGVyX19yZWNvcmQnLCAnPGI+Nng2PC9iPicpKTtcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxuXHJcbiAgLy9jcmVhdGluZyBzYXZlL2xvYWQgYmxvY2tcclxuICBsZWFkZXJib2FyZEJsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3NhdmVMb2FkQmxvY2snLCAnU3RhdGlzdGljcyBhcmUgbm90IHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXMsIHRyYWluIGluIHJlYWwgdGltZSB0byBjb25xdWVyIGxlYWRlcmJvYXJkISA8YnI+JykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlTG9hZEJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAnYnV0dG9uICBzYXZlR2FtZUJ1dHRvbicsICdTYXZlIEdhbWUnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVHYW1lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9jZXNzb3Iuc2F2ZUdhbWUpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlTG9hZEJsb2NrJykuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdidXR0b24nLCAnYnV0dG9uICBsb2FkR2FtZUJ1dHRvbicsICdMb2FkIEdhbWUnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRHYW1lQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwcm9jZXNzb3IubG9hZEdhbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTYXZlJykpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=