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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar rootReducer_1 = __webpack_require__(/*! ./store/rootReducer */ \"./src/store/rootReducer.ts\");\r\nvar store = redux_1.createStore(rootReducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(react_loading_skeleton_1.SkeletonTheme, { baseColor: \"#F3F3F3\", highlightColor: \"#FFFFFF\" },\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Header_1.Header, null),\r\n                react_1.default.createElement(Content_1.Content, null,\r\n                    react_1.default.createElement(CardsList_1.CardsList, null))))));\r\n}\r\n// Вводим стрелочную функцию, чтобы AppComponent не преобразовывался в класс-компонент\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/posts/actions */ \"./src/store/posts/actions.ts\");\r\nfunction usePostsData() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var data = react_redux_1.useSelector(function (state) { return state.posts.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.posts.loading; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token || token === 'undefined')\r\n            return;\r\n        dispatch(actions_1.postsRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading,\r\n    };\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/me/actions */ \"./src/store/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token || token === 'undefined')\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading,\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nsvg,\\nsvg * {\\n  color: currentColor;\\n}\\n\\n:root {\\n  --black: #333333;\\n  --orange: #CC6633;\\n  --green: #A4CC33;\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --grayEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  /* position: relative; */\\n  margin: 0;\\n  padding: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n@keyframes react-loading-skeleton {\\n  100% {\\n      transform: translateX(100%);\\n  }\\n}\\n\\n.react-loading-skeleton {\\n  --base-color: #ebebeb;\\n  --highlight-color: #f5f5f5;\\n  --animation-duration: 1.5s;\\n  --animation-direction: normal;\\n  --pseudo-element-display: block; /* Enable animation */\\n\\n  background-color: var(--base-color);\\n\\n  width: 100%;\\n  border-radius: 0.25rem;\\n  display: inline-flex;\\n  line-height: 1;\\n\\n  position: relative;\\n  overflow: hidden;\\n  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\\n}\\n\\n.react-loading-skeleton::after {\\n  content: ' ';\\n  display: var(--pseudo-element-display);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  height: 100%;\\n  background-repeat: no-repeat;\\n  background-image: linear-gradient(\\n      90deg,\\n      var(--base-color),\\n      var(--highlight-color),\\n      var(--base-color)\\n  );\\n  transform: translateX(-100%);\\n\\n  animation-name: react-loading-skeleton;\\n  animation-direction: var(--animation-direction);\\n  animation-duration: var(--animation-duration);\\n  animation-timing-function: ease-in-out;\\n  animation-iteration-count: infinite;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexHtmlTemplate.js":
/*!*****************************************!*\
  !*** ./src/server/indexHtmlTemplate.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexHtmlTemplate = void 0;\r\nvar indexHtmlTemplate = function (content, token) { return \"\\n  <!DOCTYPE html>\\n  <html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n    <script>\\n      window.__token__ = '\" + token + \"'\\n    </script>\\n  </head>\\n  <body>\\n    <div id=\\\"react_root\\\">\" + content + \"</div>\\n    <div id=\\\"modal_root\\\"></div>\\n    <div id=\\\"dropdown_root\\\"></div>\\n  </body>\\n  </html>\\n\"; };\r\nexports.indexHtmlTemplate = indexHtmlTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexHtmlTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\n// По URL '/static' будут доступны все файлы, которые лежат в папке 'dist/client'\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '1fY8XELTy63quSYPXcab0g', password: 'V8i-AW5b7HL4Hyl8-0K33g34xIvkaQ' },\r\n        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null)), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar break_css_1 = __importDefault(__webpack_require__(/*! ./break.css */ \"./src/shared/Break/break.css\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(break_css_1.default[\"s\" + size], (_a = {}, _a[break_css_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_css_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_css_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_css_1.default.inline] = inline, _d), (_e = {}, _e[break_css_1.default.top] = top, _e));\r\n    return (react_1.default.createElement(\"div\", { className: classes }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.css":
/*!************************************!*\
  !*** ./src/shared/Break/break.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--rnbuA\",\n\t\"s8\": \"break__s8--2ubV4\",\n\t\"s12\": \"break__s12--3dSW2\",\n\t\"s16\": \"break__s16--2bop2\",\n\t\"s20\": \"break__s20--PBhCB\",\n\t\"inline\": \"break__inline--22pcx\",\n\t\"top\": \"break__top--25ISJ\",\n\t\"mobile_s4\": \"break__mobile_s4--LrEFY\",\n\t\"mobile_s8\": \"break__mobile_s8--1Tmgm\",\n\t\"mobile_s12\": \"break__mobile_s12--2En9X\",\n\t\"mobile_s16\": \"break__mobile_s16--2KmPq\",\n\t\"mobile_s20\": \"break__mobile_s20--1j8g5\",\n\t\"tablet_s4\": \"break__tablet_s4--2nTnL\",\n\t\"tablet_s8\": \"break__tablet_s8--7zEhs\",\n\t\"tablet_s12\": \"break__tablet_s12--3Y-kT\",\n\t\"tablet_s16\": \"break__tablet_s16--2rsLQ\",\n\t\"tablet_s20\": \"break__tablet_s20--V1f92\",\n\t\"desktop_s4\": \"break__desktop_s4--3mFLY\",\n\t\"desktop_s8\": \"break__desktop_s8--2uQYJ\",\n\t\"desktop_s12\": \"break__desktop_s12--1-0wy\",\n\t\"desktop_s16\": \"break__desktop_s16--2k7qE\",\n\t\"desktop_s20\": \"break__desktop_s20--AjVsi\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.css?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nfunction Card(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId, authorName = _a.authorName, authorAvatarSrc = _a.authorAvatarSrc, descr = _a.descr, created = _a.created, karma = _a.karma, commentsNumber = _a.commentsNumber;\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { subreddit: subreddit, postId: postId, authorName: authorName, authorAvatarSrc: authorAvatarSrc, descr: descr, created: created }),\r\n        react_1.default.createElement(Preview_1.Preview, { src: authorAvatarSrc }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, { karma: karma, commentsNumber: commentsNumber })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/Actions.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/Actions.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/CardsList/Card/Controls/Actions/actions.css\"));\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Controls/Actions/SaveButton/index.ts\");\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Controls/Actions/ShareButton/index.ts\");\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\r\n        react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n        react_1.default.createElement(SaveButton_1.SaveButton, null)));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar savebutton_css_1 = __importDefault(__webpack_require__(/*! ./savebutton.css */ \"./src/shared/CardsList/Card/Controls/Actions/SaveButton/savebutton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebutton_css_1.default.saveButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/SaveButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/SaveButton/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardsList/Card/Controls/Actions/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/SaveButton/savebutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/SaveButton/savebutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebutton__saveButton--39UcU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/SaveButton/savebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sharebutton_css_1 = __importDefault(__webpack_require__(/*! ./sharebutton.css */ \"./src/shared/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebutton_css_1.default.shareButton },\r\n        react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/ShareButton/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/ShareButton/index.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardsList/Card/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebutton__shareButton--2q_GE\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/ShareButton/sharebutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/actions.css":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/actions.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actions__actions--CKLJF\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Actions/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Actions/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbutton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css\"));\r\nfunction CommentsButton(_a) {\r\n    var commentsNumber = _a.commentsNumber;\r\n    return (react_1.default.createElement(\"button\", { className: commentsbutton_css_1.default.commentsButton },\r\n        react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n        react_1.default.createElement(\"span\", { className: commentsbutton_css_1.default.commentsNumber }, commentsNumber)));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbutton__commentsButton--3bUHw\",\n\t\"commentsNumber\": \"commentsbutton__commentsNumber--3_qtU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/CommentsButton/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/CommentsButton/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Actions_1 = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/Controls/Actions/index.ts\");\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/Controls/CommentsButton/index.ts\");\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts\");\r\nfunction Controls(_a) {\r\n    var karma = _a.karma, commentsNumber = _a.commentsNumber;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, { karma: karma }),\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, { commentsNumber: commentsNumber }),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar karmacounter_css_1 = __importDefault(__webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css\"));\r\nfunction KarmaCounter(_a) {\r\n    var karma = _a.karma;\r\n    return (react_1.default.createElement(\"div\", { className: karmacounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.up },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp })),\r\n        react_1.default.createElement(\"span\", { className: karmacounter_css_1.default.karmaValue }, karma),\r\n        react_1.default.createElement(\"button\", { className: karmacounter_css_1.default.down },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp }))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounter__karmaCounter--fMpNv\",\n\t\"karmaValue\": \"karmacounter__karmaValue--1Ho-U\",\n\t\"up\": \"karmacounter__up--1SZXL\",\n\t\"down\": \"karmacounter__down--1V_4R\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--1pbuI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar MenuItemsList_1 = __webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts\");\r\nfunction Menu() {\r\n    var _a = react_1.useState(false), isMenuOpened = _a[0], setIsMenuOpened = _a[1];\r\n    var _b = react_1.useState({\r\n        top: 0,\r\n        left: 1000000,\r\n    }), coords = _b[0], setCoords = _b[1];\r\n    var menuContainerRef = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function updateCoords() {\r\n            var _a, _b, _c, _d, _e, _f, _g, _h;\r\n            var screenWidth = document.documentElement.clientWidth;\r\n            console.log(screenWidth);\r\n            screenWidth >= 1024 ? setCoords({\r\n                top: ((_a = menuContainerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) ? ((_b = menuContainerRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().y) + 70 + document.documentElement.scrollTop : 0,\r\n                left: ((_c = menuContainerRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()) ? ((_d = menuContainerRef.current) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect().x) + 15 : 0,\r\n            }) : setCoords({\r\n                top: ((_e = menuContainerRef.current) === null || _e === void 0 ? void 0 : _e.getBoundingClientRect()) ? ((_f = menuContainerRef.current) === null || _f === void 0 ? void 0 : _f.getBoundingClientRect().y) + 32 + document.documentElement.scrollTop : 0,\r\n                left: ((_g = menuContainerRef.current) === null || _g === void 0 ? void 0 : _g.getBoundingClientRect()) ? ((_h = menuContainerRef.current) === null || _h === void 0 ? void 0 : _h.getBoundingClientRect().x) + 25 : 0,\r\n            });\r\n        }\r\n        setTimeout(function () {\r\n            updateCoords();\r\n        }, 1000);\r\n        window.addEventListener('resize', updateCoords);\r\n        return function () { return window.removeEventListener('resize', updateCoords); };\r\n    }, []);\r\n    var handleOpen = function () {\r\n        setIsMenuOpened(!isMenuOpened);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu, ref: menuContainerRef },\r\n        react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton, onClick: handleOpen },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.menu })),\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { isOpened: isMenuOpened, handleOpen: handleOpen, coords: coords },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { postId: '1234' }),\r\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.gray66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar menuitemslist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.css */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css\"));\r\nvar itemList = [\r\n    { text: 'Комментарии', className: menuitemslist_css_1.default.commentsItem, iconName: Icon_1.EIcons.comments },\r\n    { text: 'Поделиться', className: menuitemslist_css_1.default.shareItem, iconName: Icon_1.EIcons.share },\r\n    { text: 'Скрыть', className: menuitemslist_css_1.default.hideItem, iconName: Icon_1.EIcons.block },\r\n    { text: 'Сохранить', className: menuitemslist_css_1.default.saveItem, iconName: Icon_1.EIcons.save },\r\n    { text: 'Пожаловаться', className: menuitemslist_css_1.default.reportItem, iconName: Icon_1.EIcons.warning }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_css_1.default.menuItemsList }, itemList.map(function (item, index) {\r\n        return react_1.default.createElement(\"li\", { className: menuitemslist_css_1.default.menuItem + \" \" + item.className, key: item.id },\r\n            react_1.default.createElement(Icon_1.Icon, { name: item.iconName, width: item.iconWidth, height: item.iconHeight }),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColors.gray99 }, item.text));\r\n    })));\r\n}\r\nexports.MenuItemsList = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--3fgSr\",\n\t\"menuItem\": \"menuitemslist__menuItem--2CsEl\",\n\t\"commentsItem\": \"menuitemslist__commentsItem--A5PKc\",\n\t\"shareItem\": \"menuitemslist__shareItem--CA7Cc\",\n\t\"saveItem\": \"menuitemslist__saveItem--26x4p\",\n\t\"hideItem\": \"menuitemslist__hideItem--DeG9A\",\n\t\"reportItem\": \"menuitemslist__reportItem--1MWGK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--22Yos\",\n\t\"menuButton\": \"menu__menuButton--2RzAb\",\n\t\"dropdown\": \"menu__dropdown--2v5tI\",\n\t\"closeButton\": \"menu__closeButton--1Vmbj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var src = _a.src;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: src })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--1Nukb\",\n\t\"previewImg\": \"preview__previewImg--3kTAV\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar convertPostCreatedValue_1 = __webpack_require__(/*! ../../../../utils/js/convertPostCreatedValue */ \"./src/utils/js/convertPostCreatedValue.ts\");\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/CardsList/Card/TextContent/textcontent.css\"));\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/index.ts\");\r\nvar UserLink_1 = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/index.ts\");\r\nfunction TextContent(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId, authorName = _a.authorName, authorAvatarSrc = _a.authorAvatarSrc, descr = _a.descr, created = _a.created;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_css_1.default.metaData },\r\n            react_1.default.createElement(UserLink_1.UserLink, { authorName: authorName, authorAvatarSrc: authorAvatarSrc }),\r\n            react_1.default.createElement(\"span\", { className: textcontent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"), \"\" + convertPostCreatedValue_1.convertPostCreatedValue(created))),\r\n        react_1.default.createElement(Title_1.Title, { subreddit: subreddit, postId: postId, descr: descr })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/Title.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/Title.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Post_1 = __webpack_require__(/*! ../../../../Post */ \"./src/shared/Post/index.ts\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/Title/title.css\"));\r\nfunction Title(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId, descr = _a.descr;\r\n    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(\"a\", { href: \"#post-url\", className: title_css_1.default.postLink, onClick: function () { setIsModalOpened(true); } }, descr),\r\n        isModalOpened && react_1.default.createElement(Post_1.Post, { subreddit: subreddit, postId: postId, onClose: function () { setIsModalOpened(false); } })));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/CardsList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/Title/title.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/Title/title.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3THtn\",\n\t\"postLink\": \"title__postLink--3ZH1E\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLink = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userlink_css_1 = __importDefault(__webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/Card/TextContent/UserLink/userlink.css\"));\r\nfunction UserLink(_a) {\r\n    var authorAvatarSrc = _a.authorAvatarSrc, authorName = _a.authorName;\r\n    return (react_1.default.createElement(\"div\", { className: userlink_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { className: userlink_css_1.default.avatar, src: authorAvatarSrc, alt: \"avatar\" }),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: userlink_css_1.default.username }, authorName)));\r\n}\r\nexports.UserLink = UserLink;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/TextContent/UserLink/UserLink.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/UserLink/userlink.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/UserLink/userlink.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlink__userLink--X580t\",\n\t\"avatar\": \"userlink__avatar--3wav7\",\n\t\"username\": \"userlink__username--1lMzo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textcontent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textcontent.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--2RuXa\",\n\t\"metaData\": \"textcontent__metaData--1L7oU\",\n\t\"createdAt\": \"textcontent__createdAt--1vECY\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--C6Pau\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/CardSkeleton.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/CardSkeleton.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar TextContentSkeleton_1 = __webpack_require__(/*! ./TextContentSkeleton/TextContentSkeleton */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TextContentSkeleton.tsx\");\r\nvar PreviewSkeleton_1 = __webpack_require__(/*! ./PreviewSkeleton/PreviewSkeleton */ \"./src/shared/CardsList/CardSkeleton/PreviewSkeleton/PreviewSkeleton.tsx\");\r\nvar MenuSkeleton_1 = __webpack_require__(/*! ./MenuSkeleton/MenuSkeleton */ \"./src/shared/CardsList/CardSkeleton/MenuSkeleton/MenuSkeleton.tsx\");\r\nvar ControlsSkeleton_1 = __webpack_require__(/*! ./ControlsSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/index.ts\");\r\nvar cardskeleton_css_1 = __importDefault(__webpack_require__(/*! ./cardskeleton.css */ \"./src/shared/CardsList/CardSkeleton/cardskeleton.css\"));\r\nfunction CardSkeleton() {\r\n    return (react_1.default.createElement(\"li\", { className: cardskeleton_css_1.default.card },\r\n        react_1.default.createElement(TextContentSkeleton_1.TextContentSkeleton, null),\r\n        react_1.default.createElement(PreviewSkeleton_1.PreviewSkeleton, null),\r\n        react_1.default.createElement(MenuSkeleton_1.MenuSkeleton, null),\r\n        react_1.default.createElement(ControlsSkeleton_1.ControlsSkeleton, null)));\r\n}\r\nexports.CardSkeleton = CardSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/CardSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ActionsSkeleton.tsx":
