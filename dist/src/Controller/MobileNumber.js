"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileNumber = function () {
    function MobileNumber() {
        _classCallCheck(this, MobileNumber);
    }

    _createClass(MobileNumber, [{
        key: "GetCountryCode",
        value: function GetCountryCode(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return mobNumber.getCountryCode();
        }
    }, {
        key: "GetNationalNumber",
        value: function GetNationalNumber(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return mobNumber.getNationalNumber();
        }
    }, {
        key: "GetRawInput",
        value: function GetRawInput(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return mobNumber.getRawInput();
        }
    }, {
        key: "IsPossibleNumber",
        value: function IsPossibleNumber(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.isPossibleNumber(mobNumber);
        }
    }, {
        key: "IsValidNumber",
        value: function IsValidNumber(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.isValidNumber(mobNumber);
        }
    }, {
        key: "IsValidNumberForRegion",
        value: function IsValidNumberForRegion(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.isValidNumberForRegion(mobNumber, countryCd);
        }
    }, {
        key: "GetRegionCodeForNumber",
        value: function GetRegionCodeForNumber(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.getRegionCodeForNumber(mobNumber);
        }
    }, {
        key: "GetNumberType",
        value: function GetNumberType(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.getNumberType(mobNumber);
        }
    }, {
        key: "GetE164Format",
        value: function GetE164Format(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            phoneUtil.format(mobNumber, PNF.E164);
        }
    }, {
        key: "GetOriginalFormat",
        value: function GetOriginalFormat(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.formatInOriginalFormat(mobNumber, countryCd);
        }
    }, {
        key: "GetNationalFormat",
        value: function GetNationalFormat(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            return phoneUtil.format(numbemobNumberr, PNF.NATIONAL);
        }
    }, {
        key: "GetInternationalFormat",
        value: function GetInternationalFormat(number, countryCd) {
            var mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
            phoneUtil.format(mobNumber, PNF.INTERNATIONAL);
        }
    }]);

    return MobileNumber;
}();

exports.default = MobileNumber;