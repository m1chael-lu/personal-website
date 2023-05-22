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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var _public_expanded_projects_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/expanded-projects.json */ \"./public/expanded-projects.json\");\n/* harmony import */ var _Skill_SkillsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Skill/SkillsContainer */ \"./components/Skill/SkillsContainer.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ProjectSection = (props)=>{\n    _s();\n    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        threshold: 0.1\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!inView) {\n            props.setProject(undefined);\n        }\n    }, [\n        inView\n    ]);\n    let currProjectID = -1;\n    if (props.project) {\n        currProjectID = props.project.id;\n    }\n    const expandedProject = _public_expanded_projects_json__WEBPACK_IMPORTED_MODULE_2__.find((project)=>project.id === currProjectID);\n    return props.project && expandedProject ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"project-section\",\n        ref: ref,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-main-color h-24\"\n            }, void 0, false, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center bg-cool-blue-color text-main-color text-4xl p-4 pt-4\",\n                style: {\n                    height: \"70vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 font-bold\",\n                        children: props.project.name\n                    }, void 0, false, {\n                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-main-color w-56 h-2 mx-auto rounded-md mb-4 mt-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold text-2xl mt-5\",\n                                        children: \"Preview\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: expandedProject && expandedProject.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-center bg-no-repeat bg-cover rounded-2xl w-[1019px] h-[573px] align-middle mt-4 border-8 border-gray-200 shadow hover:scale-105 transition-all transform ease-out duration-200 ml-8\",\n                                            style: {\n                                                backgroundImage: \"url(\".concat(expandedProject.image, \")\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-12\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"text-2xl mt-5 font-bold\",\n                                                children: [\n                                                    \" \",\n                                                    \"Description\",\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-fit h-[382px] bg-main-color rounded-2xl mt-4 mr-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-2xl text-gray-700 m-3 pt-4 font-semibold\",\n                                                    children: expandedProject.description\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-0 items-center text-sm\",\n                                            children: expandedProject && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Skill_SkillsContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                skillList: expandedProject.skills\n                                            }, void 0, false, {\n                                                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 40\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaellu/Documents/personal-website/components/ProjectSection.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_s(ProjectSection, \"EACkfnHeN2doh58mi8sWkGwkgKo=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBRUs7QUFDTztBQUNUO0FBUXRELE1BQU1LLGlCQUFpQixDQUFDQyxRQUFpQjs7SUFDdkMsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLE9BQU0sRUFBRSxHQUFHTixzRUFBU0EsQ0FBQztRQUNoQ08sV0FBVztJQUNiO0lBRUFSLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJLENBQUNPLFFBQVE7WUFDWEYsTUFBTUksVUFBVSxDQUFDQztRQUNuQixDQUFDO0lBQ0gsR0FBRztRQUFDSDtLQUFPO0lBRVgsSUFBSUksZ0JBQWdCLENBQUM7SUFDckIsSUFBSU4sTUFBTU8sT0FBTyxFQUFFO1FBQ2pCRCxnQkFBZ0JOLE1BQU1PLE9BQU8sQ0FBQ0MsRUFBRTtJQUNsQyxDQUFDO0lBRUQsTUFBTUMsa0JBQWtCWixnRUFBcUIsQ0FBQyxDQUFDVSxVQUFZQSxRQUFRQyxFQUFFLEtBQUtGO0lBRTFFLE9BQ0UsTUFBT0MsT0FBTyxJQUFJRSxnQ0FDaEIsOERBQUNFO1FBQVFILElBQUc7UUFBa0JQLEtBQUtBOzswQkFDakMsOERBQUNXO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUNEO2dCQUNDQyxXQUFVO2dCQUNWQyxPQUFPO29CQUFFQyxRQUFRO2dCQUFPOztrQ0FFeEIsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNaYixNQUFNTyxPQUFPLENBQUNTLElBQUk7Ozs7OztrQ0FFckIsOERBQUNKO3dCQUFJQyxXQUFVOzs7Ozs7a0NBRWYsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7O2tEQUNDLDhEQUFDQTt3Q0FBSUMsV0FBVTtrREFDWjs7Ozs7O2tEQUVILDhEQUFDRDtrREFDRUgsbUJBQW1CQSxnQkFBZ0JRLEtBQUssa0JBQ3ZDLDhEQUFDTDs0Q0FDQ0MsV0FBWTs0Q0FDWkMsT0FBTztnREFDTEksaUJBQWlCLE9BQTZCLE9BQXRCVCxnQkFBZ0JRLEtBQUssRUFBQzs0Q0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU1SLDhEQUFDTDtnQ0FBSUMsV0FBVTs7a0RBRWIsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O29EQUEwQjtvREFBRTtvREFBYzs7Ozs7OzswREFDekQsOERBQUNEO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDRDtvREFBSUMsV0FBVTs4REFDWkosZ0JBQWdCVSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztrREFNbEMsOERBQUNQO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDRDs0Q0FBSUMsV0FBVTtzREFDWkosaUNBQW9CLDhEQUFDWCw4REFBZUE7Z0RBQUNzQixXQUFXWCxnQkFBZ0JZLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNdEUsNklBQUs7QUFFeEI7R0F4RU10Qjs7UUFDb0JILGtFQUFTQTs7O0tBRDdCRztBQTBFTiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uLnRzeD83NWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3B1YmxpYy90eXBlcyc7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgZXhwYW5kZWRQcm9qZWN0cyBmcm9tIFwiLi4vcHVibGljL2V4cGFuZGVkLXByb2plY3RzLmpzb25cIlxuaW1wb3J0IFNraWxsc0NvbnRhaW5lciBmcm9tICcuL1NraWxsL1NraWxsc0NvbnRhaW5lcic7XG5pbXBvcnQgeyBDdXJzb3IsIHVzZVR5cGV3cml0ZXIgfSBmcm9tIFwicmVhY3Qtc2ltcGxlLXR5cGV3cml0ZXJcIlxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9qZWN0PzogUHJvamVjdCxcbiAgc2V0UHJvamVjdDogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248UHJvamVjdCB8IHVuZGVmaW5lZD4+XG59XG5cbmNvbnN0IFByb2plY3RTZWN0aW9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHJlZiwgaW5WaWV3IH0gPSB1c2VJblZpZXcoe1xuICAgIHRocmVzaG9sZDogMC4xLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5WaWV3KSB7XG4gICAgICBwcm9wcy5zZXRQcm9qZWN0KHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCBbaW5WaWV3XSlcblxuICBsZXQgY3VyclByb2plY3RJRCA9IC0xO1xuICBpZiAocHJvcHMucHJvamVjdCkge1xuICAgIGN1cnJQcm9qZWN0SUQgPSBwcm9wcy5wcm9qZWN0LmlkO1xuICB9XG5cbiAgY29uc3QgZXhwYW5kZWRQcm9qZWN0ID0gZXhwYW5kZWRQcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBjdXJyUHJvamVjdElEKTtcblxuICByZXR1cm4gKFxuICAgIChwcm9wcy5wcm9qZWN0ICYmIGV4cGFuZGVkUHJvamVjdCkgP1xuICAgICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0LXNlY3Rpb25cIiByZWY9e3JlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbWFpbi1jb2xvciBoLTI0XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctY29vbC1ibHVlLWNvbG9yIHRleHQtbWFpbi1jb2xvciB0ZXh0LTR4bCBwLTQgcHQtNFwiXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwdmhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge3Byb3BzLnByb2plY3QubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW1haW4tY29sb3Igdy01NiBoLTIgbXgtYXV0byByb3VuZGVkLW1kIG1iLTQgbXQtNFwiPjwvZGl2PlxuICAgICAgICAgIHsvKiBUaGUgc3RhcnQgb2YgdGhlIHByb2plY3QgZGV0YWlscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGgtZnVsbFwiPlxuICAgICAgICAgICAgey8qIGltYWdlICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGwgbXQtNVwiPlxuICAgICAgICAgICAgICAgIHsnUHJldmlldyd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtleHBhbmRlZFByb2plY3QgJiYgZXhwYW5kZWRQcm9qZWN0LmltYWdlICYmXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWNlbnRlciBiZy1uby1yZXBlYXQgYmctY292ZXIgcm91bmRlZC0yeGwgdy1bMTAxOXB4XSBoLVs1NzNweF0gYWxpZ24tbWlkZGxlIG10LTQgYm9yZGVyLTggYm9yZGVyLWdyYXktMjAwIHNoYWRvdyBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGVhc2Utb3V0IGR1cmF0aW9uLTIwMCBtbC04YH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtleHBhbmRlZFByb2plY3QuaW1hZ2V9KWAsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgey8qIERlc2NyaXB0aW9uICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtdC01IGZvbnQtYm9sZFwiPiB7J0Rlc2NyaXB0aW9uJ30gPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZpdCBoLVszODJweF0gYmctbWFpbi1jb2xvciByb3VuZGVkLTJ4bCBtdC00IG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTcwMCBtLTMgcHQtNCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtleHBhbmRlZFByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIFNraWxscyArIExpbmtzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMCBpdGVtcy1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAge2V4cGFuZGVkUHJvamVjdCAmJiAoPFNraWxsc0NvbnRhaW5lciBza2lsbExpc3Q9e2V4cGFuZGVkUHJvamVjdC5za2lsbHN9IC8+KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+IDogPD48Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2VjdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUluVmlldyIsImV4cGFuZGVkUHJvamVjdHMiLCJTa2lsbHNDb250YWluZXIiLCJQcm9qZWN0U2VjdGlvbiIsInByb3BzIiwicmVmIiwiaW5WaWV3IiwidGhyZXNob2xkIiwic2V0UHJvamVjdCIsInVuZGVmaW5lZCIsImN1cnJQcm9qZWN0SUQiLCJwcm9qZWN0IiwiaWQiLCJleHBhbmRlZFByb2plY3QiLCJmaW5kIiwic2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwibmFtZSIsImltYWdlIiwiYmFja2dyb3VuZEltYWdlIiwiZGVzY3JpcHRpb24iLCJza2lsbExpc3QiLCJza2lsbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectSection.tsx\n"));

/***/ })

});