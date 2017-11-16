(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-bootstrap-input"] = factory(require("react"));
	else
		root["react-bootstrap-input"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormGroup = exports.Hint = exports.Label = exports.Select = exports.Check = exports.Password = exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputBase5 = __webpack_require__(2);

var _InputBase6 = _interopRequireDefault(_InputBase5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = exports.Text = function (_InputBase) {
    _inherits(Text, _InputBase);

    function Text(props) {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

        _this.type = _this.props.type || "text";
        return _this;
    }

    return Text;
}(_InputBase6.default);

var Password = exports.Password = function (_InputBase2) {
    _inherits(Password, _InputBase2);

    function Password(props) {
        _classCallCheck(this, Password);

        var _this2 = _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this, props));

        _this2.type = "password";
        return _this2;
    }

    return Password;
}(_InputBase6.default);

var Check = exports.Check = function (_InputBase3) {
    _inherits(Check, _InputBase3);

    function Check(props) {
        _classCallCheck(this, Check);

        return _possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).call(this, props));
    }

    _createClass(Check, [{
        key: 'setChecked',
        value: function setChecked(event) {
            var name = event.target.name;
            var value = event.target.checked;
            this.props.onFormChange({
                name: name,
                value: value
            });

            if (this.props.onChange) this.props.onChange(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var isError = this.state.showErrors && !this.state.isValid;
            var invalidHint = isError && this.props.invalidHint;
            var hint = [this.props.hint, invalidHint && this.props.hint && _react2.default.createElement('br', null), invalidHint];
            return _react2.default.createElement(
                FormGroup,
                { isError: isError },
                _react2.default.createElement(
                    'div',
                    { className: this.props.divClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'checkbox' },
                        _react2.default.createElement(
                            'label',
                            null,
                            _react2.default.createElement('input', { className: this.props.inputClass, name: this.props.name,
                                type: 'checkbox', checked: this.props.value,
                                onChange: this.setChecked.bind(this), onBlur: this.onBlur.bind(this),
                                disabled: this.props.disabled }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.label
                            )
                        )
                    ),
                    hint && _react2.default.createElement(Hint, { text: hint })
                )
            );
        }
    }]);

    return Check;
}(_InputBase6.default);

var Select = exports.Select = function (_InputBase4) {
    _inherits(Select, _InputBase4);

    function Select(props) {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            var isError = this.state.showErrors && !this.state.isValid;
            var invalidHint = isError && this.props.invalidHint;
            var hasHint = this.props.hint || invalidHint;
            var hint = [this.props.hint, invalidHint && this.props.hint && _react2.default.createElement('br', null), invalidHint];
            return _react2.default.createElement(
                FormGroup,
                { isError: isError },
                this.props.label && _react2.default.createElement(Label, { name: this.props.label, className: this.props.labelClass, required: this.props.required }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.divClass },
                    _react2.default.createElement(
                        'select',
                        { className: "form-control" + (this.props.inputClass ? " " + this.props.inputClass : ""),
                            name: this.props.name, disabled: this.props.disabled, value: this.props.value,
                            onBlur: this.onBlur.bind(this), onChange: this.setValue.bind(this) },
                        this.props.children
                    ),
                    hasHint && _react2.default.createElement(Hint, { text: hint })
                )
            );
        }
    }]);

    return Select;
}(_InputBase6.default);

var Label = exports.Label = function Label(props) {
    return _react2.default.createElement(
        'label',
        { className: "control-label" + (props.className ? " " + props.className : "") },
        props.name,
        props.required ? _react2.default.createElement(
            'span',
            { className: 'required-form-field' },
            ' *'
        ) : undefined
    );
};

var Hint = exports.Hint = function Hint(props) {
    return _react2.default.createElement(
        'div',
        { className: 'help-block' },
        props.text
    );
};

