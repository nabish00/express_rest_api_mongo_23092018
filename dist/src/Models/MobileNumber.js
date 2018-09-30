'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobileNumberSchema = _mongoose2.default.Schema({
    CountryCode: {
        type: String
    },
    NationalNumber: {
        type: String
    },
    RawInput: {
        type: String
    },
    IsPossibleNumber: {
        type: String
    },
    IsValidNumber: {
        type: String
    },
    IsValidNumberForRegion: {
        type: String
    },
    RegionCodeForNumber: {
        type: String
    },
    NumberType: {
        type: String
    },
    E164Format: {
        type: String
    },
    OriginalFormat: {
        type: String
    },
    NationalFormat: {
        type: String
    },
    InternationalFormat: {
        type: String
    },
    isMobileNumberVerified: {
        type: boolean,
        default: false
    }
});

var MobileNumber = module.exports = _mongoose2.default.Model('MobileNumber', MobileNumberSchema);