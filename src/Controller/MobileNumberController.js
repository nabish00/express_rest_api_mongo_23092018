import MobileNumberModel from '../Models/MobileNumber';


export default class MobileNumber
{
    CreatePhoneNumber(pCountryCode, pMobileNumber){
        var mobileNumber = new MobileNumber();
        var countryCode = mobileNumber.GetCountryCode(pCountryCode,pMobileNumber);
        var nationalNumber = mobileNumber.GetNationalNumber(pMobileNumber,pCountryCode);
        var rawInput = mobileNumber.GetRawInput(pMobileNumber,pCountryCode);
        var isPossibleNumber = mobileNumber.IsPossibleNumber(pMobileNumber,pCountryCode);
        var isValidNumber = mobileNumber.IsValidNumber(pMobileNumber,pCountryCode);
        var isValidNumberForRegion = mobileNumber.IsValidNumberForRegion(pMobileNumber,pCountryCode);
        var getRegionCodeForNumber = mobileNumber.GetRegionCodeForNumber(pMobileNumber,pCountryCode);
        var getNumberType = mobileNumber.GetNumberType(pMobileNumber,pCountryCode);
        var getE164Format = mobileNumber.GetE164Format(pMobileNumber,pCountryCode);
        var getOriginalFormat = mobileNumber.GetOriginalFormat(pMobileNumber,pCountryCode);
        var getNationalFormat = mobileNumber.GetNationalFormat(pMobileNumber,pCountryCode);
        var getInternationalFormat = mobileNumber.GetInternationalFormat(pMobileNumber, pCountryCode);

        let newMobileNumber = new MobileNumberModel({
            CountryCode: countryCode,
            NationalNumber : nationalNumber,
            RawInput : rawInput,
            IsPossibleNumber : isPossibleNumber,
            IsValidNumber : isValidNumber,
            IsValidNumberForRegion : isValidNumberForRegion,
            RegionCodeForNumber : getRegionCodeForNumber,
            NumberType: getNumberType,
            E164Format : getE164Format,
            OriginalFormat : getOriginalFormat,
            NationalFormat : getNationalFormat,
            InternationalFormat : getInternationalFormat,
            IsMobileNumberVerified : false
        });

        return newMobileNumber;

    }
} 
