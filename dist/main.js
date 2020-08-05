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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .noclick {\n    pointer-events: none; }\n  body .invisible {\n    opacity: 0;\n    transition: 0.3s; }\n  body .blurredSpan {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gameField {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n    padding: 6px;\n    margin: 10px;\n    border: 3px solid black;\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n    body .gameField--4x4 {\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gameField--5x4 {\n      grid-template-columns: repeat(5, 1fr);\n      grid-template-rows: repeat(4, 1fr); }\n    body .gameField--6x6 {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: repeat(6, 1fr); }\n  body .button {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    transition: 0.1s;\n    outline: none; }\n    body .button:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n    body .button:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .lineBreak {\n    width: 100%; }\n  body .saveLoadBlock {\n    font-size: 14px;\n    text-align: center; }\n  body .msgDiv {\n    position: absolute;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    background-image: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 1;\n    transition: 1s; }\n  body .msgDiv p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msgButton {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n    body .msgButton:hover {\n      box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .msgButton:active {\n      background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    transition: 0.2s; }\n    @media screen and (max-width: 460px) {\n      body .card {\n        width: 40px;\n        height: 65px; } }\n    body .card:hover {\n      filter: brightness(90%);\n      box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5); }\n    body .card:active {\n      filter: brightness(70%); }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .cardBack {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    transform: rotateY(180deg); }\n  body .fieldSelectorDiv {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .fieldSelector {\n    appearance: none;\n    cursor: pointer;\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%);\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    padding: 0 5px 0;\n    outline: none; }\n    body .fieldSelector option {\n      background-color: #874d45; }\n    body .fieldSelector:hover {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n      transition: 0.1s; }\n    body .fieldSelector:focus {\n      box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .timeNturnsBlock {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-weight: bold;\n    width: 90%; }\n  body .timeNturnsBlockButton {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .infoBlock {\n    text-align: center;\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 3px dashed white;\n    border-radius: 10px;\n    backdrop-filter: blur(1px); }\n    @media screen and (min-width: 1070px) {\n      body .infoBlock {\n        text-align: left;\n        position: absolute;\n        width: 300px;\n        margin-top: 0px;\n        left: 0px;\n        top: 0px;\n        border-left: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboardBlock {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 20px;\n    width: 100%;\n    backdrop-filter: blur(1px);\n    border: 3px dashed white;\n    border-radius: 15px; }\n    @media screen and (min-width: 935px) {\n      body .leaderboardBlock {\n        position: absolute;\n        flex-direction: column;\n        width: 240px;\n        margin-top: 0px;\n        right: 0px;\n        top: 0px;\n        border-right: none;\n        border-top: none;\n        border-top-right-radius: 0px;\n        border-bottom-right-radius: 0px;\n        border-top-left-radius: 0px; } }\n  body .leaderboard {\n    margin: 5px 0;\n    padding: 5px 5px 10px;\n    width: 220px;\n    height: 20px;\n    border-radius: 15px;\n    text-align: center; }\n  body .leaderboardWrap {\n    margin: 5px; }\n  body .size44 {\n    background: rgba(26, 83, 255, 0.2); }\n  body .size54 {\n    background: rgba(26, 83, 255, 0.4); }\n  body .size66 {\n    background: rgba(26, 83, 255, 0.6); }\n\n::-webkit-scrollbar {\n  width: 10px; }\n  ::-webkit-scrollbar-track {\n    background-color: #559FB4; }\n  ::-webkit-scrollbar-thumb {\n    background-color: #8B5149;\n    border-radius: 10px; }\n    ::-webkit-scrollbar-thumb:hover {\n      background-color: #7a4740; }\n    ::-webkit-scrollbar-thumb:active {\n      background-color: #6a3e37; }\n", ""]);
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
  gameField44: 'gameField--4x4',
  gameField54: 'gameField--5x4',
  gameField66: 'gameField--6x6',
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
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
const writer = __webpack_require__(/*! ./writer.js */ "./src/writer.js");


//creating fieldSelector block and its contents
document.body.append(writer.createHtml('div', 'fieldSelectorDiv'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('span', 'blurredSpan', 'Select field size'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('select', 'fieldSelector'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '4x4', 'value', '44'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '5x4', 'value', '54'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '6x6', 'value', '66'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('button', 'button fieldSelectorButton', 'Confirm & Shuffle'));
document.getElementsByClassName('fieldSelectorButton')[0].addEventListener('click', writer.changeFieldSize);

//creating timeNturnsBlock with buttons
document.body.append(writer.createHtml('div', 'timeNturnsBlock'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Time'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton stopwatch', '', 'value', '00:00', 'disabled', 'true'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Turns'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton turnsCounter', '', 'value', '0', 'disabled', 'true'));

//creating gameField
document.body.append(writer.createHtml('div', 'gameField gameField--4x4'));

window.onload = writer.addCards(16);

//creating block with information
document.body.append(writer.createHtml('div', 'infoBlock', '<b>Memory Game</b> <br> Flip two cards. If the cards are the same on their face side - they disappear. If they are different - you have to pick another pair. Clearing the field is the winning condition <br> <b>Click</b> on any card to start playing <br> <b>Confirm & Shuffle</b> - shuffle field of selected size'));

//creating best results block
document.body.append(writer.createHtml('div', 'leaderboardBlock', '<b>Leaderboard</b>'));
document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'lineBreak'));
document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'leaderboardWrap'));
document.getElementsByClassName('leaderboardWrap')[0].append(writer.createHtml('div', 'leaderboard size44', ''));
document.getElementsByClassName('size44')[0].before(writer.createHtml('div', 'leaderboard', '<b>4x4</b>'));
document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'leaderboardWrap'));
document.getElementsByClassName('leaderboardWrap')[1].append(writer.createHtml('div', 'leaderboard size54', ''));
document.getElementsByClassName('size54')[0].before(writer.createHtml('div', 'leaderboard', '<b>5x4</b>'));
document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'leaderboardWrap'));
document.getElementsByClassName('leaderboardWrap')[2].append(writer.createHtml('div', 'leaderboard size66', ''));
document.getElementsByClassName('size66')[0].before(writer.createHtml('div', 'leaderboard', '<b>6x6</b>'));
document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'lineBreak'));
window.onload = writer.showLeaderboard();

