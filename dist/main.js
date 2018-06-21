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

/***/ "./node_modules/minimist/index.js":
/*!****************************************!*\
  !*** ./node_modules/minimist/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (args, opts) {\n    if (!opts) opts = {};\n    \n    var flags = { bools : {}, strings : {}, unknownFn: null };\n\n    if (typeof opts['unknown'] === 'function') {\n        flags.unknownFn = opts['unknown'];\n    }\n\n    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {\n      flags.allBools = true;\n    } else {\n      [].concat(opts['boolean']).filter(Boolean).forEach(function (key) {\n          flags.bools[key] = true;\n      });\n    }\n    \n    var aliases = {};\n    Object.keys(opts.alias || {}).forEach(function (key) {\n        aliases[key] = [].concat(opts.alias[key]);\n        aliases[key].forEach(function (x) {\n            aliases[x] = [key].concat(aliases[key].filter(function (y) {\n                return x !== y;\n            }));\n        });\n    });\n\n    [].concat(opts.string).filter(Boolean).forEach(function (key) {\n        flags.strings[key] = true;\n        if (aliases[key]) {\n            flags.strings[aliases[key]] = true;\n        }\n     });\n\n    var defaults = opts['default'] || {};\n    \n    var argv = { _ : [] };\n    Object.keys(flags.bools).forEach(function (key) {\n        setArg(key, defaults[key] === undefined ? false : defaults[key]);\n    });\n    \n    var notFlags = [];\n\n    if (args.indexOf('--') !== -1) {\n        notFlags = args.slice(args.indexOf('--')+1);\n        args = args.slice(0, args.indexOf('--'));\n    }\n\n    function argDefined(key, arg) {\n        return (flags.allBools && /^--[^=]+$/.test(arg)) ||\n            flags.strings[key] || flags.bools[key] || aliases[key];\n    }\n\n    function setArg (key, val, arg) {\n        if (arg && flags.unknownFn && !argDefined(key, arg)) {\n            if (flags.unknownFn(arg) === false) return;\n        }\n\n        var value = !flags.strings[key] && isNumber(val)\n            ? Number(val) : val\n        ;\n        setKey(argv, key.split('.'), value);\n        \n        (aliases[key] || []).forEach(function (x) {\n            setKey(argv, x.split('.'), value);\n        });\n    }\n\n    function setKey (obj, keys, value) {\n        var o = obj;\n        keys.slice(0,-1).forEach(function (key) {\n            if (o[key] === undefined) o[key] = {};\n            o = o[key];\n        });\n\n        var key = keys[keys.length - 1];\n        if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {\n            o[key] = value;\n        }\n        else if (Array.isArray(o[key])) {\n            o[key].push(value);\n        }\n        else {\n            o[key] = [ o[key], value ];\n        }\n    }\n    \n    function aliasIsBoolean(key) {\n      return aliases[key].some(function (x) {\n          return flags.bools[x];\n      });\n    }\n\n    for (var i = 0; i < args.length; i++) {\n        var arg = args[i];\n        \n        if (/^--.+=/.test(arg)) {\n            // Using [\\s\\S] instead of . because js doesn't support the\n            // 'dotall' regex modifier. See:\n            // http://stackoverflow.com/a/1068308/13216\n            var m = arg.match(/^--([^=]+)=([\\s\\S]*)$/);\n            var key = m[1];\n            var value = m[2];\n            if (flags.bools[key]) {\n                value = value !== 'false';\n            }\n            setArg(key, value, arg);\n        }\n        else if (/^--no-.+/.test(arg)) {\n            var key = arg.match(/^--no-(.+)/)[1];\n            setArg(key, false, arg);\n        }\n        else if (/^--.+/.test(arg)) {\n            var key = arg.match(/^--(.+)/)[1];\n            var next = args[i + 1];\n            if (next !== undefined && !/^-/.test(next)\n            && !flags.bools[key]\n            && !flags.allBools\n            && (aliases[key] ? !aliasIsBoolean(key) : true)) {\n                setArg(key, next, arg);\n                i++;\n            }\n            else if (/^(true|false)$/.test(next)) {\n                setArg(key, next === 'true', arg);\n                i++;\n            }\n            else {\n                setArg(key, flags.strings[key] ? '' : true, arg);\n            }\n        }\n        else if (/^-[^-]+/.test(arg)) {\n            var letters = arg.slice(1,-1).split('');\n            \n            var broken = false;\n            for (var j = 0; j < letters.length; j++) {\n                var next = arg.slice(j+2);\n                \n                if (next === '-') {\n                    setArg(letters[j], next, arg)\n                    continue;\n                }\n                \n                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {\n                    setArg(letters[j], next.split('=')[1], arg);\n                    broken = true;\n                    break;\n                }\n                \n                if (/[A-Za-z]/.test(letters[j])\n                && /-?\\d+(\\.\\d*)?(e-?\\d+)?$/.test(next)) {\n                    setArg(letters[j], next, arg);\n                    broken = true;\n                    break;\n                }\n                \n                if (letters[j+1] && letters[j+1].match(/\\W/)) {\n                    setArg(letters[j], arg.slice(j+2), arg);\n                    broken = true;\n                    break;\n                }\n                else {\n                    setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);\n                }\n            }\n            \n            var key = arg.slice(-1)[0];\n            if (!broken && key !== '-') {\n                if (args[i+1] && !/^(-|--)[^-]/.test(args[i+1])\n                && !flags.bools[key]\n                && (aliases[key] ? !aliasIsBoolean(key) : true)) {\n                    setArg(key, args[i+1], arg);\n                    i++;\n                }\n                else if (args[i+1] && /true|false/.test(args[i+1])) {\n                    setArg(key, args[i+1] === 'true', arg);\n                    i++;\n                }\n                else {\n                    setArg(key, flags.strings[key] ? '' : true, arg);\n                }\n            }\n        }\n        else {\n            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {\n                argv._.push(\n                    flags.strings['_'] || !isNumber(arg) ? arg : Number(arg)\n                );\n            }\n            if (opts.stopEarly) {\n                argv._.push.apply(argv._, args.slice(i + 1));\n                break;\n            }\n        }\n    }\n    \n    Object.keys(defaults).forEach(function (key) {\n        if (!hasKey(argv, key.split('.'))) {\n            setKey(argv, key.split('.'), defaults[key]);\n            \n            (aliases[key] || []).forEach(function (x) {\n                setKey(argv, x.split('.'), defaults[key]);\n            });\n        }\n    });\n    \n    if (opts['--']) {\n        argv['--'] = new Array();\n        notFlags.forEach(function(key) {\n            argv['--'].push(key);\n        });\n    }\n    else {\n        notFlags.forEach(function(key) {\n            argv._.push(key);\n        });\n    }\n\n    return argv;\n};\n\nfunction hasKey (obj, keys) {\n    var o = obj;\n    keys.slice(0,-1).forEach(function (key) {\n        o = (o[key] || {});\n    });\n\n    var key = keys[keys.length - 1];\n    return key in o;\n}\n\nfunction isNumber (x) {\n    if (typeof x === 'number') return true;\n    if (/^0x[0-9a-f]+$/i.test(x)) return true;\n    return /^[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(e[-+]?\\d+)?$/.test(x);\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/minimist/index.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ACTION_TYPES_FLAG, MODULE_ACTION_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTION_TYPES_FLAG\", function() { return ACTION_TYPES_FLAG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODULE_ACTION_TYPE\", function() { return MODULE_ACTION_TYPE; });\nconst ACTION_TYPES_FLAG = '//actiontypes';\r\nconst MODULE_ACTION_TYPE = '//moduleactiontype';\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/controllers/action.js":
/*!***********************************!*\
  !*** ./src/controllers/action.js ***!
  \***********************************/
