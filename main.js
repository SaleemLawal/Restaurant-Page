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
#menu,
#contact{
    height: max-content;
    background-color: var(--cream);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}
#menu h1,
#contact h1{
    font-family: var(--sansita);
    font-size: calc(1.5rem + 2vw);
    color: var(--red-text-color);
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

#menu .menu-container,
#contact .contact-container{
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

/* Contact Page Styling */
.contact-container .content i{
    color: var(--red-text-color);
    float: left;
}
.contact-container .content p{
    font-size: 1rem;
    color: var(--dark-blue);
    margin-left: 2rem;
}
.contact-container .content{
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
}
.contact-container{
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}

/* Form Styling */
form{
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
}
form .input-box{
    margin-top: 1rem;
    width: 100%;
    position: relative;
}
form .input-box span{
    position: absolute;
    left: 0;
    top:0;
    pointer-events: none;
    transition: 0.3s;
    color: #666;
}
form .input-box input:focus ~ span,
form .input-box textarea:focus ~ span,
form .input-box input#name:valid ~ span,
form .input-box textarea#message:valid ~ span,
form .input-box input#email:valid ~ span{
    top: -20px;
    left: 0;
    color: var(--red-text-color);
    font-size: 0.8rem;
}

form .input-box input,
form .input-box textarea{
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    background-color: transparent;
    resize: none;
}
form .input-box input:focus,
form .input-box textarea:focus{
    outline: none;
    border-bottom: 2px solid var(--red-text-color);
}
form input[type="submit"]{
    width: 50%;
    background-color: var(--red-text-color);
    color: var(--cream);
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    margin-top: 0.5rem;
}
form input[type="submit"]:hover{
    background-color: var(--red-text-color-darker);
    cursor: pointer;
}
.map{
    width: 60%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
}
.map iframe{
    width: 100%;
    border: none;
    border-radius: 10px;
}




