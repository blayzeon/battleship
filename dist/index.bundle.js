/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,kDAAkD;AAClD;IACI,aAAa;IACb,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,8BAA8B;IAClC;AACJ","sourcesContent":["* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOARD_SIZE": () => (/* binding */ BOARD_SIZE),
/* harmony export */   "MAX_SHIP_SIZE": () => (/* binding */ MAX_SHIP_SIZE),
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "getRandomNumber": () => (/* binding */ getRandomNumber),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });


const BOARD_SIZE = 10;
const MAX_SHIP_SIZE = 5;

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// ships token for the game board
const ship = function(length) {
    return {
        length,
        hits: [],
        sunk: false,
        hit: function() {
            this.hits.push(true);
            const result = this.isSunk();

            return result;
        }, 
        isSunk: function() {
            if (this.hits.length === this.length) {
                this.sunk = true;
                return true;
            }

            return false;
        }
    }
};

// gameboard to keep track of the player's ships
const gameboard = function() {
    return {
        board: (function(){
            const result = [];
            for (let i = 1; i <= BOARD_SIZE; i += 1) {
                for (let j = 1; j <= BOARD_SIZE; j += 1) {
                    result.push({
                        coords: `${i},${j}`,
                        ship: false,
                        attacked: false
                    });
                }
            }
            return result;
        })(),
        getDamagedShips: function(){
            // this is used to help player.randomAttack() know where to strike
            const board = this.board;
            const result = [];

            board.forEach((item) => {
                if (item.ship) {
                    if (item.attacked) {
                        if (!item.ship.sunk) {
                            result.push(item.coords);
                        }
                    }
                }
            });

            return result;
        },
        clearBoard: function(){
            // clears the board for a new game
            for (let i = 0; i < this.board.length; i += 1) {
                this.board[i].ship = false;
                this.board[i].attacked = false;
            }
        },
        getRandomCoords: function(min, max) {
            // for player.RandomAttack() and board.randomizeShipPlacement()
            return `${getRandomNumber(min, max)},${getRandomNumber(min, max)}`;
        },
        returnIndex: function(coords) {
            for (let i = 0; i < this.board.length; i += 1) {
                if (this.board[i].coords === coords) {
                    return i;
                }
            }
        },
        placeShip: function(coords, length, direction="h") {
            const newShip = ship(length);
            const newPlacement = [];
            
            // split the coords up so that we can modify them and add all parts of the ship to the board
            const coordsArray = coords.split(',');
            let vCoords = parseInt(coordsArray[0]);
            let hCoords = parseInt(coordsArray[1]);

            // avoid overflow
            if (direction === "h") {
                if (hCoords + length > BOARD_SIZE) {
                    const tempSize = BOARD_SIZE % 2 === 0 ? BOARD_SIZE : BOARD_SIZE - 1;
                    hCoords = tempSize / 2;
                }
            } else {
                if (vCoords + length > BOARD_SIZE) {
                    const tempSize = BOARD_SIZE % 2 === 0 ? BOARD_SIZE : BOARD_SIZE - 1;
                    vCoords = tempSize / 2;
                }
            }

            // checks to see if the board coords we want to place the ship in are in use
            for (let i = 0; i < length; i += 1) {
                // move over one space to place more of the body
                if (i !== 0) {
                    if (direction === "h") {
                        hCoords += 1;
                    } else {
                        vCoords += 1;
                    }
                }

                const combinedCoords = `${vCoords},${hCoords}`; 
                const index = this.returnIndex(combinedCoords);

                // adds them to an array to be added to the board if the spot is free
                const boardSlot = this.board[index];
                if (!boardSlot.ship) {
                    newPlacement.push(boardSlot);
                } else {
                    return false;
                }
                
            }

            // safely places ships on the grid
            for (let j = 0; j < newPlacement.length; j += 1) {
                newPlacement[j].ship = newShip;
            }

            return newPlacement;
        },
        randomizeShipPlacement(amount=MAX_SHIP_SIZE, boardsize=BOARD_SIZE) {
            const ships = [];            
            let length = amount;

            // creates ships until we get to the desired amount
            while (ships.length < amount) {
                // tries again if the created ship isn't valid
                let newShip = false;

                while (newShip === false) {
                    const coords = this.getRandomCoords(1, boardsize);
                    const orientation = length % 2 === 0 ? "h" : "v";
                    newShip = this.placeShip(coords, length, orientation);
                }

                ships.push(newShip);
                length -= 1;
            }

            return ships;
        },
        receiveAttack: function(coords) {
            const index = this.returnIndex(coords);
            this.board[index].attacked = true;

            if (this.board[index].ship) {
                const ship = this.board[index].ship;
                ship.hit();
            }

            return this.board[index];
        },
        isGameOver: function() {
            for (let i = 0; i < this.board.length; i += 1) {
                if (this.board[i].ship) {
                    if (!this.board[i].ship.sunk) {
                        return false;
                    }
                }
            }
            
            return true;
        },
    }
}

