"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/food.jpg */ "./src/images/food.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Salsa&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --dark-blue: rgba(4,47,75,255);
    --red-text-color: #ee1350;
    --salsa-font: 'Salsa', cursive;
    --roboto-font: 'Roboto', sans-serif;
    --cream: #ede7cf;
    --hero-text-color: #ef2c58;
    --dark-cream: #fbc99d;
    --red-text-color-darker: #c0243f; 
    --sansita: "Sansita Swashed", cursive;
    --food-menu-bg: #ffc7b0;
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Roboto', sans-serif;
    height: 100vh;
}
header{
    min-height: 8%;
    color: var(--red-text-color);
    font-family: var(--salsa-font);
    background-color: var(--dark-blue);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
}
header h1{
    font-size: 3rem;
}

ul li a{
    color: var(--cream);
    text-decoration: none;
    padding: 1rem;
}
li{
    list-style: none;
    display: inline-block;
}
#template-main{
    color: var(--dark-cream);
    height: calc(100% - 8%);
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

}

.hero h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, var(--hero-text-color) 0%, #fbc99d 100%);  
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.hero{
    font-family: var(--salsa-font);
    width: 50%;
    text-align: center;
}
.hero p{
    font-size: calc(0.5rem + 1vw);
}
.hero .order{
    background-color: var(--red-text-color);
    color: var(--cream);
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    margin-top: 0.5rem;
}
.hero .order:hover{
    background-color: var(--red-text-color-darker);
    cursor: pointer;
}
#template-main .business-info{
    background-color: rgb(0, 0, 0, 0.4);
    width: 35%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 10px;
}

.business-info svg{
    color: var(--red-text-color);
}
.business-info i{
    padding-right: 1rem;
}
.business-info p{
    color: var(--cream);
    font-size: calc(0.5rem + 0.75vw);
}
.business-info .address,
.business-info .hours{
    display: flex;
    align-items: center;
    padding: 1rem;
}
.hours p span{
    color: var(--red-text-color)
}

/* Menu Page Styling */
#menu{
    height: max-content;
    background-color: var(--cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}
#menu h1{
    font-family: var(--sansita);
    font-size: calc(1.5rem + 2vw);
    color: var(--red-text-color);
    margin-top: 2rem;
    display: flex;
    align-items: center;
}

#menu .menu-container{
    width: 75%;
    background-color: var(--food-menu-bg);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5rem;
}
#menu .item-content h4{
    font-family: var(--salsa-font);
    font-size: calc(1.5rem);
    color: var(--red-text-color);
    border-bottom: 1px dashed var(--red-text-color);
}
#menu .item-content p{
    margin-top: 5px;
    font-size: 1.2rem;
    color: var(--dark-blue);
}
#menu .item-content span{
    float: right;
}


#menu .menu-container .menu-item{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
}

