import mongoose from 'mongoose';

let AddressesSchema = mongoose.Schema({
    Address1: {
        type: String,
        required : true
    },
    Address2: {
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