/*!************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ActionsSkeleton.tsx ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ActionsSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actionsskeleton_css_1 = __importDefault(__webpack_require__(/*! ./actionsskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/actionsskeleton.css\"));\r\nvar SaveButtonSkeleton_1 = __webpack_require__(/*! ./SaveButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/index.ts\");\r\nvar ShareButtonSkeleton_1 = __webpack_require__(/*! ./ShareButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/index.ts\");\r\nfunction ActionsSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: actionsskeleton_css_1.default.actions },\r\n        react_1.default.createElement(ShareButtonSkeleton_1.ShareButtonSkeleton, null),\r\n        react_1.default.createElement(SaveButtonSkeleton_1.SaveButtonSkeleton, null)));\r\n}\r\nexports.ActionsSkeleton = ActionsSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ActionsSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/SaveButtonSkeleton.tsx":
/*!**********************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/SaveButtonSkeleton.tsx ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButtonSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar savebuttonskeleton_css_1 = __importDefault(__webpack_require__(/*! ./savebuttonskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/savebuttonskeleton.css\"));\r\nfunction SaveButtonSkeleton() {\r\n    return (react_1.default.createElement(\"button\", { className: savebuttonskeleton_css_1.default.saveButton },\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { width: 20, height: 20, circle: true })));\r\n}\r\nexports.SaveButtonSkeleton = SaveButtonSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/SaveButtonSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/index.ts":
/*!********************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/index.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/SaveButtonSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/savebuttonskeleton.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/savebuttonskeleton.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"saveButton\": \"savebuttonskeleton__saveButton--1ntYH\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/SaveButtonSkeleton/savebuttonskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/ShareButtonSkeleton.tsx":
/*!************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/ShareButtonSkeleton.tsx ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButtonSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar sharebuttonskeleton_css_1 = __importDefault(__webpack_require__(/*! ./sharebuttonskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/sharebuttonskeleton.css\"));\r\nfunction ShareButtonSkeleton() {\r\n    return (react_1.default.createElement(\"button\", { className: sharebuttonskeleton_css_1.default.shareButton },\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { width: 20, height: 20, circle: true })));\r\n}\r\nexports.ShareButtonSkeleton = ShareButtonSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/ShareButtonSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/index.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/index.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/ShareButtonSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/sharebuttonskeleton.css":
/*!************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/sharebuttonskeleton.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"shareButton\": \"sharebuttonskeleton__shareButton--1WBju\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ShareButtonSkeleton/sharebuttonskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/actionsskeleton.css":
/*!************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/actionsskeleton.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actions\": \"actionsskeleton__actions--2DTd5\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/actionsskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/index.ts":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/index.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ActionsSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/ActionsSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/CommentsButtonSkeleton.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/CommentsButtonSkeleton.tsx ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButtonSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentsbuttonskeleton_css_1 = __importDefault(__webpack_require__(/*! ./commentsbuttonskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/commentsbuttonskeleton.css\"));\r\nfunction CommentsButtonSkeleton() {\r\n    return (react_1.default.createElement(\"button\", { className: commentsbuttonskeleton_css_1.default.commentsButton }));\r\n}\r\nexports.CommentsButtonSkeleton = CommentsButtonSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/CommentsButtonSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/commentsbuttonskeleton.css":
/*!**************************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/commentsbuttonskeleton.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsButton\": \"commentsbuttonskeleton__commentsButton--3POUD\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/commentsbuttonskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/index.ts":
/*!********************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/index.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/CommentsButtonSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ControlsSkeleton.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ControlsSkeleton.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ControlsSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar ActionsSkeleton_1 = __webpack_require__(/*! ./ActionsSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ActionsSkeleton/index.ts\");\r\nvar CommentsButtonSkeleton_1 = __webpack_require__(/*! ./CommentsButtonSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/CommentsButtonSkeleton/index.ts\");\r\nvar KarmaCounterSkeleton_1 = __webpack_require__(/*! ./KarmaCounterSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/index.ts\");\r\nvar controlsskeleton_css_1 = __importDefault(__webpack_require__(/*! ./controlsskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/controlsskeleton.css\"));\r\nfunction ControlsSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: controlsskeleton_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounterSkeleton_1.KarmaCounterSkeleton, null),\r\n        react_1.default.createElement(CommentsButtonSkeleton_1.CommentsButtonSkeleton, null),\r\n        react_1.default.createElement(ActionsSkeleton_1.ActionsSkeleton, null)));\r\n}\r\nexports.ControlsSkeleton = ControlsSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ControlsSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/KarmaCounterSkeleton.tsx":
/*!**********************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/KarmaCounterSkeleton.tsx ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounterSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar karmacounterskeleton_css_1 = __importDefault(__webpack_require__(/*! ./karmacounterskeleton.css */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/karmacounterskeleton.css\"));\r\nfunction KarmaCounterSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: karmacounterskeleton_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmacounterskeleton_css_1.default.up },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp })),\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: karmacounterskeleton_css_1.default.karmaValue }),\r\n        react_1.default.createElement(\"button\", { className: karmacounterskeleton_css_1.default.down },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp }))));\r\n}\r\nexports.KarmaCounterSkeleton = KarmaCounterSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/KarmaCounterSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/index.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounterSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/KarmaCounterSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/karmacounterskeleton.css":
/*!**********************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/karmacounterskeleton.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"karmacounterskeleton__karmaCounter--2mwLU\",\n\t\"karmaValue\": \"karmacounterskeleton__karmaValue--AqGtR\",\n\t\"up\": \"karmacounterskeleton__up--27wQg\",\n\t\"down\": \"karmacounterskeleton__down--1BMGI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/KarmaCounterSkeleton/karmacounterskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/controlsskeleton.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/controlsskeleton.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controlsskeleton__controls--3I3nU\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/controlsskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/ControlsSkeleton/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/ControlsSkeleton/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ControlsSkeleton */ \"./src/shared/CardsList/CardSkeleton/ControlsSkeleton/ControlsSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/ControlsSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/MenuSkeleton/MenuSkeleton.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/MenuSkeleton/MenuSkeleton.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar menuskeleton_css_1 = __importDefault(__webpack_require__(/*! ./menuskeleton.css */ \"./src/shared/CardsList/CardSkeleton/MenuSkeleton/menuskeleton.css\"));\r\nfunction MenuSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: menuskeleton_css_1.default.menu },\r\n        react_1.default.createElement(\"button\", { className: menuskeleton_css_1.default.menuButton },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.menu }))));\r\n}\r\nexports.MenuSkeleton = MenuSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/MenuSkeleton/MenuSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/MenuSkeleton/menuskeleton.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/MenuSkeleton/menuskeleton.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menuskeleton__menu--1H0yf\",\n\t\"menuButton\": \"menuskeleton__menuButton--YvRtf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/MenuSkeleton/menuskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/PreviewSkeleton/PreviewSkeleton.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/PreviewSkeleton/PreviewSkeleton.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PreviewSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar previewskeleton_css_1 = __importDefault(__webpack_require__(/*! ./previewskeleton.css */ \"./src/shared/CardsList/CardSkeleton/PreviewSkeleton/previewskeleton.css\"));\r\nfunction PreviewSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: previewskeleton_css_1.default.preview },\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: previewskeleton_css_1.default.previewImg })));\r\n}\r\nexports.PreviewSkeleton = PreviewSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/PreviewSkeleton/PreviewSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/PreviewSkeleton/previewskeleton.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/PreviewSkeleton/previewskeleton.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"previewskeleton__preview--2LuI8\",\n\t\"previewImg\": \"previewskeleton__previewImg--3SMow\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/PreviewSkeleton/previewskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TextContentSkeleton.tsx":
/*!***************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TextContentSkeleton.tsx ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContentSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar textcontentskeleton_css_1 = __importDefault(__webpack_require__(/*! ./textcontentskeleton.css */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/textcontentskeleton.css\"));\r\nvar TitleSkeleton_1 = __webpack_require__(/*! ./TitleSkeleton */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/index.ts\");\r\nvar UserLinkSkeleton_1 = __webpack_require__(/*! ./UserLinkSkeleton */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/index.ts\");\r\nfunction TextContentSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: textcontentskeleton_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontentskeleton_css_1.default.metaData },\r\n            react_1.default.createElement(UserLinkSkeleton_1.UserLinkSkeleton, null),\r\n            react_1.default.createElement(react_loading_skeleton_1.default, { className: textcontentskeleton_css_1.default.createdAt })),\r\n        react_1.default.createElement(TitleSkeleton_1.TitleSkeleton, null)));\r\n}\r\nexports.TextContentSkeleton = TextContentSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TextContentSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/TitleSkeleton.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/TitleSkeleton.tsx ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TitleSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar titleskeleton_css_1 = __importDefault(__webpack_require__(/*! ./titleskeleton.css */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/titleskeleton.css\"));\r\nfunction TitleSkeleton() {\r\n    return (react_1.default.createElement(\"h2\", { className: titleskeleton_css_1.default.title },\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: titleskeleton_css_1.default.firstRow }),\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: titleskeleton_css_1.default.secondRow })));\r\n}\r\nexports.TitleSkeleton = TitleSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/TitleSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/index.ts":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/index.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TitleSkeleton */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/TitleSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/titleskeleton.css":
/*!***********************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/titleskeleton.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"titleskeleton__title--1YJD5\",\n\t\"firstRow\": \"titleskeleton__firstRow--33oC4\",\n\t\"secondRow\": \"titleskeleton__secondRow--2R-31\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/TitleSkeleton/titleskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/UserLinkSkeleton.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/UserLinkSkeleton.tsx ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserLinkSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar userlinkskeleton_css_1 = __importDefault(__webpack_require__(/*! ./userlinkskeleton.css */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/userlinkskeleton.css\"));\r\nfunction UserLinkSkeleton() {\r\n    return (react_1.default.createElement(\"div\", { className: userlinkskeleton_css_1.default.userLink },\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: userlinkskeleton_css_1.default.avatar, circle: true }),\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: userlinkskeleton_css_1.default.username })));\r\n}\r\nexports.UserLinkSkeleton = UserLinkSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/UserLinkSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/index.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserLinkSkeleton */ \"./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/UserLinkSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/userlinkskeleton.css":
/*!*****************************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/userlinkskeleton.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userLink\": \"userlinkskeleton__userLink--2SEZk\",\n\t\"avatar\": \"userlinkskeleton__avatar--bsOEx\",\n\t\"username\": \"userlinkskeleton__username--1DD4x\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/UserLinkSkeleton/userlinkskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/TextContentSkeleton/textcontentskeleton.css":
/*!***************************************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/TextContentSkeleton/textcontentskeleton.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontentskeleton__textContent--14pRK\",\n\t\"metaData\": \"textcontentskeleton__metaData--1MGrN\",\n\t\"createdAt\": \"textcontentskeleton__createdAt--fIYIc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/TextContentSkeleton/textcontentskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/cardskeleton.css":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/cardskeleton.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"cardskeleton__card--A40XK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/cardskeleton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardSkeleton/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/CardSkeleton/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardSkeleton */ \"./src/shared/CardsList/CardSkeleton/CardSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar CardSkeleton_1 = __webpack_require__(/*! ./CardSkeleton */ \"./src/shared/CardsList/CardSkeleton/index.ts\");\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nfunction CardsList() {\r\n    var _a = usePostsData_1.usePostsData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        loading &&\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null)),\r\n        data.map(function (post) {\r\n            var postInfo = post.data;\r\n            return (react_1.default.createElement(react_1.default.Fragment, { key: postInfo.id },\r\n                react_1.default.createElement(Card_1.Card, { subreddit: postInfo.subreddit, postId: postInfo.id, authorName: postInfo.author, authorAvatarSrc: postInfo.thumbnail, descr: postInfo.title, created: postInfo.created, karma: postInfo.score, commentsNumber: postInfo.num_comments })));\r\n        })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(_a) {\r\n    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, _b = _a.isFocused, isFocused = _b === void 0 ? false : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Комментировать' : _c;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        var _a, _b, _c;\r\n        if (isFocused) {\r\n            var length_1 = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.value.length;\r\n            (_b = ref.current) === null || _b === void 0 ? void 0 : _b.focus();\r\n            // Ставим курсор в конце строки\r\n            if (length_1) {\r\n                (_c = ref.current) === null || _c === void 0 ? void 0 : _c.setSelectionRange(length_1, length_1);\r\n            }\r\n        }\r\n    }, []);\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: onSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, ref: ref, value: value, onChange: onChange }),\r\n        react_1.default.createElement(\"button\", { className: commentform_css_1.default.button }, buttonText)));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/commentText/actions */ \"./src/store/commentText/actions.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(e) {\r\n        dispatch(actions_1.updateComment(e.target.value));\r\n    }\r\n    function handleSubmit(e) {\r\n        e.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/Comment/Comment.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/Comment/Comment.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar convertPostCreatedValue_1 = __webpack_require__(/*! ../../../../utils/js/convertPostCreatedValue */ \"./src/utils/js/convertPostCreatedValue.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentBranch_1 = __webpack_require__(/*! ../CommentBranch */ \"./src/shared/CommentsList/CommentBranch/CommentBranch.tsx\");\r\nvar comment_css_1 = __importDefault(__webpack_require__(/*! ./comment.css */ \"./src/shared/CommentsList/CommentBranch/Comment/comment.css\"));\r\nvar ReplyFormContainer_1 = __webpack_require__(/*! ../../../ReplyFormContainer */ \"./src/shared/ReplyFormContainer/index.ts\");\r\nfunction Comment(_a) {\r\n    var author = _a.author, created = _a.created, message = _a.message;\r\n    var _b = react_1.useState(false), isReplyFormOpened = _b[0], setIsReplyFormOpened = _b[1];\r\n    function handleReplyClick() {\r\n        setIsReplyFormOpened(!isReplyFormOpened);\r\n    }\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: comment_css_1.default.comment },\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.karma },\r\n                react_1.default.createElement(\"button\", { className: comment_css_1.default.up },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp })),\r\n                react_1.default.createElement(\"button\", { className: comment_css_1.default.down },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp }))),\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.top },\r\n                react_1.default.createElement(\"img\", { className: comment_css_1.default.avatar, src: \"https://cdn.dribbble.com/userupload/2641498/file/original-dcd3b3dcf1f600ac3a92f27605bc1c77.png?compress=1&resize=752x564\", alt: \"\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: comment_css_1.default.userLink }, author),\r\n                react_1.default.createElement(\"span\", { className: comment_css_1.default.created },\r\n                    \"\\u00A0\",\r\n                    convertPostCreatedValue_1.convertPostCreatedValue(created)),\r\n                react_1.default.createElement(\"div\", { className: comment_css_1.default.league }, \"\\u041B\\u0438\\u0433\\u0430 \\u044E\\u0440\\u0438\\u0441\\u0442\\u043E\\u0432\")),\r\n            react_1.default.createElement(\"p\", { className: comment_css_1.default.message }, message),\r\n            react_1.default.createElement(\"div\", { className: comment_css_1.default.controls },\r\n                react_1.default.createElement(\"button\", { onClick: handleReplyClick },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comments }),\r\n                    \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\"),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share }),\r\n                    \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\"),\r\n                react_1.default.createElement(\"button\", null,\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.warning }),\r\n                    \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n        isReplyFormOpened &&\r\n            react_1.default.createElement(CommentBranch_1.CommentBranch, null,\r\n                react_1.default.createElement(ReplyFormContainer_1.ReplyFormContainer, { author: author }))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/Comment/comment.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/Comment/comment.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"comment__comment--3WKNo\",\n\t\"karma\": \"comment__karma--3WhRH\",\n\t\"up\": \"comment__up--1-RZ-\",\n\t\"down\": \"comment__down--dH6NN\",\n\t\"top\": \"comment__top---CccQ\",\n\t\"avatar\": \"comment__avatar--3_tET\",\n\t\"userLink\": \"comment__userLink--1bY7l\",\n\t\"created\": \"comment__created--XsVvD\",\n\t\"league\": \"comment__league--35Flg\",\n\t\"message\": \"comment__message--36wlf\",\n\t\"controls\": \"comment__controls--1WBxj\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/Comment/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/Comment/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/CommentsList/CommentBranch/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/CommentBranch.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/CommentBranch.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentBranch = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar commentbranch_css_1 = __importDefault(__webpack_require__(/*! ./commentbranch.css */ \"./src/shared/CommentsList/CommentBranch/commentbranch.css\"));\r\nfunction CommentBranch(_a) {\r\n    var children = _a.children;\r\n    var _b = react_1.useState(false), isBranchCollapsed = _b[0], setIsBranchCollapsed = _b[1];\r\n    function handleClick() {\r\n        setIsBranchCollapsed(!isBranchCollapsed);\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: \"\" + commentbranch_css_1.default.branch + (isBranchCollapsed ? \" \" + commentbranch_css_1.default.collapsed : '') }, react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"button\", { className: \"\" + commentbranch_css_1.default.expandBtn + (!isBranchCollapsed ? \" \" + commentbranch_css_1.default.hidden : ''), onClick: handleClick },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.expand })),\r\n        react_1.default.createElement(\"div\", { className: commentbranch_css_1.default.line, onClick: handleClick }),\r\n        children)));\r\n}\r\nexports.CommentBranch = CommentBranch;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/CommentBranch.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/commentbranch.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/commentbranch.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"branch\": \"commentbranch__branch--1Rg4Z\",\n\t\"collapsed\": \"commentbranch__collapsed--aqkrh\",\n\t\"expandBtn\": \"commentbranch__expandBtn--217qb\",\n\t\"hidden\": \"commentbranch__hidden--2WlSa\",\n\t\"line\": \"commentbranch__line--1wpUc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/commentbranch.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranch/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranch/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentBranch */ \"./src/shared/CommentsList/CommentBranch/CommentBranch.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranch/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/CommentsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Comment_1 = __webpack_require__(/*! ./CommentBranch/Comment */ \"./src/shared/CommentsList/CommentBranch/Comment/index.ts\");\r\nvar CommentBranch_1 = __webpack_require__(/*! ./CommentBranch */ \"./src/shared/CommentsList/CommentBranch/index.ts\");\r\nfunction CommentsList(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = react_1.useState([]), list = _b[0], setList = _b[1];\r\n    react_1.useEffect(function () {\r\n        var controller = new AbortController();\r\n        axios_1.default.get(\"http://api.reddit.com/r/\" + subreddit + \"/comments/\" + postId, {\r\n            signal: controller.signal\r\n        })\r\n            .then(function (resp) {\r\n            setList(resp.data[1].data.children);\r\n            console.log(resp);\r\n        });\r\n        // Отменяем запрос при анмаунте компонента\r\n        return function () { return controller.abort(); };\r\n    }, []);\r\n    function outputList(list) {\r\n        return list.map(function (comment) {\r\n            var commentInfo = comment.data;\r\n            if (!commentInfo.author || !commentInfo.created || !commentInfo.body) {\r\n                return '';\r\n            }\r\n            return (react_1.default.createElement(CommentBranch_1.CommentBranch, { key: commentInfo.id },\r\n                react_1.default.createElement(Comment_1.Comment, { author: commentInfo.author, created: commentInfo.created, message: commentInfo.body }),\r\n                // Если есть ответы, снова вызываем функцию outputList, но передаём уже список из replies\r\n                commentInfo.replies ? outputList(commentInfo.replies.data.children) : ''));\r\n        });\r\n    }\r\n    return (react_1.default.createElement(\"div\", null, outputList(list)));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentsList/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/CommentsList/CommentsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(props) {\r\n    var coords = props.coords, children = props.children, isOpened = props.isOpened, handleOpen = props.handleOpen;\r\n    // useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);\r\n    // useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])\r\n    var node = document.getElementById('dropdown_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container, style: coords }, isOpened &&\r\n        react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: handleOpen }, children)))), node);\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--a5Jzh\",\n\t\"listContainer\": \"dropdown__listContainer--YYYB3\",\n\t\"list\": \"dropdown__list--23slg\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nvar UserBlockSkeleton_1 = __webpack_require__(/*! ./UserBlockSkeleton */ \"./src/shared/Header/SearchBlock/UserBlockSkeleton/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = useUserData_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock }, loading\r\n        ? react_1.default.createElement(UserBlockSkeleton_1.UserBlockSkeleton, null)\r\n        : react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=\" + '1fY8XELTy63quSYPXcab0g' + \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.anon })),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColors.black : Text_1.EColors.gray99 }, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"avatarBox\": \"userblock__avatarBox--2OTfi\",\n\t\"avatarImage\": \"userblock__avatarImage--2ryXC\",\n\t\"username\": \"userblock__username--3bLc0\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlockSkeleton/UserBlockSkeleton.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlockSkeleton/UserBlockSkeleton.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlockSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nvar userblockskeleton_css_1 = __importDefault(__webpack_require__(/*! ./userblockskeleton.css */ \"./src/shared/Header/SearchBlock/UserBlockSkeleton/userblockskeleton.css\"));\r\nfunction UserBlockSkeleton() {\r\n    return (react_1.default.createElement(\"a\", { className: userblockskeleton_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblockskeleton_css_1.default.avatarBox },\r\n            react_1.default.createElement(react_loading_skeleton_1.default, { className: userblockskeleton_css_1.default.avatarImage, circle: true })),\r\n        react_1.default.createElement(react_loading_skeleton_1.default, { className: userblockskeleton_css_1.default.username })));\r\n}\r\nexports.UserBlockSkeleton = UserBlockSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlockSkeleton/UserBlockSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlockSkeleton/index.ts":
/*!******************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlockSkeleton/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlockSkeleton */ \"./src/shared/Header/SearchBlock/UserBlockSkeleton/UserBlockSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlockSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlockSkeleton/userblockskeleton.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlockSkeleton/userblockskeleton.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblockskeleton__userBox--4NytZ\",\n\t\"avatarBox\": \"userblockskeleton__avatarBox--lb7hE\",\n\t\"avatarImage\": \"userblockskeleton__avatarImage--17a47\",\n\t\"username\": \"userblockskeleton__username--3nORI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlockSkeleton/userblockskeleton.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--141aZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--oxugx\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons = __importStar(__webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\"));\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"anon\"] = \"AnonIcon\";\r\n    EIcons[\"arrowUp\"] = \"ArrowUpIcon\";\r\n    EIcons[\"block\"] = \"BlockIcon\";\r\n    EIcons[\"comments\"] = \"CommentsIcon\";\r\n    EIcons[\"expand\"] = \"ExpandIcon\";\r\n    EIcons[\"menu\"] = \"MenuIcon\";\r\n    EIcons[\"save\"] = \"SaveIcon\";\r\n    EIcons[\"share\"] = \"ShareIcon\";\r\n    EIcons[\"warning\"] = \"WarningIcon\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(_a) {\r\n    var name = _a.name, width = _a.width, height = _a.height;\r\n    var RequiredIcon = icons[name];\r\n    return (react_1.default.createElement(RequiredIcon, { width: width, height: height }));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/token/actions */ \"./src/store/token/actions.ts\");\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        dispatch(actions_1.saveToken());\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--2fANc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar CommentsList_1 = __webpack_require__(/*! ../CommentsList */ \"./src/shared/CommentsList/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nfunction Post(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId, onClose = _a.onClose;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(e) {\r\n            var _a;\r\n            if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n                onClose === null || onClose === void 0 ? void 0 : onClose();\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById('modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u0442\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\")),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n        react_1.default.createElement(CommentsList_1.CommentsList, { subreddit: subreddit, postId: postId }))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--yRo-c\",\n\t\"content\": \"post__content--2gFMc\",\n\t\"close\": \"post__close--1HSqz\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/shared/ReplyFormContainer/ReplyFormContainer.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/ReplyFormContainer/ReplyFormContainer.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nfunction ReplyFormContainer(_a) {\r\n    var author = _a.author;\r\n    var _b = react_1.useState(author + \", \"), value = _b[0], setValue = _b[1];\r\n    var ref = react_1.useRef(null);\r\n    function handleChange(e) {\r\n        setValue(e.target.value);\r\n    }\r\n    function handleSubmit(e) {\r\n        e.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { isFocused: true, value: value, buttonText: 'Ответить', onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.ReplyFormContainer = ReplyFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/ReplyFormContainer/ReplyFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/ReplyFormContainer/index.ts":
/*!************************************************!*\
  !*** ./src/shared/ReplyFormContainer/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ReplyFormContainer */ \"./src/shared/ReplyFormContainer/ReplyFormContainer.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/ReplyFormContainer/index.ts?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColors = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar EColors;\r\n(function (EColors) {\r\n    EColors[\"black\"] = \"black\";\r\n    EColors[\"orange\"] = \"orange\";\r\n    EColors[\"green\"] = \"green\";\r\n    EColors[\"white\"] = \"white\";\r\n    EColors[\"grayF4\"] = \"grayF4\";\r\n    EColors[\"grayF3\"] = \"grayF3\";\r\n    EColors[\"grayD9\"] = \"grayD9\";\r\n    EColors[\"grayC4\"] = \"grayC4\";\r\n    EColors[\"gray99\"] = \"gray99\";\r\n    EColors[\"gray66\"] = \"gray66\";\r\n})(EColors = exports.EColors || (exports.EColors = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColors.black : _f, weight = props.weight, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(text_css_1.default[\"s\" + size], text_css_1.default[color], (_a = {}, _a[text_css_1.default[\"weight-\" + weight]] = weight, _a), (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--Puvgs\",\n\t\"s20\": \"text__s20--3Xq66\",\n\t\"s16\": \"text__s16--G_lUr\",\n\t\"s14\": \"text__s14--jvCoO\",\n\t\"s12\": \"text__s12--2S2T2\",\n\t\"s10\": \"text__s10--DYLfy\",\n\t\"weight-100\": \"text__weight-100--1v5gW\",\n\t\"weight-200\": \"text__weight-200--2QfMB\",\n\t\"weight-300\": \"text__weight-300--2a9JW\",\n\t\"weight-400\": \"text__weight-400--3boVi\",\n\t\"weight-500\": \"text__weight-500--B5ydE\",\n\t\"weight-600\": \"text__weight-600--izoI9\",\n\t\"weight-700\": \"text__weight-700--ILv4j\",\n\t\"weight-800\": \"text__weight-800--1JD1o\",\n\t\"weight-900\": \"text__weight-900--3UNDa\",\n\t\"black\": \"text__black--1zchg\",\n\t\"orange\": \"text__orange--1RyAM\",\n\t\"green\": \"text__green--3mYQn\",\n\t\"white\": \"text__white--13JGE\",\n\t\"grayF4\": \"text__grayF4--2X2jV\",\n\t\"grayF3\": \"text__grayF3--1zp-f\",\n\t\"grayD9\": \"text__grayD9--3Y4yY\",\n\t\"grayC4\": \"text__grayC4--3U0c5\",\n\t\"gray99\": \"text__gray99--DhweW\",\n\t\"gray66\": \"text__gray66--3ORMR\",\n\t\"m28\": \"text__m28--2u2zs\",\n\t\"m20\": \"text__m20--1gFlM\",\n\t\"m16\": \"text__m16--cSY4u\",\n\t\"m14\": \"text__m14--s6pnr\",\n\t\"m12\": \"text__m12--1W0av\",\n\t\"m10\": \"text__m10--UtIkW\",\n\t\"t28\": \"text__t28--A4rHF\",\n\t\"t20\": \"text__t20--78tCz\",\n\t\"t16\": \"text__t16--nkVMz\",\n\t\"t14\": \"text__t14--1Rj72\",\n\t\"t12\": \"text__t12--7txjW\",\n\t\"t10\": \"text__t10--n2R7f\",\n\t\"d28\": \"text__d28--3oIok\",\n\t\"d20\": \"text__d20--uwHxr\",\n\t\"d16\": \"text__d16--1Pwd1\",\n\t\"d14\": \"text__d14--3Futo\",\n\t\"d12\": \"text__d12--5X_qc\",\n\t\"d10\": \"text__d10--3pWnc\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/shared/icons/AnonIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/AnonIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnonIcon(_a) {\r\n    var _b = _a.height, height = _b === void 0 ? 50 : _b, _c = _a.width, width = _c === void 0 ? 50 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnonIcon = AnonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/AnonIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ArrowUpIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/ArrowUpIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ArrowUpIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ArrowUpIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 19 : _b, _c = _a.height, height = _c === void 0 ? 10 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"currentColor\" })));\r\n}\r\nexports.ArrowUpIcon = ArrowUpIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ArrowUpIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 12 : _b, _c = _a.height, height = _c === void 0 ? 12 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"currentColor\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentsIcon.tsx":
