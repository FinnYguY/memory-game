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
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .flex {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n  body .noclick {\n    pointer-events: none; }\n  body .msgDiv {\n    position: absolute;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    background-image: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 1;\n    transition: 1s; }\n  body .msgDiv p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msgButton {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .msgButton:hover {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .msgButton:active {\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .blurredSpan {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gameField {\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n    padding: 6px;\n    margin: 10px;\n    border: 3px solid black;\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n  body .gameField--4x4 {\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr); }\n  body .gameField--5x4 {\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(4, 1fr); }\n  body .gameField--6x6 {\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(6, 1fr); }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    transition: 0.2s; }\n  @media screen and (max-width: 460px) {\n    body .card {\n      width: 40px;\n      height: 65px; } }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .card:hover {\n    filter: brightness(90%);\n    box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5); }\n  body .card:active {\n    filter: brightness(70%); }\n  body .cardBack {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    transform: rotateY(180deg); }\n  body .invisible {\n    opacity: 0;\n    transition: 0.3s; }\n  body .fieldSelectorDiv {\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .fieldSelector {\n    appearance: none;\n    cursor: pointer;\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%);\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    padding: 0 5px 0;\n    outline: none; }\n  body .fieldSelector option {\n    background-color: #874d45; }\n  body .fieldSelector:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .fieldSelector:focus {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .button {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-image: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    transition: 0.1s;\n    outline: none; }\n  body .button:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .button:active {\n    background-image: linear-gradient(90deg, #874d45 0%, #ba8178 100%); }\n  body .timeNturnsBlock {\n    font-weight: bold;\n    width: 90%; }\n  body .timeNturnsBlockButton {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n  body .infoBlock {\n    text-align: center;\n    margin-top: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 3px dashed white;\n    border-radius: 10px;\n    backdrop-filter: blur(1px); }\n  body .leaderboardBlock {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin-top: 20px;\n    width: 100%;\n    backdrop-filter: blur(1px);\n    border: 3px dashed white;\n    border-radius: 15px; }\n  body .leaderboard {\n    margin: 5px 0;\n    padding: 5px 5px 10px;\n    width: 220px;\n    height: 20px;\n    border-radius: 15px;\n    text-align: center; }\n  body .leaderboardWrap {\n    margin: 5px; }\n  body .size44 {\n    background: rgba(26, 83, 255, 0.2); }\n  body .size54 {\n    background: rgba(26, 83, 255, 0.4); }\n  body .size66 {\n    background: rgba(26, 83, 255, 0.6); }\n  body .lineBreak {\n    width: 100%; }\n  @media screen and (min-width: 1070px) {\n    body .infoBlock {\n      text-align: left;\n      position: absolute;\n      width: 300px;\n      margin-top: 0px;\n      left: 0px;\n      top: 0px;\n      border-left: none;\n      border-top: none;\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 0px; } }\n  @media screen and (min-width: 935px) {\n    body .leaderboardBlock {\n      position: absolute;\n      flex-direction: column;\n      width: 240px;\n      margin-top: 0px;\n      right: 0px;\n      top: 0px;\n      border-right: none;\n      border-top: none;\n      border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\n      border-top-left-radius: 0px; } }\n  body .saveLoadBlock {\n    font-size: 14px;\n    text-align: center; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  background: #559FB4; }\n\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(90deg, #ba8178 0%, #874d45 100%);\n  border-radius: 5px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #a86257; }\n\n::-webkit-scrollbar-thumb:active {\n  background: linear-gradient(90deg, #ba8178 0%, #874d45 100%); }\n", ""]);
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
document.body.append(writer.createHtml('div', 'fieldSelectorDiv flex'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('span', 'blurredSpan', 'Select field size'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('select', 'fieldSelector'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '4x4', 'value', '44'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '5x4', 'value', '54'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '6x6', 'value', '66'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('button', 'button fieldSelectorButton', 'Confirm & Shuffle'));
document.getElementsByClassName('fieldSelectorButton')[0].addEventListener('click', writer.changeFieldSize);

//creating timeNturnsBlock with buttons
document.body.append(writer.createHtml('div', 'timeNturnsBlock flex'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Time'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton stopwatch', '', 'value', '00:00', 'disabled', 'true'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Turns'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton turnsCounter', '', 'value', '0', 'disabled', 'true'));

//creating gameField
document.body.append(writer.createHtml('div', 'gameField flex gameField--4x4'));

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
/*! exports provided: createHtml, addCards, stopTurns, toggleCard, showMsg, compareCards, changeFieldSize, callback, isFirstBetter, changeLeadResult, showLeaderboard, saveGame, loadGame, clearStopwatch, startStopwatch, startStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHtml", function() { return createHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCards", function() { return addCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopTurns", function() { return stopTurns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCard", function() { return toggleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMsg", function() { return showMsg; });
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
  let classArray = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4', 'card5', 'card5', 'card6', 'card6', 'card7', 'card7', 'card8', 'card8', 'card9', 'card9', 'card10', 'card10', 'card11', 'card11', 'card12', 'card12', 'card13', 'card13', 'card14', 'card14', 'card15', 'card15', 'card16', 'card16', 'card17', 'card17', 'card18', 'card18'];

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  switch (document.getElementsByClassName('fieldSelector')[0].value) {
    case '44':
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
    case '54':
      classArray.length = 20;
      classArrLength = classArray.length;
      break;
    case '66':
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
    field.className = 'gameField flex';
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
      case '44':
        field.classList.add('gameField--4x4');
        addCards(16);
        break;
      case '54':
        field.classList.add('gameField--5x4');
        addCards(20);
        break;
      case '66':
        field.classList.add('gameField--6x6');
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
              showMsg(`<b>Well... <br> You'd better play without saving and loading... <br></b> Statistics are nor recorded for loaded games`);
              document.getElementsByClassName('msgDiv')[0].append(createHtml('button', 'msgButton', 'Play Again'));
              document.getElementsByClassName('msgButton')[0].addEventListener('click', changeFieldSize);
            }, 300);
          }

          //change HTML and localStorage if new result is better
          if (isFirstBetter(result, localStorage.getItem(result.size))) {
            setTimeout(function () {
              showMsg(`<b>Congratulations! <br> New Record! <br></b>You paired all the cards in ${time} and ${turns} turns <br>`);
              document.getElementsByClassName('msgDiv')[0].append(createHtml('button', 'msgButton', 'Play Again'));
              document.getElementsByClassName('msgButton')[0].addEventListener('click', changeFieldSize);
            }, 300);
            changeLeadResult(result);
          }
          else {
            setTimeout(function () {
              showMsg(`<b>Good, But You Gotta Try Harder To Beat The Record! <br> </b>You paired all the cards in ${time} and ${turns} turns <br>`);
              document.getElementsByClassName('msgDiv')[0].append(createHtml('button', 'msgButton', 'Play Again'));
              document.getElementsByClassName('msgButton')[0].addEventListener('click', changeFieldSize);
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
  if (localStorage.getItem(44)) {
    let res1 = JSON.parse(localStorage.getItem(44));
    document.getElementsByClassName('size44')[0].innerHTML = `<b>Time:</b> ${res1.time}, <b>Turns:</b> ${res1.turns} `;
  }
  if (localStorage.getItem(54)) {
    let res2 = JSON.parse(localStorage.getItem(54));
    document.getElementsByClassName('size54')[0].innerHTML = `<b>Time:</b> ${res2.time}, <b>Turns:</b> ${res2.turns} `;
  }
  if (localStorage.getItem(66)) {
    let res3 = JSON.parse(localStorage.getItem(66));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly8vLi9zcmMvd3JpdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy50dXRvcmlhbGNoaXAuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDExLzA2L0JsdWUtUGF0dGVybi5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcbiAgYm9keSAuZmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gIGJvZHkgLm5vY2xpY2sge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgYm9keSAubXNnRGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICM5YWVkZjkgMzUlLCAjNTc5ZGJiIDEwMCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiAxczsgfVxcbiAgYm9keSAubXNnRGl2IHAge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICBib2R5IC5tc2dCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5tc2dCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgYm9keSAubXNnQnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTsgfVxcbiAgYm9keSAuYmx1cnJlZFNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDVweCA1cHggMTBweDsgfVxcbiAgYm9keSAuZ2FtZUZpZWxkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IGJsYWNrOyB9XFxuICBib2R5IC5nYW1lRmllbGQtLTR4NCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7IH1cXG4gIGJvZHkgLmdhbWVGaWVsZC0tNXg0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTsgfVxcbiAgYm9keSAuZ2FtZUZpZWxkLS02eDYge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCAxZnIpOyB9XFxuICBib2R5IC5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDk3LjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XFxuICAgIGJvZHkgLmNhcmQge1xcbiAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgIGhlaWdodDogNjVweDsgfSB9XFxuICBib2R5IC5jYXJkMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ1MDEwMiAwJSwgI2ZmMDA0MiA1MCUsICM0NTAxMDIgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMmYzNzk5IDAlLCAjMDJmNWZiIDUwJSwgIzJmMzc5OSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYTM1MDggMCUsICM0ZWYzNGYgNTAlLCAjMGEzNTA4IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2RiMThiNiAwJSwgI2ZmYzhmYyA1MCUsICNkYjE4YjYgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDEyN2FkIDAlLCAjZDU5YWVlIDUwJSwgIzQxMjdhZCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZjMDAgMCUsIHdoaXRlIDUwJSwgI2ZmZmMwMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzI4MWIgMCUsICM5YzY0MjkgNTAlLCAjMzMyODFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YxMjcxMSAwJSwgI2Y1YWYxOSA1MCUsICNmMTI3MTEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmU0MDVhIDAlLCAjZjdiNmJhIDUwJSwgI2ZlNDA1YSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDE1ZWY5IDAlLCAjZjg0NzZlIDUwJSwgIzQxNWVmOSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDExIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmM2YjcxIDAlLCAjY2ZjZmNmIDUwJSwgIzZjNmI3MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWYxYzJjIDAlLCAjOTI4ZGFiIDUwJSwgIzFmMWMyYyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjM3NGQwIDAlLCAjZDBlZGZmIDUwJSwgIzYzNzRkMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGMxMDNjIDAlLCAjMGMxOWRiIDUwJSwgIzBlMTM1MCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDAzYjRhIDUlLCAjZTBlNDhhIDUwJSwgIzQwM2I0YSA5NSUpOyB9XFxuICBib2R5IC5jYXJkMTYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZDk3NmMgMCUsICM5M2Y5YjkgNTAlLCAjMWQ5NzZjIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyNGZlNDEgMCUsICNmZGZjNDcgNTAlLCAjMjRmZTQxIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzAwMWIgMCUsICNmZjAwODQgNTAlLCAjMzMwMDFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gIGJvZHkgLmNhcmQ6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7IH1cXG4gIGJvZHkgLmNhcmRCYWNrIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICBib2R5IC5pbnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yRGl2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3Ige1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzg3NGQ0NSAwJSwgI2JhODE3OCAxMDAlKTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nOiAwIDVweCAwO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yIG9wdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzRkNDU7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3I6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcbiAgYm9keSAuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNiYTgxNzggMCUsICM4NzRkNDUgMTAwJSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDRweCA1cHggNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5idXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICBib2R5IC5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjODc0ZDQ1IDAlLCAjYmE4MTc4IDEwMCUpOyB9XFxuICBib2R5IC50aW1lTnR1cm5zQmxvY2sge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDkwJTsgfVxcbiAgYm9keSAudGltZU50dXJuc0Jsb2NrQnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUxcHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWFyZ2luOiA3cHggNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gIGJvZHkgLmluZm9CbG9jayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAzcHggZGFzaGVkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTsgfVxcbiAgYm9keSAubGVhZGVyYm9hcmRCbG9jayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IH1cXG4gIGJvZHkgLmxlYWRlcmJvYXJkIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG4gICAgcGFkZGluZzogNXB4IDVweCAxMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBib2R5IC5sZWFkZXJib2FyZFdyYXAge1xcbiAgICBtYXJnaW46IDVweDsgfVxcbiAgYm9keSAuc2l6ZTQ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC4yKTsgfVxcbiAgYm9keSAuc2l6ZTU0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC40KTsgfVxcbiAgYm9keSAuc2l6ZTY2IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNiwgODMsIDI1NSwgMC42KTsgfVxcbiAgYm9keSAubGluZUJyZWFrIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwNzBweCkge1xcbiAgICBib2R5IC5pbmZvQmxvY2sge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMHB4O1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzNXB4KSB7XFxuICAgIGJvZHkgLmxlYWRlcmJvYXJkQmxvY2sge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgICAgcmlnaHQ6IDBweDtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4OyB9IH1cXG4gIGJvZHkgLnNhdmVMb2FkQmxvY2sge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICM1NTlGQjQ7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2E4NjI1NzsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2JhODE3OCAwJSwgIzg3NGQ0NSAxMDAlKTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCB3cml0ZXIgPSByZXF1aXJlKCcuXFxcXHdyaXRlci5qcycpO1xyXG5pbXBvcnQgJy5cXFxcc3R5bGVzLnNjc3MnXHJcblxyXG4vL2NyZWF0aW5nIGZpZWxkU2VsZWN0b3IgYmxvY2sgYW5kIGl0cyBjb250ZW50c1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2ZpZWxkU2VsZWN0b3JEaXYgZmxleCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckRpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc3BhbicsICdibHVycmVkU3BhbicsICdTZWxlY3QgZmllbGQgc2l6ZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckRpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnc2VsZWN0JywgJ2ZpZWxkU2VsZWN0b3InKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ29wdGlvbicsICcnLCAnNHg0JywgJ3ZhbHVlJywgJzQ0JykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzV4NCcsICd2YWx1ZScsICc1NCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc2eDYnLCAndmFsdWUnLCAnNjYnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3JEaXYnKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gZmllbGRTZWxlY3RvckJ1dHRvbicsICdDb25maXJtICYgU2h1ZmZsZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd3JpdGVyLmNoYW5nZUZpZWxkU2l6ZSk7XHJcblxyXG4vL2NyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lTnR1cm5zQmxvY2sgZmxleCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzcGFuJywgJ2JsdXJyZWRTcGFuJywgJ1RpbWUnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVOdHVybnNCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnaW5wdXQnLCAndGltZU50dXJuc0Jsb2NrQnV0dG9uIHN0b3B3YXRjaCcsICcnLCAndmFsdWUnLCAnMDA6MDAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzcGFuJywgJ2JsdXJyZWRTcGFuJywgJ1R1cm5zJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2lucHV0JywgJ3RpbWVOdHVybnNCbG9ja0J1dHRvbiB0dXJuc0NvdW50ZXInLCAnJywgJ3ZhbHVlJywgJzAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuXHJcbi8vY3JlYXRpbmcgZ2FtZUZpZWxkXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnZ2FtZUZpZWxkIGZsZXggZ2FtZUZpZWxkLS00eDQnKSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gd3JpdGVyLmFkZENhcmRzKDE2KTtcclxuXHJcbi8vY3JlYXRpbmcgYmxvY2sgd2l0aCBpbmZvcm1hdGlvblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2luZm9CbG9jaycsICc8Yj5NZW1vcnkgR2FtZTwvYj4gPGJyPiBGbGlwIHR3byBjYXJkcy4gSWYgdGhlIGNhcmRzIGFyZSB0aGUgc2FtZSBvbiB0aGVpciBmYWNlIHNpZGUgLSB0aGV5IGRpc2FwcGVhci4gSWYgdGhleSBhcmUgZGlmZmVyZW50IC0geW91IGhhdmUgdG8gcGljayBhbm90aGVyIHBhaXIuIENsZWFyaW5nIHRoZSBmaWVsZCBpcyB0aGUgd2lubmluZyBjb25kaXRpb24gPGJyPiA8Yj5DbGljazwvYj4gb24gYW55IGNhcmQgdG8gc3RhcnQgcGxheWluZyA8YnI+IDxiPkNvbmZpcm0gJiBTaHVmZmxlPC9iPiAtIHNodWZmbGUgZmllbGQgb2Ygc2VsZWN0ZWQgc2l6ZScpKTtcclxuXHJcbi8vY3JlYXRpbmcgYmVzdCByZXN1bHRzIGJsb2NrXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbGVhZGVyYm9hcmRCbG9jaycsICc8Yj5MZWFkZXJib2FyZDwvYj4nKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsaW5lQnJlYWsnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsZWFkZXJib2FyZFdyYXAnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkV3JhcCcpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkIHNpemU0NCcsICcnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpemU0NCcpWzBdLmJlZm9yZSh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkJywgJzxiPjR4NDwvYj4nKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsZWFkZXJib2FyZFdyYXAnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkV3JhcCcpWzFdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkIHNpemU1NCcsICcnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpemU1NCcpWzBdLmJlZm9yZSh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkJywgJzxiPjV4NDwvYj4nKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsZWFkZXJib2FyZFdyYXAnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkV3JhcCcpWzJdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkIHNpemU2NicsICcnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpemU2NicpWzBdLmJlZm9yZSh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ2xlYWRlcmJvYXJkJywgJzxiPjZ4NjwvYj4nKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xlYWRlcmJvYXJkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdsaW5lQnJlYWsnKSk7XHJcbndpbmRvdy5vbmxvYWQgPSB3cml0ZXIuc2hvd0xlYWRlcmJvYXJkKCk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsZWFkZXJib2FyZEJsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnc2F2ZUxvYWRCbG9jaycsICdTdGF0aXN0aWNzIGFyZSBub3QgcmVjb3JkZWQgZm9yIGxvYWRlZCBnYW1lcywgdHJhaW4gaW4gcmVhbCB0aW1lIHRvIGNvbnF1ZXIgbGVhZGVyYm9hcmQhIDxicj4nKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NhdmVMb2FkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIHNhdmVHYW1lQnV0dG9uJywgJ1NhdmUgR2FtZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2F2ZUdhbWVCdXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdyaXRlci5zYXZlR2FtZSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NhdmVMb2FkQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdidXR0b24gIGxvYWRHYW1lQnV0dG9uJywgJ0xvYWQgR2FtZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9hZEdhbWVCdXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB3cml0ZXIubG9hZEdhbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTYXZlJykpO1xyXG59KTtcclxuXHJcbi8vY29uZmlndXJpbmcgdGhlIG11dGF0aW9uIG9ic2VydmVyIGZvciBkZWxlZ2F0aW9uIHRvIHdvcmsgcHJvcGVybHlcclxudmFyIGZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGNoaWxkTGlzdDogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih3cml0ZXIuY2FsbGJhY2spO1xyXG5vYnNlcnZlci5vYnNlcnZlKGZpZWxkLCBjb25maWcpO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvL2NyZWF0ZSBodG1sIGVsZW1lbnQgd2l0aCBnaXZlbiBhdHRyaWJ1dGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sIChzZWxlY3RvciwgY2xhc3NOYW1lLCBpbm5lclRleHQsIC4uLmtleXNWYWx1ZXMpIHtcclxuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xyXG4gIGNsYXNzTmFtZSA9PSB1bmRlZmluZWQgPyBlbGVtLmNsYXNzTmFtZSA9ICcnIDogZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgaW5uZXJUZXh0ID09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICBpZiAoa2V5c1ZhbHVlcy5sZW5ndGggIT0gMCl7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICB3aGlsZSAoaSA8IGtleXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaS0xXSwga2V5c1ZhbHVlc1tpXSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW07XHJcbn07XHJcblxyXG52YXIgY2xhc3NBcnJMZW5ndGggPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2FyZHMgKG51bSkge1xyXG4gIGxldCBjbGFzc0FycmF5ID0gWydjYXJkMScsICdjYXJkMScsICdjYXJkMicsICdjYXJkMicsICdjYXJkMycsICdjYXJkMycsICdjYXJkNCcsICdjYXJkNCcsICdjYXJkNScsICdjYXJkNScsICdjYXJkNicsICdjYXJkNicsICdjYXJkNycsICdjYXJkNycsICdjYXJkOCcsICdjYXJkOCcsICdjYXJkOScsICdjYXJkOScsICdjYXJkMTAnLCAnY2FyZDEwJywgJ2NhcmQxMScsICdjYXJkMTEnLCAnY2FyZDEyJywgJ2NhcmQxMicsICdjYXJkMTMnLCAnY2FyZDEzJywgJ2NhcmQxNCcsICdjYXJkMTQnLCAnY2FyZDE1JywgJ2NhcmQxNScsICdjYXJkMTYnLCAnY2FyZDE2JywgJ2NhcmQxNycsICdjYXJkMTcnLCAnY2FyZDE4JywgJ2NhcmQxOCddO1xyXG5cclxuICBmdW5jdGlvbiBnZXRSbmRJbnQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSApICsgbWluO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0udmFsdWUpIHtcclxuICAgIGNhc2UgJzQ0JzpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAxNjtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICc1NCc6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMjA7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnNjYnOlxyXG4gICAgICBjbGFzc0FycmF5Lmxlbmd0aCA9IDM2O1xyXG4gICAgICBjbGFzc0Fyckxlbmd0aCA9IGNsYXNzQXJyYXkubGVuZ3RoO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBjbGFzc0Fyckxlbmd0aDsgaSsrKXtcclxuICAgIGxldCByYW5kb20gPSBnZXRSbmRJbnQoMCwgY2xhc3NBcnJheS5sZW5ndGgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uYXBwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsIGBjYXJkICR7Y2xhc3NBcnJheVtyYW5kb21dfSBjYXJkQmFja2ApKTtcclxuICAgIGNsYXNzQXJyYXkuc3BsaWNlKHJhbmRvbSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcFR1cm5zICgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZSA9ICcwJztcclxufVxyXG5cclxuLy90b2dnbGluZyBjYXJkIGZhY2UgdXAvZG93blxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2FyZCAoLi4uY2FyZHMpIHtcclxuICBmb3IobGV0IGNhcmQgb2YgY2FyZHMpe1xyXG4gICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkQmFjaycpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNc2cgKG1zZykge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLnByZXBlbmQoY3JlYXRlSHRtbCgnZGl2JywgJ21zZ0RpdicpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dEaXYnKVswXS5wcmVwZW5kKGNyZWF0ZUh0bWwoJ3AnLCAnJywgbXNnKSk7XHJcbn07XHJcblxyXG52YXIgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVDYXJkcyAoY2FyZDEsIGNhcmQyKSB7XHJcbiAgaWYgKGNhcmQxLmNsYXNzTGlzdFsxXSA9PSBjYXJkMi5jbGFzc0xpc3RbMV0pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQxLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgMzAwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgMzAwKTtcclxuICAgIGVtcHR5Q2FyZE51bWJlciArPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYXJkMS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBjYXJkMi5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBzZXRUaW1lb3V0KHRvZ2dsZUNhcmQsIDQwMCwgY2FyZDEsIGNhcmQyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWVsZFNpemUgKCkge1xyXG4gIGxldCBlbGVtcywgZmllbGQsIGNhcmQ7XHJcbiAgaXNMb2FkZWRHYW1lID0gZmFsc2U7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLnJlbW92ZSgpO1xyXG5cclxuICBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKTtcclxuICBBcnJheS5mcm9tKGVsZW1zKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdnYW1lRmllbGQgZmxleCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hZnRlcihmaWVsZCk7XHJcblxyXG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICAgIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcclxuICAgIGluaXQgPSAwO1xyXG4gICAgc3RvcFR1cm5zKCk7XHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG4gICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuXHJcbiAgICBzaG93TXNnKCc8Yj5TaHVmZmxpbmcuLi48L2I+Jyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0ucmVtb3ZlKCk7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBzd2l0Y2ggKGVsLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJzQ0JzpcclxuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKCdnYW1lRmllbGQtLTR4NCcpO1xyXG4gICAgICAgIGFkZENhcmRzKDE2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnNTQnOlxyXG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2dhbWVGaWVsZC0tNXg0Jyk7XHJcbiAgICAgICAgYWRkQ2FyZHMoMjApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICc2Nic6XHJcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnZ2FtZUZpZWxkLS02eDYnKTtcclxuICAgICAgICBhZGRDYXJkcygzNik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmxldCBmYWNlVXBDb3VudGVyID0gMDtcclxubGV0IGZhY2VVcENhcmQxO1xyXG52YXIgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxubGV0IGlzTG9hZGVkR2FtZSA9IGZhbHNlO1xyXG5leHBvcnQgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZCcpKSByZXR1cm47XHJcbiAgICB0b2dnbGVDYXJkKHRhcmdldCk7XHJcblxyXG4gICAgaWYgKGlzRmlyc3RDbGljaykge1xyXG4gICAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgc3RhcnRTdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkQmFjaycpKSB7XHJcbiAgICAgIGZhY2VVcENvdW50ZXIgKz0gMTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vY2xpY2snKTtcclxuICAgICAgLy9pZiB0d28gY2FyZHMgYXJlIGZhY2VkIHVwXHJcbiAgICAgIGlmIChmYWNlVXBDb3VudGVyID49IDIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpfSwgMjAwKTtcclxuICAgICAgICBpZiAoIWlzTG9hZGVkR2FtZSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWUrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcGFyZUNhcmRzKHRhcmdldCwgZmFjZVVwQ2FyZDEpO1xyXG5cclxuICAgICAgICBsZXQgY2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJyk7XHJcbiAgICAgICAgaWYgKGVtcHR5Q2FyZE51bWJlciA9PSBjbGFzc0Fyckxlbmd0aCkge1xyXG4gICAgICAgICAgbGV0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZTtcclxuICAgICAgICAgIGxldCB0dXJucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R1cm5zQ291bnRlcicpWzBdLnZhbHVlO1xyXG5cclxuICAgICAgICAgIGxldCBmaWVsZFNpemUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0udmFsdWU7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAndGltZSc6IHRpbWUsXHJcbiAgICAgICAgICAgICd0dXJucyc6IHR1cm5zLFxyXG4gICAgICAgICAgICAnc2l6ZSc6IGZpZWxkU2l6ZSxcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoaXNMb2FkZWRHYW1lKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHNob3dNc2coYDxiPldlbGwuLi4gPGJyPiBZb3UnZCBiZXR0ZXIgcGxheSB3aXRob3V0IHNhdmluZyBhbmQgbG9hZGluZy4uLiA8YnI+PC9iPiBTdGF0aXN0aWNzIGFyZSBub3IgcmVjb3JkZWQgZm9yIGxvYWRlZCBnYW1lc2ApO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLmFwcGVuZChjcmVhdGVIdG1sKCdidXR0b24nLCAnbXNnQnV0dG9uJywgJ1BsYXkgQWdhaW4nKSk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnQnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VGaWVsZFNpemUpO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vY2hhbmdlIEhUTUwgYW5kIGxvY2FsU3RvcmFnZSBpZiBuZXcgcmVzdWx0IGlzIGJldHRlclxyXG4gICAgICAgICAgaWYgKGlzRmlyc3RCZXR0ZXIocmVzdWx0LCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShyZXN1bHQuc2l6ZSkpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHNob3dNc2coYDxiPkNvbmdyYXR1bGF0aW9ucyEgPGJyPiBOZXcgUmVjb3JkISA8YnI+PC9iPllvdSBwYWlyZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfSB0dXJucyA8YnI+YCk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0uYXBwZW5kKGNyZWF0ZUh0bWwoJ2J1dHRvbicsICdtc2dCdXR0b24nLCAnUGxheSBBZ2FpbicpKTtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dCdXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZUZpZWxkU2l6ZSk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgIGNoYW5nZUxlYWRSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICBzaG93TXNnKGA8Yj5Hb29kLCBCdXQgWW91IEdvdHRhIFRyeSBIYXJkZXIgVG8gQmVhdCBUaGUgUmVjb3JkISA8YnI+IDwvYj5Zb3UgcGFpcmVkIGFsbCB0aGUgY2FyZHMgaW4gJHt0aW1lfSBhbmQgJHt0dXJuc30gdHVybnMgPGJyPmApO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLmFwcGVuZChjcmVhdGVIdG1sKCdidXR0b24nLCAnbXNnQnV0dG9uJywgJ1BsYXkgQWdhaW4nKSk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnQnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VGaWVsZFNpemUpO1xyXG4gICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHN0YXJ0U3RvcCgpO1xyXG4gICAgICAgICAgc3RvcFR1cm5zKCk7XHJcbiAgICAgICAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmFjZVVwQ291bnRlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGZhY2VVcENhcmQxID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0QmV0dGVyIChyZWNlbnQsIHByZXZpb3VzKSB7XHJcbiAgbGV0IHJlY2VudFRpbWUgPSBOdW1iZXIocmVjZW50LnRpbWUucmVwbGFjZSgnOicsICcnKSk7XHJcbiAgbGV0IHJlY2VudFJhdGlvID0gcmVjZW50VGltZSArIHJlY2VudC50dXJucztcclxuXHJcbiAgLy9tYWtlIHJlY2VudCBiZXR0ZXIgaWYgdGhlcmUgaXMgbm8gcHJldmlvdXNcclxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHJlY2VudC5zaXplKSkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG5cclxuICBsZXQgcHJldmlvdXNUaW1lID0gTnVtYmVyKEpTT04ucGFyc2UocHJldmlvdXMpLnRpbWUucmVwbGFjZSgnOicsICcnKSk7XHJcbiAgbGV0IHByZXZpb3VzUmF0aW8gPSBwcmV2aW91c1RpbWUgKyBKU09OLnBhcnNlKHByZXZpb3VzKS50dXJucztcclxuXHJcbiAgLy9pZiBuZXcgcmVzdWx0IGlzIHdvcnNlIHRoYW4gc2F2ZWQgb25lXHJcbiAgaWYgKHJlY2VudFJhdGlvID49IHByZXZpb3VzUmF0aW8pIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLy9pZiBuZXcgcmVzdWx0IGlzIGJldHRlciB0aGFuIHNhdmVkIG9uZVxyXG4gIHJldHVybiAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTGVhZFJlc3VsdCAocmVzdWx0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocmVzdWx0LnNpemUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHNpemUke3Jlc3VsdC5zaXplfWApWzBdLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXN1bHQudGltZX0sIDxiPlR1cm5zOjwvYj4gJHtyZXN1bHQudHVybnN9IGA7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocmVzdWx0LnNpemUsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xlYWRlcmJvYXJkICgpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oNDQpKSB7XHJcbiAgICBsZXQgcmVzMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oNDQpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpemU0NCcpWzBdLmlubmVySFRNTCA9IGA8Yj5UaW1lOjwvYj4gJHtyZXMxLnRpbWV9LCA8Yj5UdXJuczo8L2I+ICR7cmVzMS50dXJuc30gYDtcclxuICB9XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKDU0KSkge1xyXG4gICAgbGV0IHJlczIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKDU0KSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaXplNTQnKVswXS5pbm5lckhUTUwgPSBgPGI+VGltZTo8L2I+ICR7cmVzMi50aW1lfSwgPGI+VHVybnM6PC9iPiAke3JlczIudHVybnN9IGA7XHJcbiAgfVxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSg2NikpIHtcclxuICAgIGxldCByZXMzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSg2NikpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2l6ZTY2JylbMF0uaW5uZXJIVE1MID0gYDxiPlRpbWU6PC9iPiAke3JlczMudGltZX0sIDxiPlR1cm5zOjwvYj4gJHtyZXMzLnR1cm5zfSBgO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVHYW1lICh0aW1lLCB0dXJucykge1xyXG4gIGxldCBzYXZlVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3B3YXRjaCcpWzBdLnZhbHVlO1xyXG4gIGxldCBzYXZlVHVybnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZTtcclxuICBsZXQgc2F2ZUZpZWxkU2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKVswXS52YWx1ZTtcclxuICBsZXQgY3VycmVudEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uaW5uZXJIVE1MO1xyXG5cclxuICBzaG93TXNnKCc8Yj5TYXZpbmcuLi48L2I+Jyk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dEaXYnKVswXS5yZW1vdmUoKTtcclxuICB9LCAxMDAwKTtcclxuXHJcbiAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgaW5pdCA9IDA7XHJcbiAgc3RvcFR1cm5zKCk7XHJcbiAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XHJcbiAgICAgIGVtcHR5Q2FyZE51bWJlciArPSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBsZXQgc2F2ZWRHYW1lID0ge1xyXG4gICAgJ3NpemUnOiBzYXZlRmllbGRTaXplLFxyXG4gICAgJ2ZpZWxkJzogY3VycmVudEZpZWxkLFxyXG4gIH1cclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTYXZlJywgSlNPTi5zdHJpbmdpZnkoc2F2ZWRHYW1lKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkR2FtZSAoc2F2ZSkge1xyXG4gIGxldCBnYW1lU2F2ZSA9IEpTT04ucGFyc2Uoc2F2ZSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKVswXS52YWx1ZSA9IGdhbWVTYXZlLnNpemU7XHJcbiAgY2hhbmdlRmllbGRTaXplKCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0uaW5uZXJIVE1MID0gJzxwPjxiPkxvYWRpbmcuLi48L2I+PC9wPic7XHJcblxyXG4gIC8vbG9hZGluZyBzYXZlZCBmaWVsZFxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uaW5uZXJIVE1MID0gZ2FtZVNhdmUuZmllbGQ7XHJcbiAgICBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG4gICAgaXNGaXJzdENsaWNrID0gZmFsc2U7XHJcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XHJcbiAgICAgICAgZW1wdHlDYXJkTnVtYmVyICs9IDE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIDEwMDApO1xyXG4gIGlzTG9hZGVkR2FtZSA9IHRydWU7XHJcbn1cclxuXHJcbi8vU3RvcHdhdGNoIGluaXRpYWl6YXRpb24gYW5kIGZ1bmN0aW9uc1xyXG52YXIgYmFzZSA9IDYwO1xyXG52YXIgY2xvY2t0aW1lciwgZGF0ZU9iaiwgZGgsIGRtLCBkcywgbXM7XHJcbnZhciByZWFkb3V0ID0gJyc7XHJcbnZhciBoID0gMSxcclxuICBtID0gMSxcclxuICB0bSA9IDEsXHJcbiAgcyA9IDAsXHJcbiAgdHMgPSAwLFxyXG4gIG1zID0gMCxcclxuICBpbml0ID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN0b3B3YXRjaCAoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xyXG4gIGggPSAxO1xyXG4gIG0gPSAxO1xyXG4gIHRtID0gMTtcclxuICBzID0gMDtcclxuICB0cyA9IDA7XHJcbiAgbXMgPSAwO1xyXG4gIGluaXQgPSAwO1xyXG4gIHJlYWRvdXQgPSAnMDA6MDAnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3B3YXRjaCcpWzBdLnZhbHVlID0gcmVhZG91dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcHdhdGNoICgpIHtcclxuICB2YXIgY2RhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciB0ID0gKGNkYXRlT2JqLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAtIChzICogMTAwMCk7XHJcbiAgaWYgKHQgPiA5OTkpIHtcclxuICAgIHMrKztcclxuICB9XHJcbiAgaWYgKHMgPj0gKG0gKiBiYXNlKSkge1xyXG4gICAgdHMgPSAwO1xyXG4gICAgbSsrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cyA9IHBhcnNlSW50KChtcyAvIDEwMCkgKyBzKTtcclxuICAgIGlmICh0cyA+PSBiYXNlKSB7XHJcbiAgICAgIHRzID0gdHMgLSAoKG0gLSAxKSAqIGJhc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobSA+IChoICogYmFzZSkpIHtcclxuICAgIHRtID0gMTtcclxuICAgIGgrKztcclxuICB9IGVsc2Uge1xyXG4gICAgdG0gPSBwYXJzZUludCgobXMgLyAxMDApICsgbSk7XHJcbiAgICBpZiAodG0gPj0gYmFzZSkge1xyXG4gICAgICB0bSA9IHRtIC0gKChoIC0gMSkgKiBiYXNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHRzID4gMCkge1xyXG4gICAgZHMgPSB0cztcclxuICAgIGlmICh0cyA8IDEwKSB7XHJcbiAgICAgIGRzID0gJzAnICsgdHM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRzID0gJzAwJztcclxuICB9XHJcbiAgZG0gPSB0bSAtIDE7XHJcbiAgaWYgKGRtID4gMCkge1xyXG4gICAgaWYgKGRtIDwgMTApIHtcclxuICAgICAgZG0gPSAnMCcgKyBkbTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZG0gPSAnMDAnO1xyXG4gIH1cclxuICByZWFkb3V0ID0gZG0gKyAnOicgKyBkcztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZSA9IHJlYWRvdXQ7XHJcbiAgY2xvY2t0aW1lciA9IHNldFRpbWVvdXQoc3RhcnRTdG9wd2F0Y2gsIDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wICgpIHtcclxuICBpZiAoaW5pdCA9PSAwKSB7XHJcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xyXG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBzdGFydFN0b3B3YXRjaCgpO1xyXG4gICAgaW5pdCA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgICBpbml0ID0gMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==