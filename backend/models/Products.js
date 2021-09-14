const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        max:50,
        reqired:true,
    },
    description:{
        type:String,
        reqired:true,

    },

    price:{
        type:Number,
        reqired:true,

    },

    imgUrl:{
        type:String,
    }
})

module.exports=mongoose.model('Product',ProductSchema)