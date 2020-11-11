webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/WindowManager/WindowManager.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/WindowManager.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/WindowManager.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar ProcessWindow = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/ProcessWindow */ \"./components/System/WindowManager/ProcessWindow.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/ProcessWindow */ \"./components/System/WindowManager/ProcessWindow.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/ProcessWindow']\n  }\n});\n_c2 = ProcessWindow;\n\nvar WindowManager = function WindowManager() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      processes = _useContext.processes;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.windows,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: processes.map(function (process) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ProcessWindow, _objectSpread({}, process), process.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(WindowManager, \"dJ2BHtMV6cXM+kzKNavbKFAetCE=\");\n\n_c3 = WindowManager;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WindowManager);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ProcessWindow$dynamic\");\n$RefreshReg$(_c2, \"ProcessWindow\");\n$RefreshReg$(_c3, \"WindowManager\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLnRzeD9iNDcyIl0sIm5hbWVzIjpbIlByb2Nlc3NXaW5kb3ciLCJkeW5hbWljIiwiV2luZG93TWFuYWdlciIsInVzZUNvbnRleHQiLCJQcm9jZXNzQ29udGV4dCIsInByb2Nlc3NlcyIsInN0eWxlcyIsIndpbmRvd3MiLCJtYXAiLCJwcm9jZXNzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsbURBQU87QUFBQSxTQUMzQiwyTEFEMkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDcEIsNEdBRG9CO0FBQUE7QUFBQSxjQUNwQixpREFEb0I7QUFBQTtBQUFBLEVBQTdCO01BQU1ELGE7O0FBSU4sSUFBTUUsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBOztBQUFBLG9CQUNkQyx3REFBVSxDQUFDQyx1RUFBRCxDQURJO0FBQUEsTUFDNUJDLFNBRDRCLGVBQzVCQSxTQUQ0Qjs7QUFHcEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDZGQUFNLENBQUNDLE9BQXZCO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSxnQkFDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsT0FBRDtBQUFBLDRCQUNiLHFFQUFDLGFBQUQsb0JBQW9DQSxPQUFwQyxHQUFvQkEsT0FBTyxDQUFDQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVpEOztHQUFNUixhOztNQUFBQSxhO0FBY1NBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL1dpbmRvd01hbmFnZXIvV2luZG93TWFuYWdlci5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFByb2Nlc3NXaW5kb3cgPSBkeW5hbWljKFxuICBpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93Jylcbik7XG5cbmNvbnN0IFdpbmRvd01hbmFnZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHByb2Nlc3NlcyB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndpbmRvd3N9PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge3Byb2Nlc3Nlcy5tYXAoKHByb2Nlc3MpID0+IChcbiAgICAgICAgICA8UHJvY2Vzc1dpbmRvdyBrZXk9e3Byb2Nlc3MuaWR9IHsuLi5wcm9jZXNzfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93TWFuYWdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/WindowManager/WindowManager.tsx\n");

/***/ })

})