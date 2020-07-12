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
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .flex {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n  body .noclick {\n    pointer-events: none; }\n  body .msgDiv {\n    position: absolute;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    background: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 1; }\n  body .msgDiv p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msgButton {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .msgButton:hover {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .msgButton:active {\n    background-color: #874e45; }\n  body .blurredSpan {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gameField {\n    border: 3px solid black;\n    border-radius: 10px;\n    flex-direction: row;\n    align-content: space-around;\n    justify-content: space-around;\n    width: 300px;\n    height: 430px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    position: relative; }\n  body .card1 {\n    background-image: linear-gradient(45deg, #450102 0%, #ff0042 50%, #450102 100%); }\n  body .card2 {\n    background-image: linear-gradient(45deg, #2f3799 0%, #02f5fb 50%, #2f3799 100%); }\n  body .card3 {\n    background-image: linear-gradient(45deg, #0a3508 0%, #4ef34f 50%, #0a3508 100%); }\n  body .card4 {\n    background-image: linear-gradient(45deg, #db18b6 0%, #ffc8fc 50%, #db18b6 100%); }\n  body .card5 {\n    background-image: linear-gradient(45deg, #4127ad 0%, #d59aee 50%, #4127ad 100%); }\n  body .card6 {\n    background-image: linear-gradient(45deg, #fffc00 0%, white 50%, #fffc00 100%); }\n  body .card7 {\n    background-image: linear-gradient(45deg, #33281b 0%, #9c6429 50%, #33281b 100%); }\n  body .card8 {\n    background-image: linear-gradient(45deg, #f12711 0%, #f5af19 50%, #f12711 100%); }\n  body .card9 {\n    background-image: linear-gradient(45deg, #fe405a 0%, #f7b6ba 50%, #fe405a 100%); }\n  body .card10 {\n    background-image: linear-gradient(45deg, #415ef9 0%, #f8476e 50%, #415ef9 100%); }\n  body .card11 {\n    background-image: linear-gradient(45deg, #6c6b71 0%, #cfcfcf 50%, #6c6b71 100%); }\n  body .card12 {\n    background-image: linear-gradient(45deg, #1f1c2c 0%, #928dab 50%, #1f1c2c 100%); }\n  body .card13 {\n    background-image: linear-gradient(45deg, #6374d0 0%, #d0edff 50%, #6374d0 100%); }\n  body .card14 {\n    background-image: linear-gradient(45deg, #0c103c 0%, #0c19db 50%, #0e1350 100%); }\n  body .card15 {\n    background-image: linear-gradient(45deg, #403b4a 5%, #e0e48a 50%, #403b4a 95%); }\n  body .card16 {\n    background-image: linear-gradient(45deg, #1d976c 0%, #93f9b9 50%, #1d976c 100%); }\n  body .card17 {\n    background-image: linear-gradient(45deg, #24fe41 0%, #fdfc47 50%, #24fe41 100%); }\n  body .card18 {\n    background-image: linear-gradient(45deg, #33001b 0%, #ff0084 50%, #33001b 100%); }\n  body .card:hover {\n    filter: brightness(90%);\n    box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .cardBack {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\"); }\n  body .invisible {\n    opacity: 0;\n    transition: 0.5s; }\n  body .menuBlock {\n    width: 80%;\n    flex-wrap: nowrap; }\n  body .menuBlockButton {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    width: 180px;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .menuBlockButton:hover {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .menuBlockButton:active {\n    background-color: #874e45; }\n  body .fieldSelectorDiv {\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .fieldSelector {\n    appearance: none;\n    cursor: pointer;\n    background-color: #ba8178;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    outline: none; }\n  body .fieldSelector:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .fieldSelector:focus {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .fieldSelectorButton {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    outline: none; }\n  body .fieldSelectorButton:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .fieldSelectorButton:active {\n    background-color: #874e45; }\n  body .timeNturnsBlock {\n    font-weight: bold;\n    width: 80%; }\n  body .timeNturnsBlockButton {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  background: #559FB4; }\n\n::-webkit-scrollbar-thumb {\n  background: #ba8178;\n  border-radius: 5px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #a86257; }\n\n::-webkit-scrollbar-thumb:active {\n  background: #ba8178; }\n", ""]);
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


//creating menuBlock with buttons
document.body.append(writer.createHtml('div', 'menuBlock flex'));
document.getElementsByClassName('menuBlock')[0].append(writer.createHtml('button', 'menuBlockButton', 'Start/Stop'));
document.getElementsByClassName('menuBlockButton')[0].addEventListener('click', writer.startStop);
document.getElementsByClassName('menuBlock')[0].append(writer.createHtml('button', 'menuBlockButton', 'Shuffle'));

//creating fieldSelector block and its contents
document.body.append(writer.createHtml('div', 'fieldSelectorDiv flex'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('span', 'blurredSpan', 'Select field size'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('select', 'fieldSelector'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '4x4', 'value', '1'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '5x4', 'value', '2'));
document.getElementsByClassName('fieldSelector')[0].append(writer.createHtml('option', '', '6x6', 'value', '3'));
document.getElementsByClassName('fieldSelectorDiv')[0].append(writer.createHtml('button', 'fieldSelectorButton', 'Confirm'));
document.getElementsByClassName('fieldSelectorButton')[0].addEventListener('click', writer.changeFieldSize);

//creating timeNturnsBlock with buttons
document.body.append(writer.createHtml('div', 'timeNturnsBlock flex'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Time'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton stopwatch', '', 'value', '00:00', 'disabled', 'true'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('span', 'blurredSpan', 'Turns'));
document.getElementsByClassName('timeNturnsBlock')[0].append(writer.createHtml('input', 'timeNturnsBlockButton turnsCounter', '', 'value', '0', 'disabled', 'true'));

//creating gameField
document.body.append(writer.createHtml('div', 'gameField flex'));

window.onload = writer.addCards(16);

//creating welcome message
window.onload = writer.showMsg('<b>Welcome to the <br> "Memory Game"</b><br>Pair the cards by taking 2 of them per turn until the game field is empty');

window.onload = document.getElementsByClassName('msgDiv')[0].append(writer.createHtml('button', 'msgButton', 'Get me started!'));

document.getElementsByClassName('msgButton')[0].addEventListener('click', () => {
  document.getElementsByClassName('msgDiv')[0].remove();
});

//configuring the mutation observer for delegation to work properly
var field = document.getElementsByTagName('body')[0];

const config = {
    childList: true
};

const observer = new MutationObserver(writer.callback);
observer.observe(field, config);



// let time = document.getElementsByClassName('stopwatch')[0].value;
// let turns = document.getElementsByClassName('turnsCounter')[0].value;
// writer.showMsg(`<b>Congratulations!</b><br>You revealed all the cards in ${time} and ${turns}`);


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
/*! exports provided: createHtml, addCards, stopTurns, toggleCard, showMsg, compareCards, changeFieldSize, callback, clearStopwatch, startStopwatch, startStop */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStopwatch", function() { return clearStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStopwatch", function() { return startStopwatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStop", function() { return startStop; });
//create html element with given attributes
function createHtml(selector, className, innerText, ...keysValues) {
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
}

var classArrLength = 0;
function addCards (num) {
  let classArray = ['card1', 'card1', 'card2', 'card2', 'card3', 'card3', 'card4', 'card4', 'card5', 'card5', 'card6', 'card6', 'card7', 'card7', 'card8', 'card8', 'card9', 'card9', 'card10', 'card10', 'card11', 'card11', 'card12', 'card12', 'card13', 'card13', 'card14', 'card14', 'card15', 'card15', 'card16', 'card16', 'card17', 'card17', 'card18', 'card18'];

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  switch (document.getElementsByClassName('fieldSelector')[0].value) {
    case '1':
      classArray.length = 16;
      classArrLength = classArray.length;
      break;
    case '2':
      classArray.length = 20;
      classArrLength = classArray.length;
      break;
    case '3':
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

function stopTurns() {
  document.getElementsByClassName('turnsCounter')[0].value = '0';
}

//toggling card face up/down
function toggleCard(...cards) {
  for(let card of cards){
    card.classList.toggle('cardBack');
  }
}

function showMsg(msg) {
  document.getElementsByClassName('gameField')[0].prepend(createHtml('div', 'msgDiv'));
  document.getElementsByClassName('msgDiv')[0].prepend(createHtml('p', '', msg));
};

var emptyCardNumber = 0;
function compareCards(card1, card2) {
  if (card1.classList[1] == card2.classList[1]) {
    setTimeout(() => {card1.classList.add('invisible', 'noclick');}, 500);
    setTimeout(() => {card2.classList.add('invisible', 'noclick');}, 500);
    emptyCardNumber += 2;
  } else {
    card1.classList.remove('noclick');
    card2.classList.remove('noclick');
    setTimeout(toggleCard, 500, card1, card2);
  }
}

function changeFieldSize () {
  let elems, field, card;

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

    switch (el.value) {
      case '1':
      addCards(16);
        break;
      case '2':
        field.style.width = '375px';
        addCards(20);
        break;
      case '3':
        field.style.width = '420px';
        field.style.height = '645px';
        addCards(36);
        break;
      default:
    }
  });
}

let faceUpCounter = 0;
let faceUpCard1;
var isFirstClick = true;
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
        setTimeout(() => {document.getElementsByClassName('gameField')[0].classList.remove('noclick')}, 500);
        compareCards(target, faceUpCard1);

        let cards = document.getElementsByClassName('card');
        if (emptyCardNumber == classArrLength) {
          let time = document.getElementsByClassName('stopwatch')[0].value;
          let turns = document.getElementsByClassName('turnsCounter')[0].value;
          showMsg(`<b>Congratulations!</b><br>You paired all the cards in ${time} and ${turns} turns`);
          startStop();
          stopTurns();
          faceUpCounter = 0;
          emptyCardNumber = 0;
          return;
        }

        faceUpCounter = 0;
        document.getElementsByClassName('turnsCounter')[0].value++;
        return;
      }
      faceUpCard1 = target;
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly8vLi9zcmMvd3JpdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRFQUE0RTtBQUN0Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxLQUFLLE9BQU8sTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnR1dG9yaWFsY2hpcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTEvMDYvQmx1ZS1QYXR0ZXJuLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuICBib2R5IC5mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgYm9keSAubm9jbGljayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICBib2R5IC5tc2dEaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzlhZWRmOSAzNSUsICM1NzlkYmIgMTAwJSk7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gIGJvZHkgLm1zZ0RpdiBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgYm9keSAubXNnQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE4MTc4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIGJvZHkgLm1zZ0J1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICBib2R5IC5tc2dCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3NGU0NTsgfVxcbiAgYm9keSAuYmx1cnJlZFNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDVweCA1cHggMTBweDsgfVxcbiAgYm9keSAuZ2FtZUZpZWxkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggYmxhY2s7IH1cXG4gIGJvZHkgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTcuNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBib2R5IC5jYXJkMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ1MDEwMiAwJSwgI2ZmMDA0MiA1MCUsICM0NTAxMDIgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMmYzNzk5IDAlLCAjMDJmNWZiIDUwJSwgIzJmMzc5OSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwYTM1MDggMCUsICM0ZWYzNGYgNTAlLCAjMGEzNTA4IDEwMCUpOyB9XFxuICBib2R5IC5jYXJkNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2RiMThiNiAwJSwgI2ZmYzhmYyA1MCUsICNkYjE4YjYgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDEyN2FkIDAlLCAjZDU5YWVlIDUwJSwgIzQxMjdhZCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZjMDAgMCUsIHdoaXRlIDUwJSwgI2ZmZmMwMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzI4MWIgMCUsICM5YzY0MjkgNTAlLCAjMzMyODFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YxMjcxMSAwJSwgI2Y1YWYxOSA1MCUsICNmMTI3MTEgMTAwJSk7IH1cXG4gIGJvZHkgLmNhcmQ5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmU0MDVhIDAlLCAjZjdiNmJhIDUwJSwgI2ZlNDA1YSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDE1ZWY5IDAlLCAjZjg0NzZlIDUwJSwgIzQxNWVmOSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDExIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNmM2YjcxIDAlLCAjY2ZjZmNmIDUwJSwgIzZjNmI3MSAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMWYxYzJjIDAlLCAjOTI4ZGFiIDUwJSwgIzFmMWMyYyAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDEzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNjM3NGQwIDAlLCAjZDBlZGZmIDUwJSwgIzYzNzRkMCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGMxMDNjIDAlLCAjMGMxOWRiIDUwJSwgIzBlMTM1MCAxMDAlKTsgfVxcbiAgYm9keSAuY2FyZDE1IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDAzYjRhIDUlLCAjZTBlNDhhIDUwJSwgIzQwM2I0YSA5NSUpOyB9XFxuICBib2R5IC5jYXJkMTYge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxZDk3NmMgMCUsICM5M2Y5YjkgNTAlLCAjMWQ5NzZjIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMyNGZlNDEgMCUsICNmZGZjNDcgNTAlLCAjMjRmZTQxIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkMTgge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMzAwMWIgMCUsICNmZjAwODQgNTAlLCAjMzMwMDFiIDEwMCUpOyB9XFxuICBib2R5IC5jYXJkOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gIGJvZHkgLmNhcmRCYWNrIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvZGQvNmQvYzgvZGQ2ZGM4YTZiNmRiMWI2ZjRiMDFiZDFiY2M4OTE2MjEuanBnXFxcIik7IH1cXG4gIGJvZHkgLmludmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gIGJvZHkgLm1lbnVCbG9jayB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XFxuICBib2R5IC5tZW51QmxvY2tCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTgxNzg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5tZW51QmxvY2tCdXR0b246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgYm9keSAubWVudUJsb2NrQnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzRlNDU7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3JEaXYge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3RvciB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhODE3ODtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3Rvcjpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3JCdXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTgxNzg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW46IDRweCA1cHggNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yQnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgdHJhbnNpdGlvbjogMC4xczsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3RvckJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc0ZTQ1OyB9XFxuICBib2R5IC50aW1lTnR1cm5zQmxvY2sge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgYm9keSAudGltZU50dXJuc0Jsb2NrQnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDUxcHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgbWFyZ2luOiA3cHggNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4OyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjNTU5RkI0OyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjYmE4MTc4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjYTg2MjU3OyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2JhODE3ODsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCB3cml0ZXIgPSByZXF1aXJlKCcuXFxcXHdyaXRlci5qcycpO1xyXG5pbXBvcnQgJy5cXFxcc3R5bGVzLnNjc3MnXHJcblxyXG4vL2NyZWF0aW5nIG1lbnVCbG9jayB3aXRoIGJ1dHRvbnNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdtZW51QmxvY2sgZmxleCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUJsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdidXR0b24nLCAnbWVudUJsb2NrQnV0dG9uJywgJ1N0YXJ0L1N0b3AnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVCbG9ja0J1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd3JpdGVyLnN0YXJ0U3RvcCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ21lbnVCbG9ja0J1dHRvbicsICdTaHVmZmxlJykpO1xyXG5cclxuLy9jcmVhdGluZyBmaWVsZFNlbGVjdG9yIGJsb2NrIGFuZCBpdHMgY29udGVudHNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdmaWVsZFNlbGVjdG9yRGl2IGZsZXgnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3JEaXYnKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnYmx1cnJlZFNwYW4nLCAnU2VsZWN0IGZpZWxkIHNpemUnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3JEaXYnKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ3NlbGVjdCcsICdmaWVsZFNlbGVjdG9yJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzR4NCcsICd2YWx1ZScsICcxJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzV4NCcsICd2YWx1ZScsICcyJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdvcHRpb24nLCAnJywgJzZ4NicsICd2YWx1ZScsICczJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yRGl2JylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdidXR0b24nLCAnZmllbGRTZWxlY3RvckJ1dHRvbicsICdDb25maXJtJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yQnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3cml0ZXIuY2hhbmdlRmllbGRTaXplKTtcclxuXHJcbi8vY3JlYXRpbmcgdGltZU50dXJuc0Jsb2NrIHdpdGggYnV0dG9uc1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnZGl2JywgJ3RpbWVOdHVybnNCbG9jayBmbGV4JykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnYmx1cnJlZFNwYW4nLCAnVGltZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdpbnB1dCcsICd0aW1lTnR1cm5zQmxvY2tCdXR0b24gc3RvcHdhdGNoJywgJycsICd2YWx1ZScsICcwMDowMCcsICdkaXNhYmxlZCcsICd0cnVlJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ3NwYW4nLCAnYmx1cnJlZFNwYW4nLCAnVHVybnMnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVOdHVybnNCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnaW5wdXQnLCAndGltZU50dXJuc0Jsb2NrQnV0dG9uIHR1cm5zQ291bnRlcicsICcnLCAndmFsdWUnLCAnMCcsICdkaXNhYmxlZCcsICd0cnVlJykpO1xyXG5cclxuLy9jcmVhdGluZyBnYW1lRmllbGRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICdnYW1lRmllbGQgZmxleCcpKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSB3cml0ZXIuYWRkQ2FyZHMoMTYpO1xyXG5cclxuLy9jcmVhdGluZyB3ZWxjb21lIG1lc3NhZ2Vcclxud2luZG93Lm9ubG9hZCA9IHdyaXRlci5zaG93TXNnKCc8Yj5XZWxjb21lIHRvIHRoZSA8YnI+IFwiTWVtb3J5IEdhbWVcIjwvYj48YnI+UGFpciB0aGUgY2FyZHMgYnkgdGFraW5nIDIgb2YgdGhlbSBwZXIgdHVybiB1bnRpbCB0aGUgZ2FtZSBmaWVsZCBpcyBlbXB0eScpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ21zZ0J1dHRvbicsICdHZXQgbWUgc3RhcnRlZCEnKSk7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dCdXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dEaXYnKVswXS5yZW1vdmUoKTtcclxufSk7XHJcblxyXG4vL2NvbmZpZ3VyaW5nIHRoZSBtdXRhdGlvbiBvYnNlcnZlciBmb3IgZGVsZWdhdGlvbiB0byB3b3JrIHByb3Blcmx5XHJcbnZhciBmaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBjaGlsZExpc3Q6IHRydWVcclxufTtcclxuXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIod3JpdGVyLmNhbGxiYWNrKTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShmaWVsZCwgY29uZmlnKTtcclxuXHJcblxyXG5cclxuLy8gbGV0IHRpbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZTtcclxuLy8gbGV0IHR1cm5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWU7XHJcbi8vIHdyaXRlci5zaG93TXNnKGA8Yj5Db25ncmF0dWxhdGlvbnMhPC9iPjxicj5Zb3UgcmV2ZWFsZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfWApO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvL2NyZWF0ZSBodG1sIGVsZW1lbnQgd2l0aCBnaXZlbiBhdHRyaWJ1dGVzXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIdG1sKHNlbGVjdG9yLCBjbGFzc05hbWUsIGlubmVyVGV4dCwgLi4ua2V5c1ZhbHVlcykge1xyXG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzZWxlY3Rvcik7XHJcbiAgY2xhc3NOYW1lID09IHVuZGVmaW5lZCA/IGVsZW0uY2xhc3NOYW1lID0gJycgOiBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICBpbm5lclRleHQgPT0gdW5kZWZpbmVkID8gZWxlbS5pbm5lckhUTUwgPSAnJyA6IGVsZW0uaW5uZXJIVE1MID0gaW5uZXJUZXh0O1xyXG4gIGlmIChrZXlzVmFsdWVzLmxlbmd0aCAhPSAwKXtcclxuICAgIGxldCBpID0gMTtcclxuICAgIHdoaWxlIChpIDwga2V5c1ZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoa2V5c1ZhbHVlc1tpLTFdLCBrZXlzVmFsdWVzW2ldKTtcclxuICAgICAgaSArPSAyO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxudmFyIGNsYXNzQXJyTGVuZ3RoID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhcmRzIChudW0pIHtcclxuICBsZXQgY2xhc3NBcnJheSA9IFsnY2FyZDEnLCAnY2FyZDEnLCAnY2FyZDInLCAnY2FyZDInLCAnY2FyZDMnLCAnY2FyZDMnLCAnY2FyZDQnLCAnY2FyZDQnLCAnY2FyZDUnLCAnY2FyZDUnLCAnY2FyZDYnLCAnY2FyZDYnLCAnY2FyZDcnLCAnY2FyZDcnLCAnY2FyZDgnLCAnY2FyZDgnLCAnY2FyZDknLCAnY2FyZDknLCAnY2FyZDEwJywgJ2NhcmQxMCcsICdjYXJkMTEnLCAnY2FyZDExJywgJ2NhcmQxMicsICdjYXJkMTInLCAnY2FyZDEzJywgJ2NhcmQxMycsICdjYXJkMTQnLCAnY2FyZDE0JywgJ2NhcmQxNScsICdjYXJkMTUnLCAnY2FyZDE2JywgJ2NhcmQxNicsICdjYXJkMTcnLCAnY2FyZDE3JywgJ2NhcmQxOCcsICdjYXJkMTgnXTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0Um5kSW50KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKSArIG1pbjtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLnZhbHVlKSB7XHJcbiAgICBjYXNlICcxJzpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAxNjtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAyMDtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY2xhc3NBcnJheS5sZW5ndGggPSAzNjtcclxuICAgICAgY2xhc3NBcnJMZW5ndGggPSBjbGFzc0FycmF5Lmxlbmd0aDtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgY2xhc3NBcnJMZW5ndGg7IGkrKyl7XHJcbiAgICBsZXQgcmFuZG9tID0gZ2V0Um5kSW50KDAsIGNsYXNzQXJyYXkubGVuZ3RoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmFwcGVuZChjcmVhdGVIdG1sKCdkaXYnLCBgY2FyZCAke2NsYXNzQXJyYXlbcmFuZG9tXX0gY2FyZEJhY2tgKSk7XHJcbiAgICBjbGFzc0FycmF5LnNwbGljZShyYW5kb20sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BUdXJucygpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZSA9ICcwJztcclxufVxyXG5cclxuLy90b2dnbGluZyBjYXJkIGZhY2UgdXAvZG93blxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2FyZCguLi5jYXJkcykge1xyXG4gIGZvcihsZXQgY2FyZCBvZiBjYXJkcyl7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2NhcmRCYWNrJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01zZyhtc2cpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5wcmVwZW5kKGNyZWF0ZUh0bWwoJ2RpdicsICdtc2dEaXYnKSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0ucHJlcGVuZChjcmVhdGVIdG1sKCdwJywgJycsIG1zZykpO1xyXG59O1xyXG5cclxudmFyIGVtcHR5Q2FyZE51bWJlciA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQ2FyZHMoY2FyZDEsIGNhcmQyKSB7XHJcbiAgaWYgKGNhcmQxLmNsYXNzTGlzdFsxXSA9PSBjYXJkMi5jbGFzc0xpc3RbMV0pIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQxLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgNTAwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NhcmQyLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdub2NsaWNrJyk7fSwgNTAwKTtcclxuICAgIGVtcHR5Q2FyZE51bWJlciArPSAyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjYXJkMS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBjYXJkMi5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyk7XHJcbiAgICBzZXRUaW1lb3V0KHRvZ2dsZUNhcmQsIDUwMCwgY2FyZDEsIGNhcmQyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWVsZFNpemUgKCkge1xyXG4gIGxldCBlbGVtcywgZmllbGQsIGNhcmQ7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLnJlbW92ZSgpO1xyXG5cclxuICBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKTtcclxuICBBcnJheS5mcm9tKGVsZW1zKS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpZWxkLmNsYXNzTmFtZSA9ICdnYW1lRmllbGQgZmxleCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hZnRlcihmaWVsZCk7XHJcblxyXG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICAgIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcclxuICAgIGluaXQgPSAwO1xyXG4gICAgc3RvcFR1cm5zKCk7XHJcbiAgICBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG5cclxuICAgIHN3aXRjaCAoZWwudmFsdWUpIHtcclxuICAgICAgY2FzZSAnMSc6XHJcbiAgICAgIGFkZENhcmRzKDE2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgZmllbGQuc3R5bGUud2lkdGggPSAnMzc1cHgnO1xyXG4gICAgICAgIGFkZENhcmRzKDIwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgZmllbGQuc3R5bGUud2lkdGggPSAnNDIwcHgnO1xyXG4gICAgICAgIGZpZWxkLnN0eWxlLmhlaWdodCA9ICc2NDVweCc7XHJcbiAgICAgICAgYWRkQ2FyZHMoMzYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5sZXQgZmFjZVVwQ291bnRlciA9IDA7XHJcbmxldCBmYWNlVXBDYXJkMTtcclxudmFyIGlzRmlyc3RDbGljayA9IHRydWU7XHJcbmV4cG9ydCBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0ub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpIHJldHVybjtcclxuICAgIHRvZ2dsZUNhcmQodGFyZ2V0KTtcclxuXHJcbiAgICBpZiAoaXNGaXJzdENsaWNrKSB7XHJcbiAgICAgIGlzRmlyc3RDbGljayA9IGZhbHNlO1xyXG4gICAgICBzdGFydFN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRCYWNrJykpIHtcclxuICAgICAgZmFjZVVwQ291bnRlciArPSAxO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnbm9jbGljaycpO1xyXG4gICAgICAvL2lmIHR3byBjYXJkcyBhcmUgZmFjZWQgdXBcclxuICAgICAgaWYgKGZhY2VVcENvdW50ZXIgPj0gMikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLmNsYXNzTGlzdC5hZGQoJ25vY2xpY2snKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5jbGFzc0xpc3QucmVtb3ZlKCdub2NsaWNrJyl9LCA1MDApO1xyXG4gICAgICAgIGNvbXBhcmVDYXJkcyh0YXJnZXQsIGZhY2VVcENhcmQxKTtcclxuXHJcbiAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpO1xyXG4gICAgICAgIGlmIChlbXB0eUNhcmROdW1iZXIgPT0gY2xhc3NBcnJMZW5ndGgpIHtcclxuICAgICAgICAgIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcHdhdGNoJylbMF0udmFsdWU7XHJcbiAgICAgICAgICBsZXQgdHVybnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZTtcclxuICAgICAgICAgIHNob3dNc2coYDxiPkNvbmdyYXR1bGF0aW9ucyE8L2I+PGJyPllvdSBwYWlyZWQgYWxsIHRoZSBjYXJkcyBpbiAke3RpbWV9IGFuZCAke3R1cm5zfSB0dXJuc2ApO1xyXG4gICAgICAgICAgc3RhcnRTdG9wKCk7XHJcbiAgICAgICAgICBzdG9wVHVybnMoKTtcclxuICAgICAgICAgIGZhY2VVcENvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgZW1wdHlDYXJkTnVtYmVyID0gMDtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZhY2VVcENvdW50ZXIgPSAwO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R1cm5zQ291bnRlcicpWzBdLnZhbHVlKys7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGZhY2VVcENhcmQxID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbi8vU3RvcHdhdGNoIGluaXRpYWl6YXRpb24gYW5kIGZ1bmN0aW9uc1xyXG52YXIgYmFzZSA9IDYwO1xyXG52YXIgY2xvY2t0aW1lciwgZGF0ZU9iaiwgZGgsIGRtLCBkcywgbXM7XHJcbnZhciByZWFkb3V0ID0gJyc7XHJcbnZhciBoID0gMSxcclxuICBtID0gMSxcclxuICB0bSA9IDEsXHJcbiAgcyA9IDAsXHJcbiAgdHMgPSAwLFxyXG4gIG1zID0gMCxcclxuICBpbml0ID0gMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN0b3B3YXRjaCAoKSB7XHJcbiAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xyXG4gIGggPSAxO1xyXG4gIG0gPSAxO1xyXG4gIHRtID0gMTtcclxuICBzID0gMDtcclxuICB0cyA9IDA7XHJcbiAgbXMgPSAwO1xyXG4gIGluaXQgPSAwO1xyXG4gIHJlYWRvdXQgPSAnMDA6MDAnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3B3YXRjaCcpWzBdLnZhbHVlID0gcmVhZG91dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcHdhdGNoICgpIHtcclxuICB2YXIgY2RhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciB0ID0gKGNkYXRlT2JqLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAtIChzICogMTAwMCk7XHJcbiAgaWYgKHQgPiA5OTkpIHtcclxuICAgIHMrKztcclxuICB9XHJcbiAgaWYgKHMgPj0gKG0gKiBiYXNlKSkge1xyXG4gICAgdHMgPSAwO1xyXG4gICAgbSsrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0cyA9IHBhcnNlSW50KChtcyAvIDEwMCkgKyBzKTtcclxuICAgIGlmICh0cyA+PSBiYXNlKSB7XHJcbiAgICAgIHRzID0gdHMgLSAoKG0gLSAxKSAqIGJhc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAobSA+IChoICogYmFzZSkpIHtcclxuICAgIHRtID0gMTtcclxuICAgIGgrKztcclxuICB9IGVsc2Uge1xyXG4gICAgdG0gPSBwYXJzZUludCgobXMgLyAxMDApICsgbSk7XHJcbiAgICBpZiAodG0gPj0gYmFzZSkge1xyXG4gICAgICB0bSA9IHRtIC0gKChoIC0gMSkgKiBiYXNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHRzID4gMCkge1xyXG4gICAgZHMgPSB0cztcclxuICAgIGlmICh0cyA8IDEwKSB7XHJcbiAgICAgIGRzID0gJzAnICsgdHM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRzID0gJzAwJztcclxuICB9XHJcbiAgZG0gPSB0bSAtIDE7XHJcbiAgaWYgKGRtID4gMCkge1xyXG4gICAgaWYgKGRtIDwgMTApIHtcclxuICAgICAgZG0gPSAnMCcgKyBkbTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZG0gPSAnMDAnO1xyXG4gIH1cclxuICByZWFkb3V0ID0gZG0gKyAnOicgKyBkcztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZSA9IHJlYWRvdXQ7XHJcbiAgY2xvY2t0aW1lciA9IHNldFRpbWVvdXQoc3RhcnRTdG9wd2F0Y2gsIDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRTdG9wICgpIHtcclxuICBpZiAoaW5pdCA9PSAwKSB7XHJcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xyXG4gICAgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBzdGFydFN0b3B3YXRjaCgpO1xyXG4gICAgaW5pdCA9IDE7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgICBpbml0ID0gMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==