import mongoose from 'mongoose';

let MobileNumberSchema = mongoose.Schema({
    CountryCode : {
        type: String
    },
    NationalNumber : {
        type: String
    },
    RawInput : {
        type: String
    },
    IsPossibleNumber : {
        type: String
    },
    IsValidNumber : {
        type: String
    },
    IsValidNumberForRegion : {
        type: String
    },
    RegionCodeForNumber : {
        type: String
    },
    NumberType : {
        type: String
    },
    E164Format : {
        type: String
    },
    OriginalFormat : {
        type: String
    },
    NationalFormat : {
        type: String
    },
    InternationalFormat : {
        type: String
    },
    IsMobileNumberVerified : {
        type: boolean,
        default: false
    }
});

let MobileNumber = module.exports = mongoose.Model('MobileNumber',MobileNumberSchema);