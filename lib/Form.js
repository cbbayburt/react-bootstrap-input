'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputBase = require('./InputBase');

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