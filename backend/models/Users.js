const mongoose = require('mongoose')

const UserSchema =  new mongoose.Schema({
    username:{
        type:String,
        max:25,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:7
    },
    
},{timestamps:true})

module.exports=mongoose.model('User',UserSchema)