import AddressModel from '../Models/Addresses';

export default class Address {

    CreateAddress(address1, address2, street, city, state, country) {
        var newAddress = new AddressModel({
            Address1 : address1,
            Address2 : address2,
            Street : street,
            City : city,
            State: state,
            Country : country
        });
        return newAddress;
    }
}