#menu .menu-item img{
    width: calc(5rem + 8vw);
    height: calc(5rem + 8vw);
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAIA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,8BAA8B;IAC9B,mCAAmC;IACnC,gBAAgB;IAChB,0BAA0B;IAC1B,qBAAqB;IACrB,gCAAgC;IAChC,qCAAqC;IACrC,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,aAAa;AACjB;AACA;IACI,cAAc;IACd,4BAA4B;IAC5B,8BAA8B;IAC9B,kCAAkC;IAClC,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,iFAAiE;IACjE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,2BAA2B;IAC3B,8EAA8E;IAC9E,6BAA6B;IAC7B,qBAAqB;IACrB,oCAAoC;AACxC;AACA;IACI,8BAA8B;IAC9B,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,uCAAuC;IACvC,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,8CAA8C;IAC9C,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;AAChC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,gCAAgC;AACpC;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI;AACJ;;AAEA,sBAAsB;AACtB;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,8BAA8B;IAC9B,uBAAuB;IACvB,4BAA4B;IAC5B,+CAA+C;AACnD;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;;;AAGA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Salsa&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');\n\n\n:root{\n    --dark-blue: rgba(4,47,75,255);\n    --red-text-color: #ee1350;\n    --salsa-font: 'Salsa', cursive;\n    --roboto-font: 'Roboto', sans-serif;\n    --cream: #ede7cf;\n    --hero-text-color: #ef2c58;\n    --dark-cream: #fbc99d;\n    --red-text-color-darker: #c0243f; \n    --sansita: \"Sansita Swashed\", cursive;\n    --food-menu-bg: #ffc7b0;\n}\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    font-family: 'Roboto', sans-serif;\n    height: 100vh;\n}\nheader{\n    min-height: 8%;\n    color: var(--red-text-color);\n    font-family: var(--salsa-font);\n    background-color: var(--dark-blue);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 0.5rem;\n}\nheader h1{\n    font-size: 3rem;\n}\n\nul li a{\n    color: var(--cream);\n    text-decoration: none;\n    padding: 1rem;\n}\nli{\n    list-style: none;\n    display: inline-block;\n}\n#template-main{\n    color: var(--dark-cream);\n    height: calc(100% - 8%);\n    background: url(../images/food.jpg) no-repeat center center/cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n\n}\n\n.hero h1 {\n    font-size: calc(2rem + 2vw);\n    background: linear-gradient(to right, var(--hero-text-color) 0%, #fbc99d 100%);  \n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n.hero{\n    font-family: var(--salsa-font);\n    width: 50%;\n    text-align: center;\n}\n.hero p{\n    font-size: calc(0.5rem + 1vw);\n}\n.hero .order{\n    background-color: var(--red-text-color);\n    color: var(--cream);\n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n    margin-top: 0.5rem;\n}\n.hero .order:hover{\n    background-color: var(--red-text-color-darker);\n    cursor: pointer;\n}\n#template-main .business-info{\n    background-color: rgb(0, 0, 0, 0.4);\n    width: 35%;\n    height: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n.business-info svg{\n    color: var(--red-text-color);\n}\n.business-info i{\n    padding-right: 1rem;\n}\n.business-info p{\n    color: var(--cream);\n    font-size: calc(0.5rem + 0.75vw);\n}\n.business-info .address,\n.business-info .hours{\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n}\n.hours p span{\n    color: var(--red-text-color)\n}\n\n/* Menu Page Styling */\n#menu{\n    height: max-content;\n    background-color: var(--cream);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n#menu h1{\n    font-family: var(--sansita);\n    font-size: calc(1.5rem + 2vw);\n    color: var(--red-text-color);\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n}\n\n#menu .menu-container{\n    width: 75%;\n    background-color: var(--food-menu-bg);\n    border-radius: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 5rem;\n}\n#menu .item-content h4{\n    font-family: var(--salsa-font);\n    font-size: calc(1.5rem);\n    color: var(--red-text-color);\n    border-bottom: 1px dashed var(--red-text-color);\n}\n#menu .item-content p{\n    margin-top: 5px;\n    font-size: 1.2rem;\n    color: var(--dark-blue);\n}\n#menu .item-content span{\n    float: right;\n}\n\n\n#menu .menu-container .menu-item{\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n\n#menu .menu-item img{\n    width: calc(5rem + 8vw);\n    height: calc(5rem + 8vw);\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/script/contact.js":
/*!*******************************!*\
  !*** ./src/script/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact(){
    
}

/***/ }),

/***/ "./src/script/home.js":
/*!****************************!*\
  !*** ./src/script/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    // creates the main tag and set the element id to template-main
    const main = document.createElement('main');
    main.id = "template-main";

    const heroDiv = () => {
        const hero = document.createElement('div');
        hero.classList.add('hero');

        const h1 = document.createElement('h1');
        h1.textContent = "Come on down for some delicious cuisine!";

        const p = document.createElement('p');
        p.textContent = "Tasty and affordable!";

        const button = document.createElement('button');
        button.classList.add('order');
        button.textContent = "Order Now";

        hero.appendChild(h1);
        hero.appendChild(p);
        hero.appendChild(button);

        return hero;
    }

    const businessDiv = () => {
        const businessInfo = document.createElement('div');
        businessInfo.classList.add('business-info');

        // creates the address and hours div
        const address = document.createElement('div');
        const hours = document.createElement('div');

        // address Node
        address.classList.add('address');
        address.innerHTML = `
            <i>
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path>
                </svg>
            </i>
            <p>1234 Main St <br> City, State 12345</p>
        `
        // hours Node
        hours.classList.add('hours');
        hours.innerHTML = `
            <i>
                <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path>
                </svg>
            </i>
            <p>
                <span>Mon-Thurs:</span> 8am - 8pm 
                <br>
                <span>Fri-Sun:</span> 8am - 11pm
            </p>
        `
        businessInfo.appendChild(address);
        businessInfo.appendChild(hours);

        return businessInfo;
    }

    main.appendChild(heroDiv());
    main.appendChild(businessDiv());

    return main;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/script/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/script/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/script/contact.js");






function loadHeader() {
    const header = document.createElement('header');

    // creates the title header 
    const titleHeader = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Food App";
    titleHeader.appendChild(h1);

    // creates the nav bar
    const navBar = document.createElement('div');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const contactLink = document.createElement('a');
    // sets the attributes for the nav bar
    homeLink.textContent = "Home";
    menuLink.textContent = "Menu";
    contactLink.textContent = "Contact Us";
    homeLink.href = "./index.html";
    menuLink.href = "./menu.html";
    contactLink.href = "./contact.html";

    // appends a tags to the li tags to the ul tag
    home.appendChild(homeLink);
    menu.appendChild(menuLink);
    contact.appendChild(contactLink);
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    navBar.appendChild(ul);

    // appends the title header and nav bar to the header
    header.appendChild(titleHeader);
    header.appendChild(navBar);

    return header;
}

// loads the header for each html page
document.body.insertBefore(loadHeader(), document.body.firstChild);

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
}else if (window.location.pathname === '/menu.html') {
    document.body.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.LoadMenu)());
}
// }else if (window.location.pathname === '/contact.html') {
//     document.body.appendChild(loadContact());
// }

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadMenu: () => (/* binding */ LoadMenu)
/* harmony export */ });
/* harmony import */ var _images_hamburger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hamburger.png */ "./src/images/hamburger.png");
/* harmony import */ var _images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cheeseburger.png */ "./src/images/cheeseburger.png");
/* harmony import */ var _images_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/double-cheeseburger.png */ "./src/images/double-cheeseburger.png");
/* harmony import */ var _images_steak_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/steak.png */ "./src/images/steak.png");
/* harmony import */ var _images_ribs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/ribs.png */ "./src/images/ribs.png");
/* harmony import */ var _images_grilled_cheese_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/grilled-cheese.png */ "./src/images/grilled-cheese.png");
/* harmony import */ var _images_caesar_salad_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/caesar-salad.png */ "./src/images/caesar-salad.png");
/* harmony import */ var _images_french_fries_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/french-fries.png */ "./src/images/french-fries.png");
/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/chef.png */ "./src/images/chef.png");