/*! exports provided: addAsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAsyncAction\", function() { return addAsyncAction; });\n/* harmony import */ var _modules_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/file */ \"./src/modules/file.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _modules_template_async_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/template/async-actions */ \"./src/modules/template/async-actions.js\");\n\r\n\r\n\r\n\r\n\r\nconst addAsyncAction = (actionName, filePath) => {\r\n  Object(_modules_file__WEBPACK_IMPORTED_MODULE_0__[\"injectTextInFileAfterFlag\"])({\r\n    filePath,\r\n    flag: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES_FLAG\"],\r\n    content: Object(_modules_template_async_actions__WEBPACK_IMPORTED_MODULE_2__[\"getAsyncActionTypes\"])(actionName)\r\n  });\r\n  Object(_modules_file__WEBPACK_IMPORTED_MODULE_0__[\"injectTextInFileAfterFlag\"])({\r\n    filePath,\r\n    flag: _constants__WEBPACK_IMPORTED_MODULE_1__[\"MODULE_ACTION_TYPE\"],\r\n    content: Object(_modules_template_async_actions__WEBPACK_IMPORTED_MODULE_2__[\"getAsyncActions\"])(actionName),\r\n    flagIndexOffset: 2\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/controllers/action.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minimist */ \"./node_modules/minimist/index.js\");\n/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(minimist__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\r\n\r\n\r\nconst argv = minimist__WEBPACK_IMPORTED_MODULE_0___default()(process.argv.slice(2));\r\n\r\nconst run = async () => {\r\n  const { actionName, path: filePath, create, moduleName } = argv;\r\n  \r\n  if (create && moduleName) {\r\n    Object(_routes__WEBPACK_IMPORTED_MODULE_1__[\"createModule\"])(moduleName, filePath);\r\n    return;\r\n  }\r\n\r\n  Object(_routes__WEBPACK_IMPORTED_MODULE_1__[\"addAction\"])(actionName, filePath, true);\r\n};\r\n\r\nrun();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/file.js":
/*!*****************************!*\
  !*** ./src/modules/file.js ***!
  \*****************************/