/*!*******************************************!*\
  !*** ./src/shared/icons/CommentsIcon.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 15 : _b, _c = _a.height, height = _c === void 0 ? 15 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"currentColor\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ExpandIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/ExpandIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ExpandIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ExpandIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 20 : _b, _c = _a.height, height = _c === void 0 ? 20 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M12.2929 2H10V1H14V5H13V2.70711L9.85355 5.85355L9.14645 5.14645L12.2929 2ZM5.85355 9.85355L2.70711 13H5V14H1V10H2V12.2929L5.14645 9.14645L5.85355 9.85355Z\", fill: \"currentColor\" })));\r\n}\r\nexports.ExpandIcon = ExpandIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ExpandIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 5 : _b, _c = _a.height, height = _c === void 0 ? 20 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"currentColor\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"currentColor\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"currentColor\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 14 : _b, _c = _a.height, height = _c === void 0 ? 14 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"currentColor\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 12 : _b, _c = _a.height, height = _c === void 0 ? 14 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"currentColor\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 14 : _b, _c = _a.height, height = _c === void 0 ? 12 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"currentColor\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/icons/AnonIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowUpIcon */ \"./src/shared/icons/ArrowUpIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ExpandIcon */ \"./src/shared/icons/ExpandIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "./src/store/commentText/actions.ts":
