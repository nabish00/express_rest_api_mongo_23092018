'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressesSchema = _mongoose2.default.Schema({
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String
    },
    Street: {
        type: String
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String
    },
    Country: {
        type: String,
        required: true
    }

});

var Addresses = module.exports = _mongoose2.default.Model('Addresses', AddressesSchema);