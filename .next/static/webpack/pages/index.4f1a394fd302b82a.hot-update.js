"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProjectSection.tsx":
/*!***************************************!*\
  !*** ./components/ProjectSection.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProjectSection = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"detailsContainer\",\n        className: \"p-6 mx-auto h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-bold pb-2\",\n                children: props.project.name\n            }, void 0, false, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 13,\n                columnNumber: 15\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700 text-base pb-4\",\n                children: props.project.description\n            }, void 0, false, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 14,\n                columnNumber: 15\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: props.project.github,\n                className: \"hover:text-cool-blue-color transition-colors\",\n                children: \"View Source Code\"\n            }, void 0, false, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 15,\n                columnNumber: 15\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-4\",\n                children: props.project.skills.map((skill, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-cool-blue-color inline-block rounded-full px-3 py-1 text-sm font-semibold text-main-color mr-2 mb-2 hover:bg-main-color hover:text-cool-blue-color transition-colors\",\n                        children: skill\n                    }, index, false, {\n                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 19\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 16,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n        lineNumber: 12,\n        columnNumber: 13\n    }, undefined);\n};\n_c = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFPMUIsTUFBTUMsaUJBQWlCLENBQUNDLFFBQWlCO0lBRXJDLHFCQUVRLDhEQUFDQztRQUFJQyxJQUFHO1FBQW1CQyxXQUFVOzswQkFDbkMsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQkgsTUFBTUssT0FBTyxDQUFDQyxJQUFJOzs7Ozs7MEJBQzNELDhEQUFDQztnQkFBRUosV0FBVTswQkFBZ0NILE1BQU1LLE9BQU8sQ0FBQ0csV0FBVzs7Ozs7OzBCQUN0RSw4REFBQ0M7Z0JBQUVDLE1BQU1WLE1BQU1LLE9BQU8sQ0FBQ00sTUFBTTtnQkFBRVIsV0FBVTswQkFBK0M7Ozs7OzswQkFDeEYsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNaSCxNQUFNSyxPQUFPLENBQUNPLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNoQyw4REFBQ0M7d0JBRUNiLFdBQVU7a0NBRVRXO3VCQUhJQzs7Ozs7Ozs7Ozs7Ozs7OztBQVV6QjtLQXJCTWhCO0FBdUJOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24udHN4Pzc1ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9wdWJsaWMvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHByb2plY3Q6IFByb2plY3Q7XG59XG5cbmNvbnN0IFByb2plY3RTZWN0aW9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgKFxuICAgICAgICAgICAgPGRpdiBpZD1cImRldGFpbHNDb250YWluZXJcIiBjbGFzc05hbWU9XCJwLTYgbXgtYXV0byBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHBiLTJcIj57cHJvcHMucHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlIHBiLTRcIj57cHJvcHMucHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLnByb2plY3QuZ2l0aHVifSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWNvb2wtYmx1ZS1jb2xvciB0cmFuc2l0aW9uLWNvbG9yc1wiPlZpZXcgU291cmNlIENvZGU8L2E+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5wcm9qZWN0LnNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctY29vbC1ibHVlLWNvbG9yIGlubGluZS1ibG9jayByb3VuZGVkLWZ1bGwgcHgtMyBweS0xIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LW1haW4tY29sb3IgbXItMiBtYi0yIGhvdmVyOmJnLW1haW4tY29sb3IgaG92ZXI6dGV4dC1jb29sLWJsdWUtY29sb3IgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2tpbGx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFNlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9qZWN0U2VjdGlvbiIsInByb3BzIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJoMiIsInByb2plY3QiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJnaXRodWIiLCJza2lsbHMiLCJtYXAiLCJza2lsbCIsImluZGV4Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectSection.tsx\n"));

/***/ })

});