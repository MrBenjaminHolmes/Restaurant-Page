/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Matemasie&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\n\r\n\r\n :root{\r\n  --background:#db8d8d;\r\n  --textColour:#f3eaea;\r\n }\r\n*{\r\n  font-family: \"New Amsterdam\", sans-serif; \r\n  margin: 0;\r\n  padding: 0;\r\n  color: var(--textColour);\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-width: 850px;\r\n  background-color: var(--background);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\nheader{\r\n  margin-top: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n}\r\n\r\nh1{\r\n  color:var(--textColour);\r\n  margin-left: 50px;\r\n  font-size: 4rem;\r\n  transition: all 0.3s ease-in-out;\r\n  font-family: \"Matemasie\", sans-serif;\r\n}\r\nh1:hover{\r\n  transform: scale(1.05);\r\n}\r\n\r\nnav{\r\n  display: flex;\r\n  gap: 50px;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n}\r\n\r\nnav>button{\r\n  border: none;\r\n  background-color: var(--background);\r\n  transition: all 0.3s ease-in-out;\r\n  font-size: 3vw;\r\n  color:var(--textColour);\r\n}\r\n\r\n\r\nnav>button:hover {\r\n  color: #ffffff;\r\n  background-color: var(--background);\r\n  transform: scale(1.5);\r\n}\r\n\r\nnav>button::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 100%;\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color:#ffffff;\r\n  transform: scaleX(0);\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\nnav>button:hover::before {\r\n  transform: scaleX(1);\r\n}\r\n\r\nimg{\r\n  width:45vmax;\r\n  height: 45vmax;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\nimg:hover{\r\n  transform: scale(1.05);\r\n}\r\n\r\n#content{\r\n  display: flex;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 50%;\r\n  font-size: 3.5vw;\r\n  margin-top: 3%;\r\n  text-align: center; \r\n  \r\n}\r\n\r\n\r\n.info>button{\r\n  border-radius: 40px;\r\n  padding: 10px;\r\n  font-size: 3vw;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.418);\r\n  border: 2px solid;\r\n  color: var(--background);\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.info>button:hover{\r\n  box-shadow: 0 4px 8px 0 rgba(20, 20, 20, 0.521), 0 6px 20px 0 rgba(0, 0, 0, 0.521);\r\n  transform: scale(1.05);\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  background-color: var(--textColour);\r\n  color: var(--background);\r\n  padding: 10px;\r\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.copywright{\r\n  padding-left: 20px;\r\n  padding-top: 2px;\r\n}\r\n\r\n.container,.copywright{\r\n  display: flex;\r\n  background-color: var(--textColour);\r\n  color: var(--background);\r\n}\r\n\r\n.container{\r\n  padding-bottom: 8px;\r\n}\r\n\r\n.about{\r\n  width: 65%;\r\n  padding: 10px;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n\r\n}\r\n\r\n.about>h2{\r\n  color:var(--background);\r\n}\r\n\r\n.about>p{\r\n  color: #c0c0bb;\r\n}\r\n\r\n.pages>h2,.contact>h2{\r\n  color: var(--background);\r\n  margin-left: 90px;\r\n  padding: 10px;\r\n}\r\n.pages>ul>li,.contact>ul>li{\r\n  color: #c0c0bb;\r\n  margin-left: 100px;\r\n  margin-bottom: 5px;\r\n  list-style-type: none;\r\n  transition: all 0.3s ease; \r\n}\r\n\r\n.pages>ul>li:hover,.contact>ul>li:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.info>p{\r\n  font-size: 40%;\r\n  margin-left: 50px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.promos{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.taco{\r\n  width:16vmax !important;\r\n  height: 11vmax !important;\r\n}\r\n\r\n.promos>img{\r\n  width:16vmax;\r\n  height: 16vmax;\r\n}\r\n\r\n#tacot{\r\n  font-size: 2vw;\r\n}\r\n\r\n#promoText{\r\n  font-size: 3vw;\r\n}\r\n\r\n.grid{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    width: 100%;\r\n}\r\n\r\n.card{\r\n  background-color: var(--textColour);\r\n  border-radius: 15px;\r\n  margin: 30px;\r\n  transition: all 0.3s ease; \r\n  \r\n}\r\n\r\n.card:hover{\r\n  transform: scale(1.05);\r\n  box-shadow: 0 4px 8px 0 rgba(20, 20, 20, 0.521), 0 6px 20px 0 rgba(0, 0, 0, 0.521);\r\n}\r\n\r\n.foodItm{\r\n  width:20vmax;\r\n  height: 20vmax;\r\n}\r\n\r\n.price{\r\n  color: var(--background);\r\n  font-size: 3vw;\r\n  margin: 20px;\r\n}\r\n\r\n.flex{\r\n  display: flex;\r\n  align-items: center;\r\n  \r\n  gap: 10%;\r\n}\r\n\r\n.sections{\r\n  display: flex;\r\n}\r\n\r\n.text>p{\r\n  color:#979797;\r\n  margin: 20px;\r\n  font-size: 1vw\r\n}\r\n\r\n.text>h1{\r\n  color: #db8d8d;\r\n  font-size: 1.5vw;\r\n  margin: 30px;\r\n}\r\n\r\n.orderBtn{\r\n  border-radius: 40px;\r\n  padding: 10px;\r\n  font-size: 2vw;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.418);\r\n  border: 2px solid;\r\n  color: var(--background);\r\n  transition: all 0.3s ease;\r\n  margin-bottom: 25px;\r\n  margin-left: auto;\r\n  margin-right: 20px;\r\n}\r\n\r\n.orderBtn:hover{\r\n  box-shadow: 0 4px 8px 0 rgba(20, 20, 20, 0.521), 0 6px 20px 0 rgba(0, 0, 0, 0.521);\r\n  transform: scale(1.05);\r\n}\r\n\r\n.tacoMenu{\r\n  margin-top: 20%;\r\n  margin-bottom: 30px;\r\n  width:20vmax ;\r\n  height: 14vmax ;\r\n}\r\n\r\n#donut{\r\n  width:17vmax ;\r\n  height: 17vmax ;\r\n  margin: 25px;\r\n}\r\n\r\n\r\n#about {\r\n  display: flex;\r\n  flex-direction: column; \r\n  align-items: center; \r\n  background-color: var(--textColour);\r\n  border-radius: 15px;\r\n  margin: 100px auto; \r\n  padding: 20px; \r\n  max-width: 1200px; \r\n  gap: 20px; \r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#about > div {\r\n  text-align: center; \r\n}\r\n\r\n#about > div > h2 {\r\n  font-family: \"Matemasie\", sans-serif;\r\n  font-size: calc(1.5rem + 1vw); \r\n  color: var(--background);\r\n  margin: 0; \r\n}\r\n\r\n#about > div > svg {\r\n  width: 10vw;\r\n  height: auto; \r\n  fill: var(--background);\r\n  max-width: 80px; \r\n}\r\n\r\n#about > div > p {\r\n  color: #979797;\r\n  margin: 0; \r\n}\r\n\r\n#about:hover{\r\n  transform: scale(1.05);\r\n  box-shadow: 0 4px 8px 0 rgba(20, 20, 20, 0.521), 0 6px 20px 0 rgba(0, 0, 0, 0.521);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage.js */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/footer.js */ \"./src/pages/footer.js\");\n/* harmony import */ var _pages_Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Menu.js */ \"./src/pages/Menu.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst homeBtn = document.querySelectorAll(\"button\")[0];\r\nconst menuBtn = document.querySelectorAll(\"button\")[1];\r\nconst aboutBtn = document.querySelectorAll(\"button\")[2];\r\n \r\n\r\n\r\nfunction clearContent() {\r\n    while(content.firstChild) { \r\n        content.removeChild(content.firstChild); \r\n    } \r\n    while(menu.firstChild){\r\n        menu.removeChild(menu.firstChild)\r\n    }\r\n    while(aboutUs.firstChild){\r\n        aboutUs.removeChild(aboutUs.firstChild)\r\n    }\r\n}\r\n\r\n//renderAbout();\r\n(0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_pages_footer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nhomeBtn.addEventListener(\"click\",()=>{\r\n    clearContent()\r\n    ;(0,_pages_homePage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\n\r\nmenuBtn.addEventListener(\"click\",()=>{\r\n    clearContent()\r\n    ;(0,_pages_Menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n})\r\n\r\naboutBtn.addEventListener(\"click\",()=>{\r\n    clearContent()\r\n    ;(0,_pages_about_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _images_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger.png */ \"./src/images/burger.png\");\n/* harmony import */ var _images_Taco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Taco.png */ \"./src/images/Taco.png\");\n/* harmony import */ var _images_chips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/chips.png */ \"./src/images/chips.png\");\n/* harmony import */ var _images_chickenWings_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/chickenWings.png */ \"./src/images/chickenWings.png\");\n/* harmony import */ var _images_icecream_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icecream.png */ \"./src/images/icecream.png\");\n/* harmony import */ var _images_Milkshake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/Milkshake.png */ \"./src/images/Milkshake.png\");\n/* harmony import */ var _images_Doughnut_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Doughnut.png */ \"./src/images/Doughnut.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderMenu() {\r\n    const content = document.querySelector(\"#menu\");\r\n\r\n    const menuHTML = `\r\n        <div class=\"grid\">\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm\" src=\"${_images_burger_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Burger\">\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£6.70</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>The Classic</h1>\r\n                        <p>The Classic is a sizzling sensation packed with a juicy beef patty, crispy onion rings, melted cheddar, and a spicy mayo, all nestled in a toasted bun. Perfectly seasoned and cooked to perfection.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm tacoMenu\" src=\"${_images_Taco_png__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Taco\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£4.30</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>Speedy Spice Taco</h1>\r\n                        <p>The Speedy Spice Taco is filled with seasoned beef, fresh pico de gallo, crisp lettuce, and a tangy lime crema, all wrapped in a warm tortilla. Bursting with flavor and ready in no time.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm\" src=\"${_images_chickenWings_png__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Wings\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£5.50</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>X6 Hot Wings</h1>\r\n                        <p>6 Crispy, golden-brown chicken wings, seasoned with a tantalizing blend of spices, make for a mouthwatering appetizer or snack.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm\" src=\"${_images_chips_png__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Chips\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£3.99</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>Crispy Kick Chips</h1>\r\n                        <p>Crispy Kick Chips are golden, seasoned potato slices with a hint of spice, perfectly crunchy and satisfying. Ideal for a quick, flavorful snack anytime.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm\" src=\"${_images_Milkshake_png__WEBPACK_IMPORTED_MODULE_5__}\" alt=\"Milkshake\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£2.99</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>Choco-Milk</h1>\r\n                        <p>The Choco Blast Shake is a rich blend of creamy chocolate ice cream and decadent fudge, topped with whipped cream. Smooth, indulgent, and a chocolate lover's dream.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img id=\"donut\" class=\"foodItm\" src=\"${_images_Doughnut_png__WEBPACK_IMPORTED_MODULE_6__}\" alt=\"Donut\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£1.99</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>Choco Glaze Donut</h1>\r\n                        <p>The Choco Glaze Donut is a soft, fluffy treat covered in a rich chocolate glaze. Perfectly sweet, indulgent, and melts in your mouth.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"sections\">\r\n                    <div>\r\n                        <div class=\"image\">\r\n                            <img class=\"foodItm\" src=\"${_images_icecream_png__WEBPACK_IMPORTED_MODULE_4__}\" alt=\"Ice Cream\" >\r\n                        </div>\r\n                        <div class=\"flex\">\r\n                            <div class=\"price\">£2.50</div>\r\n                            <button class=\"orderBtn\">Order Now</button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text\">\r\n                        <h1>Ice-Cone</h1>\r\n                        <p>A velvety scoop of vanilla ice cream topped with crunchy sprinkles, and a cherry on top. Smooth, indulgent, and bursting with sweetness—it's a delightful treat to savor anytime.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n    content.innerHTML = menuHTML;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/Menu.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAbout)\n/* harmony export */ });\nfunction renderAbout(){\r\n    const aboutContainer = document.querySelector(\"#aboutUs\");\r\n    const about = `\r\n    <div id=\"about\">\r\n    <div class=\"clock\">\r\n                <h2>Speed</h2>\r\n                <p>peed is essential to our service. We focus on efficiency to get your favorite meals to you as quickly as possible without sacrificing quality. Our streamlined kitchen operations and dedicated staff work seamlessly to ensure you receive your order promptly, so you can enjoy your food while it's fresh and hot.</p>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M600-160q-134 0-227-93t-93-227q0-133 93-226.5T600-800q133 0 226.5 93.5T920-480q0 134-93.5 227T600-160Zm0-80q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm91-91 57-57-108-108v-144h-80v177l131 132ZM80-600v-80h160v80H80ZM40-440v-80h200v80H40Zm40 160v-80h160v80H80Zm520-200Z\"/></svg>\r\n            </div>\r\n            <div class=\"fork\">\r\n                <h2>Taste</h2>\r\n                <p>We craft each menu item with high-quality ingredients and bold flavors to ensure a satisfying experience in every bite. Our recipes are designed to deliver the perfect balance of taste and indulgence, making every visit to our restaurant a delicious treat.</p>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z\"/></svg>\r\n            </div>\r\n            <div class=\"bike\">\r\n                <h2>Delivery</h2>\r\n                <p>Our commitment to timely and accurate delivery ensures that your fast food arrives at your door just as you expect it. Using advanced tracking systems and a well-organized delivery network, we make sure every order is handled with care and arrives on time, every time.</p>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"#5f6368\"><path d=\"M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z\"/></svg>\r\n            </div></div>\r\n                `\r\n\r\n                aboutContainer.innerHTML = about;\r\n            }\r\n            \r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderFooter)\n/* harmony export */ });\nfunction renderFooter(){\r\n    const footerContainer = document.querySelector(\"footer\");\r\n    const footer = `\r\n            <div class=\"container\">\r\n            <div class=\"about\">\r\n                <h2>About</h2>\r\n                <p>Quick Bites is dedicated to satisfying your cravings with delicious, freshly made meals delivered right to your door. We focus on offering a wide range of mouth-watering dishes that are both quick and convenient without compromising on taste or quality. Whether you're in the mood for a hearty breakfast, a wholesome lunch, or a decadent dessert, Quick Bites has something for everyone. Our mission is to make it easier for you to enjoy nutritious, flavorful food anytime, anywhere, without the hassle. At Quick Bites, we believe that great food should be accessible, fast, and always full of flavor.</p>\r\n            </div>\r\n            <div class=\"pages\">\r\n                <h2>Pages</h2>\r\n                <ul>\r\n                    <li>Home</li>\r\n                    <li>Menu</li>\r\n                    <li>About</li>\r\n                  </ul>        \r\n            </div>\r\n            <div class=\"contact\">\r\n                <h2>Contact Us</h2>\r\n                <ul>\r\n                    <li>Phone:  +123 456 789</li>\r\n                    <li>Email:  Quickbites@gmail.com</li>\r\n                    <li>Address:  169 Bradford Road, Winsley,BA15 2HW</li>\r\n                  </ul> \r\n            </div>\r\n        </div>\r\n        \r\n        <hr>\r\n        <div class=\"copywright\">Copyright © 2024 All Rights Reserved by QuickBites</div>\r\n                `\r\n\r\n                footerContainer.innerHTML = footer;\r\n            }\r\n            \r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/footer.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderHomepage)\n/* harmony export */ });\n/* harmony import */ var _images_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger.png */ \"./src/images/burger.png\");\n/* harmony import */ var _images_Taco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Taco.png */ \"./src/images/Taco.png\");\n/* harmony import */ var _images_chips_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/chips.png */ \"./src/images/chips.png\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/pages/Menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/pages/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderHomepage(){\r\n    const content = document.querySelector(\"#content\");\r\n    const home = `\r\n        <div class=\"info\">\r\n            <div class=\"text\">Taste the Speed, Savor the Flavor!</div>\r\n            <p>Quick Bites is your go-to spot for delicious, fast, and fresh meals. Located in the heart of the city, this cozy eatery specializes in serving up a variety of quick yet satisfying dishes.</p>\r\n            <h2 id=\"promoText\">PROMOS</h2>\r\n            <div id=\"tacot\">🌮 Taco Tuesday 🌮</div>\r\n            <div class=\"promos\">\r\n            </div>\r\n            <button>Order Now</button>\r\n        </div>\r\n    `;\r\n\r\n    content.innerHTML = home;\r\n    const promos = document.querySelector(\".promos\");\r\n    const tacoImage = document.createElement(\"img\");\r\n    const chipsImage = document.createElement(\"img\");\r\n    promos.appendChild(tacoImage);\r\n    tacoImage.setAttribute(\"class\", \"taco\");\r\n    promos.appendChild(chipsImage);\r\n    tacoImage.src = _images_Taco_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    chipsImage.src = _images_chips_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    \r\n    const burgerImage = document.createElement(\"img\");\r\n    content.appendChild(burgerImage);\r\n    burgerImage.src = _images_burger_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    (0,_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/images/Doughnut.png":
/*!*********************************!*\
  !*** ./src/images/Doughnut.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e7031bc6c08f8fc861b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Doughnut.png?");

/***/ }),

/***/ "./src/images/Milkshake.png":
/*!**********************************!*\
  !*** ./src/images/Milkshake.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5cbef3b148e72a8cb2c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Milkshake.png?");

/***/ }),

/***/ "./src/images/Taco.png":
/*!*****************************!*\
  !*** ./src/images/Taco.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"016c9cd28aa389f76b40.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/Taco.png?");

/***/ }),

/***/ "./src/images/burger.png":
/*!*******************************!*\
  !*** ./src/images/burger.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3e4b133d79557e55e6c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burger.png?");

/***/ }),

/***/ "./src/images/chickenWings.png":
/*!*************************************!*\
  !*** ./src/images/chickenWings.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"85639a43a4d5768da981.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chickenWings.png?");

/***/ }),

/***/ "./src/images/chips.png":
/*!******************************!*\
  !*** ./src/images/chips.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ec6898049688ba957cff.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chips.png?");

/***/ }),

/***/ "./src/images/icecream.png":
/*!*********************************!*\
  !*** ./src/images/icecream.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13ed3f709ce4523bd222.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icecream.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;