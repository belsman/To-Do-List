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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\nul#projects-view li:hover {\\r\\n  background-color: #333;\\r\\n  color: #f9f9f9;\\r\\n}\\r\\n\\r\\n.task,\\r\\n.list-group-item {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.project-menu {\\r\\n  text-transform: uppercase;\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-js-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_page */ \"./src/initial_page.js\");\n/* harmony import */ var _handlers_create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/create-project */ \"./src/handlers/create-project.js\");\n/* harmony import */ var _handlers_create_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/create-todo */ \"./src/handlers/create-todo.js\");\n/* harmony import */ var _handlers_project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/project-todo-tabcontent */ \"./src/handlers/project-todo-tabcontent.js\");\n/* harmony import */ var _handlers_todo_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers/todo-detail */ \"./src/handlers/todo-detail.js\");\n/* harmony import */ var _handlers_delete_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/delete-todo */ \"./src/handlers/delete-todo.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  (0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  // Project menu tab\n  const projectMenuButtons = document.querySelectorAll('li.list-group-item');\n  projectMenuButtons.forEach(menu => {\n    menu.addEventListener('click', _handlers_project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_3__.default);\n  });\n\n  // Create Project\n  const createProjectBtn = document.querySelector('button#create-btn');\n  createProjectBtn.addEventListener('click', _handlers_create_project__WEBPACK_IMPORTED_MODULE_1__.default);\n\n  // Create Todo\n  const addTodoBtns = document.querySelectorAll('.add-todo');\n  addTodoBtns.forEach(addTodo => addTodo.addEventListener('click', _handlers_create_todo__WEBPACK_IMPORTED_MODULE_2__.default));\n\n  const editTodoButtons = document.querySelectorAll('span.edit-task');\n  editTodoButtons.forEach(editBtn => editBtn.addEventListener('click', _handlers_todo_detail__WEBPACK_IMPORTED_MODULE_4__.default));\n\n  const deleteButtons = document.querySelectorAll('.delete-task');\n  deleteButtons.forEach(btn => btn.addEventListener('click', _handlers_delete_todo__WEBPACK_IMPORTED_MODULE_5__.default));\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/app.js?");

/***/ }),

/***/ "./src/constructors/todo-constructor.js":
/*!**********************************************!*\
  !*** ./src/constructors/todo-constructor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Todo {\n  constructor(title, description, project, priority, dueDate) {\n    this.title = title;\n    this.project = project;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-js-app/./src/constructors/todo-constructor.js?");

/***/ }),

/***/ "./src/handlers/create-project.js":
/*!****************************************!*\
  !*** ./src/handlers/create-project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _views_create_project_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/create-project-view */ \"./src/views/create-project-view.js\");\n/* harmony import */ var _views_project_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/project-card */ \"./src/views/project-card.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\n  e.preventDefault();\n  const listMenu = document.querySelectorAll('li.list-group-item');\n  listMenu.forEach(li => li.classList.remove('active'));\n\n  const rightCol = document.querySelector('div.col-sm-9');\n  rightCol.innerHTML = (0,_views_create_project_view__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n  const { createProjectForm } = document;\n  createProjectForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const [name, description] = e.target.elements;\n    const project = { name: name.value, description: description.value, createdAt: Date.now() };\n\n    _models_project__WEBPACK_IMPORTED_MODULE_2__.default.addProject(project);\n    const projectView = document.querySelector('ul#projects-view');\n    projectView.insertAdjacentHTML('beforeend', (0,_views_project_card__WEBPACK_IMPORTED_MODULE_1__.default)(project));\n    createProjectForm.reset();\n  });\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/create-project.js?");

/***/ }),

