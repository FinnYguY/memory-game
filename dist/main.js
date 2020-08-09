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
var sizes = {
  size44: '44',
  size54: '54',
  size66: '66',
};

var selectors = {
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


//all required onload initializations
function initialize () {
  processor.addCards(16);
  processor.showLeaderboard();
}

//create the HTML
view.generateView();

window.onload = initialize();

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
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

//create html element with given attributes
function createHtml (selector, className, innerText, ...keysValues) {
  let elem = document.createElement(selector);
  className == undefined ? elem.className = '' : elem.className = className;
  innerText == undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length != 0){
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i-1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
};

var classArrLength = 0;
function addCards (num) {
  let classArray = [];
  let fieldSelector = document.querySelector('.field-selector-block__selector');
  let field = document.querySelector('.gamefield');

  for(let i = 1; i < 19; i++) {
    classArray.push(`card${i}`,`card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
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
  }

  for(let i = 0; i < classArrLength; i++){
    let random = getRndInt(0, classArray.length);
    field.append(createHtml('div', `card ${classArray[random]} card_back`));
    classArray.splice(random, 1);
  }
}

function stopTurns () {
  document.querySelector('.turnsCounter').value = '0';
}

//toggling card face up/down
function toggleCard (...cards) {
  for(let card of cards){
    card.classList.toggle('card_back');
  }
}

function showMsg (text) {
  document.querySelector('.gamefield').prepend(createHtml('div', 'msg-block'));
  document.querySelector('.msg-block').prepend(createHtml('p', '', text));
};

function showButtonMsg (text, buttonText, action) {
  showMsg(text);
  document.querySelector('.msg-block').append(createHtml('button', 'msg-block__button', 'Play Again'));
  document.querySelector('.msg-block__button').addEventListener('click', action);
}

var emptyCardNumber = 0;
function compareCards (card1, card2) {
  if (card1.classList[1] == card2.classList[1]) {
    setTimeout(() => {card1.classList.add('invisible', 'noclick');}, 300);
    setTimeout(() => {card2.classList.add('invisible', 'noclick');}, 300);
    emptyCardNumber += 2;
  } else {
    card1.classList.remove('noclick');
    card2.classList.remove('noclick');
    setTimeout(toggleCard, 400, card1, card2);
  }
}

function changeFieldSize () {
  let selector, field, card;
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
  setTimeout(function () {
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
var isFirstClick = true;
let isLoadedGame = false;
const callback = function(mutationsList, observer) {
  let gamefield = document.querySelector('.gamefield');
  let stopwatch = document.querySelector('.stopwatch');
  let turnsCounter = document.querySelector('.turnsCounter');
  let fieldSizeSelector = document.querySelector('.field-selector-block__selector');

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
      //if two cards are faced up
      if (faceUpCounter >= 2) {
        gamefield.classList.add('noclick');
        setTimeout(() => {gamefield.classList.remove('noclick')}, 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovLy8uL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pZQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdOQUFzRzs7QUFFeEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLGtCQUFrQixtQkFBTyxDQUFDLDBDQUFpQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnR1dG9yaWFsY2hpcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTEvMDYvQmx1ZS1QYXR0ZXJuLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuICBib2R5IC5ub2NsaWNrIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIGJvZHkgLmludmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7IH1cXG4gIGJvZHkgLnNwYW5fYmx1cnJlZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIG1hcmdpbjogNXB4IDVweCAxMHB4OyB9XFxuICBib2R5IC5nYW1lZmllbGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggYmxhY2s7IH1cXG4gICAgYm9keSAuZ2FtZWZpZWxkXzR4NCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpOyB9XFxuICAgIGJvZHkgLmdhbWVmaWVsZF81eDQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsgfVxcbiAgICBib2R5IC5nYW1lZmllbGRfNng2IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7IH1cXG4gIGJvZHkgLmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjYmE4MTc4IDAlLCAjODc0ZDQ1IDEwMCUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA0cHggNXB4IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5idXR0b246aG92ZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gICAgYm9keSAuYnV0dG9uOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODc0ZDQ1IDAlLCAjYmE4MTc4IDEwMCUpOyB9XFxuICBib2R5IC5saW5lQnJlYWsge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgYm9keSAuc2F2ZUxvYWRCbG9jayB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBib2R5IC5tc2ctYmxvY2sge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzlhZWRmOSAzNSUsICM1NzlkYmIgMTAwJSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IDFzOyB9XFxuICBib2R5IC5tc2ctYmxvY2sgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIGJvZHkgLm1zZy1ibG9ja19fYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiYTgxNzggMCUsICM4NzRkNDUgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICBib2R5IC5tc2ctYmxvY2tfX2J1dHRvbjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgICBib2R5IC5tc2ctYmxvY2tfX2J1dHRvbjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTsgfVxcbiAgYm9keSAuX2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIGJvZHkgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTcuNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgIGJvZHkgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDY1cHg7IH0gfVxcbiAgICBib2R5IC5jYXJkOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICAgIGJvZHkgLmNhcmQ6YWN0aXZlIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTsgfVxcbiAgYm9keSAuY2FyZDEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0NTAxMDIgMCUsICNmZjAwNDIgNTAlLCAjNDUwMTAyIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzJmMzc5OSAwJSwgIzAyZjVmYiA1MCUsICMyZjM3OTkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGEzNTA4IDAlLCAjNGVmMzRmIDUwJSwgIzBhMzUwOCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkYjE4YjYgMCUsICNmZmM4ZmMgNTAlLCAjZGIxOGI2IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxMjdhZCAwJSwgI2Q1OWFlZSA1MCUsICM0MTI3YWQgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmYzAwIDAlLCB3aGl0ZSA1MCUsICNmZmZjMDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMyODFiIDAlLCAjOWM2NDI5IDUwJSwgIzMzMjgxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMTI3MTEgMCUsICNmNWFmMTkgNTAlLCAjZjEyNzExIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZlNDA1YSAwJSwgI2Y3YjZiYSA1MCUsICNmZTQwNWEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxNWVmOSAwJSwgI2Y4NDc2ZSA1MCUsICM0MTVlZjkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzZjNmI3MSAwJSwgI2NmY2ZjZiA1MCUsICM2YzZiNzEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFmMWMyYyAwJSwgIzkyOGRhYiA1MCUsICMxZjFjMmMgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzYzNzRkMCAwJSwgI2QwZWRmZiA1MCUsICM2Mzc0ZDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjMTAzYyAwJSwgIzBjMTlkYiA1MCUsICMwZTEzNTAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQwM2I0YSA1JSwgI2UwZTQ4YSA1MCUsICM0MDNiNGEgOTUlKTsgfVxcbiAgYm9keSAuY2FyZDE2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWQ5NzZjIDAlLCAjOTNmOWI5IDUwJSwgIzFkOTc2YyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjRmZTQxIDAlLCAjZmRmYzQ3IDUwJSwgIzI0ZmU0MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMwMDFiIDAlLCAjZmYwMDg0IDUwJSwgIzMzMDAxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZF9iYWNrIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICBib2R5IC5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3Ige1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nOiAwIDVweCAwO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLmZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvciBvcHRpb24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzRkNDU7IH1cXG4gICAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gICAgYm9keSAuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yOmZvY3VzIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICBib2R5IC50aW1lLW4tdHVybnMtYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgYm9keSAudGltZS1uLXR1cm5zLWJsb2NrX19idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTFweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXJnaW46IDdweCA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuaW5mby1ibG9jayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDcwcHgpIHtcXG4gICAgICBib2R5IC5pbmZvLWJsb2NrIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7IH0gfVxcbiAgYm9keSAubGVhZGVyYm9hcmQtYmxvY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzNXB4KSB7XFxuICAgICAgYm9keSAubGVhZGVyYm9hcmQtYmxvY2sge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxuICAgICAgICB0b3A6IDBweDtcXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDsgfSB9XFxuICBib2R5IC5sZWFkZXJib2FyZC1ibG9ja19fd3JhcHBlciB7XFxuICAgIG1hcmdpbjogNXB4OyB9XFxuICBib2R5IC53cmFwcGVyX19yZWNvcmQge1xcbiAgICBtYXJnaW46IDVweCAwO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDEwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJvZHkgLnNpemU0NCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuMik7IH1cXG4gIGJvZHkgLnNpemU1NCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuNCk7IH1cXG4gIGJvZHkgLnNpemU2NiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjYsIDgzLCAyNTUsIDAuNik7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4OyB9XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OUZCNDsgfVxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjUxNDk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdhNDc0MDsgfVxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZhM2UzNzsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgdmFyIHNpemVzID0ge1xyXG4gIHNpemU0NDogJzQ0JyxcclxuICBzaXplNTQ6ICc1NCcsXHJcbiAgc2l6ZTY2OiAnNjYnLFxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBzZWxlY3RvcnMgPSB7XHJcbiAgZ2FtZWZpZWxkNDQ6ICdnYW1lZmllbGRfNHg0JyxcclxuICBnYW1lZmllbGQ1NDogJ2dhbWVmaWVsZF81eDQnLFxyXG4gIGdhbWVmaWVsZDY2OiAnZ2FtZWZpZWxkXzZ4NicsXHJcbn07XHJcbiIsImNvbnN0IHByb2Nlc3NvciA9IHJlcXVpcmUoJy5cXFxccHJvY2Vzc29yLmpzJyk7XHJcbmNvbnN0IHZpZXcgPSByZXF1aXJlKCcuXFxcXHZpZXcuanMnKTtcclxuaW1wb3J0ICcuXFxcXHNjc3NcXFxcc3R5bGVzLnNjc3MnO1xyXG5cclxuLy9hbGwgcmVxdWlyZWQgb25sb2FkIGluaXRpYWxpemF0aW9uc1xyXG5mdW5jdGlvbiBpbml0aWFsaXplICgpIHtcclxuICBwcm9jZXNzb3IuYWRkQ2FyZHMoMTYpO1xyXG4gIHByb2Nlc3Nvci5zaG93TGVhZGVyYm9hcmQoKTtcclxufVxyXG5cclxuLy9jcmVhdGUgdGhlIEhUTUxcclxudmlldy5nZW5lcmF0ZVZpZXcoKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0aWFsaXplKCk7XHJcblxyXG4vL2NvbmZpZ3VyaW5nIHRoZSBtdXRhdGlvbiBvYnNlcnZlciBmb3IgZGVsZWdhdGlvbiB0byB3b3JrIHByb3Blcmx5XHJcbnZhciBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBjaGlsZExpc3Q6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIocHJvY2Vzc29yLmNhbGxiYWNrKTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShmaWVsZCwgY29uZmlnKTtcclxuIiwiY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLlxcXFxjb25zdGFudHMuanMnKTtcclxuXHJcbi8vY3JlYXRlIGh0bWwgZWxlbWVudCB3aXRoIGdpdmVuIGF0dHJpYnV0ZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0bWwgKHNlbGVjdG9yLCBjbGFzc05hbWUsIGlubmVyVGV4dCwgLi4ua2V5c1ZhbHVlcykge1xyXG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxlY3Rvcik7XHJcbiAgY2xhc3NOYW1lID09IHVuZGVmaW5lZCA/IGVsZW0uY2xhc3NOYW1lID0gJycgOiBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICBpbm5lclRleHQgPT0gdW5kZWZpbmVkID8gZWxlbS5pbm5lckhUTUwgPSAnJyA6IGVsZW0uaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gIGlmIChrZXlzVmFsdWVzLmxlbmd0aCAhPSAwKXtcclxuICAgIGxldCBpID0gMTtcclxuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5c1ZhbHVlc1tpLTFdLCBrZXlzVmFsdWVzW2ldKTtcclxuICAgICAgaSArPSAyO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZWxlbTtcclxufTtcclxuXHJcbnZhciBjbGFzc0Fyckxlbmd0aCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkcyAobnVtKSB7XHJcbiAgbGV0IGNsYXNzQXJyYXkgPSBbXTtcclxuICBsZXQgZmllbGRTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcclxuICBsZXQgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJyk7XHJcblxyXG4gIGZvcihsZXQgaSA9IDE7IGkgPCAxOTsgaSsrKSB7XHJcbiAgICBjbGFzc0FycmF5LnB1c2goYGNhcmQke2l9YCxgY2FyZCR7aX1gKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJuZEludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKGZpZWxkU2VsZWN0b3IudmFsdWUpIHtcclxuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU0NDpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAxNjtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNTQ6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMjA7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTY2OlxyXG4gICAgICBjbGFzc0FycmF5Lmxlbmd0aCA9IDM2O1xyXG4gICAgICBjbGFzc0Fyckxlbmd0aCA9IGNsYXNzQXJyYXkubGVuZ3RoO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBjbGFzc0Fyckxlbmd0aDsgaSsrKXtcclxuICAgIGxldCByYW5kb20gPSBnZXRSbmRJbnQoMCwgY2xhc3NBcnJheS5sZW5ndGgpO1xyXG4gICAgZmllbGQuYXBwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsIGBjYXJkICR7Y2xhc3NBcnJheVtyYW5kb21dfSBjYXJkX2JhY2tgKSk7XHJcbiAgICBjbGFzc0FycmF5LnNwbGljZShyYW5kb20sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BUdXJucyAoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm5zQ291bnRlcicpLnZhbHVlID0gJzAnO1xyXG59XHJcblxyXG4vL3RvZ2dsaW5nIGNhcmQgZmFjZSB1cC9kb3duXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVDYXJkICguLi5jYXJkcykge1xyXG4gIGZvcihsZXQgY2FyZCBvZiBjYXJkcyl7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRfYmFjaycpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNc2cgKHRleHQpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJykucHJlcGVuZChjcmVhdGVIdG1sKCdkaXYnLCAnbXNnLWJsb2NrJykpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5wcmVwZW5kKGNyZWF0ZUh0bWwoJ3AnLCAnJywgdGV4dCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdXR0b25Nc2cgKHRleHQsIGJ1dHRvblRleHQsIGFjdGlvbikge1xyXG4gIHNob3dNc2codGV4dCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1zZy1ibG9jaycpLmFwcGVuZChjcmVhdGVIdG1sKCdidXR0b24nLCAnbXNnLWJsb2NrX19idXR0b24nLCAnUGxheSBBZ2FpbicpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGlvbik7XHJcbn1cclxuXHJcbnZhciBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUNhcmRzIChjYXJkMSwgY2FyZDIpIHtcclxuICBpZiAoY2FyZDEuY2xhc3NMaXN0WzFdID09IGNhcmQyLmNsYXNzTGlzdFsxXSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7Y2FyZDEuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTt9LCAzMDApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7Y2FyZDIuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJywgJ25vY2xpY2snKTt9LCAzMDApO1xyXG4gICAgZW1wdHlDYXJkTnVtYmVyICs9IDI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNhcmQxLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKTtcclxuICAgIGNhcmQyLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKTtcclxuICAgIHNldFRpbWVvdXQodG9nZ2xlQ2FyZCwgNDAwLCBjYXJkMSwgY2FyZDIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZpZWxkU2l6ZSAoKSB7XHJcbiAgbGV0IHNlbGVjdG9yLCBmaWVsZCwgY2FyZDtcclxuICBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcclxuXHJcbiAgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWZpZWxkJyk7XHJcbiAgZmllbGQucmVtb3ZlKCk7XHJcbiAgZmllbGQgPSBjcmVhdGVIdG1sKCdkaXYnLCAnZ2FtZWZpZWxkJyk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUtbi10dXJucy1ibG9jaycpLmFmdGVyKGZpZWxkKTtcclxuICBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWVsZC1zZWxlY3Rvci1ibG9ja19fc2VsZWN0b3InKTtcclxuXHJcbiAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgaW5pdCA9IDA7XHJcbiAgc3RvcFR1cm5zKCk7XHJcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gIGZhY2VVcENvdW50ZXIgPSAwO1xyXG5cclxuICBzaG93TXNnKCc8Yj5TaHVmZmxpbmcuLi48L2I+Jyk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykucmVtb3ZlKCk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIHN3aXRjaCAoc2VsZWN0b3IudmFsdWUpIHtcclxuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU0NDpcclxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDQ0KTtcclxuICAgICAgYWRkQ2FyZHMoMTYpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU1NDpcclxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDU0KTtcclxuICAgICAgYWRkQ2FyZHMoMjApO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU2NjpcclxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVmaWVsZDY2KTtcclxuICAgICAgYWRkQ2FyZHMoMzYpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZmFjZVVwQ291bnRlciA9IDA7XHJcbmxldCBmYWNlVXBDYXJkMTtcclxudmFyIGlzRmlyc3RDbGljayA9IHRydWU7XHJcbmxldCBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcclxuZXhwb3J0IGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24obXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcclxuICBsZXQgZ2FtZWZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xyXG4gIGxldCBzdG9wd2F0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJyk7XHJcbiAgbGV0IHR1cm5zQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuc0NvdW50ZXInKTtcclxuICBsZXQgZmllbGRTaXplU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJyk7XHJcblxyXG4gIGdhbWVmaWVsZC5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQnKSkgcmV0dXJuO1xyXG4gICAgdG9nZ2xlQ2FyZCh0YXJnZXQpO1xyXG5cclxuICAgIGlmIChpc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgaXNGaXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICAgIHN0YXJ0U3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9iYWNrJykpIHtcclxuICAgICAgZmFjZVVwQ291bnRlciArPSAxO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbm9jbGljaycpO1xyXG4gICAgICAvL2lmIHR3byBjYXJkcyBhcmUgZmFjZWQgdXBcclxuICAgICAgaWYgKGZhY2VVcENvdW50ZXIgPj0gMikge1xyXG4gICAgICAgIGdhbWVmaWVsZC5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7Z2FtZWZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKX0sIDIwMCk7XHJcbiAgICAgICAgaWYgKCFpc0xvYWRlZEdhbWUpIHtcclxuICAgICAgICAgIHR1cm5zQ291bnRlci52YWx1ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wYXJlQ2FyZHModGFyZ2V0LCBmYWNlVXBDYXJkMSk7XHJcblxyXG4gICAgICAgIGlmIChlbXB0eUNhcmROdW1iZXIgPT0gY2xhc3NBcnJMZW5ndGgpIHtcclxuICAgICAgICAgIGxldCB0aW1lID0gc3RvcHdhdGNoLnZhbHVlO1xyXG4gICAgICAgICAgbGV0IHR1cm5zID0gdHVybnNDb3VudGVyLnZhbHVlO1xyXG4gICAgICAgICAgbGV0IGZpZWxkU2l6ZSA9IGZpZWxkU2l6ZVNlbGVjdG9yLnZhbHVlO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgJ3RpbWUnOiB0aW1lLFxyXG4gICAgICAgICAgICAndHVybnMnOiB0dXJucyxcclxuICAgICAgICAgICAgJ3NpemUnOiBmaWVsZFNpemUsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGlzTG9hZGVkR2FtZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBzaG93QnV0dG9uTXNnKGA8Yj5XZWxsLi4uIDxicj4gWW91J2QgYmV0dGVyIHBsYXkgd2l0aG91dCBzYXZpbmcgYW5kIGxvYWRpbmcuLi4gPGJyPjwvYj4gU3RhdGlzdGljcyBhcmUgbm9yIHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXNgLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9jaGFuZ2UgSFRNTCBhbmQgbG9jYWxTdG9yYWdlIGlmIG5ldyByZXN1bHQgaXMgYmV0dGVyXHJcbiAgICAgICAgICBpZiAoaXNGaXJzdEJldHRlcihyZXN1bHQsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlc3VsdC5zaXplKSkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgc2hvd0J1dHRvbk1zZyhgPGI+Q29uZ3JhdHVsYXRpb25zISA8YnI+IE5ldyBSZWNvcmQhIDxicj48L2I+WW91IHBhaXJlZCBhbGwgdGhlIGNhcmRzIGluICR7dGltZX0gYW5kICR7dHVybnN9IHR1cm5zIDxicj5gLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBzaG93QnV0dG9uTXNnKGA8Yj5Hb29kLCBCdXQgWW91IEdvdHRhIFRyeSBIYXJkZXIgVG8gQmVhdCBUaGUgUmVjb3JkISA8YnI+IDwvYj5Zb3UgcGFpcmVkIGFsbCB0aGUgY2FyZHMgaW4gJHt0aW1lfSBhbmQgJHt0dXJuc30gdHVybnMgPGJyPmAsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdGFydFN0b3AoKTtcclxuICAgICAgICAgIHN0b3BUdXJucygpO1xyXG4gICAgICAgICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZhY2VVcENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBmYWNlVXBDYXJkMSA9IHRhcmdldDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJzdEJldHRlciAocmVjZW50LCBwcmV2aW91cykge1xyXG4gIGxldCByZWNlbnRUaW1lID0gTnVtYmVyKHJlY2VudC50aW1lLnJlcGxhY2UoJzonLCAnJykpO1xyXG4gIGxldCByZWNlbnRSYXRpbyA9IHJlY2VudFRpbWUgKyByZWNlbnQudHVybnM7XHJcblxyXG4gIC8vbWFrZSByZWNlbnQgYmV0dGVyIGlmIHRoZXJlIGlzIG5vIHByZXZpb3VzXHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShyZWNlbnQuc2l6ZSkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgbGV0IHByZXZpb3VzVGltZSA9IE51bWJlcihKU09OLnBhcnNlKHByZXZpb3VzKS50aW1lLnJlcGxhY2UoJzonLCAnJykpO1xyXG4gIGxldCBwcmV2aW91c1JhdGlvID0gcHJldmlvdXNUaW1lICsgSlNPTi5wYXJzZShwcmV2aW91cykudHVybnM7XHJcblxyXG4gIC8vaWYgbmV3IHJlc3VsdCBpcyB3b3JzZSB0aGFuIHNhdmVkIG9uZVxyXG4gIGlmIChyZWNlbnRSYXRpbyA+PSBwcmV2aW91c1JhdGlvKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8vaWYgbmV3IHJlc3VsdCBpcyBiZXR0ZXIgdGhhbiBzYXZlZCBvbmVcclxuICByZXR1cm4gMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxlYWRSZXN1bHQgKHJlc3VsdCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlc3VsdC5zaXplKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBzaXplJHtyZXN1bHQuc2l6ZX1gKS5pbm5lckhUTUwgPSBgPGI+VGltZTo8L2I+ICR7cmVzdWx0LnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzdWx0LnR1cm5zfSBgO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHJlc3VsdC5zaXplLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMZWFkZXJib2FyZCAoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNDQpKSB7XHJcbiAgICBsZXQgcmVzMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU0NCkpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMxLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMS50dXJuc30gYDtcclxuICB9XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNTQpKSB7XHJcbiAgICBsZXQgcmVzMiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMyLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMi50dXJuc30gYDtcclxuICB9XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNjYpKSB7XHJcbiAgICBsZXQgcmVzMyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU2NikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMzLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMy50dXJuc30gYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlR2FtZSAoKSB7XHJcbiAgbGV0IHNhdmVGaWVsZFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJykudmFsdWU7XHJcbiAgbGV0IGN1cnJlbnRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lZmllbGQnKS5pbm5lckhUTUw7XHJcblxyXG4gIHNob3dNc2coJzxiPlNhdmluZy4uLjwvYj4nKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5yZW1vdmUoKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgaW5pdCA9IDA7XHJcbiAgc3RvcFR1cm5zKCk7XHJcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xyXG4gICAgICBlbXB0eUNhcmROdW1iZXIgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IHNhdmVkR2FtZSA9IHtcclxuICAgICdzaXplJzogc2F2ZUZpZWxkU2l6ZSxcclxuICAgICdmaWVsZCc6IGN1cnJlbnRGaWVsZCxcclxuICB9XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU2F2ZScsIEpTT04uc3RyaW5naWZ5KHNhdmVkR2FtZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdhbWUgKHNhdmUpIHtcclxuICBpZiAoIXNhdmUpIHtcclxuICAgIHNob3dNc2coJzxiPk5vIHNhdmVkIGdhbWVzIGZvdW5kIDooPC9iPicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tc2ctYmxvY2snKS5yZW1vdmUoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGdhbWVTYXZlID0gSlNPTi5wYXJzZShzYXZlKTtcclxuICBsZXQgZmllbGRTaXplU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmllbGQtc2VsZWN0b3ItYmxvY2tfX3NlbGVjdG9yJyk7XHJcblxyXG4gIGZpZWxkU2l6ZVNlbGVjdG9yLnZhbHVlID0gZ2FtZVNhdmUuc2l6ZTtcclxuICBjaGFuZ2VGaWVsZFNpemUoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXNnLWJsb2NrJykuaW5uZXJIVE1MID0gJzxwPjxiPkxvYWRpbmcuLi48L2I+PC9wPic7XHJcblxyXG4gIC8vbG9hZGluZyBzYXZlZCBmaWVsZFxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVmaWVsZCcpO1xyXG4gICAgZmllbGQuaW5uZXJIVE1MID0gZ2FtZVNhdmUuZmllbGQ7XHJcbiAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gICAgaXNGaXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xyXG4gICAgICAgIGVtcHR5Q2FyZE51bWJlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCAxMDAwKTtcclxuICBpc0xvYWRlZEdhbWUgPSB0cnVlO1xyXG59XHJcblxyXG4vL1N0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcclxudmFyIGJhc2UgPSA2MDtcclxudmFyIGNsb2NrdGltZXIsIGRhdGVPYmosIGRoLCBkbSwgZHMsIG1zO1xyXG52YXIgcmVhZG91dCA9ICcnO1xyXG52YXIgaCA9IDEsXHJcbiAgbSA9IDEsXHJcbiAgdG0gPSAxLFxyXG4gIHMgPSAwLFxyXG4gIHRzID0gMCxcclxuICBtcyA9IDAsXHJcbiAgaW5pdCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2ggKCkge1xyXG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcclxuICBoID0gMTtcclxuICBtID0gMTtcclxuICB0bSA9IDE7XHJcbiAgcyA9IDA7XHJcbiAgdHMgPSAwO1xyXG4gIG1zID0gMDtcclxuICBpbml0ID0gMDtcclxuICByZWFkb3V0ID0gJzAwOjAwJztcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RvcHdhdGNoJykudmFsdWUgPSByZWFkb3V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wd2F0Y2ggKCkge1xyXG4gIHZhciBjZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIHQgPSAoY2RhdGVPYmouZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC0gKHMgKiAxMDAwKTtcclxuICBpZiAodCA+IDk5OSkge1xyXG4gICAgcysrO1xyXG4gIH1cclxuICBpZiAocyA+PSAobSAqIGJhc2UpKSB7XHJcbiAgICB0cyA9IDA7XHJcbiAgICBtKys7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRzID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIHMpO1xyXG4gICAgaWYgKHRzID49IGJhc2UpIHtcclxuICAgICAgdHMgPSB0cyAtICgobSAtIDEpICogYmFzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChtID4gKGggKiBiYXNlKSkge1xyXG4gICAgdG0gPSAxO1xyXG4gICAgaCsrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0bSA9IHBhcnNlSW50KChtcyAvIDEwMCkgKyBtKTtcclxuICAgIGlmICh0bSA+PSBiYXNlKSB7XHJcbiAgICAgIHRtID0gdG0gLSAoKGggLSAxKSAqIGJhc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAodHMgPiAwKSB7XHJcbiAgICBkcyA9IHRzO1xyXG4gICAgaWYgKHRzIDwgMTApIHtcclxuICAgICAgZHMgPSAnMCcgKyB0cztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZHMgPSAnMDAnO1xyXG4gIH1cclxuICBkbSA9IHRtIC0gMTtcclxuICBpZiAoZG0gPiAwKSB7XHJcbiAgICBpZiAoZG0gPCAxMCkge1xyXG4gICAgICBkbSA9ICcwJyArIGRtO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkbSA9ICcwMCc7XHJcbiAgfVxyXG4gIHJlYWRvdXQgPSBkbSArICc6JyArIGRzO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdG9wd2F0Y2gnKS52YWx1ZSA9IHJlYWRvdXQ7XHJcbiAgY2xvY2t0aW1lciA9IHNldFRpbWVvdXQoc3RhcnRTdG9wd2F0Y2gsIDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wICgpIHtcclxuICBpZiAoaW5pdCA9PSAwKSB7XHJcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xyXG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBzdGFydFN0b3B3YXRjaCgpO1xyXG4gICAgaW5pdCA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgICBpbml0ID0gMDtcclxuICB9XHJcbn1cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiY29uc3QgcHJvY2Vzc29yID0gcmVxdWlyZSgnLlxcXFxwcm9jZXNzb3IuanMnKTtcclxuXHJcbi8vY3JlYXRlIHRoZSBIVE1MXHJcbmV4cG9ydHMuZ2VuZXJhdGVWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAvL2NyZWF0aW5nIGZpZWxkU2VsZWN0b3IgYmxvY2sgYW5kIGl0cyBjb250ZW50c1xyXG4gIGxldCBmaWVsZFNlbGVjdG9yQmxvY2sgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ2ZpZWxkLXNlbGVjdG9yLWJsb2NrJyk7XHJcbiAgbGV0IGZpZWxkU2VsZWN0b3IgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnc2VsZWN0JywgJ2ZpZWxkLXNlbGVjdG9yLWJsb2NrX19zZWxlY3RvcicpO1xyXG4gIGxldCBmaWVsZFNlbGVjdG9yQnV0dG9uID0gcHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gZmllbGQtc2VsZWN0b3ItYmxvY2tfX2J1dHRvbicsICdDb25maXJtICYgU2h1ZmZsZScpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChmaWVsZFNlbGVjdG9yQmxvY2spO1xyXG4gIGZpZWxkU2VsZWN0b3JCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnc3Bhbl9ibHVycmVkJywgJ1NlbGVjdCBmaWVsZCBzaXplJykpO1xyXG4gIGZpZWxkU2VsZWN0b3JCbG9jay5hcHBlbmQoZmllbGRTZWxlY3Rvcik7XHJcbiAgZmllbGRTZWxlY3Rvci5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNHg0JywgJ3ZhbHVlJywgJzQ0JykpO1xyXG4gIGZpZWxkU2VsZWN0b3IuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzV4NCcsICd2YWx1ZScsICc1NCcpKTtcclxuICBmaWVsZFNlbGVjdG9yLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc2eDYnLCAndmFsdWUnLCAnNjYnKSk7XHJcbiAgZmllbGRTZWxlY3RvckJsb2NrLmFwcGVuZChmaWVsZFNlbGVjdG9yQnV0dG9uKTtcclxuICBmaWVsZFNlbGVjdG9yQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvY2Vzc29yLmNoYW5nZUZpZWxkU2l6ZSk7XHJcblxyXG4gIC8vY3JlYXRpbmcgdGltZU50dXJuc0Jsb2NrIHdpdGggYnV0dG9uc1xyXG4gIGxldCB0aW1lTnR1cm5zQmxvY2sgPSBwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3RpbWUtbi10dXJucy1ibG9jaycpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lTnR1cm5zQmxvY2spO1xyXG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnc3Bhbl9ibHVycmVkJywgJ1RpbWUnKSk7XHJcbiAgdGltZU50dXJuc0Jsb2NrLmFwcGVuZChwcm9jZXNzb3IuY3JlYXRlSHRtbCgnaW5wdXQnLCAndGltZS1uLXR1cm5zLWJsb2NrX19idXR0b24gc3RvcHdhdGNoJywgJycsICd2YWx1ZScsICcwMDowMCcsICdkaXNhYmxlZCcsICd0cnVlJykpO1xyXG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnc3Bhbl9ibHVycmVkJywgJ1R1cm5zJykpO1xyXG4gIHRpbWVOdHVybnNCbG9jay5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2lucHV0JywgJ3RpbWUtbi10dXJucy1ibG9ja19fYnV0dG9uIHR1cm5zQ291bnRlcicsICcnLCAndmFsdWUnLCAnMCcsICdkaXNhYmxlZCcsICd0cnVlJykpO1xyXG5cclxuICAvL2NyZWF0aW5nIGdhbWVmaWVsZFxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnZ2FtZWZpZWxkIGdhbWVmaWVsZF80eDQnKSk7XHJcblxyXG4gIC8vY3JlYXRpbmcgYmxvY2sgd2l0aCBpbmZvcm1hdGlvblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mby1ibG9jaycsICc8Yj5NZW1vcnkgR2FtZTwvYj4gPGJyPiBGbGlwIHR3byBjYXJkcy4gSWYgdGhlIGNhcmRzIGFyZSB0aGUgc2FtZSBvbiB0aGVpciBmYWNlIHNpZGUgLSB0aGV5IGRpc2FwcGVhci4gSWYgdGhleSBhcmUgZGlmZmVyZW50IC0geW91IGhhdmUgdG8gcGljayBhbm90aGVyIHBhaXIuIENsZWFyaW5nIHRoZSBmaWVsZCBpcyB0aGUgd2lubmluZyBjb25kaXRpb24gPGJyPiA8Yj5DbGljazwvYj4gb24gYW55IGNhcmQgdG8gc3RhcnQgcGxheWluZyA8YnI+IDxiPkNvbmZpcm0gJiBTaHVmZmxlPC9iPiAtIHNodWZmbGUgZmllbGQgb2Ygc2VsZWN0ZWQgc2l6ZScpKTtcclxuXHJcbiAgLy9jcmVhdGluZyBiZXN0IHJlc3VsdHMgYmxvY2tcclxuICBsZXQgbGVhZGVyYm9hcmRCbG9jayA9IHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2snLCAnPGI+TGVhZGVyYm9hcmQ8L2I+Jyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGxlYWRlcmJvYXJkQmxvY2spO1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJylbMF0uYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnd3JhcHBlcl9fcmVjb3JkIHNpemU0NCcsICcnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU0NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj40eDQ8L2I+JykpO1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJylbMV0uYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnd3JhcHBlcl9fcmVjb3JkIHNpemU1NCcsICcnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU1NCcpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj41eDQ8L2I+JykpO1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQtYmxvY2tfX3dyYXBwZXInKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlYWRlcmJvYXJkLWJsb2NrX193cmFwcGVyJylbMl0uYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnd3JhcHBlcl9fcmVjb3JkIHNpemU2NicsICcnKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpemU2NicpLmJlZm9yZShwcm9jZXNzb3IuY3JlYXRlSHRtbCgnZGl2JywgJ3dyYXBwZXJfX3JlY29yZCcsICc8Yj42eDY8L2I+JykpO1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnbGluZUJyZWFrJykpO1xyXG5cclxuICAvL2NyZWF0aW5nIHNhdmUvbG9hZCBibG9ja1xyXG4gIGxlYWRlcmJvYXJkQmxvY2suYXBwZW5kKHByb2Nlc3Nvci5jcmVhdGVIdG1sKCdkaXYnLCAnc2F2ZUxvYWRCbG9jaycsICdTdGF0aXN0aWNzIGFyZSBub3QgcmVjb3JkZWQgZm9yIGxvYWRlZCBnYW1lcywgdHJhaW4gaW4gcmVhbCB0aW1lIHRvIGNvbnF1ZXIgbGVhZGVyYm9hcmQhIDxicj4nKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVMb2FkQmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIHNhdmVHYW1lQnV0dG9uJywgJ1NhdmUgR2FtZScpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZUdhbWVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2Nlc3Nvci5zYXZlR2FtZSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVMb2FkQmxvY2snKS5hcHBlbmQocHJvY2Vzc29yLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIGxvYWRHYW1lQnV0dG9uJywgJ0xvYWQgR2FtZScpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZEdhbWVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHByb2Nlc3Nvci5sb2FkR2FtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVNhdmUnKSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==