// player token that allows the player to attack
const player = function() {
    return {
        attack: function(opponent, coords) {
            // make sure we don't attack the same place twice
            const index = opponent.returnIndex(coords);

            if (!opponent.board[index].attacked) {
                // returns opponent.board[index]
                return opponent.receiveAttack(coords);
            }
            
            return false;            
        },
        randomAttack: function(opponent) {
            let attack = false;

            while (attack === false) {
                // returns a list of coords for damaged ships
                const previousHits = opponent.getDamagedShips();
                let coords = false;
                
                if (previousHits[0]) {
                    function checkCourse(index) {
                        const options = []
                        options.push(1);
                        options.push(-1);
                        options.push(10);
                        options.push(-10);

                        // check if the ship we're targeting has been hit before
                        if (opponent.board[index].ship.hits.length < 1) {
                            // it hasn't, so we're going to attack somewhat randomly
                            for (let i = 0; i < options.length; i += 1) {
                                const newIndex = index + options[i];
                                if (!opponent.board[newIndex].attacked) {
                                    // the target spot hasn't been attacked yet
                                    console.log(opponent.board[newIndex].coords);
                                    return opponent.board[newIndex].coords;
                                }
                            }
                        } else {
                            // it has been hit before, so we can cheat
                            for (let i = 0; i < options.length; i += 1) {
                                let newIndex = index + options[i];
                                if (opponent.board[newIndex].ship) {
                                    // our target is a ship
                                    if (!opponent.board[newIndex].attacked) {
                                        // it hasn't been attacked
                                        return opponent.board[newIndex].coords;
                                    } else {
                                        // it has been attacked
                                        for (let j = 0; j < 100; j += 1) {
                                            // check if the previous attempt was a miss
                                            if (!opponent.board[newIndex].ship) {
                                                continue;
                                            }

                                            newIndex += options[i];
                                            // check if it exists
                                            if (opponent.board[newIndex]) {
                                                if (!opponent.board[newIndex].attacked) {
                                                    return opponent.board[newIndex].coords;
                                                } else {
                                                    // it doesnt, so we need to change direction
                                                    continue;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    const previousIndex = opponent.returnIndex(previousHits[0]); 
                    
                    // let's try attacking
                    coords = checkCourse(previousIndex);
                    attack = this.attack(opponent, coords);
                    
                } else {
                    attack = this.attack(opponent, opponent.getRandomCoords(1, BOARD_SIZE+1));
                }
            }
            return attack;
        }
    }
}

/*
            randomAttack: function(opponent) {
            let attack = false;
            const previousHits = opponent.getDamagedShips();

            let mod = 1;
            while (attack === false) {
                // attack based on previous attacks
                if (previousHits[0]) {
                    console.log(`the previous target was ${previousHits[0]}`);
                    const currentIndex = opponent.returnIndex(previousHits[0]);
                    const targetIndex = currentIndex + mod;
                    const targetCoords = opponent.board[targetIndex].coords;
                    console.log(`the current target is ${targetCoords}`)
                    attack = this.attack(opponent, targetCoords);
                } else {
                    // completely random attack
                    attack = this.attack(opponent, opponent.getRandomCoords(1, BOARD_SIZE+1));
                    console.log(attack);
                }
            }

            return attack;
        }

*/

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ "./src/battleship.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





function startGame() {
// tracking game state
let isGameOver = false
let userScore = _battleship_js__WEBPACK_IMPORTED_MODULE_0__.MAX_SHIP_SIZE;
let cpuScore = _battleship_js__WEBPACK_IMPORTED_MODULE_0__.MAX_SHIP_SIZE;

function gameOver() {
    function clearBoard() {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }

        document.body.innerHTML = `
            <div id="game-container" class="full-screen">
            <div id="top-center">
            <div>
                <div>CPU's board</div>
                <div id="top-score"></div>
            </div></div>
            <div id="bottom-center">
                <div>
                    <div>User's board</div>
                    <div id="bottom-score"></div>
                </div>
            </div>
        </div>
    `
    }

    const a = confirm('Game over! Would you like to play again?');
    if (a) {
        clearBoard();
        startGame();
    }       
}

function getScoreMessage(newScore, maxScore) {
    return `Ships: ${newScore} out of ${maxScore}`;
}

function updateScoreMessages() {
    const uScoreElm = document.querySelector('#top-score');
    const cScoreElm = document.querySelector('#bottom-score');

    uScoreElm.innerText = getScoreMessage(userScore, _battleship_js__WEBPACK_IMPORTED_MODULE_0__.MAX_SHIP_SIZE);
    cScoreElm.innerText = getScoreMessage(cpuScore, _battleship_js__WEBPACK_IMPORTED_MODULE_0__.MAX_SHIP_SIZE);
}

// creates the user board so players can attack
const buildGrid = function(tiles) {
    const table = document.createElement("div");
    table.classList.add('game-table');
    table.classList.add('full-screen');
    
    // limited by letters of the alphabet
    const boardSize = tiles < 27 ? tiles : 26

    // top row of columns for the game board
    const topNums = document.createElement('div');
    topNums.classList.add('game-numbers');
    for (let i = 0; i <= boardSize; i += 1 ) {
        if (i === 0) { continue }
        const item = document.createElement('div');
        item.innerText = i;
        topNums.appendChild(item);
    }

    table.appendChild(topNums);

    // side rows for the gameboard
    const ascii = 65; // use String.fromCharCode(code);
    const centerContent = document.createElement('div');
    centerContent.classList.add('game-rows');
    const squares = document.createElement('div');
    squares.classList.add('game-squares');
    const sideLetters = document.createElement('div');
    sideLetters.classList.add('game-letters');
    for (let j = 0; j < boardSize; j += 1 ) {
        const letter = document.createElement('div');

        letter.innerText = (String.fromCharCode(j+ascii));
        sideLetters.appendChild(letter);

        for (let k = 0; k < boardSize; k += 1 ) {
            const square = document.createElement('div');
            square.setAttribute('data', `${j+1},${k+1}`);
            square.classList.add('grid');
            squares.appendChild(square);
        }
    }
    
    centerContent.appendChild(sideLetters);
    centerContent.appendChild(squares);
    table.appendChild(centerContent);

    return table;
}

updateScoreMessages();


    // functions for manipulating the UI
    function getDomSquare(coords, ui) {
        return ui.querySelector(`[data='${coords}']`);
    }

    function getAttackToken() {
        const token = document.createElement('div');
        token.classList.add('token');

        return token;
    }

    function placeShips(board, ui, showShips=false) {
        const ships = board.randomizeShipPlacement(5);
        ships.forEach((ship) => {
            if (showShips) {
                for (let i = 0; i < ship.length; i += 1) {
                    const square = getDomSquare(ship[i].coords, ui);
                    square.classList.add('ship');
                }
            }
        });

        return ships;
    }

    function styleEntireShip(shipSet, coords, style, ui) {
        shipSet.forEach((ship)=>{ // array of arrays that contain ships
            for (let i = 0; i < ship.length; i += 1){  // array of ships associated with a single ship
                if (ship[i].coords === coords) {
                    ship.forEach((colorMe)=>{
                        const elm = getDomSquare(colorMe.coords, ui)
                        elm.classList.add(style);
                    })
                }
            }
        });
    }

    // gameboard and players
    const cpuUi = document.querySelector('#top-center');
    const userUi = document.querySelector('#bottom-center');

    cpuUi.appendChild(buildGrid(_battleship_js__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE));
    userUi.appendChild(buildGrid(_battleship_js__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE));

    const userPlayer = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.player)();
    const userBoard = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    let userShips = placeShips(userBoard, userUi, true);

    const cpuPlayer = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.player)();
    const cpuBoard = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    let cpuShips = placeShips(cpuBoard, cpuUi);

    // control the gameplay
    function takeTurn(square, attack, targetBoard, targetShips, targetUi) {
        square.appendChild(getAttackToken());

        if (attack.ship) {
            square.classList.add('ship');
            if (attack.ship.sunk) {
                // let the user know the ship is dead
                styleEntireShip(targetShips, attack.coords, 'damaged', targetUi);

                if (targetUi === cpuUi) {
                    userScore -= 1;
                } else {
                    cpuScore -= 1;
                }

                updateScoreMessages();

                // check if the game is over
                const result = targetBoard.isGameOver();
                if (result) {
                    isGameOver = true;
                    gameOver();
                }
                
            }

            return true;  // so we know if the user should take another turn
        } 

        return false;
    }

    document.getElementById('game-container').addEventListener('click', (e)=>{   
        if (isGameOver === true) {
            gameOver();
        }
        const board = e.target.closest('.game-table');
        const square = e.target.closest('.grid');
    
        if (!square) {
            return // didn't click a square
        }
    
        const coords = square.getAttribute('data');
    
        if (cpuUi.querySelector('.game-table') === board) {
            // the user clicked the enemy's board
            const attack = userPlayer.attack(cpuBoard, coords);
            if (attack) {
                 const userTurn = takeTurn(square, attack, cpuBoard, cpuShips, cpuUi);
    
                 if (!userTurn){
                    let cpuTurn = true;
                    while (cpuTurn) {
                        const cpuAttack = cpuPlayer.randomAttack(userBoard);
                        const cpuTarget = getDomSquare(cpuAttack.coords, userUi);
                        cpuTurn = takeTurn(cpuTarget, cpuAttack, userBoard, userShips, userUi);
                    }
                 }
            }
        }
    });
}

startGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsNEJBQTRCLGlCQUFpQixVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxzREFBVTtBQUMxQyxpQ0FBaUMsc0RBQVU7O0FBRTNDLHVCQUF1QixzREFBTTtBQUM3QixzQkFBc0IseURBQVM7QUFDL0I7O0FBRUEsc0JBQXNCLHNEQUFNO0FBQzVCLHFCQUFxQix5REFBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlcmJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgXFxufVxcblxcbi5mdWxsLXNjcmVlbiB7XFxuICAgIGhlaWdodDogOTkuOSU7XFxuICAgIHdpZHRoOiA5OS45JTtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgZGl2IGhvbGRpbmcgdGhlIHNwbGl0IGRpc3BsYXlzICovXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciA+ICogPiAqIHtcXG4gICAgbWluLXdpZHRoOiAxcmVtO1xcbn1cXG5cXG4jdG9wLWNlbnRlciwgI2JvdHRvbS1jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDByZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jdG9wLWNlbnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAzLCA1NiUsIDY4JSwgMC43KTtcXG59XFxuXFxuI2JvdHRvbS1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI0MCwgNTYlLCA2OCUsIDAuNyk7XFxufVxcblxcbiN0b3AtY2VudGVyID4gZGl2LCAjYm90dG9tLWNlbnRlciA+IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZS10YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGhzbCgwLCAwJSwgODAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yMCk7XFxufVxcblxcbi5nYW1lLW51bWJlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzID4gKiB7XFxuICAgIHdpZHRoOiA5Ljk5JTtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5LjklO1xcbn1cXG5cXG4uZ2FtZS1yb3dzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdhbWUtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIHdpZHRoOiA5LjklO1xcbn1cXG5cXG4uZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBVbml0IHN0eWxpbmcgKi9cXG5cXG4udG9rZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMzMsIDY1JSwgMjUlLCAwLjcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYW1hZ2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlLCAwLjcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNnYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlcmJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICAgXFxufVxcblxcbi5mdWxsLXNjcmVlbiB7XFxuICAgIGhlaWdodDogOTkuOSU7XFxuICAgIHdpZHRoOiA5OS45JTtcXG59XFxuXFxuLyogTWFpbiBjb250YWluZXIgZGl2IGhvbGRpbmcgdGhlIHNwbGl0IGRpc3BsYXlzICovXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciA+ICogPiAqIHtcXG4gICAgbWluLXdpZHRoOiAxcmVtO1xcbn1cXG5cXG4jdG9wLWNlbnRlciwgI2JvdHRvbS1jZW50ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDByZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jdG9wLWNlbnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjAzLCA1NiUsIDY4JSwgMC43KTtcXG59XFxuXFxuI2JvdHRvbS1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI0MCwgNTYlLCA2OCUsIDAuNyk7XFxufVxcblxcbiN0b3AtY2VudGVyID4gZGl2LCAjYm90dG9tLWNlbnRlciA+IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZ2FtZS10YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGhzbCgwLCAwJSwgODAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yMCk7XFxufVxcblxcbi5nYW1lLW51bWJlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzID4gKiB7XFxuICAgIHdpZHRoOiA5Ljk5JTtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5LjklO1xcbn1cXG5cXG4uZ2FtZS1yb3dzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdhbWUtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIHdpZHRoOiA5LjklO1xcbn1cXG5cXG4uZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBVbml0IHN0eWxpbmcgKi9cXG5cXG4udG9rZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMzMsIDY1JSwgMjUlLCAwLjcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYW1hZ2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlLCAwLjcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNnYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBzaGlwLCBnYW1lYm9hcmQsIHBsYXllciwgZ2V0UmFuZG9tTnVtYmVyLCBCT0FSRF9TSVpFLCBNQVhfU0hJUF9TSVpFIH07XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcbmNvbnN0IE1BWF9TSElQX1NJWkUgPSA1O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLy8gc2hpcHMgdG9rZW4gZm9yIHRoZSBnYW1lIGJvYXJkXG5jb25zdCBzaGlwID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIGhpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNTdW5rKCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZ2FtZWJvYXJkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBsYXllcidzIHNoaXBzXG5jb25zdCBnYW1lYm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZDogKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEJPQVJEX1NJWkU7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IEJPQVJEX1NJWkU7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGAke2l9LCR7an1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgZ2V0RGFtYWdlZFNoaXBzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIGhlbHAgcGxheWVyLnJhbmRvbUF0dGFjaygpIGtub3cgd2hlcmUgdG8gc3RyaWtlXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuYm9hcmQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgYm9hcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLmNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJCb2FyZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGNsZWFycyB0aGUgYm9hcmQgZm9yIGEgbmV3IGdhbWVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uYXR0YWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tQ29vcmRzOiBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICAgICAgLy8gZm9yIHBsYXllci5SYW5kb21BdHRhY2soKSBhbmQgYm9hcmQucmFuZG9taXplU2hpcFBsYWNlbWVudCgpXG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX0sJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybkluZGV4OiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldLmNvb3JkcyA9PT0gY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihjb29yZHMsIGxlbmd0aCwgZGlyZWN0aW9uPVwiaFwiKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UGxhY2VtZW50ID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBjb29yZHMgdXAgc28gdGhhdCB3ZSBjYW4gbW9kaWZ5IHRoZW0gYW5kIGFkZCBhbGwgcGFydHMgb2YgdGhlIHNoaXAgdG8gdGhlIGJvYXJkXG4gICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IGNvb3Jkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IHZDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVswXSk7XG4gICAgICAgICAgICBsZXQgaENvb3JkcyA9IHBhcnNlSW50KGNvb3Jkc0FycmF5WzFdKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgb3ZlcmZsb3dcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhDb29yZHMgKyBsZW5ndGggPiBCT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBTaXplID0gQk9BUkRfU0laRSAlIDIgPT09IDAgPyBCT0FSRF9TSVpFIDogQk9BUkRfU0laRSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGhDb29yZHMgPSB0ZW1wU2l6ZSAvIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodkNvb3JkcyArIGxlbmd0aCA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFNpemUgPSBCT0FSRF9TSVpFICUgMiA9PT0gMCA/IEJPQVJEX1NJWkUgOiBCT0FSRF9TSVpFIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdkNvb3JkcyA9IHRlbXBTaXplIC8gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrcyB0byBzZWUgaWYgdGhlIGJvYXJkIGNvb3JkcyB3ZSB3YW50IHRvIHBsYWNlIHRoZSBzaGlwIGluIGFyZSBpbiB1c2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG92ZXIgb25lIHNwYWNlIHRvIHBsYWNlIG1vcmUgb2YgdGhlIGJvZHlcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaENvb3JkcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdkNvb3JkcyArPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRDb29yZHMgPSBgJHt2Q29vcmRzfSwke2hDb29yZHN9YDsgXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJldHVybkluZGV4KGNvbWJpbmVkQ29vcmRzKTtcblxuICAgICAgICAgICAgICAgIC8vIGFkZHMgdGhlbSB0byBhbiBhcnJheSB0byBiZSBhZGRlZCB0byB0aGUgYm9hcmQgaWYgdGhlIHNwb3QgaXMgZnJlZVxuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU2xvdCA9IHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghYm9hcmRTbG90LnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UGxhY2VtZW50LnB1c2goYm9hcmRTbG90KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzYWZlbHkgcGxhY2VzIHNoaXBzIG9uIHRoZSBncmlkXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5ld1BsYWNlbWVudC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudFtqXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld1BsYWNlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9taXplU2hpcFBsYWNlbWVudChhbW91bnQ9TUFYX1NISVBfU0laRSwgYm9hcmRzaXplPUJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBzID0gW107ICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gYW1vdW50O1xuXG4gICAgICAgICAgICAvLyBjcmVhdGVzIHNoaXBzIHVudGlsIHdlIGdldCB0byB0aGUgZGVzaXJlZCBhbW91bnRcbiAgICAgICAgICAgIHdoaWxlIChzaGlwcy5sZW5ndGggPCBhbW91bnQpIHtcbiAgICAgICAgICAgICAgICAvLyB0cmllcyBhZ2FpbiBpZiB0aGUgY3JlYXRlZCBzaGlwIGlzbid0IHZhbGlkXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdTaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmdldFJhbmRvbUNvb3JkcygxLCBib2FyZHNpemUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IGxlbmd0aCAlIDIgPT09IDAgPyBcImhcIiA6IFwidlwiO1xuICAgICAgICAgICAgICAgICAgICBuZXdTaGlwID0gdGhpcy5wbGFjZVNoaXAoY29vcmRzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgICAgIGxlbmd0aCAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc2hpcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2s6IGZ1bmN0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJldHVybkluZGV4KGNvb3Jkcyk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XS5hdHRhY2tlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuYm9hcmRbaW5kZXhdLnNoaXA7XG4gICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbaW5kZXhdO1xuICAgICAgICB9LFxuICAgICAgICBpc0dhbWVPdmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJvYXJkW2ldLnNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbi8vIHBsYXllciB0b2tlbiB0aGF0IGFsbG93cyB0aGUgcGxheWVyIHRvIGF0dGFja1xuY29uc3QgcGxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXR0YWNrOiBmdW5jdGlvbihvcHBvbmVudCwgY29vcmRzKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3QgYXR0YWNrIHRoZSBzYW1lIHBsYWNlIHR3aWNlXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9wcG9uZW50LnJldHVybkluZGV4KGNvb3Jkcyk7XG5cbiAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbaW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBvcHBvbmVudC5ib2FyZFtpbmRleF1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbUF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgd2hpbGUgKGF0dGFjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBjb29yZHMgZm9yIGRhbWFnZWQgc2hpcHNcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0hpdHMgPSBvcHBvbmVudC5nZXREYW1hZ2VkU2hpcHMoKTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzSGl0c1swXSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0NvdXJzZShpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgtMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCB3ZSdyZSB0YXJnZXRpbmcgaGFzIGJlZW4gaGl0IGJlZm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW2luZGV4XS5zaGlwLmhpdHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhc24ndCwgc28gd2UncmUgZ29pbmcgdG8gYXR0YWNrIHNvbWV3aGF0IHJhbmRvbWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggKyBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRhcmdldCBzcG90IGhhc24ndCBiZWVuIGF0dGFja2VkIHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzIGJlZW4gaGl0IGJlZm9yZSwgc28gd2UgY2FuIGNoZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IGluZGV4ICsgb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvdXIgdGFyZ2V0IGlzIGEgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXNuJ3QgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXMgYmVlbiBhdHRhY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTAwOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHByZXZpb3VzIGF0dGVtcHQgd2FzIGEgbWlzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBkb2VzbnQsIHNvIHdlIG5lZWQgdG8gY2hhbmdlIGRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNJbmRleCA9IG9wcG9uZW50LnJldHVybkluZGV4KHByZXZpb3VzSGl0c1swXSk7IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgdHJ5IGF0dGFja2luZ1xuICAgICAgICAgICAgICAgICAgICBjb29yZHMgPSBjaGVja0NvdXJzZShwcmV2aW91c0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBvcHBvbmVudC5nZXRSYW5kb21Db29yZHMoMSwgQk9BUkRfU0laRSsxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGF0dGFjaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAgICAgICAgICAgIHJhbmRvbUF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGxldCBhdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0cyA9IG9wcG9uZW50LmdldERhbWFnZWRTaGlwcygpO1xuXG4gICAgICAgICAgICBsZXQgbW9kID0gMTtcbiAgICAgICAgICAgIHdoaWxlIChhdHRhY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gYXR0YWNrIGJhc2VkIG9uIHByZXZpb3VzIGF0dGFja3NcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNIaXRzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgcHJldmlvdXMgdGFyZ2V0IHdhcyAke3ByZXZpb3VzSGl0c1swXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gb3Bwb25lbnQucmV0dXJuSW5kZXgocHJldmlvdXNIaXRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBjdXJyZW50SW5kZXggKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldENvb3JkcyA9IG9wcG9uZW50LmJvYXJkW3RhcmdldEluZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0aGUgY3VycmVudCB0YXJnZXQgaXMgJHt0YXJnZXRDb29yZHN9YClcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5hdHRhY2sob3Bwb25lbnQsIHRhcmdldENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcGxldGVseSByYW5kb20gYXR0YWNrXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBvcHBvbmVudC5nZXRSYW5kb21Db29yZHMoMSwgQk9BUkRfU0laRSsxKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dGFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgICAgICB9XG5cbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdhbWVib2FyZCwgcGxheWVyLCBCT0FSRF9TSVpFLCBNQVhfU0hJUF9TSVpFIH0gZnJvbSAnLi9iYXR0bGVzaGlwLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuLy8gdHJhY2tpbmcgZ2FtZSBzdGF0ZVxubGV0IGlzR2FtZU92ZXIgPSBmYWxzZVxubGV0IHVzZXJTY29yZSA9IE1BWF9TSElQX1NJWkU7XG5sZXQgY3B1U2NvcmUgPSBNQVhfU0hJUF9TSVpFO1xuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICBmdW5jdGlvbiBjbGVhckJvYXJkKCkge1xuICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cImdhbWUtY29udGFpbmVyXCIgY2xhc3M9XCJmdWxsLXNjcmVlblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInRvcC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5DUFUncyBib2FyZDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3Atc2NvcmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlVzZXIncyBib2FyZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLXNjb3JlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxuICAgIH1cblxuICAgIGNvbnN0IGEgPSBjb25maXJtKCdHYW1lIG92ZXIhIFdvdWxkIHlvdSBsaWtlIHRvIHBsYXkgYWdhaW4/Jyk7XG4gICAgaWYgKGEpIHtcbiAgICAgICAgY2xlYXJCb2FyZCgpO1xuICAgICAgICBzdGFydEdhbWUoKTtcbiAgICB9ICAgICAgIFxufVxuXG5mdW5jdGlvbiBnZXRTY29yZU1lc3NhZ2UobmV3U2NvcmUsIG1heFNjb3JlKSB7XG4gICAgcmV0dXJuIGBTaGlwczogJHtuZXdTY29yZX0gb3V0IG9mICR7bWF4U2NvcmV9YDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmVNZXNzYWdlcygpIHtcbiAgICBjb25zdCB1U2NvcmVFbG0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLXNjb3JlJyk7XG4gICAgY29uc3QgY1Njb3JlRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdHRvbS1zY29yZScpO1xuXG4gICAgdVNjb3JlRWxtLmlubmVyVGV4dCA9IGdldFNjb3JlTWVzc2FnZSh1c2VyU2NvcmUsIE1BWF9TSElQX1NJWkUpO1xuICAgIGNTY29yZUVsbS5pbm5lclRleHQgPSBnZXRTY29yZU1lc3NhZ2UoY3B1U2NvcmUsIE1BWF9TSElQX1NJWkUpO1xufVxuXG4vLyBjcmVhdGVzIHRoZSB1c2VyIGJvYXJkIHNvIHBsYXllcnMgY2FuIGF0dGFja1xuY29uc3QgYnVpbGRHcmlkID0gZnVuY3Rpb24odGlsZXMpIHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS10YWJsZScpO1xuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2NyZWVuJyk7XG4gICAgXG4gICAgLy8gbGltaXRlZCBieSBsZXR0ZXJzIG9mIHRoZSBhbHBoYWJldFxuICAgIGNvbnN0IGJvYXJkU2l6ZSA9IHRpbGVzIDwgMjcgPyB0aWxlcyA6IDI2XG5cbiAgICAvLyB0b3Agcm93IG9mIGNvbHVtbnMgZm9yIHRoZSBnYW1lIGJvYXJkXG4gICAgY29uc3QgdG9wTnVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcE51bXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1udW1iZXJzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYm9hcmRTaXplOyBpICs9IDEgKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7IGNvbnRpbnVlIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGk7XG4gICAgICAgIHRvcE51bXMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfVxuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodG9wTnVtcyk7XG5cbiAgICAvLyBzaWRlIHJvd3MgZm9yIHRoZSBnYW1lYm9hcmRcbiAgICBjb25zdCBhc2NpaSA9IDY1OyAvLyB1c2UgU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICBjb25zdCBjZW50ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdnYW1lLXJvd3MnKTtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdnYW1lLXNxdWFyZXMnKTtcbiAgICBjb25zdCBzaWRlTGV0dGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGVMZXR0ZXJzLmNsYXNzTGlzdC5hZGQoJ2dhbWUtbGV0dGVycycpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRTaXplOyBqICs9IDEgKSB7XG4gICAgICAgIGNvbnN0IGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldHRlci5pbm5lclRleHQgPSAoU3RyaW5nLmZyb21DaGFyQ29kZShqK2FzY2lpKSk7XG4gICAgICAgIHNpZGVMZXR0ZXJzLmFwcGVuZENoaWxkKGxldHRlcik7XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBib2FyZFNpemU7IGsgKz0gMSApIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2orMX0sJHtrKzF9YCk7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgICAgICAgICAgc3F1YXJlcy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNlbnRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZUxldHRlcnMpO1xuICAgIGNlbnRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3F1YXJlcyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGVudCk7XG5cbiAgICByZXR1cm4gdGFibGU7XG59XG5cbnVwZGF0ZVNjb3JlTWVzc2FnZXMoKTtcblxuXG4gICAgLy8gZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIFVJXG4gICAgZnVuY3Rpb24gZ2V0RG9tU3F1YXJlKGNvb3JkcywgdWkpIHtcbiAgICAgICAgcmV0dXJuIHVpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhPScke2Nvb3Jkc30nXWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEF0dGFja1Rva2VuKCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2tlbi5jbGFzc0xpc3QuYWRkKCd0b2tlbicpO1xuXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBzKGJvYXJkLCB1aSwgc2hvd1NoaXBzPWZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gYm9hcmQucmFuZG9taXplU2hpcFBsYWNlbWVudCg1KTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3dTaGlwcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBnZXREb21TcXVhcmUoc2hpcFtpXS5jb29yZHMsIHVpKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHlsZUVudGlyZVNoaXAoc2hpcFNldCwgY29vcmRzLCBzdHlsZSwgdWkpIHtcbiAgICAgICAgc2hpcFNldC5mb3JFYWNoKChzaGlwKT0+eyAvLyBhcnJheSBvZiBhcnJheXMgdGhhdCBjb250YWluIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpeyAgLy8gYXJyYXkgb2Ygc2hpcHMgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIHNoaXBcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFtpXS5jb29yZHMgPT09IGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmZvckVhY2goKGNvbG9yTWUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbG0gPSBnZXREb21TcXVhcmUoY29sb3JNZS5jb29yZHMsIHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZ2FtZWJvYXJkIGFuZCBwbGF5ZXJzXG4gICAgY29uc3QgY3B1VWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWNlbnRlcicpO1xuICAgIGNvbnN0IHVzZXJVaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3R0b20tY2VudGVyJyk7XG5cbiAgICBjcHVVaS5hcHBlbmRDaGlsZChidWlsZEdyaWQoQk9BUkRfU0laRSkpO1xuICAgIHVzZXJVaS5hcHBlbmRDaGlsZChidWlsZEdyaWQoQk9BUkRfU0laRSkpO1xuXG4gICAgY29uc3QgdXNlclBsYXllciA9IHBsYXllcigpO1xuICAgIGNvbnN0IHVzZXJCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCB1c2VyU2hpcHMgPSBwbGFjZVNoaXBzKHVzZXJCb2FyZCwgdXNlclVpLCB0cnVlKTtcblxuICAgIGNvbnN0IGNwdVBsYXllciA9IHBsYXllcigpO1xuICAgIGNvbnN0IGNwdUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgbGV0IGNwdVNoaXBzID0gcGxhY2VTaGlwcyhjcHVCb2FyZCwgY3B1VWkpO1xuXG4gICAgLy8gY29udHJvbCB0aGUgZ2FtZXBsYXlcbiAgICBmdW5jdGlvbiB0YWtlVHVybihzcXVhcmUsIGF0dGFjaywgdGFyZ2V0Qm9hcmQsIHRhcmdldFNoaXBzLCB0YXJnZXRVaSkge1xuICAgICAgICBzcXVhcmUuYXBwZW5kQ2hpbGQoZ2V0QXR0YWNrVG9rZW4oKSk7XG5cbiAgICAgICAgaWYgKGF0dGFjay5zaGlwKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgaWYgKGF0dGFjay5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgdGhlIHVzZXIga25vdyB0aGUgc2hpcCBpcyBkZWFkXG4gICAgICAgICAgICAgICAgc3R5bGVFbnRpcmVTaGlwKHRhcmdldFNoaXBzLCBhdHRhY2suY29vcmRzLCAnZGFtYWdlZCcsIHRhcmdldFVpKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVaSA9PT0gY3B1VWkpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlclNjb3JlIC09IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3B1U2NvcmUgLT0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVTY29yZU1lc3NhZ2VzKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGFyZ2V0Qm9hcmQuaXNHYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVPdmVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgIC8vIHNvIHdlIGtub3cgaWYgdGhlIHVzZXIgc2hvdWxkIHRha2UgYW5vdGhlciB0dXJuXG4gICAgICAgIH0gXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57ICAgXG4gICAgICAgIGlmIChpc0dhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnLmdhbWUtdGFibGUnKTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQuY2xvc2VzdCgnLmdyaWQnKTtcbiAgICBcbiAgICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgICAgIHJldHVybiAvLyBkaWRuJ3QgY2xpY2sgYSBzcXVhcmVcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgXG4gICAgICAgIGlmIChjcHVVaS5xdWVyeVNlbGVjdG9yKCcuZ2FtZS10YWJsZScpID09PSBib2FyZCkge1xuICAgICAgICAgICAgLy8gdGhlIHVzZXIgY2xpY2tlZCB0aGUgZW5lbXkncyBib2FyZFxuICAgICAgICAgICAgY29uc3QgYXR0YWNrID0gdXNlclBsYXllci5hdHRhY2soY3B1Qm9hcmQsIGNvb3Jkcyk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJUdXJuID0gdGFrZVR1cm4oc3F1YXJlLCBhdHRhY2ssIGNwdUJvYXJkLCBjcHVTaGlwcywgY3B1VWkpO1xuICAgIFxuICAgICAgICAgICAgICAgICBpZiAoIXVzZXJUdXJuKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNwdVR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3B1VHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3B1QXR0YWNrID0gY3B1UGxheWVyLnJhbmRvbUF0dGFjayh1c2VyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3B1VGFyZ2V0ID0gZ2V0RG9tU3F1YXJlKGNwdUF0dGFjay5jb29yZHMsIHVzZXJVaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcHVUdXJuID0gdGFrZVR1cm4oY3B1VGFyZ2V0LCBjcHVBdHRhY2ssIHVzZXJCb2FyZCwgdXNlclNoaXBzLCB1c2VyVWkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=