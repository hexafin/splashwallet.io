module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animations/loadingCircle2.json":
/***/ (function(module, exports) {

module.exports = {"v":"5.1.1","fr":30,"ip":1,"op":39,"w":100,"h":100,"nm":"setting_loading 100px","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"loading","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2},"a":{"a":0,"k":[17,17,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.627,0],[0,0],[0,-6.627],[6.627,0],[0,6.627]],"o":[[0,0],[6.627,0],[0,6.627],[-6.627,0],[0,-6.627]],"v":[[0,-12],[0,-12],[12,0],[0,12],[-12,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[17,17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.75],"y":[1]},"o":{"x":[0.25],"y":[0]},"n":["0p75_1_0p25_0"],"t":0,"s":[0],"e":[100]},{"t":23}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.75],"y":[1]},"o":{"x":[0.25],"y":[0]},"n":["0p75_1_0p25_0"],"t":17,"s":[0],"e":[100]},{"t":40}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[382]},{"t":40}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":260,"st":0,"bm":0}],"markers":[]}

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_constants__ = __webpack_require__("./lib/constants.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Button.js';




var Button = function Button(_ref) {
	var children = _ref.children,
	    disabled = _ref.disabled,
	    onClick = _ref.onClick,
	    width = _ref.width;

	var classes = [];
	if (disabled) {
		classes.push('disabled');
	}
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'button',
		{ onClick: onClick, className: 'jsx-4105273518' + ' ' + (classes.join(' ') || ''),
			__source: {
				fileName: _jsxFileName,
				lineNumber: 7
			}
		},
		children,
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '4105273518',
			css: 'button.jsx-4105273518{margin:0;margin-left:12px;top:-2px;font-size:18px;padding:18px 25px;background:' + __WEBPACK_IMPORTED_MODULE_2__lib_constants__["a" /* colors */].primary + ';color:white;border-radius:4px;border:none;width:185px;font-weight:700;box-shadow:rgba(63,63,63,0.08) 0 6px 14px 0;-webkit-transition:all 150ms cubic-bezier(0.21,0.94,0.64,0.99);transition:all 150ms cubic-bezier(0.21,0.94,0.64,0.99);}button.jsx-4105273518:focus{outline:0;}button.jsx-4105273518:hover{background:' + __WEBPACK_IMPORTED_MODULE_2__lib_constants__["a" /* colors */].primaryHover + ';color:white;cursor:pointer;-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}.disabled.jsx-4105273518{background:#E4E3E5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFjLEFBR2MsQUFnQkMsQUFJOEIsQUFPckIsU0ExQkYsQ0FnQmxCLFNBV0EsT0ExQlUsU0FDTSxLQWtCSCxVQWpCTSxFQWtCSCxlQUNPLENBbEJrQix3Q0FDNUIsWUFDTSxrQkFDTixPQWdCYixLQWZhLFlBQ0ksZ0JBQzRCLDRDQUNjLHNIQUMzRCIsImZpbGUiOiJjb21wb25lbnRzL0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsV3liL0RvY3VtZW50cy9DcmVhdGl2ZS9Qcm9qZWN0cy9jcnlwdG93YWxsZXQvc3BsYXNoLXdhaXRsaXN0L3NwbGFzaHdhbGxldC5pbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIGRpc2FibGVkLCBvbkNsaWNrLCB3aWR0aH0pID0+IHtcblx0bGV0IGNsYXNzZXMgPSBbXVxuXHRpZiAoZGlzYWJsZWQpIHtjbGFzc2VzLnB1c2goJ2Rpc2FibGVkJyl9XG5cdHJldHVybiAoXG5cdDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0gb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufVxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0YnV0dG9uIHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTJweDtcblx0XHRcdFx0dG9wOiAtMnB4O1x0XG5cdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcdFx0XG5cdFx0XHRcdHBhZGRpbmc6IDE4cHggMjVweDtcdFxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9ycy5wcmltYXJ5fTtcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1x0XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHR3aWR0aDogMTg1cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdGJveC1zaGFkb3c6IHJnYmEoNjMsNjMsNjMsMC4wOCkgMCA2cHggMTRweCAwO1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjEsIDAuOTQsIDAuNjQsIDAuOTkpO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b246Zm9jdXMge1xuXHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRidXR0b246aG92ZXIge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAke2NvbG9ycy5wcmltYXJ5SG92ZXJ9O1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcblx0XHRcdH1cblxuXHRcdFx0LmRpc2FibGVkIHtcblx0XHRcdFx0YmFja2dyb3VuZDogI0U0RTNFNTtcblx0XHRcdH1cblxuXG5cdFx0XHRgfVxuXHRcdDwvc3R5bGU+XG5cblx0PC9idXR0b24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIl19 */\n/*@ sourceURL=components/Button.js */'
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./components/Logo.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Header.js';





var Header = function Header() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-710397073',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 6
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'a',
			{ href: 'https://medium.com/splash-wallet', className: 'jsx-710397073',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			'Learn more'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '710397073',
			css: 'div.jsx-710397073{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9jLEFBR2tCLDBFQUNpQixtSEFDaEIsY0FDSyw2RkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8TG9nbyAvPlxuXHRcdDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vc3BsYXNoLXdhbGxldFwiPkxlYXJuIG1vcmU8L2E+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0ZGl2IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdGB9XG5cdFx0PC9zdHlsZT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/HeaderTags.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/HeaderTags.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", { charSet: "utf-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "https://use.typekit.net/xob8rbo.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    )
  );
});

