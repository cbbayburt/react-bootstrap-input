'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = exports.FormGroup = exports.Label = exports.Select = exports.Check = exports.Password = exports.Text = undefined;

var _Elements = require('./Elements');

var _Form = require('./Form');

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