document.getElementsByClassName('leaderboardBlock')[0].append(writer.createHtml('div', 'saveLoadBlock', 'Statistics are not recorded for loaded games, train in real time to conquer leaderboard! <br>'));
document.getElementsByClassName('saveLoadBlock')[0].append(writer.createHtml('button', 'button  saveGameButton', 'Save Game'));
document.getElementsByClassName('saveGameButton')[0].addEventListener('click', writer.saveGame);
document.getElementsByClassName('saveLoadBlock')[0].append(writer.createHtml('button', 'button  loadGameButton', 'Load Game'));
document.getElementsByClassName('loadGameButton')[0].addEventListener('click', () => {
  writer.loadGame(localStorage.getItem('gameSave'));
});

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
};

const observer = new MutationObserver(writer.callback);
observer.observe(field, config);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

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

/***/ "./src/writer.js":
/*!***********************!*\
  !*** ./src/writer.js ***!
  \***********************/
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
  for(let i = 1; i < 19; i++) {
    classArray.push(`card${i}`,`card${i}`);
  }

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  switch (document.getElementsByClassName('fieldSelector')[0].value) {
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
    document.getElementsByClassName('gameField')[0].append(createHtml('div', `card ${classArray[random]} cardBack`));
    classArray.splice(random, 1);
  }
}

function stopTurns () {
  document.getElementsByClassName('turnsCounter')[0].value = '0';
}

//toggling card face up/down
function toggleCard (...cards) {
  for(let card of cards){
    card.classList.toggle('cardBack');
  }
}

function showMsg (msg) {
  document.getElementsByClassName('gameField')[0].prepend(createHtml('div', 'msgDiv'));
  document.getElementsByClassName('msgDiv')[0].prepend(createHtml('p', '', msg));
};

function showButtonMsg (msg, buttonText, action) {
  showMsg(msg);
  document.getElementsByClassName('msgDiv')[0].append(createHtml('button', 'msgButton', 'Play Again'));
  document.getElementsByClassName('msgButton')[0].addEventListener('click', action);
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
  let elems, field, card;
  isLoadedGame = false;

  document.getElementsByClassName('gameField')[0].remove();

  elems = document.getElementsByClassName('fieldSelector');
  Array.from(elems).forEach((el) => {
    field = document.createElement('div');
    field.className = 'gameField';
    document.getElementsByClassName('timeNturnsBlock')[0].after(field);

    clearStopwatch();
    clearTimeout(clocktimer);
    init = 0;
    stopTurns();
    isFirstClick = true;
    emptyCardNumber = 0;

    showMsg('<b>Shuffling...</b>');
    setTimeout(function () {
      document.getElementsByClassName('msgDiv')[0].remove();
    }, 1000);

    switch (el.value) {
      case constants.sizes.size44:
        field.classList.add(constants.selectors.gameField44);
        addCards(16);
        break;
      case constants.sizes.size54:
        field.classList.add(constants.selectors.gameField54);
        addCards(20);
        break;
      case constants.sizes.size66:
        field.classList.add(constants.selectors.gameField66);
        addCards(36);
        break;
      default:
    }
  });
}