/*! exports provided: addAsyncActionTypesToFile, addAsyncActionTypesToGlobalAction, injectTextInFileAfterFlag, addTypeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAsyncActionTypesToFile\", function() { return addAsyncActionTypesToFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAsyncActionTypesToGlobalAction\", function() { return addAsyncActionTypesToGlobalAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"injectTextInFileAfterFlag\", function() { return injectTextInFileAfterFlag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTypeFile\", function() { return addTypeFile; });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\nconst addAsyncActionTypesToFile = (actionName, filePath, content) => {\r\n  const fileRows = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath).toString().split('\\n');\r\n\r\n  for (let i = 0; i < fileRows.length; i++) {\r\n    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"hasCommentFlag\"])(fileRows[i], _constants__WEBPACK_IMPORTED_MODULE_1__[\"ACTION_TYPES_FLAG\"])) {\r\n      fileRows.splice(i + 1, 0, content);\r\n      break;\r\n    }\r\n  }\r\n\r\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, fileRows.join('\\n'));\r\n};\r\n\r\nconst addAsyncActionTypesToGlobalAction = (actionName, filePath, content) => {\r\n  const fileRows = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath).toString().split('\\n');\r\n\r\n  for (let i = 0; i < fileRows.length; i++) {\r\n    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"hasCommentFlag\"])(fileRows[i], _constants__WEBPACK_IMPORTED_MODULE_1__[\"MODULE_ACTION_TYPE\"])) {\r\n      fileRows.splice(i + 2, 0, content);\r\n      break;\r\n    }\r\n  }\r\n\r\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, fileRows.join('\\n'));\r\n};\r\n\r\nconst injectTextInFileAfterFlag = ({ filePath, flag, content, flagIndexOffset = 1 }) => {\r\n  const fileRows = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(filePath).toString().split('\\n');\r\n\r\n  for (let i = 0; i < fileRows.length; i++) {\r\n    if (Object(_util__WEBPACK_IMPORTED_MODULE_2__[\"hasCommentFlag\"])(fileRows[i], flag)) {\r\n      fileRows.splice(i + flagIndexOffset, 0, content);\r\n      break;\r\n    }\r\n  }\r\n\r\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, fileRows.join('\\n'));\r\n};\r\n\r\nconst addTypeFile = (filePath, content) => {\r\n  fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(filePath, content);\r\n};\n\n//# sourceURL=webpack:///./src/modules/file.js?");

/***/ }),

/***/ "./src/modules/template/async-actions.js":
/*!***********************************************!*\
  !*** ./src/modules/template/async-actions.js ***!
  \***********************************************/
