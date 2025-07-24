let mongoose = require("mongoose");

let product = mongoose.Schema({
    ImagePath:{
        Type:String,
        required:true
    },
    Type:{
        Type:String,
        required:true
    },
    Title:{
        Type:String,
        required:true
    },
    Price:{
        Type:String,
        required:true
    },
    Desc:{
        Type:String,
        required:true
    }
})

let productModel=mongoose.model("product",product)

module.exports=productModel;