webpackHotUpdate("main",{

/***/ "./src/shared/CommentsList/CommentsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/CommentsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Comment_1 = __webpack_require__(/*! ./CommentBranch/Comment */ \"./src/shared/CommentsList/CommentBranch/Comment/index.ts\");\r\nvar CommentBranch_1 = __webpack_require__(/*! ./CommentBranch */ \"./src/shared/CommentsList/CommentBranch/index.ts\");\r\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/CommentsList/commentslist.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentBranchSkeleton_1 = __webpack_require__(/*! ./CommentBranchSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/index.ts\");\r\nvar CommentSkeleton_1 = __webpack_require__(/*! ./CommentBranchSkeleton/CommentSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/index.ts\");\r\nfunction CommentsList(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = react_1.useState([]), list = _b[0], setList = _b[1];\r\n    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];\r\n    var _d = react_1.useState(\"\"), error = _d[0], setError = _d[1];\r\n    react_1.useEffect(function () {\r\n        var controller = new AbortController();\r\n        setError(\"\");\r\n        setLoading(true);\r\n        axios_1.default.get(\"http://api.reddit.com/r/\" + subreddit + \"/commnts/\" + postId, {\r\n            signal: controller.signal\r\n        })\r\n            .then(function (resp) {\r\n            setList(resp.data[1].data.children);\r\n            setLoading(false);\r\n            console.log(resp);\r\n        }).catch(function (error) {\r\n            setError(String(error));\r\n            setLoading(false);\r\n        });\r\n        // Отменяем запрос при анмаунте компонента\r\n        return function () { return controller.abort(); };\r\n    }, []);\r\n    function outputList(branch) {\r\n        return branch.map(function (comment) {\r\n            var commentInfo = comment.data;\r\n            if (!commentInfo.author || !commentInfo.created || !commentInfo.body) {\r\n                return '';\r\n            }\r\n            return (react_1.default.createElement(CommentBranch_1.CommentBranch, { key: commentInfo.id },\r\n                react_1.default.createElement(Comment_1.Comment, { author: commentInfo.author, created: commentInfo.created, message: commentInfo.body }),\r\n                // Если есть ответы, снова вызываем функцию outputList, но передаём уже список из replies\r\n                commentInfo.replies ? outputList(commentInfo.replies.data.children) : ''));\r\n        });\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: commentslist_css_1.default.comments },\r\n        react_1.default.createElement(\"div\", null,\r\n            \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E:\\u00A0\",\r\n            react_1.default.createElement(\"butto\", { className: commentslist_css_1.default.sortBtn }, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\")),\r\n        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.commentsList },\r\n            list && outputList(list),\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null))),\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null))),\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null)))),\r\n            !loading && !error && list.length === 0 && (react_1.default.createElement(\"div\", { className: commentslist_css_1.default.emptyMessage, style: { display: \"flex\", flexDirection: \"column\", alignItems: \"center\", gap: \"2px\", textAlign: \"center\" } },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.monocleFace }),\r\n                \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")),\r\n            error &&\r\n                react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, error))));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentsList.tsx?");

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