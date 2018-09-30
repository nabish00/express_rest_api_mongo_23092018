// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;
 
// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();


export default class PhoneNumberUtils {

    GetCountryCode(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return number.getCountryCode();
    };
    
     GetNationalNumber(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return number.getNationalNumber();
    
    }
    
     GetRawInput(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return number.getRawInput();
    }
     IsPossibleNumber(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isPossibleNumber(number);
    }
     IsValidNumber(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isValidNumber(number);
    }
    IsValidNumberForRegion(number, countryCd) {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isValidNumberForRegion(number, countryCd)
    
    }
    GetRegionCodeForNumber(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.getRegionCodeForNumber(number);
    }
     GetNumberType(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.getNumberType(number)
    }
     GetE164Format(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        phoneUtil.format(number, PNF.E164);
    }
     GetOriginalFormat(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.formatInOriginalFormat(number, countryCd);
    }
    
     GetNationalFormat(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.format(number, PNF.NATIONAL);
    }
    
     GetInternationalFormat(number, countryCd)  {
        const number = phoneUtil.parseAndKeepRawInput(number, countryCd);
        phoneUtil.format(number, PNF.INTERNATIONAL);
    }

}

