import mongoose, { Schema } from "mongoose";

const USerSchema = new Schema({
    name: String ,
    email : {
        type : String ,
        required : [true , "Email Required"],
    },


    password : {
        type : String ,
        required : [true , "Password  Required"],

    },
    about: String ,
    profileURL : String ,


    address: {
        street : String ,
        city : String ,
        country : String 
    }


});

export const User = mongoose.models.users ||
 mongoose.model("users",USerSchema)