/*!******************************************!*\
  !*** ./src/store/commentText/actions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.updateComment = exports.UPDATE_COMMENT = void 0;\r\nexports.UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar updateComment = function (comment) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    comment: comment,\r\n}); };\r\nexports.updateComment = updateComment;\r\n\n\n//# sourceURL=webpack:///./src/store/commentText/actions.ts?");

/***/ }),

/***/ "./src/store/commentText/reducer.ts":
/*!******************************************!*\
  !*** ./src/store/commentText/reducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentTextReducer = exports.commentTextInitialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/commentText/actions.ts\");\r\nexports.commentTextInitialState = 'Привет, Skillbox!';\r\nvar commentTextReducer = function (state, action) {\r\n    if (state === void 0) { state = exports.commentTextInitialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return action.comment;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.commentTextReducer = commentTextReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/commentText/reducer.ts?");

/***/ }),

/***/ "./src/store/me/actions.ts":
/*!*********************************!*\
  !*** ./src/store/me/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (res) {\r\n        var userRes = res.data;\r\n        // dispatch(setUserData());\r\n        dispatch(exports.meRequestSuccess({ name: userRes.name, iconImg: userRes.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

/***/ }),

/***/ "./src/store/me/reducer.ts":
/*!*********************************!*\
  !*** ./src/store/me/reducer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = exports.meInitialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/me/actions.ts\");\r\nexports.meInitialState = {\r\n    loading: false,\r\n    error: '',\r\n    data: {},\r\n};\r\nvar meReducer = function (state, action) {\r\n    if (state === void 0) { state = exports.meInitialState; }\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/me/reducer.ts?");

/***/ }),