`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Salsa&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300&display=swap');\n\n\n:root{\n    --dark-blue: rgba(4,47,75,255);\n    --red-text-color: #ee1350;\n    --salsa-font: 'Salsa', cursive;\n    --roboto-font: 'Roboto', sans-serif;\n    --cream: #ede7cf;\n    --hero-text-color: #ef2c58;\n    --dark-cream: #fbc99d;\n    --red-text-color-darker: #c0243f; \n    --sansita: \"Sansita Swashed\", cursive;\n    --food-menu-bg: #ffc7b0;\n}\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    font-family: 'Roboto', sans-serif;\n    height: 100vh;\n}\nheader{\n    min-height: 8%;\n    color: var(--red-text-color);\n    font-family: var(--salsa-font);\n    background-color: var(--dark-blue);\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 0.5rem;\n}\nheader h1{\n    font-size: 3rem;\n}\n\nul li a{\n    color: var(--cream);\n    text-decoration: none;\n    padding: 1rem;\n}\nli{\n    list-style: none;\n    display: inline-block;\n}\n#template-main{\n    color: var(--dark-cream);\n    height: calc(100% - 8%);\n    background: url(../images/food.jpg) no-repeat center center/cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n\n}\n\n.hero h1 {\n    font-size: calc(2rem + 2vw);\n    background: linear-gradient(to right, var(--hero-text-color) 0%, #fbc99d 100%);  \n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n.hero{\n    font-family: var(--salsa-font);\n    width: 50%;\n    text-align: center;\n}\n.hero p{\n    font-size: calc(0.5rem + 1vw);\n}\n.hero .order{\n    background-color: var(--red-text-color);\n    color: var(--cream);\n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n    margin-top: 0.5rem;\n}\n.hero .order:hover{\n    background-color: var(--red-text-color-darker);\n    cursor: pointer;\n}\n#template-main .business-info{\n    background-color: rgb(0, 0, 0, 0.4);\n    width: 35%;\n    height: 25%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 1rem;\n    border-radius: 10px;\n}\n\n.business-info svg{\n    color: var(--red-text-color);\n}\n.business-info i{\n    padding-right: 1rem;\n}\n.business-info p{\n    color: var(--cream);\n    font-size: calc(0.5rem + 0.75vw);\n}\n.business-info .address,\n.business-info .hours{\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n}\n.hours p span{\n    color: var(--red-text-color)\n}\n\n/* Menu Page Styling */\n#menu,\n#contact{\n    height: max-content;\n    background-color: var(--cream);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n}\n#menu h1,\n#contact h1{\n    font-family: var(--sansita);\n    font-size: calc(1.5rem + 2vw);\n    color: var(--red-text-color);\n    margin-top: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n#menu .menu-container,\n#contact .contact-container{\n    width: 75%;\n    background-color: var(--food-menu-bg);\n    border-radius: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    margin-bottom: 5rem;\n}\n#menu .item-content h4{\n    font-family: var(--salsa-font);\n    font-size: calc(1.5rem);\n    color: var(--red-text-color);\n    border-bottom: 1px dashed var(--red-text-color);\n}\n#menu .item-content p{\n    margin-top: 5px;\n    font-size: 1.2rem;\n    color: var(--dark-blue);\n}\n#menu .item-content span{\n    float: right;\n}\n#menu .menu-container .menu-item{\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n#menu .menu-item img{\n    width: calc(5rem + 8vw);\n    height: calc(5rem + 8vw);\n}\n\n/* Contact Page Styling */\n.contact-container .content i{\n    color: var(--red-text-color);\n    float: left;\n}\n.contact-container .content p{\n    font-size: 1rem;\n    color: var(--dark-blue);\n    margin-left: 2rem;\n}\n.contact-container .content{\n    width: 35%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1rem;\n}\n.contact-container{\n    justify-content: space-between;\n    align-items: center;\n    padding: 2rem;\n}\n\n/* Form Styling */\nform{\n    width: fit-content;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1rem;\n}\nform .input-box{\n    margin-top: 1rem;\n    width: 100%;\n    position: relative;\n}\nform .input-box span{\n    position: absolute;\n    left: 0;\n    top:0;\n    pointer-events: none;\n    transition: 0.3s;\n    color: #666;\n}\nform .input-box input:focus ~ span,\nform .input-box textarea:focus ~ span,\nform .input-box input#name:valid ~ span,\nform .input-box textarea#message:valid ~ span,\nform .input-box input#email:valid ~ span{\n    top: -20px;\n    left: 0;\n    color: var(--red-text-color);\n    font-size: 0.8rem;\n}\n\nform .input-box input,\nform .input-box textarea{\n    width: 100%;\n    border: none;\n    border-bottom: 2px solid black;\n    background-color: transparent;\n    resize: none;\n}\nform .input-box input:focus,\nform .input-box textarea:focus{\n    outline: none;\n    border-bottom: 2px solid var(--red-text-color);\n}\nform input[type=\"submit\"]{\n    width: 50%;\n    background-color: var(--red-text-color);\n    color: var(--cream);\n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    font-size: 1rem;\n    margin-top: 0.5rem;\n}\nform input[type=\"submit\"]:hover{\n    background-color: var(--red-text-color-darker);\n    cursor: pointer;\n}\n.map{\n    width: 60%;\n    height: 100%;\n    border-radius: 10px;\n    overflow: hidden;\n}\n.map iframe{\n    width: 100%;\n    border: none;\n    border-radius: 10px;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = `
    <div class="hero">
        <h1>Contact Us</h1>
    </div>

    <div class="contact-container">
        <div class="content">
            <div class="location">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path>
                    </svg>
                </i>
                <p>1234 Main St <br> City, State 12345</p>
            </div>
            <div class="hours">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path>
                    </svg>
                </i>
                <p>
                    Mon-Thurs: 8am - 8pm 
                    <br>
                    Fri-Sun:8am - 11pm
                </p>
            </div>
            <div class="phone">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 640 179C 640 179 640 179 640 179C 662 156 692 140 724 139C 763 140 796 169 823 195C 853 222 865 262 859 301C 847 538 676 751 455 830C 391 851 323 870 254 861C 206 844 160 809 137 763C 129 729 145 692 169 668C 210 642 258 633 303 617C 355 600 404 631 446 658C 481 651 512 619 541 595C 590 550 632 495 657 431C 623 412 587 373 597 334C 605 281 614 226 640 179" transform="rotate(90, 500, 500) "></path>
                    </svg>
                </i>
                <p>
                    (222)-888 5555
                </p>
            </div>
            <form action="">
                <div>
                    <i>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 900 163C 934 163 962 191 962 225C 962 225 962 305 962 305C 962 305 579 569 579 569C 545 592 521 600 500 600C 479 600 455 592 421 569C 421 569 38 305 38 305C 38 305 38 225 38 225C 38 191 66 163 100 163C 100 163 900 163 900 163M 379 631C 379 631 379 631 379 631C 420 658 459 675 500 675C 541 675 580 658 621 631C 621 631 621 631 621 631C 621 631 962 396 962 396C 962 396 962 800 962 800C 962 834 934 862 900 862C 900 862 100 862 100 862C 66 862 38 834 38 800C 38 800 38 396 38 396C 38 396 379 631 379 631" transform=""></path></svg>
                    </i>
                    <p>Message Us</p>
                </div>
                <div class="input-box">
                    <input type="text" id="name" required>
                    <span>Full Name</span>
                </div>

                <div class="input-box ">
                    <input type="text" id="email" required>
                    <span>Email</span>
                </div>

                <div class="input-box">
                    <textarea name="" id="message" cols="30" rows="10"></textarea>
                    <span>Message</span>
                </div>

                <input type="submit" value="send">
            </form>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6178.896223206294!2d-76.71587040261835!3d39.255398094309555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81db59abc4bcb%3A0x7119b4daadb403d!2sUniversity%20of%20Maryland%2C%20Baltimore%20County!5e0!3m2!1sen!2sus!4v1705075776264!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    `
    return main;
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
}else if (window.location.pathname === '/contact.html') {
    document.body.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContact)());
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsZ0hBQXFDO0FBQ2pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLCtCQUErQjtBQUM5SSxzSUFBc0k7QUFDdEkseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLFNBQVMsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0s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QUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXJXO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixhQUFhLFNBQVMsYUFBYSxXQUFXLGVBQWUsWUFBWSxnQkFBZ0I7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdC9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHQvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHQvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2Zvb2QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmZhbWlseT1TYWxzYSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1kYXJrLWJsdWU6IHJnYmEoNCw0Nyw3NSwyNTUpO1xuICAgIC0tcmVkLXRleHQtY29sb3I6ICNlZTEzNTA7XG4gICAgLS1zYWxzYS1mb250OiAnU2Fsc2EnLCBjdXJzaXZlO1xuICAgIC0tcm9ib3RvLWZvbnQ6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIC0tY3JlYW06ICNlZGU3Y2Y7XG4gICAgLS1oZXJvLXRleHQtY29sb3I6ICNlZjJjNTg7XG4gICAgLS1kYXJrLWNyZWFtOiAjZmJjOTlkO1xuICAgIC0tcmVkLXRleHQtY29sb3ItZGFya2VyOiAjYzAyNDNmOyBcbiAgICAtLXNhbnNpdGE6IFwiU2Fuc2l0YSBTd2FzaGVkXCIsIGN1cnNpdmU7XG4gICAgLS1mb29kLW1lbnUtYmc6ICNmZmM3YjA7XG59XG4qe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5oZWFkZXJ7XG4gICAgbWluLWhlaWdodDogOCU7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuaGVhZGVyIGgxe1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxudWwgbGkgYXtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxubGl7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jdGVtcGxhdGUtbWFpbntcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jcmVhbSk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4JSk7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcblxufVxuXG4uaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAydncpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0taGVyby10ZXh0LWNvbG9yKSAwJSwgI2ZiYzk5ZCAxMDAlKTsgIFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uaGVyb3tcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fsc2EtZm9udCk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVybyBwe1xuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAxdncpO1xufVxuLmhlcm8gLm9yZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5oZXJvIC5vcmRlcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvci1kYXJrZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0ZW1wbGF0ZS1tYWluIC5idXNpbmVzcy1pbmZve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjQpO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idXNpbmVzcy1pbmZvIHN2Z3tcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xufVxuLmJ1c2luZXNzLWluZm8gaXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuLmJ1c2luZXNzLWluZm8gcHtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIGZvbnQtc2l6ZTogY2FsYygwLjVyZW0gKyAwLjc1dncpO1xufVxuLmJ1c2luZXNzLWluZm8gLmFkZHJlc3MsXG4uYnVzaW5lc3MtaW5mbyAuaG91cnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4uaG91cnMgcCBzcGFue1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcilcbn1cblxuLyogTWVudSBQYWdlIFN0eWxpbmcgKi9cbiNtZW51LFxuI2NvbnRhY3R7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzcmVtO1xufVxuI21lbnUgaDEsXG4jY29udGFjdCBoMXtcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fuc2l0YSk7XG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDJ2dyk7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4jbWVudSAubWVudS1jb250YWluZXIsXG4jY29udGFjdCAuY29udGFjdC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb29kLW1lbnUtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cbiNtZW51IC5pdGVtLWNvbnRlbnQgaDR7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXNhbHNhLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0pO1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XG59XG4jbWVudSAuaXRlbS1jb250ZW50IHB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xufVxuI21lbnUgLml0ZW0tY29udGVudCBzcGFue1xuICAgIGZsb2F0OiByaWdodDtcbn1cbiNtZW51IC5tZW51LWNvbnRhaW5lciAubWVudS1pdGVte1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cbiNtZW51IC5tZW51LWl0ZW0gaW1ne1xuICAgIHdpZHRoOiBjYWxjKDVyZW0gKyA4dncpO1xuICAgIGhlaWdodDogY2FsYyg1cmVtICsgOHZ3KTtcbn1cblxuLyogQ29udGFjdCBQYWdlIFN0eWxpbmcgKi9cbi5jb250YWN0LWNvbnRhaW5lciAuY29udGVudCBpe1xuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRlbnQgcHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4uY29udGFjdC1jb250YWluZXIgLmNvbnRlbnR7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMXJlbTtcbn1cbi5jb250YWN0LWNvbnRhaW5lcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xufVxuXG4vKiBGb3JtIFN0eWxpbmcgKi9cbmZvcm17XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxcmVtO1xufVxuZm9ybSAuaW5wdXQtYm94e1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZm9ybSAuaW5wdXQtYm94IHNwYW57XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOjA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBjb2xvcjogIzY2Njtcbn1cbmZvcm0gLmlucHV0LWJveCBpbnB1dDpmb2N1cyB+IHNwYW4sXG5mb3JtIC5pbnB1dC1ib3ggdGV4dGFyZWE6Zm9jdXMgfiBzcGFuLFxuZm9ybSAuaW5wdXQtYm94IGlucHV0I25hbWU6dmFsaWQgfiBzcGFuLFxuZm9ybSAuaW5wdXQtYm94IHRleHRhcmVhI21lc3NhZ2U6dmFsaWQgfiBzcGFuLFxuZm9ybSAuaW5wdXQtYm94IGlucHV0I2VtYWlsOnZhbGlkIH4gc3BhbntcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuZm9ybSAuaW5wdXQtYm94IGlucHV0LFxuZm9ybSAuaW5wdXQtYm94IHRleHRhcmVhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcmVzaXplOiBub25lO1xufVxuZm9ybSAuaW5wdXQtYm94IGlucHV0OmZvY3VzLFxuZm9ybSAuaW5wdXQtYm94IHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbn1cbmZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbmZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvci1kYXJrZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1hcCBpZnJhbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFl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SUFFSSxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwJmZhbWlseT1TYWxzYSZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5zaXRhK1N3YXNoZWQ6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuOnJvb3R7XFxuICAgIC0tZGFyay1ibHVlOiByZ2JhKDQsNDcsNzUsMjU1KTtcXG4gICAgLS1yZWQtdGV4dC1jb2xvcjogI2VlMTM1MDtcXG4gICAgLS1zYWxzYS1mb250OiAnU2Fsc2EnLCBjdXJzaXZlO1xcbiAgICAtLXJvYm90by1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgLS1jcmVhbTogI2VkZTdjZjtcXG4gICAgLS1oZXJvLXRleHQtY29sb3I6ICNlZjJjNTg7XFxuICAgIC0tZGFyay1jcmVhbTogI2ZiYzk5ZDtcXG4gICAgLS1yZWQtdGV4dC1jb2xvci1kYXJrZXI6ICNjMDI0M2Y7IFxcbiAgICAtLXNhbnNpdGE6IFxcXCJTYW5zaXRhIFN3YXNoZWRcXFwiLCBjdXJzaXZlO1xcbiAgICAtLWZvb2QtbWVudS1iZzogI2ZmYzdiMDtcXG59XFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbmhlYWRlcntcXG4gICAgbWluLWhlaWdodDogOCU7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbnVsIGxpIGF7XFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI3RlbXBsYXRlLW1haW57XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNyZWFtKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4JSk7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvZm9vZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcblxcbn1cXG5cXG4uaGVybyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMnZ3KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1oZXJvLXRleHQtY29sb3IpIDAlLCAjZmJjOTlkIDEwMCUpOyAgXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmhlcm97XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVybyBwe1xcbiAgICBmb250LXNpemU6IGNhbGMoMC41cmVtICsgMXZ3KTtcXG59XFxuLmhlcm8gLm9yZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5oZXJvIC5vcmRlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3ItZGFya2VyKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdGVtcGxhdGUtbWFpbiAuYnVzaW5lc3MtaW5mb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNCk7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5idXNpbmVzcy1pbmZvIHN2Z3tcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG59XFxuLmJ1c2luZXNzLWluZm8gaXtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLmJ1c2luZXNzLWluZm8gcHtcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNXJlbSArIDAuNzV2dyk7XFxufVxcbi5idXNpbmVzcy1pbmZvIC5hZGRyZXNzLFxcbi5idXNpbmVzcy1pbmZvIC5ob3Vyc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmhvdXJzIHAgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKVxcbn1cXG5cXG4vKiBNZW51IFBhZ2UgU3R5bGluZyAqL1xcbiNtZW51LFxcbiNjb250YWN0e1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxufVxcbiNtZW51IGgxLFxcbiNjb250YWN0IGgxe1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Fuc2l0YSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAydncpO1xcbiAgICBjb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4jbWVudSAubWVudS1jb250YWluZXIsXFxuI2NvbnRhY3QgLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb29kLW1lbnUtYmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxufVxcbiNtZW51IC5pdGVtLWNvbnRlbnQgaDR7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zYWxzYS1mb250KTtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbn1cXG4jbWVudSAuaXRlbS1jb250ZW50IHB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG4jbWVudSAuaXRlbS1jb250ZW50IHNwYW57XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuI21lbnUgLm1lbnUtY29udGFpbmVyIC5tZW51LWl0ZW17XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4jbWVudSAubWVudS1pdGVtIGltZ3tcXG4gICAgd2lkdGg6IGNhbGMoNXJlbSArIDh2dyk7XFxuICAgIGhlaWdodDogY2FsYyg1cmVtICsgOHZ3KTtcXG59XFxuXFxuLyogQ29udGFjdCBQYWdlIFN0eWxpbmcgKi9cXG4uY29udGFjdC1jb250YWluZXIgLmNvbnRlbnQgaXtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5jb250YWN0LWNvbnRhaW5lciAuY29udGVudCBwe1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVyIC5jb250ZW50e1xcbiAgICB3aWR0aDogMzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLmNvbnRhY3QtY29udGFpbmVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi8qIEZvcm0gU3R5bGluZyAqL1xcbmZvcm17XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbmZvcm0gLmlucHV0LWJveHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuZm9ybSAuaW5wdXQtYm94IHNwYW57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOjA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuZm9ybSAuaW5wdXQtYm94IGlucHV0OmZvY3VzIH4gc3BhbixcXG5mb3JtIC5pbnB1dC1ib3ggdGV4dGFyZWE6Zm9jdXMgfiBzcGFuLFxcbmZvcm0gLmlucHV0LWJveCBpbnB1dCNuYW1lOnZhbGlkIH4gc3BhbixcXG5mb3JtIC5pbnB1dC1ib3ggdGV4dGFyZWEjbWVzc2FnZTp2YWxpZCB+IHNwYW4sXFxuZm9ybSAuaW5wdXQtYm94IGlucHV0I2VtYWlsOnZhbGlkIH4gc3BhbntcXG4gICAgdG9wOiAtMjBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbmZvcm0gLmlucHV0LWJveCBpbnB1dCxcXG5mb3JtIC5pbnB1dC1ib3ggdGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuZm9ybSAuaW5wdXQtYm94IGlucHV0OmZvY3VzLFxcbmZvcm0gLmlucHV0LWJveCB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXJlZC10ZXh0LWNvbG9yKTtcXG59XFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXRleHQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5mb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdGV4dC1jb2xvci1kYXJrZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tYXB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1hcCBpZnJhbWV7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuL2NhZXNhci1zYWxhZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvY2Flc2FyLXNhbGFkLnBuZ1wiLFxuXHRcIi4vY2hlZXNlYnVyZ2VyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jaGVlc2VidXJnZXIucG5nXCIsXG5cdFwiLi9jaGVmLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9jaGVmLnBuZ1wiLFxuXHRcIi4vZG91YmxlLWNoZWVzZWJ1cmdlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZG91YmxlLWNoZWVzZWJ1cmdlci5wbmdcIixcblx0XCIuL2Zvb2QuanBnXCI6IFwiLi9zcmMvaW1hZ2VzL2Zvb2QuanBnXCIsXG5cdFwiLi9mcmVuY2gtZnJpZXMucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2ZyZW5jaC1mcmllcy5wbmdcIixcblx0XCIuL2dyaWxsZWQtY2hlZXNlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9ncmlsbGVkLWNoZWVzZS5wbmdcIixcblx0XCIuL2hhbWJ1cmdlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiLFxuXHRcIi4vcmlicy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmlicy5wbmdcIixcblx0XCIuL3N0ZWFrLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9zdGVhay5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVyb1wiPlxuICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA1MDAgODhDIDU2NCA4OCA2MjggMTA4IDY4MCAxNDRDIDc5NCAyMjIgODQzIDM3OSA3OTQgNTA3QyA3NDQgNjEyIDY5MyA3MTYgNjQzIDgyMUMgNjE3IDg3MCA2MDEgOTMwIDU0OCA5NTdDIDQ5NCA5ODggNDI2IDk1NiAzOTggOTA0QyAzNDAgNzg4IDI4NSA2NzAgMjI4IDU1M0MgMTg3IDQ4MCAxNzYgMzkwIDIwMSAzMDlDIDIzNyAxODIgMzYyIDg4IDQ5NCA4OEMgNDk2IDg4IDQ5OCA4OCA1MDAgODhDIDUwMCA4OCA1MDAgODggNTAwIDg4TSAzODcgNDAwQyAzODcgNDYyIDQzOCA1MTIgNTAwIDUxMkMgNTYyIDUxMiA2MTMgNDYyIDYxMyA0MDBDIDYxMyAzMzggNTYyIDI4NyA1MDAgMjg3QyA0MzggMjg3IDM4NyAzMzggMzg3IDQwMEMgMzg3IDQwMCAzODcgNDAwIDM4NyA0MDBcIiB0cmFuc2Zvcm09XCJcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8cD4xMjM0IE1haW4gU3QgPGJyPiBDaXR5LCBTdGF0ZSAxMjM0NTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJzXCI+XG4gICAgICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0gNTAwIDBDIDIyNCAwIDAgMjI0IDAgNTAwQyAwIDc3NiAyMjQgMTAwMCA1MDAgMTAwMEMgNzc2IDEwMDAgMTAwMCA3NzYgMTAwMCA1MDBDIDEwMDAgMjI0IDc3NiAwIDUwMCAwQyA1MDAgMCA1MDAgMCA1MDAgMCBNIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDQ0NSA1NTAgNDQ1QyA1NjUgNDU4IDU3NSA0NzggNTc1IDUwMEMgNTc1IDU0MSA1NDEgNTc1IDUwMCA1NzVDIDQ5OSA1NzUgNDk3IDU3NSA0OTYgNTc1QyA0OTYgNTc1IDI4NSA3ODUgMjg1IDc4NUMgMjY2IDgwNSAyMzQgODA2IDIxNCA3ODZDIDE5NCA3NjYgMTk1IDczNCAyMTUgNzE1QyAyMTUgNzE1IDQyNSA1MDQgNDI1IDUwNEMgNDI1IDUwMyA0MjUgNTAxIDQyNSA1MDBDIDQyNSA0NzggNDM1IDQ1OCA0NTAgNDQ1QyA0NTAgNDQ1IDQ1MCAyNTAgNDUwIDI1MEMgNDUwIDIyMiA0NzIgMjAwIDQ5OSAxOTlDIDUyNyAxOTkgNTUwIDIyMiA1NTAgMjUwQyA1NTAgMjUwIDU1MCAyNTAgNTUwIDI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAwLDApIHNjYWxlKC0xLDEpIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBNb24tVGh1cnM6IDhhbSAtIDhwbSBcbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICBGcmktU3VuOjhhbSAtIDExcG1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaG9uZVwiPlxuICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA2NDAgMTc5QyA2NDAgMTc5IDY0MCAxNzkgNjQwIDE3OUMgNjYyIDE1NiA2OTIgMTQwIDcyNCAxMzlDIDc2MyAxNDAgNzk2IDE2OSA4MjMgMTk1QyA4NTMgMjIyIDg2NSAyNjIgODU5IDMwMUMgODQ3IDUzOCA2NzYgNzUxIDQ1NSA4MzBDIDM5MSA4NTEgMzIzIDg3MCAyNTQgODYxQyAyMDYgODQ0IDE2MCA4MDkgMTM3IDc2M0MgMTI5IDcyOSAxNDUgNjkyIDE2OSA2NjhDIDIxMCA2NDIgMjU4IDYzMyAzMDMgNjE3QyAzNTUgNjAwIDQwNCA2MzEgNDQ2IDY1OEMgNDgxIDY1MSA1MTIgNjE5IDU0MSA1OTVDIDU5MCA1NTAgNjMyIDQ5NSA2NTcgNDMxQyA2MjMgNDEyIDU4NyAzNzMgNTk3IDMzNEMgNjA1IDI4MSA2MTQgMjI2IDY0MCAxNzlcIiB0cmFuc2Zvcm09XCJyb3RhdGUoOTAsIDUwMCwgNTAwKSBcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgKDIyMiktODg4IDU1NTVcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwMG1tXCIgaGVpZ2h0PVwiMTAwMG1tXCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBzdHlsZT1cIndpZHRoOjEuMzNlbTsgaGVpZ2h0OjEuMzNlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjxwYXRoIGlkPVwicGF0aFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiIE0gOTAwIDE2M0MgOTM0IDE2MyA5NjIgMTkxIDk2MiAyMjVDIDk2MiAyMjUgOTYyIDMwNSA5NjIgMzA1QyA5NjIgMzA1IDU3OSA1NjkgNTc5IDU2OUMgNTQ1IDU5MiA1MjEgNjAwIDUwMCA2MDBDIDQ3OSA2MDAgNDU1IDU5MiA0MjEgNTY5QyA0MjEgNTY5IDM4IDMwNSAzOCAzMDVDIDM4IDMwNSAzOCAyMjUgMzggMjI1QyAzOCAxOTEgNjYgMTYzIDEwMCAxNjNDIDEwMCAxNjMgOTAwIDE2MyA5MDAgMTYzTSAzNzkgNjMxQyAzNzkgNjMxIDM3OSA2MzEgMzc5IDYzMUMgNDIwIDY1OCA0NTkgNjc1IDUwMCA2NzVDIDU0MSA2NzUgNTgwIDY1OCA2MjEgNjMxQyA2MjEgNjMxIDYyMSA2MzEgNjIxIDYzMUMgNjIxIDYzMSA5NjIgMzk2IDk2MiAzOTZDIDk2MiAzOTYgOTYyIDgwMCA5NjIgODAwQyA5NjIgODM0IDkzNCA4NjIgOTAwIDg2MkMgOTAwIDg2MiAxMDAgODYyIDEwMCA4NjJDIDY2IDg2MiAzOCA4MzQgMzggODAwQyAzOCA4MDAgMzggMzk2IDM4IDM5NkMgMzggMzk2IDM3OSA2MzEgMzc5IDYzMVwiIHRyYW5zZm9ybT1cIlwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8cD5NZXNzYWdlIFVzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkZ1bGwgTmFtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3ggXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiXCIgaWQ9XCJtZXNzYWdlXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TWVzc2FnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzZW5kXCI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFwXCI+XG4gICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDYxNzguODk2MjIzMjA2Mjk0ITJkLTc2LjcxNTg3MDQwMjYxODM1ITNkMzkuMjU1Mzk4MDk0MzA5NTU1ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWM4MWRiNTlhYmM0YmNiJTNBMHg3MTE5YjRkYWFkYjQwM2QhMnNVbml2ZXJzaXR5JTIwb2YlMjBNYXJ5bGFuZCUyQyUyMEJhbHRpbW9yZSUyMENvdW50eSE1ZTAhM20yITFzZW4hMnN1cyE0djE3MDUwNzU3NzYyNjQhNW0yITFzZW4hMnN1c1wiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICBgXG4gICAgcmV0dXJuIG1haW47XG59XG4iLCJmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICAvLyBjcmVhdGVzIHRoZSBtYWluIHRhZyBhbmQgc2V0IHRoZSBlbGVtZW50IGlkIHRvIHRlbXBsYXRlLW1haW5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uaWQgPSBcInRlbXBsYXRlLW1haW5cIjtcblxuICAgIGNvbnN0IGhlcm9EaXYgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9IFwiQ29tZSBvbiBkb3duIGZvciBzb21lIGRlbGljaW91cyBjdWlzaW5lIVwiO1xuXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBcIlRhc3R5IGFuZCBhZmZvcmRhYmxlIVwiO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnb3JkZXInKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcblxuICAgICAgICBoZXJvLmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgaGVyby5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIHJldHVybiBoZXJvO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1c2luZXNzRGl2ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBidXNpbmVzc0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVzaW5lc3NJbmZvLmNsYXNzTGlzdC5hZGQoJ2J1c2luZXNzLWluZm8nKTtcblxuICAgICAgICAvLyBjcmVhdGVzIHRoZSBhZGRyZXNzIGFuZCBob3VycyBkaXZcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vIGFkZHJlc3MgTm9kZVxuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgICAgICAgYWRkcmVzcy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aT5cbiAgICAgICAgICAgICAgICA8c3ZnIHJvbGU9XCJpbWdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMDAwbW1cIiBoZWlnaHQ9XCIxMDAwbW1cIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHN0eWxlPVwid2lkdGg6MS4zM2VtOyBoZWlnaHQ6MS4zM2VtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PHBhdGggaWQ9XCJwYXRoXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCIgTSA1MDAgODhDIDU2NCA4OCA2MjggMTA4IDY4MCAxNDRDIDc5NCAyMjIgODQzIDM3OSA3OTQgNTA3QyA3NDQgNjEyIDY5MyA3MTYgNjQzIDgyMUMgNjE3IDg3MCA2MDEgOTMwIDU0OCA5NTdDIDQ5NCA5ODggNDI2IDk1NiAzOTggOTA0QyAzNDAgNzg4IDI4NSA2NzAgMjI4IDU1M0MgMTg3IDQ4MCAxNzYgMzkwIDIwMSAzMDlDIDIzNyAxODIgMzYyIDg4IDQ5NCA4OEMgNDk2IDg4IDQ5OCA4OCA1MDAgODhDIDUwMCA4OCA1MDAgODggNTAwIDg4TSAzODcgNDAwQyAzODcgNDYyIDQzOCA1MTIgNTAwIDUxMkMgNTYyIDUxMiA2MTMgNDYyIDYxMyA0MDBDIDYxMyAzMzggNTYyIDI4NyA1MDAgMjg3QyA0MzggMjg3IDM4NyAzMzggMzg3IDQwMEMgMzg3IDQwMCAzODcgNDAwIDM4NyA0MDBcIiB0cmFuc2Zvcm09XCJcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8cD4xMjM0IE1haW4gU3QgPGJyPiBDaXR5LCBTdGF0ZSAxMjM0NTwvcD5cbiAgICAgICAgYFxuICAgICAgICAvLyBob3VycyBOb2RlXG4gICAgICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgICAgIGhvdXJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpPlxuICAgICAgICAgICAgICAgIDxzdmcgcm9sZT1cImltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEwMDBtbVwiIGhlaWdodD1cIjEwMDBtbVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgc3R5bGU9XCJ3aWR0aDoxLjMzZW07IGhlaWdodDoxLjMzZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48cGF0aCBpZD1cInBhdGhcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0gNTAwIDBDIDIyNCAwIDAgMjI0IDAgNTAwQyAwIDc3NiAyMjQgMTAwMCA1MDAgMTAwMEMgNzc2IDEwMDAgMTAwMCA3NzYgMTAwMCA1MDBDIDEwMDAgMjI0IDc3NiAwIDUwMCAwQyA1MDAgMCA1MDAgMCA1MDAgMCBNIDU1MCAyNTBDIDU1MCAyNTAgNTUwIDQ0NSA1NTAgNDQ1QyA1NjUgNDU4IDU3NSA0NzggNTc1IDUwMEMgNTc1IDU0MSA1NDEgNTc1IDUwMCA1NzVDIDQ5OSA1NzUgNDk3IDU3NSA0OTYgNTc1QyA0OTYgNTc1IDI4NSA3ODUgMjg1IDc4NUMgMjY2IDgwNSAyMzQgODA2IDIxNCA3ODZDIDE5NCA3NjYgMTk1IDczNCAyMTUgNzE1QyAyMTUgNzE1IDQyNSA1MDQgNDI1IDUwNEMgNDI1IDUwMyA0MjUgNTAxIDQyNSA1MDBDIDQyNSA0NzggNDM1IDQ1OCA0NTAgNDQ1QyA0NTAgNDQ1IDQ1MCAyNTAgNDUwIDI1MEMgNDUwIDIyMiA0NzIgMjAwIDQ5OSAxOTlDIDUyNyAxOTkgNTUwIDIyMiA1NTAgMjUwQyA1NTAgMjUwIDU1MCAyNTAgNTUwIDI1MFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDAwLDApIHNjYWxlKC0xLDEpIFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzcGFuPk1vbi1UaHVyczo8L3NwYW4+IDhhbSAtIDhwbSBcbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPHNwYW4+RnJpLVN1bjo8L3NwYW4+IDhhbSAtIDExcG1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgYFxuICAgICAgICBidXNpbmVzc0luZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgICAgIGJ1c2luZXNzSW5mby5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAgICAgcmV0dXJuIGJ1c2luZXNzSW5mbztcbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm9EaXYoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChidXNpbmVzc0RpdigpKTtcblxuICAgIHJldHVybiBtYWluO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcydcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHtMb2FkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7bG9hZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIHRpdGxlIGhlYWRlciBcbiAgICBjb25zdCB0aXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiRm9vZCBBcHBcIjtcbiAgICB0aXRsZUhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICAvLyBjcmVhdGVzIHRoZSBuYXYgYmFyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgLy8gc2V0cyB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIG5hdiBiYXJcbiAgICBob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBob21lTGluay5ocmVmID0gXCIuL2luZGV4Lmh0bWxcIjtcbiAgICBtZW51TGluay5ocmVmID0gXCIuL21lbnUuaHRtbFwiO1xuICAgIGNvbnRhY3RMaW5rLmhyZWYgPSBcIi4vY29udGFjdC5odG1sXCI7XG5cbiAgICAvLyBhcHBlbmRzIGEgdGFncyB0byB0aGUgbGkgdGFncyB0byB0aGUgdWwgdGFnXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKHVsKTtcblxuICAgIC8vIGFwcGVuZHMgdGhlIHRpdGxlIGhlYWRlciBhbmQgbmF2IGJhciB0byB0aGUgaGVhZGVyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbi8vIGxvYWRzIHRoZSBoZWFkZXIgZm9yIGVhY2ggaHRtbCBwYWdlXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShsb2FkSGVhZGVyKCksIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbmlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvaW5kZXguaHRtbCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRIb21lKCkpO1xufWVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9tZW51Lmh0bWwnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChMb2FkTWVudSgpKTtcbn1lbHNlIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09ICcvY29udGFjdC5odG1sJykge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XG59IiwiY29uc3QgW2hhbWJ1cmdlckltYWdlLCBjaGVlc2VidXJnZXJJbWFnZSwgZG91YmxlQ2hlZXNlYnVyZ2VySW1hZ2UsIHN0ZWFrSW1hZ2UsIHJpYnNJbWFnZSwgZ3JpbGxlZENoZWVzZUltYWdlLCBjYWVzYXJTYWxhZEltYWdlLCBmcmVuY2hGcmllc0ltYWdlLCBjaGVmSW1hZ2VdID1bJ2hhbWJ1cmdlci5wbmcnLCAnY2hlZXNlYnVyZ2VyLnBuZycsICdkb3VibGUtY2hlZXNlYnVyZ2VyLnBuZycsICdzdGVhay5wbmcnLCAncmlicy5wbmcnLCAnZ3JpbGxlZC1jaGVlc2UucG5nJywgJ2NhZXNhci1zYWxhZC5wbmcnLCAnZnJlbmNoLWZyaWVzLnBuZycsICdjaGVmLnBuZyddLm1hcChpbWFnZSA9PiByZXF1aXJlKGAuLi9pbWFnZXMvJHtpbWFnZX1gKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkTWVudSgpe1xuICAgIC8vIGNyZWF0ZXMgbWVudSBjb250YWluZXJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5pZCA9ICdtZW51J1xuXG4gICAgZnVuY3Rpb24gaGVybygpe1xuICAgICAgICAvLyBjcmVhdGVzIHRoZSBoZXJvIGRpdiBcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpXG5cbiAgICAgICAgY29uc3QgdGV4dFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cbiAgICAgICAgY29uc3QgbmV3SW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBuZXdJbWFnZS5zcmMgPSBjaGVmSW1hZ2VcbiAgICAgICAgbmV3SW1hZ2UuYWx0ID0gXCJDaGVmXCJcbiAgICAgICAgbmV3SW1hZ2Uud2lkdGggPSA1MFxuICAgICAgICBuZXdJbWFnZS5oZWlnaHQgPSA1MFxuXG4gICAgICAgIHRleHRUYWcuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgxPk1lbnVcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtuZXdJbWFnZS5zcmN9XCIgYWx0PVwiJHtuZXdJbWFnZS5hbHR9XCIgd2lkdGg9XCIke25ld0ltYWdlLndpZHRofVwiIGhlaWdodD1cIiR7bmV3SW1hZ2UuaGVpZ2h0fVwiPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgYDtcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0VGFnKTtcbiAgICAgICAgcmV0dXJuIGhlcm9EaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVudUNvbnRhaW5lcigpe1xuICAgICAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJylcblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBbXG4gICAgICAgICAgICBoYW1idXJnZXJJbWFnZSxcbiAgICAgICAgICAgIGNoZWVzZWJ1cmdlckltYWdlLFxuICAgICAgICAgICAgZG91YmxlQ2hlZXNlYnVyZ2VySW1hZ2UsXG4gICAgICAgICAgICBzdGVha0ltYWdlLFxuICAgICAgICAgICAgcmlic0ltYWdlLFxuICAgICAgICAgICAgZ3JpbGxlZENoZWVzZUltYWdlLFxuICAgICAgICAgICAgY2Flc2FyU2FsYWRJbWFnZSxcbiAgICAgICAgICAgIGZyZW5jaEZyaWVzSW1hZ2UsXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgZm9vZEl0ZW0gPSBbXG4gICAgICAgICAgIFwiSGFtYnVyZ2VyXCIsIFwiQ2hlZXNlYnVyZ2VyXCIsIFwiRG91YmxlIENoZWVzZWJ1cmdlclwiLCBcIlN0ZWFrXCIsIFwiQkJRIFJpYnNcIixcbiAgICAgICAgICAgXCJHcmlsbGVkIENoZWVzZSBTYW5kd2ljaFwiLCBcIkNlYXNhciBTYWxhZFwiLCBcIkZyZW5jaCBGcmllc1wiXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgcHJpY2VzID0gW1xuICAgICAgICAgICAgXCIkMi40OVwiLCBcIiQyLjk5XCIsIFwiJDMuNDlcIiwgXCIkMTEuOTlcIiwgXCIkOC45OVwiLCBcIiQ0Ljk5XCIsIFwiJDcuOTlcIiwgXCIkMS45OVwiXG4gICAgICAgIF1cbiAgICAgICAgY29uc3QgdGV4dCA9IFtcbiAgICAgICAgICAgIFwiQnVucywgcGF0dHksIHRvbWF0bywgb25pb25zLCBsZXR0dWNlLCBhbmQgb3VyIHNlY3JldCBmYW1pbHkgcmVjaXBlLlwiLFxuICAgICAgICAgICAgXCJTaW1pbGFyIHRvIG91ciBoYW1idXJnZXIsIGJ1dCB3aXRoIGNoZWVzZS5cIixcbiAgICAgICAgICAgIFwiU2ltaWxhciB0byBvdXIgY2hlZXNlYnVyZ2VyLCBidXQgd2l0aCBhbiBleHRyYSBwYXR0eS5cIixcbiAgICAgICAgICAgIFwiQSBqdWljeSBzdGVhayBtYWRlIGp1c3QgaG93IHlvdSBsaWtlIGl0LlwiLFxuICAgICAgICAgICAgXCJCYXJiZWN1ZSByaWJzIHdpdGggeW91ciBjaG9pY2Ugb2YgYSBhZGQtb25zLlwiLFxuICAgICAgICAgICAgXCJBIHRvYXN0ZWQgYW5kIGdyaWxsZWQgY2hlZXNlIHNhbmR3aWNoLCBkaXBwZWQgaW4gb3VyIHNwZWNpYWwgc2F1Y2UuXCIsXG4gICAgICAgICAgICBcIllvdXIgdHlwaWNhbCBjYWVzYXIgc2FsYWQgdGhhdCBjb21lcyB3aXRoIHlvdXIgY2hvaWNlIG9mIGRyZXNzaW5ncy5cIixcbiAgICAgICAgICAgIFwiU29tZXRpbWVzIHlvdSBkb24ndCB3YW50IHRvIGVhdCB5b3VyIGJ1cmdlciBhbG9uZSwgd2h5IG5vdCBhZGQgc29tZSBmcmVuY2ggZnJpZXM/XCIsXG4gICAgICAgIF1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpY2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vIG1lbnUgaXRlbSBjb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgICAgICAgICAvLyBtZW51IGl0ZW0gaW1hZ2VcbiAgICAgICAgICAgIGNvbnN0IG5ld0ltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlc1tpXVxuICAgICAgICAgICAgbmV3SW1hZ2UuYWx0ID0gZm9vZEl0ZW1baV1cbiAgICAgICAgICAgIG5ld0ltYWdlLndpZHRoID0gNTBcbiAgICAgICAgICAgIG5ld0ltYWdlLmhlaWdodCA9IDUwXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgaXRlbUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250ZW50JylcbiAgICAgICAgICAgIC8vIGl0ZW0gbmFtZSBhbmQgcHJpY2VcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICR7Zm9vZEl0ZW1baV19XG4gICAgICAgICAgICAgICAgPHNwYW4+JHtwcmljZXNbaV19PC9zcGFuPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgLy8gaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0W2ldXG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCBhbGwgdGhlIGVsZW1lbnRzXG4gICAgICAgICAgICBpdGVtQ29udGVudC5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgICAgICAgIGl0ZW1Db250ZW50LmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbilcblxuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobmV3SW1hZ2UpXG4gICAgICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtQ29udGVudClcbiAgICAgICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lbnVDb250YWluZXJcbiAgICB9XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm8oKSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIoKSlcblxuICAgIHJldHVybiBtYWluXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9