function LoadMenu(){
    // creates menu container
    const main = document.createElement('main')
    main.id = 'menu'

    function hero(){
        // creates the hero div 
        const heroDiv = document.createElement('div')
        heroDiv.classList.add('hero')

        const textTag = document.createElement('h1');

        const newImage = new Image()
        newImage.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_8__
        newImage.alt = "Chef"
        newImage.width = 50
        newImage.height = 50

        textTag.innerHTML = `
            <h1>Menu
            <img src="${newImage.src}" alt="${newImage.alt}" width="${newImage.width}" height="${newImage.height}">
            </h1>
        `;
        heroDiv.appendChild(textTag);
        return heroDiv;
    }

    function menuContainer(){
        const menuContainer = document.createElement("div")
        menuContainer.classList.add('menu-container')

        const images = [
            _images_hamburger_png__WEBPACK_IMPORTED_MODULE_0__,
            _images_cheeseburger_png__WEBPACK_IMPORTED_MODULE_1__,
            _images_double_cheeseburger_png__WEBPACK_IMPORTED_MODULE_2__,
            _images_steak_png__WEBPACK_IMPORTED_MODULE_3__,
            _images_ribs_png__WEBPACK_IMPORTED_MODULE_4__,
            _images_grilled_cheese_png__WEBPACK_IMPORTED_MODULE_5__,
            _images_caesar_salad_png__WEBPACK_IMPORTED_MODULE_6__,
            _images_french_fries_png__WEBPACK_IMPORTED_MODULE_7__,
        ]
        const foodItem = [
           "Hamburger", "Cheeseburger", "Double Cheeseburger", "Steak", "BBQ Ribs",
           "Grilled Cheese Sandwich", "Ceasar Salad", "French Fries"
        ]
        const prices = [
            "$2.49", "$2.99", "$3.49", "$11.99", "$8.99", "$4.99", "$7.99", "$1.99"
        ]
        const text = [
            "Buns, patty, tomato, onions, lettuce, and our secret family recipe.",
            "Similar to our hamburger, but with cheese.",
            "Similar to our cheeseburger, but with an extra patty.",
            "A juicy steak made just how you like it.",
            "Barbecue ribs with your choice of a add-ons.",
            "A toasted and grilled cheese sandwich, dipped in our special sauce.",
            "Your typical caesar salad that comes with your choice of dressings.",
            "Sometimes you don't want to eat your burger alone, why not add some french fries?",
        ]

        for(let i = 0; i < prices.length; i++){
            // menu item container
            const menuItem = document.createElement('div')
            menuItem.classList.add('menu-item');

            // menu item image
            const newImage = new Image()
            newImage.src = images[i]
            newImage.alt = foodItem[i]
            newImage.width = 50
            newImage.height = 50

            
            const itemContent = document.createElement('div')
            itemContent.classList.add('item-content')
            // item name and price
            const itemName = document.createElement('h4')
            itemName.innerHTML = `
                ${foodItem[i]}
                <span>${prices[i]}</span>
            `
            // item description
            const itemDescription = document.createElement('p')
            itemDescription.textContent = text[i]

            // append all the elements
            itemContent.appendChild(itemName)
            itemContent.appendChild(itemDescription)

            menuItem.appendChild(newImage)
            menuItem.appendChild(itemContent)
            menuContainer.appendChild(menuItem);
        }

        return menuContainer
    }

    main.appendChild(hero())
    main.appendChild(menuContainer())

    return main
}