/***/ "./src/handlers/create-todo.js":
/*!*************************************!*\
  !*** ./src/handlers/create-todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n/* harmony import */ var _views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/create-todo-view */ \"./src/views/create-todo-view.js\");\n/* harmony import */ var _views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todo-flash-message */ \"./src/views/todo-flash-message.js\");\n/* harmony import */ var _project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-todo-tabcontent */ \"./src/handlers/project-todo-tabcontent.js\");\n/* harmony import */ var _constructors_todo_constructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constructors/todo-constructor */ \"./src/constructors/todo-constructor.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\n  e.preventDefault();\n  const listMenu = document.querySelectorAll('li.list-group-item');\n  listMenu.forEach(li => li.classList.remove('active'));\n\n  const projects = _models_project__WEBPACK_IMPORTED_MODULE_1__.default.fetchProjects();\n  const rightCol = document.querySelector('div.col-sm-9');\n  rightCol.innerHTML = (0,_views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__.default)(projects);\n\n  const { createTodoForm } = document;\n  createTodoForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const {\n      title, description, project, priority, dueDate,\n    } = e.target.elements;\n    const todo = new _constructors_todo_constructor__WEBPACK_IMPORTED_MODULE_5__.default(title.value, description.value,\n      project.value, priority.value, dueDate.value);\n\n    _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.addTodo(todo);\n    const addFormWrapper = document.querySelector('div#add-task');\n    addFormWrapper.insertAdjacentHTML('afterbegin', (0,_views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__.default)());\n    createTodoForm.reset();\n  });\n\n  const projectMenuButtons = document.querySelectorAll('li.list-group-item');\n  projectMenuButtons.forEach(menu => {\n    menu.addEventListener('click', _project_todo_tabcontent__WEBPACK_IMPORTED_MODULE_4__.default);\n  });\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/create-todo.js?");

/***/ }),

/***/ "./src/handlers/delete-todo.js":
/*!*************************************!*\
  !*** ./src/handlers/delete-todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\n  const todoIndex = e.target.parentElement.dataset.id;\n  const taskWrapper = e.target.parentElement.parentElement;\n  taskWrapper.remove();\n  _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.setTodoNull(todoIndex);\n  _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.update();\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/delete-todo.js?");

/***/ }),

/***/ "./src/handlers/project-todo-tabcontent.js":
/*!*************************************************!*\
  !*** ./src/handlers/project-todo-tabcontent.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _views_todo_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/todo-card */ \"./src/views/todo-card.js\");\n/* harmony import */ var _todo_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-detail */ \"./src/handlers/todo-detail.js\");\n/* harmony import */ var _delete_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete-todo */ \"./src/handlers/delete-todo.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\n  const listMenu = document.querySelectorAll('li.list-group-item');\n  listMenu.forEach(li => li.classList.remove('active'));\n\n  e.target.classList.add('active');\n  const selectedProject = e.target.dataset.menu;\n  const todos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.fetchTodos().filter(t => t && (t.project === selectedProject));\n  const rightCol = document.querySelector('div.col-sm-9');\n  rightCol.innerHTML = '';\n  const todosWrapper = document.createElement('div');\n  todosWrapper.id = 'todo-list-view';\n  todosWrapper.innerHTML = todos.map(t => (0,_views_todo_card__WEBPACK_IMPORTED_MODULE_1__.default)(t)).join('');\n  rightCol.appendChild(todosWrapper);\n  const editTodoButtons = document.querySelectorAll('span.edit-task');\n\n  editTodoButtons.forEach(editBtn => editBtn.addEventListener('click', _todo_detail__WEBPACK_IMPORTED_MODULE_2__.default));\n\n  const deleteButtons = document.querySelectorAll('.delete-task');\n  deleteButtons.forEach(btn => btn.addEventListener('click', _delete_todo__WEBPACK_IMPORTED_MODULE_3__.default));\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/project-todo-tabcontent.js?");

/***/ }),

/***/ "./src/handlers/todo-detail.js":
/*!*************************************!*\
  !*** ./src/handlers/todo-detail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/create-todo-view */ \"./src/views/create-todo-view.js\");\n/* harmony import */ var _views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todo-flash-message */ \"./src/views/todo-flash-message.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (e => {\n  const projects = _models_project__WEBPACK_IMPORTED_MODULE_0__.default.fetchProjects();\n  const todoIndex = e.target.parentElement.dataset.id;\n  const todo = _models_todo__WEBPACK_IMPORTED_MODULE_1__.default.fetchTodos(todoIndex);\n\n  const rightCol = document.querySelector('div.col-sm-9');\n  rightCol.innerHTML = (0,_views_create_todo_view__WEBPACK_IMPORTED_MODULE_2__.default)(projects, todo);\n\n  const { createTodoForm } = document;\n  createTodoForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const {\n      title, description, project, priority, dueDate,\n    } = e.target.elements;\n    todo.title = title.value;\n    todo.description = description.value;\n    todo.priority = priority.value;\n    todo.dueDate = dueDate.value;\n    todo.project = project.value;\n\n    _models_todo__WEBPACK_IMPORTED_MODULE_1__.default.update();\n    const addFormWrapper = document.querySelector('div#add-task');\n    addFormWrapper.insertAdjacentHTML('afterbegin', (0,_views_todo_flash_message__WEBPACK_IMPORTED_MODULE_3__.default)());\n  });\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/handlers/todo-detail.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n(0,_app__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\n//# sourceURL=webpack://todo-js-app/./src/index.js?");