let faceUpCounter = 0;
let faceUpCard1;
var isFirstClick = true;
let isLoadedGame = false;
const callback = function(mutationsList, observer) {
  document.getElementsByClassName('gameField')[0].onclick = function (event) {
    let target = event.target;
    if(!target.classList.contains('card')) return;
    toggleCard(target);

    if (isFirstClick) {
      isFirstClick = false;
      startStop();
    }

    if (!target.classList.contains('cardBack')) {
      faceUpCounter += 1;
      target.classList.add('noclick');
      //if two cards are faced up
      if (faceUpCounter >= 2) {
        document.getElementsByClassName('gameField')[0].classList.add('noclick');
        setTimeout(() => {document.getElementsByClassName('gameField')[0].classList.remove('noclick')}, 200);
        if (!isLoadedGame) {
          document.getElementsByClassName('turnsCounter')[0].value++;
        }
        compareCards(target, faceUpCard1);

        let cards = document.getElementsByClassName('card');
        if (emptyCardNumber == classArrLength) {
          let time = document.getElementsByClassName('stopwatch')[0].value;
          let turns = document.getElementsByClassName('turnsCounter')[0].value;

          let fieldSize = document.getElementsByClassName('fieldSelector')[0].value;
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
  document.getElementsByClassName(`size${result.size}`)[0].innerHTML = `<b>Time:</b> ${result.time}, <b>Turns:</b> ${result.turns} `;
  localStorage.setItem(result.size, JSON.stringify(result));
}

function showLeaderboard () {
  if (localStorage.getItem(constants.sizes.size44)) {
    let res1 = JSON.parse(localStorage.getItem(constants.sizes.size44));
    document.getElementsByClassName('size44')[0].innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size54)) {
    let res2 = JSON.parse(localStorage.getItem(constants.sizes.size54));
    document.getElementsByClassName('size54')[0].innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(constants.sizes.size66)) {
    let res3 = JSON.parse(localStorage.getItem(constants.sizes.size66));
    document.getElementsByClassName('size66')[0].innerHTML = `<b>Time:</b> ${res3.time}, <b>Turns:</b> ${res3.turns} `;
  }
}

function saveGame (time, turns) {
  let saveTime = document.getElementsByClassName('stopwatch')[0].value;
  let saveTurns = document.getElementsByClassName('turnsCounter')[0].value;
  let saveFieldSize = document.getElementsByClassName('fieldSelector')[0].value;
  let currentField = document.getElementsByClassName('gameField')[0].innerHTML;

  showMsg('<b>Saving...</b>');
  setTimeout(function () {
    document.getElementsByClassName('msgDiv')[0].remove();
  }, 1000);

  clearStopwatch();
  clearTimeout(clocktimer);
  init = 0;
  stopTurns();
  isFirstClick = true;
  emptyCardNumber = 0;
  Array.from(document.getElementsByClassName('card')).forEach((item) => {
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
      document.getElementsByClassName('msgDiv')[0].remove();
    }, 1000);
    return;
  }

  let gameSave = JSON.parse(save);

  document.getElementsByClassName('fieldSelector')[0].value = gameSave.size;
  changeFieldSize();
  document.getElementsByClassName('msgDiv')[0].innerHTML = '<p><b>Loading...</b></p>';

  //loading saved field
  setTimeout(function () {
    document.getElementsByClassName('gameField')[0].innerHTML = gameSave.field;
    emptyCardNumber = 0;
    isFirstClick = false;
    Array.from(document.getElementsByClassName('card')).forEach((item) => {
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
  document.getElementsByClassName('stopwatch')[0].value = readout;
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
  document.getElementsByClassName('stopwatch')[0].value = readout;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovLy8uL3NyYy93cml0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdE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QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LWZhbWlseTogTHVjaWRhIFNhbnMgVW5pY29kZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cudHV0b3JpYWxjaGlwLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMS8wNi9CbHVlLVBhdHRlcm4uanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cXG4gIGJvZHkgLm5vY2xpY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgYm9keSAuaW52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zczsgfVxcbiAgYm9keSAuYmx1cnJlZFNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDVweCA1cHggMTBweDsgfVxcbiAgYm9keSAuZ2FtZUZpZWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IGJsYWNrOyB9XFxuICAgIGJvZHkgLmdhbWVGaWVsZC0tNHg0IHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7IH1cXG4gICAgYm9keSAuZ2FtZUZpZWxkLS01eDQge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsgfVxcbiAgICBib2R5IC5nYW1lRmllbGQtLTZ4NiB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpOyB9XFxuICBib2R5IC5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbjogNHB4IDVweCA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAuYnV0dG9uOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICAgIGJvZHkgLmJ1dHRvbjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIGJvZHkgLnNhdmVMb2FkQmxvY2sge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgYm9keSAubXNnRGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICM5YWVkZjkgMzUlLCAjNTc5ZGJiIDEwMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiAxczsgfVxcbiAgYm9keSAubXNnRGl2IHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICBib2R5IC5tc2dCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIGJvZHkgLm1zZ0J1dHRvbjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgICBib2R5IC5tc2dCdXR0b246YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4NzRkNDUgMCUsICNiYTgxNzggMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTcuNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4yczsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xcbiAgICAgIGJvZHkgLmNhcmQge1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDY1cHg7IH0gfVxcbiAgICBib2R5IC5jYXJkOmhvdmVyIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICAgIGJvZHkgLmNhcmQ6YWN0aXZlIHtcXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTsgfVxcbiAgYm9keSAuY2FyZDEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0NTAxMDIgMCUsICNmZjAwNDIgNTAlLCAjNDUwMTAyIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzJmMzc5OSAwJSwgIzAyZjVmYiA1MCUsICMyZjM3OTkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGEzNTA4IDAlLCAjNGVmMzRmIDUwJSwgIzBhMzUwOCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkYjE4YjYgMCUsICNmZmM4ZmMgNTAlLCAjZGIxOGI2IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxMjdhZCAwJSwgI2Q1OWFlZSA1MCUsICM0MTI3YWQgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmYzAwIDAlLCB3aGl0ZSA1MCUsICNmZmZjMDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMyODFiIDAlLCAjOWM2NDI5IDUwJSwgIzMzMjgxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMTI3MTEgMCUsICNmNWFmMTkgNTAlLCAjZjEyNzExIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZlNDA1YSAwJSwgI2Y3YjZiYSA1MCUsICNmZTQwNWEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQxNWVmOSAwJSwgI2Y4NDc2ZSA1MCUsICM0MTVlZjkgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzZjNmI3MSAwJSwgI2NmY2ZjZiA1MCUsICM2YzZiNzEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzFmMWMyYyAwJSwgIzkyOGRhYiA1MCUsICMxZjFjMmMgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzYzNzRkMCAwJSwgI2QwZWRmZiA1MCUsICM2Mzc0ZDAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjMTAzYyAwJSwgIzBjMTlkYiA1MCUsICMwZTEzNTAgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQxNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQwM2I0YSA1JSwgI2UwZTQ4YSA1MCUsICM0MDNiNGEgOTUlKTsgfVxcbiAgYm9keSAuY2FyZDE2IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWQ5NzZjIDAlLCAjOTNmOWI5IDUwJSwgIzFkOTc2YyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjRmZTQxIDAlLCAjZmRmYzQ3IDUwJSwgIzI0ZmU0MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzMwMDFiIDAlLCAjZmYwMDg0IDUwJSwgIzMzMDAxYiAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZEJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3JEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3RvciB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODc0ZDQ1IDAlLCAjYmE4MTc4IDEwMCUpO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgIHBhZGRpbmc6IDAgNXB4IDA7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgYm9keSAuZmllbGRTZWxlY3RvciBvcHRpb24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzRkNDU7IH1cXG4gICAgYm9keSAuZmllbGRTZWxlY3Rvcjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICAgIGJvZHkgLmZpZWxkU2VsZWN0b3I6Zm9jdXMge1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gIGJvZHkgLnRpbWVOdHVybnNCbG9jayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICBib2R5IC50aW1lTnR1cm5zQmxvY2tCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTFweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBtYXJnaW46IDdweCA1cHggMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgYm9keSAuaW5mb0Jsb2NrIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNzBweCkge1xcbiAgICAgIGJvZHkgLmluZm9CbG9jayB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIGJvZHkgLmxlYWRlcmJvYXJkQmxvY2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzNXB4KSB7XFxuICAgICAgYm9keSAubGVhZGVyYm9hcmRCbG9jayB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICAgIHRvcDogMHB4O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIGJvZHkgLmxlYWRlcmJvYXJkIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgcGFkZGluZzogNXB4IDVweCAxMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBib2R5IC5sZWFkZXJib2FyZFdyYXAge1xcbiAgICBtYXJnaW46IDVweDsgfVxcbiAgYm9keSAuc2l6ZTQ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC4yKTsgfVxcbiAgYm9keSAuc2l6ZTU0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC40KTsgfVxcbiAgYm9keSAuc2l6ZTY2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC42KTsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7IH1cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU5RkI0OyB9XFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNTE0OTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E0NzQwOyB9XFxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmEzZTM3OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCB2YXIgc2l6ZXMgPSB7XHJcbiAgc2l6ZTQ0OiAnNDQnLFxyXG4gIHNpemU1NDogJzU0JyxcclxuICBzaXplNjY6ICc2NicsXHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHNlbGVjdG9ycyA9IHtcclxuICBnYW1lRmllbGQ0NDogJ2dhbWVGaWVsZC0tNHg0JyxcclxuICBnYW1lRmllbGQ1NDogJ2dhbWVGaWVsZC0tNXg0JyxcclxuICBnYW1lRmllbGQ2NjogJ2dhbWVGaWVsZC0tNng2JyxcclxufTtcclxuIiwiY29uc3Qgd3JpdGVyID0gcmVxdWlyZSgnLlxcXFx3cml0ZXIuanMnKTtcclxuaW1wb3J0ICcuXFxcXHN0eWxlcy5zY3NzJztcclxuXHJcbi8vY3JlYXRpbmcgZmllbGRTZWxlY3RvciBibG9jayBhbmQgaXRzIGNvbnRlbnRzXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnZmllbGRTZWxlY3RvckRpdicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckRpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc3BhbicsICdibHVycmVkU3BhbicsICdTZWxlY3QgZmllbGQgc2l6ZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckRpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc2VsZWN0JywgJ2ZpZWxkU2VsZWN0b3InKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNHg0JywgJ3ZhbHVlJywgJzQ0JykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzV4NCcsICd2YWx1ZScsICc1NCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc2eDYnLCAndmFsdWUnLCAnNjYnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3JEaXYnKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gZmllbGRTZWxlY3RvckJ1dHRvbicsICdDb25maXJtICYgU2h1ZmZsZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd3JpdGVyLmNoYW5nZUZpZWxkU2l6ZSk7XHJcblxyXG4vL2NyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lTnR1cm5zQmxvY2snKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVOdHVybnNCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc3BhbicsICdibHVycmVkU3BhbicsICdUaW1lJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2lucHV0JywgJ3RpbWVOdHVybnNCbG9ja0J1dHRvbiBzdG9wd2F0Y2gnLCAnJywgJ3ZhbHVlJywgJzAwOjAwJywgJ2Rpc2FibGVkJywgJ3RydWUnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVOdHVybnNCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc3BhbicsICdibHVycmVkU3BhbicsICdUdXJucycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lTnR1cm5zQmxvY2tCdXR0b24gdHVybnNDb3VudGVyJywgJycsICd2YWx1ZScsICcwJywgJ2Rpc2FibGVkJywgJ3RydWUnKSk7XHJcblxyXG4vL2NyZWF0aW5nIGdhbWVGaWVsZFxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2dhbWVGaWVsZCBnYW1lRmllbGQtLTR4NCcpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSB3cml0ZXIuYWRkQ2FyZHMoMTYpO1xyXG5cclxuLy9jcmVhdGluZyBibG9jayB3aXRoIGluZm9ybWF0aW9uXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnaW5mb0Jsb2NrJywgJzxiPk1lbW9yeSBHYW1lPC9iPiA8YnI+IEZsaXAgdHdvIGNhcmRzLiBJZiB0aGUgY2FyZHMgYXJlIHRoZSBzYW1lIG9uIHRoZWlyIGZhY2Ugc2lkZSAtIHRoZXkgZGlzYXBwZWFyLiBJZiB0aGV5IGFyZSBkaWZmZXJlbnQgLSB5b3UgaGF2ZSB0byBwaWNrIGFub3RoZXIgcGFpci4gQ2xlYXJpbmcgdGhlIGZpZWxkIGlzIHRoZSB3aW5uaW5nIGNvbmRpdGlvbiA8YnI+IDxiPkNsaWNrPC9iPiBvbiBhbnkgY2FyZCB0byBzdGFydCBwbGF5aW5nIDxicj4gPGI+Q29uZmlybSAmIFNodWZmbGU8L2I+IC0gc2h1ZmZsZSBmaWVsZCBvZiBzZWxlY3RlZCBzaXplJykpO1xyXG5cclxuLy9jcmVhdGluZyBiZXN0IHJlc3VsdHMgYmxvY2tcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsZWFkZXJib2FyZEJsb2NrJywgJzxiPkxlYWRlcmJvYXJkPC9iPicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkV3JhcCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRXcmFwJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQgc2l6ZTQ0JywgJycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l6ZTQ0JylbMF0uYmVmb3JlKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQnLCAnPGI+NHg0PC9iPicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkV3JhcCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRXcmFwJylbMV0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQgc2l6ZTU0JywgJycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l6ZTU0JylbMF0uYmVmb3JlKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQnLCAnPGI+NXg0PC9iPicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkV3JhcCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRXcmFwJylbMl0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQgc2l6ZTY2JywgJycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l6ZTY2JylbMF0uYmVmb3JlKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmQnLCAnPGI+Nng2PC9iPicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyYm9hcmRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xpbmVCcmVhaycpKTtcclxud2luZG93Lm9ubG9hZCA9IHdyaXRlci5zaG93TGVhZGVyYm9hcmQoKTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdzYXZlTG9hZEJsb2NrJywgJ1N0YXRpc3RpY3MgYXJlIG5vdCByZWNvcmRlZCBmb3IgbG9hZGVkIGdhbWVzLCB0cmFpbiBpbiByZWFsIHRpbWUgdG8gY29ucXVlciBsZWFkZXJib2FyZCEgPGJyPicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2F2ZUxvYWRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2J1dHRvbiAgc2F2ZUdhbWVCdXR0b24nLCAnU2F2ZSBHYW1lJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzYXZlR2FtZUJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd3JpdGVyLnNhdmVHYW1lKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2F2ZUxvYWRCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2J1dHRvbiAgbG9hZEdhbWVCdXR0b24nLCAnTG9hZCBHYW1lJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkR2FtZUJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHdyaXRlci5sb2FkR2FtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVNhdmUnKSk7XHJcbn0pO1xyXG5cclxuLy9jb25maWd1cmluZyB0aGUgbXV0YXRpb24gb2JzZXJ2ZXIgZm9yIGRlbGVnYXRpb24gdG8gd29yayBwcm9wZXJseVxyXG52YXIgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgY2hpbGRMaXN0OiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHdyaXRlci5jYWxsYmFjayk7XHJcbm9ic2VydmVyLm9ic2VydmUoZmllbGQsIGNvbmZpZyk7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy5cXFxcY29uc3RhbnRzLmpzJyk7XHJcblxyXG4vL2NyZWF0ZSBodG1sIGVsZW1lbnQgd2l0aCBnaXZlbiBhdHRyaWJ1dGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sIChzZWxlY3RvciwgY2xhc3NOYW1lLCBpbm5lclRleHQsIC4uLmtleXNWYWx1ZXMpIHtcclxuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xyXG4gIGNsYXNzTmFtZSA9PSB1bmRlZmluZWQgPyBlbGVtLmNsYXNzTmFtZSA9ICcnIDogZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgaW5uZXJUZXh0ID09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICBpZiAoa2V5c1ZhbHVlcy5sZW5ndGggIT0gMCl7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICB3aGlsZSAoaSA8IGtleXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaS0xXSwga2V5c1ZhbHVlc1tpXSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG52YXIgY2xhc3NBcnJMZW5ndGggPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZHMgKG51bSkge1xyXG4gIGxldCBjbGFzc0FycmF5ID0gW107XHJcbiAgZm9yKGxldCBpID0gMTsgaSA8IDE5OyBpKyspIHtcclxuICAgIGNsYXNzQXJyYXkucHVzaChgY2FyZCR7aX1gLGBjYXJkJHtpfWApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0Um5kSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLnZhbHVlKSB7XHJcbiAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNDQ6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMTY7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTU0OlxyXG4gICAgICBjbGFzc0FycmF5Lmxlbmd0aCA9IDIwO1xyXG4gICAgICBjbGFzc0Fyckxlbmd0aCA9IGNsYXNzQXJyYXkubGVuZ3RoO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU2NjpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAzNjtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgY2xhc3NBcnJMZW5ndGg7IGkrKyl7XHJcbiAgICBsZXQgcmFuZG9tID0gZ2V0Um5kSW50KDAsIGNsYXNzQXJyYXkubGVuZ3RoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmFwcGVuZChjcmVhdGVIdG1sKCdkaXYnLCBgY2FyZCAke2NsYXNzQXJyYXlbcmFuZG9tXX0gY2FyZEJhY2tgKSk7XHJcbiAgICBjbGFzc0FycmF5LnNwbGljZShyYW5kb20sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BUdXJucyAoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWUgPSAnMCc7XHJcbn1cclxuXHJcbi8vdG9nZ2xpbmcgY2FyZCBmYWNlIHVwL2Rvd25cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNhcmQgKC4uLmNhcmRzKSB7XHJcbiAgZm9yKGxldCBjYXJkIG9mIGNhcmRzKXtcclxuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZEJhY2snKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TXNnIChtc2cpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5wcmVwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsICdtc2dEaXYnKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0ucHJlcGVuZChjcmVhdGVIdG1sKCdwJywgJycsIG1zZykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCdXR0b25Nc2cgKG1zZywgYnV0dG9uVGV4dCwgYWN0aW9uKSB7XHJcbiAgc2hvd01zZyhtc2cpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLmFwcGVuZChjcmVhdGVIdG1sKCdidXR0b24nLCAnbXNnQnV0dG9uJywgJ1BsYXkgQWdhaW4nKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnQnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3Rpb24pO1xyXG59XHJcblxyXG52YXIgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVDYXJkcyAoY2FyZDEsIGNhcmQyKSB7XHJcbiAgaWYgKGNhcmQxLmNsYXNzTGlzdFsxXSA9PSBjYXJkMi5jbGFzc0xpc3RbMV0pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQxLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgMzAwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgMzAwKTtcclxuICAgIGVtcHR5Q2FyZE51bWJlciArPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYXJkMS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBjYXJkMi5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBzZXRUaW1lb3V0KHRvZ2dsZUNhcmQsIDQwMCwgY2FyZDEsIGNhcmQyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWVsZFNpemUgKCkge1xyXG4gIGxldCBlbGVtcywgZmllbGQsIGNhcmQ7XHJcbiAgaXNMb2FkZWRHYW1lID0gZmFsc2U7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLnJlbW92ZSgpO1xyXG5cclxuICBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKTtcclxuICBBcnJheS5mcm9tKGVsZW1zKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdnYW1lRmllbGQnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYWZ0ZXIoZmllbGQpO1xyXG5cclxuICAgIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgICBpbml0ID0gMDtcclxuICAgIHN0b3BUdXJucygpO1xyXG4gICAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICAgIGVtcHR5Q2FyZE51bWJlciA9IDA7XHJcblxyXG4gICAgc2hvd01zZygnPGI+U2h1ZmZsaW5nLi4uPC9iPicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLnJlbW92ZSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gICAgc3dpdGNoIChlbC52YWx1ZSkge1xyXG4gICAgICBjYXNlIGNvbnN0YW50cy5zaXplcy5zaXplNDQ6XHJcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChjb25zdGFudHMuc2VsZWN0b3JzLmdhbWVGaWVsZDQ0KTtcclxuICAgICAgICBhZGRDYXJkcygxNik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY29uc3RhbnRzLnNpemVzLnNpemU1NDpcclxuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnN0YW50cy5zZWxlY3RvcnMuZ2FtZUZpZWxkNTQpO1xyXG4gICAgICAgIGFkZENhcmRzKDIwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBjb25zdGFudHMuc2l6ZXMuc2l6ZTY2OlxyXG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoY29uc3RhbnRzLnNlbGVjdG9ycy5nYW1lRmllbGQ2Nik7XHJcbiAgICAgICAgYWRkQ2FyZHMoMzYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5sZXQgZmFjZVVwQ291bnRlciA9IDA7XHJcbmxldCBmYWNlVXBDYXJkMTtcclxudmFyIGlzRmlyc3RDbGljayA9IHRydWU7XHJcbmxldCBpc0xvYWRlZEdhbWUgPSBmYWxzZTtcclxuZXhwb3J0IGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24obXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQnKSkgcmV0dXJuO1xyXG4gICAgdG9nZ2xlQ2FyZCh0YXJnZXQpO1xyXG5cclxuICAgIGlmIChpc0ZpcnN0Q2xpY2spIHtcclxuICAgICAgaXNGaXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICAgIHN0YXJ0U3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZEJhY2snKSkge1xyXG4gICAgICBmYWNlVXBDb3VudGVyICs9IDE7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XHJcbiAgICAgIC8vaWYgdHdvIGNhcmRzIGFyZSBmYWNlZCB1cFxyXG4gICAgICBpZiAoZmFjZVVwQ291bnRlciA+PSAyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uY2xhc3NMaXN0LmFkZCgnbm9jbGljaycpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ25vY2xpY2snKX0sIDIwMCk7XHJcbiAgICAgICAgaWYgKCFpc0xvYWRlZEdhbWUpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R1cm5zQ291bnRlcicpWzBdLnZhbHVlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXBhcmVDYXJkcyh0YXJnZXQsIGZhY2VVcENhcmQxKTtcclxuXHJcbiAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpO1xyXG4gICAgICAgIGlmIChlbXB0eUNhcmROdW1iZXIgPT0gY2xhc3NBcnJMZW5ndGgpIHtcclxuICAgICAgICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcHdhdGNoJylbMF0udmFsdWU7XHJcbiAgICAgICAgICBsZXQgdHVybnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICBsZXQgZmllbGRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLnZhbHVlO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgJ3RpbWUnOiB0aW1lLFxyXG4gICAgICAgICAgICAndHVybnMnOiB0dXJucyxcclxuICAgICAgICAgICAgJ3NpemUnOiBmaWVsZFNpemUsXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKGlzTG9hZGVkR2FtZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBzaG93QnV0dG9uTXNnKGA8Yj5XZWxsLi4uIDxicj4gWW91J2QgYmV0dGVyIHBsYXkgd2l0aG91dCBzYXZpbmcgYW5kIGxvYWRpbmcuLi4gPGJyPjwvYj4gU3RhdGlzdGljcyBhcmUgbm9yIHJlY29yZGVkIGZvciBsb2FkZWQgZ2FtZXNgLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9jaGFuZ2UgSFRNTCBhbmQgbG9jYWxTdG9yYWdlIGlmIG5ldyByZXN1bHQgaXMgYmV0dGVyXHJcbiAgICAgICAgICBpZiAoaXNGaXJzdEJldHRlcihyZXN1bHQsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlc3VsdC5zaXplKSkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgc2hvd0J1dHRvbk1zZyhgPGI+Q29uZ3JhdHVsYXRpb25zISA8YnI+IE5ldyBSZWNvcmQhIDxicj48L2I+WW91IHBhaXJlZCBhbGwgdGhlIGNhcmRzIGluICR7dGltZX0gYW5kICR7dHVybnN9IHR1cm5zIDxicj5gLCAnUGxheSBBZ2FpbicsIGNoYW5nZUZpZWxkU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBzaG93QnV0dG9uTXNnKGA8Yj5Hb29kLCBCdXQgWW91IEdvdHRhIFRyeSBIYXJkZXIgVG8gQmVhdCBUaGUgUmVjb3JkISA8YnI+IDwvYj5Zb3UgcGFpcmVkIGFsbCB0aGUgY2FyZHMgaW4gJHt0aW1lfSBhbmQgJHt0dXJuc30gdHVybnMgPGJyPmAsICdQbGF5IEFnYWluJywgY2hhbmdlRmllbGRTaXplKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzdGFydFN0b3AoKTtcclxuICAgICAgICAgIHN0b3BUdXJucygpO1xyXG4gICAgICAgICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZhY2VVcENvdW50ZXIgPSAwO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBmYWNlVXBDYXJkMSA9IHRhcmdldDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGaXJzdEJldHRlciAocmVjZW50LCBwcmV2aW91cykge1xyXG4gIGxldCByZWNlbnRUaW1lID0gTnVtYmVyKHJlY2VudC50aW1lLnJlcGxhY2UoJzonLCAnJykpO1xyXG4gIGxldCByZWNlbnRSYXRpbyA9IHJlY2VudFRpbWUgKyByZWNlbnQudHVybnM7XHJcblxyXG4gIC8vbWFrZSByZWNlbnQgYmV0dGVyIGlmIHRoZXJlIGlzIG5vIHByZXZpb3VzXHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShyZWNlbnQuc2l6ZSkpIHtcclxuICAgIHJldHVybiAxO1xyXG4gIH1cclxuXHJcbiAgbGV0IHByZXZpb3VzVGltZSA9IE51bWJlcihKU09OLnBhcnNlKHByZXZpb3VzKS50aW1lLnJlcGxhY2UoJzonLCAnJykpO1xyXG4gIGxldCBwcmV2aW91c1JhdGlvID0gcHJldmlvdXNUaW1lICsgSlNPTi5wYXJzZShwcmV2aW91cykudHVybnM7XHJcblxyXG4gIC8vaWYgbmV3IHJlc3VsdCBpcyB3b3JzZSB0aGFuIHNhdmVkIG9uZVxyXG4gIGlmIChyZWNlbnRSYXRpbyA+PSBwcmV2aW91c1JhdGlvKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIC8vaWYgbmV3IHJlc3VsdCBpcyBiZXR0ZXIgdGhhbiBzYXZlZCBvbmVcclxuICByZXR1cm4gMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxlYWRSZXN1bHQgKHJlc3VsdCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJlc3VsdC5zaXplKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBzaXplJHtyZXN1bHQuc2l6ZX1gKVswXS5pbm5lckhUTUwgPSBgPGI+VGltZTo8L2I+ICR7cmVzdWx0LnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzdWx0LnR1cm5zfSBgO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHJlc3VsdC5zaXplLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMZWFkZXJib2FyZCAoKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNDQpKSB7XHJcbiAgICBsZXQgcmVzMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU0NCkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l6ZTQ0JylbMF0uaW5uZXJIVE1MID0gYDxiPlRpbWU6PC9iPiAke3JlczEudGltZX0sIDxiPlR1cm5zOjwvYj4gJHtyZXMxLnR1cm5zfSBgO1xyXG4gIH1cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uc3RhbnRzLnNpemVzLnNpemU1NCkpIHtcclxuICAgIGxldCByZXMyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTU0KSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXplNTQnKVswXS5pbm5lckhUTUwgPSBgPGI+VGltZTo8L2I+ICR7cmVzMi50aW1lfSwgPGI+VHVybnM6PC9iPiAke3JlczIudHVybnN9IGA7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjb25zdGFudHMuc2l6ZXMuc2l6ZTY2KSkge1xyXG4gICAgbGV0IHJlczMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNvbnN0YW50cy5zaXplcy5zaXplNjYpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpemU2NicpWzBdLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMzLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMy50dXJuc30gYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlR2FtZSAodGltZSwgdHVybnMpIHtcclxuICBsZXQgc2F2ZVRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZTtcclxuICBsZXQgc2F2ZVR1cm5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWU7XHJcbiAgbGV0IHNhdmVGaWVsZFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0udmFsdWU7XHJcbiAgbGV0IGN1cnJlbnRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmlubmVySFRNTDtcclxuXHJcbiAgc2hvd01zZygnPGI+U2F2aW5nLi4uPC9iPicpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0ucmVtb3ZlKCk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xyXG4gIGluaXQgPSAwO1xyXG4gIHN0b3BUdXJucygpO1xyXG4gIGlzRmlyc3RDbGljayA9IHRydWU7XHJcbiAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xyXG4gICAgICBlbXB0eUNhcmROdW1iZXIgKz0gMTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IHNhdmVkR2FtZSA9IHtcclxuICAgICdzaXplJzogc2F2ZUZpZWxkU2l6ZSxcclxuICAgICdmaWVsZCc6IGN1cnJlbnRGaWVsZCxcclxuICB9XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU2F2ZScsIEpTT04uc3RyaW5naWZ5KHNhdmVkR2FtZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEdhbWUgKHNhdmUpIHtcclxuICBpZiAoIXNhdmUpIHtcclxuICAgIHNob3dNc2coJzxiPk5vIHNhdmVkIGdhbWVzIGZvdW5kIDooPC9iPicpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLnJlbW92ZSgpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgZ2FtZVNhdmUgPSBKU09OLnBhcnNlKHNhdmUpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0udmFsdWUgPSBnYW1lU2F2ZS5zaXplO1xyXG4gIGNoYW5nZUZpZWxkU2l6ZSgpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLmlubmVySFRNTCA9ICc8cD48Yj5Mb2FkaW5nLi4uPC9iPjwvcD4nO1xyXG5cclxuICAvL2xvYWRpbmcgc2F2ZWQgZmllbGRcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmlubmVySFRNTCA9IGdhbWVTYXZlLmZpZWxkO1xyXG4gICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuICAgIGlzRmlyc3RDbGljayA9IGZhbHNlO1xyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJykpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xyXG4gICAgICAgIGVtcHR5Q2FyZE51bWJlciArPSAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCAxMDAwKTtcclxuICBpc0xvYWRlZEdhbWUgPSB0cnVlO1xyXG59XHJcblxyXG4vL1N0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcclxudmFyIGJhc2UgPSA2MDtcclxudmFyIGNsb2NrdGltZXIsIGRhdGVPYmosIGRoLCBkbSwgZHMsIG1zO1xyXG52YXIgcmVhZG91dCA9ICcnO1xyXG52YXIgaCA9IDEsXHJcbiAgbSA9IDEsXHJcbiAgdG0gPSAxLFxyXG4gIHMgPSAwLFxyXG4gIHRzID0gMCxcclxuICBtcyA9IDAsXHJcbiAgaW5pdCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2ggKCkge1xyXG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcclxuICBoID0gMTtcclxuICBtID0gMTtcclxuICB0bSA9IDE7XHJcbiAgcyA9IDA7XHJcbiAgdHMgPSAwO1xyXG4gIG1zID0gMDtcclxuICBpbml0ID0gMDtcclxuICByZWFkb3V0ID0gJzAwOjAwJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZSA9IHJlYWRvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3B3YXRjaCAoKSB7XHJcbiAgdmFyIGNkYXRlT2JqID0gbmV3IERhdGUoKTtcclxuICB2YXIgdCA9IChjZGF0ZU9iai5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLSAocyAqIDEwMDApO1xyXG4gIGlmICh0ID4gOTk5KSB7XHJcbiAgICBzKys7XHJcbiAgfVxyXG4gIGlmIChzID49IChtICogYmFzZSkpIHtcclxuICAgIHRzID0gMDtcclxuICAgIG0rKztcclxuICB9IGVsc2Uge1xyXG4gICAgdHMgPSBwYXJzZUludCgobXMgLyAxMDApICsgcyk7XHJcbiAgICBpZiAodHMgPj0gYmFzZSkge1xyXG4gICAgICB0cyA9IHRzIC0gKChtIC0gMSkgKiBiYXNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG0gPiAoaCAqIGJhc2UpKSB7XHJcbiAgICB0bSA9IDE7XHJcbiAgICBoKys7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRtID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIG0pO1xyXG4gICAgaWYgKHRtID49IGJhc2UpIHtcclxuICAgICAgdG0gPSB0bSAtICgoaCAtIDEpICogYmFzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh0cyA+IDApIHtcclxuICAgIGRzID0gdHM7XHJcbiAgICBpZiAodHMgPCAxMCkge1xyXG4gICAgICBkcyA9ICcwJyArIHRzO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkcyA9ICcwMCc7XHJcbiAgfVxyXG4gIGRtID0gdG0gLSAxO1xyXG4gIGlmIChkbSA+IDApIHtcclxuICAgIGlmIChkbSA8IDEwKSB7XHJcbiAgICAgIGRtID0gJzAnICsgZG07XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRtID0gJzAwJztcclxuICB9XHJcbiAgcmVhZG91dCA9IGRtICsgJzonICsgZHM7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcHdhdGNoJylbMF0udmFsdWUgPSByZWFkb3V0O1xyXG4gIGNsb2NrdGltZXIgPSBzZXRUaW1lb3V0KHN0YXJ0U3RvcHdhdGNoLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCAoKSB7XHJcbiAgaWYgKGluaXQgPT0gMCkge1xyXG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICAgIGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG4gICAgc3RhcnRTdG9wd2F0Y2goKTtcclxuICAgIGluaXQgPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xyXG4gICAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xyXG4gICAgaW5pdCA9IDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=