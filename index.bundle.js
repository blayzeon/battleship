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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.popup {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    border: 1px solid black;\n    padding: 3%;\n    top: 40%;\n    left: 40%;\n    border-radius: 0.5rem;\n}\n\n.shake {\n    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n@keyframes shake {\n    10%, 90% {\n      transform: translate3d(-1px, 0, 0);\n    }\n    \n    20%, 80% {\n      transform: translate3d(2px, 0, 0);\n    }\n  \n    30%, 50%, 70% {\n      transform: translate3d(-4px, 0, 0);\n    }\n  \n    40%, 60% {\n      transform: translate3d(4px, 0, 0);\n    }\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.popup > div {\n    margin-bottom: 0.5rem;\n    display: flex;\n    gap: 0.5rem;\n    justify-content: center;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n@keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n.fadeIn {\n    opacity: 0;\n    animation: fadeIn 1.0s forwards;\n    animation-name: fadeIn;\n    animation-duration: 1s;\n}\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,kDAAkD;AAClD;IACI,aAAa;IACb,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,uBAAuB;IACvB,WAAW;IACX,QAAQ;IACR,SAAS;IACT,qBAAqB;AACzB;;AAEA;IACI,yDAAyD;IACzD,+BAA+B;IAC/B,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI;MACE,kCAAkC;IACpC;;IAEA;MACE,iCAAiC;IACnC;;IAEA;MACE,kCAAkC;IACpC;;IAEA;MACE,iCAAiC;IACnC;AACJ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA,iBAAiB;;AAEjB;IACI,MAAM,UAAU,CAAC;IACjB,IAAI,UAAU,CAAC;AACnB;;AAEA;IACI,UAAU;IACV,+BAA+B;IAC/B,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI;QACI,8BAA8B;IAClC;AACJ","sourcesContent":["* {\n    box-sizing: borderbox;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background-color: black;   \n}\n\n.full-screen {\n    height: 99.9%;\n    width: 99.9%;\n}\n\n/* Main container div holding the split displays */\n#game-container {\n    display: flex;\n    gap: 0.2rem;\n    flex-direction: row-reverse;\n    justify-content: center;\n    align-items: center;\n}\n\n#game-container > * > * {\n    min-width: 1rem;\n}\n\n#top-center, #bottom-center {\n    display: flex;\n    flex-direction: column;\n    gap: 0rem;\n    color: white;\n    height:fit-content;\n    width: 50%;\n    padding: 1rem;\n}\n\n#top-center {\n    background-color: hsla(203, 56%, 68%, 0.7);\n}\n\n#bottom-center {\n    background-color: hsla(240, 56%, 68%, 0.7);\n}\n\n#top-center > div, #bottom-center > div{\n    display: flex;\n    justify-content: space-between;\n}\n\n.popup {\n    position: absolute;\n    z-index: 1;\n    background-color: white;\n    border: 1px solid black;\n    padding: 3%;\n    top: 40%;\n    left: 40%;\n    border-radius: 0.5rem;\n}\n\n.shake {\n    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n@keyframes shake {\n    10%, 90% {\n      transform: translate3d(-1px, 0, 0);\n    }\n    \n    20%, 80% {\n      transform: translate3d(2px, 0, 0);\n    }\n  \n    30%, 50%, 70% {\n      transform: translate3d(-4px, 0, 0);\n    }\n  \n    40%, 60% {\n      transform: translate3d(4px, 0, 0);\n    }\n}\n\nbutton {\n    cursor: pointer;\n}\n\n.popup > div {\n    margin-bottom: 0.5rem;\n    display: flex;\n    gap: 0.5rem;\n    justify-content: center;\n}\n\n.game-table {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    flex-grow: 1;\n    border: 0.1rem solid hsl(0, 0%, 80%);\n    background-color: hsla(0, 0%, 100%, 0.20);\n}\n\n.game-numbers {\n    display: flex;\n    flex-direction: row;\n    margin-left: 1rem;\n    text-align: center;\n}\n\n.game-numbers > * {\n    width: 9.99%;\n}\n\n.game-letters {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.game-letters > * {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 9.9%;\n}\n\n.game-rows {\n    display: flex;\n    flex-direction: row;\n}\n\n.game-squares {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 100%;\n}\n\n.grid {\n    outline: 1px solid white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    aspect-ratio: 1/1;\n    width: 9.9%;\n}\n\n.grid:hover {\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: pointer;\n}\n\n/* Unit styling */\n\n@keyframes fadeIn {\n    from {opacity: 0;}\n    to {opacity: 1;}\n}\n\n.fadeIn {\n    opacity: 0;\n    animation: fadeIn 1.0s forwards;\n    animation-name: fadeIn;\n    animation-duration: 1s;\n}\n\n.token {\n    background: black;\n    width: 40%;\n    aspect-ratio: 1/1;\n    border-radius: 1rem;\n}\n\n.ship {\n    background-color: hsla(233, 65%, 25%, 0.7);\n    border: none;\n}\n\n.damaged {\n    background-color: red !important;\n}\n\n.destroyed {\n    background-color: hsl(0, 0%, 0%, 0.7);\n}\n\n@media only screen and (max-width: 900px) {\n    #game-container {\n        flex-direction: column-reverse;\n    }\n}"],"sourceRoot":""}]);
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
                    return false;
                }
            } else {
                if (vCoords + length - 1 > BOARD_SIZE) {
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

    function restartBoard() {
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
        clearBoard();
        startGame();
    }
    function gameOver() {
        const a = confirm('Game over! Would you like to play again?');
        if (a) {
            restartBoard();
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

        const ascii = 64; // use String.fromCharCode(code);
        for (let i = 1; i <= 10; i += 1) {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            option1.innerText = String.fromCharCode(i + ascii);
            option1.value = i;
            option2.value = i;
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
        square.classList.add('fadeIn');

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
    let playerTurn = true;
    // let the player attack or move pieces
    document.getElementById('game-container').addEventListener('click', (e)=>{   
        if (!playerTurn) {
            // dont let the user attack while it's the AI's turn
            console.log('its not your turn yet');
            return;
        }
        
        if (isGameOver === true) {
            gameOver();
            return;
        }

        const board = e.target.closest('.game-table');
        const square = e.target.closest('.grid');
    
        if (!square) {
            return // didn't click a square so we don't want to do anything else
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
                    if (gameStarted === false) {
                        // offer to randomize the board
                        const a = confirm('Would you like to randomize the board?');
                        if (a) {
                            restartBoard();
                        }
                    }
                    return;
                }
                

                if (document.querySelector('.popup')) {
                    // we already have a popup, so we don't want another one
                    return;
                }
                const popObj = createPopup();
                document.body.appendChild(popObj.container);
                popObj.submit.addEventListener('click', () => {                    
                    if (gameStarted === true) {
                        // can't move ships once the game has started
                        popObj.container.remove();
                        return
                    }

                    // new ship
                    const hCoords = popObj.coordsH.value;
                    const vCoords = popObj.coordsV.value;
                    const direction = popObj.direction.value === 'Horizontal' ? 'h' : 'v';
                    const length = ship.length;
                    const coords = `${vCoords},${hCoords}`;
                    const newShip = userBoard.placeShip(coords, length, direction);

                    if (!newShip) {
                        // prevents ships from being removed if the replacement is invalid
                        popObj.container.classList.toggle('shake');
                        return;
                    }

                    // replace the ship
                    styleEntireShip(userShips, squareCoords, 'ship', userUi, false);
                    userShips.push(newShip);
                    styleEntireShip(userShips, coords, 'ship', userUi);
                    shipIndexes.forEach((shipSection) => {
                        delete shipSection.ship;
                    });

                    popObj.container.remove();
                });
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
                    playerTurn = false;
                    function takeCpuTurn() {
                        const cpuAttack = cpuPlayer.randomAttack(userBoard);
                        const cpuTarget = getDomSquare(cpuAttack.coords, userUi);
                        const result = takeTurn(cpuTarget, cpuAttack, userBoard, userShips, userUi);
                        if (result === true) {
                            setTimeout(() => {
                                takeCpuTurn();                                
                            }, 1000);
                        } else {
                            playerTurn = true;
                        }
                    }
                    takeCpuTurn();
                 }
            }
        }
    });
}

startGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVEsR0FBRyxRQUFRO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXJib3g7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAgIFxcbn1cXG5cXG4uZnVsbC1zY3JlZW4ge1xcbiAgICBoZWlnaHQ6IDk5LjklO1xcbiAgICB3aWR0aDogOTkuOSU7XFxufVxcblxcbi8qIE1haW4gY29udGFpbmVyIGRpdiBob2xkaW5nIHRoZSBzcGxpdCBkaXNwbGF5cyAqL1xcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4ycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZS1jb250YWluZXIgPiAqID4gKiB7XFxuICAgIG1pbi13aWR0aDogMXJlbTtcXG59XFxuXFxuI3RvcC1jZW50ZXIsICNib3R0b20tY2VudGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDpmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3RvcC1jZW50ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMywgNTYlLCA2OCUsIDAuNyk7XFxufVxcblxcbiNib3R0b20tY2VudGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyNDAsIDU2JSwgNjglLCAwLjcpO1xcbn1cXG5cXG4jdG9wLWNlbnRlciA+IGRpdiwgI2JvdHRvbS1jZW50ZXIgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDMlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblxcbi5zaGFrZSB7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45NykgYm90aDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMTAlLCA5MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgXFxuICAgIDIwJSwgODAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG4gIFxcbiAgICAzMCUsIDUwJSwgNzAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xcbiAgICB9XFxuICBcXG4gICAgNDAlLCA2MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNHB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wb3B1cCA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10YWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGhzbCgwLCAwJSwgODAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC4yMCk7XFxufVxcblxcbi5nYW1lLW51bWJlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzID4gKiB7XFxuICAgIHdpZHRoOiA5Ljk5JTtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbGV0dGVycyA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA5LjklO1xcbn1cXG5cXG4uZ2FtZS1yb3dzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmdhbWUtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIHdpZHRoOiA5LjklO1xcbn1cXG5cXG4uZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBVbml0IHN0eWxpbmcgKi9cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20ge29wYWNpdHk6IDA7fVxcbiAgICB0byB7b3BhY2l0eTogMTt9XFxufVxcblxcbi5mYWRlSW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxLjBzIGZvcndhcmRzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG4udG9rZW4ge1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMzMsIDY1JSwgMjUlLCAwLjcpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kYW1hZ2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZXN0cm95ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlLCAwLjcpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICNnYW1lLWNvbnRhaW5lciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsa0RBQWtEO0FBQ2xEO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5REFBeUQ7SUFDekQsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtNQUNFLGtDQUFrQztJQUNwQzs7SUFFQTtNQUNFLGlDQUFpQztJQUNuQzs7SUFFQTtNQUNFLGtDQUFrQztJQUNwQzs7SUFFQTtNQUNFLGlDQUFpQztJQUNuQztBQUNKOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0FBQ25COztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxNQUFNLFVBQVUsQ0FBQztJQUNqQixJQUFJLFVBQVUsQ0FBQztBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDViwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyYm94O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgICBcXG59XFxuXFxuLmZ1bGwtc2NyZWVuIHtcXG4gICAgaGVpZ2h0OiA5OS45JTtcXG4gICAgd2lkdGg6IDk5LjklO1xcbn1cXG5cXG4vKiBNYWluIGNvbnRhaW5lciBkaXYgaG9sZGluZyB0aGUgc3BsaXQgZGlzcGxheXMgKi9cXG4jZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dhbWUtY29udGFpbmVyID4gKiA+ICoge1xcbiAgICBtaW4td2lkdGg6IDFyZW07XFxufVxcblxcbiN0b3AtY2VudGVyLCAjYm90dG9tLWNlbnRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiN0b3AtY2VudGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDMsIDU2JSwgNjglLCAwLjcpO1xcbn1cXG5cXG4jYm90dG9tLWNlbnRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjQwLCA1NiUsIDY4JSwgMC43KTtcXG59XFxuXFxuI3RvcC1jZW50ZXIgPiBkaXYsICNib3R0b20tY2VudGVyID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllciguMzYsLjA3LC4xOSwuOTcpIGJvdGg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDEwJSwgOTAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xcbiAgICB9XFxuICAgIFxcbiAgICAyMCUsIDgwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxuICBcXG4gICAgMzAlLCA1MCUsIDcwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNHB4LCAwLCAwKTtcXG4gICAgfVxcbiAgXFxuICAgIDQwJSwgNjAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucG9wdXAgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBoc2woMCwgMCUsIDgwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMjApO1xcbn1cXG5cXG4uZ2FtZS1udW1iZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtbnVtYmVycyA+ICoge1xcbiAgICB3aWR0aDogOS45OSU7XFxufVxcblxcbi5nYW1lLWxldHRlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWxldHRlcnMgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogOS45JTtcXG59XFxuXFxuLmdhbWUtcm93cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5nYW1lLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICB3aWR0aDogOS45JTtcXG59XFxuXFxuLmdyaWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogVW5pdCBzdHlsaW5nICovXFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtvcGFjaXR5OiAwO31cXG4gICAgdG8ge29wYWNpdHk6IDE7fVxcbn1cXG5cXG4uZmFkZUluIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMS4wcyBmb3J3YXJkcztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuLnRva2VuIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjMzLCA2NSUsIDI1JSwgMC43KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGFtYWdlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVzdHJveWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAwJSwgMC43KTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAjZ2FtZS1jb250YWluZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgc2hpcCwgZ2FtZWJvYXJkLCBwbGF5ZXIsIGdldFJhbmRvbU51bWJlciwgQk9BUkRfU0laRSwgTUFYX1NISVBfU0laRSB9O1xuXG5jb25zdCBCT0FSRF9TSVpFID0gMTA7XG5jb25zdCBNQVhfU0hJUF9TSVpFID0gNTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8vIHNoaXBzIHRva2VuIGZvciB0aGUgZ2FtZSBib2FyZFxuY29uc3Qgc2hpcCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgaGl0czogW10sXG4gICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICBoaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5oaXRzLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzU3VuaygpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LCBcbiAgICAgICAgaXNTdW5rOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vIGdhbWVib2FyZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwbGF5ZXIncyBzaGlwc1xuY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQ6IChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBCT0FSRF9TSVpFOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBCT0FSRF9TSVpFOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRzOiBgJHtpfSwke2p9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pKCksXG4gICAgICAgIGdldERhbWFnZWRTaGlwczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBoZWxwIHBsYXllci5yYW5kb21BdHRhY2soKSBrbm93IHdoZXJlIHRvIHN0cmlrZVxuICAgICAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLmJvYXJkO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0uc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5jb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyQm9hcmQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvLyBjbGVhcnMgdGhlIGJvYXJkIGZvciBhIG5ldyBnYW1lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLnNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLmF0dGFja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJhbmRvbUNvb3JkczogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICAgICAgICAgIC8vIGZvciBwbGF5ZXIuUmFuZG9tQXR0YWNrKCkgYW5kIGJvYXJkLnJhbmRvbWl6ZVNoaXBQbGFjZW1lbnQoKVxuICAgICAgICAgICAgcmV0dXJuIGAke2dldFJhbmRvbU51bWJlcihtaW4sIG1heCl9LCR7Z2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KX1gO1xuICAgICAgICB9LFxuICAgICAgICByZXR1cm5JbmRleDogZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5jb29yZHMgPT09IGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcDogZnVuY3Rpb24oY29vcmRzLCBsZW5ndGgsIGRpcmVjdGlvbj1cImhcIikge1xuICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BsYWNlbWVudCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBzcGxpdCB0aGUgY29vcmRzIHVwIHNvIHRoYXQgd2UgY2FuIG1vZGlmeSB0aGVtIGFuZCBhZGQgYWxsIHBhcnRzIG9mIHRoZSBzaGlwIHRvIHRoZSBib2FyZFxuICAgICAgICAgICAgY29uc3QgY29vcmRzQXJyYXkgPSBjb29yZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGxldCB2Q29vcmRzID0gcGFyc2VJbnQoY29vcmRzQXJyYXlbMF0pO1xuICAgICAgICAgICAgbGV0IGhDb29yZHMgPSBwYXJzZUludChjb29yZHNBcnJheVsxXSk7XG5cbiAgICAgICAgICAgIC8vIGF2b2lkIG92ZXJmbG93XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgIGlmIChoQ29vcmRzICsgbGVuZ3RoIC0gMSA+IEJPQVJEX1NJWkUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZDb29yZHMgKyBsZW5ndGggLSAxID4gQk9BUkRfU0laRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVja3MgdG8gc2VlIGlmIHRoZSBib2FyZCBjb29yZHMgd2Ugd2FudCB0byBwbGFjZSB0aGUgc2hpcCBpbiBhcmUgaW4gdXNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvdmVyIG9uZSBzcGFjZSB0byBwbGFjZSBtb3JlIG9mIHRoZSBib2R5XG4gICAgICAgICAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZDb29yZHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkQ29vcmRzID0gYCR7dkNvb3Jkc30sJHtoQ29vcmRzfWA7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb21iaW5lZENvb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGRzIHRoZW0gdG8gYW4gYXJyYXkgdG8gYmUgYWRkZWQgdG8gdGhlIGJvYXJkIGlmIHRoZSBzcG90IGlzIGZyZWVcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNsb3QgPSB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoIWJvYXJkU2xvdC5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BsYWNlbWVudC5wdXNoKGJvYXJkU2xvdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2FmZWx5IHBsYWNlcyBzaGlwcyBvbiB0aGUgZ3JpZFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuZXdQbGFjZW1lbnQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBuZXdQbGFjZW1lbnRbal0uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdQbGFjZW1lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHJhbmRvbWl6ZVNoaXBQbGFjZW1lbnQoYW1vdW50PU1BWF9TSElQX1NJWkUsIGJvYXJkc2l6ZT1CT0FSRF9TSVpFKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwcyA9IFtdOyAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGFtb3VudDtcblxuICAgICAgICAgICAgLy8gY3JlYXRlcyBzaGlwcyB1bnRpbCB3ZSBnZXQgdG8gdGhlIGRlc2lyZWQgYW1vdW50XG4gICAgICAgICAgICB3aGlsZSAoc2hpcHMubGVuZ3RoIDwgYW1vdW50KSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpZXMgYWdhaW4gaWYgdGhlIGNyZWF0ZWQgc2hpcCBpc24ndCB2YWxpZFxuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAobmV3U2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5nZXRSYW5kb21Db29yZHMoMSwgYm9hcmRzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBsZW5ndGggJSAyID09PSAwID8gXCJoXCIgOiBcInZcIjtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2hpcCA9IHRoaXMucGxhY2VTaGlwKGNvb3JkcywgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICBsZW5ndGggLT0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNoaXBzO1xuICAgICAgICB9LFxuICAgICAgICByZWNlaXZlQXR0YWNrOiBmdW5jdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZXR1cm5JbmRleChjb29yZHMpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uYXR0YWNrZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW2luZGV4XS5zaGlwO1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkW2luZGV4XTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNHYW1lT3ZlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtpXS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib2FyZFtpXS5zaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG4vLyBwbGF5ZXIgdG9rZW4gdGhhdCBhbGxvd3MgdGhlIHBsYXllciB0byBhdHRhY2tcbmNvbnN0IHBsYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGF0dGFjazogZnVuY3Rpb24ob3Bwb25lbnQsIGNvb3Jkcykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IGF0dGFjayB0aGUgc2FtZSBwbGFjZSB0d2ljZVxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChjb29yZHMpO1xuXG4gICAgICAgICAgICBpZiAoIW9wcG9uZW50LmJvYXJkW2luZGV4XS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybnMgb3Bwb25lbnQuYm9hcmRbaW5kZXhdXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICByYW5kb21BdHRhY2s6IGZ1bmN0aW9uKG9wcG9uZW50KSB7XG4gICAgICAgICAgICBsZXQgYXR0YWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChhdHRhY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJucyBhIGxpc3Qgb2YgY29vcmRzIGZvciBkYW1hZ2VkIHNoaXBzXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXRzID0gb3Bwb25lbnQuZ2V0RGFtYWdlZFNoaXBzKCk7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c0hpdHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tDb3Vyc2UoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCgxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goLTEwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgd2UncmUgdGFyZ2V0aW5nIGhhcyBiZWVuIGhpdCBiZWZvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtpbmRleF0uc2hpcC5oaXRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCBoYXNuJ3QsIHNvIHdlJ3JlIGdvaW5nIHRvIGF0dGFjayBzb21ld2hhdCByYW5kb21seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4ICsgb3B0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0YXJnZXQgc3BvdCBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9uZW50LmJvYXJkW25ld0luZGV4XS5jb29yZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0IGhhcyBiZWVuIGhpdCBiZWZvcmUsIHNvIHdlIGNhbiBjaGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBpbmRleCArIG9wdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3VyIHRhcmdldCBpcyBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmF0dGFja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzbid0IGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgaGFzIGJlZW4gYXR0YWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwMDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBwcmV2aW91cyBhdHRlbXB0IHdhcyBhIG1pc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJbmRleCArPSBvcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wcG9uZW50LmJvYXJkW25ld0luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHBvbmVudC5ib2FyZFtuZXdJbmRleF0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb25lbnQuYm9hcmRbbmV3SW5kZXhdLmNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQgZG9lc250LCBzbyB3ZSBuZWVkIHRvIGNoYW5nZSBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSBvcHBvbmVudC5yZXR1cm5JbmRleChwcmV2aW91c0hpdHNbMF0pOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIHRyeSBhdHRhY2tpbmdcbiAgICAgICAgICAgICAgICAgICAgY29vcmRzID0gY2hlY2tDb3Vyc2UocHJldmlvdXNJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuYXR0YWNrKG9wcG9uZW50LCBjb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmF0dGFjayhvcHBvbmVudCwgb3Bwb25lbnQuZ2V0UmFuZG9tQ29vcmRzKDEsIEJPQVJEX1NJWkUrMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZWJvYXJkLCBwbGF5ZXIsIEJPQVJEX1NJWkUsIE1BWF9TSElQX1NJWkUgfSBmcm9tICcuL2JhdHRsZXNoaXAuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgLy8gdHJhY2tpbmcgZ2FtZSBzdGF0ZVxuICAgIGxldCBpc0dhbWVPdmVyID0gZmFsc2VcbiAgICBsZXQgdXNlclNjb3JlID0gTUFYX1NISVBfU0laRTtcbiAgICBsZXQgY3B1U2NvcmUgPSBNQVhfU0hJUF9TSVpFO1xuXG4gICAgZnVuY3Rpb24gcmVzdGFydEJvYXJkKCkge1xuICAgICAgICBmdW5jdGlvbiBjbGVhckJvYXJkKCkge1xuICAgICAgICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZ2FtZS1jb250YWluZXJcIiBjbGFzcz1cImZ1bGwtc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRvcC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNQVSdzIGJvYXJkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3Atc2NvcmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYm90dG9tLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Vc2VyJ3MgYm9hcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib3R0b20tc2NvcmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIGNsZWFyQm9hcmQoKTtcbiAgICAgICAgc3RhcnRHYW1lKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xuICAgICAgICBjb25zdCBhID0gY29uZmlybSgnR2FtZSBvdmVyISBXb3VsZCB5b3UgbGlrZSB0byBwbGF5IGFnYWluPycpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgcmVzdGFydEJvYXJkKCk7XG4gICAgICAgIH0gICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2NvcmVNZXNzYWdlKG5ld1Njb3JlLCBtYXhTY29yZSkge1xuICAgICAgICByZXR1cm4gYFNoaXBzOiAke25ld1Njb3JlfSBvdXQgb2YgJHttYXhTY29yZX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlTWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IHVTY29yZUVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3Atc2NvcmUnKTtcbiAgICAgICAgY29uc3QgY1Njb3JlRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdHRvbS1zY29yZScpO1xuXG4gICAgICAgIHVTY29yZUVsbS5pbm5lclRleHQgPSBnZXRTY29yZU1lc3NhZ2UodXNlclNjb3JlLCBNQVhfU0hJUF9TSVpFKTtcbiAgICAgICAgY1Njb3JlRWxtLmlubmVyVGV4dCA9IGdldFNjb3JlTWVzc2FnZShjcHVTY29yZSwgTUFYX1NISVBfU0laRSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGxldHMgdGhlIHVzZXIgc2VsZWN0IHRoZSBkaXJlY3Rpb25cbiAgICAgICAgY29uc3QgZGlyZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpcmVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGlyZWN0TGFiZWwuaW5uZXJUZXh0ID0gXCJEaXJlY3Rpb246IFwiO1xuICAgICAgICBjb25zdCBkaXJlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEuaW5uZXJUZXh0ID0gXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi5pbm5lclRleHQgPSBcIlZlcnRpY2FsXCI7XG5cbiAgICAgICAgZGlyZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgIGRpcmVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICAgICAgICBkaXJlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0TGFiZWwpO1xuICAgICAgICBkaXJlY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0SW5wdXQpO1xuXG4gICAgICAgIC8vIGxldHMgdGhlIHVzZXIgc2VsZWN0IHRoZSBjb29yZHNcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNvb3Jkc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29vcmRzTGFiZWwuaW5uZXJUZXh0ID0gXCJDb29yZGluYXRlczogXCI7XG4gICAgICAgIGNvbnN0IGNvb3Jkc0lucHV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBjb29yZHNJbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICAgICAgICBjb25zdCBhc2NpaSA9IDY0OyAvLyB1c2UgU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uMS5pbm5lclRleHQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyBhc2NpaSk7XG4gICAgICAgICAgICBvcHRpb24xLnZhbHVlID0gaTtcbiAgICAgICAgICAgIG9wdGlvbjIudmFsdWUgPSBpO1xuICAgICAgICAgICAgb3B0aW9uMi5pbm5lclRleHQgPSBpO1xuXG4gICAgICAgICAgICBjb29yZHNJbnB1dDEuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgICAgICAgICBjb29yZHNJbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gICAgICAgIH1cblxuICAgICAgICBjb29yZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29vcmRzTGFiZWwpO1xuICAgICAgICBjb29yZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29vcmRzSW5wdXQxKTtcbiAgICAgICAgY29vcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvb3Jkc0lucHV0Mik7XG5cbiAgICAgICAgLy8gc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvb3Jkc0NvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFpbmVyLFxuICAgICAgICAgICAgc3VibWl0OiBzdWJtaXQsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdElucHV0LFxuICAgICAgICAgICAgY29vcmRzSDogY29vcmRzSW5wdXQyLFxuICAgICAgICAgICAgY29vcmRzVjogY29vcmRzSW5wdXQxLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZXMgdGhlIHVzZXIgYm9hcmQgc28gcGxheWVycyBjYW4gYXR0YWNrXG4gICAgY29uc3QgYnVpbGRHcmlkID0gZnVuY3Rpb24odGlsZXMpIHtcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdnYW1lLXRhYmxlJyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ2Z1bGwtc2NyZWVuJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBsaW1pdGVkIGJ5IGxldHRlcnMgb2YgdGhlIGFscGhhYmV0XG4gICAgICAgIGNvbnN0IGJvYXJkU2l6ZSA9IHRpbGVzIDwgMjcgPyB0aWxlcyA6IDI2XG5cbiAgICAgICAgLy8gdG9wIHJvdyBvZiBjb2x1bW5zIGZvciB0aGUgZ2FtZSBib2FyZFxuICAgICAgICBjb25zdCB0b3BOdW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvcE51bXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1udW1iZXJzJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvYXJkU2l6ZTsgaSArPSAxICkge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHsgY29udGludWUgfVxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaXRlbS5pbm5lclRleHQgPSBpO1xuICAgICAgICAgICAgdG9wTnVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRvcE51bXMpO1xuXG4gICAgICAgIC8vIHNpZGUgcm93cyBmb3IgdGhlIGdhbWVib2FyZFxuICAgICAgICBjb25zdCBhc2NpaSA9IDY1OyAvLyB1c2UgU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTtcbiAgICAgICAgY29uc3QgY2VudGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZW50ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWUtcm93cycpO1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNxdWFyZXMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcXVhcmVzJyk7XG4gICAgICAgIGNvbnN0IHNpZGVMZXR0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVMZXR0ZXJzLmNsYXNzTGlzdC5hZGQoJ2dhbWUtbGV0dGVycycpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkU2l6ZTsgaiArPSAxICkge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGxldHRlci5pbm5lclRleHQgPSAoU3RyaW5nLmZyb21DaGFyQ29kZShqK2FzY2lpKSk7XG4gICAgICAgICAgICBzaWRlTGV0dGVycy5hcHBlbmRDaGlsZChsZXR0ZXIpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGJvYXJkU2l6ZTsgayArPSAxICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtqKzF9LCR7aysxfWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gICAgICAgICAgICAgICAgc3F1YXJlcy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjZW50ZXJDb250ZW50LmFwcGVuZENoaWxkKHNpZGVMZXR0ZXJzKTtcbiAgICAgICAgY2VudGVyQ29udGVudC5hcHBlbmRDaGlsZChzcXVhcmVzKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQoY2VudGVyQ29udGVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cblxuICAgIHVwZGF0ZVNjb3JlTWVzc2FnZXMoKTtcblxuXG4gICAgLy8gZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgdGhlIFVJXG4gICAgZnVuY3Rpb24gZ2V0RG9tU3F1YXJlKGNvb3JkcywgdWkpIHtcbiAgICAgICAgcmV0dXJuIHVpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhPScke2Nvb3Jkc30nXWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEF0dGFja1Rva2VuKCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2tlbi5jbGFzc0xpc3QuYWRkKCd0b2tlbicpO1xuXG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBzKGJvYXJkLCB1aSwgc2hvd1NoaXBzPWZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gYm9hcmQucmFuZG9taXplU2hpcFBsYWNlbWVudCg1KTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3dTaGlwcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBnZXREb21TcXVhcmUoc2hpcFtpXS5jb29yZHMsIHVpKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzaGlwcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHlsZUVudGlyZVNoaXAoc2hpcFNldCwgY29vcmRzLCBzdHlsZSwgdWksIGFkZD10cnVlKSB7XG4gICAgICAgIHNoaXBTZXQuZm9yRWFjaCgoc2hpcCk9PnsgLy8gYXJyYXkgb2YgYXJyYXlzIHRoYXQgY29udGFpbiBzaGlwc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKXsgIC8vIGFycmF5IG9mIHNoaXBzIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBzaGlwXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBbaV0uY29vcmRzID09PSBjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcC5mb3JFYWNoKChjb2xvck1lKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxtID0gZ2V0RG9tU3F1YXJlKGNvbG9yTWUuY29vcmRzLCB1aSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdhbWVib2FyZCBhbmQgcGxheWVyc1xuICAgIGNvbnN0IGNwdVVpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcC1jZW50ZXInKTtcbiAgICBjb25zdCB1c2VyVWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90dG9tLWNlbnRlcicpO1xuXG4gICAgY3B1VWkuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKEJPQVJEX1NJWkUpKTtcbiAgICB1c2VyVWkuYXBwZW5kQ2hpbGQoYnVpbGRHcmlkKEJPQVJEX1NJWkUpKTtcblxuICAgIGNvbnN0IHVzZXJQbGF5ZXIgPSBwbGF5ZXIoKTtcbiAgICBjb25zdCB1c2VyQm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgICBjb25zdCB1c2VyU2hpcHMgPSBwbGFjZVNoaXBzKHVzZXJCb2FyZCwgdXNlclVpLCB0cnVlKTtcblxuICAgIGNvbnN0IGNwdVBsYXllciA9IHBsYXllcigpO1xuICAgIGNvbnN0IGNwdUJvYXJkID0gZ2FtZWJvYXJkKCk7XG4gICAgY29uc3QgY3B1U2hpcHMgPSBwbGFjZVNoaXBzKGNwdUJvYXJkLCBjcHVVaSk7XG5cbiAgICAvLyBjb250cm9sIHRoZSBnYW1lcGxheVxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHNxdWFyZSwgYXR0YWNrLCB0YXJnZXRCb2FyZCwgdGFyZ2V0U2hpcHMsIHRhcmdldFVpKSB7XG4gICAgICAgIHNxdWFyZS5hcHBlbmRDaGlsZChnZXRBdHRhY2tUb2tlbigpKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbicpO1xuXG4gICAgICAgIGlmIChhdHRhY2suc2hpcCkge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgIGlmIChhdHRhY2suc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IHRoZSB1c2VyIGtub3cgdGhlIHNoaXAgaXMgZGVhZFxuICAgICAgICAgICAgICAgIHN0eWxlRW50aXJlU2hpcCh0YXJnZXRTaGlwcywgYXR0YWNrLmNvb3JkcywgJ2RhbWFnZWQnLCB0YXJnZXRVaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0VWkgPT09IGNwdVVpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJTY29yZSAtPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNwdVNjb3JlIC09IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlU2NvcmVNZXNzYWdlcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhcmdldEJvYXJkLmlzR2FtZU92ZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAvLyBzbyB3ZSBrbm93IGlmIHRoZSB1c2VyIHNob3VsZCB0YWtlIGFub3RoZXIgdHVyblxuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcbiAgICBsZXQgcGxheWVyVHVybiA9IHRydWU7XG4gICAgLy8gbGV0IHRoZSBwbGF5ZXIgYXR0YWNrIG9yIG1vdmUgcGllY2VzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PnsgICBcbiAgICAgICAgaWYgKCFwbGF5ZXJUdXJuKSB7XG4gICAgICAgICAgICAvLyBkb250IGxldCB0aGUgdXNlciBhdHRhY2sgd2hpbGUgaXQncyB0aGUgQUkncyB0dXJuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRzIG5vdCB5b3VyIHR1cm4geWV0Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChpc0dhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICBnYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9hcmQgPSBlLnRhcmdldC5jbG9zZXN0KCcuZ2FtZS10YWJsZScpO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldC5jbG9zZXN0KCcuZ3JpZCcpO1xuICAgIFxuICAgICAgICBpZiAoIXNxdWFyZSkge1xuICAgICAgICAgICAgcmV0dXJuIC8vIGRpZG4ndCBjbGljayBhIHNxdWFyZSBzbyB3ZSBkb24ndCB3YW50IHRvIGRvIGFueXRoaW5nIGVsc2VcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBjb29yZHMgPSBzcXVhcmUuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgIGlmIChnYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh1c2VyVWkucXVlcnlTZWxlY3RvcignLmdhbWUtdGFibGUnKSA9PT0gYm9hcmQpIHtcblxuICAgICAgICAgICAgICAgIC8vIGdldCBzaGlwXG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gc3F1YXJlLmdldEF0dHJpYnV0ZSgnZGF0YScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU2xvdCA9IHVzZXJCb2FyZC5ib2FyZC5maW5kKGluZGV4ID0+IGluZGV4LmNvb3JkcyA9PT0gc3F1YXJlQ29vcmRzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gYm9hcmRTbG90LnNoaXA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcEluZGV4ZXMgPSB1c2VyQm9hcmQuYm9hcmQuZmlsdGVyKGluZGV4ID0+IGluZGV4LnNoaXAgPT09IHNoaXApO1xuXG4gICAgICAgICAgICAgICAgLy8gdXNlciBkaWRuJ3QgY2xpY2sgYSBzaGlwXG4gICAgICAgICAgICAgICAgaWYgKHNoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lU3RhcnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mZmVyIHRvIHJhbmRvbWl6ZSB0aGUgYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBjb25maXJtKCdXb3VsZCB5b3UgbGlrZSB0byByYW5kb21pemUgdGhlIGJvYXJkPycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0YXJ0Qm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGFscmVhZHkgaGF2ZSBhIHBvcHVwLCBzbyB3ZSBkb24ndCB3YW50IGFub3RoZXIgb25lXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcG9wT2JqID0gY3JlYXRlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcE9iai5jb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHBvcE9iai5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVTdGFydGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYW4ndCBtb3ZlIHNoaXBzIG9uY2UgdGhlIGdhbWUgaGFzIHN0YXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5jb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBzaGlwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhDb29yZHMgPSBwb3BPYmouY29vcmRzSC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdkNvb3JkcyA9IHBvcE9iai5jb29yZHNWLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBwb3BPYmouZGlyZWN0aW9uLnZhbHVlID09PSAnSG9yaXpvbnRhbCcgPyAnaCcgOiAndic7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBgJHt2Q29vcmRzfSwke2hDb29yZHN9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2hpcCA9IHVzZXJCb2FyZC5wbGFjZVNoaXAoY29vcmRzLCBsZW5ndGgsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdTaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2ZW50cyBzaGlwcyBmcm9tIGJlaW5nIHJlbW92ZWQgaWYgdGhlIHJlcGxhY2VtZW50IGlzIGludmFsaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcE9iai5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hha2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbnRpcmVTaGlwKHVzZXJTaGlwcywgc3F1YXJlQ29vcmRzLCAnc2hpcCcsIHVzZXJVaSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbnRpcmVTaGlwKHVzZXJTaGlwcywgY29vcmRzLCAnc2hpcCcsIHVzZXJVaSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBJbmRleGVzLmZvckVhY2goKHNoaXBTZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2hpcFNlY3Rpb24uc2hpcDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wT2JqLmNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF0dGFja1xuICAgICAgICBpZiAoY3B1VWkucXVlcnlTZWxlY3RvcignLmdhbWUtdGFibGUnKSA9PT0gYm9hcmQpIHtcbiAgICAgICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhlIHVzZXIgY2xpY2tlZCB0aGUgZW5lbXkncyBib2FyZFxuICAgICAgICAgICAgY29uc3QgYXR0YWNrID0gdXNlclBsYXllci5hdHRhY2soY3B1Qm9hcmQsIGNvb3Jkcyk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJUdXJuID0gdGFrZVR1cm4oc3F1YXJlLCBhdHRhY2ssIGNwdUJvYXJkLCBjcHVTaGlwcywgY3B1VWkpO1xuXG4gICAgICAgICAgICAgICAgIGlmICghdXNlclR1cm4pe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJUdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRha2VDcHVUdXJuKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3B1QXR0YWNrID0gY3B1UGxheWVyLnJhbmRvbUF0dGFjayh1c2VyQm9hcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3B1VGFyZ2V0ID0gZ2V0RG9tU3F1YXJlKGNwdUF0dGFjay5jb29yZHMsIHVzZXJVaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0YWtlVHVybihjcHVUYXJnZXQsIGNwdUF0dGFjaywgdXNlckJvYXJkLCB1c2VyU2hpcHMsIHVzZXJVaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2VDcHVUdXJuKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFrZUNwdVR1cm4oKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnN0YXJ0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==