/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\n  \\r\\nul#projects-view li:hover {\\r\\n  background-color: #333;\\r\\n  color: #f9f9f9;\\r\\n}\\r\\n\\r\\n.task,\\r\\n.list-group-item {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.project-menu {\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-js-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-js-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-js-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-js-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_page */ \"./src/initial_page.js\");\n/* harmony import */ var _handlers_create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/create-project */ \"./src/handlers/create-project.js\");\n/* harmony import */ var _handlers_create_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/create-todo */ \"./src/handlers/create-todo.js\");\n/* harmony import */ var _handlers_project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/project-todo-tabcontent */ \"./src/handlers/project-todo-tabcontent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    (0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n    // Project menu tab\r\n    const projectMenuButtons = document.querySelectorAll('li.list-group-item');\r\n    for (let menu of projectMenuButtons) {\r\n        menu.addEventListener('click', _handlers_project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_3__.default);\r\n    }\r\n\r\n    // Create Project\r\n    const createProjectBtn = document.querySelector('button#create-btn');\r\n    createProjectBtn.addEventListener('click', _handlers_create_project__WEBPACK_IMPORTED_MODULE_1__.default);\r\n\r\n    // Create Todo\r\n    const addTodoBtns = document.querySelectorAll('.add-todo');\r\n    for (let addTodo of addTodoBtns) {\r\n        addTodo.addEventListener('click', _handlers_create_todo__WEBPACK_IMPORTED_MODULE_2__.default);\r\n    }\r\n\r\n    const deleteButtons = document.querySelectorAll('.delete-task');\r\n    for (let btn of deleteButtons) {\r\n        btn.addEventListener('click', e => e);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/app.js?");

/***/ }),

/***/ "./src/handlers/create-project.js":
/*!****************************************!*\
  !*** ./src/handlers/create-project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _views_create_project_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/create-project-view */ \"./src/views/create-project-view.js\");\n/* harmony import */ var _views_project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/project-card */ \"./src/views/project-card.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\r\n    const rightCol = document.querySelector('div.col-sm-9');\r\n    rightCol.innerHTML = '';\r\n    rightCol.innerHTML = (0,_views_create_project_view__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n    const { createProjectForm } = document;\r\n    createProjectForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n    \r\n        const [name, description] = e.target.elements;\r\n        const project = {name: name.value, description: description.value, createdAt: Date.now()};\r\n    \r\n        _models_project__WEBPACK_IMPORTED_MODULE_2__.default.addProject(project);\r\n        const projectView = document.querySelector('ul#projects-view');\r\n        projectView.insertAdjacentHTML('beforeend', (0,_views_project_card__WEBPACK_IMPORTED_MODULE_1__.default)(project));\r\n        createProjectForm.reset();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/create-project.js?");

/***/ }),

/***/ "./src/handlers/create-todo.js":
/*!*************************************!*\
  !*** ./src/handlers/create-todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n/* harmony import */ var _views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/create-todo-view */ \"./src/views/create-todo-view.js\");\n/* harmony import */ var _views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todo-flash-message */ \"./src/views/todo-flash-message.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\r\n    const projects = _models_project__WEBPACK_IMPORTED_MODULE_1__.default.fetchProjects();\r\n    const rightCol = document.querySelector('div.col-sm-9');\r\n    \r\n    rightCol.innerHTML = '';\r\n    rightCol.innerHTML = (0,_views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__.default)(projects);\r\n\r\n    const { createTodoForm } = document;\r\n    createTodoForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n    \r\n        const [title, description, project, priority] = e.target.elements;\r\n        const todo = {title: title.value, \r\n            description: description.value,\r\n            project: project.value,\r\n            priority: priority.value\r\n        };\r\n        \r\n        _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.addTodo(todo);\r\n        const addFormWrapper = document.querySelector('div#add-task');\r\n        addFormWrapper.insertAdjacentHTML('afterbegin', (0,_views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__.default)());\r\n        createTodoForm.reset();\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/create-todo.js?");

/***/ }),

