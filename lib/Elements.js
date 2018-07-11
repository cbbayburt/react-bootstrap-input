'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormGroup = exports.Hint = exports.Label = exports.Select = exports.Check = exports.Password = exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputBase5 = require('./InputBase');

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