/***/ "./src/store/posts/actions.ts":
/*!************************************!*\
  !*** ./src/store/posts/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsRequestAsync = exports.postsRequestError = exports.POSTS_REQUEST_ERROR = exports.postsRequestSuccess = exports.POSTS_REQUEST_SUCCESS = exports.postsRequest = exports.POSTS_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.POSTS_REQUEST = 'POSTS_REQUEST';\r\nvar postsRequest = function () { return ({\r\n    type: exports.POSTS_REQUEST,\r\n}); };\r\nexports.postsRequest = postsRequest;\r\nexports.POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';\r\nvar postsRequestSuccess = function (data) { return ({\r\n    type: exports.POSTS_REQUEST_SUCCESS,\r\n    data: data\r\n}); };\r\nexports.postsRequestSuccess = postsRequestSuccess;\r\nexports.POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';\r\nvar postsRequestError = function (error) { return ({\r\n    type: exports.POSTS_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.postsRequestError = postsRequestError;\r\nvar postsRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.postsRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/best?sr_detail=true', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (res) {\r\n        var _a, _b;\r\n        var postsRes = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children;\r\n        dispatch(exports.postsRequestSuccess(postsRes));\r\n        console.log(postsRes);\r\n    })\r\n        .catch(function (error) {\r\n        dispatch(exports.postsRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.postsRequestAsync = postsRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/actions.ts?");

/***/ }),

