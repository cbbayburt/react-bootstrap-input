import React from 'react';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var InputBase = function (_React$Component) {
    inherits(InputBase, _React$Component);

    function InputBase(props) {
        classCallCheck(this, InputBase);

        var _this = possibleConstructorReturn(this, (InputBase.__proto__ || Object.getPrototypeOf(InputBase)).call(this, props));

        _this.state = {
            isValid: true,
            showErrors: false
        };
        return _this;
    }

    createClass(InputBase, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (!(props.value === this.props.value && props.disabled === this.props.disabled && props.required === this.props.required)) {
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
            var hint = [this.props.hint, invalidHint && this.props.hint && React.createElement('br', null), invalidHint];
            return React.createElement(
                FormGroup,
                { isError: isError },
                this.props.label && React.createElement(Label, { name: this.props.label, className: this.props.labelClass, required: this.props.required }),
                React.createElement(
                    'div',
                    { className: this.props.divClass },
                    React.createElement('input', { className: "form-control" + (this.props.inputClass ? " " + this.props.inputClass : ""),
                        type: this.type, name: this.props.name, value: this.props.value,
                        onChange: this.setValue.bind(this), disabled: this.props.disabled,
                        onBlur: this.onBlur.bind(this), placeholder: this.props.placeholder }),
                    hint && React.createElement(Hint, { text: hint })
                )
            );
        }
    }]);
    return InputBase;
}(React.Component);

var Text = function (_InputBase) {
    inherits(Text, _InputBase);

    function Text(props) {
        classCallCheck(this, Text);

        var _this = possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

        _this.type = _this.props.type || "text";
        return _this;
    }

    return Text;
}(InputBase);

var Password = function (_InputBase2) {
    inherits(Password, _InputBase2);

    function Password(props) {
        classCallCheck(this, Password);

        var _this2 = possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this, props));

        _this2.type = "password";
        return _this2;
    }

    return Password;
}(InputBase);

var Check = function (_InputBase3) {
    inherits(Check, _InputBase3);

    function Check(props) {
        classCallCheck(this, Check);
        return possibleConstructorReturn(this, (Check.__proto__ || Object.getPrototypeOf(Check)).call(this, props));
    }

    createClass(Check, [{
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
            var hint = [this.props.hint, invalidHint && this.props.hint && React.createElement('br', null), invalidHint];
            return React.createElement(
                FormGroup,
                { isError: isError },
                React.createElement(
                    'div',
                    { className: this.props.divClass },
                    React.createElement(
                        'div',
                        { className: 'checkbox' },
                        React.createElement(
                            'label',
                            null,
                            React.createElement('input', { className: this.props.inputClass, name: this.props.name,
                                type: 'checkbox', checked: this.props.value,
                                onChange: this.setChecked.bind(this), onBlur: this.onBlur.bind(this),
                                disabled: this.props.disabled }),
                            React.createElement(
                                'span',
                                null,
                                this.props.label
                            )
                        )
                    ),
                    hint && React.createElement(Hint, { text: hint })
                )
            );
        }
    }]);
    return Check;
}(InputBase);

var Select = function (_InputBase4) {
    inherits(Select, _InputBase4);

    function Select(props) {
        classCallCheck(this, Select);
        return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));
    }

    createClass(Select, [{
        key: 'render',
        value: function render() {
            var isError = this.state.showErrors && !this.state.isValid;
            var invalidHint = isError && this.props.invalidHint;
            var hasHint = this.props.hint || invalidHint;
            var hint = [this.props.hint, invalidHint && this.props.hint && React.createElement('br', null), invalidHint];
            return React.createElement(
                FormGroup,
                { isError: isError },
                this.props.label && React.createElement(Label, { name: this.props.label, className: this.props.labelClass, required: this.props.required }),
                React.createElement(
                    'div',
                    { className: this.props.divClass },
                    React.createElement(
                        'select',
                        { className: "form-control" + (this.props.inputClass ? " " + this.props.inputClass : ""),
                            name: this.props.name, disabled: this.props.disabled, value: this.props.value,
                            onBlur: this.onBlur.bind(this), onChange: this.setValue.bind(this) },
                        this.props.children
                    ),
                    hasHint && React.createElement(Hint, { text: hint })
                )
            );
        }
    }]);
    return Select;
}(InputBase);

var Label = function Label(props) {
    return React.createElement(
        'label',
        { className: "control-label" + (props.className ? " " + props.className : "") },
        props.name,
        props.required ? React.createElement(
            'span',
            { className: 'required-form-field' },
            ' *'
        ) : undefined
    );
};

var Hint = function Hint(props) {
    return React.createElement(
        'div',
        { className: 'help-block' },
        props.text
    );
};

var FormGroup = function FormGroup(props) {
    return React.createElement(
        'div',
        { className: "form-group" + (props.isError ? " has-error" : "") },
        props.children
    );
};

var Form = function (_React$Component) {
    inherits(Form, _React$Component);

    function Form(props) {
        classCallCheck(this, Form);

        var _this = possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        _this.state = {
            model: props.model,
            isValid: true
        };
        return _this;
    }

    createClass(Form, [{
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

            var childrenCount = React.Children.count(children);

            if (childrenCount > 1) {
                return React.Children.map(children, function (child) {
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

            if (child.type && child.type.prototype !== null && child.type.prototype instanceof InputBase) {
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

                return React.cloneElement(child, newProps);
            } else {
                return React.cloneElement(child, {}, this.renderChildren(child.props && child.props.children));
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
            return React.createElement(
                'form',
                { onSubmit: this.submit.bind(this), className: this.props.className },
                React.createElement(
                    'div',
                    { className: this.props.divClass },
                    this.renderChildren(this.props.children)
                )
            );
        }
    }]);
    return Form;
}(React.Component);

var index = {
  Text: Text,
  Password: Password,
  Check: Check,
  Select: Select,
  Label: Label,
  FormGroup: FormGroup,
  Form: Form
};

export default index;
export { Text, Password, Check, Select, Label, FormGroup, Form };
