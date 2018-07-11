'use strict';

// https://github.com/chriso/validator.js

var f = function f(fn) {
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return function (str) {
            return fn.apply(undefined, [str].concat(args));
        };
    };
};
var validations = {};

Object.keys(validator).forEach(function (v) {
    if (typeof validator[v] === 'function') {
        validations[v] = f(validator[v]);
    }
});

module.exports = validations;