/***/ "./src/store/posts/reducer.ts":
/*!************************************!*\
  !*** ./src/store/posts/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = exports.postsInitialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/posts/actions.ts\");\r\nexports.postsInitialState = {\r\n    data: [],\r\n    loading: false,\r\n    error: '',\r\n};\r\nvar postsReducer = function (state, action) {\r\n    if (state === void 0) { state = exports.postsInitialState; }\r\n    switch (action.type) {\r\n        case actions_1.POSTS_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.POSTS_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { loading: false, data: action.data });\r\n        case actions_1.POSTS_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { loading: false, error: action.error });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/reducer.ts?");

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./commentText/actions */ \"./src/store/commentText/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./commentText/reducer */ \"./src/store/commentText/reducer.ts\");\r\nvar actions_2 = __webpack_require__(/*! ./me/actions */ \"./src/store/me/actions.ts\");\r\nvar reducer_2 = __webpack_require__(/*! ./me/reducer */ \"./src/store/me/reducer.ts\");\r\nvar actions_3 = __webpack_require__(/*! ./posts/actions */ \"./src/store/posts/actions.ts\");\r\nvar reducer_3 = __webpack_require__(/*! ./posts/reducer */ \"./src/store/posts/reducer.ts\");\r\nvar actions_4 = __webpack_require__(/*! ./token/actions */ \"./src/store/token/actions.ts\");\r\nvar reducer_4 = __webpack_require__(/*! ./token/reducer */ \"./src/store/token/reducer.ts\");\r\nvar initialState = {\r\n    commentText: reducer_1.commentTextInitialState,\r\n    token: reducer_4.tokenInitialState,\r\n    me: reducer_2.meInitialState,\r\n    posts: reducer_3.postsInitialState,\r\n};\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case actions_1.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: reducer_1.commentTextReducer(state.commentText, action) });\r\n        case actions_4.SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: reducer_4.tokenReducer(state.token, action) });\r\n        // Композиция редьюсеров\r\n        case actions_2.ME_REQUEST:\r\n        case actions_2.ME_REQUEST_SUCCESS:\r\n        case actions_2.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_2.meReducer(state.me, action) });\r\n        case actions_3.POSTS_REQUEST:\r\n        case actions_3.POSTS_REQUEST_SUCCESS:\r\n        case actions_3.POSTS_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { posts: reducer_3.postsReducer(state.posts, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/rootReducer.ts?");