/***/ "./src/handlers/project-todo-tabcontent.js":
/*!*************************************************!*\
  !*** ./src/handlers/project-todo-tabcontent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _views_todo_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/todo-card */ \"./src/views/todo-card.js\");\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\r\n    const selectedProject = e.target.dataset.menu;\r\n    const todos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.fetchTodos().filter( t => t.project === selectedProject);\r\n    const rightCol = document.querySelector('div.col-sm-9');\r\n    rightCol.innerHTML = '';\r\n    const todosWrapper = document.createElement('div');\r\n    todosWrapper.id = 'todo-list-view';\r\n    todosWrapper.innerHTML = todos.map(t => (0,_views_todo_card__WEBPACK_IMPORTED_MODULE_1__.default)(t)).join('');\r\n    rightCol.appendChild(todosWrapper);\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/project-todo-tabcontent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\n\r\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/index.js?");

/***/ }),

/***/ "./src/initial_page.js":
/*!*****************************!*\
  !*** ./src/initial_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/project */ \"./src/models/project.js\");\n/* harmony import */ var _views_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nav */ \"./src/views/nav.js\");\n/* harmony import */ var _views_left_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/left-col */ \"./src/views/left-col.js\");\n/* harmony import */ var _views_right_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/right-col */ \"./src/views/right-col.js\");\n/* harmony import */ var _views_project_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/project-card */ \"./src/views/project-card.js\");\n/* harmony import */ var _views_todo_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/todo-card */ \"./src/views/todo-card.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    const root = document.getElementById('content');\r\n    // create skeleton\r\n    root.insertAdjacentHTML('beforeend', (0,_views_nav__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n    const rowContainer = document.createElement('div');\r\n    rowContainer.classList.add('row');\r\n\r\n    rowContainer.insertAdjacentHTML('beforeend', (0,_views_left_col__WEBPACK_IMPORTED_MODULE_3__.default)());\r\n    rowContainer.insertAdjacentHTML('beforeend', (0,_views_right_col__WEBPACK_IMPORTED_MODULE_4__.default)());\r\n    root.appendChild(rowContainer);\r\n    \r\n    // fetch models\r\n    const projects = _models_project__WEBPACK_IMPORTED_MODULE_1__.default.fetchProjects();\r\n    if (projects.length === 0) {\r\n        _models_project__WEBPACK_IMPORTED_MODULE_1__.default.createProject({\r\n            name: 'default',\r\n            description: 'initial default project',\r\n            date: Date.now()\r\n        })\r\n    }\r\n\r\n    const defaultTodos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.fetchTodos().filter( todo => todo.project == 'default' );\r\n    \r\n    // display index views\r\n    const projectListElement = document.getElementById('projects-view');\r\n    const todoListElement = document.getElementById('todo-list-view');\r\n\r\n    projects.forEach((project) => {\r\n        projectListElement.insertAdjacentHTML('beforeend', (0,_views_project_card__WEBPACK_IMPORTED_MODULE_5__.default)(project)) ;\r\n    });\r\n\r\n    defaultTodos.forEach((todo) => {\r\n        todoListElement.insertAdjacentHTML('beforeend', (0,_views_todo_card__WEBPACK_IMPORTED_MODULE_6__.default)(todo));\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/initial_page.js?");

/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    projectLists: JSON.parse(localStorage.getItem('projectStorage')) || [],\r\n    fetchProjects() {\r\n        return this.projectLists;\r\n    },\r\n    addProject(obj) {\r\n        this.projectLists.push(obj);\r\n        localStorage.setItem('projectStorage', JSON.stringify(this.projectLists));\r\n        return this;\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/models/project.js?");

/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    todoLists: JSON.parse(localStorage.getItem('todoStorage')) || [],\r\n    fetchTodos() {\r\n        return this.todoLists;\r\n    },\r\n    addTodo(obj) {\r\n        obj.id = this.getId();\r\n        this.todoLists.push(obj);\r\n        localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));\r\n        return this;\r\n    },\r\n    getId() {\r\n        const list = JSON.parse(localStorage.getItem('todoStorage')) || [];\r\n        return list.length > 0 ? list[list.length - 1].id + 1 : 0;\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/models/todo.js?");

/***/ }),