/***/ }),

/***/ "./src/images/caesar-salad.png":
/*!*************************************!*\
  !*** ./src/images/caesar-salad.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/caesar-salad.3fe199795ffb6f04fbe9.png";

/***/ }),

/***/ "./src/images/cheeseburger.png":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cheeseburger.5def3cdd4cca83c61d05.png";

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/chef.e3a52bbab055d85a9f85.png";

/***/ }),

/***/ "./src/images/double-cheeseburger.png":
/*!********************************************!*\
  !*** ./src/images/double-cheeseburger.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/double-cheeseburger.37f80343f05d250f968a.png";

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/food.f3a5b5d0f57e67dd50c1.jpg";

/***/ }),

/***/ "./src/images/french-fries.png":
/*!*************************************!*\
  !*** ./src/images/french-fries.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/french-fries.3de4f85c5ae658981ef3.png";

/***/ }),

/***/ "./src/images/grilled-cheese.png":
/*!***************************************!*\
  !*** ./src/images/grilled-cheese.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/grilled-cheese.b36f469354eaa52c6b0c.png";

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hamburger.c447272b17a7d1327926.png";

/***/ }),

/***/ "./src/images/ribs.png":
/*!*****************************!*\
  !*** ./src/images/ribs.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ribs.90cd73f9a328a3ff716f.png";

/***/ }),