/***/ }),

/***/ "./src/store/token/actions.ts":
/*!************************************!*\
  !*** ./src/store/token/actions.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.setToken = exports.SET_TOKEN = void 0;\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.setToken = setToken;\r\nvar saveToken = function () { return function (dispatch, getState) {\r\n    var windowToken = window.__token__, localToken = localStorage.getItem('token');\r\n    console.log('завупа');\r\n    if (windowToken && windowToken !== 'undefined') {\r\n        console.log('В window есть токена');\r\n        dispatch(exports.setToken(windowToken));\r\n        localStorage.setItem('token', windowToken);\r\n    }\r\n    else {\r\n        if (localToken) {\r\n            console.log('В localStorage есть токен');\r\n            dispatch(exports.setToken(localToken));\r\n        }\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

/***/ }),

/***/ "./src/store/token/reducer.ts":
/*!************************************!*\
  !*** ./src/store/token/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenReducer = exports.tokenInitialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/token/actions.ts\");\r\nexports.tokenInitialState = '';\r\nvar tokenReducer = function (state, action) {\r\n    if (state === void 0) { state = exports.tokenInitialState; }\r\n    switch (action.type) {\r\n        case actions_1.SET_TOKEN:\r\n            return action.token;\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.tokenReducer = tokenReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/token/reducer.ts?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n    // Если у нас в объекте уже есть такой ключ, то мы его заменяем.\r\n    // Иначе просто добавляем.\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/js/convertPostCreatedValue.ts":
/*!*************************************************!*\
  !*** ./src/utils/js/convertPostCreatedValue.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.convertPostCreatedValue = void 0;\r\nvar javascript_time_ago_1 = __importDefault(__webpack_require__(/*! javascript-time-ago */ \"javascript-time-ago\"));\r\nvar ru_1 = __importDefault(__webpack_require__(/*! javascript-time-ago/locale/ru */ \"javascript-time-ago/locale/ru\"));\r\njavascript_time_ago_1.default.addDefaultLocale(ru_1.default);\r\nfunction convertPostCreatedValue(value) {\r\n    var timeAgo = new javascript_time_ago_1.default('ru-RU');\r\n    return timeAgo.format(new Date(new Date().getTime() - value));\r\n}\r\nexports.convertPostCreatedValue = convertPostCreatedValue;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/convertPostCreatedValue.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\n// nanoid\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\n// generateRandomString создаст один-единственный id для всех итераций\r\nexports.assignId = assoc_1.assoc('id', exports.generateRandomString());\r\nvar generateId = function (obj) {\r\n    // assignId(obj);\r\n    return assoc_1.assoc('id', exports.generateRandomString())(obj);\r\n};\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "javascript-time-ago":
/*!**************************************!*\
  !*** external "javascript-time-ago" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"javascript-time-ago\");\n\n//# sourceURL=webpack:///external_%22javascript-time-ago%22?");

/***/ }),

/***/ "javascript-time-ago/locale/ru":
/*!************************************************!*\
  !*** external "javascript-time-ago/locale/ru" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"javascript-time-ago/locale/ru\");\n\n//# sourceURL=webpack:///external_%22javascript-time-ago/locale/ru%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-loading-skeleton":
/*!*****************************************!*\
  !*** external "react-loading-skeleton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loading-skeleton\");\n\n//# sourceURL=webpack:///external_%22react-loading-skeleton%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });