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

/***/ "./node_modules/helmet/dist/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/helmet/dist/esm/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.xssFilter = exports.referrerPolicy = exports.permittedCrossDomainPolicies = exports.originAgentCluster = exports.noSniff = exports.ieNoOpen = exports.hsts = exports.hidePoweredBy = exports.frameguard = exports.expectCt = exports.dnsPrefetchControl = exports.default = exports.crossOriginResourcePolicy = exports.crossOriginOpenerPolicy = exports.crossOriginEmbedderPolicy = exports.contentSecurityPolicy = void 0;\r\nvar dangerouslyDisableDefaultSrc = Symbol(\"dangerouslyDisableDefaultSrc\");\r\nvar DEFAULT_DIRECTIVES = {\r\n    \"default-src\": [\"'self'\"],\r\n    \"base-uri\": [\"'self'\"],\r\n    \"font-src\": [\"'self'\", \"https:\", \"data:\"],\r\n    \"form-action\": [\"'self'\"],\r\n    \"frame-ancestors\": [\"'self'\"],\r\n    \"img-src\": [\"'self'\", \"data:\"],\r\n    \"object-src\": [\"'none'\"],\r\n    \"script-src\": [\"'self'\"],\r\n    \"script-src-attr\": [\"'none'\"],\r\n    \"style-src\": [\"'self'\", \"https:\", \"'unsafe-inline'\"],\r\n    \"upgrade-insecure-requests\": []\r\n};\r\nvar getDefaultDirectives = function () { return Object.assign({}, DEFAULT_DIRECTIVES); };\r\nvar dashify = function (str) { return str.replace(/[A-Z]/g, function (capitalLetter) { return \"-\" + capitalLetter.toLowerCase(); }); };\r\nvar isDirectiveValueInvalid = function (directiveValue) { return /;|,/.test(directiveValue); };\r\nvar has = function (obj, key) { return Object.prototype.hasOwnProperty.call(obj, key); };\r\nfunction normalizeDirectives(options) {\r\n    var defaultDirectives = getDefaultDirectives();\r\n    var _b = options.useDefaults, useDefaults = _b === void 0 ? true : _b, _c = options.directives, rawDirectives = _c === void 0 ? defaultDirectives : _c;\r\n    var result = new Map();\r\n    var directiveNamesSeen = new Set();\r\n    var directivesExplicitlyDisabled = new Set();\r\n    for (var rawDirectiveName in rawDirectives) {\r\n        if (!has(rawDirectives, rawDirectiveName)) {\r\n            continue;\r\n        }\r\n        if (rawDirectiveName.length === 0 || /[^a-zA-Z0-9-]/.test(rawDirectiveName)) {\r\n            throw new Error(\"Content-Security-Policy received an invalid directive name \" + JSON.stringify(rawDirectiveName));\r\n        }\r\n        var directiveName = dashify(rawDirectiveName);\r\n        if (directiveNamesSeen.has(directiveName)) {\r\n            throw new Error(\"Content-Security-Policy received a duplicate directive \" + JSON.stringify(directiveName));\r\n        }\r\n        directiveNamesSeen.add(directiveName);\r\n        var rawDirectiveValue = rawDirectives[rawDirectiveName];\r\n        var directiveValue = void 0;\r\n        if (rawDirectiveValue === null) {\r\n            if (directiveName === \"default-src\") {\r\n                throw new Error(\"Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.\");\r\n            }\r\n            directivesExplicitlyDisabled.add(directiveName);\r\n            continue;\r\n        }\r\n        else if (typeof rawDirectiveValue === \"string\") {\r\n            directiveValue = [rawDirectiveValue];\r\n        }\r\n        else if (!rawDirectiveValue) {\r\n            throw new Error(\"Content-Security-Policy received an invalid directive value for \" + JSON.stringify(directiveName));\r\n        }\r\n        else if (rawDirectiveValue === dangerouslyDisableDefaultSrc) {\r\n            if (directiveName === \"default-src\") {\r\n                directivesExplicitlyDisabled.add(\"default-src\");\r\n                continue;\r\n            }\r\n            else {\r\n                throw new Error(\"Content-Security-Policy: tried to disable \" + JSON.stringify(directiveName) + \" as if it were default-src; simply omit the key\");\r\n            }\r\n        }\r\n        else {\r\n            directiveValue = rawDirectiveValue;\r\n        }\r\n        for (var _i = 0, directiveValue_1 = directiveValue; _i < directiveValue_1.length; _i++) {\r\n            var element = directiveValue_1[_i];\r\n            if (typeof element === \"string\" && isDirectiveValueInvalid(element)) {\r\n                throw new Error(\"Content-Security-Policy received an invalid directive value for \" + JSON.stringify(directiveName));\r\n            }\r\n        }\r\n        result.set(directiveName, directiveValue);\r\n    }\r\n    if (useDefaults) {\r\n        Object.entries(defaultDirectives).forEach(function (_b) {\r\n            var defaultDirectiveName = _b[0], defaultDirectiveValue = _b[1];\r\n            if (!result.has(defaultDirectiveName) && !directivesExplicitlyDisabled.has(defaultDirectiveName)) {\r\n                result.set(defaultDirectiveName, defaultDirectiveValue);\r\n            }\r\n        });\r\n    }\r\n    if (!result.size) {\r\n        throw new Error(\"Content-Security-Policy has no directives. Either set some or disable the header\");\r\n    }\r\n    if (!result.has(\"default-src\") && !directivesExplicitlyDisabled.has(\"default-src\")) {\r\n        throw new Error(\"Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.\");\r\n    }\r\n    return result;\r\n}\r\nfunction getHeaderValue(req, res, normalizedDirectives) {\r\n    var err;\r\n    var result = [];\r\n    normalizedDirectives.forEach(function (rawDirectiveValue, directiveName) {\r\n        var directiveValue = \"\";\r\n        for (var _i = 0, rawDirectiveValue_1 = rawDirectiveValue; _i < rawDirectiveValue_1.length; _i++) {\r\n            var element = rawDirectiveValue_1[_i];\r\n            directiveValue += \" \" + (element instanceof Function ? element(req, res) : element);\r\n        }\r\n        if (!directiveValue) {\r\n            result.push(directiveName);\r\n        }\r\n        else if (isDirectiveValueInvalid(directiveValue)) {\r\n            err = new Error(\"Content-Security-Policy received an invalid directive value for \" + JSON.stringify(directiveName));\r\n        }\r\n        else {\r\n            result.push(\"\" + directiveName + directiveValue);\r\n        }\r\n    });\r\n    return err ? err : result.join(\";\");\r\n}\r\nvar contentSecurityPolicy = function contentSecurityPolicy(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerName = options.reportOnly ? \"Content-Security-Policy-Report-Only\" : \"Content-Security-Policy\";\r\n    var normalizedDirectives = normalizeDirectives(options);\r\n    return function contentSecurityPolicyMiddleware(req, res, next) {\r\n        var result = getHeaderValue(req, res, normalizedDirectives);\r\n        if (result instanceof Error) {\r\n            next(result);\r\n        }\r\n        else {\r\n            res.setHeader(headerName, result);\r\n            next();\r\n        }\r\n    };\r\n};\r\nexports.contentSecurityPolicy = contentSecurityPolicy;\r\ncontentSecurityPolicy.getDefaultDirectives = getDefaultDirectives;\r\ncontentSecurityPolicy.dangerouslyDisableDefaultSrc = dangerouslyDisableDefaultSrc;\r\nvar ALLOWED_POLICIES$2 = new Set([\"require-corp\", \"credentialless\"]);\r\nfunction getHeaderValueFromOptions$7(_b) {\r\n    var _c = _b.policy, policy = _c === void 0 ? \"require-corp\" : _c;\r\n    if (ALLOWED_POLICIES$2.has(policy)) {\r\n        return policy;\r\n    }\r\n    else {\r\n        throw new Error(\"Cross-Origin-Embedder-Policy does not support the \" + JSON.stringify(policy) + \" policy\");\r\n    }\r\n}\r\nfunction crossOriginEmbedderPolicy(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$7(options);\r\n    return function crossOriginEmbedderPolicyMiddleware(_req, res, next) {\r\n        res.setHeader(\"Cross-Origin-Embedder-Policy\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.crossOriginEmbedderPolicy = crossOriginEmbedderPolicy;\r\nvar ALLOWED_POLICIES$1 = new Set([\"same-origin\", \"same-origin-allow-popups\", \"unsafe-none\"]);\r\nfunction getHeaderValueFromOptions$6(_b) {\r\n    var _c = _b.policy, policy = _c === void 0 ? \"same-origin\" : _c;\r\n    if (ALLOWED_POLICIES$1.has(policy)) {\r\n        return policy;\r\n    }\r\n    else {\r\n        throw new Error(\"Cross-Origin-Opener-Policy does not support the \" + JSON.stringify(policy) + \" policy\");\r\n    }\r\n}\r\nfunction crossOriginOpenerPolicy(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$6(options);\r\n    return function crossOriginOpenerPolicyMiddleware(_req, res, next) {\r\n        res.setHeader(\"Cross-Origin-Opener-Policy\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.crossOriginOpenerPolicy = crossOriginOpenerPolicy;\r\nvar ALLOWED_POLICIES = new Set([\"same-origin\", \"same-site\", \"cross-origin\"]);\r\nfunction getHeaderValueFromOptions$5(_b) {\r\n    var _c = _b.policy, policy = _c === void 0 ? \"same-origin\" : _c;\r\n    if (ALLOWED_POLICIES.has(policy)) {\r\n        return policy;\r\n    }\r\n    else {\r\n        throw new Error(\"Cross-Origin-Resource-Policy does not support the \" + JSON.stringify(policy) + \" policy\");\r\n    }\r\n}\r\nfunction crossOriginResourcePolicy(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$5(options);\r\n    return function crossOriginResourcePolicyMiddleware(_req, res, next) {\r\n        res.setHeader(\"Cross-Origin-Resource-Policy\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.crossOriginResourcePolicy = crossOriginResourcePolicy;\r\nfunction parseMaxAge$1(value) {\r\n    if (value === void 0) { value = 0; }\r\n    if (value >= 0 && Number.isFinite(value)) {\r\n        return Math.floor(value);\r\n    }\r\n    else {\r\n        throw new Error(\"Expect-CT: \" + JSON.stringify(value) + \" is not a valid value for maxAge. Please choose a positive integer.\");\r\n    }\r\n}\r\nfunction getHeaderValueFromOptions$4(options) {\r\n    var directives = [\"max-age=\" + parseMaxAge$1(options.maxAge)];\r\n    if (options.enforce) {\r\n        directives.push(\"enforce\");\r\n    }\r\n    if (options.reportUri) {\r\n        directives.push(\"report-uri=\\\"\" + options.reportUri + \"\\\"\");\r\n    }\r\n    return directives.join(\", \");\r\n}\r\nfunction expectCt(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$4(options);\r\n    return function expectCtMiddleware(_req, res, next) {\r\n        res.setHeader(\"Expect-CT\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.expectCt = expectCt;\r\nfunction originAgentCluster() {\r\n    return function originAgentClusterMiddleware(_req, res, next) {\r\n        res.setHeader(\"Origin-Agent-Cluster\", \"?1\");\r\n        next();\r\n    };\r\n}\r\nexports.originAgentCluster = originAgentCluster;\r\nvar ALLOWED_TOKENS = new Set([\"no-referrer\", \"no-referrer-when-downgrade\", \"same-origin\", \"origin\", \"strict-origin\", \"origin-when-cross-origin\", \"strict-origin-when-cross-origin\", \"unsafe-url\", \"\"]);\r\nfunction getHeaderValueFromOptions$3(_b) {\r\n    var _c = _b.policy, policy = _c === void 0 ? [\"no-referrer\"] : _c;\r\n    var tokens = typeof policy === \"string\" ? [policy] : policy;\r\n    if (tokens.length === 0) {\r\n        throw new Error(\"Referrer-Policy received no policy tokens\");\r\n    }\r\n    var tokensSeen = new Set();\r\n    tokens.forEach(function (token) {\r\n        if (!ALLOWED_TOKENS.has(token)) {\r\n            throw new Error(\"Referrer-Policy received an unexpected policy token \" + JSON.stringify(token));\r\n        }\r\n        else if (tokensSeen.has(token)) {\r\n            throw new Error(\"Referrer-Policy received a duplicate policy token \" + JSON.stringify(token));\r\n        }\r\n        tokensSeen.add(token);\r\n    });\r\n    return tokens.join(\",\");\r\n}\r\nfunction referrerPolicy(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$3(options);\r\n    return function referrerPolicyMiddleware(_req, res, next) {\r\n        res.setHeader(\"Referrer-Policy\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.referrerPolicy = referrerPolicy;\r\nvar DEFAULT_MAX_AGE = 180 * 24 * 60 * 60;\r\nfunction parseMaxAge(value) {\r\n    if (value === void 0) { value = DEFAULT_MAX_AGE; }\r\n    if (value >= 0 && Number.isFinite(value)) {\r\n        return Math.floor(value);\r\n    }\r\n    else {\r\n        throw new Error(\"Strict-Transport-Security: \" + JSON.stringify(value) + \" is not a valid value for maxAge. Please choose a positive integer.\");\r\n    }\r\n}\r\nfunction getHeaderValueFromOptions$2(options) {\r\n    if (\"maxage\" in options) {\r\n        throw new Error(\"Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?\");\r\n    }\r\n    if (\"includeSubdomains\" in options) {\r\n        console.warn('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase \"D\".)');\r\n    }\r\n    if (\"setIf\" in options) {\r\n        console.warn(\"Strict-Transport-Security middleware no longer supports the `setIf` parameter. See the documentation and <https://github.com/helmetjs/helmet/wiki/Conditionally-using-middleware> if you need help replicating this behavior.\");\r\n    }\r\n    var directives = [\"max-age=\" + parseMaxAge(options.maxAge)];\r\n    if (options.includeSubDomains === undefined || options.includeSubDomains) {\r\n        directives.push(\"includeSubDomains\");\r\n    }\r\n    if (options.preload) {\r\n        directives.push(\"preload\");\r\n    }\r\n    return directives.join(\"; \");\r\n}\r\nfunction strictTransportSecurity(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$2(options);\r\n    return function strictTransportSecurityMiddleware(_req, res, next) {\r\n        res.setHeader(\"Strict-Transport-Security\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.hsts = strictTransportSecurity;\r\nfunction xContentTypeOptions() {\r\n    return function xContentTypeOptionsMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-Content-Type-Options\", \"nosniff\");\r\n        next();\r\n    };\r\n}\r\nexports.noSniff = xContentTypeOptions;\r\nfunction xDnsPrefetchControl(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = options.allow ? \"on\" : \"off\";\r\n    return function xDnsPrefetchControlMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-DNS-Prefetch-Control\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.dnsPrefetchControl = xDnsPrefetchControl;\r\nfunction xDownloadOptions() {\r\n    return function xDownloadOptionsMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-Download-Options\", \"noopen\");\r\n        next();\r\n    };\r\n}\r\nexports.ieNoOpen = xDownloadOptions;\r\nfunction getHeaderValueFromOptions$1(_b) {\r\n    var _c = _b.action, action = _c === void 0 ? \"sameorigin\" : _c;\r\n    var normalizedAction = typeof action === \"string\" ? action.toUpperCase() : action;\r\n    switch (normalizedAction) {\r\n        case \"SAME-ORIGIN\":\r\n            return \"SAMEORIGIN\";\r\n        case \"DENY\":\r\n        case \"SAMEORIGIN\":\r\n            return normalizedAction;\r\n        default:\r\n            throw new Error(\"X-Frame-Options received an invalid action \" + JSON.stringify(action));\r\n    }\r\n}\r\nfunction xFrameOptions(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions$1(options);\r\n    return function xFrameOptionsMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-Frame-Options\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.frameguard = xFrameOptions;\r\nvar ALLOWED_PERMITTED_POLICIES = new Set([\"none\", \"master-only\", \"by-content-type\", \"all\"]);\r\nfunction getHeaderValueFromOptions(_b) {\r\n    var _c = _b.permittedPolicies, permittedPolicies = _c === void 0 ? \"none\" : _c;\r\n    if (ALLOWED_PERMITTED_POLICIES.has(permittedPolicies)) {\r\n        return permittedPolicies;\r\n    }\r\n    else {\r\n        throw new Error(\"X-Permitted-Cross-Domain-Policies does not support \" + JSON.stringify(permittedPolicies));\r\n    }\r\n}\r\nfunction xPermittedCrossDomainPolicies(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var headerValue = getHeaderValueFromOptions(options);\r\n    return function xPermittedCrossDomainPoliciesMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-Permitted-Cross-Domain-Policies\", headerValue);\r\n        next();\r\n    };\r\n}\r\nexports.permittedCrossDomainPolicies = xPermittedCrossDomainPolicies;\r\nfunction xPoweredBy() {\r\n    return function xPoweredByMiddleware(_req, res, next) {\r\n        res.removeHeader(\"X-Powered-By\");\r\n        next();\r\n    };\r\n}\r\nexports.hidePoweredBy = xPoweredBy;\r\nfunction xXssProtection() {\r\n    return function xXssProtectionMiddleware(_req, res, next) {\r\n        res.setHeader(\"X-XSS-Protection\", \"0\");\r\n        next();\r\n    };\r\n}\r\nexports.xssFilter = xXssProtection;\r\nfunction getArgs(option, middlewareConfig) {\r\n    if (middlewareConfig === void 0) { middlewareConfig = {}; }\r\n    switch (option) {\r\n        case undefined:\r\n        case true:\r\n            return [];\r\n        case false:\r\n            return null;\r\n        default:\r\n            if (middlewareConfig.takesOptions === false) {\r\n                console.warn(middlewareConfig.name + \" does not take options. Remove the property to silence this warning.\");\r\n                return [];\r\n            }\r\n            else {\r\n                return [option];\r\n            }\r\n    }\r\n}\r\nfunction getMiddlewareFunctionsFromOptions(options) {\r\n    var result = [];\r\n    var contentSecurityPolicyArgs = getArgs(options.contentSecurityPolicy);\r\n    if (contentSecurityPolicyArgs) {\r\n        result.push(contentSecurityPolicy.apply(void 0, contentSecurityPolicyArgs));\r\n    }\r\n    var crossOriginEmbedderPolicyArgs = getArgs(options.crossOriginEmbedderPolicy);\r\n    if (crossOriginEmbedderPolicyArgs) {\r\n        result.push(crossOriginEmbedderPolicy.apply(void 0, crossOriginEmbedderPolicyArgs));\r\n    }\r\n    var crossOriginOpenerPolicyArgs = getArgs(options.crossOriginOpenerPolicy);\r\n    if (crossOriginOpenerPolicyArgs) {\r\n        result.push(crossOriginOpenerPolicy.apply(void 0, crossOriginOpenerPolicyArgs));\r\n    }\r\n    var crossOriginResourcePolicyArgs = getArgs(options.crossOriginResourcePolicy);\r\n    if (crossOriginResourcePolicyArgs) {\r\n        result.push(crossOriginResourcePolicy.apply(void 0, crossOriginResourcePolicyArgs));\r\n    }\r\n    var xDnsPrefetchControlArgs = getArgs(options.dnsPrefetchControl);\r\n    if (xDnsPrefetchControlArgs) {\r\n        result.push(xDnsPrefetchControl.apply(void 0, xDnsPrefetchControlArgs));\r\n    }\r\n    var expectCtArgs = options.expectCt && getArgs(options.expectCt);\r\n    if (expectCtArgs) {\r\n        result.push(expectCt.apply(void 0, expectCtArgs));\r\n    }\r\n    var xFrameOptionsArgs = getArgs(options.frameguard);\r\n    if (xFrameOptionsArgs) {\r\n        result.push(xFrameOptions.apply(void 0, xFrameOptionsArgs));\r\n    }\r\n    var xPoweredByArgs = getArgs(options.hidePoweredBy, {\r\n        name: \"hidePoweredBy\",\r\n        takesOptions: false\r\n    });\r\n    if (xPoweredByArgs) {\r\n        result.push(xPoweredBy());\r\n    }\r\n    var strictTransportSecurityArgs = getArgs(options.hsts);\r\n    if (strictTransportSecurityArgs) {\r\n        result.push(strictTransportSecurity.apply(void 0, strictTransportSecurityArgs));\r\n    }\r\n    var xDownloadOptionsArgs = getArgs(options.ieNoOpen, {\r\n        name: \"ieNoOpen\",\r\n        takesOptions: false\r\n    });\r\n    if (xDownloadOptionsArgs) {\r\n        result.push(xDownloadOptions());\r\n    }\r\n    var xContentTypeOptionsArgs = getArgs(options.noSniff, {\r\n        name: \"noSniff\",\r\n        takesOptions: false\r\n    });\r\n    if (xContentTypeOptionsArgs) {\r\n        result.push(xContentTypeOptions());\r\n    }\r\n    var originAgentClusterArgs = getArgs(options.originAgentCluster, {\r\n        name: \"originAgentCluster\",\r\n        takesOptions: false\r\n    });\r\n    if (originAgentClusterArgs) {\r\n        result.push(originAgentCluster());\r\n    }\r\n    var xPermittedCrossDomainPoliciesArgs = getArgs(options.permittedCrossDomainPolicies);\r\n    if (xPermittedCrossDomainPoliciesArgs) {\r\n        result.push(xPermittedCrossDomainPolicies.apply(void 0, xPermittedCrossDomainPoliciesArgs));\r\n    }\r\n    var referrerPolicyArgs = getArgs(options.referrerPolicy);\r\n    if (referrerPolicyArgs) {\r\n        result.push(referrerPolicy.apply(void 0, referrerPolicyArgs));\r\n    }\r\n    var xXssProtectionArgs = getArgs(options.xssFilter, {\r\n        name: \"xssFilter\",\r\n        takesOptions: false\r\n    });\r\n    if (xXssProtectionArgs) {\r\n        result.push(xXssProtection());\r\n    }\r\n    return result;\r\n}\r\nvar helmet = Object.assign(function helmet(options) {\r\n    if (options === void 0) { options = {}; }\r\n    var _a;\r\n    if (((_a = options.constructor) === null || _a === void 0 ? void 0 : _a.name) === \"IncomingMessage\") {\r\n        throw new Error(\"It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.\");\r\n    }\r\n    var middlewareFunctions = getMiddlewareFunctionsFromOptions(options);\r\n    return function helmetMiddleware(req, res, next) {\r\n        var middlewareIndex = 0;\r\n        (function internalNext(err) {\r\n            if (err) {\r\n                next(err);\r\n                return;\r\n            }\r\n            var middlewareFunction = middlewareFunctions[middlewareIndex];\r\n            if (middlewareFunction) {\r\n                middlewareIndex++;\r\n                middlewareFunction(req, res, internalNext);\r\n            }\r\n            else {\r\n                next();\r\n            }\r\n        })();\r\n    };\r\n}, {\r\n    contentSecurityPolicy: contentSecurityPolicy,\r\n    crossOriginEmbedderPolicy: crossOriginEmbedderPolicy,\r\n    crossOriginOpenerPolicy: crossOriginOpenerPolicy,\r\n    crossOriginResourcePolicy: crossOriginResourcePolicy,\r\n    dnsPrefetchControl: xDnsPrefetchControl,\r\n    expectCt: expectCt,\r\n    frameguard: xFrameOptions,\r\n    hidePoweredBy: xPoweredBy,\r\n    hsts: strictTransportSecurity,\r\n    ieNoOpen: xDownloadOptions,\r\n    noSniff: xContentTypeOptions,\r\n    originAgentCluster: originAgentCluster,\r\n    permittedCrossDomainPolicies: xPermittedCrossDomainPolicies,\r\n    referrerPolicy: referrerPolicy,\r\n    xssFilter: xXssProtection\r\n});\r\nexports.default = helmet;\r\n\n\n//# sourceURL=webpack:///./node_modules/helmet/dist/esm/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_loading_skeleton_1 = __webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Post_1 = __webpack_require__(/*! ./shared/Post */ \"./src/shared/Post/index.ts\");\r\nvar PageNotFound_1 = __webpack_require__(/*! ./shared/PageNotFound */ \"./src/shared/PageNotFound/index.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar rootReducer_1 = __webpack_require__(/*! ./store/rootReducer */ \"./src/store/rootReducer.ts\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar store = redux_1.createStore(rootReducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];\r\n    react_1.useEffect(function () {\r\n        setMounted(true);\r\n    }, []);\r\n    return (react_1.default.createElement(react_loading_skeleton_1.SkeletonTheme, { baseColor: \"#F3F3F3\", highlightColor: \"#FFFFFF\" },\r\n        react_1.default.createElement(react_redux_1.Provider, { store: store }, mounted && (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n            react_1.default.createElement(Layout_1.Layout, null,\r\n                react_1.default.createElement(Header_1.Header, null),\r\n                react_1.default.createElement(Content_1.Content, null,\r\n                    react_1.default.createElement(react_router_dom_1.Switch, null,\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/\", exact: true },\r\n                            react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/auth\" },\r\n                            react_1.default.createElement(react_router_dom_1.Redirect, { to: \"/posts\" })),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts\", exact: true },\r\n                            react_1.default.createElement(CardsList_1.CardsList, null)),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"/posts/:subreddit/:postId\" },\r\n                            react_1.default.createElement(CardsList_1.CardsList, null),\r\n                            react_1.default.createElement(Post_1.Post, null)),\r\n                        react_1.default.createElement(react_router_dom_1.Route, { path: \"*\" },\r\n                            react_1.default.createElement(PageNotFound_1.PageNotFound, null))))))))));\r\n}\r\n// Вводим стрелочную функцию, чтобы AppComponent не преобразовывался в класс-компонент\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../store/token/actions */ \"./src/store/token/actions.ts\");\r\nfunction useToken() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        dispatch(actions_1.saveToken());\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \"* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nsvg,\\nsvg * {\\n  color: currentColor;\\n}\\n\\n:root {\\n  --black: #333333;\\n  --orange: #CC6633;\\n  --green: #A4CC33;\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\n  --grayEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\n  --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\n  --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\n  --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\n  --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\n}\\n\\nbody {\\n  /* position: relative; */\\n  margin: 0;\\n  padding: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  padding: 0;\\n  border: none;\\n  font-family: \\\"Roboto\\\", serif;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n@keyframes react-loading-skeleton {\\n  100% {\\n      transform: translateX(100%);\\n  }\\n}\\n\\n.react-loading-skeleton {\\n  --base-color: #ebebeb;\\n  --highlight-color: #f5f5f5;\\n  --animation-duration: 1.5s;\\n  --animation-direction: normal;\\n  --pseudo-element-display: block; /* Enable animation */\\n\\n  background-color: var(--base-color);\\n\\n  width: 100%;\\n  border-radius: 0.25rem;\\n  display: inline-flex;\\n  line-height: 1;\\n\\n  position: relative;\\n  overflow: hidden;\\n  z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */\\n}\\n\\n.react-loading-skeleton::after {\\n  content: ' ';\\n  display: var(--pseudo-element-display);\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  height: 100%;\\n  background-repeat: no-repeat;\\n  background-image: linear-gradient(\\n      90deg,\\n      var(--base-color),\\n      var(--highlight-color),\\n      var(--base-color)\\n  );\\n  transform: translateX(-100%);\\n\\n  animation-name: react-loading-skeleton;\\n  animation-direction: var(--animation-direction);\\n  animation-duration: var(--animation-duration);\\n  animation-timing-function: ease-in-out;\\n  animation-iteration-count: infinite;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexHtmlTemplate_1 = __webpack_require__(/*! ./indexHtmlTemplate */ \"./src/server/indexHtmlTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"./node_modules/helmet/dist/esm/index.js\"));\r\nvar PORT = process.env.PORT || 3000;\r\nvar app = express_1.default();\r\napp.use(compression_1.default());\r\napp.use(helmet_1.default({\r\n    contentSecurityPolicy: false,\r\n}));\r\n// По URL \"/static\" будут доступны все файлы, которые лежат в папке \"dist/client\"\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"/auth\", function (req, res) {\r\n    axios_1.default.post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: '1fY8XELTy63quSYPXcab0g', password: process.env.SECRET },\r\n        headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null)), data[\"access_token\"]));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.get(\"*\", function (req, res) {\r\n    res.send(indexHtmlTemplate_1.indexHtmlTemplate(server_1.default.renderToString(react_1.default.createElement(App_1.App, null))));\r\n});\r\napp.listen(PORT, function () {\r\n    console.log(\"Server started on http://localhost:\" + PORT);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/CardsList/Card/TextContent/Title/title.css\"));\r\nfunction Title(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId, descr = _a.descr;\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(react_router_dom_1.Link, { to: \"/posts/\" + subreddit + \"/\" + postId, className: title_css_1.default.postLink }, descr)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/Title/Title.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar useToken_1 = __webpack_require__(/*! ../../hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar actions_1 = __webpack_require__(/*! ../../store/posts/actions */ \"./src/store/posts/actions.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar CardSkeleton_1 = __webpack_require__(/*! ./CardSkeleton */ \"./src/shared/CardsList/CardSkeleton/index.ts\");\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nfunction CardsList() {\r\n    var token = useToken_1.useToken()[0];\r\n    var _a = react_redux_1.useSelector(function (state) { return state.posts; }), data = _a.data, after = _a.after, loading = _a.loading, error = _a.error, loadingsCount = _a.loadingsCount;\r\n    var dispatch = react_redux_1.useDispatch();\r\n    var bottomOfList = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        if (!token || token === 'undefined')\r\n            return;\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if ((loadingsCount === 0 || loadingsCount % 2 !== 0) && entries[0].isIntersecting) {\r\n                dispatch(actions_1.postsRequestAsync());\r\n            }\r\n        }, {\r\n            rootMargin: \"10px\",\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, after, token]);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList },\r\n        !loading && !error && data.length === 0 && (react_1.default.createElement(\"div\", { className: cardslist_css_1.default.emptyMessage, style: { display: \"flex\", flexDirection: \"column\", alignItems: \"center\", gap: \"2px\", textAlign: \"center\" } },\r\n            react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.monocleFace }),\r\n            \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")),\r\n        data.map(function (post) {\r\n            var postInfo = post.data;\r\n            return (react_1.default.createElement(Card_1.Card, { key: postInfo.id, subreddit: postInfo.subreddit, postId: postInfo.id, authorName: postInfo.author, authorAvatarSrc: postInfo.thumbnail, descr: postInfo.title, created: postInfo.created, karma: postInfo.score, commentsNumber: postInfo.num_comments }));\r\n        }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        loading &&\r\n            react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null),\r\n                react_1.default.createElement(CardSkeleton_1.CardSkeleton, null)),\r\n        !loading && loadingsCount > 0 && loadingsCount % 2 === 0 && (react_1.default.createElement(\"div\", { style: { marginTop: \"15px\", textAlign: \"center\" } },\r\n            react_1.default.createElement(\"button\", { className: cardslist_css_1.default.loadMoreBtn, onClick: function () { return dispatch(actions_1.postsRequestAsync()); } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\"))),\r\n        error &&\r\n            react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, error)));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\",\n\t\"emptyMessage\": \"cardslist__emptyMessage--24GRF\",\n\t\"loadMoreBtn\": \"cardslist__loadMoreBtn--1gK3w\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_hook_form_1 = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nvar resolver = function (values) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, {\r\n                values: values.comment ? values : {},\r\n                errors: !values.comment\r\n                    ? {\r\n                        comment: {\r\n                            type: \"required\",\r\n                            message: \"Заполните это поле\",\r\n                        },\r\n                    }\r\n                    : {},\r\n            }];\r\n    });\r\n}); };\r\nfunction CommentForm(_a) {\r\n    var value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit, _b = _a.isFocused, isFocused = _b === void 0 ? false : _b, _c = _a.buttonText, buttonText = _c === void 0 ? \"Комментировать\" : _c;\r\n    var _d = react_hook_form_1.useForm({\r\n        defaultValues: {\r\n            comment: value,\r\n        },\r\n        resolver: resolver,\r\n    }), handleSubmit = _d.handleSubmit, control = _d.control, errors = _d.formState.errors;\r\n    var field = react_hook_form_1.useController({ name: \"comment\", control: control }).field;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        var _a, _b, _c;\r\n        if (isFocused) {\r\n            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();\r\n            var length_1 = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.value.length;\r\n            if (length_1) {\r\n                (_c = ref.current) === null || _c === void 0 ? void 0 : _c.setSelectionRange(length_1, length_1);\r\n            }\r\n        }\r\n        ;\r\n    }, []);\r\n    return (react_1.default.createElement(\"form\", { className: commentform_css_1.default.form, onSubmit: handleSubmit(function (data) { return onSubmit(); }) },\r\n        (errors === null || errors === void 0 ? void 0 : errors.comment) && react_1.default.createElement(\"p\", { className: commentform_css_1.default.error }, errors.comment.message),\r\n        react_1.default.createElement(\"textarea\", { className: commentform_css_1.default.input, ref: ref, value: field.value, onChange: function (e) {\r\n                field.onChange(e);\r\n                onChange(e);\r\n            }, \"aria-invalid\": Boolean(errors.comment) }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_css_1.default.button }, buttonText)));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentform__form--Cs1Oi\",\n\t\"input\": \"commentform__input--2fC-z\",\n\t\"error\": \"commentform__error--1ux_J\",\n\t\"button\": \"commentform__button--35eLT\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentFormContainer = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar sweetalert2_1 = __importDefault(__webpack_require__(/*! sweetalert2 */ \"sweetalert2\"));\r\nvar actions_1 = __webpack_require__(/*! ../../store/commentText/actions */ \"./src/store/commentText/actions.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm/CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\");\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(e) {\r\n        dispatch(actions_1.updateComment(e.target.value));\r\n    }\r\n    function handleSubmit() {\r\n        sweetalert2_1.default.fire({\r\n            position: \"top-end\",\r\n            icon: \"success\",\r\n            title: \"Форма успешно отправлена!\",\r\n            showConfirmButton: false,\r\n            timer: 1500,\r\n        });\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { value: value, onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.CommentFormContainer = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

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

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/CommentBranchSkeleton.tsx":
/*!*********************************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/CommentBranchSkeleton.tsx ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentBranchSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentbranchskeleton_css_1 = __importDefault(__webpack_require__(/*! ./commentbranchskeleton.css */ \"./src/shared/CommentsList/CommentBranchSkeleton/commentbranchskeleton.css\"));\r\nfunction CommentBranchSkeleton(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: commentbranchskeleton_css_1.default.branch },\r\n        react_1.default.createElement(\"div\", { className: commentbranchskeleton_css_1.default.line }),\r\n        children));\r\n}\r\nexports.CommentBranchSkeleton = CommentBranchSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/CommentBranchSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/CommentSkeleton.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/CommentSkeleton.tsx ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentSkeleton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar commentskeleton_css_1 = __importDefault(__webpack_require__(/*! ./commentskeleton.css */ \"./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/commentskeleton.css\"));\r\nvar react_loading_skeleton_1 = __importDefault(__webpack_require__(/*! react-loading-skeleton */ \"react-loading-skeleton\"));\r\nfunction CommentSkeleton() {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"div\", { className: commentskeleton_css_1.default.comment },\r\n            react_1.default.createElement(\"div\", { className: commentskeleton_css_1.default.karma },\r\n                react_1.default.createElement(\"button\", { className: commentskeleton_css_1.default.up },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp })),\r\n                react_1.default.createElement(\"button\", { className: commentskeleton_css_1.default.down },\r\n                    react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.arrowUp }))),\r\n            react_1.default.createElement(\"div\", { className: commentskeleton_css_1.default.top },\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.avatar, circle: true }),\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.userLink }),\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.created }),\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.league })),\r\n            react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.message }),\r\n            react_1.default.createElement(\"div\", { className: commentskeleton_css_1.default.controls },\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.controlBtn }),\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.controlBtn }),\r\n                react_1.default.createElement(react_loading_skeleton_1.default, { className: commentskeleton_css_1.default.controlBtn })))));\r\n}\r\nexports.CommentSkeleton = CommentSkeleton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/CommentSkeleton.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/commentskeleton.css":
/*!*******************************************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/commentskeleton.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comment\": \"commentskeleton__comment--Rtlxg\",\n\t\"karma\": \"commentskeleton__karma--2na6y\",\n\t\"up\": \"commentskeleton__up--14vDU\",\n\t\"down\": \"commentskeleton__down--31o5i\",\n\t\"top\": \"commentskeleton__top--3xFX3\",\n\t\"avatar\": \"commentskeleton__avatar--ICS-D\",\n\t\"userLink\": \"commentskeleton__userLink--3jaPc\",\n\t\"created\": \"commentskeleton__created--1P03m\",\n\t\"league\": \"commentskeleton__league--2xroS\",\n\t\"message\": \"commentskeleton__message--3fkFH\",\n\t\"controls\": \"commentskeleton__controls--kbrFX\",\n\t\"controlBtn\": \"commentskeleton__controlBtn--3bYBK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/commentskeleton.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/CommentSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/commentbranchskeleton.css":
/*!*********************************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/commentbranchskeleton.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"branch\": \"commentbranchskeleton__branch--1pGGP\",\n\t\"line\": \"commentbranchskeleton__line--ylTeK\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/commentbranchskeleton.css?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentBranchSkeleton/index.ts":
/*!****************************************************************!*\
  !*** ./src/shared/CommentsList/CommentBranchSkeleton/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentBranchSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/CommentBranchSkeleton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentBranchSkeleton/index.ts?");

/***/ }),

/***/ "./src/shared/CommentsList/CommentsList.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/CommentsList.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Comment_1 = __webpack_require__(/*! ./CommentBranch/Comment */ \"./src/shared/CommentsList/CommentBranch/Comment/index.ts\");\r\nvar CommentBranch_1 = __webpack_require__(/*! ./CommentBranch */ \"./src/shared/CommentsList/CommentBranch/index.ts\");\r\nvar commentslist_css_1 = __importDefault(__webpack_require__(/*! ./commentslist.css */ \"./src/shared/CommentsList/commentslist.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar CommentBranchSkeleton_1 = __webpack_require__(/*! ./CommentBranchSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/index.ts\");\r\nvar CommentSkeleton_1 = __webpack_require__(/*! ./CommentBranchSkeleton/CommentSkeleton */ \"./src/shared/CommentsList/CommentBranchSkeleton/CommentSkeleton/index.ts\");\r\nfunction CommentsList(_a) {\r\n    var subreddit = _a.subreddit, postId = _a.postId;\r\n    var _b = react_1.useState([]), list = _b[0], setList = _b[1];\r\n    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];\r\n    var _d = react_1.useState(\"\"), error = _d[0], setError = _d[1];\r\n    react_1.useEffect(function () {\r\n        var controller = new AbortController();\r\n        setError(\"\");\r\n        setLoading(true);\r\n        axios_1.default.get(\"http://api.reddit.com/r/\" + subreddit + \"/comments/\" + postId, {\r\n            signal: controller.signal\r\n        })\r\n            .then(function (resp) {\r\n            setList(resp.data[1].data.children);\r\n            setLoading(false);\r\n            console.log(resp);\r\n        }).catch(function (error) {\r\n            setError(String(error));\r\n            setLoading(false);\r\n        });\r\n        // Отменяем запрос при анмаунте компонента\r\n        return function () { return controller.abort(); };\r\n    }, []);\r\n    function outputList(branch) {\r\n        return branch.map(function (comment) {\r\n            var commentInfo = comment.data;\r\n            if (!commentInfo.author || !commentInfo.created || !commentInfo.body) {\r\n                return '';\r\n            }\r\n            return (react_1.default.createElement(CommentBranch_1.CommentBranch, { key: commentInfo.id },\r\n                react_1.default.createElement(Comment_1.Comment, { author: commentInfo.author, created: commentInfo.created, message: commentInfo.body }),\r\n                // Если есть ответы, снова вызываем функцию outputList, но передаём уже список из replies\r\n                commentInfo.replies ? outputList(commentInfo.replies.data.children) : ''));\r\n        });\r\n    }\r\n    return (react_1.default.createElement(\"div\", { className: commentslist_css_1.default.comments },\r\n        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.sort },\r\n            \"\\u0421\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C \\u043F\\u043E:\\u00A0\",\r\n            react_1.default.createElement(\"button\", null, \"\\u041B\\u0443\\u0447\\u0448\\u0438\\u0435\")),\r\n        react_1.default.createElement(\"div\", { className: commentslist_css_1.default.commentsList },\r\n            list && outputList(list),\r\n            loading && (react_1.default.createElement(react_1.default.Fragment, null,\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null))),\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null))),\r\n                react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                    react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null),\r\n                    react_1.default.createElement(CommentBranchSkeleton_1.CommentBranchSkeleton, null,\r\n                        react_1.default.createElement(CommentSkeleton_1.CommentSkeleton, null))))),\r\n            !loading && !error && list.length === 0 && (react_1.default.createElement(\"div\", { className: commentslist_css_1.default.emptyMessage, style: { display: \"flex\", flexDirection: \"column\", alignItems: \"center\", gap: \"2px\", textAlign: \"center\" } },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.monocleFace }),\r\n                \"\\u0425\\u043C\\u043C... \\u0437\\u0434\\u0435\\u0441\\u044C \\u043F\\u043E\\u043A\\u0430 \\u043F\\u0443\\u0441\\u0442\\u043E\")),\r\n            error &&\r\n                react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: \"center\" } }, error))));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CommentsList/commentslist.css":
/*!**************************************************!*\
  !*** ./src/shared/CommentsList/commentslist.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"comments\": \"commentslist__comments--2UBJE\",\n\t\"commentsList\": \"commentslist__commentsList--3Ccu0\",\n\t\"sort\": \"commentslist__sort--33F5O\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CommentsList/commentslist.css?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icons = __importStar(__webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\"));\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"anon\"] = \"AnonIcon\";\r\n    EIcons[\"arrowUp\"] = \"ArrowUpIcon\";\r\n    EIcons[\"block\"] = \"BlockIcon\";\r\n    EIcons[\"comments\"] = \"CommentsIcon\";\r\n    EIcons[\"expand\"] = \"ExpandIcon\";\r\n    EIcons[\"menu\"] = \"MenuIcon\";\r\n    EIcons[\"save\"] = \"SaveIcon\";\r\n    EIcons[\"share\"] = \"ShareIcon\";\r\n    EIcons[\"warning\"] = \"WarningIcon\";\r\n    EIcons[\"monocleFace\"] = \"MonocleFaceIcon\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(_a) {\r\n    var name = _a.name, width = _a.width, height = _a.height;\r\n    var RequiredIcon = icons[name];\r\n    return (react_1.default.createElement(RequiredIcon, { width: width, height: height }));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

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

/***/ "./src/shared/PageNotFound/PageNotFound.css":
/*!**************************************************!*\
  !*** ./src/shared/PageNotFound/PageNotFound.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"pageNotFound\": \"PageNotFound__pageNotFound--1q-rZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/PageNotFound/PageNotFound.css?");

/***/ }),

/***/ "./src/shared/PageNotFound/PageNotFound.tsx":
/*!**************************************************!*\
  !*** ./src/shared/PageNotFound/PageNotFound.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PageNotFound = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar PageNotFound_css_1 = __importDefault(__webpack_require__(/*! ./PageNotFound.css */ \"./src/shared/PageNotFound/PageNotFound.css\"));\r\nfunction PageNotFound() {\r\n    return (react_1.default.createElement(\"div\", { className: PageNotFound_css_1.default.pageNotFound },\r\n        react_1.default.createElement(\"h2\", null, \"404 - \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430\")));\r\n}\r\nexports.PageNotFound = PageNotFound;\r\n\n\n//# sourceURL=webpack:///./src/shared/PageNotFound/PageNotFound.tsx?");

/***/ }),

/***/ "./src/shared/PageNotFound/index.ts":
/*!******************************************!*\
  !*** ./src/shared/PageNotFound/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PageNotFound */ \"./src/shared/PageNotFound/PageNotFound.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/PageNotFound/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar CommentFormContainer_1 = __webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\");\r\nvar CommentsList_1 = __webpack_require__(/*! ../CommentsList */ \"./src/shared/CommentsList/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nfunction Post() {\r\n    var history = react_router_dom_1.useHistory();\r\n    var _a = react_router_dom_1.useParams(), postId = _a.postId, subreddit = _a.subreddit;\r\n    // const postsList = useSelector<RootState, IPostsData[]>(state => state.posts.data);\r\n    // const post = postsList.find(item => item.data.id === postId)!;\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(e) {\r\n            var _a;\r\n            if (e.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {\r\n                history.push(\"/\");\r\n            }\r\n        }\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById('modal_root');\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u0442\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\"),\r\n            react_1.default.createElement(\"p\", null, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0435 \\u0438\\u0441\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u043D\\u0435 \\u0447\\u0442\\u043E \\u0438\\u043D\\u043E\\u0435, \\u043A\\u0430\\u043A \\u043A\\u0432\\u0438\\u043D\\u0442\\u044D\\u0441\\u0441\\u0435\\u043D\\u0446\\u0438\\u044E \\u043F\\u043E\\u0431\\u0435\\u0434\\u044B \\u043C\\u0430\\u0440\\u043A\\u0435\\u0442\\u0438\\u043D\\u0433\\u0430 \\u043D\\u0430\\u0434 \\u0440\\u0430\\u0437\\u0443\\u043C\\u043E\\u043C \\u0438 \\u0434\\u043E\\u043B\\u0436\\u043D\\u044B \\u0431\\u044B\\u0442\\u044C \\u0430\\u0441\\u0441\\u043E\\u0446\\u0438\\u0430\\u0442\\u0438\\u0432\\u043D\\u043E \\u0440\\u0430\\u0441\\u043F\\u0440\\u0435\\u0434\\u0435\\u043B\\u0435\\u043D\\u044B \\u043F\\u043E \\u043E\\u0442\\u0440\\u0430\\u0441\\u043B\\u044F\\u043C. \\u041F\\u0440\\u0435\\u0436\\u0434\\u0435 \\u0432\\u0441\\u0435\\u0433\\u043E, \\u043D\\u0430\\u0447\\u0430\\u043B\\u043E \\u043F\\u043E\\u0432\\u0441\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0442\\u044B \\u043F\\u043E \\u0444\\u043E\\u0440\\u043C\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u0438\\u044E \\u043F\\u043E\\u0437\\u0438\\u0446\\u0438\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0437\\u043D\\u0430\\u0447\\u043D\\u043E \\u0444\\u0438\\u043A\\u0441\\u0438\\u0440\\u0443\\u0435\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043A\\u043B\\u0430\\u0441\\u0442\\u0435\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438 \\u0443\\u0441\\u0438\\u043B\\u0438\\u0439. \\u041D\\u043E \\u0441\\u0442\\u043E\\u0440\\u043E\\u043D\\u043D\\u0438\\u043A\\u0438 \\u0442\\u043E\\u0442\\u0430\\u043B\\u0438\\u0442\\u0430\\u0440\\u0438\\u0437\\u043C\\u0430 \\u0432 \\u043D\\u0430\\u0443\\u043A\\u0435 \\u0438 \\u043F\\u043E \\u0441\\u0435\\u0439 \\u0434\\u0435\\u043D\\u044C \\u043E\\u0441\\u0442\\u0430\\u044E\\u0442\\u0441\\u044F \\u0443\\u0434\\u0435\\u043B\\u043E\\u043C \\u043B\\u0438\\u0431\\u0435\\u0440\\u0430\\u043B\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0436\\u0430\\u0436\\u0434\\u0443\\u0442 \\u0431\\u044B\\u0442\\u044C \\u043F\\u0440\\u0435\\u0432\\u0440\\u0430\\u0449\\u0435\\u043D\\u044B \\u0432 \\u043F\\u043E\\u0441\\u043C\\u0435\\u0448\\u0438\\u0449\\u0435, \\u0445\\u043E\\u0442\\u044F \\u0441\\u0430\\u043C\\u043E \\u0438\\u0445 \\u0441\\u0443\\u0449\\u0435\\u0441\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043F\\u0440\\u0438\\u043D\\u043E\\u0441\\u0438\\u0442 \\u043D\\u0435\\u0441\\u043E\\u043C\\u043D\\u0435\\u043D\\u043D\\u0443\\u044E \\u043F\\u043E\\u043B\\u044C\\u0437\\u0443 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0443.\")),\r\n        react_1.default.createElement(CommentFormContainer_1.CommentFormContainer, null),\r\n        react_1.default.createElement(CommentsList_1.CommentsList, { subreddit: subreddit, postId: postId }))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReplyFormContainer = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar sweetalert2_1 = __importDefault(__webpack_require__(/*! sweetalert2 */ \"sweetalert2\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nfunction ReplyFormContainer(_a) {\r\n    var author = _a.author;\r\n    var _b = react_1.useState(author + \", \"), value = _b[0], setValue = _b[1];\r\n    var ref = react_1.useRef(null);\r\n    function handleChange(e) {\r\n        setValue(e.target.value);\r\n    }\r\n    function handleSubmit() {\r\n        sweetalert2_1.default.fire(\"Good job!\", \"You clicked the button!\", \"success\");\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.CommentForm, { isFocused: true, value: value, buttonText: 'Ответить', onChange: handleChange, onSubmit: handleSubmit }));\r\n}\r\nexports.ReplyFormContainer = ReplyFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/ReplyFormContainer/ReplyFormContainer.tsx?");

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

/***/ "./src/shared/icons/MonocleFaceIcon.tsx":
/*!**********************************************!*\
  !*** ./src/shared/icons/MonocleFaceIcon.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MonocleFaceIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MonocleFaceIcon(_a) {\r\n    var _b = _a.width, width = _b === void 0 ? 40 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c;\r\n    return (react_1.default.createElement(\"svg\", { width: width, height: height, viewBox: \"0 0 40 40\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\r\n        react_1.default.createElement(\"rect\", { width: width, height: height, fill: \"url(#pattern0)\" }),\r\n        react_1.default.createElement(\"defs\", null,\r\n            react_1.default.createElement(\"pattern\", { id: \"pattern0\", patternContentUnits: \"objectBoundingBox\", width: \"1\", height: \"1\" },\r\n                react_1.default.createElement(\"use\", { xlinkHref: \"#image0_16_2280\", transform: \"scale(0.00833333)\" })),\r\n            react_1.default.createElement(\"image\", { id: \"image0_16_2280\", width: \"120\", height: \"120\", xlinkHref: \"data:image/png;base64,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\" }))));\r\n}\r\nexports.MonocleFaceIcon = MonocleFaceIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/MonocleFaceIcon.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/icons/AnonIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ArrowUpIcon */ \"./src/shared/icons/ArrowUpIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ExpandIcon */ \"./src/shared/icons/ExpandIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MonocleFaceIcon */ \"./src/shared/icons/MonocleFaceIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST,\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error,\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (res) {\r\n        var userRes = res.data;\r\n        dispatch(exports.meRequestSuccess({ name: userRes.name, iconImg: userRes.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/me/actions.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsRequestAsync = exports.postsRequestError = exports.POSTS_REQUEST_ERROR = exports.postsRequestSuccess = exports.POSTS_REQUEST_SUCCESS = exports.postsRequest = exports.POSTS_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.POSTS_REQUEST = 'POSTS_REQUEST';\r\nvar postsRequest = function () { return ({\r\n    type: exports.POSTS_REQUEST,\r\n}); };\r\nexports.postsRequest = postsRequest;\r\nexports.POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';\r\nvar postsRequestSuccess = function (data, after) { return ({\r\n    type: exports.POSTS_REQUEST_SUCCESS,\r\n    data: data,\r\n    after: after\r\n}); };\r\nexports.postsRequestSuccess = postsRequestSuccess;\r\nexports.POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';\r\nvar postsRequestError = function (error) { return ({\r\n    type: exports.POSTS_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.postsRequestError = postsRequestError;\r\nvar postsRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.postsRequest());\r\n    console.log(getState().posts.after);\r\n    axios_1.default.get('https://oauth.reddit.com/best?sr_detail=true', {\r\n        headers: { Authorization: \"bearer \" + getState().token },\r\n        params: {\r\n            limit: 10,\r\n            after: getState().posts.after,\r\n        }\r\n    })\r\n        .then(function (res) {\r\n        var _a, _b, _c, _d;\r\n        var postsRes = (_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children;\r\n        var after = (_d = (_c = res.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.after;\r\n        dispatch(exports.postsRequestSuccess(postsRes, after));\r\n        console.log(postsRes);\r\n    })\r\n        .catch(function (error) {\r\n        dispatch(exports.postsRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.postsRequestAsync = postsRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/actions.ts?");