/***/ }),

/***/ "./src/initial_page.js":
/*!*****************************!*\
  !*** ./src/initial_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/project */ \"./src/models/project.js\");\n/* harmony import */ var _views_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/nav */ \"./src/views/nav.js\");\n/* harmony import */ var _views_left_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/left-col */ \"./src/views/left-col.js\");\n/* harmony import */ var _views_right_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/right-col */ \"./src/views/right-col.js\");\n/* harmony import */ var _views_project_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/project-card */ \"./src/views/project-card.js\");\n/* harmony import */ var _views_todo_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/todo-card */ \"./src/views/todo-card.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const root = document.getElementById('content');\n  // create skeleton\n  root.insertAdjacentHTML('beforeend', (0,_views_nav__WEBPACK_IMPORTED_MODULE_2__.default)());\n  const rowContainer = document.createElement('div');\n  rowContainer.classList.add('row');\n\n  rowContainer.insertAdjacentHTML('beforeend', (0,_views_left_col__WEBPACK_IMPORTED_MODULE_3__.default)());\n  rowContainer.insertAdjacentHTML('beforeend', (0,_views_right_col__WEBPACK_IMPORTED_MODULE_4__.default)());\n  root.appendChild(rowContainer);\n\n  // fetch models\n  const projects = _models_project__WEBPACK_IMPORTED_MODULE_1__.default.fetchProjects();\n  if (projects.length === 0) {\n    _models_project__WEBPACK_IMPORTED_MODULE_1__.default.addProject({\n      name: 'default',\n      description: 'initial default project',\n      date: Date.now(),\n    });\n  }\n\n  const defaultTodos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.default.fetchTodos().filter(todo => todo && (todo.project === 'default'));\n\n  // display index views\n  const projectListElement = document.getElementById('projects-view');\n  const todoListElement = document.getElementById('todo-list-view');\n\n  projects.forEach((project) => {\n    projectListElement.insertAdjacentHTML('beforeend', (0,_views_project_card__WEBPACK_IMPORTED_MODULE_5__.default)(project));\n  });\n\n  defaultTodos.forEach((todo) => {\n    todoListElement.insertAdjacentHTML('beforeend', (0,_views_todo_card__WEBPACK_IMPORTED_MODULE_6__.default)(todo));\n  });\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/initial_page.js?");

/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  projectLists: JSON.parse(localStorage.getItem('projectStorage')) || [],\n  fetchProjects() {\n    return this.projectLists;\n  },\n  addProject(obj) {\n    this.projectLists.push(obj);\n    localStorage.setItem('projectStorage', JSON.stringify(this.projectLists));\n    return this;\n  },\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/models/project.js?");

/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  todoLists: JSON.parse(localStorage.getItem('todoStorage')) || [],\n  fetchTodos(idx) {\n    if (idx) return this.todoLists[idx];\n    return this.todoLists;\n  },\n  addTodo(obj) {\n    obj.id = this.getId();\n    this.todoLists.push(obj);\n    localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));\n    return this;\n  },\n  getId() {\n    const list = JSON.parse(localStorage.getItem('todoStorage')) || [];\n    return list.length;\n  },\n  update() {\n    localStorage.setItem('todoStorage', JSON.stringify(this.todoLists));\n  },\n  setTodoNull(idx) {\n    this.todoLists[idx] = null;\n  },\n});\n\n\n//# sourceURL=webpack://todo-js-app/./src/models/todo.js?");

/***/ }),

/***/ "./src/views/create-project-view.js":
/*!******************************************!*\
  !*** ./src/views/create-project-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n<div id=\"add-project\" class=\"p-3 border\">\n    <form action=\"\" name=\"createProjectForm\">\n        <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" name=\"name\" required class=\"form-control\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea name=\"description\" id=\"description\" class=\"form-control\" rows=\"3\"></textarea>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Create Project</button>\n</form>\n</div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/create-project-view.js?");

/***/ }),

