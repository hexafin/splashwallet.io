module.exports =

        __NEXT_REGISTER_PAGE('/', function() {
          var comp = 
      webpackJsonp([4],{

/***/ "./animations/loadingCircle2.json":
/***/ (function(module, exports) {

module.exports = {"v":"5.1.1","fr":30,"ip":1,"op":39,"w":100,"h":100,"nm":"setting_loading 100px","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"loading","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2},"a":{"a":0,"k":[17,17,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.627,0],[0,0],[0,-6.627],[6.627,0],[0,6.627]],"o":[[0,0],[6.627,0],[0,6.627],[-6.627,0],[0,-6.627]],"v":[[0,-12],[0,-12],[12,0],[0,12],[-12,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[17,17],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.75],"y":[1]},"o":{"x":[0.25],"y":[0]},"n":["0p75_1_0p25_0"],"t":0,"s":[0],"e":[100]},{"t":23}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.75],"y":[1]},"o":{"x":[0.25],"y":[0]},"n":["0p75_1_0p25_0"],"t":17,"s":[0],"e":[100]},{"t":40}],"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[382]},{"t":40}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":260,"st":0,"bm":0}],"markers":[]}

/***/ }),

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_constants__ = __webpack_require__("./lib/constants.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Button.js';



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();



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

var _default = Button;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Button, 'Button', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Button.js');
	reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Button.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./components/Logo.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Header.js';



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();




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
			{ href: 'https://medium.com/splashwallet/', className: 'jsx-710397073',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 7
				}
			},
			'Learn more'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '710397073',
			css: 'div.jsx-710397073{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9jLEFBR2tCLDBFQUNpQixtSEFDaEIsY0FDSyw2RkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8TG9nbyAvPlxuXHRcdDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vc3BsYXNod2FsbGV0L1wiPkxlYXJuIG1vcmU8L2E+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0ZGl2IHtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblx0XHRcdGB9XG5cdFx0PC9zdHlsZT5cblx0PC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
		})
	);
};

var _default = Header;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Header, 'Header', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Header.js');
	reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Header.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/HeaderTags.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/HeaderTags.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var _default = function _default() {
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
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "icon", type: "image/png", href: "./static/splash-favicon.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/HeaderTags.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Icons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoSmallColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Icons.js";


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(LogoSmallColor, "LogoSmallColor", "/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Icons.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/LoadingCircle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bodymovin__ = __webpack_require__("./node_modules/react-bodymovin/lib/ReactBodymovin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bodymovin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bodymovin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json__ = __webpack_require__("./animations/loadingCircle2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__animations_loadingCircle2_json__);
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/LoadingCircle.js';



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




var _default = function _default() {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/LoadingCircle.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Icons__ = __webpack_require__("./components/Icons.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Logo.js';



(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();



var _default = function _default() {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/Logo.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MainLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeaderTags__ = __webpack_require__("./components/HeaderTags.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_constants__ = __webpack_require__("./lib/constants.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/MainLayout.js';


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();






var _default = function _default(_ref) {
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
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/components/MainLayout.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

var colors = {
	dark: '#333',
	grey: '#BFBFBF',
	darkGrey: '#BBBBBB',
	primary: '#4D00FF',
	primaryHover: '#5D3EFF'
};
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(colors, 'colors', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/lib/constants.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var settle = __webpack_require__("./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__("./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__("./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__("./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__("./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__("./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__("./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__("./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__("./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__("./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__("./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__("./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__("./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__("./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__("./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__("./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__("./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/promise.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/set.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/set.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/asyncToGenerator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/regenerator/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/bodymovin/build/player/bodymovin.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e(t)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=e(t):t.bodymovin=e(t)}(window||{},function(window){function ProjectInterface(){return{}}function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function roundTo2Decimals(t){return Math.round(1e4*t)/1e4}function roundTo3Decimals(t){return Math.round(100*t)/100}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function styleUnselectableDiv(t){t.style.userSelect="none",t.style.MozUserSelect="none",t.style.webkitUserSelect="none",t.style.oUserSelect="none"}function BMEnterFrameEvent(t,e,s,r){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=0>r?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=0>e?-1:1}function BMCompleteLoopEvent(t,e,s,r){this.type=t,this.currentLoop=e,this.totalLoops=s,this.direction=0>r?-1:1}function BMSegmentStartEvent(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function BMDestroyEvent(t,e){this.type=t,this.target=e}function _addEventListener(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)}function _removeEventListener(t,e){if(e){if(this._cbs[t]){for(var s=0,r=this._cbs[t].length;r>s;)this._cbs[t][s]===e&&(this._cbs[t].splice(s,1),s-=1,r-=1),s+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}function _triggerEvent(t,e){if(this._cbs[t])for(var s=this._cbs[t].length,r=0;s>r;r++)this._cbs[t][r](e)}function randomString(t,e){void 0===e&&(e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var s,r="";for(s=t;s>0;--s)r+=e[Math.round(Math.random()*(e.length-1))];return r}function HSVtoRGB(t,e,s){var r,i,a,n,o,h,l,p;switch(1===arguments.length&&(e=t.s,s=t.v,t=t.h),n=Math.floor(6*t),o=6*t-n,h=s*(1-e),l=s*(1-o*e),p=s*(1-(1-o)*e),n%6){case 0:r=s,i=p,a=h;break;case 1:r=l,i=s,a=h;break;case 2:r=h,i=s,a=p;break;case 3:r=h,i=l,a=s;break;case 4:r=p,i=h,a=s;break;case 5:r=s,i=h,a=l}return[r,i,a]}function RGBtoHSV(t,e,s){1===arguments.length&&(e=t.g,s=t.b,t=t.r);var r,i=Math.max(t,e,s),a=Math.min(t,e,s),n=i-a,o=0===i?0:n/i,h=i/255;switch(i){case a:r=0;break;case t:r=e-s+n*(s>e?6:0),r/=6*n;break;case e:r=s-t+2*n,r/=6*n;break;case s:r=t-e+4*n,r/=6*n}return[r,o,h]}function addSaturationToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),HSVtoRGB(s[0],s[1],s[2])}function addBrightnessToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),HSVtoRGB(s[0],s[1],s[2])}function addHueToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),HSVtoRGB(s[0],s[1],s[2])}function componentToHex(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function fillToRgba(t,e){if(!cachedColors[t]){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);cachedColors[t]=parseInt(s[1],16)+","+parseInt(s[2],16)+","+parseInt(s[3],16)}return"rgba("+cachedColors[t]+","+e+")"}function RenderedFrame(t,e){this.tr=t,this.o=e}function iterateDynamicProperties(t){var e,s=this.dynamicProperties;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t)}function reversePath(t){var e,s,r=[],i=[],a=[],n={},o=0;t.c&&(r[0]=t.o[0],i[0]=t.i[0],a[0]=t.v[0],o=1),s=t.i.length;var h=s-1;for(e=o;s>e;e+=1)r.push(t.o[h]),i.push(t.i[h]),a.push(t.v[h]),h-=1;return n.i=r,n.o=i,n.v=a,n}function Matrix(){}function createElement(t,e,s){if(!e){var r=Object.create(t.prototype,s),i={};return r&&"[object Function]"===i.toString.call(r.init)&&r.init(),r}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype._parent=t.prototype}function extendPrototype(t,e){for(var s in t.prototype)t.prototype.hasOwnProperty(s)&&(e.prototype[s]=t.prototype[s])}function bezFunction(){function t(t,e,s,r,i,a){var n=t*r+e*i+s*a-i*r-a*t-s*e;return n>-1e-4&&1e-4>n}function e(e,s,r,i,a,n,o,h,l){if(0===r&&0===n&&0===l)return t(e,s,i,a,o,h);var p,m=Math.sqrt(Math.pow(i-e,2)+Math.pow(a-s,2)+Math.pow(n-r,2)),f=Math.sqrt(Math.pow(o-e,2)+Math.pow(h-s,2)+Math.pow(l-r,2)),c=Math.sqrt(Math.pow(o-i,2)+Math.pow(h-a,2)+Math.pow(l-n,2));return p=m>f?m>c?m-f-c:c-f-m:c>f?c-f-m:f-m-c,p>-1e-4&&1e-4>p}function s(t){var e,s=t.c,r=t.v,i=t.o,a=t.i,n=t._length,o=[],h=0;for(e=0;n-1>e;e+=1)o[e]=l(r[e],r[e+1],i[e],a[e+1]),h+=o[e].addedLength;return s&&(o[e]=l(r[e],r[0],i[e],a[0]),h+=o[e].addedLength),{lengths:o,totalLength:h}}function r(t){this.segmentLength=0,this.points=new Array(t)}function i(t,e){this.partialLength=t,this.point=e}function a(t,e){var s=e.segments,r=s.length,i=bm_floor((r-1)*t),a=t*e.addedLength,n=0;if(a==s[i].l)return s[i].p;for(var o=s[i].l>a?-1:1,h=!0;h;)s[i].l<=a&&s[i+1].l>a?(n=(a-s[i].l)/(s[i+1].l-s[i].l),h=!1):i+=o,(0>i||i>=r-1)&&(h=!1);return s[i].p+(s[i+1].p-s[i].p)*n}function n(){this.pt1=new Array(2),this.pt2=new Array(2),this.pt3=new Array(2),this.pt4=new Array(2)}function o(t,e,s,r,i,n){var o=a(i,n),h=1-o,l=Math.round(1e3*(h*h*h*t[0]+(o*h*h+h*o*h+h*h*o)*s[0]+(o*o*h+h*o*o+o*h*o)*r[0]+o*o*o*e[0]))/1e3,p=Math.round(1e3*(h*h*h*t[1]+(o*h*h+h*o*h+h*h*o)*s[1]+(o*o*h+h*o*o+o*h*o)*r[1]+o*o*o*e[1]))/1e3;return[l,p]}function h(t,e,s,r,i,o,h){var l=new n;i=0>i?0:i>1?1:i;var p=a(i,h);o=o>1?1:o;var m,f=a(o,h),c=t.length,d=1-p,u=1-f;for(m=0;c>m;m+=1)l.pt1[m]=Math.round(1e3*(d*d*d*t[m]+(p*d*d+d*p*d+d*d*p)*s[m]+(p*p*d+d*p*p+p*d*p)*r[m]+p*p*p*e[m]))/1e3,l.pt3[m]=Math.round(1e3*(d*d*u*t[m]+(p*d*u+d*p*u+d*d*f)*s[m]+(p*p*u+d*p*f+p*d*f)*r[m]+p*p*f*e[m]))/1e3,l.pt4[m]=Math.round(1e3*(d*u*u*t[m]+(p*u*u+d*f*u+d*u*f)*s[m]+(p*f*u+d*f*f+p*u*f)*r[m]+p*f*f*e[m]))/1e3,l.pt2[m]=Math.round(1e3*(u*u*u*t[m]+(f*u*u+u*f*u+u*u*f)*s[m]+(f*f*u+u*f*f+f*u*f)*r[m]+f*f*f*e[m]))/1e3;return l}var l=(Math,function(){function t(t,e){this.l=t,this.p=e}return function(e,s,r,i){var a,n,o,h,l,p,m=defaultCurveSegments,f=0,c=[],d=[],u={addedLength:0,segments:[]};for(o=r.length,a=0;m>a;a+=1){for(l=a/(m-1),p=0,n=0;o>n;n+=1)h=bm_pow(1-l,3)*e[n]+3*bm_pow(1-l,2)*l*r[n]+3*(1-l)*bm_pow(l,2)*i[n]+bm_pow(l,3)*s[n],c[n]=h,null!==d[n]&&(p+=bm_pow(c[n]-d[n],2)),d[n]=c[n];p&&(p=bm_sqrt(p),f+=p),u.segments.push(new t(f,l))}return u.addedLength=f,u}}()),p=function(){var e={};return function(s){var a=s.s,n=s.e,o=s.to,h=s.ti,l=(a.join("_")+"_"+n.join("_")+"_"+o.join("_")+"_"+h.join("_")).replace(/\./g,"p");if(e[l])return void(s.bezierData=e[l]);var p,m,f,c,d,u,y,g=defaultCurveSegments,v=0,b=null;2===a.length&&(a[0]!=n[0]||a[1]!=n[1])&&t(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&t(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])&&(g=2);var E=new r(g);for(f=o.length,p=0;g>p;p+=1){for(y=new Array(f),d=p/(g-1),u=0,m=0;f>m;m+=1)c=bm_pow(1-d,3)*a[m]+3*bm_pow(1-d,2)*d*(a[m]+o[m])+3*(1-d)*bm_pow(d,2)*(n[m]+h[m])+bm_pow(d,3)*n[m],y[m]=c,null!==b&&(u+=bm_pow(y[m]-b[m],2));u=bm_sqrt(u),v+=u,E.points[p]=new i(u,y),b=y}E.segmentLength=v,s.bezierData=E,e[l]=E}}();return{getBezierLength:l,getSegmentsLength:s,getNewSegment:h,getPointInSegment:o,buildBezierData:p,pointOnLine2D:t,pointOnLine3D:e}}function dataFunctionManager(){function t(i,a,o){var h,l,p,m,f,c,d,u,y=i.length;for(m=0;y>m;m+=1)if(h=i[m],"ks"in h&&!h.completed){if(h.completed=!0,h.tt&&(i[m-1].td=h.tt),l=[],p=-1,h.hasMask){var g=h.masksProperties;for(c=g.length,f=0;c>f;f+=1)if(g[f].pt.k.i)r(g[f].pt.k);else for(u=g[f].pt.k.length,d=0;u>d;d+=1)g[f].pt.k[d].s&&r(g[f].pt.k[d].s[0]),g[f].pt.k[d].e&&r(g[f].pt.k[d].e[0])}0===h.ty?(h.layers=e(h.refId,a),t(h.layers,a,o)):4===h.ty?s(h.shapes):5==h.ty&&n(h,o)}}function e(t,e){for(var s=0,r=e.length;r>s;){if(e[s].id===t)return e[s].layers.__used?JSON.parse(JSON.stringify(e[s].layers)):(e[s].layers.__used=!0,e[s].layers);s+=1}}function s(t){var e,i,a,n=t.length,o=!1;for(e=n-1;e>=0;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)r(t[e].ks.k);else for(a=t[e].ks.k.length,i=0;a>i;i+=1)t[e].ks.k[i].s&&r(t[e].ks.k[i].s[0]),t[e].ks.k[i].e&&r(t[e].ks.k[i].e[0]);o=!0}else"gr"==t[e].ty&&s(t[e].it)}function r(t){var e,s=t.i.length;for(e=0;s>e;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function i(t,e){var s=e?e.split("."):[100,100,100];return t[0]>s[0]?!0:s[0]>t[0]?!1:t[1]>s[1]?!0:s[1]>t[1]?!1:t[2]>s[2]?!0:s[2]>t[2]?!1:void 0}function a(e,s){e.__complete||(l(e),o(e),h(e),p(e),t(e.layers,e.assets,s),e.__complete=!0)}function n(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var o=function(){function t(t){var e=t.t.d;t.t.d={k:[{s:e,t:0}]}}function e(e){var s,r=e.length;for(s=0;r>s;s+=1)5===e[s].ty&&t(e[s])}var s=[4,4,14];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),h=function(){var t=[4,7,99];return function(e){if(e.chars&&!i(t,e.v)){var s,a,n,o,h,l=e.chars.length;for(s=0;l>s;s+=1)if(e.chars[s].data&&e.chars[s].data.shapes)for(h=e.chars[s].data.shapes[0].it,n=h.length,a=0;n>a;a+=1)o=h[a].ks.k,o.__converted||(r(h[a].ks.k),o.__converted=!0)}}}(),l=function(){function t(e){var s,r,i,a=e.length;for(s=0;a>s;s+=1)if("gr"===e[s].ty)t(e[s].it);else if("fl"===e[s].ty||"st"===e[s].ty)if(e[s].c.k&&e[s].c.k[0].i)for(i=e[s].c.k.length,r=0;i>r;r+=1)e[s].c.k[r].s&&(e[s].c.k[r].s[0]/=255,e[s].c.k[r].s[1]/=255,e[s].c.k[r].s[2]/=255,e[s].c.k[r].s[3]/=255),e[s].c.k[r].e&&(e[s].c.k[r].e[0]/=255,e[s].c.k[r].e[1]/=255,e[s].c.k[r].e[2]/=255,e[s].c.k[r].e[3]/=255);else e[s].c.k[0]/=255,e[s].c.k[1]/=255,e[s].c.k[2]/=255,e[s].c.k[3]/=255}function e(e){var s,r=e.length;for(s=0;r>s;s+=1)4===e[s].ty&&t(e[s].shapes)}var s=[4,1,9];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),p=function(){function t(e){var s,r,i,a=e.length,n=!1;for(s=a-1;s>=0;s-=1)if("sh"==e[s].ty){if(e[s].ks.k.i)e[s].ks.k.c=e[s].closed;else for(i=e[s].ks.k.length,r=0;i>r;r+=1)e[s].ks.k[r].s&&(e[s].ks.k[r].s[0].c=e[s].closed),e[s].ks.k[r].e&&(e[s].ks.k[r].e[0].c=e[s].closed);n=!0}else"gr"==e[s].ty&&t(e[s].it)}function e(e){var s,r,i,a,n,o,h=e.length;for(r=0;h>r;r+=1){if(s=e[r],s.hasMask){var l=s.masksProperties;for(a=l.length,i=0;a>i;i+=1)if(l[i].pt.k.i)l[i].pt.k.c=l[i].cl;else for(o=l[i].pt.k.length,n=0;o>n;n+=1)l[i].pt.k[n].s&&(l[i].pt.k[n].s[0].c=l[i].cl),l[i].pt.k[n].e&&(l[i].pt.k[n].e[0].c=l[i].cl)}4===s.ty&&t(s.shapes)}}var s=[4,4,18];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),m={};return m.completeData=a,m}function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=Array.apply(null,{length:this._maxLength}),this.o=Array.apply(null,{length:this._maxLength}),this.i=Array.apply(null,{length:this._maxLength})}function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=Array.apply(null,{length:this._maxLength})}function TextAnimatorProperty(t,e,s){this.mdf=!1,this._firstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._dynamicProperties=[],this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=Array.apply(null,{length:this._textData.a.length}),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1}function LetterProps(t,e,s,r,i,a){this.o=t,this.sw=e,this.sc=s,this.fc=r,this.m=i,this.p=a,this.mdf={o:!0,sw:!!e,sc:!!s,fc:!!r,m:!0,p:!0}}function TextProperty(t,e,s){this._frameId=-99999,this.pv="",this.v="",this.kf=!1,this.firstFrame=!0,this.mdf=!0,this.data=e,this.elem=t,this.keysIndex=-1,this.currentData={ascent:0,boxWidth:[0,0],f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,__complete:!1},this.searchProperty()?s.push(this):this.getValue(!0)}function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:e&&e.hideOnTransparent===!1?!1:!0,viewBoxOnly:e&&e.viewBoxOnly||!1,className:e&&e.className||""},this.globalData.renderConfig=this.renderConfig,this.elements=[],this.pendingElements=[],this.destroyed=!1}function MaskElement(t,e,s){this.dynamicProperties=[],this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties,this.viewData=Array.apply(null,{length:this.masksProperties.length}),this.maskElement=null,this.firstFrame=!0;var r,i,a,n,o,h,l,p,m=this.globalData.defs,f=this.masksProperties.length,c=this.masksProperties,d=0,u=[],y=randomString(10),g="clipPath",v="clip-path";for(r=0;f>r;r++)if(("a"!==c[r].mode&&"n"!==c[r].mode||c[r].inv||100!==c[r].o.k)&&(g="mask",v="mask"),"s"!=c[r].mode&&"i"!=c[r].mode||0!=d?o=null:(o=document.createElementNS(svgNS,"rect"),o.setAttribute("fill","#ffffff"),o.setAttribute("width",this.element.comp.data.w),o.setAttribute("height",this.element.comp.data.h),u.push(o)),i=document.createElementNS(svgNS,"path"),"n"!=c[r].mode){if(d+=1,"s"==c[r].mode?i.setAttribute("fill","#000000"):i.setAttribute("fill","#ffffff"),i.setAttribute("clip-rule","nonzero"),0!==c[r].x.k){g="mask",v="mask",p=PropertyFactory.getProp(this.element,c[r].x,0,null,this.dynamicProperties);var b="fi_"+randomString(10);h=document.createElementNS(svgNS,"filter"),h.setAttribute("id",b),l=document.createElementNS(svgNS,"feMorphology"),l.setAttribute("operator","dilate"),l.setAttribute("in","SourceGraphic"),l.setAttribute("radius","0"),h.appendChild(l),m.appendChild(h),"s"==c[r].mode?i.setAttribute("stroke","#000000"):i.setAttribute("stroke","#ffffff")}else l=null,p=null;if(this.storedData[r]={elem:i,x:p,expan:l,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[r].mode){n=u.length;var E=document.createElementNS(svgNS,"g");for(a=0;n>a;a+=1)E.appendChild(u[a]);var P=document.createElementNS(svgNS,"mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+d),P.appendChild(i),m.appendChild(P),E.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(i);c[r].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[r]={elem:i,lastPath:"",op:PropertyFactory.getProp(this.element,c[r].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,c[r],3,this.dynamicProperties,null)},o&&(this.viewData[r].invRect=o),this.viewData[r].prop.k||this.drawPath(c[r],this.viewData[r].prop.v,this.viewData[r])}else this.viewData[r]={op:PropertyFactory.getProp(this.element,c[r].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,c[r],3,this.dynamicProperties,null),elem:i},m.appendChild(i);for(this.maskElement=document.createElementNS(svgNS,g),f=u.length,r=0;f>r;r+=1)this.maskElement.appendChild(u[r]);this.maskElement.setAttribute("id",y),d>0&&this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),m.appendChild(this.maskElement)}function BaseElement(){}function SVGBaseElement(t,e,s,r,i){this.globalData=s,this.comp=r,this.data=t,this.matteElement=null,this.transformedElement=null,this.isTransparent=!1,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this._sizeChanged=!1,this.init()}function IShapeElement(t,e,s,r,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,s,r,i)}function ITextElement(t,e,s,r){}function SVGTextElement(t,e,s,r,i){this.textSpans=[],this.renderType="svg",this._parent.constructor.call(this,t,e,s,r,i)}function SVGTintFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");if(s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s),s=document.createElementNS(svgNS,"feColorMatrix"),s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),s.setAttribute("result","f2"),t.appendChild(s),this.matrixFilter=s,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var r=document.createElementNS(svgNS,"feMerge");t.appendChild(r);var i;i=document.createElementNS(svgNS,"feMergeNode"),i.setAttribute("in","SourceGraphic"),r.appendChild(i),i=document.createElementNS(svgNS,"feMergeNode"),i.setAttribute("in","f2"),r.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(s),this.matrixFilter=s}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s);var r=document.createElementNS(svgNS,"feComponentTransfer");r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),this.matrixFilter=r;var i=document.createElementNS(svgNS,"feFuncR");i.setAttribute("type","table"),r.appendChild(i),this.feFuncR=i;var a=document.createElementNS(svgNS,"feFuncG");a.setAttribute("type","table"),r.appendChild(a),this.feFuncG=a;var n=document.createElementNS(svgNS,"feFuncB");n.setAttribute("type","table"),r.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var s=this.filterManager.effectElements,r=document.createElementNS(svgNS,"feComponentTransfer");(s[9].p.k||0!==s[9].p.v||s[10].p.k||1!==s[10].p.v||s[11].p.k||1!==s[11].p.v||s[12].p.k||0!==s[12].p.v||s[13].p.k||1!==s[13].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",r)),(s[16].p.k||0!==s[16].p.v||s[17].p.k||1!==s[17].p.v||s[18].p.k||1!==s[18].p.v||s[19].p.k||0!==s[19].p.v||s[20].p.k||1!==s[20].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",r)),(s[23].p.k||0!==s[23].p.v||s[24].p.k||1!==s[24].p.v||s[25].p.k||1!==s[25].p.v||s[26].p.k||0!==s[26].p.v||s[27].p.k||1!==s[27].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",r)),(s[30].p.k||0!==s[30].p.v||s[31].p.k||1!==s[31].p.v||s[32].p.k||1!==s[32].p.v||s[33].p.k||0!==s[33].p.v||s[34].p.k||1!==s[34].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",r)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),r=document.createElementNS(svgNS,"feComponentTransfer")),(s[2].p.k||0!==s[2].p.v||s[3].p.k||1!==s[3].p.v||s[4].p.k||1!==s[4].p.v||s[5].p.k||0!==s[5].p.v||s[6].p.k||1!==s[6].p.v)&&(r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),this.feFuncRComposed=this.createFeFunc("feFuncR",r),this.feFuncGComposed=this.createFeFunc("feFuncG",r),this.feFuncBComposed=this.createFeFunc("feFuncB",r))}function SVGDropShadowEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var s=document.createElementNS(svgNS,"feGaussianBlur");s.setAttribute("in","SourceAlpha"),s.setAttribute("result","drop_shadow_1"),s.setAttribute("stdDeviation","0"),this.feGaussianBlur=s,t.appendChild(s);var r=document.createElementNS(svgNS,"feOffset");r.setAttribute("dx","25"),r.setAttribute("dy","0"),r.setAttribute("in","drop_shadow_1"),r.setAttribute("result","drop_shadow_2"),this.feOffset=r,t.appendChild(r);var i=document.createElementNS(svgNS,"feFlood");i.setAttribute("flood-color","#00ff00"),i.setAttribute("flood-opacity","1"),i.setAttribute("result","drop_shadow_3"),this.feFlood=i,t.appendChild(i);var a=document.createElementNS(svgNS,"feComposite");a.setAttribute("in","drop_shadow_3"),a.setAttribute("in2","drop_shadow_2"),a.setAttribute("operator","in"),a.setAttribute("result","drop_shadow_4"),t.appendChild(a);var n=document.createElementNS(svgNS,"feMerge");t.appendChild(n);var o;o=document.createElementNS(svgNS,"feMergeNode"),n.appendChild(o),o=document.createElementNS(svgNS,"feMergeNode"),o.setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=n,this.originalNodeAdded=!1,n.appendChild(o)}function SVGMatte3Effect(t,e,s){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=s,s.matteElement=document.createElementNS(svgNS,"g"),s.matteElement.appendChild(s.layerElement),s.matteElement.appendChild(s.transformedElement),s.baseElement=s.matteElement}function SVGEffects(t){var e,s=t.data.ef.length,r=randomString(10),i=filtersFactory.createFilter(r),a=0;this.filters=[];var n;for(e=0;s>e;e+=1)20===t.data.ef[e].ty?(a+=1,n=new SVGTintFilter(i,t.effects.effectElements[e]),this.filters.push(n)):21===t.data.ef[e].ty?(a+=1,n=new SVGFillFilter(i,t.effects.effectElements[e]),this.filters.push(n)):22===t.data.ef[e].ty?(n=new SVGStrokeEffect(t,t.effects.effectElements[e]),this.filters.push(n)):23===t.data.ef[e].ty?(a+=1,n=new SVGTritoneFilter(i,t.effects.effectElements[e]),this.filters.push(n)):24===t.data.ef[e].ty?(a+=1,n=new SVGProLevelsFilter(i,t.effects.effectElements[e]),this.filters.push(n)):25===t.data.ef[e].ty?(a+=1,n=new SVGDropShadowEffect(i,t.effects.effectElements[e]),this.filters.push(n)):28===t.data.ef[e].ty&&(n=new SVGMatte3Effect(i,t.effects.effectElements[e],t),this.filters.push(n));a&&(t.globalData.defs.appendChild(i),t.layerElement.setAttribute("filter","url("+locationHref+"#"+r+")"))}function ICompElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?Array.apply(null,{length:this.layers.length}):[],this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),this.data.xt?(this.layerElement=document.createElementNS(svgNS,"g"),this.buildAllItems()):s.progressiveLoad||this.buildAllItems()}function IImageElement(t,e,s,r,i){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s,r,i)}function ISolidElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i)}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:e&&void 0!==e.clearCanvas?e.clearCanvas:!0,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",className:e&&e.className||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1};var s,r=15;for(s=0;r>s;s+=1)this.contextData.saved[s]=Array.apply(null,{length:16});this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={className:e&&e.className||""},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0}function CVBaseElement(t,e,s){this.globalData=s,this.data=t,this.comp=e,this.canvasContext=s.canvasContext,this.init()}function CVCompElement(t,e,s){this._parent.constructor.call(this,t,e,s);var r={};for(var i in s)s.hasOwnProperty(i)&&(r[i]=s[i]);r.renderer=this,r.compHeight=this.data.h,r.compWidth=this.data.w,this.renderConfig={clearCanvas:!0},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1},this.completeLayers=!1;var a,n=15;for(a=0;n>a;a+=1)this.contextData.saved[a]=Array.apply(null,{length:16});this.transformMat=new Matrix,this.parentGlobalData=this.globalData;var o=document.createElement("canvas");r.canvasContext=o.getContext("2d"),this.canvasContext=r.canvasContext,o.width=this.data.w,o.height=this.data.h,this.canvas=o,this.globalData=r,this.layers=t.layers,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),(this.data.xt||!s.progressiveLoad)&&this.buildAllItems()}function CVImageElement(t,e,s){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s),this.globalData.addPendingElement()}function CVMaskElement(t,e){this.data=t,this.element=e,this.dynamicProperties=[],this.masksProperties=this.data.masksProperties,this.viewData=Array.apply(null,{length:this.masksProperties.length});var s,r=this.masksProperties.length;for(s=0;r>s;s++)this.viewData[s]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[s],3,this.dynamicProperties,null)}function CVShapeElement(t,e,s){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,s)}function CVSolidElement(t,e,s){this._parent.constructor.call(this,t,e,s)}function CVTextElement(t,e,s){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this._parent.constructor.call(this,t,e,s)}function HBaseElement(t,e,s,r,i){this.globalData=s,this.comp=r,this.data=t,this.matteElement=null,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this.init()}function HSolidElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i)}function HCompElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),this.data.hasMask&&(this.supports3d=!1),this.data.xt&&(this.layerElement=document.createElement("div")),this.buildAllItems()}function HShapeElement(t,e,s,r,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,s,r,i),this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,s,r,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this._parent.constructor.call(this,t,e,s,r,i)}function HImageElement(t,e,s,r,i){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s,r,i)}function HCameraElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i);var a=PropertyFactory.getProp;if(this.pe=a(this,t.pe,0,0,this.dynamicProperties),t.ks.p.s?(this.px=a(this,t.ks.p.x,1,0,this.dynamicProperties),this.py=a(this,t.ks.p.y,1,0,this.dynamicProperties),this.pz=a(this,t.ks.p.z,1,0,this.dynamicProperties)):this.p=a(this,t.ks.p,1,0,this.dynamicProperties),t.ks.a&&(this.a=a(this,t.ks.a,1,0,this.dynamicProperties)),t.ks.or.k.length&&t.ks.or.k[0].to){var n,o=t.ks.or.k.length;for(n=0;o>n;n+=1)t.ks.or.k[n].to=null,t.ks.or.k[n].ti=null}this.or=a(this,t.ks.or,1,degToRads,this.dynamicProperties),this.or.sh=!0,this.rx=a(this,t.ks.rx,0,degToRads,this.dynamicProperties),this.ry=a(this,t.ks.ry,0,degToRads,this.dynamicProperties),this.rz=a(this,t.ks.rz,0,degToRads,this.dynamicProperties),this.mat=new Matrix}function SliderEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function AngleEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function ColorEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,1,0,s)}function PointEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,1,0,s)}function LayerIndexEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function MaskIndexEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function CheckboxEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function NoValueEffect(){this.p={}}function EffectsManager(t,e,s){var r=t.ef;this.effectElements=[];var i,a,n=r.length;for(i=0;n>i;i++)a=new GroupEffect(r[i],e,s),this.effectElements.push(a)}function GroupEffect(t,e,s){this.dynamicProperties=[],this.init(t,e,this.dynamicProperties),this.dynamicProperties.length&&s.push(this)}function setLocationHref(t){locationHref=t}function play(t){animationManager.play(t)}function pause(t){animationManager.pause(t)}function togglePause(t){animationManager.togglePause(t)}function setSpeed(t,e){animationManager.setSpeed(t,e)}function setDirection(t,e){animationManager.setDirection(t,e)}function stop(t){animationManager.stop(t)}function moveFrame(t){animationManager.moveFrame(t)}function searchAnimations(){standalone===!0?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function registerAnimation(t){return animationManager.registerAnimation(t)}function resize(){animationManager.resize()}function start(){animationManager.start()}function goToAndStop(t,e,s){animationManager.goToAndStop(t,e,s)}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return standalone===!0&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function destroy(t){return animationManager.destroy(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(defaultCurveSegments>=50?!1:!0)}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),s=0;s<e.length;s++){var r=e[s].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}}var svgNS="http://www.w3.org/2000/svg",locationHref="",subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};!function(){var t,e=Object.getOwnPropertyNames(Math),s=e.length;for(t=0;s>t;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){var e=typeof t;if("object"===e&&t.length){var s,r=Array.apply(null,{length:t.length}),i=t.length;for(s=0;i>s;s+=1)r[s]=Math.abs(t[s]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;roundValues(!1);var rgbToHex=function(){var t,e,s=[];for(t=0;256>t;t+=1)e=t.toString(16),s[t]=1==e.length?"0"+e:e;return function(t,e,r){return 0>t&&(t=0),0>e&&(e=0),0>r&&(r=0),"#"+s[t]+s[e]+s[r]}}(),fillColorToString=function(){var t=[];return function(e,s){return void 0!==s&&(e[3]=s),t[e[0]]||(t[e[0]]={}),t[e[0]][e[1]]||(t[e[0]][e[1]]={}),t[e[0]][e[1]][e[2]]||(t[e[0]][e[1]][e[2]]={}),
t[e[0]][e[1]][e[2]][e[3]]||(t[e[0]][e[1]][e[2]][e[3]]="rgba("+e.join(",")+")"),t[e[0]][e[1]][e[2]][e[3]]}}(),Matrix=function(){function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function s(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1)}function r(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1)}function i(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function a(t,e){return this._t(1,e,t,1,0,0)}function n(t,e){return this.shear(Math.tan(t),Math.tan(e))}function o(t,e){var s=Math.cos(e),r=Math.sin(e);return this._t(s,r,0,0,-r,s,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1)._t(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}function h(t,e,s){return s=isNaN(s)?1:s,1==t&&1==e&&1==s?this:this._t(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1)}function l(t,e,s,r,i,a,n,o,h,l,p,m,f,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=s,this.props[3]=r,this.props[4]=i,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,this.props[12]=f,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function p(t,e,s){return s=s||0,0!==t||0!==e||0!==s?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1):this}function m(t,e,s,r,i,a,n,o,h,l,p,m,f,c,d,u){if(1===t&&0===e&&0===s&&0===r&&0===i&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return(0!==f||0!==c||0!==d)&&(this.props[12]=this.props[12]*t+this.props[13]*i+this.props[14]*h+this.props[15]*f,this.props[13]=this.props[12]*e+this.props[13]*a+this.props[14]*l+this.props[15]*c,this.props[14]=this.props[12]*s+this.props[13]*n+this.props[14]*p+this.props[15]*d,this.props[15]=this.props[12]*r+this.props[13]*o+this.props[14]*m+this.props[15]*u),this._identityCalculated=!1,this;var y=this.props[0],g=this.props[1],v=this.props[2],b=this.props[3],E=this.props[4],P=this.props[5],x=this.props[6],S=this.props[7],C=this.props[8],k=this.props[9],A=this.props[10],M=this.props[11],D=this.props[12],T=this.props[13],w=this.props[14],_=this.props[15];return this.props[0]=y*t+g*i+v*h+b*f,this.props[1]=y*e+g*a+v*l+b*c,this.props[2]=y*s+g*n+v*p+b*d,this.props[3]=y*r+g*o+v*m+b*u,this.props[4]=E*t+P*i+x*h+S*f,this.props[5]=E*e+P*a+x*l+S*c,this.props[6]=E*s+P*n+x*p+S*d,this.props[7]=E*r+P*o+x*m+S*u,this.props[8]=C*t+k*i+A*h+M*f,this.props[9]=C*e+k*a+A*l+M*c,this.props[10]=C*s+k*n+A*p+M*d,this.props[11]=C*r+k*o+A*m+M*u,this.props[12]=D*t+T*i+w*h+_*f,this.props[13]=D*e+T*a+w*l+_*c,this.props[14]=D*s+T*n+w*p+_*d,this.props[15]=D*r+T*o+w*m+_*u,this._identityCalculated=!1,this}function f(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function c(t){var e;for(e=0;16>e;e+=1)t.props[e]=this.props[e]}function d(t){var e;for(e=0;16>e;e+=1)this.props[e]=t[e]}function u(t,e,s){return{x:t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}}function y(t,e,s){return t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12]}function g(t,e,s){return t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13]}function v(t,e,s){return t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}function b(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],s=this.props[5]/e,r=-this.props[1]/e,i=-this.props[4]/e,a=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*s+t[1]*i+n,t[0]*r+t[1]*a+o,0]}function E(t){var e,s=t.length,r=[];for(e=0;s>e;e+=1)r[e]=b(t[e]);return r}function P(t,e,s,r){if(r&&2===r){var i=point_pool.newPoint();return i[0]=t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],i[1]=t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],i}return[t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]]}function x(t,e){return this.isIdentity()?t+","+e:bm_rnd(t*this.props[0]+e*this.props[4]+this.props[12])+","+bm_rnd(t*this.props[1]+e*this.props[5]+this.props[13])}function S(){return[this.props[0],this.props[1],this.props[2],this.props[3],this.props[4],this.props[5],this.props[6],this.props[7],this.props[8],this.props[9],this.props[10],this.props[11],this.props[12],this.props[13],this.props[14],this.props[15]]}function C(){return isSafari?"matrix3d("+roundTo2Decimals(this.props[0])+","+roundTo2Decimals(this.props[1])+","+roundTo2Decimals(this.props[2])+","+roundTo2Decimals(this.props[3])+","+roundTo2Decimals(this.props[4])+","+roundTo2Decimals(this.props[5])+","+roundTo2Decimals(this.props[6])+","+roundTo2Decimals(this.props[7])+","+roundTo2Decimals(this.props[8])+","+roundTo2Decimals(this.props[9])+","+roundTo2Decimals(this.props[10])+","+roundTo2Decimals(this.props[11])+","+roundTo2Decimals(this.props[12])+","+roundTo2Decimals(this.props[13])+","+roundTo2Decimals(this.props[14])+","+roundTo2Decimals(this.props[15])+")":(this.cssParts[1]=this.props.join(","),this.cssParts.join(""))}function k(){return"matrix("+roundTo2Decimals(this.props[0])+","+roundTo2Decimals(this.props[1])+","+roundTo2Decimals(this.props[4])+","+roundTo2Decimals(this.props[5])+","+roundTo2Decimals(this.props[12])+","+roundTo2Decimals(this.props[13])+")"}function A(){return""+this.toArray()}return function(){this.reset=t,this.rotate=e,this.rotateX=s,this.rotateY=r,this.rotateZ=i,this.skew=n,this.skewFromAxis=o,this.shear=a,this.scale=h,this.setTransform=l,this.translate=p,this.transform=m,this.applyToPoint=u,this.applyToX=y,this.applyToY=g,this.applyToZ=v,this.applyToPointArray=P,this.applyToPointStringified=x,this.toArray=S,this.toCSS=C,this.to2dCSS=k,this.toString=A,this.clone=c,this.cloneFromProps=d,this.inversePoints=E,this.inversePoint=b,this._t=this.transform,this.isIdentity=f,this._identity=!0,this._identityCalculated=!1,this.props=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.cssParts=["matrix3d(","",")"]}}();!function(t,e){function s(s,l,p){var c=[];l=1==l?{entropy:!0}:l||{};var v=n(a(l.entropy?[s,h(t)]:null==s?o():s,3),c),b=new r(c),E=function(){for(var t=b.g(f),e=u,s=0;y>t;)t=(t+s)*m,e*=m,s=b.g(1);for(;t>=g;)t/=2,e/=2,s>>>=1;return(t+s)/e};return E.int32=function(){return 0|b.g(4)},E.quick=function(){return b.g(4)/4294967296},E["double"]=E,n(h(b.S),t),(l.pass||p||function(t,s,r,a){return a&&(a.S&&i(a,b),t.state=function(){return i(b,{})}),r?(e[d]=t,s):t})(E,v,"global"in l?l.global:this==e,l.state)}function r(t){var e,s=t.length,r=this,i=0,a=r.i=r.j=0,n=r.S=[];for(s||(t=[s++]);m>i;)n[i]=i++;for(i=0;m>i;i++)n[i]=n[a=v&a+t[i%s]+(e=n[i])],n[a]=e;(r.g=function(t){for(var e,s=0,i=r.i,a=r.j,n=r.S;t--;)e=n[i=v&i+1],s=s*m+n[v&(n[i]=n[a=v&a+e])+(n[a]=e)];return r.i=i,r.j=a,s})(m)}function i(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function a(t,e){var s,r=[],i=typeof t;if(e&&"object"==i)for(s in t)try{r.push(a(t[s],e-1))}catch(n){}return r.length?r:"string"==i?t:t+"\x00"}function n(t,e){for(var s,r=t+"",i=0;i<r.length;)e[v&i]=v&(s^=19*e[v&i])+r.charCodeAt(i++);return h(e)}function o(){try{if(l)return h(l.randomBytes(m));var e=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(e),h(e)}catch(s){var r=p.navigator,i=r&&r.plugins;return[+new Date,p,i,p.screen,h(t)]}}function h(t){return String.fromCharCode.apply(0,t)}var l,p=this,m=256,f=6,c=52,d="random",u=e.pow(m,f),y=e.pow(2,c),g=2*y,v=m-1;e["seed"+d]=s,n(e.random(),t)}([],BMMath);var BezierFactory=function(){function t(t,e,s,r,i){var a=i||("bez_"+t+"_"+e+"_"+s+"_"+r).replace(/\./g,"p");if(p[a])return p[a];var n=new h([t,e,s,r]);return p[a]=n,n}function e(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function r(t){return 3*t}function i(t,i,a){return((e(i,a)*t+s(i,a))*t+r(i))*t}function a(t,i,a){return 3*e(i,a)*t*t+2*s(i,a)*t+r(i)}function n(t,e,s,r,a){var n,o,h=0;do o=e+(s-e)/2,n=i(o,r,a)-t,n>0?s=o:e=o;while(Math.abs(n)>c&&++h<d);return o}function o(t,e,s,r){for(var n=0;m>n;++n){var o=a(e,s,r);if(0===o)return e;var h=i(e,s,r)-t;e-=h/o}return e}function h(t){this._p=t,this._mSampleValues=g?new Float32Array(u):new Array(u),this._precomputed=!1,this.get=this.get.bind(this)}var l={};l.getBezierEasing=t;var p={},m=4,f=.001,c=1e-7,d=10,u=11,y=1/(u-1),g="function"==typeof Float32Array;return h.prototype={get:function(t){var e=this._p[0],s=this._p[1],r=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),e===s&&r===a?t:0===t?0:1===t?1:i(this._getTForX(t),s,a)},_precompute:function(){var t=this._p[0],e=this._p[1],s=this._p[2],r=this._p[3];this._precomputed=!0,(t!==e||s!==r)&&this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],s=0;u>s;++s)this._mSampleValues[s]=i(s*y,t,e)},_getTForX:function(t){for(var e=this._p[0],s=this._p[2],r=this._mSampleValues,i=0,h=1,l=u-1;h!==l&&r[h]<=t;++h)i+=y;--h;var p=(t-r[h])/(r[h+1]-r[h]),m=i+p*y,c=a(m,e,s);return c>=f?o(t,m,e,s):0===c?m:n(t,i,i+y,e,s)}},l}();!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[e[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[s]+"CancelAnimationFrame"]||window[e[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,s){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),a=setTimeout(function(){e(r+i)},i);return t=r+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction(),dataManager=dataFunctionManager(),FontManager=function(){function t(t,e){var s=document.createElement("span");s.style.fontFamily=e;var r=document.createElement("span");r.innerHTML="giItT1WQy@!-/#",s.style.position="absolute",s.style.left="-10000px",s.style.top="-10000px",s.style.fontSize="300px",s.style.fontVariant="normal",s.style.fontStyle="normal",s.style.fontWeight="normal",s.style.letterSpacing="0",s.appendChild(r),document.body.appendChild(s);var i=r.offsetWidth;return r.style.fontFamily=t+", "+e,{node:r,w:i,parent:s}}function e(){var t,s,r,i=this.fonts.length,a=i;for(t=0;i>t;t+=1)if(this.fonts[t].loaded)a-=1;else if("t"===this.fonts[t].fOrigin||2===this.fonts[t].origin){if(window.Typekit&&window.Typekit.load&&0===this.typekitLoaded){this.typekitLoaded=1;try{window.Typekit.load({async:!0,active:function(){this.typekitLoaded=2}.bind(this)})}catch(n){}}2===this.typekitLoaded&&(this.fonts[t].loaded=!0)}else"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(s=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,s.offsetWidth!==r?(a-=1,this.fonts[t].loaded=!0):(s=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,s.offsetWidth!==r&&(a-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==a&&Date.now()-this.initTime<h?setTimeout(e.bind(this),20):setTimeout(function(){this.loaded=!0}.bind(this),0)}function s(t,e){var s=document.createElementNS(svgNS,"text");s.style.fontSize="100px",s.style.fontFamily=e.fFamily,s.textContent="1",e.fClass?(s.style.fontFamily="inherit",s.className=e.fClass):s.style.fontFamily=e.fFamily,t.appendChild(s);var r=document.createElement("canvas").getContext("2d");return r.font="100px "+e.fFamily,r}function r(r,i){if(!r)return void(this.loaded=!0);if(this.chars)return this.loaded=!0,void(this.fonts=r.list);var a,n=r.list,o=n.length;for(a=0;o>a;a+=1){if(n[a].loaded=!1,n[a].monoCase=t(n[a].fFamily,"monospace"),n[a].sansCase=t(n[a].fFamily,"sans-serif"),n[a].fPath){if("p"===n[a].fOrigin||3===n[a].origin){var h=document.createElement("style");h.type="text/css",h.innerHTML="@font-face {font-family: "+n[a].fFamily+"; font-style: normal; src: url('"+n[a].fPath+"');}",i.appendChild(h)}else if("g"===n[a].fOrigin||1===n[a].origin){var l=document.createElement("link");l.type="text/css",l.rel="stylesheet",l.href=n[a].fPath,i.appendChild(l)}else if("t"===n[a].fOrigin||2===n[a].origin){var p=document.createElement("script");p.setAttribute("src",n[a].fPath),i.appendChild(p)}}else n[a].loaded=!0;n[a].helper=s(i,n[a]),this.fonts.push(n[a])}e.bind(this)()}function i(t){if(t){this.chars||(this.chars=[]);var e,s,r,i=t.length,a=this.chars.length;for(e=0;i>e;e+=1){for(s=0,r=!1;a>s;)this.chars[s].style===t[e].style&&this.chars[s].fFamily===t[e].fFamily&&this.chars[s].ch===t[e].ch&&(r=!0),s+=1;r||(this.chars.push(t[e]),a+=1)}}}function a(t,e,s){for(var r=0,i=this.chars.length;i>r;){if(this.chars[r].ch===t&&this.chars[r].style===e&&this.chars[r].fFamily===s)return this.chars[r];r+=1}}function n(t,e,s){var r=this.getFontByName(e),i=r.helper;return i.measureText(t).width*s/100}function o(t){for(var e=0,s=this.fonts.length;s>e;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return"sans-serif"}var h=5e3,l=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.loaded=!1,this.initTime=Date.now()};return l.prototype.addChars=i,l.prototype.addFonts=r,l.prototype.getCharData=a,l.prototype.getFontByName=o,l.prototype.measureText=n,l}(),PropertyFactory=function(){function t(t,e,s,r){var i,a=this.offsetTime;s.constructor===Array&&(i=Array.apply(null,{length:s.length}));for(var n,o,h=e,l=this.keyframes.length-1,p=!0;p;){if(n=this.keyframes[h],o=this.keyframes[h+1],h==l-1&&t>=o.t-a){n.h&&(n=o),e=0;break}if(o.t-a>t){e=h;break}l-1>h?h+=1:(e=0,p=!1)}var m,f,c,d,u,y;if(n.to){n.bezierData||bez.buildBezierData(n);var g=n.bezierData;if(t>=o.t-a||t<n.t-a){var v=t>=o.t-a?g.points.length-1:0;for(f=g.points[v].point.length,m=0;f>m;m+=1)i[m]=g.points[v].point[m];r._lastBezierData=null}else{n.__fnct?y=n.__fnct:(y=BezierFactory.getBezierEasing(n.o.x,n.o.y,n.i.x,n.i.y,n.n).get,n.__fnct=y),c=y((t-(n.t-a))/(o.t-a-(n.t-a)));var b,E=g.segmentLength*c,P=r.lastFrame<t&&r._lastBezierData===g?r._lastAddedLength:0;for(u=r.lastFrame<t&&r._lastBezierData===g?r._lastPoint:0,p=!0,d=g.points.length;p;){if(P+=g.points[u].partialLength,0===E||0===c||u==g.points.length-1){for(f=g.points[u].point.length,m=0;f>m;m+=1)i[m]=g.points[u].point[m];break}if(E>=P&&E<P+g.points[u+1].partialLength){for(b=(E-P)/g.points[u+1].partialLength,f=g.points[u].point.length,m=0;f>m;m+=1)i[m]=g.points[u].point[m]+(g.points[u+1].point[m]-g.points[u].point[m])*b;break}d-1>u?u+=1:p=!1}r._lastPoint=u,r._lastAddedLength=P-g.points[u].partialLength,r._lastBezierData=g}}else{var x,S,C,k,A;for(l=n.s.length,h=0;l>h;h+=1){if(1!==n.h&&(t>=o.t-a?c=1:t<n.t-a?c=0:(n.o.x.constructor===Array?(n.__fnct||(n.__fnct=[]),n.__fnct[h]?y=n.__fnct[h]:(x=n.o.x[h]||n.o.x[0],S=n.o.y[h]||n.o.y[0],C=n.i.x[h]||n.i.x[0],k=n.i.y[h]||n.i.y[0],y=BezierFactory.getBezierEasing(x,S,C,k).get,n.__fnct[h]=y)):n.__fnct?y=n.__fnct:(x=n.o.x,S=n.o.y,C=n.i.x,k=n.i.y,y=BezierFactory.getBezierEasing(x,S,C,k).get,n.__fnct=y),c=y((t-(n.t-a))/(o.t-a-(n.t-a))))),this.sh&&1!==n.h){var M=n.s[h],D=n.e[h];-180>M-D?M+=360:M-D>180&&(M-=360),A=M+(D-M)*c}else A=1===n.h?n.s[h]:n.s[h]+(n.e[h]-n.s[h])*c;1===l?i=A:i[h]=A}}return{value:i,iterationIndex:e}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==p&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&e>t))){var r=this._caching.lastFrame<t?this._caching.lastIndex:0,i=this.interpolateValue(t,r,this.pv,this._caching);if(this._caching.lastIndex=i.iterationIndex,this.pv.constructor===Array)for(r=0;r<this.v.length;)this.pv[r]=i.value[r],this.v[r]=this.mult?this.pv[r]*this.mult:this.pv[r],this.lastPValue[r]!==this.pv[r]&&(this.mdf=!0,this.lastPValue[r]=this.pv[r]),r+=1;else this.pv=i.value,this.v=this.mult?this.pv*this.mult:this.pv,this.lastPValue!=this.pv&&(this.mdf=!0,this.lastPValue=this.pv)}this._caching.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function s(){}function r(t,e,r){this.mult=r,this.v=r?e.k*r:e.k,this.pv=e.k,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.getValue=s}function i(t,e,r){this.mult=r,this.data=e,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1,this.v=Array.apply(null,{length:e.k.length}),this.pv=Array.apply(null,{length:e.k.length}),this.lastValue=Array.apply(null,{length:e.k.length});var i=Array.apply(null,{length:e.k.length});this.vel=i.map(function(){return 0});var a,n=e.k.length;for(a=0;n>a;a+=1)this.v[a]=r?e.k[a]*r:e.k[a],this.pv[a]=e.k[a];this.getValue=s}function a(s,r,i){this.keyframes=r.k,this.offsetTime=s.data.st,this.lastValue=-99999,this.lastPValue=-99999,this.frameId=-1,this._caching={lastFrame:p,lastIndex:0},this.k=!0,this.kf=!0,this.data=r,this.mult=i,this.elem=s,this.comp=s.comp,this.v=i?r.k[0].s[0]*i:r.k[0].s[0],this.pv=r.k[0].s[0],this.getValue=e,this.interpolateValue=t}function n(s,r,i){var a,n,o,h,l,m=r.k.length;for(a=0;m-1>a;a+=1)r.k[a].to&&r.k[a].s&&r.k[a].e&&(n=r.k[a].s,o=r.k[a].e,h=r.k[a].to,l=r.k[a].ti,(2===n.length&&(n[0]!==o[0]||n[1]!==o[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],n[0]+h[0],n[1]+h[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],o[0]+l[0],o[1]+l[1])||3===n.length&&(n[0]!==o[0]||n[1]!==o[1]||n[2]!==o[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],n[0]+h[0],n[1]+h[1],n[2]+h[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],o[0]+l[0],o[1]+l[1],o[2]+l[2]))&&(r.k[a].to=null,r.k[a].ti=null));this.keyframes=r.k,this.offsetTime=s.data.st,this.k=!0,this.kf=!0,this.mult=i,this.elem=s,this.comp=s.comp,this._caching={lastFrame:p,lastIndex:0},this.getValue=e,this.interpolateValue=t,this.frameId=-1,this.v=Array.apply(null,{length:r.k[0].s.length}),this.pv=Array.apply(null,{length:r.k[0].s.length}),this.lastValue=Array.apply(null,{length:r.k[0].s.length}),this.lastPValue=Array.apply(null,{length:r.k[0].s.length})}function o(t,e,s,o,h){var l;if(2===s)l=new m(t,e,h);else if(0===e.a)l=0===s?new r(t,e,o):new i(t,e,o);else if(1===e.a)l=0===s?new a(t,e,o):new n(t,e,o);else if(e.k.length)if("number"==typeof e.k[0])l=new i(t,e,o);else switch(s){case 0:l=new a(t,e,o);break;case 1:l=new n(t,e,o)}else l=new r(t,e,o);return l.k&&h.push(l),l}function h(t,e,s,r){return new c(t,e,s,r)}function l(t,e,s){return new d(t,e,s)}var p=-999999,m=function(){function t(){return this.p?ExpressionValue(this.p):[this.px.v,this.py.v,this.pz?this.pz.v:0]}function e(){return ExpressionValue(this.px)}function s(){return ExpressionValue(this.py)}function r(){return ExpressionValue(this.a)}function i(){return ExpressionValue(this.or)}function a(){return this.r?ExpressionValue(this.r,1/degToRads):ExpressionValue(this.rz,1/degToRads)}function n(){return ExpressionValue(this.s,100)}function o(){return ExpressionValue(this.o,100)}function h(){return ExpressionValue(this.sk)}function l(){return ExpressionValue(this.sa)}function p(t){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function m(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);if(this.mdf){if(this.v.reset(),this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented&&this.p.keyframes&&this.p.getValueAtTime){var s,r;this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(s=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/this.elem.globalData.frameRate,0),r=this.p.getValueAtTime(this.p.keyframes[0].t/this.elem.globalData.frameRate,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(s=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/this.elem.globalData.frameRate,0),r=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.01)/this.elem.globalData.frameRate,0)):(s=this.p.pv,r=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/this.elem.globalData.frameRate,this.p.offsetTime)),this.v.rotate(-Math.atan2(s[1]-r[1],s[0]-r[0]))}this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function f(){this.inverted=!0,this.iv=new Matrix,this.k||(this.data.p.s?this.iv.translate(this.px.v,this.py.v,-this.pz.v):this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]),this.r?this.iv.rotate(-this.r.v):this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.s&&this.iv.scale(this.s.v[0],this.s.v[1],1),this.a&&this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]))}function c(){}return function(d,u,y){this.elem=d,this.frameId=-1,this.type="transform",this.dynamicProperties=[],this.mdf=!1,this.data=u,this.getValue=m,this.applyToMatrix=p,this.setInverted=f,this.autoOrient=c,this.v=new Matrix,u.p.s?(this.px=PropertyFactory.getProp(d,u.p.x,0,0,this.dynamicProperties),this.py=PropertyFactory.getProp(d,u.p.y,0,0,this.dynamicProperties),u.p.z&&(this.pz=PropertyFactory.getProp(d,u.p.z,0,0,this.dynamicProperties))):this.p=PropertyFactory.getProp(d,u.p,1,0,this.dynamicProperties),u.r?this.r=PropertyFactory.getProp(d,u.r,0,degToRads,this.dynamicProperties):u.rx&&(this.rx=PropertyFactory.getProp(d,u.rx,0,degToRads,this.dynamicProperties),this.ry=PropertyFactory.getProp(d,u.ry,0,degToRads,this.dynamicProperties),this.rz=PropertyFactory.getProp(d,u.rz,0,degToRads,this.dynamicProperties),this.or=PropertyFactory.getProp(d,u.or,1,degToRads,this.dynamicProperties),this.or.sh=!0),u.sk&&(this.sk=PropertyFactory.getProp(d,u.sk,0,degToRads,this.dynamicProperties),this.sa=PropertyFactory.getProp(d,u.sa,0,degToRads,this.dynamicProperties)),u.a&&(this.a=PropertyFactory.getProp(d,u.a,1,0,this.dynamicProperties)),u.s&&(this.s=PropertyFactory.getProp(d,u.s,1,.01,this.dynamicProperties)),this.o=u.o?PropertyFactory.getProp(d,u.o,0,.01,this.dynamicProperties):{mdf:!1,v:1},this.dynamicProperties.length?y.push(this):(this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?u.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])),Object.defineProperty(this,"position",{get:t}),Object.defineProperty(this,"xPosition",{get:e}),Object.defineProperty(this,"yPosition",{get:s}),Object.defineProperty(this,"orientation",{get:i}),Object.defineProperty(this,"anchorPoint",{get:r}),Object.defineProperty(this,"rotation",{get:a}),Object.defineProperty(this,"scale",{get:n}),Object.defineProperty(this,"opacity",{get:o}),Object.defineProperty(this,"skew",{get:h}),Object.defineProperty(this,"skewAxis",{get:l})}}(),f=function(){function t(t){if(this.prop.getValue(),this.cmdf=!1,this.omdf=!1,this.prop.mdf||t){var e,s,r,i=4*this.data.p;for(e=0;i>e;e+=1)s=e%4===0?100:255,r=Math.round(this.prop.v[e]*s),this.c[e]!==r&&(this.c[e]=r,this.cmdf=!0);if(this.o.length)for(i=this.prop.v.length,e=4*this.data.p;i>e;e+=1)s=e%2===0?100:1,r=e%2===0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==r&&(this.o[e-4*this.data.p]=r,this.omdf=!0)}}function e(e,s,r){this.prop=o(e,s.k,1,null,[]),this.data=s,this.k=this.prop.k,this.c=Array.apply(null,{length:4*s.p});var i=s.k.k[0].s?s.k.k[0].s.length-4*s.p:s.k.k.length-4*s.p;this.o=Array.apply(null,{length:i}),this.cmdf=!1,this.omdf=!1,this.getValue=t,this.prop.k&&r.push(this),this.getValue(!0)}return function(t,s,r){return new e(t,s,r)}}(),c=function(){function t(t){var e=0,s=this.dataProps.length;if(this.elem.globalData.frameId!==this.frameId||t){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId;s>e;){if(this.dataProps[e].p.mdf){this.mdf=!0;break}e+=1}if(this.mdf||t)for("svg"===this.renderer&&(this.dasharray=""),e=0;s>e;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dasharray+=" "+this.dataProps[e].p.v:this.dasharray[e]=this.dataProps[e].p.v:this.dashoffset=this.dataProps[e].p.v}}return function(e,s,r,i){this.elem=e,this.frameId=-1,this.dataProps=new Array(s.length),this.renderer=r,this.mdf=!1,this.k=!1,this.dasharray="svg"===this.renderer?"":new Array(s.length-1),this.dashoffset=0;var a,n,o=s.length;for(a=0;o>a;a+=1)n=PropertyFactory.getProp(e,s[a].v,0,0,i),this.k=n.k?!0:this.k,this.dataProps[a]={n:s[a].n,p:n};this.getValue=t,this.k?i.push(this):this.getValue(!0)}}(),d=function(){function t(t){if(this.mdf=t||!1,this.dynamicProperties.length){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}var r=this.elem.textProperty.currentData?this.elem.textProperty.currentData.l.length:0;t&&2===this.data.r&&(this.e.v=r);var i=2===this.data.r?1:100/r,a=this.o.v/i,n=this.s.v/i+a,o=this.e.v/i+a;if(n>o){var h=n;n=o,o=h}this.finalS=n,this.finalE=o}function e(t){var e=BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,a=0,n=this.finalS,o=this.finalE,h=this.data.sh;if(2==h)a=o===n?t>=o?1:0:s(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(3==h)a=o===n?t>=o?0:1:1-s(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(4==h)o===n?a=0:(a=s(0,r(.5/(o-n)+(t-n)/(o-n),1)),.5>a?a*=2:a=1-2*(a-.5)),a=e(a);else if(5==h){if(o===n)a=0;else{var l=o-n;t=r(s(0,t+.5-n),o-n);var p=-l/2+t,m=l/2;a=Math.sqrt(1-p*p/(m*m))}a=e(a)}else 6==h?(o===n?a=0:(t=r(s(0,t+.5-n),o-n),a=(1+Math.cos(Math.PI+2*Math.PI*t/(o-n)))/2),a=e(a)):(t>=i(n)&&(a=0>t-n?1-(n-t):s(0,r(o-t,1))),a=e(a));return a*this.a.v}var s=Math.max,r=Math.min,i=Math.floor;return function(s,r,i){this.mdf=!1,this.k=!1,this.data=r,this.dynamicProperties=[],this.getValue=t,this.getMult=e,this.elem=s,this.comp=s.comp,this.finalS=0,this.finalE=0,this.s=PropertyFactory.getProp(s,r.s||{k:0},0,0,this.dynamicProperties),this.e="e"in r?PropertyFactory.getProp(s,r.e,0,0,this.dynamicProperties):{v:100},this.o=PropertyFactory.getProp(s,r.o||{k:0},0,0,this.dynamicProperties),this.xe=PropertyFactory.getProp(s,r.xe||{k:0},0,0,this.dynamicProperties),this.ne=PropertyFactory.getProp(s,r.ne||{k:0},0,0,this.dynamicProperties),this.a=PropertyFactory.getProp(s,r.a,0,.01,this.dynamicProperties),this.dynamicProperties.length?i.push(this):this.getValue()}}(),u={getProp:o,getDashProp:h,getTextSelectorProp:l,getGradientProp:f};return u}();ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;e>s;)this.v[s]=point_pool.newPoint(),this.o[s]=point_pool.newPoint(),this.i[s]=point_pool.newPoint(),s+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(Array.apply(null,{length:this._maxLength})),this.i=this.i.concat(Array.apply(null,{length:this._maxLength})),this.o=this.o.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,s,r,i){var a;switch(this._length=Math.max(this._length,r+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[r]||a[r]&&!i)&&(a[r]=point_pool.newPoint()),a[r][0]=t,a[r][1]=e},ShapePath.prototype.setTripleAt=function(t,e,s,r,i,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(s,r,"o",n,o),this.setXYAt(i,a,"i",n,o)};var ShapePropertyFactory=function(){function t(t,e,s,r){var i,a,n;if(t<this.keyframes[0].t-this.offsetTime)i=this.keyframes[0].s[0],n=!0,e=0;else if(t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime)i=1===this.keyframes[this.keyframes.length-2].h?this.keyframes[this.keyframes.length-1].s[0]:this.keyframes[this.keyframes.length-2].e[0],n=!0;else{for(var o,h,l,p,m,f,c=e,d=this.keyframes.length-1,u=!0;u&&(o=this.keyframes[c],h=this.keyframes[c+1],!(h.t-this.offsetTime>t));)d-1>c?c+=1:u=!1;n=1===o.h,e=c;var y;if(!n){if(t>=h.t-this.offsetTime)y=1;else if(t<o.t-this.offsetTime)y=0;else{var g;o.__fnct?g=o.__fnct:(g=BezierFactory.getBezierEasing(o.o.x,o.o.y,o.i.x,o.i.y).get,o.__fnct=g),y=g((t-(o.t-this.offsetTime))/(h.t-this.offsetTime-(o.t-this.offsetTime)))}a=o.e[0]}i=o.s[0]}p=s._length,f=i.i[0].length;var v,b=!1;for(l=0;p>l;l+=1)for(m=0;f>m;m+=1)n?(v=i.i[l][m],s.i[l][m]!==v&&(s.i[l][m]=v,r&&(this.pv.i[l][m]=v),b=!0),v=i.o[l][m],s.o[l][m]!==v&&(s.o[l][m]=v,r&&(this.pv.o[l][m]=v),b=!0),v=i.v[l][m],s.v[l][m]!==v&&(s.v[l][m]=v,r&&(this.pv.v[l][m]=v),b=!0)):(v=i.i[l][m]+(a.i[l][m]-i.i[l][m])*y,s.i[l][m]!==v&&(s.i[l][m]=v,r&&(this.pv.i[l][m]=v),b=!0),v=i.o[l][m]+(a.o[l][m]-i.o[l][m])*y,s.o[l][m]!==v&&(s.o[l][m]=v,r&&(this.pv.o[l][m]=v),b=!0),v=i.v[l][m]+(a.v[l][m]-i.v[l][m])*y,s.v[l][m]!==v&&(s.v[l][m]=v,r&&(this.pv.v[l][m]=v),b=!0));return b&&(s.c=i.c),{iterationIndex:e,hasModified:b}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(this.lastFrame===l||!(this.lastFrame<e&&e>t||this.lastFrame>s&&t>s)){var r=this.lastFrame<t?this._lastIndex:0,i=this.interpolateShape(t,r,this.v,!0);this._lastIndex=i.iterationIndex,this.mdf=i.hasModified,i.hasModified&&(this.paths=this.localShapeCollection)}this.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function s(){return this.v}function r(){this.paths=this.localShapeCollection,this.k||(this.mdf=!1)}function i(t,e,s){this.__shapeObject=1,this.comp=t.comp,this.k=!1,this.mdf=!1;var i=3===s?e.pt.k:e.ks.k;this.v=shape_pool.clone(i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=r}function a(t,e,s){this.__shapeObject=1,this.comp=t.comp,this.elem=t,this.offsetTime=t.data.st,this._lastIndex=0,this.keyframes=3===s?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;{var i=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length}this.v=shape_pool.newShape(),this.v.setPathData(this.keyframes[0].s[0].c,i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=l,this.reset=r}function n(t,e,s,r){var n;if(3===s||4===s){
var o=3===s?e.pt:e.ks,h=o.k;n=1===o.a||h.length?new a(t,e,s):new i(t,e,s)}else 5===s?n=new f(t,e):6===s?n=new p(t,e):7===s&&(n=new m(t,e));return n.k&&r.push(n),n}function o(){return i}function h(){return a}var l=-999999;i.prototype.interpolateShape=t,i.prototype.getValue=s,a.prototype.getValue=e,a.prototype.interpolateShape=t;var p=function(){function t(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2;3!==this.d?(this.v.v[0][0]=t,this.v.v[0][1]=e-i,this.v.v[1][0]=t+r,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+i,this.v.v[3][0]=t-r,this.v.v[3][1]=e,this.v.i[0][0]=t-r*s,this.v.i[0][1]=e-i,this.v.i[1][0]=t+r,this.v.i[1][1]=e-i*s,this.v.i[2][0]=t+r*s,this.v.i[2][1]=e+i,this.v.i[3][0]=t-r,this.v.i[3][1]=e+i*s,this.v.o[0][0]=t+r*s,this.v.o[0][1]=e-i,this.v.o[1][0]=t+r,this.v.o[1][1]=e+i*s,this.v.o[2][0]=t-r*s,this.v.o[2][1]=e+i,this.v.o[3][0]=t-r,this.v.o[3][1]=e-i*s):(this.v.v[0][0]=t,this.v.v[0][1]=e-i,this.v.v[1][0]=t-r,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+i,this.v.v[3][0]=t+r,this.v.v[3][1]=e,this.v.i[0][0]=t+r*s,this.v.i[0][1]=e-i,this.v.i[1][0]=t-r,this.v.i[1][1]=e-i*s,this.v.i[2][0]=t-r*s,this.v.i[2][1]=e+i,this.v.i[3][0]=t+r,this.v.i[3][1]=e+i*s,this.v.o[0][0]=t-r*s,this.v.o[0][1]=e-i,this.v.o[1][0]=t-r,this.v.o[1][1]=e+i*s,this.v.o[2][0]=t+r*s,this.v.o[2][1]=e+i,this.v.o[3][0]=t+r,this.v.o[3][1]=e-i*s)}function e(t){var e,s=this.dynamicProperties.length;if(this.elem.globalData.frameId!==this.frameId){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId,e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertEllToPath()}}var s=roundCorner;return function(s,i){this.v=shape_pool.newShape(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=i.d,this.dynamicProperties=[],this.elem=s,this.comp=s.comp,this.frameId=-1,this.mdf=!1,this.getValue=e,this.convertEllToPath=t,this.reset=r,this.p=PropertyFactory.getProp(s,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(s,i.s,1,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertEllToPath()}}(),m=function(){function t(){var t,e=Math.floor(this.pt.v),s=2*Math.PI/e,r=this.or.v,i=this.os.v,a=2*Math.PI*r/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;e>t;t+=1){var h=r*Math.cos(n),l=r*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*i*o,l-m*a*i*o,h+p*a*i*o,l+m*a*i*o,t,!0),n+=s*o}this.paths.length=0,this.paths[0]=this.v}function e(){var t,e,s,r,i=2*Math.floor(this.pt.v),a=2*Math.PI/i,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*i),f=2*Math.PI*h/(2*i),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;i>t;t+=1){e=n?o:h,s=n?l:p,r=n?m:f;var u=e*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*r*s*d,y-v*r*s*d,u+g*r*s*d,y+v*r*s*d,t,!0),n=!n,c+=a*d}}function s(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);this.mdf&&this.convertToPath()}}return function(i,a){this.v=shape_pool.newShape(),this.v.setPathData(!0,0),this.elem=i,this.comp=i.comp,this.data=a,this.frameId=-1,this.d=a.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=s,this.reset=r,1===a.sy?(this.ir=PropertyFactory.getProp(i,a.ir,0,0,this.dynamicProperties),this.is=PropertyFactory.getProp(i,a.is,0,.01,this.dynamicProperties),this.convertToPath=e):this.convertToPath=t,this.pt=PropertyFactory.getProp(i,a.pt,0,0,this.dynamicProperties),this.p=PropertyFactory.getProp(i,a.p,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(i,a.r,0,degToRads,this.dynamicProperties),this.or=PropertyFactory.getProp(i,a.or,0,0,this.dynamicProperties),this.os=PropertyFactory.getProp(i,a.os,0,.01,this.dynamicProperties),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:this.convertToPath()}}(),f=function(){function t(t){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertRectToPath()}}function e(){var t=this.p.v[0],e=this.p.v[1],s=this.s.v[0]/2,r=this.s.v[1]/2,i=bm_min(s,r,this.r.v),a=i*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+s,e-r+i,t+s,e-r+i,t+s,e-r+a,0,!0),this.v.setTripleAt(t+s,e+r-i,t+s,e+r-a,t+s,e+r-i,1,!0),0!==i?(this.v.setTripleAt(t+s-i,e+r,t+s-i,e+r,t+s-a,e+r,2,!0),this.v.setTripleAt(t-s+i,e+r,t-s+a,e+r,t-s+i,e+r,3,!0),this.v.setTripleAt(t-s,e+r-i,t-s,e+r-i,t-s,e+r-a,4,!0),this.v.setTripleAt(t-s,e-r+i,t-s,e-r+a,t-s,e-r+i,5,!0),this.v.setTripleAt(t-s+i,e-r,t-s+i,e-r,t-s+a,e-r,6,!0),this.v.setTripleAt(t+s-i,e-r,t+s-a,e-r,t+s-i,e-r,7,!0)):(this.v.setTripleAt(t-s,e+r,t-s+a,e+r,t-s,e+r,2),this.v.setTripleAt(t-s,e-r,t-s,e-r+a,t-s,e-r,3))):(this.v.setTripleAt(t+s,e-r+i,t+s,e-r+a,t+s,e-r+i,0,!0),0!==i?(this.v.setTripleAt(t+s-i,e-r,t+s-i,e-r,t+s-a,e-r,1,!0),this.v.setTripleAt(t-s+i,e-r,t-s+a,e-r,t-s+i,e-r,2,!0),this.v.setTripleAt(t-s,e-r+i,t-s,e-r+i,t-s,e-r+a,3,!0),this.v.setTripleAt(t-s,e+r-i,t-s,e+r-a,t-s,e+r-i,4,!0),this.v.setTripleAt(t-s+i,e+r,t-s+i,e+r,t-s+a,e+r,5,!0),this.v.setTripleAt(t+s-i,e+r,t+s-a,e+r,t+s-i,e+r,6,!0),this.v.setTripleAt(t+s,e+r-i,t+s,e+r-i,t+s,e+r-a,7,!0)):(this.v.setTripleAt(t-s,e-r,t-s+a,e-r,t-s,e-r,1,!0),this.v.setTripleAt(t-s,e+r,t-s,e+r-a,t-s,e+r,2,!0),this.v.setTripleAt(t+s,e+r,t+s-a,e+r,t+s,e+r,3,!0)))}return function(s,i){this.v=shape_pool.newShape(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=s,this.comp=s.comp,this.frameId=-1,this.d=i.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=t,this.convertRectToPath=e,this.reset=r,this.p=PropertyFactory.getProp(s,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(s,i.s,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(s,i.r,0,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertRectToPath()}}(),c={};return c.getShapeProp=n,c.getConstructorFunction=o,c.getKeyframedConstructorFunction=h,c}(),ShapeModifiers=function(){function t(t,e){r[t]||(r[t]=e)}function e(t,e,s,i){return new r[t](e,s,i)}var s={},r={};return s.registerModifier=t,s.getModifier=e,s}();ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){this.closed||(this.shapes.push({shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()}),this.addShapeToModifier(t.sh))},ShapeModifier.prototype.init=function(t,e,s){this.elem=t,this.frameId=-1,this.shapes=[],this.dynamicProperties=[],this.mdf=!1,this.closed=!1,this.k=!1,this.comp=t.comp,this.initModifierProperties(t,e),this.dynamicProperties.length?(this.k=!0,s.push(this)):this.getValue(!0)},extendPrototype(ShapeModifier,TrimModifier),TrimModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);if(this.mdf||t){var r=this.o.v%360/360;0>r&&(r+=1);var i=this.s.v+r,a=this.e.v+r;if(i>a){var n=i;i=a,a=n}this.sValue=i,this.eValue=a,this.oValue=r}}},TrimModifier.prototype.initModifierProperties=function(t,e){this.sValue=0,this.eValue=0,this.oValue=0,this.getValue=this.processKeys,this.s=PropertyFactory.getProp(t,e.s,0,.01,this.dynamicProperties),this.e=PropertyFactory.getProp(t,e.e,0,.01,this.dynamicProperties),this.o=PropertyFactory.getProp(t,e.o,0,0,this.dynamicProperties),this.m=e.m,this.dynamicProperties.length||this.getValue(!0)},TrimModifier.prototype.calculateShapeEdges=function(t,e,s,r,i){var a=[];1>=e?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;l>n;n+=1)if(o=a[n],o.e*i<r||o.s*i>r+s);else{var p,m;p=o.s*i<=r?0:(o.s*i-r)/s,m=o.e*i>=r+s?1:(o.e*i-r)/s,h.push([p,m])}return h.length||h.push([0,0]),h},TrimModifier.prototype.processShapes=function(t){var e,s,r,i,a,n,o,h=this.shapes.length,l=this.sValue,p=this.eValue,m=0;if(p===l)for(s=0;h>s;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape.mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection;else if(1===p&&0===l||0===p&&1===l){if(this.mdf)for(s=0;h>s;s+=1)this.shapes[s].shape.mdf=!0}else{var f,c,d=[];for(s=0;h>s;s+=1)if(f=this.shapes[s],f.shape.mdf||this.mdf||t||2===this.m){if(e=f.shape.paths,i=e._length,o=0,!f.shape.mdf&&f.pathsData)o=f.totalShapeLength;else{for(a=[],r=0;i>r;r+=1)n=bez.getSegmentsLength(e.shapes[r]),a.push(n),o+=n.totalLength;f.totalShapeLength=o,f.pathsData=a}m+=o,f.shape.mdf=!0}else f.shape.paths=f.localShapeCollection;var r,i,u=l,y=p,g=0;for(s=h-1;s>=0;s-=1)if(f=this.shapes[s],f.shape.mdf){if(c=f.localShapeCollection,c.releaseShapes(),2===this.m&&h>1){var v=this.calculateShapeEdges(l,p,f.totalShapeLength,g,m);g+=f.totalShapeLength}else v=[[u,y]];for(i=v.length,r=0;i>r;r+=1){u=v[r][0],y=v[r][1],d.length=0,1>=y?d.push({s:f.totalShapeLength*u,e:f.totalShapeLength*y}):u>=1?d.push({s:f.totalShapeLength*(u-1),e:f.totalShapeLength*(y-1)}):(d.push({s:f.totalShapeLength*u,e:f.totalShapeLength}),d.push({s:0,e:f.totalShapeLength*(y-1)}));var b=this.addShapes(f,d[0]);if(d[0].s!==d[0].e){if(d.length>1)if(f.shape.v.c){var E=b.pop();this.addPaths(b,c),b=this.addShapes(f,d[1],E)}else this.addPaths(b,c),b=this.addShapes(f,d[1]);this.addPaths(b,c)}}f.shape.paths=c}}this.dynamicProperties.length||(this.mdf=!1)},TrimModifier.prototype.addPaths=function(t,e){var s,r=t.length;for(s=0;r>s;s+=1)e.addShape(t[s])},TrimModifier.prototype.addSegment=function(t,e,s,r,i,a,n){i.setXYAt(e[0],e[1],"o",a),i.setXYAt(s[0],s[1],"i",a+1),n&&i.setXYAt(t[0],t[1],"v",a),i.setXYAt(r[0],r[1],"v",a+1)},TrimModifier.prototype.addShapes=function(t,e,s){var r,i,a,n,o,h,l,p,m=t.pathsData,f=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(s?(o=s._length,p=s._length):(s=shape_pool.newShape(),o=0,p=0),u.push(s),r=0;c>r;r+=1){for(h=m[r].lengths,s.c=f[r].c,a=f[r].c?h.length:h.length+1,i=1;a>i;i+=1)if(n=h[i-1],d+n.addedLength<e.s)d+=n.addedLength,s.c=!1;else{if(d>e.e){s.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[r].v[i-1],f[r].o[i-1],f[r].i[i],f[r].v[i],s,o,y),y=!1):(l=bez.getNewSegment(f[r].v[i-1],f[r].v[i],f[r].o[i-1],f[r].i[i],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,o,y),y=!1,s.c=!1),d+=n.addedLength,o+=1}if(f[r].c){if(n=h[i-1],d<=e.e){var g=h[i-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[r].v[i-1],f[r].o[i-1],f[r].i[0],f[r].v[0],s,o,y),y=!1):(l=bez.getNewSegment(f[r].v[i-1],f[r].v[0],f[r].o[i-1],f[r].i[0],(e.s-d)/g,(e.e-d)/g,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,o,y),y=!1,s.c=!1)}else s.c=!1;d+=n.addedLength,o+=1}if(s._length&&(s.setXYAt(s.v[p][0],s.v[p][1],"i",p),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),d>e.e)break;c-1>r&&(s=shape_pool.newShape(),y=!0,u.push(s),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype(ShapeModifier,RoundCornersModifier),RoundCornersModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this.dynamicProperties),this.dynamicProperties.length||this.getValue(!0)},RoundCornersModifier.prototype.processPath=function(t,e){var s=shape_pool.newShape();s.c=t.c;var r,i,a,n,o,h,l,p,m,f,c,d,u,y=t._length,g=0;for(r=0;y>r;r+=1)i=t.v[r],n=t.o[r],a=t.i[r],i[0]===n[0]&&i[1]===n[1]&&i[0]===a[0]&&i[1]===a[1]?0!==r&&r!==y-1||t.c?(o=0===r?t.v[y-1]:t.v[r-1],h=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=d=i[0]+(o[0]-i[0])*l,m=u=i[1]-(i[1]-o[1])*l,f=p-(p-i[0])*roundCorner,c=m-(m-i[1])*roundCorner,s.setTripleAt(p,m,f,c,d,u,g),g+=1,o=r===y-1?t.v[0]:t.v[r+1],h=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=f=i[0]+(o[0]-i[0])*l,m=c=i[1]+(o[1]-i[1])*l,d=p-(p-i[0])*roundCorner,u=m-(m-i[1])*roundCorner,s.setTripleAt(p,m,f,c,d,u,g),g+=1):(s.setTripleAt(i[0],i[1],n[0],n[1],a[0],a[1],g),g+=1):(s.setTripleAt(t.v[r][0],t.v[r][1],t.o[r][0],t.o[r][1],t.i[r][0],t.i[r][1],g),g+=1);return s},RoundCornersModifier.prototype.processShapes=function(t){var e,s,r,i,a=this.shapes.length,n=this.rd.v;if(0!==n){var o,h,l;for(s=0;a>s;s+=1){if(o=this.shapes[s],h=o.shape.paths,l=o.localShapeCollection,o.shape.mdf||this.mdf||t)for(l.releaseShapes(),o.shape.mdf=!0,e=o.shape.paths.shapes,i=o.shape.paths._length,r=0;i>r;r+=1)l.addShape(this.processPath(e[r],n));o.shape.paths=o.localShapeCollection}}this.dynamicProperties.length||(this.mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),RepeaterModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this.dynamicProperties),this.o=PropertyFactory.getProp(t,e.o,0,null,this.dynamicProperties),this.tr=PropertyFactory.getProp(t,e.tr,2,null,this.dynamicProperties),this.data=e,this.dynamicProperties.length||this.getValue(!0),this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,s,r,i,a){var n=a?-1:1,o=r.s.v[0]+(1-r.s.v[0])*(1-i),h=r.s.v[1]+(1-r.s.v[1])*(1-i);t.translate(r.p.v[0]*n*i,r.p.v[1]*n*i,r.p.v[2]),e.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),e.rotate(-r.r.v*n*i),e.translate(r.a.v[0],r.a.v[1],r.a.v[2]),s.translate(-r.a.v[0],-r.a.v[1],r.a.v[2]),s.scale(a?1/o:o,a?1/h:h),s.translate(r.a.v[0],r.a.v[1],r.a.v[2])},RepeaterModifier.prototype.init=function(t,e,s,r,i){this.elem=t,this.arr=e,this.pos=s,this.elemsData=r,this._currentCopies=0,this._elements=[],this._groups=[],this.dynamicProperties=[],this.frameId=-1,this.initModifierProperties(t,e[s]);for(var a=0;s>0;)s-=1,this._elements.unshift(e[s]),a+=1;this.dynamicProperties.length?(this.k=!0,i.push(this)):this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,s=t.length;for(e=0;s>e;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=(t.length,JSON.parse(JSON.stringify(t)));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var s,r=t.length;for(s=0;r>s;s+=1)t[s]._render=e,"gr"===t[s].ty&&this.changeGroupRender(t[s].it,e)},RepeaterModifier.prototype.processShapes=function(t){if(this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.dynamicProperties.length||t||(this.mdf=!1),this.mdf)){var e=Math.ceil(this.c.v);if(this._groups.length<e){for(;this._groups.length<e;){var s={it:this.cloneElements(this._elements),ty:"gr"};s.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:0,ix:6,k:0},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,s),this._groups.splice(0,0,s),this._currentCopies+=1}this.elem.reloadShapes()}var r,i,a=0;for(r=0;r<=this._groups.length-1;r+=1)i=e>a,this._groups[r]._render=i,this.changeGroupRender(this._groups[r].it,i),a+=1;this._currentCopies=e,this.elem.firstFrame=!0;var n=this.o.v,o=n%1,h=n>0?Math.floor(n):Math.ceil(n),l=(this.tr.v.props,this.pMatrix.props),p=this.rMatrix.props,m=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var f=0;if(n>0){for(;h>f;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),f+=1;o&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,o,!1),f+=o)}else if(0>n){for(;f>h;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),f-=1;o&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-o,!0),f-=o)}r=1===this.data.m?0:this._currentCopies-1;var c=1===this.data.m?1:-1;for(a=this._currentCopies;a;){if(0!==f){(0!==r&&1===c||r!==this._currentCopies-1&&-1===c)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),this.matrix.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15]);var d,u=this.elemsData[r].it,y=u[u.length-1].transform.mProps.v.props,g=y.length;for(d=0;g>d;d+=1)y[d]=this.matrix.props[d];this.matrix.reset()}else{this.matrix.reset();var d,u=this.elemsData[r].it,y=u[u.length-1].transform.mProps.v.props,g=y.length;for(d=0;g>d;d+=1)y[d]=this.matrix.props[d]}f+=1,a-=1,r+=c}}},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0};var ImagePreloader=function(){function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&n&&n(null)}function e(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e}function s(e){var s=document.createElement("img");s.addEventListener("load",t.bind(this),!1),s.addEventListener("error",t.bind(this),!1),s.src=e}function r(t,r){n=r,this.totalAssets=t.length;var i;for(i=0;i<this.totalAssets;i+=1)t[i].layers||(s.bind(this)(e.bind(this)(t[i])),this.totalImages+=1)}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}var n;return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=i,this.assetsPath="",this.path="",this.totalAssets=0,this.totalImages=0,this.loadedAssets=0}}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){function t(t){var e=document.createElementNS(svgNS,"filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e}function e(){var t=document.createElementNS(svgNS,"feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}var s={};return s.createFilter=t,s.createAlphaToLuminanceFilter=e,s}();TextAnimatorProperty.prototype.searchProperties=function(t){var e,s,r,i=this._textData.a.length,a=PropertyFactory.getProp;for(e=0;i>e;e+=1)r=this._textData.a[e],s={a:{},s:{}},"r"in r.a&&(s.a.r=a(this._elem,r.a.r,0,degToRads,this._dynamicProperties)),"rx"in r.a&&(s.a.rx=a(this._elem,r.a.rx,0,degToRads,this._dynamicProperties)),"ry"in r.a&&(s.a.ry=a(this._elem,r.a.ry,0,degToRads,this._dynamicProperties)),"sk"in r.a&&(s.a.sk=a(this._elem,r.a.sk,0,degToRads,this._dynamicProperties)),"sa"in r.a&&(s.a.sa=a(this._elem,r.a.sa,0,degToRads,this._dynamicProperties)),"s"in r.a&&(s.a.s=a(this._elem,r.a.s,1,.01,this._dynamicProperties)),"a"in r.a&&(s.a.a=a(this._elem,r.a.a,1,0,this._dynamicProperties)),"o"in r.a&&(s.a.o=a(this._elem,r.a.o,0,.01,this._dynamicProperties)),"p"in r.a&&(s.a.p=a(this._elem,r.a.p,1,0,this._dynamicProperties)),"sw"in r.a&&(s.a.sw=a(this._elem,r.a.sw,0,0,this._dynamicProperties)),"sc"in r.a&&(s.a.sc=a(this._elem,r.a.sc,1,0,this._dynamicProperties)),"fc"in r.a&&(s.a.fc=a(this._elem,r.a.fc,1,0,this._dynamicProperties)),"fh"in r.a&&(s.a.fh=a(this._elem,r.a.fh,0,0,this._dynamicProperties)),"fs"in r.a&&(s.a.fs=a(this._elem,r.a.fs,0,.01,this._dynamicProperties)),"fb"in r.a&&(s.a.fb=a(this._elem,r.a.fb,0,.01,this._dynamicProperties)),"t"in r.a&&(s.a.t=a(this._elem,r.a.t,0,0,this._dynamicProperties)),s.s=PropertyFactory.getTextSelectorProp(this._elem,r.s,this._dynamicProperties),s.s.t=r.s.t,this._animatorsData[e]=s;this._textData.p&&"m"in this._textData.p?(this._pathData={f:a(this._elem,this._textData.p.f,0,0,this._dynamicProperties),l:a(this._elem,this._textData.p.l,0,0,this._dynamicProperties),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this._dynamicProperties),this._dynamicProperties.length&&t.push(this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this.mdf||this._firstFrame||e||this._hasMaskedPath&&this._pathData.m.mdf){this._firstFrame=!1;var s,r,i,a,n=this._moreOptions.alignment.v,o=this._animatorsData,h=this._textData,l=this.mHelper,p=this._renderType,m=this.renderedLetters.length,f=(this.data,t.l);if(this._hasMaskedPath){var c=this._pathData.m;if(!this._pathData.n||this._pathData.mdf){var d=c.v;this._pathData.r&&(d=reversePath(d));var u={tLength:0,segments:[]};a=d._length-1;var y,g=0;for(i=0;a>i;i+=1)y={s:d.v[i],e:d.v[i+1],to:[d.o[i][0]-d.v[i][0],d.o[i][1]-d.v[i][1]],ti:[d.i[i+1][0]-d.v[i+1][0],d.i[i+1][1]-d.v[i+1][1]]},bez.buildBezierData(y),u.tLength+=y.bezierData.segmentLength,u.segments.push(y),g+=y.bezierData.segmentLength;i=a,c.v.c&&(y={s:d.v[i],e:d.v[0],to:[d.o[i][0]-d.v[i][0],d.o[i][1]-d.v[i][1]],ti:[d.i[0][0]-d.v[0][0],d.i[0][1]-d.v[0][1]]},bez.buildBezierData(y),u.tLength+=y.bezierData.segmentLength,u.segments.push(y),g+=y.bezierData.segmentLength),this._pathData.pi=u}var v,b,E,u=this._pathData.pi,P=this._pathData.f.v,x=0,S=1,C=0,k=!0,A=u.segments;if(0>P&&c.v.c)for(u.tLength<Math.abs(P)&&(P=-Math.abs(P)%u.tLength),x=A.length-1,E=A[x].bezierData.points,S=E.length-1;0>P;)P+=E[S].partialLength,S-=1,0>S&&(x-=1,E=A[x].bezierData.points,S=E.length-1);E=A[x].bezierData.points,b=E[S-1],v=E[S];var M,D,T=v.partialLength}a=f.length,s=0,r=0;var w,_,I,F,V,R=1.2*t.s*.714,N=!0;if(F=o.length,e)for(I=0;F>I;I+=1)_=o[I].s,_.getValue(!0);var B,L,O,G,j,H,z,W,q,Y,X,J,K,U=-1,Z=P,Q=x,$=S,tt=-1,et=0,st="",rt=this.defaultPropsArray;for(i=0;a>i;i+=1){if(l.reset(),j=1,f[i].n)s=0,r+=t.yOffset,r+=N?1:0,P=Z,N=!1,et=0,this._hasMaskedPath&&(x=Q,S=$,E=A[x].bezierData.points,b=E[S-1],v=E[S],T=v.partialLength,C=0),K=Y=J=st="",rt=this.defaultPropsArray;else{if(this._hasMaskedPath){if(tt!==f[i].line){switch(t.j){case 1:P+=g-t.lineWidths[f[i].line];break;case 2:P+=(g-t.lineWidths[f[i].line])/2}tt=f[i].line}U!==f[i].ind&&(f[U]&&(P+=f[U].extra),P+=f[i].an/2,U=f[i].ind),P+=n[0]*f[i].an/200;var it=0;for(I=0;F>I;I+=1)w=o[I].a,"p"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),it+=B.length?w.p.v[0]*B[0]:w.p.v[0]*B),"a"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),it+=B.length?w.a.v[0]*B[0]:w.a.v[0]*B);for(k=!0;k;)C+T>=P+it||!E?(M=(P+it-C)/v.partialLength,O=b.point[0]+(v.point[0]-b.point[0])*M,G=b.point[1]+(v.point[1]-b.point[1])*M,l.translate(-n[0]*f[i].an/200,-(n[1]*R/100)),k=!1):E&&(C+=v.partialLength,S+=1,S>=E.length&&(S=0,x+=1,A[x]?E=A[x].bezierData.points:c.v.c?(S=0,x=0,E=A[x].bezierData.points):(C-=v.partialLength,E=null)),E&&(b=v,v=E[S],T=v.partialLength));L=f[i].an/2-f[i].add,l.translate(-L,0,0)}else L=f[i].an/2-f[i].add,l.translate(-L,0,0),l.translate(-n[0]*f[i].an/200,-n[1]*R/100,0);for(et+=f[i].l/2,I=0;F>I;I+=1)w=o[I].a,"t"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),this._hasMaskedPath?P+=B.length?w.t*B[0]:w.t*B:s+=B.length?w.t.v*B[0]:w.t.v*B);for(et+=f[i].l/2,t.strokeWidthAnim&&(z=t.sw||0),t.strokeColorAnim&&(H=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(W=[t.fc[0],t.fc[1],t.fc[2]]),I=0;F>I;I+=1)w=o[I].a,"a"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),B.length?l.translate(-w.a.v[0]*B[0],-w.a.v[1]*B[1],w.a.v[2]*B[2]):l.translate(-w.a.v[0]*B,-w.a.v[1]*B,w.a.v[2]*B));for(I=0;F>I;I+=1)w=o[I].a,"s"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),B.length?l.scale(1+(w.s.v[0]-1)*B[0],1+(w.s.v[1]-1)*B[1],1):l.scale(1+(w.s.v[0]-1)*B,1+(w.s.v[1]-1)*B,1));for(I=0;F>I;I+=1){if(w=o[I].a,_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),"sk"in w&&(B.length?l.skewFromAxis(-w.sk.v*B[0],w.sa.v*B[1]):l.skewFromAxis(-w.sk.v*B,w.sa.v*B)),"r"in w&&l.rotateZ(B.length?-w.r.v*B[2]:-w.r.v*B),"ry"in w&&l.rotateY(B.length?w.ry.v*B[1]:w.ry.v*B),"rx"in w&&l.rotateX(B.length?w.rx.v*B[0]:w.rx.v*B),"o"in w&&(j+=B.length?(w.o.v*B[0]-j)*B[0]:(w.o.v*B-j)*B),t.strokeWidthAnim&&"sw"in w&&(z+=B.length?w.sw.v*B[0]:w.sw.v*B),t.strokeColorAnim&&"sc"in w)for(q=0;3>q;q+=1)H[q]=B.length?H[q]+(w.sc.v[q]-H[q])*B[0]:H[q]+(w.sc.v[q]-H[q])*B;if(t.fillColorAnim&&t.fc){if("fc"in w)for(q=0;3>q;q+=1)W[q]=B.length?W[q]+(w.fc.v[q]-W[q])*B[0]:W[q]+(w.fc.v[q]-W[q])*B;"fh"in w&&(W=B.length?addHueToRGB(W,w.fh.v*B[0]):addHueToRGB(W,w.fh.v*B)),"fs"in w&&(W=B.length?addSaturationToRGB(W,w.fs.v*B[0]):addSaturationToRGB(W,w.fs.v*B)),"fb"in w&&(W=B.length?addBrightnessToRGB(W,w.fb.v*B[0]):addBrightnessToRGB(W,w.fb.v*B))}}for(I=0;F>I;I+=1)w=o[I].a,"p"in w&&(_=o[I].s,B=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),this._hasMaskedPath?B.length?l.translate(0,w.p.v[1]*B[0],-w.p.v[2]*B[1]):l.translate(0,w.p.v[1]*B,-w.p.v[2]*B):B.length?l.translate(w.p.v[0]*B[0],w.p.v[1]*B[1],-w.p.v[2]*B[2]):l.translate(w.p.v[0]*B,w.p.v[1]*B,-w.p.v[2]*B));if(t.strokeWidthAnim&&(Y=0>z?0:z),t.strokeColorAnim&&(X="rgb("+Math.round(255*H[0])+","+Math.round(255*H[1])+","+Math.round(255*H[2])+")"),t.fillColorAnim&&t.fc&&(J="rgb("+Math.round(255*W[0])+","+Math.round(255*W[1])+","+Math.round(255*W[2])+")"),this._hasMaskedPath){if(l.translate(0,-t.ls),l.translate(0,n[1]*R/100+r,0),h.p.p){D=(v.point[1]-b.point[1])/(v.point[0]-b.point[0]);var at=180*Math.atan(D)/Math.PI;v.point[0]<b.point[0]&&(at+=180),l.rotate(-at*Math.PI/180)}l.translate(O,G,0),P-=n[0]*f[i].an/200,f[i+1]&&U!==f[i+1].ind&&(P+=f[i].an/2,P+=t.tr/1e3*t.s)}else{switch(l.translate(s,r,0),t.ps&&l.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[f[i].line]),0,0);break;case 2:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[f[i].line])/2,0,0)}l.translate(0,-t.ls),l.translate(L,0,0),l.translate(n[0]*f[i].an/200,n[1]*R/100,0),s+=f[i].l+t.tr/1e3*t.s}"html"===p?st=l.toCSS():"svg"===p?st=l.to2dCSS():rt=[l.props[0],l.props[1],l.props[2],l.props[3],l.props[4],l.props[5],l.props[6],l.props[7],l.props[8],l.props[9],l.props[10],l.props[11],l.props[12],l.props[13],l.props[14],l.props[15]],K=j}i>=m?(V=new LetterProps(K,Y,X,J,st,rt),this.renderedLetters.push(V),m+=1,this.lettersChangedFlag=!0):(V=this.renderedLetters[i],this.lettersChangedFlag=V.update(K,Y,X,J,st,rt)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){if(this._elem.globalData.frameId!==this._frameId){this._frameId=this._elem.globalData.frameId;var t,e=this._dynamicProperties.length;for(this.mdf=!1,t=0;e>t;t+=1)this._dynamicProperties[t].getValue(),this.mdf=this._dynamicProperties[t].mdf||this.mdf}},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],LetterProps.prototype.update=function(t,e,s,r,i,a){this.mdf.o=!1,this.mdf.sw=!1,this.mdf.sc=!1,this.mdf.fc=!1,this.mdf.m=!1,this.mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this.mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this.mdf.sw=!0,n=!0),this.sc!==s&&(this.sc=s,this.mdf.sc=!0,n=!0),this.fc!==r&&(this.fc=r,this.mdf.fc=!0,n=!0),this.m!==i&&(this.m=i,this.mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this.mdf.p=!0,n=!0),n},TextProperty.prototype.setCurrentData=function(t){var e=this.currentData;e.ascent=t.ascent,e.boxWidth=t.boxWidth?t.boxWidth:e.boxWidth,e.f=t.f,e.fStyle=t.fStyle,e.fWeight=t.fWeight,e.fc=t.fc,e.j=t.j,e.justifyOffset=t.justifyOffset,e.l=t.l,e.lh=t.lh,e.lineWidths=t.lineWidths,e.ls=t.ls,e.of=t.of,e.s=t.s,e.sc=t.sc,e.sw=t.sw,e.t=t.t,e.tr=t.tr,e.fillColorAnim=t.fillColorAnim||e.fillColorAnim,e.strokeColorAnim=t.strokeColorAnim||e.strokeColorAnim,e.strokeWidthAnim=t.strokeWidthAnim||e.strokeWidthAnim,e.yOffset=t.yOffset,e.__complete=!1},TextProperty.prototype.searchProperty=function(){return this.kf=this.data.d.k.length>1,this.kf},TextProperty.prototype.getValue=function(){this.mdf=!1;var t=this.elem.globalData.frameId;if(t!==this._frameId&&this.kf||this.firstFrame){for(var e,s=this.data.d.k,r=0,i=s.length;i-1>=r&&(e=s[r].s,!(r===i-1||s[r+1].t>t));)r+=1;this.keysIndex!==r&&(e.__complete||this.completeTextData(e),this.setCurrentData(e),this.mdf=this.firstFrame?!1:!0,this.pv=this.v=this.currentData.t,this.keysIndex=r),this._frameId=t}},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,s,r,i,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],m=0,f=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,P=b.fStyle.split(" "),x="normal",S="normal";s=P.length;var C;for(e=0;s>e;e+=1)switch(C=P[e].toLowerCase()){case"italic":S="italic";break;case"bold":x="700";break;case"black":x="900";break;case"medium":x="500";break;case"regular":case"normal":x="400";case"light":case"thin":x="200"}t.fWeight=x,t.fStyle=S,s=t.t.length;var k=t.tr/1e3*t.s;if(t.sz){var A=t.sz[0],M=-1;for(e=0;s>e;e+=1)r=!1," "===t.t.charAt(e)?M=e:13===t.t.charCodeAt(e)&&(g=0,r=!0),h.chars?(o=h.getCharData(t.t.charAt(e),b.fStyle,b.fFamily),E=r?0:o.w*t.s/100):E=h.measureText(t.t.charAt(e),t.f,t.s),g+E>A&&" "!==t.t.charAt(e)?(-1===M?s+=1:e=M,t.t=t.t.substr(0,e)+"\r"+t.t.substr(e===M?e+1:e),M=-1,g=0):(g+=E,g+=k);s=t.t.length}g=-k,E=0;var D,T=0;for(e=0;s>e;e+=1)if(r=!1,D=t.t.charAt(e)," "===D?i="\xa0":13===D.charCodeAt(0)?(T=0,y.push(g),v=g>v?g:v,g=-2*k,i="",r=!0,u+=1):i=t.t.charAt(e),h.chars?(o=h.getCharData(D,b.fStyle,h.getFontByName(t.f).fFamily),E=r?0:o.w*t.s/100):E=h.measureText(i,t.f,t.s)," "===D?T+=E+k:(g+=E+k+T,T=0),p.push({l:E,an:E,add:c,n:r,anIndexes:[],val:i,line:u}),2==f){if(c+=E,""==i||"\xa0"==i||e==s-1){for((""==i||"\xa0"==i)&&(c-=E);e>=d;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;m+=1,c=0}}else if(3==f){if(c+=E,""==i||e==s-1){for(""==i&&(c-=E);e>=d;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;c=0,m+=1}}else p[m].ind=m,p[m].extra=0,m+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var w,_,I=l.a;n=I.length;var F,V,R=[];for(a=0;n>a;a+=1){for(w=I[a],w.a.sc&&(t.strokeColorAnim=!0),w.a.sw&&(t.strokeWidthAnim=!0),
(w.a.fc||w.a.fh||w.a.fs||w.a.fb)&&(t.fillColorAnim=!0),V=0,F=w.s.b,e=0;s>e;e+=1)_=p[e],_.anIndexes[a]=V,(1==F&&""!=_.val||2==F&&""!=_.val&&"\xa0"!=_.val||3==F&&(_.n||"\xa0"==_.val||e==s-1)||4==F&&(_.n||e==s-1))&&(1===w.s.rn&&R.push(V),V+=1);l.a[a].s.totalChars=V;var N,B=-1;if(1===w.s.rn)for(e=0;s>e;e+=1)_=p[e],B!=_.anIndexes[a]&&(B=_.anIndexes[a],N=R.splice(Math.floor(Math.random()*R.length),1)[0]),_.anIndexes[a]=N}t.yOffset=t.lh||1.2*t.s,t.ls=t.ls||0,t.ascent=b.ascent*t.s/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var s=this.data.d.k[e].s;s.__complete=!1,s.t=t.t,this.keysIndex=-1,this.firstFrame=!0,this.getValue()};var pooling=function(){function t(t){return t.concat(Array.apply(null,{length:t.length}))}return{"double":t}}(),point_pool=function(){function t(){var t;return r?(r-=1,t=a[r]):t=[.1,.1],t}function e(t){r===i&&(a=pooling["double"](a),i=2*i),a[r]=t,r+=1}var s={newPoint:t,release:e},r=0,i=8,a=Array.apply(null,{length:i});return s}(),shape_pool=function(){function t(){var t;return a?(a-=1,t=o[a]):t=new ShapePath,t}function e(t){a===n&&(o=pooling["double"](o),n=2*n);var e,s=t._length;for(e=0;s>e;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1,o[a]=t,a+=1}function s(t,s){for(;s--;)e(t[s])}function r(e,s){var r,i=void 0===e._length?e.v.length:e._length,a=t();a.setLength(i),a.c=e.c;var n;for(r=0;i>r;r+=1)s?(n=s.applyToPointArray(e.v[r][0],e.v[r][1],0,2),a.setXYAt(n[0],n[1],"v",r),point_pool.release(n),n=s.applyToPointArray(e.o[r][0],e.o[r][1],0,2),a.setXYAt(n[0],n[1],"o",r),point_pool.release(n),n=s.applyToPointArray(e.i[r][0],e.i[r][1],0,2),a.setXYAt(n[0],n[1],"i",r),point_pool.release(n)):a.setTripleAt(e.v[r][0],e.v[r][1],e.o[r][0],e.o[r][1],e.i[r][0],e.i[r][1],r);return a}var i={clone:r,newShape:t,release:e,releaseArray:s},a=0,n=4,o=Array.apply(null,{length:n});return i}(),shapeCollection_pool=function(){function t(){var t;return i?(i-=1,t=n[i]):t=new ShapeCollection,t}function e(t){var e,s=t._length;for(e=0;s>e;e+=1)shape_pool.release(t.shapes[e]);t._length=0,i===a&&(n=pooling["double"](n),a=2*a),n[i]=t,i+=1}function s(t,s){e(t),i===a&&(n=pooling["double"](n),a=2*a),n[i]=t,i+=1}var r={newShapeCollection:t,release:e,clone:s},i=0,a=4,n=Array.apply(null,{length:a});return r}();BaseRenderer.prototype.checkLayers=function(t){var e,s,r=this.layers.length;for(this.completeLayers=!0,e=r-1;e>=0;e--)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t);case 99:return null}return this.createBase(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;e>t;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s,r=t.length,i=this.layers.length;for(e=0;r>e;e+=1)for(s=0;i>s;){if(this.layers[s].id==t[e].id){this.layers[s]=t[e];break}s+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,s){s=s||[];for(var r=this.elements,i=this.layers,a=0,n=i.length;n>a;)i[a].ind==e&&(r[a]&&r[a]!==!0?void 0!==i[a].parent?(s.push(r[a]),r[a]._isParent=!0,this.buildElementParenting(t,i[a].parent,s)):(s.push(r[a]),r[a]._isParent=!0,t.setHierarchy(s)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},extendPrototype(BaseRenderer,SVGRenderer),SVGRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new IShapeElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new ICompElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.layerElement=document.createElementNS(svgNS,"svg"),this.layerElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.layerElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.layerElement.setAttribute("width",t.w),this.layerElement.setAttribute("height",t.h),this.layerElement.style.width="100%",this.layerElement.style.height="100%"),this.renderConfig.className&&this.layerElement.setAttribute("class",this.renderConfig.className),this.layerElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.layerElement);var e=document.createElementNS(svgNS,"defs");this.globalData.defs=e,this.layerElement.appendChild(e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.frameId=0,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h},this.data=t,this.globalData.frameRate=t.fr;var s=document.createElementNS(svgNS,"clipPath"),r=document.createElementNS(svgNS,"rect");r.setAttribute("width",t.w),r.setAttribute("height",t.h),r.setAttribute("x",0),r.setAttribute("y",0);var i="animationMask_"+randomString(10);s.setAttribute("id",i),s.appendChild(r);var a=document.createElementNS(svgNS,"g");a.setAttribute("clip-path","url("+locationHref+"#"+i+")"),this.layerElement.appendChild(a),e.appendChild(s),this.layerElement=a,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.elements=Array.apply(null,{length:t.layers.length})},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;e>t;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var s=this.createItem(this.layers[t]);e[t]=s,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt&&(this.elements[t-1]&&this.elements[t-1]!==!0?s.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(s)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;s>e;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!=t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var r,i=0;e>i;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(s,r):this.layerElement.appendChild(s)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},SVGRenderer.prototype.searchExtraCompositions=function(t){var e,s=t.length,r=document.createElementNS(svgNS,"g");for(e=0;s>e;e+=1)if(t[e].xt){var i=this.createComp(t[e],r,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.prepareFrame=function(){var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue()},MaskElement.prototype.renderFrame=function(t){var e,s=this.masksProperties.length;for(e=0;s>e;e++)if((this.viewData[e].prop.mdf||this.firstFrame)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op.mdf||this.firstFrame)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp.mdf||this.firstFrame)&&(this.viewData[e].invRect.setAttribute("x",-t.props[12]),this.viewData[e].invRect.setAttribute("y",-t.props[13])),this.storedData[e].x&&(this.storedData[e].x.mdf||this.firstFrame))){var r=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),r.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}this.firstFrame=!1},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,s){var r,i,a=" M"+e.v[0][0]+","+e.v[0][1];for(i=e._length,r=1;i>r;r+=1)a+=" C"+bm_rnd(e.o[r-1][0])+","+bm_rnd(e.o[r-1][1])+" "+bm_rnd(e.i[r][0])+","+bm_rnd(e.i[r][1])+" "+bm_rnd(e.v[r][0])+","+bm_rnd(e.v[r][1]);e.c&&i>1&&(a+=" C"+bm_rnd(e.o[r-1][0])+","+bm_rnd(e.o[r-1][1])+" "+bm_rnd(e.i[0][0])+","+bm_rnd(e.i[0][1])+" "+bm_rnd(e.v[0][0])+","+bm_rnd(e.v[0][1])),s.lastPath!==a&&(s.elem&&(e.c?t.inv?s.elem.setAttribute("d",this.solidPath+a):s.elem.setAttribute("d",a):s.elem.setAttribute("d","")),s.lastPath=a)},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},BaseElement.prototype.checkMasks=function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;e>t;){if("n"!==this.data.masksProperties[t].mode&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},BaseElement.prototype.checkParenting=function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent)},BaseElement.prototype.prepareFrame=function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isVisible!==!0&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!0,this.firstFrame=!0,this.data.hasMask&&(this.maskManager.firstFrame=!0)):this.isVisible!==!1&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!1);var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)(this.isVisible||this._isParent&&"transform"===this.dynamicProperties[e].type)&&(this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.elemMdf=!0,this.globalData.mdf=!0));return this.data.hasMask&&this.isVisible&&this.maskManager.prepareFrame(t*this.data.sr),this.currentFrameNum=t*this.data.sr,this.isVisible},BaseElement.prototype.globalToLocal=function(t){var e=[];e.push(this.finalTransform);for(var s=!0,r=this.comp;s;)r.finalTransform?(r.data.hasMask&&e.splice(0,0,r.finalTransform),r=r.comp):s=!1;var i,a,n=e.length;for(i=0;n>i;i+=1)a=e[i].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},BaseElement.prototype.initExpressions=function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?this.layerInterface.shapeInterface=ShapeExpressionInterface.createShapeInterface(this.shapesData,this.itemsData,this.layerInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this))},BaseElement.prototype.setBlendMode=function(){var t="";switch(this.data.bm){case 1:t="multiply";break;case 2:t="screen";break;case 3:t="overlay";break;case 4:t="darken";break;case 5:t="lighten";break;case 6:t="color-dodge";break;case 7:t="color-burn";break;case 8:t="hard-light";break;case 9:t="soft-light";break;case 10:t="difference";break;case 11:t="exclusion";break;case 12:t="hue";break;case 13:t="saturation";break;case 14:t="color";break;case 15:t="luminosity"}var e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},BaseElement.prototype.init=function(){this.data.sr||(this.data.sr=1),this.dynamicProperties=this.dynamicProperties||[],this.data.ef&&(this.effects=new EffectsManager(this.data,this,this.dynamicProperties)),this.hidden=!1,this.firstFrame=!0,this.isVisible=!1,this._isParent=!1,this.currentFrameNum=-99999,this.lastNum=-99999,this.data.ks&&(this.finalTransform={mProp:PropertyFactory.getProp(this,this.data.ks,2,null,this.dynamicProperties),matMdf:!1,opMdf:!1,mat:new Matrix,opacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.finalTransform.op=this.finalTransform.mProp.o,this.transform=this.finalTransform.mProp,11!==this.data.ty&&this.createElements(),this.data.hasMask&&this.addMasks(this.data)),this.elemMdf=!1},BaseElement.prototype.getType=function(){return this.type},BaseElement.prototype.resetHierarchy=function(){this.hierarchy?this.hierarchy.length=0:this.hierarchy=[]},BaseElement.prototype.getHierarchy=function(){return this.hierarchy||(this.hierarchy=[]),this.hierarchy},BaseElement.prototype.setHierarchy=function(t){this.hierarchy=t},BaseElement.prototype.getLayerSize=function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}},BaseElement.prototype.hide=function(){},BaseElement.prototype.sourceRectAtTime=function(){return{top:0,left:0,width:100,height:100}},BaseElement.prototype.mHelper=new Matrix,createElement(BaseElement,SVGBaseElement),SVGBaseElement.prototype.createElements=function(){this.layerElement=document.createElementNS(svgNS,"g"),this.transformedElement=this.layerElement,this.data.hasMask&&(this.maskedElement=this.layerElement);var t=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var e=document.createElementNS(svgNS,"mask");if(e.setAttribute("id",this.layerId),e.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),e.appendChild(this.layerElement),t=e,this.globalData.defs.appendChild(e),!featureSupport.maskType&&1==this.data.td){e.setAttribute("mask-type","luminance");var s=randomString(10),r=filtersFactory.createFilter(s);this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=document.createElementNS(svgNS,"g");i.appendChild(this.layerElement),t=i,e.appendChild(i),i.setAttribute("filter","url("+locationHref+"#"+s+")")}}else if(2==this.data.td){var a=document.createElementNS(svgNS,"mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=document.createElementNS(svgNS,"g");a.appendChild(n);var s=randomString(10),r=filtersFactory.createFilter(s),o=document.createElementNS(svgNS,"feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),r.appendChild(o),this.globalData.defs.appendChild(r);var h=document.createElementNS(svgNS,"rect");if(h.setAttribute("width",this.comp.data.w),h.setAttribute("height",this.comp.data.h),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("fill","#ffffff"),h.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+s+")"),n.appendChild(h),n.appendChild(this.layerElement),t=n,!featureSupport.maskType){a.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=document.createElementNS(svgNS,"g");n.appendChild(h),i.appendChild(this.layerElement),t=i,n.appendChild(i)}this.globalData.defs.appendChild(a)}}else(this.data.hasMask||this.data.tt)&&this.data.tt?(this.matteElement=document.createElementNS(svgNS,"g"),this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(!this.data.ln&&!this.data.cl||4!==this.data.ty&&0!==this.data.ty||(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)),0===this.data.ty){var l=document.createElementNS(svgNS,"clipPath"),p=document.createElementNS(svgNS,"path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m="cp_"+randomString(8);if(l.setAttribute("id",m),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var f=document.createElementNS(svgNS,"g");f.setAttribute("clip-path","url("+locationHref+"#"+m+")"),f.appendChild(this.layerElement),this.transformedElement=f,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+m+")")}0!==this.data.bm&&this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.data.ef&&(this.effectsManager=new SVGEffects(this)),this.checkParenting()},SVGBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,SVGBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty||this.data.hd||!this.isVisible)return!1;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.firstFrame||this.finalTransform.op.mdf,this.finalTransform.matMdf=this.firstFrame||this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,s=this.finalTransform.mat;if(this.hierarchy){var r=0,i=this.hierarchy.length;if(!this.finalTransform.matMdf)for(;i>r;){if(this.hierarchy[r].finalTransform.mProp.mdf){this.finalTransform.matMdf=!0;break}r+=1}if(this.finalTransform.matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&(s=this.finalTransform.mProp.v);return this.finalTransform.matMdf&&this.layerElement&&this.transformedElement.setAttribute("transform",s.to2dCSS()),this.finalTransform.opMdf&&this.layerElement&&(this.finalTransform.op.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.hidden&&this.isTransparent&&(this.isTransparent=!1,this.show()),this.transformedElement.setAttribute("opacity",this.finalTransform.op.v)),this.data.hasMask&&this.maskManager.renderFrame(s),this.effectsManager&&this.effectsManager.renderFrame(this.firstFrame),this.isVisible},SVGBaseElement.prototype.destroy=function(){this.layerElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&this.maskManager.destroy()},SVGBaseElement.prototype.getBaseElement=function(){return this.baseElement},SVGBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")},SVGBaseElement.prototype.hide=function(){this.hidden||(this.layerElement.style.display="none",this.hidden=!0)},SVGBaseElement.prototype.show=function(){this.isVisible&&!this.isTransparent&&(this.hidden=!1,this.layerElement.style.display="block")},createElement(SVGBaseElement,IShapeElement),IShapeElement.prototype.identityMatrix=new Matrix,IShapeElement.prototype.lcEnum={1:"butt",2:"round",3:"square"},IShapeElement.prototype.ljEnum={1:"miter",2:"round",3:"butt"},IShapeElement.prototype.searchProcessedElement=function(t){for(var e=this.processedElements.length;e;)if(e-=1,this.processedElements[e].elem===t)return this.processedElements[e].pos;return 0},IShapeElement.prototype.addProcessedElement=function(t,e){for(var s=this.processedElements.length;s;)if(s-=1,this.processedElements[s].elem===t){this.processedElements[s].pos=e;break}0===s&&this.processedElements.push({elem:t,pos:e})},IShapeElement.prototype.buildExpressionInterface=function(){},IShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0),(!this.data.hd||this.data.td)&&styleUnselectableDiv(this.layerElement)},IShapeElement.prototype.setGradientData=function(t,e,s){var r,i="gr_"+randomString(10);r=1===e.t?document.createElementNS(svgNS,"linearGradient"):document.createElementNS(svgNS,"radialGradient"),r.setAttribute("id",i),r.setAttribute("spreadMethod","pad"),r.setAttribute("gradientUnits","userSpaceOnUse");var a,n,o,h=[];for(o=4*e.g.p,n=0;o>n;n+=4)a=document.createElementNS(svgNS,"stop"),r.appendChild(a),h.push(a);t.setAttribute("gf"===e.ty?"fill":"stroke","url(#"+i+")"),this.globalData.defs.appendChild(r),s.gf=r,s.cst=h},IShapeElement.prototype.setGradientOpacity=function(t,e,s){if(t.g.k.k[0].s&&t.g.k.k[0].s.length>4*t.g.p||t.g.k.k.length>4*t.g.p){var r,i,a,n,o=document.createElementNS(svgNS,"mask"),h=document.createElementNS(svgNS,"path");o.appendChild(h);var l="op_"+randomString(10),p="mk_"+randomString(10);o.setAttribute("id",p),r=1===t.t?document.createElementNS(svgNS,"linearGradient"):document.createElementNS(svgNS,"radialGradient"),r.setAttribute("id",l),r.setAttribute("spreadMethod","pad"),r.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var m=[];for(a=4*t.g.p;n>a;a+=2)i=document.createElementNS(svgNS,"stop"),i.setAttribute("stop-color","rgb(255,255,255)"),r.appendChild(i),m.push(i);return h.setAttribute("gf"===t.ty?"fill":"stroke","url(#"+l+")"),this.globalData.defs.appendChild(r),this.globalData.defs.appendChild(o),e.of=r,e.ost=m,s.msElem=h,p}},IShapeElement.prototype.createStyleElement=function(t,e,s){var r={},i={data:t,type:t.ty,d:"",ld:"",lvl:e,mdf:!1,closed:!1},a=document.createElementNS(svgNS,"path");if(r.o=PropertyFactory.getProp(this,t.o,0,.01,s),("st"==t.ty||"gs"==t.ty)&&(a.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),a.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),a.setAttribute("fill-opacity","0"),1==t.lj&&a.setAttribute("stroke-miterlimit",t.ml),r.w=PropertyFactory.getProp(this,t.w,0,null,s),t.d)){var n=PropertyFactory.getDashProp(this,t.d,"svg",s);n.k||(a.setAttribute("stroke-dasharray",n.dasharray),a.setAttribute("stroke-dashoffset",n.dashoffset)),r.d=n}if("fl"==t.ty||"st"==t.ty)r.c=PropertyFactory.getProp(this,t.c,1,255,s);else{r.g=PropertyFactory.getGradientProp(this,t.g,s),2==t.t&&(r.h=PropertyFactory.getProp(this,t.h,0,.01,s),r.a=PropertyFactory.getProp(this,t.a,0,degToRads,s)),r.s=PropertyFactory.getProp(this,t.s,1,null,s),r.e=PropertyFactory.getProp(this,t.e,1,null,s),this.setGradientData(a,t,r,i);var o=this.setGradientOpacity(t,r,i);o&&a.setAttribute("mask","url(#"+o+")")}return r.elem=a,2===t.r&&a.setAttribute("fill-rule","evenodd"),t.ln&&a.setAttribute("id",t.ln),t.cl&&a.setAttribute("class",t.cl),i.pElem=a,this.stylesList.push(i),r.style=i,r},IShapeElement.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]},s=document.createElementNS(svgNS,"g");return e.gr=s,t.ln&&e.gr.setAttribute("id",t.ln),e},IShapeElement.prototype.createTransformElement=function(t,e){var s={transform:{op:PropertyFactory.getProp(this,t.o,0,.01,e),mProps:PropertyFactory.getProp(this,t,2,null,e)},elements:[]};return s},IShapeElement.prototype.createShapeElement=function(t,e,s,r){var i={elements:[],caches:[],styles:[],transformers:e,lStr:""},a=4;return"rc"==t.ty?a=5:"el"==t.ty?a=6:"sr"==t.ty&&(a=7),i.sh=ShapePropertyFactory.getShapeProp(this,t,a,r),i.lvl=s,this.shapes.push(i.sh),this.addShapeToModifiers(i),i};var cont=0;IShapeElement.prototype.setElementStyles=function(){var t,e=this.stylesList.length,s=[];for(t=0;e>t;t+=1)this.stylesList[t].closed||s.push(this.stylesList[t]);return s},IShapeElement.prototype.reloadShapes=function(){this.firstFrame=!0;var t,e=this.itemsData.length;for(t=0;e>t;t+=1)this.prevViewData[t]=this.itemsData[t];this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0);var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},IShapeElement.prototype.searchShapes=function(t,e,s,r,i,a,n,o){var h,l,p,m,f,c,d=[].concat(n),u=t.length-1,y=[],g=[];for(h=u;h>=0;h-=1){if(c=this.searchProcessedElement(t[h]),c?e[h]=s[c-1]:t[h]._render=o,"fl"==t[h].ty||"st"==t[h].ty||"gf"==t[h].ty||"gs"==t[h].ty)c?e[h].style.closed=!1:e[h]=this.createStyleElement(t[h],a,i),t[h]._render&&r.appendChild(e[h].elem),y.push(e[h].style);else if("gr"==t[h].ty){if(c)for(p=e[h].it.length,l=0;p>l;l+=1)e[h].prevViewData[l]=e[h].it[l];else e[h]=this.createGroupElement(t[h]);this.searchShapes(t[h].it,e[h].it,e[h].prevViewData,e[h].gr,i,a+1,d,o),t[h]._render&&r.appendChild(e[h].gr)}else"tr"==t[h].ty?(c||(e[h]=this.createTransformElement(t[h],i)),m=e[h].transform,d.push(m)):"sh"==t[h].ty||"rc"==t[h].ty||"el"==t[h].ty||"sr"==t[h].ty?(c||(e[h]=this.createShapeElement(t[h],d,a,i)),e[h].elements=this.setElementStyles()):"tm"==t[h].ty||"rd"==t[h].ty||"ms"==t[h].ty?(c?(f=e[h],f.closed=!1):(f=ShapeModifiers.getModifier(t[h].ty),f.init(this,t[h],i),e[h]=f,this.shapeModifiers.push(f)),g.push(f)):"rp"==t[h].ty&&(c?(f=e[h],f.closed=!0):(f=ShapeModifiers.getModifier(t[h].ty),e[h]=f,f.init(this,t,h,e,i),this.shapeModifiers.push(f),o=!1),g.push(f));this.addProcessedElement(t[h],h+1)}for(u=y.length,h=0;u>h;h+=1)y[h].closed=!0;for(u=g.length,h=0;u>h;h+=1)g[h].closed=!0},IShapeElement.prototype.addShapeToModifiers=function(t){var e,s=this.shapeModifiers.length;for(e=0;s>e;e+=1)this.shapeModifiers[e].addShape(t)},IShapeElement.prototype.renderModifiers=function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;e>t;t+=1)this.shapes[t].reset();for(e=this.shapeModifiers.length,t=e-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this.firstFrame)}},IShapeElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();this.hidden&&(this.layerElement.style.display="block",this.hidden=!1),this.renderModifiers();var s,r=this.stylesList.length;for(s=0;r>s;s+=1)this.stylesList[s].d="",this.stylesList[s].mdf=!1;for(this.renderShape(this.shapesData,this.itemsData,null),s=0;r>s;s+=1)"0"===this.stylesList[s].ld&&(this.stylesList[s].ld="1",this.stylesList[s].pElem.style.display="block"),(this.stylesList[s].mdf||this.firstFrame)&&(this.stylesList[s].pElem.setAttribute("d",this.stylesList[s].d),this.stylesList[s].msElem&&this.stylesList[s].msElem.setAttribute("d",this.stylesList[s].d));this.firstFrame&&(this.firstFrame=!1)},IShapeElement.prototype.hide=function(){if(!this.hidden){this.layerElement.style.display="none";var t,e=this.stylesList.length;for(t=e-1;t>=0;t-=1)"0"!==this.stylesList[t].ld&&(this.stylesList[t].ld="0",this.stylesList[t].pElem.style.display="none",this.stylesList[t].pElem.parentNode&&(this.stylesList[t].parent=this.stylesList[t].pElem.parentNode));this.hidden=!0}},IShapeElement.prototype.renderShape=function(t,e,s){var r,i,a=t.length-1;for(r=a;r>=0;r-=1)i=t[r].ty,"tr"==i?((this.firstFrame||e[r].transform.op.mdf&&s)&&s.setAttribute("opacity",e[r].transform.op.v),(this.firstFrame||e[r].transform.mProps.mdf&&s)&&s.setAttribute("transform",e[r].transform.mProps.v.to2dCSS())):"sh"==i||"el"==i||"rc"==i||"sr"==i?this.renderPath(t[r],e[r]):"fl"==i?this.renderFill(t[r],e[r]):"gf"==i?this.renderGradient(t[r],e[r]):"gs"==i?(this.renderGradient(t[r],e[r]),this.renderStroke(t[r],e[r])):"st"==i?this.renderStroke(t[r],e[r]):"gr"==i&&this.renderShape(t[r].it,e[r].it,e[r].gr)},IShapeElement.prototype.buildShapeString=function(t,e,s,r){var i,a="";for(i=1;e>i;i+=1)1===i&&(a+=" M"+r.applyToPointStringified(t.v[0][0],t.v[0][1])),a+=" C"+r.applyToPointStringified(t.o[i-1][0],t.o[i-1][1])+" "+r.applyToPointStringified(t.i[i][0],t.i[i][1])+" "+r.applyToPointStringified(t.v[i][0],t.v[i][1]);return 1===e&&(a+=" M"+r.applyToPointStringified(t.v[0][0],t.v[0][1])),s&&e&&(a+=" C"+r.applyToPointStringified(t.o[i-1][0],t.o[i-1][1])+" "+r.applyToPointStringified(t.i[0][0],t.i[0][1])+" "+r.applyToPointStringified(t.v[0][0],t.v[0][1]),a+="z"),a},IShapeElement.prototype.renderPath=function(t,e){var s,r,i,a,n,o,h=e.elements.length,l=e.lvl;if(t._render)for(o=0;h>o;o+=1)if(e.elements[o].data._render){a=e.sh.mdf||this.firstFrame,i="M0 0";var p=e.sh.paths;if(r=p._length,e.elements[o].lvl<l){for(var m,f=this.mHelper.reset(),c=l-e.elements[o].lvl,d=e.transformers.length-1;c>0;)a=e.transformers[d].mProps.mdf||a,m=e.transformers[d].mProps.v.props,f.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),c--,d--;if(a){for(s=0;r>s;s+=1)n=p.shapes[s],n&&n._length&&(i+=this.buildShapeString(n,n._length,n.c,f));e.caches[o]=i}else i=e.caches[o]}else if(a){for(s=0;r>s;s+=1)n=p.shapes[s],n&&n._length&&(i+=this.buildShapeString(n,n._length,n.c,this.identityMatrix));e.caches[o]=i}else i=e.caches[o];e.elements[o].d+=i,e.elements[o].mdf=a||e.elements[o].mdf}else e.elements[o].mdf=!0},IShapeElement.prototype.renderFill=function(t,e){var s=e.style;(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("fill-opacity",e.o.v)},IShapeElement.prototype.renderGradient=function(t,e){var s=e.gf,r=e.of,i=e.s.v,a=e.e.v;if(e.o.mdf||this.firstFrame){var n="gf"===t.ty?"fill-opacity":"stroke-opacity";e.elem.setAttribute(n,e.o.v)}if(e.s.mdf||this.firstFrame){var o=1===t.t?"x1":"cx",h="x1"===o?"y1":"cy";s.setAttribute(o,i[0]),s.setAttribute(h,i[1]),r&&(r.setAttribute(o,i[0]),r.setAttribute(h,i[1]))}var l,p,m,f;if(e.g.cmdf||this.firstFrame){l=e.cst;var c=e.g.c;for(m=l.length,p=0;m>p;p+=1)f=l[p],f.setAttribute("offset",c[4*p]+"%"),f.setAttribute("stop-color","rgb("+c[4*p+1]+","+c[4*p+2]+","+c[4*p+3]+")")}if(r&&(e.g.omdf||this.firstFrame)){l=e.ost;var d=e.g.o;for(m=l.length,p=0;m>p;p+=1)f=l[p],f.setAttribute("offset",d[2*p]+"%"),f.setAttribute("stop-opacity",d[2*p+1])}if(1===t.t)(e.e.mdf||this.firstFrame)&&(s.setAttribute("x2",a[0]),s.setAttribute("y2",a[1]),r&&(r.setAttribute("x2",a[0]),r.setAttribute("y2",a[1])));else{var u;if((e.s.mdf||e.e.mdf||this.firstFrame)&&(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)),s.setAttribute("r",u),r&&r.setAttribute("r",u)),e.e.mdf||e.h.mdf||e.a.mdf||this.firstFrame){
u||(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)));var y=Math.atan2(a[1]-i[1],a[0]-i[0]),g=e.h.v>=1?.99:e.h.v<=-1?-.99:e.h.v,v=u*g,b=Math.cos(y+e.a.v)*v+i[0],E=Math.sin(y+e.a.v)*v+i[1];s.setAttribute("fx",b),s.setAttribute("fy",E),r&&(r.setAttribute("fx",b),r.setAttribute("fy",E))}}},IShapeElement.prototype.renderStroke=function(t,e){var s=e.style,r=e.d;r&&r.k&&(r.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-dasharray",r.dasharray),s.pElem.setAttribute("stroke-dashoffset",r.dashoffset)),e.c&&(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke-opacity",e.o.v),(e.w.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-width",e.w.v),s.msElem&&s.msElem.setAttribute("stroke-width",e.w.v))},IShapeElement.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.shapeData=null,this.itemsData=null,this.parentContainer=null,this.placeholder=null},ITextElement.prototype.init=function(){this.lettersChangedFlag=!0,this.dynamicProperties=this.dynamicProperties||[],this.textAnimator=new TextAnimatorProperty(this.data.t,this.renderType,this),this.textProperty=new TextProperty(this,this.data.t,this.dynamicProperties),this._parent.init.call(this),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._parent.prepareFrame.call(this,t),(this.textProperty.mdf||this.textProperty.firstFrame)&&(this.buildNewText(),this.textProperty.firstFrame=!1)},ITextElement.prototype.createPathShape=function(t,e){var s,r,i=e.length,a="";for(s=0;i>s;s+=1)r=e[s].ks.k,a+=this.buildShapeString(r,r.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,s,r,i){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0)}e.translate(r,i,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.buildShapeString=IShapeElement.prototype.buildShapeString,ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){this._parent.destroy.call(this._parent)},createElement(SVGBaseElement,SVGTextElement),extendPrototype(ITextElement,SVGTextElement),SVGTextElement.prototype.createElements=function(){this._parent.createElements.call(this),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=document.createElementNS(svgNS,"text"))},SVGTextElement.prototype.buildNewText=function(){var t,e,s=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:s?s.l.length:0}),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.s);var r=this.globalData.fontManager.getFontByName(s.f);if(r.fClass)this.layerElement.setAttribute("class",r.fClass);else{this.layerElement.setAttribute("font-family",r.fFamily);var i=s.fWeight,a=s.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",i)}var n=s.l||[],o=this.globalData.fontManager.chars;if(e=n.length){var h,l,p=this.mHelper,m="",f=this.data.singleShape,c=0,d=0,u=!0,y=s.tr/1e3*s.s;if(f&&!o){var g=this.textContainer,v="";switch(s.j){case 1:v="end";break;case 2:v="middle";break;case 2:v="start"}g.setAttribute("text-anchor",v),g.setAttribute("letter-spacing",y);var b=s.t.split(String.fromCharCode(13));e=b.length;var d=s.ps?s.ps[1]+s.ascent:0;for(t=0;e>t;t+=1)h=this.textSpans[t]||document.createElementNS(svgNS,"tspan"),h.textContent=b[t],h.setAttribute("x",0),h.setAttribute("y",d),h.style.display="inherit",g.appendChild(h),this.textSpans[t]=h,d+=s.lh;this.layerElement.appendChild(g)}else{var E,P,x=this.textSpans.length;for(t=0;e>t;t+=1)o&&f&&0!==t||(h=x>t?this.textSpans[t]:document.createElementNS(svgNS,o?"path":"text"),t>=x&&(h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=h,this.layerElement.appendChild(h)),h.style.display="inherit"),p.reset(),o?(p.scale(s.s/100,s.s/100),f&&(n[t].n&&(c=-y,d+=s.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(s,p,n[t].line,c,d),c+=n[t].l||0,c+=y),P=this.globalData.fontManager.getCharData(s.t.charAt(t),r.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily),E=P&&P.data||{},l=E.shapes?E.shapes[0].it:[],f?m+=this.createPathShape(p,l):h.setAttribute("d",this.createPathShape(p,l))):(h.textContent=n[t].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&h.setAttribute("d",m)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0}},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderLetters(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderLetters=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,r=this.textProperty.currentData.l;e=r.length;var i,a;for(t=0;e>t;t+=1)r[t].n||(i=s[t],a=this.textSpans[t],i.mdf.m&&a.setAttribute("transform",i.m),i.mdf.o&&a.setAttribute("opacity",i.o),i.mdf.sw&&a.setAttribute("stroke-width",i.sw),i.mdf.sc&&a.setAttribute("stroke",i.sc),i.mdf.fc&&a.setAttribute("fill",i.fc))}},SVGTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),this.firstFrame&&(this.firstFrame=!1),void this.renderLetters())},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",s[0]-e[0]+" 0 0 0 "+e[0]+" "+(s[1]-e[1])+" 0 0 0 "+e[1]+" "+(s[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[2].p.v,s=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+s+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,s,r,i=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(r=this.elem.maskManager.masksProperties.length,s=0):(s=this.filterManager.effectElements[0].p.v-1,r=s+1),e=document.createElementNS(svgNS,"g"),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1),s;r>s;s+=1)t=document.createElementNS(svgNS,"path"),e.appendChild(t),this.paths.push({p:t,m:s});if(3===this.filterManager.effectElements[10].p.v){var a=document.createElementNS(svgNS,"mask"),n="stms_"+randomString(10);a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=document.createElementNS(svgNS,"g");o.setAttribute("mask","url("+locationHref+"#"+n+")"),i[0]&&o.appendChild(i[0]),this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(var i=this.elem.layerElement.children||this.elem.layerElement.childNodes;i.length;)this.elem.layerElement.removeChild(i[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,s,r,i=this.paths.length;for(e=0;i>e;e+=1)if(s=this.elem.maskManager.viewData[this.paths[e].m],r=this.paths[e].p,(t||this.filterManager.mdf||s.prop.mdf)&&r.setAttribute("d",s.lastPath),t||this.filterManager.effectElements[9].p.mdf||this.filterManager.effectElements[4].p.mdf||this.filterManager.effectElements[7].p.mdf||this.filterManager.effectElements[8].p.mdf||s.prop.mdf){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=r.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;f>l;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;r.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p.mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p.mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p.mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v,i=r[0]+" "+s[0]+" "+e[0],a=r[1]+" "+s[1]+" "+e[1],n=r[2]+" "+s[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",i),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var s=document.createElementNS(svgNS,t);return s.setAttribute("type","table"),e.appendChild(s),s},SVGProLevelsFilter.prototype.getTableValue=function(t,e,s,r,i){for(var a,n,o=0,h=256,l=Math.min(t,e),p=Math.max(t,e),m=Array.call(null,{length:h}),f=0,c=i-r,d=e-t;256>=o;)a=o/256,n=l>=a?0>d?i:r:a>=p?0>d?r:i:r+c*Math.pow((a-t)/d,1/s),m[f++]=n,o+=256/(h-1);return m.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e,s=this.filterManager.effectElements;this.feFuncRComposed&&(t||s[2].p.mdf||s[3].p.mdf||s[4].p.mdf||s[5].p.mdf||s[6].p.mdf)&&(e=this.getTableValue(s[2].p.v,s[3].p.v,s[4].p.v,s[5].p.v,s[6].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||s[9].p.mdf||s[10].p.mdf||s[11].p.mdf||s[12].p.mdf||s[13].p.mdf)&&(e=this.getTableValue(s[9].p.v,s[10].p.v,s[11].p.v,s[12].p.v,s[13].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||s[16].p.mdf||s[17].p.mdf||s[18].p.mdf||s[19].p.mdf||s[20].p.mdf)&&(e=this.getTableValue(s[16].p.v,s[17].p.v,s[18].p.v,s[19].p.v,s[20].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||s[23].p.mdf||s[24].p.mdf||s[25].p.mdf||s[26].p.mdf||s[27].p.mdf)&&(e=this.getTableValue(s[23].p.v,s[24].p.v,s[25].p.v,s[26].p.v,s[27].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||s[30].p.mdf||s[31].p.mdf||s[32].p.mdf||s[33].p.mdf||s[34].p.mdf)&&(e=this.getTableValue(s[30].p.v,s[31].p.v,s[32].p.v,s[33].p.v,s[34].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){if((t||this.filterManager.effectElements[4].p.mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p.mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p.mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p.mdf||this.filterManager.effectElements[3].p.mdf){var s=this.filterManager.effectElements[3].p.v,r=(this.filterManager.effectElements[2].p.v-90)*degToRads,i=s*Math.cos(r),a=s*Math.sin(r);this.feOffset.setAttribute("dx",i),this.feOffset.setAttribute("dy",a)}}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){var s=document.createElementNS(svgNS,"mask");s.setAttribute("id",e.layerId),s.setAttribute("mask-type","alpha"),s.appendChild(e.layerElement),t.setMatte(e.layerId),e.data.hd=!1;var r=t.globalData.defs;r.appendChild(s)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=0,s=this.elem.comp.elements.length;s>e;)this.elem.comp.elements[e].data.ind===t&&this.setElementAsMask(this.elem,this.elem.comp.elements[e]),e+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;s>e;e+=1)this.filters[e].renderFrame(t)},createElement(SVGBaseElement,ICompElement),ICompElement.prototype.hide=function(){if(!this.hidden){this._parent.hide.call(this);var t,e=this.elements.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].hide()}},ICompElement.prototype.prepareFrame=function(t){if(this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){if(this.tm){var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}else this.renderedFrame=t/this.data.sr;var s,r=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=0;r>s;s+=1)(this.completeLayers||this.elements[s])&&this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st)}},ICompElement.prototype.renderFrame=function(t){var e,s=this._parent.renderFrame.call(this,t),r=this.layers.length;if(s===!1)return void this.hide();for(this.hidden&&this.show(),e=0;r>e;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroy=function(){this._parent.destroy.call(this._parent);var t,e=this.layers.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.checkLayers=SVGRenderer.prototype.checkLayers,ICompElement.prototype.buildItem=SVGRenderer.prototype.buildItem,ICompElement.prototype.buildAllItems=SVGRenderer.prototype.buildAllItems,ICompElement.prototype.buildElementParenting=SVGRenderer.prototype.buildElementParenting,ICompElement.prototype.createItem=SVGRenderer.prototype.createItem,ICompElement.prototype.createImage=SVGRenderer.prototype.createImage,ICompElement.prototype.createComp=SVGRenderer.prototype.createComp,ICompElement.prototype.createSolid=SVGRenderer.prototype.createSolid,ICompElement.prototype.createShape=SVGRenderer.prototype.createShape,ICompElement.prototype.createText=SVGRenderer.prototype.createText,ICompElement.prototype.createBase=SVGRenderer.prototype.createBase,ICompElement.prototype.appendElementInPos=SVGRenderer.prototype.appendElementInPos,ICompElement.prototype.checkPendingElements=SVGRenderer.prototype.checkPendingElements,ICompElement.prototype.addPendingElement=SVGRenderer.prototype.addPendingElement,createElement(SVGBaseElement,IImageElement),IImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData);this._parent.createElements.call(this),this.innerElem=document.createElementNS(svgNS,"image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio","xMidYMid slice"),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.maskedElement=this.innerElem,this.layerElement.appendChild(this.innerElem),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},IImageElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),void(this.firstFrame&&(this.firstFrame=!1)))},IImageElement.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.innerElem=null},createElement(SVGBaseElement,ISolidElement),ISolidElement.prototype.createElements=function(){this._parent.createElements.call(this);var t=document.createElementNS(svgNS,"rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t),this.innerElem=t,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},ISolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,ISolidElement.prototype.destroy=IImageElement.prototype.destroy;var animationManager=function(){function t(t){for(var e=0,s=t.target;C>e;)x[e].animation===s&&(x.splice(e,1),e-=1,C-=1,s.isPaused||r()),e+=1}function e(t,e){if(!t)return null;for(var s=0;C>s;){if(x[s].elem==t&&null!==x[s].elem)return x[s].animation;s+=1}var r=new AnimationItem;return i(r,t),r.setData(t,e),r}function s(){A+=1,E()}function r(){A-=1,0===A&&(k=!0)}function i(e,i){e.addEventListener("destroy",t),e.addEventListener("_active",s),e.addEventListener("_idle",r),x.push({elem:i,animation:e}),C+=1}function a(t){var e=new AnimationItem;return i(e,null),e.setParams(t),e}function n(t,e){var s;for(s=0;C>s;s+=1)x[s].animation.setSpeed(t,e)}function o(t,e){var s;for(s=0;C>s;s+=1)x[s].animation.setDirection(t,e)}function h(t){var e;for(e=0;C>e;e+=1)x[e].animation.play(t)}function l(t,e){S=Date.now();var s;for(s=0;C>s;s+=1)x[s].animation.moveFrame(t,e)}function p(t){var e,s=t-S;for(e=0;C>e;e+=1)x[e].animation.advanceTime(s);S=t,k||window.requestAnimationFrame(p)}function m(t){S=t,window.requestAnimationFrame(p)}function f(t){var e;for(e=0;C>e;e+=1)x[e].animation.pause(t)}function c(t,e,s){var r;for(r=0;C>r;r+=1)x[r].animation.goToAndStop(t,e,s)}function d(t){var e;for(e=0;C>e;e+=1)x[e].animation.stop(t)}function u(t){var e;for(e=0;C>e;e+=1)x[e].animation.togglePause(t)}function y(t){var e;for(e=C-1;e>=0;e-=1)x[e].animation.destroy(t)}function g(t,s,r){var i,a=document.getElementsByClassName("bodymovin"),n=a.length;for(i=0;n>i;i+=1)r&&a[i].setAttribute("data-bm-type",r),e(a[i],t);if(s&&0===n){r||(r="svg");var o=document.getElementsByTagName("body")[0];o.innerHTML="";var h=document.createElement("div");h.style.width="100%",h.style.height="100%",h.setAttribute("data-bm-type",r),o.appendChild(h),e(h,t)}}function v(){var t;for(t=0;C>t;t+=1)x[t].animation.resize()}function b(){window.requestAnimationFrame(m)}function E(){k&&(k=!1,window.requestAnimationFrame(m))}var P={},x=[],S=0,C=0,k=!0,A=0;return setTimeout(b,0),P.registerAnimation=e,P.loadAnimation=a,P.setSpeed=n,P.setDirection=o,P.play=h,P.moveFrame=l,P.pause=f,P.stop=d,P.togglePause=u,P.searchAnimations=g,P.resize=v,P.start=b,P.goToAndStop=c,P.destroy=y,P}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.pendingElements=0,this.playCount=0,this.prerenderFramesFlag=!0,this.animationData={},this.layers=[],this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=randomString(10),this.scaleMode="fit",this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this.pendingSegment=!1,this._idle=!0,this.projectInterface=ProjectInterface()};AnimationItem.prototype.setParams=function(t){var e=this;t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var s=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(s){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;case"hybrid":case"html":default:this.renderer=new HybridRenderer(this,t.rendererSettings)}if(this.renderer.setProjectInterface(this.projectInterface),this.animType=s,""===t.loop||null===t.loop||(this.loop=t.loop===!1?!1:t.loop===!0?!0:parseInt(t.loop)),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.prerenderFramesFlag="prerender"in t?t.prerender:!0,this.autoloadSegments=t.hasOwnProperty("autoloadSegments")?t.autoloadSegments:!0,t.animationData)e.configAnimation(t.animationData);else if(t.path){"json"!=t.path.substr(-4)&&("/"!=t.path.substr(-1,1)&&(t.path+="/"),t.path+="data.json");var r=new XMLHttpRequest;this.path=-1!=t.path.lastIndexOf("\\")?t.path.substr(0,t.path.lastIndexOf("\\")+1):t.path.substr(0,t.path.lastIndexOf("/")+1),this.assetsPath=t.assetsPath,this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),r.open("GET",t.path,!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status)e.configAnimation(JSON.parse(r.responseText));else try{var t=JSON.parse(r.responseText);e.configAnimation(t)}catch(s){}}}},AnimationItem.prototype.setData=function(t,e){var s={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},r=t.attributes;s.path=r.getNamedItem("data-animation-path")?r.getNamedItem("data-animation-path").value:r.getNamedItem("data-bm-path")?r.getNamedItem("data-bm-path").value:r.getNamedItem("bm-path")?r.getNamedItem("bm-path").value:"",s.animType=r.getNamedItem("data-anim-type")?r.getNamedItem("data-anim-type").value:r.getNamedItem("data-bm-type")?r.getNamedItem("data-bm-type").value:r.getNamedItem("bm-type")?r.getNamedItem("bm-type").value:r.getNamedItem("data-bm-renderer")?r.getNamedItem("data-bm-renderer").value:r.getNamedItem("bm-renderer")?r.getNamedItem("bm-renderer").value:"canvas";var i=r.getNamedItem("data-anim-loop")?r.getNamedItem("data-anim-loop").value:r.getNamedItem("data-bm-loop")?r.getNamedItem("data-bm-loop").value:r.getNamedItem("bm-loop")?r.getNamedItem("bm-loop").value:"";""===i||(s.loop="false"===i?!1:"true"===i?!0:parseInt(i));var a=r.getNamedItem("data-anim-autoplay")?r.getNamedItem("data-anim-autoplay").value:r.getNamedItem("data-bm-autoplay")?r.getNamedItem("data-bm-autoplay").value:r.getNamedItem("bm-autoplay")?r.getNamedItem("bm-autoplay").value:!0;s.autoplay="false"!==a,s.name=r.getNamedItem("data-name")?r.getNamedItem("data-name").value:r.getNamedItem("data-bm-name")?r.getNamedItem("data-bm-name").value:r.getNamedItem("bm-name")?r.getNamedItem("bm-name").value:"";var n=r.getNamedItem("data-anim-prerender")?r.getNamedItem("data-anim-prerender").value:r.getNamedItem("data-bm-prerender")?r.getNamedItem("data-bm-prerender").value:r.getNamedItem("bm-prerender")?r.getNamedItem("bm-prerender").value:"";"false"===n&&(s.prerender=!1),this.setParams(s)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip),this.animationData.tf=this.totalFrames);var e,s,r=this.animationData.layers,i=r.length,a=t.layers,n=a.length;for(s=0;n>s;s+=1)for(e=0;i>e;){if(r[e].id==a[s].id){r[e]=a[s];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(i=t.assets.length,e=0;i>e;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.renderFrame(null),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.animationData.tf);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=new XMLHttpRequest,r=this,i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,s.open("GET",i,!0),s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)r.includeLayers(JSON.parse(s.responseText));else try{var t=JSON.parse(s.responseText);r.includeLayers(t)}catch(e){}}},AnimationItem.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.animationData.tf),this.loadNextSegment()},AnimationItem.prototype.configAnimation=function(t){var e=this;this.renderer&&this.renderer.destroyed||(this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.animationData.tf=this.totalFrames,this.renderer.configAnimation(t),t.assets||(t.assets=[]),t.comps&&(t.assets=t.assets.concat(t.comps),t.comps=null),this.renderer.searchExtraCompositions(t.assets),this.layers=this.animationData.layers,this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.trigger("config_ready"),this.imagePreloader=new ImagePreloader,this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(t.assets,function(t){t||e.trigger("loaded_images")}),this.loadSegments(),this.updaFrameModifier(),this.renderer.globalData.fontManager?this.waitForFontsLoaded():(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()))},AnimationItem.prototype.waitForFontsLoaded=function(){function t(){this.renderer.globalData.fontManager.loaded?(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()):setTimeout(t.bind(this),20)}return function(){t.bind(this)()}}(),AnimationItem.prototype.addPendingElement=function(){this.pendingElements+=1},AnimationItem.prototype.elementLoaded=function(){this.pendingElements--,this.checkLoaded()},AnimationItem.prototype.checkLoaded=function(){0===this.pendingElements&&(expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.isLoaded=!0,this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=t?!0:!1},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:Math.floor(this.currentRawFrame),this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){this.isLoaded!==!1&&this.renderer.renderFrame(this.currentFrame+this.firstFrame)},AnimationItem.prototype.play=function(t){t&&this.name!=t||this.isPaused===!0&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||this.isPaused===!1&&(this.isPaused=!0,this.pendingSegment||(this._idle=!0,this.trigger("_idle")))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.currentFrame=this.currentRawFrame=0,this.playCount=0,this.gotoFrame())},AnimationItem.prototype.goToAndStop=function(t,e,s){s&&this.name!=s||(this.setCurrentRawFrameValue(e?t:t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,s){this.goToAndStop(t,e,s),this.play()},AnimationItem.prototype.advanceTime=function(t){return this.pendingSegment?(this.pendingSegment=!1,this.adjustSegment(this.segments.shift()),void(this.isPaused&&this.play())):void(this.isPaused!==!0&&this.isLoaded!==!1&&this.setCurrentRawFrameValue(this.currentRawFrame+t*this.frameModifier))},AnimationItem.prototype.updateAnimation=function(t){this.setCurrentRawFrameValue(this.totalFrames*t)},AnimationItem.prototype.moveFrame=function(t,e){e&&this.name!=e||this.setCurrentRawFrameValue(this.currentRawFrame+t)},AnimationItem.prototype.adjustSegment=function(t){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.01)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(0)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t-.01)),this.firstFrame=t,this.totalFrames=e-t,-1!==s&&this.goToAndStop(s,!0)},AnimationItem.prototype.playSegments=function(t,e){if("object"==typeof t[0]){var s,r=t.length;for(s=0;r>s;s+=1)this.segments.push(t[s])}else this.segments.push(t);e&&this.adjustSegment(this.segments.shift()),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op-this.animationData.ip+this.animationData.ip*this.frameRate)]),t&&this.adjustSegment(this.segments.shift())},AnimationItem.prototype.checkSegments=function(){this.segments.length&&(this.pendingSegment=!0)},AnimationItem.prototype.remove=function(t){t&&this.name!=t||this.renderer.destroy()},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||this.renderer&&this.renderer.destroyed||(this.renderer.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){if(this.currentRawFrame=t,this.currentRawFrame>=this.totalFrames){if(this.checkSegments(),this.loop===!1)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");if(this.trigger("loopComplete"),this.playCount+=1,this.loop!==!0&&this.playCount==this.loop||this.pendingSegment)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");this.currentRawFrame=this.currentRawFrame%this.totalFrames}else if(this.currentRawFrame<0)return this.checkSegments(),this.playCount-=1,this.playCount<0&&(this.playCount=0),this.loop===!1||this.pendingSegment?(this.currentRawFrame=0,this.gotoFrame(),this.pause(),void this.trigger("complete")):(this.trigger("loopComplete"),this.currentRawFrame=(this.totalFrames+this.currentRawFrame)%this.totalFrames,void this.gotoFrame());this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=0>t?-1:1,this.updaFrameModifier();

},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;s>e;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getAssets=function(){return this.assets},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.addEventListener=_addEventListener,AnimationItem.prototype.removeEventListener=_removeEventListener,AnimationItem.prototype.triggerEvent=_triggerEvent,extendPrototype(BaseRenderer,CanvasRenderer),CanvasRenderer.prototype.createBase=function(t){return new CVBaseElement(t,this,this.globalData)},CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this,this.globalData)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this,this.globalData)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this,this.globalData)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this,this.globalData)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this,this.globalData)},CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13]){if(!this.renderConfig.clearCanvas)return void this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13]);this.transformMat.cloneFromProps(t),this.transformMat.transform(this.contextData.cTr.props[0],this.contextData.cTr.props[1],this.contextData.cTr.props[2],this.contextData.cTr.props[3],this.contextData.cTr.props[4],this.contextData.cTr.props[5],this.contextData.cTr.props[6],this.contextData.cTr.props[7],this.contextData.cTr.props[8],this.contextData.cTr.props[9],this.contextData.cTr.props[10],this.contextData.cTr.props[11],this.contextData.cTr.props[12],this.contextData.cTr.props[13],this.contextData.cTr.props[14],this.contextData.cTr.props[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var e=this.contextData.cTr.props;this.canvasContext.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}},CanvasRenderer.prototype.ctxOpacity=function(t){if(1!==t){if(!this.renderConfig.clearCanvas)return void(this.canvasContext.globalAlpha*=0>t?0:t);this.contextData.cO*=0>t?0:t,this.canvasContext.globalAlpha=this.contextData.cO}},CanvasRenderer.prototype.reset=function(){return this.renderConfig.clearCanvas?(this.contextData.cArrPos=0,this.contextData.cTr.reset(),void(this.contextData.cO=1)):void this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.save();t&&this.canvasContext.save();var e=this.contextData.cTr.props;(null===this.contextData.saved[this.contextData.cArrPos]||void 0===this.contextData.saved[this.contextData.cArrPos])&&(this.contextData.saved[this.contextData.cArrPos]=new Array(16));var s,r=this.contextData.saved[this.contextData.cArrPos];for(s=0;16>s;s+=1)r[s]=e[s];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1},CanvasRenderer.prototype.restore=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.restore();t&&this.canvasContext.restore(),this.contextData.cArrPos-=1;var e,s=this.contextData.saved[this.contextData.cArrPos],r=this.contextData.cTr.props;for(e=0;16>e;e+=1)r[e]=s[e];this.canvasContext.setTransform(s[0],s[1],s[4],s[5],s[12],s[13]),s=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=s,this.canvasContext.globalAlpha=s},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=document.createElement("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className)):this.canvasContext=this.renderConfig.context,this.data=t,this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.totalFrames=Math.floor(t.tf),this.globalData.compWidth=t.w,this.globalData.compHeight=t.h,this.globalData.frameRate=t.fr,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.layers=t.layers,this.transformCanvas={},this.transformCanvas.w=t.w,this.transformCanvas.h=t.h,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,document.body),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.addPendingElement=this.animationItem.addPendingElement.bind(this.animationItem),this.globalData.transformCanvas=this.transformCanvas,this.elements=Array.apply(null,{length:t.layers.length}),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e;this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr);var s,r;if(-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var i=this.renderConfig.preserveAspectRatio.split(" "),a=i[1]||"meet",n=i[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);s=t/e,r=this.transformCanvas.w/this.transformCanvas.h,r>s&&"meet"===a||s>r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(s>r&&"meet"===a||r>s&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(s>r&&"meet"===a||r>s&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(r>s&&"meet"===a||s>r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(r>s&&"meet"===a||s>r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];var l,p=this.elements.length;for(l=0;p>l;l+=1)this.elements[l]&&0===this.elements[l].data.ty&&this.elements[l].resize(this.globalData.transformCanvas)},CanvasRenderer.prototype.destroy=function(){this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML="");var t,e=this.layers?this.layers.length:0;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t){if(!(this.renderedFrame==t&&this.renderConfig.clearCanvas===!0||this.destroyed||null===t)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem.firstFrame,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.renderConfig.clearCanvas===!0?(this.reset(),this.canvasContext.save(),this.canvasContext.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)):this.save(),this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip();var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=0;s>e;e++)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.renderConfig.clearCanvas!==!0?this.restore():this.canvasContext.restore()}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var s=this.createItem(this.layers[t],this,this.globalData);e[t]=s,s.initExpressions(),0===this.layers[t].ty&&s.resize(this.globalData.transformCanvas)}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},CanvasRenderer.prototype.searchExtraCompositions=function(t){{var e,s=t.length;document.createElementNS(svgNS,"g")}for(e=0;s>e;e+=1)if(t[e].xt){var r=this.createComp(t[e],this.globalData.comp,this.globalData);r.initExpressions(),this.globalData.projectInterface.registerComposition(r)}},extendPrototype(BaseRenderer,HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){var r=this.layers[e];if(r.ddd&&this.supports3d)this.addTo3dContainer(s,e);else{for(var i,a,n=0;e>n;)this.elements[n]&&this.elements[n]!==!0&&this.elements[n].getBaseElement&&(a=this.elements[n],i=this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement()),n+=1;i?r.ddd&&this.supports3d||this.layerElement.insertBefore(s,i):r.ddd&&this.supports3d||this.layerElement.appendChild(s)}}},HybridRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.layerElement,this.globalData,this):new IShapeElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.layerElement,this.globalData,this):new SVGTextElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.layerElement,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.layerElement,this.globalData,this):new IImageElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.layerElement,this.globalData,this):new ICompElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.layerElement,this.globalData,this):new ISolidElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,s=this.threeDElements.length;s>e;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}},HybridRenderer.prototype.createThreeDContainer=function(t){var e=document.createElement("div");styleDiv(e),e.style.width=this.globalData.compSize.w+"px",e.style.height=this.globalData.compSize.h+"px",e.style.transformOrigin=e.style.mozTransformOrigin=e.style.webkitTransformOrigin="50% 50%";var s=document.createElement("div");styleDiv(s),s.style.transform=s.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",e.appendChild(s),this.resizerElem.appendChild(e);var r={container:s,perspectiveElem:e,startPos:t,endPos:t};return this.threeDElements.push(r),r},HybridRenderer.prototype.build3dContainers=function(){var t,e,s=this.layers.length;for(t=0;s>t;t+=1)this.layers[t].ddd?(e||(e=this.createThreeDContainer(t)),e.endPos=Math.max(e.endPos,t)):e=null},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var s=0,r=this.threeDElements.length;r>s;){if(e<=this.threeDElements[s].endPos){for(var i,a=this.threeDElements[s].startPos;e>a;)this.elements[a]&&this.elements[a].getBaseElement&&(i=this.elements[a].getBaseElement()),a+=1;i?this.threeDElements[s].container.insertBefore(t,i):this.threeDElements[s].container.appendChild(t);break}s+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=document.createElement("div"),s=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",this.resizerElem=e,styleDiv(e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",this.renderConfig.className&&s.setAttribute("class",this.renderConfig.className),s.appendChild(e),e.style.overflow="hidden";var r=document.createElementNS(svgNS,"svg");r.setAttribute("width","1"),r.setAttribute("height","1"),styleDiv(r),this.resizerElem.appendChild(r);var i=document.createElementNS(svgNS,"defs");r.appendChild(i),this.globalData.defs=i,this.data=t,this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.frameRate=t.fr,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,r),this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;e>t;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,s,r,i=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=i/a,o=this.globalData.compSize.w/this.globalData.compSize.h;o>n?(t=i/this.globalData.compSize.w,e=i/this.globalData.compSize.w,s=0,r=(a-this.globalData.compSize.h*(i/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,s=(i-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,r=0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+s+","+r+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,s=this.globalData.compSize.h,r=this.threeDElements.length;for(t=0;r>t;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(s,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,s=t.length,r=document.createElement("div");for(e=0;s>e;e+=1)if(t[e].xt){var i=this.createComp(t[e],r,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},createElement(BaseElement,CVBaseElement),CVBaseElement.prototype.createElements=function(){this.checkParenting()},CVBaseElement.prototype.checkBlendMode=function(t){if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e="";switch(this.data.bm){case 0:e="normal";break;case 1:e="multiply";break;case 2:e="screen";break;case 3:e="overlay";break;case 4:e="darken";break;case 5:e="lighten";break;case 6:e="color-dodge";break;case 7:e="color-burn";break;case 8:e="hard-light";break;case 9:e="soft-light";break;case 10:e="difference";break;case 11:e="exclusion";break;case 12:e="hue";break;case 13:e="saturation";break;case 14:e="color";break;case 15:e="luminosity"}t.canvasContext.globalCompositeOperation=e}},CVBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.checkBlendMode(0===this.data.ty?this.parentGlobalData:this.globalData),!this.isVisible)return this.isVisible;this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,s=this.finalTransform.mat;if(this.hierarchy){var r,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)this.finalTransform.matMdf=this.hierarchy[r].finalTransform.mProp.mdf?!0:this.finalTransform.matMdf,e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else t?(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e)):s.cloneFromProps(this.finalTransform.mProp.v.props);return t&&(e=t.mat.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=t.opMdf?!0:this.finalTransform.opMdf,this.finalTransform.matMdf=t.matMdf?!0:this.finalTransform.matMdf),this.data.hasMask&&(this.globalData.renderer.save(!0),this.maskManager.renderFrame(0===this.data.ty?null:s)),this.data.hd&&(this.isVisible=!1),this.isVisible},CVBaseElement.prototype.addMasks=function(t){this.maskManager=new CVMaskElement(t,this,this.globalData)},CVBaseElement.prototype.destroy=function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager&&this.maskManager.destroy()},CVBaseElement.prototype.mHelper=new Matrix,createElement(CVBaseElement,CVCompElement),CVCompElement.prototype.ctxTransform=CanvasRenderer.prototype.ctxTransform,CVCompElement.prototype.ctxOpacity=CanvasRenderer.prototype.ctxOpacity,CVCompElement.prototype.save=CanvasRenderer.prototype.save,CVCompElement.prototype.restore=CanvasRenderer.prototype.restore,CVCompElement.prototype.reset=function(){this.contextData.cArrPos=0,this.contextData.cTr.reset(),this.contextData.cO=1},CVCompElement.prototype.resize=function(t){var e=Math.max(t.sx,t.sy);this.canvas.width=this.data.w*e,this.canvas.height=this.data.h*e,this.transformCanvas={sc:e,w:this.data.w*e,h:this.data.h*e,props:[e,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1]};var s,r=this.elements.length;for(s=0;r>s;s+=1)this.elements[s]&&0===this.elements[s].data.ty&&this.elements[s].resize(t)},CVCompElement.prototype.prepareFrame=function(t){if(this.globalData.frameId=this.parentGlobalData.frameId,this.globalData.mdf=!1,this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){var e=t;this.tm&&(e=this.tm.v,e===this.data.op&&(e=this.data.op-1)),this.renderedFrame=e/this.data.sr;var s,r=this.elements.length;for(this.completeLayers||this.checkLayers(t),s=0;r>s;s+=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(e/this.data.sr-this.layers[s].st),0===this.elements[s].data.ty&&this.elements[s].globalData.mdf&&(this.globalData.mdf=!0));this.globalData.mdf&&!this.data.xt&&(this.canvasContext.clearRect(0,0,this.data.w,this.data.h),this.ctxTransform(this.transformCanvas.props))}},CVCompElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){if(this.globalData.mdf){var e,s=this.layers.length;for(e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}this.data.hasMask&&this.globalData.renderer.restore(!0),this.firstFrame&&(this.firstFrame=!1),this.parentGlobalData.renderer.save(),this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props),this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity),this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas,0,0,this.data.w,this.data.h),this.parentGlobalData.renderer.restore(),this.globalData.mdf&&this.reset()}},CVCompElement.prototype.setElements=function(t){this.elements=t},CVCompElement.prototype.getElements=function(){return this.elements},CVCompElement.prototype.destroy=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)this.elements[t].destroy();this.layers=null,this.elements=null,this._parent.destroy.call(this._parent)},CVCompElement.prototype.checkLayers=CanvasRenderer.prototype.checkLayers,CVCompElement.prototype.buildItem=CanvasRenderer.prototype.buildItem,CVCompElement.prototype.checkPendingElements=CanvasRenderer.prototype.checkPendingElements,CVCompElement.prototype.addPendingElement=CanvasRenderer.prototype.addPendingElement,CVCompElement.prototype.buildAllItems=CanvasRenderer.prototype.buildAllItems,CVCompElement.prototype.createItem=CanvasRenderer.prototype.createItem,CVCompElement.prototype.createImage=CanvasRenderer.prototype.createImage,CVCompElement.prototype.createComp=CanvasRenderer.prototype.createComp,CVCompElement.prototype.createSolid=CanvasRenderer.prototype.createSolid,CVCompElement.prototype.createShape=CanvasRenderer.prototype.createShape,CVCompElement.prototype.createText=CanvasRenderer.prototype.createText,CVCompElement.prototype.createBase=CanvasRenderer.prototype.createBase,CVCompElement.prototype.buildElementParenting=CanvasRenderer.prototype.buildElementParenting,createElement(CVBaseElement,CVImageElement),CVImageElement.prototype.createElements=function(){var t=function(){if(this.globalData.elementLoaded(),this.assetData.w!==this.img.width||this.assetData.h!==this.img.height){var t=document.createElement("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,s,r=t.getContext("2d"),i=this.img.width,a=this.img.height,n=i/a,o=this.assetData.w/this.assetData.h;n>o?(s=a,e=s*o):(e=i,s=e/o),r.drawImage(this.img,(i-e)/2,(a-s)/2,e,s,0,0,this.assetData.w,this.assetData.h),this.img=t}}.bind(this),e=function(){this.failed=!0,this.globalData.elementLoaded()}.bind(this);this.img=new Image,this.img.addEventListener("load",t,!1),this.img.addEventListener("error",e,!1);var s=this.globalData.getAssetsPath(this.assetData);this.img.src=s,this._parent.createElements.call(this)},CVImageElement.prototype.renderFrame=function(t){if(!this.failed&&this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save();var s=this.finalTransform.mat.props;this.globalData.renderer.ctxTransform(s),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.drawImage(this.img,0,0),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},CVImageElement.prototype.destroy=function(){this.img=null,this._parent.destroy.call(this._parent)},CVMaskElement.prototype.prepareFrame=function(t){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.element.globalData.mdf=!0)},CVMaskElement.prototype.renderFrame=function(t){var e,s,r,i,a,n=this.element.canvasContext,o=this.data.masksProperties.length,h=!1;for(e=0;o>e;e++)if("n"!==this.masksProperties[e].mode){h===!1&&(n.beginPath(),h=!0),this.masksProperties[e].inv&&(n.moveTo(0,0),n.lineTo(this.element.globalData.compWidth,0),n.lineTo(this.element.globalData.compWidth,this.element.globalData.compHeight),n.lineTo(0,this.element.globalData.compHeight),n.lineTo(0,0)),a=this.viewData[e].v,s=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.moveTo(s[0],s[1]);var l,p=a._length;for(l=1;p>l;l++)s=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],r=t?t.applyToPointArray(a.i[l][0],a.i[l][1],0):a.i[l],i=t?t.applyToPointArray(a.v[l][0],a.v[l][1],0):a.v[l],n.bezierCurveTo(s[0],s[1],r[0],r[1],i[0],i[1]);s=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],r=t?t.applyToPointArray(a.i[0][0],a.i[0][1],0):a.i[0],i=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.bezierCurveTo(s[0],s[1],r[0],r[1],i[0],i[1])}h&&n.clip()},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},createElement(CVBaseElement,CVShapeElement),CVShapeElement.prototype.transformHelper={opacity:1,mat:new Matrix,matMdf:!1,opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties,!0)},CVShapeElement.prototype.createStyleElement=function(t,e){var s={data:t,type:t.ty,elements:[]},r={};if(("fl"==t.ty||"st"==t.ty)&&(r.c=PropertyFactory.getProp(this,t.c,1,255,e),r.c.k||(s.co="rgb("+bm_floor(r.c.v[0])+","+bm_floor(r.c.v[1])+","+bm_floor(r.c.v[2])+")")),r.o=PropertyFactory.getProp(this,t.o,0,.01,e),"st"==t.ty){if(s.lc=this.lcEnum[t.lc]||"round",s.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(s.ml=t.ml),r.w=PropertyFactory.getProp(this,t.w,0,null,e),r.w.k||(s.wi=r.w.v),t.d){var i=PropertyFactory.getDashProp(this,t.d,"canvas",e);r.d=i,r.d.k||(s.da=r.d.dasharray,s["do"]=r.d.dashoffset)}}else s.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(s),r.style=s,r},CVShapeElement.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]};return e},CVShapeElement.prototype.createTransformElement=function(t,e){var s={transform:{mat:new Matrix,opacity:1,matMdf:!1,opMdf:!1,op:PropertyFactory.getProp(this,t.o,0,.01,e),mProps:PropertyFactory.getProp(this,t,2,null,e)},elements:[]};return s},CVShapeElement.prototype.createShapeElement=function(t,e){var s={nodes:[],trNodes:[],tr:[0,0,0,0,0,0]},r=4;"rc"==t.ty?r=5:"el"==t.ty?r=6:"sr"==t.ty&&(r=7),s.sh=ShapePropertyFactory.getShapeProp(this,t,r,e),this.shapes.push(s.sh),this.addShapeToModifiers(s),jLen=this.stylesList.length;var i=!1,a=!1;for(j=0;j<jLen;j+=1)this.stylesList[j].closed||(this.stylesList[j].elements.push(s),"st"===this.stylesList[j].type?i=!0:a=!0);return s.st=i,s.fl=a,s},CVShapeElement.prototype.reloadShapes=function(){this.firstFrame=!0;var t,e=this.itemsData.length;for(t=0;e>t;t+=1)this.prevViewData[t]=this.itemsData[t];this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties,!0);var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},CVShapeElement.prototype.searchShapes=function(t,e,s,r,i){var a,n,o,h,l=t.length-1,p=[],m=[];for(a=l;a>=0;a-=1){if(h=this.searchProcessedElement(t[a]),h?e[a]=s[h-1]:t[a]._render=i,"fl"==t[a].ty||"st"==t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],r),p.push(e[a].style);else if("gr"==t[a].ty){if(h)for(o=e[a].it.length,n=0;o>n;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,r,i)}else if("tr"==t[a].ty)h||(e[a]=this.createTransformElement(t[a],r));else if("sh"==t[a].ty||"rc"==t[a].ty||"el"==t[a].ty||"sr"==t[a].ty)h||(e[a]=this.createShapeElement(t[a],r));else if("tm"==t[a].ty||"rd"==t[a].ty){if(h)f=e[a],f.closed=!1;else{var f=ShapeModifiers.getModifier(t[a].ty);f.init(this,t[a],r),e[a]=f,this.shapeModifiers.push(f)}m.push(f)}else"rp"==t[a].ty&&(h?(f=e[a],f.closed=!0):(f=ShapeModifiers.getModifier(t[a].ty),e[a]=f,f.init(this,t,a,e,r),this.shapeModifiers.push(f),i=!1),m.push(f));this.addProcessedElement(t[a],a+1)}for(l=p.length,a=0;l>a;a+=1)p[a].closed=!0;for(l=m.length,a=0;l>a;a+=1)m[a].closed=!0},CVShapeElement.prototype.addShapeToModifiers=IShapeElement.prototype.addShapeToModifiers,CVShapeElement.prototype.renderModifiers=IShapeElement.prototype.renderModifiers,CVShapeElement.prototype.lcEnum=IShapeElement.prototype.lcEnum,CVShapeElement.prototype.ljEnum=IShapeElement.prototype.ljEnum,CVShapeElement.prototype.searchProcessedElement=IShapeElement.prototype.searchProcessedElement,CVShapeElement.prototype.addProcessedElement=IShapeElement.prototype.addProcessedElement,CVShapeElement.prototype.renderFrame=function(t){this._parent.renderFrame.call(this,t)!==!1&&(this.transformHelper.mat.reset(),this.transformHelper.opacity=this.finalTransform.opacity,this.transformHelper.matMdf=!1,this.transformHelper.opMdf=this.finalTransform.opMdf,this.renderModifiers(),this.renderShape(this.transformHelper,null,null,!0),this.data.hasMask&&this.globalData.renderer.restore(!0))},CVShapeElement.prototype.renderShape=function(t,e,s,r){var i,a;if(!e)for(e=this.shapesData,a=this.stylesList.length,i=0;a>i;i+=1)this.stylesList[i].d="",this.stylesList[i].mdf=!1;s||(s=this.itemsData),a=e.length-1;var n,o;for(n=t,i=a;i>=0;i-=1)if("tr"==e[i].ty){n=s[i].transform;var h=s[i].transform.mProps.v.props;if(n.matMdf=n.mProps.mdf,n.opMdf=n.op.mdf,o=n.mat,o.cloneFromProps(h),t){var l=t.mat.props;n.opacity=t.opacity,n.opacity*=s[i].transform.op.v,n.matMdf=t.matMdf?!0:n.matMdf,n.opMdf=t.opMdf?!0:n.opMdf,o.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15])}else n.opacity=n.op.o}else"sh"==e[i].ty||"el"==e[i].ty||"rc"==e[i].ty||"sr"==e[i].ty?this.renderPath(e[i],s[i],n):"fl"==e[i].ty?this.renderFill(e[i],s[i],n):"st"==e[i].ty?this.renderStroke(e[i],s[i],n):"gr"==e[i].ty?this.renderShape(n,e[i].it,s[i].it):"tm"==e[i].ty;if(r){a=this.stylesList.length;var p,m,f,c,d,u,y,g=this.globalData.renderer,v=this.globalData.canvasContext;for(g.save(),g.ctxTransform(this.finalTransform.mat.props),i=0;a>i;i+=1)if(y=this.stylesList[i].type,("st"!==y||0!==this.stylesList[i].wi)&&this.stylesList[i].data._render){for(g.save(),d=this.stylesList[i].elements,
"st"===y?(v.strokeStyle=this.stylesList[i].co,v.lineWidth=this.stylesList[i].wi,v.lineCap=this.stylesList[i].lc,v.lineJoin=this.stylesList[i].lj,v.miterLimit=this.stylesList[i].ml||0):v.fillStyle=this.stylesList[i].co,g.ctxOpacity(this.stylesList[i].coOp),"st"!==y&&v.beginPath(),m=d.length,p=0;m>p;p+=1){for("st"===y&&(v.beginPath(),this.stylesList[i].da?(v.setLineDash(this.stylesList[i].da),v.lineDashOffset=this.stylesList[i]["do"],this.globalData.isDashed=!0):this.globalData.isDashed&&(v.setLineDash(this.dashResetter),this.globalData.isDashed=!1)),u=d[p].trNodes,c=u.length,f=0;c>f;f+=1)"m"==u[f].t?v.moveTo(u[f].p[0],u[f].p[1]):"c"==u[f].t?v.bezierCurveTo(u[f].p1[0],u[f].p1[1],u[f].p2[0],u[f].p2[1],u[f].p3[0],u[f].p3[1]):v.closePath();"st"===y&&v.stroke()}"st"!==y&&v.fill(this.stylesList[i].r),g.restore()}g.restore(),this.firstFrame&&(this.firstFrame=!1)}},CVShapeElement.prototype.renderPath=function(t,e,s){var r,i,a,n,o=s.matMdf||e.sh.mdf||this.firstFrame;if(o){var h=e.sh.paths,l=s.mat;n=h._length;var p=e.trNodes;for(p.length=0,a=0;n>a;a+=1){var m=h.shapes[a];if(m&&m.v){for(r=m._length,i=1;r>i;i+=1)1==i&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),p.push({t:"c",p1:l.applyToPointArray(m.o[i-1][0],m.o[i-1][1],0),p2:l.applyToPointArray(m.i[i][0],m.i[i][1],0),p3:l.applyToPointArray(m.v[i][0],m.v[i][1],0)});1==r&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),m.c&&r&&(p.push({t:"c",p1:l.applyToPointArray(m.o[i-1][0],m.o[i-1][1],0),p2:l.applyToPointArray(m.i[0][0],m.i[0][1],0),p3:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),p.push({t:"z"})),e.lStr=p}}if(e.st)for(i=0;16>i;i+=1)e.tr[i]=s.mat.props[i];e.trNodes=p}},CVShapeElement.prototype.renderFill=function(t,e,s){var r=e.style;(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity)},CVShapeElement.prototype.renderStroke=function(t,e,s){var r=e.style,i=e.d;i&&(i.mdf||this.firstFrame)&&(r.da=i.dasharray,r["do"]=i.dashoffset),(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity),(e.w.mdf||this.firstFrame)&&(r.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemData.length=0,this._parent.destroy.call(this._parent)},createElement(CVBaseElement,CVSolidElement),CVSolidElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.fillStyle=this.data.sc,e.fillRect(0,0,this.data.sw,this.data.sh),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(CVBaseElement,CVTextElement),extendPrototype(ITextElement,CVTextElement),CVTextElement.prototype.tHelper=document.createElement("canvas").getContext("2d"),CVTextElement.prototype.createElements=function(){this._parent.createElements.call(this)},CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:t.l?t.l.length:0});var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var s=!1;t.sc&&(s=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var r,i,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=s,this.values.fValue=t.s+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,i=t.t.length;var h,l,p,m,f,c,d,u,y,g,v=this.data.singleShape,b=t.tr/1e3*t.s,E=0,P=0,x=!0,S=0;for(r=0;i>r;r+=1){for(h=this.globalData.fontManager.getCharData(t.t.charAt(r),a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily),l=h&&h.data||{},o.reset(),v&&n[r].n&&(E=-b,P+=t.yOffset,P+=x?1:0,x=!1),f=l.shapes?l.shapes[0].it:[],d=f.length,o.scale(t.s/100,t.s/100),v&&this.applyTextPropertiesToMatrix(t,o,n[r].line,E,P),y=Array.apply(null,{length:d}),c=0;d>c;c+=1){for(m=f[c].ks.k.i.length,u=f[c].ks.k,g=[],p=1;m>p;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[c]=g}v&&(E+=n[r].l,E+=b),this.textSpans[S]?this.textSpans[S].elem=y:this.textSpans[S]={elem:y},S+=1}},CVTextElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext,s=this.finalTransform.mat.props;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(s),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.font=this.values.fValue,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var r,i,a,n,o,h,l=this.textAnimator.renderedLetters,p=this.textProperty.currentData.l;i=p.length;var m,f,c,d=null,u=null,y=null;for(r=0;i>r;r+=1)if(!p[r].n){if(m=l[r],m&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(m.p),this.globalData.renderer.ctxOpacity(m.o)),this.fill){for(m&&m.fc?d!==m.fc&&(d=m.fc,e.fillStyle=m.fc):d!==this.values.fill&&(d=this.values.fill,e.fillStyle=this.values.fill),f=this.textSpans[r].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;n>a;a+=1)for(c=f[a],h=c.length,this.globalData.canvasContext.moveTo(c[0],c[1]),o=2;h>o;o+=6)this.globalData.canvasContext.bezierCurveTo(c[o],c[o+1],c[o+2],c[o+3],c[o+4],c[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(m&&m.sw?y!==m.sw&&(y=m.sw,e.lineWidth=m.sw):y!==this.values.sWidth&&(y=this.values.sWidth,e.lineWidth=this.values.sWidth),m&&m.sc?u!==m.sc&&(u=m.sc,e.strokeStyle=m.sc):u!==this.values.stroke&&(u=this.values.stroke,e.strokeStyle=this.values.stroke),f=this.textSpans[r].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;n>a;a+=1)for(c=f[a],h=c.length,this.globalData.canvasContext.moveTo(c[0],c[1]),o=2;h>o;o+=6)this.globalData.canvasContext.bezierCurveTo(c[o],c[o+1],c[o+2],c[o+3],c[o+4],c[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}m&&this.globalData.renderer.restore()}this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(BaseElement,HBaseElement),HBaseElement.prototype.checkBlendMode=function(){},HBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,HBaseElement.prototype.getBaseElement=function(){return this.baseElement},HBaseElement.prototype.createElements=function(){this.data.hasMask?(this.layerElement=document.createElementNS(svgNS,"svg"),styleDiv(this.layerElement),this.baseElement=this.layerElement,this.maskedElement=this.layerElement):this.layerElement=this.parentContainer,this.transformedElement=this.layerElement,!this.data.ln||4!==this.data.ty&&0!==this.data.ty||(this.layerElement===this.parentContainer&&(this.layerElement=document.createElementNS(svgNS,"g"),this.baseElement=this.layerElement),this.layerElement.setAttribute("id",this.data.ln)),this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.checkParenting()},HBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.currentFrameNum===this.lastNum||!this.isVisible)return this.isVisible;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v,this.firstFrame&&(this.finalTransform.opMdf=!0,this.finalTransform.matMdf=!0);var e,s=this.finalTransform.mat;if(this.hierarchy){var r,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)this.finalTransform.matMdf=this.hierarchy[r].finalTransform.mProp.mdf?!0:this.finalTransform.matMdf,e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&this.finalTransform.matMdf&&(t?(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e)):s.cloneFromProps(this.finalTransform.mProp.v.props));return this.data.hasMask&&this.maskManager.renderFrame(s),t&&(e=t.mat.props,s.cloneFromProps(e),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=t.opMdf?!0:this.finalTransform.opMdf,this.finalTransform.matMdf=t.matMdf?!0:this.finalTransform.matMdf),this.finalTransform.matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=s.toCSS(),this.finalMat=s),this.finalTransform.opMdf&&(this.transformedElement.style.opacity=this.finalTransform.opacity),this.isVisible},HBaseElement.prototype.destroy=function(){this.layerElement=null,this.transformedElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},HBaseElement.prototype.getDomElement=function(){return this.layerElement},HBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},HBaseElement.prototype.hide=function(){},HBaseElement.prototype.setMatte=function(){},HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,createElement(HBaseElement,HSolidElement),HSolidElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=document.createElementNS(svgNS,"svg");styleDiv(e),e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),t.appendChild(e),this.layerElement=t,this.transformedElement=t,this.baseElement=t,this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),0!==this.data.bm&&this.setBlendMode();var s=document.createElementNS(svgNS,"rect");s.setAttribute("width",this.data.sw),s.setAttribute("height",this.data.sh),s.setAttribute("fill",this.data.sc),e.appendChild(s),this.data.hasMask&&(this.maskedElement=s),this.checkParenting()},HSolidElement.prototype.hide=SVGBaseElement.prototype.hide,HSolidElement.prototype.show=SVGBaseElement.prototype.show,HSolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,HSolidElement.prototype.destroy=IImageElement.prototype.destroy,createElement(HBaseElement,HCompElement),HCompElement.prototype.createElements=function(){var t=document.createElement("div");if(styleDiv(t),this.data.ln&&t.setAttribute("id",this.data.ln),t.style.clip="rect(0px, "+this.data.w+"px, "+this.data.h+"px, 0px)",this.data.hasMask){var e=document.createElementNS(svgNS,"svg");styleDiv(e),e.setAttribute("width",this.data.w),e.setAttribute("height",this.data.h);var s=document.createElementNS(svgNS,"g");e.appendChild(s),t.appendChild(e),this.maskedElement=s,this.baseElement=t,this.layerElement=s,this.transformedElement=t}else this.layerElement=t,this.baseElement=this.layerElement,this.transformedElement=t;this.checkParenting()},HCompElement.prototype.hide=ICompElement.prototype.hide,HCompElement.prototype.prepareFrame=ICompElement.prototype.prepareFrame,HCompElement.prototype.setElements=ICompElement.prototype.setElements,HCompElement.prototype.getElements=ICompElement.prototype.getElements,HCompElement.prototype.destroy=ICompElement.prototype.destroy,HCompElement.prototype.renderFrame=function(t){var e,s=this._parent.renderFrame.call(this,t),r=this.layers.length;if(s===!1)return void this.hide();for(this.hidden=!1,e=0;r>e;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},HCompElement.prototype.checkLayers=BaseRenderer.prototype.checkLayers,HCompElement.prototype.buildItem=HybridRenderer.prototype.buildItem,HCompElement.prototype.checkPendingElements=HybridRenderer.prototype.checkPendingElements,HCompElement.prototype.addPendingElement=HybridRenderer.prototype.addPendingElement,HCompElement.prototype.buildAllItems=BaseRenderer.prototype.buildAllItems,HCompElement.prototype.createItem=HybridRenderer.prototype.createItem,HCompElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,HCompElement.prototype.createImage=HybridRenderer.prototype.createImage,HCompElement.prototype.createComp=HybridRenderer.prototype.createComp,HCompElement.prototype.createSolid=HybridRenderer.prototype.createSolid,HCompElement.prototype.createShape=HybridRenderer.prototype.createShape,HCompElement.prototype.createText=HybridRenderer.prototype.createText,HCompElement.prototype.createBase=HybridRenderer.prototype.createBase,HCompElement.prototype.appendElementInPos=HybridRenderer.prototype.appendElementInPos,createElement(HBaseElement,HShapeElement);var parent=HShapeElement.prototype._parent;extendPrototype(IShapeElement,HShapeElement),HShapeElement.prototype._parent=parent,HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderFrame,HShapeElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=document.createElementNS(svgNS,"svg");styleDiv(e);var s=this.comp.data?this.comp.data:this.globalData.compSize;if(e.setAttribute("width",s.w),e.setAttribute("height",s.h),this.data.hasMask){var r=document.createElementNS(svgNS,"g");t.appendChild(e),e.appendChild(r),this.maskedElement=r,this.layerElement=r,this.shapesContainer=r}else t.appendChild(e),this.layerElement=e,this.shapesContainer=document.createElementNS(svgNS,"g"),this.layerElement.appendChild(this.shapesContainer);this.data.hd||(this.baseElement=t),this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0),this.buildExpressionInterface(),this.layerElement=t,this.transformedElement=t,this.shapeCont=e,0!==this.data.bm&&this.setBlendMode(),this.checkParenting()},HShapeElement.prototype.renderFrame=function(t){var e=this.firstFrame;if(this._renderShapeFrame(),this.isVisible&&(this.elemMdf||e)){var s=this.shapeCont.getBBox(),r=!1;this.currentBBox.w!==s.width&&(this.currentBBox.w=s.width,this.shapeCont.setAttribute("width",s.width),r=!0),this.currentBBox.h!==s.height&&(this.currentBBox.h=s.height,this.shapeCont.setAttribute("height",s.height),r=!0),(r||this.currentBBox.x!==s.x||this.currentBBox.y!==s.y)&&(this.currentBBox.w=s.width,this.currentBBox.h=s.height,this.currentBBox.x=s.x,this.currentBBox.y=s.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},createElement(HBaseElement,HTextElement),extendPrototype(ITextElement,HTextElement),HTextElement.prototype.createElements=function(){this.isMasked=this.checkMasks();var t=document.createElement("div");if(styleDiv(t),this.layerElement=t,this.transformedElement=t,this.isMasked){this.renderType="svg";var e=document.createElementNS(svgNS,"svg");styleDiv(e),this.cont=e,this.compW=this.comp.data.w,this.compH=this.comp.data.h,e.setAttribute("width",this.compW),e.setAttribute("height",this.compH);var s=document.createElementNS(svgNS,"g");e.appendChild(s),t.appendChild(e),this.maskedElement=s,this.innerElem=s}else this.renderType="html",this.innerElem=t;this.baseElement=t,this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:this.textProperty.currentData.l?this.textProperty.currentData.l.length:0});var e=this.innerElem.style;e.color=e.fill=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)",t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var s=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.s+"px",e.lineHeight=t.s+"px",s.fClass)this.innerElem.className=s.fClass;else{e.fontFamily=s.fFamily;var r=t.fWeight,i=t.fStyle;e.fontStyle=i,e.fontWeight=r}var a,n,o=t.l;n=o.length;var h,l,p,m,f=this.mHelper,c="",d=0;for(a=0;n>a;a+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?h=this.textPaths[d]:(h=document.createElementNS(svgNS,"path"),h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?(l=this.textSpans[d],p=l.children[0]):(l=document.createElement("div"),p=document.createElementNS(svgNS,"svg"),p.appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[d]?this.textPaths[d]:document.createElementNS(svgNS,"text"):this.textSpans[d]?(l=this.textSpans[d],h=this.textPaths[d]):(l=document.createElement("span"),styleDiv(l),h=document.createElement("span"),styleDiv(h),l.appendChild(h)),this.globalData.fontManager.chars){var u,y=this.globalData.fontManager.getCharData(t.t.charAt(a),s.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(u=y?y.data:null,f.reset(),u&&u.shapes&&(m=u.shapes[0].it,f.scale(t.s/100,t.s/100),c=this.createPathShape(f,m),h.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(h);else if(this.innerElem.appendChild(l),u&&u.shapes){document.body.appendChild(p);var g=p.getBBox();p.setAttribute("width",g.width+2),p.setAttribute("height",g.height+2),p.setAttribute("viewBox",g.x-1+" "+(g.y-1)+" "+(g.width+2)+" "+(g.height+2)),p.style.transform=p.style.webkitTransform="translate("+(g.x-1)+"px,"+(g.y-1)+"px)",o[a].yOffset=g.y-1,l.appendChild(p)}else p.setAttribute("width",1),p.setAttribute("height",1)}else h.textContent=o[a].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(h):(this.innerElem.appendChild(l),h.style.transform=h.style.webkitTransform="translate3d(0,"+-t.s/1.2+"px,0)");this.textSpans[d]=this.isMasked?h:l,this.textSpans[d].style.display="block",this.textPaths[d]=h,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.hide=SVGTextElement.prototype.hide,HTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.hidden=!1,this.innerElem.style.display="block",this.layerElement.style.display="block"),this.data.singleShape){if(!this.firstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform.matMdf&&(this.cont.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.cont.style.transform=this.cont.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var s,r,i=0,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;r=n.length;var o,h,l;for(s=0;r>s;s+=1)n[s].n?i+=1:(h=this.textSpans[s],l=this.textPaths[s],o=a[i],i+=1,this.isMasked?h.setAttribute("transform",o.m):h.style.transform=h.style.webkitTransform=o.m,h.style.opacity=o.o,o.sw&&l.setAttribute("stroke-width",o.sw),o.sc&&l.setAttribute("stroke",o.sc),o.fc&&(l.setAttribute("fill",o.fc),l.style.color=o.fc));if(this.isVisible&&(this.elemMdf||this.firstFrame)&&this.innerElem.getBBox){var p=this.innerElem.getBBox();this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.cont.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.cont.setAttribute("height",p.height));var m=1;(this.currentBBox.w!==p.width+2*m||this.currentBBox.h!==p.height+2*m||this.currentBBox.x!==p.x-m||this.currentBBox.y!==p.y-m)&&(this.currentBBox.w=p.width+2*m,this.currentBBox.h=p.height+2*m,this.currentBBox.x=p.x-m,this.currentBBox.y=p.y-m,this.cont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.cont.style.transform=this.cont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}this.firstFrame&&(this.firstFrame=!1)}},createElement(HBaseElement,HImageElement),HImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;if(this.data.hasMask){var s=document.createElement("div");styleDiv(s);var r=document.createElementNS(svgNS,"svg");styleDiv(r),r.setAttribute("width",this.assetData.w),r.setAttribute("height",this.assetData.h),s.appendChild(r),this.imageElem=document.createElementNS(svgNS,"image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),r.appendChild(this.imageElem),this.layerElement=s,this.transformedElement=s,this.baseElement=s,this.innerElem=s,this.maskedElement=this.imageElem}else styleDiv(e),this.layerElement=e,this.baseElement=e,this.innerElem=e,this.transformedElement=e;e.src=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.checkParenting()},HImageElement.prototype.show=HSolidElement.prototype.show,HImageElement.prototype.hide=HSolidElement.prototype.hide,HImageElement.prototype.renderFrame=HSolidElement.prototype.renderFrame,HImageElement.prototype.destroy=HSolidElement.prototype.destroy,createElement(HBaseElement,HCameraElement),HCameraElement.prototype.setup=function(){var t,e,s=this.comp.threeDElements.length;for(t=0;s>t;t+=1)e=this.comp.threeDElements[t],e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,s=this.firstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;e>t;t+=1)s=this.hierarchy[t].finalTransform.mProp.mdf?!0:s;if(s||this.p&&this.p.mdf||this.px&&(this.px.mdf||this.py.mdf||this.pz.mdf)||this.rx.mdf||this.ry.mdf||this.rz.mdf||this.or.mdf||this.a&&this.a.mdf){if(this.mat.reset(),this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var r=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]],i=Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)),a=[r[0]/i,r[1]/i,r[2]/i],n=Math.sqrt(a[2]*a[2]+a[0]*a[0]),o=Math.atan2(a[1],n),h=Math.atan2(a[0],-a[2]);this.mat.rotateY(h).rotateX(-o)}if(this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v),this.hierarchy){var l;for(e=this.hierarchy.length,t=0;e>t;t+=1)l=this.hierarchy[t].finalTransform.mProp.iv.props,this.mat.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],-l[12],-l[13],l[14],l[15])}e=this.comp.threeDElements.length;var p;for(t=0;e>t;t+=1)p=this.comp.threeDElements[t],p.container.style.transform=p.container.style.webkitTransform=this.mat.toCSS()}this.firstFrame=!1},HCameraElement.prototype.destroy=function(){};var Expressions=function(){function t(t){t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer)}var e={};return e.initExpressions=t,e}();expressionsPlugin=Expressions,function(){function t(){return this.pv}function e(t,e,s){if(!this.k||!this.keyframes)return this.pv;var r=this.comp.renderedFrame,i=this.keyframes,a=i[i.length-1].t;if(a>=r)return this.pv;var n,o;s?(n=e?Math.abs(a-elem.comp.globalData.frameRate*e):Math.max(0,a-this.elem.data.ip),o=a-n):((!e||e>i.length-1)&&(e=i.length-1),o=i[i.length-1-e].t,n=a-o);var h,l,p,m=this.offsetTime||0;if("pingpong"===t.toLowerCase()){var f=Math.floor((r-o)/n);if(f%2!==0)return this.getValueAtTime((n-(r-o)%n+o-m)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(o/this.comp.globalData.frameRate,0),d=this.getValueAtTime(a/this.comp.globalData.frameRate,0),u=this.getValueAtTime(((r-o)%n+o)/this.comp.globalData.frameRate,0),y=Math.floor((r-o)/n);if(this.pv.length){for(p=new Array(c.length),l=p.length,h=0;l>h;h+=1)p[h]=(d[h]-c[h])*y+u[h];return p}return(d-c)*y+u}if("continue"===t){var g=this.getValueAtTime(a/this.comp.globalData.frameRate,0),v=this.getValueAtTime((a-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(p=new Array(g.length),l=p.length,h=0;l>h;h+=1)p[h]=g[h]+(g[h]-v[h])*((r-a)/this.comp.globalData.frameRate)/5e-4;return p}return g+(g-v)*((r-a)/.001)}}return this.getValueAtTime(((r-o)%n+o-m)/this.comp.globalData.frameRate,0)}function s(t,e,s){if(!this.k)return this.pv;var r=time*elem.comp.globalData.frameRate,i=this.keyframes,a=i[0].t,n=this.offsetTime||0;if(r>=a)return this.pv;var o,h;s?(o=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-a),h=a+o):((!e||e>i.length-1)&&(e=i.length-1),h=i[e].t,o=h-a);var l,p,m;if("pingpong"===t){var f=Math.floor((a-r)/o);if(f%2===0)return this.getValueAtTime(((a-r)%o+a-n)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var c=this.getValueAtTime(a/this.comp.globalData.frameRate,0),d=this.getValueAtTime(h/this.comp.globalData.frameRate,0),u=this.getValueAtTime((o-(a-r)%o+a)/this.comp.globalData.frameRate,0),y=Math.floor((a-r)/o)+1;if(this.pv.length){for(m=new Array(c.length),p=m.length,l=0;p>l;l+=1)m[l]=u[l]-(d[l]-c[l])*y;return m}return u-(d-c)*y}if("continue"===t){var g=this.getValueAtTime(a/this.comp.globalData.frameRate,0),v=this.getValueAtTime((a+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(m=new Array(g.length),p=m.length,l=0;p>l;l+=1)m[l]=g[l]+(g[l]-v[l])*(a-r)/.001;return m}return g+(g-v)*(a-r)/.001}}return this.getValueAtTime((o-(a-r)%o+a-n)/this.comp.globalData.frameRate,0)}function r(t){if(this._cachingAtTime||(this._cachingAtTime={lastValue:-99999,lastIndex:0}),t!==this._cachingAtTime.lastFrame){t*=this.elem.globalData.frameRate,t-=this.offsetTime;var e=this._caching.lastFrame<t?this._caching.lastIndex:0,s=this.interpolateValue(t,e,this.pv,this._cachingAtTime);this._cachingAtTime.lastIndex=s.iterationIndex,this._cachingAtTime.value=s.value,this._cachingAtTime.lastFrame=t}return this._cachingAtTime.value}function i(t){if(void 0!==this.vel)return this.vel;var e,s=-.01,r=this.getValueAtTime(t),i=this.getValueAtTime(t+s);if(r.length){e=Array.apply(null,{length:r.length});var a;for(a=0;a<r.length;a+=1)e[a]=(i[a]-r[a])/s}else e=(i-r)/s;return e}function a(t){this.propertyGroup=t}function n(t,e,s){e.x&&(s.k=!0,s.x=!0,s.getValue&&(s.getPreValue=s.getValue),s.getValue=ExpressionManager.initiateExpression.bind(s)(t,e,s))}function o(t){console.log("time:",t)}function h(t){}function l(t){if(this._shapeValueAtTime||(this._lastIndexAtTime=0,this._lastTimeAtTime=-999999,this._shapeValueAtTime=shape_pool.clone(this.pv)),t!==this._lastTimeAtTime){this._lastTimeAtTime=t,t*=this.elem.globalData.frameRate;var e=this.interpolateShape(t,this._lastIndexAtTime,this._shapeValueAtTime,!1);this._lastIndexAtTime=e.iterationIndex}return this._shapeValueAtTime}var p=function(){function e(t,e){return this.textIndex=t+1,this.textTotal=e,this.getValue(),this.v}return function(s,o){this.pv=1,this.comp=s.comp,this.elem=s,this.mult=.01,this.type="textSelector",this.textTotal=o.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],n.bind(this)(s,o,this),this.getMult=e,this.getVelocityAtTime=i,this.getValueAtTime=this.kf?r.bind(this):t.bind(this),this.setGroupProperty=a}}(),m=PropertyFactory.getProp;PropertyFactory.getProp=function(l,p,f,c,d){var u=m(l,p,f,c,d);u.getValueAtTime=2===f?u.dynamicProperties.length?o.bind(u):h.bind(u):u.kf?r.bind(u):t.bind(u),u.setGroupProperty=a,u.loopOut=e,u.loopIn=s,u.getVelocityAtTime=i,u.numKeys=1===p.a?p.k.length:0;var y=u.k;return void 0!==p.ix&&Object.defineProperty(u,"propertyIndex",{get:function(){return p.ix}}),n(l,p,u),!y&&u.x&&d.push(u),u};var f=ShapePropertyFactory.getConstructorFunction(),c=ShapePropertyFactory.getKeyframedConstructorFunction();f.prototype.vertices=function(t,e){var s=this.v;void 0!==e&&(s=this.getValueAtTime(e,0));var r,i=s._length,a=s[t],n=s.v,o=Array.apply(null,{length:i});for(r=0;i>r;r+=1)o[r]="i"===t||"o"===t?[a[r][0]-n[r][0],a[r][1]-n[r][1]]:[a[r][0],a[r][1]];return o},f.prototype.points=function(t){return this.vertices("v",t)},f.prototype.inTangents=function(t){return this.vertices("i",t)},f.prototype.outTangents=function(t){return this.vertices("o",t)},f.prototype.isClosed=function(){return this.v.c},f.prototype.pointOnPath=function(t,e){var s=this.v;void 0!==e&&(s=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(s));for(var r,i=this._segmentsLength,a=i.lengths,n=i.totalLength*t,o=0,h=a.length,l=0;h>o;){if(l+a[o].addedLength>n){r=a[o].segments;var p=o,m=s.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength,c=bez.getPointInSegment(s.v[p],s.v[m],s.o[p],s.i[m],f,a[o]);break}l+=a[o].addedLength,o+=1}return c||(c=s.c?[s.v[0][0],s.v[0][1]]:[s.v[s._length-1][0],s.v[s._length-1][1]]),c},f.prototype.vectorOnPath=function(t,e,s){t=1==t?this.v.c?0:.999:t;var r=this.pointOnPath(t,e),i=this.pointOnPath(t+.001,e),a=i[0]-r[0],n=i[1]-r[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),h="tangent"===s?[a/o,n/o]:[-n/o,a/o];return h},f.prototype.tangentOnPath=function(t,e){return this.vectorOnPath(t,e,"tangent")},f.prototype.normalOnPath=function(t,e){return this.vectorOnPath(t,e,"normal")},f.prototype.setGroupProperty=a,f.prototype.getValueAtTime=t,c.prototype.vertices=f.prototype.vertices,c.prototype.points=f.prototype.points,c.prototype.inTangents=f.prototype.inTangents,c.prototype.outTangents=f.prototype.outTangents,c.prototype.isClosed=f.prototype.isClosed,c.prototype.pointOnPath=f.prototype.pointOnPath,c.prototype.vectorOnPath=f.prototype.vectorOnPath,c.prototype.tangentOnPath=f.prototype.tangentOnPath,c.prototype.normalOnPath=f.prototype.normalOnPath,c.prototype.setGroupProperty=f.prototype.setGroupProperty,c.prototype.getValueAtTime=l;var d=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,s,r,i){var a=d(t,e,s,r,i),o=a.k;return void 0!==e.ix&&Object.defineProperty(a,"propertyIndex",{get:function(){return e.ix}}),3===s?n(t,e.pt,a):4===s&&n(t,e.ks,a),!o&&a.x&&r.push(a),a};var u=PropertyFactory.getTextSelectorProp;PropertyFactory.getTextSelectorProp=function(t,e,s){return 1===e.t?new p(t,e,s):u(t,e,s)}}(),function(){function t(){return this.data.d.x?(this.comp=this.elem.comp,this.getValue&&(this.getPreValue=this.getValue),this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.getValue=this.getExpressionValue,!0):!1}TextProperty.prototype.searchProperty=function(){return this.kf=this.searchExpressions()||this.data.d.k.length>1,this.kf},TextProperty.prototype.getExpressionValue=function(t){this.calculateExpression(),this.mdf&&(this.currentData.t=this.v.toString(),this.completeTextData(this.currentData))},TextProperty.prototype.searchExpressions=t}();var ExpressionManager=function(){function duplicatePropertyValue(t,e){if(e=e||1,"number"==typeof t||t instanceof Number)return t*e;if(t.i)return JSON.parse(JSON.stringify(t));var s,r=Array.apply(null,{length:t.length}),i=t.length;for(s=0;i>s;s+=1)r[s]=t[s]*e;

return r}function shapesEqual(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var s,r=t._length;for(s=0;r>s;s+=1)if(t.v[s][0]!==e.v[s][0]||t.v[s][1]!==e.v[s][1]||t.o[s][0]!==e.o[s][0]||t.o[s][1]!==e.o[s][1]||t.i[s][0]!==e.i[s][0]||t.i[s][1]!==e.i[s][1])return!1;return!0}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if(t.constructor===Array){var s,r=t.length,i=[];for(s=0;r>s;s+=1)i[s]=-t[s];return i}}function sum(t,e){var s=typeof t,r=typeof e;if("string"===s||"string"===r)return t+e;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t+e;if(t.constructor===Array&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t[0]=t[0]+e,t;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&e.constructor===Array)return e[0]=t+e[0],e;if(t.constructor===Array&&e.constructor===Array){for(var i=0,a=t.length,n=e.length,o=[];a>i||n>i;)o[i]=("number"==typeof t[i]||t[i]instanceof Number)&&("number"==typeof e[i]||e[i]instanceof Number)?t[i]+e[i]:void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function sub(t,e){var s=typeof t,r=typeof e;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return"string"===s&&(t=parseInt(t)),"string"===r&&(e=parseInt(e)),t-e;if(t.constructor===Array&&("number"===r||"boolean"===r||"string"===r||e instanceof Number))return t[0]=t[0]-e,t;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&e.constructor===Array)return e[0]=t-e[0],e;if(t.constructor===Array&&e.constructor===Array){for(var i=0,a=t.length,n=e.length,o=[];a>i||n>i;)o[i]="number"==typeof t[i]||t[i]instanceof Number?t[i]-e[i]:void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function mul(t,e){var s,r=typeof t,i=typeof e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number))return t*e;var a,n;if(t.constructor===Array&&("number"===i||"boolean"===i||"string"===i||e instanceof Number)){for(n=t.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t[a]*e;return s}if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&e.constructor===Array){for(n=e.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t*e[a];return s}return 0}function div(t,e){var s,r=typeof t,i=typeof e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number))return t/e;var a,n;if(t.constructor===Array&&("number"===i||"boolean"===i||"string"===i||e instanceof Number)){for(n=t.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t[a]/e;return s}if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&e.constructor===Array){for(n=e.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t/e[a];return s}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}function clamp(t,e,s){if(e>s){var r=s;s=e,e=r}return Math.min(Math.max(t,e),s)}function radiansToDegrees(t){return t/degToRads}function degreesToRadians(t){return t*degToRads}function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var s,r=Math.min(t.length,e.length),i=0;for(s=0;r>s;s+=1)i+=Math.pow(e[s]-t[s],2);return Math.sqrt(i)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,s,r=t[0],i=t[1],a=t[2],n=Math.max(r,i,a),o=Math.min(r,i,a),h=(n+o)/2;if(n==o)e=s=0;else{var l=n-o;switch(s=h>.5?l/(2-n-o):l/(n+o),n){case r:e=(i-a)/l+(a>i?6:0);break;case i:e=(a-r)/l+2;break;case a:e=(r-i)/l+4}e/=6}return[e,s,h,t[3]]}function hslToRgb(t){function e(t,e,s){return 0>s&&(s+=1),s>1&&(s-=1),1/6>s?t+6*(e-t)*s:.5>s?e:2/3>s?t+(e-t)*(2/3-s)*6:t}var s,r,i,a=t[0],n=t[1],o=t[2];if(0==n)s=r=i=o;else{var h=.5>o?o*(1+n):o+n-o*n,l=2*o-h;s=e(l,h,a+1/3),r=e(l,h,a),i=e(l,h,a-1/3)}return[s,r,i,t[3]]}function linear(t,e,s,r,i){if(void 0===r||void 0===i)return linear(t,0,1,e,s);if(e>=t)return r;if(t>=s)return i;var a=s===e?0:(t-e)/(s-e);if(!r.length)return r+(i-r)*a;var n,o=r.length,h=Array.apply(null,{length:o});for(n=0;o>n;n+=1)h[n]=r[n]+(i[n]-r[n])*a;return h}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var s,r=e.length;t||(t=Array.apply(null,{length:r}));var i=Array.apply(null,{length:r}),a=BMMath.random();for(s=0;r>s;s+=1)i[s]=t[s]+a*(e[s]-t[s]);return i}void 0===t&&(t=0);var n=BMMath.random();return t+n*(e-t)}function createPath(t,e,s,r){e=e&&e.length?e:t,s=s&&s.length?s:t;var a=shape_pool.newShape(),n=t.length;for(a.setPathData(r,n),i=0;i<n;i+=1)a.setTripleAt(t[i][0],t[i][1],s[i][0]+t[i][0],s[i][1]+t[i][1],e[i][0]+t[i][0],e[i][1]+t[i][1],i,!0);return a}function initiateExpression(elem,data,property){function lookAt(t,e){var s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.atan2(s[0],Math.sqrt(s[1]*s[1]+s[2]*s[2]))/degToRads,i=-Math.atan2(s[1],s[2])/degToRads;return[i,r,0]}function easeOut(t,e,s){return-(s-e)*t*(t-2)+e}function nearestKey(t){var e,s,r,i=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(s=-1,t*=elem.comp.globalData.frameRate,t<data.k[0].t)s=1,r=data.k[0].t;else{for(e=0;i-1>e;e+=1){if(t===data.k[e].t){s=e+1,r=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(s=e+2,r=data.k[e+1].t):(s=e+1,r=data.k[e].t);break}}-1===s&&(s=e+1,r=data.k[e].t)}else s=0,r=0;var a={};return a.index=s,a.time=r/elem.comp.globalData.frameRate,a}function key(t){var e,s,r;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate};var i;for(i=t!==data.k.length-1||data.k[t].h?data.k[t].s:data.k[t-1].e,r=i.length,s=0;r>s;s+=1)e[s]=i[s];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function executeExpression(){if(_needsRandom&&seedRandom(randSeed),this.frameExpressionId!==elem.globalData.frameId||"textSelector"===this.type){if(this.lock)return this.v=duplicatePropertyValue(this.pv,this.mult),!0;"textSelector"===this.type&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),anchorPoint=transform.anchorPoint),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!(!elem.hierarchy||!elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[0].layerInterface),this.lock=!0,this.getPreValue&&this.getPreValue(),value=this.pv,time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),bindedFn(),this.frameExpressionId=elem.globalData.frameId;var t,e;if(this.mult)if("number"==typeof this.v||this.v instanceof Number||this.v instanceof String||"string"==typeof this.v)this.v*=this.mult;else if(1===this.v.length)this.v=this.v[0]*this.mult;else for(e=this.v.length,value===this.v&&(this.v=2===e?[value[0],value[1]]:[value[0],value[1],value[2]]),t=0;e>t;t+=1)this.v[t]*=this.mult;if(1===this.v.length&&(this.v=this.v[0]),"number"==typeof this.v||this.v instanceof Number||this.v instanceof String||"string"==typeof this.v)this.lastValue!==this.v&&(this.lastValue=this.v,this.mdf=!0);else if(this.v._length)shapesEqual(this.v,this.localShapeCollection.shapes[0])||(this.mdf=!0,this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(shape_pool.clone(this.v)));else for(e=this.v.length,t=0;e>t;t+=1)this.v[t]!==this.lastValue[t]&&(this.lastValue[t]=this.v[t],this.mdf=!0);this.lock=!1}}var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,content,effect,thisComp=elem.comp,thisProperty=property;elem.comp.frameDuration=1/elem.comp.globalData.frameRate;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,loopIn,loop_in,loopOut,loop_out,toWorld,fromWorld,fromComp,fromCompToSurface,anchorPoint,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,fn=new Function,fn=eval("[function(){"+val+";if($bm_rt.__shapeObject){this.v=shape_pool.clone($bm_rt.v);}else{this.v=$bm_rt;}}]")[0],bindedFn=fn.bind(this),numKeys=property.kf?data.k.length:0,wiggle=function(t,e){var s,r,i=this.pv.length?this.pv.length:1,a=Array.apply(null,{len:i});for(r=0;i>r;r+=1)a[r]=0;t=5;var n=Math.floor(time*t);for(s=0,r=0;n>s;){for(r=0;i>r;r+=1)a[r]+=-e+2*e*BMMath.random();s+=1}var o=time*t,h=o-Math.floor(o),l=Array.apply({length:i});if(i>1){for(r=0;i>r;r+=1)l[r]=this.pv[r]+a[r]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut);var loopInDuration=function(t,e){return loopIn(t,e,!0)}.bind(this),loopOutDuration=function(t,e){return loopOut(t,e,!0)}.bind(this);this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,textIndex,textTotal,selectorValue,index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random());return executeExpression}var ob={},Math=BMMath,window=null,document=null,add=sum,radians_to_degrees=radiansToDegrees,degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];return ob.initiateExpression=initiateExpression,ob}(),ShapeExpressionInterface=function(){function t(t,e,s){return d(t,e,s)}function e(t,e,s){return y(t,e,s)}function s(t,e,s){return g(t,e,s)}function r(t,e,s){return v(t,e,s)}function i(t,e,s){return b(t,e,s)}function a(t,e,s){return E(t,e,s)}function n(t,e,s){return P(t,e,s)}function o(t,e,s){return x(t,e,s)}function h(t,e,s){return S(t,e,s)}function l(t,e,s){return C(t,e,s)}function p(t,e,s){return k(t,e,s)}function m(t,e,s){return A(t,e,s)}function f(t,e,s){var r,i=[],a=t?t.length:0;for(r=0;a>r;r+=1)"gr"==t[r].ty?i.push(ShapeExpressionInterface.createGroupInterface(t[r],e[r],s)):"fl"==t[r].ty?i.push(ShapeExpressionInterface.createFillInterface(t[r],e[r],s)):"st"==t[r].ty?i.push(ShapeExpressionInterface.createStrokeInterface(t[r],e[r],s)):"tm"==t[r].ty?i.push(ShapeExpressionInterface.createTrimInterface(t[r],e[r],s)):"tr"==t[r].ty||("el"==t[r].ty?i.push(ShapeExpressionInterface.createEllipseInterface(t[r],e[r],s)):"sr"==t[r].ty?i.push(ShapeExpressionInterface.createStarInterface(t[r],e[r],s)):"sh"==t[r].ty?i.push(ShapeExpressionInterface.createPathInterface(t[r],e[r],s)):"rc"==t[r].ty?i.push(ShapeExpressionInterface.createRectInterface(t[r],e[r],s)):"rd"==t[r].ty?i.push(ShapeExpressionInterface.createRoundedInterface(t[r],e[r],s)):"rp"==t[r].ty&&i.push(ShapeExpressionInterface.createRepatearInterface(t[r],e[r],s)));return i}var c={createShapeInterface:t,createGroupInterface:e,createTrimInterface:i,createStrokeInterface:r,createTransformInterface:a,createEllipseInterface:n,createStarInterface:o,createRectInterface:h,createRoundedInterface:l,createRepatearInterface:p,createPathInterface:m,createFillInterface:s},d=function(){return function(t,e,s){function r(t){if("number"==typeof t)return i[t-1];for(var e=0,s=i.length;s>e;){if(i[e]._name===t)return i[e];e+=1}}var i;return r.propertyGroup=s,i=f(t,e,r),r}}(),u=function(){return function(t,e,s){var r,i=function(t){for(var e=0,s=r.length;s>e;){if(r[e]._name===t||r[e].mn===t||r[e].propertyIndex===t||r[e].ix===t||r[e].ind===t)return r[e];e+=1}return"number"==typeof t?r[t-1]:void 0};return i.propertyGroup=function(t){return 1===t?i:s(t-1)},r=f(t.it,e.it,i.propertyGroup),i.numProperties=r.length,i.propertyIndex=t.cix,i}}(),y=function(){return function(t,e,s){var r=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return r.content;case"ADBE Vector Transform Group":case 3:default:return r.transform}};r.propertyGroup=function(t){return 1===t?r:s(t-1)};var i=u(t,e,r.propertyGroup),a=ShapeExpressionInterface.createTransformInterface(t.it[t.it.length-1],e.it[e.it.length-1],r.propertyGroup);return r.content=i,r.transform=a,Object.defineProperty(r,"_name",{get:function(){return t.nm}}),r.numProperties=t.np,r.propertyIndex=t.ix,r.nm=t.nm,r.mn=t.mn,r}}(),g=function(){return function(t,e,s){function r(t){return"Color"===t||"color"===t?r.color:"Opacity"===t||"opacity"===t?r.opacity:void 0}return Object.defineProperty(r,"color",{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}}),Object.defineProperty(r,"opacity",{get:function(){return ExpressionValue(e.o,100)}}),Object.defineProperty(r,"_name",{value:t.nm}),Object.defineProperty(r,"mn",{value:t.mn}),e.c.setGroupProperty(s),e.o.setGroupProperty(s),r}}(),v=function(){return function(t,e,s){function r(t){return 1===t?c:s(t-1)}function i(t){return 1===t?l:r(t-1)}function a(s){Object.defineProperty(l,t.d[s].nm,{get:function(){return ExpressionValue(e.d.dataProps[s].p)}})}function n(t){return"Color"===t||"color"===t?n.color:"Opacity"===t||"opacity"===t?n.opacity:"Stroke Width"===t||"stroke width"===t?n.strokeWidth:void 0}var o,h=t.d?t.d.length:0,l={};for(o=0;h>o;o+=1)a(o),e.d.dataProps[o].p.setGroupProperty(i);return Object.defineProperty(n,"color",{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}}),Object.defineProperty(n,"opacity",{get:function(){return ExpressionValue(e.o,100)}}),Object.defineProperty(n,"strokeWidth",{get:function(){return ExpressionValue(e.w)}}),Object.defineProperty(n,"dash",{get:function(){return l}}),Object.defineProperty(n,"_name",{value:t.nm}),Object.defineProperty(n,"mn",{value:t.mn}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),e.w.setGroupProperty(r),n}}(),b=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:void 0}return i.propertyIndex=t.ix,e.s.setGroupProperty(r),e.e.setGroupProperty(r),e.o.setGroupProperty(r),i.propertyIndex=t.ix,Object.defineProperty(i,"start",{get:function(){return ExpressionValue(e.s,1/e.s.mult)}}),Object.defineProperty(i,"end",{get:function(){return ExpressionValue(e.e,1/e.e.mult)}}),Object.defineProperty(i,"offset",{get:function(){return ExpressionValue(e.o)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),E=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.a.ix===e?i.anchorPoint:t.o.ix===e?i.opacity:t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.s.ix===e?i.scale:t.sk&&t.sk.ix===e?i.skew:t.sa&&t.sa.ix===e?i.skewAxis:"Opacity"===e?i.opacity:"Position"===e?i.position:"Anchor Point"===e?i.anchorPoint:"Scale"===e?i.scale:"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:"Skew"===e?i.skew:"Skew Axis"===e?i.skewAxis:void 0}e.transform.mProps.o.setGroupProperty(r),e.transform.mProps.p.setGroupProperty(r),e.transform.mProps.a.setGroupProperty(r),e.transform.mProps.s.setGroupProperty(r),e.transform.mProps.r.setGroupProperty(r),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(r),e.transform.mProps.sa.setGroupProperty(r)),e.transform.op.setGroupProperty(r),Object.defineProperty(i,"opacity",{get:function(){return ExpressionValue(e.transform.mProps.o,1/e.transform.mProps.o.mult)}}),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(e.transform.mProps.p)}}),Object.defineProperty(i,"anchorPoint",{get:function(){return ExpressionValue(e.transform.mProps.a)}});return Object.defineProperty(i,"scale",{get:function(){return ExpressionValue(e.transform.mProps.s,1/e.transform.mProps.s.mult)}}),Object.defineProperty(i,"rotation",{get:function(){return ExpressionValue(e.transform.mProps.r,1/e.transform.mProps.r.mult)}}),Object.defineProperty(i,"skew",{get:function(){return ExpressionValue(e.transform.mProps.sk)}}),Object.defineProperty(i,"skewAxis",{get:function(){return ExpressionValue(e.transform.mProps.sa)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.ty="tr",i.mn=t.mn,i}}(),P=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:void 0}i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(r),a.p.setGroupProperty(r),Object.defineProperty(i,"size",{get:function(){return ExpressionValue(a.s)}}),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),x=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:void 0:i.innerRadius}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(r),a.os.setGroupProperty(r),a.pt.setGroupProperty(r),a.p.setGroupProperty(r),a.r.setGroupProperty(r),t.ir&&(a.ir.setGroupProperty(r),a.is.setGroupProperty(r)),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"rotation",{get:function(){return ExpressionValue(a.r,1/a.r.mult)}}),Object.defineProperty(i,"points",{get:function(){return ExpressionValue(a.pt)}}),Object.defineProperty(i,"outerRadius",{get:function(){return ExpressionValue(a.or)}}),Object.defineProperty(i,"outerRoundness",{get:function(){return ExpressionValue(a.os)}}),Object.defineProperty(i,"innerRadius",{get:function(){return a.ir?ExpressionValue(a.ir):0}}),Object.defineProperty(i,"innerRoundness",{get:function(){return a.is?ExpressionValue(a.is,1/a.is.mult):0}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),S=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e?i.size:void 0}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(r),a.s.setGroupProperty(r),a.r.setGroupProperty(r),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"roundness",{get:function(){return ExpressionValue(a.r)}}),Object.defineProperty(i,"size",{get:function(){return ExpressionValue(a.s)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),C=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:void 0}var a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(r),Object.defineProperty(i,"radius",{get:function(){return ExpressionValue(a.rd)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),k=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:void 0}var a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(r),a.o.setGroupProperty(r),Object.defineProperty(i,"copies",{get:function(){return ExpressionValue(a.c)}}),Object.defineProperty(i,"offset",{get:function(){return ExpressionValue(a.o)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),A=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?i.path:void 0}var a=e.sh;return a.setGroupProperty(r),Object.defineProperty(i,"path",{get:function(){return a.k&&a.getValue(),a}}),Object.defineProperty(i,"shape",{get:function(){return a.k&&a.getValue(),a}}),Object.defineProperty(i,"_name",{value:t.nm}),Object.defineProperty(i,"ix",{value:t.ix}),Object.defineProperty(i,"mn",{value:t.mn}),i}}();return c}(),TextExpressionInterface=function(){return function(t){function e(){}var s,r;return Object.defineProperty(e,"sourceText",{get:function(){var e=t.textProperty.currentData.t;return t.textProperty.currentData.t!==s&&(t.textProperty.currentData.t=s,r=new String(e),r.value=e?e:new String(e)),r}}),e}}(),LayerExpressionInterface=function(){function t(t,e){var s=new Matrix;s.reset();var r;if(r=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,r.applyToMatrix(s),this._elem.hierarchy&&this._elem.hierarchy.length){var i,a=this._elem.hierarchy.length;for(i=0;a>i;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(s);return s.applyToPointArray(t[0],t[1],t[2]||0)}return s.applyToPointArray(t[0],t[1],t[2]||0)}function e(t,e){var s=new Matrix;s.reset();var r;if(r=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,r.applyToMatrix(s),this._elem.hierarchy&&this._elem.hierarchy.length){var i,a=this._elem.hierarchy.length;for(i=0;a>i;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(s);return s.inversePoint(t)}return s.inversePoint(t)}function s(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var s,r=this._elem.hierarchy.length;for(s=0;r>s;s+=1)this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}return function(r){function i(t){n.mask=new MaskManagerInterface(t,r)}function a(t){n.effect=t}function n(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return n.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return o;case 4:case"ADBE Effect Parade":return n.effect}}var o=TransformExpressionInterface(r.transform);return n.toWorld=t,n.fromWorld=e,n.toComp=t,n.fromComp=s,n.sourceRectAtTime=r.sourceRectAtTime.bind(r),n._elem=r,Object.defineProperty(n,"hasParent",{get:function(){return!!r.hierarchy}}),Object.defineProperty(n,"parent",{get:function(){return r.hierarchy[0].layerInterface}}),Object.defineProperty(n,"rotation",{get:function(){return o.rotation}}),Object.defineProperty(n,"scale",{get:function(){return o.scale}}),Object.defineProperty(n,"position",{get:function(){return o.position}}),Object.defineProperty(n,"anchorPoint",{get:function(){return o.anchorPoint}}),Object.defineProperty(n,"transform",{get:function(){return o}}),Object.defineProperty(n,"width",{get:function(){return 0===r.data.ty?r.data.w:100}}),Object.defineProperty(n,"height",{get:function(){return 0===r.data.ty?r.data.h:100}}),Object.defineProperty(n,"source",{get:function(){return r.data.refId}}),Object.defineProperty(n,"index",{get:function(){return r.data.ind}}),Object.defineProperty(n,"_name",{value:r.data.nm}),Object.defineProperty(n,"content",{get:function(){return n.shapeInterface}}),Object.defineProperty(n,"active",{get:function(){return r.isVisible}}),Object.defineProperty(n,"text",{get:function(){return n.textInterface}}),n.registerMaskInterface=i,n.registerEffectsInterface=a,n}}(),CompExpressionInterface=function(){return function(t){function e(e){for(var s=0,r=t.layers.length;r>s;){if(t.layers[s].nm===e||t.layers[s].ind===e)return t.elements[s].layerInterface;s+=1}return{active:!1}}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.globalData.compSize.h,e.width=t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e}}(),TransformExpressionInterface=function(){return function(t){function e(s){switch(s){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"position":case"Position":case"ADBE Position":case 2:return t.position;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}return Object.defineProperty(e,"rotation",{get:function(){return t.rotation}}),Object.defineProperty(e,"scale",{get:function(){return t.scale}}),Object.defineProperty(e,"position",{get:function(){return t.position}}),Object.defineProperty(e,"xPosition",{get:function(){return t.xPosition}}),Object.defineProperty(e,"yPosition",{get:function(){return t.yPosition}}),Object.defineProperty(e,"anchorPoint",{get:function(){return t.anchorPoint}}),Object.defineProperty(e,"opacity",{get:function(){return t.opacity}}),Object.defineProperty(e,"skew",{get:function(){return t.skew}}),Object.defineProperty(e,"skewAxis",{get:function(){return t.skewAxis}}),e}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,s=this.compositions.length;s>e;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){function t(t,s){if(t.effects){var r,i=[],a=t.data.ef,n=t.effects.effectElements.length;for(r=0;n>r;r+=1)i.push(e(a[r],t.effects.effectElements[r],s,t));return function(e){for(var s=t.data.ef,r=0,a=s.length;a>r;){if(e===s[r].nm||e===s[r].mn||e===s[r].ix)return i[r];r+=1}}}}function e(t,r,i,a){function n(t){return 1===t?p:i(t-1)}var o,h=[],l=t.ef.length;for(o=0;l>o;o+=1)h.push(5===t.ef[o].ty?e(t.ef[o],r.effectElements[o],r.effectElements[o].propertyGroup,a):s(r.effectElements[o],t.ef[o].ty,a,n));var p=function(e){for(var s=t.ef,r=0,i=s.length;i>r;){if(e===s[r].nm||e===s[r].mn||e===s[r].ix)return 5===s[r].ty?h[r]:h[r]();r+=1}return h[0]()};return p.propertyGroup=n,"ADBE Color Control"===t.mn&&Object.defineProperty(p,"color",{get:function(){return h[0]()}}),Object.defineProperty(p,"numProperties",{get:function(){return t.np}}),p.active=0!==t.en,p}function s(t,e,s,r){function i(){return 10===e?s.comp.compInterface(t.p.v):ExpressionValue(t.p)}return t.p.setGroupProperty&&t.p.setGroupProperty(r),i}var r={createEffectsInterface:t};return r}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}});var e=function(e,s){var r,i=Array.apply(null,{length:e.viewData.length}),a=e.viewData.length;for(r=0;a>r;r+=1)i[r]=new t(e.viewData[r],e.masksProperties[r]);var n=function(t){for(r=0;a>r;){if(e.masksProperties[r].nm===t)return i[r];r+=1}};return n};return e}(),ExpressionValue=function(){return function(t,e,s){var r;t.k&&t.getValue();var i,a,n;if(s){if("color"===s){for(a=4,r=Array.apply(null,{length:a}),n=Array.apply(null,{length:a}),i=0;a>i;i+=1)r[i]=n[i]=e&&3>i?t.v[i]*e:1;r.value=n}}else if("number"==typeof t.v||t.v instanceof Number)r=new Number(e?t.v*e:t.v),r.value=e?t.v*e:t.v;else{for(a=t.v.length,r=Array.apply(null,{length:a}),n=Array.apply(null,{length:a}),i=0;a>i;i+=1)r[i]=n[i]=e?t.v[i]*e:t.v[i];r.value=n}return r.numKeys=t.keyframes?t.keyframes.length:0,r.key=function(e){return r.numKeys?t.keyframes[e-1].t:0},r.valueAtTime=t.getValueAtTime,r.propertyGroup=t.propertyGroup,r}}();GroupEffect.prototype.getValue=function(){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.mdf=this.dynamicProperties[t].mdf?!0:this.mdf},GroupEffect.prototype.init=function(t,e,s){this.data=t,this.mdf=!1,this.effectElements=[];var r,i,a=this.data.ef.length,n=this.data.ef;for(r=0;a>r;r+=1)switch(n[r].ty){case 0:i=new SliderEffect(n[r],e,s),this.effectElements.push(i);break;case 1:i=new AngleEffect(n[r],e,s),this.effectElements.push(i);break;case 2:i=new ColorEffect(n[r],e,s),this.effectElements.push(i);break;case 3:i=new PointEffect(n[r],e,s),this.effectElements.push(i);break;case 4:case 7:i=new CheckboxEffect(n[r],e,s),this.effectElements.push(i);break;case 10:i=new LayerIndexEffect(n[r],e,s),this.effectElements.push(i);break;case 11:i=new MaskIndexEffect(n[r],e,s),this.effectElements.push(i);break;case 5:i=new EffectsManager(n[r],e,s),this.effectElements.push(i);break;case 6:i=new NoValueEffect(n[r],e,s),this.effectElements.push(i)}};var bodymovinjs={};bodymovinjs.play=play,bodymovinjs.pause=pause,bodymovinjs.setLocationHref=setLocationHref,bodymovinjs.togglePause=togglePause,bodymovinjs.setSpeed=setSpeed,bodymovinjs.setDirection=setDirection,bodymovinjs.stop=stop,bodymovinjs.moveFrame=moveFrame,bodymovinjs.searchAnimations=searchAnimations,bodymovinjs.registerAnimation=registerAnimation,bodymovinjs.loadAnimation=loadAnimation,bodymovinjs.setSubframeRendering=setSubframeRendering,bodymovinjs.resize=resize,bodymovinjs.start=start,bodymovinjs.goToAndStop=goToAndStop,bodymovinjs.destroy=destroy,bodymovinjs.setQuality=setQuality,bodymovinjs.inBrowser=inBrowser,bodymovinjs.installPlugin=installPlugin,bodymovinjs.__getFactory=getFactory,bodymovinjs.version="4.13.0";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return bodymovinjs});

/***/ }),

/***/ "./node_modules/bodymovin/build/player/bodymovin_light.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e(t)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof module&&module.exports?module.exports=e(t):t.bodymovin=e(t)}(window||{},function(t){function e(){return{}}function s(t){Pt=t?Math.round:function(t){return t}}function i(t){return Math.round(1e4*t)/1e4}function a(t){t.style.userSelect="none",t.style.MozUserSelect="none",t.style.webkitUserSelect="none",t.style.oUserSelect="none"}function r(t,e,s,i){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=0>i?-1:1}function n(t,e){this.type=t,this.direction=0>e?-1:1}function h(t,e,s,i){this.type=t,this.currentLoop=e,this.totalLoops=s,this.direction=0>i?-1:1}function o(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function l(t,e){this.type=t,this.target=e}function p(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)}function f(t,e){if(e){if(this._cbs[t]){for(var s=0,i=this._cbs[t].length;i>s;)this._cbs[t][s]===e&&(this._cbs[t].splice(s,1),s-=1,i-=1),s+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}function m(t,e){if(this._cbs[t])for(var s=this._cbs[t].length,i=0;s>i;i++)this._cbs[t][i](e)}function d(t,e){void 0===e&&(e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var s,i="";for(s=t;s>0;--s)i+=e[Math.round(Math.random()*(e.length-1))];return i}function c(t,e,s){var i,a,r,n,h,o,l,p;switch(1===arguments.length&&(e=t.s,s=t.v,t=t.h),n=Math.floor(6*t),h=6*t-n,o=s*(1-e),l=s*(1-h*e),p=s*(1-(1-h)*e),n%6){case 0:i=s,a=p,r=o;break;case 1:i=l,a=s,r=o;break;case 2:i=o,a=s,r=p;break;case 3:i=o,a=l,r=s;break;case 4:i=p,a=o,r=s;break;case 5:i=s,a=o,r=l}return[i,a,r]}function u(t,e,s){1===arguments.length&&(e=t.g,s=t.b,t=t.r);var i,a=Math.max(t,e,s),r=Math.min(t,e,s),n=a-r,h=0===a?0:n/a,o=a/255;switch(a){case r:i=0;break;case t:i=e-s+n*(s>e?6:0),i/=6*n;break;case e:i=s-t+2*n,i/=6*n;break;case s:i=t-e+4*n,i/=6*n}return[i,h,o]}function g(t,e){var s=u(255*t[0],255*t[1],255*t[2]);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),c(s[0],s[1],s[2])}function y(t,e){var s=u(255*t[0],255*t[1],255*t[2]);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),c(s[0],s[1],s[2])}function v(t,e){var s=u(255*t[0],255*t[1],255*t[2]);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),c(s[0],s[1],s[2])}function b(t){var e,s,i=[],a=[],r=[],n={},h=0;t.c&&(i[0]=t.o[0],a[0]=t.i[0],r[0]=t.v[0],h=1),s=t.i.length;var o=s-1;for(e=h;s>e;e+=1)i.push(t.o[o]),a.push(t.i[o]),r.push(t.v[o]),o-=1;return n.i=i,n.o=a,n.v=r,n}function k(){}function A(t,e,s){if(!e){var i=Object.create(t.prototype,s),a={};return i&&"[object Function]"===a.toString.call(i.init)&&i.init(),i}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype._parent=t.prototype}function P(t,e){for(var s in t.prototype)t.prototype.hasOwnProperty(s)&&(e.prototype[s]=t.prototype[s])}function E(){function t(t,e,s,i,a,r){var n=t*i+e*a+s*r-a*i-r*t-s*e;return n>-1e-4&&1e-4>n}function e(e,s,i,a,r,n,h,o,l){if(0===i&&0===n&&0===l)return t(e,s,a,r,h,o);var p,f=Math.sqrt(Math.pow(a-e,2)+Math.pow(r-s,2)+Math.pow(n-i,2)),m=Math.sqrt(Math.pow(h-e,2)+Math.pow(o-s,2)+Math.pow(l-i,2)),d=Math.sqrt(Math.pow(h-a,2)+Math.pow(o-r,2)+Math.pow(l-n,2));return p=f>m?f>d?f-m-d:d-m-f:d>m?d-m-f:m-f-d,p>-1e-4&&1e-4>p}function s(t){var e,s=t.c,i=t.v,a=t.o,r=t.i,n=t._length,h=[],o=0;for(e=0;n-1>e;e+=1)h[e]=l(i[e],i[e+1],a[e],r[e+1]),o+=h[e].addedLength;return s&&(h[e]=l(i[e],i[0],a[e],r[0]),o+=h[e].addedLength),{lengths:h,totalLength:o}}function i(t){this.segmentLength=0,this.points=new Array(t)}function a(t,e){this.partialLength=t,this.point=e}function r(t,e){var s=e.segments,i=s.length,a=wt((i-1)*t),r=t*e.addedLength,n=0;if(r==s[a].l)return s[a].p;for(var h=s[a].l>r?-1:1,o=!0;o;)s[a].l<=r&&s[a+1].l>r?(n=(r-s[a].l)/(s[a+1].l-s[a].l),o=!1):a+=h,(0>a||a>=i-1)&&(o=!1);return s[a].p+(s[a+1].p-s[a].p)*n}function n(){this.pt1=new Array(2),this.pt2=new Array(2),this.pt3=new Array(2),this.pt4=new Array(2)}function h(t,e,s,i,a,n){var h=r(a,n),o=1-h,l=Math.round(1e3*(o*o*o*t[0]+(h*o*o+o*h*o+o*o*h)*s[0]+(h*h*o+o*h*h+h*o*h)*i[0]+h*h*h*e[0]))/1e3,p=Math.round(1e3*(o*o*o*t[1]+(h*o*o+o*h*o+o*o*h)*s[1]+(h*h*o+o*h*h+h*o*h)*i[1]+h*h*h*e[1]))/1e3;return[l,p]}function o(t,e,s,i,a,h,o){var l=new n;a=0>a?0:a>1?1:a;var p=r(a,o);h=h>1?1:h;var f,m=r(h,o),d=t.length,c=1-p,u=1-m;for(f=0;d>f;f+=1)l.pt1[f]=Math.round(1e3*(c*c*c*t[f]+(p*c*c+c*p*c+c*c*p)*s[f]+(p*p*c+c*p*p+p*c*p)*i[f]+p*p*p*e[f]))/1e3,l.pt3[f]=Math.round(1e3*(c*c*u*t[f]+(p*c*u+c*p*u+c*c*m)*s[f]+(p*p*u+c*p*m+p*c*m)*i[f]+p*p*m*e[f]))/1e3,l.pt4[f]=Math.round(1e3*(c*u*u*t[f]+(p*u*u+c*m*u+c*u*m)*s[f]+(p*m*u+c*m*m+p*u*m)*i[f]+p*m*m*e[f]))/1e3,l.pt2[f]=Math.round(1e3*(u*u*u*t[f]+(m*u*u+u*m*u+u*u*m)*s[f]+(m*m*u+u*m*m+m*u*m)*i[f]+m*m*m*e[f]))/1e3;return l}var l=(Math,function(){function t(t,e){this.l=t,this.p=e}return function(e,s,i,a){var r,n,h,o,l,p,f=It,m=0,d=[],c=[],u={addedLength:0,segments:[]};for(h=i.length,r=0;f>r;r+=1){for(l=r/(f-1),p=0,n=0;h>n;n+=1)o=Ft(1-l,3)*e[n]+3*Ft(1-l,2)*l*i[n]+3*(1-l)*Ft(l,2)*a[n]+Ft(l,3)*s[n],d[n]=o,null!==c[n]&&(p+=Ft(d[n]-c[n],2)),c[n]=d[n];p&&(p=xt(p),m+=p),u.segments.push(new t(m,l))}return u.addedLength=m,u}}()),p=function(){var e={};return function(s){var r=s.s,n=s.e,h=s.to,o=s.ti,l=(r.join("_")+"_"+n.join("_")+"_"+h.join("_")+"_"+o.join("_")).replace(/\./g,"p");if(e[l])return void(s.bezierData=e[l]);var p,f,m,d,c,u,g,y=It,v=0,b=null;2===r.length&&(r[0]!=n[0]||r[1]!=n[1])&&t(r[0],r[1],n[0],n[1],r[0]+h[0],r[1]+h[1])&&t(r[0],r[1],n[0],n[1],n[0]+o[0],n[1]+o[1])&&(y=2);var k=new i(y);for(m=h.length,p=0;y>p;p+=1){for(g=new Array(m),c=p/(y-1),u=0,f=0;m>f;f+=1)d=Ft(1-c,3)*r[f]+3*Ft(1-c,2)*c*(r[f]+h[f])+3*(1-c)*Ft(c,2)*(n[f]+o[f])+Ft(c,3)*n[f],g[f]=d,null!==b&&(u+=Ft(g[f]-b[f],2));u=xt(u),v+=u,k.points[p]=new a(u,g),b=g}k.segmentLength=v,s.bezierData=k,e[l]=k}}();return{getBezierLength:l,getSegmentsLength:s,getNewSegment:o,getPointInSegment:h,buildBezierData:p,pointOnLine2D:t,pointOnLine3D:e}}function M(){function t(a,r,h){var o,l,p,f,m,d,c,u,g=a.length;for(f=0;g>f;f+=1)if(o=a[f],"ks"in o&&!o.completed){if(o.completed=!0,o.tt&&(a[f-1].td=o.tt),l=[],p=-1,o.hasMask){var y=o.masksProperties;for(d=y.length,m=0;d>m;m+=1)if(y[m].pt.k.i)i(y[m].pt.k);else for(u=y[m].pt.k.length,c=0;u>c;c+=1)y[m].pt.k[c].s&&i(y[m].pt.k[c].s[0]),y[m].pt.k[c].e&&i(y[m].pt.k[c].e[0])}0===o.ty?(o.layers=e(o.refId,r),t(o.layers,r,h)):4===o.ty?s(o.shapes):5==o.ty&&n(o,h)}}function e(t,e){for(var s=0,i=e.length;i>s;){if(e[s].id===t)return e[s].layers.__used?JSON.parse(JSON.stringify(e[s].layers)):(e[s].layers.__used=!0,e[s].layers);s+=1}}function s(t){var e,a,r,n=t.length,h=!1;for(e=n-1;e>=0;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)i(t[e].ks.k);else for(r=t[e].ks.k.length,a=0;r>a;a+=1)t[e].ks.k[a].s&&i(t[e].ks.k[a].s[0]),t[e].ks.k[a].e&&i(t[e].ks.k[a].e[0]);h=!0}else"gr"==t[e].ty&&s(t[e].it)}function i(t){var e,s=t.i.length;for(e=0;s>e;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function a(t,e){var s=e?e.split("."):[100,100,100];return t[0]>s[0]?!0:s[0]>t[0]?!1:t[1]>s[1]?!0:s[1]>t[1]?!1:t[2]>s[2]?!0:s[2]>t[2]?!1:void 0}function r(e,s){e.__complete||(l(e),h(e),o(e),p(e),t(e.layers,e.assets,s),e.__complete=!0)}function n(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var h=function(){function t(t){var e=t.t.d;t.t.d={k:[{s:e,t:0}]}}function e(e){var s,i=e.length;for(s=0;i>s;s+=1)5===e[s].ty&&t(e[s])}var s=[4,4,14];return function(t){if(a(s,t.v)&&(e(t.layers),t.assets)){var i,r=t.assets.length;for(i=0;r>i;i+=1)t.assets[i].layers&&e(t.assets[i].layers)}}}(),o=function(){var t=[4,7,99];return function(e){if(e.chars&&!a(t,e.v)){var s,r,n,h,o,l=e.chars.length;for(s=0;l>s;s+=1)if(e.chars[s].data&&e.chars[s].data.shapes)for(o=e.chars[s].data.shapes[0].it,n=o.length,r=0;n>r;r+=1)h=o[r].ks.k,h.__converted||(i(o[r].ks.k),h.__converted=!0)}}}(),l=function(){function t(e){var s,i,a,r=e.length;for(s=0;r>s;s+=1)if("gr"===e[s].ty)t(e[s].it);else if("fl"===e[s].ty||"st"===e[s].ty)if(e[s].c.k&&e[s].c.k[0].i)for(a=e[s].c.k.length,i=0;a>i;i+=1)e[s].c.k[i].s&&(e[s].c.k[i].s[0]/=255,e[s].c.k[i].s[1]/=255,e[s].c.k[i].s[2]/=255,e[s].c.k[i].s[3]/=255),e[s].c.k[i].e&&(e[s].c.k[i].e[0]/=255,e[s].c.k[i].e[1]/=255,e[s].c.k[i].e[2]/=255,e[s].c.k[i].e[3]/=255);else e[s].c.k[0]/=255,e[s].c.k[1]/=255,e[s].c.k[2]/=255,e[s].c.k[3]/=255}function e(e){var s,i=e.length;for(s=0;i>s;s+=1)4===e[s].ty&&t(e[s].shapes)}var s=[4,1,9];return function(t){if(a(s,t.v)&&(e(t.layers),t.assets)){var i,r=t.assets.length;for(i=0;r>i;i+=1)t.assets[i].layers&&e(t.assets[i].layers)}}}(),p=function(){function t(e){var s,i,a,r=e.length,n=!1;for(s=r-1;s>=0;s-=1)if("sh"==e[s].ty){if(e[s].ks.k.i)e[s].ks.k.c=e[s].closed;else for(a=e[s].ks.k.length,i=0;a>i;i+=1)e[s].ks.k[i].s&&(e[s].ks.k[i].s[0].c=e[s].closed),e[s].ks.k[i].e&&(e[s].ks.k[i].e[0].c=e[s].closed);n=!0}else"gr"==e[s].ty&&t(e[s].it)}function e(e){var s,i,a,r,n,h,o=e.length;for(i=0;o>i;i+=1){if(s=e[i],s.hasMask){var l=s.masksProperties;for(r=l.length,a=0;r>a;a+=1)if(l[a].pt.k.i)l[a].pt.k.c=l[a].cl;else for(h=l[a].pt.k.length,n=0;h>n;n+=1)l[a].pt.k[n].s&&(l[a].pt.k[n].s[0].c=l[a].cl),l[a].pt.k[n].e&&(l[a].pt.k[n].e[0].c=l[a].cl)}4===s.ty&&t(s.shapes)}}var s=[4,4,18];return function(t){if(a(s,t.v)&&(e(t.layers),t.assets)){var i,r=t.assets.length;for(i=0;r>i;i+=1)t.assets[i].layers&&e(t.assets[i].layers)}}}(),f={};return f.completeData=r,f}function _(){this.c=!1,this._length=0,this._maxLength=8,this.v=Array.apply(null,{length:this._maxLength}),this.o=Array.apply(null,{length:this._maxLength}),this.i=Array.apply(null,{length:this._maxLength})}function S(){}function F(){}function x(){}function w(){}function D(){this._length=0,this._maxLength=4,this.shapes=Array.apply(null,{length:this._maxLength})}function C(t,e,s){this.mdf=!1,this._firstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._dynamicProperties=[],this._textData=t,this._renderType=e,this._elem=s,this._animatorsData=Array.apply(null,{length:this._textData.a.length}),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1}function I(t,e,s,i,a,r){this.o=t,this.sw=e,this.sc=s,this.fc=i,this.m=a,this.p=r,this.mdf={o:!0,sw:!!e,sc:!!s,fc:!!i,m:!0,p:!0}}function T(t,e,s){this._frameId=-99999,this.pv="",this.v="",this.kf=!1,this.firstFrame=!0,this.mdf=!0,this.data=e,this.elem=t,this.keysIndex=-1,this.currentData={ascent:0,boxWidth:[0,0],f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,__complete:!1},this.searchProperty()?s.push(this):this.getValue(!0)}function L(){}function N(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:e&&e.hideOnTransparent===!1?!1:!0,viewBoxOnly:e&&e.viewBoxOnly||!1,className:e&&e.className||""},this.globalData.renderConfig=this.renderConfig,this.elements=[],this.pendingElements=[],this.destroyed=!1}function V(t,e,s){this.dynamicProperties=[],this.data=t,this.element=e,this.globalData=s,this.storedData=[],this.masksProperties=this.data.masksProperties,this.viewData=Array.apply(null,{length:this.masksProperties.length}),this.maskElement=null,this.firstFrame=!0;var i,a,r,n,h,o,l,p,f=this.globalData.defs,m=this.masksProperties.length,c=this.masksProperties,u=0,g=[],y=d(10),v="clipPath",b="clip-path";for(i=0;m>i;i++)if(("a"!==c[i].mode&&"n"!==c[i].mode||c[i].inv||100!==c[i].o.k)&&(v="mask",b="mask"),"s"!=c[i].mode&&"i"!=c[i].mode||0!=u?h=null:(h=document.createElementNS(Et,"rect"),h.setAttribute("fill","#ffffff"),h.setAttribute("width",this.element.comp.data.w),h.setAttribute("height",this.element.comp.data.h),g.push(h)),a=document.createElementNS(Et,"path"),"n"!=c[i].mode){if(u+=1,"s"==c[i].mode?a.setAttribute("fill","#000000"):a.setAttribute("fill","#ffffff"),a.setAttribute("clip-rule","nonzero"),0!==c[i].x.k){v="mask",b="mask",p=jt.getProp(this.element,c[i].x,0,null,this.dynamicProperties);var k="fi_"+d(10);o=document.createElementNS(Et,"filter"),o.setAttribute("id",k),l=document.createElementNS(Et,"feMorphology"),l.setAttribute("operator","dilate"),l.setAttribute("in","SourceGraphic"),l.setAttribute("radius","0"),o.appendChild(l),f.appendChild(o),"s"==c[i].mode?a.setAttribute("stroke","#000000"):a.setAttribute("stroke","#ffffff")}else l=null,p=null;if(this.storedData[i]={elem:a,x:p,expan:l,lastPath:"",lastOperator:"",filterId:k,lastRadius:0},"i"==c[i].mode){n=g.length;var A=document.createElementNS(Et,"g");for(r=0;n>r;r+=1)A.appendChild(g[r]);var P=document.createElementNS(Et,"mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+u),P.appendChild(a),f.appendChild(P),A.setAttribute("mask","url("+Mt+"#"+y+"_"+u+")"),g.length=0,g.push(A)}else g.push(a);c[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:a,lastPath:"",op:jt.getProp(this.element,c[i].o,0,.01,this.dynamicProperties),prop:Bt.getShapeProp(this.element,c[i],3,this.dynamicProperties,null)},h&&(this.viewData[i].invRect=h),this.viewData[i].prop.k||this.drawPath(c[i],this.viewData[i].prop.v,this.viewData[i])}else this.viewData[i]={op:jt.getProp(this.element,c[i].o,0,.01,this.dynamicProperties),prop:Bt.getShapeProp(this.element,c[i],3,this.dynamicProperties,null),elem:a},f.appendChild(a);for(this.maskElement=document.createElementNS(Et,v),m=g.length,i=0;m>i;i+=1)this.maskElement.appendChild(g[i]);this.maskElement.setAttribute("id",y),u>0&&this.element.maskedElement.setAttribute(b,"url("+Mt+"#"+y+")"),f.appendChild(this.maskElement)}function O(){}function z(t,e,s,i,a){this.globalData=s,this.comp=i,this.data=t,this.matteElement=null,this.transformedElement=null,this.isTransparent=!1,this.parentContainer=e,this.layerId=a?a.layerId:"ly_"+d(10),this.placeholder=a,this._sizeChanged=!1,this.init()}function R(t,e,s,i,a){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,s,i,a)}function j(t,e,s,i){}function B(t,e,s,i,a){this.textSpans=[],this.renderType="svg",this._parent.constructor.call(this,t,e,s,i,a)}function G(t,e){this.filterManager=e;var s=document.createElementNS(Et,"feColorMatrix");if(s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s),s=document.createElementNS(Et,"feColorMatrix"),s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),s.setAttribute("result","f2"),t.appendChild(s),this.matrixFilter=s,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i=document.createElementNS(Et,"feMerge");t.appendChild(i);var a;a=document.createElementNS(Et,"feMergeNode"),a.setAttribute("in","SourceGraphic"),i.appendChild(a),a=document.createElementNS(Et,"feMergeNode"),a.setAttribute("in","f2"),i.appendChild(a)}}function W(t,e){this.filterManager=e;var s=document.createElementNS(Et,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(s),this.matrixFilter=s}function X(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function q(t,e){this.filterManager=e;var s=document.createElementNS(Et,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s);var i=document.createElementNS(Et,"feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var a=document.createElementNS(Et,"feFuncR");a.setAttribute("type","table"),i.appendChild(a),this.feFuncR=a;var r=document.createElementNS(Et,"feFuncG");r.setAttribute("type","table"),i.appendChild(r),this.feFuncG=r;var n=document.createElementNS(Et,"feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function Y(t,e){this.filterManager=e;var s=this.filterManager.effectElements,i=document.createElementNS(Et,"feComponentTransfer");(s[9].p.k||0!==s[9].p.v||s[10].p.k||1!==s[10].p.v||s[11].p.k||1!==s[11].p.v||s[12].p.k||0!==s[12].p.v||s[13].p.k||1!==s[13].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(s[16].p.k||0!==s[16].p.v||s[17].p.k||1!==s[17].p.v||s[18].p.k||1!==s[18].p.v||s[19].p.k||0!==s[19].p.v||s[20].p.k||1!==s[20].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(s[23].p.k||0!==s[23].p.v||s[24].p.k||1!==s[24].p.v||s[25].p.k||1!==s[25].p.v||s[26].p.k||0!==s[26].p.v||s[27].p.k||1!==s[27].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(s[30].p.k||0!==s[30].p.v||s[31].p.k||1!==s[31].p.v||s[32].p.k||1!==s[32].p.v||s[33].p.k||0!==s[33].p.v||s[34].p.k||1!==s[34].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=document.createElementNS(Et,"feComponentTransfer")),(s[2].p.k||0!==s[2].p.v||s[3].p.k||1!==s[3].p.v||s[4].p.k||1!==s[4].p.v||s[5].p.k||0!==s[5].p.v||s[6].p.k||1!==s[6].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function H(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var s=document.createElementNS(Et,"feGaussianBlur");s.setAttribute("in","SourceAlpha"),s.setAttribute("result","drop_shadow_1"),s.setAttribute("stdDeviation","0"),this.feGaussianBlur=s,t.appendChild(s);var i=document.createElementNS(Et,"feOffset");i.setAttribute("dx","25"),i.setAttribute("dy","0"),i.setAttribute("in","drop_shadow_1"),i.setAttribute("result","drop_shadow_2"),this.feOffset=i,t.appendChild(i);var a=document.createElementNS(Et,"feFlood");a.setAttribute("flood-color","#00ff00"),a.setAttribute("flood-opacity","1"),a.setAttribute("result","drop_shadow_3"),this.feFlood=a,t.appendChild(a);var r=document.createElementNS(Et,"feComposite");r.setAttribute("in","drop_shadow_3"),r.setAttribute("in2","drop_shadow_2"),r.setAttribute("operator","in"),r.setAttribute("result","drop_shadow_4"),t.appendChild(r);var n=document.createElementNS(Et,"feMerge");t.appendChild(n);var h;h=document.createElementNS(Et,"feMergeNode"),n.appendChild(h),h=document.createElementNS(Et,"feMergeNode"),h.setAttribute("in","SourceGraphic"),this.feMergeNode=h,this.feMerge=n,this.originalNodeAdded=!1,n.appendChild(h)}function U(t,e,s){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=s,s.matteElement=document.createElementNS(Et,"g"),s.matteElement.appendChild(s.layerElement),s.matteElement.appendChild(s.transformedElement),s.baseElement=s.matteElement}function J(t){var e,s=t.data.ef.length,i=d(10),a=qt.createFilter(i),r=0;this.filters=[];var n;for(e=0;s>e;e+=1)20===t.data.ef[e].ty?(r+=1,n=new G(a,t.effects.effectElements[e]),this.filters.push(n)):21===t.data.ef[e].ty?(r+=1,n=new W(a,t.effects.effectElements[e]),this.filters.push(n)):22===t.data.ef[e].ty?(n=new X(t,t.effects.effectElements[e]),this.filters.push(n)):23===t.data.ef[e].ty?(r+=1,n=new q(a,t.effects.effectElements[e]),this.filters.push(n)):24===t.data.ef[e].ty?(r+=1,n=new Y(a,t.effects.effectElements[e]),this.filters.push(n)):25===t.data.ef[e].ty?(r+=1,n=new H(a,t.effects.effectElements[e]),this.filters.push(n)):28===t.data.ef[e].ty&&(n=new U(a,t.effects.effectElements[e],t),this.filters.push(n));r&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+Mt+"#"+i+")"))}function Z(t,e,s,i,a){this._parent.constructor.call(this,t,e,s,i,a),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?Array.apply(null,{length:this.layers.length}):[],this.data.tm&&(this.tm=jt.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),this.data.xt?(this.layerElement=document.createElementNS(Et,"g"),this.buildAllItems()):s.progressiveLoad||this.buildAllItems()}function K(t,e,s,i,a){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s,i,a)}function Q(t,e,s,i,a){this._parent.constructor.call(this,t,e,s,i,a)}function $(t){Mt=t}function tt(t){Zt.play(t)}function et(t){Zt.pause(t)}function st(t){Zt.togglePause(t)}function it(t,e){Zt.setSpeed(t,e)}function at(t,e){Zt.setDirection(t,e)}function rt(t){Zt.stop(t)}function nt(t){Zt.moveFrame(t)}function ht(){$t===!0?Zt.searchAnimations(te,$t,ee):Zt.searchAnimations()}function ot(t){return Zt.registerAnimation(t)}function lt(){Zt.resize()}function pt(){Zt.start()}function ft(t,e,s){Zt.goToAndStop(t,e,s)}function mt(t){_t=t}function dt(t){return $t===!0&&(t.animationData=JSON.parse(te)),Zt.loadAnimation(t)}function ct(t){return Zt.destroy(t)}function ut(t){if("string"==typeof t)switch(t){case"high":It=200;break;case"medium":It=50;break;case"low":It=10}else!isNaN(t)&&t>1&&(It=t);s(It>=50?!1:!0)}function gt(){return"undefined"!=typeof navigator}function yt(t,e){"expressions"===t&&(At=e)}function vt(t){switch(t){case"propertyFactory":return jt;case"shapePropertyFactory":return Bt;case"matrix":return k}}function bt(){"complete"===document.readyState&&(clearInterval(ne),ht())}function kt(t){for(var e=re.split("&"),s=0;s<e.length;s++){var i=e[s].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}}var At,Pt,Et="http://www.w3.org/2000/svg",Mt="",_t=!0,St=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Ft=(Math.round,Math.pow),xt=Math.sqrt,wt=(Math.abs,Math.floor),Dt=(Math.max,Math.min),Ct={};!function(){var t,e=Object.getOwnPropertyNames(Math),s=e.length;for(t=0;s>t;t+=1)Ct[e[t]]=Math[e[t]]}(),Ct.random=Math.random,Ct.abs=function(t){var e=typeof t;if("object"===e&&t.length){var s,i=Array.apply(null,{length:t.length}),a=t.length;for(s=0;a>s;s+=1)i[s]=Math.abs(t[s]);return i}return Math.abs(t)};var It=150,Tt=Math.PI/180,Lt=.5519;s(!1);var Nt=function(){var t,e,s=[];for(t=0;256>t;t+=1)e=t.toString(16),s[t]=1==e.length?"0"+e:e;return function(t,e,i){return 0>t&&(t=0),0>e&&(e=0),0>i&&(i=0),"#"+s[t]+s[e]+s[i]}}(),k=(function(){var t=[];return function(e,s){return void 0!==s&&(e[3]=s),t[e[0]]||(t[e[0]]={}),t[e[0]][e[1]]||(t[e[0]][e[1]]={}),t[e[0]][e[1]][e[2]]||(t[e[0]][e[1]][e[2]]={}),t[e[0]][e[1]][e[2]][e[3]]||(t[e[0]][e[1]][e[2]][e[3]]="rgba("+e.join(",")+")"),t[e[0]][e[1]][e[2]][e[3]]}}(),function(){function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function s(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1)}function a(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1)}function r(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function n(t,e){return this._t(1,e,t,1,0,0)}function h(t,e){return this.shear(Math.tan(t),Math.tan(e))}function o(t,e){var s=Math.cos(e),i=Math.sin(e);return this._t(s,i,0,0,-i,s,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1)._t(s,-i,0,0,i,s,0,0,0,0,1,0,0,0,0,1)}function l(t,e,s){return s=isNaN(s)?1:s,1==t&&1==e&&1==s?this:this._t(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1)}function p(t,e,s,i,a,r,n,h,o,l,p,f,m,d,c,u){return this.props[0]=t,this.props[1]=e,this.props[2]=s,this.props[3]=i,this.props[4]=a,this.props[5]=r,this.props[6]=n,this.props[7]=h,this.props[8]=o,this.props[9]=l,this.props[10]=p,this.props[11]=f,this.props[12]=m,this.props[13]=d,this.props[14]=c,this.props[15]=u,this}function f(t,e,s){return s=s||0,0!==t||0!==e||0!==s?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1):this}function m(t,e,s,i,a,r,n,h,o,l,p,f,m,d,c,u){if(1===t&&0===e&&0===s&&0===i&&0===a&&1===r&&0===n&&0===h&&0===o&&0===l&&1===p&&0===f)return(0!==m||0!==d||0!==c)&&(this.props[12]=this.props[12]*t+this.props[13]*a+this.props[14]*o+this.props[15]*m,this.props[13]=this.props[12]*e+this.props[13]*r+this.props[14]*l+this.props[15]*d,this.props[14]=this.props[12]*s+this.props[13]*n+this.props[14]*p+this.props[15]*c,this.props[15]=this.props[12]*i+this.props[13]*h+this.props[14]*f+this.props[15]*u),this._identityCalculated=!1,this;var g=this.props[0],y=this.props[1],v=this.props[2],b=this.props[3],k=this.props[4],A=this.props[5],P=this.props[6],E=this.props[7],M=this.props[8],_=this.props[9],S=this.props[10],F=this.props[11],x=this.props[12],w=this.props[13],D=this.props[14],C=this.props[15];return this.props[0]=g*t+y*a+v*o+b*m,this.props[1]=g*e+y*r+v*l+b*d,this.props[2]=g*s+y*n+v*p+b*c,this.props[3]=g*i+y*h+v*f+b*u,this.props[4]=k*t+A*a+P*o+E*m,this.props[5]=k*e+A*r+P*l+E*d,this.props[6]=k*s+A*n+P*p+E*c,this.props[7]=k*i+A*h+P*f+E*u,this.props[8]=M*t+_*a+S*o+F*m,this.props[9]=M*e+_*r+S*l+F*d,this.props[10]=M*s+_*n+S*p+F*c,this.props[11]=M*i+_*h+S*f+F*u,this.props[12]=x*t+w*a+D*o+C*m,this.props[13]=x*e+w*r+D*l+C*d,this.props[14]=x*s+w*n+D*p+C*c,this.props[15]=x*i+w*h+D*f+C*u,this._identityCalculated=!1,this}function d(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function c(t){var e;for(e=0;16>e;e+=1)t.props[e]=this.props[e]}function u(t){var e;for(e=0;16>e;e+=1)this.props[e]=t[e]}function g(t,e,s){return{x:t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}}function y(t,e,s){return t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12]}function v(t,e,s){return t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13]}function b(t,e,s){return t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}function k(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],s=this.props[5]/e,i=-this.props[1]/e,a=-this.props[4]/e,r=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,h=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*s+t[1]*a+n,t[0]*i+t[1]*r+h,0]}function A(t){var e,s=t.length,i=[];for(e=0;s>e;e+=1)i[e]=k(t[e]);return i}function P(t,e,s,i){if(i&&2===i){var a=Ht.newPoint();return a[0]=t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],a[1]=t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],a}return[t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]]}function E(t,e){return this.isIdentity()?t+","+e:Pt(t*this.props[0]+e*this.props[4]+this.props[12])+","+Pt(t*this.props[1]+e*this.props[5]+this.props[13])}function M(){return[this.props[0],this.props[1],this.props[2],this.props[3],this.props[4],this.props[5],this.props[6],this.props[7],this.props[8],this.props[9],this.props[10],this.props[11],this.props[12],this.props[13],this.props[14],this.props[15]]}function _(){return St?"matrix3d("+i(this.props[0])+","+i(this.props[1])+","+i(this.props[2])+","+i(this.props[3])+","+i(this.props[4])+","+i(this.props[5])+","+i(this.props[6])+","+i(this.props[7])+","+i(this.props[8])+","+i(this.props[9])+","+i(this.props[10])+","+i(this.props[11])+","+i(this.props[12])+","+i(this.props[13])+","+i(this.props[14])+","+i(this.props[15])+")":(this.cssParts[1]=this.props.join(","),this.cssParts.join(""))}function S(){return"matrix("+i(this.props[0])+","+i(this.props[1])+","+i(this.props[4])+","+i(this.props[5])+","+i(this.props[12])+","+i(this.props[13])+")"}function F(){return""+this.toArray()}return function(){this.reset=t,this.rotate=e,this.rotateX=s,this.rotateY=a,this.rotateZ=r,this.skew=h,this.skewFromAxis=o,this.shear=n,this.scale=l,this.setTransform=p,this.translate=f,this.transform=m,this.applyToPoint=g,this.applyToX=y,this.applyToY=v,this.applyToZ=b,this.applyToPointArray=P,this.applyToPointStringified=E,this.toArray=M,this.toCSS=_,this.to2dCSS=S,this.toString=F,this.clone=c,this.cloneFromProps=u,this.inversePoints=A,this.inversePoint=k,this._t=this.transform,this.isIdentity=d,this._identity=!0,this._identityCalculated=!1,this.props=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.cssParts=["matrix3d(","",")"]}}());!function(t,e){function s(s,l,p){var d=[];l=1==l?{entropy:!0}:l||{};var v=n(r(l.entropy?[s,o(t)]:null==s?h():s,3),d),b=new i(d),k=function(){for(var t=b.g(m),e=u,s=0;g>t;)t=(t+s)*f,e*=f,s=b.g(1);for(;t>=y;)t/=2,e/=2,s>>>=1;return(t+s)/e};return k.int32=function(){return 0|b.g(4)},k.quick=function(){return b.g(4)/4294967296},k["double"]=k,n(o(b.S),t),(l.pass||p||function(t,s,i,r){return r&&(r.S&&a(r,b),t.state=function(){return a(b,{})}),i?(e[c]=t,s):t})(k,v,"global"in l?l.global:this==e,l.state)}function i(t){var e,s=t.length,i=this,a=0,r=i.i=i.j=0,n=i.S=[];for(s||(t=[s++]);f>a;)n[a]=a++;for(a=0;f>a;a++)n[a]=n[r=v&r+t[a%s]+(e=n[a])],n[r]=e;(i.g=function(t){for(var e,s=0,a=i.i,r=i.j,n=i.S;t--;)e=n[a=v&a+1],s=s*f+n[v&(n[a]=n[r=v&r+e])+(n[r]=e)];return i.i=a,i.j=r,s})(f)}function a(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function r(t,e){var s,i=[],a=typeof t;if(e&&"object"==a)for(s in t)try{i.push(r(t[s],e-1))}catch(n){}return i.length?i:"string"==a?t:t+"\x00"}function n(t,e){for(var s,i=t+"",a=0;a<i.length;)e[v&a]=v&(s^=19*e[v&a])+i.charCodeAt(a++);return o(e)}function h(){try{if(l)return o(l.randomBytes(f));var e=new Uint8Array(f);return(p.crypto||p.msCrypto).getRandomValues(e),o(e)}catch(s){var i=p.navigator,a=i&&i.plugins;return[+new Date,p,a,p.screen,o(t)]}}function o(t){return String.fromCharCode.apply(0,t)}var l,p=this,f=256,m=6,d=52,c="random",u=e.pow(f,m),g=e.pow(2,d),y=2*g,v=f-1;e["seed"+c]=s,n(e.random(),t)}([],Ct);var Vt=function(){function t(t,e,s,i,a){var r=a||("bez_"+t+"_"+e+"_"+s+"_"+i).replace(/\./g,"p");if(p[r])return p[r];var n=new o([t,e,s,i]);return p[r]=n,n}function e(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function i(t){return 3*t}function a(t,a,r){return((e(a,r)*t+s(a,r))*t+i(a))*t}function r(t,a,r){return 3*e(a,r)*t*t+2*s(a,r)*t+i(a)}function n(t,e,s,i,r){var n,h,o=0;do h=e+(s-e)/2,n=a(h,i,r)-t,n>0?s=h:e=h;while(Math.abs(n)>d&&++o<c);return h}function h(t,e,s,i){for(var n=0;f>n;++n){var h=r(e,s,i);if(0===h)return e;var o=a(e,s,i)-t;e-=o/h}return e}function o(t){this._p=t,this._mSampleValues=y?new Float32Array(u):new Array(u),this._precomputed=!1,this.get=this.get.bind(this)}var l={};l.getBezierEasing=t;var p={},f=4,m=.001,d=1e-7,c=10,u=11,g=1/(u-1),y="function"==typeof Float32Array;return o.prototype={get:function(t){var e=this._p[0],s=this._p[1],i=this._p[2],r=this._p[3];return this._precomputed||this._precompute(),e===s&&i===r?t:0===t?0:1===t?1:a(this._getTForX(t),s,r)},_precompute:function(){var t=this._p[0],e=this._p[1],s=this._p[2],i=this._p[3];this._precomputed=!0,(t!==e||s!==i)&&this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],s=0;u>s;++s)this._mSampleValues[s]=a(s*g,t,e);

},_getTForX:function(t){for(var e=this._p[0],s=this._p[2],i=this._mSampleValues,a=0,o=1,l=u-1;o!==l&&i[o]<=t;++o)a+=g;--o;var p=(t-i[o])/(i[o+1]-i[o]),f=a+p*g,d=r(f,e,s);return d>=m?h(t,f,e,s):0===d?f:n(t,a,a+g,e,s)}},l}();!function(){for(var e=0,s=["ms","moz","webkit","o"],i=0;i<s.length&&!t.requestAnimationFrame;++i)t.requestAnimationFrame=t[s[i]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[s[i]+"CancelAnimationFrame"]||t[s[i]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(t,s){var i=(new Date).getTime(),a=Math.max(0,16-(i-e)),r=setTimeout(function(){t(i+a)},a);return e=i+a,r}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}();var Ot=E(),zt=M(),Rt=function(){function e(t,e){var s=document.createElement("span");s.style.fontFamily=e;var i=document.createElement("span");i.innerHTML="giItT1WQy@!-/#",s.style.position="absolute",s.style.left="-10000px",s.style.top="-10000px",s.style.fontSize="300px",s.style.fontVariant="normal",s.style.fontStyle="normal",s.style.fontWeight="normal",s.style.letterSpacing="0",s.appendChild(i),document.body.appendChild(s);var a=i.offsetWidth;return i.style.fontFamily=t+", "+e,{node:i,w:a,parent:s}}function s(){var e,i,a,r=this.fonts.length,n=r;for(e=0;r>e;e+=1)if(this.fonts[e].loaded)n-=1;else if("t"===this.fonts[e].fOrigin||2===this.fonts[e].origin){if(t.Typekit&&t.Typekit.load&&0===this.typekitLoaded){this.typekitLoaded=1;try{t.Typekit.load({async:!0,active:function(){this.typekitLoaded=2}.bind(this)})}catch(h){}}2===this.typekitLoaded&&(this.fonts[e].loaded=!0)}else"n"===this.fonts[e].fOrigin||0===this.fonts[e].origin?this.fonts[e].loaded=!0:(i=this.fonts[e].monoCase.node,a=this.fonts[e].monoCase.w,i.offsetWidth!==a?(n-=1,this.fonts[e].loaded=!0):(i=this.fonts[e].sansCase.node,a=this.fonts[e].sansCase.w,i.offsetWidth!==a&&(n-=1,this.fonts[e].loaded=!0)),this.fonts[e].loaded&&(this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));0!==n&&Date.now()-this.initTime<l?setTimeout(s.bind(this),20):setTimeout(function(){this.loaded=!0}.bind(this),0)}function i(t,e){var s=document.createElementNS(Et,"text");s.style.fontSize="100px",s.style.fontFamily=e.fFamily,s.textContent="1",e.fClass?(s.style.fontFamily="inherit",s.className=e.fClass):s.style.fontFamily=e.fFamily,t.appendChild(s);var i=document.createElement("canvas").getContext("2d");return i.font="100px "+e.fFamily,i}function a(t,a){if(!t)return void(this.loaded=!0);if(this.chars)return this.loaded=!0,void(this.fonts=t.list);var r,n=t.list,h=n.length;for(r=0;h>r;r+=1){if(n[r].loaded=!1,n[r].monoCase=e(n[r].fFamily,"monospace"),n[r].sansCase=e(n[r].fFamily,"sans-serif"),n[r].fPath){if("p"===n[r].fOrigin||3===n[r].origin){var o=document.createElement("style");o.type="text/css",o.innerHTML="@font-face {font-family: "+n[r].fFamily+"; font-style: normal; src: url('"+n[r].fPath+"');}",a.appendChild(o)}else if("g"===n[r].fOrigin||1===n[r].origin){var l=document.createElement("link");l.type="text/css",l.rel="stylesheet",l.href=n[r].fPath,a.appendChild(l)}else if("t"===n[r].fOrigin||2===n[r].origin){var p=document.createElement("script");p.setAttribute("src",n[r].fPath),a.appendChild(p)}}else n[r].loaded=!0;n[r].helper=i(a,n[r]),this.fonts.push(n[r])}s.bind(this)()}function r(t){if(t){this.chars||(this.chars=[]);var e,s,i,a=t.length,r=this.chars.length;for(e=0;a>e;e+=1){for(s=0,i=!1;r>s;)this.chars[s].style===t[e].style&&this.chars[s].fFamily===t[e].fFamily&&this.chars[s].ch===t[e].ch&&(i=!0),s+=1;i||(this.chars.push(t[e]),r+=1)}}}function n(t,e,s){for(var i=0,a=this.chars.length;a>i;){if(this.chars[i].ch===t&&this.chars[i].style===e&&this.chars[i].fFamily===s)return this.chars[i];i+=1}}function h(t,e,s){var i=this.getFontByName(e),a=i.helper;return a.measureText(t).width*s/100}function o(t){for(var e=0,s=this.fonts.length;s>e;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return"sans-serif"}var l=5e3,p=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.loaded=!1,this.initTime=Date.now()};return p.prototype.addChars=r,p.prototype.addFonts=a,p.prototype.getCharData=n,p.prototype.getFontByName=o,p.prototype.measureText=h,p}(),jt=function(){function t(t,e,s,i){var a,r=this.offsetTime;s.constructor===Array&&(a=Array.apply(null,{length:s.length}));for(var n,h,o=e,l=this.keyframes.length-1,p=!0;p;){if(n=this.keyframes[o],h=this.keyframes[o+1],o==l-1&&t>=h.t-r){n.h&&(n=h),e=0;break}if(h.t-r>t){e=o;break}l-1>o?o+=1:(e=0,p=!1)}var f,m,d,c,u,g;if(n.to){n.bezierData||Ot.buildBezierData(n);var y=n.bezierData;if(t>=h.t-r||t<n.t-r){var v=t>=h.t-r?y.points.length-1:0;for(m=y.points[v].point.length,f=0;m>f;f+=1)a[f]=y.points[v].point[f];i._lastBezierData=null}else{n.__fnct?g=n.__fnct:(g=Vt.getBezierEasing(n.o.x,n.o.y,n.i.x,n.i.y,n.n).get,n.__fnct=g),d=g((t-(n.t-r))/(h.t-r-(n.t-r)));var b,k=y.segmentLength*d,A=i.lastFrame<t&&i._lastBezierData===y?i._lastAddedLength:0;for(u=i.lastFrame<t&&i._lastBezierData===y?i._lastPoint:0,p=!0,c=y.points.length;p;){if(A+=y.points[u].partialLength,0===k||0===d||u==y.points.length-1){for(m=y.points[u].point.length,f=0;m>f;f+=1)a[f]=y.points[u].point[f];break}if(k>=A&&k<A+y.points[u+1].partialLength){for(b=(k-A)/y.points[u+1].partialLength,m=y.points[u].point.length,f=0;m>f;f+=1)a[f]=y.points[u].point[f]+(y.points[u+1].point[f]-y.points[u].point[f])*b;break}c-1>u?u+=1:p=!1}i._lastPoint=u,i._lastAddedLength=A-y.points[u].partialLength,i._lastBezierData=y}}else{var P,E,M,_,S;for(l=n.s.length,o=0;l>o;o+=1){if(1!==n.h&&(t>=h.t-r?d=1:t<n.t-r?d=0:(n.o.x.constructor===Array?(n.__fnct||(n.__fnct=[]),n.__fnct[o]?g=n.__fnct[o]:(P=n.o.x[o]||n.o.x[0],E=n.o.y[o]||n.o.y[0],M=n.i.x[o]||n.i.x[0],_=n.i.y[o]||n.i.y[0],g=Vt.getBezierEasing(P,E,M,_).get,n.__fnct[o]=g)):n.__fnct?g=n.__fnct:(P=n.o.x,E=n.o.y,M=n.i.x,_=n.i.y,g=Vt.getBezierEasing(P,E,M,_).get,n.__fnct=g),d=g((t-(n.t-r))/(h.t-r-(n.t-r))))),this.sh&&1!==n.h){var F=n.s[o],x=n.e[o];-180>F-x?F+=360:F-x>180&&(F-=360),S=F+(x-F)*d}else S=1===n.h?n.s[o]:n.s[o]+(n.e[o]-n.s[o])*d;1===l?a=S:a[o]=S}}return{value:a,iterationIndex:e}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==p&&(this._caching.lastFrame>=s&&t>=s||this._caching.lastFrame<e&&e>t))){var i=this._caching.lastFrame<t?this._caching.lastIndex:0,a=this.interpolateValue(t,i,this.pv,this._caching);if(this._caching.lastIndex=a.iterationIndex,this.pv.constructor===Array)for(i=0;i<this.v.length;)this.pv[i]=a.value[i],this.v[i]=this.mult?this.pv[i]*this.mult:this.pv[i],this.lastPValue[i]!==this.pv[i]&&(this.mdf=!0,this.lastPValue[i]=this.pv[i]),i+=1;else this.pv=a.value,this.v=this.mult?this.pv*this.mult:this.pv,this.lastPValue!=this.pv&&(this.mdf=!0,this.lastPValue=this.pv)}this._caching.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function s(){}function i(t,e,i){this.mult=i,this.v=i?e.k*i:e.k,this.pv=e.k,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.getValue=s}function a(t,e,i){this.mult=i,this.data=e,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1,this.v=Array.apply(null,{length:e.k.length}),this.pv=Array.apply(null,{length:e.k.length}),this.lastValue=Array.apply(null,{length:e.k.length});var a=Array.apply(null,{length:e.k.length});this.vel=a.map(function(){return 0});var r,n=e.k.length;for(r=0;n>r;r+=1)this.v[r]=i?e.k[r]*i:e.k[r],this.pv[r]=e.k[r];this.getValue=s}function r(s,i,a){this.keyframes=i.k,this.offsetTime=s.data.st,this.lastValue=-99999,this.lastPValue=-99999,this.frameId=-1,this._caching={lastFrame:p,lastIndex:0},this.k=!0,this.kf=!0,this.data=i,this.mult=a,this.elem=s,this.comp=s.comp,this.v=a?i.k[0].s[0]*a:i.k[0].s[0],this.pv=i.k[0].s[0],this.getValue=e,this.interpolateValue=t}function n(s,i,a){var r,n,h,o,l,f=i.k.length;for(r=0;f-1>r;r+=1)i.k[r].to&&i.k[r].s&&i.k[r].e&&(n=i.k[r].s,h=i.k[r].e,o=i.k[r].to,l=i.k[r].ti,(2===n.length&&(n[0]!==h[0]||n[1]!==h[1])&&Ot.pointOnLine2D(n[0],n[1],h[0],h[1],n[0]+o[0],n[1]+o[1])&&Ot.pointOnLine2D(n[0],n[1],h[0],h[1],h[0]+l[0],h[1]+l[1])||3===n.length&&(n[0]!==h[0]||n[1]!==h[1]||n[2]!==h[2])&&Ot.pointOnLine3D(n[0],n[1],n[2],h[0],h[1],h[2],n[0]+o[0],n[1]+o[1],n[2]+o[2])&&Ot.pointOnLine3D(n[0],n[1],n[2],h[0],h[1],h[2],h[0]+l[0],h[1]+l[1],h[2]+l[2]))&&(i.k[r].to=null,i.k[r].ti=null));this.keyframes=i.k,this.offsetTime=s.data.st,this.k=!0,this.kf=!0,this.mult=a,this.elem=s,this.comp=s.comp,this._caching={lastFrame:p,lastIndex:0},this.getValue=e,this.interpolateValue=t,this.frameId=-1,this.v=Array.apply(null,{length:i.k[0].s.length}),this.pv=Array.apply(null,{length:i.k[0].s.length}),this.lastValue=Array.apply(null,{length:i.k[0].s.length}),this.lastPValue=Array.apply(null,{length:i.k[0].s.length})}function h(t,e,s,h,o){var l;if(2===s)l=new f(t,e,o);else if(0===e.a)l=0===s?new i(t,e,h):new a(t,e,h);else if(1===e.a)l=0===s?new r(t,e,h):new n(t,e,h);else if(e.k.length)if("number"==typeof e.k[0])l=new a(t,e,h);else switch(s){case 0:l=new r(t,e,h);break;case 1:l=new n(t,e,h)}else l=new i(t,e,h);return l.k&&o.push(l),l}function o(t,e,s,i){return new d(t,e,s,i)}function l(t,e,s){return new c(t,e,s)}var p=-999999,f=function(){function t(){return this.p?ExpressionValue(this.p):[this.px.v,this.py.v,this.pz?this.pz.v:0]}function e(){return ExpressionValue(this.px)}function s(){return ExpressionValue(this.py)}function i(){return ExpressionValue(this.a)}function a(){return ExpressionValue(this.or)}function r(){return this.r?ExpressionValue(this.r,1/Tt):ExpressionValue(this.rz,1/Tt)}function n(){return ExpressionValue(this.s,100)}function h(){return ExpressionValue(this.o,100)}function o(){return ExpressionValue(this.sk)}function l(){return ExpressionValue(this.sa)}function p(t){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function f(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);if(this.mdf){if(this.v.reset(),this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented&&this.p.keyframes&&this.p.getValueAtTime){var s,i;this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(s=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/this.elem.globalData.frameRate,0),i=this.p.getValueAtTime(this.p.keyframes[0].t/this.elem.globalData.frameRate,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(s=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/this.elem.globalData.frameRate,0),i=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.01)/this.elem.globalData.frameRate,0)):(s=this.p.pv,i=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/this.elem.globalData.frameRate,this.p.offsetTime)),this.v.rotate(-Math.atan2(s[1]-i[1],s[0]-i[0]))}this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function m(){this.inverted=!0,this.iv=new k,this.k||(this.data.p.s?this.iv.translate(this.px.v,this.py.v,-this.pz.v):this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]),this.r?this.iv.rotate(-this.r.v):this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.s&&this.iv.scale(this.s.v[0],this.s.v[1],1),this.a&&this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]))}function d(){}return function(c,u,g){this.elem=c,this.frameId=-1,this.type="transform",this.dynamicProperties=[],this.mdf=!1,this.data=u,this.getValue=f,this.applyToMatrix=p,this.setInverted=m,this.autoOrient=d,this.v=new k,u.p.s?(this.px=jt.getProp(c,u.p.x,0,0,this.dynamicProperties),this.py=jt.getProp(c,u.p.y,0,0,this.dynamicProperties),u.p.z&&(this.pz=jt.getProp(c,u.p.z,0,0,this.dynamicProperties))):this.p=jt.getProp(c,u.p,1,0,this.dynamicProperties),u.r?this.r=jt.getProp(c,u.r,0,Tt,this.dynamicProperties):u.rx&&(this.rx=jt.getProp(c,u.rx,0,Tt,this.dynamicProperties),this.ry=jt.getProp(c,u.ry,0,Tt,this.dynamicProperties),this.rz=jt.getProp(c,u.rz,0,Tt,this.dynamicProperties),this.or=jt.getProp(c,u.or,1,Tt,this.dynamicProperties),this.or.sh=!0),u.sk&&(this.sk=jt.getProp(c,u.sk,0,Tt,this.dynamicProperties),this.sa=jt.getProp(c,u.sa,0,Tt,this.dynamicProperties)),u.a&&(this.a=jt.getProp(c,u.a,1,0,this.dynamicProperties)),u.s&&(this.s=jt.getProp(c,u.s,1,.01,this.dynamicProperties)),this.o=u.o?jt.getProp(c,u.o,0,.01,this.dynamicProperties):{mdf:!1,v:1},this.dynamicProperties.length?g.push(this):(this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?u.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])),Object.defineProperty(this,"position",{get:t}),Object.defineProperty(this,"xPosition",{get:e}),Object.defineProperty(this,"yPosition",{get:s}),Object.defineProperty(this,"orientation",{get:a}),Object.defineProperty(this,"anchorPoint",{get:i}),Object.defineProperty(this,"rotation",{get:r}),Object.defineProperty(this,"scale",{get:n}),Object.defineProperty(this,"opacity",{get:h}),Object.defineProperty(this,"skew",{get:o}),Object.defineProperty(this,"skewAxis",{get:l})}}(),m=function(){function t(t){if(this.prop.getValue(),this.cmdf=!1,this.omdf=!1,this.prop.mdf||t){var e,s,i,a=4*this.data.p;for(e=0;a>e;e+=1)s=e%4===0?100:255,i=Math.round(this.prop.v[e]*s),this.c[e]!==i&&(this.c[e]=i,this.cmdf=!0);if(this.o.length)for(a=this.prop.v.length,e=4*this.data.p;a>e;e+=1)s=e%2===0?100:1,i=e%2===0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this.omdf=!0)}}function e(e,s,i){this.prop=h(e,s.k,1,null,[]),this.data=s,this.k=this.prop.k,this.c=Array.apply(null,{length:4*s.p});var a=s.k.k[0].s?s.k.k[0].s.length-4*s.p:s.k.k.length-4*s.p;this.o=Array.apply(null,{length:a}),this.cmdf=!1,this.omdf=!1,this.getValue=t,this.prop.k&&i.push(this),this.getValue(!0)}return function(t,s,i){return new e(t,s,i)}}(),d=function(){function t(t){var e=0,s=this.dataProps.length;if(this.elem.globalData.frameId!==this.frameId||t){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId;s>e;){if(this.dataProps[e].p.mdf){this.mdf=!0;break}e+=1}if(this.mdf||t)for("svg"===this.renderer&&(this.dasharray=""),e=0;s>e;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dasharray+=" "+this.dataProps[e].p.v:this.dasharray[e]=this.dataProps[e].p.v:this.dashoffset=this.dataProps[e].p.v}}return function(e,s,i,a){this.elem=e,this.frameId=-1,this.dataProps=new Array(s.length),this.renderer=i,this.mdf=!1,this.k=!1,this.dasharray="svg"===this.renderer?"":new Array(s.length-1),this.dashoffset=0;var r,n,h=s.length;for(r=0;h>r;r+=1)n=jt.getProp(e,s[r].v,0,0,a),this.k=n.k?!0:this.k,this.dataProps[r]={n:s[r].n,p:n};this.getValue=t,this.k?a.push(this):this.getValue(!0)}}(),c=function(){function t(t){if(this.mdf=t||!1,this.dynamicProperties.length){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}var i=this.elem.textProperty.currentData?this.elem.textProperty.currentData.l.length:0;t&&2===this.data.r&&(this.e.v=i);var a=2===this.data.r?1:100/i,r=this.o.v/a,n=this.s.v/a+r,h=this.e.v/a+r;if(n>h){var o=n;n=h,h=o}this.finalS=n,this.finalE=h}function e(t){var e=Vt.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,r=0,n=this.finalS,h=this.finalE,o=this.data.sh;if(2==o)r=h===n?t>=h?1:0:s(0,i(.5/(h-n)+(t-n)/(h-n),1)),r=e(r);else if(3==o)r=h===n?t>=h?0:1:1-s(0,i(.5/(h-n)+(t-n)/(h-n),1)),r=e(r);else if(4==o)h===n?r=0:(r=s(0,i(.5/(h-n)+(t-n)/(h-n),1)),.5>r?r*=2:r=1-2*(r-.5)),r=e(r);else if(5==o){if(h===n)r=0;else{var l=h-n;t=i(s(0,t+.5-n),h-n);var p=-l/2+t,f=l/2;r=Math.sqrt(1-p*p/(f*f))}r=e(r)}else 6==o?(h===n?r=0:(t=i(s(0,t+.5-n),h-n),r=(1+Math.cos(Math.PI+2*Math.PI*t/(h-n)))/2),r=e(r)):(t>=a(n)&&(r=0>t-n?1-(n-t):s(0,i(h-t,1))),r=e(r));return r*this.a.v}var s=Math.max,i=Math.min,a=Math.floor;return function(s,i,a){this.mdf=!1,this.k=!1,this.data=i,this.dynamicProperties=[],this.getValue=t,this.getMult=e,this.elem=s,this.comp=s.comp,this.finalS=0,this.finalE=0,this.s=jt.getProp(s,i.s||{k:0},0,0,this.dynamicProperties),this.e="e"in i?jt.getProp(s,i.e,0,0,this.dynamicProperties):{v:100},this.o=jt.getProp(s,i.o||{k:0},0,0,this.dynamicProperties),this.xe=jt.getProp(s,i.xe||{k:0},0,0,this.dynamicProperties),this.ne=jt.getProp(s,i.ne||{k:0},0,0,this.dynamicProperties),this.a=jt.getProp(s,i.a,0,.01,this.dynamicProperties),this.dynamicProperties.length?a.push(this):this.getValue()}}(),u={getProp:h,getDashProp:o,getTextSelectorProp:l,getGradientProp:m};return u}();_.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var s=0;e>s;)this.v[s]=Ht.newPoint(),this.o[s]=Ht.newPoint(),this.i[s]=Ht.newPoint(),s+=1},_.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},_.prototype.doubleArrayLength=function(){this.v=this.v.concat(Array.apply(null,{length:this._maxLength})),this.i=this.i.concat(Array.apply(null,{length:this._maxLength})),this.o=this.o.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2},_.prototype.setXYAt=function(t,e,s,i,a){var r;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),s){case"v":r=this.v;break;case"i":r=this.i;break;case"o":r=this.o}(!r[i]||r[i]&&!a)&&(r[i]=Ht.newPoint()),r[i][0]=t,r[i][1]=e},_.prototype.setTripleAt=function(t,e,s,i,a,r,n,h){this.setXYAt(t,e,"v",n,h),this.setXYAt(s,i,"o",n,h),this.setXYAt(a,r,"i",n,h)};var Bt=function(){function t(t,e,s,i){var a,r,n;if(t<this.keyframes[0].t-this.offsetTime)a=this.keyframes[0].s[0],n=!0,e=0;else if(t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime)a=1===this.keyframes[this.keyframes.length-2].h?this.keyframes[this.keyframes.length-1].s[0]:this.keyframes[this.keyframes.length-2].e[0],n=!0;else{for(var h,o,l,p,f,m,d=e,c=this.keyframes.length-1,u=!0;u&&(h=this.keyframes[d],o=this.keyframes[d+1],!(o.t-this.offsetTime>t));)c-1>d?d+=1:u=!1;n=1===h.h,e=d;var g;if(!n){if(t>=o.t-this.offsetTime)g=1;else if(t<h.t-this.offsetTime)g=0;else{var y;h.__fnct?y=h.__fnct:(y=Vt.getBezierEasing(h.o.x,h.o.y,h.i.x,h.i.y).get,h.__fnct=y),g=y((t-(h.t-this.offsetTime))/(o.t-this.offsetTime-(h.t-this.offsetTime)))}r=h.e[0]}a=h.s[0]}p=s._length,m=a.i[0].length;var v,b=!1;for(l=0;p>l;l+=1)for(f=0;m>f;f+=1)n?(v=a.i[l][f],s.i[l][f]!==v&&(s.i[l][f]=v,i&&(this.pv.i[l][f]=v),b=!0),v=a.o[l][f],s.o[l][f]!==v&&(s.o[l][f]=v,i&&(this.pv.o[l][f]=v),b=!0),v=a.v[l][f],s.v[l][f]!==v&&(s.v[l][f]=v,i&&(this.pv.v[l][f]=v),b=!0)):(v=a.i[l][f]+(r.i[l][f]-a.i[l][f])*g,s.i[l][f]!==v&&(s.i[l][f]=v,i&&(this.pv.i[l][f]=v),b=!0),v=a.o[l][f]+(r.o[l][f]-a.o[l][f])*g,s.o[l][f]!==v&&(s.o[l][f]=v,i&&(this.pv.o[l][f]=v),b=!0),v=a.v[l][f]+(r.v[l][f]-a.v[l][f])*g,s.v[l][f]!==v&&(s.v[l][f]=v,i&&(this.pv.v[l][f]=v),b=!0));return b&&(s.c=a.c),{iterationIndex:e,hasModified:b}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(this.lastFrame===l||!(this.lastFrame<e&&e>t||this.lastFrame>s&&t>s)){var i=this.lastFrame<t?this._lastIndex:0,a=this.interpolateShape(t,i,this.v,!0);this._lastIndex=a.iterationIndex,this.mdf=a.hasModified,a.hasModified&&(this.paths=this.localShapeCollection)}this.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function s(){return this.v}function i(){this.paths=this.localShapeCollection,this.k||(this.mdf=!1)}function a(t,e,s){this.__shapeObject=1,this.comp=t.comp,this.k=!1,this.mdf=!1;var a=3===s?e.pt.k:e.ks.k;this.v=Ut.clone(a),this.pv=Ut.clone(this.v),this.localShapeCollection=Jt.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i}function r(t,e,s){this.__shapeObject=1,this.comp=t.comp,this.elem=t,this.offsetTime=t.data.st,this._lastIndex=0,this.keyframes=3===s?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;{var a=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length}this.v=Ut.newShape(),this.v.setPathData(this.keyframes[0].s[0].c,a),this.pv=Ut.clone(this.v),this.localShapeCollection=Jt.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=l,this.reset=i}function n(t,e,s,i){var n;if(3===s||4===s){var h=3===s?e.pt:e.ks,o=h.k;n=1===h.a||o.length?new r(t,e,s):new a(t,e,s)}else 5===s?n=new m(t,e):6===s?n=new p(t,e):7===s&&(n=new f(t,e));return n.k&&i.push(n),n}function h(){return a}function o(){return r}var l=-999999;a.prototype.interpolateShape=t,a.prototype.getValue=s,r.prototype.getValue=e,r.prototype.interpolateShape=t;var p=function(){function t(){var t=this.p.v[0],e=this.p.v[1],i=this.s.v[0]/2,a=this.s.v[1]/2;3!==this.d?(this.v.v[0][0]=t,this.v.v[0][1]=e-a,this.v.v[1][0]=t+i,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+a,this.v.v[3][0]=t-i,this.v.v[3][1]=e,this.v.i[0][0]=t-i*s,this.v.i[0][1]=e-a,this.v.i[1][0]=t+i,this.v.i[1][1]=e-a*s,this.v.i[2][0]=t+i*s,this.v.i[2][1]=e+a,this.v.i[3][0]=t-i,this.v.i[3][1]=e+a*s,this.v.o[0][0]=t+i*s,this.v.o[0][1]=e-a,this.v.o[1][0]=t+i,this.v.o[1][1]=e+a*s,this.v.o[2][0]=t-i*s,this.v.o[2][1]=e+a,this.v.o[3][0]=t-i,this.v.o[3][1]=e-a*s):(this.v.v[0][0]=t,this.v.v[0][1]=e-a,this.v.v[1][0]=t-i,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+a,this.v.v[3][0]=t+i,this.v.v[3][1]=e,this.v.i[0][0]=t+i*s,this.v.i[0][1]=e-a,this.v.i[1][0]=t-i,this.v.i[1][1]=e-a*s,this.v.i[2][0]=t-i*s,this.v.i[2][1]=e+a,this.v.i[3][0]=t+i,this.v.i[3][1]=e+a*s,this.v.o[0][0]=t-i*s,this.v.o[0][1]=e-a,this.v.o[1][0]=t-i,this.v.o[1][1]=e+a*s,this.v.o[2][0]=t+i*s,this.v.o[2][1]=e+a,this.v.o[3][0]=t+i,this.v.o[3][1]=e-a*s)}function e(t){var e,s=this.dynamicProperties.length;if(this.elem.globalData.frameId!==this.frameId){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId,e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertEllToPath()}}var s=Lt;return function(s,a){this.v=Ut.newShape(),this.v.setPathData(!0,4),this.localShapeCollection=Jt.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=a.d,this.dynamicProperties=[],this.elem=s,this.comp=s.comp,this.frameId=-1,this.mdf=!1,this.getValue=e,this.convertEllToPath=t,this.reset=i,this.p=jt.getProp(s,a.p,1,0,this.dynamicProperties),this.s=jt.getProp(s,a.s,1,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertEllToPath()}}(),f=function(){function t(){var t,e=Math.floor(this.pt.v),s=2*Math.PI/e,i=this.or.v,a=this.os.v,r=2*Math.PI*i/(4*e),n=-Math.PI/2,h=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;e>t;t+=1){var o=i*Math.cos(n),l=i*Math.sin(n),p=0===o&&0===l?0:l/Math.sqrt(o*o+l*l),f=0===o&&0===l?0:-o/Math.sqrt(o*o+l*l);o+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(o,l,o-p*r*a*h,l-f*r*a*h,o+p*r*a*h,l+f*r*a*h,t,!0),n+=s*h}this.paths.length=0,this.paths[0]=this.v}function e(){var t,e,s,i,a=2*Math.floor(this.pt.v),r=2*Math.PI/a,n=!0,h=this.or.v,o=this.ir.v,l=this.os.v,p=this.is.v,f=2*Math.PI*h/(2*a),m=2*Math.PI*o/(2*a),d=-Math.PI/2;d+=this.r.v;var c=3===this.data.d?-1:1;for(this.v._length=0,t=0;a>t;t+=1){e=n?h:o,s=n?l:p,i=n?f:m;var u=e*Math.cos(d),g=e*Math.sin(d),y=0===u&&0===g?0:g/Math.sqrt(u*u+g*g),v=0===u&&0===g?0:-u/Math.sqrt(u*u+g*g);u+=+this.p.v[0],g+=+this.p.v[1],this.v.setTripleAt(u,g,u-y*i*s*c,g-v*i*s*c,u+y*i*s*c,g+v*i*s*c,t,!0),n=!n,d+=r*c}}function s(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);this.mdf&&this.convertToPath()}}return function(a,r){this.v=Ut.newShape(),this.v.setPathData(!0,0),this.elem=a,this.comp=a.comp,this.data=r,this.frameId=-1,this.d=r.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=s,this.reset=i,1===r.sy?(this.ir=jt.getProp(a,r.ir,0,0,this.dynamicProperties),this.is=jt.getProp(a,r.is,0,.01,this.dynamicProperties),this.convertToPath=e):this.convertToPath=t,this.pt=jt.getProp(a,r.pt,0,0,this.dynamicProperties),this.p=jt.getProp(a,r.p,1,0,this.dynamicProperties),this.r=jt.getProp(a,r.r,0,Tt,this.dynamicProperties),this.or=jt.getProp(a,r.or,0,0,this.dynamicProperties),this.os=jt.getProp(a,r.os,0,.01,this.dynamicProperties),this.localShapeCollection=Jt.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:this.convertToPath()}}(),m=function(){function t(t){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertRectToPath()}}function e(){var t=this.p.v[0],e=this.p.v[1],s=this.s.v[0]/2,i=this.s.v[1]/2,a=Dt(s,i,this.r.v),r=a*(1-Lt);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+s,e-i+a,t+s,e-i+a,t+s,e-i+r,0,!0),this.v.setTripleAt(t+s,e+i-a,t+s,e+i-r,t+s,e+i-a,1,!0),0!==a?(this.v.setTripleAt(t+s-a,e+i,t+s-a,e+i,t+s-r,e+i,2,!0),this.v.setTripleAt(t-s+a,e+i,t-s+r,e+i,t-s+a,e+i,3,!0),this.v.setTripleAt(t-s,e+i-a,t-s,e+i-a,t-s,e+i-r,4,!0),this.v.setTripleAt(t-s,e-i+a,t-s,e-i+r,t-s,e-i+a,5,!0),this.v.setTripleAt(t-s+a,e-i,t-s+a,e-i,t-s+r,e-i,6,!0),this.v.setTripleAt(t+s-a,e-i,t+s-r,e-i,t+s-a,e-i,7,!0)):(this.v.setTripleAt(t-s,e+i,t-s+r,e+i,t-s,e+i,2),this.v.setTripleAt(t-s,e-i,t-s,e-i+r,t-s,e-i,3))):(this.v.setTripleAt(t+s,e-i+a,t+s,e-i+r,t+s,e-i+a,0,!0),0!==a?(this.v.setTripleAt(t+s-a,e-i,t+s-a,e-i,t+s-r,e-i,1,!0),this.v.setTripleAt(t-s+a,e-i,t-s+r,e-i,t-s+a,e-i,2,!0),this.v.setTripleAt(t-s,e-i+a,t-s,e-i+a,t-s,e-i+r,3,!0),this.v.setTripleAt(t-s,e+i-a,t-s,e+i-r,t-s,e+i-a,4,!0),this.v.setTripleAt(t-s+a,e+i,t-s+a,e+i,t-s+r,e+i,5,!0),this.v.setTripleAt(t+s-a,e+i,t+s-r,e+i,t+s-a,e+i,6,!0),this.v.setTripleAt(t+s,e+i-a,t+s,e+i-a,t+s,e+i-r,7,!0)):(this.v.setTripleAt(t-s,e-i,t-s+r,e-i,t-s,e-i,1,!0),this.v.setTripleAt(t-s,e+i,t-s,e+i-r,t-s,e+i,2,!0),this.v.setTripleAt(t+s,e+i,t+s-r,e+i,t+s,e+i,3,!0)))}return function(s,a){this.v=Ut.newShape(),this.v.c=!0,this.localShapeCollection=Jt.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=s,this.comp=s.comp,this.frameId=-1,this.d=a.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=t,this.convertRectToPath=e,this.reset=i,this.p=jt.getProp(s,a.p,1,0,this.dynamicProperties),this.s=jt.getProp(s,a.s,1,0,this.dynamicProperties),this.r=jt.getProp(s,a.r,0,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertRectToPath()}}(),d={};return d.getShapeProp=n,d.getConstructorFunction=h,d.getKeyframedConstructorFunction=o,d}(),Gt=function(){function t(t,e){i[t]||(i[t]=e)}function e(t,e,s,a){return new i[t](e,s,a)}var s={},i={};return s.registerModifier=t,s.getModifier=e,s}();S.prototype.initModifierProperties=function(){},S.prototype.addShapeToModifier=function(){},S.prototype.addShape=function(t){this.closed||(this.shapes.push({shape:t.sh,data:t,localShapeCollection:Jt.newShapeCollection()}),this.addShapeToModifier(t.sh))},S.prototype.init=function(t,e,s){this.elem=t,this.frameId=-1,this.shapes=[],this.dynamicProperties=[],this.mdf=!1,this.closed=!1,this.k=!1,this.comp=t.comp,this.initModifierProperties(t,e),this.dynamicProperties.length?(this.k=!0,s.push(this)):this.getValue(!0)},P(S,F),F.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);if(this.mdf||t){var i=this.o.v%360/360;0>i&&(i+=1);var a=this.s.v+i,r=this.e.v+i;if(a>r){var n=a;a=r,r=n}this.sValue=a,this.eValue=r,this.oValue=i}}},F.prototype.initModifierProperties=function(t,e){this.sValue=0,this.eValue=0,this.oValue=0,this.getValue=this.processKeys,this.s=jt.getProp(t,e.s,0,.01,this.dynamicProperties),this.e=jt.getProp(t,e.e,0,.01,this.dynamicProperties),this.o=jt.getProp(t,e.o,0,0,this.dynamicProperties),this.m=e.m,this.dynamicProperties.length||this.getValue(!0)},F.prototype.calculateShapeEdges=function(t,e,s,i,a){var r=[];1>=e?r.push({s:t,e:e}):t>=1?r.push({s:t-1,e:e-1}):(r.push({s:t,e:1}),r.push({s:0,e:e-1}));var n,h,o=[],l=r.length;for(n=0;l>n;n+=1)if(h=r[n],h.e*a<i||h.s*a>i+s);else{var p,f;p=h.s*a<=i?0:(h.s*a-i)/s,f=h.e*a>=i+s?1:(h.e*a-i)/s,o.push([p,f])}return o.length||o.push([0,0]),o},F.prototype.processShapes=function(t){var e,s,i,a,r,n,h,o=this.shapes.length,l=this.sValue,p=this.eValue,f=0;if(p===l)for(s=0;o>s;s+=1)this.shapes[s].localShapeCollection.releaseShapes(),this.shapes[s].shape.mdf=!0,this.shapes[s].shape.paths=this.shapes[s].localShapeCollection;else if(1===p&&0===l||0===p&&1===l){if(this.mdf)for(s=0;o>s;s+=1)this.shapes[s].shape.mdf=!0}else{var m,d,c=[];for(s=0;o>s;s+=1)if(m=this.shapes[s],m.shape.mdf||this.mdf||t||2===this.m){if(e=m.shape.paths,a=e._length,h=0,!m.shape.mdf&&m.pathsData)h=m.totalShapeLength;else{for(r=[],i=0;a>i;i+=1)n=Ot.getSegmentsLength(e.shapes[i]),r.push(n),h+=n.totalLength;m.totalShapeLength=h,m.pathsData=r}f+=h,m.shape.mdf=!0}else m.shape.paths=m.localShapeCollection;var i,a,u=l,g=p,y=0;for(s=o-1;s>=0;s-=1)if(m=this.shapes[s],m.shape.mdf){if(d=m.localShapeCollection,d.releaseShapes(),2===this.m&&o>1){var v=this.calculateShapeEdges(l,p,m.totalShapeLength,y,f);y+=m.totalShapeLength}else v=[[u,g]];for(a=v.length,i=0;a>i;i+=1){u=v[i][0],g=v[i][1],c.length=0,1>=g?c.push({s:m.totalShapeLength*u,e:m.totalShapeLength*g}):u>=1?c.push({s:m.totalShapeLength*(u-1),e:m.totalShapeLength*(g-1)}):(c.push({s:m.totalShapeLength*u,e:m.totalShapeLength}),c.push({s:0,e:m.totalShapeLength*(g-1)}));var b=this.addShapes(m,c[0]);if(c[0].s!==c[0].e){if(c.length>1)if(m.shape.v.c){var k=b.pop();this.addPaths(b,d),b=this.addShapes(m,c[1],k)}else this.addPaths(b,d),b=this.addShapes(m,c[1]);this.addPaths(b,d)}}m.shape.paths=d}}this.dynamicProperties.length||(this.mdf=!1)},F.prototype.addPaths=function(t,e){var s,i=t.length;for(s=0;i>s;s+=1)e.addShape(t[s])},F.prototype.addSegment=function(t,e,s,i,a,r,n){a.setXYAt(e[0],e[1],"o",r),a.setXYAt(s[0],s[1],"i",r+1),n&&a.setXYAt(t[0],t[1],"v",r),a.setXYAt(i[0],i[1],"v",r+1)},F.prototype.addShapes=function(t,e,s){var i,a,r,n,h,o,l,p,f=t.pathsData,m=t.shape.paths.shapes,d=t.shape.paths._length,c=0,u=[],g=!0;for(s?(h=s._length,p=s._length):(s=Ut.newShape(),h=0,p=0),
u.push(s),i=0;d>i;i+=1){for(o=f[i].lengths,s.c=m[i].c,r=m[i].c?o.length:o.length+1,a=1;r>a;a+=1)if(n=o[a-1],c+n.addedLength<e.s)c+=n.addedLength,s.c=!1;else{if(c>e.e){s.c=!1;break}e.s<=c&&e.e>=c+n.addedLength?(this.addSegment(m[i].v[a-1],m[i].o[a-1],m[i].i[a],m[i].v[a],s,h,g),g=!1):(l=Ot.getNewSegment(m[i].v[a-1],m[i].v[a],m[i].o[a-1],m[i].i[a],(e.s-c)/n.addedLength,(e.e-c)/n.addedLength,o[a-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,h,g),g=!1,s.c=!1),c+=n.addedLength,h+=1}if(m[i].c){if(n=o[a-1],c<=e.e){var y=o[a-1].addedLength;e.s<=c&&e.e>=c+y?(this.addSegment(m[i].v[a-1],m[i].o[a-1],m[i].i[0],m[i].v[0],s,h,g),g=!1):(l=Ot.getNewSegment(m[i].v[a-1],m[i].v[0],m[i].o[a-1],m[i].i[0],(e.s-c)/y,(e.e-c)/y,o[a-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,h,g),g=!1,s.c=!1)}else s.c=!1;c+=n.addedLength,h+=1}if(s._length&&(s.setXYAt(s.v[p][0],s.v[p][1],"i",p),s.setXYAt(s.v[s._length-1][0],s.v[s._length-1][1],"o",s._length-1)),c>e.e)break;d-1>i&&(s=Ut.newShape(),g=!0,u.push(s),h=0)}return u},Gt.registerModifier("tm",F),P(S,x),x.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},x.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=jt.getProp(t,e.r,0,null,this.dynamicProperties),this.dynamicProperties.length||this.getValue(!0)},x.prototype.processPath=function(t,e){var s=Ut.newShape();s.c=t.c;var i,a,r,n,h,o,l,p,f,m,d,c,u,g=t._length,y=0;for(i=0;g>i;i+=1)a=t.v[i],n=t.o[i],r=t.i[i],a[0]===n[0]&&a[1]===n[1]&&a[0]===r[0]&&a[1]===r[1]?0!==i&&i!==g-1||t.c?(h=0===i?t.v[g-1]:t.v[i-1],o=Math.sqrt(Math.pow(a[0]-h[0],2)+Math.pow(a[1]-h[1],2)),l=o?Math.min(o/2,e)/o:0,p=c=a[0]+(h[0]-a[0])*l,f=u=a[1]-(a[1]-h[1])*l,m=p-(p-a[0])*Lt,d=f-(f-a[1])*Lt,s.setTripleAt(p,f,m,d,c,u,y),y+=1,h=i===g-1?t.v[0]:t.v[i+1],o=Math.sqrt(Math.pow(a[0]-h[0],2)+Math.pow(a[1]-h[1],2)),l=o?Math.min(o/2,e)/o:0,p=m=a[0]+(h[0]-a[0])*l,f=d=a[1]+(h[1]-a[1])*l,c=p-(p-a[0])*Lt,u=f-(f-a[1])*Lt,s.setTripleAt(p,f,m,d,c,u,y),y+=1):(s.setTripleAt(a[0],a[1],n[0],n[1],r[0],r[1],y),y+=1):(s.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],y),y+=1);return s},x.prototype.processShapes=function(t){var e,s,i,a,r=this.shapes.length,n=this.rd.v;if(0!==n){var h,o,l;for(s=0;r>s;s+=1){if(h=this.shapes[s],o=h.shape.paths,l=h.localShapeCollection,h.shape.mdf||this.mdf||t)for(l.releaseShapes(),h.shape.mdf=!0,e=h.shape.paths.shapes,a=h.shape.paths._length,i=0;a>i;i+=1)l.addShape(this.processPath(e[i],n));h.shape.paths=h.localShapeCollection}}this.dynamicProperties.length||(this.mdf=!1)},Gt.registerModifier("rd",x),w.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},w.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=jt.getProp(t,e.c,0,null,this.dynamicProperties),this.o=jt.getProp(t,e.o,0,null,this.dynamicProperties),this.tr=jt.getProp(t,e.tr,2,null,this.dynamicProperties),this.data=e,this.dynamicProperties.length||this.getValue(!0),this.pMatrix=new k,this.rMatrix=new k,this.sMatrix=new k,this.tMatrix=new k,this.matrix=new k},w.prototype.applyTransforms=function(t,e,s,i,a,r){var n=r?-1:1,h=i.s.v[0]+(1-i.s.v[0])*(1-a),o=i.s.v[1]+(1-i.s.v[1])*(1-a);t.translate(i.p.v[0]*n*a,i.p.v[1]*n*a,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*a),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),s.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),s.scale(r?1/h:h,r?1/o:o),s.translate(i.a.v[0],i.a.v[1],i.a.v[2])},w.prototype.init=function(t,e,s,i,a){this.elem=t,this.arr=e,this.pos=s,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.dynamicProperties=[],this.frameId=-1,this.initModifierProperties(t,e[s]);for(var r=0;s>0;)s-=1,this._elements.unshift(e[s]),r+=1;this.dynamicProperties.length?(this.k=!0,a.push(this)):this.getValue(!0)},w.prototype.resetElements=function(t){var e,s=t.length;for(e=0;s>e;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},w.prototype.cloneElements=function(t){var e=(t.length,JSON.parse(JSON.stringify(t)));return this.resetElements(e),e},w.prototype.changeGroupRender=function(t,e){var s,i=t.length;for(s=0;i>s;s+=1)t[s]._render=e,"gr"===t[s].ty&&this.changeGroupRender(t[s].it,e)},w.prototype.processShapes=function(t){if(this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.dynamicProperties.length||t||(this.mdf=!1),this.mdf)){var e=Math.ceil(this.c.v);if(this._groups.length<e){for(;this._groups.length<e;){var s={it:this.cloneElements(this._elements),ty:"gr"};s.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:0,ix:6,k:0},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,s),this._groups.splice(0,0,s),this._currentCopies+=1}this.elem.reloadShapes()}var i,a,r=0;for(i=0;i<=this._groups.length-1;i+=1)a=e>r,this._groups[i]._render=a,this.changeGroupRender(this._groups[i].it,a),r+=1;this._currentCopies=e,this.elem.firstFrame=!0;var n=this.o.v,h=n%1,o=n>0?Math.floor(n):Math.ceil(n),l=(this.tr.v.props,this.pMatrix.props),p=this.rMatrix.props,f=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var m=0;if(n>0){for(;o>m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),m+=1;h&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,h,!1),m+=h)}else if(0>n){for(;m>o;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),m-=1;h&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-h,!0),m-=h)}i=1===this.data.m?0:this._currentCopies-1;var d=1===this.data.m?1:-1;for(r=this._currentCopies;r;){if(0!==m){(0!==i&&1===d||i!==this._currentCopies-1&&-1===d)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),this.matrix.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15]);var c,u=this.elemsData[i].it,g=u[u.length-1].transform.mProps.v.props,y=g.length;for(c=0;y>c;c+=1)g[c]=this.matrix.props[c];this.matrix.reset()}else{this.matrix.reset();var c,u=this.elemsData[i].it,g=u[u.length-1].transform.mProps.v.props,y=g.length;for(c=0;y>c;c+=1)g[c]=this.matrix.props[c]}m+=1,r-=1,i+=d}}},w.prototype.addShape=function(){},Gt.registerModifier("rp",w),D.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},D.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)Ut.release(this.shapes[t]);this._length=0};var Wt=function(){function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&n&&n(null)}function e(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e}function s(e){var s=document.createElement("img");s.addEventListener("load",t.bind(this),!1),s.addEventListener("error",t.bind(this),!1),s.src=e}function i(t,i){n=i,this.totalAssets=t.length;var a;for(a=0;a<this.totalAssets;a+=1)t[a].layers||(s.bind(this)(e.bind(this)(t[a])),this.totalImages+=1)}function a(t){this.path=t||""}function r(t){this.assetsPath=t||""}var n;return function(){this.loadAssets=i,this.setAssetsPath=r,this.setPath=a,this.assetsPath="",this.path="",this.totalAssets=0,this.totalImages=0,this.loadedAssets=0}}(),Xt=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),qt=function(){function t(t){var e=document.createElementNS(Et,"filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e}function e(){var t=document.createElementNS(Et,"feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}var s={};return s.createFilter=t,s.createAlphaToLuminanceFilter=e,s}();C.prototype.searchProperties=function(t){var e,s,i,a=this._textData.a.length,r=jt.getProp;for(e=0;a>e;e+=1)i=this._textData.a[e],s={a:{},s:{}},"r"in i.a&&(s.a.r=r(this._elem,i.a.r,0,Tt,this._dynamicProperties)),"rx"in i.a&&(s.a.rx=r(this._elem,i.a.rx,0,Tt,this._dynamicProperties)),"ry"in i.a&&(s.a.ry=r(this._elem,i.a.ry,0,Tt,this._dynamicProperties)),"sk"in i.a&&(s.a.sk=r(this._elem,i.a.sk,0,Tt,this._dynamicProperties)),"sa"in i.a&&(s.a.sa=r(this._elem,i.a.sa,0,Tt,this._dynamicProperties)),"s"in i.a&&(s.a.s=r(this._elem,i.a.s,1,.01,this._dynamicProperties)),"a"in i.a&&(s.a.a=r(this._elem,i.a.a,1,0,this._dynamicProperties)),"o"in i.a&&(s.a.o=r(this._elem,i.a.o,0,.01,this._dynamicProperties)),"p"in i.a&&(s.a.p=r(this._elem,i.a.p,1,0,this._dynamicProperties)),"sw"in i.a&&(s.a.sw=r(this._elem,i.a.sw,0,0,this._dynamicProperties)),"sc"in i.a&&(s.a.sc=r(this._elem,i.a.sc,1,0,this._dynamicProperties)),"fc"in i.a&&(s.a.fc=r(this._elem,i.a.fc,1,0,this._dynamicProperties)),"fh"in i.a&&(s.a.fh=r(this._elem,i.a.fh,0,0,this._dynamicProperties)),"fs"in i.a&&(s.a.fs=r(this._elem,i.a.fs,0,.01,this._dynamicProperties)),"fb"in i.a&&(s.a.fb=r(this._elem,i.a.fb,0,.01,this._dynamicProperties)),"t"in i.a&&(s.a.t=r(this._elem,i.a.t,0,0,this._dynamicProperties)),s.s=jt.getTextSelectorProp(this._elem,i.s,this._dynamicProperties),s.s.t=i.s.t,this._animatorsData[e]=s;this._textData.p&&"m"in this._textData.p?(this._pathData={f:r(this._elem,this._textData.p.f,0,0,this._dynamicProperties),l:r(this._elem,this._textData.p.l,0,0,this._dynamicProperties),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=r(this._elem,this._textData.m.a,1,0,this._dynamicProperties),this._dynamicProperties.length&&t.push(this)},C.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this.mdf||this._firstFrame||e||this._hasMaskedPath&&this._pathData.m.mdf){this._firstFrame=!1;var s,i,a,r,n=this._moreOptions.alignment.v,h=this._animatorsData,o=this._textData,l=this.mHelper,p=this._renderType,f=this.renderedLetters.length,m=(this.data,t.l);if(this._hasMaskedPath){var d=this._pathData.m;if(!this._pathData.n||this._pathData.mdf){var c=d.v;this._pathData.r&&(c=b(c));var u={tLength:0,segments:[]};r=c._length-1;var k,A=0;for(a=0;r>a;a+=1)k={s:c.v[a],e:c.v[a+1],to:[c.o[a][0]-c.v[a][0],c.o[a][1]-c.v[a][1]],ti:[c.i[a+1][0]-c.v[a+1][0],c.i[a+1][1]-c.v[a+1][1]]},Ot.buildBezierData(k),u.tLength+=k.bezierData.segmentLength,u.segments.push(k),A+=k.bezierData.segmentLength;a=r,d.v.c&&(k={s:c.v[a],e:c.v[0],to:[c.o[a][0]-c.v[a][0],c.o[a][1]-c.v[a][1]],ti:[c.i[0][0]-c.v[0][0],c.i[0][1]-c.v[0][1]]},Ot.buildBezierData(k),u.tLength+=k.bezierData.segmentLength,u.segments.push(k),A+=k.bezierData.segmentLength),this._pathData.pi=u}var P,E,M,u=this._pathData.pi,_=this._pathData.f.v,S=0,F=1,x=0,w=!0,D=u.segments;if(0>_&&d.v.c)for(u.tLength<Math.abs(_)&&(_=-Math.abs(_)%u.tLength),S=D.length-1,M=D[S].bezierData.points,F=M.length-1;0>_;)_+=M[F].partialLength,F-=1,0>F&&(S-=1,M=D[S].bezierData.points,F=M.length-1);M=D[S].bezierData.points,E=M[F-1],P=M[F];var C,T,L=P.partialLength}r=m.length,s=0,i=0;var N,V,O,z,R,j=1.2*t.s*.714,B=!0;if(z=h.length,e)for(O=0;z>O;O+=1)V=h[O].s,V.getValue(!0);var G,W,X,q,Y,H,U,J,Z,K,Q,$,tt,et=-1,st=_,it=S,at=F,rt=-1,nt=0,ht="",ot=this.defaultPropsArray;for(a=0;r>a;a+=1){if(l.reset(),Y=1,m[a].n)s=0,i+=t.yOffset,i+=B?1:0,_=st,B=!1,nt=0,this._hasMaskedPath&&(S=it,F=at,M=D[S].bezierData.points,E=M[F-1],P=M[F],L=P.partialLength,x=0),tt=K=$=ht="",ot=this.defaultPropsArray;else{if(this._hasMaskedPath){if(rt!==m[a].line){switch(t.j){case 1:_+=A-t.lineWidths[m[a].line];break;case 2:_+=(A-t.lineWidths[m[a].line])/2}rt=m[a].line}et!==m[a].ind&&(m[et]&&(_+=m[et].extra),_+=m[a].an/2,et=m[a].ind),_+=n[0]*m[a].an/200;var lt=0;for(O=0;z>O;O+=1)N=h[O].a,"p"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),lt+=G.length?N.p.v[0]*G[0]:N.p.v[0]*G),"a"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),lt+=G.length?N.a.v[0]*G[0]:N.a.v[0]*G);for(w=!0;w;)x+L>=_+lt||!M?(C=(_+lt-x)/P.partialLength,X=E.point[0]+(P.point[0]-E.point[0])*C,q=E.point[1]+(P.point[1]-E.point[1])*C,l.translate(-n[0]*m[a].an/200,-(n[1]*j/100)),w=!1):M&&(x+=P.partialLength,F+=1,F>=M.length&&(F=0,S+=1,D[S]?M=D[S].bezierData.points:d.v.c?(F=0,S=0,M=D[S].bezierData.points):(x-=P.partialLength,M=null)),M&&(E=P,P=M[F],L=P.partialLength));W=m[a].an/2-m[a].add,l.translate(-W,0,0)}else W=m[a].an/2-m[a].add,l.translate(-W,0,0),l.translate(-n[0]*m[a].an/200,-n[1]*j/100,0);for(nt+=m[a].l/2,O=0;z>O;O+=1)N=h[O].a,"t"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),this._hasMaskedPath?_+=G.length?N.t*G[0]:N.t*G:s+=G.length?N.t.v*G[0]:N.t.v*G);for(nt+=m[a].l/2,t.strokeWidthAnim&&(U=t.sw||0),t.strokeColorAnim&&(H=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(J=[t.fc[0],t.fc[1],t.fc[2]]),O=0;z>O;O+=1)N=h[O].a,"a"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),G.length?l.translate(-N.a.v[0]*G[0],-N.a.v[1]*G[1],N.a.v[2]*G[2]):l.translate(-N.a.v[0]*G,-N.a.v[1]*G,N.a.v[2]*G));for(O=0;z>O;O+=1)N=h[O].a,"s"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),G.length?l.scale(1+(N.s.v[0]-1)*G[0],1+(N.s.v[1]-1)*G[1],1):l.scale(1+(N.s.v[0]-1)*G,1+(N.s.v[1]-1)*G,1));for(O=0;z>O;O+=1){if(N=h[O].a,V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),"sk"in N&&(G.length?l.skewFromAxis(-N.sk.v*G[0],N.sa.v*G[1]):l.skewFromAxis(-N.sk.v*G,N.sa.v*G)),"r"in N&&l.rotateZ(G.length?-N.r.v*G[2]:-N.r.v*G),"ry"in N&&l.rotateY(G.length?N.ry.v*G[1]:N.ry.v*G),"rx"in N&&l.rotateX(G.length?N.rx.v*G[0]:N.rx.v*G),"o"in N&&(Y+=G.length?(N.o.v*G[0]-Y)*G[0]:(N.o.v*G-Y)*G),t.strokeWidthAnim&&"sw"in N&&(U+=G.length?N.sw.v*G[0]:N.sw.v*G),t.strokeColorAnim&&"sc"in N)for(Z=0;3>Z;Z+=1)H[Z]=G.length?H[Z]+(N.sc.v[Z]-H[Z])*G[0]:H[Z]+(N.sc.v[Z]-H[Z])*G;if(t.fillColorAnim&&t.fc){if("fc"in N)for(Z=0;3>Z;Z+=1)J[Z]=G.length?J[Z]+(N.fc.v[Z]-J[Z])*G[0]:J[Z]+(N.fc.v[Z]-J[Z])*G;"fh"in N&&(J=G.length?v(J,N.fh.v*G[0]):v(J,N.fh.v*G)),"fs"in N&&(J=G.length?g(J,N.fs.v*G[0]):g(J,N.fs.v*G)),"fb"in N&&(J=G.length?y(J,N.fb.v*G[0]):y(J,N.fb.v*G))}}for(O=0;z>O;O+=1)N=h[O].a,"p"in N&&(V=h[O].s,G=V.getMult(m[a].anIndexes[O],o.a[O].s.totalChars),this._hasMaskedPath?G.length?l.translate(0,N.p.v[1]*G[0],-N.p.v[2]*G[1]):l.translate(0,N.p.v[1]*G,-N.p.v[2]*G):G.length?l.translate(N.p.v[0]*G[0],N.p.v[1]*G[1],-N.p.v[2]*G[2]):l.translate(N.p.v[0]*G,N.p.v[1]*G,-N.p.v[2]*G));if(t.strokeWidthAnim&&(K=0>U?0:U),t.strokeColorAnim&&(Q="rgb("+Math.round(255*H[0])+","+Math.round(255*H[1])+","+Math.round(255*H[2])+")"),t.fillColorAnim&&t.fc&&($="rgb("+Math.round(255*J[0])+","+Math.round(255*J[1])+","+Math.round(255*J[2])+")"),this._hasMaskedPath){if(l.translate(0,-t.ls),l.translate(0,n[1]*j/100+i,0),o.p.p){T=(P.point[1]-E.point[1])/(P.point[0]-E.point[0]);var pt=180*Math.atan(T)/Math.PI;P.point[0]<E.point[0]&&(pt+=180),l.rotate(-pt*Math.PI/180)}l.translate(X,q,0),_-=n[0]*m[a].an/200,m[a+1]&&et!==m[a+1].ind&&(_+=m[a].an/2,_+=t.tr/1e3*t.s)}else{switch(l.translate(s,i,0),t.ps&&l.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[m[a].line]),0,0);break;case 2:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[m[a].line])/2,0,0)}l.translate(0,-t.ls),l.translate(W,0,0),l.translate(n[0]*m[a].an/200,n[1]*j/100,0),s+=m[a].l+t.tr/1e3*t.s}"html"===p?ht=l.toCSS():"svg"===p?ht=l.to2dCSS():ot=[l.props[0],l.props[1],l.props[2],l.props[3],l.props[4],l.props[5],l.props[6],l.props[7],l.props[8],l.props[9],l.props[10],l.props[11],l.props[12],l.props[13],l.props[14],l.props[15]],tt=Y}a>=f?(R=new I(tt,K,Q,$,ht,ot),this.renderedLetters.push(R),f+=1,this.lettersChangedFlag=!0):(R=this.renderedLetters[a],this.lettersChangedFlag=R.update(tt,K,Q,$,ht,ot)||this.lettersChangedFlag)}}},C.prototype.getValue=function(){if(this._elem.globalData.frameId!==this._frameId){this._frameId=this._elem.globalData.frameId;var t,e=this._dynamicProperties.length;for(this.mdf=!1,t=0;e>t;t+=1)this._dynamicProperties[t].getValue(),this.mdf=this._dynamicProperties[t].mdf||this.mdf}},C.prototype.mHelper=new k,C.prototype.defaultPropsArray=[],I.prototype.update=function(t,e,s,i,a,r){this.mdf.o=!1,this.mdf.sw=!1,this.mdf.sc=!1,this.mdf.fc=!1,this.mdf.m=!1,this.mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this.mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this.mdf.sw=!0,n=!0),this.sc!==s&&(this.sc=s,this.mdf.sc=!0,n=!0),this.fc!==i&&(this.fc=i,this.mdf.fc=!0,n=!0),this.m!==a&&(this.m=a,this.mdf.m=!0,n=!0),!r.length||this.p[0]===r[0]&&this.p[1]===r[1]&&this.p[4]===r[4]&&this.p[5]===r[5]&&this.p[12]===r[12]&&this.p[13]===r[13]||(this.p=r,this.mdf.p=!0,n=!0),n},T.prototype.setCurrentData=function(t){var e=this.currentData;e.ascent=t.ascent,e.boxWidth=t.boxWidth?t.boxWidth:e.boxWidth,e.f=t.f,e.fStyle=t.fStyle,e.fWeight=t.fWeight,e.fc=t.fc,e.j=t.j,e.justifyOffset=t.justifyOffset,e.l=t.l,e.lh=t.lh,e.lineWidths=t.lineWidths,e.ls=t.ls,e.of=t.of,e.s=t.s,e.sc=t.sc,e.sw=t.sw,e.t=t.t,e.tr=t.tr,e.fillColorAnim=t.fillColorAnim||e.fillColorAnim,e.strokeColorAnim=t.strokeColorAnim||e.strokeColorAnim,e.strokeWidthAnim=t.strokeWidthAnim||e.strokeWidthAnim,e.yOffset=t.yOffset,e.__complete=!1},T.prototype.searchProperty=function(){return this.kf=this.data.d.k.length>1,this.kf},T.prototype.getValue=function(){this.mdf=!1;var t=this.elem.globalData.frameId;if(t!==this._frameId&&this.kf||this.firstFrame){for(var e,s=this.data.d.k,i=0,a=s.length;a-1>=i&&(e=s[i].s,!(i===a-1||s[i+1].t>t));)i+=1;this.keysIndex!==i&&(e.__complete||this.completeTextData(e),this.setCurrentData(e),this.mdf=this.firstFrame?!1:!0,this.pv=this.v=this.currentData.t,this.keysIndex=i),this._frameId=t}},T.prototype.completeTextData=function(t){t.__complete=!0;var e,s,i,a,r,n,h,o=this.elem.globalData.fontManager,l=this.data,p=[],f=0,m=l.m.g,d=0,c=0,u=0,g=[],y=0,v=0,b=o.getFontByName(t.f),k=0,A=b.fStyle.split(" "),P="normal",E="normal";s=A.length;var M;for(e=0;s>e;e+=1)switch(M=A[e].toLowerCase()){case"italic":E="italic";break;case"bold":P="700";break;case"black":P="900";break;case"medium":P="500";break;case"regular":case"normal":P="400";case"light":case"thin":P="200"}t.fWeight=P,t.fStyle=E,s=t.t.length;var _=t.tr/1e3*t.s;if(t.sz){var S=t.sz[0],F=-1;for(e=0;s>e;e+=1)i=!1," "===t.t.charAt(e)?F=e:13===t.t.charCodeAt(e)&&(y=0,i=!0),o.chars?(h=o.getCharData(t.t.charAt(e),b.fStyle,b.fFamily),k=i?0:h.w*t.s/100):k=o.measureText(t.t.charAt(e),t.f,t.s),y+k>S&&" "!==t.t.charAt(e)?(-1===F?s+=1:e=F,t.t=t.t.substr(0,e)+"\r"+t.t.substr(e===F?e+1:e),F=-1,y=0):(y+=k,y+=_);s=t.t.length}y=-_,k=0;var x,w=0;for(e=0;s>e;e+=1)if(i=!1,x=t.t.charAt(e)," "===x?a="\xa0":13===x.charCodeAt(0)?(w=0,g.push(y),v=y>v?y:v,y=-2*_,a="",i=!0,u+=1):a=t.t.charAt(e),o.chars?(h=o.getCharData(x,b.fStyle,o.getFontByName(t.f).fFamily),k=i?0:h.w*t.s/100):k=o.measureText(a,t.f,t.s)," "===x?w+=k+_:(y+=k+_+w,w=0),p.push({l:k,an:k,add:d,n:i,anIndexes:[],val:a,line:u}),2==m){if(d+=k,""==a||"\xa0"==a||e==s-1){for((""==a||"\xa0"==a)&&(d-=k);e>=c;)p[c].an=d,p[c].ind=f,p[c].extra=k,c+=1;f+=1,d=0}}else if(3==m){if(d+=k,""==a||e==s-1){for(""==a&&(d-=k);e>=c;)p[c].an=d,p[c].ind=f,p[c].extra=k,c+=1;d=0,f+=1}}else p[f].ind=f,p[f].extra=0,f+=1;if(t.l=p,v=y>v?y:v,g.push(y),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=g;var D,C,I=l.a;n=I.length;var T,L,N=[];for(r=0;n>r;r+=1){for(D=I[r],D.a.sc&&(t.strokeColorAnim=!0),D.a.sw&&(t.strokeWidthAnim=!0),(D.a.fc||D.a.fh||D.a.fs||D.a.fb)&&(t.fillColorAnim=!0),L=0,T=D.s.b,e=0;s>e;e+=1)C=p[e],C.anIndexes[r]=L,(1==T&&""!=C.val||2==T&&""!=C.val&&"\xa0"!=C.val||3==T&&(C.n||"\xa0"==C.val||e==s-1)||4==T&&(C.n||e==s-1))&&(1===D.s.rn&&N.push(L),L+=1);l.a[r].s.totalChars=L;var V,O=-1;if(1===D.s.rn)for(e=0;s>e;e+=1)C=p[e],O!=C.anIndexes[r]&&(O=C.anIndexes[r],V=N.splice(Math.floor(Math.random()*N.length),1)[0]),C.anIndexes[r]=V}t.yOffset=t.lh||1.2*t.s,t.ls=t.ls||0,t.ascent=b.ascent*t.s/100},T.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var s=this.data.d.k[e].s;s.__complete=!1,s.t=t.t,this.keysIndex=-1,this.firstFrame=!0,this.getValue()};var Yt=function(){function t(t){return t.concat(Array.apply(null,{length:t.length}))}return{"double":t}}(),Ht=function(){function t(){var t;return i?(i-=1,t=r[i]):t=[.1,.1],t}function e(t){i===a&&(r=Yt["double"](r),a=2*a),r[i]=t,i+=1}var s={newPoint:t,release:e},i=0,a=8,r=Array.apply(null,{length:a});return s}(),Ut=function(){function t(){var t;return r?(r-=1,t=h[r]):t=new _,t}function e(t){r===n&&(h=Yt["double"](h),n=2*n);var e,s=t._length;for(e=0;s>e;e+=1)Ht.release(t.v[e]),Ht.release(t.i[e]),Ht.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1,h[r]=t,r+=1}function s(t,s){for(;s--;)e(t[s])}function i(e,s){var i,a=void 0===e._length?e.v.length:e._length,r=t();r.setLength(a),r.c=e.c;var n;for(i=0;a>i;i+=1)s?(n=s.applyToPointArray(e.v[i][0],e.v[i][1],0,2),r.setXYAt(n[0],n[1],"v",i),Ht.release(n),n=s.applyToPointArray(e.o[i][0],e.o[i][1],0,2),r.setXYAt(n[0],n[1],"o",i),Ht.release(n),n=s.applyToPointArray(e.i[i][0],e.i[i][1],0,2),r.setXYAt(n[0],n[1],"i",i),Ht.release(n)):r.setTripleAt(e.v[i][0],e.v[i][1],e.o[i][0],e.o[i][1],e.i[i][0],e.i[i][1],i);return r}var a={clone:i,newShape:t,release:e,releaseArray:s},r=0,n=4,h=Array.apply(null,{length:n});return a}(),Jt=function(){function t(){var t;return a?(a-=1,t=n[a]):t=new D,t}function e(t){var e,s=t._length;for(e=0;s>e;e+=1)Ut.release(t.shapes[e]);t._length=0,a===r&&(n=Yt["double"](n),r=2*r),n[a]=t,a+=1}function s(t,s){e(t),a===r&&(n=Yt["double"](n),r=2*r),n[a]=t,a+=1}var i={newShapeCollection:t,release:e,clone:s},a=0,r=4,n=Array.apply(null,{length:r});return i}();L.prototype.checkLayers=function(t){var e,s,i=this.layers.length;for(this.completeLayers=!0,e=i-1;e>=0;e--)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},L.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t);case 99:return null}return this.createBase(t)},L.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},L.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;e>t;t+=1)this.buildItem(t);this.checkPendingElements()},L.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s,i=t.length,a=this.layers.length;for(e=0;i>e;e+=1)for(s=0;a>s;){if(this.layers[s].id==t[e].id){this.layers[s]=t[e];break}s+=1}},L.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},L.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},L.prototype.buildElementParenting=function(t,e,s){s=s||[];for(var i=this.elements,a=this.layers,r=0,n=a.length;n>r;)a[r].ind==e&&(i[r]&&i[r]!==!0?void 0!==a[r].parent?(s.push(i[r]),i[r]._isParent=!0,this.buildElementParenting(t,a[r].parent,s)):(s.push(i[r]),i[r]._isParent=!0,t.setHierarchy(s)):(this.buildItem(r),this.addPendingElement(t))),r+=1},L.prototype.addPendingElement=function(t){this.pendingElements.push(t)},P(L,N),N.prototype.createBase=function(t){return new z(t,this.layerElement,this.globalData,this)},N.prototype.createShape=function(t){return new R(t,this.layerElement,this.globalData,this)},N.prototype.createText=function(t){return new B(t,this.layerElement,this.globalData,this)},N.prototype.createImage=function(t){return new K(t,this.layerElement,this.globalData,this)},N.prototype.createComp=function(t){return new Z(t,this.layerElement,this.globalData,this)},N.prototype.createSolid=function(t){return new Q(t,this.layerElement,this.globalData,this)},N.prototype.configAnimation=function(t){this.layerElement=document.createElementNS(Et,"svg"),this.layerElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.layerElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.layerElement.setAttribute("width",t.w),this.layerElement.setAttribute("height",t.h),this.layerElement.style.width="100%",this.layerElement.style.height="100%"),this.renderConfig.className&&this.layerElement.setAttribute("class",this.renderConfig.className),this.layerElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.layerElement);var e=document.createElementNS(Et,"defs");this.globalData.defs=e,this.layerElement.appendChild(e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.frameId=0,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h},this.data=t,this.globalData.frameRate=t.fr;var s=document.createElementNS(Et,"clipPath"),i=document.createElementNS(Et,"rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var a="animationMask_"+d(10);s.setAttribute("id",a),s.appendChild(i);var r=document.createElementNS(Et,"g");r.setAttribute("clip-path","url("+Mt+"#"+a+")"),this.layerElement.appendChild(r),e.appendChild(s),this.layerElement=r,this.layers=t.layers,this.globalData.fontManager=new Rt,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.elements=Array.apply(null,{length:t.layers.length})},N.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;e>t;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},N.prototype.updateContainerSize=function(){},N.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var s=this.createItem(this.layers[t]);e[t]=s,At&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt&&(this.elements[t-1]&&this.elements[t-1]!==!0?s.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(s)))}},N.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;s>e;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},N.prototype.renderFrame=function(t){if(this.renderedFrame!=t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},N.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var i,a=0;e>a;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(i=this.elements[a].getBaseElement()),a+=1;i?this.layerElement.insertBefore(s,i):this.layerElement.appendChild(s)}},N.prototype.hide=function(){this.layerElement.style.display="none"},N.prototype.show=function(){this.layerElement.style.display="block"},N.prototype.searchExtraCompositions=function(t){var e,s=t.length,i=document.createElementNS(Et,"g");for(e=0;s>e;e+=1)if(t[e].xt){var a=this.createComp(t[e],i,this.globalData.comp,null);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},V.prototype.getMaskProperty=function(t){return this.viewData[t].prop},V.prototype.prepareFrame=function(){var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue()},V.prototype.renderFrame=function(t){var e,s=this.masksProperties.length;for(e=0;s>e;e++)if((this.viewData[e].prop.mdf||this.firstFrame)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op.mdf||this.firstFrame)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp.mdf||this.firstFrame)&&(this.viewData[e].invRect.setAttribute("x",-t.props[12]),this.viewData[e].invRect.setAttribute("y",-t.props[13])),this.storedData[e].x&&(this.storedData[e].x.mdf||this.firstFrame))){var i=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+Mt+"#"+this.storedData[e].filterId+")")),i.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}this.firstFrame=!1},V.prototype.getMaskelement=function(){return this.maskElement},V.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},V.prototype.drawPath=function(t,e,s){var i,a,r=" M"+e.v[0][0]+","+e.v[0][1];for(a=e._length,i=1;a>i;i+=1)r+=" C"+Pt(e.o[i-1][0])+","+Pt(e.o[i-1][1])+" "+Pt(e.i[i][0])+","+Pt(e.i[i][1])+" "+Pt(e.v[i][0])+","+Pt(e.v[i][1]);e.c&&a>1&&(r+=" C"+Pt(e.o[i-1][0])+","+Pt(e.o[i-1][1])+" "+Pt(e.i[0][0])+","+Pt(e.i[0][1])+" "+Pt(e.v[0][0])+","+Pt(e.v[0][1])),s.lastPath!==r&&(s.elem&&(e.c?t.inv?s.elem.setAttribute("d",this.solidPath+r):s.elem.setAttribute("d",r):s.elem.setAttribute("d","")),s.lastPath=r)},V.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},O.prototype.checkMasks=function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;e>t;){if("n"!==this.data.masksProperties[t].mode&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},O.prototype.checkParenting=function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent)},O.prototype.prepareFrame=function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isVisible!==!0&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!0,this.firstFrame=!0,this.data.hasMask&&(this.maskManager.firstFrame=!0)):this.isVisible!==!1&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!1);var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)(this.isVisible||this._isParent&&"transform"===this.dynamicProperties[e].type)&&(this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.elemMdf=!0,this.globalData.mdf=!0));return this.data.hasMask&&this.isVisible&&this.maskManager.prepareFrame(t*this.data.sr),
this.currentFrameNum=t*this.data.sr,this.isVisible},O.prototype.globalToLocal=function(t){var e=[];e.push(this.finalTransform);for(var s=!0,i=this.comp;s;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):s=!1;var a,r,n=e.length;for(a=0;n>a;a+=1)r=e[a].mat.applyToPointArray(0,0,0),t=[t[0]-r[0],t[1]-r[1],0];return t},O.prototype.initExpressions=function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?this.layerInterface.shapeInterface=ShapeExpressionInterface.createShapeInterface(this.shapesData,this.itemsData,this.layerInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this))},O.prototype.setBlendMode=function(){var t="";switch(this.data.bm){case 1:t="multiply";break;case 2:t="screen";break;case 3:t="overlay";break;case 4:t="darken";break;case 5:t="lighten";break;case 6:t="color-dodge";break;case 7:t="color-burn";break;case 8:t="hard-light";break;case 9:t="soft-light";break;case 10:t="difference";break;case 11:t="exclusion";break;case 12:t="hue";break;case 13:t="saturation";break;case 14:t="color";break;case 15:t="luminosity"}var e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},O.prototype.init=function(){this.data.sr||(this.data.sr=1),this.dynamicProperties=this.dynamicProperties||[],this.data.ef&&(this.effects=new EffectsManager(this.data,this,this.dynamicProperties)),this.hidden=!1,this.firstFrame=!0,this.isVisible=!1,this._isParent=!1,this.currentFrameNum=-99999,this.lastNum=-99999,this.data.ks&&(this.finalTransform={mProp:jt.getProp(this,this.data.ks,2,null,this.dynamicProperties),matMdf:!1,opMdf:!1,mat:new k,opacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.finalTransform.op=this.finalTransform.mProp.o,this.transform=this.finalTransform.mProp,11!==this.data.ty&&this.createElements(),this.data.hasMask&&this.addMasks(this.data)),this.elemMdf=!1},O.prototype.getType=function(){return this.type},O.prototype.resetHierarchy=function(){this.hierarchy?this.hierarchy.length=0:this.hierarchy=[]},O.prototype.getHierarchy=function(){return this.hierarchy||(this.hierarchy=[]),this.hierarchy},O.prototype.setHierarchy=function(t){this.hierarchy=t},O.prototype.getLayerSize=function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}},O.prototype.hide=function(){},O.prototype.sourceRectAtTime=function(){return{top:0,left:0,width:100,height:100}},O.prototype.mHelper=new k,A(O,z),z.prototype.createElements=function(){this.layerElement=document.createElementNS(Et,"g"),this.transformedElement=this.layerElement,this.data.hasMask&&(this.maskedElement=this.layerElement);var t=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var e=document.createElementNS(Et,"mask");if(e.setAttribute("id",this.layerId),e.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),e.appendChild(this.layerElement),t=e,this.globalData.defs.appendChild(e),!Xt.maskType&&1==this.data.td){e.setAttribute("mask-type","luminance");var s=d(10),i=qt.createFilter(s);this.globalData.defs.appendChild(i),i.appendChild(qt.createAlphaToLuminanceFilter());var a=document.createElementNS(Et,"g");a.appendChild(this.layerElement),t=a,e.appendChild(a),a.setAttribute("filter","url("+Mt+"#"+s+")")}}else if(2==this.data.td){var r=document.createElementNS(Et,"mask");r.setAttribute("id",this.layerId),r.setAttribute("mask-type","alpha");var n=document.createElementNS(Et,"g");r.appendChild(n);var s=d(10),i=qt.createFilter(s),h=document.createElementNS(Et,"feColorMatrix");h.setAttribute("type","matrix"),h.setAttribute("color-interpolation-filters","sRGB"),h.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),i.appendChild(h),this.globalData.defs.appendChild(i);var o=document.createElementNS(Et,"rect");if(o.setAttribute("width",this.comp.data.w),o.setAttribute("height",this.comp.data.h),o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("fill","#ffffff"),o.setAttribute("opacity","0"),n.setAttribute("filter","url("+Mt+"#"+s+")"),n.appendChild(o),n.appendChild(this.layerElement),t=n,!Xt.maskType){r.setAttribute("mask-type","luminance"),i.appendChild(qt.createAlphaToLuminanceFilter());var a=document.createElementNS(Et,"g");n.appendChild(o),a.appendChild(this.layerElement),t=a,n.appendChild(a)}this.globalData.defs.appendChild(r)}}else(this.data.hasMask||this.data.tt)&&this.data.tt?(this.matteElement=document.createElementNS(Et,"g"),this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(!this.data.ln&&!this.data.cl||4!==this.data.ty&&0!==this.data.ty||(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)),0===this.data.ty){var l=document.createElementNS(Et,"clipPath"),p=document.createElementNS(Et,"path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var f="cp_"+d(8);if(l.setAttribute("id",f),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var m=document.createElementNS(Et,"g");m.setAttribute("clip-path","url("+Mt+"#"+f+")"),m.appendChild(this.layerElement),this.transformedElement=m,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+Mt+"#"+f+")")}0!==this.data.bm&&this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.data.ef&&(this.effectsManager=new J(this)),this.checkParenting()},z.prototype.setBlendMode=O.prototype.setBlendMode,z.prototype.renderFrame=function(t){if(3===this.data.ty||this.data.hd||!this.isVisible)return!1;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.firstFrame||this.finalTransform.op.mdf,this.finalTransform.matMdf=this.firstFrame||this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,s=this.finalTransform.mat;if(this.hierarchy){var i=0,a=this.hierarchy.length;if(!this.finalTransform.matMdf)for(;a>i;){if(this.hierarchy[i].finalTransform.mProp.mdf){this.finalTransform.matMdf=!0;break}i+=1}if(this.finalTransform.matMdf)for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),i=0;a>i;i+=1)e=this.hierarchy[i].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&(s=this.finalTransform.mProp.v);return this.finalTransform.matMdf&&this.layerElement&&this.transformedElement.setAttribute("transform",s.to2dCSS()),this.finalTransform.opMdf&&this.layerElement&&(this.finalTransform.op.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.hidden&&this.isTransparent&&(this.isTransparent=!1,this.show()),this.transformedElement.setAttribute("opacity",this.finalTransform.op.v)),this.data.hasMask&&this.maskManager.renderFrame(s),this.effectsManager&&this.effectsManager.renderFrame(this.firstFrame),this.isVisible},z.prototype.destroy=function(){this.layerElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&this.maskManager.destroy()},z.prototype.getBaseElement=function(){return this.baseElement},z.prototype.addMasks=function(t){this.maskManager=new V(t,this,this.globalData)},z.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+Mt+"#"+t+")")},z.prototype.hide=function(){this.hidden||(this.layerElement.style.display="none",this.hidden=!0)},z.prototype.show=function(){this.isVisible&&!this.isTransparent&&(this.hidden=!1,this.layerElement.style.display="block")},A(z,R),R.prototype.identityMatrix=new k,R.prototype.lcEnum={1:"butt",2:"round",3:"square"},R.prototype.ljEnum={1:"miter",2:"round",3:"butt"},R.prototype.searchProcessedElement=function(t){for(var e=this.processedElements.length;e;)if(e-=1,this.processedElements[e].elem===t)return this.processedElements[e].pos;return 0},R.prototype.addProcessedElement=function(t,e){for(var s=this.processedElements.length;s;)if(s-=1,this.processedElements[s].elem===t){this.processedElements[s].pos=e;break}0===s&&this.processedElements.push({elem:t,pos:e})},R.prototype.buildExpressionInterface=function(){},R.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0),(!this.data.hd||this.data.td)&&a(this.layerElement)},R.prototype.setGradientData=function(t,e,s){var i,a="gr_"+d(10);i=1===e.t?document.createElementNS(Et,"linearGradient"):document.createElementNS(Et,"radialGradient"),i.setAttribute("id",a),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var r,n,h,o=[];for(h=4*e.g.p,n=0;h>n;n+=4)r=document.createElementNS(Et,"stop"),i.appendChild(r),o.push(r);t.setAttribute("gf"===e.ty?"fill":"stroke","url(#"+a+")"),this.globalData.defs.appendChild(i),s.gf=i,s.cst=o},R.prototype.setGradientOpacity=function(t,e,s){if(t.g.k.k[0].s&&t.g.k.k[0].s.length>4*t.g.p||t.g.k.k.length>4*t.g.p){var i,a,r,n,h=document.createElementNS(Et,"mask"),o=document.createElementNS(Et,"path");h.appendChild(o);var l="op_"+d(10),p="mk_"+d(10);h.setAttribute("id",p),i=1===t.t?document.createElementNS(Et,"linearGradient"):document.createElementNS(Et,"radialGradient"),i.setAttribute("id",l),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var f=[];for(r=4*t.g.p;n>r;r+=2)a=document.createElementNS(Et,"stop"),a.setAttribute("stop-color","rgb(255,255,255)"),i.appendChild(a),f.push(a);return o.setAttribute("gf"===t.ty?"fill":"stroke","url(#"+l+")"),this.globalData.defs.appendChild(i),this.globalData.defs.appendChild(h),e.of=i,e.ost=f,s.msElem=o,p}},R.prototype.createStyleElement=function(t,e,s){var i={},a={data:t,type:t.ty,d:"",ld:"",lvl:e,mdf:!1,closed:!1},r=document.createElementNS(Et,"path");if(i.o=jt.getProp(this,t.o,0,.01,s),("st"==t.ty||"gs"==t.ty)&&(r.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),r.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),r.setAttribute("fill-opacity","0"),1==t.lj&&r.setAttribute("stroke-miterlimit",t.ml),i.w=jt.getProp(this,t.w,0,null,s),t.d)){var n=jt.getDashProp(this,t.d,"svg",s);n.k||(r.setAttribute("stroke-dasharray",n.dasharray),r.setAttribute("stroke-dashoffset",n.dashoffset)),i.d=n}if("fl"==t.ty||"st"==t.ty)i.c=jt.getProp(this,t.c,1,255,s);else{i.g=jt.getGradientProp(this,t.g,s),2==t.t&&(i.h=jt.getProp(this,t.h,0,.01,s),i.a=jt.getProp(this,t.a,0,Tt,s)),i.s=jt.getProp(this,t.s,1,null,s),i.e=jt.getProp(this,t.e,1,null,s),this.setGradientData(r,t,i,a);var h=this.setGradientOpacity(t,i,a);h&&r.setAttribute("mask","url(#"+h+")")}return i.elem=r,2===t.r&&r.setAttribute("fill-rule","evenodd"),t.ln&&r.setAttribute("id",t.ln),t.cl&&r.setAttribute("class",t.cl),a.pElem=r,this.stylesList.push(a),i.style=a,i},R.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]},s=document.createElementNS(Et,"g");return e.gr=s,t.ln&&e.gr.setAttribute("id",t.ln),e},R.prototype.createTransformElement=function(t,e){var s={transform:{op:jt.getProp(this,t.o,0,.01,e),mProps:jt.getProp(this,t,2,null,e)},elements:[]};return s},R.prototype.createShapeElement=function(t,e,s,i){var a={elements:[],caches:[],styles:[],transformers:e,lStr:""},r=4;return"rc"==t.ty?r=5:"el"==t.ty?r=6:"sr"==t.ty&&(r=7),a.sh=Bt.getShapeProp(this,t,r,i),a.lvl=s,this.shapes.push(a.sh),this.addShapeToModifiers(a),a};R.prototype.setElementStyles=function(){var t,e=this.stylesList.length,s=[];for(t=0;e>t;t+=1)this.stylesList[t].closed||s.push(this.stylesList[t]);return s},R.prototype.reloadShapes=function(){this.firstFrame=!0;var t,e=this.itemsData.length;for(t=0;e>t;t+=1)this.prevViewData[t]=this.itemsData[t];this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0);var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},R.prototype.searchShapes=function(t,e,s,i,a,r,n,h){var o,l,p,f,m,d,c=[].concat(n),u=t.length-1,g=[],y=[];for(o=u;o>=0;o-=1){if(d=this.searchProcessedElement(t[o]),d?e[o]=s[d-1]:t[o]._render=h,"fl"==t[o].ty||"st"==t[o].ty||"gf"==t[o].ty||"gs"==t[o].ty)d?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],r,a),t[o]._render&&i.appendChild(e[o].elem),g.push(e[o].style);else if("gr"==t[o].ty){if(d)for(p=e[o].it.length,l=0;p>l;l+=1)e[o].prevViewData[l]=e[o].it[l];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,a,r+1,c,h),t[o]._render&&i.appendChild(e[o].gr)}else"tr"==t[o].ty?(d||(e[o]=this.createTransformElement(t[o],a)),f=e[o].transform,c.push(f)):"sh"==t[o].ty||"rc"==t[o].ty||"el"==t[o].ty||"sr"==t[o].ty?(d||(e[o]=this.createShapeElement(t[o],c,r,a)),e[o].elements=this.setElementStyles()):"tm"==t[o].ty||"rd"==t[o].ty||"ms"==t[o].ty?(d?(m=e[o],m.closed=!1):(m=Gt.getModifier(t[o].ty),m.init(this,t[o],a),e[o]=m,this.shapeModifiers.push(m)),y.push(m)):"rp"==t[o].ty&&(d?(m=e[o],m.closed=!0):(m=Gt.getModifier(t[o].ty),e[o]=m,m.init(this,t,o,e,a),this.shapeModifiers.push(m),h=!1),y.push(m));this.addProcessedElement(t[o],o+1)}for(u=g.length,o=0;u>o;o+=1)g[o].closed=!0;for(u=y.length,o=0;u>o;o+=1)y[o].closed=!0},R.prototype.addShapeToModifiers=function(t){var e,s=this.shapeModifiers.length;for(e=0;s>e;e+=1)this.shapeModifiers[e].addShape(t)},R.prototype.renderModifiers=function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;e>t;t+=1)this.shapes[t].reset();for(e=this.shapeModifiers.length,t=e-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this.firstFrame)}},R.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();this.hidden&&(this.layerElement.style.display="block",this.hidden=!1),this.renderModifiers();var s,i=this.stylesList.length;for(s=0;i>s;s+=1)this.stylesList[s].d="",this.stylesList[s].mdf=!1;for(this.renderShape(this.shapesData,this.itemsData,null),s=0;i>s;s+=1)"0"===this.stylesList[s].ld&&(this.stylesList[s].ld="1",this.stylesList[s].pElem.style.display="block"),(this.stylesList[s].mdf||this.firstFrame)&&(this.stylesList[s].pElem.setAttribute("d",this.stylesList[s].d),this.stylesList[s].msElem&&this.stylesList[s].msElem.setAttribute("d",this.stylesList[s].d));this.firstFrame&&(this.firstFrame=!1)},R.prototype.hide=function(){if(!this.hidden){this.layerElement.style.display="none";var t,e=this.stylesList.length;for(t=e-1;t>=0;t-=1)"0"!==this.stylesList[t].ld&&(this.stylesList[t].ld="0",this.stylesList[t].pElem.style.display="none",this.stylesList[t].pElem.parentNode&&(this.stylesList[t].parent=this.stylesList[t].pElem.parentNode));this.hidden=!0}},R.prototype.renderShape=function(t,e,s){var i,a,r=t.length-1;for(i=r;i>=0;i-=1)a=t[i].ty,"tr"==a?((this.firstFrame||e[i].transform.op.mdf&&s)&&s.setAttribute("opacity",e[i].transform.op.v),(this.firstFrame||e[i].transform.mProps.mdf&&s)&&s.setAttribute("transform",e[i].transform.mProps.v.to2dCSS())):"sh"==a||"el"==a||"rc"==a||"sr"==a?this.renderPath(t[i],e[i]):"fl"==a?this.renderFill(t[i],e[i]):"gf"==a?this.renderGradient(t[i],e[i]):"gs"==a?(this.renderGradient(t[i],e[i]),this.renderStroke(t[i],e[i])):"st"==a?this.renderStroke(t[i],e[i]):"gr"==a&&this.renderShape(t[i].it,e[i].it,e[i].gr)},R.prototype.buildShapeString=function(t,e,s,i){var a,r="";for(a=1;e>a;a+=1)1===a&&(r+=" M"+i.applyToPointStringified(t.v[0][0],t.v[0][1])),r+=" C"+i.applyToPointStringified(t.o[a-1][0],t.o[a-1][1])+" "+i.applyToPointStringified(t.i[a][0],t.i[a][1])+" "+i.applyToPointStringified(t.v[a][0],t.v[a][1]);return 1===e&&(r+=" M"+i.applyToPointStringified(t.v[0][0],t.v[0][1])),s&&e&&(r+=" C"+i.applyToPointStringified(t.o[a-1][0],t.o[a-1][1])+" "+i.applyToPointStringified(t.i[0][0],t.i[0][1])+" "+i.applyToPointStringified(t.v[0][0],t.v[0][1]),r+="z"),r},R.prototype.renderPath=function(t,e){var s,i,a,r,n,h,o=e.elements.length,l=e.lvl;if(t._render)for(h=0;o>h;h+=1)if(e.elements[h].data._render){r=e.sh.mdf||this.firstFrame,a="M0 0";var p=e.sh.paths;if(i=p._length,e.elements[h].lvl<l){for(var f,m=this.mHelper.reset(),d=l-e.elements[h].lvl,c=e.transformers.length-1;d>0;)r=e.transformers[c].mProps.mdf||r,f=e.transformers[c].mProps.v.props,m.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),d--,c--;if(r){for(s=0;i>s;s+=1)n=p.shapes[s],n&&n._length&&(a+=this.buildShapeString(n,n._length,n.c,m));e.caches[h]=a}else a=e.caches[h]}else if(r){for(s=0;i>s;s+=1)n=p.shapes[s],n&&n._length&&(a+=this.buildShapeString(n,n._length,n.c,this.identityMatrix));e.caches[h]=a}else a=e.caches[h];e.elements[h].d+=a,e.elements[h].mdf=r||e.elements[h].mdf}else e.elements[h].mdf=!0},R.prototype.renderFill=function(t,e){var s=e.style;(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("fill","rgb("+wt(e.c.v[0])+","+wt(e.c.v[1])+","+wt(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("fill-opacity",e.o.v)},R.prototype.renderGradient=function(t,e){var s=e.gf,i=e.of,a=e.s.v,r=e.e.v;if(e.o.mdf||this.firstFrame){var n="gf"===t.ty?"fill-opacity":"stroke-opacity";e.elem.setAttribute(n,e.o.v)}if(e.s.mdf||this.firstFrame){var h=1===t.t?"x1":"cx",o="x1"===h?"y1":"cy";s.setAttribute(h,a[0]),s.setAttribute(o,a[1]),i&&(i.setAttribute(h,a[0]),i.setAttribute(o,a[1]))}var l,p,f,m;if(e.g.cmdf||this.firstFrame){l=e.cst;var d=e.g.c;for(f=l.length,p=0;f>p;p+=1)m=l[p],m.setAttribute("offset",d[4*p]+"%"),m.setAttribute("stop-color","rgb("+d[4*p+1]+","+d[4*p+2]+","+d[4*p+3]+")")}if(i&&(e.g.omdf||this.firstFrame)){l=e.ost;var c=e.g.o;for(f=l.length,p=0;f>p;p+=1)m=l[p],m.setAttribute("offset",c[2*p]+"%"),m.setAttribute("stop-opacity",c[2*p+1])}if(1===t.t)(e.e.mdf||this.firstFrame)&&(s.setAttribute("x2",r[0]),s.setAttribute("y2",r[1]),i&&(i.setAttribute("x2",r[0]),i.setAttribute("y2",r[1])));else{var u;if((e.s.mdf||e.e.mdf||this.firstFrame)&&(u=Math.sqrt(Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)),s.setAttribute("r",u),i&&i.setAttribute("r",u)),e.e.mdf||e.h.mdf||e.a.mdf||this.firstFrame){u||(u=Math.sqrt(Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)));var g=Math.atan2(r[1]-a[1],r[0]-a[0]),y=e.h.v>=1?.99:e.h.v<=-1?-.99:e.h.v,v=u*y,b=Math.cos(g+e.a.v)*v+a[0],k=Math.sin(g+e.a.v)*v+a[1];s.setAttribute("fx",b),s.setAttribute("fy",k),i&&(i.setAttribute("fx",b),i.setAttribute("fy",k))}}},R.prototype.renderStroke=function(t,e){var s=e.style,i=e.d;i&&i.k&&(i.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-dasharray",i.dasharray),s.pElem.setAttribute("stroke-dashoffset",i.dashoffset)),e.c&&(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke","rgb("+wt(e.c.v[0])+","+wt(e.c.v[1])+","+wt(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke-opacity",e.o.v),(e.w.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-width",e.w.v),s.msElem&&s.msElem.setAttribute("stroke-width",e.w.v))},R.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.shapeData=null,this.itemsData=null,this.parentContainer=null,this.placeholder=null},j.prototype.init=function(){this.lettersChangedFlag=!0,this.dynamicProperties=this.dynamicProperties||[],this.textAnimator=new C(this.data.t,this.renderType,this),this.textProperty=new T(this,this.data.t,this.dynamicProperties),this._parent.init.call(this),this.textAnimator.searchProperties(this.dynamicProperties)},j.prototype.prepareFrame=function(t){this._parent.prepareFrame.call(this,t),(this.textProperty.mdf||this.textProperty.firstFrame)&&(this.buildNewText(),this.textProperty.firstFrame=!1)},j.prototype.createPathShape=function(t,e){var s,i,a=e.length,r="";for(s=0;a>s;s+=1)i=e[s].ks.k,r+=this.buildShapeString(i,i.i.length,!0,t);return r},j.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},j.prototype.applyTextPropertiesToMatrix=function(t,e,s,i,a){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[s])/2,0,0)}e.translate(i,a,0)},j.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},j.prototype.buildShapeString=R.prototype.buildShapeString,j.prototype.emptyProp=new I,j.prototype.destroy=function(){this._parent.destroy.call(this._parent)},A(z,B),P(j,B),B.prototype.createElements=function(){this._parent.createElements.call(this),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=document.createElementNS(Et,"text"))},B.prototype.buildNewText=function(){var t,e,s=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:s?s.l.length:0}),s.fc?this.layerElement.setAttribute("fill",this.buildColor(s.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(s.sc)),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.s);var i=this.globalData.fontManager.getFontByName(s.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var a=s.fWeight,r=s.fStyle;this.layerElement.setAttribute("font-style",r),this.layerElement.setAttribute("font-weight",a)}var n=s.l||[],h=this.globalData.fontManager.chars;if(e=n.length){var o,l,p=this.mHelper,f="",m=this.data.singleShape,d=0,c=0,u=!0,g=s.tr/1e3*s.s;if(m&&!h){var y=this.textContainer,v="";switch(s.j){case 1:v="end";break;case 2:v="middle";break;case 2:v="start"}y.setAttribute("text-anchor",v),y.setAttribute("letter-spacing",g);var b=s.t.split(String.fromCharCode(13));e=b.length;var c=s.ps?s.ps[1]+s.ascent:0;for(t=0;e>t;t+=1)o=this.textSpans[t]||document.createElementNS(Et,"tspan"),o.textContent=b[t],o.setAttribute("x",0),o.setAttribute("y",c),o.style.display="inherit",y.appendChild(o),this.textSpans[t]=o,c+=s.lh;this.layerElement.appendChild(y)}else{var k,A,P=this.textSpans.length;for(t=0;e>t;t+=1)h&&m&&0!==t||(o=P>t?this.textSpans[t]:document.createElementNS(Et,h?"path":"text"),t>=P&&(o.setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=o,this.layerElement.appendChild(o)),o.style.display="inherit"),p.reset(),h?(p.scale(s.s/100,s.s/100),m&&(n[t].n&&(d=-g,c+=s.yOffset,c+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(s,p,n[t].line,d,c),d+=n[t].l||0,d+=g),A=this.globalData.fontManager.getCharData(s.t.charAt(t),i.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily),k=A&&A.data||{},l=k.shapes?k.shapes[0].it:[],m?f+=this.createPathShape(p,l):o.setAttribute("d",this.createPathShape(p,l))):(o.textContent=n[t].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));m&&o.setAttribute("d",f)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0}},B.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderLetters(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},B.prototype.renderLetters=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,s=this.textAnimator.renderedLetters,i=this.textProperty.currentData.l;e=i.length;var a,r;for(t=0;e>t;t+=1)i[t].n||(a=s[t],r=this.textSpans[t],a.mdf.m&&r.setAttribute("transform",a.m),a.mdf.o&&r.setAttribute("opacity",a.o),a.mdf.sw&&r.setAttribute("stroke-width",a.sw),a.mdf.sc&&r.setAttribute("stroke",a.sc),a.mdf.fc&&r.setAttribute("fill",a.fc))}},B.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),this.firstFrame&&(this.firstFrame=!1),void this.renderLetters())},G.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",s[0]-e[0]+" 0 0 0 "+e[0]+" "+(s[1]-e[1])+" 0 0 0 "+e[1]+" "+(s[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},W.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[2].p.v,s=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+s+" 0")}},X.prototype.initialize=function(){var t,e,s,i,a=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,s=0):(s=this.filterManager.effectElements[0].p.v-1,i=s+1),e=document.createElementNS(Et,"g"),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1),s;i>s;s+=1)t=document.createElementNS(Et,"path"),e.appendChild(t),this.paths.push({p:t,m:s});if(3===this.filterManager.effectElements[10].p.v){var r=document.createElementNS(Et,"mask"),n="stms_"+d(10);r.setAttribute("id",n),r.setAttribute("mask-type","alpha"),r.appendChild(e),this.elem.globalData.defs.appendChild(r);var h=document.createElementNS(Et,"g");h.setAttribute("mask","url("+Mt+"#"+n+")"),a[0]&&h.appendChild(a[0]),this.elem.layerElement.appendChild(h),this.masker=r,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(var a=this.elem.layerElement.children||this.elem.layerElement.childNodes;a.length;)this.elem.layerElement.removeChild(a[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},X.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,s,i,a=this.paths.length;for(e=0;a>e;e+=1)if(s=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager.mdf||s.prop.mdf)&&i.setAttribute("d",s.lastPath),t||this.filterManager.effectElements[9].p.mdf||this.filterManager.effectElements[4].p.mdf||this.filterManager.effectElements[7].p.mdf||this.filterManager.effectElements[8].p.mdf||s.prop.mdf){var r;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=i.getTotalLength();r="0 0 0 "+o*n+" ";var l,p=o*(h-n),f=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,m=Math.floor(p/f);for(l=0;m>l;l+=1)r+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";r+="0 "+10*o+" 0 0"}else r="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;i.setAttribute("stroke-dasharray",r)}if((t||this.filterManager.effectElements[4].p.mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p.mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p.mdf)){var d=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+wt(255*d[0])+","+wt(255*d[1])+","+wt(255*d[2])+")")}},q.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,a=i[0]+" "+s[0]+" "+e[0],r=i[1]+" "+s[1]+" "+e[1],n=i[2]+" "+s[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",a),this.feFuncG.setAttribute("tableValues",r),this.feFuncB.setAttribute("tableValues",n)}},Y.prototype.createFeFunc=function(t,e){var s=document.createElementNS(Et,t);return s.setAttribute("type","table"),e.appendChild(s),s},Y.prototype.getTableValue=function(t,e,s,i,a){for(var r,n,h=0,o=256,l=Math.min(t,e),p=Math.max(t,e),f=Array.call(null,{length:o}),m=0,d=a-i,c=e-t;256>=h;)r=h/256,n=l>=r?0>c?a:i:r>=p?0>c?i:a:i+d*Math.pow((r-t)/c,1/s),f[m++]=n,h+=256/(o-1);return f.join(" ")},Y.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e,s=this.filterManager.effectElements;this.feFuncRComposed&&(t||s[2].p.mdf||s[3].p.mdf||s[4].p.mdf||s[5].p.mdf||s[6].p.mdf)&&(e=this.getTableValue(s[2].p.v,s[3].p.v,s[4].p.v,s[5].p.v,s[6].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||s[9].p.mdf||s[10].p.mdf||s[11].p.mdf||s[12].p.mdf||s[13].p.mdf)&&(e=this.getTableValue(s[9].p.v,s[10].p.v,s[11].p.v,s[12].p.v,s[13].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||s[16].p.mdf||s[17].p.mdf||s[18].p.mdf||s[19].p.mdf||s[20].p.mdf)&&(e=this.getTableValue(s[16].p.v,s[17].p.v,s[18].p.v,s[19].p.v,s[20].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||s[23].p.mdf||s[24].p.mdf||s[25].p.mdf||s[26].p.mdf||s[27].p.mdf)&&(e=this.getTableValue(s[23].p.v,s[24].p.v,s[25].p.v,s[26].p.v,s[27].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||s[30].p.mdf||s[31].p.mdf||s[32].p.mdf||s[33].p.mdf||s[34].p.mdf)&&(e=this.getTableValue(s[30].p.v,s[31].p.v,s[32].p.v,s[33].p.v,s[34].p.v),this.feFuncA.setAttribute("tableValues",e))}},H.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){if((t||this.filterManager.effectElements[4].p.mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p.mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",Nt(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p.mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p.mdf||this.filterManager.effectElements[3].p.mdf){var s=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*Tt,a=s*Math.cos(i),r=s*Math.sin(i);this.feOffset.setAttribute("dx",a),this.feOffset.setAttribute("dy",r)}}},U.prototype.setElementAsMask=function(t,e){var s=document.createElementNS(Et,"mask");s.setAttribute("id",e.layerId),s.setAttribute("mask-type","alpha"),s.appendChild(e.layerElement),t.setMatte(e.layerId),e.data.hd=!1;var i=t.globalData.defs;i.appendChild(s)},U.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=0,s=this.elem.comp.elements.length;s>e;)this.elem.comp.elements[e].data.ind===t&&this.setElementAsMask(this.elem,this.elem.comp.elements[e]),e+=1;this.initialized=!0},U.prototype.renderFrame=function(){this.initialized||this.initialize()},J.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;s>e;e+=1)this.filters[e].renderFrame(t)},A(z,Z),Z.prototype.hide=function(){if(!this.hidden){this._parent.hide.call(this);var t,e=this.elements.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].hide();

}},Z.prototype.prepareFrame=function(t){if(this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){if(this.tm){var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}else this.renderedFrame=t/this.data.sr;var s,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=0;i>s;s+=1)(this.completeLayers||this.elements[s])&&this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st)}},Z.prototype.renderFrame=function(t){var e,s=this._parent.renderFrame.call(this,t),i=this.layers.length;if(s===!1)return void this.hide();for(this.hidden&&this.show(),e=0;i>e;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},Z.prototype.setElements=function(t){this.elements=t},Z.prototype.getElements=function(){return this.elements},Z.prototype.destroy=function(){this._parent.destroy.call(this._parent);var t,e=this.layers.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].destroy()},Z.prototype.checkLayers=N.prototype.checkLayers,Z.prototype.buildItem=N.prototype.buildItem,Z.prototype.buildAllItems=N.prototype.buildAllItems,Z.prototype.buildElementParenting=N.prototype.buildElementParenting,Z.prototype.createItem=N.prototype.createItem,Z.prototype.createImage=N.prototype.createImage,Z.prototype.createComp=N.prototype.createComp,Z.prototype.createSolid=N.prototype.createSolid,Z.prototype.createShape=N.prototype.createShape,Z.prototype.createText=N.prototype.createText,Z.prototype.createBase=N.prototype.createBase,Z.prototype.appendElementInPos=N.prototype.appendElementInPos,Z.prototype.checkPendingElements=N.prototype.checkPendingElements,Z.prototype.addPendingElement=N.prototype.addPendingElement,A(z,K),K.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData);this._parent.createElements.call(this),this.innerElem=document.createElementNS(Et,"image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio","xMidYMid slice"),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.maskedElement=this.innerElem,this.layerElement.appendChild(this.innerElem),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},K.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),void(this.firstFrame&&(this.firstFrame=!1)))},K.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.innerElem=null},A(z,Q),Q.prototype.createElements=function(){this._parent.createElements.call(this);var t=document.createElementNS(Et,"rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t),this.innerElem=t,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},Q.prototype.renderFrame=K.prototype.renderFrame,Q.prototype.destroy=K.prototype.destroy;var Zt=function(){function e(t){for(var e=0,s=t.target;_>e;)E[e].animation===s&&(E.splice(e,1),e-=1,_-=1,s.isPaused||a()),e+=1}function s(t,e){if(!t)return null;for(var s=0;_>s;){if(E[s].elem==t&&null!==E[s].elem)return E[s].animation;s+=1}var i=new Kt;return r(i,t),i.setData(t,e),i}function i(){F+=1,A()}function a(){F-=1,0===F&&(S=!0)}function r(t,s){t.addEventListener("destroy",e),t.addEventListener("_active",i),t.addEventListener("_idle",a),E.push({elem:s,animation:t}),_+=1}function n(t){var e=new Kt;return r(e,null),e.setParams(t),e}function h(t,e){var s;for(s=0;_>s;s+=1)E[s].animation.setSpeed(t,e)}function o(t,e){var s;for(s=0;_>s;s+=1)E[s].animation.setDirection(t,e)}function l(t){var e;for(e=0;_>e;e+=1)E[e].animation.play(t)}function p(t,e){M=Date.now();var s;for(s=0;_>s;s+=1)E[s].animation.moveFrame(t,e)}function f(e){var s,i=e-M;for(s=0;_>s;s+=1)E[s].animation.advanceTime(i);M=e,S||t.requestAnimationFrame(f)}function m(e){M=e,t.requestAnimationFrame(f)}function d(t){var e;for(e=0;_>e;e+=1)E[e].animation.pause(t)}function c(t,e,s){var i;for(i=0;_>i;i+=1)E[i].animation.goToAndStop(t,e,s)}function u(t){var e;for(e=0;_>e;e+=1)E[e].animation.stop(t)}function g(t){var e;for(e=0;_>e;e+=1)E[e].animation.togglePause(t)}function y(t){var e;for(e=_-1;e>=0;e-=1)E[e].animation.destroy(t)}function v(t,e,i){var a,r=document.getElementsByClassName("bodymovin"),n=r.length;for(a=0;n>a;a+=1)i&&r[a].setAttribute("data-bm-type",i),s(r[a],t);if(e&&0===n){i||(i="svg");var h=document.getElementsByTagName("body")[0];h.innerHTML="";var o=document.createElement("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",i),h.appendChild(o),s(o,t)}}function b(){var t;for(t=0;_>t;t+=1)E[t].animation.resize()}function k(){t.requestAnimationFrame(m)}function A(){S&&(S=!1,t.requestAnimationFrame(m))}var P={},E=[],M=0,_=0,S=!0,F=0;return setTimeout(k,0),P.registerAnimation=s,P.loadAnimation=n,P.setSpeed=h,P.setDirection=o,P.play=l,P.moveFrame=p,P.pause=d,P.stop=u,P.togglePause=g,P.searchAnimations=v,P.resize=b,P.start=k,P.goToAndStop=c,P.destroy=y,P}(),Kt=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.pendingElements=0,this.playCount=0,this.prerenderFramesFlag=!0,this.animationData={},this.layers=[],this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=d(10),this.scaleMode="fit",this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=_t,this.segments=[],this.pendingSegment=!1,this._idle=!0,this.projectInterface=e()};Kt.prototype.setParams=function(t){var e=this;t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var s=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(s){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new N(this,t.rendererSettings);break;case"hybrid":case"html":default:this.renderer=new HybridRenderer(this,t.rendererSettings)}if(this.renderer.setProjectInterface(this.projectInterface),this.animType=s,""===t.loop||null===t.loop||(this.loop=t.loop===!1?!1:t.loop===!0?!0:parseInt(t.loop)),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.prerenderFramesFlag="prerender"in t?t.prerender:!0,this.autoloadSegments=t.hasOwnProperty("autoloadSegments")?t.autoloadSegments:!0,t.animationData)e.configAnimation(t.animationData);else if(t.path){"json"!=t.path.substr(-4)&&("/"!=t.path.substr(-1,1)&&(t.path+="/"),t.path+="data.json");var i=new XMLHttpRequest;this.path=-1!=t.path.lastIndexOf("\\")?t.path.substr(0,t.path.lastIndexOf("\\")+1):t.path.substr(0,t.path.lastIndexOf("/")+1),this.assetsPath=t.assetsPath,this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),i.open("GET",t.path,!0),i.send(),i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status)e.configAnimation(JSON.parse(i.responseText));else try{var t=JSON.parse(i.responseText);e.configAnimation(t)}catch(s){}}}},Kt.prototype.setData=function(t,e){var s={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},i=t.attributes;s.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",s.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var a=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";""===a||(s.loop="false"===a?!1:"true"===a?!0:parseInt(a));var r=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:i.getNamedItem("bm-autoplay")?i.getNamedItem("bm-autoplay").value:!0;s.autoplay="false"!==r,s.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"";var n=i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"";"false"===n&&(s.prerender=!1),this.setParams(s)},Kt.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip),this.animationData.tf=this.totalFrames);var e,s,i=this.animationData.layers,a=i.length,r=t.layers,n=r.length;for(s=0;n>s;s+=1)for(e=0;a>e;){if(i[e].id==r[s].id){i[e]=r[s];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(a=t.assets.length,e=0;a>e;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,zt.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),At&&At.initExpressions(this),this.renderer.renderFrame(null),this.loadNextSegment()},Kt.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.animationData.tf);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=new XMLHttpRequest,i=this,a=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,s.open("GET",a,!0),s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)i.includeLayers(JSON.parse(s.responseText));else try{var t=JSON.parse(s.responseText);i.includeLayers(t)}catch(e){}}},Kt.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.animationData.tf),this.loadNextSegment()},Kt.prototype.configAnimation=function(t){var e=this;this.renderer&&this.renderer.destroyed||(this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.animationData.tf=this.totalFrames,this.renderer.configAnimation(t),t.assets||(t.assets=[]),t.comps&&(t.assets=t.assets.concat(t.comps),t.comps=null),this.renderer.searchExtraCompositions(t.assets),this.layers=this.animationData.layers,this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.trigger("config_ready"),this.imagePreloader=new Wt,this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(t.assets,function(t){t||e.trigger("loaded_images")}),this.loadSegments(),this.updaFrameModifier(),this.renderer.globalData.fontManager?this.waitForFontsLoaded():(zt.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()))},Kt.prototype.waitForFontsLoaded=function(){function t(){this.renderer.globalData.fontManager.loaded?(zt.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()):setTimeout(t.bind(this),20)}return function(){t.bind(this)()}}(),Kt.prototype.addPendingElement=function(){this.pendingElements+=1},Kt.prototype.elementLoaded=function(){this.pendingElements--,this.checkLoaded()},Kt.prototype.checkLoaded=function(){0===this.pendingElements&&(At&&At.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.isLoaded=!0,this.gotoFrame(),this.autoplay&&this.play())},Kt.prototype.resize=function(){this.renderer.updateContainerSize()},Kt.prototype.setSubframe=function(t){this.subframeEnabled=t?!0:!1},Kt.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:Math.floor(this.currentRawFrame),this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},Kt.prototype.renderFrame=function(){this.isLoaded!==!1&&this.renderer.renderFrame(this.currentFrame+this.firstFrame)},Kt.prototype.play=function(t){t&&this.name!=t||this.isPaused===!0&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},Kt.prototype.pause=function(t){t&&this.name!=t||this.isPaused===!1&&(this.isPaused=!0,this.pendingSegment||(this._idle=!0,this.trigger("_idle")))},Kt.prototype.togglePause=function(t){t&&this.name!=t||(this.isPaused===!0?this.play():this.pause())},Kt.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.currentFrame=this.currentRawFrame=0,this.playCount=0,this.gotoFrame())},Kt.prototype.goToAndStop=function(t,e,s){s&&this.name!=s||(this.setCurrentRawFrameValue(e?t:t*this.frameModifier),this.pause())},Kt.prototype.goToAndPlay=function(t,e,s){this.goToAndStop(t,e,s),this.play()},Kt.prototype.advanceTime=function(t){return this.pendingSegment?(this.pendingSegment=!1,this.adjustSegment(this.segments.shift()),void(this.isPaused&&this.play())):void(this.isPaused!==!0&&this.isLoaded!==!1&&this.setCurrentRawFrameValue(this.currentRawFrame+t*this.frameModifier))},Kt.prototype.updateAnimation=function(t){this.setCurrentRawFrameValue(this.totalFrames*t)},Kt.prototype.moveFrame=function(t,e){e&&this.name!=e||this.setCurrentRawFrameValue(this.currentRawFrame+t)},Kt.prototype.adjustSegment=function(t){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.01)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(0)),this.trigger("segmentStart")},Kt.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t-.01)),this.firstFrame=t,this.totalFrames=e-t,-1!==s&&this.goToAndStop(s,!0)},Kt.prototype.playSegments=function(t,e){if("object"==typeof t[0]){var s,i=t.length;for(s=0;i>s;s+=1)this.segments.push(t[s])}else this.segments.push(t);e&&this.adjustSegment(this.segments.shift()),this.isPaused&&this.play()},Kt.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op-this.animationData.ip+this.animationData.ip*this.frameRate)]),t&&this.adjustSegment(this.segments.shift())},Kt.prototype.checkSegments=function(){this.segments.length&&(this.pendingSegment=!0)},Kt.prototype.remove=function(t){t&&this.name!=t||this.renderer.destroy()},Kt.prototype.destroy=function(t){t&&this.name!=t||this.renderer&&this.renderer.destroyed||(this.renderer.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null)},Kt.prototype.setCurrentRawFrameValue=function(t){if(this.currentRawFrame=t,this.currentRawFrame>=this.totalFrames){if(this.checkSegments(),this.loop===!1)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");if(this.trigger("loopComplete"),this.playCount+=1,this.loop!==!0&&this.playCount==this.loop||this.pendingSegment)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");this.currentRawFrame=this.currentRawFrame%this.totalFrames}else if(this.currentRawFrame<0)return this.checkSegments(),this.playCount-=1,this.playCount<0&&(this.playCount=0),this.loop===!1||this.pendingSegment?(this.currentRawFrame=0,this.gotoFrame(),this.pause(),void this.trigger("complete")):(this.trigger("loopComplete"),this.currentRawFrame=(this.totalFrames+this.currentRawFrame)%this.totalFrames,void this.gotoFrame());this.gotoFrame()},Kt.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},Kt.prototype.setDirection=function(t){this.playDirection=0>t?-1:1,this.updaFrameModifier()},Kt.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},Kt.prototype.getPath=function(){return this.path},Kt.prototype.getAssetsPath=function(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},Kt.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;s>e;){if(t==this.assets[e].id)return this.assets[e];e+=1}},Kt.prototype.hide=function(){this.renderer.hide()},Kt.prototype.show=function(){this.renderer.show()},Kt.prototype.getAssets=function(){return this.assets},Kt.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new r(t,this.currentFrame,this.totalFrames,this.frameMult));break;case"loopComplete":this.triggerEvent(t,new h(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new n(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new o(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new l(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new r(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new h(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new n(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new o(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new l(t,this))},Kt.prototype.addEventListener=p,Kt.prototype.removeEventListener=f,Kt.prototype.triggerEvent=m;var Qt={};Qt.play=tt,Qt.pause=et,Qt.setLocationHref=$,Qt.togglePause=st,Qt.setSpeed=it,Qt.setDirection=at,Qt.stop=rt,Qt.moveFrame=nt,Qt.searchAnimations=ht,Qt.registerAnimation=ot,Qt.loadAnimation=dt,Qt.setSubframeRendering=mt,Qt.resize=lt,Qt.start=pt,Qt.goToAndStop=ft,Qt.destroy=ct,Qt.setQuality=ut,Qt.inBrowser=gt,Qt.installPlugin=yt,Qt.__getFactory=vt,Qt.version="4.13.0";var $t="__[STANDALONE]__",te="__[ANIMATIONDATA]__",ee="";if($t){var se=document.getElementsByTagName("script"),ie=se.length-1,ae=se[ie]||{src:""},re=ae.src.replace(/^[^\?]+\??/,"");ee=kt("renderer")}var ne=setInterval(bt,100);return Qt});

/***/ }),

/***/ "./node_modules/core-js/library/fn/array/from.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__("./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__("./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__("./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__("./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__("./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_create-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__("./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__("./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__("./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__("./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__("./node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__("./node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__("./node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__("./node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__("./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__("./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__("./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__("./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__("./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__("./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__("./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__("./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__("./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__("./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__("./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__("./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__("./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__("./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__("./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/lib/EventEmitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventEmitter = function () {
  function EventEmitter() {
    (0, _classCallCheck3.default)(this, EventEmitter);
    this.listeners = {};
  }

  (0, _createClass3.default)(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      if (!this.listeners[event]) {
        this.listeners[event] = new _set2.default();
      }

      if (this.listeners[event].has(cb)) {
        throw new Error("The listener already exising in event: " + event);
      }

      this.listeners[event].add(cb);
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      if (!this.listeners[event]) return;
      this.listeners[event].forEach(function (cb) {
        return cb.apply(undefined, data);
      });
    }
  }, {
    key: "off",
    value: function off(event, cb) {
      this.listeners[event].delete(cb);
    }
  }]);
  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),

/***/ "./node_modules/next/dist/lib/head.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.defaultHead = defaultHead;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sideEffect = __webpack_require__("./node_modules/next/dist/lib/side-effect.js");

var _sideEffect2 = _interopRequireDefault(_sideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function (_React$Component) {
  (0, _inherits3.default)(Head, _React$Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);
    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Head;
}(_react2.default.Component);

Head.contextTypes = {
  headManager: _propTypes2.default.object
};
function defaultHead() {
  return [_react2.default.createElement('meta', { charSet: 'utf-8', className: 'next-head' })];
}

function reduceComponents(components) {
  var _components$map$map$r;

  return (_components$map$map$r = components.map(function (c) {
    return c.props.children;
  }).map(function (children) {
    return _react2.default.Children.toArray(children);
  }).reduce(function (a, b) {
    return a.concat(b);
  }, []).reduce(function (a, b) {
    if (_react2.default.Fragment && b.type === _react2.default.Fragment) {
      return a.concat(_react2.default.Children.toArray(b.props.children));
    }
    return a.concat(b);
  }, []).reverse()).concat.apply(_components$map$map$r, (0, _toConsumableArray3.default)(defaultHead())).filter(function (c) {
    return !!c;
  }).filter(unique()).reverse().map(function (c) {
    var className = (c.props && c.props.className ? c.props.className + ' ' : '') + 'next-head';
    return _react2.default.cloneElement(c, { className: className });
  });
}

function mapOnServer(head) {
  return head;
}

function onStateChange(head) {
  if (this.context && this.context.headManager) {
    this.context.headManager.updateHead(head);
  }
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp', 'property'];

// returns a function for filtering head child elements
// which shouldn't be duplicated, like <title/>.

function unique() {
  var keys = new _set2.default();
  var tags = new _set2.default();
  var metaTypes = new _set2.default();
  var metaCategories = {};

  return function (h) {
    if (h.key && h.key.startsWith('.$')) {
      if (keys.has(h.key)) return false;
      keys.add(h.key);
    }
    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) return false;
        tags.add(h.type);
        break;
      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) return false;
            metaTypes.add(metatype);
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new _set2.default();
            if (categories.has(category)) return false;
            categories.add(category);
            metaCategories[metatype] = categories;
          }
        }
        break;
    }
    return true;
  };
}

exports.default = (0, _sideEffect2.default)(reduceComponents, onStateChange, mapOnServer)(Head);

/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypesExact = __webpack_require__("./node_modules/prop-types-exact/build/index.js");

var _propTypesExact2 = _interopRequireDefault(_propTypesExact);

var _router = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user
      };if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = (0, _propTypesExact2.default)({
  href: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  as: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  prefetch: _propTypes2.default.bool,
  replace: _propTypes2.default.bool,
  shallow: _propTypes2.default.bool,
  passHref: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired
});
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);

  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/dist/lib/p-queue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/sindresorhus/p-queue (MIT)
// modified for browser support

var Queue = function () {
  function Queue() {
    (0, _classCallCheck3.default)(this, Queue);

    this._queue = [];
  }

  (0, _createClass3.default)(Queue, [{
    key: 'enqueue',
    value: function enqueue(run) {
      this._queue.push(run);
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      return this._queue.shift();
    }
  }, {
    key: 'size',
    get: function get() {
      return this._queue.length;
    }
  }]);
  return Queue;
}();

var PQueue = function () {
  function PQueue(opts) {
    (0, _classCallCheck3.default)(this, PQueue);

    opts = (0, _assign2.default)({
      concurrency: Infinity,
      queueClass: Queue
    }, opts);

    if (opts.concurrency < 1) {
      throw new TypeError('Expected `concurrency` to be a number from 1 and up');
    }

    this.queue = new opts.queueClass(); // eslint-disable-line new-cap
    this._pendingCount = 0;
    this._concurrency = opts.concurrency;
    this._resolveEmpty = function () {};
  }

  (0, _createClass3.default)(PQueue, [{
    key: '_next',
    value: function _next() {
      this._pendingCount--;

      if (this.queue.size > 0) {
        this.queue.dequeue()();
      } else {
        this._resolveEmpty();
      }
    }
  }, {
    key: 'add',
    value: function add(fn, opts) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var run = function run() {
          _this._pendingCount++;

          fn().then(function (val) {
            resolve(val);
            _this._next();
          }, function (err) {
            reject(err);
            _this._next();
          });
        };

        if (_this._pendingCount < _this._concurrency) {
          run();
        } else {
          _this.queue.enqueue(run, opts);
        }
      });
    }
  }, {
    key: 'onEmpty',
    value: function onEmpty() {
      var _this2 = this;

      return new _promise2.default(function (resolve) {
        var existingResolve = _this2._resolveEmpty;
        _this2._resolveEmpty = function () {
          existingResolve();
          resolve();
        };
      });
    }
  }, {
    key: 'size',
    get: function get() {
      return this.queue.size;
    }
  }, {
    key: 'pending',
    get: function get() {
      return this._pendingCount;
    }
  }]);
  return PQueue;
}();

exports.default = PQueue;

/***/ }),

/***/ "./node_modules/next/dist/lib/router/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = exports.createRouter = exports.withRouter = undefined;

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _withRouter = __webpack_require__("./node_modules/next/dist/lib/router/with-router.js");

Object.defineProperty(exports, 'withRouter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withRouter).default;
  }
});
exports._notifyBuildIdMismatch = _notifyBuildIdMismatch;
exports._rewriteUrlForNextExport = _rewriteUrlForNextExport;
exports.makePublicRouterInstance = makePublicRouterInstance;

var _router = __webpack_require__("./node_modules/next/dist/lib/router/router.js");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingletonRouter = {
  router: null, // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();
    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
};

// Create public properties and methods of the router in the SingletonRouter
/* global window */
var propertyFields = ['components', 'pathname', 'route', 'query', 'asPath'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError'];

propertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty2.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});

coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});

routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    SingletonRouter.router.events.on(event, function () {
      var eventField = 'on' + event.charAt(0).toUpperCase() + event.substring(1);
      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error('Error when running the Router event: ' + eventField);
          console.error(err.message + '\n' + err.stack);
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
}

// Export the SingletonRouter and this is the public API.
exports.default = SingletonRouter;

// Reexport the withRoute HOC

// INTERNAL APIS
// -------------
// (do not use following exports inside the app)

// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
var createRouter = exports.createRouter = function createRouter() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = new (Function.prototype.bind.apply(_router2.default, [null].concat(args)))();
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];

  return SingletonRouter.router;
};

// Export the actual Router class, which is usually used inside the server
var Router = exports.Router = _router2.default;

function _notifyBuildIdMismatch(nextRoute) {
  if (SingletonRouter.onAppUpdated) {
    SingletonRouter.onAppUpdated(nextRoute);
  } else {
    console.warn('An app update detected. Loading the SSR version of "' + nextRoute + '"');
    window.location.href = nextRoute;
  }
}

function _rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = (0, _slicedToArray3.default)(_url$split, 2),
      hash = _url$split2[1];

  url = url.replace(/#.*/, '');

  var _url$split3 = url.split('?'),
      _url$split4 = (0, _slicedToArray3.default)(_url$split3, 2),
      path = _url$split4[0],
      qs = _url$split4[1];

  path = path.replace(/\/$/, '');

  var newPath = path;
  // Append a trailing slash if this path does not have an extension
  if (!/\.[^/]+\/?$/.test(path)) {
    newPath = path + '/';
  }

  if (qs) {
    newPath = newPath + '?' + qs;
  }

  if (hash) {
    newPath = newPath + '#' + hash;
  }

  return newPath;
}

function makePublicRouterInstance(router) {
  var instance = {};

  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty2.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });

  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });

  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/lib/router/router.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _url2 = __webpack_require__("./node_modules/url/url.js");

var _EventEmitter = __webpack_require__("./node_modules/next/dist/lib/EventEmitter.js");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _shallowEquals = __webpack_require__("./node_modules/next/dist/lib/shallow-equals.js");

var _shallowEquals2 = _interopRequireDefault(_shallowEquals);

var _pQueue = __webpack_require__("./node_modules/next/dist/lib/p-queue.js");

var _pQueue2 = _interopRequireDefault(_pQueue);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

var _ = __webpack_require__("./node_modules/next/dist/lib/router/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global __NEXT_DATA__ */

var Router = function () {
  function Router(pathname, query, as) {
    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        pageLoader = _ref.pageLoader,
        Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent,
        err = _ref.err;

    (0, _classCallCheck3.default)(this, Router);

    // represents the current component key
    this.route = toRoute(pathname);

    // set up the component cache (by route keys)
    this.components = {};
    // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (Component !== ErrorComponent) {
      this.components[this.route] = { Component: Component, err: err };
    }

    // Handling Router Events
    this.events = new _EventEmitter2.default();

    this.pageLoader = pageLoader;
    this.prefetchQueue = new _pQueue2.default({ concurrency: 2 });
    this.ErrorComponent = ErrorComponent;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set2.default();
    this.componentLoadCancel = null;
    this.onPopState = this.onPopState.bind(this);

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', (0, _url2.format)({ pathname: pathname, query: query }), (0, _utils.getURL)());

      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass3.default)(Router, [{
    key: 'onPopState',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var pathname, query, _e$state, url, as, options;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.state) {
                  _context.next = 4;
                  break;
                }

                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                pathname = this.pathname, query = this.query;

                this.changeState('replaceState', (0, _url2.format)({ pathname: pathname, query: query }), (0, _utils.getURL)());
                return _context.abrupt('return');

              case 4:
                _e$state = e.state, url = _e$state.url, as = _e$state.as, options = _e$state.options;

                this.replace(url, as, options);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onPopState(_x2) {
        return _ref2.apply(this, arguments);
      }

      return onPopState;
    }()
  }, {
    key: 'update',
    value: function update(route, Component) {
      var data = this.components[route];
      if (!data) {
        throw new Error('Cannot update unavailable route: ' + route);
      }

      var newData = (0, _extends3.default)({}, data, { Component: Component });
      this.components[route] = newData;

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: 'reload',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(route) {
        var pathname, query, url, routeInfo, error;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt('return');

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href;


                this.events.emit('routeChangeStart', url);
                _context2.next = 9;
                return this.getRouteInfo(route, pathname, query, url);

              case 9:
                routeInfo = _context2.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt('return');

              case 13:

                this.notify(routeInfo);

                if (!error) {
                  _context2.next = 17;
                  break;
                }

                this.events.emit('routeChangeError', error, url);
                throw error;

              case 17:

                this.events.emit('routeChangeComplete', url);

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function reload(_x3) {
        return _ref3.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: 'back',
    value: function back() {
      window.history.back();
    }
  }, {
    key: 'push',
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.change('pushState', url, as, options);
    }
  }, {
    key: 'replace',
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.change('replaceState', url, as, options);
    }
  }, {
    key: 'change',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(method, _url, _as, options) {
        var url, as, _parse, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (typeof _url === 'undefined' ? 'undefined' : (0, _typeof3.default)(_url)) === 'object' ? (0, _url2.format)(_url) : _url;
                as = (typeof _as === 'undefined' ? 'undefined' : (0, _typeof3.default)(_as)) === 'object' ? (0, _url2.format)(_as) : _as;

                // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = (0, _._rewriteUrlForNextExport)(as);
                }

                this.abortComponentLoad(as);

                // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context3.next = 8;
                  break;
                }

                this.changeState(method, url, as);
                this.scrollToHash(as);
                return _context3.abrupt('return');

              case 8:
                _parse = (0, _url2.parse)(url, true), pathname = _parse.pathname, query = _parse.query;

                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitalProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)

                if (!this.urlIsNew(pathname, query)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === undefined ? false : _options$shallow;
                routeInfo = null;


                this.events.emit('routeChangeStart', as);

                // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context3.next = 18;
                  break;
                }

                routeInfo = this.components[route];
                _context3.next = 21;
                break;

              case 18:
                _context3.next = 20;
                return this.getRouteInfo(route, pathname, query, as);

              case 20:
                routeInfo = _context3.sent;

              case 21:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context3.next = 24;
                  break;
                }

                return _context3.abrupt('return', false);

              case 24:

                this.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);


                this.set(route, pathname, query, as, (0, _extends3.default)({}, routeInfo, { hash: hash }));

                if (!error) {
                  _context3.next = 31;
                  break;
                }

                this.events.emit('routeChangeError', error, as);
                throw error;

              case 31:

                this.events.emit('routeChangeComplete', as);
                return _context3.abrupt('return', true);

              case 33:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function change(_x8, _x9, _x10, _x11) {
        return _ref4.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: 'changeState',
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (window.frameElement) {
        (0, _utils.execOnce)(_utils.warn)('Warning: You\'re using Next.js inside an iFrame. Browser history is disabled.');
      } else if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({ url: url, as: as, options: options }, null, as);
      }
    }
  }, {
    key: 'getRouteInfo',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, ctx, _Component, _ctx;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                routeInfo = null;
                _context4.prev = 1;

                routeInfo = this.components[route];

                if (routeInfo) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context4.t0 = _context4.sent;
                routeInfo = {
                  Component: _context4.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;

                if (!(typeof Component !== 'function')) {
                  _context4.next = 11;
                  break;
                }

                throw new Error('The default export is not a React Component in page: "' + pathname + '"');

              case 11:
                ctx = { pathname: pathname, query: query, asPath: as };
                _context4.next = 14;
                return this.getInitialProps(Component, ctx);

              case 14:
                routeInfo.props = _context4.sent;


                this.components[route] = routeInfo;
                _context4.next = 37;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t1 = _context4['catch'](1);

                if (!_context4.t1.buildIdMismatched) {
                  _context4.next = 24;
                  break;
                }

                // Now we need to reload the page or do the action asked by the user
                (0, _._notifyBuildIdMismatch)(as);
                // We also need to cancel this current route change.
                // We do it like this.
                _context4.t1.cancelled = true;
                return _context4.abrupt('return', { error: _context4.t1 });

              case 24:
                if (!(_context4.t1.statusCode === 404)) {
                  _context4.next = 28;
                  break;
                }

                // If there's 404 error for the page, it could be due to two reasons.
                //  1. Page is not exists
                //  2. Page is exists in a different zone
                // We are not sure whether this is actual 404 or exists in a different zone.
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as;

                // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.
                _context4.t1.cancelled = true;
                return _context4.abrupt('return', { error: _context4.t1 });

              case 28:
                if (!_context4.t1.cancelled) {
                  _context4.next = 30;
                  break;
                }

                return _context4.abrupt('return', { error: _context4.t1 });

              case 30:
                _Component = this.ErrorComponent;

                routeInfo = { Component: _Component, err: _context4.t1 };
                _ctx = { err: _context4.t1, pathname: pathname, query: query };
                _context4.next = 35;
                return this.getInitialProps(_Component, _ctx);

              case 35:
                routeInfo.props = _context4.sent;


                routeInfo.error = _context4.t1;

              case 37:
                return _context4.abrupt('return', routeInfo);

              case 38:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 18]]);
      }));

      function getRouteInfo(_x13, _x14, _x15, _x16) {
        return _ref5.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: 'set',
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: 'onlyAHashChange',
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _asPath$split = this.asPath.split('#'),
          _asPath$split2 = (0, _slicedToArray3.default)(_asPath$split, 2),
          oldUrlNoHash = _asPath$split2[0],
          oldHash = _asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray3.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1];

      // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      }

      // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.
      return oldHash !== newHash;
    }
  }, {
    key: 'scrollToHash',
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray3.default)(_as$split3, 2),
          hash = _as$split4[1];

      var el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView();
      }
    }
  }, {
    key: 'urlIsNew',
    value: function urlIsNew(pathname, query) {
      return this.pathname !== pathname || !(0, _shallowEquals2.default)(query, this.query);
    }
  }, {
    key: 'isShallowRoutingPossible',
    value: function isShallowRoutingPossible(route) {
      return (
        // If there's cached routeInfo for the route.
        Boolean(this.components[route]) &&
        // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: 'prefetch',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(url) {
        var _this = this;

        var _parse2, pathname, route;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (false) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                _parse2 = (0, _url2.parse)(url), pathname = _parse2.pathname;
                route = toRoute(pathname);
                return _context5.abrupt('return', this.prefetchQueue.add(function () {
                  return _this.fetchRoute(route);
                }));

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function prefetch(_x17) {
        return _ref6.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: 'fetchComponent',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context6.next = 4;
                return this.fetchRoute(route);

              case 4:
                Component = _context6.sent;

                if (!cancelled) {
                  _context6.next = 9;
                  break;
                }

                error = new Error('Abort fetching component for route: "' + route + '"');

                error.cancelled = true;
                throw error;

              case 9:

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context6.abrupt('return', Component);

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function fetchComponent(_x18, _x19) {
        return _ref7.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: 'getInitialProps',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(Component, ctx) {
        var cancelled, cancel, props, err;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;

                _context7.next = 5;
                return (0, _utils.loadGetInitialProps)(Component, ctx);

              case 5:
                props = _context7.sent;


                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context7.next = 11;
                  break;
                }

                err = new Error('Loading initial props cancelled');

                err.cancelled = true;
                throw err;

              case 11:
                return _context7.abrupt('return', props);

              case 12:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getInitialProps(_x20, _x21) {
        return _ref8.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: 'fetchRoute',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(route) {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.pageLoader.loadPage(route);

              case 2:
                return _context8.abrupt('return', _context8.sent);

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function fetchRoute(_x22) {
        return _ref9.apply(this, arguments);
      }

      return fetchRoute;
    }()
  }, {
    key: 'abortComponentLoad',
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        this.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: 'notify',
    value: function notify(data) {
      this.subscriptions.forEach(function (fn) {
        return fn(data);
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(fn) {
      var _this2 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this2.subscriptions.delete(fn);
      };
    }
  }]);
  return Router;
}();

exports.default = Router;


function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),

/***/ "./node_modules/next/dist/lib/router/with-router.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = withRouter;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withRouter(ComposedComponent) {
  var displayName = (0, _utils.getDisplayName)(ComposedComponent);

  var WithRouteWrapper = function (_Component) {
    (0, _inherits3.default)(WithRouteWrapper, _Component);

    function WithRouteWrapper() {
      (0, _classCallCheck3.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (WithRouteWrapper.__proto__ || (0, _getPrototypeOf2.default)(WithRouteWrapper)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRouteWrapper, [{
      key: 'render',
      value: function render() {
        var props = (0, _extends3.default)({
          router: this.context.router
        }, this.props);

        return _react2.default.createElement(ComposedComponent, props);
      }
    }]);
    return WithRouteWrapper;
  }(_react.Component);

  WithRouteWrapper.contextTypes = {
    router: _propTypes2.default.object
  };
  WithRouteWrapper.displayName = 'withRoute(' + displayName + ')';


  return (0, _hoistNonReactStatics2.default)(WithRouteWrapper, ComposedComponent);
}

/***/ }),

/***/ "./node_modules/next/dist/lib/shallow-equals.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEquals;
function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

/***/ }),

/***/ "./node_modules/next/dist/lib/side-effect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

exports.default = withSideEffect;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withSideEffect(reduceComponentsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reduceComponentsToState !== 'function') {
    throw new Error('Expected reduceComponentsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = new _set2.default();
    var state = void 0;

    function emitChange(component) {
      state = reduceComponentsToState([].concat((0, _toConsumableArray3.default)(mountedInstances)));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient.call(component, state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      (0, _inherits3.default)(SideEffect, _Component);

      function SideEffect() {
        (0, _classCallCheck3.default)(this, SideEffect);
        return (0, _possibleConstructorReturn3.default)(this, (SideEffect.__proto__ || (0, _getPrototypeOf2.default)(SideEffect)).apply(this, arguments));
      }

      (0, _createClass3.default)(SideEffect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          mountedInstances.add(this);
          emitChange(this);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
          emitChange(this);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          mountedInstances.delete(this);
          emitChange(this);
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            WrappedComponent,
            null,
            this.props.children
          );
        }
      }], [{
        key: 'peek',
        value: function peek() {
          return state;
        }

        // Expose canUseDOM so tests can monkeypatch it

        // Try to use displayName of wrapped component

      }, {
        key: 'rewind',
        value: function rewind() {
          if (SideEffect.canUseDOM) {
            throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
          }

          var recordedState = state;
          state = undefined;
          mountedInstances.clear();
          return recordedState;
        }
      }]);
      return SideEffect;
    }(_react.Component);

    SideEffect.displayName = 'SideEffect(' + (0, _utils.getDisplayName)(WrappedComponent) + ')';
    SideEffect.contextTypes = WrappedComponent.contextTypes;
    SideEffect.canUseDOM = typeof window !== 'undefined';


    return SideEffect;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGetInitialProps = undefined;

var _regenerator = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var loadGetInitialProps = exports.loadGetInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(Component, ctx) {
    var props, compName, message;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (Component.getInitialProps) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', {});

          case 2:
            _context.next = 4;
            return Component.getInitialProps(ctx);

          case 4:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', props);

          case 7:
            if (props) {
              _context.next = 11;
              break;
            }

            compName = getDisplayName(Component);
            message = '"' + compName + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
            throw new Error(message);

          case 11:
            return _context.abrupt('return', props);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function loadGetInitialProps(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.warn = warn;
exports.execOnce = execOnce;
exports.deprecated = deprecated;
exports.printAndExit = printAndExit;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function warn(message) {
  if (true) {
    console.error(message);
  }
}

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!used) {
      used = true;
      fn.apply(_this, args);
    }
  };
}

function deprecated(fn, message) {
  if (false) return fn;

  var warned = false;
  var newFn = function newFn() {
    if (!warned) {
      warned = true;
      console.error(message);
    }

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fn.apply(this, args);
  };

  // copy all properties
  (0, _assign2.default)(newFn, fn);

  return newFn;
}

function printAndExit(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (code === 0) {
    console.log(message);
  } else {
    console.error(message);
  }

  process.exit(code);
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;

  return protocol + '//' + hostname + (port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;

  var origin = getLocationOrigin();
  return href.substring(origin.length);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__("./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__("./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-bodymovin/lib/ReactBodymovin.js":
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("./node_modules/react/cjs/react.development.js");
var bodymovin;
var isDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && _typeof(window.document) === 'object';

/* global BODYMOVIN_EXPRESSION_SUPPORT */

// Use Bodymovin Light if running in browser
if (isDOM && (typeof BODYMOVIN_EXPRESSION_SUPPORT === 'undefined' || BODYMOVIN_EXPRESSION_SUPPORT == null || BODYMOVIN_EXPRESSION_SUPPORT === false)) {
  bodymovin = __webpack_require__("./node_modules/bodymovin/build/player/bodymovin_light.min.js");
  // Use Bodymovin w/ expressions
} else if (isDOM && BODYMOVIN_EXPRESSION_SUPPORT === true) {
  bodymovin = __webpack_require__("./node_modules/bodymovin/build/player/bodymovin.min.js");
}

var ReactBodymovin = function (_React$Component) {
  _inherits(ReactBodymovin, _React$Component);

  function ReactBodymovin() {
    _classCallCheck(this, ReactBodymovin);

    return _possibleConstructorReturn(this, (ReactBodymovin.__proto__ || Object.getPrototypeOf(ReactBodymovin)).apply(this, arguments));
  }

  _createClass(ReactBodymovin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!isDOM) {
        return;
      }
      var options = Object.assign({}, this.props.options);
      options.wrapper = this.wrapper;
      options.renderer = 'svg';
      this.animation = bodymovin.loadAnimation(options);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!isDOM) {
        return;
      }
      this.animation.destroy();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var storeWrapper = function storeWrapper(el) {
        _this2.wrapper = el;
      };

      return React.createElement(
        'div',
        { className: 'react-bodymovin-container', ref: storeWrapper },
        this.props.children
      );
    }
  }]);

  return ReactBodymovin;
}(React.Component);

module.exports = ReactBodymovin;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(bodymovin, 'bodymovin', 'src/ReactBodymovin.js');

  __REACT_HOT_LOADER__.register(isDOM, 'isDOM', 'src/ReactBodymovin.js');

  __REACT_HOT_LOADER__.register(ReactBodymovin, 'ReactBodymovin', 'src/ReactBodymovin.js');
}();

;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/generation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var generation = 0;

var increment = exports.increment = function increment() {
  return generation++;
};
var get = exports.get = function get() {
  return generation;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/global/modules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leave = exports.enter = exports.isOpened = exports.hotModule = undefined;

var _logger = __webpack_require__("./node_modules/react-hot-loader/lib/logger.js");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openedModules = {};

var hotModules = {};

var createHotModule = function createHotModule() {
  return { instances: [], updateTimeout: 0 };
};

var hotModule = exports.hotModule = function hotModule(moduleId) {
  if (!hotModules[moduleId]) {
    hotModules[moduleId] = createHotModule();
  }
  return hotModules[moduleId];
};

var isOpened = exports.isOpened = function isOpened(sourceModule) {
  return sourceModule && !!openedModules[sourceModule.id];
};

var enter = exports.enter = function enter(sourceModule) {
  if (sourceModule && sourceModule.id) {
    openedModules[sourceModule.id] = true;
  } else {
    _logger2.default.warn('React-hot-loader: no `module` variable found. Do you shadow system variable?');
  }
};

var leave = exports.leave = function leave(sourceModule) {
  if (sourceModule && sourceModule.id) {
    delete openedModules[sourceModule.id];
  }
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/internal/reactUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isFragmentNode = exports.updateInstance = exports.getInternalInstance = exports.getComponentDisplayName = exports.isCompositeComponent = undefined;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */

var isCompositeComponent = exports.isCompositeComponent = function isCompositeComponent(type) {
  return typeof type === 'function';
};

var getComponentDisplayName = exports.getComponentDisplayName = function getComponentDisplayName(type) {
  return type.displayName || type.name || 'Component';
};

var getInternalInstance = exports.getInternalInstance = function getInternalInstance(instance) {
  return instance._reactInternalFiber || // React 16
  instance._reactInternalInstance || // React 15
  null;
};

var updateInstance = exports.updateInstance = function updateInstance(instance) {
  var updater = instance.updater,
      forceUpdate = instance.forceUpdate;

  if (typeof forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
    updater.enqueueForceUpdate(instance);
  }
};

var isFragmentNode = exports.isFragmentNode = function isFragmentNode(_ref) {
  var type = _ref.type;
  return _react2.default.Fragment && type === _react2.default.Fragment;
};

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = {
  debug: function debug() {
    if (['debug'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console;

      (_console = console).debug.apply(_console, arguments);
    }
  },
  log: function log() {
    if (['debug', 'log'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console2;

      (_console2 = console).log.apply(_console2, arguments);
    }
  },
  warn: function warn() {
    if (['debug', 'log', 'warn'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console3;

      (_console3 = console).warn.apply(_console3, arguments);
    }
  },
  error: function error() {
    if (['debug', 'log', 'warn', 'error'].includes(_reactHotLoader2.default.config.logLevel)) {
      var _console4;

      (_console4 = console).error.apply(_console4, arguments);
    }
  }
}; /* eslint-disable no-console */
exports.default = logger;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.leaveModule = exports.enterModule = undefined;

var _modules = __webpack_require__("./node_modules/react-hot-loader/lib/global/modules.js");

Object.defineProperty(exports, 'enterModule', {
  enumerable: true,
  get: function get() {
    return _modules.enter;
  }
});
Object.defineProperty(exports, 'leaveModule', {
  enumerable: true,
  get: function get() {
    return _modules.leave;
  }
});

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/lib/reactHotLoader.js");

var _reactHotLoader2 = _interopRequireDefault(_reactHotLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactHotLoader2.default.patch(_react2.default);

exports.default = _reactHotLoader2.default;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/patch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require, import/no-mutable-exports */

if (false) {
  module.exports = require('./prod/patch.prod');
} else {
  module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.dev.js");
}

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reactHotLoader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable no-use-before-define */


var _reactUtils = __webpack_require__("./node_modules/react-hot-loader/lib/internal/reactUtils.js");

var _generation = __webpack_require__("./node_modules/react-hot-loader/lib/global/generation.js");

var _proxies = __webpack_require__("./node_modules/react-hot-loader/lib/reconciler/proxies.js");

function resolveType(type) {
  if (!(0, _reactUtils.isCompositeComponent)(type)) return type;

  var proxy = reactHotLoader.disableProxyCreation ? (0, _proxies.getProxyByType)(type) : (0, _proxies.createProxyForType)(type);

  return proxy ? proxy.get() : type;
}

var reactHotLoader = {
  register: function register(type, uniqueLocalName, fileName) {
    if ((0, _reactUtils.isCompositeComponent)(type) && typeof uniqueLocalName === 'string' && uniqueLocalName && typeof fileName === 'string' && fileName) {
      (0, _generation.increment)();
      (0, _proxies.updateProxyById)(fileName + '#' + uniqueLocalName, type);
    }
  },
  reset: function reset() {
    (0, _proxies.resetProxies)();
  },
  patch: function patch(React) {
    if (!React.createElement.isPatchedByReactHotLoader) {
      var originalCreateElement = React.createElement;
      // Trick React into rendering a proxy so that
      // its state is preserved when the class changes.
      // This will update the proxy if it's for a known type.
      React.createElement = function (type) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return originalCreateElement.apply(undefined, [resolveType(type)].concat(args));
      };
      React.createElement.isPatchedByReactHotLoader = true;
    }

    if (!React.createFactory.isPatchedByReactHotLoader) {
      // Patch React.createFactory to use patched createElement
      // because the original implementation uses the internal,
      // unpatched ReactElement.createElement
      React.createFactory = function (type) {
        var factory = React.createElement.bind(null, type);
        factory.type = type;
        return factory;
      };
      React.createFactory.isPatchedByReactHotLoader = true;
    }

    if (!React.Children.only.isPatchedByReactHotLoader) {
      var originalChildrenOnly = React.Children.only;
      // Use the same trick as React.createElement
      React.Children.only = function (children) {
        return originalChildrenOnly(_extends({}, children, { type: resolveType(children.type) }));
      };
      React.Children.only.isPatchedByReactHotLoader = true;
    }

    reactHotLoader.reset();
  },


  disableProxyCreation: false,

  config: {
    logLevel: 'error'
  }
};

exports.default = reactHotLoader;

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/reconciler/proxies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resetProxies = exports.createProxyForType = exports.updateProxyById = exports.getProxyByType = exports.getIdByType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactStandIn = __webpack_require__("./node_modules/react-stand-in/lib/index.js");

var _reactStandIn2 = _interopRequireDefault(_reactStandIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proxiesByID = void 0;
var idsByType = void 0;

var elementCount = 0;

var generateTypeId = function generateTypeId() {
  return 'auto-' + elementCount++;
};

var getIdByType = exports.getIdByType = function getIdByType(type) {
  return idsByType.get(type);
};

var getProxyByType = exports.getProxyByType = function getProxyByType(type) {
  return proxiesByID[getIdByType(type)];
};

var autoWrapper = function autoWrapper(element) {
  // post wrap on post render
  if (!element) {
    return element;
  }
  if (Array.isArray(element)) {
    return element.map(autoWrapper);
  }
  if (typeof element.type === 'function') {
    var proxy = getProxyByType(element.type);
    if (proxy) {
      return _extends({}, element, {
        type: proxy.get()
      });
    }
  }
  return element;
};

var updateProxyById = exports.updateProxyById = function updateProxyById(id, type) {
  // Remember the ID.
  idsByType.set(type, id);

  if (!proxiesByID[id]) {
    proxiesByID[id] = (0, _reactStandIn2.default)(type, id, autoWrapper);
  } else {
    proxiesByID[id].update(type);
  }
  return proxiesByID[id];
};

var createProxyForType = exports.createProxyForType = function createProxyForType(type) {
  return getProxyByType(type) || updateProxyById(generateTypeId(), type);
};

var resetProxies = exports.resetProxies = function resetProxies() {
  proxiesByID = {};
  idsByType = new WeakMap();
};

/***/ }),

/***/ "./node_modules/react-hot-loader/patch.js":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable import/no-unresolved */
module.exports = __webpack_require__("./node_modules/react-hot-loader/lib/patch.js")


/***/ }),

/***/ "./node_modules/react-stand-in/lib/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var config = {
  logger: console
};

var setConfig = exports.setConfig = function setConfig(obj) {
  Object.assign(config, obj);
};

exports.default = config;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var PREFIX = exports.PREFIX = '__reactstandin__';
var PROXY_KEY = exports.PROXY_KEY = PREFIX + 'key';
var GENERATION = exports.GENERATION = PREFIX + 'proxyGeneration';
var REGENERATE_METHOD = exports.REGENERATE_METHOD = PREFIX + 'regenerateByEval';
var UNWRAP_PROXY = exports.UNWRAP_PROXY = PREFIX + 'getCurrent';
var CACHED_RESULT = exports.CACHED_RESULT = PREFIX + 'cachedResult';

/***/ }),

/***/ "./node_modules/react-stand-in/lib/createClassProxy.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _transferStaticProps = __webpack_require__("./node_modules/react-stand-in/lib/transferStaticProps.js");

var _transferStaticProps2 = _interopRequireDefault(_transferStaticProps);

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _inject = __webpack_require__("./node_modules/react-stand-in/lib/inject.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = Object.prototype.hasOwnProperty;

var proxies = new WeakMap();

var defaultRenderOptions = {
  preRender: _utils.identity,
  postRender: function postRender(result) {
    return result;
  }
};

var defineClassMember = function defineClassMember(Class, methodName, methodBody) {
  return (0, _utils.safeDefineProperty)(Class.prototype, methodName, {
    configurable: true,
    writable: true,
    enumerable: false,
    value: methodBody
  });
};

function createClassProxy(InitialComponent, proxyKey, options) {
  var renderOptions = _extends({}, defaultRenderOptions, options);
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = proxies.get(InitialComponent);

  if (existingProxy) {
    return existingProxy;
  }

  var CurrentComponent = void 0;
  var savedDescriptors = {};
  var injectedMembers = {};
  var proxyGeneration = 0;
  var isFunctionalComponent = !(0, _utils.isReactClass)(InitialComponent);

  var lastInstance = null;

  function postConstructionAction() {
    this[_constants.GENERATION] = 0;

    // As long we can't override constructor
    // every class shall evolve from a base class
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);

    lastInstance = this;
  }

  function proxiedUpdate() {
    (0, _inject.inject)(this, proxyGeneration, injectedMembers);
  }

  function lifeCycleWrapperFactory(wrapperName) {
    return function wrappedMethod() {
      proxiedUpdate.call(this);

      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return !isFunctionalComponent && CurrentComponent.prototype[wrapperName] && CurrentComponent.prototype[wrapperName].apply(this, rest);
    };
  }

  var componentWillReceiveProps = lifeCycleWrapperFactory('componentWillReceiveProps');
  var componentWillUpdate = lifeCycleWrapperFactory('componentWillUpdate');

  function proxiedRender() {
    proxiedUpdate.call(this);
    renderOptions.preRender(this);

    var result = void 0;

    // We need to use hasOwnProperty here, as the cached result is a React node
    // and can be null or some other falsy value.
    if (has.call(this, _constants.CACHED_RESULT)) {
      result = this[_constants.CACHED_RESULT];
      delete this[_constants.CACHED_RESULT];
    } else if (isFunctionalComponent) {
      result = CurrentComponent(this.props, this.context);
    } else {
      result = CurrentComponent.prototype.render.call(this);
    }

    return renderOptions.postRender(result);
  }

  var defineProxyMethods = function defineProxyMethods(Proxy) {
    defineClassMember(Proxy, 'render', proxiedRender);
    defineClassMember(Proxy, 'componentWillReceiveProps', componentWillReceiveProps);
    defineClassMember(Proxy, 'componentWillUpdate', componentWillUpdate);
  };

  var ProxyFacade = void 0;
  var ProxyComponent = null;

  if (!isFunctionalComponent) {
    ProxyComponent = (0, _utils.proxyClassCreator)(InitialComponent, postConstructionAction);

    defineProxyMethods(ProxyComponent);

    ProxyFacade = ProxyComponent;
  } else {
    // This function only gets called for the initial mount. The actual
    // rendered component instance will be the return value.

    // eslint-disable-next-line func-names
    ProxyFacade = function ProxyFacade(props, context) {
      var result = CurrentComponent(props, context);

      // This is a Relay-style container constructor. We can't do the prototype-
      // style wrapping for this as we do elsewhere, so just we just pass it
      // through as-is.
      if ((0, _utils.isReactComponentInstance)(result)) {
        ProxyComponent = null;
        return result;
      }

      // Otherwise, it's a normal functional component. Build the real proxy
      // and use it going forward.
      ProxyComponent = (0, _utils.proxyClassCreator)(_react.Component, postConstructionAction);

      defineProxyMethods(ProxyComponent);

      var determinateResult = new ProxyComponent(props, context);

      // Cache the initial render result so we don't call the component function
      // a second time for the initial render.
      determinateResult[_constants.CACHED_RESULT] = result;
      return determinateResult;
    };
  }

  function get() {
    return ProxyFacade;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, _constants.PROXY_KEY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: proxyKey
  });

  (0, _utils.safeDefineProperty)(ProxyFacade, 'toString', {
    configurable: true,
    writable: false,
    enumerable: false,
    value: function toString() {
      return String(CurrentComponent);
    }
  });

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    if (NextComponent === CurrentComponent) {
      return;
    }

    // Prevent proxy cycles
    var existingProxy = proxies.get(NextComponent);
    if (existingProxy) {
      update(existingProxy[_constants.UNWRAP_PROXY]());
      return;
    }

    isFunctionalComponent = !(0, _utils.isReactClass)(NextComponent);
    proxyGeneration++;

    // Save the next constructor so we call it
    var PreviousComponent = CurrentComponent;
    CurrentComponent = NextComponent;

    // Try to infer displayName
    var displayName = (0, _utils.getDisplayName)(CurrentComponent);
    ProxyFacade.displayName = displayName;

    if (ProxyComponent) {
      (0, _utils.safeDefineProperty)(ProxyComponent, 'name', {
        value: displayName
      });
    }

    savedDescriptors = (0, _transferStaticProps2.default)(ProxyFacade, savedDescriptors, PreviousComponent, NextComponent);

    if (isFunctionalComponent || !ProxyComponent) {
      // nothing
    } else {
      (0, _inject.checkLifeCycleMethods)(ProxyComponent, NextComponent);
      Object.setPrototypeOf(ProxyComponent.prototype, NextComponent.prototype);
      if (proxyGeneration > 1) {
        injectedMembers = (0, _inject.mergeComponents)(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers);
      }
    }
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  proxies.set(ProxyFacade, proxy);

  (0, _utils.safeDefineProperty)(proxy, _constants.UNWRAP_PROXY, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

exports.default = createClassProxy;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _createClassProxy = __webpack_require__("./node_modules/react-stand-in/lib/createClassProxy.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createClassProxy).default;
  }
});

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

Object.defineProperty(exports, 'setConfig', {
  enumerable: true,
  get: function get() {
    return _config.setConfig;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-stand-in/lib/inject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inject = exports.checkLifeCycleMethods = exports.mergeComponents = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeComponents(ProxyComponent, NextComponent, InitialComponent, lastInstance, injectedMembers) {
  var injectedCode = {};
  try {
    var nextInstance = (0, _utils.safeReactConstructor)(NextComponent, lastInstance);

    try {
      // Bypass babel class inheritance checking
      (0, _utils.deepPrototypeUpdate)(InitialComponent, NextComponent);
    } catch (e) {
      // It was ES6 class
    }

    var proxyInstance = (0, _utils.safeReactConstructor)(ProxyComponent, lastInstance);

    if (!nextInstance || !proxyInstance) {
      return injectedCode;
    }

    var mergedAttrs = _extends({}, proxyInstance, nextInstance);
    var hasRegenerate = proxyInstance[_constants.REGENERATE_METHOD];
    var ownKeys = (0, _utils.getOwnKeys)(Object.getPrototypeOf(ProxyComponent.prototype));
    Object.keys(mergedAttrs).forEach(function (key) {
      if (key.startsWith(_constants.PREFIX)) return;
      var nextAttr = nextInstance[key];
      var prevAttr = proxyInstance[key];
      if (prevAttr && nextAttr) {
        if ((0, _utils.isNativeFunction)(nextAttr) || (0, _utils.isNativeFunction)(prevAttr)) {
          // this is bound method
          var isSameArity = nextAttr.length === prevAttr.length;
          var existsInPrototype = ownKeys.indexOf(key) >= 0 || ProxyComponent.prototype[key];
          if (isSameArity && existsInPrototype) {
            if (hasRegenerate) {
              injectedCode[key] = 'Object.getPrototypeOf(this)[\'' + key + '\'].bind(this)';
            } else {
              _config2.default.logger.warn('React-stand-in:,', 'Non-controlled class', ProxyComponent.name, 'contains a new native or bound function ', key, nextAttr, '. Unable to reproduce');
            }
          } else {
            _config2.default.logger.warn('React-stand-in:', 'Updated class ', ProxyComponent.name, 'contains native or bound function ', key, nextAttr, '. Unable to reproduce, use arrow functions instead.', '(arity: ' + nextAttr.length + '/' + prevAttr.length + ', proto: ' + (existsInPrototype ? 'yes' : 'no'));
          }
          return;
        }

        var nextString = String(nextAttr);
        var injectedBefore = injectedMembers[key];
        if (nextString !== String(prevAttr) || injectedBefore && nextString !== String(injectedBefore)) {
          if (!hasRegenerate) {
            if (nextString.indexOf('function') < 0 && nextString.indexOf('=>') < 0) {
              // just copy prop over
              injectedCode[key] = nextAttr;
            } else {
              _config2.default.logger.warn('React-stand-in:', ' Updated class ', ProxyComponent.name, 'had different code for', key, nextAttr, '. Unable to reproduce. Regeneration support needed.');
            }
          } else {
            injectedCode[key] = nextAttr;
          }
        }
      }
    });
  } catch (e) {
    _config2.default.logger.warn('React-stand-in:', e);
  }
  return injectedCode;
}

function checkLifeCycleMethods(ProxyComponent, NextComponent) {
  try {
    var p1 = Object.getPrototypeOf(ProxyComponent.prototype);
    var p2 = NextComponent.prototype;
    _utils.reactLifeCycleMountMethods.forEach(function (key) {
      var d1 = Object.getOwnPropertyDescriptor(p1, key) || { value: p1[key] };
      var d2 = Object.getOwnPropertyDescriptor(p2, key) || { value: p2[key] };
      if (!(0, _utils.shallowStringsEqual)(d1, d2)) {
        _config2.default.logger.warn('React-stand-in:', 'You did update', ProxyComponent.name, 's lifecycle method', key, '. Unable to repeat');
      }
    });
  } catch (e) {
    // Ignore errors
  }
}

function inject(target, currentGeneration, injectedMembers) {
  if (target[_constants.GENERATION] !== currentGeneration) {
    var hasRegenerate = !!target[_constants.REGENERATE_METHOD];
    Object.keys(injectedMembers).forEach(function (key) {
      try {
        if (hasRegenerate) {
          target[_constants.REGENERATE_METHOD](key, '(function REACT_HOT_LOADER_SANDBOX () {\n          var _this = this; // common babel transpile\n          var _this2 = this; // common babel transpile          \n          return ' + injectedMembers[key] + ';\n          }).call(this)');
        } else {
          target[key] = injectedMembers[key];
        }
      } catch (e) {
        _config2.default.logger.warn('React-stand-in: Failed to regenerate method ', key, ' of class ', target);
        _config2.default.logger.warn('got error', e);
      }
    });

    target[_constants.GENERATION] = currentGeneration;
  }
}

exports.mergeComponents = mergeComponents;
exports.checkLifeCycleMethods = checkLifeCycleMethods;
exports.inject = inject;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/transferStaticProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _utils = __webpack_require__("./node_modules/react-stand-in/lib/utils.js");

var _constants = __webpack_require__("./node_modules/react-stand-in/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESERVED_STATICS = ['length', 'displayName', 'name', 'arguments', 'caller', 'prototype', 'toString', 'valueOf', _constants.PROXY_KEY, _constants.UNWRAP_PROXY];

function transferStaticProps(ProxyComponent, savedDescriptors, PreviousComponent, NextComponent) {
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    if (!(0, _shallowequal2.default)(prevDescriptor, savedDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
    }
  });

  // Copy newly defined static methods and properties
  Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(ProxyComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      (0, _utils.safeDefineProperty)(NextComponent, key, prevDescriptor);
      return;
    }

    if (prevDescriptor && !savedDescriptor) {
      (0, _utils.safeDefineProperty)(ProxyComponent, key, prevDescriptor);
      return;
    }

    var nextDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
      configurable: true
    });

    savedDescriptors[key] = nextDescriptor;
    (0, _utils.safeDefineProperty)(ProxyComponent, key, nextDescriptor);
  });

  // Remove static methods and properties that are no longer defined
  Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
    if (RESERVED_STATICS.indexOf(key) !== -1) {
      return;
    }
    // Skip statics that exist on the next class
    if (NextComponent.hasOwnProperty(key)) {
      return;
    }
    // Skip non-configurable statics
    var proxyDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    if (proxyDescriptor && !proxyDescriptor.configurable) {
      return;
    }

    var prevDescriptor = PreviousComponent && Object.getOwnPropertyDescriptor(PreviousComponent, key);
    var savedDescriptor = savedDescriptors[key];

    // Skip redefined descriptors
    if (prevDescriptor && savedDescriptor && !(0, _shallowequal2.default)(savedDescriptor, prevDescriptor)) {
      return;
    }

    (0, _utils.safeDefineProperty)(ProxyComponent, key, {
      value: undefined
    });
  });

  return savedDescriptors;
}

exports.default = transferStaticProps;

/***/ }),

/***/ "./node_modules/react-stand-in/lib/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.proxyClassCreator = exports.isReactComponentInstance = exports.doesSupportClasses = exports.identity = exports.reactLifeCycleMountMethods = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-eval, func-names */


exports.getDisplayName = getDisplayName;
exports.isReactClass = isReactClass;
exports.safeReactConstructor = safeReactConstructor;
exports.isNativeFunction = isNativeFunction;
exports.getOwnKeys = getOwnKeys;
exports.shallowStringsEqual = shallowStringsEqual;
exports.deepPrototypeUpdate = deepPrototypeUpdate;
exports.safeDefineProperty = safeDefineProperty;

var _config = __webpack_require__("./node_modules/react-stand-in/lib/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDisplayName(Component) {
  var displayName = Component.displayName || Component.name;
  return displayName && displayName !== 'ReactComponent' ? displayName : 'Unknown';
}

var reactLifeCycleMountMethods = exports.reactLifeCycleMountMethods = ['componentWillMount', 'componentDidMount'];

function isReactClass(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Component.prototype.componentWillMount || Component.prototype.componentWillUnmount || Component.prototype.componentDidMount || Component.prototype.componentDidUnmount || Component.prototype.render);
}

function safeReactConstructor(Component, lastInstance) {
  try {
    if (lastInstance) {
      return new Component(lastInstance.props, lastInstance.context);
    }
    return new Component({}, {});
  } catch (e) {
    // some components, like Redux connect could not be created without proper context
  }
  return null;
}

function isNativeFunction(fn) {
  return typeof fn === 'function' ? fn.toString().indexOf('[native code]') > 0 : false;
}

var identity = exports.identity = function identity(a) {
  return a;
};

var doesSupportClasses = exports.doesSupportClasses = function () {
  try {
    eval('class Test {}');
    return true;
  } catch (e) {
    return false;
  }
}();

var ES6ProxyComponentFactory = doesSupportClasses && eval('\n(function(InitialParent, postConstructionAction) {\n  return class ProxyComponent extends InitialParent {\n    constructor(props, context) {\n      super(props, context)\n      postConstructionAction.call(this)\n    }\n  }\n})\n');

var ES5ProxyComponentFactory = function ES5ProxyComponentFactory(InitialParent, postConstructionAction) {
  function ProxyComponent(props, context) {
    InitialParent.call(this, props, context);
    postConstructionAction.call(this);
  }
  ProxyComponent.prototype = Object.create(InitialParent.prototype);
  Object.setPrototypeOf(ProxyComponent, InitialParent);
  return ProxyComponent;
};

var isReactComponentInstance = exports.isReactComponentInstance = function isReactComponentInstance(el) {
  return el && (typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && !el.type && el.render;
};

var proxyClassCreator = exports.proxyClassCreator = doesSupportClasses ? ES6ProxyComponentFactory : ES5ProxyComponentFactory;

function getOwnKeys(target) {
  return [].concat(Object.getOwnPropertyNames(target), Object.getOwnPropertySymbols(target));
}

function shallowStringsEqual(a, b) {
  for (var key in a) {
    if (String(a[key]) !== String(b[key])) {
      return false;
    }
  }
  return true;
}

function deepPrototypeUpdate(dest, source) {
  var deepDest = Object.getPrototypeOf(dest);
  var deepSrc = Object.getPrototypeOf(source);
  if (deepDest && deepSrc && deepSrc !== deepDest) {
    deepPrototypeUpdate(deepDest, deepSrc);
  }
  if (source.prototype && source.prototype !== dest.prototype) {
    dest.prototype = source.prototype;
  }
}

function safeDefineProperty(target, key, props) {
  try {
    Object.defineProperty(target, key, props);
  } catch (e) {
    _config2.default.logger.warn('Error while wrapping', key, ' -> ', e);
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });
    this._sheet.inject();
    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/url/url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__("./node_modules/punycode/punycode.js");
var util = __webpack_require__("./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__("./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainLayout__ = __webpack_require__("./components/MainLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_constants__ = __webpack_require__("./lib/constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_debounce__ = __webpack_require__("./node_modules/lodash.debounce/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button__ = __webpack_require__("./components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_LoadingCircle__ = __webpack_require__("./components/LoadingCircle.js");
var _jsxFileName = '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var _default = function _default() {
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
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SplashTagBar, {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 11
			}
		})
	);
};

/* harmony default export */ __webpack_exports__["default"] = (_default);

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
								lineNumber: 92
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
						lineNumber: 120
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2537798234', [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]]]) + ' ' + 'splashtagbar',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 121
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
						onChange: this.handleChange,
						value: this.state.splashtag,
						type: 'text',
						placeholder: 'Choose your splashtag', className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([['2537798234', [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]]]),
						__source: {
							fileName: _jsxFileName,
							lineNumber: 122
						}
					})
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6__components_Button__["a" /* default */],
					{
						disabled: buttonDisabled(),
						onClick: this.handleSubmit, __source: {
							fileName: _jsxFileName,
							lineNumber: 128
						}
					},
					buttonContent()
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: '2537798234',
					css: '.wrap.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}input.__jsx-style-dynamic-selector{width:220px;font-size:18px;padding:18px 20px;color:' + (validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark) + ';font-weight:500;border:none;box-shadow:rgba(63,63,63,0.08) 0 6px 34px 0;}input.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector::-moz-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector:-ms-input-placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector::placeholder{color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';}input.__jsx-style-dynamic-selector:focus{outline:0;}.splashtagbar.__jsx-style-dynamic-selector{opacity:1;}.fade-out.__jsx-style-dynamic-selector{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFJZ0IsQUFJb0IsQUFJRCxBQVV1QixBQUd6QixBQUlBLEFBSUEsVUFQWCxBQUlBLEFBSUEsRUFyQmdCLGVBQ0csUUFTbkIsVUFSb0MsNkJBTlosTUFPUCxnQkFDSixZQUNnQyw0Q0FDN0MscUJBVEEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkxheW91dCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBMb2FkaW5nQ2lyY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZ0NpcmNsZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxIZXJvLz5cblx0XHQ8U3BsYXNoVGFnQmFyIC8+XG5cdDwvTGF5b3V0PlxuKVxuXG5jbGFzcyBTcGxhc2hUYWdCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXG5cdFx0XHRzcGxhc2h0YWc6ICcnLFxuXHRcdFx0dmFsaWRhdGlvbkVycm9yOiBmYWxzZSxcblx0XHRcdHRhZ0F2YWlsYWJsZTogdHJ1ZSxcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpIHtcblx0XHRjb25zdCBzcGxhc2h0YWcgPSB0aGlzLnN0YXRlLnNwbGFzaHRhZ1xuXHRcdGlmICh0aGlzLnZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdWJtaXR0ZWQ6IHRydWUsIFxuXHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0XHRjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2UsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IHRydWV9KVxuXHRcdH1cblxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0Y29uc3Qgc3BsYXNodGFnID0gdGhpcy5mb3JjZUxvd2VyKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHtzcGxhc2h0YWc6IHNwbGFzaHRhZ30pXG5cdFx0Y29uc29sZS5sb2coc3BsYXNodGFnLmxlbmd0aClcblx0XHRpZiAodGhpcy52YWxpZGF0ZVNwbGFzaHRhZyhzcGxhc2h0YWcpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IGZhbHNlfSlcblx0ICBcdHRoaXMuY2hlY2tJZlRhZ0F2YWlsYWJsZShzcGxhc2h0YWcpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogdHJ1ZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHk6IGZhbHNlfSlcblx0XHR9XG5cblx0XHRpZiAoc3BsYXNodGFnLmxlbmd0aCA8IDEpIHsgXG5cdFx0XHRjb25zb2xlLmxvZygnc2V0dGluZyB2YWxpZGF0aW9uZXJyb3IgdG8gZmFsc2UnKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbkVycm9yOiBmYWxzZX0pIFxuXHRcdH1cblx0fVxuXG5cdGZvcmNlTG93ZXIoc3BsYXNodGFnKSB7XG5cdFx0cmV0dXJuIHNwbGFzaHRhZy50b0xvd2VyQ2FzZSgpXG5cdH1cblxuXHRjaGVja0lmVGFnQXZhaWxhYmxlKHNwbGFzaHRhZykge1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWhleGEtc3BsYXNoLmNsb3VkZnVuY3Rpb25zLm5ldC9zcGxhc2h0YWdBdmFpbGFibGU/c3BsYXNodGFnPWBcblx0XHR0aGlzLnNldFN0YXRlKHtjaGVja2luZ0F2YWlsYWJpbGl0eTogdHJ1ZX0pXG5cdFx0YXhpb3MuZ2V0KGAke3VybH0ke3NwbGFzaHRhZ31gKVxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RhZ0F2YWlsYWJsZScsIHJlc3VsdC5kYXRhKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0YWdBdmFpbGFibGU6IHJlc3VsdC5kYXRhLCBjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2V9KVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjaGVja2luZ0F2YWlsYWJpbGl0eScsIGVycm9yKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0YWdBdmFpbGFibGU6IHRydWUsIGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZX0pXG5cdFx0XHR9KVxuXG5cdH1cblxuXHR2YWxpZGF0ZVNwbGFzaHRhZyhzcGxhc2h0YWcpIHtcblx0IGlmICgvXlthLXowLTlfLV17MywxNX0kLy50ZXN0KHNwbGFzaHRhZykpIHtcblx0ICAgIHJldHVybiB0cnVlXG5cdCAgfVxuXHQgICAgcmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3N1Ym1pdHRlZCwgdmFsaWRhdGlvbkVycm9yLCB0YWdBdmFpbGFibGUsIGNoZWNraW5nQXZhaWxhYmlsaXR5fSA9IHRoaXMuc3RhdGVcblxuXHRcdGNvbnN0IGJ1dHRvbkNvbnRlbnQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY2hlY2tpbmdBdmFpbGFiaWxpdHkpIHtcblx0XHRcdFx0dmFyIGluQnJvd3Nlcj0odHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdFx0aWYgKGluQnJvd3Nlcikge1xuXHRcdFx0XHRcdHJldHVybiA8TG9hZGluZ0NpcmNsZSAvPlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gJ0NoZWNrIHNwbGFzaHRhZydcblx0XHRcdH0gZWxzZSBpZiAoIXRhZ0F2YWlsYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gJ0FscmVhZHkgdGFrZW4gJ1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICdDbGFpbSBzcGxhc2h0YWcnXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnV0dG9uRGlzYWJsZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAodmFsaWRhdGlvbkVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uZXJyb3InLCB2YWxpZGF0aW9uRXJyb3IpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFnQXZhaWxhYmxlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGFnQXZhaWxhYmxlMScsIHRoaXMuc3RhdGUudGFnQXZhaWxhYmxlKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZWxzZScgKVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwbGFzaHRhZ2JhclwiPlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc3BsYXNodGFnfVxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNob29zZSB5b3VyIHNwbGFzaHRhZ1wiPjwvaW5wdXQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uIFxuXHRcdFx0XHRcdGRpc2FibGVkPXtidXR0b25EaXNhYmxlZCgpfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHR7YnV0dG9uQ29udGVudCgpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHQud3JhcCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMjBweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE4cHggMjBweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAke3ZhbGlkYXRpb25FcnJvciA/ICcjZmYzMzY2JyA6IGNvbG9ycy5kYXJrfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiByZ2JhKDYzLDYzLDYzLDAuMDgpIDAgNnB4IDM0cHggMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbnB1dDo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbnB1dDpmb2N1cyB7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zcGxhc2h0YWdiYXIge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmFkZS1vdXQge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PGltZyBzcmM9XCIuL3N0YXRpYy9hcHBfSWNvbi5wbmdcIi8+XG5cdFx0PGgxPlRoZSBtb3N0IHVzZXIgZnJpZW5kbHkgd2FsbGV0IGZvciBiaXRjb2luLjwvaDE+XG5cdFx0PGgyPlNlbmQgYW5kIHJlY2VpdmUgbW9uZXkgZnJvbSB5b3VyIHNwbGFzaHRhZzwvaDI+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0fVxuXHRcdFx0aDEge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdGgyIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAzMHB4O1xuXHRcdFx0fVxuXG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=pages/index.js */',
					dynamic: [validationError ? '#ff3366' : __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].dark, __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey]
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return SplashTagBar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var Hero = function Hero() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		'div',
		{
			className: 'jsx-2697097254',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 176
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: './static/app_Icon.png', className: 'jsx-2697097254',
			__source: {
				fileName: _jsxFileName,
				lineNumber: 177
			}
		}),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'h1',
			{
				className: 'jsx-2697097254',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			},
			'The most user friendly wallet for bitcoin.'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			'h2',
			{
				className: 'jsx-2697097254',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			},
			'Send and receive money from your splashtag'
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: '2697097254',
			css: 'div.jsx-2697097254{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-2697097254{width:120px;}h1.jsx-2697097254{margin-bottom:0px;}h2.jsx-2697097254{font-weight:400;color:' + __WEBPACK_IMPORTED_MODULE_3__lib_constants__["a" /* colors */].grey + ';margin:0 0 30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9MYyxBQUdrQixBQU9ELEFBR00sQUFJRixZQU5qQixJQU9vQyxFQUpwQyxpQ0FLaUIsZ0JBQ2pCLE9BaEJ3QixtR0FDRCw4RUFDSCw2RkFDcEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbFd5Yi9Eb2N1bWVudHMvQ3JlYXRpdmUvUHJvamVjdHMvY3J5cHRvd2FsbGV0L3NwbGFzaC13YWl0bGlzdC9zcGxhc2h3YWxsZXQuaW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkxheW91dCdcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBMb2FkaW5nQ2lyY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTG9hZGluZ0NpcmNsZSdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxIZXJvLz5cblx0XHQ8U3BsYXNoVGFnQmFyIC8+XG5cdDwvTGF5b3V0PlxuKVxuXG5jbGFzcyBTcGxhc2hUYWdCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXG5cdFx0XHRzcGxhc2h0YWc6ICcnLFxuXHRcdFx0dmFsaWRhdGlvbkVycm9yOiBmYWxzZSxcblx0XHRcdHRhZ0F2YWlsYWJsZTogdHJ1ZSxcblx0XHR9XG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpXG5cdFx0dGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQoZXZlbnQpIHtcblx0XHRjb25zdCBzcGxhc2h0YWcgPSB0aGlzLnN0YXRlLnNwbGFzaHRhZ1xuXHRcdGlmICh0aGlzLnZhbGlkYXRlU3BsYXNodGFnKHNwbGFzaHRhZykpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRzdWJtaXR0ZWQ6IHRydWUsIFxuXHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGZhbHNlLFxuXHRcdFx0XHRjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2UsXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IHRydWV9KVxuXHRcdH1cblxuXHR9XG5cblx0aGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG5cdFx0Y29uc3Qgc3BsYXNodGFnID0gdGhpcy5mb3JjZUxvd2VyKGV2ZW50LnRhcmdldC52YWx1ZSlcblx0XHR0aGlzLnNldFN0YXRlKHtzcGxhc2h0YWc6IHNwbGFzaHRhZ30pXG5cdFx0Y29uc29sZS5sb2coc3BsYXNodGFnLmxlbmd0aClcblx0XHRpZiAodGhpcy52YWxpZGF0ZVNwbGFzaHRhZyhzcGxhc2h0YWcpKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9uRXJyb3I6IGZhbHNlfSlcblx0ICBcdHRoaXMuY2hlY2tJZlRhZ0F2YWlsYWJsZShzcGxhc2h0YWcpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3ZhbGlkYXRpb25FcnJvcjogdHJ1ZSwgY2hlY2tpbmdBdmFpbGFiaWxpdHk6IGZhbHNlfSlcblx0XHR9XG5cblx0XHRpZiAoc3BsYXNodGFnLmxlbmd0aCA8IDEpIHsgXG5cdFx0XHRjb25zb2xlLmxvZygnc2V0dGluZyB2YWxpZGF0aW9uZXJyb3IgdG8gZmFsc2UnKVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7dmFsaWRhdGlvbkVycm9yOiBmYWxzZX0pIFxuXHRcdH1cblx0fVxuXG5cdGZvcmNlTG93ZXIoc3BsYXNodGFnKSB7XG5cdFx0cmV0dXJuIHNwbGFzaHRhZy50b0xvd2VyQ2FzZSgpXG5cdH1cblxuXHRjaGVja0lmVGFnQXZhaWxhYmxlKHNwbGFzaHRhZykge1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWhleGEtc3BsYXNoLmNsb3VkZnVuY3Rpb25zLm5ldC9zcGxhc2h0YWdBdmFpbGFibGU/c3BsYXNodGFnPWBcblx0XHR0aGlzLnNldFN0YXRlKHtjaGVja2luZ0F2YWlsYWJpbGl0eTogdHJ1ZX0pXG5cdFx0YXhpb3MuZ2V0KGAke3VybH0ke3NwbGFzaHRhZ31gKVxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RhZ0F2YWlsYWJsZScsIHJlc3VsdC5kYXRhKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0YWdBdmFpbGFibGU6IHJlc3VsdC5kYXRhLCBjaGVja2luZ0F2YWlsYWJpbGl0eTogZmFsc2V9KVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdjaGVja2luZ0F2YWlsYWJpbGl0eScsIGVycm9yKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHt0YWdBdmFpbGFibGU6IHRydWUsIGNoZWNraW5nQXZhaWxhYmlsaXR5OiBmYWxzZX0pXG5cdFx0XHR9KVxuXG5cdH1cblxuXHR2YWxpZGF0ZVNwbGFzaHRhZyhzcGxhc2h0YWcpIHtcblx0IGlmICgvXlthLXowLTlfLV17MywxNX0kLy50ZXN0KHNwbGFzaHRhZykpIHtcblx0ICAgIHJldHVybiB0cnVlXG5cdCAgfVxuXHQgICAgcmV0dXJuIGZhbHNlXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3N1Ym1pdHRlZCwgdmFsaWRhdGlvbkVycm9yLCB0YWdBdmFpbGFibGUsIGNoZWNraW5nQXZhaWxhYmlsaXR5fSA9IHRoaXMuc3RhdGVcblxuXHRcdGNvbnN0IGJ1dHRvbkNvbnRlbnQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY2hlY2tpbmdBdmFpbGFiaWxpdHkpIHtcblx0XHRcdFx0dmFyIGluQnJvd3Nlcj0odHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIilcblx0XHRcdFx0aWYgKGluQnJvd3Nlcikge1xuXHRcdFx0XHRcdHJldHVybiA8TG9hZGluZ0NpcmNsZSAvPlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHZhbGlkYXRpb25FcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gJ0NoZWNrIHNwbGFzaHRhZydcblx0XHRcdH0gZWxzZSBpZiAoIXRhZ0F2YWlsYWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gJ0FscmVhZHkgdGFrZW4gJ1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICdDbGFpbSBzcGxhc2h0YWcnXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnV0dG9uRGlzYWJsZWQgPSAoKSA9PiB7XG5cdFx0XHRpZiAodmFsaWRhdGlvbkVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd2YWxpZGF0aW9uZXJyb3InLCB2YWxpZGF0aW9uRXJyb3IpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUudGFnQXZhaWxhYmxlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGFnQXZhaWxhYmxlMScsIHRoaXMuc3RhdGUudGFnQXZhaWxhYmxlKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZWxzZScgKVxuXG5cdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNwbGFzaHRhZ2JhclwiPlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc3BsYXNodGFnfVxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNob29zZSB5b3VyIHNwbGFzaHRhZ1wiPjwvaW5wdXQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uIFxuXHRcdFx0XHRcdGRpc2FibGVkPXtidXR0b25EaXNhYmxlZCgpfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHR7YnV0dG9uQ29udGVudCgpfVxuXHRcdFx0XHQ8L0J1dHRvbj5cblxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHQud3JhcCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAyMjBweDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE4cHggMjBweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAke3ZhbGlkYXRpb25FcnJvciA/ICcjZmYzMzY2JyA6IGNvbG9ycy5kYXJrfTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiByZ2JhKDYzLDYzLDYzLDAuMDgpIDAgNnB4IDM0cHggMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpbnB1dDo6cGxhY2Vob2xkZXIge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpbnB1dDpmb2N1cyB7XG5cdFx0XHRcdFx0XHRvdXRsaW5lOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5zcGxhc2h0YWdiYXIge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuZmFkZS1vdXQge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdFx0XHR9XG5cblxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuXG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PGltZyBzcmM9XCIuL3N0YXRpYy9hcHBfSWNvbi5wbmdcIi8+XG5cdFx0PGgxPlRoZSBtb3N0IHVzZXIgZnJpZW5kbHkgd2FsbGV0IGZvciBiaXRjb2luLjwvaDE+XG5cdFx0PGgyPlNlbmQgYW5kIHJlY2VpdmUgbW9uZXkgZnJvbSB5b3VyIHNwbGFzaHRhZzwvaDI+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRkaXYge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdH1cblxuXHRcdFx0aW1nIHtcblx0XHRcdFx0d2lkdGg6IDEyMHB4O1xuXHRcdFx0fVxuXHRcdFx0aDEge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHR9XG5cblx0XHRcdGgyIHtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Y29sb3I6ICR7Y29sb3JzLmdyZXl9O1xuXHRcdFx0XHRtYXJnaW46IDAgMCAzMHB4O1xuXHRcdFx0fVxuXG5cdFx0YH08L3N0eWxlPlxuXHQ8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=pages/index.js */'
		})
	);
};
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(SplashTagBar, 'SplashTagBar', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/pages/index.js');
	reactHotLoader.register(Hero, 'Hero', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/pages/index.js');
	reactHotLoader.register(_default, 'default', '/Users/DanielWyb/Documents/Creative/Projects/cryptowallet/splash-waitlist/splashwallet.io/pages/index.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map