/***/ }),

/***/ "./components/Icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoSmallColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Icons.js";


var LogoSmallColor = function LogoSmallColor() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "svg",
        { width: "15px", height: "20px", viewBox: "0 0 15 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "g",
            { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "g",
                { id: "Desktop-HD-Copy-4", transform: "translate(-232.000000, -39.000000)", fill: "#4D00FF", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 5
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "g",
                    { id: "Group-Copy", transform: "translate(232.000000, 39.000000)", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 6
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.41176471,19.9314457 C11.5051693,19.9314457 14.8235294,16.6550638 14.8235294,12.613442 C14.8235294,8.57182015 8.80386266,0.105358705 7.41176471,0.105358705 C6.01966675,0.105358705 0,8.57182015 0,12.613442 C0,16.6550638 3.31836009,19.9314457 7.41176471,19.9314457 Z", id: "Oval-3", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    })
                )
            )
        )
    );
};

/***/ }),

/***/ "./components/LoadingCircle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bodymovin__ = __webpack_require__("react-bodymovin");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bodymovin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bodymovin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json__ = __webpack_require__("./animations/loadingCircle2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json__);
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/LoadingCircle.js';





/* harmony default export */ __webpack_exports__["a"] = (function () {
  var bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: __WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json__
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3007776118' + ' ' + 'loading-animation',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bodymovin___default.a, { options: bodymovinOptions, __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3007776118',
      css: '.loading-animation>.react-bodymovin-container{height:90px;margin:-40px;opacity:0.7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9hZGluZ0NpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjeUIsQUFHdUIsWUFDQyxhQUNELFlBQ2QiLCJmaWxlIjoiY29tcG9uZW50cy9Mb2FkaW5nQ2lyY2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWxXeWIvRG9jdW1lbnRzL0NyZWF0aXZlL1Byb2plY3RzL2NyeXB0b3dhbGxldC9zcGxhc2gtd2FpdGxpc3Qvc3BsYXNod2FsbGV0LmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvZHltb3ZpbiBmcm9tICdyZWFjdC1ib2R5bW92aW4nO1xuaW1wb3J0ICogYXMgYW5pbWF0aW9uIGZyb20gJy4uL2FuaW1hdGlvbnMvbG9hZGluZ0NpcmNsZTIuanNvbidcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBib2R5bW92aW5PcHRpb25zID0ge1xuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYW5pbWF0aW9uXCI+XG4gICAgICA8Qm9keW1vdmluIG9wdGlvbnM9e2JvZHltb3Zpbk9wdGlvbnN9IC8+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAubG9hZGluZy1hbmltYXRpb24gPiAucmVhY3QtYm9keW1vdmluLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIG1hcmdpbjogLTQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=components/LoadingCircle.js */'
    })
  );
});

