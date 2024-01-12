(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    justify-content: center;
    align-items: flex-end;
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
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAIA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,8BAA8B;IAC9B,mCAAmC;IACnC,gBAAgB;IAChB,0BAA0B;IAC1B,qBAAqB;IACrB,gCAAgC;IAChC,qCAAqC;IACrC,uBAAuB;AAC3B;AACA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;IACjC,aAAa;AACjB;AACA;IACI,cAAc;IACd,4BAA4B;IAC5B,8BAA8B;IAC9B,kCAAkC;IAClC,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;AACA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,iFAAiE;IACjE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;AAEb;;AAEA;IACI,2BAA2B;IAC3B,8EAA8E;IAC9E,6BAA6B;IAC7B,qBAAqB;IACrB,oCAAoC;AACxC;AACA;IACI,8BAA8B;IAC9B,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,uCAAuC;IACvC,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,8CAA8C;IAC9C,eAAe;AACnB;AACA;IACI,mCAAmC;IACnC,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;AAChC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,gCAAgC;AACpC;AACA;;IAEI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI;AACJ;;AAEA,sBAAsB;AACtB;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,8BAA8B;IAC9B,uBAAuB;IACvB,4BAA4B;IAC5B,+CAA+C;AACnD;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;;;AAGA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Salsa&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');\n\n\n:root{\n    --dark-blue: rgba(4,47,75,255);\n    --red-text-color: #ee1350;\n    --salsa-font: 'Salsa', cursive;\n    --roboto-font: 'Roboto', sans-serif;\n    --cream: #ede7cf;\n    --hero-text-color: #ef2c58;\n    --dark-cream: #fbc99d;\n    --red-text-color-darker: #c0243f; \n    --sansita: \"Sansita Swashed\", cursive;\n    --food-menu-bg: #ffc7b0;\n}\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    font-family: 'Roboto', sans-serif;\n    height: 100vh;\n}\nheader{\n    min-height: 8%;\n    color: var(--red-text-color);\n    font-family: var(--salsa-font);\n    background-color: var(--dark-blue);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 0.5rem;\n}\nheader h1{\n    font-size: 3rem;\n}\n\nul li a{\n    color: var(--cream);\n    text-decoration: none;\n    padding: 1rem;\n}\nli{\n    list-style: none;\n    display: inline-block;\n}\n#template-main{\n    color: var(--dark-cream);\n    height: calc(100% - 8%);\n    background: url(../images/food.jpg) no-repeat center center/cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n\n}\n\n.hero h1 {\n    font-size: calc(2rem + 2vw);\n    background: linear-gradient(to right, var(--hero-text-color) 0%, #fbc99d 100%);  \n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n.hero{\n    font-family: var(--salsa-font);\n    width: 50%;\n    text-align: center;\n}\n.hero p{\n    font-size: calc(0.5rem + 1vw);\n}\n.hero .order{\n    background-color: var(--red-text-color);\n    color: var(--cream);\n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n    margin-top: 0.5rem;\n}\n.hero .order:hover{\n    background-color: var(--red-text-color-darker);\n    cursor: pointer;\n}\n#template-main .business-info{\n    background-color: rgb(0, 0, 0, 0.4);\n    width: 35%;\n    height: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n.business-info svg{\n    color: var(--red-text-color);\n}\n.business-info i{\n    padding-right: 1rem;\n}\n.business-info p{\n    color: var(--cream);\n    font-size: calc(0.5rem + 0.75vw);\n}\n.business-info .address,\n.business-info .hours{\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n}\n.hours p span{\n    color: var(--red-text-color)\n}\n\n/* Menu Page Styling */\n#menu{\n    height: max-content;\n    background-color: var(--cream);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n#menu h1{\n    font-family: var(--sansita);\n    font-size: calc(1.5rem + 2vw);\n    color: var(--red-text-color);\n    margin-top: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n#menu .menu-container{\n    width: 75%;\n    background-color: var(--food-menu-bg);\n    border-radius: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 5rem;\n}\n#menu .item-content h4{\n    font-family: var(--salsa-font);\n    font-size: calc(1.5rem);\n    color: var(--red-text-color);\n    border-bottom: 1px dashed var(--red-text-color);\n}\n#menu .item-content p{\n    margin-top: 5px;\n    font-size: 1.2rem;\n    color: var(--dark-blue);\n}\n#menu .item-content span{\n    float: right;\n}\n\n\n#menu .menu-container .menu-item{\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n\n#menu .menu-item img{\n    width: calc(5rem + 8vw);\n    height: calc(5rem + 8vw);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/images sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/images/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./caesar-salad.png": "./src/images/caesar-salad.png",
	"./cheeseburger.png": "./src/images/cheeseburger.png",
	"./chef.png": "./src/images/chef.png",
	"./double-cheeseburger.png": "./src/images/double-cheeseburger.png",
	"./food.jpg": "./src/images/food.jpg",
	"./french-fries.png": "./src/images/french-fries.png",
	"./grilled-cheese.png": "./src/images/grilled-cheese.png",
	"./hamburger.png": "./src/images/hamburger.png",
	"./ribs.png": "./src/images/ribs.png",
	"./steak.png": "./src/images/steak.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/script/contact.js":
/*!*******************************!*\
  !*** ./src/script/contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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
// else if (window.location.pathname === '/contact.html') {
//     document.body.appendChild(loadContact());
// }

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadMenu: () => (/* binding */ LoadMenu)
/* harmony export */ });
const [hamburgerImage, cheeseburgerImage, doubleCheeseburgerImage, steakImage, ribsImage, grilledCheeseImage, caesarSaladImage, frenchFriesImage, chefImage] =['hamburger.png', 'cheeseburger.png', 'double-cheeseburger.png', 'steak.png', 'ribs.png', 'grilled-cheese.png', 'caesar-salad.png', 'french-fries.png', 'chef.png'].map(image => __webpack_require__("./src/images sync recursive ^\\.\\/.*$")(`./${image}`));

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
        newImage.src = chefImage
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
            hamburgerImage,
            cheeseburgerImage,
            doubleCheeseburgerImage,
            steakImage,
            ribsImage,
            grilledCheeseImage,
            caesarSaladImage,
            frenchFriesImage,
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

