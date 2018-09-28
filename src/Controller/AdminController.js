import MobileNumber from './MobileNumber';

export default class Admin
{
    CreateAdmin(
                firstName, lastName, username, email,
                password, countryCode, mobileNumber,
                address1, address2, street, city, state, country
                )
                {
                    var mobileNumber = new MobileNumber();
                    var mobileNumberRawInput = mobileNumber.GetCountryCode(countryCode,mobileNumber);
                    var nationalNumber = mobileNumber.GetNationalNumber(mobileNumber,countryCode);
                    var rawInput = mobileNumber.GetRawInput(mobileNumber,countryCode);
                    var isPossibleNumber = mobileNumber.IsPossibleNumber(mobileNumber,countryCode);
                    var isValidNumber = mobileNumber.IsValidNumber(mobileNumber,countryCode);
                    var isValidNumberForRegion = mobileNumber.IsValidNumberForRegion(mobileNumber,countryCode);
                    
                    
                }
}