/***/ "./src/images/steak.png":
/*!******************************!*\
  !*** ./src/images/steak.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/steak.977ecea13cf8136c730a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0hBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLCtCQUErQjtBQUM5SSxzSUFBc0k7QUFDdEkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFV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QUMxQixZQUFZLHFEQUFpQjtBQUM3QixZQUFZLDREQUF1QjtBQUNuQyxZQUFZLDhDQUFVO0FBQ3RCLFlBQVksNkNBQVM7QUFDckIsWUFBWSx1REFBa0I7QUFDOUIsWUFBWSxxREFBZ0I7QUFDNUIsWUFBWSxxREFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdC9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdC9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZm9vZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDAmZmFtaWx5PVNhbHNhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLWRhcmstYmx1ZTogcmdiYSg0LDQ3LDc1LDI1NSk7XG4gICAgLS1yZWQtdGV4dC1jb2xvcjogI2VlMTM1MDtcbiAgICAtLXNhbHNhLWZvbnQ6ICdTYWxzYScsIGN1cnNpdmU7XG4gICAgLS1yb2JvdG8tZm9udDogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgLS1jcmVhbTogI2VkZTdjZjtcbiAgICAtLWhlcm8tdGV4dC1jb2xvcjogI2VmMmM1ODtcbiAgICAtLWRhcmstY3JlYW06ICNmYmM5OWQ7XG4gICAgLS1yZWQtdGV4dC1jb2xvci1kYXJrZXI6ICNjMDI0M2Y7IFxuICAgIC0tc2Fuc2l0YTogXCJTYW5zaXRhIFN3YXNoZWRcIiwgY3Vyc2l2ZTtcbiAgICAtLWZvb2QtbWVudS1iZzogI2ZmYzdiMDtcbn1cbip7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keXtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbmhlYWRlcntcbiAgICBtaW4taGVpZ2h0OiA4JTtcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5oZWFkZXIgaDF7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG51bCBsaSBhe1xuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5saXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiN0ZW1wbGF0ZS1tYWlue1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNyZWFtKTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDglKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xuXG59XG5cbi5oZXJvIGgxIHtcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDJ2dyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1oZXJvLXRleHQtY29sb3IpIDAlLCAjZmJjOTlkIDEwMCUpOyAgXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5oZXJve1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZXJvIHB7XG4gICAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDF2dyk7XG59XG4uaGVybyAub3JkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLmhlcm8gLm9yZGVyOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yLWRhcmtlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3RlbXBsYXRlLW1haW4gLmJ1c2luZXNzLWluZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ1c2luZXNzLWluZm8gc3Zne1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XG59XG4uYnVzaW5lc3MtaW5mbyBpe1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4uYnVzaW5lc3MtaW5mbyBwe1xuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XG4gICAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDAuNzV2dyk7XG59XG4uYnVzaW5lc3MtaW5mbyAuYWRkcmVzcyxcbi5idXNpbmVzcy1pbmZvIC5ob3Vyc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cbi5ob3VycyBwIHNwYW57XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKVxufVxuXG4vKiBNZW51IFBhZ2UgU3R5bGluZyAqL1xuI21lbnV7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuI21lbnUgaDF7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNhbnNpdGEpO1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAydncpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNtZW51IC5tZW51LWNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb2QtbWVudS1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuI21lbnUgLml0ZW0tY29udGVudCBoNHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSk7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbn1cbiNtZW51IC5pdGVtLWNvbnRlbnQgcHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG4jbWVudSAuaXRlbS1jb250ZW50IHNwYW57XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbiNtZW51IC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVte1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuI21lbnUgLm1lbnUtaXRlbSBpbWd7XG4gICAgd2lkdGg6IGNhbGMoNXJlbSArIDh2dyk7XG4gICAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA4dncpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMscUNBQXFDO0lBQ3JDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUZBQWlFO0lBQ2pFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhFQUE4RTtJQUM5RSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtBQUNKOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDAmZmFtaWx5PVNhbHNhJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhbnNpdGErU3dhc2hlZDp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG46cm9vdHtcXG4gICAgLS1kYXJrLWJsdWU6IHJnYmEoNCw0Nyw3NSwyNTUpO1xcbiAgICAtLXJlZC10ZXh0LWNvbG9yOiAjZWUxMzUwO1xcbiAgICAtLXNhbHNhLWZvbnQ6ICdTYWxzYScsIGN1cnNpdmU7XFxuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNyZWFtOiAjZWRlN2NmO1xcbiAgICAtLWhlcm8tdGV4dC1jb2xvcjogI2VmMmM1ODtcXG4gICAgLS1kYXJrLWNyZWFtOiAjZmJjOTlkO1xcbiAgICAtLXJlZC10ZXh0LWNvbG9yLWRhcmtlcjogI2MwMjQzZjsgXFxuICAgIC0tc2Fuc2l0YTogXFxcIlNhbnNpdGEgU3dhc2hlZFxcXCIsIGN1cnNpdmU7XFxuICAgIC0tZm9vZC1tZW51LWJnOiAjZmZjN2IwO1xcbn1cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuaGVhZGVye1xcbiAgICBtaW4taGVpZ2h0OiA4JTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNhbHNhLWZvbnQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5oZWFkZXIgaDF7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxudWwgbGkgYXtcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jdGVtcGxhdGUtbWFpbntcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY3JlYW0pO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDglKTtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9mb29kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuXFxufVxcblxcbi5oZXJvIGgxIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAydncpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWhlcm8tdGV4dC1jb2xvcikgMCUsICNmYmM5OWQgMTAwJSk7ICBcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uaGVyb3tcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNhbHNhLWZvbnQpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZXJvIHB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAxdncpO1xcbn1cXG4uaGVybyAub3JkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLmhlcm8gLm9yZGVyOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvci1kYXJrZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN0ZW1wbGF0ZS1tYWluIC5idXNpbmVzcy1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC40KTtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJ1c2luZXNzLWluZm8gc3Zne1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbn1cXG4uYnVzaW5lc3MtaW5mbyBpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4uYnVzaW5lc3MtaW5mbyBwe1xcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMC43NXZ3KTtcXG59XFxuLmJ1c2luZXNzLWluZm8gLmFkZHJlc3MsXFxuLmJ1c2luZXNzLWluZm8gLmhvdXJze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uaG91cnMgcCBzcGFue1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpXFxufVxcblxcbi8qIE1lbnUgUGFnZSBTdHlsaW5nICovXFxuI21lbnV7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG59XFxuI21lbnUgaDF7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYW5zaXRhKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtZW51IC5tZW51LWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vZC1tZW51LWJnKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcbn1cXG4jbWVudSAuaXRlbS1jb250ZW50IGg0e1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG59XFxuI21lbnUgLml0ZW0tY29udGVudCBwe1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuI21lbnUgLml0ZW0tY29udGVudCBzcGFue1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcblxcbiNtZW51IC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVte1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI21lbnUgLm1lbnUtaXRlbSBpbWd7XFxuICAgIHdpZHRoOiBjYWxjKDVyZW0gKyA4dncpO1xcbiAgICBoZWlnaHQ6IGNhbGMoNXJlbSArIDh2dyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgXG59IiwiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgLy8gY3JlYXRlcyB0aGUgbWFpbiB0YWcgYW5kIHNldCB0aGUgZWxlbWVudCBpZCB0byB0ZW1wbGF0ZS1tYWluXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlkID0gXCJ0ZW1wbGF0ZS1tYWluXCI7XG5cbiAgICBjb25zdCBoZXJvRGl2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBcIkNvbWUgb24gZG93biBmb3Igc29tZSBkZWxpY2lvdXMgY3Vpc2luZSFcIjtcblxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gXCJUYXN0eSBhbmQgYWZmb3JkYWJsZSFcIjtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29yZGVyJyk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XG5cbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChoMSk7XG4gICAgICAgIGhlcm8uYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGhlcm8uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gaGVybztcbiAgICB9XG5cbiAgICBjb25zdCBidXNpbmVzc0RpdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnVzaW5lc3NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1c2luZXNzSW5mby5jbGFzc0xpc3QuYWRkKCdidXNpbmVzcy1pbmZvJyk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgYWRkcmVzcyBhbmQgaG91cnMgZGl2XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBhZGRyZXNzIE5vZGVcbiAgICAgICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gICAgICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgPHN2ZyByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiIE0gNTAwIDg4QyA1NjQgODggNjI4IDEwOCA2ODAgMTQ0QyA3OTQgMjIyIDg0MyAzNzkgNzk0IDUwN0MgNzQ0IDYxMiA2OTMgNzE2IDY0MyA4MjFDIDYxNyA4NzAgNjAxIDkzMCA1NDggOTU3QyA0OTQgOTg4IDQyNiA5NTYgMzk4IDkwNEMgMzQwIDc4OCAyODUgNjcwIDIyOCA1NTNDIDE4NyA0ODAgMTc2IDM5MCAyMDEgMzA5QyAyMzcgMTgyIDM2MiA4OCA0OTQgODhDIDQ5NiA4OCA0OTggODggNTAwIDg4QyA1MDAgODggNTAwIDg4IDUwMCA4OE0gMzg3IDQwMEMgMzg3IDQ2MiA0MzggNTEyIDUwMCA1MTJDIDU2MiA1MTIgNjEzIDQ2MiA2MTMgNDAwQyA2MTMgMzM4IDU2MiAyODcgNTAwIDI4N0MgNDM4IDI4NyAzODcgMzM4IDM4NyA0MDBDIDM4NyA0MDAgMzg3IDQwMCAzODcgNDAwXCIgdHJhbnNmb3JtPVwiXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPHA+MTIzNCBNYWluIFN0IDxicj4gQ2l0eSwgU3RhdGUgMTIzNDU8L3A+XG4gICAgICAgIGBcbiAgICAgICAgLy8gaG91cnMgTm9kZVxuICAgICAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgICAgICBob3Vycy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICA8c3ZnIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNIDUwMCAwQyAyMjQgMCAwIDIyNCAwIDUwMEMgMCA3NzYgMjI0IDEwMDAgNTAwIDEwMDBDIDc3NiAxMDAwIDEwMDAgNzc2IDEwMDAgNTAwQyAxMDAwIDIyNCA3NzYgMCA1MDAgMEMgNTAwIDAgNTAwIDAgNTAwIDAgTSA1NTAgMjUwQyA1NTAgMjUwIDU1MCA0NDUgNTUwIDQ0NUMgNTY1IDQ1OCA1NzUgNDc4IDU3NSA1MDBDIDU3NSA1NDEgNTQxIDU3NSA1MDAgNTc1QyA0OTkgNTc1IDQ5NyA1NzUgNDk2IDU3NUMgNDk2IDU3NSAyODUgNzg1IDI4NSA3ODVDIDI2NiA4MDUgMjM0IDgwNiAyMTQgNzg2QyAxOTQgNzY2IDE5NSA3MzQgMjE1IDcxNUMgMjE1IDcxNSA0MjUgNTA0IDQyNSA1MDRDIDQyNSA1MDMgNDI1IDUwMSA0MjUgNTAwQyA0MjUgNDc4IDQzNSA0NTggNDUwIDQ0NUMgNDUwIDQ0NSA0NTAgMjUwIDQ1MCAyNTBDIDQ1MCAyMjIgNDcyIDIwMCA0OTkgMTk5QyA1MjcgMTk5IDU1MCAyMjIgNTUwIDI1MEMgNTUwIDI1MCA1NTAgMjUwIDU1MCAyNTBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAwMCwwKSBzY2FsZSgtMSwxKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Nb24tVGh1cnM6PC9zcGFuPiA4YW0gLSA4cG0gXG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkZyaS1TdW46PC9zcGFuPiA4YW0gLSAxMXBtXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIGBcbiAgICAgICAgYnVzaW5lc3NJbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgICAgICBidXNpbmVzc0luZm8uYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgICAgIHJldHVybiBidXNpbmVzc0luZm87XG4gICAgfVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvRGl2KCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnVzaW5lc3NEaXYoKSk7XG5cbiAgICByZXR1cm4gbWFpbjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7TG9hZE1lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5cbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICAvLyBjcmVhdGVzIHRoZSB0aXRsZSBoZWFkZXIgXG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkZvb2QgQXBwXCI7XG4gICAgdGl0bGVIZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgbmF2IGJhclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAvLyBzZXRzIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgbmF2IGJhclxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGhvbWVMaW5rLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xuICAgIG1lbnVMaW5rLmhyZWYgPSBcIi4vbWVudS5odG1sXCI7XG4gICAgY29udGFjdExpbmsuaHJlZiA9IFwiLi9jb250YWN0Lmh0bWxcIjtcblxuICAgIC8vIGFwcGVuZHMgYSB0YWdzIHRvIHRoZSBsaSB0YWdzIHRvIHRoZSB1bCB0YWdcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbiAgICB1bC5hcHBlbmRDaGlsZChob21lKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgLy8gYXBwZW5kcyB0aGUgdGl0bGUgaGVhZGVyIGFuZCBuYXYgYmFyIHRvIHRoZSBoZWFkZXJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy8gbG9hZHMgdGhlIGhlYWRlciBmb3IgZWFjaCBodG1sIHBhZ2VcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxvYWRIZWFkZXIoKSwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9pbmRleC5odG1sJykge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG59ZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL21lbnUuaHRtbCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKExvYWRNZW51KCkpO1xufVxuLy8gfWVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9jb250YWN0Lmh0bWwnKSB7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkQ29udGFjdCgpKTtcbi8vIH0iLCJpbXBvcnQgaGFtYnVyZ2VySW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2hhbWJ1cmdlci5wbmcnXG5pbXBvcnQgY2hlZXNlYnVyZ2VySW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2NoZWVzZWJ1cmdlci5wbmcnXG5pbXBvcnQgZG91YmxlQ2hlZXNlYnVyZ2VySW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2RvdWJsZS1jaGVlc2VidXJnZXIucG5nJ1xuaW1wb3J0IHN0ZWFrSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3N0ZWFrLnBuZydcbmltcG9ydCByaWJzSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL3JpYnMucG5nJ1xuaW1wb3J0IGdyaWxsZWRDaGVlc2VJbWFnZSBmcm9tICcuLi9pbWFnZXMvZ3JpbGxlZC1jaGVlc2UucG5nJ1xuaW1wb3J0IGNhZXNhclNhbGFkSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2NhZXNhci1zYWxhZC5wbmcnXG5pbXBvcnQgZnJlbmNoRnJpZXNJbWFnZSBmcm9tICcuLi9pbWFnZXMvZnJlbmNoLWZyaWVzLnBuZydcbmltcG9ydCBjaGVmSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2NoZWYucG5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZE1lbnUoKXtcbiAgICAvLyBjcmVhdGVzIG1lbnUgY29udGFpbmVyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIG1haW4uaWQgPSAnbWVudSdcblxuICAgIGZ1bmN0aW9uIGhlcm8oKXtcbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgaGVybyBkaXYgXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxuXG4gICAgICAgIGNvbnN0IHRleHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gY2hlZkltYWdlXG4gICAgICAgIG5ld0ltYWdlLmFsdCA9IFwiQ2hlZlwiXG4gICAgICAgIG5ld0ltYWdlLndpZHRoID0gNTBcbiAgICAgICAgbmV3SW1hZ2UuaGVpZ2h0ID0gNTBcblxuICAgICAgICB0ZXh0VGFnLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT5NZW51XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bmV3SW1hZ2Uuc3JjfVwiIGFsdD1cIiR7bmV3SW1hZ2UuYWx0fVwiIHdpZHRoPVwiJHtuZXdJbWFnZS53aWR0aH1cIiBoZWlnaHQ9XCIke25ld0ltYWdlLmhlaWdodH1cIj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIGA7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dFRhZyk7XG4gICAgICAgIHJldHVybiBoZXJvRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lbnVDb250YWluZXIoKXtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW1xuICAgICAgICAgICAgaGFtYnVyZ2VySW1hZ2UsXG4gICAgICAgICAgICBjaGVlc2VidXJnZXJJbWFnZSxcbiAgICAgICAgICAgIGRvdWJsZUNoZWVzZWJ1cmdlckltYWdlLFxuICAgICAgICAgICAgc3RlYWtJbWFnZSxcbiAgICAgICAgICAgIHJpYnNJbWFnZSxcbiAgICAgICAgICAgIGdyaWxsZWRDaGVlc2VJbWFnZSxcbiAgICAgICAgICAgIGNhZXNhclNhbGFkSW1hZ2UsXG4gICAgICAgICAgICBmcmVuY2hGcmllc0ltYWdlLFxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IGZvb2RJdGVtID0gW1xuICAgICAgICAgICBcIkhhbWJ1cmdlclwiLCBcIkNoZWVzZWJ1cmdlclwiLCBcIkRvdWJsZSBDaGVlc2VidXJnZXJcIiwgXCJTdGVha1wiLCBcIkJCUSBSaWJzXCIsXG4gICAgICAgICAgIFwiR3JpbGxlZCBDaGVlc2UgU2FuZHdpY2hcIiwgXCJDZWFzYXIgU2FsYWRcIiwgXCJGcmVuY2ggRnJpZXNcIlxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IHByaWNlcyA9IFtcbiAgICAgICAgICAgIFwiJDIuNDlcIiwgXCIkMi45OVwiLCBcIiQzLjQ5XCIsIFwiJDExLjk5XCIsIFwiJDguOTlcIiwgXCIkNC45OVwiLCBcIiQ3Ljk5XCIsIFwiJDEuOTlcIlxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IHRleHQgPSBbXG4gICAgICAgICAgICBcIkJ1bnMsIHBhdHR5LCB0b21hdG8sIG9uaW9ucywgbGV0dHVjZSwgYW5kIG91ciBzZWNyZXQgZmFtaWx5IHJlY2lwZS5cIixcbiAgICAgICAgICAgIFwiU2ltaWxhciB0byBvdXIgaGFtYnVyZ2VyLCBidXQgd2l0aCBjaGVlc2UuXCIsXG4gICAgICAgICAgICBcIlNpbWlsYXIgdG8gb3VyIGNoZWVzZWJ1cmdlciwgYnV0IHdpdGggYW4gZXh0cmEgcGF0dHkuXCIsXG4gICAgICAgICAgICBcIkEganVpY3kgc3RlYWsgbWFkZSBqdXN0IGhvdyB5b3UgbGlrZSBpdC5cIixcbiAgICAgICAgICAgIFwiQmFyYmVjdWUgcmlicyB3aXRoIHlvdXIgY2hvaWNlIG9mIGEgYWRkLW9ucy5cIixcbiAgICAgICAgICAgIFwiQSB0b2FzdGVkIGFuZCBncmlsbGVkIGNoZWVzZSBzYW5kd2ljaCwgZGlwcGVkIGluIG91ciBzcGVjaWFsIHNhdWNlLlwiLFxuICAgICAgICAgICAgXCJZb3VyIHR5cGljYWwgY2Flc2FyIHNhbGFkIHRoYXQgY29tZXMgd2l0aCB5b3VyIGNob2ljZSBvZiBkcmVzc2luZ3MuXCIsXG4gICAgICAgICAgICBcIlNvbWV0aW1lcyB5b3UgZG9uJ3Qgd2FudCB0byBlYXQgeW91ciBidXJnZXIgYWxvbmUsIHdoeSBub3QgYWRkIHNvbWUgZnJlbmNoIGZyaWVzP1wiLFxuICAgICAgICBdXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBtZW51IGl0ZW0gY29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgLy8gbWVudSBpdGVtIGltYWdlXG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZXNbaV1cbiAgICAgICAgICAgIG5ld0ltYWdlLmFsdCA9IGZvb2RJdGVtW2ldXG4gICAgICAgICAgICBuZXdJbWFnZS53aWR0aCA9IDUwXG4gICAgICAgICAgICBuZXdJbWFnZS5oZWlnaHQgPSA1MFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGVudCcpXG4gICAgICAgICAgICAvLyBpdGVtIG5hbWUgYW5kIHByaWNlXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAke2Zvb2RJdGVtW2ldfVxuICAgICAgICAgICAgICAgIDxzcGFuPiR7cHJpY2VzW2ldfTwvc3Bhbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vIGl0ZW0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGV4dFtpXVxuXG4gICAgICAgICAgICAvLyBhcHBlbmQgYWxsIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgaXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgICAgICAgICBpdGVtQ29udGVudC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pXG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG5ld0ltYWdlKVxuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW51Q29udGFpbmVyXG4gICAgfVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKCkpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKCkpXG5cbiAgICByZXR1cm4gbWFpblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==