/***/ "./src/views/create-project-view.js":
/*!******************************************!*\
  !*** ./src/views/create-project-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\r\n<div id=\"add-project\" class=\"p-3 border\">\r\n    <form action=\"\" name=\"createProjectForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea name=\"description\" id=\"description\" class=\"form-control\" rows=\"3\"></textarea>\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Create Project</button>\r\n</form>\r\n</div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/create-project-view.js?");

/***/ }),

/***/ "./src/views/create-todo-view.js":
/*!***************************************!*\
  !*** ./src/views/create-todo-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((projects) => `<div id=\"add-task\" class=\"p-3 border\">\r\n    <form name=\"createTodoForm\">\r\n        <div class=\"form-group\">\r\n            <label for=\"title\">Title</label>\r\n            <input type=\"text\" id=\"title\" name=\"title\" required class=\"form-control\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea name=\"description\" id=\"description\" class=\"form-control\" rows=\"3\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"project\">Project: </label>\r\n            <select name=\"project\" id=\"project\" class=\"form-control\">\r\n                ${ projects.map((proj => `<option value=\"${ proj.name }\">${ proj.name }</option>`)).join('') }\r\n            </select>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label for=\"priority\">Priority: </label>\r\n            <select name=\"priority\" id=\"priority\" class=\"form-control\">\r\n                <option value=\"1\">Normal</option>\r\n                <option value=\"2\">Urgent</option>\r\n                <option value=\"3\">Critical</option>\r\n            </select>\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary\">Create Task</button>\r\n    </form>\r\n</div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/create-todo-view.js?");

/***/ }),

/***/ "./src/views/left-col.js":
/*!*******************************!*\
  !*** ./src/views/left-col.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<div class=\"col-sm-3\">\r\n    <ul id=\"projects-view\" class=\"list-group mb-1\"></ul>\r\n    <button id=\"create-btn\" class=\"btn btn-primary w-100 text-center\">Create Project</button>\r\n</div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/left-col.js?");

/***/ }),

/***/ "./src/views/nav.js":
/*!**************************!*\
  !*** ./src/views/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark mb-2\">\r\n    <a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-home\"></i></a>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link add-todo\" href=\"#\"><i class=\"fa fa-plus\"></i></a>\r\n        </li>\r\n    </ul>\r\n</nav>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/nav.js?");

/***/ }),

/***/ "./src/views/project-card.js":
/*!***********************************!*\
  !*** ./src/views/project-card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((project) => `<li class=\"list-group-item project-menu\" data-menu=\"${project.name}\">${project.name}</li>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/project-card.js?");

/***/ }),

/***/ "./src/views/right-col.js":
/*!********************************!*\
  !*** ./src/views/right-col.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<div class=\"col-sm-9\">\r\n    <div id=\"todo-list-view\"></div>\r\n</div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/right-col.js?");

/***/ }),

/***/ "./src/views/todo-card.js":
/*!********************************!*\
  !*** ./src/views/todo-card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({title, description, dueDate, priority}) => `<div class=\"task d-flex p-2 mb-1 border\">\r\n    <div class=\"title ml-3\">\r\n        <h5>${title}</h5>\r\n        <p>${description}</p>\r\n        <span class=\"due-date font-italic\">${dueDate}</span><br>\r\n        <span class=\"priority font-italic text-danger\">${priority}</span>\r\n    </div>\r\n    <span class=\"delete-task text-danger ml-auto align-self-end\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\r\n</div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/todo-card.js?");

/***/ }),

/***/ "./src/views/todo-flash-message.js":
/*!*****************************************!*\
  !*** ./src/views/todo-flash-message.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\r\n    <div class=\"alert alert-success alert-dismissible fade show\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\r\n        <strong>Todo successfully added!</strong>\r\n    </div>`);\r\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/todo-flash-message.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;