/***/ "./src/views/create-todo-view.js":
/*!***************************************!*\
  !*** ./src/views/create-todo-view.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((projects, option) => `<div id=\"add-task\" class=\"p-3 border\">\n    <form name=\"createTodoForm\">\n        <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" id=\"title\" name=\"title\" required class=\"form-control\" value=\"${option ? option.title : ''}\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea name=\"description\" id=\"description\" class=\"form-control\" rows=\"3\">${option ? option.description : ''}</textarea>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"dueDate\">Due Date</label>\n            <input type=\"date\" id=\"dueDate\" class=\"form-control\" name=\"dueDate\" value=\"${option ? option.dueDate : ''}\" required>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"project\">Project: </label>\n            <select name=\"project\" id=\"project\" class=\"form-control\">\n                ${projects.map((proj => `<option value=\"${proj.name}\" ${(option && (proj.name === option.project)) ? 'selected' : ''}>${proj.name}</option>`)).join('')}\n            </select>\n        </div>\n        \n        <div class=\"form-group\">\n            <label for=\"priority\">Priority: </label>\n            <select name=\"priority\" id=\"priority\" class=\"form-control\">\n                <option value=\"0\" ${option && option.priority === '0' ? 'selected' : ''}>Normal</option>\n                <option value=\"1\" ${option && option.priority === '1' ? 'selected' : ''}>Urgent</option>\n                <option value=\"2\" ${option && option.priority === '2' ? 'selected' : ''}>Critical</option>\n            </select>\n        </div>\n\n        <button class=\"btn btn-primary\">Create Task</button>\n    </form>\n</div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/create-todo-view.js?");

/***/ }),

/***/ "./src/views/left-col.js":
/*!*******************************!*\
  !*** ./src/views/left-col.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<div class=\"col-sm-3\">\n    <ul id=\"projects-view\" class=\"list-group mb-1\"></ul>\n    <button id=\"create-btn\" class=\"btn btn-primary w-100 text-center\">Create Project</button>\n</div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/left-col.js?");

/***/ }),

/***/ "./src/views/nav.js":
/*!**************************!*\
  !*** ./src/views/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark mb-2\">\n    <a class=\"navbar-brand\" href=\"\"><i class=\"fa fa-home\"></i></a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link add-todo\" href=\"\"><i class=\"fa fa-plus\"></i></a>\n        </li>\n    </ul>\n</nav>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/nav.js?");

/***/ }),

/***/ "./src/views/project-card.js":
/*!***********************************!*\
  !*** ./src/views/project-card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((project) => `<li class=\"list-group-item project-menu\" data-menu=\"${project.name}\">${project.name}</li>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/project-card.js?");

/***/ }),

/***/ "./src/views/right-col.js":
/*!********************************!*\
  !*** ./src/views/right-col.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `<div class=\"col-sm-9\">\n    <div id=\"todo-list-view\"></div>\n</div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/right-col.js?");

/***/ }),

/***/ "./src/views/todo-card.js":
/*!********************************!*\
  !*** ./src/views/todo-card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({\n  title, description, dueDate, priority, id,\n}) => `<div class=\"task d-flex p-2 mb-1 border\">\n    <div class=\"title ml-3\">\n        <span class=\"edit-task\" data-id=\"${id}\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>\n        <h5>${title}</h5>\n        <p>${description}</p>\n        <span class=\"due-date font-italic\">${dueDate}</span><br>\n        <span class=\"priority font-italic text-danger\">${['Normal', 'Urgent', 'Critical'][priority]}</span>\n    </div>\n    <span class=\"delete-task text-danger ml-auto align-self-end\" data-id=\"${id}\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span>\n</div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/todo-card.js?");

/***/ }),

/***/ "./src/views/todo-flash-message.js":
/*!*****************************************!*\
  !*** ./src/views/todo-flash-message.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => `\n    <div class=\"alert alert-success alert-dismissible fade show\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Todo successfully added!</strong>\n    </div>`);\n\n\n//# sourceURL=webpack://todo-js-app/./src/views/todo-flash-message.js?");

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