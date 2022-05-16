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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.popup {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    border: 1px solid black;\n    padding: 3%;\n    top:50%;\n    left: 50%;\n    transform: translate(-50% , -50%);\n    border-radius: 0.5rem;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.popup > div {\n    margin-bottom: 0.5rem;\n    display: flex;\n    gap: 0.5rem;\n    justify-content: center;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,kDAAkD;AAClD;IACI,aAAa;IACb,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,uBAAuB;IACvB,WAAW;IACX,OAAO;IACP,SAAS;IACT,iCAAiC;IACjC,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA,iBAAiB;;AAEjB;IACI,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,8BAA8B;IAClC;AACJ","sourcesContent":["* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.popup {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    border: 1px solid black;\n    padding: 3%;\n    top:50%;\n    left: 50%;\n    transform: translate(-50% , -50%);\n    border-radius: 0.5rem;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.popup > div {\n    margin-bottom: 0.5rem;\n    display: flex;\n    gap: 0.5rem;\n    justify-content: center;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}"],"sourceRoot":""}]);
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
                if (hCoords + length - 1 > BOARD_SIZE) {
                    console.log(hCoords)
                    console.log(hCoords + length)
                    console.log(BOARD_SIZE);
                    return false;
                }
            } else {
                if (vCoords + length - 1 > BOARD_SIZE) {
                    console.log('v was too long')
                    return false;
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
                    console.log('board slot was taken')
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

    function createPopup() {
        const container = document.createElement('div');
        container.classList.add('popup');
        
        // lets the user select the direction
        const directContainer = document.createElement('div');
        const directLabel = document.createElement('label');
        directLabel.innerText = "Direction: ";
        const directInput = document.createElement('select');
        const option1 = document.createElement('option');
        option1.innerText = "Horizontal";
        const option2 = document.createElement('option');
        option2.innerText = "Vertical";

        directInput.appendChild(option1);
        directInput.appendChild(option2);
        directContainer.appendChild(directLabel);
        directContainer.appendChild(directInput);

        // lets the user select the coords
        const coordsContainer = document.createElement('div');
        const coordsLabel = document.createElement('label');
        coordsLabel.innerText = "Coordinates: ";
        const coordsInput1 = document.createElement('select');
        const coordsInput2 = document.createElement('select');

        for (let i = 1; i <= 10; i += 1) {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            option1.innerText = i;
            option2.innerText = i;

            coordsInput1.appendChild(option1);
            coordsInput2.appendChild(option2);
        }

        coordsContainer.appendChild(coordsLabel);
        coordsContainer.appendChild(coordsInput1);
        coordsContainer.appendChild(coordsInput2);

        // submit and cancel buttons
        const buttonContainer = document.createElement('div');
        const submit = document.createElement('button');
        submit.innerText = "Submit";
        const cancel = document.createElement('button');
        cancel.innerText = "Cancel";
        buttonContainer.appendChild(submit);
        buttonContainer.appendChild(cancel);

        cancel.addEventListener('click', ()=> {
            container.remove();
        });
        
        container.appendChild(directContainer);
        container.appendChild(coordsContainer);
        container.appendChild(buttonContainer);
        return {
            container,
            submit: submit,
            direction: directInput,
            coordsH: coordsInput2,
            coordsV: coordsInput1,
        };
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

    function styleEntireShip(shipSet, coords, style, ui, add=true) {
        shipSet.forEach((ship)=>{ // array of arrays that contain ships
            for (let i = 0; i < ship.length; i += 1){  // array of ships associated with a single ship
                if (ship[i].coords === coords) {
                    ship.forEach((colorMe)=>{
                        const elm = getDomSquare(colorMe.coords, ui)
                        if (add === true) {
                            elm.classList.add(style);
                        } else {
                            elm.classList.remove(style);
                        }
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
    const userShips = placeShips(userBoard, userUi, true);

    const cpuPlayer = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.player)();
    const cpuBoard = (0,_battleship_js__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
    const cpuShips = placeShips(cpuBoard, cpuUi);

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

    let gameStarted = false;

    // let the player attack or move pieces
    document.getElementById('game-container').addEventListener('click', (e)=>{   
        if (isGameOver === true) {
            gameOver();
            return;
        }
        const board = e.target.closest('.game-table');
        const square = e.target.closest('.grid');
    
        if (!square) {
            return // didn't click a square
        }
    
        const coords = square.getAttribute('data');
        if (gameStarted === false) {
            if (userUi.querySelector('.game-table') === board) {
                // get ship
                const squareCoords = square.getAttribute('data');
                const boardSlot = userBoard.board.find(index => index.coords === squareCoords);
                const ship = boardSlot.ship;
                const shipIndexes = userBoard.board.filter(index => index.ship === ship);

                // user didn't click a ship
                if (ship === false) {
                    return;
                }

                if (document.querySelector('.popup')) {
                    // we already have a popup, so we don't want another one
                    return;
                }
                const popObj = createPopup();
                document.body.appendChild(popObj.container);
                popObj.submit.addEventListener('click', () => {
                    console.log('popup submit ran');
                    styleEntireShip(userShips, squareCoords, 'ship', userUi, false);
                    const hCoords = popObj.coordsH.value;
                    const vCoords = popObj.coordsV.value;
                    const direction = popObj.direction.value === 'Horizontal' ? 'h' : 'v';
                    const length = ship.length;
                    const coords = `${vCoords},${hCoords}`;
                    console.log('creating a new ship')
                    const newShip = userBoard.placeShip(coords, length, direction);
                    console.log(userBoard);
                    userShips.push(newShip);
                    console.log(newShip);
                    styleEntireShip(userShips, coords, 'ship', userUi);

                    shipIndexes.forEach((shipSection) => {
                        delete shipSection.ship;
                    });

                    popObj.container.remove();
                })
            }
        }

        // attack
        if (cpuUi.querySelector('.game-table') === board) {
            gameStarted = true;
            
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDL0I7O0FBRUEsc0JBQXNCLHNEQUFNO0FBQzVCLHFCQUFxQix5REFBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUSxHQUFHLFFBQVE7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICBcXG59XFxuXFxuLmZ1bGwtc2NyZWVuIHtcXG4gICAgaGVpZ2h0OiA5OS45JTtcXG4gICAgd2lkdGg6IDk5LjklO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRhaW5lciBkaXYgaG9sZGluZyB0aGUgc3BsaXQgZGlzcGxheXMgKi9cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyID4gKiA+ICoge1xcbiAgICBtaW4td2lkdGg6IDFyZW07XFxufVxcblxcbiN0b3AtY2VudGVyLCAjYm90dG9tLWNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiN0b3AtY2VudGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDMsIDU2JSwgNjglLCAwLjcpO1xcbn1cXG5cXG4jYm90dG9tLWNlbnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjQwLCA1NiUsIDY4JSwgMC43KTtcXG59XFxuXFxuI3RvcC1jZW50ZXIgPiBkaXYsICNib3R0b20tY2VudGVyID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgdG9wOjUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlICwgLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBoc2woMCwgMCUsIDgwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjApO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbnVtYmVycyA+ICoge1xcbiAgICB3aWR0aDogOS45OSU7XFxufVxcblxcbi5nYW1lLWxldHRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWxldHRlcnMgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOS45JTtcXG59XFxuXFxuLmdhbWUtcm93cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5nYW1lLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICB3aWR0aDogOS45JTtcXG59XFxuXFxuLmdyaWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogVW5pdCBzdHlsaW5nICovXFxuXFxuLnRva2VuIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjMzLCA2NSUsIDI1JSwgMC43KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGFtYWdlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAwJSwgMC43KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjZ2FtZS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLGtEQUFrRDtBQUNsRDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLE9BQU87SUFDUCxTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXJib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgIFxcbn1cXG5cXG4uZnVsbC1zY3JlZW4ge1xcbiAgICBoZWlnaHQ6IDk5LjklO1xcbiAgICB3aWR0aDogOTkuOSU7XFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyIGRpdiBob2xkaW5nIHRoZSBzcGxpdCBkaXNwbGF5cyAqL1xcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIgPiAqID4gKiB7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG59XFxuXFxuI3RvcC1jZW50ZXIsICNib3R0b20tY2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3RvcC1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMywgNTYlLCA2OCUsIDAuNyk7XFxufVxcblxcbiNib3R0b20tY2VudGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNDAsIDU2JSwgNjglLCAwLjcpO1xcbn1cXG5cXG4jdG9wLWNlbnRlciA+IGRpdiwgI2JvdHRvbS1jZW50ZXIgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDMlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUgLCAtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGhzbCgwLCAwJSwgODAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yMCk7XFxufVxcblxcbi5nYW1lLW51bWJlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzID4gKiB7XFxuICAgIHdpZHRoOiA5Ljk5JTtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5LjklO1xcbn1cXG5cXG4uZ2FtZS1yb3dzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdhbWUtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIHdpZHRoOiA5LjklO1xcbn1cXG5cXG4uZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBVbml0IHN0eWxpbmcgKi9cXG5cXG4udG9rZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMzMsIDY1JSwgMjUlLCAwLjcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYW1hZ2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlLCAwLjcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNnYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyBzaGlwLCBnYW1lYm9hcmQsIHBsYXllciwgZ2V0UmFuZG9tTnVtYmVyLCBCT0FSRF9TSVpFLCBNQVhfU0hJUF9TSVpFIH07XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcbmNvbnN0IE1BWF9TSElQX1NJWkUgPSA1O1xuXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLy8gc2hpcHMgdG9rZW4gZm9yIHRoZSBnYW1lIGJvYXJkXG5jb25zdCBzaGlwID0gZnVuY3Rpb24obGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIGhpdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMucHVzaCh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaXNTdW5rKCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIFxuICAgICAgICBpc1N1bms6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy8gZ2FtZWJvYXJkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBsYXllcidzIHNoaXBzXG5jb25zdCBnYW1lYm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZDogKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEJPQVJEX1NJWkU7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IEJPQVJEX1NJWkU7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZHM6IGAke2l9LCR7an1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2tlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSkoKSxcbiAgICAgICAgZ2V0RGFtYWdlZFNoaXBzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIGhlbHAgcGxheWVyLnJhbmRvbUF0dGFjaygpIGtub3cgd2hlcmUgdG8gc3RyaWtlXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IHRoaXMuYm9hcmQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgYm9hcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtLmNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJCb2FyZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGNsZWFycyB0aGUgYm9hcmQgZm9yIGEgbmV3IGdhbWVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uc2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0uYXR0YWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmFuZG9tQ29vcmRzOiBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgICAgICAgICAgLy8gZm9yIHBsYXllci5SYW5kb21BdHRhY2soKSBhbmQgYm9hcmQucmFuZG9taXplU2hpcFBsYWNlbWVudCgpXG4gICAgICAgICAgICByZXR1cm4gYCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX0sJHtnZXRSYW5kb21OdW1iZXIobWluLCBtYXgpfWA7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybkluZGV4OiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW2ldLmNvb3JkcyA9PT0gY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwOiBmdW5jdGlvbihjb29yZHMsIGxlbmd0aCwgZGlyZWN0aW9uPVwiaFwiKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdTaGlwID0gc2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgbmV3UGxhY2VtZW50ID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHNwbGl0IHRoZSBjb29yZHMgdXAgc28gdGhhdCB3ZSBjYW4gbW9kaWZ5IHRoZW0gYW5kIGFkZCBhbGwgcGFydHMgb2YgdGhlIHNoaXAgdG8gdGhlIGJvYXJkXG4gICAgICAgICAgICBjb25zdCBjb29yZHNBcnJheSA9IGNvb3Jkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgbGV0IHZDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVswXSk7XG4gICAgICAgICAgICBsZXQgaENvb3JkcyA9IHBhcnNlSW50KGNvb3Jkc0FycmF5WzFdKTtcblxuICAgICAgICAgICAgLy8gYXZvaWQgb3ZlcmZsb3dcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhDb29yZHMgKyBsZW5ndGggLSAxID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoQ29vcmRzKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoQ29vcmRzICsgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhCT0FSRF9TSVpFKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZDb29yZHMgKyBsZW5ndGggLSAxID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndiB3YXMgdG9vIGxvbmcnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBib2FyZCBjb29yZHMgd2Ugd2FudCB0byBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgaW4gdXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvdmVyIG9uZSBzcGFjZSB0byBwbGFjZSBtb3JlIG9mIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkQ29vcmRzID0gYCR7dkNvb3Jkc30sJHtoQ29vcmRzfWA7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb21iaW5lZENvb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGRzIHRoZW0gdG8gYW4gYXJyYXkgdG8gYmUgYWRkZWQgdG8gdGhlIGJvYXJkIGlmIHRoZSBzcG90IGlzIGZyZWVcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNsb3QgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIWJvYXJkU2xvdC5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudC5wdXNoKGJvYXJkU2xvdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JvYXJkIHNsb3Qgd2FzIHRha2VuJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2FmZWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgZ3JpZFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdQbGFjZW1lbnQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnRbal0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdQbGFjZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbWl6ZVNoaXBQbGFjZW1lbnQoYW1vdW50PU1BWF9TSElQX1NJWkUsIGJvYXJkc2l6ZT1CT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtdOyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFtb3VudDtcblxuICAgICAgICAgICAgLy8gY3JlYXRlcyBzaGlwcyB1bnRpbCB3ZSBnZXQgdG8gdGhlIGRlc2lyZWQgYW1vdW50XG4gICAgICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoIDwgYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpZXMgYWdhaW4gaWYgdGhlIGNyZWF0ZWQgc2hpcCBpc24ndCB2YWxpZFxuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3U2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5nZXRSYW5kb21Db29yZHMoMSwgYm9hcmRzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBsZW5ndGggJSAyID09PSAwID8gXCJoXCIgOiBcInZcIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcCA9IHRoaXMucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb29yZHMpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uYXR0YWNrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW2luZGV4XS5zaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNHYW1lT3ZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG4vLyBwbGF5ZXIgdG9rZW4gdGhhdCBhbGxvd3MgdGhlIHBsYXllciB0byBhdHRhY2tcbmNvbnN0IHBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQsIGNvb3Jkcykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGF0dGFjayB0aGUgc2FtZSBwbGFjZSB0d2ljZVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChjb29yZHMpO1xuXG4gICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW2luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgb3Bwb25lbnQuYm9hcmRbaW5kZXhdXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICByYW5kb21BdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50KSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChhdHRhY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgY29vcmRzIGZvciBkYW1hZ2VkIHNoaXBzXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXRzID0gb3Bwb25lbnQuZ2V0RGFtYWdlZFNoaXBzKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0hpdHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tDb3Vyc2UoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goLTEwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgd2UncmUgdGFyZ2V0aW5nIGhhcyBiZWVuIGhpdCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtpbmRleF0uc2hpcC5oaXRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXNuJ3QsIHNvIHdlJ3JlIGdvaW5nIHRvIGF0dGFjayBzb21ld2hhdCByYW5kb21seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ICsgb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0YXJnZXQgc3BvdCBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhcyBiZWVuIGhpdCBiZWZvcmUsIHNvIHdlIGNhbiBjaGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBpbmRleCArIG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3VyIHRhcmdldCBpcyBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzbid0IGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzIGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwMDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBwcmV2aW91cyBhdHRlbXB0IHdhcyBhIG1pc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCArPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgZG9lc250LCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChwcmV2aW91c0hpdHNbMF0pOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIHRyeSBhdHRhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gY2hlY2tDb3Vyc2UocHJldmlvdXNJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBjb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgb3Bwb25lbnQuZ2V0UmFuZG9tQ29vcmRzKDEsIEJPQVJEX1NJWkUrMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkLCBwbGF5ZXIsIEJPQVJEX1NJWkUsIE1BWF9TSElQX1NJWkUgfSBmcm9tICcuL2JhdHRsZXNoaXAuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgLy8gdHJhY2tpbmcgZ2FtZSBzdGF0ZVxuICAgIGxldCBpc0dhbWVPdmVyID0gZmFsc2VcbiAgICBsZXQgdXNlclNjb3JlID0gTUFYX1NISVBfU0laRTtcbiAgICBsZXQgY3B1U2NvcmUgPSBNQVhfU0hJUF9TSVpFO1xuXG4gICAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gICAgICAgICAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJnYW1lLWNvbnRhaW5lclwiIGNsYXNzPVwiZnVsbC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidG9wLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+Q1BVJ3MgYm9hcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRvcC1zY29yZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlVzZXIncyBib2FyZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImJvdHRvbS1zY29yZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhID0gY29uZmlybSgnR2FtZSBvdmVyISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluPycpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgY2xlYXJCb2FyZCgpO1xuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2NvcmVNZXNzYWdlKG5ld1Njb3JlLCBtYXhTY29yZSkge1xuICAgICAgICByZXR1cm4gYFNoaXBzOiAke25ld1Njb3JlfSBvdXQgb2YgJHttYXhTY29yZX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlTWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IHVTY29yZUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3Atc2NvcmUnKTtcbiAgICAgICAgY29uc3QgY1Njb3JlRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdHRvbS1zY29yZScpO1xuXG4gICAgICAgIHVTY29yZUVsbS5pbm5lclRleHQgPSBnZXRTY29yZU1lc3NhZ2UodXNlclNjb3JlLCBNQVhfU0hJUF9TSVpFKTtcbiAgICAgICAgY1Njb3JlRWxtLmlubmVyVGV4dCA9IGdldFNjb3JlTWVzc2FnZShjcHVTY29yZSwgTUFYX1NISVBfU0laRSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldHMgdGhlIHVzZXIgc2VsZWN0IHRoZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgZGlyZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpcmVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGlyZWN0TGFiZWwuaW5uZXJUZXh0ID0gXCJEaXJlY3Rpb246IFwiO1xuICAgICAgICBjb25zdCBkaXJlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEuaW5uZXJUZXh0ID0gXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5pbm5lclRleHQgPSBcIlZlcnRpY2FsXCI7XG5cbiAgICAgICAgZGlyZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIGRpcmVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBkaXJlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0TGFiZWwpO1xuICAgICAgICBkaXJlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0SW5wdXQpO1xuXG4gICAgICAgIC8vIGxldHMgdGhlIHVzZXIgc2VsZWN0IHRoZSBjb29yZHNcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvb3Jkc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29vcmRzTGFiZWwuaW5uZXJUZXh0ID0gXCJDb29yZGluYXRlczogXCI7XG4gICAgICAgIGNvbnN0IGNvb3Jkc0lucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBjb29yZHNJbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24xLmlubmVyVGV4dCA9IGk7XG4gICAgICAgICAgICBvcHRpb24yLmlubmVyVGV4dCA9IGk7XG5cbiAgICAgICAgICAgIGNvb3Jkc0lucHV0MS5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgICAgIGNvb3Jkc0lucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvb3Jkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb29yZHNMYWJlbCk7XG4gICAgICAgIGNvb3Jkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb29yZHNJbnB1dDEpO1xuICAgICAgICBjb29yZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29vcmRzSW5wdXQyKTtcblxuICAgICAgICAvLyBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b25zXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWwuaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXJlY3RDb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29vcmRzQ29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWluZXIsXG4gICAgICAgICAgICBzdWJtaXQ6IHN1Ym1pdCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0SW5wdXQsXG4gICAgICAgICAgICBjb29yZHNIOiBjb29yZHNJbnB1dDIsXG4gICAgICAgICAgICBjb29yZHNWOiBjb29yZHNJbnB1dDEsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlcyB0aGUgdXNlciBib2FyZCBzbyBwbGF5ZXJzIGNhbiBhdHRhY2tcbiAgICBjb25zdCBidWlsZEdyaWQgPSBmdW5jdGlvbih0aWxlcykge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtdGFibGUnKTtcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnZnVsbC1zY3JlZW4nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxpbWl0ZWQgYnkgbGV0dGVycyBvZiB0aGUgYWxwaGFiZXRcbiAgICAgICAgY29uc3QgYm9hcmRTaXplID0gdGlsZXMgPCAyNyA/IHRpbGVzIDogMjZcblxuICAgICAgICAvLyB0b3Agcm93IG9mIGNvbHVtbnMgZm9yIHRoZSBnYW1lIGJvYXJkXG4gICAgICAgIGNvbnN0IHRvcE51bXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9wTnVtcy5jbGFzc0xpc3QuYWRkKCdnYW1lLW51bWJlcnMnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYm9hcmRTaXplOyBpICs9IDEgKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkgeyBjb250aW51ZSB9XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpdGVtLmlubmVyVGV4dCA9IGk7XG4gICAgICAgICAgICB0b3BOdW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodG9wTnVtcyk7XG5cbiAgICAgICAgLy8gc2lkZSByb3dzIGZvciB0aGUgZ2FtZWJvYXJkXG4gICAgICAgIGNvbnN0IGFzY2lpID0gNjU7IC8vIHVzZSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuICAgICAgICBjb25zdCBjZW50ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbnRlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZ2FtZS1yb3dzJyk7XG4gICAgICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdnYW1lLXNxdWFyZXMnKTtcbiAgICAgICAgY29uc3Qgc2lkZUxldHRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZUxldHRlcnMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1sZXR0ZXJzJyk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRTaXplOyBqICs9IDEgKSB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgbGV0dGVyLmlubmVyVGV4dCA9IChTdHJpbmcuZnJvbUNoYXJDb2RlKGorYXNjaWkpKTtcbiAgICAgICAgICAgIHNpZGVMZXR0ZXJzLmFwcGVuZENoaWxkKGxldHRlcik7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgYm9hcmRTaXplOyBrICs9IDEgKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YScsIGAke2orMX0sJHtrKzF9YCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICBzcXVhcmVzLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNlbnRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZUxldHRlcnMpO1xuICAgICAgICBjZW50ZXJDb250ZW50LmFwcGVuZENoaWxkKHNxdWFyZXMpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChjZW50ZXJDb250ZW50KTtcblxuICAgICAgICByZXR1cm4gdGFibGU7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmVNZXNzYWdlcygpO1xuXG5cbiAgICAvLyBmdW5jdGlvbnMgZm9yIG1hbmlwdWxhdGluZyB0aGUgVUlcbiAgICBmdW5jdGlvbiBnZXREb21TcXVhcmUoY29vcmRzLCB1aSkge1xuICAgICAgICByZXR1cm4gdWkucXVlcnlTZWxlY3RvcihgW2RhdGE9JyR7Y29vcmRzfSddYCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXR0YWNrVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRva2VuLmNsYXNzTGlzdC5hZGQoJ3Rva2VuJyk7XG5cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHMoYm9hcmQsIHVpLCBzaG93U2hpcHM9ZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBib2FyZC5yYW5kb21pemVTaGlwUGxhY2VtZW50KDUpO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hvd1NoaXBzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGdldERvbVNxdWFyZShzaGlwW2ldLmNvb3JkcywgdWkpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0eWxlRW50aXJlU2hpcChzaGlwU2V0LCBjb29yZHMsIHN0eWxlLCB1aSwgYWRkPXRydWUpIHtcbiAgICAgICAgc2hpcFNldC5mb3JFYWNoKChzaGlwKT0+eyAvLyBhcnJheSBvZiBhcnJheXMgdGhhdCBjb250YWluIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpeyAgLy8gYXJyYXkgb2Ygc2hpcHMgYXNzb2NpYXRlZCB3aXRoIGEgc2luZ2xlIHNoaXBcbiAgICAgICAgICAgICAgICBpZiAoc2hpcFtpXS5jb29yZHMgPT09IGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmZvckVhY2goKGNvbG9yTWUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbG0gPSBnZXREb21TcXVhcmUoY29sb3JNZS5jb29yZHMsIHVpKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZ2FtZWJvYXJkIGFuZCBwbGF5ZXJzXG4gICAgY29uc3QgY3B1VWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLWNlbnRlcicpO1xuICAgIGNvbnN0IHVzZXJVaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3R0b20tY2VudGVyJyk7XG5cbiAgICBjcHVVaS5hcHBlbmRDaGlsZChidWlsZEdyaWQoQk9BUkRfU0laRSkpO1xuICAgIHVzZXJVaS5hcHBlbmRDaGlsZChidWlsZEdyaWQoQk9BUkRfU0laRSkpO1xuXG4gICAgY29uc3QgdXNlclBsYXllciA9IHBsYXllcigpO1xuICAgIGNvbnN0IHVzZXJCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGNvbnN0IHVzZXJTaGlwcyA9IHBsYWNlU2hpcHModXNlckJvYXJkLCB1c2VyVWksIHRydWUpO1xuXG4gICAgY29uc3QgY3B1UGxheWVyID0gcGxheWVyKCk7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjcHVTaGlwcyA9IHBsYWNlU2hpcHMoY3B1Qm9hcmQsIGNwdVVpKTtcblxuICAgIC8vIGNvbnRyb2wgdGhlIGdhbWVwbGF5XG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oc3F1YXJlLCBhdHRhY2ssIHRhcmdldEJvYXJkLCB0YXJnZXRTaGlwcywgdGFyZ2V0VWkpIHtcbiAgICAgICAgc3F1YXJlLmFwcGVuZENoaWxkKGdldEF0dGFja1Rva2VuKCkpO1xuXG4gICAgICAgIGlmIChhdHRhY2suc2hpcCkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIGlmIChhdHRhY2suc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IHRoZSB1c2VyIGtub3cgdGhlIHNoaXAgaXMgZGVhZFxuICAgICAgICAgICAgICAgIHN0eWxlRW50aXJlU2hpcCh0YXJnZXRTaGlwcywgYXR0YWNrLmNvb3JkcywgJ2RhbWFnZWQnLCB0YXJnZXRVaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VWkgPT09IGNwdVVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJTY29yZSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdVNjb3JlIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlU2NvcmVNZXNzYWdlcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhcmdldEJvYXJkLmlzR2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBzbyB3ZSBrbm93IGlmIHRoZSB1c2VyIHNob3VsZCB0YWtlIGFub3RoZXIgdHVyblxuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIC8vIGxldCB0aGUgcGxheWVyIGF0dGFjayBvciBtb3ZlIHBpZWNlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57ICAgXG4gICAgICAgIGlmIChpc0dhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnLmdhbWUtdGFibGUnKTtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZS50YXJnZXQuY2xvc2VzdCgnLmdyaWQnKTtcbiAgICBcbiAgICAgICAgaWYgKCFzcXVhcmUpIHtcbiAgICAgICAgICAgIHJldHVybiAvLyBkaWRuJ3QgY2xpY2sgYSBzcXVhcmVcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGlmIChnYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh1c2VyVWkucXVlcnlTZWxlY3RvcignLmdhbWUtdGFibGUnKSA9PT0gYm9hcmQpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgc2hpcFxuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IHNxdWFyZS5nZXRBdHRyaWJ1dGUoJ2RhdGEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNsb3QgPSB1c2VyQm9hcmQuYm9hcmQuZmluZChpbmRleCA9PiBpbmRleC5jb29yZHMgPT09IHNxdWFyZUNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkU2xvdC5zaGlwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBJbmRleGVzID0gdXNlckJvYXJkLmJvYXJkLmZpbHRlcihpbmRleCA9PiBpbmRleC5zaGlwID09PSBzaGlwKTtcblxuICAgICAgICAgICAgICAgIC8vIHVzZXIgZGlkbid0IGNsaWNrIGEgc2hpcFxuICAgICAgICAgICAgICAgIGlmIChzaGlwID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBhIHBvcHVwLCBzbyB3ZSBkb24ndCB3YW50IGFub3RoZXIgb25lXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wT2JqID0gY3JlYXRlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE9iai5jb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcE9iai5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3B1cCBzdWJtaXQgcmFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRW50aXJlU2hpcCh1c2VyU2hpcHMsIHNxdWFyZUNvb3JkcywgJ3NoaXAnLCB1c2VyVWksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaENvb3JkcyA9IHBvcE9iai5jb29yZHNILnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2Q29vcmRzID0gcG9wT2JqLmNvb3Jkc1YudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHBvcE9iai5kaXJlY3Rpb24udmFsdWUgPT09ICdIb3Jpem9udGFsJyA/ICdoJyA6ICd2JztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGAke3ZDb29yZHN9LCR7aENvb3Jkc31gO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBuZXcgc2hpcCcpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NoaXAgPSB1c2VyQm9hcmQucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3U2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRW50aXJlU2hpcCh1c2VyU2hpcHMsIGNvb3JkcywgJ3NoaXAnLCB1c2VyVWkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNoaXBJbmRleGVzLmZvckVhY2goKHNoaXBTZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2hpcFNlY3Rpb24uc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wT2JqLmNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXR0YWNrXG4gICAgICAgIGlmIChjcHVVaS5xdWVyeVNlbGVjdG9yKCcuZ2FtZS10YWJsZScpID09PSBib2FyZCkge1xuICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBjbGlja2VkIHRoZSBlbmVteSdzIGJvYXJkXG4gICAgICAgICAgICBjb25zdCBhdHRhY2sgPSB1c2VyUGxheWVyLmF0dGFjayhjcHVCb2FyZCwgY29vcmRzKTtcbiAgICAgICAgICAgIGlmIChhdHRhY2spIHtcbiAgICAgICAgICAgICAgICAgY29uc3QgdXNlclR1cm4gPSB0YWtlVHVybihzcXVhcmUsIGF0dGFjaywgY3B1Qm9hcmQsIGNwdVNoaXBzLCBjcHVVaSk7XG4gICAgXG4gICAgICAgICAgICAgICAgIGlmICghdXNlclR1cm4pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3B1VHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjcHVUdXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcHVBdHRhY2sgPSBjcHVQbGF5ZXIucmFuZG9tQXR0YWNrKHVzZXJCb2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjcHVUYXJnZXQgPSBnZXREb21TcXVhcmUoY3B1QXR0YWNrLmNvb3JkcywgdXNlclVpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwdVR1cm4gPSB0YWtlVHVybihjcHVUYXJnZXQsIGNwdUF0dGFjaywgdXNlckJvYXJkLCB1c2VyU2hpcHMsIHVzZXJVaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnN0YXJ0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==