"use strict";
module.exports = __webpack_require__.p + "images/caesar-salad.3fe199795ffb6f04fbe9.png";

/***/ }),

/***/ "./src/images/cheeseburger.png":
/*!*************************************!*\
  !*** ./src/images/cheeseburger.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/cheeseburger.5def3cdd4cca83c61d05.png";

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/chef.e3a52bbab055d85a9f85.png";

/***/ }),

/***/ "./src/images/double-cheeseburger.png":
/*!********************************************!*\
  !*** ./src/images/double-cheeseburger.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/double-cheeseburger.37f80343f05d250f968a.png";

/***/ }),

/***/ "./src/images/food.jpg":
/*!*****************************!*\
  !*** ./src/images/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/food.f3a5b5d0f57e67dd50c1.jpg";

/***/ }),

/***/ "./src/images/french-fries.png":
/*!*************************************!*\
  !*** ./src/images/french-fries.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/french-fries.3de4f85c5ae658981ef3.png";

/***/ }),

/***/ "./src/images/grilled-cheese.png":
/*!***************************************!*\
  !*** ./src/images/grilled-cheese.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/grilled-cheese.b36f469354eaa52c6b0c.png";

/***/ }),

/***/ "./src/images/hamburger.png":
/*!**********************************!*\
  !*** ./src/images/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hamburger.c447272b17a7d1327926.png";

/***/ }),

/***/ "./src/images/ribs.png":
/*!*****************************!*\
  !*** ./src/images/ribs.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ribs.90cd73f9a328a3ff716f.png";

/***/ }),

