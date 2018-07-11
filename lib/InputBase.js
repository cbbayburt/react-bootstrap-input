'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Elements = require('./Elements');

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