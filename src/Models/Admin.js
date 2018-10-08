import mongoose from 'mongoose';

import PhoneNumbers from './MobileNumber';
import Addresses from './Addresses';

let AdminSchema = mongoose.Schema({

    FirstName : {
        type: String,
        required : true,
        max: 255

    },

    LastName : {
        type: String,
        required : true,
        max: 255

    },
    Username : {
        type: String,
        required : true,
        max: 255

    },
    Email : {
        type: String,
        required : true,
        max: 255

    },
    Password : {
        type: String,
        required : true,
        max: 255

    },
    CreatedAt : {
        type: Date,
        required : true

    },
    UpdatedAt : {
        type: Date,
    },
    IsEmailVerified : {
        type: boolean,
        default: false
    },
    AccountStatus : {
        type: boolean,
        default: false
    },

    PhoneNumbers : [PhoneNumbers],
    Addresses : [Addresses]


});

let Admin = module.exports = mongoose.Model('Admin', AdminSchema);