/***/ "./src/images/steak.png":
/*!******************************!*\
  !*** ./src/images/steak.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/steak.977ecea13cf8136c730a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0hBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLCtCQUErQjtBQUM5SSxzSUFBc0k7QUFDdEkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFL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QUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixhQUFhLFNBQVMsYUFBYSxXQUFXLGVBQWUsWUFBWSxnQkFBZ0I7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHQvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvb2QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmZhbWlseT1TYWxzYSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1kYXJrLWJsdWU6IHJnYmEoNCw0Nyw3NSwyNTUpO1xuICAgIC0tcmVkLXRleHQtY29sb3I6ICNlZTEzNTA7XG4gICAgLS1zYWxzYS1mb250OiAnU2Fsc2EnLCBjdXJzaXZlO1xuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIC0tY3JlYW06ICNlZGU3Y2Y7XG4gICAgLS1oZXJvLXRleHQtY29sb3I6ICNlZjJjNTg7XG4gICAgLS1kYXJrLWNyZWFtOiAjZmJjOTlkO1xuICAgIC0tcmVkLXRleHQtY29sb3ItZGFya2VyOiAjYzAyNDNmOyBcbiAgICAtLXNhbnNpdGE6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIGN1cnNpdmU7XG4gICAgLS1mb29kLW1lbnUtYmc6ICNmZmM3YjA7XG59XG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5oZWFkZXJ7XG4gICAgbWluLWhlaWdodDogOCU7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuaGVhZGVyIGgxe1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxudWwgbGkgYXtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jdGVtcGxhdGUtbWFpbntcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jcmVhbSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4JSk7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcblxufVxuXG4uaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAydncpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taGVyby10ZXh0LWNvbG9yKSAwJSwgI2ZiYzk5ZCAxMDAlKTsgIFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaGVyb3tcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVybyBwe1xuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAxdncpO1xufVxuLmhlcm8gLm9yZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5oZXJvIC5vcmRlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvci1kYXJrZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0ZW1wbGF0ZS1tYWluIC5idXNpbmVzcy1pbmZve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXNpbmVzcy1pbmZvIHN2Z3tcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xufVxuLmJ1c2luZXNzLWluZm8gaXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuLmJ1c2luZXNzLWluZm8gcHtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAwLjc1dncpO1xufVxuLmJ1c2luZXNzLWluZm8gLmFkZHJlc3MsXG4uYnVzaW5lc3MtaW5mbyAuaG91cnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4uaG91cnMgcCBzcGFue1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcilcbn1cblxuLyogTWVudSBQYWdlIFN0eWxpbmcgKi9cbiNtZW51e1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbn1cbiNtZW51IGgxe1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYW5zaXRhKTtcbiAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMnZ3KTtcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbiNtZW51IC5tZW51LWNvbnRhaW5lcntcbiAgICB3aWR0aDogNzUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb2QtbWVudS1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuI21lbnUgLml0ZW0tY29udGVudCBoNHtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSk7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbn1cbiNtZW51IC5pdGVtLWNvbnRlbnQgcHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG4jbWVudSAuaXRlbS1jb250ZW50IHNwYW57XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5cbiNtZW51IC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVte1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuI21lbnUgLm1lbnUtaXRlbSBpbWd7XG4gICAgd2lkdGg6IGNhbGMoNXJlbSArIDh2dyk7XG4gICAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA4dncpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMscUNBQXFDO0lBQ3JDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUZBQWlFO0lBQ2pFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhFQUE4RTtJQUM5RSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtBQUNKOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmZhbWlseT1TYWxzYSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3R7XFxuICAgIC0tZGFyay1ibHVlOiByZ2JhKDQsNDcsNzUsMjU1KTtcXG4gICAgLS1yZWQtdGV4dC1jb2xvcjogI2VlMTM1MDtcXG4gICAgLS1zYWxzYS1mb250OiAnU2Fsc2EnLCBjdXJzaXZlO1xcbiAgICAtLXJvYm90by1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgLS1jcmVhbTogI2VkZTdjZjtcXG4gICAgLS1oZXJvLXRleHQtY29sb3I6ICNlZjJjNTg7XFxuICAgIC0tZGFyay1jcmVhbTogI2ZiYzk5ZDtcXG4gICAgLS1yZWQtdGV4dC1jb2xvci1kYXJrZXI6ICNjMDI0M2Y7IFxcbiAgICAtLXNhbnNpdGE6IFxcXCJTYW5zaXRhIFN3YXNoZWRcXFwiLCBjdXJzaXZlO1xcbiAgICAtLWZvb2QtbWVudS1iZzogI2ZmYzdiMDtcXG59XFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbmhlYWRlcntcXG4gICAgbWluLWhlaWdodDogOCU7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbnVsIGxpIGF7XFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI3RlbXBsYXRlLW1haW57XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNyZWFtKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4JSk7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvZm9vZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcblxcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMnZ3KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1oZXJvLXRleHQtY29sb3IpIDAlLCAjZmJjOTlkIDEwMCUpOyAgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmhlcm97XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVybyBwe1xcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMXZ3KTtcXG59XFxuLmhlcm8gLm9yZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5oZXJvIC5vcmRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3ItZGFya2VyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdGVtcGxhdGUtbWFpbiAuYnVzaW5lc3MtaW5mb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idXNpbmVzcy1pbmZvIHN2Z3tcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG59XFxuLmJ1c2luZXNzLWluZm8gaXtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLmJ1c2luZXNzLWluZm8gcHtcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDAuNzV2dyk7XFxufVxcbi5idXNpbmVzcy1pbmZvIC5hZGRyZXNzLFxcbi5idXNpbmVzcy1pbmZvIC5ob3Vyc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmhvdXJzIHAgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKVxcbn1cXG5cXG4vKiBNZW51IFBhZ2UgU3R5bGluZyAqL1xcbiNtZW51e1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcbiNtZW51IGgxe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fuc2l0YSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAydncpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jbWVudSAubWVudS1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb2QtbWVudS1iZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG59XFxuI21lbnUgLml0ZW0tY29udGVudCBoNHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNhbHNhLWZvbnQpO1xcbiAgICBmb250LXNpemU6IGNhbGMoMS41cmVtKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxufVxcbiNtZW51IC5pdGVtLWNvbnRlbnQgcHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcbiNtZW51IC5pdGVtLWNvbnRlbnQgc3BhbntcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG5cXG4jbWVudSAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbiNtZW51IC5tZW51LWl0ZW0gaW1ne1xcbiAgICB3aWR0aDogY2FsYyg1cmVtICsgOHZ3KTtcXG4gICAgaGVpZ2h0OiBjYWxjKDVyZW0gKyA4dncpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYWVzYXItc2FsYWQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2NhZXNhci1zYWxhZC5wbmdcIixcblx0XCIuL2NoZWVzZWJ1cmdlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2hlZXNlYnVyZ2VyLnBuZ1wiLFxuXHRcIi4vY2hlZi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2hlZi5wbmdcIixcblx0XCIuL2RvdWJsZS1jaGVlc2VidXJnZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2RvdWJsZS1jaGVlc2VidXJnZXIucG5nXCIsXG5cdFwiLi9mb29kLmpwZ1wiOiBcIi4vc3JjL2ltYWdlcy9mb29kLmpwZ1wiLFxuXHRcIi4vZnJlbmNoLWZyaWVzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9mcmVuY2gtZnJpZXMucG5nXCIsXG5cdFwiLi9ncmlsbGVkLWNoZWVzZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZ3JpbGxlZC1jaGVlc2UucG5nXCIsXG5cdFwiLi9oYW1idXJnZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIixcblx0XCIuL3JpYnMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3JpYnMucG5nXCIsXG5cdFwiLi9zdGVhay5wbmdcIjogXCIuL3NyYy9pbWFnZXMvc3RlYWsucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29udGFjdCgpe1xuICAgIFxufSIsImZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIC8vIGNyZWF0ZXMgdGhlIG1haW4gdGFnIGFuZCBzZXQgdGhlIGVsZW1lbnQgaWQgdG8gdGVtcGxhdGUtbWFpblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pZCA9IFwidGVtcGxhdGUtbWFpblwiO1xuXG4gICAgY29uc3QgaGVyb0RpdiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gXCJDb21lIG9uIGRvd24gZm9yIHNvbWUgZGVsaWNpb3VzIGN1aXNpbmUhXCI7XG5cbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IFwiVGFzdHkgYW5kIGFmZm9yZGFibGUhXCI7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvcmRlcicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xuXG4gICAgICAgIGhlcm8uYXBwZW5kQ2hpbGQoaDEpO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKHApO1xuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGhlcm87XG4gICAgfVxuXG4gICAgY29uc3QgYnVzaW5lc3NEaXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1c2luZXNzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXNpbmVzc0luZm8uY2xhc3NMaXN0LmFkZCgnYnVzaW5lc3MtaW5mbycpO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgdGhlIGFkZHJlc3MgYW5kIGhvdXJzIGRpdlxuICAgICAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy8gYWRkcmVzcyBOb2RlXG4gICAgICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgICAgICBhZGRyZXNzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgIDxzdmcgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIiBNIDUwMCA4OEMgNTY0IDg4IDYyOCAxMDggNjgwIDE0NEMgNzk0IDIyMiA4NDMgMzc5IDc5NCA1MDdDIDc0NCA2MTIgNjkzIDcxNiA2NDMgODIxQyA2MTcgODcwIDYwMSA5MzAgNTQ4IDk1N0MgNDk0IDk4OCA0MjYgOTU2IDM5OCA5MDRDIDM0MCA3ODggMjg1IDY3MCAyMjggNTUzQyAxODcgNDgwIDE3NiAzOTAgMjAxIDMwOUMgMjM3IDE4MiAzNjIgODggNDk0IDg4QyA0OTYgODggNDk4IDg4IDUwMCA4OEMgNTAwIDg4IDUwMCA4OCA1MDAgODhNIDM4NyA0MDBDIDM4NyA0NjIgNDM4IDUxMiA1MDAgNTEyQyA1NjIgNTEyIDYxMyA0NjIgNjEzIDQwMEMgNjEzIDMzOCA1NjIgMjg3IDUwMCAyODdDIDQzOCAyODcgMzg3IDMzOCAzODcgNDAwQyAzODcgNDAwIDM4NyA0MDAgMzg3IDQwMFwiIHRyYW5zZm9ybT1cIlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxwPjEyMzQgTWFpbiBTdCA8YnI+IENpdHksIFN0YXRlIDEyMzQ1PC9wPlxuICAgICAgICBgXG4gICAgICAgIC8vIGhvdXJzIE5vZGVcbiAgICAgICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcbiAgICAgICAgaG91cnMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgPHN2ZyByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTSA1MDAgMEMgMjI0IDAgMCAyMjQgMCA1MDBDIDAgNzc2IDIyNCAxMDAwIDUwMCAxMDAwQyA3NzYgMTAwMCAxMDAwIDc3NiAxMDAwIDUwMEMgMTAwMCAyMjQgNzc2IDAgNTAwIDBDIDUwMCAwIDUwMCAwIDUwMCAwIE0gNTUwIDI1MEMgNTUwIDI1MCA1NTAgNDQ1IDU1MCA0NDVDIDU2NSA0NTggNTc1IDQ3OCA1NzUgNTAwQyA1NzUgNTQxIDU0MSA1NzUgNTAwIDU3NUMgNDk5IDU3NSA0OTcgNTc1IDQ5NiA1NzVDIDQ5NiA1NzUgMjg1IDc4NSAyODUgNzg1QyAyNjYgODA1IDIzNCA4MDYgMjE0IDc4NkMgMTk0IDc2NiAxOTUgNzM0IDIxNSA3MTVDIDIxNSA3MTUgNDI1IDUwNCA0MjUgNTA0QyA0MjUgNTAzIDQyNSA1MDEgNDI1IDUwMEMgNDI1IDQ3OCA0MzUgNDU4IDQ1MCA0NDVDIDQ1MCA0NDUgNDUwIDI1MCA0NTAgMjUwQyA0NTAgMjIyIDQ3MiAyMDAgNDk5IDE5OUMgNTI3IDE5OSA1NTAgMjIyIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDI1MCA1NTAgMjUwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMDAsMCkgc2NhbGUoLTEsMSkgXCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4+TW9uLVRodXJzOjwvc3Bhbj4gOGFtIC0gOHBtIFxuICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5GcmktU3VuOjwvc3Bhbj4gOGFtIC0gMTFwbVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICBgXG4gICAgICAgIGJ1c2luZXNzSW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICAgICAgYnVzaW5lc3NJbmZvLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgICAgICByZXR1cm4gYnVzaW5lc3NJbmZvO1xuICAgIH1cblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVyb0RpdigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1c2luZXNzRGl2KCkpO1xuXG4gICAgcmV0dXJuIG1haW47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge0xvYWRNZW51fSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IHtsb2FkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcblxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgdGl0bGUgaGVhZGVyIFxuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJGb29kIEFwcFwiO1xuICAgIHRpdGxlSGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIG5hdiBiYXJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAvLyBzZXRzIHRoZSBhdHRyaWJ1dGVzIGZvciB0aGUgbmF2IGJhclxuICAgIGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgbWVudUxpbmsudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGhvbWVMaW5rLmhyZWYgPSBcIi4vaW5kZXguaHRtbFwiO1xuICAgIG1lbnVMaW5rLmhyZWYgPSBcIi4vbWVudS5odG1sXCI7XG4gICAgY29udGFjdExpbmsuaHJlZiA9IFwiLi9jb250YWN0Lmh0bWxcIjtcblxuICAgIC8vIGFwcGVuZHMgYSB0YWdzIHRvIHRoZSBsaSB0YWdzIHRvIHRoZSB1bCB0YWdcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcbiAgICB1bC5hcHBlbmRDaGlsZChob21lKTtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgLy8gYXBwZW5kcyB0aGUgdGl0bGUgaGVhZGVyIGFuZCBuYXYgYmFyIHRvIHRoZSBoZWFkZXJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVIZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuLy8gbG9hZHMgdGhlIGhlYWRlciBmb3IgZWFjaCBodG1sIHBhZ2VcbmRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGxvYWRIZWFkZXIoKSwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcblxuaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9pbmRleC5odG1sJykge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG59ZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL21lbnUuaHRtbCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKExvYWRNZW51KCkpO1xufVxuLy8gZWxzZSBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnL2NvbnRhY3QuaHRtbCcpIHtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRDb250YWN0KCkpO1xuLy8gfSIsImNvbnN0IFtoYW1idXJnZXJJbWFnZSwgY2hlZXNlYnVyZ2VySW1hZ2UsIGRvdWJsZUNoZWVzZWJ1cmdlckltYWdlLCBzdGVha0ltYWdlLCByaWJzSW1hZ2UsIGdyaWxsZWRDaGVlc2VJbWFnZSwgY2Flc2FyU2FsYWRJbWFnZSwgZnJlbmNoRnJpZXNJbWFnZSwgY2hlZkltYWdlXSA9WydoYW1idXJnZXIucG5nJywgJ2NoZWVzZWJ1cmdlci5wbmcnLCAnZG91YmxlLWNoZWVzZWJ1cmdlci5wbmcnLCAnc3RlYWsucG5nJywgJ3JpYnMucG5nJywgJ2dyaWxsZWQtY2hlZXNlLnBuZycsICdjYWVzYXItc2FsYWQucG5nJywgJ2ZyZW5jaC1mcmllcy5wbmcnLCAnY2hlZi5wbmcnXS5tYXAoaW1hZ2UgPT4gcmVxdWlyZShgLi4vaW1hZ2VzLyR7aW1hZ2V9YCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZE1lbnUoKXtcbiAgICAvLyBjcmVhdGVzIG1lbnUgY29udGFpbmVyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIG1haW4uaWQgPSAnbWVudSdcblxuICAgIGZ1bmN0aW9uIGhlcm8oKXtcbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgaGVybyBkaXYgXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKVxuXG4gICAgICAgIGNvbnN0IHRleHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gY2hlZkltYWdlXG4gICAgICAgIG5ld0ltYWdlLmFsdCA9IFwiQ2hlZlwiXG4gICAgICAgIG5ld0ltYWdlLndpZHRoID0gNTBcbiAgICAgICAgbmV3SW1hZ2UuaGVpZ2h0ID0gNTBcblxuICAgICAgICB0ZXh0VGFnLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT5NZW51XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bmV3SW1hZ2Uuc3JjfVwiIGFsdD1cIiR7bmV3SW1hZ2UuYWx0fVwiIHdpZHRoPVwiJHtuZXdJbWFnZS53aWR0aH1cIiBoZWlnaHQ9XCIke25ld0ltYWdlLmhlaWdodH1cIj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIGA7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dFRhZyk7XG4gICAgICAgIHJldHVybiBoZXJvRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lbnVDb250YWluZXIoKXtcbiAgICAgICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgaW1hZ2VzID0gW1xuICAgICAgICAgICAgaGFtYnVyZ2VySW1hZ2UsXG4gICAgICAgICAgICBjaGVlc2VidXJnZXJJbWFnZSxcbiAgICAgICAgICAgIGRvdWJsZUNoZWVzZWJ1cmdlckltYWdlLFxuICAgICAgICAgICAgc3RlYWtJbWFnZSxcbiAgICAgICAgICAgIHJpYnNJbWFnZSxcbiAgICAgICAgICAgIGdyaWxsZWRDaGVlc2VJbWFnZSxcbiAgICAgICAgICAgIGNhZXNhclNhbGFkSW1hZ2UsXG4gICAgICAgICAgICBmcmVuY2hGcmllc0ltYWdlLFxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IGZvb2RJdGVtID0gW1xuICAgICAgICAgICBcIkhhbWJ1cmdlclwiLCBcIkNoZWVzZWJ1cmdlclwiLCBcIkRvdWJsZSBDaGVlc2VidXJnZXJcIiwgXCJTdGVha1wiLCBcIkJCUSBSaWJzXCIsXG4gICAgICAgICAgIFwiR3JpbGxlZCBDaGVlc2UgU2FuZHdpY2hcIiwgXCJDZWFzYXIgU2FsYWRcIiwgXCJGcmVuY2ggRnJpZXNcIlxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IHByaWNlcyA9IFtcbiAgICAgICAgICAgIFwiJDIuNDlcIiwgXCIkMi45OVwiLCBcIiQzLjQ5XCIsIFwiJDExLjk5XCIsIFwiJDguOTlcIiwgXCIkNC45OVwiLCBcIiQ3Ljk5XCIsIFwiJDEuOTlcIlxuICAgICAgICBdXG4gICAgICAgIGNvbnN0IHRleHQgPSBbXG4gICAgICAgICAgICBcIkJ1bnMsIHBhdHR5LCB0b21hdG8sIG9uaW9ucywgbGV0dHVjZSwgYW5kIG91ciBzZWNyZXQgZmFtaWx5IHJlY2lwZS5cIixcbiAgICAgICAgICAgIFwiU2ltaWxhciB0byBvdXIgaGFtYnVyZ2VyLCBidXQgd2l0aCBjaGVlc2UuXCIsXG4gICAgICAgICAgICBcIlNpbWlsYXIgdG8gb3VyIGNoZWVzZWJ1cmdlciwgYnV0IHdpdGggYW4gZXh0cmEgcGF0dHkuXCIsXG4gICAgICAgICAgICBcIkEganVpY3kgc3RlYWsgbWFkZSBqdXN0IGhvdyB5b3UgbGlrZSBpdC5cIixcbiAgICAgICAgICAgIFwiQmFyYmVjdWUgcmlicyB3aXRoIHlvdXIgY2hvaWNlIG9mIGEgYWRkLW9ucy5cIixcbiAgICAgICAgICAgIFwiQSB0b2FzdGVkIGFuZCBncmlsbGVkIGNoZWVzZSBzYW5kd2ljaCwgZGlwcGVkIGluIG91ciBzcGVjaWFsIHNhdWNlLlwiLFxuICAgICAgICAgICAgXCJZb3VyIHR5cGljYWwgY2Flc2FyIHNhbGFkIHRoYXQgY29tZXMgd2l0aCB5b3VyIGNob2ljZSBvZiBkcmVzc2luZ3MuXCIsXG4gICAgICAgICAgICBcIlNvbWV0aW1lcyB5b3UgZG9uJ3Qgd2FudCB0byBlYXQgeW91ciBidXJnZXIgYWxvbmUsIHdoeSBub3QgYWRkIHNvbWUgZnJlbmNoIGZyaWVzP1wiLFxuICAgICAgICBdXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyBtZW51IGl0ZW0gY29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgLy8gbWVudSBpdGVtIGltYWdlXG4gICAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZXNbaV1cbiAgICAgICAgICAgIG5ld0ltYWdlLmFsdCA9IGZvb2RJdGVtW2ldXG4gICAgICAgICAgICBuZXdJbWFnZS53aWR0aCA9IDUwXG4gICAgICAgICAgICBuZXdJbWFnZS5oZWlnaHQgPSA1MFxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGVudCcpXG4gICAgICAgICAgICAvLyBpdGVtIG5hbWUgYW5kIHByaWNlXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAke2Zvb2RJdGVtW2ldfVxuICAgICAgICAgICAgICAgIDxzcGFuPiR7cHJpY2VzW2ldfTwvc3Bhbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIC8vIGl0ZW0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGV4dFtpXVxuXG4gICAgICAgICAgICAvLyBhcHBlbmQgYWxsIHRoZSBlbGVtZW50c1xuICAgICAgICAgICAgaXRlbUNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgICAgICAgICBpdGVtQ29udGVudC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pXG5cbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG5ld0ltYWdlKVxuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpXG4gICAgICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZW51Q29udGFpbmVyXG4gICAgfVxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKCkpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKCkpXG5cbiAgICByZXR1cm4gbWFpblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==