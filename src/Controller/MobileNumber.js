

export default class MobileNumber
{
    GetCountryCode(number, countryCd) {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return mobNumber.getCountryCode();
    };
    
     GetNationalNumber(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return mobNumber.getNationalNumber();
    
    }
    
     GetRawInput(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return mobNumber.getRawInput();
    }
     IsPossibleNumber(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isPossibleNumber(mobNumber);
    }
     IsValidNumber(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isValidNumber(mobNumber);
    }
    IsValidNumberForRegion(number, countryCd) {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.isValidNumberForRegion(mobNumber, countryCd)
    
    }
    GetRegionCodeForNumber(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.getRegionCodeForNumber(mobNumber);
    }
     GetNumberType(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.getNumberType(mobNumber)
    }
     GetE164Format(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        phoneUtil.format(mobNumber, PNF.E164);
    }
     GetOriginalFormat(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.formatInOriginalFormat(mobNumber, countryCd);
    }
    
     GetNationalFormat(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        return phoneUtil.format(numbemobNumberr, PNF.NATIONAL);
    }
    
     GetInternationalFormat(number, countryCd)  {
        const mobNumber = phoneUtil.parseAndKeepRawInput(number, countryCd);
        phoneUtil.format(mobNumber, PNF.INTERNATIONAL);
    }

}

