import MobileNumberController from './MobileNumberController';
import AdminModel from '../Models/Admin';
import AddressModel from '../Models/'


export default class Admin
{
    CreateAdmin(firstName, lastName, username, email,password                )
                {
                    var mobileInstance = new MobileNumberController();
                    var addressInstance = new AddressController();
                    let newMobile = mobileInstance.CreatePhoneNumber(countryCd, mobileNumber);
                    let newAddress = addressInstance.CreateAddress(address1, address2, street, city, state, country);
                    let newAdmin = new AdminModel({
                        FirstName : firstName,
                        LastName : lastName,
                        Username : username,
                        password : password,
                        email : email,
                        CreatedAt : new Date(),
                        PhoneNumbers : [newMobile],
                        Addresses : [newAddress]

                    });
                }
}