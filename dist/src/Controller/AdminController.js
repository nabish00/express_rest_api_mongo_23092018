'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MobileNumber = require('./MobileNumber');

var _MobileNumber2 = _interopRequireDefault(_MobileNumber);

var _Admin = require('../Models/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Admin = function () {
    function Admin() {
        _classCallCheck(this, Admin);
    }

    _createClass(Admin, [{
        key: 'CreateAdmin',
        value: function CreateAdmin(firstName, lastName, username, email, password, countryCode, mobileNumber, address1, address2, street, city, state, country) {
            var mobileNumber = new _MobileNumber2.default();
            var mobileNumberRawInput = mobileNumber.GetCountryCode(countryCode, mobileNumber);
            var nationalNumber = mobileNumber.GetNationalNumber(mobileNumber, countryCode);
            var rawInput = mobileNumber.GetRawInput(mobileNumber, countryCode);
            var isPossibleNumber = mobileNumber.IsPossibleNumber(mobileNumber, countryCode);
            var isValidNumber = mobileNumber.IsValidNumber(mobileNumber, countryCode);
            var isValidNumberForRegion = mobileNumber.IsValidNumberForRegion(mobileNumber, countryCode);
            var getRegionCodeForNumber = mobileNumber.GetRegionCodeForNumber(mobileNumber, countryCode);
            var getNumberType = mobileNumber.GetNumberType(mobileNumber, CountryCode);
            var getE164Format = mobileNumber.GetE164Format(mobileNumber, CountryCode);
            var getOriginalFormat = mobileNumber.GetOriginalFormat(mobileNumber, CountryCode);
            var getNationalFormat = mobileNumber.GetNationalFormat(mobileNumber, CountryCode);
            var getInternationalFormat = mobileNumber.GetInternationalFormat(mobileNumber, CountryCode);

            var newAdmin = new _Admin2.default({});
        }
    }]);

    return Admin;
}();

exports.default = Admin;