/***/ }),

/***/ "./src/store/posts/reducer.ts":
/*!************************************!*\
  !*** ./src/store/posts/reducer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.postsReducer = exports.postsInitialState = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/store/posts/actions.ts\");\r\nexports.postsInitialState = {\r\n    data: [],\r\n    after: \"\",\r\n    loading: false,\r\n    error: \"\",\r\n    loadingsCount: 0,\r\n};\r\nvar postsReducer = function (state, action) {\r\n    var _a;\r\n    if (state === void 0) { state = exports.postsInitialState; }\r\n    switch (action.type) {\r\n        case actions_1.POSTS_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.POSTS_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { loading: false, data: (_a = state.data).concat.apply(_a, action.data), after: action.after, loadingsCount: state.loadingsCount + 1 });\r\n        case actions_1.POSTS_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { loading: false, error: action.error });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.postsReducer = postsReducer;\r\n\n\n//# sourceURL=webpack:///./src/store/posts/reducer.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.saveToken = exports.setToken = exports.SET_TOKEN = void 0;\r\nexports.SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (token) { return ({\r\n    type: exports.SET_TOKEN,\r\n    token: token,\r\n}); };\r\nexports.setToken = setToken;\r\nvar saveToken = function () { return function (dispatch, getState) {\r\n    var windowToken = window.__token__, localToken = localStorage.getItem('token');\r\n    if (windowToken && windowToken !== 'undefined') {\r\n        dispatch(exports.setToken(windowToken));\r\n        localStorage.setItem('token', windowToken);\r\n    }\r\n    else {\r\n        if (localToken) {\r\n            dispatch(exports.setToken(localToken));\r\n        }\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n\n\n//# sourceURL=webpack:///./src/store/token/actions.ts?");

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

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

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

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hook-form\");\n\n//# sourceURL=webpack:///external_%22react-hook-form%22?");

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

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

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

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sweetalert2\");\n\n//# sourceURL=webpack:///external_%22sweetalert2%22?");

/***/ })

/******/ });