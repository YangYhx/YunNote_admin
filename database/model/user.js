let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username:String,
    password:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    avatar:{
        type:String
    }
},{versionKey:false,timestamps:{createAt:'createdTime',updataAt:'updataTime'}});
module.exports = mongoose.model('user',userSchema)