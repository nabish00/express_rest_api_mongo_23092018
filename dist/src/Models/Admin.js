'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _MobileNumber = require('./MobileNumber');

var _MobileNumber2 = _interopRequireDefault(_MobileNumber);

var _Addresses = require('./Addresses');

var _Addresses2 = _interopRequireDefault(_Addresses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminSchema = _mongoose2.default.Schema({

    firstName: {
        type: String,
        required: true,
        max: 255

    },

    lastName: {
        type: String,
        required: true,
        max: 255

    },
    username: {
        type: String,
        required: true,
        max: 255

    },
    email: {
        type: String,
        required: true,
        max: 255

    },
    password: {
        type: String,
        required: true,
        max: 255

    },
    createdAt: {
        type: Date,
        required: true

    },
    updatedAt: {
        type: Date
    },
    isEmailVerified: {
        type: boolean,
        default: false
    },
    accountStatus: {
        type: boolean,
        default: false
    },

    PhoneNumbers: [_MobileNumber2.default],
    Addresses: [_Addresses2.default]

});

var Admin = module.exports = _mongoose2.default.Model('Admin', AdminSchema);