/***/ }),

/***/ "./components/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Icons__ = __webpack_require__("./components/Icons.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Logo.js';




/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-3083269145',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Icons__["a" /* LogoSmallColor */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 5
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'h2',
			{
				className: 'jsx-3083269145',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 6
				}
			},
			'Splash'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '3083269145',
			css: 'div.jsx-3083269145{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h2.jsx-3083269145{font-size:21px;margin-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNYyxBQUdrQixBQUlFLGVBQ0MsZ0JBQ2pCLDJDQUxvQiw2RkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9Mb2dvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWxXeWIvRG9jdW1lbnRzL0NyZWF0aXZlL1Byb2plY3RzL2NyeXB0b3dhbGxldC9zcGxhc2gtd2FpdGxpc3Qvc3BsYXNod2FsbGV0LmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nb1NtYWxsQ29sb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0ljb25zJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PExvZ29TbWFsbENvbG9yLz5cblx0XHQ8aDI+U3BsYXNoPC9oMj5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0aDIge1xuXHRcdFx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdFx0XHR9XG5cdFx0YH1cblx0XHQ8L3N0eWxlPlxuXHQ8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/Logo.js */'
		})
	);
});

/***/ }),

/***/ "./components/MainLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderTags__ = __webpack_require__("./components/HeaderTags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_constants__ = __webpack_require__("./lib/constants.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/MainLayout.js';






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
	var children = _ref.children;
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-3298204824',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 7
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__HeaderTags__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 8
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'div',
			{
				className: 'jsx-3298204824' + ' ' + 'container',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}),
			children
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '3298204824',
			css: 'body,input,button{font-family:proxima-soft,sans-serif;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:' + __WEBPACK_IMPORTED_MODULE_4__lib_constants__["a" /* colors */].dark + ';-webkit-transition:all 150ms ease;transition:all 150ms ease;}a{text-decoration:none;color:' + __WEBPACK_IMPORTED_MODULE_4__lib_constants__["a" /* colors */].darkGrey + ';-webkit-transition:all 150ms ease;transition:all 150ms ease;}a:hover{color:' + __WEBPACK_IMPORTED_MODULE_4__lib_constants__["a" /* colors */].primary + ';}body{padding:0 20px;}.container{max-width:1100px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTWFpbkxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhcUIsQUFHMEMsQUFTaEIsQUFNYyxBQUlwQixBQUlFLGVBSGxCLEVBSWUsSUFkcUIsVUFlcEMsSUFUQSxDQWZvQyxvQkFVVCxjQVRVLG1DQUNELFdBU3BDLHVCQVJxQyxtQ0FDVCw0REFDNUIiLCJmaWxlIjoiY29tcG9uZW50cy9NYWluTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EYW5pZWxXeWIvRG9jdW1lbnRzL0NyZWF0aXZlL1Byb2plY3RzL2NyeXB0b3dhbGxldC9zcGxhc2gtd2FpdGxpc3Qvc3BsYXNod2FsbGV0LmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlclRhZ3MgZnJvbSAnLi9IZWFkZXJUYWdzJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW59KSA9PiAoXG5cdDxkaXY+XG5cdFx0PEhlYWRlclRhZ3MvPlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0PEhlYWRlciAvPlxuXG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9kaXY+XG5cdFx0PHN0eWxlIGpzeCBnbG9iYWw+e2Bcblx0XHRcdGJvZHksIGlucHV0LCBidXR0b24ge1xuXHRcdFx0XHRmb250LWZhbWlseTogcHJveGltYS1zb2Z0LCBzYW5zLXNlcmlmO1xuXHRcdFx0ICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHRcdFx0ICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0XHRcdCAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0XHRcdCAgY29sb3I6ICR7Y29sb3JzLmRhcmt9O1xuXHRcdFx0ICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcblx0XHRcdH1cblxuXHRcdFx0YSB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmRhcmtHcmV5fTtcblx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG5cdFx0XHR9XG5cblx0XHRcdGE6aG92ZXIge1xuXHRcdFx0XHRjb2xvcjogJHtjb2xvcnMucHJpbWFyeX07XG5cdFx0XHR9XG5cblx0XHRcdGJvZHkge1xuXHRcdFx0XHRwYWRkaW5nOiAwIDIwcHg7XG5cdFx0XHR9XG5cblx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRtYXgtd2lkdGg6IDExMDBweDtcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0XHR9XG5cdFx0XHRgfVxuXHRcdDwvc3R5bGU+XG5cdDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=components/MainLayout.js */'
		})
	);
});

/***/ }),

/***/ "./lib/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
var colors = {
	dark: '#333',
	grey: '#BFBFBF',
	darkGrey: '#BBBBBB',
	primary: '#4D00FF',
	primaryHover: '#5D3EFF'
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainLayout__ = __webpack_require__("./components/MainLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_constants__ = __webpack_require__("./lib/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_debounce__ = __webpack_require__("lodash.debounce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_LoadingCircle__ = __webpack_require__("./components/LoadingCircle.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/pages/index.js';



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/* harmony default export */ __webpack_exports__["default"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_2__components_MainLayout__["a" /* default */],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Hero, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		})
	);
});

// <SplashTagBar />

var SplashTagBar = function (_React$Component) {
	_inherits(SplashTagBar, _React$Component);

	function SplashTagBar() {
		_classCallCheck(this, SplashTagBar);

		var _this = _possibleConstructorReturn(this, (SplashTagBar.__proto__ || Object.getPrototypeOf(SplashTagBar)).call(this));

		_this.state = {
			submitted: false,
			splashtag: '',
			validationError: false,
			tagAvailable: true
		};
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(SplashTagBar, [{
		key: 'handleSubmit',
		value: function handleSubmit(event) {
			var splashtag = this.state.splashtag;
			if (this.validateSplashtag(splashtag)) {
				this.setState({
					submitted: true,
					validationError: false,
					checkingAvailability: false
				});
			} else {
				this.setState({ validationError: true });
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			var splashtag = this.forceLower(event.target.value);
			this.setState({ splashtag: splashtag });
			console.log(splashtag.length);
			if (this.validateSplashtag(splashtag)) {
				this.setState({ validationError: false });
				this.checkIfTagAvailable(splashtag);
			} else {
				this.setState({ validationError: true, checkingAvailability: false });
			}

			if (splashtag.length < 1) {
				console.log('setting validationerror to false');
				this.setState({ validationError: false });
			}
		}
	}, {
		key: 'forceLower',
		value: function forceLower(splashtag) {
			return splashtag.toLowerCase();
		}
	}, {
		key: 'checkIfTagAvailable',
		value: function checkIfTagAvailable(splashtag) {
			var _this2 = this;

			var url = 'https://us-central1-hexa-splash.cloudfunctions.net/splashtagAvailable?splashtag=';
			this.setState({ checkingAvailability: true });
			__WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('' + url + splashtag).then(function (result) {
				console.log('tagAvailable', result.data);
				_this2.setState({ tagAvailable: result.data, checkingAvailability: false });
			}).catch(function (error) {
				console.log('checkingAvailability', error);
				_this2.setState({ tagAvailable: true, checkingAvailability: false });
			});
		}
	}, {
		key: 'validateSplashtag',
		value: function validateSplashtag(splashtag) {
			if (/^[a-z0-9_-]{3,15}$/.test(splashtag)) {
				return true;
			}
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    submitted = _state.submitted,
			    validationError = _state.validationError,
			    tagAvailable = _state.tagAvailable,
			    checkingAvailability = _state.checkingAvailability;


			var buttonContent = function buttonContent() {
				if (checkingAvailability) {
					var inBrowser = typeof navigator !== "undefined";
					if (inBrowser) {
						return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_LoadingCircle__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 93
							}
						});
					} else {
						return;
					}
				} else if (validationError) {
					return 'Check splashtag';
				} else if (!tagAvailable) {
					return 'Already taken ';
				} else {
					return 'Claim splashtag';
				}
			};

			var buttonDisabled = function buttonDisabled() {
				if (validationError) {
					console.log('validationerror', validationError);
					return true;
				} else if (_this3.state.tagAvailable) {
					console.log('tagAvailable1', _this3.state.tagAvailable);
					return false;
				} else {
					console.log('else');

					return false;
				}
			};

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2537798234', [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]]]) + ' ' + 'wrap',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 121
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2537798234', [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]]]) + ' ' + 'splashtagbar',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 122
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
						onChange: this.handleChange,
						value: this.state.splashtag,
						type: 'text',
						placeholder: 'Choose your splashtag', className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2537798234', [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]]]),
						__source: {
							fileName: _jsxFileName,
							lineNumber: 123
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6__components_Button__["a" /* default */],
					{
						disabled: buttonDisabled(),
						onClick: this.handleSubmit, __source: {
							fileName: _jsxFileName,
							lineNumber: 129
						}
					},
					buttonContent()
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2537798234',
					css: '.wrap.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}input.__jsx-style-dynamic-selector{width:220px;font-size:18px;padding:18px 20px;color:' + (validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark) + ';font-weight:500;border:none;box-shadow:rgba(63,63,63,0.08) 0 6px 34px 0;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector::-moz-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector::placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector:focus{outline:0;}.splashtagbar.__jsx-style-dynamic-selector{opacity:1;}.fade-out.__jsx-style-dynamic-selector{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNJZ0IsQUFJb0IsQUFJRCxBQVV1QixBQUd6QixBQUlBLEFBSUEsVUFQWCxBQUlBLEFBSUEsRUFyQmdCLGVBQ0csUUFTbkIsVUFSb0MsNkJBTlosTUFPUCxnQkFDSixZQUNnQyw0Q0FDN0MscUJBVEEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkxheW91dCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBMb2FkaW5nQ2lyY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZ0NpcmNsZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxIZXJvLz5cblx0PC9MYXlvdXQ+XG4pXG5cblx0XHQvLyA8U3BsYXNoVGFnQmFyIC8+XG5cbmNsYXNzIFNwbGFzaFRhZ0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c3VibWl0dGVkOiBmYWxzZSxcblx0XHRcdHNwbGFzaHRhZzogJycsXG5cdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0dGFnQXZhaWxhYmxlOiB0cnVlLFxuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudCkge1xuXHRcdGNvbnN0IHNwbGFzaHRhZyA9IHRoaXMuc3RhdGUuc3BsYXNodGFnXG5cdFx0aWYgKHRoaXMudmFsaWRhdGVTcGxhc2h0YWcoc3BsYXNodGFnKSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN1Ym1pdHRlZDogdHJ1ZSwgXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogZmFsc2UsXG5cdFx0XHRcdGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogdHJ1ZX0pXG5cdFx0fVxuXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcblx0XHRjb25zdCBzcGxhc2h0YWcgPSB0aGlzLmZvcmNlTG93ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHRcdHRoaXMuc2V0U3RhdGUoe3NwbGFzaHRhZzogc3BsYXNodGFnfSlcblx0XHRjb25zb2xlLmxvZyhzcGxhc2h0YWcubGVuZ3RoKVxuXHRcdGlmICh0aGlzLnZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogZmFsc2V9KVxuXHQgIFx0dGhpcy5jaGVja0lmVGFnQXZhaWxhYmxlKHNwbGFzaHRhZylcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbkVycm9yOiB0cnVlLCBjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2V9KVxuXHRcdH1cblxuXHRcdGlmIChzcGxhc2h0YWcubGVuZ3RoIDwgMSkgeyBcblx0XHRcdGNvbnNvbGUubG9nKCdzZXR0aW5nIHZhbGlkYXRpb25lcnJvciB0byBmYWxzZScpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IGZhbHNlfSkgXG5cdFx0fVxuXHR9XG5cblx0Zm9yY2VMb3dlcihzcGxhc2h0YWcpIHtcblx0XHRyZXR1cm4gc3BsYXNodGFnLnRvTG93ZXJDYXNlKClcblx0fVxuXG5cdGNoZWNrSWZUYWdBdmFpbGFibGUoc3BsYXNodGFnKSB7XG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaGV4YS1zcGxhc2guY2xvdWRmdW5jdGlvbnMubmV0L3NwbGFzaHRhZ0F2YWlsYWJsZT9zcGxhc2h0YWc9YFxuXHRcdHRoaXMuc2V0U3RhdGUoe2NoZWNraW5nQXZhaWxhYmlsaXR5OiB0cnVlfSlcblx0XHRheGlvcy5nZXQoYCR7dXJsfSR7c3BsYXNodGFnfWApXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGFnQXZhaWxhYmxlJywgcmVzdWx0LmRhdGEpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RhZ0F2YWlsYWJsZTogcmVzdWx0LmRhdGEsIGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZX0pXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NoZWNraW5nQXZhaWxhYmlsaXR5JywgZXJyb3IpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RhZ0F2YWlsYWJsZTogdHJ1ZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHk6IGZhbHNlfSlcblx0XHRcdH0pXG5cblx0fVxuXG5cdHZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykge1xuXHQgaWYgKC9eW2EtejAtOV8tXXszLDE1fSQvLnRlc3Qoc3BsYXNodGFnKSkge1xuXHQgICAgcmV0dXJuIHRydWVcblx0ICB9XG5cdCAgICByZXR1cm4gZmFsc2Vcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c3VibWl0dGVkLCB2YWxpZGF0aW9uRXJyb3IsIHRhZ0F2YWlsYWJsZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHl9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Y29uc3QgYnV0dG9uQ29udGVudCA9ICgpID0+IHtcblx0XHRcdGlmIChjaGVja2luZ0F2YWlsYWJpbGl0eSkge1xuXHRcdFx0XHR2YXIgaW5Ccm93c2VyPSh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRpZiAoaW5Ccm93c2VyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxMb2FkaW5nQ2lyY2xlIC8+XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG5cdFx0XHRcdHJldHVybiAnQ2hlY2sgc3BsYXNodGFnJ1xuXHRcdFx0fSBlbHNlIGlmICghdGFnQXZhaWxhYmxlKSB7XG5cdFx0XHRcdHJldHVybiAnQWxyZWFkeSB0YWtlbiAnXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gJ0NsYWltIHNwbGFzaHRhZydcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBidXR0b25EaXNhYmxlZCA9ICgpID0+IHtcblx0XHRcdGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRpb25lcnJvcicsIHZhbGlkYXRpb25FcnJvcilcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWdBdmFpbGFibGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YWdBdmFpbGFibGUxJywgdGhpcy5zdGF0ZS50YWdBdmFpbGFibGUpXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdlbHNlJyApXG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BsYXNodGFnYmFyXCI+XG5cdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zcGxhc2h0YWd9XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2hvb3NlIHlvdXIgc3BsYXNodGFnXCI+PC9pbnB1dD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b24gXG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e2J1dHRvbkRpc2FibGVkKCl9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdHtidXR0b25Db250ZW50KCl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcblxuXHRcdFx0XHRcdC53cmFwIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5wdXQge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIyMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMThweCAyMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7dmFsaWRhdGlvbkVycm9yID8gJyNmZjMzNjYnIDogY29sb3JzLmRhcmt9O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IHJnYmEoNjMsNjMsNjMsMC4wOCkgMCA2cHggMzRweCAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlucHV0OjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcnMuZ3JleX07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNwbGFzaHRhZ2JhciB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mYWRlLW91dCB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuY29uc3QgSGVybyA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8aW1nIHNyYz1cIi4vc3RhdGljL2FwcF9JY29uLnBuZ1wiLz5cblx0XHQ8aDE+Q29taW5nIE1hcmNoIDIwMTguPC9oMT5cblx0XHQ8aDI+Q2hhbmdpbmcgYml0Y29pbiBmb3JldmVyLjwvaDI+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdH1cblx0XHRcdGgxIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGNvbG9yOiAke2NvbG9ycy5ncmV5fTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMzBweDtcblx0XHRcdH1cblxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pIl19 */\n/*@ sourceURL=pages/index.js */',
					dynamic: [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]
				})
			);
		}
	}]);

	return SplashTagBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var Hero = function Hero() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-3153946732',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 177
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: './static/app_Icon.png', className: 'jsx-3153946732',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 178
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'h1',
			{
				className: 'jsx-3153946732',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			},
			'Coming March 2018.'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'h2',
			{
				className: 'jsx-3153946732',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			},
			'Changing bitcoin forever.'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '3153946732',
			css: 'div.jsx-3153946732{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:100px;}img.jsx-3153946732{width:120px;}h1.jsx-3153946732{margin-bottom:0px;}h2.jsx-3153946732{font-weight:400;color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';margin:0 0 30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFMYyxBQUdrQixBQVFELEFBR00sQUFJRixZQU5qQixJQU9vQyxFQUpwQyxpQ0FLaUIsZ0JBQ2pCLE9BakJ3QixtR0FDRCw4RUFDSCw2RkFDRixpQkFDbEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkxheW91dCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBMb2FkaW5nQ2lyY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZ0NpcmNsZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxIZXJvLz5cblx0PC9MYXlvdXQ+XG4pXG5cblx0XHQvLyA8U3BsYXNoVGFnQmFyIC8+XG5cbmNsYXNzIFNwbGFzaFRhZ0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c3VibWl0dGVkOiBmYWxzZSxcblx0XHRcdHNwbGFzaHRhZzogJycsXG5cdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0dGFnQXZhaWxhYmxlOiB0cnVlLFxuXHRcdH1cblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcylcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChldmVudCkge1xuXHRcdGNvbnN0IHNwbGFzaHRhZyA9IHRoaXMuc3RhdGUuc3BsYXNodGFnXG5cdFx0aWYgKHRoaXMudmFsaWRhdGVTcGxhc2h0YWcoc3BsYXNodGFnKSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN1Ym1pdHRlZDogdHJ1ZSwgXG5cdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogZmFsc2UsXG5cdFx0XHRcdGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZSxcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogdHJ1ZX0pXG5cdFx0fVxuXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcblx0XHRjb25zdCBzcGxhc2h0YWcgPSB0aGlzLmZvcmNlTG93ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKVxuXHRcdHRoaXMuc2V0U3RhdGUoe3NwbGFzaHRhZzogc3BsYXNodGFnfSlcblx0XHRjb25zb2xlLmxvZyhzcGxhc2h0YWcubGVuZ3RoKVxuXHRcdGlmICh0aGlzLnZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogZmFsc2V9KVxuXHQgIFx0dGhpcy5jaGVja0lmVGFnQXZhaWxhYmxlKHNwbGFzaHRhZylcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbkVycm9yOiB0cnVlLCBjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2V9KVxuXHRcdH1cblxuXHRcdGlmIChzcGxhc2h0YWcubGVuZ3RoIDwgMSkgeyBcblx0XHRcdGNvbnNvbGUubG9nKCdzZXR0aW5nIHZhbGlkYXRpb25lcnJvciB0byBmYWxzZScpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IGZhbHNlfSkgXG5cdFx0fVxuXHR9XG5cblx0Zm9yY2VMb3dlcihzcGxhc2h0YWcpIHtcblx0XHRyZXR1cm4gc3BsYXNodGFnLnRvTG93ZXJDYXNlKClcblx0fVxuXG5cdGNoZWNrSWZUYWdBdmFpbGFibGUoc3BsYXNodGFnKSB7XG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaGV4YS1zcGxhc2guY2xvdWRmdW5jdGlvbnMubmV0L3NwbGFzaHRhZ0F2YWlsYWJsZT9zcGxhc2h0YWc9YFxuXHRcdHRoaXMuc2V0U3RhdGUoe2NoZWNraW5nQXZhaWxhYmlsaXR5OiB0cnVlfSlcblx0XHRheGlvcy5nZXQoYCR7dXJsfSR7c3BsYXNodGFnfWApXG5cdFx0XHQudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGFnQXZhaWxhYmxlJywgcmVzdWx0LmRhdGEpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RhZ0F2YWlsYWJsZTogcmVzdWx0LmRhdGEsIGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZX0pXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2NoZWNraW5nQXZhaWxhYmlsaXR5JywgZXJyb3IpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3RhZ0F2YWlsYWJsZTogdHJ1ZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHk6IGZhbHNlfSlcblx0XHRcdH0pXG5cblx0fVxuXG5cdHZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykge1xuXHQgaWYgKC9eW2EtejAtOV8tXXszLDE1fSQvLnRlc3Qoc3BsYXNodGFnKSkge1xuXHQgICAgcmV0dXJuIHRydWVcblx0ICB9XG5cdCAgICByZXR1cm4gZmFsc2Vcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7c3VibWl0dGVkLCB2YWxpZGF0aW9uRXJyb3IsIHRhZ0F2YWlsYWJsZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHl9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Y29uc3QgYnV0dG9uQ29udGVudCA9ICgpID0+IHtcblx0XHRcdGlmIChjaGVja2luZ0F2YWlsYWJpbGl0eSkge1xuXHRcdFx0XHR2YXIgaW5Ccm93c2VyPSh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiKVxuXHRcdFx0XHRpZiAoaW5Ccm93c2VyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxMb2FkaW5nQ2lyY2xlIC8+XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodmFsaWRhdGlvbkVycm9yKSB7XG5cdFx0XHRcdHJldHVybiAnQ2hlY2sgc3BsYXNodGFnJ1xuXHRcdFx0fSBlbHNlIGlmICghdGFnQXZhaWxhYmxlKSB7XG5cdFx0XHRcdHJldHVybiAnQWxyZWFkeSB0YWtlbiAnXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gJ0NsYWltIHNwbGFzaHRhZydcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBidXR0b25EaXNhYmxlZCA9ICgpID0+IHtcblx0XHRcdGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3ZhbGlkYXRpb25lcnJvcicsIHZhbGlkYXRpb25FcnJvcilcblx0XHRcdFx0cmV0dXJuIHRydWVcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50YWdBdmFpbGFibGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0YWdBdmFpbGFibGUxJywgdGhpcy5zdGF0ZS50YWdBdmFpbGFibGUpXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdlbHNlJyApXG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3BsYXNodGFnYmFyXCI+XG5cdFx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zcGxhc2h0YWd9XG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ2hvb3NlIHlvdXIgc3BsYXNodGFnXCI+PC9pbnB1dD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxCdXR0b24gXG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e2J1dHRvbkRpc2FibGVkKCl9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdHtidXR0b25Db250ZW50KCl9XG5cdFx0XHRcdDwvQnV0dG9uPlxuXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcblxuXHRcdFx0XHRcdC53cmFwIHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aW5wdXQge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDIyMHB4O1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMThweCAyMHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7dmFsaWRhdGlvbkVycm9yID8gJyNmZjMzNjYnIDogY29sb3JzLmRhcmt9O1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdGJveC1zaGFkb3c6IHJnYmEoNjMsNjMsNjMsMC4wOCkgMCA2cHggMzRweCAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlucHV0OjpwbGFjZWhvbGRlciB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHtjb2xvcnMuZ3JleX07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0OmZvY3VzIHtcblx0XHRcdFx0XHRcdG91dGxpbmU6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LnNwbGFzaHRhZ2JhciB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5mYWRlLW91dCB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwO1xuXHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5cblxuY29uc3QgSGVybyA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8aW1nIHNyYz1cIi4vc3RhdGljL2FwcF9JY29uLnBuZ1wiLz5cblx0XHQ8aDE+Q29taW5nIE1hcmNoIDIwMTguPC9oMT5cblx0XHQ8aDI+Q2hhbmdpbmcgYml0Y29pbiBmb3JldmVyLjwvaDI+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDogMTAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdGltZyB7XG5cdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdH1cblx0XHRcdGgxIHtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHRoMiB7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGNvbG9yOiAke2NvbG9ycy5ncmV5fTtcblx0XHRcdFx0bWFyZ2luOiAwIDAgMzBweDtcblx0XHRcdH1cblxuXHRcdGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pIl19 */\n/*@ sourceURL=pages/index.js */'
		})
	);
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash.debounce":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bodymovin":
/***/ (function(module, exports) {

module.exports = require("react-bodymovin");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map