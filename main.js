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
exports.push([module.i, "body {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 18px;\n  font-family: Lucida Sans Unicode;\n  background-image: url(\"https://www.tutorialchip.com/wp-content/uploads/2011/06/Blue-Pattern.jpg\");\n  background-size: contain; }\n  body .flex {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap; }\n  body .noclick {\n    pointer-events: none; }\n  body .msgDiv {\n    position: absolute;\n    align-self: center;\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n    background: radial-gradient(circle, #9aedf9 35%, #579dbb 100%);\n    z-index: 1; }\n  body .msgDiv p {\n    font-size: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    height: 100%;\n    margin: 0; }\n  body .msgButton {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .msgButton:hover {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .msgButton:active {\n    background-color: #874e45; }\n  body .blurredSpan {\n    border-radius: 10px;\n    backdrop-filter: blur(1px);\n    height: 26px;\n    margin: 5px 5px 10px; }\n  body .gameField {\n    border: 3px solid black;\n    border-radius: 10px;\n    flex-direction: row;\n    align-content: space-around;\n    justify-content: space-around;\n    width: 300px;\n    height: 430px;\n    backdrop-filter: blur(1px);\n    box-shadow: 0px 0px 20px 0px black; }\n  body .card {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 60px;\n    height: 97.5px;\n    border: 2px solid black;\n    border-radius: 10px;\n    position: relative; }\n  body .card1 {\n    background-image: url(\"https://wallpaperaccess.com/full/1092608.jpg\"); }\n  body .card2 {\n    background-image: url(\"https://www.codeproduction.ro/wp-content/uploads/2019/10/blue-gradient-background-flip.jpg\"); }\n  body .card3 {\n    background-image: url(\"https://www.publicdomainpictures.net/pictures/130000/velka/green-gradient-background-14396421286T3.jpg\"); }\n  body .card4 {\n    background-image: url(\"https://marketplace.canva.com/EADaoybWY-0/1/0/1600w/canva-pink-gradient-background-r-IBZZOU0tA.jpg\"); }\n  body .card5 {\n    background-image: url(\"https://www.creativefabrica.com/wp-content/uploads/2020/02/01/Purple-Gradient-Background-Graphics-1.jpg\"); }\n  body .card6 {\n    background-image: url(\"https://www.xmple.com/wallpaper/yellow-gradient-orange-linear-1920x1080-c2-f1e50c-f14e0c-a-120-f-14.svg\"); }\n  body .card7 {\n    background-image: url(\"https://i.pinimg.com/originals/25/8c/b4/258cb46eaf963d9b202cd9c18d504dcf.jpg\"); }\n  body .card8 {\n    background-image: url(\"https://www.xmple.com/wallpaper/cyan-gradient-linear-blue-1920x1080-c2-616c99-2fdfc2-a-45-f-14.svg\"); }\n  body .card9 {\n    background-image: url(\"https://www.xmple.com/wallpaper/red-linear-gradient-1920x1080-c2-f7b6ba-ff3551-a-255-f-14.svg\"); }\n  body .card10 {\n    background-image: url(\"https://ih1.redbubble.net/image.1007407365.6859/flat,750x1000,075,f.jpg\"); }\n  body .card11 {\n    background-image: url(\"https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-gray-gradient-sharp-tool-psd-layered-main-picture-background-material-image_157567.jpg\"); }\n  body .card12 {\n    background-image: url(\"https://www.xmple.com/wallpaper/black-grey-gradient-linear-1920x1080-c2-000000-a9a9a9-a-210-f-14.svg\"); }\n  body .card13 {\n    background-image: url(\"https://www.creativefabrica.com/wp-content/uploads/2020/04/24/Light-Blue-Gradient-Background-Graphics-3943096-1.jpg\"); }\n  body .card14 {\n    background-image: url(\"https://www.xmple.com/wallpaper/blue-linear-gradient-1920x1080-c2-0e1350-1924b5-a-105-f-14.svg\"); }\n  body .card15 {\n    background-image: url(\"https://www.xmple.com/wallpaper/linear-white-green-gradient-1920x1080-c2-90ee90-ffffff-a-225-f-14.svg\"); }\n  body .card16 {\n    background-image: url(\"https://wallpaperaccess.com/full/1155040.jpg\"); }\n  body .card17 {\n    background-image: url(\"https://www.xmple.com/wallpaper/yellow-green-gradient-linear-1920x1080-c2-ffff00-98fb98-a-240-f-14.svg\"); }\n  body .card18 {\n    background-image: url(\"https://cdn.wallpapersafari.com/68/90/RLhwBu.jpg\"); }\n  body .card:hover {\n    filter: brightness(90%);\n    box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .cardBack {\n    background-image: url(\"https://i.pinimg.com/originals/dd/6d/c8/dd6dc8a6b6db1b6f4b01bd1bcc891621.jpg\"); }\n  body .invisible {\n    opacity: 0;\n    transition: 0.5s; }\n  body .menuBlock {\n    width: 80%;\n    flex-wrap: nowrap; }\n  body .menuBlockButton {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    width: 180px;\n    margin: 10px;\n    border: 2px solid black;\n    border-radius: 10px;\n    outline: none; }\n  body .menuBlockButton:hover {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .menuBlockButton:active {\n    background-color: #874e45; }\n  body .fieldSelectorDiv {\n    width: 80%;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold; }\n  body .fieldSelector {\n    appearance: none;\n    cursor: pointer;\n    background-color: #ba8178;\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    border: 2px solid black;\n    border-radius: 5px;\n    height: 30px;\n    margin-top: 4px;\n    outline: none; }\n  body .fieldSelector:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .fieldSelector:focus {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5); }\n  body .fieldSelectorButton {\n    cursor: pointer;\n    font-size: 17px;\n    font-family: Lucida Sans Unicode;\n    background-color: #ba8178;\n    color: black;\n    height: 30px;\n    margin: 4px 5px 5px;\n    border: 2px solid black;\n    border-radius: 5px;\n    outline: none; }\n  body .fieldSelectorButton:hover {\n    box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.5);\n    transition: 0.1s; }\n  body .fieldSelectorButton:active {\n    background-color: #874e45; }\n  body .timeNturnsBlock {\n    font-weight: bold;\n    width: 80%; }\n  body .timeNturnsBlockButton {\n    font-size: 17px;\n    font-family: inherit;\n    font-weight: bold;\n    color: black;\n    width: 51px;\n    height: 18px;\n    margin: 7px 5px 10px;\n    border: 2px solid black;\n    border-radius: 5px; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  background: #559FB4; }\n\n::-webkit-scrollbar-thumb {\n  background: #ba8178;\n  border-radius: 5px; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #a86257; }\n\n::-webkit-scrollbar-thumb:active {\n  background: #ba8178; }\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly8vLi9zcmMvd3JpdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFNBQVMs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRFQUE0RTtBQUN0Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxLQUFLLE9BQU8sTUFBTTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBTYW5zIFVuaWNvZGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnR1dG9yaWFsY2hpcC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTEvMDYvQmx1ZS1QYXR0ZXJuLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuICBib2R5IC5mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgYm9keSAubm9jbGljayB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuICBib2R5IC5tc2dEaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzlhZWRmOSAzNSUsICM1NzlkYmIgMTAwJSk7XFxuICAgIHotaW5kZXg6IDE7IH1cXG4gIGJvZHkgLm1zZ0RpdiBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgYm9keSAubXNnQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE4MTc4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIGJvZHkgLm1zZ0J1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICBib2R5IC5tc2dCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3NGU0NTsgfVxcbiAgYm9keSAuYmx1cnJlZFNwYW4ge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW46IDVweCA1cHggMTBweDsgfVxcbiAgYm9keSAuZ2FtZUZpZWxkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggYmxhY2s7IH1cXG4gIGJvZHkgLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy9kZC82ZC9jOC9kZDZkYzhhNmI2ZGIxYjZmNGIwMWJkMWJjYzg5MTYyMS5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogOTcuNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBib2R5IC5jYXJkMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTA5MjYwOC5qcGdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LmNvZGVwcm9kdWN0aW9uLnJvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEwL2JsdWUtZ3JhZGllbnQtYmFja2dyb3VuZC1mbGlwLmpwZ1xcXCIpOyB9XFxuICBib2R5IC5jYXJkMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cucHVibGljZG9tYWlucGljdHVyZXMubmV0L3BpY3R1cmVzLzEzMDAwMC92ZWxrYS9ncmVlbi1ncmFkaWVudC1iYWNrZ3JvdW5kLTE0Mzk2NDIxMjg2VDMuanBnXFxcIik7IH1cXG4gIGJvZHkgLmNhcmQ0IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21hcmtldHBsYWNlLmNhbnZhLmNvbS9FQURhb3liV1ktMC8xLzAvMTYwMHcvY2FudmEtcGluay1ncmFkaWVudC1iYWNrZ3JvdW5kLXItSUJaWk9VMHRBLmpwZ1xcXCIpOyB9XFxuICBib2R5IC5jYXJkNSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cuY3JlYXRpdmVmYWJyaWNhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi8wMS9QdXJwbGUtR3JhZGllbnQtQmFja2dyb3VuZC1HcmFwaGljcy0xLmpwZ1xcXCIpOyB9XFxuICBib2R5IC5jYXJkNiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cueG1wbGUuY29tL3dhbGxwYXBlci95ZWxsb3ctZ3JhZGllbnQtb3JhbmdlLWxpbmVhci0xOTIweDEwODAtYzItZjFlNTBjLWYxNGUwYy1hLTEyMC1mLTE0LnN2Z1xcXCIpOyB9XFxuICBib2R5IC5jYXJkNyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzI1LzhjL2I0LzI1OGNiNDZlYWY5NjNkOWIyMDJjZDljMThkNTA0ZGNmLmpwZ1xcXCIpOyB9XFxuICBib2R5IC5jYXJkOCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cueG1wbGUuY29tL3dhbGxwYXBlci9jeWFuLWdyYWRpZW50LWxpbmVhci1ibHVlLTE5MjB4MTA4MC1jMi02MTZjOTktMmZkZmMyLWEtNDUtZi0xNC5zdmdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnhtcGxlLmNvbS93YWxscGFwZXIvcmVkLWxpbmVhci1ncmFkaWVudC0xOTIweDEwODAtYzItZjdiNmJhLWZmMzU1MS1hLTI1NS1mLTE0LnN2Z1xcXCIpOyB9XFxuICBib2R5IC5jYXJkMTAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vaWgxLnJlZGJ1YmJsZS5uZXQvaW1hZ2UuMTAwNzQwNzM2NS42ODU5L2ZsYXQsNzUweDEwMDAsMDc1LGYuanBnXFxcIik7IH1cXG4gIGJvZHkgLmNhcmQxMSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9wbmcucG5ndHJlZS5jb20vdGh1bWJfYmFjay9mdzgwMC9iYWNrX291ci8yMDE5MDYyMC9vdXJtaWQvcG5ndHJlZS1ncmF5LWdyYWRpZW50LXNoYXJwLXRvb2wtcHNkLWxheWVyZWQtbWFpbi1waWN0dXJlLWJhY2tncm91bmQtbWF0ZXJpYWwtaW1hZ2VfMTU3NTY3LmpwZ1xcXCIpOyB9XFxuICBib2R5IC5jYXJkMTIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnhtcGxlLmNvbS93YWxscGFwZXIvYmxhY2stZ3JleS1ncmFkaWVudC1saW5lYXItMTkyMHgxMDgwLWMyLTAwMDAwMC1hOWE5YTktYS0yMTAtZi0xNC5zdmdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDEzIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy5jcmVhdGl2ZWZhYnJpY2EuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA0LzI0L0xpZ2h0LUJsdWUtR3JhZGllbnQtQmFja2dyb3VuZC1HcmFwaGljcy0zOTQzMDk2LTEuanBnXFxcIik7IH1cXG4gIGJvZHkgLmNhcmQxNCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93d3cueG1wbGUuY29tL3dhbGxwYXBlci9ibHVlLWxpbmVhci1ncmFkaWVudC0xOTIweDEwODAtYzItMGUxMzUwLTE5MjRiNS1hLTEwNS1mLTE0LnN2Z1xcXCIpOyB9XFxuICBib2R5IC5jYXJkMTUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vd3d3LnhtcGxlLmNvbS93YWxscGFwZXIvbGluZWFyLXdoaXRlLWdyZWVuLWdyYWRpZW50LTE5MjB4MTA4MC1jMi05MGVlOTAtZmZmZmZmLWEtMjI1LWYtMTQuc3ZnXFxcIik7IH1cXG4gIGJvZHkgLmNhcmQxNiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMTE1NTA0MC5qcGdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDE3IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3d3dy54bXBsZS5jb20vd2FsbHBhcGVyL3llbGxvdy1ncmVlbi1ncmFkaWVudC1saW5lYXItMTkyMHgxMDgwLWMyLWZmZmYwMC05OGZiOTgtYS0yNDAtZi0xNC5zdmdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDE4IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi53YWxscGFwZXJzYWZhcmkuY29tLzY4LzkwL1JMaHdCdS5qcGdcXFwiKTsgfVxcbiAgYm9keSAuY2FyZDpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5MCUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzOyB9XFxuICBib2R5IC5jYXJkQmFjayB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2RkLzZkL2M4L2RkNmRjOGE2YjZkYjFiNmY0YjAxYmQxYmNjODkxNjIxLmpwZ1xcXCIpOyB9XFxuICBib2R5IC5pbnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICBib2R5IC5tZW51QmxvY2sge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgfVxcbiAgYm9keSAubWVudUJsb2NrQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE4MTc4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgYm9keSAubWVudUJsb2NrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gIGJvZHkgLm1lbnVCbG9ja0J1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODc0ZTQ1OyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yRGl2IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3Ige1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTgxNzg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3Rvcjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3I6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDdweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuICBib2R5IC5maWVsZFNlbGVjdG9yQnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBMdWNpZGEgU2FucyBVbmljb2RlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE4MTc4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luOiA0cHggNXB4IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgYm9keSAuZmllbGRTZWxlY3RvckJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7IH1cXG4gIGJvZHkgLmZpZWxkU2VsZWN0b3JCdXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3NGU0NTsgfVxcbiAgYm9keSAudGltZU50dXJuc0Jsb2NrIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIGJvZHkgLnRpbWVOdHVybnNCbG9ja0J1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiA1MXB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIG1hcmdpbjogN3B4IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogIzU1OUZCNDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogI2JhODE3ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2E4NjI1NzsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNiYTgxNzg7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3Qgd3JpdGVyID0gcmVxdWlyZSgnLlxcXFx3cml0ZXIuanMnKTtcclxuaW1wb3J0ICcuXFxcXHN0eWxlcy5zY3NzJ1xyXG5cclxuLy9jcmVhdGluZyBtZW51QmxvY2sgd2l0aCBidXR0b25zXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnbWVudUJsb2NrIGZsZXgnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ21lbnVCbG9ja0J1dHRvbicsICdTdGFydC9TdG9wJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51QmxvY2tCdXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdyaXRlci5zdGFydFN0b3ApO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51QmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdtZW51QmxvY2tCdXR0b24nLCAnU2h1ZmZsZScpKTtcclxuXHJcbi8vY3JlYXRpbmcgZmllbGRTZWxlY3RvciBibG9jayBhbmQgaXRzIGNvbnRlbnRzXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnZmllbGRTZWxlY3RvckRpdiBmbGV4JykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yRGl2JylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzcGFuJywgJ2JsdXJyZWRTcGFuJywgJ1NlbGVjdCBmaWVsZCBzaXplJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yRGl2JylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzZWxlY3QnLCAnZmllbGRTZWxlY3RvcicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc0eDQnLCAndmFsdWUnLCAnMScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc1eDQnLCAndmFsdWUnLCAnMicpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvcicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnb3B0aW9uJywgJycsICc2eDYnLCAndmFsdWUnLCAnMycpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckRpdicpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnYnV0dG9uJywgJ2ZpZWxkU2VsZWN0b3JCdXR0b24nLCAnQ29uZmlybScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmllbGRTZWxlY3RvckJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd3JpdGVyLmNoYW5nZUZpZWxkU2l6ZSk7XHJcblxyXG4vL2NyZWF0aW5nIHRpbWVOdHVybnNCbG9jayB3aXRoIGJ1dHRvbnNcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2RpdicsICd0aW1lTnR1cm5zQmxvY2sgZmxleCcpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzcGFuJywgJ2JsdXJyZWRTcGFuJywgJ1RpbWUnKSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RpbWVOdHVybnNCbG9jaycpWzBdLmFwcGVuZCh3cml0ZXIuY3JlYXRlSHRtbCgnaW5wdXQnLCAndGltZU50dXJuc0Jsb2NrQnV0dG9uIHN0b3B3YXRjaCcsICcnLCAndmFsdWUnLCAnMDA6MDAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdzcGFuJywgJ2JsdXJyZWRTcGFuJywgJ1R1cm5zJykpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aW1lTnR1cm5zQmxvY2snKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2lucHV0JywgJ3RpbWVOdHVybnNCbG9ja0J1dHRvbiB0dXJuc0NvdW50ZXInLCAnJywgJ3ZhbHVlJywgJzAnLCAnZGlzYWJsZWQnLCAndHJ1ZScpKTtcclxuXHJcbi8vY3JlYXRpbmcgZ2FtZUZpZWxkXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHdyaXRlci5jcmVhdGVIdG1sKCdkaXYnLCAnZ2FtZUZpZWxkIGZsZXgnKSk7XHJcblxyXG53aW5kb3cub25sb2FkID0gd3JpdGVyLmFkZENhcmRzKDE2KTtcclxuXHJcbi8vY3JlYXRpbmcgd2VsY29tZSBtZXNzYWdlXHJcbndpbmRvdy5vbmxvYWQgPSB3cml0ZXIuc2hvd01zZygnPGI+V2VsY29tZSB0byB0aGUgPGJyPiBcIk1lbW9yeSBHYW1lXCI8L2I+PGJyPlBhaXIgdGhlIGNhcmRzIGJ5IHRha2luZyAyIG9mIHRoZW0gcGVyIHR1cm4gdW50aWwgdGhlIGdhbWUgZmllbGQgaXMgZW1wdHknKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtc2dEaXYnKVswXS5hcHBlbmQod3JpdGVyLmNyZWF0ZUh0bWwoJ2J1dHRvbicsICdtc2dCdXR0b24nLCAnR2V0IG1lIHN0YXJ0ZWQhJykpO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnQnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXNnRGl2JylbMF0ucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuLy9jb25maWd1cmluZyB0aGUgbXV0YXRpb24gb2JzZXJ2ZXIgZm9yIGRlbGVnYXRpb24gdG8gd29yayBwcm9wZXJseVxyXG52YXIgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgY2hpbGRMaXN0OiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHdyaXRlci5jYWxsYmFjayk7XHJcbm9ic2VydmVyLm9ic2VydmUoZmllbGQsIGNvbmZpZyk7XHJcblxyXG5cclxuXHJcbi8vIGxldCB0aW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcHdhdGNoJylbMF0udmFsdWU7XHJcbi8vIGxldCB0dXJucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3R1cm5zQ291bnRlcicpWzBdLnZhbHVlO1xyXG4vLyB3cml0ZXIuc2hvd01zZyhgPGI+Q29uZ3JhdHVsYXRpb25zITwvYj48YnI+WW91IHJldmVhbGVkIGFsbCB0aGUgY2FyZHMgaW4gJHt0aW1lfSBhbmQgJHt0dXJuc31gKTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy9jcmVhdGUgaHRtbCBlbGVtZW50IHdpdGggZ2l2ZW4gYXR0cmlidXRlc1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSHRtbChzZWxlY3RvciwgY2xhc3NOYW1lLCBpbm5lclRleHQsIC4uLmtleXNWYWx1ZXMpIHtcclxuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2VsZWN0b3IpO1xyXG4gIGNsYXNzTmFtZSA9PSB1bmRlZmluZWQgPyBlbGVtLmNsYXNzTmFtZSA9ICcnIDogZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgaW5uZXJUZXh0ID09IHVuZGVmaW5lZCA/IGVsZW0uaW5uZXJIVE1MID0gJycgOiBlbGVtLmlubmVySFRNTCA9IGlubmVyVGV4dDtcclxuICBpZiAoa2V5c1ZhbHVlcy5sZW5ndGggIT0gMCl7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICB3aGlsZSAoaSA8IGtleXNWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGtleXNWYWx1ZXNbaS0xXSwga2V5c1ZhbHVlc1tpXSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuXHJcbnZhciBjbGFzc0Fyckxlbmd0aCA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkcyAobnVtKSB7XHJcbiAgbGV0IGNsYXNzQXJyYXkgPSBbJ2NhcmQxJywgJ2NhcmQxJywgJ2NhcmQyJywgJ2NhcmQyJywgJ2NhcmQzJywgJ2NhcmQzJywgJ2NhcmQ0JywgJ2NhcmQ0JywgJ2NhcmQ1JywgJ2NhcmQ1JywgJ2NhcmQ2JywgJ2NhcmQ2JywgJ2NhcmQ3JywgJ2NhcmQ3JywgJ2NhcmQ4JywgJ2NhcmQ4JywgJ2NhcmQ5JywgJ2NhcmQ5JywgJ2NhcmQxMCcsICdjYXJkMTAnLCAnY2FyZDExJywgJ2NhcmQxMScsICdjYXJkMTInLCAnY2FyZDEyJywgJ2NhcmQxMycsICdjYXJkMTMnLCAnY2FyZDE0JywgJ2NhcmQxNCcsICdjYXJkMTUnLCAnY2FyZDE1JywgJ2NhcmQxNicsICdjYXJkMTYnLCAnY2FyZDE3JywgJ2NhcmQxNycsICdjYXJkMTgnLCAnY2FyZDE4J107XHJcblxyXG4gIGZ1bmN0aW9uIGdldFJuZEludChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICkgKyBtaW47XHJcbiAgfVxyXG5cclxuICBzd2l0Y2ggKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZpZWxkU2VsZWN0b3InKVswXS52YWx1ZSkge1xyXG4gICAgY2FzZSAnMSc6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMTY7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMic6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMjA7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnMyc6XHJcbiAgICAgIGNsYXNzQXJyYXkubGVuZ3RoID0gMzY7XHJcbiAgICAgIGNsYXNzQXJyTGVuZ3RoID0gY2xhc3NBcnJheS5sZW5ndGg7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyTGVuZ3RoOyBpKyspe1xyXG4gICAgbGV0IHJhbmRvbSA9IGdldFJuZEludCgwLCBjbGFzc0FycmF5Lmxlbmd0aCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5hcHBlbmQoY3JlYXRlSHRtbCgnZGl2JywgYGNhcmQgJHtjbGFzc0FycmF5W3JhbmRvbV19IGNhcmRCYWNrYCkpO1xyXG4gICAgY2xhc3NBcnJheS5zcGxpY2UocmFuZG9tLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wVHVybnMoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWUgPSAnMCc7XHJcbn1cclxuXHJcbi8vdG9nZ2xpbmcgY2FyZCBmYWNlIHVwL2Rvd25cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNhcmQoLi4uY2FyZHMpIHtcclxuICBmb3IobGV0IGNhcmQgb2YgY2FyZHMpe1xyXG4gICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJkQmFjaycpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNc2cobXNnKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0ucHJlcGVuZChjcmVhdGVIdG1sKCdkaXYnLCAnbXNnRGl2JykpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21zZ0RpdicpWzBdLnByZXBlbmQoY3JlYXRlSHRtbCgncCcsICcnLCBtc2cpKTtcclxufTtcclxuXHJcbnZhciBlbXB0eUNhcmROdW1iZXIgPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUNhcmRzKGNhcmQxLCBjYXJkMikge1xyXG4gIGlmIChjYXJkMS5jbGFzc0xpc3RbMV0gPT0gY2FyZDIuY2xhc3NMaXN0WzFdKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtjYXJkMS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnLCAnbm9jbGljaycpO30sIDUwMCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtjYXJkMi5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnLCAnbm9jbGljaycpO30sIDUwMCk7XHJcbiAgICBlbXB0eUNhcmROdW1iZXIgKz0gMjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2FyZDEuY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpO1xyXG4gICAgY2FyZDIuY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpO1xyXG4gICAgc2V0VGltZW91dCh0b2dnbGVDYXJkLCA1MDAsIGNhcmQxLCBjYXJkMik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmllbGRTaXplICgpIHtcclxuICBsZXQgZWxlbXMsIGZpZWxkLCBjYXJkO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWVsZFNlbGVjdG9yJyk7XHJcbiAgQXJyYXkuZnJvbShlbGVtcykuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmaWVsZC5jbGFzc05hbWUgPSAnZ2FtZUZpZWxkIGZsZXgnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGltZU50dXJuc0Jsb2NrJylbMF0uYWZ0ZXIoZmllbGQpO1xyXG5cclxuICAgIGNsZWFyU3RvcHdhdGNoKCk7XHJcbiAgICBjbGVhclRpbWVvdXQoY2xvY2t0aW1lcik7XHJcbiAgICBpbml0ID0gMDtcclxuICAgIHN0b3BUdXJucygpO1xyXG4gICAgaXNGaXJzdENsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICBzd2l0Y2ggKGVsLnZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICBhZGRDYXJkcygxNik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgIGZpZWxkLnN0eWxlLndpZHRoID0gJzM3NXB4JztcclxuICAgICAgICBhZGRDYXJkcygyMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgIGZpZWxkLnN0eWxlLndpZHRoID0gJzQyMHB4JztcclxuICAgICAgICBmaWVsZC5zdHlsZS5oZWlnaHQgPSAnNjQ1cHgnO1xyXG4gICAgICAgIGFkZENhcmRzKDM2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubGV0IGZhY2VVcENvdW50ZXIgPSAwO1xyXG5sZXQgZmFjZVVwQ2FyZDE7XHJcbnZhciBpc0ZpcnN0Q2xpY2sgPSB0cnVlO1xyXG5leHBvcnQgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbWVGaWVsZCcpWzBdLm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZighdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZCcpKSByZXR1cm47XHJcbiAgICB0b2dnbGVDYXJkKHRhcmdldCk7XHJcblxyXG4gICAgaWYgKGlzRmlyc3RDbGljaykge1xyXG4gICAgICBpc0ZpcnN0Q2xpY2sgPSBmYWxzZTtcclxuICAgICAgc3RhcnRTdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkQmFjaycpKSB7XHJcbiAgICAgIGZhY2VVcENvdW50ZXIgKz0gMTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ25vY2xpY2snKTtcclxuICAgICAgLy9pZiB0d28gY2FyZHMgYXJlIGZhY2VkIHVwXHJcbiAgICAgIGlmIChmYWNlVXBDb3VudGVyID49IDIpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYW1lRmllbGQnKVswXS5jbGFzc0xpc3QuYWRkKCdub2NsaWNrJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZ2FtZUZpZWxkJylbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbm9jbGljaycpfSwgNTAwKTtcclxuICAgICAgICBjb21wYXJlQ2FyZHModGFyZ2V0LCBmYWNlVXBDYXJkMSk7XHJcblxyXG4gICAgICAgIGxldCBjYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKTtcclxuICAgICAgICBpZiAoZW1wdHlDYXJkTnVtYmVyID09IGNsYXNzQXJyTGVuZ3RoKSB7XHJcbiAgICAgICAgICBsZXQgdGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0b3B3YXRjaCcpWzBdLnZhbHVlO1xyXG4gICAgICAgICAgbGV0IHR1cm5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHVybnNDb3VudGVyJylbMF0udmFsdWU7XHJcbiAgICAgICAgICBzaG93TXNnKGA8Yj5Db25ncmF0dWxhdGlvbnMhPC9iPjxicj5Zb3UgcGFpcmVkIGFsbCB0aGUgY2FyZHMgaW4gJHt0aW1lfSBhbmQgJHt0dXJuc30gdHVybnNgKTtcclxuICAgICAgICAgIHN0YXJ0U3RvcCgpO1xyXG4gICAgICAgICAgc3RvcFR1cm5zKCk7XHJcbiAgICAgICAgICBmYWNlVXBDb3VudGVyID0gMDtcclxuICAgICAgICAgIGVtcHR5Q2FyZE51bWJlciA9IDA7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmYWNlVXBDb3VudGVyID0gMDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0dXJuc0NvdW50ZXInKVswXS52YWx1ZSsrO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBmYWNlVXBDYXJkMSA9IHRhcmdldDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vL1N0b3B3YXRjaCBpbml0aWFpemF0aW9uIGFuZCBmdW5jdGlvbnNcclxudmFyIGJhc2UgPSA2MDtcclxudmFyIGNsb2NrdGltZXIsIGRhdGVPYmosIGRoLCBkbSwgZHMsIG1zO1xyXG52YXIgcmVhZG91dCA9ICcnO1xyXG52YXIgaCA9IDEsXHJcbiAgbSA9IDEsXHJcbiAgdG0gPSAxLFxyXG4gIHMgPSAwLFxyXG4gIHRzID0gMCxcclxuICBtcyA9IDAsXHJcbiAgaW5pdCA9IDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTdG9wd2F0Y2ggKCkge1xyXG4gIGNsZWFyVGltZW91dChjbG9ja3RpbWVyKTtcclxuICBoID0gMTtcclxuICBtID0gMTtcclxuICB0bSA9IDE7XHJcbiAgcyA9IDA7XHJcbiAgdHMgPSAwO1xyXG4gIG1zID0gMDtcclxuICBpbml0ID0gMDtcclxuICByZWFkb3V0ID0gJzAwOjAwJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9wd2F0Y2gnKVswXS52YWx1ZSA9IHJlYWRvdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFN0b3B3YXRjaCAoKSB7XHJcbiAgdmFyIGNkYXRlT2JqID0gbmV3IERhdGUoKTtcclxuICB2YXIgdCA9IChjZGF0ZU9iai5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLSAocyAqIDEwMDApO1xyXG4gIGlmICh0ID4gOTk5KSB7XHJcbiAgICBzKys7XHJcbiAgfVxyXG4gIGlmIChzID49IChtICogYmFzZSkpIHtcclxuICAgIHRzID0gMDtcclxuICAgIG0rKztcclxuICB9IGVsc2Uge1xyXG4gICAgdHMgPSBwYXJzZUludCgobXMgLyAxMDApICsgcyk7XHJcbiAgICBpZiAodHMgPj0gYmFzZSkge1xyXG4gICAgICB0cyA9IHRzIC0gKChtIC0gMSkgKiBiYXNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKG0gPiAoaCAqIGJhc2UpKSB7XHJcbiAgICB0bSA9IDE7XHJcbiAgICBoKys7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRtID0gcGFyc2VJbnQoKG1zIC8gMTAwKSArIG0pO1xyXG4gICAgaWYgKHRtID49IGJhc2UpIHtcclxuICAgICAgdG0gPSB0bSAtICgoaCAtIDEpICogYmFzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh0cyA+IDApIHtcclxuICAgIGRzID0gdHM7XHJcbiAgICBpZiAodHMgPCAxMCkge1xyXG4gICAgICBkcyA9ICcwJyArIHRzO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkcyA9ICcwMCc7XHJcbiAgfVxyXG4gIGRtID0gdG0gLSAxO1xyXG4gIGlmIChkbSA+IDApIHtcclxuICAgIGlmIChkbSA8IDEwKSB7XHJcbiAgICAgIGRtID0gJzAnICsgZG07XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRtID0gJzAwJztcclxuICB9XHJcbiAgcmVhZG91dCA9IGRtICsgJzonICsgZHM7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3RvcHdhdGNoJylbMF0udmFsdWUgPSByZWFkb3V0O1xyXG4gIGNsb2NrdGltZXIgPSBzZXRUaW1lb3V0KHN0YXJ0U3RvcHdhdGNoLCAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0U3RvcCAoKSB7XHJcbiAgaWYgKGluaXQgPT0gMCkge1xyXG4gICAgY2xlYXJTdG9wd2F0Y2goKTtcclxuICAgIGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG4gICAgc3RhcnRTdG9wd2F0Y2goKTtcclxuICAgIGluaXQgPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjbGVhclN0b3B3YXRjaCgpO1xyXG4gICAgY2xlYXJUaW1lb3V0KGNsb2NrdGltZXIpO1xyXG4gICAgaW5pdCA9IDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=