import mongoose from 'mongoose';

let AddressesSchema = mongoose.Schema({
    address1: {
        type: String,
        required : true
    },
    address2: {
        type: String
    },
    Street : {
        type: String
    },
    City: {
        type: String,
        required : true
    },
    State: {
        type: String
    },
    Country: {
        type: String,
        required: true
    }


});

let Addresses = module.exports = mongoose.Model('Addresses', AddressesSchema);