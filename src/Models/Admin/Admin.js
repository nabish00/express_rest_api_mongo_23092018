import mongoose from 'mongoose';

let AdminSchema = mongoose.Schema({

    firstName : {
        type: String,
        required : true

    },

    lastName : {
        type: String,
        required : true

    },
    username : {
        type: String,
        required : true

    },
    email : {
        type: String,
        required : true

    },
    password : {
        type: String,
        required : true

    },
    createdAt : {
        type: Date,
        required : true

    },
    updatedAt : {
        type: Date,
    }


});

let Admin = module.exports = mongoose.Model('Admin', AdminSchema);