var FormGroup = exports.FormGroup = function FormGroup(props) {
    return _react2.default.createElement(
        'div',
        { className: "form-group" + (props.isError ? " has-error" : "") },
        props.children
    );
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Elements = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputBase = function (_React$Component) {
    _inherits(InputBase, _React$Component);

    function InputBase(props) {
        _classCallCheck(this, InputBase);

        var _this = _possibleConstructorReturn(this, (InputBase.__proto__ || Object.getPrototypeOf(InputBase)).call(this, props));

        _this.state = {
            isValid: true,
            showErrors: false
        };
        return _this;
    }

    _createClass(InputBase, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (!(props.value === this.props.value && props.disabled === this.props.disabled)) {
                this.props.validate(this, props);
                this.setState({
                    showErrors: false
                });
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.registerInput(this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.unregisterInput(this);
        }
    }, {
        key: 'setValue',
        value: function setValue(event) {
            var name = event.target.name;
            var value = event.target.value;
            this.props.onFormChange({
                name: name,
                value: value
            });

            if (this.props.onChange) this.props.onChange(event);
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.setState({
                showErrors: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var isError = this.state.showErrors && !this.state.isValid;
            var invalidHint = isError && this.props.invalidHint;
            var hint = [this.props.hint, invalidHint && this.props.hint && _react2.default.createElement('br', null), invalidHint];
            return _react2.default.createElement(
                _Elements.FormGroup,
                { isError: isError },
                this.props.label && _react2.default.createElement(_Elements.Label, { name: this.props.label, className: this.props.labelClass, required: this.props.required }),
                _react2.default.createElement(
                    'div',
                    { className: this.props.divClass },
                    _react2.default.createElement('input', { className: "form-control" + (this.props.inputClass ? " " + this.props.inputClass : ""),
                        type: this.type, name: this.props.name, value: this.props.value,
                        onChange: this.setValue.bind(this), disabled: this.props.disabled,
                        onBlur: this.onBlur.bind(this), placeholder: this.props.placeholder }),
                    hint && _react2.default.createElement(_Elements.Hint, { text: hint })
                )
            );
        }
    }]);

    return InputBase;
}(_react2.default.Component);

exports.default = InputBase;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.FormGroup = exports.Label = exports.Select = exports.Check = exports.Password = exports.Text = undefined;

var _Elements = __webpack_require__(1);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Text: _Elements.Text,
  Password: _Elements.Password,
  Check: _Elements.Check,
  Select: _Elements.Select,
  Label: _Elements.Label,
  FormGroup: _Elements.FormGroup,
  Form: _Form2.default
};
exports.Text = _Elements.Text;
exports.Password = _Elements.Password;
exports.Check = _Elements.Check;
exports.Select = _Elements.Select;
exports.Label = _Elements.Label;
exports.FormGroup = _Elements.FormGroup;
exports.Form = _Form2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InputBase = __webpack_require__(2);

var _InputBase2 = _interopRequireDefault(_InputBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            model: props.model,
            isValid: true
        };
        return _this;
    }

    _createClass(Form, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.inputs = {};
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({
                model: props.model
            });
        }
    }, {
        key: 'registerInput',
        value: function registerInput(component) {
            if (component.props && component.props.name) {
                this.inputs[component.props.name] = component;

                var model = this.state.model;
                model[component.props.name] = component.props.value;
                this.setState({
                    model: model
                });
                this.validate(component);
            }
        }
    }, {
        key: 'unregisterInput',
        value: function unregisterInput(component) {
            if (component.props && component.props.name) {
                delete this.inputs[component.props.name];

                var model = this.state.model;
                delete model[component.props.name];
                this.setState({
                    model: model
                });
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren(children) {
            var _this2 = this;

            if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== 'object' || children == null) {
                return children;
            }

            var childrenCount = _react2.default.Children.count(children);

            if (childrenCount > 1) {
                return _react2.default.Children.map(children, function (child) {
                    return _this2.renderChild(child);
                });
            } else if (childrenCount === 1) {
                return this.renderChild(Array.isArray(children) ? children[0] : children);
            }
        }
    }, {
        key: 'renderChild',
        value: function renderChild(child) {
            if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object' || child === null) {
                return child;
            }

            if (child.type && child.type.prototype !== null && child.type.prototype instanceof _InputBase2.default) {
                var name = child.props && child.props.name;

                if (!name) {
                    throw new Error('Can not add input without "name" attribute');
                }

                var newProps = {
                    registerInput: this.registerInput.bind(this),
                    unregisterInput: this.unregisterInput.bind(this),
                    validate: this.validate.bind(this),
                    onFormChange: this.onFieldChange.bind(this),
                    invalidHint: child.props.invalidHint || child.props.required && child.props.label + " is required."
                };

                newProps.value = this.state.model[name] || "";

                return _react2.default.cloneElement(child, newProps);
            } else {
                return _react2.default.cloneElement(child, {}, this.renderChildren(child.props && child.props.children));
            }
        }
    }, {
        key: 'validate',
        value: function validate(component, propsIn) {
            var _this3 = this;

            var props = propsIn || component.props;
            var name = props.name;
            var results = [];
            var isValid = true;

            if (!props.disabled && (this.state.model[name] || props.required)) {
                if (props.required && !this.state.model[name]) {
                    isValid = false;
                } else if (props.validators) {
                    var validators = Array.isArray(props.validators) ? props.validators : [props.validators];
                    validators.forEach(function (v) {
                        results.push(Promise.resolve(v('' + (_this3.state.model[name] || ''))));
                    });
                }
            }

            Promise.all(results).then(function (result) {
                result.forEach(function (r) {
                    return isValid &= r;
                });
                component.setState({
                    isValid: isValid
                }, _this3.validateForm.bind(_this3));
            });
        }
    }, {
        key: 'validateForm',
        value: function validateForm() {
            var allValid = true;
            var inputs = this.inputs;

            Object.keys(inputs).forEach(function (name) {
                if (!inputs[name].state.isValid) {
                    allValid = false;
                }
            });

            this.setState({
                isValid: allValid
            });

            if (this.props.onValidate) {
                this.props.onValidate(allValid);
            }
        }
    }, {
        key: 'onFieldChange',
        value: function onFieldChange(item) {
            var model = this.state.model;
            model[item.name] = item.value;
            this.setState({
                model: model
            });

            if (this.props.onChange) {
                this.props.onChange(this.state.model, this.state.isValid);
            }
        }
    }, {
        key: 'submit',
        value: function submit(event) {
            event.preventDefault();
            if (this.state.isValid && this.props.onSubmit) {
                this.props.onSubmit(this.state.model, event);
            } else if (this.props.onSubmitInvalid) {
                this.props.onSubmitInvalid(this.state.model, event);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.submit.bind(this), className: this.props.className },
                _react2.default.createElement(
                    'div',
                    { className: this.props.divClass },
                    this.renderChildren(this.props.children)
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component);

exports.default = Form;

/***/ })
/******/ ]);
});