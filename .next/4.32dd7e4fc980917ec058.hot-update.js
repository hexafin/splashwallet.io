webpackHotUpdate(4,{

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

/***/ })

})
//# sourceMappingURL=4.32dd7e4fc980917ec058.hot-update.js.map