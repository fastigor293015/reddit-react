webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentsList/commentslist.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentsList/commentslist.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/commentslist.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/CommentsList/CommentsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/CommentsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comment_1 = __webpack_require__(/*! ./CommentBranch/Comment */ \"./src/shared/CommentsList/CommentBranch/Comment/index.ts\");\r\nvar CommentBranch_1 = __webpack_require__(/*! ./CommentBranch */ \"./src/shared/CommentsList/CommentBranch/index.ts\");\r\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/CommentsList/commentslist.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction CommentsList(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = react_1.useState([]), list = _b[0], setList = _b[1];\r\n    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];\r\n    var _d = react_1.useState(\"\"), error = _d[0], setError = _d[1];\r\n    react_1.useEffect(function () {\r\n        var controller = new AbortController();\r\n        setLoading(true);\r\n        axios_1.default.get(\"http://api.reddit.com/r/\" + subreddit + \"/commnts/\" + postId, {\r\n            signal: controller.signal\r\n        })\r\n            .then(function (resp) {\r\n            setList(resp.data[1].data.children);\r\n            setLoading(false);\r\n            console.log(resp);\r\n        }).catch(function (error) {\r\n            setError(String(error));\r\n            setLoading(false);\r\n        });\r\n        // Отменяем запрос при анмаунте компонента\r\n        return function () { return controller.abort(); };\r\n    }, []);\r\n    function outputList(branch) {\r\n        return branch.map(function (comment) {\r\n            var commentInfo = comment.data;\r\n            if (!commentInfo.author || !commentInfo.created || !commentInfo.body) {\r\n                return '';\r\n            }\r\n            return (react_1.default.createElement(CommentBranch_1.CommentBranch, { key: commentInfo.id },\r\n                react_1.default.createElement(Comment_1.Comment, { author: commentInfo.author, created: commentInfo.created, message: commentInfo.body }),\r\n                // Если есть ответы, снова вызываем функцию outputList, но передаём уже список из replies\r\n                commentInfo.replies ? outputList(commentInfo.replies.data.children) : ''));\r\n        });\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        outputList(list),\r\n        !loading && !error && list.length === 0 && (react_1.default.createElement(\"div\", { className: commentslist_css_1.default.emptyMessage, style: { display: \"flex\", flexDirection: \"column\", alignItems: \"center\", gap: \"2px\", textAlign: \"center\" } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.monocleFace }),\r\n            \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")),\r\n        \"}\"));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/commentslist.css":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/commentslist.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./commentslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentsList/commentslist.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./commentslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentsList/commentslist.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/sass-loader/dist/cjs.js!./commentslist.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/shared/CommentsList/commentslist.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/CommentsList/commentslist.css?");

/***/ }),

/***/ "./src/shared/CommentsList/index.ts":
/*!******************************************!*\
  !*** ./src/shared/CommentsList/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/CommentsList/CommentsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/index.ts?");

/***/ })

})