/*! exports provided: _getAsyncActionTypeTemplate, _getAsyncActionTemplate, getAsyncActionTypes, getAsyncActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_getAsyncActionTypeTemplate\", function() { return _getAsyncActionTypeTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_getAsyncActionTemplate\", function() { return _getAsyncActionTemplate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsyncActionTypes\", function() { return getAsyncActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAsyncActions\", function() { return getAsyncActions; });\nconst _getAsyncActionTypeTemplate = (actionName) => ([\r\n  `export const ${actionName}_REQUEST: '${actionName}_REQUEST' = '${actionName}_REQUEST';\\n`,\r\n  `export const ${actionName}_SUCCESS: '${actionName}_SUCCESS' = '${actionName}_SUCCESS';\\n`,\r\n  `export const ${actionName}_FAILURE: '${actionName}_FAILURE' = '${actionName}_FAILURE';\\n`,\r\n  `export type ${actionName}_REQUEST_ACTION = { type: typeof ${actionName}_REQUEST };\\n`,\r\n  `export type ${actionName}_SUCCESS_ACTION = { type: typeof ${actionName}_SUCCESS };\\n`,\r\n  `export type ${actionName}_FAILURE_ACTION = { type: typeof ${actionName}_SUCCESS, error: Object };\\n`\r\n]);\r\n\r\nconst _getAsyncActionTemplate = (actionName) => ([\r\n  `  | ${actionName}_REQUEST_ACTION\\n`,\r\n  `  | ${actionName}_SUCCESS_ACTION\\n`,\r\n  `  | ${actionName}_FAILURE_ACTION\\n`\r\n]);\r\n\r\nconst getAsyncActionTypes = (actionName) => ( \r\n  _getAsyncActionTypeTemplate(actionName).join('') \r\n);\r\n\r\nconst getAsyncActions = (actionName) => (\r\n  _getAsyncActionTemplate(actionName).join('')\r\n);\r\n\n\n//# sourceURL=webpack:///./src/modules/template/async-actions.js?");

/***/ }),

/***/ "./src/modules/template/module-types.js":
/*!**********************************************!*\
  !*** ./src/modules/template/module-types.js ***!
  \**********************************************/
/*! exports provided: getTypeFileTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTypeFileTemplate\", function() { return getTypeFileTemplate; });\nconst _getStoreActionTypes = (moduleName) => ([\r\n  `type GetState = () => { auth: ${moduleName}State };\\n`,\r\n  `type PromiseAction = Promise<${moduleName}Action>;\\n`,\r\n  `export type Dispatch = (action: ${moduleName}Action | ThunkAction | PromiseAction | Array<${moduleName}Action>) => any;\\n`,\r\n  `export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;`\r\n]);\r\n\r\nconst _getModuleTypeFileTemplate = (moduleName) => ([\r\n  '//@flow \\n',\r\n  `export type ${moduleName}State = {}; \\n\\n`,\r\n  '// Action Types \\n',\r\n  '// Module Action Type \\n',\r\n  `export type ${moduleName}Action = \\n\\n`\r\n]);\r\n\r\nconst getTypeFileTemplate = (moduleName) => {\r\n  return (\r\n    _getModuleTypeFileTemplate(moduleName)\r\n      .concat(\r\n        _getStoreActionTypes(moduleName)\r\n      ).join('')\r\n  );\r\n};\n\n//# sourceURL=webpack:///./src/modules/template/module-types.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: createModule, addAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createModule\", function() { return createModule; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAction\", function() { return addAction; });\n/* harmony import */ var _modules_template_module_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/template/module-types */ \"./src/modules/template/module-types.js\");\n/* harmony import */ var _modules_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/file */ \"./src/modules/file.js\");\n/* harmony import */ var _controllers_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/action */ \"./src/controllers/action.js\");\n\r\n\r\n\r\n\r\n// const cwd = path.basename(process.cwd());\r\n\r\nconst createModule = (moduleName, path) => {\r\n  // TODO: move this section in actions controller\r\n  Object(_modules_file__WEBPACK_IMPORTED_MODULE_1__[\"addTypeFile\"])(\r\n    path,\r\n    Object(_modules_template_module_types__WEBPACK_IMPORTED_MODULE_0__[\"getTypeFileTemplate\"])(moduleName)\r\n  );\r\n};\r\n\r\nconst addAction = (actionName, typeFilePath, isAsync = false) => {\r\n  if (isAsync) {\r\n    Object(_controllers_action__WEBPACK_IMPORTED_MODULE_2__[\"addAsyncAction\"])(actionName, typeFilePath);\r\n  }\r\n  // TODO: add sync action support\r\n};\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: hasCommentFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasCommentFlag\", function() { return hasCommentFlag; });\nconst hasCommentFlag = (row, flag) => {\r\n  return row.replace(new RegExp(' ', 'g'), '').toLowerCase() === flag;\r\n};\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });