import mongoose from 'mongoose';

import PhoneNumbers from './MobileNumber';
import Addresses from './Addresses';

let AdminSchema = mongoose.Schema({

    firstName : {
        type: String,
        required : true,
        max: 255

    },

    lastName : {
        type: String,
        required : true,
        max: 255

    },
    username : {
        type: String,
        required : true,
        max: 255

    },
    email : {
        type: String,
        required : true,
        max: 255

    },
    password : {
        type: String,
        required : true,
        max: 255

    },
    createdAt : {
        type: Date,
        required : true

    },
    updatedAt : {
        type: Date,
    },
    isEmailVerified : {
        type: boolean,
        default: false
    },
    accountStatus : {
        type: boolean,
        default: false
    },

    PhoneNumbers : [PhoneNumbers],
    Addresses : [Addresses]


});

let Admin = module.exports = mongoose.Model('Admin', AdminSchema);